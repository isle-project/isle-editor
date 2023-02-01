/*! For license information please see Iframe.b59ab416.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55797],{891719:function(e,t,i){var n=i(473224)();e.exports=n},473224:function(e,t,i){var n=i(362739)(!1);e.exports=n},347934:function(e,t,i){i.r(t);var n=i(202784),r=i(498614),a=i(213980),s=i.n(a),l=i(790817),o=i(822736),c=i(770561),h=i(891719),d=i.n(h),u=i(659881),m=i(112114),w=i(363040),f=i(741082),b=i(487890),p=i(691334),g=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,$=(e,t)=>{for(var i in t||(t={}))v.call(t,i)&&N(e,i,t[i]);if(y)for(var i of y(t))E.call(t,i)&&N(e,i,t[i]);return e};const Z=e=>{const t=(0,n.useRef)(null),{logAction:i,id:a}=(0,b.G)("IFRAME",{id:e.src}),{title:s,src:h,fullscreen:f,width:g,height:y,className:v,style:E}=e,[N,Z]=(0,n.useState)({width:g||window.innerWidth,height:y||window.innerHeight}),[k,P]=(0,n.useState)(!1),{t:j}=(0,r.$G)("iframe");(0,n.useEffect)((()=>{const e=()=>{document.activeElement===t.current&&i(p.b1)},n=()=>{setTimeout(e,0)},r=d()?"touchstart":"blur";return window.addEventListener(r,n),()=>{window.removeEventListener(r,n)}}),[i]),(0,n.useEffect)((()=>{f?Z({width:window.innerWidth,height:window.innerHeight}):N.width===g&&N.height===y||Z({width:g,height:y})}),[N,f,y,g]);const x=(0,n.useCallback)((e=>{P(!0)}),[]);let O;return O=$(f?{position:"absolute",width:N.width,height:N.height,top:0,left:0}:{width:N.width,height:N.height},E),n.createElement(l.Z,{id:`${a}-card`,className:`center ${v}`,style:O},k&&!f?n.createElement(u.Z,{header:`${s}: ${h}`,body:n.createElement("iframe",{src:h,width:"100%",height:"100%",title:s}),className:v,t:j,style:{left:0},variant:"secondary",wrapInCard:!1}):null,n.createElement(w.Z,{href:h,openWindow:!0,windowFeatures:"toolbar=no, menubar=no, resizable=yes, width="+N.width+", height="+N.height+", top=0, left=0"},n.createElement(m.Z,{id:a+"-external-window-tooltip",placement:"bottom",tooltip:h},n.createElement(c.Z,{variant:"secondary",size:"sm",style:{position:"absolute",top:0,right:12,fontSize:12},"aria-label":h},n.createElement("i",{className:"fa fa-external-link-alt"})))),n.createElement("iframe",{id:a,ref:t,key:`${a}-${k}`,src:h,width:N.width,height:N.height,style:{display:k?"inherit":"none"},title:s,onLoad:x}),k?null:n.createElement(o.Z,{variant:"warning",style:{margin:0}},j("alert-message")))};Z.defaultProps={title:"An iFrame",fullscreen:!1,width:900,height:600,className:"",style:{}},Z.propTypes={src:s().string.isRequired,fullscreen:s().bool,title:s().string,width:s().number,height:s().number,className:s().string,style:s().object},t.default=(0,f.W)(Z)},659881:function(e,t,i){const n=(0,i(217431).Z)((()=>Promise.all([i.e(15318),i.e(2767)]).then(i.bind(i,467664))));t.Z=n},770561:function(e,t,i){var n=i(72779),r=i.n(n),a=i(202784),s=i(247830),l=i(429658),o=i(552322);const c=a.forwardRef((({as:e,bsPrefix:t,variant:i,size:n,active:a,className:c,...h},d)=>{const u=(0,l.vE)(t,"btn"),[m,{tagName:w}]=(0,s.FT)({tagName:e,...h}),f=w;return(0,o.jsx)(f,{...m,...h,ref:d,className:r()(c,u,a&&"active",i&&`${u}-${i}`,n&&`${u}-${n}`,h.href&&h.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c}}]);