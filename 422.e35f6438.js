(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{493:function(e,t,o){"use strict";var a=o(371),n=o.n(a),i=(o(0),o(363),o(400)),r=o(537),l=o(530),s=o(517),c=o(632),d=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));t.a=function(e){var t=n()(r.a,{id:"popover-positioned-right"},void 0,n()(l.a,{},void 0,e.title),n()(s.a,{},void 0,e.content));return n()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,d)}},6660:function(e,t,o){"use strict";o.r(t);var a=o(371),n=o.n(a),i=o(460),r=o.n(i),l=o(0),s=(o(363),o(400)),c=o(458),d=o(901),u=o(532),v=o(2420),p=o(447),g=o(493),b=function(e){var t=e.data,o=e.t,a=Object(l.useState)(null),i=r()(a,2),b=i[0],f=i[1],h=Object(l.useState)(null),S=r()(h,2),m=S[0],w=S[1];return n()(c.a,{},void 0,n()(c.a.Header,{as:"h4"},void 0,o("Scatterplot Matrix"),n()(g.a,{title:o("Scatterplot Matrix"),content:o("Scatterplot Matrix-description")})),n()(c.a.Body,{},void 0,n()(u.a,{legend:o("variables"),options:e.variables,multi:!0,onChange:f}),n()(u.a,{legend:"".concat(o("color"),":"),options:e.groupingVariables,clearable:!0,onChange:w}),n()(s.a,{variant:"primary",block:!0,onClick:function(){var a=Object(d.a)(6),i={variables:b,color:m,plotId:a},r=n()(v.a,{id:a,data:t,variables:b,color:m,action:i,onShare:function(){e.session.addNotification({title:o("plot-shared"),message:o("plot-shared-message"),level:"success",position:"tr"}),e.logAction(p.O,i)},onSelected:e.onSelected});e.logAction(p.Q,i),e.onCreated(r)},disabled:!b||b.length<2},void 0,o("generate"))))};b.defaultProps={groupingVariables:null,logAction:function(){},onSelected:function(){}},t.default=b}}]);