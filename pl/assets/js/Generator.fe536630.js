"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1550],{410055:function(e,t,a){a.r(t);var n=a(202784),r=a(213980),u=a.n(r),s=a(770561),o=a(262600),c=(0,a(24551).Z)("generator"),l=function(e){var t=e.id,a=e.autoStart,r=e.buttonLabel,u=e.onGenerate,l=(0,n.useRef)(t||c({autoStart:a,buttonLabel:r,onGenerate:u})),i=(0,n.useState)(null),f=i[0],d=i[1],b=(0,n.useRef)();(0,n.useEffect)((function(){b.current=u}));var v=(0,n.useCallback)((function(){var e=b.current();e&&(e=n.cloneElement(e,{id:l.current}),d(e))}),[]);return(0,n.useEffect)((function(){a&&v()}),[a,v]),n.createElement(o.Z,null,f,n.createElement("div",{className:"d-grid"},n.createElement(s.Z,{onClick:v},r)))};l.propTypes={autoStart:u().bool,buttonLabel:u().oneOfType([u().string,u().node]),onGenerate:u().func.isRequired},l.defaultProps={autoStart:!0,buttonLabel:"Generate"},t.default=l},770561:function(e,t,a){var n=a(72779),r=a.n(n),u=a(202784),s=a(247830),o=a(429658),c=a(552322);const l=u.forwardRef((({as:e,bsPrefix:t,variant:a,size:n,active:u,className:l,...i},f)=>{const d=(0,o.vE)(t,"btn"),[b,{tagName:v}]=(0,s.FT)({tagName:e,...i}),m=v;return(0,c.jsx)(m,{...b,...i,ref:f,className:r()(l,d,u&&"active",a&&`${d}-${a}`,n&&`${d}-${n}`,i.href&&i.disabled&&"disabled")})}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=l}}]);