(self.webpackChunk=self.webpackChunk||[]).push([[3415],{668816:function(e,t,r){"use strict";r.r(t);r(627476),r(95767),r(898837),r(694882),r(298351);var n=r(858255),c=r(151119),a=r(202784),o=r(911755),s=r.n(o),i=(r(213980),r(374061)),l=r(431926),f=r.n(l),u=r(220517),w=r(432261);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=s()("isle:qrcode"),h=/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*))/g,v=function(e){var t,r=e.text,o=e.scale,s=e.width,l=e.center,w=e.showText,v=e.style;(0,a.useEffect)((function(){var e=r||window.location.href;p("Display '".concat(e,"' as QR code...")),i.toCanvas(t,e,{scale:o,width:s},p);var n=function(){if(!r){var e=r||window.location.href;p("Display '".concat(e,"' as QR code...")),i.toCanvas(t,e,{scale:o,width:s},p)}};return u.Z||window.addEventListener("hashchange",n),function(){u.Z||window.removeEventListener("hashchange",n)}}),[r,o,s,t]);var y=a.createElement("canvas",{className:"qrcode-canvas",ref:function(e){e&&(t=e)}});if(w){var b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},v);return l&&(b.textAlign="center"),(0,n.Z)("div",{className:"qrcode-wrapper ".concat(l?"center":""),style:b},void 0,y,(0,n.Z)("div",{dangerouslySetInnerHTML:{__html:f()(r||window.location.href,h,'<a href="$1">$1</a>')}}))}return(0,n.Z)("div",{style:v,className:"qrcode-wrapper ".concat(l?"center":"")},void 0,y)};v.defaultProps={text:null,scale:8,width:null,showText:!1,center:!1,style:{}},t.default=(0,w.W)(v)}}]);