<template>
  <div class="checkOut">
    <div class="container order text-primary">
      <div class="row">
        <div class="col-md-7 col p-4 m-auto">
          <OrderNav :progress="progress" />
          <button
            class="btn rounded-0 btn-sm text-primary showdata"
            type="button"
            @click="open = !open"
          >
            + 展開訂單明細
          </button>
          <div class="table-responsive orderList" :class="{ show: open }">
            <table class="table">
              <thead>
                <th>商品資訊</th>
                <th class="d-none d-md-table-cell">價格</th>
                <th>小計</th>
              </thead>
              <tbody>
                <tr v-for="(item, key) in order.products" :key="key">
                  <td class="d-flex">
                    <img :src="item.product.imageUrl" alt="productPhoto" />
                    <div class="d-inline-block pl-2 text-primary">
                      <router-link
                        :to="{
                          name: 'productDetail',
                          params: { productId: item.product_id }
                        }"
                        >{{ item.product.title }}</router-link
                      ><br />
                      {{ item.qty }} {{ item.product.unit }}
                    </div>
                  </td>
                  <td class="text-right d-none d-md-table-cell" :class="{ delete: item.total !== item.final_total }">
                    {{ item.total | currency }}元
                  </td>
                  <td class="text-right">{{ item.final_total | currency }}元</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4"
                  class="text-right bg-primary text-white h5"
                  >
                  總金額 {{ order.total | currency }}元
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="my-4">
            <h6 class="py-2">訂購人資訊</h6>
            <div class="row py-1">
              <div class="col-4">姓名</div>
              <div class="col-6">{{ order.user.name }}</div>
            </div>
            <div class="row py-1">
              <div class="col-4">電話</div>
              <div class="col-6">{{ order.user.tel }}</div>
            </div>
            <div class="row py-1">
              <div class="col-4">收件地址</div>
              <div class="col-6">{{ order.user.address }}</div>
            </div>
            <div class="row py-1">
              <div class="col-4">電子信箱</div>
              <div class="col-6">{{ order.user.email }}</div>
            </div>
            <div class="row py-1">
              <div class="col-4">訂單編號</div>
              <div class="col-6">{{ order.id }}</div>
            </div>
            <div class="row py-1">
              <div class="col-4">訂單建立時間</div>
              <div class="col-6">{{ order.create_at | date }}</div>
            </div>
          </div>
          <div class="mt-4 text-right">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click.prevent="completeOrder"
            >
              確認付款
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderNav from '@/components/OrderNav'
export default {
  name: 'CustomerCheckout',
  components: {
    OrderNav
  },
  data () {
    return {
      order: {
        products: [],
        user: {}
      },
      open: false,
      progress: 66
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.$route.params.orderId}`
      vm.$store.dispatch('isLoading', true)
      vm.$http
        .get(api)
        .then(response => {
          if (response.data.success) {
            vm.order = response.data.order
            vm.$store.dispatch('isLoading', false)
          }
        })
        .catch(err => {
          vm.$store.dispatch('isLoading', false)
          vm.$bus.$emit('messagePush', err, 'warning')
        })
    },
    completeOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.$route.params.orderId}`
      vm.$http
        .post(api)
        .then(response => {
          if (response.data.success) {
            vm.$router.push({ path: '/complete-order' })
          }
        })
        .catch(err => {
          vm.$bus.$emit('messagePush', err, 'warning')
        })
    }
  },
  created () {
    const vm = this
    vm.getOrder()
  }
}
</script>
