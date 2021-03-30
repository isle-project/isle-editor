(window.webpackJsonp=window.webpackJsonp||[]).push([[1006],{484:function(e,t,a){"use strict";var i,n=a(407),o=a.n(n),s=(a(0),a(404),a(423)),r=a(512),l=a(510),c=a(505),u=a(547);t.a=function(e){var t=o()(r.a,{id:"popover-positioned-right"},void 0,o()(l.a,{},void 0,e.title),o()(c.a,{},void 0,e.content));return o()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,i||(i=o()(s.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}))))}},6296:function(e,t,a){"use strict";a.r(t);var i=a(407),n=a.n(i),o=(a(465),a(0),a(404),a(515)),s=a.n(o),r=a(471),l=a.n(r),c=a(553),u=a(506),d=a(630),p=a(1326),v=a(458),g=a(484),f=function(e){var t=e.quantitative,a=e.categorical,i=e.t;return n()(d.a,{title:n()("span",{},void 0,e.t("Simple Linear Regression"),n()(g.a,{title:e.t("Simple Linear Regression"),content:"Statistical model which estimates a best-fit line for a response variable of interest (Y) given exactly one predictor variable (X). The line is determined by its intercept (Y-value at X = 0) and slope (the increase in Y associated with a unit increase of X)."})),autoStart:!1,onGenerate:function(t,a,i,o){var r=n()(p.a,{y:t,x:a,group:i,omitMissing:o,data:e.data,onPredict:function(t,a,i){var n=s()(e.data,1),o=e.quantitative.slice(),r="pred_slm"+i;n[r]=t,l()(o,r)||o.push(r),r="resid_slm"+i,l()(o,r)||o.push(r),n[r]=a,e.onGenerate(o,n)},onDiagnostics:e.onCreated});e.logAction(v.t,{y:t,x:a,group:i,omitMissing:o}),e.onCreated(r)}},void 0,n()(u.a,{legend:i("outcome-y"),defaultValue:t[0],options:t}),n()(u.a,{legend:i("explanatory-variable"),defaultValue:t[1],options:t}),n()(u.a,{legend:i("group-by"),options:a,clearable:!0,menuPlacement:"top"}),n()(c.a,{legend:i("omit-missing"),defaultValue:!1}))};f.defaultProps={categorical:[],logAction:function(){}},t.default=f}}]);