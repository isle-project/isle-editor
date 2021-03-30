(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{484:function(e,a,t){"use strict";var n,o=t(407),i=t.n(o),l=(t(0),t(404),t(423)),r=t(512),d=t(510),s=t(505),c=t(547);a.a=function(e){var a=i()(r.a,{id:"popover-positioned-right"},void 0,i()(d.a,{},void 0,e.title),i()(s.a,{},void 0,e.content));return i()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,n||(n=i()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6309:function(e,a,t){"use strict";t.r(a);var n,o=t(488),i=t.n(o),l=t(448),r=t.n(l),d=t(407),s=t.n(d),c=t(0),u=t.n(c),v=(t(404),t(879)),p=t(807),g=t(687),b=t(589),f=t(423),m=t(464),y=t(477),h=t(490),C=t(553),O=t(506),V=t(1049),S=t(667),j=t(1104),x=t(458),k=t(484),M=["Mean","Median","Min","Max","Sum"],B=["Counts of distinct values","Function evaluated for a variable"],P=function(e){return u.a.createElement(v.z.Option,e,e.data.label,n||(n=s()("br",{})),s()("span",{style:{fontVariant:"small-caps"}},void 0,e.data.description))},w=[{label:"Total",value:"total",description:"by total count of each category"},{label:"Alphabetically",value:"category",description:"by category name"},{label:"Min",value:"min",description:"by minimum count inside each category"},{label:"Max",value:"max",description:"by maximum count inside each category"},{label:"Mean",value:"mean",description:"by mean count inside each category"},{label:"Median",value:"median",description:"by median count inside each category"}],q=function(e){var a=e.groupingVariables,t=e.variables,n=e.defaultValue,o=e.quantitative,l=e.t,d=Object(c.useState)(n||t[0]),v=r()(d,2),q=v[0],z=v[1],A=Object(c.useState)(o[0]),E=r()(A,2),N=E[0],F=E[1],I=Object(c.useState)("ascending"),J=r()(I,2),H=J[0],T=J[1],D=Object(c.useState)(M[0]),G=r()(D,2),K=G[0],L=G[1],Q=Object(c.useState)(null),R=r()(Q,2),U=R[0],W=R[1],X=Object(c.useState)(!1),Y=r()(X,2),Z=Y[0],$=Y[1],_=Object(c.useState)(B[0]),ee=r()(_,2),ae=ee[0],te=ee[1],ne=Object(c.useState)(!1),oe=r()(ne,2),ie=oe[0],le=oe[1],re=Object(c.useState)(!1),de=r()(re,2),se=de[0],ce=de[1],ue=Object(c.useState)(!1),ve=r()(ue,2),pe=ve[0],ge=ve[1],be=Object(c.useState)(null),fe=r()(be,2),me=fe[0],ye=fe[1],he=!U||pe||ae===B[1];return s()(m.a,{},void 0,s()(m.a.Header,{as:"h4"},void 0,l("Bar Chart"),s()(k.a,{title:l("Bar Chart"),content:l("Bar Chart-description")})),s()(m.a.Body,{},void 0,s()(O.a,{legend:l("bars-represent"),defaultValue:ae,options:B,onChange:te}),s()(O.a,{legend:l("variable"),defaultValue:q,options:t,onChange:z}),ae===B[1]?s()(y.a,{},void 0,s()(h.a,{},void 0,s()(O.a,{legend:l("y-axis"),defaultValue:N,options:e.quantitative,onChange:F})),s()(h.a,{},void 0,s()(O.a,{legend:l("summary-function"),defaultValue:K,options:M,onChange:L}))):null,s()(O.a,{legend:l("group-by"),clearable:!0,defaultValue:U,options:a,menuPlacement:"top",onChange:W}),s()(y.a,{},void 0,s()(h.a,{},void 0,s()(b.a,{controlId:"barchart-order-select"},void 0,s()(g.a,{},void 0,l(U?"order-outer-groups":"order-x-axis"),":"),s()(p.a,{defaultValue:me,options:w,components:{Option:P},isClearable:!0,menuPlacement:"top",onChange:function(e){ye(e?e.value:null)},styles:V.a}))),s()(h.a,{},void 0,s()(O.a,{legend:l("order-direction"),defaultValue:H,options:["ascending","descending"],menuPlacement:"top",onChange:T,style:{display:me?"inherit":"none"}}))),s()(y.a,{},void 0,s()(h.a,{},void 0,ae===B[0]?s()(C.a,{legend:l("total-percentages"),defaultValue:pe,onChange:ge,disabled:ie,style:{opacity:ie?.2:1}}):null),s()(h.a,{},void 0,s()(C.a,{legend:l("flip-coordinates"),defaultValue:Z,onChange:$}))),s()(y.a,{},void 0,s()(h.a,{},void 0,s()(C.a,{legend:l("stack-bars"),defaultValue:se,onChange:ce,disabled:!U,style:{opacity:U?1:.2}})),s()(h.a,{},void 0,s()(C.a,{legend:l("relative-frequencies-inside-each-group"),defaultValue:ie,disabled:he,onChange:le,style:{opacity:he?.2:1}}))),s()(f.a,{variant:"primary",block:!0,onClick:function(){var a=Object(S.a)(6),t={variable:q,group:U,relative:ie,totalPercent:pe,xOrder:me,direction:H,stackBars:se,plotId:a};ae===B[1]&&(t.summary=K,t.yvar=N);var n,o=function(){e.session.addNotification({title:e.t("plot-shared"),message:e.t("plot-shared-message"),level:"success",position:"tr"}),e.logAction(x.F,t)};n=ae===B[1]?u.a.createElement(j.a,i()({},e,{variable:q,group:U,horizontal:Z,relative:ie,totalPercent:pe,xOrder:me,direction:H,summary:K,yvar:N,stackBars:se,id:a,action:t,onShare:o})):u.a.createElement(j.a,i()({},e,{variable:q,group:U,horizontal:Z,relative:ie,totalPercent:pe,xOrder:me,direction:H,stackBars:se,id:a,action:t,onShare:o})),e.logAction(x.e,t),e.onCreated(n)},disabled:!q},void 0,l("generate"))))};q.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},onCreated:function(){},onSelected:function(){}},a.default=q}}]);