(function(t){function e(e){for(var n,c,o=e[0],i=e[1],u=e[2],l=0,p=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-01162f9c":"c6fe3890","chunk-0663619c":"d80ce1a8","chunk-066739bc":"beff0823","chunk-068a4158":"213baf59","chunk-2d0c1040":"8d904c01","chunk-2d0cf4c3":"190d32ae","chunk-2d0cf503":"b8becf62","chunk-2d0de01f":"d254eee1","chunk-2d209561":"5212aab5","chunk-433519de":"071c0a1b","chunk-574b1170":"b325ec88","chunk-5f1f2773":"5f8025b5","chunk-762bd5f8":"c1a5a8d3","chunk-7e8229d7":"d5123130","chunk-7e82349f":"5870e325"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=c(t);var u=new Error;s=function(e){i.onerror=i.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/CLOSET_VUE/",o.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("5530"),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),s=[],c=(a("5c0b"),a("2877")),o={},i=Object(c["a"])(o,r,s,!1,null,null,null),u=i.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b0e")),d=a("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[n("template",{slot:"default"},[n("img",{attrs:{src:a("f8b2"),alt:"loadingPhoto"}})])],2),n("WebHeader"),n("Alert"),n("router-view"),n("GoTop"),n("WebFooter")],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sticky-top"},[a("div",{staticClass:"headerWrap container-fluid px-0",class:{active:t.show}},[a("div",{staticClass:"header d-flex align-items-center"},[a("h1",{staticClass:"mt-2"},[a("router-link",{staticClass:"d-inline-block logo",attrs:{to:"/"}},[t._v("Closet")])],1),a("nav",{staticClass:"navbar py-0"},[a("ul",{staticClass:"pageNav pl-0 mb-1"},[a("li",[a("router-link",{staticClass:"px-4 py-2 d-inline-block",attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{staticClass:"px-4 py-2 d-inline-block",attrs:{to:"/products"}},[t._v("Product")])],1),a("li",[a("router-link",{staticClass:"px-4 py-2 d-inline-block",attrs:{to:"/customer-coupon"}},[t._v("Coupon")])],1),a("li",[a("router-link",{staticClass:"px-4 py-2 d-inline-block",attrs:{to:"/faq"}},[t._v("FAQ")])],1)]),a("ul",{staticClass:"d-flex iconGroup mb-1"},[a("li",[a("a",{staticClass:"cartIcon px-3 py-2 dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown","aria-haspopup":"true"}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("span",{staticClass:"cartCount",class:{"d-none":0===t.carts.length}},[t._v(t._s(t.carts.length))])]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[0!==t.carts.length?a("table",{staticClass:"table table-borderless"},[t._m(0),a("tbody",t._l(t.carts,(function(e){return a("tr",{key:e.product_id},[a("td",{staticClass:"text-truncate"},[a("router-link",{attrs:{to:{name:"productDetail",params:{productId:e.product_id}},title:e.title}},[t._v(" "+t._s(e.title)+" ")])],1),a("td",{staticClass:"text-center"},[t._v(t._s(e.qty))]),a("td",{staticClass:"text-center"},[t._v(" "+t._s(t._f("currency")(parseInt(e.price)*e.qty))+" ")]),a("td",{attrs:{width:"150"}},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.deleteStorage(e)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])})),0),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"6"}},[a("div",{staticClass:"text-center"},[a("router-link",{staticClass:"goCart btn btn-outline-warning",attrs:{to:"/cart"}},[t._v("查看購物車")])],1)])])])]):t._e(),a("small",[0===t.carts.length?a("router-link",{staticClass:"nav-link empty",attrs:{to:"/products"}},[a("i",{staticClass:"far fa-hand-point-right"}),t._v(" 更多精選商品，立即前往挑選 "),a("i",{staticClass:"far fa-hand-point-left"})]):t._e()],1)])]),a("li",[a("router-link",{staticClass:"px-3 py-2",attrs:{to:"/collect"}},[a("i",{staticClass:"fas fa-heart"})])],1),a("li",[a("router-link",{staticClass:"px-3 py-2",attrs:{to:"/login"}},[a("i",{staticClass:"fas fa-user"})])],1),a("li",[a("a",{staticClass:"hamIcon d-done ml-2 mt-1",attrs:{href:"#"},on:{click:function(e){t.show=!t.show}}},[a("span")])])])])]),a("nav",{staticClass:"sideNav"},[a("ul",{staticClass:"pl-0"},[a("li",[a("router-link",{staticClass:"d-block px-3 py-3",attrs:{to:"/"},on:{click:function(e){t.show=!t.show}}},[t._v("Home")])],1),a("li",[a("router-link",{staticClass:"d-block px-3 py-3",attrs:{to:"/products"},on:{click:function(e){t.show=!t.show}}},[t._v("Product")])],1),a("li",[a("router-link",{staticClass:"d-block px-3 py-3",attrs:{to:"/customer-coupon"},on:{click:function(e){t.show=!t.show}}},[t._v("Coupon")])],1),a("li",[a("router-link",{staticClass:"d-block px-3 py-3",attrs:{to:"/faq"},on:{click:function(e){t.show=!t.show}}},[t._v("FAQ")])],1)])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("名稱")]),a("th",{staticClass:"text-nowrap text-center"},[t._v("數量")]),a("th",{staticClass:"text-center"},[t._v("價格")]),a("th",{staticClass:"text-nowrap text-center"},[t._v("刪除")])])}],b={data:function(){return{show:!1}},methods:{deleteStorage:function(t){this.$store.dispatch("deleteStorage",t),this.$bus.$emit("messagePush","已自購物車中移除","warning")}},computed:{carts:function(){return this.$store.state.carts}}},v=b,g=Object(c["a"])(v,h,m,!1,null,null,null),C=g.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"container-fluid bg-primary"},[a("ul",{staticClass:"d-flex justify-content-center pl-0 mb-0 mr-auto"},[a("li",[a("a",{staticClass:"d-block px-2 pb-2 text-white",attrs:{href:"#",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})])]),a("li",[a("a",{staticClass:"d-block px-2 pb-2 text-white",attrs:{href:"#",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-square"})])]),a("li",[a("a",{staticClass:"d-block px-2 pb-2 text-white",attrs:{href:"#",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter-square"})])])]),a("small",{staticClass:"text-center d-block"},[t._v(" ©僅個人練習使用，不做任何商業用途 ")])])])}],x={},y=Object(c["a"])(x,k,_,!1,null,null,null),w=y.exports,O=a("98ab"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("a",{staticClass:"goTop p-4 preFadein",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.scrollTop.apply(null,arguments)}}},[a("i",{staticClass:"far fa-arrow-alt-circle-up"})])])},E=[],S=a("1157"),T=a.n(S),I={name:"GoTop",methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){T()(window).scroll((function(){var t=T()(window).scrollTop();t>100?T()(".goTop").addClass("fadeIn"):T()(".goTop").removeClass("fadeIn")}))}},j=I,L=Object(c["a"])(j,A,E,!1,null,null,null),q=L.exports,G={name:"Front",components:{WebHeader:C,Alert:O["a"],WebFooter:w,GoTop:q},computed:{isLoading:function(){return this.$store.state.isLoading}}},P=G,$=Object(c["a"])(P,p,f,!1,null,null,null),D=$.exports;l["default"].use(d["a"]);var N=[{path:"/",component:D,children:[{path:"",name:"Home",component:function(){return a.e("chunk-762bd5f8").then(a.bind(null,"ec5a"))}},{path:"products",name:"Products",component:function(){return a.e("chunk-433519de").then(a.bind(null,"ed84"))}},{path:"productDetail/:productId",name:"productDetail",component:function(){return a.e("chunk-01162f9c").then(a.bind(null,"5356"))}},{path:"cart",name:"Cart",component:function(){return a.e("chunk-2d0cf4c3").then(a.bind(null,"62b3"))}},{path:"customer-order",name:"customerOrder",component:function(){return a.e("chunk-066739bc").then(a.bind(null,"a2e7"))}},{path:"customer-checkout/:orderId",name:"CustomerCheckout",component:function(){return a.e("chunk-0663619c").then(a.bind(null,"e9fe"))}},{path:"complete-order",name:"CompleteOrder",component:function(){return a.e("chunk-068a4158").then(a.bind(null,"9a7d"))}},{path:"customer-coupon",name:"CustomerCoupon",component:function(){return a.e("chunk-5f1f2773").then(a.bind(null,"5649"))}},{path:"collect",name:"Collect",component:function(){return a.e("chunk-2d0de01f").then(a.bind(null,"848e"))}},{path:"faq",name:"FAQ",component:function(){return a.e("chunk-2d0c1040").then(a.bind(null,"43f1"))}}]},{path:"/login",name:"Login",component:function(){return a.e("chunk-2d0cf503").then(a.bind(null,"62d5"))}},{path:"/admin",name:"Admin",component:function(){return a.e("chunk-2d209561").then(a.bind(null,"a92e"))},meta:{requiresAuth:!0},children:[{path:"product",name:"AdminProduct",component:function(){return a.e("chunk-7e82349f").then(a.bind(null,"afb9"))},meta:{requiresAuth:!0}},{path:"coupon",name:"Coupon",component:function(){return a.e("chunk-574b1170").then(a.bind(null,"73a8"))},meta:{requiresAuth:!0}},{path:"order",name:"AdminOrder",component:function(){return a.e("chunk-7e8229d7").then(a.bind(null,"acf8"))},meta:{requiresAuth:!0}}]},{path:"*",redirect:"/"}],M=new d["a"]({linkExactActiveClass:"active",scrollBehavior:function(){return{x:0,y:0}},routes:N});M.beforeEach((function(t,e,a){if(t.meta.requiresAuth){var n="".concat("https://vue-course-api.hexschool.io","/api/user/check");l["default"].axios.post(n).then((function(t){t.data.success?a():a({path:"/login"})}))}else a()}));var R=M,F=(a("a9e3"),a("ac1f"),a("5319"),a("b680"),function(t){var e=Number(t)||0;return"$".concat(e.toFixed(0).replace(/./g,(function(t,e,a){var n=e&&"."!==t&&(a.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return n})))}),J=function(t){var e=new Date(1e3*t);return e.toLocaleDateString()};l["default"].prototype.$bus=new l["default"];a("4989");var V=a("bc3a"),W=a.n(V),H=a("130e"),Q=a("9062"),U=a.n(Q),z=(a("e40d"),a("caf9")),B=a("7bb1"),K=a("4c93"),X=a("60d4"),Y=a("7212"),Z=a.n(Y),tt=a("6d3b"),et=a("8343"),at=a("5dc8"),nt=a("d17a"),rt=(a("bbe3"),a("1da1")),st=(a("96cf"),a("159b"),a("a434"),a("99af"),a("2f62"));l["default"].use(st["a"]);var ct=new st["a"].Store({state:{carts:JSON.parse(localStorage.getItem("carts"))||[],apiCarts:JSON.parse(localStorage.getItem("apiCarts"))||[],isLoading:!1},mutations:{LOADING:function(t,e){t.isLoading=e},SAVESTORAGE:function(t,e){var a=[];t.carts.forEach((function(t){a.push(t.product_id)})),-1===a.indexOf(e.product_id)||t.carts.forEach((function(a,n){a.product_id===e.product_id&&(e.qty=parseInt(e.qty)+parseInt(a.qty),t.carts.splice(n,1))})),t.carts.push(e),localStorage.setItem("carts",JSON.stringify(t.carts))},REMOVESTORAGE:function(t,e){var a=t.carts.indexOf(e);t.carts.splice(a,1),localStorage.setItem("carts",JSON.stringify(t.carts))},UPDATESTORAGE:function(t,e){t.carts.forEach((function(a,n){a.product_id===e.item.product_id&&(e.item.qty=parseInt(e.item.qty)+parseInt(e.num),t.carts.splice(n,1))})),t.carts.push(e.item),localStorage.setItem("carts",JSON.stringify(t.carts))},GETCART:function(t,e){t.apiCarts=e,localStorage.setItem("apiCarts",JSON.stringify(t.apiCarts))}},actions:{isLoading:function(t,e){t.commit("LOADING",e)},addStorage:function(t,e){t.commit("LOADING",!0),t.commit("SAVESTORAGE",e),t.commit("LOADING",!1)},deleteStorage:function(t,e){t.commit("REMOVESTORAGE",e)},updateStorage:function(t,e){var a=e.item,n=e.num;t.commit("LOADING",!0),t.commit("UPDATESTORAGE",{item:a,num:n}),t.commit("LOADING",!1)},addCart:function(t){var e=this;return Object(rt["a"])(regeneratorRuntime.mark((function a(){var n,r,s,c,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.commit("LOADING",!0),n=e,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("storepract","/cart"),0===n.state.apiCarts.length){a.next=12;break}s=0;case 5:if(!(s<n.state.apiCarts.carts.length)){a.next=12;break}return c="".concat("https://vue-course-api.hexschool.io","/api/").concat("storepract","/cart/").concat(n.state.apiCarts.carts[s].id),a.next=9,W.a.delete(c);case 9:s++,a.next=5;break;case 12:o=0;case 13:if(!(o<n.state.carts.length)){a.next=20;break}return i={product_id:n.state.carts[o].product_id,qty:n.state.carts[o].qty},a.next=17,W.a.post(r,{data:i});case 17:o++,a.next=13;break;case 20:t.dispatch("getCart"),t.commit("LOADING",!1);case 22:case"end":return a.stop()}}),a)})))()},getCart:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("storepract","/cart");W.a.get(e).then((function(e){e.data.success&&t.commit("GETCART",e.data.data)})).catch((function(t){console.log(t)}))}}});l["default"].use(Z.a),tt["a"].use([et["a"],at["a"],nt["a"]]),Object(B["d"])("email",K["a"]),Object(B["d"])("required",Object(n["a"])(Object(n["a"])({},K["b"]),{},{message:"這個{_field_}欄位為必填"})),Object(B["e"])("zh_TW",X),l["default"].component("ValidationObserver",B["a"]),l["default"].component("ValidationProvider",B["b"]),Object(B["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),l["default"].use(H["a"],W.a),l["default"].use(z["a"]),l["default"].config.productionTip=!1,l["default"].component("Loading",U.a),l["default"].filter("currency",F),l["default"].filter("date",J),l["default"].component("ValidationProvider",B["b"]),new l["default"]({router:R,store:ct,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"82d5":function(t,e,a){"use strict";a("dccc")},"98ab":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,n){return a("div",{key:n,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(n)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},r=[],s=(a("a434"),a("159b"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(a,n){a.timestamp===t&&e.messages.splice(n,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("messagePush",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a)}))}}),c=s,o=(a("82d5"),a("2877")),i=Object(o["a"])(c,n,r,!1,null,null,null);e["a"]=i.exports},"9c0c":function(t,e,a){},dccc:function(t,e,a){},f8b2:function(t,e,a){t.exports=a.p+"img/loading.af2fd97c.gif"}});
//# sourceMappingURL=app.da21daac.js.map