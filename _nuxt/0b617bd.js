(window.webpackJsonp=window.webpackJsonp||[]).push([[7,21],{572:function(e,t,o){var content=o(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(15).default)("52358698",content,!0,{sourceMap:!1})},575:function(e,t,o){"use strict";o(572)},576:function(e,t,o){var n=o(14)(!1);n.push([e.i,".v-input__slot[data-v-7891c3da],.v-input__slot.focus-visible[data-v-7891c3da],.v-input__slot[data-v-7891c3da]:focus-visible,fieldset[data-v-7891c3da],fieldset.focus-visible[data-v-7891c3da],fieldset[data-v-7891c3da]:focus-visible,v-input__control[data-v-7891c3da],v-input__control.focus-visible[data-v-7891c3da],v-input__control[data-v-7891c3da]:focus-visible{border:0 dashed #dc143c;border-radius:3px;outline:none;border:0!important}[dir=ltr] .v-input__append-outer[data-v-7891c3da],[dir=ltr] .v-input__prepend-outer[data-v-7891c3da]{margin-left:95%!important}[dir=rtl] .v-input__append-outer[data-v-7891c3da],[dir=rtl] .v-input__prepend-outer[data-v-7891c3da]{margin-right:95%!important}.upload-image-conatiner .input-file[data-v-7891c3da]{background:#f5f5f5;height:40px;margin-top:5px}.upload-image-conatiner img[data-v-7891c3da]{margin-top:30px;width:90px;height:80px;-o-object-fit:contain;object-fit:contain}fieldset[data-v-7891c3da]{outline:none!important}",""]),e.exports=n},580:function(e,t,o){"use strict";o.r(t);o(5),o(36),o(37),o(601),o(254);var n={middleware:["auth"],props:{currentImage:null,name:null},data:function(){return{image:void 0,imageUrl:""}},watch:{currentImage:function(e){this.imageUrl=e}},methods:{createImage:function(e){var t=new FileReader;this.imageUrl="",this.imageUrl=URL.createObjectURL(e),this.$emit("UploadedImageSrc",this.imageUrl),t.readAsDataURL(e)},onFileChange:function(e){e&&this.createImage(e)},removeImage:function(){this.imageUrl=""}}},r=(o(575),o(26)),l=o(43),c=o.n(l),d=o(568),m=o(610),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"upload-image-conatiner"},[o("v-file-input",{staticClass:"input-file",attrs:{outlined:"",dense:"",name:e.name},on:{change:e.onFileChange,"click:clear":function(t){return e.removeImage()}},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}),e._v(" "),o("v-container",{staticClass:"mt-n8"},[e.imageUrl?o("img",{staticClass:"ms-6",attrs:{src:e.imageUrl,alt:""}}):e._e()])],1)}),[],!1,null,"7891c3da",null);t.default=component.exports;c()(component,{VContainer:d.a,VFileInput:m.a})},600:function(e,t,o){"use strict";(function(e){var n=o(22);o(79),o(29);t.a={name:"MapComponent",computed:{Mapaddress:function(){return this.$store.state.address},latitude:function(){return this.$store.state.latitude},longitude:function(){return this.$store.state.longitude}},data:function(){return{place:this.$store.state.address,searchText:null,location:{lat:this.$store.state.latitude,lng:this.$store.state.longitude}}},methods:{updateLocation:function(e){console.log(e);var t=e.latLng.lat(),o=e.latLng.lng();this.collectAddressDetails(t,o)},collectAddressDetails:function(t,o){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var l,c,d,address,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=e.env.MAP_API_KEY||"AIzaSyBYYsHfLvLMjJVwKp3jm2fw9jNo_JKfvik",n.prev=1,delete(c=r.$axios.create()).defaults.headers.common.Authorization,"https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(o,"&sensor=true&key=").concat(l),d="https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(t,"&longitude=").concat(o,"&localityLanguage=ar"),n.next=8,c.get(d).then((function(e){return e.data})).catch((function(e){throw e}));case 8:address=n.sent,m="".concat(address.countryName," ,").concat(address.principalSubdivision," ,").concat(address.locality),console.log({address:address}),r.location={lat:t,lng:o},r.place=m,r.$store.dispatch("longitude",o),r.$store.dispatch("latitude",t),r.$store.dispatch("address",r.place),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),console.error(n.t0);case 21:case"end":return n.stop()}}),n,null,[[1,18]])})))()},setPlace:function(e){console.log(e);var t=e.geometry.location.lat(),o=e.geometry.location.lng();this.collectAddressDetails(t,o)}}}}).call(this,o(261))},611:function(e,t,o){var content=o(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(15).default)("31aea9fb",content,!0,{sourceMap:!1})},635:function(e,t,o){"use strict";o(611)},636:function(e,t,o){var n=o(14)(!1);n.push([e.i,".map-container[data-v-f692b3f6]{height:400px}",""]),e.exports=n},668:function(e,t,o){var content=o(745);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(15).default)("52048a8b",content,!0,{sourceMap:!1})},692:function(e,t,o){"use strict";o.r(t);var n=o(600).a,r=(o(635),o(26)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"pt-4 pb-2"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.place,expression:"place"}],staticClass:"form-control w-100 mb-3",attrs:{disabled:"",type:"text"},domProps:{value:e.place},on:{input:function(t){t.target.composing||(e.place=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("client-only",[o("GmapAutocomplete",{staticClass:"form-control",attrs:{value:e.searchText},on:{place_changed:e.setPlace}})],1)],1)]),e._v(" "),o("div",{staticClass:"map-container"},[o("client-only",[o("GmapMap",{staticClass:"w-100 h-100",attrs:{center:e.location,zoom:8,"map-type-id":"terrain",options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1}},on:{click:e.updateLocation}},[o("GmapMarker",{attrs:{position:e.location,draggable:""},on:{dragend:e.updateLocation,click:e.updateLocation}})],1)],1)],1)])}),[],!1,null,"f692b3f6",null);t.default=component.exports},744:function(e,t,o){"use strict";o(668)},745:function(e,t,o){var n=o(14)(!1);n.push([e.i,'.allInterests-container{display:flex;grid-gap:15px;gap:15px;align-content:center;background-color:#f5f5f5;padding:10px;flex-wrap:wrap}.allInterests-container .v-input__slot{align-items:flex-start}.allInterests-container .v-label{color:#1b7bb1!important;font-size:14px}.cheackBox-content label{min-width:50px}.cheackBox-content input,.cheackBox-content label{cursor:pointer}.cheackBox-content .checkbox-style,.cheackBox-content label{display:flex;align-items:center;grid-column-gap:1ch;-moz-column-gap:1ch;column-gap:1ch}.cheackBox-content .checkbox-style{font-size:12px;color:#1b7bb1}.cheackBox-content .checkbox-style:after,.cheackBox-content .checkbox-style:before{content:""}.cheackBox-content .checkbox-style:before{width:1.1rem;height:1.1rem;border:1px solid #1b7bb1;border-radius:2px}.cheackBox-content .checkbox-style:after{width:.4em;height:.6em;top:40%;right:9px;position:absolute;transform:rotate(45deg) translateY(-50%);border-bottom:2px solid transparent;border-right:2px solid transparent}.cheackBox-content input[type=checkbox]{width:1rem;height:1rem;padding:0;margin-bottom:0;display:none}.cheackBox-content input[type=checkbox]:checked+.checkbox-style:before{background-color:#1b7bb1}.cheackBox-content input[type=checkbox]:checked+.checkbox-style:after{border-bottom-color:#fff;border-right-color:#fff}.cheackBox-content *,.cheackBox-content :after,.cheackBox-content :before{margin:0;padding:0;position:relative;box-sizing:border-box;border:0}.cheackBox-content label{min-width:170px}.changeProfile{overflow:hidden;width:230px;border-radius:5px;height:90px;margin:10px auto;position:relative}.changeProfile .input-file{width:230px;height:90px!important;border-radius:5px;background:transparent!important;box-shadow:none!important;border:0!important;margin:0!important}.changeProfile .v-input__prepend-outer{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:230px;height:90px!important;z-index:9;margin:0!important}.changeProfile fieldset{width:230px;height:90px}.changeProfile .icone.clear,.changeProfile .v-file-input__text,.changeProfile .v-input__icon--clear{display:none!important}.changeProfile .v-icon.v-icon.v-icon--link{position:absolute;top:50%;left:50%;border-radius:5px;background:hsla(0,0%,48.2%,.493);transform:translate(-50%,-50%);display:block;width:100%;height:100%;color:#fff}.changeProfile img{position:absolute;top:-20px;left:0;width:230px!important;-o-object-fit:cover!important;object-fit:cover!important;height:90px!important;display:block;top:0;margin:0!important}',""]),e.exports=n},786:function(e,t,o){"use strict";o.r(t);var n=o(22),r=(o(79),o(21),o(27),{data:function(){var e=this;return{valid:!0,disabled:!1,loading:!1,uploadProfilePic:"image",uploadcommercialImage:"commercialImage",uploadnationalIdImage:"nationalIdImage",nameRules:[function(t){return!!t||e.$t("reqFiled")}],emailRules:[function(t){return!!t||e.$t("FieldRequired")},function(t){return/.+@.+\..+/.test(t)||e.$t("reqFiled")}],Rules:[function(t){return!!t||e.$t("FieldRequired")},function(t){return/.+@.+\..+/.test(t)||e.$t("reqFiled")}],form:{name_ar:null,name_en:null,bankName:null,accountName:null,accountNumber:null,ibanNumber:null,interests:[],delivery:null,priceKm:null,commercialImage:null,cnationalIdImage:null,image:null},allInterests:null,allInterestsselected:[],image:"",commercialImage:"",nationalIdImage:""}},computed:{Mapaddress:function(){return this.$store.state.address},latitude:function(){return this.$store.state.latitude},longitude:function(){return this.$store.state.longitude}},beforeMount:function(){this.storeData()},methods:{gitImageSrc:function(e){this.form.image=e,this.form.commercialImage=e,this.form.cnationalIdImage=e,console.log(this.form.image),console.log(this.form.commercialImage),console.log(this.form.cnationalIdImage)},changeIntersted:function(e){this.allInterestsselected.push(e)},handleSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new FormData(e.$refs.form),e.loading=!0,e.disabled=!0,o.append("interests",JSON.stringify(e.form.interests)),t.next=6,e.$axios.$put("updateStoreProfile",o).then((function(data){console.log(data),localStorage.setItem("storeId",data.data.storeId),localStorage.setItem("rating",data.data.rating),localStorage.setItem("image",data.data.image),localStorage.setItem("name",data.data.name),e.$store.dispatch("storeId"),e.$store.dispatch("rating"),e.$store.dispatch("image"),e.$store.dispatch("name"),e.$router.push(e.localePath("/store/home")),e.$auth.strategy.token.set(data.data.token),e.loading=!1,e.disabled=!1,e.$swal.fire({title:data.message,timer:1e3,icon:"success",allowOutsideClick:!1,showConfirmButton:!1,showCancelButton:!1})})).catch((function(t){console.log("error",t),e.loading=!1,e.disabled=!1}));case 6:case"end":return t.stop()}}),t)})))()},storeData:function(){var e=this;this.$axios.$get("profile").then((function(data){e.form.name_ar=data.data.name_ar,e.form.name_en=data.data.name_en,e.form.bankName=data.data.bankName,e.form.accountName=data.data.accountName,e.form.accountNumber=data.data.accountNumber,e.form.ibanNumber=data.data.ibanNumber,e.allInterests=data.data.allInterests,e.form.interests=data.data.interests,e.form.delivery=data.data.delivery,e.form.priceKm=data.data.priceKm,e.$store.dispatch("address",data.data.address),e.$store.dispatch("longitude",data.data.longitude),e.$store.dispatch("latitude",data.data.latitude),e.commercialImage=data.data.commercialImage,e.nationalIdImage=data.data.nationalIdImage,e.image=data.data.image,e.newToken=data.data.token}))}}}),l=(o(744),o(26)),c=o(43),d=o.n(c),m=o(555),f=o(565),v=o(787),h=o(748),x=o(566),_=o(573),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{ref:"form",staticClass:"settings-form product-form-container",on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[o("v-row",[o("v-col",{attrs:{cols:"12",md:"12"}},[o("div",{staticClass:"mt-4"},[o("UploadImage",{staticClass:"changeProfile",attrs:{delete:!1,name:e.uploadProfilePic,currentImage:e.image},on:{UploadedImageSrc:e.gitImageSrc}})],1)]),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{name:"name_ar",rules:e.nameRules,label:e.$t("storeNameAr"),required:""},model:{value:e.form.name_ar,callback:function(t){e.$set(e.form,"name_ar",t)},expression:"form.name_ar"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{name:"name_en",rules:e.nameRules,label:e.$t("storeNameEn"),required:""},model:{value:e.form.name_en,callback:function(t){e.$set(e.form,"name_en",t)},expression:"form.name_en"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("div",{staticClass:"mt-4"},[o("label",{attrs:{for:""}},[e._v(e._s(e.$t("CommercialRegistration")))]),e._v(" "),o("UploadImage",{attrs:{name:e.uploadcommercialImage,currentImage:e.commercialImage},on:{UploadedImageSrc:e.gitImageSrc}})],1)]),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("div",{staticClass:"mt-4"},[o("label",{attrs:{for:""}},[e._v(e._s(e.$t("nationalID")))]),e._v(" "),o("UploadImage",{attrs:{name:e.uploadnationalIdImage,currentImage:e.nationalIdImage},on:{UploadedImageSrc:e.gitImageSrc}})],1)]),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{name:"bankName",rules:e.nameRules,label:e.$t("bankName"),required:""},model:{value:e.form.bankName,callback:function(t){e.$set(e.form,"bankName",t)},expression:"form.bankName"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{name:"accountName",rules:e.nameRules,label:e.$t("accountName"),required:""},model:{value:e.form.accountName,callback:function(t){e.$set(e.form,"accountName",t)},expression:"form.accountName"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{name:"accountNumber",label:e.$t("accountNumber"),required:"",type:"number"},model:{value:e.form.accountNumber,callback:function(t){e.$set(e.form,"accountNumber",t)},expression:"form.accountNumber"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{name:"ibanNumber",label:e.$t("ibanNumber"),type:"number",required:""},model:{value:e.form.ibanNumber,callback:function(t){e.$set(e.form,"ibanNumber",t)},expression:"form.ibanNumber"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12"}},[o("label",{attrs:{for:""}},[e._v(e._s(e.$t("storeallInterests")))]),e._v(" "),o("div",{staticClass:"allInterests-container cheackBox-content mt-4"},e._l(e.allInterests,(function(t){return o("label",{key:t.ar},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.interests,expression:"form.interests"}],attrs:{type:"checkbox"},domProps:{value:t.departmentId,checked:Array.isArray(e.form.interests)?e._i(e.form.interests,t.departmentId)>-1:e.form.interests},on:{change:[function(o){var n=e.form.interests,r=o.target,l=!!r.checked;if(Array.isArray(n)){var c=t.departmentId,d=e._i(n,c);r.checked?d<0&&e.$set(e.form,"interests",n.concat([c])):d>-1&&e.$set(e.form,"interests",n.slice(0,d).concat(n.slice(d+1)))}else e.$set(e.form,"interests",l)},function(o){return e.changeIntersted(t.departmentId)}]}}),e._v(" "),o("span",{staticClass:"checkbox-style"},[e._v(e._s(t.ar))])])})),0)]),e._v(" "),o("v-col",{attrs:{cols:"12 mt-4"}},[o("label",{attrs:{for:""}},[e._v(e._s(e.$t("locations")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.Mapaddress,expression:"Mapaddress"}],attrs:{type:"text",hidden:"",name:"address"},domProps:{value:e.Mapaddress},on:{input:function(t){t.target.composing||(e.Mapaddress=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.latitude,expression:"latitude"}],attrs:{type:"text",hidden:"",name:"latitude"},domProps:{value:e.latitude},on:{input:function(t){t.target.composing||(e.latitude=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.longitude,expression:"longitude"}],attrs:{type:"text",hidden:"",name:"longitude"},domProps:{value:e.longitude},on:{input:function(t){t.target.composing||(e.longitude=t.target.value)}}}),e._v(" "),o("google-map")],1),e._v(" "),o("v-col",{attrs:{cols:"12 mt-4"}},[o("label",{attrs:{for:""}},[e._v(e._s(e.$t("deliveryMethod")))]),e._v(" "),o("v-radio-group",{attrs:{row:""},model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}},[o("v-radio",{attrs:{name:"delivery",label:"ذاتي",value:"owner"}}),e._v(" "),o("v-radio",{attrs:{name:"delivery",label:"شركه شحن",value:"company"}})],1)],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{name:"priceKm",label:e.$t("priceKm"),required:"",type:"number"},model:{value:e.form.priceKm,callback:function(t){e.$set(e.form,"priceKm",t)},expression:"form.priceKm"}})],1)],1),e._v(" "),o("div",{staticClass:"d-flex align-items-center justify-content-center mt-5"},[o("v-btn",{staticClass:"submit-button",attrs:{disabled:e.disabled,loading:e.loading,color:"primary",type:"submit"}},[e._v("\n      "+e._s(e.$t("save"))+"\n    ")]),e._v(" "),o("v-btn",{staticClass:"submit-button",attrs:{color:"primary"}},[o("nuxt-link",{staticClass:"btn-a",attrs:{to:e.localePath("/store/settings/change-password")}},[e._v("\n        "+e._s(e.$t("changePassword"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{UploadImage:o(580).default,GoogleMap:o(692).default}),d()(component,{VBtn:m.a,VCol:f.a,VRadio:v.a,VRadioGroup:h.a,VRow:x.a,VTextField:_.a})}}]);