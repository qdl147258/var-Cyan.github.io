webpackJsonp([1],Array(34).concat([function(t,e,n){"use strict";var i=n(2),s=n(138),a=n(125),r=n.n(a),o=n(129),c=n.n(o),l=n(127),u=n.n(l);i.default.use(s.a),e.a=new s.a({routes:[{path:"/",component:r.a,children:[{path:"/",name:"Main",component:c.a},{path:"/detail/:id?",name:"Detail",component:u.a}]}]})},function(t,e,n){"use strict";var i=n(2),s=n(140);i.default.use(s.a),e.a=new s.a.Store({state:{nightStyle:!1},mutations:{increment:function(t){t.count++}}})},,function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(113);var i=n(4)(n(82),n(131),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);n.n(i);e.default={data:function(){var t=this;return{sheetVisible:!1,actions:[{name:"夜间模式",method:function(){t.actions[0].name=t.$store.state.nightStyle?"夜间模式":"日间模式",t.$store.state.nightStyle=!t.$store.state.nightStyle}},{name:"设置选项"}]}},components:{Actionsheet:i.Actionsheet},methods:{showAction:function(){this.sheetVisible=!0}},computed:{nightStyle:function(){return this.$store.state.nightStyle}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(123),s=n.n(i);e.default={components:{"custom-header":s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);n.n(i);e.default={props:["topStories"],components:{Swipe:i.Swipe,SwipeItem:i.SwipeItem}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(24),s=n.n(i);e.default={data:function(){return{data:{},dataId:"",scroll:null}},watch:{data:function(){var t=this;this.$nextTick(function(){t.scroll.refresh()}),setTimeout(function(){t.scroll.refresh()},500),setTimeout(function(){t.scroll.refresh()},1e3),setTimeout(function(){t.scroll.refresh()},2e3)}},mounted:function(){var t=this;this.$http.get("/news/"+window.location.hash.split("/")[2]).then(function(e){t.data=e.data}),this.$nextTick(function(){var e=document.getElementById("wrapper");t.scroll=new s.a(e,{startX:0,startY:0,bounce:!1,momentum:!0,probeType:3,click:!0});var n=document.getElementById("head"),i=document.getElementById("head").offsetHeight;t.scroll.on("scroll",function(t){n.style.opacity=""+(t.y+i)/i})})},computed:{nightStyle:function(){return this.$store.state.nightStyle}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(90);e.default={props:["data"],methods:{dateForm:i.a},computed:{nightStyle:function(){return this.$store.state.nightStyle}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(126),s=n.n(i),a=n(128),r=n.n(a),o=n(124),c=n.n(o),l=n(24),u=n.n(l);e.default={components:{"custom-carousel":s.a,"custom-list":r.a,"custom-Loading":c.a},data:function(){return{data:[],topStories:[],date:"",isLoading:!1}},mounted:function(){var t=this,e=null;this.$http.get("/news/latest").then(function(n){t.topStories=n.data.top_stories,t.data.push(n.data),t.date=n.data.date,t.$nextTick(function(){e.refresh()})}),this.$nextTick(function(){var n=document.getElementById("main"),i=document.getElementById("content");e=new u.a(n,{startX:0,startY:0,probeType:3,click:!0,momentum:!0,bounce:!1,deceleration:.003});var s=!0;e.on("scroll",function(a){if(0===a.y&&s&&(s=!1,t.isLoading=!0,t.$http.get("/news/latest").then(function(n){t.topStories=n.data.top_stories,t.data=[n.data],t.date=n.data.date,t.$nextTick(function(){e.refresh(),s=!0,this.isLoading=!1})})),a.y<0){i.offsetHeight-n.offsetHeight- -a.y<=50&&s&&(t.$http.get("/news/before/"+t.date).then(function(n){t.date=n.data.date,t.data.push(n.data),t.$nextTick(function(){e.refresh(),s=!0})}),s=!1)}})})}}},function(t,e,n){"use strict";function i(t){if(!t)return"";t=t.toString();var e=t.slice(0,4),n=t.slice(4,6),i=t.slice(6);return e+"年"+n+"月"+i+"日 星期"+["日","一","二","三","四","五","六"][new Date(e,n-1,i).getDay()]}e.a=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(41),a=n.n(s),r=n(34),o=n(35),c=n(36),l=n.n(c),u=n(37),d=(n.n(u),n(38)),f=(n.n(d),n(9)),v=(n.n(f),n(33)),p=n.n(v),m=n(40),h=n.n(m),_=n(39);n.n(_);i.default.use(l.a),i.default.use(f.Lazyload),i.default.use(h.a,p.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:a.a}})},,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,n){n(115);var i=n(4)(n(83),n(133),null,null);t.exports=i.exports},function(t,e,n){n(112);var i=n(4)(n(84),n(130),"data-v-107fb4e4",null);t.exports=i.exports},function(t,e,n){var i=n(4)(n(85),n(136),null,null);t.exports=i.exports},function(t,e,n){n(116);var i=n(4)(n(86),n(134),null,null);t.exports=i.exports},function(t,e,n){n(117);var i=n(4)(n(87),n(135),null,null);t.exports=i.exports},function(t,e,n){n(114);var i=n(4)(n(88),n(132),"data-v-50165776",null);t.exports=i.exports},function(t,e,n){n(118);var i=n(4)(n(89),n(137),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),t._v(" "),n("div",{staticClass:"circle2"}),t._v(" "),n("div",{staticClass:"circle3"}),t._v(" "),n("div",{staticClass:"circle4"})]),t._v(" "),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),t._v(" "),n("div",{staticClass:"circle2"}),t._v(" "),n("div",{staticClass:"circle3"}),t._v(" "),n("div",{staticClass:"circle4"})]),t._v(" "),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),t._v(" "),n("div",{staticClass:"circle2"}),t._v(" "),n("div",{staticClass:"circle3"}),t._v(" "),n("div",{staticClass:"circle4"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"night-style":t.nightStyle},attrs:{id:"list"}},t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"list-item"},[n("div",{staticClass:"list-title"},[t._v(t._s(0===i?"今日热闻":t.dateForm(e.date)))]),t._v(" "),t._l(e.stories,function(e,i){return n("router-link",{key:i,staticClass:"media-item",attrs:{to:"/detail/"+e.id,tag:"div"}},[n("div",{staticClass:"item-body"},[t._v("\n\t\t           "+t._s(e.title)+"\n\t\t        ")]),t._v(" "),n("div",{staticClass:"item-pic"},[n("img",{attrs:{src:e.images,alt:"",height:"100%",width:"100%"}})])])})],2)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{"night-style":t.nightStyle},attrs:{id:"head"}},[n("div",{staticClass:"left"},[n("i",{staticClass:"menu"}),t._v(" "),n("router-link",{attrs:{to:"/",tag:"span"}},[t._v("首页")])],1),t._v(" "),n("div",{staticClass:"right"},[n("i",{staticClass:"el-icon-information"}),t._v(" "),n("i",{staticClass:"el-icon-more",on:{click:t.showAction}}),t._v(" "),n("Actionsheet",{attrs:{actions:t.actions,cancelText:"",closeOnClickModal:"true"},model:{value:t.sheetVisible,callback:function(e){t.sheetVisible=e},expression:"sheetVisible"}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swipe",{attrs:{auto:4e3,id:"swipe-wrap"}},t._l(t.topStories,function(e,i){return n("swipe-item",{key:i},[n("router-link",{staticClass:"top-img",style:{"background-image":"url("+e.image+")"},attrs:{to:"/detail/"+e.id,tag:"div"}},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"img-mask"})])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("div",{attrs:{id:"detail"}},[t.data.image?n("div",{staticClass:"detail-header"},[n("div",{staticClass:"img-wrap"},[n("h1",{staticClass:"detail-title"},[t._v(t._s(t.data.title))]),t._v(" "),n("span",{staticClass:"img-source"},[t._v(t._s(t.data.image_source))]),t._v(" "),n("div",{staticClass:"top-img",style:{"background-image":"url("+t.data.image+")"}}),t._v(" "),n("div",{staticClass:"img-mask"})])]):t._e(),t._v(" "),n("div",{staticClass:"article",class:{"night-style":t.nightStyle},domProps:{innerHTML:t._s(t.data.body)}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("custom-header"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"content"}},[n("custom-carousel",{attrs:{topStories:t.topStories}}),t._v(" "),n("custom-list",{attrs:{data:t.data}}),t._v(" "),n("custom-Loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1)])},staticRenderFns:[]}}]),[91]);
//# sourceMappingURL=app.a330d6685ca02530327b.js.map