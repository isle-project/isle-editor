(self.webpackChunk=self.webpackChunk||[]).push([[6470],{153739:function(e,t,r){"use strict";r.r(t);r(627476),r(95767),r(898837),r(694882),r(298351);var s=r(858255),n=r(151119),i=r(574315),c=r(202784),o=(r(213980),r(671655)),a=r(220517),u=r(432261);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r,s){var n="",i=t+s;switch(e){case"left":n="ticker-slide-in-right ",n+=t+"s forwards",n+=", ticker-slide-out-left ",n+=r+"s "+i+"s forwards";break;case"right":n="ticker-slide-in-left ",n+=t+"s forwards",n+=", ticker-slide-out-right ",n+=r+"s "+i+"s forwards";break;case"down":n="ticker-slide-in-top ",n+=t+"s forwards",n+=", ticker-slide-out-bottom ",n+=r+"s "+i+"s forwards";break;case"up":n="ticker-slide-in-bottom ",n+=t+"s forwards",n+=", ticker-slide-out-top ",n+=r+"s "+i+"s forwards";break;case"focus":n="ticker-text-focus-in ",n+=t+"s forwards",n+=", ticker-text-blur-out ",n+=r+"s "+i+"s forwards";break;case"tracking":n="ticker-tracking-in-contract-bck ",n+=t+"s forwards",n+=", ticker-tracking-out-expand-fwd ",n+=r+"s "+i+"s forwards";break;case"swirl":n="ticker-swirl-in-fwd ",n+=t+"s forwards",n+=", ticker-swirl-out-bck ",n+=r+"s "+i+"s forwards"}return n}var w=function(e){var t=e.text,r=e.loop,n=e.direction,u=e.wait,l=e.inTime,w=e.outTime,k=e.hold,b=e.className,p=e.style,v=(0,c.useState)(0),g=(0,i.Z)(v,2),h=g[0],m=g[1],y=(0,c.useRef)(),O=(0,c.useRef)(null),j=(0,c.useState)(!1),P=(0,i.Z)(j,2),E=P[0],x=P[1];(0,o.isPrimitive)(t)&&(t=[t]),r&&1===t.length&&t.push(t[0]);var C=(0,c.useCallback)((function(){r?m(0):clearInterval(y.current)}),[r]),Z=(0,c.useCallback)((function(){h<t.length-1?m(h+1):C()}),[h,t,C]),D=(0,c.useCallback)((function(){if(!O.current)return!1;var e=O.current.getBoundingClientRect().top;x(e>=0&&e<=window.innerHeight)}),[]);(0,c.useEffect)((function(){var e=a.Z?document.getElementById("Lesson"):document;return e.addEventListener("scroll",D),function(){e.removeEventListener("scroll",D)}}),[D]);var I=u+l+w+k;(0,c.useEffect)((function(){return E&&(y.current=setInterval(Z,1e3*I)),function(){y.current&&clearInterval(y.current)}}),[I,Z,E]);var S=c.createElement("p",{className:"scrolling-text ".concat(b),ref:O,style:f({animation:d(n,l,w,k)},p),key:h},t[h]);return"left"===n||"right"===n?(0,s.Z)("div",{style:{overflow:"hidden",width:"100%"}},void 0,S):S};w.defaultProps={text:[],loop:!1,direction:"right",hold:5,wait:3,inTime:1,outTime:1,className:"",style:{}},t.default=(0,u.W)(w)}}]);