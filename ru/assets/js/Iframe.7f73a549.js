(self.webpackChunk=self.webpackChunk||[]).push([[5797],{231361:function(e,t,n){"use strict";n.r(t);n(627476),n(95767),n(898837),n(694882),n(298351);var r=n(858255),i=n(151119),c=n(574315),a=n(202784),o=n(376699),s=(n(213980),n(260952)),h=n(822736),u=n(558797),l=n(432261),d=n(42111),f=n(741319),w=n(5140);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=(0,d.Z)("iframe"),y=function(e){var t=(0,a.useRef)(e.id||b(e)),n=(0,a.useRef)(null),i=e.title,l=e.src,d=e.fullscreen,g=e.width,y=e.height,m=e.className,v=e.style,O=(0,a.useState)({width:g||window.innerWidth,height:y||window.innerHeight}),Z=(0,c.Z)(O,2),j=Z[0],P=Z[1],E=(0,a.useContext)(f.Z),k=(0,a.useState)(!1),C=(0,c.Z)(k,2),D=C[0],N=C[1],S=(0,o.$)("iframe").t;(0,a.useEffect)((function(){var e=function(){document.activeElement===n.current&&E.log({id:t.current,type:w.Rb,value:!0})};return window.addEventListener("blur",e),function(){window.removeEventListener("blur",e)}}),[E]),(0,a.useEffect)((function(){d?P({width:window.innerWidth,height:window.innerHeight}):j.width===g&&j.height===y||P({width:g,height:y})}),[j,d,y,g]);var L,R=(0,a.useCallback)((function(e){N(!0)}),[]);return L=p(d?{position:"absolute",width:j.width,height:j.height,top:0,left:0}:{width:j.width,height:j.height},v),(0,r.Z)(s.Z,{id:"".concat(t.current,"-card"),className:"center ".concat(m),style:L},void 0,D&&!d?(0,r.Z)(u.Z,{header:"".concat(i,": ").concat(l),body:(0,r.Z)("iframe",{src:l,width:"100%",height:"100%",title:i}),className:m,t:S,style:{left:0},wrapInCard:!1}):null,a.createElement("iframe",{id:t.current,ref:n,src:l,width:j.width,height:j.height,style:{display:D?"inherit":"none"},title:i,onLoad:R}),D?null:(0,r.Z)(h.Z,{variant:"warning",style:{margin:0}},void 0,S("alert-message")))};y.defaultProps={title:"An iFrame",fullscreen:!1,width:900,height:600,className:"",style:{}},t.default=(0,l.W)(y)},558797:function(e,t,n){"use strict";var r=(0,n(844601).Z)((function(){return Promise.all([n.e(1982),n.e(2767)]).then(n.bind(n,987980))}));t.Z=r}}]);