webpackJsonp([0],{"1+oN":function(t,e,n){"use strict";var a=n("hU7x"),s=n.n(a);e.a={name:"MyInfo",data:function(){return{isLoading:!0,profile:null}},mounted:function(){var t=this,e=localStorage.getItem("token");s()("https://api.instagram.com/v1/users/self?access_token="+e,null,function(e,n){t.isLoading=!1,t.profile=n.data,console.log(t.profile)})}}},"38cd":function(t,e,n){"use strict";function a(t){n("DN6T")}var s=n("x2Fy"),i=n("9EEV"),r=n("VU/8"),o=a,c=r(s.a,i.a,o,"data-v-528feb8a",null);e.a=c.exports},"8QD2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!1===t.isLoading?[n("md-card",[n("md-card-media",[n("md-avatar",{staticClass:"md-large"},[n("img",{attrs:{src:t.profile.profile_picture}})])],1),t._v(" "),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.profile.full_name))]),t._v(" "),n("div",{staticClass:"md-subhead"},[t._v(t._s(t.profile.username))])]),t._v(" "),n("md-card-content",[n("div",[t._v("Website: "+t._s(t.profile.website))]),t._v(" "),n("div",[t._v("Followed by: "+t._s(t.profile.counts.followed_by))]),t._v(" "),n("div",[t._v("Follows: "+t._s(t.profile.counts.follows))])])],1)]:[n("md-progress",{staticClass:"md-accent",attrs:{"md-indeterminate":""}})]],2)},s=[],i={render:a,staticRenderFns:s};e.a=i},"9EEV":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?[n("md-progress",{staticClass:"md-accent",attrs:{"md-indeterminate":""}})]:t._l(t.feeds,function(e){return e.caption?n("feed",{key:e.id,attrs:{"image-url":e.images.standard_resolution.url,"full-name":e.caption.from.full_name,"user-name":e.caption.from.username,contents:e.caption.text}}):t._e()})],2)},s=[],i={render:a,staticRenderFns:s};e.a=i},D74y:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-media",[n("img",{attrs:{src:t.imageUrl}})]),t._v(" "),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.fullName))]),t._v(" "),n("div",{staticClass:"md-subhead"},[t._v("@"+t._s(t.userName))])]),t._v(" "),n("md-card-content",[t._v("\n    "+t._s(t.contents)+"\n  ")])],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},DN6T:function(t,e){},I0XE:function(t,e){},M93x:function(t,e,n){"use strict";function a(t){n("kNfT")}var s=n("xJD8"),i=n("krzP"),r=n("VU/8"),o=a,c=r(s.a,i.a,o,"data-v-cd0843b0",null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("Lgyv"),i=n.n(s),r=n("tzNG"),o=(n.n(r),n("M93x")),c=n("YaEn");a.default.config.productionTip=!1,a.default.use(i.a),new a.default({el:"#app",router:c.a,template:"<App/>",components:{App:o.a}})},NsBS:function(t,e){},ORRp:function(t,e,n){"use strict";function a(t){n("RfnM")}var s=n("vYnd"),i=n("WwRv"),r=n("VU/8"),o=a,c=r(s.a,i.a,o,"data-v-5fab6df2",null);e.a=c.exports},Opsm:function(t,e,n){"use strict";function a(t){n("NsBS")}var s=n("1+oN"),i=n("8QD2"),r=n("VU/8"),o=a,c=r(s.a,i.a,o,"data-v-689b629a",null);e.a=c.exports},RfnM:function(t,e){},WwRv:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-input-container",[n("label",[t._v("태그 검색")]),t._v(" "),n("md-input",{nativeOn:{input:function(e){t.tagName=e.target.value},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.search(e)}}})],1),t._v(" "),t._l(t.feeds,function(e){return e.caption?n("feed",{key:e.id,attrs:{"image-url":e.images.standard_resolution.url,"full-name":e.caption.from.full_name,"user-name":e.caption.from.username,contents:e.caption.text}}):t._e()})],2)},s=[],i={render:a,staticRenderFns:s};e.a=i},"XJ+g":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-button",{staticClass:"md-raised md-primary",attrs:{href:"https://www.instagram.com/oauth/authorize/?client_id=e9d5d8a38bc94b56856b41206200e240&redirect_uri=http://localhost:8080&response_type=token&scope=public_content"}},[t._v("\n    Login with Instagram\n  ")])],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),s=n("/ocq"),i=n("xJsL"),r=n("Opsm"),o=n("38cd"),c=n("ORRp");a.default.use(s.a);var u=new s.a({mode:"history",routes:[{path:"/",redirect:"/me"},{path:"/me",name:"MyInfo",component:r.a},{path:"/feeds",name:"MyFeed",component:o.a},{path:"/search",name:"TagSearch",component:c.a},{path:"/login",name:"Login",component:i.a}]});u.beforeEach(function(t,e,n){var a=localStorage.getItem("token");if("Login"!==t.name&&null===a){if(t.hash.includes("#access_token")){var s=t.hash,i=s.split("=")[1];return localStorage.setItem("token",i),void n("/me")}n("/login")}n()}),e.a=u},aPTA:function(t,e,n){"use strict";function a(t){n("sqXa")}var s=n("nGxh"),i=n("D74y"),r=n("VU/8"),o=a,c=r(s.a,i.a,o,"data-v-1edd3084",null);e.a=c.exports},kNfT:function(t,e){},krzP:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("md-toolbar",[n("md-button",{staticClass:"md-icon-button",on:{click:t.toggle}},[n("md-icon",[t._v("menu")])],1),t._v(" "),n("h2",{staticClass:"md-title"},[t._v("\n      VueStagram\n    ")])],1),t._v(" "),n("md-sidenav",{ref:"sidenav",staticClass:"md-left",attrs:{"md-swipeable":""}},[n("md-list",t._l(t.menus,function(e){return n("md-list-item",{key:e.path,nativeOn:{click:function(e){t.toggle(e)}}},[n("router-link",{attrs:{to:e.path}},[n("md-icon",[t._v(t._s(e.icon))]),t._v(" "),n("span",[t._v(t._s(e.title))])],1)],1)}))],1),t._v(" "),n("div",{attrs:{id:"contents"}},[n("router-view")],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},nGxh:function(t,e,n){"use strict";e.a={name:"Feed",props:["imageUrl","fullName","userName","contents"]}},"nKb+":function(t,e,n){"use strict";e.a={name:"Login"}},sqXa:function(t,e){},tzNG:function(t,e){},vYnd:function(t,e,n){"use strict";var a=n("hU7x"),s=n.n(a),i=n("aPTA");e.a={name:"TagSearch",data:function(){return{feeds:[],tagName:""}},components:{Feed:i.a},methods:{search:function(){var t=this;if(console.log(this.tagName),this.tagName&&""!==this.tagName){var e=localStorage.getItem("token");s()("https://api.instagram.com/v1/tags/"+this.tagName+"/media/recent?access_token="+e,null,function(e,n){t.feeds=n.data,console.log(t.feeds)})}}}}},x2Fy:function(t,e,n){"use strict";var a=n("hU7x"),s=n.n(a),i=n("aPTA");e.a={name:"MyFeed",data:function(){return{feeds:[],isLoading:!0}},components:{Feed:i.a},mounted:function(){var t=this,e=localStorage.getItem("token");this.isLoading=!0,s()("https://api.instagram.com/v1/users/self/media/recent?access_token="+e,null,function(e,n){t.isLoading=!1,t.feeds=n.data})}}},xJD8:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{menus:[{path:"/me",icon:"person",title:"내 정보"},{path:"/feeds",icon:"list",title:"내 정보"},{path:"/search",icon:"search",title:"태그 검색"}]}},methods:{toggle:function(){this.$refs.sidenav.toggle()}}}},xJsL:function(t,e,n){"use strict";function a(t){n("I0XE")}var s=n("nKb+"),i=n("XJ+g"),r=n("VU/8"),o=a,c=r(s.a,i.a,o,"data-v-1fbbc7f9",null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.1c89ab8921d2acca443d.js.map