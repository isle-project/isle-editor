"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1591],{239779:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(497326),a=n(894578),l=n(202784),i=n(213980),o=n.n(i),s=n(690299),c=n.n(s),u=n(579553),d=n.n(u),f=n(198),m=n(912895),v=n.n(m),h=n(782963),p=n.n(h),E=n(594010),g=n(770561),b=n(569862),x=n(790817),y=n(103824),Z=function(e){var t=e.t;return l.createElement("div",null,l.createElement("h2",{style:{textAlign:"center"}},t("data-explorer-title")),l.createElement("p",null,t("data-explorer-p1")),l.createElement("div",{className:"centered",style:{width:"fit-content"}},l.createElement(y.Z,{alt:"Explorer View",src:location.origin+"/screenshots/data_explorer_view.jpg",width:400,height:200})),l.createElement("p",null,t("data-explorer-p2")),l.createElement("div",{className:"centered",style:{width:"fit-content"}},l.createElement(y.Z,{className:"centered",alt:"Explorer Output",src:location.origin+"/screenshots/data_explorer_outputs.jpg",width:400,height:200})),l.createElement("p",null,t("data-explorer-p3")),l.createElement("p",null,t("data-explorer-p4")))},w=function(e){var t=e.t;return l.createElement("div",null,l.createElement("h2",{style:{textAlign:"center"}},t("data-table-title")),l.createElement("p",null,t("data-table-p1")),l.createElement("div",{className:"centered",style:{width:"fit-content"}},l.createElement(y.Z,{alt:t("data-table-title"),src:location.origin+"/screenshots/data_table_student.png",width:600,height:300})),l.createElement("p",null,t("data-explorer-p2")))},C=function(e){var t=e.t;return l.createElement("div",{style:{textAlign:"center"}},l.createElement("h2",null,t("statusbar-title")),l.createElement("p",null,t("statusbar-p1")))},O=function(e){var t=e.t;return l.createElement("div",null,l.createElement("h2",{style:{textAlign:"center"}},t("questions-title")),l.createElement("p",null,t("questions-p1")),l.createElement("div",{className:"centered",style:{width:"fit-content"}},l.createElement(y.Z,{alt:"Answering Questions",src:location.origin+"/screenshots/answering_question.gif",width:600,height:198})),l.createElement("h3",null,t("questions-p2")),l.createElement("p",null,t("questions-p3")),l.createElement("h3",null,t("questions-p4")),l.createElement("div",{className:"centered",style:{width:"fit-content"}},l.createElement(y.Z,{alt:t("questions-p4"),src:location.origin+"/screenshots/feedback_buttons.png",width:184,height:53})),l.createElement("p",null,t("questions-p5")),l.createElement("h3",null,t("questions-p6")),l.createElement("p",null,t("questions-p7")),l.createElement("div",{className:"centered",style:{width:"fit-content"}},l.createElement(y.Z,{alt:"Next Question Navigation",src:location.origin+"/screenshots/question_nav_next.gif",width:600,height:209})),l.createElement("div",{className:"centered",style:{width:"fit-content"}},l.createElement(y.Z,{alt:"Question Number Navigation",src:location.origin+"/screenshots/question_nav_num.gif",width:600,height:300})))},P=(n(697927),n(382617));var j=function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.width=3*e.width,t.height=3*e.height,n.drawImage(e,0,0,3*e.width,3*e.height),t.toDataURL("image/jpeg")},N=Object.defineProperty,K=function(e,t,n){return function(e,t,n){t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},k=c()("isle:toolbar:help"),S={clickOutsideDeactivates:!0},I=function(e){function t(t){var n;return n=e.call(this,t)||this,K((0,r.Z)(n),"handlePDFDownload",(function(){k("Preparing PDF for download...");for(var e=n.tabs.getElementsByTagName("img"),t=0;t<e.length;t++)e[t].src=j(e[t]);var r=n.props.t,a=n.tabs.innerHTML;a=a.replace('<h4 style="text-align: center; margin-top: 50%;">'+r("click-instruction")+"</h4>","");var l={content:p()(a),pageMargins:[40,60,40,60]},i=n.props.session;v().createPdf(l).download("ISLE_"+i.lessonName+"_Documentation.pdf")})),K((0,r.Z)(n),"handleTabSelect",(function(e){var t=n.props.session,r={id:"documentation",type:P.BH,value:e};t.log(r)})),n.hasQuestions=document.getElementsByClassName("submit-button").length>0,n.hasDataTable=document.getElementsByClassName("data-table-wrapper").length>0,n.hasDataExplorer=document.getElementsByClassName("data-explorer").length>0,n}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.session,n=!t.config.hideStatusBar&&!t.config.removeStatusBar,r=this.props.t;return l.createElement(d(),{focusTrapOptions:S},l.createElement(x.Z,{body:!0,style:{width:"40%",height:"100vh",position:"fixed",right:0,top:0,zIndex:1006}},l.createElement(E.Z.Container,{id:"left-tabs-example",defaultActiveKey:"zeroth",onSelect:this.handleTabSelect},l.createElement("h3",null,r("documentation")),l.createElement("div",{className:"help-buttons"},l.createElement(g.Z,{variant:"outline-secondary",size:"sm",onClick:this.handlePDFDownload},r("download-pdf")),l.createElement("button",{"aria-label":r("close-documentation"),className:"help-close-button fa fa-times",onClick:this.props.onClose})),l.createElement(b.Z,{variant:"pills",style:{background:"#f8f9fa",padding:6}},this.hasDataTable?l.createElement(b.Z.Item,null,l.createElement(b.Z.Link,{eventKey:"data-table"},r("data-table-title"))):null,this.hasDataExplorer?l.createElement(b.Z.Item,null,l.createElement(b.Z.Link,{eventKey:"data-explorer"},r("data-explorer-title"))):null,t.config.hideStatusBar||t.config.removeStatusBar?null:l.createElement(b.Z.Item,null,l.createElement(b.Z.Link,{eventKey:"statusbar"},r("statusbar-title"))),this.hasQuestions?l.createElement(b.Z.Item,null,l.createElement(b.Z.Link,{eventKey:"questions"},r("questions-title"))):null),l.createElement(E.Z.Content,{ref:function(t){e.tabs=t},style:{overflowY:"scroll",height:"80vh"}},l.createElement(E.Z.Pane,{eventKey:"zeroth"},l.createElement("h4",{style:{textAlign:"center",marginTop:"50%"}},r("click-instruction"))),this.hasDataTable?l.createElement(E.Z.Pane,{eventKey:"data-table"},l.createElement(w,{t:r})):null,this.hasDataExplorer?l.createElement(E.Z.Pane,{eventKey:"data-explorer"},l.createElement(Z,{t:r})):null,n?l.createElement(E.Z.Pane,{eventKey:"statusbar"},l.createElement(C,{t:r})):null,this.hasQuestions?l.createElement(E.Z.Pane,{eventKey:"questions"},l.createElement(O,{t:r})):null))))},t}(l.Component);I.propTypes={session:o().object.isRequired,onClose:o().func.isRequired};var A=(0,f.Z)("internal/toolbar/help")(I)},314267:function(e,t,n){n.d(t,{gP:function(){return u}});var r=n(202784);function a(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var l={};a(l,"SSRProvider",(()=>s)),a(l,"useSSRSafeId",(()=>u)),a(l,"useIsSSR",(()=>d));const i={prefix:String(Math.round(1e10*Math.random())),current:0},o=r.createContext(i);function s(e){let t=(0,r.useContext)(o),n=(0,r.useMemo)((()=>({prefix:t===i?"":`${t.prefix}-${++t.current}`,current:0})),[t]);return r.createElement(o.Provider,{value:n},e.children)}let c=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function u(e){let t=(0,r.useContext)(o);return t!==i||c||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||`react-aria${t.prefix}-${++t.current}`),[e])}function d(){let e=(0,r.useContext)(o)!==i,[t,n]=(0,r.useState)(e);return"undefined"!=typeof window&&e&&(0,r.useLayoutEffect)((()=>{n(!1)}),[]),t}},418919:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},853154:function(e,t,n){var r=n(658092),a=n(202784),l=n(418919),i=n(225879),o=n(699311),s=n(465590),c=n(590593),u=n(303428),d=n(621528),f=n(552322);const m=["as","onSelect","activeKey","role","onKeyDown"];const v=()=>{},h=(0,u.PB)("event-key"),p=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:d,activeKey:p,role:E,onKeyDown:g}=e,b=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,m);const x=(0,l.Z)(),y=(0,a.useRef)(!1),Z=(0,a.useContext)(s.Z),w=(0,a.useContext)(c.Z);let C,O;w&&(E=E||"tablist",p=w.activeKey,C=w.getControlledId,O=w.getControllerId);const P=(0,a.useRef)(null),j=e=>{const t=P.current;if(!t)return null;const n=(0,r.Z)(t,`[${h}]:not([aria-disabled=true])`),a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const l=n.indexOf(a);if(-1===l)return null;let i=l+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},N=(e,t)=>{null!=e&&(null==d||d(e,t),null==Z||Z(e,t))};(0,a.useEffect)((()=>{if(P.current&&y.current){const e=P.current.querySelector(`[${h}][aria-selected=true]`);null==e||e.focus()}y.current=!1}));const K=(0,i.Z)(t,P);return(0,f.jsx)(s.Z.Provider,{value:N,children:(0,f.jsx)(o.Z.Provider,{value:{role:E,activeKey:(0,s.h)(p),getControlledId:C||v,getControllerId:O||v},children:(0,f.jsx)(n,Object.assign({},b,{onKeyDown:e=>{if(null==g||g(e),!w)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=j(-1);break;case"ArrowRight":case"ArrowDown":t=j(1);break;default:return}t&&(e.preventDefault(),N(t.dataset[(0,u.$F)("EventKey")]||null,e),y.current=!0,x())},ref:K,role:E}))})})}));p.displayName="Nav",t.Z=Object.assign(p,{Item:d.Z})},699311:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavContext",t.Z=r},621528:function(e,t,n){n.d(t,{v:function(){return f}});var r=n(202784),a=n(427452),l=n(699311),i=n(465590),o=n(247830),s=n(303428),c=n(590593),u=n(552322);const d=["as","active","eventKey"];function f({key:e,onClick:t,active:n,id:o,role:u,disabled:d}){const f=(0,r.useContext)(i.Z),m=(0,r.useContext)(l.Z),v=(0,r.useContext)(c.Z);let h=n;const p={role:u};if(m){u||"tablist"!==m.role||(p.role="tab");const t=m.getControllerId(null!=e?e:null),r=m.getControlledId(null!=e?e:null);p[(0,s.PB)("event-key")]=e,p.id=t||o,h=null==n&&null!=e?m.activeKey===e:n,!h&&(null!=v&&v.unmountOnExit||null!=v&&v.mountOnEnter)||(p["aria-controls"]=r)}return"tab"===p.role&&(d&&(p.tabIndex=-1,p["aria-disabled"]=!0),h?p["aria-selected"]=h:p.tabIndex=-1),p.onClick=(0,a.Z)((n=>{d||(null==t||t(n),null!=e&&f&&!n.isPropagationStopped()&&f(e,n))})),[p,{isActive:h}]}const m=r.forwardRef(((e,t)=>{let{as:n=o.ZP,active:r,eventKey:a}=e,l=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,d);const[c,m]=f(Object.assign({key:(0,i.h)(a,l.href),active:r},l));return c[(0,s.PB)("active")]=m.isActive,(0,u.jsx)(n,Object.assign({},l,c,{ref:t}))}));m.displayName="NavItem",t.Z=m},465590:function(e,t,n){n.d(t,{h:function(){return a}});const r=n(202784).createContext(null),a=(e,t=null)=>null!=e?String(e):t||null;t.Z=r},590593:function(e,t,n){const r=n(202784).createContext(null);t.Z=r},297426:function(e,t,n){n.d(t,{Z:function(){return v},W:function(){return f}});var r=n(202784),a=n(590593),l=n(465590);var i=function({children:e,in:t,mountOnEnter:n,unmountOnExit:a}){const l=(0,r.useRef)(t);return(0,r.useEffect)((()=>{t&&(l.current=!0)}),[t]),t?e:a||!l.current&&n?null:e},o=n(552322);const s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role"],c=["activeKey","getControlledId","getControllerId"],u=["as"];function d(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function f(e){let{active:t,eventKey:n,mountOnEnter:i,transition:o,unmountOnExit:u,role:f="tabpanel"}=e,m=d(e,s);const v=(0,r.useContext)(a.Z);if(!v)return[Object.assign({},m,{role:f}),{eventKey:n,isActive:t,mountOnEnter:i,transition:o,unmountOnExit:u}];const{activeKey:h,getControlledId:p,getControllerId:E}=v,g=d(v,c),b=(0,l.h)(n);return[Object.assign({},m,{role:f,id:p(n),"aria-labelledby":E(n)}),{eventKey:n,isActive:null==t&&null!=b?(0,l.h)(h)===b:t,transition:o||g.transition,mountOnEnter:null!=i?i:g.mountOnEnter,unmountOnExit:null!=u?u:g.unmountOnExit}]}const m=r.forwardRef(((e,t)=>{let{as:n="div"}=e,r=d(e,u);const[s,{isActive:c,onEnter:m,onEntering:v,onEntered:h,onExit:p,onExiting:E,onExited:g,mountOnEnter:b,unmountOnExit:x,transition:y=i}]=f(r);return(0,o.jsx)(a.Z.Provider,{value:null,children:(0,o.jsx)(l.Z.Provider,{value:null,children:(0,o.jsx)(y,{in:c,onEnter:m,onEntering:v,onEntered:h,onExit:p,onExiting:E,onExited:g,mountOnEnter:b,unmountOnExit:x,children:(0,o.jsx)(n,Object.assign({},s,{ref:t,hidden:!c,"aria-hidden":!c}))})})})}));m.displayName="TabPanel";var v=m},48983:function(e,t,n){var r=n(202784),a=n(230069),l=n(314267),i=n(590593),o=n(465590),s=n(297426),c=n(552322);const u=e=>{const{id:t,generateChildId:n,onSelect:s,activeKey:u,defaultActiveKey:d,transition:f,mountOnEnter:m,unmountOnExit:v,children:h}=e,[p,E]=(0,a.$c)(u,d,s),g=(0,l.gP)(t),b=(0,r.useMemo)((()=>n||((e,t)=>g?`${g}-${t}-${e}`:null)),[g,n]),x=(0,r.useMemo)((()=>({onSelect:E,activeKey:p,transition:f,mountOnEnter:m||!1,unmountOnExit:v||!1,getControlledId:e=>b(e,"tabpane"),getControllerId:e=>b(e,"tab")})),[E,p,f,m,v,b]);return(0,c.jsx)(i.Z.Provider,{value:x,children:(0,c.jsx)(o.Z.Provider,{value:E||null,children:h})})};u.Panel=s.Z,t.Z=u},970688:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,l.default)(r)};var r,a=n(257965),l=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},257965:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,l,i){var o=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+l+" `"+s+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,o,l,s].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},569862:function(e,t,n){var r=n(72779),a=n.n(r),l=(n(970688),n(202784)),i=n(230069),o=n(853154),s=n(429658),c=n(915462),u=n(527064),d=n(477029),f=n(206198),m=n(552322);const v=l.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:d,fill:f,justify:v,navbar:h,navbarScroll:p,className:E,activeKey:g,...b}=(0,i.Ch)(e,{activeKey:"onSelect"}),x=(0,s.vE)(r,"nav");let y,Z,w=!1;const C=(0,l.useContext)(c.Z),O=(0,l.useContext)(u.Z);return C?(y=C.bsPrefix,w=null==h||h):O&&({cardHeaderBsPrefix:Z}=O),(0,m.jsx)(o.Z,{as:n,ref:t,activeKey:g,className:a()(E,{[x]:!w,[`${y}-nav`]:w,[`${y}-nav-scroll`]:w&&p,[`${Z}-${d}`]:!!Z,[`${x}-${d}`]:!!d,[`${x}-fill`]:f,[`${x}-justified`]:v}),...b})}));v.displayName="Nav",v.defaultProps={justify:!1,fill:!1},t.Z=Object.assign(v,{Item:d.Z,Link:f.Z})},477029:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("nav-item")},206198:function(e,t,n){var r=n(72779),a=n.n(r),l=n(202784),i=n(341470),o=n(621528),s=n(465590),c=n(429658),u=n(552322);const d=l.forwardRef((({bsPrefix:e,className:t,as:n=i.Z,active:r,eventKey:l,...d},f)=>{e=(0,c.vE)(e,"nav-link");const[m,v]=(0,o.v)({key:(0,s.h)(l,d.href),active:r,...d});return(0,u.jsx)(n,{...d,...m,ref:f,className:a()(t,e,d.disabled&&"disabled",v.isActive&&"active")})}));d.displayName="NavLink",d.defaultProps={disabled:!1},t.Z=d},915462:function(e,t,n){const r=n(202784).createContext(null);r.displayName="NavbarContext",t.Z=r},594010:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(213980),a=n.n(r),l=(n(202784),n(48983)),i=n(456619),o=n(552322);const s=({transition:e,...t})=>(0,o.jsx)(l.Z,{...t,transition:(0,i.Z)(e)});s.displayName="TabContainer";var c=s,u=n(821729),d=n(557747);const f={eventKey:a().oneOfType([a().string,a().number]),title:a().node.isRequired,disabled:a().bool,tabClassName:a().string,tabAttrs:a().object},m=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=f;var v=Object.assign(m,{Container:c,Content:u.Z,Pane:d.Z})},821729:function(e,t,n){var r=n(911475);t.Z=(0,r.Z)("tab-content")},557747:function(e,t,n){var r=n(72779),a=n.n(r),l=n(202784),i=n(465590),o=n(590593),s=n(297426),c=n(429658),u=n(558370),d=n(456619),f=n(552322);const m=l.forwardRef((({bsPrefix:e,transition:t,...n},r)=>{const[{className:l,as:m="div",...v},{isActive:h,onEnter:p,onEntering:E,onEntered:g,onExit:b,onExiting:x,onExited:y,mountOnEnter:Z,unmountOnExit:w,transition:C=u.Z}]=(0,s.W)({...n,transition:(0,d.Z)(t)}),O=(0,c.vE)(e,"tab-pane");return(0,f.jsx)(o.Z.Provider,{value:null,children:(0,f.jsx)(i.Z.Provider,{value:null,children:(0,f.jsx)(C,{in:h,onEnter:p,onEntering:E,onEntered:g,onExit:b,onExiting:x,onExited:y,mountOnEnter:Z,unmountOnExit:w,children:(0,f.jsx)(m,{...v,ref:r,className:a()(l,O,h&&"active")})})})})}));m.displayName="TabPane",t.Z=m},456619:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(558370);function a(e){return"boolean"==typeof e?e?r.Z:void 0:e}}}]);