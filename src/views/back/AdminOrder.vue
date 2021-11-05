<template>
    <div>
        <div class="table-responsive">
            <table class="table table-bordered table-hover my-4">
                <thead>
                    <th width="100" class="text-center">購買時間</th>
                    <th width="100" class="d-none d-md-table-cell">Email</th>
                    <th width="250">購買品項</th>
                    <th width="150" class="text-center">應付金額</th>
                    <th width="200" class="text-center">是否付款</th>
                </thead>
                <tbody>
                    <tr v-for="item in orders" :key="item.id">
                        <td class="text-center">{{item.create_at | date}}</td>
                        <td class="d-none d-md-table-cell">{{item.user.email}}</td>
                        <td>
                            <ul class="pl-0">
                                <li v-for="(order,key) in item.products" :key="key">{{ order.product.title }}</li>
                            </ul>
                        </td>
                        <td class="text-right">{{item.total | currency}}</td>
                        <td class="text-center">
                            <span v-if="item.is_paid" class="text-success">已付款</span>
                            <span v-else>未付款</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination :pagination="pagination" @changePage="getAdminOrders" />
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'Adminorder',
  data () {
    return {
      orders: [{
        products: {},
        user: {}
      }],
      pagination: {}
    }
  },
  components: {
    Pagination
  },
  methods: {
    getAdminOrders (page = 1) {
      const vm = this
      vm.$store.dispatch('isLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.orders = response.data.orders
          vm.pagination = response.data.pagination
          vm.$store.dispatch('isLoading', false)
        }
      })
        .catch((err) => {
          vm.$bus.$emit('messagePush', err, 'warning')
          vm.$store.dispatch('isLoading', false)
        })
    }
  },
  created () {
    this.getAdminOrders()
  }
}
</script>
