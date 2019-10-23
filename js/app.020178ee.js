(function(t){function e(e){for(var i,s,o=e[0],d=e[1],u=e[2],c=0,m=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var d=n[o];0!==a[d]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/star-list/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"048d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-layout md-gutter",attrs:{id:"app"}},[n("div",{staticClass:"md-layout-item md-size-15"}),n("div",{staticClass:"md-layout-item"},[n("starlist",{attrs:{stars:t.stars},on:{"edit:star":t.editSTAR,"add:star":t.addSTAR,"delete:star":t.deleteSTAR,download:t.downloadList,"update:url":t.updateURL}})],1),n("div",{staticClass:"md-layout-item md-size-15"})])},r=[],s=(n("4de4"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"star-table"}},[n("md-field",{attrs:{"md-inline":""}},[n("label",[t._v("Load STARs from file")]),n("md-file",{attrs:{accept:".json"},on:{"md-change":function(e){return t.onFileChange(e)}},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}})],1),t._l(t.stars,(function(e){return n("md-list",{key:e.id},[n("staritem",{staticClass:"md-primary",attrs:{star:e,startype:"title"},on:{"update:star":t.update,"delete:star":t.remove}}),n("md-divider"),n("staritem",{attrs:{star:e,startype:"S"},on:{"update:star":t.update}}),n("md-divider"),n("staritem",{attrs:{star:e,startype:"T"},on:{"update:star":t.update}}),n("md-divider"),n("staritem",{attrs:{star:e,startype:"A"},on:{"update:star":t.update}}),n("md-divider"),n("staritem",{attrs:{star:e,startype:"R"},on:{"update:star":t.update}}),n("md-divider")],1)})),n("md-button",{staticClass:"md-icon-button md-raised button",on:{click:function(e){return t.add()}}},[n("md-icon",[t._v("add")])],1),n("md-button",{staticClass:"md-icon-button md-raised button",on:{click:function(e){return t.download()}}},[n("md-icon",[t._v("cloud_download")])],1),n("md-button",{staticClass:"md-icon-button md-raised button",on:{click:function(e){t.active=!0}}},[n("md-icon",[t._v("link")])],1),n("md-dialog-prompt",{attrs:{"md-active":t.active,"md-title":"URL to Load STARs","md-input-maxlength":"1024","md-input-placeholder":"URL Link","md-confirm-text":"Done"},on:{"update:mdActive":function(e){t.active=e},"update:md-active":function(e){t.active=e},"md-confirm":t.onLinkConfirm},model:{value:t.starURL,callback:function(e){t.starURL=e},expression:"starURL"}})],2)}),o=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list-item",{staticClass:"row"},[n("md-dialog-confirm",{attrs:{"md-active":t.active,"md-title":"Delete a STAR?","md-content":"This action will permentally detete the STAR.<br> Are you sure?","md-confirm-text":"Confirm","md-cancel-text":"Cancel"},on:{"update:mdActive":function(e){t.active=e},"update:md-active":function(e){t.active=e},"md-cancel":t.onCancel,"md-confirm":t.onConfirm}}),"title"!==t.startype?n("md-icon",[t._v(t._s(t.startype))]):t._e(),t.editing===t.star.id&&t.type===t.startype?n("div",["S"===t.startype?n("md-field",{attrs:{"md-inline":""}},[n("label",[t._v("Situation")]),n("md-input",{directives:[{name:"focus",rawName:"v-focus"}],on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editSTAR(t.star)}},model:{value:t.star.s,callback:function(e){t.$set(t.star,"s",e)},expression:"star.s"}})],1):t._e(),"T"===t.startype?n("md-field",{attrs:{"md-inline":""}},[n("label",[t._v("Task")]),n("md-input",{directives:[{name:"focus",rawName:"v-focus"}],on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editSTAR(t.star)}},model:{value:t.star.t,callback:function(e){t.$set(t.star,"t",e)},expression:"star.t"}})],1):t._e(),"A"===t.startype?n("md-field",{attrs:{"md-inline":""}},[n("label",[t._v("Action")]),n("md-input",{directives:[{name:"focus",rawName:"v-focus"}],on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editSTAR(t.star)}},model:{value:t.star.a,callback:function(e){t.$set(t.star,"a",e)},expression:"star.a"}})],1):t._e(),"R"===t.startype?n("md-field",{attrs:{"md-inline":""}},[n("label",[t._v("Result")]),n("md-input",{directives:[{name:"focus",rawName:"v-focus"}],on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editSTAR(t.star)}},model:{value:t.star.r,callback:function(e){t.$set(t.star,"r",e)},expression:"star.r"}})],1):t._e(),"title"===t.startype?n("md-field",{attrs:{"md-inline":""}},[n("label",[t._v("Title")]),n("md-input",{directives:[{name:"focus",rawName:"v-focus"}],on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editSTAR(t.star)}},model:{value:t.star.title,callback:function(e){t.$set(t.star,"title",e)},expression:"star.title"}})],1):t._e()],1):n("div",{staticClass:"md-list-item-text md-headline cursor",on:{click:function(e){return t.editMode(t.star,t.startype)}}},["S"===t.startype?n("span",[t._v(" "+t._s(t.star.s)+" ")]):t._e(),"T"===t.startype?n("span",[t._v(" "+t._s(t.star.t)+" ")]):t._e(),"A"===t.startype?n("span",[t._v(" "+t._s(t.star.a)+" ")]):t._e(),"R"===t.startype?n("span",[t._v(" "+t._s(t.star.r)+" ")]):t._e(),"title"===t.startype?n("span",[t._v(" "+t._s(t.star.title)+" ")]):t._e()]),t.editing===t.star.id&&t.type===t.startype?n("div",[n("md-button",{staticClass:"md-icon-button md-raised",on:{click:function(e){return t.editSTAR(t.star)}}},[n("md-icon",[t._v("save")])],1),n("md-button",{staticClass:"md-icon-button md-raised",on:{click:function(e){return t.cancelEdit(t.star)}}},[n("md-icon",[t._v("cancel")])],1),"title"===t.startype?n("md-button",{staticClass:"md-icon-button md-raised",on:{click:function(e){t.active=!0}}},[n("md-icon",[t._v("delete")])],1):t._e()],1):t._e()],1)},u=[],l={name:"staritem",props:{star:Object,startype:String},data:function(){return{active:!1,editing:null,type:null}},directives:{focus:{inserted:function(t){t.focus()}}},methods:{editMode:function(t,e){this.cachedSTAR=Object.assign({},t),this.editing=t.id,this.type=e},cancelEdit:function(t){Object.assign(t,this.cachedSTAR),this.editing=null,this.type=null},editSTAR:function(t){this.$emit("update:star",t.id,t),this.editing=null,this.type=null},onConfirm:function(){this.$emit("delete:star",this.star.id),this.editing=null,this.type=null},onCancel:function(){}}},c=l,m=(n("ab32"),n("2877")),f=Object(m["a"])(c,d,u,!1,null,"366ee5f4",null),p=f.exports,v=(n("d3b7"),n("96cf"),n("89ba"));function y(t){return b.apply(this,arguments)}function b(){return b=Object(v["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function h(t){if(t){var e=new FileReader;return e.readAsText(t)}}var x={getJsonByURL:y,getJsonByTextFile:h},_={name:"starlist",props:{stars:Array},data:function(){return{active:!1,starURL:null,filename:null}},components:{staritem:p},methods:{update:function(t){this.$emit("edit:star",t.id,t)},add:function(){this.$emit("add:star")},remove:function(t){this.$emit("delete:star",t)},download:function(){this.$emit("download")},onLinkConfirm:function(){this.$emit("update:url",this.starURL)},onFileChange:function(t){var e=x(t[0]);this.$emit("update:file",e)}}},k=_,R=Object(m["a"])(k,s,o,!1,null,"3742d893",null),g=R.exports;n("0d03"),n("ac1f"),n("25f0"),n("5319");function S(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}var T=S;n("3ca3"),n("ddb0"),n("2b3d");function w(t,e){var n=new Blob([t],{type:"text/plain;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(n,e);else{var i=document.createElement("a");if(void 0!==i.download){var a=URL.createObjectURL(n);i.setAttribute("href",a),i.setAttribute("download",e),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)}}}var A=w,C={name:"app",components:{starlist:g},data:function(){return{stars:[{id:555,s:"Situation",t:"Task",a:"Action",r:"Results",title:"Title"}]}},methods:{editSTAR:function(t,e){this.stars=this.stars.map((function(n){return n.id===t?e:n}))},addSTAR:function(){var t=T();this.stars.push({id:t,s:"Situation",t:"Task",a:"Action",r:"Result",title:"Title"})},deleteSTAR:function(t){this.stars=this.stars.filter((function(e){return e.id!==t}))},downloadList:function(){A(JSON.stringify(this.stars,null,4),"star-list.json")},updateURL:function(t){var e=x(t);e&&(this.stars=JSON.parse(e))}}},O=C,j=(n("034f"),Object(m["a"])(O,a,r,!1,null,null,null)),L=j.exports,$=n("43f9"),U=n.n($);n("51de"),n("e094");i["default"].config.productionTip=!1,i["default"].use(U.a),new i["default"]({render:function(t){return t(L)}}).$mount("#app")},"85ec":function(t,e,n){},ab32:function(t,e,n){"use strict";var i=n("048d"),a=n.n(i);a.a}});
//# sourceMappingURL=app.020178ee.js.map