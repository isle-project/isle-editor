(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{6736:function(e,t,n){"use strict";n.r(t);var a=n(367),c=n.n(a),i=n(0),o=n.n(i),s=n(421),r=n.n(s),l=(n(359),n(6214)),h=n.n(l),d=n(1184),w=r()("isle:qrcode"),u=function(e){var t,n=e.text,a=e.scale,s=e.width,r=e.height,l=e.center,u=e.showText,v=e.style;Object(i.useEffect)((function(){var e=n||window.location.href;w("Display '".concat(e,"' as QR code...")),h.a.toCanvas(t,e,{scale:a,width:s,height:r},w);var c=function(){if(!n){var e=n||window.location.href;w("Display '".concat(e,"' as QR code...")),h.a.toCanvas(t,e,{scale:a,width:s,height:r},w)}};return d.a||window.addEventListener("hashchange",c),function(){d.a||window.removeEventListener("hashchange",c)}}),[n,a,s,r,t]);var f=o.a.createElement("canvas",{className:"qrcode-canvas ".concat(l?"center":""),ref:function(e){e&&(t=e)},style:v});if(u){var g={};return l&&(g.textAlign="center"),c()(i.Fragment,{},void 0,f,c()("div",{className:"title",style:g},void 0,n||window.location.href))}return f};u.defaultProps={text:null,scale:8,width:null,height:null,showText:!1,center:!1,style:{}},t.default=u}}]);