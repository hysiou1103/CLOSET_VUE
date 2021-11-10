<template>
  <div class="completeOrder">
    <div class="container p-4">
      <div class="row">
        <div class="col-md-5 col m-auto text-primary text-center">
          <OrderNav :progress="progress" />
          <div class="h1 py-4 text-warning">
            <i class="fas fa-gift"></i>
          </div>
          <div class="h6">
            您好，已收到您的訂單，
            <br />因疫情影響追加期保守估計7-30天 <br />(不含假日) <br />待商品備齊後將盡快幫您安排出貨！
            <br />
            <router-link to="/products" class="d-inline-block py-2">
              等待的同時，不妨繼續逛逛吧！
              <i class="far fa-hand-pointer"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderNav from '@/components/OrderNav'
export default {
  name: 'completeOrder',
  components: {
    OrderNav
  },
  data () {
    return {
      progress: 100,
      clock: 10
    }
  }
}
</script>
