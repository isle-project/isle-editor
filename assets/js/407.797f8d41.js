(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1210:function(e,t,a){"use strict";var n=a(749),i=a.n(n),r=a(432);t.a=function(e,t){var a=i()(t);if(!i()(e))throw new TypeError("invalid input argument. Must provide an array. Value: `"+e+"`.");if(!a&&!Object(r.isPrimitive)(t))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+t+"`.");var n=e.length,o=new Array(n);if(a){if(n!==t.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var u=0;u<n;u++)o[u]=e[u]-t[u]}else for(var s=0;s<n;s++)o[s]=e[s]-t;return o}},506:function(e,t,a){"use strict";var n=a(404),i=a.n(n),r=(a(0),a(402),a(431)),o=a(541),u=a(534),s=a(529),l=a(593),c=i()(r.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));t.a=function(e){var t=i()(o.a,{id:"popover-positioned-right"},void 0,i()(u.a,{},void 0,e.title),i()(s.a,{},void 0,e.content));return i()(l.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,c)}},6361:function(e,t,a){"use strict";a.r(t);var n=a(404),i=a.n(n),r=a(457),o=a.n(r),u=a(0),s=(a(402),a(431)),l=a(473),c=a(850),d=a.n(c),p=a(482),f=a.n(p),v=a(566),g=a.n(v),h=a(531),m=a(515),y=a(1227),b=a(1470),C=a(471),S=a(1210),w=a(506),O=function(e){var t=e.categorical,a=e.quantitative,n=e.t,r=Object(u.useState)(0),c=o()(r,2),p=c[0],v=c[1],O=Object(u.useState)(0),j=o()(O,2),x=j[0],V=j[1],q=Object(u.useState)("Classification"),T=o()(q,2),k=T[0],A=T[1],D=Object(u.useState)("gini"),_=o()(D,2),z=_[0],E=_[1],M=Object(u.useState)(.0075),N=o()(M,2),P=N[0],G=N[1],J=Object(u.useState)(5),B=o()(J,2),H=B[0],I=B[1],R=Object(u.useState)(50),W=o()(R,2),Y=W[0],F=W[1];return i()(l.a,{style:{fontSize:"14px",maxWidth:600}},void 0,i()(l.a.Header,{as:"h4"},void 0,n("Decision Tree"),i()(w.a,{title:n("Decision Tree"),content:n("Decision Tree-description")})),i()(l.a.Body,{},void 0,i()(h.a,{legend:n("type"),options:["Classification","Regression"],defaultValue:k,onChange:function(e){e!==k&&(A(e),v("Classification"===k?t[0]:a[0]))}}),i()(h.a,{legend:n("outcome-y"),options:"Classification"===k?t:a,defaultValue:p,onChange:v}),i()(h.a,{legend:n("predictors-x"),multi:!0,options:d()(a.concat(t)),defaultValue:x||"",onChange:V,closeMenuOnSelect:!1}),"Classification"===k?i()(h.a,{legend:n("impurity-measure"),defaultValue:z,options:["gini","entropy"],onChange:E}):null,i()(y.a,{header:n("change-tree-features"),headerStyle:{fontSize:"1rem"}},void 0,i()(m.b,{legend:n("score-threshold-for-split"),min:0,max:1,step:.001,defaultValue:P,onChange:G}),i()(m.b,{legend:n("maximum-tree-depth"),min:1,max:50,defaultValue:H,onChange:I}),i()(m.b,{legend:n("min-obs-leafs"),min:1,defaultValue:Y,onChange:F})),i()(s.a,{disabled:!x||0===x.length,variant:"primary",block:!0,onClick:function(){var t=i()(b.a,{x:x,y:p,type:k,impurityMeasure:z,data:e.data,quantitative:e.quantitative,scoreThreshold:P,maxTreeDepth:H,minItemsCount:Y,onPredict:function(t,a){var n=g()(e.data,1);if("Classification"===k){var i=e.categorical.slice(),r=t.predict(n).map((function(e){return String(e)})),o="pred_tree"+a;n[o]=r,f()(i,o)||i.push(o),o="correct_tree"+a;var u=e.data[p];n[o]=r.map((function(e,t){return e===String(u[t])?"Yes":"No"})),f()(i,o)||i.push(o),e.onGenerate(e.quantitative,i,n)}else{var s=e.quantitative.slice(),l=t.predict(n),c="pred_tree"+a;n[c]=l,f()(s,c)||s.push(c),n[c="resid_tree"+a]=Object(S.a)(l,e.data[p]),f()(s,c)||s.push(c),e.onGenerate(s,e.categorical,n)}}});e.logAction(C.i,{y:p,x:x,type:k}),e.onCreated(t)}},void 0,n("calculate"))))};O.defaultProps={logAction:function(){}},t.default=O}}]);