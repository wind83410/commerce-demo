(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bf9dcac"],{"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?s(t):a(r(t))}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),o="["+a+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var o,i;return a&&"function"==typeof(o=e.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(t,i),t}},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d066"),i=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),p=n("e8b5"),d=n("861d"),g=n("825a"),h=n("7b0b"),b=n("fc6a"),v=n("c04e"),m=n("5c6c"),y=n("7c73"),_=n("df75"),w=n("241c"),S=n("057f"),O=n("7418"),N=n("06cf"),x=n("9bf2"),C=n("d1e7"),I=n("9112"),P=n("6eeb"),k=n("5692"),E=n("f772"),$=n("d012"),j=n("90e3"),A=n("b622"),D=n("e538"),T=n("746f"),F=n("d44e"),M=n("69f3"),R=n("b727").forEach,B=E("hidden"),J="Symbol",V="prototype",G=A("toPrimitive"),L=M.set,U=M.getterFor(J),Y=Object[V],W=a.Symbol,X=o("JSON","stringify"),q=N.f,Q=x.f,z=S.f,H=C.f,K=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),nt=k("wks"),rt=a.QObject,at=!rt||!rt[V]||!rt[V].findChild,ot=s&&f((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=q(Y,e);r&&delete Y[e],Q(t,e,n),r&&t!==Y&&Q(Y,e,r)}:Q,it=function(t,e){var n=K[t]=y(W[V]);return L(n,{type:J,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,n){t===Y&&ct(Z,e,n),g(t);var r=v(e,!0);return g(n),l(K,r)?(n.enumerable?(l(t,B)&&t[B][r]&&(t[B][r]=!1),n=y(n,{enumerable:m(0,!1)})):(l(t,B)||Q(t,B,m(1,{})),t[B][r]=!0),ot(t,r,n)):Q(t,r,n)},ut=function(t,e){g(t);var n=b(e),r=_(n).concat(gt(n));return R(r,(function(e){s&&!lt.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=v(t,!0),n=H.call(this,e);return!(this===Y&&l(K,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(K,e)||l(this,B)&&this[B][e])||n)},pt=function(t,e){var n=b(t),r=v(e,!0);if(n!==Y||!l(K,r)||l(Z,r)){var a=q(n,r);return!a||!l(K,r)||l(n,B)&&n[B][r]||(a.enumerable=!0),a}},dt=function(t){var e=z(b(t)),n=[];return R(e,(function(t){l(K,t)||l($,t)||n.push(t)})),n},gt=function(t){var e=t===Y,n=z(e?Z:b(t)),r=[];return R(n,(function(t){!l(K,t)||e&&!l(Y,t)||r.push(K[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),n=function(t){this===Y&&n.call(Z,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),ot(this,e,m(1,t))};return s&&at&&ot(Y,e,{configurable:!0,set:n}),it(e,t)},P(W[V],"toString",(function(){return U(this).tag})),P(W,"withoutSetter",(function(t){return it(j(t),t)})),C.f=lt,x.f=ct,N.f=pt,w.f=S.f=dt,O.f=gt,D.f=function(t){return it(A(t),t)},s&&(Q(W[V],"description",{configurable:!0,get:function(){return U(this).description}}),i||P(Y,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),R(_(nt),(function(t){T(t)})),r({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:gt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),X){var ht=!c||f((function(){var t=W();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(r=e,(d(e)||void 0!==t)&&!st(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),a[1]=e,X.apply(null,a)}})}W[V][G]||I(W[V],G,W[V].valueOf),F(W,J),$[B]=!0},a71f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("table",{staticClass:"table mt-4"},[t._m(0),n("tbody",t._l(t.orders,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(t._f("msToDate")(e.create_at)))]),n("td",[t._v(t._s(e.user.email))]),n("td",t._l(e.products,(function(e){return n("div",{key:e.id,staticClass:"d-flex justify-content-between"},[n("span",[t._v(t._s(t._f("titleShow")(e.product.title)))]),n("span",[t._v(t._s(e.qty)+" "+t._s(e.product.unit))])])})),0),n("td",{staticClass:"text-right"},[t._v(t._s(t._f("formatCurrency")(e.total)))]),n("td",[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn btn-secondary dropdown-toggle",class:{"btn-success":e.is_paid,"btn-danger":!e.is_paid},attrs:{type:"button",id:"dropdown-paid-state","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e.is_paid?n("span",[t._v("已付")]):n("span",[t._v("未付")])]),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdown-paid-state"}},[e.is_paid?n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(n){return t.pay(e,!1)}}},[t._v("未付")]):n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(n){return t.pay(e,!0)}}},[t._v("已付")])])])])])})),0)]),n("Pages",{attrs:{"current-page":t.pagination.current_page,"has-pre":t.pagination.has_pre,"has-next":t.pagination.has_next,"total-pages":t.pagination.total_pages},on:{"change-page":function(e){return t.getOrders(e)}}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("購買時間")]),n("th",{attrs:{scope:"col"}},[t._v("Email")]),n("th",{attrs:{scope:"col"}},[t._v("購買品項")]),n("th",{attrs:{scope:"col"}},[t._v("應付金額")]),n("th",{attrs:{scope:"col"}},[t._v("是否付款")])])])}];n("99af"),n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n("96cf");var i=n("1da1"),s=n("0644"),c=n.n(s),u=n("c994"),f={data:function(){return{pagination:{},tempOrder:{create_at:-1,id:"",is_paid:!1,message:"",paid_date:-1,payment_method:"",products:[],total:0,user:{address:"",email:"",name:"",tel:""},num:0}}},components:{Pages:u["a"]},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.$store.dispatch("await",!0),e.$store.dispatch("getBsOrders",t).then((function(t){e.pagination=t,e.$store.dispatch("await",!1)}))},pay:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,r=c()(t),a="".concat("https://vue-course-api.hexschool.io","/api/").concat("mackchen","/admin/order/").concat(r.id);r.is_paid=e,n.$store.dispatch("await",!0),n.$http.put(a,{data:r}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.data.success){t.next=5;break}return t.next=3,n.$store.dispatch("getBsOrders");case 3:t.next=6;break;case 5:n.$store.dispatch("addInfo",{msg:e.data.message,status:"danger"});case 6:n.$store.dispatch("await",!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){n.$store.dispatch("addInfo",{msg:"更新訂單失敗",status:"danger"})}))}},computed:{orders:function(){return this.$store.state.bsOrders}},filters:{msToDate:function(t){var e=new Date(1e3*t),n=e.getMonth()+1>10?e.getMonth()+1:"0".concat(e.getMonth()+1),r=e.getDate()>10?e.getDate():"0".concat(e.getDate());return"".concat(e.getFullYear(),"-").concat(n,"-").concat(r)},formatCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"TWD"});return e.format(t)},titleShow:function(t){switch(o(t)){case"string":return t;case"object":return"".concat(t.brand," ").concat(t.collection," ").concat(t.type)}}},created:function(){this.getOrders()}},l=f,p=n("2877"),d=Object(p["a"])(l,r,a,!1,null,null,null);e["default"]=d.exports},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("6eeb"),s=n("5135"),c=n("c6b6"),u=n("7156"),f=n("c04e"),l=n("d039"),p=n("7c73"),d=n("241c").f,g=n("06cf").f,h=n("9bf2").f,b=n("58a8").trim,v="Number",m=a[v],y=m.prototype,_=c(p(y))==v,w=function(t){var e,n,r,a,o,i,s,c,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(o=u.slice(2),i=o.length,s=0;s<i;s++)if(c=o.charCodeAt(s),c<48||c>a)return NaN;return parseInt(o,r)}return+u};if(o(v,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var S,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(_?l((function(){y.valueOf.call(n)})):c(n)!=v)?u(new m(w(e)),n,O):w(e)},N=r?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;N.length>x;x++)s(m,S=N[x])&&!s(O,S)&&h(O,S,g(m,S));O.prototype=y,y.constructor=O,i(a,v,O)}},c994:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",class:{disabled:!t.hasPre}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",t.currentPage-1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.totalPages,(function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.currentPage===e}},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.$emit("change-page",e)}}},[t._v(t._s(e))])])})),n("li",{staticClass:"page-item",class:{disabled:!t.hasNext}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",t.currentPage+1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},a=[],o=(n("a9e3"),{props:{currentPage:Number,hasPre:Boolean,hasNext:Boolean,totalPages:Number}}),i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),f=o.Symbol;if(a&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(p,f);var d=p.prototype=f.prototype;d.constructor=p;var g=d.toString,h="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=g.call(t);if(i(l,t))return"";var n=h?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-6bf9dcac.db54b1b2.js.map