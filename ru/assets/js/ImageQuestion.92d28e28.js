"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22414],{667045:function(e,t,n){const a=(0,n(217431).Z)((()=>n.e(10112).then(n.bind(n,497925))));t.Z=a},956260:function(e,t,n){var a=n(202784),l=n(213980),i=n.n(l),r=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>{const t=e,{children:n}=t,l=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(t,["children"]);return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e})({},l),n)};d.defaultProps={className:"",style:{}},d.propTypes={className:i().string,style:i().object},t.Z=d},370420:function(e,t,n){const a=(0,n(217431).Z)((()=>n.e(96131).then(n.bind(n,66720))));t.Z=a},800712:function(e,t,n){const a=(0,n(217431).Z)((()=>Promise.all([n.e(40532),n.e(34507)]).then(n.bind(n,307125))));t.Z=a},162653:function(e,t,n){n.r(t);var a=n(202784),l=n(213980),i=n.n(l),r=n(690299),s=n.n(r),o=n(376699),c=n(457447),u=n(790817),d=n(770561),m=n(287013),p=n.n(m),f=n(417332),b=n(321182),h=n(810370),g=n(956260),y=n(380827),v=n(514921),E=n(667045),Z=n(370420),k=n(539478),w=n(172888),C=n(800712),N=n(123103),O=n(627939),S=n(477195),P=n(879052),q=n(691334),D=n(302108),j=n(741082),L=Object.defineProperty,F=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const A=(0,f.Z)("image-question"),B=s()("isle:image-question"),z=/src="([^"]*)"/,U=e=>{const t=(0,a.useRef)(e.id||A(e)),n=(0,a.useContext)(N.Z),{t:l}=(0,o.$)("questions/image"),i=(0,a.useRef)(null),[r,s]=(0,a.useState)(!1),m=n.currentUserActions,f=(0,P.Z)(m,t.current,q.Dmp),[j,L]=(0,a.useState)(f),[U,H]=(0,a.useState)(0===e.hints.length),[I,W]=(0,a.useState)(!1),[$,M]=(0,a.useState)(!1),G=(0,a.useCallback)((()=>{B(`Set submission to last action for question ${t.current} if available...`);const e=n.currentUserActions,a=(0,P.Z)(e,t.current,q.Dmp);a&&a!==j&&(L(a),s(!0))}),[n,j]);(0,a.useEffect)((()=>{const e=n.subscribe((e=>{e===D.u&&G()}));return()=>{e()}}),[n,G]);const _=(0,a.useCallback)((e=>{B("File read..."),M(!1),L(e.target.result)}),[]),J=(0,a.useCallback)((()=>{W(!I)}),[I]),{hints:K}=e,Q=K.length,V=a.createElement(y.Z,{disabled:!r||!U,onClick:J,hasHints:K.length>0}),X=(0,a.useCallback)((e=>{B("Logging hint..."),n.log({id:t.current,type:q.RGC,value:e})}),[n]),Y=(0,a.useCallback)((()=>{n.addNotification({title:l("submitted"),message:l("answer-submitted"),level:"info"})}),[n,l]),ee=(0,a.useCallback)((()=>{L(null)}),[]),te=(0,a.useCallback)((()=>{H(!0)}),[]),ne=()=>{const e=new FileReader,t=i.current.files[0];e.addEventListener("load",_,!1),e.readAsDataURL(t)},ae=()=>{if(e.disableSubmitNotification||Y(),e.onSubmit(),s(!0),j)n.log({id:t.current,type:q.Dmp,value:j});else{document.getElementById(t.current+"-canvas").toBlob((e=>{(0,O.Z)(e).then((e=>{n.log({id:t.current,type:q.Dmp,value:e}),L(e)}))}))}},le=e=>{e.stopPropagation(),e.preventDefault(),M(!0);const t=e.dataTransfer,n=new FileReader;let a=null;if(t.files&&t.files.length>0)B("File(s) dropped, processing the first one..."),a=t.files[0];else if(t.items&&t.items.length>0){B("Item(s) dropped, using  the first one...");const e=t.items[0];"file"===e.kind?a=e.getAsFile():"string"===e.kind&&e.getAsString((e=>{if(p()(e,"<img")){const t=e.match(z);t&&(L(t[1]),M(!1))}else if(p()(e,"<thead")){const t=document.createElement("table");t.innerHTML=e,document.body.appendChild(t),(0,c.hi)(t,{backgroundColor:"white",style:{fontSize:12},width:600}).then((e=>{L(e),M(!1),t.remove()}))}else{const t=document.createElement("pre");t.innerHTML=e,document.body.appendChild(t),(0,c.hi)(t,{backgroundColor:"white",style:{fontSize:14}}).then((e=>{L(e),M(!1),t.remove()}))}}))}a&&(n.addEventListener("load",_,!1),n.readAsDataURL(a))};let ie;return $||(ie=j?a.createElement("div",{className:"center",style:{maxWidth:600}},I?a.createElement(b.Z,{alt:l("model-solution"),src:e.solution,width:"50%",height:"auto",style:{border:"solid 1px gold"}}):a.createElement(b.Z,{alt:l("upload"),src:j,width:"50%",height:"auto"})):a.createElement(a.Fragment,null,a.createElement("div",{className:"image-question-dropzone",onDrop:le,onDragOver:S.Z,onDragEnd:S.Z},a.createElement("span",null,l("drop-image"))),a.createElement("p",{className:"center"},l("or")),a.createElement("input",{id:t.current+"-upload",className:"image-question-upload center",type:"file",accept:"image/*",onChange:ne,ref:i}),e.sketchpad?a.createElement(a.Fragment,null,a.createElement("p",{className:"center"},l("or")),a.createElement(k.Z,((e,t)=>{for(var n in t||(t={}))R.call(t,n)&&x(e,n,t[n]);if(F)for(var n of F(t))T.call(t,n)&&x(e,n,t[n]);return e})({id:t.current,hideNavigationButtons:!0,hideSaveButtons:!0,hideTransmitButtons:!0,canvasWidth:900,canvasHeight:600},e.sketchpad))):null)),a.createElement(u.Z,{id:t.current,className:`image-question ${e.className}`,style:e.style},a.createElement(u.Z.Body,{className:"d-grid gap-2",style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},a.createElement("label",null,e.question),a.createElement(h.Z,{running:$,width:256,height:128}),ie,e.feedback?a.createElement(w.Z,{vertical:!0,id:t.current+"_feedback",style:{position:"absolute",right:"4px",top:"4px"}}):null,a.createElement(g.Z,{buttonLabel:"Answers",id:t.current,info:q.Dmp,data:{question:e.question,type:"image"},points:e.points}),a.createElement("div",{className:"image-question-toolbar"},Q>0?a.createElement(E.Z,{onClick:X,hints:e.hints,placement:e.hintPlacement,onFinished:te}):null,j?a.createElement(d.Z,{size:"sm",variant:"warning",onClick:ee},l("reset")):null,e.until&&n.startTime>e.until?a.createElement("span",{className:"title",style:{marginLeft:4}},l("question-closed")):a.createElement(v.Z,{className:"submit-button",variant:"primary",size:"sm",onClick:ae,disabled:!j||$},l(r?"resubmit":"submit")),e.solution?V:null,e.chat?a.createElement(Z.Z,{for:t.current}):null),a.createElement(C.Z,{for:t.current,points:e.points})))};U.defaultProps={question:"",hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,disableSubmitNotification:!1,className:"",sketchpad:null,solution:null,until:null,points:10,style:{},onSubmit(){}},U.propTypes={question:i().oneOfType([i().string,i().node]),hintPlacement:i().string,hints:i().arrayOf(i().oneOfType([i().string,i().node])),feedback:i().bool,chat:i().bool,disableSubmitNotification:i().bool,className:i().string,sketchpad:i().object,solution:i().string,until:i().instanceOf(Date),points:i().number,style:i().object,onSubmit:i().func},t.default=(0,j.W)(U)},380827:function(e,t,n){const a=(0,n(217431).Z)((()=>n.e(78905).then(n.bind(n,960226))));t.Z=a},627939:function(e,t){t.Z=e=>{const{FileReader:t}=window,n=new t;return n.readAsDataURL(e),new Promise((e=>{n.onloadend=()=>{e(n.result)}}))}},879052:function(e,t,n){var a=n(588703),l=n.n(a),i=n(830324),r=n.n(i);t.Z=(e,t,n)=>{if(r()(e)){let a=e[t];if(l()(a)&&(a=a.filter((e=>e.type===n)),a.length>0))return a[0].value}return null}},477195:function(e,t){t.Z=function(e){e.stopPropagation(),e.preventDefault()}}}]);