(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{509:function(e,t,a){"use strict";var n=a(406),o=a.n(n),i=(a(0),a(404),a(433)),r=a(544),l=a(537),u=a(532),d=a(596),s=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));t.a=function(e){var t=o()(r.a,{id:"popover-positioned-right"},void 0,o()(l.a,{},void 0,e.title),o()(u.a,{},void 0,e.content));return o()(d.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,s)}},6371:function(e,t,a){"use strict";a.r(t);var n=a(406),o=a.n(n),i=(a(0),a(404),a(851)),r=a.n(i),l=a(484),u=a.n(l),d=a(569),s=a.n(d),c=a(516),p=a(534),v=a(606),f=a(649),m=a(723),g=a(1475),S=a(473),w=a(509),y=o()("span",{},void 0,"L1 Penalty Term ",o()(c.a,{raw:"\\lambda"})),b=function(e){var t=e.data,a=e.categorical,n=e.quantitative,i=e.t,l=e.logAction,d=e.onCreated,c=e.onGenerate;return o()(m.a,{title:o()("span",{},void 0,i("LASSO"),o()(w.a,{title:i("LASSO"),content:i("LASSO-description")})),autoStart:!1,onGenerate:function(e,a,i,r){var p=o()(g.a,{x:a,y:e,lambda:i,intercept:r,data:t,quantitative:n,onPredict:function(e,a,o){var i=s()(t,1),r=n.slice(),l="pred_lasso"+o;i[l]=e,u()(r,l)||r.push(l),i[l="resid_lasso"+o]=a,u()(r,l)||r.push(l),c(r,i)}});l(S.q,{y:e,x:a,intercept:r,lambda:i}),d(p)}},void 0,o()(p.a,{legend:i("outcome-y"),options:n,defaultValue:n[0]}),o()(p.a,{legend:i("predictors-x"),multi:!0,options:r()(n.concat(a)),defaultValue:n[1],closeMenuOnSelect:!1}),o()(f.a,{legend:y,defaultValue:.001,min:1e-12,max:1,step:"any",rangeInputStyle:{width:260},numberInputStyle:{width:120}}),o()(v.a,{legend:i("include-intercept"),defaultValue:!0}))};b.defaultProps={logAction:function(){}},t.default=b}}]);