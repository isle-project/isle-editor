(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{3742:function(e,t,r){"use strict";r.r(t);r(440),r(438),r(528),r(543),r(444);var n=r(413),i=r.n(n),a=r(406),o=r.n(a),c=r(462),l=r.n(c),d=r(0),s=(r(404),r(2030)),p=r(825),f=r.n(p),b=r(635),u=r.n(b),v=r(463),h=r(433),y=r(451),g=r.n(y),k=r(448);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.defaultValue,r=Object(d.useState)(t),n=l()(r,2),i=n[0],a=n[1],c=Object(d.useState)(!1),p=l()(c,2),b=p[0],y=p[1],k=Object(s.a)("General").t;if(Object(d.useEffect)((function(){a(t)}),[t]),!g()(e.children))return o()(v.a,{variant:"danger"},void 0,k("flippable-requires-two-children"));var O=function(){if(void 0!==e.value)return e.onChange(!e.value);e.oneTime?b||(y(!0),a(!i),e.onChange(!i)):(a(!i),e.onChange(!i))},w=void 0!==e.value?e.value:i,j={container:S({float:"left",perspective:e.perspective,transformStyle:"preserve-3d",width:e.size,height:e.size,cursor:"pointer"},e.containerStyle),flipper:{position:"relative",transformStyle:"preserve-3d",width:"100%",height:"100%"},front:S({background:"gainsboro",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",left:"0",position:"absolute",top:"0",transform:"rotateY(".concat(w?180:0,"deg)"),transformStyle:"preserve-3d",width:"100%",height:"100%",zIndex:"2",transition:"".concat(e.flipSpeedBackToFront,"s")},e.frontStyle),back:S({background:"pink",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",left:"0",position:"absolute",transform:"rotateY(".concat(w?0:-180,"deg)"),transformStyle:"preserve-3d",top:"0",width:"100%",height:"100%",zIndex:2,transition:"".concat(e.flipSpeedFrontToBack,"s")},e.backStyle)},m=e.button?o()(h.a,{onClick:e.disabled?u.a:O,block:!0},void 0,e.button):null,P=m||e.disabled?u.a:O,B=o()("div",{id:e.id,role:"button",tabIndex:0,onClick:P,onKeyPress:P,className:"react-card-flip",style:j.container},void 0,o()("div",{className:"react-card-flipper",style:j.flipper},void 0,o()("div",{className:"react-card-front",style:j.front},void 0,e.children[0],m),o()("div",{className:"react-card-back",style:j.back},void 0,e.children[1],m)));return e.draggable?o()(f.a,{},void 0,B):B};w.defaultProps={button:null,children:null,draggable:!1,flipSpeedBackToFront:1,flipSpeedFrontToBack:1,oneTime:!1,perspective:1e3,size:250,disabled:!1,value:void 0,defaultValue:!1,containerStyle:{},frontStyle:{},backStyle:{},onChange:function(){}},t.default=Object(k.a)(w)}}]);