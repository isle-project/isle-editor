"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81880],{303428:function(e,t,n){n.d(t,{$F:function(){return a},PB:function(){return r}});function r(e){return`data-rr-ui-${e}`}function a(e){return`rrUi${e}`}},658092:function(e,t,n){n.d(t,{Z:function(){return a}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},832377:function(e,t,n){n.r(t);var r=n(202784),a=n(213980),l=n.n(a),c=n(498614),o=n(770561),s=n(715318),i=n(300198),u=n.n(i),d=n(123103),f=n(741082);const p=({children:e,func:t,library:n,visible:a})=>{const{t:l}=(0,c.$G)("r"),i=(0,r.useContext)(d.Z),[f,p]=(0,r.useState)(a),[b,m]=(0,r.useState)(""),y=(0,r.useCallback)((()=>{const r=u()(t||e);""===b&&i.getRHelp(n,r,((e,t,n)=>{e||m(n)}))}),[b,e,t,n,i]),v=(0,r.useCallback)((()=>{p(!f)}),[f]);return(0,r.useEffect)((()=>{f&&y()}),[f,y]),r.createElement("span",{role:"button",tabIndex:0,className:"RHelp",onClick:v,onKeyPress:v},r.createElement(s.Z,{backdrop:!1,show:f,title:l("r-help"),onHide:v,className:"r-help-modal",enforceFocus:!1},r.createElement(s.Z.Header,{closeButton:!0},r.createElement(s.Z.Title,{id:"contained-modal-title-lg"},l("r-help"))),r.createElement(s.Z.Body,{className:"r-help-modal-body"},r.createElement("span",{dangerouslySetInnerHTML:{__html:b}})),r.createElement(s.Z.Footer,null,r.createElement(o.Z,{onClick:v},l("close")))),r.createElement("code",{style:{cursor:"pointer"}},e||t))};p.propTypes={func:l().string,library:l().string,visible:l().bool},p.defaultProps={func:"",library:"base",visible:!1},t.default=(0,f.W)(p)},770561:function(e,t,n){var r=n(72779),a=n.n(r),l=n(202784),c=n(247830),o=n(429658),s=n(552322);const i=l.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:l,className:i,...u},d)=>{const f=(0,o.vE)(t,"btn"),[p,{tagName:b}]=(0,c.FT)({tagName:e,...u}),m=b;return(0,s.jsx)(m,{...p,...u,ref:d,className:a()(i,f,l&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,u.href&&u.disabled&&"disabled")})}));i.displayName="Button",i.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=i}}]);