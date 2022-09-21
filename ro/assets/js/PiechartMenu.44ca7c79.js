"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71299],{617146:function(e,t,a){a.r(t);var l=a(202784),r=a(213980),n=a.n(r),o=a(790817),i=a(770561),s=a(188304),c=a(440835),u=a(711768),p=a(669252),d=a(691334),m=a(701647),g=a(226480),f=a(648246),b=a(581728),y=Object.defineProperty,h=Object.defineProperties,v=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,V=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,q=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&V(e,a,t[a]);if(Z)for(var a of Z(t))C.call(t,a)&&V(e,a,t[a]);return e},P=(e,t)=>h(e,v(t));const O=["Counts of unique values","Values from a second variable"],S=e=>{const{variables:t,defaultValue:a,groupingVariables:r,quantitative:n,t:y}=e,[h,v]=(0,l.useState)(a||t[0]),[Z,E]=(0,l.useState)(n[0]),[C,V]=(0,l.useState)(null),[S,j]=(0,l.useState)(O[0]),[w,k]=(0,l.useState)([]);return l.createElement(o.Z,null,l.createElement(o.Z.Header,{as:"h4"},y("Pie Chart"),l.createElement(b.Z,{title:y("Pie Chart"),content:y("Pie Chart-description")})),l.createElement(o.Z.Body,{className:"d-grid gap-3"},l.createElement(c.Z,{legend:y("pie-sizes-represent"),defaultValue:S,options:O,onChange:j}),l.createElement(c.Z,{legend:y("variable"),defaultValue:h,options:t,onChange:t=>{v(t);const a=(0,f.Z)(e.data[t],t);k(a.map((e=>({color:null,category:e})))),console.log(w)}}),S===O[1]?l.createElement(c.Z,{legend:y("set-slice-sizes"),defaultValue:Z,options:n,onChange:E}):null,l.createElement(c.Z,{legend:y("group-by"),defaultValue:C,options:r,clearable:!0,menuPlacement:"top",onChange:V}),w.length>0&&l.createElement(m.Z,{header:y("customize-colors"),headerStyle:{fontSize:"1rem"},style:{width:"100%"}},l.createElement(s.Z,null,w.map(((e,t)=>l.createElement(s.Z.Item,{key:t},e.category,l.createElement(g.Z,{onChange:a=>{console.log(a);const l=[...w.slice(0,t),P(q({},e),{color:a.hex}),...w.slice(t+1)];console.log(l),k(l)},variant:"Button",color:e.color||"#000000",buttonStyle:{marginLeft:"0.5rem"},style:{width:"auto",float:"right"},disableAlpha:!0})))))),l.createElement(i.Z,{variant:"primary",onClick:()=>{const t=(0,u.Z)(6),a={variable:h,group:C,plotId:t};S===O[1]&&(a.summaryVariable=Z);const r=w.map((e=>null==e?void 0:e.color)),n=l.createElement(p.Z,P(q({id:t},e),{variable:h,group:C,summaryVariable:S===O[1]?Z:null,action:a,onShare:()=>{e.session.addNotification({title:y("plot-shared"),message:y("plot-shared-message"),level:"success",position:"tr"}),e.logAction(d.BU,a)},colors:r}));e.logAction(d.YP,a),e.onCreated(n)}},y("generate"))))};S.defaultProps={defaultValue:null,groupingVariables:null,logAction(){}},S.propTypes={data:n().object.isRequired,defaultValue:n().string,groupingVariables:n().array,logAction:n().func,onCreated:n().func.isRequired,session:n().object.isRequired,quantitative:n().array.isRequired,variables:n().array.isRequired},t.default=S},581728:function(e,t,a){var l=a(202784),r=a(213980),n=a.n(r),o=a(770561),i=a(435376),s=a(992500),c=a(862816),u=a(461298);const p=e=>{const t=l.createElement(i.Z,{id:"popover-positioned-right"},l.createElement(s.Z,null,e.title),l.createElement(c.Z,null,e.content));return l.createElement(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},l.createElement(o.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},l.createElement("div",{className:"fa fa-question"})))};p.propTypes={content:n().oneOfType([n().string,n().node]).isRequired,title:n().string.isRequired},t.Z=p}}]);