(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f900c798"],{"2feb1":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container pt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-lg-9"},[a("h4",[a("span",{staticClass:"mr-1"},[a("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v("購物車明細 ")],1)]),t.cart.carts.length?a("table",{staticClass:"table table-sm mt-4"},[t._m(0),a("tbody",t._l(t.cart.carts,(function(s){return a("tr",{key:s.id},[a("td",[a("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return t.rmCartItem(s.id)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)]),a("td",{staticClass:"d-none d-sm-table-cell"},[a("img",{attrs:{src:s.product.imageUrl,width:"60"}})]),a("td",[t._v(" "+t._s(s.product.title.brand+" "+s.product.title.collection+" "+s.product.title.type)+" "),s.coupon?a("span",{staticClass:"badge badge-discount"},[t._v(t._s(s.coupon.percent+" %"))]):t._e(),a("div",{staticClass:"input-group adjust-qty d-flex d-md-none mt-2"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.buffer(s.product.id,"+")}}},[a("font-awesome-icon",{attrs:{icon:"plus"}})],1)]),a("input",{staticClass:"form-control",class:s.product.id,attrs:{type:"number",min:"1"},domProps:{value:s.qty},on:{input:function(a){return t.buffer(s.product.id)},blur:t.modify}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.buffer(s.product.id,"-")}}},[a("font-awesome-icon",{attrs:{icon:"minus"}})],1)])])]),a("td",[t._v(t._s(s.product.price))]),a("td",{staticClass:"d-none d-md-table-cell"},[a("div",{staticClass:"input-group adjust-qty"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.buffer(s.product.id,"+")}}},[a("font-awesome-icon",{attrs:{icon:"plus"}})],1)]),a("input",{staticClass:"form-control",class:s.product.id,attrs:{type:"number",min:"1"},domProps:{value:s.qty},on:{input:function(a){return t.buffer(s.product.id)},blur:t.modify}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.buffer(s.product.id,"-")}}},[a("font-awesome-icon",{attrs:{icon:"minus"}})],1)])])]),a("td",{staticClass:"text-right"},[t._v(t._s(s.final_total.toFixed(1)))])])})),0)]):t._e(),0==t.cart.carts.length?a("div",{staticClass:"alert alert-info"},[t._v(" 購物車裡還沒有東西！"),a("router-link",{staticClass:"alert-link",attrs:{to:"/products/staple-food"}},[t._v("去逛逛吧！")])],1):t._e(),a("section",{staticClass:"my-3 p-2 section-additional-items rounded"},[a("div",{staticClass:"d-flex mb-3 justify-content-between align-items-center"},[a("div",{staticClass:"h4 ml-2 mb-0"},[t._v("順便看看")]),a("div",{staticClass:"slide-control"},[a("button",{staticClass:"slide-left btn btn-outline-primary mr-2",attrs:{type:"button"}},[a("font-awesome-icon",{attrs:{icon:["fas","chevron-left"],size:"lg"}})],1),a("button",{staticClass:"slide-right btn btn-outline-primary",attrs:{type:"button"}},[a("font-awesome-icon",{attrs:{icon:["fas","chevron-right"],size:"lg"}})],1)])]),a("ul",{staticClass:"list-unstyled d-flex",attrs:{id:"additional-items"}},t._l(t.randAddItems,(function(s){return a("li",{key:s.id},[a("Additional",{staticClass:"p-2",attrs:{prod:s,"category-route":t.categoryToRoute(s.category.class)}})],1)})),0)])]),a("div",{staticClass:"col-md-4 col-lg-3"},[a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title bill-title text-center"},[t._v("應付金額")]),a("table",{staticClass:"table table-borderless bill-detail mb-0"},[a("tbody",[a("tr",[a("td",[t._v("總計")]),a("td",[t._v(t._s(t.cart.total))])]),a("tr",[a("td",[t._v("折扣")]),a("td",[t._v(" "+t._s(t.cart.total-t.cart.final_total.toFixed(0))+" ")])])]),a("tfoot",[a("tr",[a("td",[t._v("實付")]),a("td",[t._v(t._s(t.cart.final_total.toFixed(0)))])])])]),a("div",{staticClass:"form-group mb-0 mt-3"},[a("label",{attrs:{for:"coupon"}},[t._v("輸入優惠券")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.couponCode},on:{input:function(s){s.target.composing||(t.couponCode=s.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:0==t.cart.carts.length},on:{click:t.applyCoupon}},[t._v(" 送出 ")])])])])]),a("div",{staticClass:"card-footer bg-white border-top-0 pt-0"},[a("router-link",{staticClass:"btn btn-primary w-100",attrs:{tag:"button",to:"/check/customer",disabled:0==t.cart.carts.length}},[t._v(" 確定結帳 ")])],1)])])])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}}),a("th",{staticClass:"d-none d-sm-table-cell",attrs:{scope:"col"}}),a("th",{attrs:{scope:"col"}},[t._v("名稱")]),a("th",{staticClass:"no-break",attrs:{scope:"col"}},[t._v("單價")]),a("th",{staticClass:"d-none d-md-table-cell",attrs:{scope:"col"}},[t._v("#")]),a("th",{staticClass:"text-right",attrs:{scope:"col"}},[t._v("小計")])])])}],i=(a("99af"),a("4de4"),a("7db0"),a("a434"),a("1157")),n=a.n(i),r=a("c8e7"),c=a("2feb"),d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"p-add card bg-transparent position-relative border-0 h-100"},[t.prod.tags?[a("ul",{staticClass:"list-unstyled product-tags d-flex flex-column"},t._l(t.prod.tags,(function(s,e){return a("li",{key:e,staticClass:"badge mb-1",class:"badge-"+s},[t._v(" "+t._s(t.$t("tags."+s))+" ")])})),0)]:t._e(),a("router-link",{staticClass:"p-add__link bg-white rounded",attrs:{to:"/products/"+t.categoryRoute+"/"+t.prod.id}},[a("img",{staticClass:"p-add__link--img card-img-top d-block w-75 mx-auto",attrs:{src:t.prod.imageUrl,alt:""}})]),a("ul",{staticClass:"icons list-unstyled d-flex flex-column"},[a("li",[a("button",{staticClass:"btn p-0 icon-btn",attrs:{type:"button"},on:{click:function(s){return t.addToCart(t.prod.id)}}},[a("font-awesome-icon",{staticClass:"d-block",attrs:{icon:"cart-plus",size:"2x"}})],1)])]),a("div",{staticClass:"card-body px-0 pb-0 pt-1 d-flex flex-column justify-content-between"},[a("div",[a("span",{staticClass:"badge badge-dark"},[t._v(t._s(t.prod.title.brand))]),t._v(" "+t._s(t.prod.title.collection+" "+t.prod.title.type)+" ")]),a("em",{staticClass:"p-add__price"},[t._v("$"+t._s(t.prod.price))])])],2)},l=[],u={props:["prod","categoryRoute"],methods:{addToCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,e=!0;a.$store.dispatch("await",!0),a.$store.dispatch("addCartItem",{productId:t,qty:s,acc:e}).catch((function(){return a.$store.dispatch("await",!1)}))}}},p=u,m=a("2877"),b=Object(m["a"])(p,d,l,!1,null,null,null),f=b.exports,v={data:function(){return{couponCode:"",tempQty:{qty:0,productId:""}}},computed:{cart:function(){return this.$store.state.cart},randAddItems:function(){var t=this.$store.state.products.filter((function(t){return t.price<=150})),s=[];if(t.length)for(var a=0;a<4&&0!==t.length;a++){var e=Math.floor(Math.random()*t.length);s.push(t.splice(e,1)[0])}return s}},methods:{applyCoupon:function(){var t=this,s={code:t.couponCode},a="".concat("https://vue-course-api.hexschool.io","/api/").concat("mackchen","/coupon");t.$store.dispatch("await",!0),t.$http.post(a,{data:s}).then((function(s){t.$store.dispatch("addInfo",{msg:s.data.message,status:s.data.success?"info":"danger"}),s.data.success&&(t.$store.dispatch("getCart"),t.couponCode="")})).catch((function(){t.$store.dispatch("addInfo",{msg:"無法和伺服器連線 (XMLHttpRequest error)",status:"danger"})}))},rmCartItem:function(t){var s=this;s.$store.dispatch("await",!0),s.$store.dispatch("rmCartItem",t)},modify:function(){var t=this;t.$store.dispatch("await",!0),t.$store.dispatch("addCartItem",{productId:t.tempQty.productId,qty:t.tempQty.qty}).then((function(){t.tempQty.qty=0,t.tempQty.productId=""}))},buffer:function(t,s){var a=n()(".".concat(t)).filter(":visible")[0];switch(this.tempQty.productId=t,s){case"+":this.tempQty.qty=a.valueAsNumber+1,a.value=this.tempQty.qty,this.modify();break;case"-":a.valueAsNumber-1>0&&(this.tempQty.qty=a.valueAsNumber-1,a.value=this.tempQty.qty,this.modify());break;default:this.tempQty.qty=a.valueAsNumber<=0?1:a.valueAsNumber;break}},categoryToRoute:function(t){return r["a"].find((function(s){return s.category===t})).route}},watch:{"randAddItems.length":function(t,s){t>s&&this.$nextTick((function(){Object(c["a"])({container:"#additional-items",controlsContainer:".slide-control",navPosition:"bottom",responsive:{768:{items:2},992:{items:4}}})}))}},mounted:function(){this.randAddItems.length&&this.$nextTick((function(){Object(c["a"])({container:"#additional-items",controlsContainer:".slide-control",navPosition:"bottom",responsive:{768:{items:2},992:{items:4}}})}))},components:{Additional:f}},h=v,C=Object(m["a"])(h,e,o,!1,null,null,null);s["default"]=C.exports},"4de4":function(t,s,a){"use strict";var e=a("23e7"),o=a("b727").filter,i=a("1dde"),n=a("ae40"),r=i("filter"),c=n("filter");e({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-f900c798.ac83c491.js.map