/*! For license information please see dll.ColorPicker.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[32],{835:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),c=n.n(o),l=n(1),i=n.n(l),s=n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(s.default)((function(){return Promise.all([n.e(6),n.e(215)]).then(n.t.bind(null,3339,7))})),p=Object(s.default)((function(){return Promise.all([n.e(6),n.e(214)]).then(n.t.bind(null,3343,7))})),m=Object(s.default)((function(){return Promise.all([n.e(6),n.e(254)]).then(n.t.bind(null,3347,7))})),O=Object(s.default)((function(){return Promise.all([n.e(6),n.e(238)]).then(n.t.bind(null,3349,7))})),d=function(e){var t;switch(e.variant){case"Block":t=c.a.createElement(O,e);break;case"Compact":t=c.a.createElement(p,e);break;case"Material":t=c.a.createElement(m,e);break;case"Sketch":default:t=c.a.createElement(b,e)}return c.a.createElement("div",{className:e.className,style:f({width:"fit-content",margin:"0 auto"},e.style)},t)};d.propTypes={variant:i.a.oneOf(["Sketch","Material","Block","Compact"]),color:i.a.oneOfType([i.a.string,i.a.object]),disableAlpha:i.a.bool,presetColors:i.a.arrayOf(i.a.string),width:i.a.number,className:i.a.string,style:i.a.object,onChange:i.a.func,onChangeComplete:i.a.func},d.defaultProps={variant:"Sketch",color:"#fff",disableAlpha:!1,presetColors:["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],width:200,className:"",style:{},onChange:function(){},onChangeComplete:function(){}},t.default=d}}]);