<template>
    <div class="coupon">
        <div class="text-right">
            <button class="btn btn-primary text-white my-3"
            @click="openModal('new')">新增優惠券</button>
        </div>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <th width="200">名稱</th>
                    <th width="130">優惠代碼</th>
                    <th width="170" class="text-center">折扣百分比</th>
                    <th width="100" class="text-center">到期日</th>
                    <th width="100" class="text-center">是否啟用</th>
                    <th width="200" class="text-center d-md-table-cell">編輯</th>
                </thead>
                <tbody>
                    <tr v-for="item in coupons" :key="item.id">
                        <td>{{item.title}}</td>
                        <td>{{item.code}}</td>
                        <td class="text-center">{{item.percent}}</td>
                        <td class="text-center">{{item.due_date|date}}</td>
                        <td class="text-center">
                            <span v-if="item.is_enabled" class="text-success">啟用</span>
                            <span v-else>未啟用</span>
                        </td>
                        <td class="text-center d-md-block">
                            <button class="btn btn-outline-primary btn-sm" @click="openModal('edit',item)">編輯</button>
                            <button class="btn btn-outline-danger btn-sm" @click="openModal('delete',item)">刪除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination :pagination="pagination" @changePage="getCoupons" />
        <!-- 優惠券Modal -->
        <div class="modal fade" id="couponModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="couponModalLabel">{{modalTitle}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" id="title" class="form-control"
                            placeholder="請輸入標題" v-model="tempCoupon.title">
                    </div>
                    <div class="form-group">
                        <label for="code">優惠代碼</label>
                        <input type="text" id="code" class="form-control"
                            placeholder="請輸入優惠代碼" v-model="tempCoupon.code">
                    </div>
                    <div class="form-group">
                        <label for="date">到期日</label>
                        <input type="date" class="form-control" id="date"
                        v-model="due_date">
                    </div>
                    <div class="form-group">
                        <label for="percent">折扣百分比</label>
                        <input type="text" id="percent" class="form-control"
                            placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
                    </div>
                     <div class="form-check">
                        <input type="checkbox" id="is_enabled" class="form-check-input"
                        v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0"
                        >
                        <label for="is_enabled" class="form-check-label">是否啟用</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary text-white" @click="updateCoupon">確定</button>
                </div>
                </div>
            </div>
        </div>
        <!-- 刪除Modal -->
        <div class="modal fade" id="deleteModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="deleteModalLabel">{{modalTitle}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    刪除後將無法復原，
                    是否確認刪除 {{tempCoupon.title}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary text-white" @click="deleteCoupon">確定</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import $ from 'jquery'
export default {
  name: 'Coupon',
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      modalTitle: '',
      isNew: '',
      due_date: 0
    }
  },
  components: {
    Pagination
  },
  methods: {
    getCoupons (page = 1) { // 取得優惠券列表
      const vm = this
      vm.$store.dispatch('isLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.coupons = response.data.coupons
          vm.pagination = response.data.pagination
        }
        vm.$store.dispatch('isLoading', false)
      })
        .catch((err) => {
          vm.$store.dispatch('isLoading', false)
          vm.$bus.$emit('messagePush', err, 'warning')
        })
    },
    updateCoupon () { // 新增及修改優惠券
      const vm = this
      vm.$store.dispatch('isLoading', true)
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      let httpMethod = 'post'
      if (!vm.isNew) { // 修改優惠券
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put'
      }
      vm.tempCoupon.due_date = Math.floor(new Date(vm.due_date) / 1000)
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('isLoading', false)
          $('#couponModal').modal('hide')
          vm.getCoupons()
        }
      })
        .catch((err) => {
          vm.$store.dispatch('isLoading', false)
          vm.$bus.$emit('messagePush', err, 'warning')
        })
    },
    deleteCoupon () { // 刪除優惠券
      const vm = this
      vm.$store.dispatch('isLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#deleteModal').modal('hide')
          vm.$store.dispatch('isLoading', false)
          vm.getCoupons()
        }
      })
        .catch((err) => {
          vm.$store.dispatch('isLoading', false)
          vm.$bus.$emit('messagePush', err, 'warning')
        })
    },
    openModal (status, item) {
      switch (status) {
        case 'new':
          this.tempCoupon = {}
          this.modalTitle = '新增優惠券'
          $('#couponModal').modal('show')
          this.isNew = true
          break
        case 'edit': {
          this.tempCoupon = Object.assign({}, item)
          this.modalTitle = `編輯 ${item.title}`
          $('#couponModal').modal('show')
          this.isNew = false
          const dateAndtime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T')
          this.due_date = dateAndtime[0]
          break
        }
        case 'delete':
          this.tempCoupon = Object.assign({}, item)
          this.modalTitle = '刪除優惠券'
          $('#deleteModal').modal('show')
          break
      }
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
