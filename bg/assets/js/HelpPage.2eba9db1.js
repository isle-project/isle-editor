"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84637],{314267:function(e,t,n){n.d(t,{gP:function(){return u}});var r=n(202784);function a(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var l={};a(l,"SSRProvider",(()=>s)),a(l,"useSSRSafeId",(()=>u)),a(l,"useIsSSR",(()=>d));const o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o);function s(e){let t=(0,r.useContext)(i),n=(0,r.useMemo)((()=>({prefix:t===o?"":`${t.prefix}-${++t.current}`,current:0})),[t]);return r.createElement(i.Provider,{value:n},e.children)}let c=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function u(e){let t=(0,r.useContext)(i);return t!==o||c||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||`react-aria${t.prefix}-${++t.current}`),[e])}function d(){let e=(0,r.useContext)(i)!==o,[t,n]=(0,r.useState)(e);return"undefined"!=typeof window&&e&&(0,r.useLayoutEffect)((()=>{n(!1)}),[]),t}},418919:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},853154:function(e,t,n){var r=n(658092),a=n(202784),l=n(418919),o=n(225879),i=n(699311),s=n(465590),c=n(590593),u=n(303428),d=n(621528),f=n(552322);const m=["as","onSelect","activeKey","role","onKeyDown"];const v=()=>{},E=(0,u.PB)("event-key"),h=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:d,activeKey:h,role:p,onKeyDown:g}=e,x=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,m);const b=(0,l.Z)(),y=(0,a.useRef)(!1),Z=(0,a.useContext)(s.Z),w=(0,a.useContext)(c.Z);let C,O;w&&(p=p||"tablist",h=w.activeKey,C=w.getControlledId,O=w.getControllerId);const P=(0,a.useRef)(null),j=e=>{const t=P.current;if(!t)return null;const n=(0,r.Z)(t,`[${E}]:not([aria-disabled=true])`),a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const l=n.indexOf(a);if(-1===l)return null;let o=l+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},N=(e,t)=>{null!=e&&(null==d||d(e,t),null==Z||Z(e,t))};(0,a.useEffect)((()=>{if(P.current&&y.current){const e=P.current.querySelector(`[${E}][aria-selected=true]`);null==e||e.focus()}y.current=!1}));const K=(0,o.Z)(t,P);return(0,f.jsx)(s.Z.Provider,{value:N,children:(0,f.jsx)(i.Z.Provider,{value:{role:p,activeKey:(0,s.h)(h),getControlledId:C||v,getControllerId:O||v},children:(0,f.jsx)(n,Object.assign({},x,{onKeyDown:e=>{if(null==g||g(e),!w)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=j(-1);break;case"ArrowRight":case"ArrowDown":t=j(1);break;default:return}t&&(e.preventDefault(),N(t.dataset[(0,u.$F)("EventKey")]||null,e),y.current=!0,b())},ref:K,role:p}))})})}));h.displayName="Nav",t.Z=Object.assign(h,{Item:d.Z})},699311:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavContext",t.Z=r},621528:function(e,t,n){n.d(t,{v:function(){return f}});var r=n(202784),a=n(427452),l=n(699311),o=n(465590),i=n(247830),s=n(303428),c=n(590593),u=n(552322);const d=["as","active","eventKey"];function f({key:e,onClick:t,active:n,id:i,role:u,disabled:d}){const f=(0,r.useContext)(o.Z),m=(0,r.useContext)(l.Z),v=(0,r.useContext)(c.Z);let E=n;const h={role:u};if(m){u||"tablist"!==m.role||(h.role="tab");const t=m.getControllerId(null!=e?e:null),r=m.getControlledId(null!=e?e:null);h[(0,s.PB)("event-key")]=e,h.id=t||i,E=null==n&&null!=e?m.activeKey===e:n,!E&&(null!=v&&v.unmountOnExit||null!=v&&v.mountOnEnter)||(h["aria-controls"]=r)}return"tab"===h.role&&(h["aria-selected"]=E,E||(h.tabIndex=-1),d&&(h.tabIndex=-1,h["aria-disabled"]=!0)),h.onClick=(0,a.Z)((n=>{d||(null==t||t(n),null!=e&&f&&!n.isPropagationStopped()&&f(e,n))})),[h,{isActive:E}]}const m=r.forwardRef(((e,t)=>{let{as:n=i.ZP,active:r,eventKey:a}=e,l=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,d);const[c,m]=f(Object.assign({key:(0,o.h)(a,l.href),active:r},l));return c[(0,s.PB)("active")]=m.isActive,(0,u.jsx)(n,Object.assign({},l,c,{ref:t}))}));m.displayName="NavItem",t.Z=m},474135:function(e,t,n){var r=n(202784);t.Z=function({children:e,in:t,mountOnEnter:n,unmountOnExit:a}){const l=(0,r.useRef)(t);return(0,r.useEffect)((()=>{t&&(l.current=!0)}),[t]),t?e:a||!l.current&&n?null:e}},465590:function(e,t,n){n.d(t,{h:function(){return a}});const r=n(202784).createContext(null),a=(e,t=null)=>null!=e?String(e):t||null;t.Z=r},590593:function(e,t,n){const r=n(202784).createContext(null);t.Z=r},521371:function(e,t,n){n.d(t,{W:function(){return f}});var r=n(202784),a=n(590593),l=n(465590),o=n(474135),i=n(552322);const s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],u=["as"];function d(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function f(e){let{active:t,eventKey:n,mountOnEnter:o,transition:i,unmountOnExit:u,role:f="tabpanel",onEnter:m,onEntering:v,onEntered:E,onExit:h,onExiting:p,onExited:g}=e,x=d(e,s);const b=(0,r.useContext)(a.Z);if(!b)return[Object.assign({},x,{role:f}),{eventKey:n,isActive:t,mountOnEnter:o,transition:i,unmountOnExit:u,onEnter:m,onEntering:v,onEntered:E,onExit:h,onExiting:p,onExited:g}];const{activeKey:y,getControlledId:Z,getControllerId:w}=b,C=d(b,c),O=(0,l.h)(n);return[Object.assign({},x,{role:f,id:Z(n),"aria-labelledby":w(n)}),{eventKey:n,isActive:null==t&&null!=O?(0,l.h)(y)===O:t,transition:i||C.transition,mountOnEnter:null!=o?o:C.mountOnEnter,unmountOnExit:null!=u?u:C.unmountOnExit,onEnter:m,onEntering:v,onEntered:E,onExit:h,onExiting:p,onExited:g}]}const m=r.forwardRef(((e,t)=>{let{as:n="div"}=e,r=d(e,u);const[s,{isActive:c,onEnter:m,onEntering:v,onEntered:E,onExit:h,onExiting:p,onExited:g,mountOnEnter:x,unmountOnExit:b,transition:y=o.Z}]=f(r);return(0,i.jsx)(a.Z.Provider,{value:null,children:(0,i.jsx)(l.Z.Provider,{value:null,children:(0,i.jsx)(y,{in:c,onEnter:m,onEntering:v,onEntered:E,onExit:h,onExiting:p,onExited:g,mountOnEnter:x,unmountOnExit:b,children:(0,i.jsx)(n,Object.assign({},s,{ref:t,hidden:!c,"aria-hidden":!c}))})})})}));m.displayName="TabPanel",t.Z=m},48983:function(e,t,n){var r=n(202784),a=n(593759),l=n(314267),o=n(590593),i=n(465590),s=n(521371),c=n(552322);const u=e=>{const{id:t,generateChildId:n,onSelect:s,activeKey:u,defaultActiveKey:d,transition:f,mountOnEnter:m,unmountOnExit:v,children:E}=e,[h,p]=(0,a.$c)(u,d,s),g=(0,l.gP)(t),x=(0,r.useMemo)((()=>n||((e,t)=>g?`${g}-${t}-${e}`:null)),[g,n]),b=(0,r.useMemo)((()=>({onSelect:p,activeKey:h,transition:f,mountOnEnter:m||!1,unmountOnExit:v||!1,getControlledId:e=>x(e,"tabpane"),getControllerId:e=>x(e,"tab")})),[p,h,f,m,v,x]);return(0,c.jsx)(o.Z.Provider,{value:b,children:(0,c.jsx)(i.Z.Provider,{value:p||null,children:E})})};u.Panel=s.Z,t.Z=u},83428:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(202784),a=n(213980),l=n.n(a),o=n(690299),i=n.n(o),s=n(579553),c=n.n(s),u=n(198),d=n(912895),f=n.n(d),m=n(782963),v=n.n(m),E=n(594010),h=n(770561),p=n(569862),g=n(790817),x=n(321182);var b=({t:e})=>r.createElement("div",null,r.createElement("h2",{style:{textAlign:"center"}},e("data-explorer-title")),r.createElement("p",null,e("data-explorer-p1")),r.createElement("div",{className:"centered",style:{width:"fit-content"}},r.createElement(x.Z,{alt:"Explorer View",src:`${location.origin}/screenshots/data_explorer_view.jpg`,width:400,height:200})),r.createElement("p",null,e("data-explorer-p2")),r.createElement("div",{className:"centered",style:{width:"fit-content"}},r.createElement(x.Z,{className:"centered",alt:"Explorer Output",src:`${location.origin}/screenshots/data_explorer_outputs.jpg`,width:400,height:200})),r.createElement("p",null,e("data-explorer-p3")),r.createElement("p",null,e("data-explorer-p4")));var y=({t:e})=>r.createElement("div",null,r.createElement("h2",{style:{textAlign:"center"}},e("data-table-title")),r.createElement("p",null,e("data-table-p1")),r.createElement("div",{className:"centered",style:{width:"fit-content"}},r.createElement(x.Z,{alt:e("data-table-title"),src:`${location.origin}/screenshots/data_table_student.png`,width:600,height:300})),r.createElement("p",null,e("data-explorer-p2")));var Z=({t:e})=>r.createElement("div",{style:{textAlign:"center"}},r.createElement("h2",null,e("statusbar-title")),r.createElement("p",null,e("statusbar-p1")));var w=({t:e})=>r.createElement("div",null,r.createElement("h2",{style:{textAlign:"center"}},e("questions-title")),r.createElement("p",null,e("questions-p1")),r.createElement("div",{className:"centered",style:{width:"fit-content"}},r.createElement(x.Z,{alt:"Answering Questions",src:`${location.origin}/screenshots/answering_question.gif`,width:600,height:198})),r.createElement("h3",null,e("questions-p2")),r.createElement("p",null,e("questions-p3")),r.createElement("h3",null,e("questions-p4")),r.createElement("div",{className:"centered",style:{width:"fit-content"}},r.createElement(x.Z,{alt:e("questions-p4"),src:`${location.origin}/screenshots/feedback_buttons.png`,width:184,height:53})),r.createElement("p",null,e("questions-p5")),r.createElement("h3",null,e("questions-p6")),r.createElement("p",null,e("questions-p7")),r.createElement("div",{className:"centered",style:{width:"fit-content"}},r.createElement(x.Z,{alt:"Next Question Navigation",src:`${location.origin}/screenshots/question_nav_next.gif`,width:600,height:209})),r.createElement("div",{className:"centered",style:{width:"fit-content"}},r.createElement(x.Z,{alt:"Question Number Navigation",src:`${location.origin}/screenshots/question_nav_num.gif`,width:600,height:300}))),C=(n(697927),n(691334));var O=function(e){const t=document.createElement("canvas"),n=t.getContext("2d");return t.width=3*e.width,t.height=3*e.height,n.drawImage(e,0,0,3*e.width,3*e.height),t.toDataURL("image/jpeg")},P=Object.defineProperty,j=(e,t,n)=>(((e,t,n)=>{t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const N=i()("isle:toolbar:help"),K={clickOutsideDeactivates:!0};class k extends r.Component{constructor(e){super(e),j(this,"handlePDFDownload",(()=>{N("Preparing PDF for download...");const e=this.tabs.getElementsByTagName("img");for(let l=0;l<e.length;l++)e[l].src=O(e[l]);const{t:t}=this.props;let n=this.tabs.innerHTML;n=n.replace('<h4 style="text-align: center; margin-top: 50%;">'+t("click-instruction")+"</h4>","");const r={content:v()(n),pageMargins:[40,60,40,60]},a=this.props.session;f().createPdf(r).download(`ISLE_${a.lessonName}_Documentation.pdf`)})),j(this,"handleTabSelect",(e=>{const t=this.props.session,n={id:"documentation",type:C.BH4,value:e};t.log(n)})),this.hasQuestions=document.getElementsByClassName("submit-button").length>0,this.hasDataTable=document.getElementsByClassName("data-table-wrapper").length>0,this.hasDataExplorer=document.getElementsByClassName("data-explorer").length>0}render(){const e=this.props.session,t=!e.config.hideStatusBar&&!e.config.removeStatusBar,{t:n}=this.props;return r.createElement(c(),{focusTrapOptions:K},r.createElement(g.Z,{body:!0,style:{width:"40%",height:"100vh",position:"fixed",right:0,top:0,zIndex:1006}},r.createElement(E.Z.Container,{id:"left-tabs-example",defaultActiveKey:"zeroth",onSelect:this.handleTabSelect},r.createElement("h3",null,n("documentation")),r.createElement("div",{className:"help-buttons"},r.createElement(h.Z,{variant:"outline-secondary",size:"sm",onClick:this.handlePDFDownload},n("download-pdf")),r.createElement("button",{"aria-label":n("close-documentation"),className:"help-close-button fa fa-times",onClick:this.props.onClose})),r.createElement(p.Z,{variant:"pills",style:{background:"#f8f9fa",padding:6}},this.hasDataTable?r.createElement(p.Z.Item,null,r.createElement(p.Z.Link,{eventKey:"data-table"},n("data-table-title"))):null,this.hasDataExplorer?r.createElement(p.Z.Item,null,r.createElement(p.Z.Link,{eventKey:"data-explorer"},n("data-explorer-title"))):null,e.config.hideStatusBar||e.config.removeStatusBar?null:r.createElement(p.Z.Item,null,r.createElement(p.Z.Link,{eventKey:"statusbar"},n("statusbar-title"))),this.hasQuestions?r.createElement(p.Z.Item,null,r.createElement(p.Z.Link,{eventKey:"questions"},n("questions-title"))):null),r.createElement(E.Z.Content,{ref:e=>{this.tabs=e},style:{overflowY:"scroll",height:"80vh"}},r.createElement(E.Z.Pane,{eventKey:"zeroth"},r.createElement("h4",{style:{textAlign:"center",marginTop:"50%"}},n("click-instruction"))),this.hasDataTable?r.createElement(E.Z.Pane,{eventKey:"data-table"},r.createElement(y,{t:n})):null,this.hasDataExplorer?r.createElement(E.Z.Pane,{eventKey:"data-explorer"},r.createElement(b,{t:n})):null,t?r.createElement(E.Z.Pane,{eventKey:"statusbar"},r.createElement(Z,{t:n})):null,this.hasQuestions?r.createElement(E.Z.Pane,{eventKey:"questions"},r.createElement(w,{t:n})):null))))}}k.propTypes={session:l().object.isRequired,onClose:l().func.isRequired};var S=(0,u.Z)("internal/toolbar/help")(k)},970688:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,l.default)(r)};var r,a=n(257965),l=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},257965:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,l,o){var i=a||"<<anonymous>>",s=o||r;if(null==n[r])return t?new Error("Required "+l+" `"+s+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,i,l,s].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},569862:function(e,t,n){var r=n(72779),a=n.n(r),l=(n(970688),n(202784)),o=n(593759),i=n(853154),s=n(429658),c=n(915462),u=n(527064),d=n(477029),f=n(206198),m=n(552322);const v=l.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:d,fill:f,justify:v,navbar:E,navbarScroll:h,className:p,activeKey:g,...x}=(0,o.Ch)(e,{activeKey:"onSelect"}),b=(0,s.vE)(r,"nav");let y,Z,w=!1;const C=(0,l.useContext)(c.Z),O=(0,l.useContext)(u.Z);return C?(y=C.bsPrefix,w=null==E||E):O&&({cardHeaderBsPrefix:Z}=O),(0,m.jsx)(i.Z,{as:n,ref:t,activeKey:g,className:a()(p,{[b]:!w,[`${y}-nav`]:w,[`${y}-nav-scroll`]:w&&h,[`${Z}-${d}`]:!!Z,[`${b}-${d}`]:!!d,[`${b}-fill`]:f,[`${b}-justified`]:v}),...x})}));v.displayName="Nav",v.defaultProps={justify:!1,fill:!1},t.Z=Object.assign(v,{Item:d.Z,Link:f.Z})},477029:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("nav-item")},206198:function(e,t,n){var r=n(72779),a=n.n(r),l=n(202784),o=n(341470),i=n(621528),s=n(465590),c=n(429658),u=n(552322);const d=l.forwardRef((({bsPrefix:e,className:t,as:n=o.Z,active:r,eventKey:l,...d},f)=>{e=(0,c.vE)(e,"nav-link");const[m,v]=(0,i.v)({key:(0,s.h)(l,d.href),active:r,...d});return(0,u.jsx)(n,{...d,...m,ref:f,className:a()(t,e,d.disabled&&"disabled",v.isActive&&"active")})}));d.displayName="NavLink",d.defaultProps={disabled:!1},t.Z=d},915462:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavbarContext",t.Z=r},594010:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(213980),a=n.n(r),l=(n(202784),n(48983)),o=n(456619),i=n(552322);const s=({transition:e,...t})=>(0,i.jsx)(l.Z,{...t,transition:(0,o.Z)(e)});s.displayName="TabContainer";var c=s,u=n(821729),d=n(557747);const f={eventKey:a().oneOfType([a().string,a().number]),title:a().node.isRequired,disabled:a().bool,tabClassName:a().string,tabAttrs:a().object},m=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=f;var v=Object.assign(m,{Container:c,Content:u.Z,Pane:d.Z})},821729:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("tab-content")},557747:function(e,t,n){var r=n(72779),a=n.n(r),l=n(202784),o=n(465590),i=n(590593),s=n(521371),c=n(429658),u=n(558370),d=n(456619),f=n(552322);const m=l.forwardRef((({bsPrefix:e,transition:t,...n},r)=>{const[{className:l,as:m="div",...v},{isActive:E,onEnter:h,onEntering:p,onEntered:g,onExit:x,onExiting:b,onExited:y,mountOnEnter:Z,unmountOnExit:w,transition:C=u.Z}]=(0,s.W)({...n,transition:(0,d.Z)(t)}),O=(0,c.vE)(e,"tab-pane");return(0,f.jsx)(i.Z.Provider,{value:null,children:(0,f.jsx)(o.Z.Provider,{value:null,children:(0,f.jsx)(C,{in:E,onEnter:h,onEntering:p,onEntered:g,onExit:x,onExiting:b,onExited:y,mountOnEnter:Z,unmountOnExit:w,children:(0,f.jsx)(m,{...v,ref:r,className:a()(l,O,E&&"active")})})})})}));m.displayName="TabPane",t.Z=m},456619:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(474135),a=n(558370);function l(e){return"boolean"==typeof e?e?a.Z:r.Z:e}}}]);