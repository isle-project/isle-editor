"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50483],{961958:function(e,t,a){a.r(t);var l=a(202784),n=a(213980),r=a.n(n),o=a(156931),i=a(931776),c=a(830650),s=a(10863),u=a(770561),d=a(790817),m=a(458264),p=a(312594),g=a(188304),b=a(226480),y=a(351375),E=a(440835),h=a(684800),Z=a(711768),f=a(924704),v=a(691334),C=a(648246),S=a(701647),V=a(581728),O=Object.defineProperty,P=Object.defineProperties,k=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,B=(e,t,a)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))q.call(t,a)&&B(e,a,t[a]);if(x)for(var a of x(t))j.call(t,a)&&B(e,a,t[a]);return e},M=(e,t)=>P(e,k(t));const A=["Mean","Median","Min","Max","Sum"],z=["Counts of distinct values","Function evaluated for a variable"],I=e=>l.createElement(o.c.Option,w({},e),e.data.label,l.createElement("br",null),l.createElement("span",{style:{fontVariant:"small-caps"}},e.data.description)),R=[{label:"Total",value:"total",description:"by total count of each category"},{label:"Alphabetically",value:"category",description:"by category name"},{label:"Min",value:"min",description:"by minimum count inside each category"},{label:"Max",value:"max",description:"by maximum count inside each category"},{label:"Mean",value:"mean",description:"by mean count inside each category"},{label:"Median",value:"median",description:"by median count inside each category"}],N=e=>{const{groupingVariables:t,variables:a,defaultValue:n,quantitative:r,t:o}=e,[O,P]=(0,l.useState)(n||a[0]),[k,x]=(0,l.useState)(r[0]),[q,j]=(0,l.useState)("ascending"),[B,N]=(0,l.useState)(A[0]),[T,D]=(0,l.useState)(null),[F,H]=(0,l.useState)(!1),[L,G]=(0,l.useState)(z[0]),[J,K]=(0,l.useState)(!1),[Q,U]=(0,l.useState)(!1),[W,X]=(0,l.useState)(!1),[Y,$]=(0,l.useState)(null),[_,ee]=(0,l.useState)([]),[te,ae]=(0,l.useState)(null),le=!T||W||L===z[1];return l.createElement(d.Z,null,l.createElement(d.Z.Header,{as:"h4"},o("Bar Chart"),l.createElement(V.Z,{title:o("Bar Chart"),content:o("Bar Chart-description")})),l.createElement(d.Z.Body,{className:"d-grid gap-3"},l.createElement(E.Z,{legend:o("bars-represent"),defaultValue:L,options:z,onChange:G}),l.createElement(E.Z,{legend:o("variable"),defaultValue:O,options:a,onChange:P}),L===z[1]?l.createElement(m.Z,null,l.createElement(p.Z,null,l.createElement(E.Z,{legend:o("y-axis"),defaultValue:k,options:e.quantitative,onChange:x})),l.createElement(p.Z,null,l.createElement(E.Z,{legend:o("summary-function"),defaultValue:B,options:A,onChange:N}))):null,l.createElement(E.Z,{legend:o("group-by"),clearable:!0,defaultValue:T,options:t,menuPlacement:"top",onChange:t=>{D(t);const a=(0,C.Z)(e.data[t],t);ee(a.map((e=>({color:null,category:e}))))}}),l.createElement(m.Z,null,l.createElement(p.Z,null,l.createElement(s.Z,{controlId:"barchart-order-select"},l.createElement(c.Z,null,o(T?"order-outer-groups":"order-x-axis"),":"),l.createElement(i.ZP,{defaultValue:Y,options:R,components:{Option:I},isClearable:!0,menuPlacement:"top",onChange:e=>{$(e?e.value:null)},styles:h.Z}))),l.createElement(p.Z,null,l.createElement(E.Z,{legend:o("order-direction"),defaultValue:q,options:["ascending","descending"],menuPlacement:"top",onChange:j,style:{display:Y?"inherit":"none"}}))),l.createElement(m.Z,null,l.createElement(p.Z,null,L===z[0]?l.createElement(y.Z,{legend:o("total-percentages"),defaultValue:W,onChange:X,disabled:J,style:{opacity:J?.2:1}}):null),l.createElement(p.Z,null,l.createElement(y.Z,{legend:o("flip-coordinates"),defaultValue:F,onChange:H}))),l.createElement(m.Z,null,l.createElement(p.Z,null,l.createElement(y.Z,{legend:o("stack-bars"),defaultValue:Q,onChange:U,disabled:!T,style:{opacity:T?1:.2}})),l.createElement(p.Z,null,l.createElement(y.Z,{legend:o("relative-frequencies-inside-each-group"),defaultValue:J,disabled:le,onChange:K,style:{opacity:le?.2:1}}))),l.createElement(S.Z,{header:o(T?"customize-colors":"customize-color"),headerStyle:{fontSize:"1rem"},style:{width:"100%"}},l.createElement(g.Z,null,T&&_.map(((e,t)=>l.createElement(g.Z.Item,{key:t},e.category,l.createElement(b.Z,{onChange:a=>{const l=[..._.slice(0,t),M(w({},e),{color:a.hex}),..._.slice(t+1)];ee(l)},variant:"Button",color:e.color||"#000000",buttonStyle:{marginLeft:"0.5rem"},style:{width:"auto",float:"right"},disableAlpha:!0})))),!T&&l.createElement(g.Z.Item,null,l.createElement(b.Z,{onChange:e=>{ae(e.hex)},disableAlpha:!0,variant:"Button",color:te||"#000000"})))),l.createElement(u.Z,{variant:"primary",onClick:()=>{const t=(0,Z.Z)(6),a={variable:O,group:T,relative:J,totalPercent:W,xOrder:Y,direction:q,stackBars:Q,plotId:t};L===z[1]&&(a.summary=B,a.yvar=k);const n=()=>{e.session.addNotification({title:e.t("plot-shared"),message:e.t("plot-shared-message"),level:"success",position:"tr"}),e.logAction(v.v1,a)},r=T?_.map((e=>e.color)):[te];let o;o=L===z[1]?l.createElement(f.Z,M(w({},e),{variable:O,group:T,horizontal:F,relative:J,totalPercent:W,xOrder:Y,direction:q,summary:B,yvar:k,stackBars:Q,id:t,action:a,onShare:n,colors:r})):l.createElement(f.Z,M(w({},e),{variable:O,group:T,horizontal:F,relative:J,totalPercent:W,xOrder:Y,direction:q,stackBars:Q,id:t,action:a,onShare:n,colors:r})),e.logAction(v.jk,a),e.onCreated(o)},disabled:!O},o("generate"))))};N.defaultProps={defaultValue:null,groupingVariables:null,logAction(){},onCreated(){},onSelected(){}},N.propTypes={data:r().object.isRequired,defaultValue:r().string,groupingVariables:r().array,logAction:r().func,onCreated:r().func,onSelected:r().func,session:r().object.isRequired,variables:r().array.isRequired},t.default=N},581728:function(e,t,a){var l=a(202784),n=a(213980),r=a.n(n),o=a(770561),i=a(435376),c=a(992500),s=a(862816),u=a(461298);const d=e=>{const t=l.createElement(i.Z,{id:"popover-positioned-right"},l.createElement(c.Z,null,e.title),l.createElement(s.Z,null,e.content));return l.createElement(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},l.createElement(o.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},l.createElement("div",{className:"fa fa-question"})))};d.propTypes={content:r().oneOfType([r().string,r().node]).isRequired,title:r().string.isRequired},t.Z=d}}]);