import Vue from 'vue'
Vue.prototype.$bus = new Vue()
// 元件:Alert
// 用途:提示訊息
// 自定義名稱 'messsagePush'
// message: 傳入參數(提示資訊)
// status: 樣式，預設值為 warning
