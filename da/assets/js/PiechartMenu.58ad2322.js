"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6660],{874853:function(e,t,a){a.r(t);var n=a(867855),r=a(202784),l=a(213980),i=a.n(l),o=a(790817),s=a(770561),u=a(941695),c=a(481066),p=a(692482),d=a(382617),f=a(808023),g=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,h=function(e,t,a){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a},E=["Counts of unique values","Values from a second variable"],C=function(e){var t=e.variables,a=e.defaultValue,l=e.groupingVariables,i=e.quantitative,g=e.t,C=(0,r.useState)(a||t[0]),V=C[0],q=C[1],O=(0,r.useState)(i[0]),P=O[0],j=O[1],R=(0,r.useState)(null),k=R[0],w=R[1],S=(0,r.useState)(E[0]),z=S[0],A=S[1];return r.createElement(o.Z,null,r.createElement(o.Z.Header,{as:"h4"},g("Pie Chart"),r.createElement(f.Z,{title:g("Pie Chart"),content:g("Pie Chart-description")})),r.createElement(o.Z.Body,{className:"d-grid gap-3"},r.createElement(u.Z,{legend:g("pie-sizes-represent"),defaultValue:z,options:E,onChange:A}),r.createElement(u.Z,{legend:g("variable"),defaultValue:V,options:t,onChange:q}),z===E[1]?r.createElement(u.Z,{legend:g("set-slice-sizes"),defaultValue:P,options:i,onChange:j}):null,r.createElement(u.Z,{legend:g("group-by"),defaultValue:k,options:l,clearable:!0,menuPlacement:"top",onChange:w}),r.createElement(s.Z,{variant:"primary",onClick:function(){var t=(0,c.Z)(6),a={variable:V,group:k,plotId:t};z===E[1]&&(a.summaryVariable=P);var l,i=r.createElement(p.Z,(l=function(e,t){for(var a in t||(t={}))y.call(t,a)&&h(e,a,t[a]);if(v)for(var r,l=(0,n.Z)(v(t));!(r=l()).done;)a=r.value,Z.call(t,a)&&h(e,a,t[a]);return e}({id:t},e),m(l,b({variable:V,group:k,summaryVariable:z===E[1]?P:null,action:a,onShare:function(){e.session.addNotification({title:g("plot-shared"),message:g("plot-shared-message"),level:"success",position:"tr"}),e.logAction(d.rC,a)}}))));e.logAction(d.Cz,a),e.onCreated(i)}},g("generate"))))};C.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){}},C.propTypes={data:i().object.isRequired,defaultValue:i().string,groupingVariables:i().array,logAction:i().func,onCreated:i().func.isRequired,session:i().object.isRequired,quantitative:i().array.isRequired,variables:i().array.isRequired},t.default=C},808023:function(e,t,a){var n=a(202784),r=a(213980),l=a.n(r),i=a(770561),o=a(435376),s=a(992500),u=a(862816),c=a(461298),p=function(e){var t=n.createElement(o.Z,{id:"popover-positioned-right"},n.createElement(s.Z,null,e.title),n.createElement(u.Z,null,e.content));return n.createElement(c.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},n.createElement(i.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},n.createElement("div",{className:"fa fa-question"})))};p.propTypes={content:l().oneOfType([l().string,l().node]).isRequired,title:l().string.isRequired},t.Z=p}}]);