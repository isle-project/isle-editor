(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{3726:function(t,e,i){"use strict";var n=i(405),r=Object(n.a)((function(){return Promise.all([i.e(4),i.e(341)]).then(i.bind(null,4428))}));e.a=r},6364:function(t,e,i){"use strict";i.r(e);i(437),i(433),i(430),i(438),i(439);var n=i(407),r=i.n(n),a=i(412),c=i.n(a),h=i(448),o=i.n(h),s=i(0),l=i(1971),d=(i(404),i(464)),w=i(454),u=i(3726),f=i(420),b=i(442);function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){c()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}Object(f.a)("Iframe");var O=function(t){var e=t.title,i=t.src,n=t.id,a=t.fullscreen,c=t.width,h=t.height,f=t.className,b=t.style,g=Object(s.useState)({width:c||window.innerWidth,height:h||window.innerHeight}),O=o()(g,2),j=O[0],y=O[1],m=Object(s.useState)(!1),v=o()(m,2),P=v[0],k=v[1],D=Object(l.a)("Iframe").t;Object(s.useEffect)((function(){a?y({width:window.innerWidth,height:window.innerHeight}):j.width===c&&j.height===h||y({width:c,height:h})}),[j,a,h,c]);var N,S=Object(s.useCallback)((function(t){k(!0)}),[]);return N=p(a?{position:"absolute",width:j.width,height:j.height,top:0,left:0}:{width:j.width,height:j.height},b),r()(d.a,{id:n,className:"center ".concat(f),style:N},void 0,P&&!a?r()(u.a,{header:"".concat(e,": ").concat(i),body:r()("iframe",{src:i,width:"100%",height:"100%",title:e}),className:f,t:D,style:{left:0},wrapInCard:!1}):null,r()("iframe",{src:i,width:j.width,height:j.height,style:{display:P?"inherit":"none"},title:e,onLoad:S}),P?null:r()(w.a,{variant:"warning",style:{margin:0}},void 0,D("alert-message")))};O.defaultProps={title:"An iFrame",fullscreen:!1,width:900,height:600,className:"",style:{}},e.default=Object(b.a)(O)}}]);