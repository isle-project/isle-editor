(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{6475:function(e,t,o){"use strict";o.r(t);o(440),o(438),o(528),o(543),o(444);var i=o(406),n=o.n(i),r=o(413),a=o.n(r),c=o(462),l=o.n(c),s=o(0),u=(o(404),o(825)),d=o.n(u),b=o(448);o(342);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}var h=n()("div",{className:"polaroid-stain"}),O=n()("div",{className:"polaroid-pin"}),g=function(e){var t=e.image,o=e.draggable,i=e.id,r=e.onClick,c=e.showPin,u=e.stain,b=e.width,g=e.style,w=Object(s.useState)(!1),f=l()(w,2),v=f[0],j=f[1],y=Object(s.useState)({height:"100%",width:"auto"}),k=l()(y,2),m=k[0],P=k[1],C=Object(s.useCallback)((function(){j(!0)}),[]),N=Object(s.useCallback)((function(){j(!1)}),[]),S=Object(s.useCallback)((function(){r&&r(i)}),[i,r]),D=Object(s.useCallback)((function(e){var t="100%",o="auto";"wide"===e&&(t="auto",o="100%"),P({width:t,height:o})}),[]);Object(s.useEffect)((function(){if(t){var e=new Image;e.src=t,e.onload=function(){this.height>this.width?D("high"):D("wide")}}}),[t,D]);var E={backgroundImage:"url("+t+")",backgroundSize:m.width+" "+m.height,backgroundPosition:"center"},I="polaroid";r&&(I+=" clickable-polaroid");var J="polaroid-image";!0===v&&(J="polaroid-image polaroid-touched");var M=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},g);M.width=b,M.height=1.1*M.width;var x=n()("div",{id:i,role:"button",tabIndex:0,onMouseOver:C,onFocus:C,onMouseOut:N,onBlur:N,onClick:S,onKeyPress:S,style:M,className:I},void 0,n()("div",{className:"polaroid-wrapper"},void 0,u?h:null,n()("div",{style:E,className:J}),c?O:null));return o?n()(d.a,{},void 0,x):x};g.defaultProps={image:null,draggable:!1,showPin:!1,stain:!1,width:350,style:{},onClick:null},t.default=Object(b.a)(g)}}]);