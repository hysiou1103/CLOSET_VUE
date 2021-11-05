<template>
    <div class="cart">
        <section class="container">
            <!-- 購物車有商品 -->
            <template v-if="carts.length!== 0">
                <div class="table-responsive" >
                    <table class="table cartInfo">
                        <thead>
                            <th width="150" class="d-none d-md-table-cell">商品圖片</th>
                            <th width="300">商品名稱</th>
                            <th width="180" class="text-center d-none d-md-table-cell">數量</th>
                            <th width="110" class="text-center">小計</th>
                            <th width="110" class="text-center">移除</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in carts" :key="item.product_id">
                                <td class="d-none d-md-table-cell">
                                    <div class="cartImg">
                                        <router-link :to="{name:'productDetail',params:{productId:item.product_id}}">
                                            <img :src="item.imageUrl" alt="productPhoto">
                                        </router-link>
                                    </div>
                                </td>
                                <td>
                                    <router-link :to="{name:'productDetail',params:{productId:item.product_id}}">
                                        {{item.title}}
                                    </router-link>
                                    <!-- 768以下顯示div -->
                                    <div class="d-md-none input-group input-group-sm mt-1">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-secondary" type="button"
                                            :disabled="isLoading || item.qty === 1"
                                            @click="updateStorage(item,-1)">-</button>
                                        </div>
                                        <input type="text" class="form-control text-center" v-model="item.qty"
                                            aria-describedby="quantityInput" disabled>
                                        <div class="input-group-append" id="button-addon4">
                                            <button class="btn btn-outline-secondary" type="button" :disabled="isLoading"
                                            @click="updateStorage(item,+1)">+</button>
                                        </div>
                                    </div>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-secondary" type="button"
                                            :disabled="isLoading || item.qty === 1"
                                            @click="updateStorage(item,-1)">-</button>
                                        </div>
                                        <input type="number" class="form-control text-center" v-model="item.qty"
                                            aria-describedby="quantityInput" disabled>
                                        <div class="input-group-append" id="button-addon4">
                                            <button class="btn btn-outline-secondary" type="button"
                                            @click="updateStorage(item,+1)" :disabled="isLoading">+</button>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-right">{{item.qty*item.price | currency}}</td>
                                <td class="text-center" width="100">
                                    <button class="btn btn-outline-danger"
                                        @click="deleteStorage(item)"><i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot class="priceCheck">
                            <tr class="d-none d-md-table-row">
                                <td class="h6 align-middle text-right py-3" colspan="6">
                                    總金額 {{total| currency}}元
                                </td>
                            </tr>
                            <tr class="d-none d-md-table-row">
                                <td colspan="4" class="pt-2">
                                    <div class="form-check text-left">
                                        <input class="form-check-input" v-model="read" type="checkbox" id="principleConfirm">
                                        <label class="form-check-label" for="principleConfirm">
                                            我同意接受 <router-link to="/faq">購物須知 & 隱私權政策。</router-link>
                                        </label>
                                    </div>
                                </td>
                                <td colspan="2" class="py-2">
                                    <div class="text-right">
                                        <button to="/customer-order"
                                        class="btn btn-outline-primary" :disabled="!read"
                                        @click.prevent="addCart" :class="{'disabled':!read}">
                                            結帳去 <i class="fas fa-shopping-basket"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="d-md-none py-3">
                                <td class="h6 align-middle text-right" colspan="6">
                                    總金額 {{total | currency}}元
                                </td>
                            </tr>
                            <tr class="d-md-none">
                                <td colspan="2" class="pt-2">
                                    <div class="form-check text-left">
                                        <input class="form-check-input" v-model="read" type="checkbox" id="principleConfirm">
                                        <label class="normalcheck form-check-label" for="principleConfirm">
                                            我同意接受
                                            <router-link to="/faq" class="principle">購物須知 & 隱私權政策</router-link> 。
                                        </label>
                                        <label class="tinycheck form-check-label" for="principleConfirm">
                                            我同意接受 <br>
                                            <router-link class="principle" to="/faq">購物須知 & 隱私權政策</router-link> 。
                                        </label>
                                </div>
                                </td>
                                <td colspan="1" class="pt-2">
                                    <div class="text-right">
                                        <router-link to="/customer-order"
                                        class="btn btn-outline-primary btn-sm" :disabled="!read"
                                        @click.prevent="addCart" :class="{'disabled':!read}">
                                            結帳去 <i class="fas fa-shopping-basket d-none d-sm-inline-block"></i>
                                        </router-link>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </template>
            <!-- 無商品 -->
            <template v-else>
                <router-link to="/products" class="emptyCart nav-link h5 text-center">
                    <i class="far fa-hand-point-right"></i> 更多精選商品，快來加入購物車 <i class="far fa-hand-point-left"></i>
                </router-link>
            </template>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      updateItem: {
        product_id: '',
        qty: 0
      },
      read: false
    }
  },
  methods: {
    deleteStorage (item) { // 刪除購物車
      this.$store.dispatch('deleteStorage', item)
      this.$bus.$emit('messagePush', '已自購物車中移除', 'warning')
    },
    updateStorage (item, num) { // 若更新商品數量，觸發
      this.$store.dispatch('updateStorage', { item, num })
    },
    addCart () {
      this.$store.dispatch('addCart')
      this.$router.push('/customer-order')
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    total () {
      return this.$store.state.carts.reduce((a, b) => {
        return a + b.qty * b.price
      }, 0)
    },
    isLoading () {
      return this.$store.isLoading
    }
  }
}
</script>
