(self.webpackChunk=self.webpackChunk||[]).push([[483],{884358:function(e,a,t){"use strict";t.r(a);var n,o=t(607560),i=t(574315),l=t(858255),r=t(202784),d=(t(213980),t(647537)),s=t(931776),u=t(830650),c=t(10863),Z=t(770561),v=t(260952),p=t(458264),g=t(312594),f=t(785745),m=t(927447),b=t(157374),h=t(790599),y=t(655421),C=t(5140),V=t(580067),S=["Mean","Median","Min","Max","Sum"],k=["Counts of distinct values","Function evaluated for a variable"],x=function(e){return r.createElement(d.c.Option,e,e.data.label,n||(n=(0,l.Z)("br",{})),(0,l.Z)("span",{style:{fontVariant:"small-caps"}},void 0,e.data.description))},M=[{label:"Total",value:"total",description:"by total count of each category"},{label:"Alphabetically",value:"category",description:"by category name"},{label:"Min",value:"min",description:"by minimum count inside each category"},{label:"Max",value:"max",description:"by maximum count inside each category"},{label:"Mean",value:"mean",description:"by mean count inside each category"},{label:"Median",value:"median",description:"by median count inside each category"}],P=function(e){var a=e.groupingVariables,t=e.variables,n=e.defaultValue,d=e.quantitative,P=e.t,B=(0,r.useState)(n||t[0]),q=(0,i.Z)(B,2),O=q[0],z=q[1],A=(0,r.useState)(d[0]),E=(0,i.Z)(A,2),N=E[0],w=E[1],H=(0,r.useState)("ascending"),I=(0,i.Z)(H,2),T=I[0],F=I[1],j=(0,r.useState)(S[0]),D=(0,i.Z)(j,2),G=D[0],J=D[1],K=(0,r.useState)(null),L=(0,i.Z)(K,2),Q=L[0],R=L[1],U=(0,r.useState)(!1),W=(0,i.Z)(U,2),X=W[0],Y=W[1],$=(0,r.useState)(k[0]),_=(0,i.Z)($,2),ee=_[0],ae=_[1],te=(0,r.useState)(!1),ne=(0,i.Z)(te,2),oe=ne[0],ie=ne[1],le=(0,r.useState)(!1),re=(0,i.Z)(le,2),de=re[0],se=re[1],ue=(0,r.useState)(!1),ce=(0,i.Z)(ue,2),Ze=ce[0],ve=ce[1],pe=(0,r.useState)(null),ge=(0,i.Z)(pe,2),fe=ge[0],me=ge[1],be=!Q||Ze||ee===k[1];return(0,l.Z)(v.Z,{},void 0,(0,l.Z)(v.Z.Header,{as:"h4"},void 0,P("Bar Chart"),(0,l.Z)(V.Z,{title:P("Bar Chart"),content:P("Bar Chart-description")})),(0,l.Z)(v.Z.Body,{},void 0,(0,l.Z)(m.Z,{legend:P("bars-represent"),defaultValue:ee,options:k,onChange:ae}),(0,l.Z)(m.Z,{legend:P("variable"),defaultValue:O,options:t,onChange:z}),ee===k[1]?(0,l.Z)(p.Z,{},void 0,(0,l.Z)(g.Z,{},void 0,(0,l.Z)(m.Z,{legend:P("y-axis"),defaultValue:N,options:e.quantitative,onChange:w})),(0,l.Z)(g.Z,{},void 0,(0,l.Z)(m.Z,{legend:P("summary-function"),defaultValue:G,options:S,onChange:J}))):null,(0,l.Z)(m.Z,{legend:P("group-by"),clearable:!0,defaultValue:Q,options:a,menuPlacement:"top",onChange:R}),(0,l.Z)(p.Z,{},void 0,(0,l.Z)(g.Z,{},void 0,(0,l.Z)(c.Z,{controlId:"barchart-order-select"},void 0,(0,l.Z)(u.Z,{},void 0,P(Q?"order-outer-groups":"order-x-axis"),":"),(0,l.Z)(s.ZP,{defaultValue:fe,options:M,components:{Option:x},isClearable:!0,menuPlacement:"top",onChange:function(e){me(e?e.value:null)},styles:b.Z}))),(0,l.Z)(g.Z,{},void 0,(0,l.Z)(m.Z,{legend:P("order-direction"),defaultValue:T,options:["ascending","descending"],menuPlacement:"top",onChange:F,style:{display:fe?"inherit":"none"}}))),(0,l.Z)(p.Z,{},void 0,(0,l.Z)(g.Z,{},void 0,ee===k[0]?(0,l.Z)(f.Z,{legend:P("total-percentages"),defaultValue:Ze,onChange:ve,disabled:oe,style:{opacity:oe?.2:1}}):null),(0,l.Z)(g.Z,{},void 0,(0,l.Z)(f.Z,{legend:P("flip-coordinates"),defaultValue:X,onChange:Y}))),(0,l.Z)(p.Z,{},void 0,(0,l.Z)(g.Z,{},void 0,(0,l.Z)(f.Z,{legend:P("stack-bars"),defaultValue:de,onChange:se,disabled:!Q,style:{opacity:Q?1:.2}})),(0,l.Z)(g.Z,{},void 0,(0,l.Z)(f.Z,{legend:P("relative-frequencies-inside-each-group"),defaultValue:oe,disabled:be,onChange:ie,style:{opacity:be?.2:1}}))),(0,l.Z)(Z.Z,{variant:"primary",block:!0,onClick:function(){var a=(0,h.Z)(6),t={variable:O,group:Q,relative:oe,totalPercent:Ze,xOrder:fe,direction:T,stackBars:de,plotId:a};ee===k[1]&&(t.summary=G,t.yvar=N);var n,i=function(){e.session.addNotification({title:e.t("plot-shared"),message:e.t("plot-shared-message"),level:"success",position:"tr"}),e.logAction(C.zH,t)};n=ee===k[1]?r.createElement(y.Z,(0,o.Z)({},e,{variable:O,group:Q,horizontal:X,relative:oe,totalPercent:Ze,xOrder:fe,direction:T,summary:G,yvar:N,stackBars:de,id:a,action:t,onShare:i})):r.createElement(y.Z,(0,o.Z)({},e,{variable:O,group:Q,horizontal:X,relative:oe,totalPercent:Ze,xOrder:fe,direction:T,stackBars:de,id:a,action:t,onShare:i})),e.logAction(C.iT,t),e.onCreated(n)},disabled:!O},void 0,P("generate"))))};P.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},onCreated:function(){},onSelected:function(){}},a.default=P},580067:function(e,a,t){"use strict";var n,o=t(858255),i=(t(202784),t(213980),t(770561)),l=t(435376),r=t(203858),d=t(175891),s=t(109361);a.Z=function(e){var a=(0,o.Z)(l.Z,{id:"popover-positioned-right"},void 0,(0,o.Z)(r.Z,{},void 0,e.title),(0,o.Z)(d.Z,{},void 0,e.content));return(0,o.Z)(s.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,n||(n=(0,o.Z)(i.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,(0,o.Z)("div",{className:"fa fa-question"}))))}}}]);