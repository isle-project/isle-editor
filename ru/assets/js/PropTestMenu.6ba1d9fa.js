(window.webpackJsonp=window.webpackJsonp||[]).push([[828],{484:function(e,a,t){"use strict";var n,o=t(407),i=t.n(o),s=(t(0),t(404),t(423)),l=t(512),c=t(510),r=t(505),d=t(547);a.a=function(e){var a=i()(l.a,{id:"popover-positioned-right"},void 0,i()(c.a,{},void 0,e.title),i()(r.a,{},void 0,e.content));return i()(d.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,n||(n=i()(s.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6307:function(e,a,t){"use strict";t.r(a);var n,o,i=t(407),s=t.n(i),l=t(448),c=t.n(l),r=t(0),d=(t(404),t(464)),u=t(423),p=t(487),v=t(506),f=t(492),g=t(1319),b=t(919),h=t(458),w=t(484),m=function(e){var a,t=e.data,i=e.categorical,l=e.showDecision,m=e.t,O=Object(r.useState)(null),S=c()(O,2),C=S[0],j=S[1],y=Object(r.useState)(null),V=c()(y,2),k=V[0],D=V[1],P=Object(r.useState)(.5),x=c()(P,2),T=x[0],q=x[1],z=Object(r.useState)("two-sided"),A=c()(z,2),J=A[0],N=A[1],B=Object(r.useState)(.05),H=c()(B,2),Z=H[0],_=H[1],E=Object(r.useState)(null),F=c()(E,2),G=F[0],I=F[1];return s()(d.a,{style:{fontSize:"14px"}},void 0,s()(d.a.Header,{as:"h4"},void 0,m("One-Sample Proportion Test"),s()(w.a,{title:m("One-Sample Proportion Test"),content:m("One-Sample Proportion Test-description")})),s()(d.a.Body,{},void 0,s()(v.a,{legend:m("variable"),defaultValue:C,options:i,onChange:function(a){var t=e.data[a],n=Object(b.a)(t,a);I(n),j(a),D(n[0])}}),G?s()(v.a,{legend:"".concat(m("success"),":"),defaultValue:k,options:G,onChange:D}):null,s()(p.b,{legend:n||(n=s()(f.a,{raw:"p_0"})),defaultValue:T,min:.001,max:.999,step:"any",onChange:q}),s()(v.a,{legend:m("direction"),defaultValue:J,options:["less","greater","two-sided"],onChange:N}),s()(p.b,{legend:s()("span",{},void 0,m("significance-level"),o||(o=s()(f.a,{raw:"\\alpha"}))),defaultValue:Z,min:0,max:1,step:"any",onChange:_}),s()(u.a,{variant:"primary",block:!0,onClick:function(){var n=a||(a=s()(g.a,{data:t,variable:C,success:k,p0:T,direction:J,alpha:Z,showDecision:l}));e.logAction(h.Z,{variable:C,success:k,p0:T,direction:J,alpha:Z,showDecision:l}),e.onCreated(n)},disabled:!C},void 0,m("calculate"))))};m.defaultProps={categorical:null,logAction:function(){},showDecision:!0},a.default=m}}]);