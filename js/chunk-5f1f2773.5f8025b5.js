(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f1f2773"],{"4ffd":function(t,e,n){t.exports=n.p+"img/logo.ce1ca5e7.png"},5649:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"couponWrap p-4"},t._l(t.coupons,(function(e){return n("div",{key:e.code,staticClass:"row frontCoupon p-2 mb-3 autoFadein"},[t._m(0,!0),n("div",{staticClass:"col-sm-9"},[n("div",{staticClass:"h5 mt-2"},[t._v(t._s(e.title))]),n("small",[t._v("使用期限：至"+t._s(e.due_date)+" 23:59前")]),n("div",{staticClass:"\n          ClicktoUse\n          d-flex\n          align-items-end\n          justify-content-between\n          pt-2\n          mt-2\n        "},[n("div",{staticClass:"h6"},[t._v("優惠券代碼："+t._s(e.code))]),n("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(n){return t.copy(e.code)}}},[t._v(" 點擊領取 "),n("i",{staticClass:"fas fa-mouse"})])])])])})),0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-3 d-flex justify-content-center align-items-center"},[s("img",{attrs:{src:n("4ffd"),width:"80px"}})])}],o={name:"CustomerCoupon",data:function(){return{coupons:[{title:"歡慶開幕! 全館8折!",code:"CLOSET2021",due_date:"2021-12-31",percent:80},{title:"防疫優惠九五折",code:"COVID95OFF",due_date:"2021-12-31",percent:95}]}},methods:{copy:function(t){var e=this,n=document.createElement("input");document.body.appendChild(n),n.value=t,n.select(),document.execCommand("copy"),document.body.removeChild(n),e.$bus.$emit("messagePush","已複製代碼至剪貼簿","success")}}},i=o,a=n("2877"),u=Object(a["a"])(i,s,c,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5f1f2773.5f8025b5.js.map