"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7668],{715897:function(e,a,t){t.r(a);var i=t(202784),l=t(213980),n=t.n(l),s=t(498614),r=t(790817),c=t(770561),u=t(294565),o=t(902194),d=t(922730),m=t(691334),p=t(741082),k=t(487890);const f=e=>{const[a,t]=(0,i.useState)(""),{defaultEntry:l,style:n}=e,[p,f]=(0,i.useState)(""),{logAction:g}=(0,k.G)("WIKIPEDIA",e),{t:b}=(0,s.$G)("wikipedia"),w=(0,i.useCallback)((e=>{g(m.mo,e),e=(e=function(e){const a=d.a.t("wikipedia:about"),t=e.search(a);return-1!==t?(t+=a.length+1,e.substring(t,e.length)):e}(e)).replace(" ","_"),e="https://"+d.a.language+".wikipedia.org/wiki/"+e,f(e)}),[g]);return(0,i.useEffect)((()=>{(0,u.isPrimitive)(l)&&w(l)}),[l,w]),i.createElement(r.Z,{className:"wikipedia",style:n},i.createElement(r.Z.Header,null,i.createElement(r.Z.Title,{as:"h3"},b("browse-wikipedia")),(0,u.isPrimitive)(l)?i.createElement(c.Z,{className:"wikipedia-reset-button",variant:"secondary",onClick:()=>{w(l)}},b("reset")):null),i.createElement(r.Z.Body,null,i.createElement(o.Z,{className:"wikipedia-voice-input",language:d.a.language,onChange:t,onSubmit:w,onFinalText:w,placeholder:b("enter-text-and-click-globe")}),i.createElement("button",{"aria-label":b("search"),onClick:()=>{w(a)},className:"wikipedia-logo"}),i.createElement("div",{className:"wikipedia-separator"}),p?i.createElement("div",{className:"wikipedia-result"},i.createElement("iframe",{title:b("wikipedia-page"),src:p,width:"100%",height:600})):null))};f.defaultProps={defaultEntry:null,style:{}},f.propTypes={defaultEntry:n().string,style:n().object},a.default=(0,p.W)(f)},770561:function(e,a,t){var i=t(72779),l=t.n(i),n=t(202784),s=t(247830),r=t(429658),c=t(552322);const u=n.forwardRef((({as:e,bsPrefix:a,variant:t,size:i,active:n,className:u,...o},d)=>{const m=(0,r.vE)(a,"btn"),[p,{tagName:k}]=(0,s.FT)({tagName:e,...o}),f=k;return(0,c.jsx)(f,{...p,...o,ref:d,className:l()(u,m,n&&"active",t&&`${m}-${t}`,i&&`${m}-${i}`,o.href&&o.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=u}}]);