(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{6464:function(e,t,n){"use strict";n.r(t);var r=n(404),i=n.n(r),s=n(410),a=n.n(s),o=n(457),c=n.n(o),l=(n(511),n(438),n(436),n(525),n(540),n(441),n(0)),u=n(2022),b=(n(402),n(473)),p=n(933),d=n(431),f=n(665),O=n(656),m=n.n(O),y=n(612),g=n(465),v=n(818),j=n(471),w=n(445);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(y.a)("likert-scale"),N=["strongly-disagree","disagree","neither-agree-nor-disagree","agree","strongly-agree"],S=i()("br",{}),C=i()("br",{}),D=function(e){var t=e.id||P(e),n=Object(l.useContext)(g.a),r=Object(l.useState)(null),s=c()(r,2),a=s[0],o=s[1],O=Object(l.useState)(!1),y=c()(O,2),w=y[0],h=y[1],D=Object(u.a)("LikertScale").t,R=e.options||N.map((function(e){return D(e)})),M=function(e){o(e.target.value)},q=e.noMultipleResponses&&w;return i()(b.a,{className:"".concat(e.className," center"),style:k({width:"75%"},e.style)},void 0,i()(b.a.Body,{},void 0,i()(f.a,{className:"center"},void 0,i()("label",{},void 0,e.question),S,R.map((function(e,t){return i()(p.a.Check,{type:"radio",label:e,checked:a===e,value:e,disabled:q,inline:!0,onClick:M},t)}))),C,i()(d.a,{className:"submit-button",variant:"primary",size:"sm",disabled:!a||q,onClick:function(){e.disableSubmitNotification||n.addNotification({title:D("answer-submitted"),message:D("answer-submitted-msg"),level:"success"}),h(!0),n.log({id:t,type:j.ub,value:m()(R,a)})},style:{marginRight:"5px"}},void 0,w&&!e.noMultipleResponses?D("resubmit"):D("submit")),i()(v.a,{buttonLabel:D("responses"),id:t,data:{type:"factor",levels:R},info:j.ub})))};D.defaultProps={question:"",options:null,noMultipleResponses:!1,disableSubmitNotification:!1,className:"",style:{}},t.default=Object(w.a)(D)}}]);