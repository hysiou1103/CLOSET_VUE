<template>
  <div class="products py-4">
    <div class="container preFadein productsWrap" >
      <div class="row">
        <nav class="col-md-3">
          <ul class="sideList pl-0" @click.prevent="getFilter">
            <li><a href="#" class="nav-link" :class="{'active':filter==='All'}">All</a></li>
            <li><a href="#" class="nav-link" :class="{'active':filter==='Tops'}">Tops</a></li>
            <li><a href="#" class="nav-link" :class="{'active':filter==='Bottoms'}">Bottoms</a></li>
            <li><a href="#" class="nav-link" :class="{'active':filter==='Dress&Jumpsuit'}">Dress&Jumpsuit</a></li>
            <li><a href="#" class="nav-link text-center" :class="{'active':filter==='Dress&Jumpsuit'}">Dress<br>&<br>Jumpsuit</a></li>
            <li><a href="#" class="nav-link" :class="{'active':filter==='Outwear'}">Outwear</a></li>
          </ul>
        </nav>
        <section class="col-md-9 products-section">
          <ul class="d-flex flex-wrap products-list" v-if="filterProducts.length!==0">
            <li v-for="item in filterProducts.slice(count, count+9)" :key="item.id">
              <router-link :to="{ name: 'productDetail', params: { productId:`${item.id}` }}">
                <div class="card">
                  <div class="img">
                    <img v-lazy="item.imageUrl" class="card-img-top" alt="product photo">
                    <button class="btn btn-outline-light">More</button>
                  </div>
                  <div class="card-body">
                    <div class="card-title text-primary d-flex justify-content-between">
                      <div class="productTitle h5">
                        {{item.title}}
                      </div>
                      <!-- 空心愛心 -->
                      <a href="#" class="far fa-heart nav-link pr-0" v-if="!favItemsId.includes(item.id)" @click.prevent="addFav(item)"></a>
                      <!-- 實心愛心 -->
                      <a href="#" class="fas fa-heart nav-link pr-0" v-else @click.prevent="removeFav(item)"></a>

                    </div>
                    <div class="card-text d-flex justify-content-between align-items-center">
                      <p class="h5 text-danger">{{item.price | currency}}元</p>
                      <div class="text-secondary" v-if="item.origin_price"><s>{{item.origin_price | currency}}元</s></div>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>

          </ul>
          <div class="d-flex justify-content-center align-items-center wrong-alert" v-else>
            <h5>很抱歉! 找不到您想要的商品</h5>
          </div>
          <pagination :pagination="pagination" @changePage="changePage" v-if="pagination.total_pages!==0"/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'Products',
  components: {
    Pagination
  },
  data () {
    return {
      allProducts: [],
      favItems: JSON.parse(localStorage.getItem('favItems')) || [],
      favItemsId: JSON.parse(localStorage.getItem('favItemsId')) || [],
      filter: '',
      pagination: {
        total_pages: 0,
        current_page: 1,
        has_next: false,
        has_pre: false
      },
      count: 0
    }
  },
  methods: {
    getProducts () { // 取得全部產品資料
      const vm = this
      vm.$store.dispatch('isLoading', true)
      const apiAll = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      this.$http.get(apiAll).then((response) => {
        if (response.data.success) {
          vm.allProducts = response.data.products.filter(item => item.is_enabled)
          document.querySelector('.productsWrap').classList.add('fadeIn')
          vm.$store.dispatch('isLoading', false)
        }
      })
        .catch((err) => {
          this.$bus.$emit('messagePush', err, 'warning')
          vm.$store.dispatch('isLoading', false)
        })
    },
    getFilter (e) { // 點擊分類時取得選單filter值，並初始化currentPage及count值，使資料從第一筆開始渲染
      const vm = this
      vm.pagination.current_page = 1
      vm.count = 0
      if (e.target.nodeName === 'A') {
        vm.filter = e.target.text
        if (vm.$route.query.cate !== vm.filter) {
          vm.$router.push(`/products?cate=${vm.filter}`)
        }
      }
    },
    getFilterFromHome (text) { // 自首頁點擊賣場連結時依傳送的filter值篩選
      if (!text) { return }
      const vm = this
      vm.filter = text
      vm.pagination.current_page = 1
      vm.count = 0
    },
    buildPageForm (len) { // 接收computed陣列長度，重新組合頁數資訊傳送給pagination
      const vm = this
      const page = vm.pagination
      page.total_pages = Math.ceil(len / 9) // 一頁僅顯示9筆資料
      if (page.total_pages > page.current_page) {
        page.has_next = true
      } else {
        page.has_next = false
      }
      if (page.current_page > 1) {
        page.has_pre = true
      } else {
        page.has_pre = false
      }
    },
    changePage (page) {
      const vm = this
      vm.count = (page - 1) * 9
      vm.pagination.current_page = page
    },
    addFav (item) { // 加入收藏
      const vm = this
      vm.favItems.push(item)
      vm.favItemsId.push(item.id)
      localStorage.setItem('favItems', JSON.stringify(vm.favItems))
      localStorage.setItem('favItemsId', JSON.stringify(vm.favItemsId))
    },
    removeFav (item) { // 移除收藏
      const vm = this
      const itemsNum = vm.favItems.indexOf(item)
      const idNum = vm.favItemsId.indexOf(item.id)
      vm.favItems.splice(itemsNum, 1)
      vm.favItemsId.splice(idNum, 1)
      localStorage.setItem('favItems', JSON.stringify(vm.favItems))
      localStorage.setItem('favItemsId', JSON.stringify(vm.favItemsId))
    }
  },
  computed: {
    filterProducts () { // 當filter值改變，依值過濾資料
      const vm = this
      let filterProducts = []
      if (vm.filter === 'All') { // 渲染全部商品
        vm.buildPageForm(vm.allProducts.length)
        return vm.allProducts
      }
      filterProducts = vm.allProducts.filter(item => item.category.match(vm.filter))
      vm.buildPageForm(filterProducts.length)
      return filterProducts
    }
  },
  created () {
    const vm = this
    vm.getProducts()
    vm.getFilterFromHome(vm.$route.query.cate)
  }
}
</script>
