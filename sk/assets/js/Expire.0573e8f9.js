"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49082],{469405:function(e,t,r){r.r(t);var u=r(202784),n=r(213980),c=r.n(n),l=r(575625);const a=e=>{const{active:t,children:r,delay:n}=e,[c,a]=(0,u.useState)(t),s=(0,l.Z)(e.children),f=(0,u.useRef)(null),o=(0,u.useCallback)((()=>{f.current&&clearTimeout(f.current),f.current=setTimeout((()=>{a(!1),f.current=null}),n)}),[n]);return(0,u.useEffect)((()=>(t&&o(),()=>{f.current&&clearTimeout(f.current)})),[t,o]),(0,u.useEffect)((()=>{r!==s&&(a(!0),t&&o())}),[t,o,r,s]),c?u.createElement(u.Fragment,null,r):u.createElement("span",null)};a.defaultProps={active:!1,delay:1e3},a.propTypes={active:c().bool,delay:c().number},t.default=a},575625:function(e,t,r){var u=r(202784);t.Z=function(e){const t=(0,u.useRef)();return(0,u.useEffect)((()=>{t.current=e}),[e]),t.current}}}]);