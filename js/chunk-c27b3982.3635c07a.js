(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c27b3982"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?c(t):o(n(t))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),a=r("d039"),i=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return s}));r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function i(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||a(t)||i(t)||c()}},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),a=r("7dd0"),i="String Iterator",c=o.set,s=o.getterFor(i);a(String,"String",(function(t){c(this,{type:i,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"45fc":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").some,a=r("a640"),i=r("ae40"),c=a("some"),s=i("some");n({target:"Array",proto:!0,forced:!c||!s},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,a=r("1dde"),i=r("ae40"),c=a("filter"),s=i("filter");n({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,d,p,g=o(t),v="function"==typeof this?this:Array,y=arguments.length,b=y>1?arguments[1]:void 0,h=void 0!==b,m=u(g),_=0;if(h&&(b=n(b,y>2?arguments[2]:void 0,2)),void 0==m||v==Array&&i(m))for(e=c(g.length),r=new v(e);e>_;_++)p=h?b(g[_],_):g[_],s(r,_,p);else for(f=m.call(g),d=f.next,r=new v;!(l=d.call(f)).done;_++)p=h?a(f,b,[l.value,_],!0):l.value,s(r,_,p);return r.length=_,r}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},"81b1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 col-lg-3"},[r("div",{staticClass:"mb-3"},[r("nav",{staticClass:"list-group"},[r("a",{staticClass:"list-group-item list-group-item-action",class:{active:"all"===t.type},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.type="all",t.focusBrand="all"}}},[t._v("全部分類商品")]),t._l(t.subclassList,(function(e,n){return r("a",{key:n,staticClass:"list-group-item list-group-item-action",class:{active:t.type===e},attrs:{href:"#"},on:{click:function(r){r.preventDefault(),t.type=e,t.focusBrand="all"}}},[t._v(t._s(e))])}))],2),r("nav",{staticClass:"mt-3"},[r("label",{staticClass:"h4",attrs:{for:"brands"}},[t._v("商品品牌")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.focusBrand,expression:"focusBrand"}],staticClass:"form-control",attrs:{name:"brands",id:"brands"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.focusBrand=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("請選擇品牌")]),r("option",{attrs:{value:"all"}},[t._v("所有品牌")]),t._l(t.brandList,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),r("nav",{staticClass:"mt-3"},[r("div",{staticClass:"h4"},[t._v("標籤")]),r("div",{staticClass:"btn-group-toggle"},t._l(t.tagList,(function(e,n){return r("label",{key:n,staticClass:"btn btn-sm btn-outline-primary mx-1",class:{active:t.isChecked(e)}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.checkedTags)?t._i(t.checkedTags,e)>-1:t.checkedTags},on:{change:function(r){var n=t.checkedTags,o=r.target,a=!!o.checked;if(Array.isArray(n)){var i=e,c=t._i(n,i);o.checked?c<0&&(t.checkedTags=n.concat([i])):c>-1&&(t.checkedTags=n.slice(0,c).concat(n.slice(c+1)))}else t.checkedTags=a}}}),r("font-awesome-icon",{attrs:{icon:"tags"}}),t._v(" "+t._s(t.$t("tags."+e))+" ")],1)})),0)])])]),r("div",{staticClass:"col-md-8 col-lg-9"},[r("section",{staticClass:"row no-gutters"},t._l(t.categorize,(function(e){return r("div",{key:e.id,staticClass:"col-lg-4 col-md-6 d-flex"},[r("ProductCard",{staticClass:"m-2",attrs:{prod:e,"category-route":t.categoryToRoute(e.category.class)}})],1)})),0)])])])},o=[],a=(r("4de4"),r("7db0"),r("c740"),r("4160"),r("45fc"),r("159b"),r("2909")),i=r("c8e7"),c=r("e915"),s={data:function(){return{focusBrand:"all",type:"all",checkedTags:[]}},methods:{routeToCategory:function(t){return i["a"].find((function(e){return e.route===t})).category},categoryToRoute:function(t){return i["a"].find((function(e){return e.category===t})).route},haveTag:function(t){return!this.checkedTags.length||!!t&&-1!==this.checkedTags.findIndex((function(e){return t.find((function(t){return t===e}))}))},isChecked:function(t){return this.checkedTags.some((function(e){return e===t}))}},computed:{enabledProducts:function(){var t=this.routeToCategory(this.$route.params.category);return this.$store.state.products.filter((function(e){return e.category.class===t&&parseInt(e.is_enabled)}))},categorize:function(){var t=this;return t.enabledProducts.filter((function(e){return t.haveTag(e.tags)&&("all"===t.type||e.category.type===t.type)&&("all"===t.focusBrand||t.focusBrand===e.title.brand)}))},brandList:function(){var t=[],e=this;return e.enabledProducts.forEach((function(r){"all"!==e.type&&e.type!==r.category.type||t.length&&t.some((function(t){return t===r.title.brand}))||t.push(r.title.brand)})),t},subclassList:function(){var t=[];return this.enabledProducts.forEach((function(e){t.length&&t.some((function(t){return t===e.category.type}))||t.push(e.category.type)})),t},tagList:function(){var t=[];return this.enabledProducts.forEach((function(e){e.tags&&(t.length?e.tags.forEach((function(e){t.some((function(t){return t===e}))||t.push(e)})):t.push.apply(t,Object(a["a"])(e.tags)))})),t}},watch:{$route:function(){this.focusBrand=this.type="all",this.checkedTags=[]}},components:{ProductCard:c["a"]}},u=s,l=r("2877"),f=Object(l["a"])(u,n,o,!1,null,null,null);e["default"]=f.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),p=r("861d"),g=r("825a"),v=r("7b0b"),y=r("fc6a"),b=r("c04e"),h=r("5c6c"),m=r("7c73"),_=r("df75"),C=r("241c"),w=r("057f"),S=r("7418"),k=r("06cf"),x=r("9bf2"),O=r("d1e7"),T=r("9112"),A=r("6eeb"),j=r("5692"),P=r("f772"),E=r("d012"),$=r("90e3"),B=r("b622"),I=r("e538"),R=r("746f"),N=r("d44e"),L=r("69f3"),F=r("b727").forEach,J=P("hidden"),z="Symbol",D="prototype",M=B("toPrimitive"),U=L.set,q=L.getterFor(z),Q=Object[D],W=o.Symbol,G=a("JSON","stringify"),H=k.f,K=x.f,V=w.f,X=O.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),rt=j("wks"),nt=o.QObject,ot=!nt||!nt[D]||!nt[D].findChild,at=c&&l((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(Q,e);n&&delete Q[e],K(t,e,r),n&&t!==Q&&K(Q,e,n)}:K,it=function(t,e){var r=Y[t]=m(W[D]);return U(r,{type:z,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},st=function(t,e,r){t===Q&&st(Z,e,r),g(t);var n=b(e,!0);return g(r),f(Y,n)?(r.enumerable?(f(t,J)&&t[J][n]&&(t[J][n]=!1),r=m(r,{enumerable:h(0,!1)})):(f(t,J)||K(t,J,h(1,{})),t[J][n]=!0),at(t,n,r)):K(t,n,r)},ut=function(t,e){g(t);var r=y(e),n=_(r).concat(gt(r));return F(n,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?m(t):ut(m(t),e)},ft=function(t){var e=b(t,!0),r=X.call(this,e);return!(this===Q&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,J)&&this[J][e])||r)},dt=function(t,e){var r=y(t),n=b(e,!0);if(r!==Q||!f(Y,n)||f(Z,n)){var o=H(r,n);return!o||!f(Y,n)||f(r,J)&&r[J][n]||(o.enumerable=!0),o}},pt=function(t){var e=V(y(t)),r=[];return F(e,(function(t){f(Y,t)||f(E,t)||r.push(t)})),r},gt=function(t){var e=t===Q,r=V(e?Z:y(t)),n=[];return F(r,(function(t){!f(Y,t)||e&&!f(Q,t)||n.push(Y[t])})),n};if(s||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),r=function(t){this===Q&&r.call(Z,t),f(this,J)&&f(this[J],e)&&(this[J][e]=!1),at(this,e,h(1,t))};return c&&ot&&at(Q,e,{configurable:!0,set:r}),it(e,t)},A(W[D],"toString",(function(){return q(this).tag})),A(W,"withoutSetter",(function(t){return it($(t),t)})),O.f=ft,x.f=st,k.f=dt,C.f=w.f=pt,S.f=gt,I.f=function(t){return it(B(t),t)},c&&(K(W[D],"description",{configurable:!0,get:function(){return q(this).description}}),i||A(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),F(_(rt),(function(t){R(t)})),n({target:z,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),G){var vt=!s||l((function(){var t=W();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,G.apply(null,o)}})}W[D][M]||T(W[D],M,W[D].valueOf),N(W,z),E[J]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},c8e7:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=[{category:"貓主食",route:"staple-food",description:"乾飼料、罐頭、冷凍主食餐"},{category:"貓零食",route:"treats",description:"肉泥、餅乾"},{category:"起居用品",route:"daily-life-utilities",description:"貓砂便盆、外出籠、除毛用品、餐具飲水、居家清潔"},{category:"玩具",route:"toys",description:"逗貓棒、貓抓板製品、貓草魚"},{category:"保養品",route:"cat-care",description:"貓用牙刷牙膏、化毛膏、營養粉"}]},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),l=a.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var p=d.prototype=l.prototype;p.constructor=d;var g=p.toString,v="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=g.call(t);if(i(f,t))return"";var r=v?e.slice(7,-1):e.replace(y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e915:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"position-relative"},[r("router-link",{staticClass:"product-card card border border-primary h-100",attrs:{tag:"div",to:"/products/"+t.categoryRoute+"/"+t.prod.id}},[r("div",{staticClass:"card-img-top overflow-hidden"},[r("img",{staticClass:"product-card__img d-block w-75 mx-auto",attrs:{src:t.prod.imageUrl,alt:""}})]),r("div",{staticClass:"card-body px-3 pb-3 pt-1 d-flex flex-column justify-content-between"},[r("div",[r("div",{staticClass:"product-info__brand"},[t._v(t._s(t.prod.title.brand))]),r("div",{staticClass:"product-info__collection mb-0"},[t._v(" "+t._s(t.prod.title.collection)+" ")]),r("div",{staticClass:"product-info__type text-muted"},[t._v(" "+t._s(t.prod.title.type)+" ")])]),r("em",{staticClass:"product-info__price"},[t._v("$"+t._s(t.prod.price))])])]),t.prod.tags?[r("ul",{staticClass:"list-unstyled product-tags d-flex flex-column"},t._l(t.prod.tags,(function(e,n){return r("li",{key:n,staticClass:"badge mb-1",class:"badge-"+e},[t._v(" "+t._s(t.$t("tags."+e))+" ")])})),0)]:t._e(),r("ul",{staticClass:"icons list-unstyled d-flex flex-column"},[r("li",[r("button",{staticClass:"btn p-0 icon-btn",attrs:{type:"button"},on:{click:function(e){return t.addToCart(t.prod.id)}}},[r("font-awesome-icon",{staticClass:"d-block",attrs:{icon:"cart-plus",size:"2x"}})],1)])])],2)},o=[],a={props:["prod","categoryRoute"],methods:{addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this,n=!0;r.$store.dispatch("await",!0),r.$store.dispatch("addCartItem",{productId:t,qty:e,acc:n}).catch((function(){return r.$store.dispatch("await",!1)}))}}},i=a,c=r("2877"),s=Object(c["a"])(i,n,o,!1,null,null,null);e["a"]=s.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),d=r("ae40"),p=f("slice"),g=d("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),y=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var r,n,l,f=s(this),d=c(f.length),p=i(t,d),g=i(void 0===e?d:e,d);if(a(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return y.call(f,p,g);for(n=new(void 0===r?Array:r)(b(g-p,0)),l=0;p<g;p++,l++)p in f&&u(n,l,f[p]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-c27b3982.3635c07a.js.map