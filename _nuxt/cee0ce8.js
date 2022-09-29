(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{582:function(t,e,n){"use strict";var o=n(25),r=(n(44),n(9),n(5),n(27),n(259)),c=n(86),l=n(12),v=n(2),d=n(20),h=Object(l.a)(r.a,c.a);e.a=h.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(o.a)(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(v.u)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(d.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(v.t)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var n=this.internalActivator?this.$el:document;e="string"==typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var o=this.activatorNode[0].componentInstance;e=o&&o.$options.mixins&&o.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?o.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null==e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot:function(){return Object(v.t)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},583:function(t,e,n){var content=n(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2065bca8",content,!0,{sourceMap:!1})},584:function(t,e,n){var o=n(14)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},588:function(t,e,n){"use strict";n(70);var o=n(0);e.a=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},589:function(t,e,n){"use strict";var o=n(73),r=(n(29),n(44),n(58),n(0)),c=n(2);e.a=r.a.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var content=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[content])+2:Object(c.v)(content);return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],base=this.$el,e=[this.stackMinZIndex,Object(c.v)(base)],n=[].concat(Object(o.a)(document.getElementsByClassName("v-menu__content--active")),Object(o.a)(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<n.length;r++)t.includes(n[r])||e.push(Object(c.v)(n[r]));return Math.max.apply(Math,e)}}})},590:function(t,e,n){"use strict";var o=n(1),r=n(25),c=(n(5),n(11),n(44),n(58),n(50),n(36),n(263)),l=n(2),v=n(12),d=n(20);function h(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e.a=Object(v.a)(c.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){var e=Object(r.a)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var n=new MutationObserver((function(o){o.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(n.disconnect(),h(e))}));n.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else h(e)}},methods:{getScopeIdAttrs:function(){var t=Object(l.q)(this.$vnode,"context.$options._scopeId");return t&&Object(o.a)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(d.c)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},622:function(t,e,n){"use strict";var o=n(73),r=n(1),c=(n(30),n(80),n(70),n(44),n(58),n(5),n(85),n(9),n(7),n(8),n(16),n(11),n(17),n(583),n(658)),l=n(582),v=n(255),d=n(590),h=n(257),f=n(588),m=n(589),_=n(256),x=n(12),y=n(20),w=n(2);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=Object(x.a)(v.a,d.a,h.a,f.a,m.a,l.a);e.a=$.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.z.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:A({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=A(A({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},658:function(t,e,n){"use strict";n(85),n(5);var o=n(31);e.a=o.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:o.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},681:function(t,e,n){var content=n(776);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("c26d37c0",content,!0,{sourceMap:!1})},775:function(t,e,n){"use strict";n(681)},776:function(t,e,n){var o=n(14)(!1);o.push([t.i,".center-logo[data-v-459c6a20]{width:150px}.bill-content .bill-box[data-v-459c6a20]{color:#666464!important;border-bottom:1px solid #ccc}.bill-content .bill-box div[data-v-459c6a20]{padding-bottom:5px}.bill-content .bill-box[data-v-459c6a20]:last-child{border-bottom:1px solid hsla(0,0%,80%,0)}",""]),t.exports=o},824:function(t,e,n){"use strict";n.r(e);var o={middleware:["auth"],props:{color:"",showBill:""},data:function(){return{dialog:this.showBill}},methods:{onDecode:function(t){alert(t)}}},r=(n(775),n(26)),c=n(43),l=n.n(c),v=n(555),d=n(554),h=n(565),f=n(622),m=n(237),_=n(566),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"min-btn-w",attrs:{color:t.color}},"v-btn",r,!1),n),[o("v-icon",{staticClass:"ms-2 me-2"},[t._v(" mdi-paper-roll-outline ")]),t._v("\n        "+t._s(t.$t("ShowBill"))+"\n      ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",{staticClass:"scroll-responsive"},[o("div",{staticClass:"bill-header d-flex pa-3 align-center justify-space-between"},[o("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[o("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle ")])],1),t._v(" "),o("div",{staticClass:"brand-logo d-flex justify-center align-center"},[o("img",{staticClass:"img-cover center-logo",attrs:{src:n(371)}})]),t._v(" "),o("a",{attrs:{href:"kkk",color:"primary",download:""}},[o("v-icon",{staticClass:"tx-main"},[t._v(" mdi-download ")])],1)],1),t._v(" "),o("div",{staticClass:"bill-content pa-4 siz-14"},[o("v-row",{staticClass:"Bill-Info bill-box"},[o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("billNumber"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("orderNumber"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("orderDate"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("orderTime"))+":")]),t._v(" "),o("span",[t._v("324134")])])],1),t._v(" "),o("v-row",{staticClass:"order-details-bill bill-box"},[o("v-col",{attrs:{cols:"12"}},[o("span",[t._v(t._s(t.$t("orderDetails"))+":")]),t._v(" "),o("span",[t._v("52345")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("productName"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("productPrice"))+":")]),t._v(" "),o("span",[t._v("324134")])])],1),t._v(" "),o("v-row",{staticClass:"store-details-bill bill-box"},[o("v-col",{attrs:{cols:"12"}},[o("span",[t._v(t._s(t.$t("storeDetails"))+":")]),t._v(" "),o("span",[t._v("52345")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("storeName"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("CommercialRegistrationNo"))+":")]),t._v(" "),o("span",[t._v("324134")])])],1),t._v(" "),o("v-row",{staticClass:"order-quantity-bill bill-box"},[o("v-col",{attrs:{xs:"12"}},[o("span",[t._v(t._s(t.$t("productsNumber"))+":")]),t._v(" "),o("span",[t._v("52345")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("paymentMethood"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("shippingBy"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("deliveryFee"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("discountValue"))+":")]),t._v(" "),o("span",[t._v("324134")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("span",[t._v(t._s(t.$t("total"))+":")]),t._v(" "),o("span",[t._v("324134")])])],1)],1),t._v(" "),o("div",{staticClass:"text-center pa-5"},[o("qr-code",{staticClass:"d-inline m-auto qr-img",attrs:{text:"https://goo.gl/9eIWP9",size:"100",color:"#1b7bb1","bg-color":"#fff","error-level":"L"}})],1)])],1)],1)}),[],!1,null,"459c6a20",null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCol:h.a,VDialog:f.a,VIcon:m.a,VRow:_.a})}}]);