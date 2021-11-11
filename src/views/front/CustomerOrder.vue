<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="@/assets/img/loading.gif" alt="loadingPhoto" />
      </template>
    </loading>
    <div class="container p-4 preFadein">
      <div class="row">
        <div class="col-md-9 col m-auto">
          <OrderNav :progress="progress" />
          <div class="table-responsive customerOrder">
            <table class="table">
              <thead class="thead-light">
                <th colspan="5">請確認您的訂單並使用優惠券</th>
              </thead>
              <tbody>
                <tr v-for="item in carts.carts" :key="item.id">
                  <td class="text-center cartImg">
                    <img :src="item.product.imageUrl" alt="productPhoto" />
                  </td>
                  <td>
                    <router-link to="{pa}">{{ item.product.title }}</router-link
                    ><br />
                    <span> {{ item.qty }} {{ item.product.unit }} </span>
                    <span
                      v-if="item.total !== item.final_total"
                      class="hasCoupon"
                    >
                      {{ item.total | currency }}元</span
                    >
                    <span> {{ item.final_total | currency }}元</span>
                  </td>
                  <td class="unit">{{ item.qty }} {{ item.product.unit }}</td>
                  <td
                    class="text-right hasCoupon"
                    v-if="item.total !== item.final_total"
                  >
                    {{ item.total | currency }}元
                  </td>
                  <td class="text-right final_total">
                    {{ item.final_total | currency }}元
                  </td>
                </tr>
              </tbody>
              <tfoot id="couponInput">
                <tr class="d-none d-md-table-row">
                  <td colspan="3">
                    <div class="useCoupon input-group py-2">
                      <input
                        class="form-control mr-3"
                        type="text"
                        placeholder="請輸入優惠券代碼"
                        v-model="code.code"
                      />
                      <div class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-outline-warning rounded"
                          @click="useCoupon"
                        >
                          Use it!
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="h6 align-middle text-right" colspan="2">
                    小計 {{ carts.total | currency }} 元
                  </td>
                </tr>
                <tr class="d-md-none">
                  <td colspan="3">
                    <div class="input-group input-group-sm py-2">
                      <input
                        class="form-control mr-2"
                        type="text"
                        placeholder="請輸入優惠券"
                        v-model="code.code"
                      />
                      <div class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-outline-warning rounded"
                          @click="useCoupon"
                        >
                          Use it!
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-right" colspan="2">
                    小計 {{ carts.total | currency }}
                  </td>
                </tr>
                <tr>
                  <td colspan="5" class="text-right bg-primary text-white h5">
                    總金額 {{ carts.final_total | currency }}元
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="orderInfo">
            <validation-observer v-slot="{ invalid }">
              <form @submit.prevent="creatOrder">
                <h3 class="text-center">填寫收件人資料</h3>
                <div class="personalInfo form-row">
                  <div class="form-group col-6">
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <label for="name">姓名*</label>
                      <input
                        type="text"
                        class="form-control"
                        name="姓名"
                        id="name"
                        v-model="form.user.name"
                        :class="classes"
                      />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group col-6">
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <label for="tel">電話*</label>
                      <input
                        type="tel"
                        class="form-control"
                        name="電話"
                        id="tel"
                        v-model="form.user.tel"
                        :class="classes"
                      />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="form-group">
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors, classes }"
                  >
                    <label for="email">電子信箱*</label>
                    <input
                      type="email"
                      class="form-control"
                      name="信箱"
                      id="email"
                      v-model="form.user.email"
                      :class="classes"
                    />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, classes }"
                  >
                    <label for="address">地址*</label>
                    <input
                      type="text"
                      class="form-control"
                      name="地址"
                      id="address"
                      v-model="form.user.address"
                      :class="classes"
                    />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="message">訂單備註</label>
                  <textarea
                    id="message"
                    class="form-control"
                    rows="5"
                    v-model="form.message"
                  ></textarea>
                </div>
                <small class="text-primary"
                  >※下單前請再次確認您的購買明細及配送資訊，後續無法修正訂單內容</small
                ><br />
                <small
                  ><a href="#couponInput">※別忘了使用您的優惠券囉!</a></small
                >
                <div class="text-center mt-2">
                  <button
                    type="submit"
                    class="btn btn-outline-primary"
                    :disabled="invalid"
                    :class="{ prohibit: invalid }"
                  >
                    確認送出訂單
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderNav from "@/components/OrderNav";
export default {
  name: "customerOrder",
  components: {
    OrderNav
  },
  data () {
    return {
      code: {
        code: ""
      },
      form: {
        user: {
          name: "",
          email: "",
          address: "",
          tel: ""
        },
        message: ""
      },
      isLoading: false,
      progress: 33
    };
  },
  methods: {
    getCart () {
      // 取得購物車列表
      const vm = this;
      vm.$store.dispatch("getCart");
    },
    creatOrder () {
      // 送出訂單
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      vm.$http
        .post(api, { data: vm.form })
        .then((response) => {
          if (response.data.success) {
            vm.$router.push({
              name: "CustomerCheckout",
              params: { orderId: `${response.data.orderId}` }
            });
          }
        })
        .catch((err) => {
          vm.$bus.$emit("messagePush", err, "warning");
        });
    },
    useCoupon () {
      // 使用優惠券，觸發後重新取得購物車
      const vm = this;
      vm.$store.dispatch("isLoading", true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      vm.$http
        .post(api, { data: vm.code })
        .then((response) => {
          if (response.data.success) {
            vm.$bus.$emit("messagePush", response.data.message, "success");
          } else {
            vm.$bus.$emit("messagePush", response.data.message, "warning");
          }
          vm.$store.dispatch("isLoading", false);
          vm.getCart();
        })
        .catch((err) => {
          vm.$bus.$emit("messagePush", err, "warning");
          vm.$store.dispatch("isLoading", false);
        });
    }
  },
  computed: {
    carts () {
      return this.$store.state.apiCarts;
    }
  },
  mounted () {
    setTimeout(() => {
      document.querySelector(".preFadein").classList.add("fadeIn");
    }, 500);
  }
};
</script>
