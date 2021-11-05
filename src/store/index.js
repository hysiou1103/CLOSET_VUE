import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: JSON.parse(localStorage.getItem('carts')) || [],
    apiCarts: [],
    isLoading: false
  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    SAVESTORAGE (state, payload) {
      const cartsId = []
      state.carts.forEach(el => { cartsId.push(el.product_id) })
      if (cartsId.indexOf(payload.product_id) === -1) {
        state.carts.push(payload)
      } else {
        state.carts.forEach((item, key) => {
          if (item.product_id === payload.product_id) {
            payload.qty = parseInt(payload.qty) + parseInt(item.qty)
            state.carts.splice(key, 1)
          }
        })
        state.carts.push(payload)
      }
      localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    REMOVESTORAGE (state, payload) {
      const num = state.carts.indexOf(payload)
      state.carts.splice(num, 1)
      localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    UPDATESTORAGE (state, payload) {
      state.carts.forEach((item, key) => {
        if (item.product_id === payload.item.product_id) {
          payload.item.qty = parseInt(payload.item.qty) + parseInt(payload.num)
          state.carts.splice(key, 1)
        }
      })
      state.carts.push(payload.item)
      localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    GETCART (state, payload) {
      state.apiCarts = payload
    }
  },
  actions: {
    isLoading (context, payload) {
      context.commit('LOADING', payload)
    },
    addStorage (context, item) {
      context.commit('LOADING', true)
      context.commit('SAVESTORAGE', item)
      context.commit('LOADING', false)
    },
    deleteStorage (context, item) {
      context.commit('REMOVESTORAGE', item)
    },
    updateStorage (context, { item, num }) {
      context.commit('LOADING', true)
      context.commit('UPDATESTORAGE', { item, num })
      context.commit('LOADING', false)
    },
    addCart (context) {
      const vm = this
      const addApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      console.dir(vm.state.apiCarts, '要刪除的暫存')
      if (vm.state.apiCarts.length !== 0) { // 後端伺服器有商品資料時，全部刪除
        vm.state.apiCarts.carts.forEach((item) => {
          const delApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`
          axios.delete(delApi).then((response) => {
            if (response.data.success) {
              console.log(response.data)
            }
          })
            .catch((err) => {
              console.log(err)
            })
        })
      }
      vm.state.carts.forEach((item) => { // 從localstorage裡面加入(確保是使用者最新的選擇)
        const data = {
          product_id: item.product_id,
          qty: item.qty
        }
        axios.post(addApi, { data: data }).then((response) => {
          if (response.data.success) {
            context.dispatch('getCart')
          }
        })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    getCart (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('GETCART', response.data.data)
        }
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
