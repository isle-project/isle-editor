(self.webpackChunk=self.webpackChunk||[]).push([[4012],{388891:function(e,o,t){"use strict";t.r(o);var a=t(858255),n=t(574315),i=t(202784),l=(t(213980),t(927447)),r=t(785745),s=t(163420),u=t(790599),d=t(705286),c=t(5140),Z=t(580067),f=function(e){var o=e.data,t=e.variables,f=e.defaultValue,v=e.groupingVariables,p=e.t,g=e.session,b=e.logAction,h=e.onCreated,V=(0,i.useState)(!1),k=(0,n.Z)(V,2),m=k[0],C=k[1];return(0,a.Z)(s.Z,{autoStart:!1,title:(0,a.Z)("span",{},void 0,p("Violin Plot"),(0,a.Z)(Z.Z,{title:p("Violin Plot"),content:""})),onGenerate:function(e,t){var n=(0,u.Z)(6),i={variable:e,group:t,plotId:n},l=(0,a.Z)(d.Z,{id:n,variable:e,group:t,data:o,onShare:function(){g.addNotification({title:p("plot-shared"),message:p("plot-shared-message"),level:"success",position:"tr"}),b(c.Fo,i)},action:i,showBox:m});b(c.Wk,i),h(l)}},void 0,(0,a.Z)(l.Z,{legend:p("variable"),defaultValue:f||t[0],options:t}),(0,a.Z)(l.Z,{legend:p("group-by"),options:v,clearable:!0}),(0,a.Z)(r.Z,{legend:p("show-boxplot"),defaultValue:m,onChange:function(){C(!m)}}))};f.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},onCreated:function(){}},o.default=f},580067:function(e,o,t){"use strict";var a,n=t(858255),i=(t(202784),t(213980),t(770561)),l=t(435376),r=t(203858),s=t(175891),u=t(109361);o.Z=function(e){var o=(0,n.Z)(l.Z,{id:"popover-positioned-right"},void 0,(0,n.Z)(r.Z,{},void 0,e.title),(0,n.Z)(s.Z,{},void 0,e.content));return(0,n.Z)(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:o},void 0,a||(a=(0,n.Z)(i.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,(0,n.Z)("div",{className:"fa fa-question"}))))}}}]);