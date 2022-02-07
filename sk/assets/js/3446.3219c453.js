"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3446],{314267:function(e,t,n){n.d(t,{gP:function(){return a}});var o=n(202784);const r={prefix:String(Math.round(1e10*Math.random())),current:0},s=o.createContext(r);let l=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function a(e){let t=(0,o.useContext)(s);return t!==r||l||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,o.useMemo)((()=>e||"react-aria"+t.prefix+"-"+ ++t.current),[e])}},229979:function(e,t,n){const o=n(202784).createContext(null);t.Z=o},465246:function(e,t,n){n.d(t,{F:function(){return d}});var o=n(202784),r=n(427452),s=n(465590),l=n(699311),a=n(247830),i=n(303428),c=n(552322);const u=["eventKey","disabled","onClick","active","as"];function d({key:e,href:t,active:n,disabled:a,onClick:c}){const u=(0,o.useContext)(s.Z),d=(0,o.useContext)(l.Z),{activeKey:p}=d||{},f=(0,s.h)(e,t),g=null==n&&null!=e?(0,s.h)(p)===f:n;return[{onClick:(0,r.Z)((e=>{a||(null==c||c(e),u&&!e.isPropagationStopped()&&u(f,e))})),"aria-disabled":a||void 0,"aria-selected":g,[(0,i.PB)("dropdown-item")]:""},{isActive:g}]}const p=o.forwardRef(((e,t)=>{let{eventKey:n,disabled:o,onClick:r,active:s,as:l=a.ZP}=e,i=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,u);const[p]=d({key:n,href:i.href,disabled:o,onClick:r,active:s});return(0,c.jsx)(l,Object.assign({},i,{ref:t},p))}));p.displayName="DropdownItem",t.Z=p},772758:function(e,t,n){n.d(t,{d:function(){return p}});var o=n(202784),r=n(933335),s=n(229979),l=n(370056),a=n(363987),i=n(948273),c=n(552322);const u=["children"];const d=()=>{};function p(e={}){const t=(0,o.useContext)(s.Z),[n,c]=(0,r.Z)(),u=(0,o.useRef)(!1),{flip:p,offset:f,rootCloseEvent:g,fixed:m=!1,placement:w,popperConfig:v={},enableEventListeners:h=!0,usePopper:Z=!!t}=e,b=null==(null==t?void 0:t.show)?!!e.show:t.show;b&&!u.current&&(u.current=!0);const{placement:x,setMenu:y,menuElement:C,toggleElement:k}=t||{},P=(0,l.Z)(k,C,(0,i.ZP)({placement:w||x||"bottom-start",enabled:Z,enableEvents:null==h?b:h,offset:f,flip:p,fixed:m,arrowElement:n,popperConfig:v})),E=Object.assign({ref:y||d,"aria-labelledby":null==k?void 0:k.id},P.attributes.popper,{style:P.styles.popper}),j={show:b,placement:x,hasShown:u.current,toggle:null==t?void 0:t.toggle,popper:Z?P:null,arrowProps:Z?Object.assign({ref:c},P.attributes.arrow,{style:P.styles.arrow}):{}};return(0,a.Z)(C,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:g,disabled:!b}),[E,j]}function f(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,u);const[o,r]=p(n);return(0,c.jsx)(c.Fragment,{children:t(o,r)})}f.displayName="DropdownMenu",f.defaultProps={usePopper:!0},t.Z=f},397749:function(e,t,n){n.d(t,{bt:function(){return a},Jr:function(){return c}});var o=n(202784),r=n(314267),s=n(229979),l=n(552322);const a=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},i=()=>{};function c(){const e=(0,r.gP)(),{show:t=!1,toggle:n=i,setToggle:l,menuElement:c}=(0,o.useContext)(s.Z)||{},u=(0,o.useCallback)((e=>{n(!t,e)}),[t,n]),d={id:e,ref:l||i,onClick:u,"aria-expanded":!!t};return c&&a(c)&&(d["aria-haspopup"]=!0),[d,{show:t,toggle:n}]}function u({children:e}){const[t,n]=c();return(0,l.jsx)(l.Fragment,{children:e(t,n)})}u.displayName="DropdownToggle",t.ZP=u},153446:function(e,t,n){n.d(t,{Z:function(){return $}});var o=n(72779),r=n.n(o),s=n(202784),l=n(658092),a=n(533127),i=n(230069),c=n(783679),u=n(418919),d=n(771054),p=n(427452),f=n(229979),g=n(772758),m=n(397749),w=n(465246),v=n(465590),h=n(303428),Z=n(518204),b=n(552322);function x(){const e=(0,u.Z)(),t=(0,s.useRef)(null),n=(0,s.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function y({defaultShow:e,show:t,onSelect:n,onToggle:o,itemSelector:r=`* [${(0,h.PB)("dropdown-item")}]`,focusFirstItemOnShow:u,placement:g="bottom-start",children:w}){const y=(0,Z.Z)(),[C,k]=(0,i.$c)(t,e,o),[P,E]=x(),j=P.current,[T,D]=x(),N=T.current,S=(0,c.Z)(C),M=(0,s.useRef)(null),O=(0,s.useRef)(!1),R=(0,s.useContext)(v.Z),$=(0,s.useCallback)(((e,t,n=(null==t?void 0:t.type))=>{k(e,{originalEvent:t,source:n})}),[k]),I=(0,p.Z)(((e,t)=>{null==n||n(e,t),$(!1,t,"select"),t.isPropagationStopped()||null==R||R(e,t)})),F=(0,s.useMemo)((()=>({toggle:$,placement:g,show:C,menuElement:j,toggleElement:N,setMenu:E,setToggle:D})),[$,g,C,j,N,E,D]);j&&S&&!C&&(O.current=j.contains(j.ownerDocument.activeElement));const A=(0,p.Z)((()=>{N&&N.focus&&N.focus()})),B=(0,p.Z)((()=>{const e=M.current;let t=u;if(null==t&&(t=!(!P.current||!(0,m.bt)(P.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,l.Z)(P.current,r)[0];n&&n.focus&&n.focus()}));(0,s.useEffect)((()=>{C?B():O.current&&(O.current=!1,A())}),[C,O,A,B]),(0,s.useEffect)((()=>{M.current=null}));const J=(e,t)=>{if(!P.current)return null;const n=(0,l.Z)(P.current,r);let o=n.indexOf(e)+t;return o=Math.max(0,Math.min(o,n.length)),n[o]};return(0,d.Z)((0,s.useCallback)((()=>y.document),[y]),"keydown",(e=>{var t,n;const{key:o}=e,r=e.target,s=null==(t=P.current)?void 0:t.contains(r),l=null==(n=T.current)?void 0:n.contains(r);if(/input|textarea/i.test(r.tagName)&&(" "===o||"Escape"!==o&&s||"Escape"===o&&"search"===r.type))return;if(!s&&!l)return;if(!("Tab"!==o||P.current&&C))return;M.current=e.type;const i={originalEvent:e,source:e.type};switch(o){case"ArrowUp":{const t=J(r,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),C){const e=J(r,1);e&&e.focus&&e.focus()}else k(!0,i);return;case"Tab":(0,a.ZP)(r.ownerDocument,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=P.current)&&t.contains(e.target)||k(!1,i)}),{once:!0});break;case"Escape":"Escape"===o&&(e.preventDefault(),e.stopPropagation()),k(!1,i)}})),(0,b.jsx)(v.Z.Provider,{value:I,children:(0,b.jsx)(f.Z.Provider,{value:F,children:w})})}y.displayName="Dropdown",y.Menu=g.Z,y.Toggle=m.ZP,y.Item=w.Z;var C=y,k=n(377412),P=n(155061),E=n(836663),j=n(296781),T=n(532094),D=n(429658),N=n(911475);const S=(0,N.Z)("dropdown-header",{defaultProps:{role:"heading"}}),M=(0,N.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),O=(0,N.Z)("dropdown-item-text",{Component:"span"}),R=s.forwardRef(((e,t)=>{const{bsPrefix:n,drop:o,show:l,className:a,align:c,onSelect:u,onToggle:d,focusFirstItemOnShow:f,as:g="div",navbar:m,autoClose:w,...v}=(0,i.Ch)(e,{show:"onToggle"}),h=(0,s.useContext)(T.Z),Z=(0,D.vE)(n,"dropdown"),x=(0,D.SC)(),y=(0,p.Z)(((e,t)=>{var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===w?"click"===n:"inside"===w?"rootClose"!==n:"outside"!==w||"select"!==n)&&(null==d||d(e,t))})),P="end"===c,j=(0,E.J)(P,o,x),N=(0,s.useMemo)((()=>({align:c,drop:o,isRTL:x})),[c,o,x]);return(0,b.jsx)(k.Z.Provider,{value:N,children:(0,b.jsx)(C,{placement:j,show:l,onSelect:u,onToggle:y,focusFirstItemOnShow:f,itemSelector:`.${Z}-item:not(.disabled):not(:disabled)`,children:h?v.children:(0,b.jsx)(g,{...v,ref:t,className:r()(a,l&&"show",(!o||"down"===o)&&Z,"up"===o&&"dropup","end"===o&&"dropend","start"===o&&"dropstart")})})})}));R.displayName="Dropdown",R.defaultProps={navbar:!1,align:"start",autoClose:!0};var $=Object.assign(R,{Toggle:j.Z,Menu:E.Z,Item:P.Z,ItemText:O,Divider:M,Header:S})},377412:function(e,t,n){const o=n(202784).createContext({});o.displayName="DropdownContext",t.Z=o},155061:function(e,t,n){var o=n(72779),r=n.n(o),s=n(202784),l=n(465246),a=n(341470),i=n(429658),c=n(552322);const u=s.forwardRef((({bsPrefix:e,className:t,eventKey:n,disabled:o=!1,onClick:s,active:u,as:d=a.Z,...p},f)=>{const g=(0,i.vE)(e,"dropdown-item"),[m,w]=(0,l.F)({key:n,href:p.href,disabled:o,onClick:s,active:u});return(0,c.jsx)(d,{...p,...m,ref:f,className:r()(t,g,w.isActive&&"active",o&&"disabled")})}));u.displayName="DropdownItem",t.Z=u},836663:function(e,t,n){n.d(t,{J:function(){return m}});var o=n(72779),r=n.n(o),s=n(202784),l=n(772758),a=n(134868),i=n(225879),c=(n(645982),n(377412)),u=n(532094),d=n(915462),p=n(429658),f=n(945021),g=n(552322);function m(e,t,n){let o=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?o=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?o=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t&&(o=e?n?"right-end":"left-end":n?"right-start":"left-start"),o}const w=s.forwardRef((({bsPrefix:e,className:t,align:n,rootCloseEvent:o,flip:w,show:v,renderOnMount:h,as:Z="div",popperConfig:b,variant:x,...y},C)=>{let k=!1;const P=(0,s.useContext)(d.Z),E=(0,p.vE)(e,"dropdown-menu"),{align:j,drop:T,isRTL:D}=(0,s.useContext)(c.Z);n=n||j;const N=(0,s.useContext)(u.Z),S=[];if(n)if("object"==typeof n){const e=Object.keys(n);if(e.length){const t=e[0],o=n[t];k="start"===o,S.push(`${E}-${t}-${o}`)}}else"end"===n&&(k=!0);const M=m(k,T,D),[O,{hasShown:R,popper:$,show:I,toggle:F}]=(0,l.d)({flip:w,rootCloseEvent:o,show:v,usePopper:!P&&0===S.length,offset:[0,2],popperConfig:b,placement:M});if(O.ref=(0,i.Z)((0,f.Z)(C,"DropdownMenu"),O.ref),(0,a.Z)((()=>{I&&(null==$||$.update())}),[I]),!R&&!h&&!N)return null;"string"!=typeof Z&&(O.show=I,O.close=()=>null==F?void 0:F(!1),O.align=n);let A=y.style;return null!=$&&$.placement&&(A={...y.style,...O.style},y["x-placement"]=$.placement),(0,g.jsx)(Z,{...y,...O,style:A,...(S.length||P)&&{"data-bs-popper":"static"},className:r()(t,E,I&&"show",k&&`${E}-end`,x&&`${E}-${x}`,...S)})}));w.displayName="DropdownMenu",w.defaultProps={flip:!0},t.Z=w},296781:function(e,t,n){var o=n(72779),r=n.n(o),s=n(202784),l=n(397749),a=n(229979),i=n(225879),c=n(770561),u=n(532094),d=n(429658),p=n(945021),f=n(552322);const g=s.forwardRef((({bsPrefix:e,split:t,className:n,childBsPrefix:o,as:g=c.Z,...m},w)=>{const v=(0,d.vE)(e,"dropdown-toggle"),h=(0,s.useContext)(a.Z),Z=(0,s.useContext)(u.Z);void 0!==o&&(m.bsPrefix=o);const[b]=(0,l.Jr)();return b.ref=(0,i.Z)(b.ref,(0,p.Z)(w,"DropdownToggle")),(0,f.jsx)(g,{className:r()(n,v,t&&`${v}-split`,!!Z&&(null==h?void 0:h.show)&&"show"),...b,...m})}));g.displayName="DropdownToggle",t.Z=g},945021:function(e,t,n){n.d(t,{Z:function(){return o}});n(647677),n(202784),n(225879);function o(e,t){return e}}}]);