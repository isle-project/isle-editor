"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4152],{446367:function(e,t,a){a.r(t);var n=a(202784),r=a(213980),l=a.n(r),o=a(770561),i=a(790817),c=a(481066),s=a(941695),u=a(937531),d=a(382617),p=a(808023),g=function(e){var t=e.data,a=e.t,r=(0,n.useState)(null),l=r[0],g=r[1],m=(0,n.useState)(null),f=m[0],v=m[1];return n.createElement(i.Z,null,n.createElement(i.Z.Header,{as:"h4"},a("Scatterplot Matrix"),n.createElement(p.Z,{title:a("Scatterplot Matrix"),content:a("Scatterplot Matrix-description")})),n.createElement(i.Z.Body,{className:"d-grid gap-3"},n.createElement(s.Z,{legend:a("variables"),options:e.variables,multi:!0,onChange:g}),n.createElement(s.Z,{legend:a("color")+":",options:e.groupingVariables,clearable:!0,onChange:v}),n.createElement(o.Z,{variant:"primary",onClick:function(){var r=(0,c.Z)(6),o={variables:l,color:f,plotId:r},i=n.createElement(u.Z,{id:r,data:t,variables:l,color:f,action:o,onShare:function(){e.session.addNotification({title:a("plot-shared"),message:a("plot-shared-message"),level:"success",position:"tr"}),e.logAction(d.uh,o)},onSelected:e.onSelected});e.logAction(d.ZA,o),e.onCreated(i)},disabled:!l||l.length<2},a("generate"))))};g.defaultProps={groupingVariables:null,logAction:function(){},onSelected:function(){}},g.propTypes={data:l().object.isRequired,groupingVariables:l().array,logAction:l().func,onSelected:l().func,onCreated:l().func.isRequired,session:l().object.isRequired,variables:l().array.isRequired},t.default=g},808023:function(e,t,a){var n=a(202784),r=a(213980),l=a.n(r),o=a(770561),i=a(435376),c=a(992500),s=a(862816),u=a(461298),d=function(e){var t=n.createElement(i.Z,{id:"popover-positioned-right"},n.createElement(c.Z,null,e.title),n.createElement(s.Z,null,e.content));return n.createElement(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},n.createElement(o.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},n.createElement("div",{className:"fa fa-question"})))};d.propTypes={content:l().oneOfType([l().string,l().node]).isRequired,title:l().string.isRequired},t.Z=d}}]);