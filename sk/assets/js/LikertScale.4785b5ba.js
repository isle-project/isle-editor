"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4797],{569904:function(e,t,n){var a=n(867855),r=n(202784),l=n(213980),s=n.n(l),i=Object.defineProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=function(e,t,n){return t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},b=function(e){var t=e,n=t.children,l=function(e,t){var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var l,s=(0,a.Z)(o(e));!(l=s()).done;)r=l.value,t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n}(t,["children"]);return r.createElement("div",function(e,t){for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var r,l=(0,a.Z)(o(t));!(r=l()).done;)n=r.value,u.call(t,n)&&p(e,n,t[n]);return e}({},l),n)};b.defaultProps={className:"",style:{}},b.propTypes={className:s().string,style:s().object},t.Z=b},746614:function(e,t,n){n.r(t);var a=n(867855),r=n(202784),l=n(376699),s=n(213980),i=n.n(s),o=n(790817),c=n(23836),u=n(770561),p=n(10863),b=n(552770),f=n.n(b),d=n(24551),m=n(267682),y=n(569904),v=n(382617),g=n(615558),N=Object.defineProperty,O=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,Z=function(e,t,n){return t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},w=function(e,t){for(var n in t||(t={}))h.call(t,n)&&Z(e,n,t[n]);if(O)for(var r,l=(0,a.Z)(O(t));!(r=l()).done;){n=r.value;E.call(t,n)&&Z(e,n,t[n])}return e},j=(0,d.Z)("likert-scale"),k=["strongly-disagree","disagree","neither-agree-nor-disagree","agree","strongly-agree"],P=function(e){var t=e.id||j(e),n=(0,r.useContext)(m.Z),a=(0,r.useState)(null),s=a[0],i=a[1],b=(0,r.useState)(!1),d=b[0],g=b[1],N=(0,l.$)("likert-scale").t,O=e.options||k.map((function(e){return N(e)})),h=function(e){i(e.target.value)},E=e.noMultipleResponses&&d;return r.createElement(o.Z,{className:e.className+" center",style:w({width:"75%"},e.style)},r.createElement(o.Z.Body,null,r.createElement(p.Z,{className:"center"},r.createElement("label",null,e.question),r.createElement("br",null),O.map((function(e,t){return r.createElement(c.Z.Check,{type:"radio",label:e,checked:s===e,value:e,key:t,disabled:E,inline:!0,onClick:h})}))),r.createElement("br",null),r.createElement(u.Z,{className:"submit-button",variant:"primary",size:"sm",disabled:!s||E,onClick:function(){e.disableSubmitNotification||n.addNotification({title:N("answer-submitted"),message:N("answer-submitted-msg"),level:"success"}),g(!0),n.log({id:t,type:v.Ke,value:f()(O,s)})},style:{marginRight:"5px"}},d&&!e.noMultipleResponses?N("resubmit"):N("submit")),r.createElement(y.Z,{buttonLabel:N("responses"),id:t,data:{type:"factor",levels:O},info:v.Ke})))};P.propTypes={question:i().oneOfType([i().string,i().node]),options:i().array,noMultipleResponses:i().bool,disableSubmitNotification:i().bool,className:i().string,style:i().object},P.defaultProps={question:"",options:null,noMultipleResponses:!1,disableSubmitNotification:!1,className:"",style:{}},t.default=(0,g.W)(P)},770561:function(e,t,n){var a=n(72779),r=n.n(a),l=n(202784),s=n(247830),i=n(429658),o=n(552322);const c=l.forwardRef((({as:e,bsPrefix:t,variant:n,size:a,active:l,className:c,...u},p)=>{const b=(0,i.vE)(t,"btn"),[f,{tagName:d}]=(0,s.FT)({tagName:e,...u}),m=d;return(0,o.jsx)(m,{...f,...u,ref:p,className:r()(c,b,l&&"active",n&&`${b}-${n}`,a&&`${b}-${a}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c}}]);