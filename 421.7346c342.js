(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{493:function(e,t,a){"use strict";var o=a(371),n=a.n(o),i=(a(0),a(363),a(400)),l=a(537),s=a(530),d=a(517),r=a(632),c=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));t.a=function(e){var t=n()(l.a,{id:"popover-positioned-right"},void 0,n()(s.a,{},void 0,e.title),n()(d.a,{},void 0,e.content));return n()(r.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,c)}},6659:function(e,t,a){"use strict";a.r(t);var o=a(371),n=a.n(o),i=a(460),l=a.n(i),s=a(0),d=(a(363),a(400)),r=a(458),c=a(498),g=a.n(c),u=a(437),p=a.n(u),h=a(626),f=a(532),v=a(721),b=a(901),y=a(2421),m=a(447),w=a(493),S=function(e){var t=e.variables,a=e.groupingVariables,o=e.defaultX,i=e.defaultY,c=e.t,u=Object(s.useState)(o||t[0]),S=l()(u,2),C=S[0],O=S[1],j=Object(s.useState)(i||t[1]),x=l()(j,2),L=x[0],V=x[1],R=Object(s.useState)(null),k=l()(R,2),z=k[0],N=k[1],A=Object(s.useState)(null),B=l()(A,2),q=B[0],J=B[1],M=Object(s.useState)(null),X=l()(M,2),Y=X[0],H=X[1],I=Object(s.useState)(null),P=l()(I,2),W=P[0],D=P[1],E=Object(s.useState)(!1),F=l()(E,2),G=F[0],K=F[1],Q=Object(s.useState)(["linear"]),T=l()(Q,2),U=T[0],Z=T[1],$=Object(s.useState)(null),_=l()($,2),ee=_[0],te=_[1],ae=Object(s.useState)(.66),oe=l()(ae,2),ne=oe[0],ie=oe[1];return n()(r.a,{style:{minWidth:650}},void 0,n()(r.a.Header,{as:"h4"},void 0,c("Scatterplot"),n()(w.a,{title:c("Scatterplot"),content:c("Scatterplot-description")})),n()(r.a.Body,{},void 0,n()("div",{style:{width:"100%"}},void 0,n()(f.a,{legend:c("x-axis"),defaultValue:C,options:t,style:{float:"left",paddingRight:10,width:"33.3%"},onChange:O}),n()(f.a,{legend:c("y-axis"),defaultValue:L,style:{float:"left",paddingLeft:10,paddingRight:10,width:"33.3%"},options:t,onChange:V}),n()(f.a,{legend:"".concat(c("labels"),":"),style:{float:"left",paddingLeft:10,width:"33.3%"},clearable:!0,options:a,onChange:D})),n()("div",{style:{width:"100%"}},void 0,n()(f.a,{legend:"".concat(c("color"),":"),options:a,clearable:!0,style:{float:"left",paddingRight:10,width:"33.3%"},onChange:N}),n()(f.a,{legend:"".concat(c("type"),":"),options:a,clearable:!0,style:{float:"left",paddingLeft:10,paddingRight:10,width:"33.3%"},onChange:J}),n()(f.a,{legend:"".concat(c("size"),":"),options:t,clearable:!0,style:{float:"left",paddingLeft:10,width:"33.3%"},onChange:H})),n()("div",{style:{clear:"both"}}),n()("div",{style:{opacity:e.showRegressionOption?1:0}},void 0,n()(h.a,{inline:!0,legend:c("show-regression-model"),defaultValue:!1,onChange:function(){K(!G)}}),n()("div",{style:{width:"100%"}},void 0,n()(f.a,{legend:"".concat(c("method"),":"),defaultValue:"linear",multi:!0,options:["linear","smooth"],style:{float:"right",paddingLeft:10,width:"45%"},disabled:!G,onChange:function(e){p()(e)||(e=[e]),Z(e)}}),n()(f.a,{legend:"".concat(c("split-by"),":"),options:e.groupingVariables,clearable:!0,style:{float:"right",paddingLeft:10,width:"45%"},disabled:!G,onChange:te}),n()(v.a,{legend:c("smoothing-parameter"),disabled:!g()(U,"smooth"),min:.01,max:1,step:.01,defaultValue:.66,onChange:ie}))),n()("div",{style:{clear:"both"}}),n()(d.a,{variant:"primary",block:!0,onClick:function(){var t=Object(b.a)(6),a={xval:C,yval:L,plotId:t};z&&(a.color=z),q&&(a.type=q),Y&&(a.size=Y),W&&(a.text=W),G&&(a.regressionLine=G,a.regressionMethod=U),g()(U,"smooth")&&(a.smoothSpan=ne),ee&&(a.lineBy=ee);var o=n()(y.a,{data:e.data,xval:C,yval:L,color:z,type:q,size:Y,text:W,regressionLine:G,regressionMethod:U,lineBy:ee,smoothSpan:ne,id:t,action:a,onSelected:e.onSelected,onShare:function(){e.session.addNotification({title:c("plot-shared"),message:c("plot-shared-message"),level:"success",position:"tr"}),e.logAction(m.N,a)}});e.logAction(m.C,a),e.onCreated(o)}},void 0,c("generate"))))};S.defaultProps={defaultX:null,defaultY:null,groupingVariables:null,logAction:function(){},onSelected:function(){},showRegressionOption:!0},t.default=S}}]);