"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2414],{134656:function(e,t,n){var i=(0,n(708717).Z)((function(){return n.e(112).then(n.bind(n,643549))}));t.Z=i},569904:function(e,t,n){var i=n(867855),a=n(202784),r=n(213980),l=n.n(r),o=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=function(e,t,n){return t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},f=function(e){var t=e,n=t.children,r=function(e,t){var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var r,l=(0,i.Z)(s(e));!(r=l()).done;)a=r.value,t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n}(t,["children"]);return a.createElement("div",function(e,t){for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(s)for(var a,r=(0,i.Z)(s(t));!(a=r()).done;)n=a.value,c.call(t,n)&&d(e,n,t[n]);return e}({},r),n)};f.defaultProps={className:"",style:{}},f.propTypes={className:l().string,style:l().object},t.Z=f},615697:function(e,t,n){var i=(0,n(708717).Z)((function(){return n.e(6131).then(n.bind(n,102149))}));t.Z=i},870717:function(e,t,n){var i=(0,n(708717).Z)((function(){return Promise.all([n.e(532),n.e(4507)]).then(n.bind(n,552767))}));t.Z=i},723495:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var i=n(867855),a=n(202784),r=n(213980),l=n.n(r),o=n(690299),s=n.n(o),u=n(376699),c=n(457447),d=n(790817),f=n(770561),m=n(287013),p=n.n(m),b=n(24551),h=n(103824),g=n(891027),v=n(569904),y=n(301158),E=n(864892),Z=n(134656),k=n(615697),w=n(261398),N=n(269891),C=n(870717),O=n(267682),S=n(264797);var P=function(e){e.stopPropagation(),e.preventDefault()},q=n(23228),D=n(382617),j=n(10206),L=n(615558),F=Object.defineProperty,R=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,A=function(e,t,n){return t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},B=(0,b.Z)("image-question"),z=s()("isle:image-question"),U=/src="([^"]*)"/,H=function(e){var t=(0,a.useRef)(e.id||B(e)),n=(0,a.useContext)(O.Z),r=(0,u.$)("questions/image").t,l=(0,a.useRef)(null),o=(0,a.useState)(!1),s=o[0],m=o[1],b=n.currentUserActions,L=(0,q.Z)(b,t.current,D.Dm),F=(0,a.useState)(L),H=F[0],I=F[1],W=(0,a.useState)(0===e.hints.length),M=W[0],G=W[1],$=(0,a.useState)(!1),_=$[0],J=$[1],K=(0,a.useState)(!1),Q=K[0],V=K[1],X=(0,a.useCallback)((function(){z("Set submission to last action for question "+t.current+" if available...");var e=n.currentUserActions,i=(0,q.Z)(e,t.current,D.Dm);i&&i!==H&&(I(i),m(!0))}),[n,H]);(0,a.useEffect)((function(){var e=n.subscribe((function(e){e===j.u&&X()}));return function(){e()}}),[n,X]);var Y,ee=(0,a.useCallback)((function(e){z("File read..."),V(!1),I(e.target.result)}),[]),te=(0,a.useCallback)((function(){J(!_)}),[_]),ne=e.hints,ie=ne.length,ae=a.createElement(y.Z,{disabled:!s||!M,onClick:te,hasHints:ne.length>0}),re=(0,a.useCallback)((function(e){z("Logging hint..."),n.log({id:t.current,type:D.RG,value:e})}),[n]),le=(0,a.useCallback)((function(){n.addNotification({title:r("submitted"),message:r("answer-submitted"),level:"info"})}),[n,r]),oe=(0,a.useCallback)((function(){I(null)}),[]),se=(0,a.useCallback)((function(){G(!0)}),[]),ue=function(){(e.disableSubmitNotification||le(),e.onSubmit(),m(!0),H)?n.log({id:t.current,type:D.Dm,value:H}):document.getElementById(t.current+"-canvas").toBlob((function(e){(0,S.Z)(e).then((function(e){n.log({id:t.current,type:D.Dm,value:e}),I(e)}))}))};return Q||(Y=H?a.createElement("div",{className:"center",style:{maxWidth:600}},_?a.createElement(h.Z,{alt:r("model-solution"),src:e.solution,width:"50%",height:"auto",style:{border:"solid 1px gold"}}):a.createElement(h.Z,{alt:r("upload"),src:H,width:"50%",height:"auto"})):a.createElement(a.Fragment,null,a.createElement("div",{className:"image-question-dropzone",onDrop:function(e){e.stopPropagation(),e.preventDefault(),V(!0);var t=e.dataTransfer,n=new FileReader,i=null;if(t.files&&t.files.length>0)z("File(s) dropped, processing the first one..."),i=t.files[0];else if(t.items&&t.items.length>0){z("Item(s) dropped, using  the first one...");var a=t.items[0];"file"===a.kind?i=a.getAsFile():"string"===a.kind&&a.getAsString((function(e){if(p()(e,"<img")){var t=e.match(U);t&&(I(t[1]),V(!1))}else if(p()(e,"<thead")){var n=document.createElement("table");n.innerHTML=e,document.body.appendChild(n),(0,c.hi)(n,{backgroundColor:"white",style:{fontSize:12},width:600}).then((function(e){I(e),V(!1),n.remove()}))}else{var i=document.createElement("pre");i.innerHTML=e,document.body.appendChild(i),(0,c.hi)(i,{backgroundColor:"white",style:{fontSize:14}}).then((function(e){I(e),V(!1),i.remove()}))}}))}i&&(n.addEventListener("load",ee,!1),n.readAsDataURL(i))},onDragOver:P,onDragEnd:P},a.createElement("span",null,r("drop-image"))),a.createElement("p",{className:"center"},r("or")),a.createElement("input",{id:t.current+"-upload",className:"image-question-upload center",type:"file",accept:"image/*",onChange:function(){var e=new FileReader,t=l.current.files[0];e.addEventListener("load",ee,!1),e.readAsDataURL(t)},ref:l}),e.sketchpad?a.createElement(a.Fragment,null,a.createElement("p",{className:"center"},r("or")),a.createElement(w.Z,function(e,t){for(var n in t||(t={}))T.call(t,n)&&A(e,n,t[n]);if(R)for(var a,r=(0,i.Z)(R(t));!(a=r()).done;)n=a.value,x.call(t,n)&&A(e,n,t[n]);return e}({id:t.current,hideNavigationButtons:!0,hideSaveButtons:!0,hideTransmitButtons:!0,canvasWidth:900,canvasHeight:600},e.sketchpad))):null)),a.createElement(d.Z,{id:t.current,className:"image-question "+e.className,style:e.style},a.createElement(d.Z.Body,{className:"d-grid gap-2",style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},a.createElement("label",null,e.question),a.createElement(g.Z,{running:Q,width:256,height:128}),Y,e.feedback?a.createElement(N.Z,{vertical:!0,id:t.current+"_feedback",style:{position:"absolute",right:"4px",top:"4px"}}):null,a.createElement(v.Z,{buttonLabel:"Answers",id:t.current,info:D.Dm,data:{question:e.question,type:"image"},points:e.points}),a.createElement("div",{className:"image-question-toolbar"},ie>0?a.createElement(Z.Z,{onClick:re,hints:e.hints,placement:e.hintPlacement,onFinished:se}):null,H?a.createElement(f.Z,{size:"sm",variant:"warning",onClick:oe},r("reset")):null,e.until&&n.startTime>e.until?a.createElement("span",{className:"title",style:{marginLeft:4}},r("question-closed")):a.createElement(E.Z,{className:"submit-button",variant:"primary",size:"sm",onClick:ue,disabled:!H||Q},r(s?"resubmit":"submit")),e.solution?ae:null,e.chat?a.createElement(k.Z,{for:t.current}):null),a.createElement(C.Z,{for:t.current,points:e.points})))};H.defaultProps={question:"",hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,disableSubmitNotification:!1,className:"",sketchpad:null,solution:null,until:null,points:10,style:{},onSubmit:function(){}},H.propTypes={question:l().oneOfType([l().string,l().node]),hintPlacement:l().string,hints:l().arrayOf(l().oneOfType([l().string,l().node])),feedback:l().bool,chat:l().bool,disableSubmitNotification:l().bool,className:l().string,sketchpad:l().object,solution:l().string,until:l().instanceOf(Date),points:l().number,style:l().object,onSubmit:l().func};var I=(0,L.W)(H)},301158:function(e,t,n){var i=(0,n(708717).Z)((function(){return n.e(8905).then(n.bind(n,804154))}));t.Z=i},264797:function(e,t){t.Z=function(e){var t=new(0,window.FileReader);return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))}},23228:function(e,t,n){var i=n(588703),a=n.n(i),r=n(830324),l=n.n(r);t.Z=function(e,t,n){if(l()(e)){var i=e[t];if(a()(i)&&(i=i.filter((function(e){return e.type===n}))).length>0)return i[0].value}return null}}}]);