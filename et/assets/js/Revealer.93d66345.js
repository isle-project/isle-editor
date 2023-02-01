"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74722],{119518:function(e,t,a){a.r(t);var r=a(202784),l=a(690299),n=a.n(l),o=a(213980),s=a.n(o),c=a(498614),i=a(770561),m=a(409961),u=a.n(m),d=a(426214),v=a(770149),f=a(387226),h=a(123103),p=a(691334),b=a(487890),E=a(741082),$=a(302108);const g=n()("isle:revealer"),w=e=>{const{message:t,show:a,children:l}=e,{id:n,logAction:o,onAction:s}=(0,b.G)("REVEALER",e),m=(0,r.useContext)(h.Z),{t:E}=(0,c.$G)("revealer"),[w,N]=(0,r.useState)(a),[R,k]=(0,r.useState)(a),[y,C]=(0,r.useState)(null);a!==R&&(N(a),k(a)),(0,r.useEffect)((()=>{const e=()=>{if(m&&m.metadata&&m.metadata.revealer&&m.metadata.revealer[n]){const e=y||m.cohort;let t=m.metadata.revealer[n][e];g("Revealer "+n+" show status read from metadata for cohort "+e+": ",t),void 0===t&&(t=m.metadata.revealer[n].all),!0!==t&&!1!==t||N(t)}};let t;return e(),g("Subscribe revealer with ID: "+n),t=m.subscribe((t=>{t===$.$L?C(null):t===$.KI&&e()})),s({[p.X2]:e=>{const t=e.value;g(`Received action for cohort ${t}: `),!t||m.cohort&&m.cohort===t?(g(`Reveal content for ${n}...`),N(!0)):y===t&&(g(`Reveal content of ${n} for cohort ${t}...`),N(!0))},[p.Y7]:e=>{const t=e.value;g(`Received action for cohort ${t}: `),!t||m.cohort&&m.cohort===t?(g(`Hide content for ${n}...`),N(!1)):y===t&&(g(`Hide content of ${n} for cohort ${t}...`),N(!1))}}),()=>{t&&t()}}),[n,y,s,m]);const Z=e=>{const t=e.target.value;(t!==y||"all"===t&&u()(y))&&(g("Handle cohort change: "+t),C("all"===t?null:t))},P=m.cohorts||[],S=r.createElement("h3",{className:"center"},t||E("message"));return g("showChildren: "+w),r.createElement(r.Fragment,null,r.createElement(v.Z,{owner:!0,banner:null,showOwnerInPresentationMode:!1},r.createElement(d.Z,{className:"center revealer-panel"},r.createElement(i.Z,{className:"revealer-button",onClick:()=>{const e=!w;let t;N(e),t=m&&m.metadata&&m.metadata.revealer&&m.metadata.revealer[n]?m.metadata.revealer[n]:{},e?(o(p.X2,y,{},"members"),t[y||"all"]=!0,m.updateMetadata("revealer",n,t)):(o(p.Y7,y,{},"members"),t[y||"all"]=!1,m.updateMetadata("revealer",n,t))}},E(w?"hide":"reveal")),E("contents-of"),r.createElement("i",null,n)," ",E(w?"from":"to"),r.createElement("select",{className:"revealer-select",onChange:Z,onBlur:Z,onClick:f.Z,value:y||"all"},r.createElement("option",{value:"all"},E("all-students")),P.map(((e,t)=>r.createElement("option",{key:t,value:e.title},e.title)))))),w?null:S,r.createElement("div",{className:"revealer outer-element",style:{display:w?"inherit":"none"}},l))};w.defaultProps={message:null,show:!1},w.propTypes={message:s().oneOfType([s().string,s().node]),show:s().bool},t.default=(0,E.W)(w)},387226:function(e,t){t.Z=function(e){e.stopPropagation()}},770561:function(e,t,a){var r=a(72779),l=a.n(r),n=a(202784),o=a(247830),s=a(429658),c=a(552322);const i=n.forwardRef((({as:e,bsPrefix:t,variant:a,size:r,active:n,className:i,...m},u)=>{const d=(0,s.vE)(t,"btn"),[v,{tagName:f}]=(0,o.FT)({tagName:e,...m}),h=f;return(0,c.jsx)(h,{...v,...m,ref:u,className:l()(i,d,n&&"active",a&&`${d}-${a}`,r&&`${d}-${r}`,m.href&&m.disabled&&"disabled")})}));i.displayName="Button",i.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=i}}]);