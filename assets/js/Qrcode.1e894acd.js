(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{6476:function(e,t,n){"use strict";n.r(t);n(440),n(438),n(528),n(543),n(444);var r=n(406),a=n.n(r),c=n(413),o=n.n(c),s=n(0),i=n.n(s),l=n(453),w=n.n(l),d=(n(404),n(6059)),f=n.n(d),p=n(598),u=n.n(p),v=n(918),h=n(448);n(343);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=w()("isle:qrcode"),y=/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*))/g,j=function(e){var t,n=e.text,r=e.scale,c=e.width,l=e.center,w=e.showText,d=e.style;Object(s.useEffect)((function(){var e=n||window.location.href;O("Display '".concat(e,"' as QR code...")),f.a.toCanvas(t,e,{scale:r,width:c},O);var a=function(){if(!n){var e=n||window.location.href;O("Display '".concat(e,"' as QR code...")),f.a.toCanvas(t,e,{scale:r,width:c},O)}};return v.a||window.addEventListener("hashchange",a),function(){v.a||window.removeEventListener("hashchange",a)}}),[n,r,c,t]);var p=i.a.createElement("canvas",{className:"qrcode-canvas",ref:function(e){e&&(t=e)}});if(w){var h=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d);return l&&(h.textAlign="center"),a()("div",{className:"qrcode-wrapper ".concat(l?"center":""),style:h},void 0,p,a()("div",{dangerouslySetInnerHTML:{__html:u()(n||window.location.href,y,'<a href="$1">$1</a>')}}))}return a()("div",{style:d,className:"qrcode-wrapper ".concat(l?"center":"")},void 0,p)};j.defaultProps={text:null,scale:8,width:null,showText:!1,center:!1,style:{}},t.default=Object(h.a)(j)}}]);