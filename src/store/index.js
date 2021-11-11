import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: JSON.parse(localStorage.getItem('carts')) || [],
    apiCarts: JSON.parse(localStorage.getItem('apiCarts')) || [],
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
    CLEARCARTSTORAGE (state) {
      state.carts.splice(0, state.carts.length);
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
      localStorage.setItem('apiCarts', JSON.stringify(state.apiCarts))
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
    async addCart (context) {
      context.commit('LOADING', true)
      const vm = this
      const addApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      if (vm.state.apiCarts.length !== 0) {
        for (let i = 0; i < vm.state.apiCarts.carts.length; i++) {
          const delApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${vm.state.apiCarts.carts[i].id}`
          await axios.delete(delApi)
        }
      }
      for (let i = 0; i < vm.state.carts.length; i++) {
        const data = {
          product_id: vm.state.carts[i].product_id,
          qty: vm.state.carts[i].qty
        }
        await axios.post(addApi, { data: data })
      }
      context.dispatch('getCart')
      context.commit('CLEARCARTSTORAGE')
      context.commit('LOADING', false)
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
