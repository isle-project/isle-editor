(window.webpackJsonp=window.webpackJsonp||[]).push([[740],{484:function(e,t,n){"use strict";var i,a=n(407),o=n.n(a),r=(n(0),n(404),n(423)),s=n(512),l=n(510),u=n(505),c=n(547);t.a=function(e){var t=o()(s.a,{id:"popover-positioned-right"},void 0,o()(l.a,{},void 0,e.title),o()(u.a,{},void 0,e.content));return o()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,i||(i=o()(r.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}))))}},6294:function(e,t,n){"use strict";n.r(t);var i=n(407),a=n.n(i),o=(n(465),n(0),n(404),n(711)),r=n.n(o),s=n(515),l=n.n(s),u=n(471),c=n.n(u),d=n(506),p=n(553),v=n(630),f=n(1324),g=n(458),m=n(484),w=function(e){var t=e.data,n=e.categorical,i=e.quantitative,o=e.t;return a()(v.a,{title:a()("span",{},void 0,o("Multiple Linear Regression"),a()(m.a,{title:o("Multiple Linear Regression"),content:o("Multiple Linear Regression-description")})),autoStart:!1,onGenerate:function(n,o,r,s){var u=a()(f.a,{x:o,y:n,intercept:r,omitMissing:s,data:t,quantitative:i,onPredict:function(n,a,o){var r=l()(t,1),s=i.slice(),u="pred_lm"+o;r[u]=n,c()(s,u)||s.push(u),u="resid_lm"+o,c()(s,u)||s.push(u),r[u]=a,e.onGenerate(s,r)},onDiagnostics:e.onCreated}),d={y:n,x:o,intercept:r};e.logAction(g.y,d),e.onCreated(u)}},void 0,a()(d.a,{legend:o("outcome-y"),options:i,defaultValue:i[0]}),a()(d.a,{legend:o("predictors-x"),multi:!0,options:r()(i.concat(n)),defaultValue:i[1],closeMenuOnSelect:!1}),a()(p.a,{legend:o("include-intercept"),defaultValue:!0}),a()(p.a,{legend:o("omit-missing"),defaultValue:!1}))};w.defaultProps={logAction:function(){}},t.default=w}}]);