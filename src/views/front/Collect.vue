<template>
  <div>
    <section class="container">
      <template v-if="len !== 0">
        <ul class="d-flex flex-wrap favItems-list autoPlay">
          <li v-for="item in favItems" :key="item.id" class="my-3">
            <div class="card">
              <div class="img">
                <router-link
                  :to="{
                    name: 'productDetail',
                    params: { productId: `${item.id}` },
                  }"
                >
                  <img
                    :src="item.imageUrl"
                    class="card-img-top"
                    alt="product photo"
                  />
                  <button type="button" class="btn btn-outline-light">
                    More
                  </button>
                </router-link>
              </div>
              <div class="card-body">
                <div
                  class="card-title text-primary d-flex justify-content-between"
                >
                  <h5>{{ item.title }}</h5>
                  <a
                    href="#"
                    class="deleteIcon"
                    @click.prevent="deleteFav(item)"
                    ><i class="fas fa-times"></i
                  ></a>
                </div>
                <div
                  class="
                    card-text
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <p class="h5 text-danger">{{ item.price | currency }}元</p>
                  <div class="text-secondary" v-if="item.origin_price">
                    <s>{{ item.origin_price | currency }}元</s>
                  </div>
                </div>
              </div>
              <div class="addcart text-center mb-3">
                <button
                  type="button"
                  class="btn btn-outline-warning"
                  @click="addStorage(item)"
                >
                  加到購物車
                </button>
              </div>
            </div>
          </li>
        </ul>
      </template>
      <!-- 未關注任何商品時顯示 -->
      <template v-else>
        <div
          class="
            emptyCollect
            d-flex
            flex-column
            justify-content-center
            align-items-center
            autoPlay
          "
        >
          <p class="text-primary my-3">小幫手發現您還沒收藏任何商品哦～</p>
          <router-link to="/products" class="btn btn-lg
            btn-outline-warning"
          >
            <i class="far fa-hand-point-right"></i>
            點我來去逛逛！
            <i class="far fa-hand-point-left"></i>
          </router-link>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  name: "Collect",
  data () {
    return {
      favItems: JSON.parse(localStorage.getItem("favItems")) || [],
      favItemsId: JSON.parse(localStorage.getItem("favItemsId")) || [],
      len: 0,
      tempProduct: {}
    };
  },
  methods: {
    addStorage (item) {
      // 加入購物車
      const vm = this;
      vm.tempProduct = {
        product_id: item.id,
        qty: 1,
        imageUrl: item.imageUrl,
        origin_price: item.origin_price,
        price: item.price,
        title: item.title,
        unit: item.unit
      };
      vm.$store.dispatch("addStorage", vm.tempProduct);
      vm.$bus.$emit("messagePush", "已加入購物車", "success");
      vm.tempProduct = {};
    },
    deleteFav (item) {
      // 從收藏中移除
      const vm = this;
      const idNum = vm.favItemsId.indexOf(item.id);
      vm.favItems.splice(idNum, 1);
      vm.favItemsId.splice(idNum, 1);
      localStorage.setItem("favItems", JSON.stringify(vm.favItems));
      localStorage.setItem("favItemsId", JSON.stringify(vm.favItemsId));
    }
  },
  created () {
    this.len = this.favItems.length;
  },
  beforeUpdate () {
    this.len = this.favItems.length;
  }
};
</script>
