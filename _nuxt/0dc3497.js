(window.webpackJsonp=window.webpackJsonp||[]).push([[58,29],{571:function(t,e,o){o(4)({target:"Object",stat:!0},{is:o(362)})},586:function(t,e,o){var n=o(363),r=o(45);t.exports=function(t,e,o){return o.get&&n(o.get,e,{getter:!0}),o.set&&n(o.set,e,{setter:!0}),r.f(t,e,o)}},619:function(t,e,o){var content=o(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("3b5444ae",content,!0,{sourceMap:!1})},649:function(t,e,o){"use strict";o(619)},650:function(t,e,o){var n=o(14)(!1);n.push([t.i,".diableButtons{opacity:.1;background:rgba(27,122,177,.67843)}",""]),t.exports=n},675:function(t,e,o){var content=o(764);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("24d255d6",content,!0,{sourceMap:!1})},689:function(t,e,o){"use strict";o.r(e);var n=o(22),r=(o(79),o(8),o(5),{props:{index:null,productId:null,optionData:null,choosedItem:[]},data:function(){var t=this;return{disabled:!1,loading:!1,loadingPage:!0,multipleOptions:[],nameRules:[function(e){return!!e||t.$t("reqFiled")}],allfeatures:null,features:{featureId:"",featureName:"",options:""},alloptionsData:[],alloptions:null,options:{optionId:"",featureOptionName:""},form:{productId:this.productId,featureId:null,options:[]},savedIdFature:[],lastSelect:""}},mounted:function(){this.multipleOptions=this.choosedItem.filter((function(t){return t.select}));for(var t=[],i=0;i<this.multipleOptions.length;i++)console.log(this.multipleOptions[i].select),t.push(this.multipleOptions[i].optionId);this.form.options=t},methods:{handleSubmit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=new FormData(document.getElementById(t)),document.getElementById("btn"+t).classList.add("diableButtons"),e.loading=!0,e.disabled=!0,console.log(document.getElementById("btn"+t)),n.append("options",JSON.stringify(e.form.options)),o.next=8,e.$axios.$post("featureOption",n).then((function(data){e.multipleOptions=[],e.form.options=[],e.loading=!1,e.disabled=!1,e.$swal.fire({title:data.message,timer:1e3,icon:"success",allowOutsideClick:!1,showConfirmButton:!1,showCancelButton:!1})})).catch((function(t){console.log("error",t),e.loading=!1,e.disabled=!1}));case 8:case"end":return o.stop()}}),o)})))()},selectedOptions:function(t){console.log("aaaaaaa",this.form.options),this.form.options=[];for(var e=[],i=0;i<t.length;i++)e.push(t[i].optionId);this.form.options=e,console.log("Options ID",e)}}}),l=(o(649),o(26)),d=o(43),c=o.n(d),f=o(555),m=o(565),h=o(566),v=o(683),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-box"},[o("form",{staticClass:"product-form-container",attrs:{id:t.index},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(t.index)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.productId,expression:"productId"}],attrs:{type:"text",hidden:"",name:"productId"},domProps:{value:t.productId},on:{input:function(e){e.target.composing||(t.productId=e.target.value)}}}),t._v(" "),o("div",[o("v-row",{staticClass:"mt-5"},[o("v-col",{attrs:{cols:"12",md:"12"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.optionData.featureId,expression:"optionData.featureId"}],staticClass:"w-100",attrs:{type:"text",name:"featureId",hidden:""},domProps:{value:t.optionData.featureId},on:{input:function(e){e.target.composing||t.$set(t.optionData,"featureId",e.target.value)}}}),t._v(" "),o("v-select",{attrs:{items:t.optionData.options,"item-text":"featureOptionName",rules:[function(t){return!!t||"Item is required"}],label:t.optionData.featureName,multiple:"",chips:"","return-object":"","persistent-hint":"",require:"true"},on:{change:function(e){return t.selectedOptions(t.multipleOptions,t.optionData.featureId,t.index)}},model:{value:t.multipleOptions,callback:function(e){t.multipleOptions=e},expression:"multipleOptions"}}),t._v(" "),o("div",{staticClass:"dFlex"},[o("v-btn",{attrs:{color:"primary",type:"submit",id:"btn"+t.index}},[t._v("\n              "+t._s(t.$t("save"))+"\n            ")])],1)],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:f.a,VCol:m.a,VRow:h.a,VSelect:v.a})},763:function(t,e,o){"use strict";o(675)},764:function(t,e,o){var n=o(14)(!1);n.push([t.i,".diableButtons{opacity:.1;background:rgba(27,122,177,.67843)}",""]),t.exports=n},816:function(t,e,o){"use strict";o.r(e);var n={data:function(){var t=this;return{disabled:!1,loading:!1,loadingPage:!0,choosedItems:null,multipleOptions:[],nameRules:[function(e){return!!e||t.$t("reqFiled")}],alloptionsData:[]}},computed:{productId:function(){return this.$route.params.id}},mounted:function(){var t=this;this.$axios.$get("productFeatureOptions",{params:{productId:this.productId}}).then((function(e){t.allfeatures=e.data,t.alloptionsData=e.data,console.log(e.data),console.log(e.data[0].options),t.loadingPage=!1}))}},r=(o(763),o(26)),l=o(43),d=o.n(l),c=o(555),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-box"},[t._l(t.alloptionsData,(function(e,n){return o("product-option-form",{key:e.featureId,attrs:{index:n,optionData:e,productId:t.productId,choosedItem:t.alloptionsData[n].options}})})),t._v(" "),o("v-btn",{staticClass:"submit-button ma-0",attrs:{color:"mt-11"}},[o("nuxt-link",{attrs:{to:t.productId?t.localePath("/store/products/productPrice/"+t.productId):t.localePath("/store/products/productPrice")}},[t._v("\n      الذهاب الي الاسعار\n    ")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ProductOptionForm:o(689).default}),d()(component,{VBtn:c.a})}}]);