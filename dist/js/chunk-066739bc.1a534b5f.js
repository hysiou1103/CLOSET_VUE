(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-066739bc"],{"70d5":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mb-4"},[e("ul",{staticClass:"nav orderNav justify-content-around",on:{click:function(t){t.preventDefault()}}},[t._m(0),t._m(1),t._m(2)]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-warning",style:{width:t.progress+"%"},attrs:{role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("訂單建立")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("確認付款")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("訂單完成")])])}],o={name:"orderNav",props:["progress"]},n=o,i=e("2877"),l=Object(i["a"])(n,a,r,!1,null,null,null);s["a"]=l.exports},a2e7:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[a("template",{slot:"default"},[a("img",{attrs:{src:e("f8b2"),alt:"loadingPhoto"}})])],2),a("div",{staticClass:"container p-4 preFadein"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9 col m-auto"},[a("OrderNav",{attrs:{progress:t.progress}}),a("div",{staticClass:"table-responsive customerOrder"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.carts.carts,(function(s){return a("tr",{key:s.id},[a("td",{staticClass:"text-center cartImg"},[a("img",{attrs:{src:s.product.imageUrl,alt:"productPhoto"}})]),a("td",[a("router-link",{attrs:{to:"{pa}"}},[t._v(t._s(s.product.title))]),a("br"),a("span",[t._v(" "+t._s(s.qty)+" "+t._s(s.product.unit)+" ")]),s.total!==s.final_total?a("span",{staticClass:"hasCoupon"},[t._v(" "+t._s(t._f("currency")(s.total))+"元")]):t._e(),a("span",[t._v(" "+t._s(t._f("currency")(s.final_total))+"元")])],1),a("td",{staticClass:"unit"},[t._v(" "+t._s(s.qty)+" "+t._s(s.product.unit)+" ")]),s.total!==s.final_total?a("td",{staticClass:"text-right hasCoupon"},[t._v(t._s(t._f("currency")(s.total))+"元")]):t._e(),a("td",{staticClass:"text-right final_total"},[t._v(t._s(t._f("currency")(s.final_total))+"元")])])})),0),a("tfoot",{attrs:{id:"couponInput"}},[a("tr",{staticClass:"d-none d-md-table-row"},[a("td",{attrs:{colspan:"3"}},[a("div",{staticClass:"useCoupon input-group py-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code.code,expression:"code.code"}],staticClass:"form-control mr-3",attrs:{type:"text",placeholder:"請輸入優惠券代碼"},domProps:{value:t.code.code},on:{input:function(s){s.target.composing||t.$set(t.code,"code",s.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-warning rounded",on:{click:t.useCoupon}},[t._v("Use it! ")])])])]),a("td",{staticClass:"h6 align-middle text-right",attrs:{colspan:"2"}},[t._v(" 小計 "+t._s(t._f("currency")(t.carts.total))+" 元 ")])]),a("tr",{staticClass:"d-md-none"},[a("td",{attrs:{colspan:"3"}},[a("div",{staticClass:"input-group input-group-sm py-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code.code,expression:"code.code"}],staticClass:"form-control mr-2",attrs:{type:"text",placeholder:"請輸入優惠券"},domProps:{value:t.code.code},on:{input:function(s){s.target.composing||t.$set(t.code,"code",s.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-warning rounded ",on:{click:t.useCoupon}},[t._v("Use it! ")])])])]),a("td",{staticClass:"align-middle text-right",attrs:{colspan:"2"}},[t._v(" 小計 "+t._s(t._f("currency")(t.carts.total))+" ")])]),a("tr",[a("td",{staticClass:"text-right bg-primary text-white h5",attrs:{colspan:"5"}},[t._v(" 總金額 "+t._s(t._f("currency")(t.carts.final_total))+"元 ")])])])])]),a("div",{staticClass:"orderInfo"},[a("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(s){var e=s.invalid;return[a("form",{on:{submit:function(s){return s.preventDefault(),t.creatOrder.apply(null,arguments)}}},[a("h3",{staticClass:"text-center"},[t._v("填寫收件人資料")]),a("div",{staticClass:"personalInfo form-row"},[a("div",{staticClass:"form-group col-6"},[a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.errors,r=s.classes;return[a("label",{attrs:{for:"name"}},[t._v("姓名*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"姓名",id:"name"},domProps:{value:t.form.user.name},on:{input:function(s){s.target.composing||t.$set(t.form.user,"name",s.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group col-6"},[a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.errors,r=s.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:r,attrs:{type:"tel",name:"電話",id:"tel"},domProps:{value:t.form.user.tel},on:{input:function(s){s.target.composing||t.$set(t.form.user,"tel",s.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.errors,r=s.classes;return[a("label",{attrs:{for:"email"}},[t._v("電子信箱*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:r,attrs:{type:"email",name:"信箱",id:"email"},domProps:{value:t.form.user.email},on:{input:function(s){s.target.composing||t.$set(t.form.user,"email",s.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.errors,r=s.classes;return[a("label",{attrs:{for:"address"}},[t._v("地址*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"地址",id:"address"},domProps:{value:t.form.user.address},on:{input:function(s){s.target.composing||t.$set(t.form.user,"address",s.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("訂單備註")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",rows:"5"},domProps:{value:t.form.message},on:{input:function(s){s.target.composing||t.$set(t.form,"message",s.target.value)}}})]),a("small",{staticClass:"text-primary"},[t._v("※下單前請再次確認您的購買明細及配送資訊，後續無法修正訂單內容")]),a("br"),a("small",[a("a",{attrs:{href:"#couponInput"}},[t._v("※別忘了使用您的優惠券囉!")])]),a("div",{staticClass:"text-center mt-2"},[a("button",{staticClass:"btn btn-outline-primary",class:{prohibit:e},attrs:{type:"submit",disabled:e}},[t._v("確認送出訂單")])])])]}}])})],1)],1)])])],1)},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",{staticClass:"thead-light "},[e("th",{attrs:{colspan:"5"}},[t._v("請確認您的訂單並使用優惠券")])])}],o=(e("99af"),e("70d5")),n={name:"customerOrder",components:{OrderNav:o["a"]},data:function(){return{code:{code:""},form:{user:{name:"",email:"",address:"",tel:""},message:""},isLoading:!1,progress:33}},methods:{getCart:function(){var t=this;t.$store.dispatch("getCart")},creatOrder:function(){var t=this,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("storepract","/order");this.$http.post(e,{data:s.form}).then((function(t){t.data.success&&s.$router.push({name:"CustomerCheckout",params:{orderId:"".concat(t.data.orderId)}})})).catch((function(s){t.$bus.$emit("messagePush",s,"warning")}))},useCoupon:function(){var t=this,s=this;s.$store.dispatch("isLoading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("storepract","/coupon");this.$http.post(e,{data:s.code}).then((function(t){t.data.success?s.$bus.$emit("messagePush",t.data.message,"success"):s.$bus.$emit("messagePush",t.data.message,"warning"),s.$store.dispatch("isLoading",!1),s.getCart()})).catch((function(e){t.$bus.$emit("messagePush",e,"warning"),s.$store.dispatch("isLoading",!1)}))}},computed:{carts:function(){return this.$store.state.apiCarts}},created:function(){this.getCart()},mounted:function(){setTimeout((function(){document.querySelector(".preFadein").classList.add("fadeIn")}),500)}},i=n,l=e("2877"),c=Object(l["a"])(i,a,r,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-066739bc.1a534b5f.js.map