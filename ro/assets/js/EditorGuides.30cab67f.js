"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29325],{600566:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var l=r(202784),n=r(213980),a=r.n(n),c=r(690299),o=r.n(c),s=r(770561),m=r(482228),u=r(10863),i=r(715318),E=r(23836),d=r(790817),p=r(312594),b=r(458264),g=r(471275),f=r(321880),v=JSON.parse('[{"target":".ProseMirror","placement":"right","placementBeacon":"right"},{"target":".prose-menu-bar","placement":"bottom","placementBeacon":"bottom"},{"target":".prose-statusbar"}]'),h=JSON.parse('[{"target":".prosemirror-icon.fa.fa-save","placement":"right"},{"target":".prosemirror-icon.fa.fa-save","placement":"right"},{"target":".prosemirror-icon.fas.fa-file-pdf","placement":"right"},{"target":".prosemirror-icon.fa.fa-folder-open","placement":"right"},{"target":".prosemirror-icon.fa.fa-share-square","placement":"right"}]'),Z=Object.defineProperty,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&N(e,r,t[r]);if(y)for(var r of y(t))k.call(t,r)&&N(e,r,t[r]);return e};const C=o()("isle:text-editor:guides"),$=({target:e,show:t,onHide:r,t:n})=>{C(`Rendering guides modal for "${e}" text editor`);const[a,c]=(0,l.useState)("overview"),[o,Z]=(0,l.useState)(!1),y=(0,l.useRef)(document.getElementById(e)),w=(0,l.useCallback)((()=>({saving:h.map(((t,r)=>{const l=P({},t);return l.content=n(`saving-${r}`),l.target=`#${e} `+l.target,l})),overview:v.map(((t,r)=>{const l=P({},t);return l.content=n(`overview-${r}`),l.target=`#${e} `+l.target,l}))})),[e,n]),[k,N]=(0,l.useState)(w());(0,l.useEffect)((()=>{y.current=document.getElementById(e),N(w())}),[w,e,n]);const $=(0,l.useCallback)((()=>{C((o?"Stopping":"Starting")+" the selected tour..."),r(),Z(!o)}),[r,o]),S=(0,l.useCallback)((e=>{c(e.target.value)}),[]),x=(0,l.useCallback)((()=>{let e;e=o?l.createElement(d.Z,{body:!0},l.createElement("span",{className:"title"},n("cancel-tour")),l.createElement("p",null,n("cancel-tour-msg")),l.createElement(m.Z,null,l.createElement(s.Z,{variant:"warning",onClick:$},n("cancel")))):l.createElement(d.Z,{body:!0},l.createElement("span",{className:"title"},n("select-tour")),l.createElement(E.Z,null,l.createElement(u.Z,null,l.createElement(E.Z.Check,{type:"radio",label:n("editor-overview"),name:"overview",value:"overview",onChange:S,checked:"overview"===a}),l.createElement(E.Z.Check,{type:"radio",label:n("saving-progress"),name:"saving",value:"saving",onChange:S,checked:"saving"===a}))),l.createElement(m.Z,null,l.createElement(s.Z,{variant:"success",onClick:$},n("start-tour"))));const c=l.createElement(p.Z,{sm:5},l.createElement("h5",null,n("headers")),l.createElement(d.Z,{body:!0,style:{marginBottom:10}},l.createElement("pre",null,"# ",n("large-header"),l.createElement("br",null),"## ",n("medium-header"),l.createElement("br",null),"### ",n("small-header"))),l.createElement("h5",null,n("emphasis")),l.createElement(d.Z,{body:!0,style:{marginBottom:10}},l.createElement("pre",null,l.createElement("i",null,"*",n("markup-italic"),"*"),l.createElement("br",null),l.createElement("b",null,"**",n("markup-bold"),"**"),l.createElement("br",null),l.createElement("i",null,"*We ",l.createElement("b",null,"**can**")," combine them*"),l.createElement("br",null),l.createElement("u",null,"++",n("markup-underlined"),"++"),l.createElement("br",null),l.createElement("s",null,"~~",n("markup-strikethrough"),"~~"),l.createElement("br",null))),l.createElement("h5",null,n("quotes")),l.createElement(d.Z,{body:!0},l.createElement("pre",null,n("george-box"),l.createElement("br",null),"> ",n("models-wrong"),l.createElement("br",null),"> ",n("models-useful")))),f=l.createElement(p.Z,{sm:7},l.createElement("h5",null,n("lists")),l.createElement("h6",null,n("unordered")),l.createElement(d.Z,{body:!0,style:{marginBottom:10}},l.createElement("pre",null,"* ",n("item")," 1",l.createElement("br",null),"* ",n("item")," 2",l.createElement("br",null),"\xa0 \xa0 * ",n("item")," 2a",l.createElement("br",null),"\xa0 \xa0 * ",n("item")," 2b")),l.createElement("h6",null,n("ordered")),l.createElement(d.Z,{body:!0},l.createElement("pre",null,"1. ",n("item")," 1",l.createElement("br",null),"2. ",n("item")," 2",l.createElement("br",null),"3. ",n("item")," 3",l.createElement("br",null),"\xa0 \xa03a. ",n("item")," 3a",l.createElement("br",null),"\xa0 \xa03b. ",n("item")," 3b")));return l.createElement(i.Z,{onHide:r,show:t,dialogClassName:"modal-90w"},l.createElement(i.Z.Header,{closeButton:!0},l.createElement(i.Z.Title,{as:"h4"},n("editor-guide"))),l.createElement(i.Z.Body,null,l.createElement(g.Z,null,l.createElement("span",{className:"title"},n("markdown-cheatsheet")),l.createElement(b.Z,null,l.createElement(p.Z,{sm:9},l.createElement(b.Z,null,c,f)),l.createElement(p.Z,{sm:3},e)))),l.createElement(i.Z.Footer,null,l.createElement(s.Z,{onClick:r},n("close"))))}),[S,r,o,a,$,t,n]);return C(`Selected tutorial ${a} is${o?" ":" not "}running`),l.createElement(l.Fragment,null,x(),"saving"===a?l.createElement(f.ZP,{steps:k.saving,showProgress:!0,disableScrolling:!0,run:o,parentNode:y.current,callback:e=>{e.type===f.FP.TOUR_END&&Z(!1)}}):null,"overview"===a?l.createElement(f.ZP,{steps:k.overview,showProgress:!0,disableScrolling:!0,continuous:!0,run:o,parentNode:y.current,callback:e=>{e.type===f.FP.TOUR_END&&Z(!1)}}):null)};$.propTypes={onHide:a().func,show:a().bool.isRequired},$.defaultProps={onHide(){}};var S=$},482228:function(e,t,r){var l=r(72779),n=r.n(l),a=r(202784),c=r(429658),o=r(552322);const s=a.forwardRef((({bsPrefix:e,className:t,...r},l)=>{const a=(0,c.vE)(e,"btn-toolbar");return(0,o.jsx)("div",{...r,ref:l,className:n()(t,a)})}));s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"},t.Z=s},471275:function(e,t,r){var l=r(72779),n=r.n(l),a=r(202784),c=r(429658),o=r(552322);const s=a.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:l,...a},s)=>{const m=(0,c.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(r,{ref:s,...a,className:n()(l,t?`${m}${u}`:m)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},458264:function(e,t,r){var l=r(72779),n=r.n(l),a=r(202784),c=r(429658),o=r(552322);const s=a.forwardRef((({bsPrefix:e,className:t,as:r="div",...l},a)=>{const s=(0,c.vE)(e,"row"),m=(0,c.pi)(),u=`${s}-cols`,i=[];return m.forEach((e=>{const t=l[e];let r;delete l[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const n="xs"!==e?`-${e}`:"";null!=r&&i.push(`${u}${n}-${r}`)})),(0,o.jsx)(r,{ref:a,...l,className:n()(t,s,...i)})}));s.displayName="Row",t.Z=s}}]);