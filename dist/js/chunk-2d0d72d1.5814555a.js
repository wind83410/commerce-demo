(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d72d1"],{7662:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-3"},[s("h3",{staticClass:"text-center"},[s("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"flag"}}),t._v("訂單成立")],1),s("div",{staticClass:"container d-flex flex-column align-items-center justify-content-center"},[s("div",{staticClass:"pb-3"},[s("table",{staticClass:"table table-transparent"},[s("tbody",[s("tr",[s("td",[t._v("訂單 ID")]),s("td",[t._v(t._s(t.order.id))])]),s("tr",[s("td",[t._v("姓名")]),s("td",[t._v(t._s(t.order.user.name))])]),s("tr",[s("td",[t._v("Email")]),s("td",[t._v(t._s(t.order.user.email))])]),s("tr",[s("td",[t._v("電話")]),s("td",[t._v(t._s(t.order.user.tel))])]),s("tr",[s("td",{staticClass:"no-break"},[t._v("應付金額")]),s("td",[t._v(t._s(t.order.total))])]),s("tr",[s("td",{staticClass:"no-break"},[t._v("付款狀態")]),s("td",[t.order.is_paid?s("span",[t._v("已付")]):s("span",{staticClass:"text-danger"},[t._v("未付")])])])])]),s("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:"/products/treats/all"}},[t._v("回去逛")])],1)])])},r=[],n=(s("99af"),s("d3b7"),{data:function(){return{order:{id:"",is_paid:!1,user:{name:"",email:"",tel:"",address:""}}}},computed:{isLogined:function(){return this.$store.state.isLogined}},methods:{getOrder:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!==t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("mackchen","/order/").concat(t),s=this;return new Promise((function(t,a){s.$http.get(e).then((function(e){e.data.success?t(e.data.order):a(Error(e.data.message))}))}))}}},watch:{isLogined:function(){this.$router.push("/")}},mounted:function(){var t=this;this.$store.dispatch("await",!0),this.getOrder(this.$store.state.orderIdSent).then((function(e){t.$store.dispatch("await",!1),t.order=e}))}}),i=n,o=s("2877"),d=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d72d1.5814555a.js.map