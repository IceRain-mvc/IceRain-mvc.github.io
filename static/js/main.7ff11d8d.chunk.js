(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{655:function(e,t,n){},656:function(e,t,n){},657:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(36),i=n.n(o),r=n(42),s=n.n(r),l=n(61),u=n(17),d=n(62),h=n.n(d),j=(n(240),n(672)),f=n(20),m=n(45),p=n(6);var b=Object(m.b)((function(e){return{rootState:e.rootReducers}}))(Object(f.d)((function(e){var t=e.setTwoList,n=e.setOneTitle,a=e.setActiveTwo,o=e.history,i=e.rootState,r=e.location,s=Object(c.useState)(-1),l=Object(u.a)(s,2),d=l[0],h=l[1],f=Object(c.useMemo)((function(){return{rootState:i,renderList:i.filter((function(e){return!e.title.includes(".md")}))}}),[i]);return Object(c.useEffect)((function(){f.renderList.forEach((function(e,t){var n=r.pathname.split("/"),c="";(c=3===n.length?n[n.length-2]:2===n.length?n[n.length-1]:"")&&e.uid.includes(c)&&h(t)}))}),[f.renderList,r.pathname]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(j.b,{itemLayout:"horizontal",className:"list",dataSource:f.renderList,renderItem:function(e,c){return Object(p.jsxs)(j.b.Item,{className:c===d?"active":"common",style:{"--icon":e.icon,"--color":"#cccccc"},onClick:function(){o.push("/".concat(e.uid.split("-")[0],"/").concat(e.children[0].uid.split("-")[0])),t(e.children),n(e.title),h(c),a(c)},children:[Object(p.jsx)("img",{className:"icon_one_title",src:e.icon,alt:"icon"}),Object(p.jsx)(j.b.Item.Meta,{className:"one_title",title:Object(p.jsx)("span",{className:"title_text oneTitle",id:c===d?"activeFont":"commonFont",children:e.title})})]})}})})}))),v="https://cdn.jsdelivr.net/gh/IceRain-mvc/interview@1.9.3";var O=Object(m.b)((function(e){return{rootState:e.rootReducers}}))(Object(f.d)((function(e){var t=e.oneTitle,n=e.twoList,a=void 0===n?[]:n,o=e.setMainDataMd,i=e.setMainDataLoading,r=e.rootState,d=e.location,f=e.history,m=Object(c.useState)(-1),b=Object(u.a)(m,2),O=b[0],g=b[1],x=Object(c.useState)(-1),T=Object(u.a)(x,2),w=T[0],N=T[1],S=Object(c.useState)([]),y=Object(u.a)(S,2),E=y[0],I=y[1];return Object(c.useEffect)((function(){var e=d.pathname.split("/");if(e[e.length-2]){var n=r.filter((function(t){return t.uid.includes(e[e.length-2])}))[0],c=0!==r.length;n&&n.children&&c&&I(n.children),c&&r.forEach((function(t){t.uid.includes(e[e.length-2])&&N(t.title)})),c&&E&&E.forEach((function(t,n){t.uid.includes(e[e.length-1])&&g(n)}))}else I(a),N(t)}),[t,d.pathname,r,a,E]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(j.b,{itemLayout:"horizontal",className:"list",dataSource:E,renderItem:function(e,t){return Object(p.jsx)(j.b.Item,{className:t===O?"active":"",onClick:Object(l.a)(s.a.mark((function n(){var c,a,r,l;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==O){n.next=2;break}return n.abrupt("return");case 2:return g(t),c="".concat(v,"/").concat(encodeURIComponent(w),"/").concat(encodeURIComponent(e.title)),i(!0),a=d.pathname.split("/"),r=a[a.length-2],f.push("/".concat(r,"/").concat(e.uid.split("-")[0])),n.prev=8,n.next=11,h.a.get(c);case 11:l=n.sent,o(l.data),n.next=17;break;case 15:n.prev=15,n.t0=n.catch(8);case 17:return n.prev=17,i(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[8,15,17,20]])}))),children:Object(p.jsx)(j.b.Item.Meta,{title:Object(p.jsx)("span",{className:"title_text",id:t===O?"activeFont":"commonFont",children:e.filterTitle||e.title})})})}})})}))),g=n(9),x=n(14),T=n(48),w=n(207),N=n(211),S=n(208),y=n(673),E=n(206),I=n(195),k=(n(323),n(31)),C=n(75),L=n(54),_=n(57),H=["level","children"],R={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6"};function A(e){var t=e.level,n=e.children,c=Object(T.a)(e,H);return a.a.createElement(R[t]||R.h1,c,n)}A.defaultProps={type:"h1"};var F=A,M=function(e){Object(L.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(k.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).renderHtml=function(){var t=e.props,n=t.level,c=t.children;if(c&&c.length>0){var a=c[0];return Object(p.jsxs)(F,{level:"h".concat(n),id:a,children:[Object(p.jsx)("a",{href:"#".concat(a),className:"link",children:"#"}),Object(p.jsx)("span",{className:"title",children:c})]})}return Object(p.jsx)(p.Fragment,{children:c})},e}return Object(C.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:this.renderHtml()})}}]),n}(c.PureComponent),D=M,P=n(13),U=function(e){Object(L.a)(n,e);var t=Object(_.a)(n);function n(e){var c;return Object(k.a)(this,n),(c=t.call(this,e)).getCurrentHashValue=function(){return decodeURIComponent(window.location.hash.replace(/^#/,""))},c.winScroll=function(){if(!c.scrollEventLock){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=c.getHeadingList().map((function(t){return Object(x.a)(Object(x.a)({},t),{},{distanceToTop:Math.abs(e+c.props.headingTopOffset-t.offsetTop)})})),n=t.map((function(e){return e.distanceToTop})),a=Math.min.apply(Math,Object(P.a)(n)),o=t.find((function(e){return e.distanceToTop===a}));c.props.updateHashAuto&&(o.dataId!==c.getCurrentHashValue()&&c.props.onHashChange(o.dataId,c.getCurrentHashValue()),c.updateHash(o.dataId)),c.setState({currentListNo:o.listNo})}},c.winHashChange=function(){c.scrollToTarget(c.getCurrentHashValue())},c.state={currentListNo:""},c}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.addTargetTimeout&&clearTimeout(this.addTargetTimeout),this.addTargetTimeout=setTimeout((function(){e.initHeadingsId()}),500)}},{key:"shouldComponentUpdate",value:function(e){var t=this;if(e.source!==this.props.source){this.scrollEventLockTimer&&clearTimeout(this.scrollEventLockTimer),this.scrollEventLock=!0,window.scrollTo(0,0),this.setState({currentListNo:""});var n=document.querySelectorAll("h1, h2, h3, h4, h5, h6");Array.prototype.slice.apply(n).forEach((function(e){return e.dataset.id=""})),this.scrollEventLockTimer=setTimeout((function(){t.initHeadingsId(),t.scrollEventLock=!1}),500)}return!0}},{key:"componentWillUnmount",value:function(){this.addTargetTimeout&&clearTimeout(this.addTargetTimeout),this.scrollTimeout&&clearTimeout(this.scrollTimeout),document.removeEventListener("scroll",this.winScroll,!1),window.removeEventListener("hashchange",this.winHashChange,!1)}},{key:"getNavStructure",value:function(){var e=this.props.source.replace(/^[^#]+\n/g,"").replace(/^#\s[^#\n]*\n+/,"").replace(/```[^`\n]*\n+[^```]+```\n+/g,"").replace(/`([^`\n]+)`/g,"$1").replace(/\*\*?([^*\n]+)\*\*?/g,"$1").replace(/__?([^_\n]+)__?/g,"$1").trim(),t=/#+\s([^#\n]+)\n*/g,n=e.match(t);if(!n)return[];for(var c=n.map((function(e,n){return{index:n,level:e.match(/^#+/g)[0].length,text:e.replace(t,"$1")}})),a=function(e){return c.filter((function(t){return t.level===e})).length},o=1,i=a(o);!i;)i=a(o+=1);var r=1;return c.forEach((function(e){e.level===o&&(e.listNo=r.toString(),r+=1)})),c.forEach((function(e,t){e.listNo||(c[t-1]&&e.level===c[t-1].level+1?e.listNo="".concat(c[t-1].listNo,".1"):c[t-1]&&e.level===c[t-1].level?e.listNo=c[t-1].listNo.replace(/^(.+\.)(\d+)$/g,(function(e,t,n){return"".concat(t).concat(parseInt(n,10)+1)})):e.listNo="")})),c.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{listNo:e.listNo.indexOf(".")<0?"".concat(e.listNo,"."):e.listNo,text:e.text})}))}},{key:"scrollToTarget",value:function(e){var t=this;this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((function(){var n=document.querySelector('[data-id="'.concat(e,'"]'));n&&"number"===typeof n.offsetTop&&window.scrollTo(0,n.offsetTop-t.props.headingTopOffset)}),0)}},{key:"initHeadingsId",value:function(){var e=this,t=decodeURIComponent(this.props.declarative?window.location.hash.replace(/^#/,"").trim():(window.location.hash.match(/heading-\d+/g)||[])[0]);this.getNavStructure().forEach((function(n){var c=document.querySelectorAll("h".concat(n.level)),a=Array.prototype.slice.apply(c).find((function(e){return e.innerText===n.text&&(!e.dataset||!e.dataset.id)}));a&&(a.dataset.id=e.props.declarative?n.text:"heading-".concat(n.index),t&&t===a.dataset.id&&(e.scrollToTarget(t),e.setState({currentListNo:n.listNo})))}))}},{key:"getHeadingList",value:function(){var e=this,t=[];return this.getNavStructure().forEach((function(n){var c=document.querySelectorAll("h".concat(n.level)),a=Array.prototype.slice.apply(c).find((function(e){return e.innerText===n.text&&!t.find((function(t){return t.offsetTop===e.offsetTop}))}));a&&t.push({dataId:e.props.declarative?n.text:"heading-".concat(n.index),listNo:n.listNo,offsetTop:a.offsetTop})})),t}},{key:"updateHash",value:function(e){window.history.replaceState({},"","".concat(window.location.pathname).concat(window.location.search,"#").concat(e))}},{key:"render",value:function(){var e=this,t=this.getNavStructure().map((function(t){var n="title-anchor title-level".concat(t.level," ").concat(e.state.currentListNo===t.listNo?"active":"");return Object(p.jsxs)("a",{className:n,href:"#".concat(t.text),onClick:function(n){var c=e.props.declarative?t.text:"heading-".concat(t.index);t.listNo!==e.state.currentListNo&&e.props.onHashChange(c,e.getCurrentHashValue()),e.props.onNavItemClick(n,n.target,c),e.updateHash(c),e.scrollToTarget(c),e.setState({currentListNo:t.listNo})},children:[e.props.ordered?Object(p.jsx)("small",{children:t.listNo}):null,t.text]},"title_anchor_".concat(Math.random().toString(36).substring(2)))}));return Object(p.jsx)("div",{className:"markdown-navigation ".concat(this.props.className),children:t})}}]),n}(c.Component);U.defaultProps={source:"",ordered:!0,headingTopOffset:0,updateHashAuto:!0,declarative:!1,className:"",onNavItemClick:function(){},onHashChange:function(){}};var V=U,z=["node"],q=["node"],$=["node"],B=["node"],J=["node"],G=["node"],Y=["node","inline","className","children"];var Q=Object(m.b)((function(e){return{rootState:e.rootReducers}}))(Object(f.d)((function(e){var t=e.mainDataMd,n=e.mainDataLoading,a=e.location,o=e.rootState,i=Object(c.useState)(""),r=Object(u.a)(i,2),d=r[0],j=r[1],f=Object(c.useState)(!1),m=Object(u.a)(f,2),b=m[0],O=m[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({url:"".concat(v,"/readme.md"),method:"GET"});case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){O(n)}),[n]),Object(c.useEffect)((function(){var e=a.pathname.split("/");if(e[2]){var t="",n="",c=[];if(o.forEach((function(n){n.uid.includes(e[1])&&(t=n.title,c=n.children)})),c&&c.forEach((function(t){t.uid.includes(e[2])&&(n=t.title)})),t&&n){var i=function(){var e=Object(l.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,h()({url:"".concat(v,"/").concat(encodeURIComponent(t),"/").concat(encodeURIComponent(n)),method:"GET"});case 3:c=e.sent,O(!1),j(c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i()}}}),[t,a.pathname,o]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{className:"homeIcon homeIcon_active",onClick:function(){return window.location.href="/"},src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/home.svg",alt:""}),Object(p.jsx)(I.a,{delay:"200ms",tip:"\u52a0\u8f7d\u4e2d...",spinning:b,children:Object(p.jsxs)("div",{className:"md_container",children:[Object(p.jsx)("div",{className:"md_content",children:Object(p.jsx)(w.a,Object(g.a)({children:d,rehypePlugins:[N.a],remarkPlugins:[S.a],components:{h2:function(e){e.node;var t=Object(T.a)(e,z);return Object(p.jsx)(D,Object(x.a)({},t))},h3:function(e){e.node;var t=Object(T.a)(e,q);return Object(p.jsx)(D,Object(x.a)({},t))},h4:function(e){e.node;var t=Object(T.a)(e,$);return Object(p.jsx)(D,Object(x.a)({},t))},h5:function(e){e.node;var t=Object(T.a)(e,B);return Object(p.jsx)(D,Object(x.a)({},t))},h6:function(e){e.node;var t=Object(T.a)(e,J);return Object(p.jsx)(D,Object(x.a)({},t))},img:function(e){e.node;var t=Object(T.a)(e,G);return Object(p.jsx)("img",Object(x.a)({alt:"\u56fe\u7247",style:{width:"50%"}},t))},code:function(e){e.node;var t=e.inline,n=e.className,c=e.children,a=Object(T.a)(e,Y),o=/language-(\w+)/.exec(n||"");return!t&&o?Object(p.jsx)(y.a,Object(x.a)({children:String(c).replace(/\n$/,""),style:E.dracula,language:o[1],PreTag:"div"},a)):Object(p.jsx)("code",Object(x.a)(Object(x.a)({className:n},a),{},{children:c}))}}},"children",d))}),Object(p.jsx)("div",{className:"md_navigation",children:Object(p.jsx)("div",{className:"md_nav_content",children:Object(p.jsx)(V,{onNavItemClick:function(e,t,n){},updateHashAuto:!0,declarative:!0,source:d})})})]})})]})}))),K=n(93);var W=Object(f.d)((function(e){var t=e.location,n=Object(c.useState)(window.location.origin+window.location.pathname),a=Object(u.a)(n,2),o=a[0],i=a[1],r=Object(c.useState)(!0),s=Object(u.a)(r,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){d(!1),i(window.location.origin+t.pathname),setTimeout((function(){d(!0)}),0)}),[t.pathname]),Object(p.jsx)("div",{className:"ValineContainer",children:l&&Object(p.jsxs)("div",{className:"Valine",style:{color:"var(--text-primary)",background:"var(--background-color)"},children:[l&&Object(p.jsx)(K.ValinePanel,{uniqStr:o}),"\u9875\u9762\u6d4f\u89c8\u91cf\uff1a",Object(p.jsx)(K.ValinePageview,{}),"\u6b21"]})})})),X=(n(655),n(656),Object(m.b)((function(){return{}}),(function(e){return{setRootData:function(t){e({type:"PUSH_ALL",payload:t})}}}))(Object(f.d)((function(e){var t=e.setRootData,n=e.location,a=Object(c.useRef)(),o=Object(c.useState)([]),i=Object(u.a)(o,2),r=i[0],d=i[1],j=Object(c.useState)([]),f=Object(u.a)(j,2),m=f[0],g=f[1],x=Object(c.useState)(""),T=Object(u.a)(x,2),w=T[0],N=T[1],S=Object(c.useState)(""),y=Object(u.a)(S,2),E=y[0],I=y[1],k=Object(c.useState)(!1),C=Object(u.a)(k,2),L=C[0],_=C[1],H=Object(c.useState)(-1),R=Object(u.a)(H,2),A=R[0],F=R[1],M=Object(c.useState)(!0),D=Object(u.a)(M,2),P=D[0],U=D[1],V=Object(c.useState)(!1),z=Object(u.a)(V,2),q=z[0],$=z[1],B=Object(c.useState)(!1),J=Object(u.a)(B,2),G=J[0],Y=J[1],K=Object(c.useState)(!1),X=Object(u.a)(K,2),Z=X[0],ee=X[1],te=Object(c.useState)(!0),ne=Object(u.a)(te,2),ce=ne[0],ae=ne[1],oe=Object(c.useState)("https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/%E5%85%A8%E5%B1%8F%E6%98%BE%E7%A4%BA.svg"),ie=Object(u.a)(oe,1)[0],re=Object(c.useState)("https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/%E9%9A%90%E8%97%8F.svg"),se=Object(u.a)(re,1)[0];window.onresize=function(){!function(){var e=document.fullscreenEnabled&&(window.fullScreen||document.webkitIsFullScreen||document.msFullscreenEnabled);void 0===e&&(e=!1)}()};return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v,"/data.json"));case 2:n=e.sent,d(n.data),t(n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),n.pathname.split("/").length>2?(F(0),Y(!0),$(!0)):($(!1),Y(!1))}),[]),Object(c.useEffect)((function(){ae(!0)}),[n.pathname]),Object(p.jsxs)("div",{className:"container_Box",children:[Object(p.jsxs)("div",{className:"layerIcon",children:[Object(p.jsx)("img",{onClick:function(){U(!P)},className:"one_hide_show ".concat(P?"":"hiddenOneIcon"),src:se,alt:""}),Object(p.jsx)("img",{className:"two_hide_show ".concat(q?"":"hiddenTwoIcon"," ").concat(G?"":"hidden"),src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/%E9%9A%90%E8%97%8F.svg",onClick:function(){$(!q)},alt:""}),Object(p.jsx)("img",{className:"zoom",onClick:function(){a.current.requestFullscreen()},src:ie,alt:""})]}),Object(p.jsx)("div",{className:"one ".concat(P?"":"hidden"),children:Object(p.jsx)(b,{dataList:r,setActiveTwo:function(e){F(e),-1!==e&&(Y(!0),$(!0))},setOneTitle:N,setTwoList:g})}),Object(p.jsx)("div",{className:"two ".concat(q?"":"hidden"),children:Object(p.jsx)(O,{oneTitle:w,twoList:m,flag:A,setMainDataLoading:_,setMainDataMd:I})}),Object(p.jsxs)("div",{className:"main",ref:a,children:[ce&&Object(p.jsxs)("div",{onMouseLeave:function(e){ee(!1)},onMouseEnter:function(e){ee(!0)},className:"ReceivingCode",children:[Z&&Object(p.jsx)("img",{onClick:function(){ae(!1),ee(!1)},className:"closeQr",src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/close.png",alt:"\u5173\u95ed"}),Object(p.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/7051633947053_.pic_hd.jpg",alt:""})]}),Object(p.jsx)(Q,{mainDataMd:E,mainDataLoading:L}),Object(p.jsx)(W,{})]})]})})))),Z=n(59),ee=n(147);var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"PUSH_ALL"===t.type?e=JSON.parse(JSON.stringify(t.payload)):e},ne=Object(ee.a)({rootReducers:te}),ce=Object(ee.b)(ne);window.$store=ce;var ae=ce;var oe=function(){return Object(p.jsx)(K.Valine,{appId:"IyJXEIioe8IqNI36yvn6wei0-gzGzoHsz",appKey:"6CrfcoYHY6QzJI6lAa4pjw3w",pagesize:12,previewShow:!1,serverURLs:"https://iyjxeiio.lc-cn-n1-shared.com",CommentClass:"valine_comment",CounterClass:"valine_counter",customTxt:{tips:{sofa:"\u62a2\u4e2a\u6c99\u53d1\u5427~"},ctrl:{more:"\u52a0\u8f7d\u66f4\u591a"}},children:Object(p.jsx)(m.a,{store:ae,children:Object(p.jsx)(Z.a,{children:Object(p.jsx)(X,{})})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,674)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(oe,{})}),document.getElementById("root")),ie()}},[[657,1,2]]]);
//# sourceMappingURL=main.7ff11d8d.chunk.js.map
