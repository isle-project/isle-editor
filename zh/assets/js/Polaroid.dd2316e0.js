(self.webpackChunk=self.webpackChunk||[]).push([[5215],{230627:function(e,t,i){"use strict";i.r(t);i(627476),i(95767),i(898837),i(694882),i(298351);var o,r,a=i(858255),n=i(151119),l=i(574315),c=i(202784),s=(i(213980),i(341327)),u=i.n(s),d=i(432261);function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}var p=function(e){var t=e.image,i=e.draggable,s=e.id,d=e.onClick,p=e.showPin,b=e.stain,f=e.width,g=e.style,v=(0,c.useState)(!1),w=(0,l.Z)(v,2),O=w[0],k=w[1],y=(0,c.useState)({height:"100%",width:"auto"}),m=(0,l.Z)(y,2),P=m[0],j=m[1],C=(0,c.useCallback)((function(){k(!0)}),[]),Z=(0,c.useCallback)((function(){k(!1)}),[]),N=(0,c.useCallback)((function(){d&&d(s)}),[s,d]),S=(0,c.useCallback)((function(e){var t="100%",i="auto";"wide"===e&&(t="auto",i="100%"),j({width:t,height:i})}),[]);(0,c.useEffect)((function(){if(t){var e=new Image;e.src=t,e.onload=function(){this.height>this.width?S("high"):S("wide")}}}),[t,S]);var D={backgroundImage:"url("+t+")",backgroundSize:P.width+" "+P.height,backgroundPosition:"center"},E="polaroid";d&&(E+=" clickable-polaroid");var I="polaroid-image";!0===O&&(I="polaroid-image polaroid-touched");var M=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},g);M.width=f,M.height=1.1*M.width;var x=(0,a.Z)("div",{id:s,role:"button",tabIndex:0,onMouseOver:C,onFocus:C,onMouseOut:Z,onBlur:Z,onClick:N,onKeyPress:N,style:M,className:E},void 0,(0,a.Z)("div",{className:"polaroid-wrapper"},void 0,b?o||(o=(0,a.Z)("div",{className:"polaroid-stain"})):null,(0,a.Z)("div",{style:D,className:I}),p?r||(r=(0,a.Z)("div",{className:"polaroid-pin"})):null));return i?(0,a.Z)(u(),{},void 0,x):x};p.defaultProps={image:null,draggable:!1,showPin:!1,stain:!1,width:350,style:{},onClick:null},t.default=(0,d.W)(p)}}]);