(window.webpackJsonp=window.webpackJsonp||[]).push([[828],{484:function(e,a,n){"use strict";var t,o=n(407),i=n.n(o),r=(n(0),n(404),n(423)),s=n(512),l=n(510),c=n(505),u=n(547);a.a=function(e){var a=i()(s.a,{id:"popover-positioned-right"},void 0,i()(l.a,{},void 0,e.title),i()(c.a,{},void 0,e.content));return i()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,t||(t=i()(r.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6297:function(e,a,n){"use strict";n.r(a);var t=n(407),o=n.n(t),i=(n(465),n(428),n(0),n(404),n(471)),r=n.n(i),s=n(515),l=n.n(s),c=n(506),u=n(553),d=n(487),v=n(630),p=n(1327),f=n(458),m=n(484),g=function(e){var a=e.quantitative,n=e.t;return o()(v.a,{title:o()("span",{},void 0,n("Principal Component Analysis"),o()(m.a,{title:n("Principal Component Analysis"),content:n("PCA-description")})),autoStart:!1,onGenerate:function(n,t,i,s){var c=o()(p.a,{variables:n,center:t,scale:i,noComponents:s,data:e.data,onResult:function(t,o){if(s>0){for(var i=l()(e.data,1),c=a.slice(),u=n.map((function(e){return e[0]})).join(""),d=0;d<s;d++){for(var v=[],p=0;p<o.data.length;p++)v.push(o.data[p][d]);var f="PC".concat(d+1,"_").concat(u);i[f]=v,r()(c,f)||c.push(f)}e.onGenerate(c,i)}}});e.logAction(f.A,{variables:n,center:t,scale:i}),e.onCreated(c)}},void 0,o()(c.a,{legend:n("variables"),multi:!0,options:a,closeMenuOnSelect:!1}),o()(u.a,{legend:n("center-values-subtract-the-mean"),defaultValue:!0}),o()(u.a,{legend:n("scale-values"),defaultValue:!1}),o()(d.b,{legend:n("components-to-add"),min:0,defaultValue:0}))};g.defaultProps={logAction:function(){}},a.default=g}}]);