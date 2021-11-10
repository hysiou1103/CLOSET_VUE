<template>
  <div class="sticky-top">
    <div class="headerWrap container-fluid px-0" :class="{ active: show }">
      <div class="header d-flex align-items-center">
        <h1 class="mt-2">
          <router-link to="/" class="d-inline-block logo">Closet</router-link>
        </h1>
        <nav class="navbar py-0">
          <ul class="pageNav pl-0 mb-1">
            <li>
              <router-link to="/" class="px-4 py-2 d-inline-block"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="px-4 py-2 d-inline-block"
                >Product</router-link
              >
            </li>
            <li>
              <router-link
                to="/customer-coupon"
                class="px-4 py-2 d-inline-block"
                >Coupon</router-link
              >
            </li>
            <li>
              <router-link to="/faq" class="px-4 py-2 d-inline-block"
                >FAQ</router-link
              >
            </li>
          </ul>
          <ul class="d-flex iconGroup mb-1">
            <li>
              <a
                href="#"
                class="cartIcon px-3 py-2 dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                <i class="fas fa-shopping-cart"></i>
                <span
                  class="cartCount"
                  :class="{ 'd-none': carts.length === 0 }"
                  >{{ carts.length }}</span
                ></a
              >
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <!-- 有商品 -->
                <table class="table table-borderless" v-if="carts.length !== 0">
                  <thead>
                    <th>名稱</th>
                    <th class="text-nowrap text-center">數量</th>
                    <th class="text-center">價格</th>
                    <th class="text-nowrap text-center">刪除</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in carts" :key="item.product_id">
                      <td class="text-truncate">
                        <router-link
                          :to="{
                            name: 'productDetail',
                            params: { productId: item.product_id },
                          }"
                          :title="item.title"
                        >
                          {{ item.title }}
                        </router-link>
                      </td>
                      <td class="text-center">{{ item.qty }}</td>
                      <td class="text-center">
                        {{ (parseInt(item.price) * item.qty) | currency }}
                      </td>
                      <td width="150">
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="deleteStorage(item)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="6">
                        <div class="text-center">
                          <router-link
                            to="/cart"
                            class="goCart btn btn-outline-warning"
                            >查看購物車</router-link
                          >
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <!-- 沒有商品 -->
                <small>
                  <router-link
                    to="/products"
                    class="nav-link empty"
                    v-if="carts.length === 0"
                  >
                    <i class="far fa-hand-point-right"></i>
                    更多精選商品，立即前往挑選
                    <i class="far fa-hand-point-left"></i>
                  </router-link>
                </small>
              </div>
            </li>
            <li>
              <router-link to="/collect" class="px-3 py-2"
                ><i class="fas fa-heart"></i
              ></router-link>
            </li>
            <li>
              <router-link to="/login" class="px-3 py-2"
                ><i class="fas fa-user"></i
              ></router-link>
            </li>
            <li>
              <a
                href="#"
                class="hamIcon d-done ml-2 mt-1"
                @click="show = !show"
              >
                <span></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav class="sideNav">
        <ul class="pl-0">
          <li>
            <router-link to="/" class="d-block px-3 py-3" @click="show = !show"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/products"
              class="d-block px-3 py-3"
              @click="show = !show"
              >Product</router-link
            >
          </li>
          <li>
            <router-link
              to="/customer-coupon"
              class="d-block px-3 py-3"
              @click="show = !show"
              >Coupon</router-link
            >
          </li>
          <li>
            <router-link
              to="/faq"
              class="d-block px-3 py-3"
              @click="show = !show"
              >FAQ</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    };
  },
  methods: {
    deleteStorage (item) {
      // 刪除購物車
      this.$store.dispatch("deleteStorage", item);
      this.$bus.$emit("messagePush", "已自購物車中移除", "warning");
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts;
    }
  }
};
</script>
