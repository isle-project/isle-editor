"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4108],{516893:function(e,t,n){n.r(t);var r=n(497326),a=n(894578),o=n(867855),l=n(202784),i=n(213980),u=n.n(i),s=n(198),c=n(790817),d=n(471275),f=n(458264),m=n(312594),p=n(320123),y=n(594010),b=n(822736),v=n(323522),x=n(844204),h=n(850013),g=n(405362),E=n(357521),Z=n(287013),O=n.n(Z),C=n(557106),P=n.n(C),w=n(74039),j=n.n(w),k=n(616145),_=n.n(k),S=n(900766),A=n.n(S),I=n(195065),K=n(294942),N=n(262600),D=n(837898),R=Object.defineProperty,F=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,M=function(e,t,n){return t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},L=function(e,t){for(var n in t||(t={}))T.call(t,n)&&M(e,n,t[n]);if(F)for(var r,a=(0,o.Z)(F(t));!(r=a()).done;){n=r.value;$.call(t,n)&&M(e,n,t[n])}return e},W=function(e,t,n){return M(e,"symbol"!=typeof t?t+"":t,n),n},B={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},q={data:{opacity:.3,fill:"tomato"}};function U(e,t){return{x:[e-6-3*t,e+6+3*t],y:[0,100/P()(100,t)*.6]}}var X=function(e){function t(t){var n;n=e.call(this,t)||this,W((0,r.Z)(n),"handleMeanChange",(function(e){var t=n.state,r=t.sd,a=t.domain,o=3*r;e-o<a.x[0]||e+o>a.x[1]||a.x[0]<e-10*o||a.x[1]>e+10*o||_()(e,e,r)>=a.y[1]?n.setState({mean:e,domain:U(e,r)}):n.setState({mean:e})})),W((0,r.Z)(n),"handleSDChange",(function(e){var t=3*e,r=n.state,a=r.mean,o=r.domain;a-t<o.x[0]||a+t>o.x[1]||o.x[0]<a-10*t||o.x[1]>a+10*t||_()(a,a,e)>=o.y[1]?n.setState({sd:e,domain:U(a,e)}):n.setState({sd:e})})),W((0,r.Z)(n),"handleLowerChange",(function(e){n.setState({x0:e})})),W((0,r.Z)(n),"handleUpperChange",(function(e){n.setState({x1:e})}));return n.state={mean:0,sd:1,x0:0,x1:1,domain:U(0,1)},n}(0,a.Z)(t,e);var n=t.prototype;return n.renderInputs=function(e){var t=this.props.t,n=this.state,r=n.mean,a=n.sd,o=n.x0,i=n.x1;return l.createElement(l.Fragment,null,l.createElement(I.Z,{key:e+"-mean",legend:t("mean"),defaultValue:0,step:this.props.step,onChange:this.handleMeanChange}),l.createElement(I.Z,{key:e+"-sd",legend:t("standard-deviation"),defaultValue:this.props.minStDev,step:this.props.step,min:this.props.minStDev,onChange:this.handleSDChange}),l.createElement(K.Z,{key:e+"-x0",legend:"x0",defaultValue:o,step:this.props.step,min:r-4*a,max:r+4*a,onChange:this.handleLowerChange}),"range"===e?l.createElement(K.Z,{key:e+"-x1",legend:"x1",defaultValue:i,min:r-4*a,max:r+4*a,step:this.props.step,onChange:this.handleUpperChange}):null)},n.render=function(){var e=this.props.domain,t=this.props.tabs,n=this.state,r=n.mean,a=n.sd,o=n.x0,i=n.x1,u=this.props.t,s=O()(t,"smaller")?l.createElement(y.Z,{eventKey:"smaller",title:l.createElement(D.Z,{raw:"P(X \\le x_0)"})},l.createElement(d.Z,null,l.createElement(f.Z,null,l.createElement(m.Z,null,l.createElement(N.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("smaller"),l.createElement(D.Z,{raw:"P(X \\le "+j()(o,-4)+") = "+j()(A()(o,r,a),-4),displayMode:!0,tag:""}))),l.createElement(m.Z,null,l.createElement(v.Z,{domain:e||this.state.domain,theme:x.Z.material},l.createElement(h.Z,{dependentAxis:!0}),l.createElement(h.Z,{label:"PDF",tickFormat:function(e){return""+e},crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(g.Z,{samples:200,interpolation:"step",y:function(e){return e.x<=o?_()(e.x,r,a):0},style:q}),l.createElement(E.Z,{samples:200,y:function(e){return _()(e.x,r,a)}}))),this.props.hideCDF?null:l.createElement(m.Z,null,l.createElement(v.Z,{theme:x.Z.material},l.createElement(h.Z,{dependentAxis:!0}),l.createElement(h.Z,{label:"CDF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),l.createElement(E.Z,{samples:600,y:function(e){return A()(e.x,r,a)},domain:{x:[r-4*a,r+4*a],y:[0,1.1]}}),l.createElement(E.Z,{data:[{x:o,y:0},{x:o,y:A()(o,r,a)}],style:B}),l.createElement(E.Z,{data:[{x:0,y:A()(o,r,a)},{x:o,y:A()(o,r,a)}],style:B})))))):null,Z=O()(t,"greater")?l.createElement(y.Z,{eventKey:"greater",title:l.createElement(D.Z,{raw:"P(X > x_0)"})},l.createElement(d.Z,null,l.createElement(f.Z,null,l.createElement(m.Z,null,l.createElement(N.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("greater"),l.createElement(D.Z,{raw:"P(X > "+j()(o,-4)+") = "+j()(1-A()(o,r,a),-4),displayMode:!0,tag:""}))),l.createElement(m.Z,null,l.createElement(v.Z,{domain:e||this.state.domain,theme:x.Z.material},l.createElement(h.Z,{dependentAxis:!0}),l.createElement(h.Z,{label:"PDF",tickFormat:function(e){return""+e},crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(g.Z,{samples:200,interpolation:"step",y:function(e){return e.x>o?_()(e.x,r,a):0},style:q}),l.createElement(E.Z,{samples:200,y:function(e){return _()(e.x,r,a)}}))),this.props.hideCDF?null:l.createElement(m.Z,null,l.createElement(v.Z,{theme:x.Z.material},l.createElement(h.Z,{dependentAxis:!0}),l.createElement(h.Z,{label:"CDF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),l.createElement(E.Z,{samples:600,y:function(e){return A()(e.x,r,a)},domain:{x:[r-4*a,r+4*a],y:[0,1.1]}}),l.createElement(E.Z,{data:[{x:o,y:0},{x:o,y:A()(o,r,a)}],style:B}),l.createElement(E.Z,{data:[{x:o,y:1},{x:o,y:A()(o,r,a)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(E.Z,{data:[{x:0,y:A()(o,r,a)},{x:o,y:A()(o,r,a)}],style:B})))))):null,C=O()(t,"range")?l.createElement(y.Z,{eventKey:"range",title:l.createElement(D.Z,{raw:"P( x_0 \\le X \\le x_1)"})},l.createElement(d.Z,null,l.createElement(f.Z,null,l.createElement(m.Z,null,l.createElement(N.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("range"),i>=o?l.createElement(D.Z,{raw:"P("+j()(o,-4)+" \\le X \\le "+j()(i,-4)+") = "+j()(A()(i,r,a)-A()(o,r,a),-4),displayMode:!0,tag:""}):l.createElement(b.Z,{variant:"warning"},u("lower-bound-smaller-equal-upper-bound")))),l.createElement(m.Z,null,l.createElement(v.Z,{domain:e||this.state.domain,theme:x.Z.material},l.createElement(h.Z,{dependentAxis:!0}),l.createElement(h.Z,{label:"PDF",tickFormat:function(e){return""+e},crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(g.Z,{samples:200,interpolation:"step",y:function(e){return e.x>o&&e.x<i?_()(e.x,r,a):0},style:q}),l.createElement(E.Z,{samples:200,y:function(e){return _()(e.x,r,a)}}))),this.props.hideCDF?null:l.createElement(m.Z,null,l.createElement(v.Z,{theme:x.Z.material},l.createElement(h.Z,{dependentAxis:!0}),l.createElement(h.Z,{label:"CDF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),l.createElement(E.Z,{samples:600,y:function(e){return A()(e.x,r,a)},domain:{x:[r-4*a,r+4*a],y:[0,1.1]}}),l.createElement(E.Z,{data:[{x:i,y:A()(o,r,a)},{x:i,y:A()(i,r,a)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(E.Z,{data:[{x:o,y:A()(o,r,a)},{x:i,y:A()(o,r,a)}],style:B})))))):null;return l.createElement(c.Z,{style:L({maxWidth:1200,margin:"10px auto"},this.props.style)},l.createElement(c.Z.Header,{as:"h3"},u("normal-distribution")),l.createElement(c.Z.Body,null,l.createElement(p.Z,{defaultActiveKey:this.props.tabs[0],id:"normal-tabs"},s,Z,C)))},t}(l.Component);X.propTypes={domain:u().object,hideCDF:u().bool,minStDev:u().number,step:u().oneOfType([u().number,u().string]),tabs:u().arrayOf(u().oneOf(["smaller","greater","range"])),style:u().object},X.defaultProps={domain:null,hideCDF:!1,minStDev:1,step:.01,tabs:["smaller","greater","range"],style:{}},t.default=(0,s.Z)("learn/distribution")(X)},314267:function(e,t,n){n.d(t,{gP:function(){return c}});var r=n(202784);function a(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var o={};a(o,"SSRProvider",(()=>u)),a(o,"useSSRSafeId",(()=>c)),a(o,"useIsSSR",(()=>d));const l={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(l);function u(e){let t=(0,r.useContext)(i),n=(0,r.useMemo)((()=>({prefix:t===l?"":`${t.prefix}-${++t.current}`,current:0})),[t]);return r.createElement(i.Provider,{value:n},e.children)}let s=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function c(e){let t=(0,r.useContext)(i);return t!==l||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||`react-aria${t.prefix}-${++t.current}`),[e])}function d(){let e=(0,r.useContext)(i)!==l,[t,n]=(0,r.useState)(e);return"undefined"!=typeof window&&e&&(0,r.useLayoutEffect)((()=>{n(!1)}),[]),t}},418919:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},303428:function(e,t,n){n.d(t,{PB:function(){return r},$F:function(){return a}});function r(e){return`data-rr-ui-${e}`}function a(e){return`rrUi${e}`}},853154:function(e,t,n){var r=n(658092),a=n(202784),o=n(418919),l=n(225879),i=n(699311),u=n(465590),s=n(590593),c=n(303428),d=n(621528),f=n(552322);const m=["as","onSelect","activeKey","role","onKeyDown"];const p=()=>{},y=(0,c.PB)("event-key"),b=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:d,activeKey:b,role:v,onKeyDown:x}=e,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,m);const g=(0,o.Z)(),E=(0,a.useRef)(!1),Z=(0,a.useContext)(u.Z),O=(0,a.useContext)(s.Z);let C,P;O&&(v=v||"tablist",b=O.activeKey,C=O.getControlledId,P=O.getControllerId);const w=(0,a.useRef)(null),j=e=>{const t=w.current;if(!t)return null;const n=(0,r.Z)(t,`[${y}]:not([aria-disabled=true])`),a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const o=n.indexOf(a);if(-1===o)return null;let l=o+e;return l>=n.length&&(l=0),l<0&&(l=n.length-1),n[l]},k=(e,t)=>{null!=e&&(null==d||d(e,t),null==Z||Z(e,t))};(0,a.useEffect)((()=>{if(w.current&&E.current){const e=w.current.querySelector(`[${y}][aria-selected=true]`);null==e||e.focus()}E.current=!1}));const _=(0,l.Z)(t,w);return(0,f.jsx)(u.Z.Provider,{value:k,children:(0,f.jsx)(i.Z.Provider,{value:{role:v,activeKey:(0,u.h)(b),getControlledId:C||p,getControllerId:P||p},children:(0,f.jsx)(n,Object.assign({},h,{onKeyDown:e=>{if(null==x||x(e),!O)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=j(-1);break;case"ArrowRight":case"ArrowDown":t=j(1);break;default:return}t&&(e.preventDefault(),k(t.dataset[(0,c.$F)("EventKey")]||null,e),E.current=!0,g())},ref:_,role:v}))})})}));b.displayName="Nav",t.Z=Object.assign(b,{Item:d.Z})},699311:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavContext",t.Z=r},621528:function(e,t,n){n.d(t,{v:function(){return f}});var r=n(202784),a=n(427452),o=n(699311),l=n(465590),i=n(247830),u=n(303428),s=n(590593),c=n(552322);const d=["as","active","eventKey"];function f({key:e,onClick:t,active:n,id:i,role:c,disabled:d}){const f=(0,r.useContext)(l.Z),m=(0,r.useContext)(o.Z),p=(0,r.useContext)(s.Z);let y=n;const b={role:c};if(m){c||"tablist"!==m.role||(b.role="tab");const t=m.getControllerId(null!=e?e:null),r=m.getControlledId(null!=e?e:null);b[(0,u.PB)("event-key")]=e,b.id=t||i,y=null==n&&null!=e?m.activeKey===e:n,!y&&(null!=p&&p.unmountOnExit||null!=p&&p.mountOnEnter)||(b["aria-controls"]=r)}return"tab"===b.role&&(d&&(b.tabIndex=-1,b["aria-disabled"]=!0),y?b["aria-selected"]=y:b.tabIndex=-1),b.onClick=(0,a.Z)((n=>{d||(null==t||t(n),null!=e&&f&&!n.isPropagationStopped()&&f(e,n))})),[b,{isActive:y}]}const m=r.forwardRef(((e,t)=>{let{as:n=i.ZP,active:r,eventKey:a}=e,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,d);const[s,m]=f(Object.assign({key:(0,l.h)(a,o.href),active:r},o));return s[(0,u.PB)("active")]=m.isActive,(0,c.jsx)(n,Object.assign({},o,s,{ref:t}))}));m.displayName="NavItem",t.Z=m},465590:function(e,t,n){n.d(t,{h:function(){return a}});const r=n(202784).createContext(null),a=(e,t=null)=>null!=e?String(e):t||null;t.Z=r},590593:function(e,t,n){const r=n(202784).createContext(null);t.Z=r},297426:function(e,t,n){n.d(t,{Z:function(){return p},W:function(){return f}});var r=n(202784),a=n(590593),o=n(465590);var l=function({children:e,in:t,mountOnEnter:n,unmountOnExit:a}){const o=(0,r.useRef)(t);return(0,r.useEffect)((()=>{t&&(o.current=!0)}),[t]),t?e:a||!o.current&&n?null:e},i=n(552322);const u=["active","eventKey","mountOnEnter","transition","unmountOnExit","role"],s=["activeKey","getControlledId","getControllerId"],c=["as"];function d(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function f(e){let{active:t,eventKey:n,mountOnEnter:l,transition:i,unmountOnExit:c,role:f="tabpanel"}=e,m=d(e,u);const p=(0,r.useContext)(a.Z);if(!p)return[Object.assign({},m,{role:f}),{eventKey:n,isActive:t,mountOnEnter:l,transition:i,unmountOnExit:c}];const{activeKey:y,getControlledId:b,getControllerId:v}=p,x=d(p,s),h=(0,o.h)(n);return[Object.assign({},m,{role:f,id:b(n),"aria-labelledby":v(n)}),{eventKey:n,isActive:null==t&&null!=h?(0,o.h)(y)===h:t,transition:i||x.transition,mountOnEnter:null!=l?l:x.mountOnEnter,unmountOnExit:null!=c?c:x.unmountOnExit}]}const m=r.forwardRef(((e,t)=>{let{as:n="div"}=e,r=d(e,c);const[u,{isActive:s,onEnter:m,onEntering:p,onEntered:y,onExit:b,onExiting:v,onExited:x,mountOnEnter:h,unmountOnExit:g,transition:E=l}]=f(r);return(0,i.jsx)(a.Z.Provider,{value:null,children:(0,i.jsx)(o.Z.Provider,{value:null,children:(0,i.jsx)(E,{in:s,onEnter:m,onEntering:p,onEntered:y,onExit:b,onExiting:v,onExited:x,mountOnEnter:h,unmountOnExit:g,children:(0,i.jsx)(n,Object.assign({},u,{ref:t,hidden:!s,"aria-hidden":!s}))})})})}));m.displayName="TabPanel";var p=m},48983:function(e,t,n){var r=n(202784),a=n(230069),o=n(314267),l=n(590593),i=n(465590),u=n(297426),s=n(552322);const c=e=>{const{id:t,generateChildId:n,onSelect:u,activeKey:c,defaultActiveKey:d,transition:f,mountOnEnter:m,unmountOnExit:p,children:y}=e,[b,v]=(0,a.$c)(c,d,u),x=(0,o.gP)(t),h=(0,r.useMemo)((()=>n||((e,t)=>x?`${x}-${t}-${e}`:null)),[x,n]),g=(0,r.useMemo)((()=>({onSelect:v,activeKey:b,transition:f,mountOnEnter:m||!1,unmountOnExit:p||!1,getControlledId:e=>h(e,"tabpane"),getControllerId:e=>h(e,"tab")})),[v,b,f,m,p,h]);return(0,s.jsx)(l.Z.Provider,{value:g,children:(0,s.jsx)(i.Z.Provider,{value:v||null,children:y})})};c.Panel=u.Z,t.Z=c},658092:function(e,t,n){n.d(t,{Z:function(){return a}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},970688:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n(257965),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},257965:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,l){var i=a||"<<anonymous>>",u=l||r;if(null==n[r])return t?new Error("Required "+o+" `"+u+"` was not specified in `"+i+"`."):null;for(var s=arguments.length,c=Array(s>6?s-6:0),d=6;d<s;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,r,i,o,u].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},569862:function(e,t,n){var r=n(72779),a=n.n(r),o=(n(970688),n(202784)),l=n(230069),i=n(853154),u=n(429658),s=n(915462),c=n(527064),d=n(477029),f=n(206198),m=n(552322);const p=o.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:d,fill:f,justify:p,navbar:y,navbarScroll:b,className:v,activeKey:x,...h}=(0,l.Ch)(e,{activeKey:"onSelect"}),g=(0,u.vE)(r,"nav");let E,Z,O=!1;const C=(0,o.useContext)(s.Z),P=(0,o.useContext)(c.Z);return C?(E=C.bsPrefix,O=null==y||y):P&&({cardHeaderBsPrefix:Z}=P),(0,m.jsx)(i.Z,{as:n,ref:t,activeKey:x,className:a()(v,{[g]:!O,[`${E}-nav`]:O,[`${E}-nav-scroll`]:O&&b,[`${Z}-${d}`]:!!Z,[`${g}-${d}`]:!!d,[`${g}-fill`]:f,[`${g}-justified`]:p}),...h})}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},t.Z=Object.assign(p,{Item:d.Z,Link:f.Z})},477029:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("nav-item")},206198:function(e,t,n){var r=n(72779),a=n.n(r),o=n(202784),l=n(341470),i=n(621528),u=n(465590),s=n(429658),c=n(552322);const d=o.forwardRef((({bsPrefix:e,className:t,as:n=l.Z,active:r,eventKey:o,...d},f)=>{e=(0,s.vE)(e,"nav-link");const[m,p]=(0,i.v)({key:(0,u.h)(o,d.href),active:r,...d});return(0,c.jsx)(n,{...d,...m,ref:f,className:a()(t,e,d.disabled&&"disabled",p.isActive&&"active")})}));d.displayName="NavLink",d.defaultProps={disabled:!1},t.Z=d},915462:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavbarContext",t.Z=r},594010:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(213980),a=n.n(r),o=(n(202784),n(48983)),l=n(456619),i=n(552322);const u=({transition:e,...t})=>(0,i.jsx)(o.Z,{...t,transition:(0,l.Z)(e)});u.displayName="TabContainer";var s=u,c=n(821729),d=n(557747);const f={eventKey:a().oneOfType([a().string,a().number]),title:a().node.isRequired,disabled:a().bool,tabClassName:a().string,tabAttrs:a().object},m=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=f;var p=Object.assign(m,{Container:s,Content:c.Z,Pane:d.Z})},821729:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("tab-content")},557747:function(e,t,n){var r=n(72779),a=n.n(r),o=n(202784),l=n(465590),i=n(590593),u=n(297426),s=n(429658),c=n(558370),d=n(456619),f=n(552322);const m=o.forwardRef((({bsPrefix:e,transition:t,...n},r)=>{const[{className:o,as:m="div",...p},{isActive:y,onEnter:b,onEntering:v,onEntered:x,onExit:h,onExiting:g,onExited:E,mountOnEnter:Z,unmountOnExit:O,transition:C=c.Z}]=(0,u.W)({...n,transition:(0,d.Z)(t)}),P=(0,s.vE)(e,"tab-pane");return(0,f.jsx)(i.Z.Provider,{value:null,children:(0,f.jsx)(l.Z.Provider,{value:null,children:(0,f.jsx)(C,{in:y,onEnter:b,onEntering:v,onEntered:x,onExit:h,onExiting:g,onExited:E,mountOnEnter:Z,unmountOnExit:O,children:(0,f.jsx)(m,{...p,ref:r,className:a()(o,P,y&&"active")})})})})}));m.displayName="TabPane",t.Z=m},320123:function(e,t,n){n(202784);var r=n(230069),a=n(48983),o=n(569862),l=n(206198),i=n(477029),u=n(821729),s=n(557747),c=n(21027),d=n(456619),f=n(552322);function m(e){let t;return(0,c.Ed)(e,(e=>{null==t&&(t=e.props.eventKey)})),t}function p(e){const{title:t,eventKey:n,disabled:r,tabClassName:a,tabAttrs:o,id:u}=e.props;return null==t?null:(0,f.jsx)(i.Z,{as:"li",role:"presentation",children:(0,f.jsx)(l.Z,{as:"button",type:"button",eventKey:n,disabled:r,id:u,className:a,...o,children:t})})}const y=e=>{const{id:t,onSelect:n,transition:l,mountOnEnter:i,unmountOnExit:y,children:b,activeKey:v=m(b),...x}=(0,r.Ch)(e,{activeKey:"onSelect"});return(0,f.jsxs)(a.Z,{id:t,activeKey:v,onSelect:n,transition:(0,d.Z)(l),mountOnEnter:i,unmountOnExit:y,children:[(0,f.jsx)(o.Z,{...x,role:"tablist",as:"ul",children:(0,c.UI)(b,p)}),(0,f.jsx)(u.Z,{children:(0,c.UI)(b,(e=>{const t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,f.jsx)(s.Z,{...t})}))})]})};y.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},y.displayName="Tabs",t.Z=y},456619:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(558370);function a(e){return"boolean"==typeof e?e?r.Z:void 0:e}},405362:function(e,t,n){n.d(t,{Z:function(){return Y}});var r=n(213980),a=n.n(r),o=n(202784),l=n(301842),i=n.n(l),u=n(460019),s=n.n(u),c=n(639332),d=n(47191),f=n(733419),m=n(585613),p=n(938151),y=n(338094),b=function(e){var t=e.polar,n=m.Lo(e,"area"),r=m.Wi(e.style,n),a={x:m.rx(e,"x"),y:m.rx(e,"y")},o={x:p.x1(e,"x"),y:p.x1(e,"y")},l={x:d.q8(e,"x").domain(o.x).range(e.horizontal?a.y:a.x),y:d.q8(e,"y").domain(o.y).range(e.horizontal?a.x:a.y)},i=t?e.origin||m.IW(e):void 0,u=function(e,t){var n=c.Yu(e);n.length<2&&(n=[]);var r=function(e){var n="log"===d.oL(t[e])?1/Number.MAX_SAFE_INTEGER:0,r=t[e].domain(),a=f.ao(r),o=f.MN(r),l=n;return a<0&&o<=0?l=o:a>=0&&o>0&&(l=a),f.AM(r)?new Date(l):l};return n.map((function(e){var t=void 0!==e._y1?e._y1:e._y,n=void 0!==e._y0?e._y0:r("y"),a=void 0!==e._x1?e._x1:e._x,o=void 0!==e._x0?e._x0:r("x");return s()({},e,{_y0:n,_y1:t,_x0:o,_x1:a})}))}(e,l);return{style:r,data:u,scale:l,domain:o,origin:i}},v=n(687056),x=n(608329),h=n(779767),g=n(779493),E=n(969896),Z=n(50038),O=n(117497);function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},j=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},k=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},_=function(e){return function(t){return e.y(t._y0)}},S=function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}},A=function(e){var t;return"curve".concat((t=e)&&t[0].toUpperCase()+t.slice(1))},I=function(e){var t=e.polar,n=e.scale,r=e.horizontal,a="function"==typeof e.interpolation&&e.interpolation,o="string"==typeof e.interpolation&&A(e.interpolation);return t?x.Z().defined(w).curve(a||v["".concat(o,"Closed")]).angle(S(n)).radius(k(n)):h.Z().defined(w).curve(a||v[o]).x(r?k(n):j(n)).y(r?j(n):k(n))},K=function(e){var t=e.polar,n=e.scale,r="function"==typeof e.interpolation&&e.interpolation,a="string"==typeof e.interpolation&&A(e.interpolation),o=r||a;return t?E.Z().defined(w).curve(r||v["".concat(a,"Closed")]).angle(S(n)).outerRadius(k(n)).innerRadius(_(n)):function(e,t){var n=e.horizontal,r=e.scale,a="function"==typeof t&&t,o="string"==typeof t&&t;return n?g.Z().defined(w).curve(a||v[o]).x0(_(r)).x1(k(r)).y(j(r)):g.Z().defined(w).curve(a||v[o]).x(j(r)).y1(k(r)).y0(_(r))}(e,o)},N=function(e){e=function(e){var t=m.xs(e.ariaLabel,e),n=m.xs(e.desc,e),r=m.xs(e.id,e),a=m.F3(s()({fill:"black"},e.style),e),o=m.xs(e.tabIndex,e);return s()({},e,{ariaLabel:t,desc:n,id:r,style:a,tabIndex:o})}(e);var t=e,n=t.ariaLabel,r=t.role,a=t.shapeRendering,l=t.className,i=t.polar,u=t.origin,c=t.data,d=t.pathComponent,f=t.events,p=t.groupComponent,y=t.clipPath,b=t.id,v=t.style,x=t.desc,h=t.tabIndex,g=i&&u?"translate(".concat(u.x,", ").concat(u.y,")"):void 0,E=e.transform||g,Z=v.stroke&&"none"!==v.stroke&&"transparent"!==v.stroke,O=K(e),P=Z&&I(e),w=v.stroke?"none":v.fill,j=C({"aria-label":n,className:l,role:r,shapeRendering:a,transform:E},f,{clipPath:y,tabIndex:h}),k=o.cloneElement(d,s()({key:"".concat(b,"-area"),style:s()({},v,{stroke:w}),d:O(c),desc:x,tabIndex:h},j)),_=Z?o.cloneElement(d,s()({key:"".concat(b,"-area-stroke"),style:s()({},v,{fill:"none"}),d:P(c)},j)):null;return Z?o.cloneElement(p,{},[k,_]):k};N.propTypes=C({},Z.jW,{groupComponent:a().element,interpolation:a().oneOfType([a().string,a().func]),pathComponent:a().element}),N.defaultProps={groupComponent:o.createElement("g",null),pathComponent:o.createElement(O.Z,null),role:"presentation",shapeRendering:"auto"};var D=N,R=n(228300),F=n(761027),T=n(339849),$=n(564167),M=n(844204),L=n(322),W=n(330490);function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var z={width:450,height:300,padding:50,interpolation:"linear"},V=function(e){function t(){return q(this,t),X(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(r=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,r=m.TY(this.props,z,n);if(this.shouldAnimate())return this.animateComponent(r,e);var a=this.renderContinuousData(r);return r.standalone?this.renderContainer(r.containerComponent,a):a}}])&&U(n.prototype,r),a&&U(n,a),t}(o.Component);Object.defineProperty(V,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(V,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}({},Z.wA,Z.ly,{interpolation:a().oneOfType([a().oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),a().func]),label:R.x9(a().string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(V,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:o.createElement(F.Z,null),dataComponent:o.createElement(D,null),groupComponent:o.createElement(T.Z,null),labelComponent:o.createElement($.Z,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:M.Z.grayscale}}),Object.defineProperty(V,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryArea"}),Object.defineProperty(V,"role",{configurable:!0,enumerable:!0,writable:!0,value:"area"}),Object.defineProperty(V,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(V,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:L.sA()}),Object.defineProperty(V,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:L.Jm()}),Object.defineProperty(V,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:p.x1}),Object.defineProperty(V,"getData",{configurable:!0,enumerable:!0,writable:!0,value:c.Yu}),Object.defineProperty(V,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,t){var n=m.TY(e,t,"area"),r=e=s()({},n,b(n)),a=r.data,o=r.domain,l=r.events,u=r.groupComponent,c=r.height,d=r.horizontal,f=r.interpolation,p=r.origin,v=r.padding,x=r.polar,h=r.scale,g=r.sharedEvents,E=r.standalone,Z=r.style,O=r.theme,C=r.width,P=r.labels,w=r.name,j=r.disableInlineStyles,k={parent:{style:Z.parent,width:C,height:c,scale:h,data:a,domain:o,standalone:E,theme:O,polar:x,origin:p,padding:v,name:w,horizontal:d},all:{data:{horizontal:d,polar:x,origin:p,scale:h,data:a,interpolation:f,groupComponent:u,style:j?{}:Z.data,disableInlineStyles:j}}};return a.reduce((function(t,n,r){return(null!=y.Q(e,n,r)||P&&(l||g))&&(t[i()(n.eventKey)?r:n.eventKey]={labels:y.AM(e,r)}),t}),k)}(e,z)}}),Object.defineProperty(V,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});var Y=(0,W.Z)(V,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);