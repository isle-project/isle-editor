(self.webpackChunk=self.webpackChunk||[]).push([[2414],{956780:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return n.e(112).then(n.bind(n,198164))}));t.Z=i},812383:function(e,t,n){"use strict";var i=n(454530),a=n(202784),o=(n(213980),function(e){var t=e.children,n=(0,i.Z)(e,["children"]);return a.createElement("div",n,t)});o.defaultProps={className:"",style:{}},t.Z=o},912740:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return n.e(6131).then(n.bind(n,357459))}));t.Z=i},810035:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return Promise.all([n.e(532),n.e(4507)]).then(n.bind(n,149764))}));t.Z=i},55394:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var i=n(607560),a=n(858255),o=n(574315),s=(n(21466),n(202784)),l=(n(213980),n(911755)),u=n.n(l),r=n(376699),c=n(45562),d=n(260952),m=n(770561),f=n(636150),h=n.n(f),Z=n(42111),v=n(472132),p=n(71816),g=n(812383),b=n(744902),k=n(358988),y=n(956780),w=n(912740),C=n(489292),N=n(228856),S=n(810035),q=n(741319),D=n(819690);var L=function(e){e.stopPropagation(),e.preventDefault()},E=n(5140),R=n(432261),P=(0,Z.Z)("image-question"),F=u()("isle:image-question"),x=/src="([^"]*)"/,A=function(e){var t,n=(0,s.useRef)(e.id||P(e)),l=(0,s.useContext)(q.Z),u=(0,r.$)("questions/image").t,f=(0,s.useRef)(null),Z=(0,s.useState)(!1),R=(0,o.Z)(Z,2),A=R[0],B=R[1],z=(0,s.useState)(null),T=(0,o.Z)(z,2),H=T[0],U=T[1],W=(0,s.useState)(0===e.hints.length),M=(0,o.Z)(W,2),G=M[0],I=M[1],O=(0,s.useState)(!1),$=(0,o.Z)(O,2),_=$[0],j=$[1],J=(0,s.useState)(!1),K=(0,o.Z)(J,2),Q=K[0],V=K[1],X=(0,s.useCallback)((function(e){U(e.target.result)}),[]),Y=(0,s.useCallback)((function(){j(!_)}),[_]),ee=e.hints,te=ee.length,ne=(0,a.Z)(b.Z,{disabled:!A||!G,onClick:Y,hasHints:ee.length>0}),ie=(0,s.useCallback)((function(e){F("Logging hint..."),l.log({id:n.current,type:E.RG,value:e})}),[l]),ae=(0,s.useCallback)((function(){l.addNotification({title:u("submitted"),message:u("answer-submitted"),level:"info"})}),[l,u]),oe=(0,s.useCallback)((function(){U(null)}),[]),se=(0,s.useCallback)((function(){I(!0)}),[]),le=function(){(e.disableSubmitNotification||ae(),e.onSubmit(),B(!0),H)?l.log({id:n.current,type:E.Dm,value:H}):document.getElementById(n.current+"-canvas").toBlob((function(e){(0,D.Z)(e).then((function(e){l.log({id:n.current,type:E.Dm,value:e}),U(e)}))}))};return Q||(t=H?(0,a.Z)("div",{className:"center",style:{maxWidth:600}},void 0,_?(0,a.Z)(v.Z,{alt:u("model-solution"),src:e.solution,width:"50%",height:"auto",style:{border:"solid 1px gold"}}):(0,a.Z)(v.Z,{alt:u("upload"),src:H,width:"50%",height:"auto"})):(0,a.Z)(s.Fragment,{},void 0,(0,a.Z)("div",{className:"image-question-dropzone",onDrop:function(e){e.stopPropagation(),e.preventDefault(),V(!0);var t=e.dataTransfer,n=new FileReader,i=null;if(t.items&&t.items.length>0){var a=t.items[0];"file"===a.kind?i=a.getAsFile():"string"===a.kind&&a.getAsString((function(e){if(h()(e,"<img")){var t=e.match(x);t&&(U(t[1]),V(!1))}else if(h()(e,"<thead")){var n=document.createElement("table");n.innerHTML=e,document.body.appendChild(n),(0,c.hi)(n,{backgroundColor:"white",style:{fontSize:12},width:600}).then((function(e){U(e),V(!1),n.remove()}))}else{var i=document.createElement("pre");i.innerHTML=e,document.body.appendChild(i),(0,c.hi)(i,{backgroundColor:"white",style:{fontSize:14}}).then((function(e){U(e),V(!1),i.remove()}))}}))}else t.files&&t.files.length>0&&(i=t.files[0]);i&&i&&(n.addEventListener("load",X,!1),n.readAsDataURL(i))},onDragOver:L,onDragEnd:L},void 0,(0,a.Z)("span",{},void 0,u("drop-image"))),(0,a.Z)("p",{className:"center"},void 0,u("or")),s.createElement("input",{id:n.current+"-upload",className:"image-question-upload center",type:"file",accept:"image/*",onChange:function(){var e=new FileReader,t=f.current.files[0];e.addEventListener("load",X,!1),e.readAsDataURL(t)},ref:f}),e.sketchpad?(0,a.Z)(s.Fragment,{},void 0,(0,a.Z)("p",{className:"center"},void 0,u("or")),s.createElement(C.Z,(0,i.Z)({id:n.current,hideNavigationButtons:!0,hideSaveButtons:!0,hideTransmitButtons:!0,canvasWidth:900,canvasHeight:600},e.sketchpad))):null)),(0,a.Z)(d.Z,{id:n.current,className:"image-question ".concat(e.className),style:e.style},void 0,(0,a.Z)(d.Z.Body,{style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,(0,a.Z)("label",{},void 0,e.question),(0,a.Z)(p.Z,{running:Q,width:256,height:128}),t,e.feedback?(0,a.Z)(N.Z,{vertical:!0,id:n.current+"_feedback",style:{position:"absolute",right:"4px",top:"4px"}}):null,(0,a.Z)(g.Z,{buttonLabel:"Answers",id:n.current,info:E.Dm,data:{question:e.question,type:"image"},points:e.points}),(0,a.Z)("div",{className:"image-question-toolbar"},void 0,te>0?(0,a.Z)(y.Z,{onClick:ie,hints:e.hints,placement:e.hintPlacement,onFinished:se}):null,H?(0,a.Z)(m.Z,{size:"sm",variant:"warning",onClick:oe},void 0,u("reset")):null,e.until&&l.startTime>e.until?(0,a.Z)("span",{className:"title",style:{marginLeft:4}},void 0,u("question-closed")):(0,a.Z)(k.Z,{className:"submit-button",variant:"primary",size:"sm",onClick:le},void 0,u(A?"resubmit":"submit")),e.solution?ne:null,e.chat?(0,a.Z)(w.Z,{for:n.current}):null),(0,a.Z)(S.Z,{for:n.current,points:e.points})))};A.defaultProps={question:"",hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,disableSubmitNotification:!1,className:"",sketchpad:null,solution:null,until:null,points:10,style:{},onSubmit:function(){}};var B=(0,R.W)(A)},744902:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return n.e(8905).then(n.bind(n,912358))}));t.Z=i},819690:function(e,t,n){"use strict";n(296253),n(940851);t.Z=function(e){var t=new(0,window.FileReader);return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))}}}]);