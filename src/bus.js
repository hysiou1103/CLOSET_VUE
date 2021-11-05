import Vue from 'vue'
Vue.prototype.$bus = new Vue()
// 元件:Alert
// 用途:提示訊息
// 自定義名稱 'messsagePush'
// message: 傳入參數(提示資訊)
// status: 樣式，預設值為 warning

// 元件:Nav
// 用途:取得購物車列表
// 自定義名稱 'get:cart'

// 用途:加入購物車
// 自定義名稱 'add:cart'
// item: 傳入物件

// 用途:刪除購物車
// 自定義名稱 'delete:cart'
// id: 欲刪除的商品id
// update：callback

// 用途:更新購物車
// 用途:刪除購物車
// 自定義名稱 'update:cart'
// id: 欲更改數量的商品id
// item: 傳入物件(商品id,欲更改的數量)
// coupon:callback 重新套用優惠券

// 元件:Products
// 用途:自首頁點擊分類時依傳送的filter值篩選資料
// 自定義名稱 'setFilter'
// val: filter值
