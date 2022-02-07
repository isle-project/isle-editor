"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9325],{545336:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var n=r(867855),l=r(202784),a=r(213980),c=r.n(a),o=r(690299),s=r.n(o),m=r(770561),u=r(482228),i=r(10863),E=r(431882),d=r(23836),p=r(790817),f=r(312594),b=r(458264),g=r(471275),v=r(189263),h=JSON.parse('[{"target":".ProseMirror","placement":"right","placementBeacon":"right"},{"target":".prose-menu-bar","placement":"bottom","placementBeacon":"bottom"},{"target":".prose-statusbar"}]'),Z=JSON.parse('[{"target":".prosemirror-icon.fa.fa-save","placement":"right"},{"target":".prosemirror-icon.fa.fa-save","placement":"right"},{"target":".prosemirror-icon.fas.fa-file-pdf","placement":"right"},{"target":".prosemirror-icon.fa.fa-folder-open","placement":"right"},{"target":".prosemirror-icon.fa.fa-share-square","placement":"right"}]'),y=Object.defineProperty,w=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,P=function(e,t,r){return t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},C=function(e,t){for(var r in t||(t={}))k.call(t,r)&&P(e,r,t[r]);if(w)for(var l,a=(0,n.Z)(w(t));!(l=a()).done;){r=l.value;N.call(t,r)&&P(e,r,t[r])}return e},x=s()("isle:text-editor:guides"),S=function(e){var t=e.target,r=e.show,n=e.onHide,a=e.t;x('Rendering guides modal for "'+t+'" text editor');var c=(0,l.useState)("overview"),o=c[0],s=c[1],y=(0,l.useState)(!1),w=y[0],k=y[1],N=(0,l.useRef)(document.getElementById(t)),P=(0,l.useCallback)((function(){return{saving:Z.map((function(e,r){var n=C({},e);return n.content=a("saving-"+r),n.target="#"+t+" "+n.target,n})),overview:h.map((function(e,r){var n=C({},e);return n.content=a("overview-"+r),n.target="#"+t+" "+n.target,n}))}}),[t,a]),S=(0,l.useState)(P()),B=S[0],O=S[1];(0,l.useEffect)((function(){N.current=document.getElementById(t),O(P())}),[P,t,a]);var R=(0,l.useCallback)((function(){x((w?"Stopping":"Starting")+" the selected tour..."),n(),k(!w)}),[n,w]),j=(0,l.useCallback)((function(e){s(e.target.value)}),[]),$=(0,l.useCallback)((function(){var e;e=w?l.createElement(p.Z,{body:!0},l.createElement("span",{className:"title"},a("cancel-tour")),l.createElement("p",null,a("cancel-tour-msg")),l.createElement(u.Z,null,l.createElement(m.Z,{variant:"warning",onClick:R},a("cancel")))):l.createElement(p.Z,{body:!0},l.createElement("span",{className:"title"},a("select-tour")),l.createElement(d.Z,null,l.createElement(i.Z,null,l.createElement(d.Z.Check,{type:"radio",label:a("editor-overview"),name:"overview",value:"overview",onChange:j,checked:"overview"===o}),l.createElement(d.Z.Check,{type:"radio",label:a("saving-progress"),name:"saving",value:"saving",onChange:j,checked:"saving"===o}))),l.createElement(u.Z,null,l.createElement(m.Z,{variant:"success",onClick:R},a("start-tour"))));var t=l.createElement(f.Z,{sm:5},l.createElement("h5",null,a("headers")),l.createElement(p.Z,{body:!0,style:{marginBottom:10}},l.createElement("pre",null,"# ",a("large-header"),l.createElement("br",null),"## ",a("medium-header"),l.createElement("br",null),"### ",a("small-header"))),l.createElement("h5",null,a("emphasis")),l.createElement(p.Z,{body:!0,style:{marginBottom:10}},l.createElement("pre",null,l.createElement("i",null,"*",a("markup-italic"),"*"),l.createElement("br",null),l.createElement("b",null,"**",a("markup-bold"),"**"),l.createElement("br",null),l.createElement("i",null,"*We ",l.createElement("b",null,"**can**")," combine them*"),l.createElement("br",null),l.createElement("u",null,"++",a("markup-underlined"),"++"),l.createElement("br",null),l.createElement("s",null,"~~",a("markup-strikethrough"),"~~"),l.createElement("br",null))),l.createElement("h5",null,a("quotes")),l.createElement(p.Z,{body:!0},l.createElement("pre",null,a("george-box"),l.createElement("br",null),"> ",a("models-wrong"),l.createElement("br",null),"> ",a("models-useful")))),c=l.createElement(f.Z,{sm:7},l.createElement("h5",null,a("lists")),l.createElement("h6",null,a("unordered")),l.createElement(p.Z,{body:!0,style:{marginBottom:10}},l.createElement("pre",null,"* ",a("item")," 1",l.createElement("br",null),"* ",a("item")," 2",l.createElement("br",null),"\xa0 \xa0 * ",a("item")," 2a",l.createElement("br",null),"\xa0 \xa0 * ",a("item")," 2b")),l.createElement("h6",null,a("ordered")),l.createElement(p.Z,{body:!0},l.createElement("pre",null,"1. ",a("item")," 1",l.createElement("br",null),"2. ",a("item")," 2",l.createElement("br",null),"3. ",a("item")," 3",l.createElement("br",null),"\xa0 \xa03a. ",a("item")," 3a",l.createElement("br",null),"\xa0 \xa03b. ",a("item")," 3b")));return l.createElement(E.Z,{onHide:n,show:r,dialogClassName:"modal-90w"},l.createElement(E.Z.Header,{closeButton:!0},l.createElement(E.Z.Title,{as:"h4"},a("editor-guide"))),l.createElement(E.Z.Body,null,l.createElement(g.Z,null,l.createElement("span",{className:"title"},a("markdown-cheatsheet")),l.createElement(b.Z,null,l.createElement(f.Z,{sm:9},l.createElement(b.Z,null,t,c)),l.createElement(f.Z,{sm:3},e)))),l.createElement(E.Z.Footer,null,l.createElement(m.Z,{onClick:n},a("close"))))}),[j,n,w,o,R,r,a]);return x("Selected tutorial "+o+" is"+(w?" ":" not ")+"running"),l.createElement(l.Fragment,null,$(),"saving"===o?l.createElement(v.ZP,{steps:B.saving,showProgress:!0,disableScrolling:!0,run:w,parentNode:N.current,callback:function(e){e.type===v.FP.TOUR_END&&k(!1)}}):null,"overview"===o?l.createElement(v.ZP,{steps:B.overview,showProgress:!0,disableScrolling:!0,continuous:!0,run:w,parentNode:N.current,callback:function(e){e.type===v.FP.TOUR_END&&k(!1)}}):null)};S.propTypes={onHide:c().func,show:c().bool.isRequired},S.defaultProps={onHide:function(){}};var B=S},482228:function(e,t,r){var n=r(72779),l=r.n(n),a=r(202784),c=r(429658),o=r(552322);const s=a.forwardRef((({bsPrefix:e,className:t,...r},n)=>{const a=(0,c.vE)(e,"btn-toolbar");return(0,o.jsx)("div",{...r,ref:n,className:l()(t,a)})}));s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"},t.Z=s},471275:function(e,t,r){var n=r(72779),l=r.n(n),a=r(202784),c=r(429658),o=r(552322);const s=a.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:n,...a},s)=>{const m=(0,c.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(r,{ref:s,...a,className:l()(n,t?`${m}${u}`:m)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},458264:function(e,t,r){var n=r(72779),l=r.n(n),a=r(202784),c=r(429658),o=r(552322);const s=["xxl","xl","lg","md","sm","xs"],m=a.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},a)=>{const m=(0,c.vE)(e,"row"),u=`${m}-cols`,i=[];return s.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const l="xs"!==e?`-${e}`:"";null!=r&&i.push(`${u}${l}-${r}`)})),(0,o.jsx)(r,{ref:a,...n,className:l()(t,m,...i)})}));m.displayName="Row",t.Z=m}}]);