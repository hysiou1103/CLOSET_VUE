(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf503"],{"62d5":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("Alert"),e("div",{staticClass:"m-2"},[e("router-link",{staticClass:"d-block text-primary text-center p-4 h3",attrs:{to:"/"}},[t._v("ADMIN LOGIN")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.login()}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"emailHelp"},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),t._m(0),e("button",{staticClass:"btn btn-outline-secondary my-2",attrs:{type:"submit"}},[t._v("LOGIN")]),e("a",{staticClass:"fb btn mt-2",attrs:{href:"https://www.facebook.com/help",target:"_blank"}},[t._v(" Login with Facebook ")])])],1)],1)},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("small",[e("a",{attrs:{href:"https://support.google.com/accounts/answer/41078?hl=zh-Hant&co=GENIE.Platform%3DDesktop",target:"_blank"}},[t._v(" Forgot Your Passowrd? ")])])}],r=(e("99af"),e("98ab")),n={name:"Login",components:{Alert:r["a"]},data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var t=this,s=this;s.$store.dispatch("isLoading",!0);var e="".concat("https://vue-course-api.hexschool.io","/admin/signin");this.$http.post(e,s.user).then((function(t){if(t.data.success){var e=t.data.token,a=new Date(t.data.expired);document.cookie="hexToken=".concat(e,"; expires=").concat(a),s.$router.push("/admin/product")}else s.$bus.$emit("messagePush",t.data.message,"danger");s.$store.dispatch("isLoading",!1)})).catch((function(e){t.$bus.$emit("messagePush",e,"warning"),s.$store.dispatch("isLoading",!1)}))}}},i=n,u=e("2877"),c=Object(u["a"])(i,a,o,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0cf503.80f31682.js.map