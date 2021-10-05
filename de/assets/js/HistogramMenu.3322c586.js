"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5157],{497881:function(e,t,n){n.r(t);var a=n(55196),l=n(202784),i=n(690299),r=n.n(i),o=n(770561),s=n(260952),u=n(312594),c=n(458264),d=n(213980),m=n.n(d),p=n(413262),g=n(656278),f=n(929321),y=n(481066),b=n(147282),E=n(382617),h=n(808023),v=Object.defineProperty,Z=Object.defineProperties,S=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=function(e,t,n){return t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},j=function(e,t){for(var n in t||(t={}))V.call(t,n)&&O(e,n,t[n]);if(C)for(var l,i=(0,a.Z)(C(t));!(l=i()).done;){n=l.value;w.call(t,n)&&O(e,n,t[n])}return e},x=function(e,t){return Z(e,S(t))},P=r()("isle:data-explorer:histogram"),k={start:null,size:100,end:null},q={Exponential:[{name:"lambda",description:"rate",min:0,step:"any"}],Normal:[{name:"mu",description:"mean",step:"any"},{name:"sigma",description:"standard-deviation",min:0,step:"any"}],Uniform:[{name:"a",description:"minimum",step:"any"},{name:"b",description:"maximum",step:"any"}]},A=function(e){var t=(0,l.useState)(!1),n=t[0],a=t[1],i=(0,l.useState)(null),r=i[0],d=i[1],m=(0,l.useState)([0,1]),v=m[0],Z=m[1],S=(0,l.useState)(!1),C=S[0],V=S[1],w=(0,l.useState)(1),O=w[0],A=w[1],D=(0,l.useState)(!1),R=D[0],N=D[1],T=(0,l.useState)(!1),z=T[0],F=T[1],H=(0,l.useState)(e.defaultValue||e.variables[0]),B=H[0],I=H[1],M=(0,l.useState)(null),U=M[0],G=M[1],L=(0,l.useState)("Overlay"),X=L[0],Y=L[1],J=(0,l.useState)(2),K=J[0],Q=J[1],W=(0,l.useState)(10),$=W[0],_=W[1],ee=(0,l.useState)(k),te=ee[0],ne=ee[1],ae=(0,l.useState)("Automatic"),le=ae[0],ie=ae[1],re=e.variables,oe=e.groupingVariables,se=e.t;(0,l.useEffect)((function(){ne(k)}),[le]);var ue;if("Data-driven"===r)ue=l.createElement(f.Z,{legend:se("bandwidth-adjustment"),defaultValue:O,min:0,step:.1,onChange:A});else if(r){var ce;C&&(ce=q[r].map((function(e,t){return l.createElement(f.Z,{key:t,legend:se(e.name),description:se(e.description),value:v[t],onChange:function(e){var n=v.slice();n[t]=e,Z(n)},max:e.max,min:e.min,step:e.step,tooltipPlacement:"bottom"})}))),ue=l.createElement(l.Fragment,null,l.createElement(p.Z,{legend:se("specify-parameters"),tooltip:se("specify-parameters-tooltip"),defaultValue:C,onChange:V}),ce)}return l.createElement(s.Z,null,l.createElement(s.Z.Header,{as:"h4"},se("Histogram"),l.createElement(h.Z,{title:se("Histogram"),content:se("Histogram-description")})),l.createElement(s.Z.Body,null,l.createElement(c.Z,null,l.createElement(u.Z,{md:6},l.createElement(g.Z,{legend:se("variable"),defaultValue:B,options:re,onChange:I})),l.createElement(u.Z,{md:6},l.createElement(g.Z,{legend:se("group-by"),options:oe,clearable:!0,onChange:G}))),l.createElement(c.Z,null,l.createElement(u.Z,{md:6},U?l.createElement(g.Z,{legend:se("mode")+":",defaultValue:X,options:["Overlay","Facets"],onChange:Y}):null),l.createElement(u.Z,{md:6},U&&"Facets"===X?l.createElement(f.Z,{legend:se("columns"),defaultValue:2,min:1,onChange:Q,style:{marginTop:30},inputStyle:{width:70,marginLeft:0,marginTop:2}}):null)),U&&"Facets"===X?l.createElement(c.Z,null,l.createElement(u.Z,{md:6},l.createElement(p.Z,{legend:se("common-x-axis"),defaultValue:R,onChange:N})),l.createElement(u.Z,{md:6},l.createElement(p.Z,{legend:se("common-y-axis"),defaultValue:z,onChange:F}))):null,l.createElement("div",null,l.createElement(g.Z,{legend:se("binning-strategy"),options:["Automatic","Select # of bins","Set bin width"],defaultValue:le,inline:!0,onChange:ie}),"Automatic"!==le?l.createElement("div",null,l.createElement(f.Z,{legend:se("start"),inline:!0,defaultValue:te.start,onChange:function(e){var t=j({},te);t.start=e,ne(t)},step:"any",inputStyle:{width:70}}),"Select # of bins"===le?l.createElement(f.Z,{legend:se("bins"),defaultValue:$,min:1,step:1,onChange:_,inline:!0,inputStyle:{width:70}}):null,"Set bin width"===le?l.createElement(f.Z,{legend:se("size"),inline:!0,defaultValue:te.size,onChange:function(e){var t=j({},te);t.size=e,ne(t)},step:"any",inputStyle:{width:70}}):null,l.createElement(f.Z,{legend:se("end"),inline:!0,defaultValue:te.end,onChange:function(e){var t=j({},te);t.end=e,ne(t)},step:"any",inputStyle:{width:70}})):null),e.showDensityOption?l.createElement("div",null,l.createElement(p.Z,{legend:se("display-density"),defaultValue:n,onChange:a}),l.createElement(g.Z,{legend:se("overlay-density-line"),options:["Data-driven","Normal","Uniform","Exponential"],disabled:!n,defaultValue:r,clearable:!0,menuPlacement:"top",onChange:d}),ue):null,l.createElement(o.Z,{variant:"primary",block:!0,onClick:function(){P("Generate a histogram with "+$+" bins");var t=(0,y.Z)(6),a={variable:B,group:U,groupMode:X,displayDensity:n,densityType:r,binStrategy:le,sameXRange:R,sameYRange:z};"Select # of bins"===le&&(a.nBins=$),a.xBins=te,"Facets"===X&&(a.nCols=K),"Data-driven"===r?a.bandwidthAdjust=O:r&&C&&(a.densityParams=v);var i=x(j({},a),{plotId:t}),o=l.createElement(b.Z,x(j({data:e.data},a),{id:t,action:i,onShare:function(){e.session.addNotification({title:se("plot-shared"),message:se("plot-shared-message"),level:"success",position:"tr"}),e.logAction(E.V3,i)}}));e.logAction(E.NM,i),e.onCreated(o)}},se("generate"))))};A.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},showDensityOption:!0,onSelected:function(){}},A.propTypes={data:m().object.isRequired,defaultValue:m().string,groupingVariables:m().array,logAction:m().func,onSelected:m().func,onCreated:m().func.isRequired,session:m().object.isRequired,showDensityOption:m().bool,variables:m().array.isRequired},t.default=A},808023:function(e,t,n){var a=n(202784),l=n(213980),i=n.n(l),r=n(770561),o=n(435376),s=n(203858),u=n(175891),c=n(109361),d=function(e){var t=a.createElement(o.Z,{id:"popover-positioned-right"},a.createElement(s.Z,null,e.title),a.createElement(u.Z,null,e.content));return a.createElement(c.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(r.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))};d.propTypes={content:i().oneOfType([i().string,i().node]).isRequired,title:i().string.isRequired},t.Z=d}}]);