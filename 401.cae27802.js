(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{493:function(e,a,t){"use strict";var o=t(371),n=t.n(o),i=(t(0),t(363),t(400)),l=t(537),r=t(530),u=t(517),s=t(632),c=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));a.a=function(e){var a=n()(l.a,{id:"popover-positioned-right"},void 0,n()(r.a,{},void 0,e.title),n()(u.a,{},void 0,e.content));return n()(s.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,c)}},6651:function(e,a,t){"use strict";t.r(a);var o=t(371),n=t.n(o),i=t(460),l=t.n(i),r=t(0),u=(t(363),t(1223)),s=t(458),c=t(400),d=t(780),v=t(1051),p=t(532),f=t(1383),g=t(626),b=t(901),m=t(2412),h=t(447),y=t(493),C=function(e){var a=e.data,t=e.variables,o=e.defaultValue,i=e.groupingVariables,C=e.t,P=e.session,V=e.logAction,w=e.onCreated,j=Object(r.useState)(o||t[0]),O=l()(j,2),S=O[0],k=O[1],x=Object(r.useState)([]),B=l()(x,2),N=B[0],q=B[1],z=Object(r.useState)("vertical"),A=l()(z,2),I=A[0],J=A[1],E=Object(r.useState)(!1),H=l()(E,2),M=H[0],T=H[1];return n()(s.a,{},void 0,n()(s.a.Header,{as:"h4"},void 0,C("Box Plot"),n()(y.a,{title:C("Box Plot"),content:C("Box Plot-description")})),n()(s.a.Body,{},void 0,n()(p.a,{legend:C("variable"),defaultValue:S,options:t,onChange:k}),n()(d.a,{controlId:"boxplot-form-select"},void 0,n()(v.a,{},void 0,C("group-by")),n()(u.a,{value:N,options:i.map((function(e){return{label:e,value:e}})),isClearable:!0,isMulti:!0,onChange:function(e){(!e||e.length<=2)&&q(e)},styles:f.a,menuPortalTarget:document.body})),n()(p.a,{legend:C("orientation"),options:["vertical","horizontal"],defaultValue:"vertical",menuPlacement:"top",onChange:J}),n()(g.a,{legend:C("overlay-points"),defaultValue:!1,onChange:T}),n()(c.a,{variant:"primary",block:!0,onClick:function(){var e=(N||[]).map((function(e){return e.value})),o=Object(b.a)(6),i={variable:S,group:e,plotId:o},l=n()(m.a,{id:o,onShare:function(){P.addNotification({title:C("plot-shared"),message:C("plot-shared-message"),level:"success",position:"tr"}),V(h.E,i)},action:i,data:a,variable:S,group:e,orientation:I,overlayPoints:M,variables:t});V(h.e,i),w(l)}},void 0,C("generate"))))};C.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},onCreated:function(){}},a.default=C}}]);