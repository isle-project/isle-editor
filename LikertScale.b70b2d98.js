(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{6589:function(e,t,n){"use strict";n.r(t);n(413),n(410),n(397),n(396),n(368),n(408);var s=n(366),i=n.n(s),o=n(372),r=n.n(o),a=n(524),c=n.n(a),l=n(0),u=(n(358),n(454)),b=n(1204),p=n(394),d=n(776),f=n(955),y=n.n(f),O=n(645),g=n(439),m=n(957),v=n(443);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(O.a)("likert-scale"),N=i()("br",{}),P=i()("br",{}),S=function(e){var t=e.id||h(e),n=Object(l.useContext)(g.a),s=Object(l.useState)(null),o=c()(s,2),r=o[0],a=o[1],f=Object(l.useState)(!1),O=c()(f,2),w=O[0],S=O[1],k=function(e){a(e.target.value)},R=e.noMultipleResponses&&w;return i()(u.a,{className:"".concat(e.className," center"),style:j({width:"75%"},e.style)},void 0,i()(u.a.Body,{},void 0,i()(d.a,{className:"center"},void 0,i()("label",{},void 0,e.question),N,e.options.map((function(e,t){return i()(b.a.Check,{type:"radio",label:e,checked:r===e,value:e,disabled:R,inline:!0,onClick:k},t)}))),P,i()(p.a,{className:"submit-button",variant:"primary",size:"sm",disabled:!r||R,onClick:function(){e.disableSubmitNotification||n.addNotification({title:"Answer submitted.",message:"Your answer was successfully stored",level:"success"}),S(!0),n.log({id:t,type:v.ub,value:y()(e.options,r)})},style:{marginRight:"5px"}},void 0,w&&!e.noMultipleResponses?"Resubmit":"Submit"),i()(m.a,{buttonLabel:"Responses",id:t,data:{type:"factor",levels:e.options},info:v.ub})))};S.defaultProps={question:"",options:["Strongly disagree","Disagree","Neither agree nor disagree","Agree","Strongly agree"],noMultipleResponses:!1,disableSubmitNotification:!1,className:"",style:{}},t.default=S}}]);