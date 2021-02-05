(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{493:function(e,t,a){"use strict";var i=a(371),n=a.n(i),o=(a(0),a(363),a(400)),s=a(537),r=a(530),l=a(517),c=a(632),u=n()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));t.a=function(e){var t=n()(s.a,{id:"popover-positioned-right"},void 0,n()(r.a,{},void 0,e.title),n()(l.a,{},void 0,e.content));return n()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,u)}},6637:function(e,t,a){"use strict";a.r(t);var i=a(371),n=a.n(i),o=(a(0),a(363),a(637)),s=a.n(o),r=a(498),l=a.n(r),c=a(626),u=a(532),d=a(817),p=a(3710),v=a(447),g=a(493),f=function(e){var t=e.quantitative,a=e.categorical,i=e.t;return n()(d.a,{title:n()("span",{},void 0,e.t("Simple Linear Regression"),n()(g.a,{title:e.t("Simple Linear Regression"),content:"Statistical model which estimates a best-fit line for a response variable of interest (Y) given exactly one predictor variable (X). The line is determined by its intercept (Y-value at X = 0) and slope (the increase in Y associated with a unit increase of X)."})),autoStart:!1,onGenerate:function(t,a,i,o){var r=n()(p.a,{y:t,x:a,group:i,omitMissing:o,data:e.data,onPredict:function(t,a,i){var n=s()(e.data,1),o=e.quantitative.slice(),r="pred_slm"+i;n[r]=t,l()(o,r)||o.push(r),r="resid_slm"+i,l()(o,r)||o.push(r),n[r]=a,e.onGenerate(o,n)},onDiagnostics:e.onCreated});e.logAction(v.r,{y:t,x:a,group:i,omitMissing:o}),e.onCreated(r)}},void 0,n()(u.a,{legend:i("outcome-y"),defaultValue:t[0],options:t}),n()(u.a,{legend:i("explanatory-variable"),defaultValue:t[1],options:t}),n()(u.a,{legend:i("group-by"),options:a,clearable:!0,menuPlacement:"top"}),n()(c.a,{legend:i("omit-missing"),defaultValue:!1}))};f.defaultProps={categorical:[],logAction:function(){}},t.default=f}}]);