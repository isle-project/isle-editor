(self.webpackChunk=self.webpackChunk||[]).push([[5425],{1081:function(n,t,e){"use strict";e.r(t);var o,r,i,u=e(574315),a=e(858255),s=e(202784),l=(e(213980),e(735368)),c=e.n(l),p=e(71816),f=e(760977),d=e(741319),Z=e(432261),g=function(n){var t=n.code,e=n.libraries,l=n.prependCode,Z=n.onResult,g=n.onPlots,m=(0,s.useState)(null),v=(0,u.Z)(m,2),b=v[0],h=v[1],x=(0,s.useState)(!1),C=(0,u.Z)(x,2),R=C[0],k=C[1],y=(0,s.useContext)(d.Z);return(0,s.useEffect)((function(){k(!0);var n=(0,f.Z)(e,l,y)+t;y.executeRCode({code:n,onError:function(n){h(n),k(!1),Z(n)},onPlots:g,onResult:function(n,t,e){h(e),k(!1),Z(n,e)}})}),[t,e,g,Z,l,y]),(0,a.Z)("span",{className:"ROutput"},void 0,b?(0,a.Z)("div",{style:{marginLeft:"auto",marginRight:"auto",marginTop:"10px",marginBottom:"10px"}},void 0,(0,a.Z)(p.Z,{width:128,height:64,style:{marginTop:"8px",marginBottom:"-12px"},running:R}),R?r||(r=(0,a.Z)("span",{})):function(n){if(n){var t={__html:c().sanitize(n)};return(0,a.Z)("pre",{id:"output"},void 0,(0,a.Z)("span",{dangerouslySetInnerHTML:t}))}return o||(o=(0,a.Z)("span",{}))}(b)):i||(i=(0,a.Z)("span",{})))};g.defaultProps={code:"",libraries:[],prependCode:"",onPlots:function(){},onResult:function(){}},t.default=(0,Z.W)(g)},760977:function(n,t,e){"use strict";e(319371);var o=e(801420),r=e.n(o);t.Z=function(n,t,e){var o=e.config.rshell;o&&o.libraries&&(n=n.concat(o.libraries));var i=function(n){return n.map((function(n){return"library("+n+");"})).join(" ")}(n);return o&&o.global&&(i+=o.global+"\n"),t=r()(t)?t.join("\n"):t,i+=t+="\n"}}}]);