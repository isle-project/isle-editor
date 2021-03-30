(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1422:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return n.e(1021).then(n.bind(null,2803))}));t.a=a},2631:function(e,t,n){"use strict";n(468),n(616);t.a=function(e){var t=new(0,window.FileReader);return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))}},582:function(e,t,n){"use strict";var i=n(555),a=n.n(i),o=n(0),s=n.n(o),l=(n(404),function(e){var t=e.children,n=a()(e,["children"]);return s.a.createElement("div",n,t)});l.defaultProps={className:"",style:{}},t.a=l},606:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return n.e(207).then(n.bind(null,865))}));t.a=a},6456:function(e,t,n){"use strict";n.r(t);var i=n(488),a=n.n(i),o=n(407),s=n.n(o),l=n(448),c=n.n(l),u=(n(655),n(0)),r=n.n(u),d=(n(404),n(450)),b=n.n(d),m=n(1971),f=n(4035),h=n(464),p=n(423),v=n(471),g=n.n(v),O=n(543),j=n(972),k=n(1055),w=n(582),y=n(1422),C=n(881),N=n(690),S=n(606),q=n(1391),L=n(623),E=n(812),D=n(459),P=n(2631);var R=function(e){e.stopPropagation(),e.preventDefault()},F=n(458),x=n(420),A=n(442);n(318);Object(x.a)("ImageQuestion");var B=Object(O.a)("image-question"),z=b()("isle:image-question"),T=/src="([^"]*)"/,H=function(e){var t,n=Object(u.useRef)(e.id||B(e)),i=Object(u.useContext)(D.a),o=Object(m.a)("ImageQuestion").t,l=Object(u.useRef)(null),d=Object(u.useState)(!1),b=c()(d,2),v=b[0],O=b[1],x=Object(u.useState)(null),A=c()(x,2),H=A[0],I=A[1],U=Object(u.useState)(0===e.hints.length),J=c()(U,2),M=J[0],Q=J[1],W=Object(u.useState)(!1),_=c()(W,2),G=_[0],K=_[1],V=Object(u.useState)(!1),X=c()(V,2),Y=X[0],Z=X[1],$=Object(u.useCallback)((function(e){I(e.target.result)}),[]),ee=Object(u.useCallback)((function(){K(!G)}),[G]),te=e.hints,ne=te.length,ie=s()(y.a,{disabled:!v||!M,onClick:ee,hasHints:te.length>0}),ae=Object(u.useCallback)((function(e){z("Logging hint..."),i.log({id:n.current,type:F.ob,value:e})}),[i]),oe=Object(u.useCallback)((function(){i.addNotification({title:o("submitted"),message:o("answer-submitted"),level:"info"})}),[i,o]),se=Object(u.useCallback)((function(){I(null)}),[]),le=Object(u.useCallback)((function(){Q(!0)}),[]),ce=function(){(e.disableSubmitNotification||oe(),e.onSubmit(),O(!0),H)?i.log({id:n.current,type:F.pb,value:H}):document.getElementById(n.current+"-canvas").toBlob((function(e){Object(P.a)(e).then((function(e){i.log({id:n.current,type:F.pb,value:e}),I(e)}))}))};return Y||(t=H?s()("div",{className:"center",style:{maxWidth:600}},void 0,s()(j.a,G?{alt:o("model-solution"),src:e.solution,width:"50%",height:"auto",style:{border:"solid 1px gold"}}:{alt:o("upload"),src:H,width:"50%",height:"auto"})):s()(u.Fragment,{},void 0,s()("div",{className:"image-question-dropzone",onDrop:function(e){e.stopPropagation(),e.preventDefault(),Z(!0);var t=e.dataTransfer,n=new FileReader,i=null;if(t.items&&t.items.length>0){var a=t.items[0];"file"===a.kind?i=a.getAsFile():"string"===a.kind&&a.getAsString((function(e){if(g()(e,"<img")){var t=e.match(T);t&&(I(t[1]),Z(!1))}else if(g()(e,"<thead")){var n=document.createElement("table");n.innerHTML=e,document.body.appendChild(n),Object(f.a)(n,{backgroundColor:"white",style:{fontSize:12},width:600}).then((function(e){I(e),Z(!1),n.remove()}))}else{var i=document.createElement("pre");i.innerHTML=e,document.body.appendChild(i),Object(f.a)(i,{backgroundColor:"white",style:{fontSize:14}}).then((function(e){I(e),Z(!1),i.remove()}))}}))}else t.files&&t.files.length>0&&(i=t.files[0]);i&&i&&(n.addEventListener("load",$,!1),n.readAsDataURL(i))},onDragOver:R,onDragEnd:R},void 0,s()("span",{},void 0,o("drop-image"))),s()("p",{className:"center"},void 0,o("or")),r.a.createElement("input",{id:n.current+"-upload",className:"image-question-upload center",type:"file",accept:"image/*",onChange:function(){var e=new FileReader,t=l.current.files[0];e.addEventListener("load",$,!1),e.readAsDataURL(t)},ref:l}),e.sketchpad?s()(u.Fragment,{},void 0,s()("p",{className:"center"},void 0,o("or")),r.a.createElement(q.a,a()({id:n.current,hideNavigationButtons:!0,hideSaveButtons:!0,hideTransmitButtons:!0,canvasWidth:900,canvasHeight:600},e.sketchpad))):null)),s()(h.a,{id:n.current,className:"image-question ".concat(e.className),style:e.style},void 0,s()(h.a.Body,{style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,s()("label",{},void 0,e.question),s()(k.a,{running:Y,width:256,height:128}),t,e.feedback?s()(L.a,{vertical:!0,id:n.current+"_feedback",style:{position:"absolute",right:"4px",top:"4px"}}):null,s()(w.a,{buttonLabel:"Answers",id:n.current,info:F.pb,data:{question:e.question,type:"image"},points:e.points}),s()("div",{className:"image-question-toolbar"},void 0,ne>0?s()(N.a,{onClick:ae,hints:e.hints,placement:e.hintPlacement,onFinished:le}):null,H?s()(p.a,{size:"sm",variant:"warning",onClick:se},void 0,o("reset")):null,e.until&&i.startTime>e.until?s()("span",{className:"title",style:{marginLeft:4}},void 0,o("question-closed")):s()(C.a,{className:"submit-button",variant:"primary",size:"sm",onClick:ce},void 0,o(v?"resubmit":"submit")),e.solution?ie:null,e.chat?s()(S.a,{for:n.current}):null),s()(E.a,{for:n.current,points:e.points})))};H.defaultProps={question:"",hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,disableSubmitNotification:!1,className:"",sketchpad:null,solution:null,until:null,points:10,style:{},onSubmit:function(){}};t.default=Object(A.a)(H)},690:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return n.e(392).then(n.bind(null,1017))}));t.a=a},812:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return Promise.all([n.e(0),n.e(365)]).then(n.bind(null,1355))}));t.a=a}}]);