/*! For license information please see LearnGeometricDistribution.c7b1b06d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1726],{367533:function(e,t,n){n.r(t);var r=n(497326),a=n(894578),l=n(867855),i=n(202784),o=n(213980),u=n.n(o),s=n(219637),c=n(198),d=n(790817),m=n(320123),f=n(594010),p=n(471275),Z=n(458264),E=n(312594),x=n(323522),y=n(844204),v=n(850013),b=n(945618),h=n(357521),g=n(74039),C=n.n(g),O=n(605977),P=n.n(O),w=n(310779),N=n.n(w),j=n(40583),k=n.n(j),K=n(233268),A=n.n(K),I=n(294942),F=n(195065),T=n(262600),S=n(837898),L=Object.defineProperty,$=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,D=function(e,t,n){return t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},X=function(e,t){for(var n in t||(t={}))R.call(t,n)&&D(e,n,t[n]);if($)for(var r,a=(0,l.Z)($(t));!(r=a()).done;){n=r.value;M.call(t,n)&&D(e,n,t[n])}return e},_=function(e,t,n){return D(e,"symbol"!=typeof t?t+"":t,n),n},W=.999,B=function(e){function t(t){var n;n=e.call(this,t)||this,_((0,r.Z)(n),"handleProbChange",(function(e){for(var t=n.props.countTrials?1:0,r=P()(t,A()(W,e),1),a=new Array(r.length),l=0;l<r.length;l++)a[l]={x:r[l],y:N()(n.props.countTrials?r[l]-1:r[l],e)};n.setState({data:a,p:e})})),_((0,r.Z)(n),"handleLowerChange",(function(e){n.setState({x0:e})})),_((0,r.Z)(n),"handleUpperChange",(function(e){n.setState({x1:e})}));for(var a=t.countTrials?1:0,l=P()(a,A()(W,.5)+1,1),i=new Array(l.length),o=0;o<l.length;o++)i[o]={x:l[o],y:N()(t.countTrials?l[o]-1:l[o],.5)};return n.state={p:.5,x0:0,x1:1,data:i},n}(0,a.Z)(t,e);var n=t.prototype;return n.renderInputs=function(e){var t=this.props.countTrials?1:0;return i.createElement(i.Fragment,null,i.createElement(I.Z,{key:e+"-p",legend:this.props.t("success-probability"),defaultValue:this.state.p,min:.01,step:this.props.step,max:1,onChange:this.handleProbChange}),i.createElement(I.Z,{key:e+"-x0",legend:"x0",defaultValue:t,min:t-1,max:A()(W,this.state.p)+1,step:this.props.step,onChange:this.handleLowerChange}),"range"===e?i.createElement(I.Z,{legend:"x1",defaultValue:this.state.x1,min:t-1,max:A()(W,this.state.p)+1,step:1,onChange:this.handleUpperChange}):null)},n.render=function(){var e=this.state,t=e.x0,n=e.x1,r=e.p,a=this.props,l=a.countTrials,o=a.t,u=l?1:0;return i.createElement(d.Z,{style:X({maxWidth:1200,margin:"10px auto"},this.props.style)},i.createElement(d.Z.Header,{as:"h3"},o("geometric-distribution")),i.createElement(d.Z.Body,null,i.createElement(m.Z,{defaultActiveKey:0,id:"poisson-tabs"},i.createElement(f.Z,{eventKey:0,title:i.createElement(S.Z,{raw:"P(X = x_0)"})},i.createElement(p.Z,null,i.createElement(Z.Z,null,i.createElement(E.Z,{md:5},i.createElement(T.Z,{title:o("geometric-probabilities")},i.createElement("p",null,this.props.countTrials?i.createElement(s.c,{i18nKey:"number-trials-until-success",ns:"LearnDistribution"},"Let ",i.createElement(S.Z,{raw:"X"})," be the number of trials until the first success."):i.createElement(s.c,{i18nKey:"number-failures-until-success",ns:"LearnDistribution"},"Let ",i.createElement(S.Z,{raw:"X"})," be the number of failures until the first success.")),i.createElement("span",null,o("for-success-probability")),i.createElement(F.Z,{inline:!0,legend:"p",defaultValue:.5,step:.01,max:1,min:.01,onChange:this.handleProbChange}),i.createElement("span",null,o("we-get")),i.createElement(S.Z,{raw:"P(X=x)= \\Large \\left( 1 - "+r+" \\right)^{x-1} "+r,displayMode:!0}),i.createElement("span",null,o("evaluated-at")," "),i.createElement(F.Z,{inline:!0,legend:"x",defaultValue:u,step:1,max:A()(W,r)+1,min:u,onChange:this.handleLowerChange})," ",i.createElement("span",null,o("we-get")),i.createElement(S.Z,{raw:"P(X="+t+")= \\Large \\left( 1 - "+r+" \\right)^{"+t+(l?"-1":"")+"} "+r+" = "+N()(l?t-1:t,r).toFixed(4),displayMode:!0}))),i.createElement(E.Z,{md:7},i.createElement(T.Z,{header:o("probability-plot")},i.createElement(Z.Z,null,i.createElement(E.Z,{md:6},i.createElement(x.Z,{theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"PMF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),i.createElement(b.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x===t?"tomato":"steelblue"}}}}))),i.createElement(E.Z,{md:6},i.createElement(x.Z,{theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"CDF",tickFormat:function(e){return""+e},crossAxis:!1,style:{axisLabel:{padding:40}}}),i.createElement(h.Z,{samples:600,y:function(e){return k()(e.x-u,r)},domain:{x:[0,A()(W,r)+1],y:[0,1.1]}}),i.createElement(h.Z,{data:[{x:t,y:0},{x:t,y:k()(t-u,r)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i.createElement(h.Z,{data:[{x:0,y:k()(t-u,r)},{x:t,y:k()(t-u,r)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),i.createElement(f.Z,{eventKey:1,title:i.createElement(S.Z,{raw:"P(X \\le x_0)"})},i.createElement(p.Z,null,i.createElement(Z.Z,null,i.createElement(E.Z,{md:4},i.createElement(T.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("smaller"),i.createElement(S.Z,{raw:"P(X \\le "+C()(t,-4)+") = "+C()(k()(t-u,r),-4)}))),i.createElement(E.Z,{md:8},i.createElement(p.Z,null,i.createElement(Z.Z,null,i.createElement(E.Z,{md:6},i.createElement(x.Z,{domain:{x:[0,A()(W,r)+2]},theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"PMF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),i.createElement(b.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<=t?"tomato":"steelblue"}}}}))),i.createElement(E.Z,{md:6},i.createElement(x.Z,{theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"CDF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),i.createElement(h.Z,{samples:600,y:function(e){return k()(e.x-u,r)},domain:{x:[0,A()(W,r)+1],y:[0,1.1]}}),i.createElement(h.Z,{data:[{x:t,y:0},{x:t,y:k()(t-u,r)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i.createElement(h.Z,{data:[{x:0,y:k()(t-u,r)},{x:t,y:k()(t-u,r)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),i.createElement(f.Z,{eventKey:2,title:i.createElement(S.Z,{raw:"P(X > x_0)"})},i.createElement(p.Z,null,i.createElement(Z.Z,null,i.createElement(E.Z,{md:4},i.createElement(T.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("greater"),i.createElement(S.Z,{raw:"P(X > "+C()(t,-4)+") = "+C()(1-k()(t-u,r),-4)}))),i.createElement(E.Z,{md:8},i.createElement(Z.Z,null,i.createElement(E.Z,{md:6},i.createElement(x.Z,{domain:{x:[0,A()(W,r)+2]},theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"PMF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),i.createElement(b.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t?"tomato":"steelblue"}}}}))),i.createElement(E.Z,{md:6},i.createElement(x.Z,{theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"CDF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),i.createElement(h.Z,{samples:600,y:function(e){return k()(e.x-u,r)},domain:{x:[0,A()(W,r)+1],y:[0,1.1]}}),i.createElement(h.Z,{data:[{x:t,y:0},{x:t,y:k()(t-u,r)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i.createElement(h.Z,{data:[{x:0,y:k()(t-u,r)},{x:t,y:k()(t-u,r)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),i.createElement(f.Z,{eventKey:3,title:i.createElement(S.Z,{raw:"P( x_0 \\le X \\le x_1)"})},i.createElement(p.Z,null,i.createElement(Z.Z,null,i.createElement(E.Z,{md:4},i.createElement(T.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("range"),i.createElement(S.Z,{raw:"P( "+C()(t,-4)+" \\le X \\le "+C()(n,-4)+") = "+C()(k()(n-u,r)-k()(t-u-1,r),-4)}))),i.createElement(E.Z,{md:8},i.createElement(Z.Z,null,i.createElement(E.Z,{md:6},i.createElement(x.Z,{domain:{x:[0,A()(W,r)+2]},theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"PMF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),i.createElement(b.Z,{data:this.state.data,style:{data:{fill:function(e){return t<=e.datum.x&&e.datum.x<=n?"tomato":"steelblue"}}}}))),i.createElement(E.Z,{md:6},i.createElement(x.Z,{theme:y.Z.material},i.createElement(v.Z,{dependentAxis:!0}),i.createElement(v.Z,{label:"CDF",tickFormat:function(e){return""+e},style:{axisLabel:{padding:40}}}),i.createElement(h.Z,{samples:600,y:function(e){return k()(e.x-u,r)},domain:{x:[0,A()(W,r)+1],y:[0,1.1]}})))))))))))},t}(i.Component);B.propTypes={countTrials:u().bool,step:u().oneOfType([u().number,u().string]),style:u().object},B.defaultProps={countTrials:!1,step:.01,style:{}},t.default=(0,c.Z)("learn/distribution")(B)},314267:function(e,t,n){n.d(t,{gP:function(){return o}});var r=n(202784);const a={prefix:String(Math.round(1e10*Math.random())),current:0},l=r.createContext(a);let i=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function o(e){let t=(0,r.useContext)(l);return t!==a||i||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||"react-aria"+t.prefix+"-"+ ++t.current),[e])}},418919:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},303428:function(e,t,n){n.d(t,{PB:function(){return r},$F:function(){return a}});function r(e){return`data-rr-ui-${e}`}function a(e){return`rrUi${e}`}},853154:function(e,t,n){var r=n(658092),a=n(202784),l=n(418919),i=n(225879),o=n(699311),u=n(465590),s=n(590593),c=n(303428),d=n(621528),m=n(552322);const f=["as","onSelect","activeKey","role","onKeyDown"];const p=()=>{},Z=(0,c.PB)("event-key"),E=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:d,activeKey:E,role:x,onKeyDown:y}=e,v=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,f);const b=(0,l.Z)(),h=(0,a.useRef)(!1),g=(0,a.useContext)(u.Z),C=(0,a.useContext)(s.Z);let O,P;C&&(x=x||"tablist",E=C.activeKey,O=C.getControlledId,P=C.getControllerId);const w=(0,a.useRef)(null),N=e=>{const t=w.current;if(!t)return null;const n=(0,r.Z)(t,`[${Z}]:not([aria-disabled=true])`),a=t.querySelector("[aria-selected=true]");if(!a)return null;const l=n.indexOf(a);if(-1===l)return null;let i=l+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},j=(e,t)=>{null!=e&&(null==d||d(e,t),null==g||g(e,t))};(0,a.useEffect)((()=>{if(w.current&&h.current){const e=w.current.querySelector(`[${Z}][aria-selected=true]`);null==e||e.focus()}h.current=!1}));const k=(0,i.Z)(t,w);return(0,m.jsx)(u.Z.Provider,{value:j,children:(0,m.jsx)(o.Z.Provider,{value:{role:x,activeKey:(0,u.h)(E),getControlledId:O||p,getControllerId:P||p},children:(0,m.jsx)(n,Object.assign({},v,{onKeyDown:e=>{if(null==y||y(e),!C)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),j(t.dataset[(0,c.$F)("EventKey")]||null,e),h.current=!0,b())},ref:k,role:x}))})})}));E.displayName="Nav",t.Z=Object.assign(E,{Item:d.Z})},699311:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavContext",t.Z=r},621528:function(e,t,n){n.d(t,{v:function(){return d}});var r=n(202784),a=n(427452),l=n(699311),i=n(465590),o=n(247830),u=n(303428),s=n(552322);const c=["as","active","eventKey"];function d({key:e,onClick:t,active:n,id:o,role:s,disabled:c}){const d=(0,r.useContext)(i.Z),m=(0,r.useContext)(l.Z);let f=n;const p={role:s};if(m){s||"tablist"!==m.role||(p.role="tab");const t=m.getControllerId(null!=e?e:null),r=m.getControlledId(null!=e?e:null);p[(0,u.PB)("event-key")]=e,p.id=t||o,p["aria-controls"]=r,f=null==n&&null!=e?m.activeKey===e:n}return"tab"===p.role&&(c&&(p.tabIndex=-1,p["aria-disabled"]=!0),f?p["aria-selected"]=f:p.tabIndex=-1),p.onClick=(0,a.Z)((n=>{c||(null==t||t(n),null!=e&&d&&!n.isPropagationStopped()&&d(e,n))})),[p,{isActive:f}]}const m=r.forwardRef(((e,t)=>{let{as:n=o.ZP,active:r,eventKey:a}=e,l=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,c);const[m,f]=d(Object.assign({key:(0,i.h)(a,l.href),active:r},l));return m[(0,u.PB)("active")]=f.isActive,(0,s.jsx)(n,Object.assign({},l,m,{ref:t}))}));m.displayName="NavItem",t.Z=m},474135:function(e,t,n){var r=n(202784);t.Z=function({children:e,in:t,mountOnEnter:n,unmountOnExit:a}){const l=(0,r.useRef)(t);return(0,r.useEffect)((()=>{t&&(l.current=!0)}),[t]),t?e:a||!l.current&&n?null:e}},465590:function(e,t,n){n.d(t,{h:function(){return a}});const r=n(202784).createContext(null),a=(e,t=null)=>null!=e?String(e):t||null;t.Z=r},590593:function(e,t,n){const r=n(202784).createContext(null);t.Z=r},521371:function(e,t,n){n.d(t,{W:function(){return m}});var r=n(202784),a=n(590593),l=n(465590),i=n(474135),o=n(552322);const u=["active","eventKey","mountOnEnter","transition","unmountOnExit","role"],s=["activeKey","getControlledId","getControllerId"],c=["as"];function d(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function m(e){let{active:t,eventKey:n,mountOnEnter:i,transition:o,unmountOnExit:c,role:m="tabpanel"}=e,f=d(e,u);const p=(0,r.useContext)(a.Z);if(!p)return[Object.assign({},f,{role:m}),{eventKey:n,isActive:t,mountOnEnter:i,transition:o,unmountOnExit:c}];const{activeKey:Z,getControlledId:E,getControllerId:x}=p,y=d(p,s),v=(0,l.h)(n);return[Object.assign({},f,{role:m,id:E(n),"aria-labelledby":x(n)}),{eventKey:n,isActive:null==t&&null!=v?(0,l.h)(Z)===v:t,transition:o||y.transition,mountOnEnter:null!=i?i:y.mountOnEnter,unmountOnExit:null!=c?c:y.unmountOnExit}]}const f=r.forwardRef(((e,t)=>{let{as:n="div"}=e,r=d(e,c);const[u,{isActive:s,onEnter:f,onEntering:p,onEntered:Z,onExit:E,onExiting:x,onExited:y,mountOnEnter:v,unmountOnExit:b,transition:h=i.Z}]=m(r);return(0,o.jsx)(a.Z.Provider,{value:null,children:(0,o.jsx)(l.Z.Provider,{value:null,children:(0,o.jsx)(h,{in:s,onEnter:f,onEntering:p,onEntered:Z,onExit:E,onExiting:x,onExited:y,mountOnEnter:v,unmountOnExit:b,children:(0,o.jsx)(n,Object.assign({},u,{ref:t,hidden:!s,"aria-hidden":!s}))})})})}));f.displayName="TabPanel",t.Z=f},48983:function(e,t,n){var r=n(202784),a=n(230069),l=n(314267),i=n(590593),o=n(465590),u=n(521371),s=n(552322);const c=e=>{const{id:t,generateChildId:n,onSelect:u,activeKey:c,defaultActiveKey:d,transition:m,mountOnEnter:f,unmountOnExit:p,children:Z}=e,[E,x]=(0,a.$c)(c,d,u),y=(0,l.gP)(t),v=(0,r.useMemo)((()=>n||((e,t)=>y?`${y}-${t}-${e}`:null)),[y,n]),b=(0,r.useMemo)((()=>({onSelect:x,activeKey:E,transition:m,mountOnEnter:f||!1,unmountOnExit:p||!1,getControlledId:e=>v(e,"tabpane"),getControllerId:e=>v(e,"tab")})),[x,E,m,f,p,v]);return(0,s.jsx)(i.Z.Provider,{value:b,children:(0,s.jsx)(o.Z.Provider,{value:x||null,children:Z})})};c.Panel=u.Z,t.Z=c},577371:function(e,t,n){var r=n(846933);e.exports=r},846933:function(e,t,n){var r=n(295943);e.exports=function(e){return r(e)===e&&e>=0}},134015:function(e,t,n){var r=n(422957),a=n(295943),l=n(733727),i=n(109918);e.exports=function(e,t){return r(e)||r(t)||t<0||t>1?NaN:e<0?0:e===i?1:(e=a(e),1-l(1-t,e+1))}},124184:function(e,t,n){var r=n(362739),a=n(422957),l=n(295943),i=n(733727),o=n(109918);e.exports=function(e){return a(e)||e<0||e>1?r(NaN):function(t){if(a(t))return NaN;if(t<0)return 0;if(t===o)return 1;return t=l(t),1-i(1-e,t+1)}}},40583:function(e,t,n){var r=n(501874),a=n(134015);r(a,"factory",n(124184)),e.exports=a},792267:function(e,t,n){var r=n(577371),a=n(362739),l=n(422957),i=n(733727);e.exports=function(e){return l(e)||e<0||e>1?a(NaN):function(t){if(l(t))return NaN;if(r(t))return e*i(1-e,t);return 0}}},310779:function(e,t,n){var r=n(501874),a=n(316251);r(a,"factory",n(792267)),e.exports=a},316251:function(e,t,n){var r=n(577371),a=n(422957),l=n(733727);e.exports=function(e,t){return a(e)||a(t)||t<0||t>1?NaN:r(e)?t*l(1-t,e):0}},832824:function(e,t,n){var r=n(362739),a=n(422957),l=n(745794),i=n(521536),o=n(557106),u=n(798030),s=n(109918);e.exports=function(e){return a(e)||e<0||e>1?r(NaN):function(t){if(a(t)||t<0||t>1)return NaN;if(1===t)return s;return o(0,i(u(1-t)/l(-e)-(1+1e-12)))}}},233268:function(e,t,n){var r=n(501874),a=n(208066);r(a,"factory",n(832824)),e.exports=a},208066:function(e,t,n){var r=n(422957),a=n(745794),l=n(521536),i=n(557106),o=n(798030),u=n(109918);e.exports=function(e,t){return r(t)||r(e)||t<0||t>1||e<0||e>1?NaN:1===e?u:i(0,l(o(1-e)/a(-t)-(1+1e-12)))}},658092:function(e,t,n){n.d(t,{Z:function(){return a}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},970688:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,l.default)(r)};var r,a=n(257965),l=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},257965:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,l,i){var o=a||"<<anonymous>>",u=i||r;if(null==n[r])return t?new Error("Required "+l+" `"+u+"` was not specified in `"+o+"`."):null;for(var s=arguments.length,c=Array(s>6?s-6:0),d=6;d<s;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,r,o,l,u].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},569862:function(e,t,n){var r=n(72779),a=n.n(r),l=(n(970688),n(202784)),i=n(230069),o=n(853154),u=n(429658),s=n(915462),c=n(527064),d=n(477029),m=n(206198),f=n(552322);const p=l.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:d,fill:m,justify:p,navbar:Z,navbarScroll:E,className:x,activeKey:y,...v}=(0,i.Ch)(e,{activeKey:"onSelect"}),b=(0,u.vE)(r,"nav");let h,g,C=!1;const O=(0,l.useContext)(s.Z),P=(0,l.useContext)(c.Z);return O?(h=O.bsPrefix,C=null==Z||Z):P&&({cardHeaderBsPrefix:g}=P),(0,f.jsx)(o.Z,{as:n,ref:t,activeKey:y,className:a()(x,{[b]:!C,[`${h}-nav`]:C,[`${h}-nav-scroll`]:C&&E,[`${g}-${d}`]:!!g,[`${b}-${d}`]:!!d,[`${b}-fill`]:m,[`${b}-justified`]:p}),...v})}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},t.Z=Object.assign(p,{Item:d.Z,Link:m.Z})},477029:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("nav-item")},206198:function(e,t,n){var r=n(72779),a=n.n(r),l=n(202784),i=n(341470),o=n(621528),u=n(465590),s=n(429658),c=n(552322);const d=l.forwardRef((({bsPrefix:e,className:t,as:n=i.Z,active:r,eventKey:l,...d},m)=>{e=(0,s.vE)(e,"nav-link");const[f,p]=(0,o.v)({key:(0,u.h)(l,d.href),active:r,...d});return(0,c.jsx)(n,{...d,...f,ref:m,className:a()(t,e,d.disabled&&"disabled",p.isActive&&"active")})}));d.displayName="NavLink",d.defaultProps={disabled:!1},t.Z=d},915462:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavbarContext",t.Z=r},594010:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(213980),a=n.n(r),l=(n(202784),n(48983)),i=n(456619),o=n(552322);const u=({transition:e,...t})=>(0,o.jsx)(l.Z,{...t,transition:(0,i.Z)(e)});u.displayName="TabContainer";var s=u,c=n(821729),d=n(557747);const m={eventKey:a().oneOfType([a().string,a().number]),title:a().node.isRequired,disabled:a().bool,tabClassName:a().string},f=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};f.propTypes=m;var p=Object.assign(f,{Container:s,Content:c.Z,Pane:d.Z})},821729:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("tab-content")},557747:function(e,t,n){var r=n(72779),a=n.n(r),l=n(202784),i=n(474135),o=n(465590),u=n(590593),s=n(521371),c=n(429658),d=n(456619),m=n(552322);const f=l.forwardRef((({bsPrefix:e,transition:t,...n},r)=>{const[{className:l,as:f="div",...p},{isActive:Z,onEnter:E,onEntering:x,onEntered:y,onExit:v,onExiting:b,onExited:h,mountOnEnter:g,unmountOnExit:C,transition:O=i.Z}]=(0,s.W)({...n,transition:(0,d.Z)(t)}),P=(0,c.vE)(e,"tab-pane");return(0,m.jsx)(u.Z.Provider,{value:null,children:(0,m.jsx)(o.Z.Provider,{value:null,children:(0,m.jsx)(O,{in:Z,onEnter:E,onEntering:x,onEntered:y,onExit:v,onExiting:b,onExited:h,mountOnEnter:g,unmountOnExit:C,children:(0,m.jsx)(f,{...p,ref:r,className:a()(l,P,Z&&"active")})})})})}));f.displayName="TabPane",t.Z=f},320123:function(e,t,n){n(202784);var r=n(230069),a=n(48983),l=n(569862),i=n(206198),o=n(477029),u=n(821729),s=n(557747),c=n(21027),d=n(456619),m=n(552322);function f(e){let t;return(0,c.Ed)(e,(e=>{null==t&&(t=e.props.eventKey)})),t}function p(e){const{title:t,eventKey:n,disabled:r,tabClassName:a,id:l}=e.props;return null==t?null:(0,m.jsx)(o.Z,{as:"li",role:"presentation",children:(0,m.jsx)(i.Z,{as:"button",type:"button",eventKey:n,disabled:r,id:l,className:a,children:t})})}const Z=e=>{const{id:t,onSelect:n,transition:i,mountOnEnter:o,unmountOnExit:Z,children:E,activeKey:x=f(E),...y}=(0,r.Ch)(e,{activeKey:"onSelect"});return(0,m.jsxs)(a.Z,{id:t,activeKey:x,onSelect:n,transition:(0,d.Z)(i),mountOnEnter:o,unmountOnExit:Z,children:[(0,m.jsx)(l.Z,{...y,role:"tablist",as:"ul",children:(0,c.UI)(E,p)}),(0,m.jsx)(u.Z,{children:(0,c.UI)(E,(e=>{const t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,(0,m.jsx)(s.Z,{...t})}))})]})};Z.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},Z.displayName="Tabs",t.Z=Z},456619:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(558370);function a(e){return"boolean"==typeof e?e?r.Z:void 0:e}}}]);