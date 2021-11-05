<template>
    <div class="productDetail my-5">
        <div class="container preFadein" v-if="product.imageUrl">
            <nav>
                <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/products">Products</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
                </ol>
            </nav>
            <section class="row">
                <div class="col-md-6 mr-auto">
                    <img :src="product.imageUrl" alt="productPhoto">
                </div>
                <div class="product-info col-md-6">
                    <div class="text-primary d-flex justify-content-between">
                        <div class="h3">{{product.title}}</div>
                        <a href="#" class="far fa-heart nav-link "
                            v-if="!favItemsId.includes(product.id)" @click.prevent="addFav(product)">
                        </a>
                        <a href="#" class="fas fa-heart nav-link "
                            v-else @click.prevent="removeFav(product)">
                        </a>
                    </div>
                    <div class="price d-flex justify-content-between my-2">
                        <div class="h5 text-danger">{{product.price | currency}}</div>
                        <div class="text-secondary"><s>{{product.origin_price | currency}}</s></div>
                    </div>
                    <select class="product-size custom-select mb-3"
                        v-model="size">
                        <option selected disabled>請選擇尺寸</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    <select class="product-quantity custom-select mb-3"
                        v-model="qty">
                        <option selected disabled>請選擇數量</option>
                        <option v-for="item in 10" :key="item">{{item}}</option>
                    </select>
                    <div class="addCart text-center pb-3 d-flex align-items-end">
                        <div class="h6 text-righ mr-auto ">小計:{{total| currency}}</div>
                        <button class="btn btn-outline-warning" @click="addStorage" :disabled="isLoading">加入購物車</button>
                    </div>
                    <div class="accordion reminder text-secondary my-3" id="helper">
                        <div class="card">
                            <div class="card-header bg-white p-2">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                        data-target="#sizeForm" aria-expanded="false" aria-controls="sizeForm">
                                        尺寸表
                                    </button>
                                </h2>
                            </div>
                            <div id="sizeForm" class="collapse" data-parent="#helper">
                                <div class="card-body">
                                    <template v-if="product.category === 'Tops' || product.category === 'Outwear' ">
                                        <img src="@/assets/img/top_size.png" alt="">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>尺碼</th>
                                                    <th>肩寬</th>
                                                    <th>胸寬</th>
                                                    <th>衣長</th>
                                                    <th>袖長</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>S</td>
                                                        <td>44</td>
                                                        <td>55</td>
                                                        <td>75</td>
                                                        <td>58</td>
                                                    </tr>
                                                    <tr>
                                                        <td>M</td>
                                                        <td>46</td>
                                                        <td>58</td>
                                                        <td>77</td>
                                                        <td>60</td>
                                                    </tr>
                                                    <tr>
                                                        <td>L</td>
                                                        <td>48</td>
                                                        <td>60</td>
                                                        <td>79</td>
                                                        <td>61</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </template>
                                    <template v-else-if="product.category === 'Bottoms'">
                                        <img src="@/assets/img/bottom_size.png" alt="">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>尺碼</th>
                                                    <th>腰圍</th>
                                                    <th>臀圍</th>
                                                    <th>褲長</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>S</td>
                                                        <td>31</td>
                                                        <td>48</td>
                                                        <td>104</td>
                                                    </tr>
                                                    <tr>
                                                        <td>M</td>
                                                        <td>34</td>
                                                        <td>50</td>
                                                        <td>106</td>
                                                    </tr>
                                                    <tr>
                                                        <td>L</td>
                                                        <td>36</td>
                                                        <td>53</td>
                                                        <td>107</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>尺碼</th>
                                                    <th>肩寬</th>
                                                    <th>胸寬</th>
                                                    <th>下擺寬</th>
                                                    <th>全長</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>F SIZE</td>
                                                        <td>60</td>
                                                        <td>62</td>
                                                        <td>77</td>
                                                        <td>120</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header bg-white p-2">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#washingWay" aria-expanded="false" aria-controls="washingWay">
                                    洗滌方式
                                    </button>
                                </h2>
                            </div>
                            <div id="washingWay" class="collapse" data-parent="#helper">
                                <div class="card-body">
                                    <ul>
                                        <li>深、淺色衣物請務必分開洗滌。</li>
                                        <li>所有衣物洗滌方式建議反面冷水手洗，並且請勿長時間浸泡，禁止烘乾，較能延長衣物使用壽命。</li>
                                        <li>針織類商品勿吊掛，清洗後於通風處平放陰乾，如有打結連接處，請勿修剪，將線頭反塞回衣服內裏。</li>
                                        <li>外套類商品建議送洗衣店清潔，平時建議放置通風處保持乾燥。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="similarItem">
                        <p class="text-secondary">猜您喜歡...</p>
                        <ul class="d-flex flex-wrap similarList" v-if="allProducts !== []">
                            <li v-for="item in allProducts" :key="item.id">
                                <router-link :to="{ name: 'productDetail', params: { productId:`${item.id}` }}">
                                    <div class="card">
                                        <div class="img">
                                            <router-link :to="{ name: 'productDetail', params: { productId:`${item.id}` }}">
                                                <img v-lazy="item.imageUrl" class="card-img-top" alt="product photo">
                                                <button class="btn btn-outline-light">More</button>
                                            </router-link>
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title text-primary d-flex justify-content-between mb-0">
                                                <router-link class="productTitle" :to="{ name: 'productDetail', params: { productId:`${item.id}` }}">
                                                {{item.title}}
                                                </router-link>
                                            </div>
                                            <div class="card-text d-flex justify-content-between align-items-center">
                                                <p class="h5 text-danger">{{item.price | currency}}元</p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      product: {},
      qty: 1,
      allProducts: [],
      favItems: JSON.parse(localStorage.getItem('favItems')) || [],
      favItemsId: JSON.parse(localStorage.getItem('favItemsId')) || [],
      size: 'S'
    }
  },
  methods: {
    getDetail (id) {
      const vm = this
      vm.$store.dispatch('isLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.product = response.data.product
          const apiAll = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
          this.$http.get(apiAll).then((response) => {
            if (response.data.success) {
              vm.allProducts = response.data.products.filter(item =>
                item.is_enabled && item.category === vm.product.category && item.title !== vm.product.title)
              if (vm.allProducts.length > 2) {
                vm.allProducts.splice(2)
              }
              document.querySelector('.preFadein').classList.add('fadeIn')
              vm.$store.dispatch('isLoading', false)
            }
          })
            .catch((err) => {
              vm.$store.dispatch('isLoading', false)
              this.$bus.$emit('messagePush', err, 'warning')
            })
        }
      })
        .catch((err) => {
          vm.$store.dispatch('isLoading', false)
          this.$bus.$emit('messagePush', err, 'warning')
        })
    },
    addStorage () {
      const vm = this
      const tempProduct = {
        product_id: vm.product.id,
        qty: vm.qty,
        imageUrl: vm.product.imageUrl,
        origin_price: vm.product.origin_price,
        price: vm.product.price,
        title: vm.product.title,
        unit: vm.product.unit
      }
      vm.$store.dispatch('addStorage', tempProduct)
      vm.$bus.$emit('messagePush', '已加入購物車', 'success')
    },
    addFav (product) { // 加入收藏
      const vm = this
      vm.favItems.push(product)
      vm.favItemsId.push(product.id)
      localStorage.setItem('favItems', JSON.stringify(vm.favItems))
      localStorage.setItem('favItemsId', JSON.stringify(vm.favItemsId))
    },
    removeFav (product) { // 移除收藏
      const vm = this
      const itemsNum = vm.favItems.indexOf(product)
      const idNum = vm.favItemsId.indexOf(product.id)
      vm.favItems.splice(itemsNum, 1)
      vm.favItemsId.splice(idNum, 1)
      localStorage.setItem('favItems', JSON.stringify(vm.favItems))
      localStorage.setItem('favItemsId', JSON.stringify(vm.favItemsId))
    }
  },
  computed: {
    total () {
      return this.qty * this.product.price
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  created () {
    const vm = this
    const id = vm.$route.params.productId
    vm.getDetail(id)
  }
}
</script>
