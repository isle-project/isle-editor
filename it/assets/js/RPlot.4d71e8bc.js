(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1447:function(e,t,n){"use strict";n(428);var a=n(447),o=n.n(a);t.a=function(e,t,n){var a=n.config.rshell;a&&a.libraries&&(e=e.concat(a.libraries));var i=function(e){return e.map((function(e){return"library("+e+");"})).join(" ")}(e);return a&&a.global&&(i+=a.global+"\n"),t=o()(t)?t.join("\n"):t,i+=t+="\n"}},3898:function(e,t,n){"use strict";n.r(t);var a,o=n(488),i=n.n(o),r=n(407),c=n.n(r),l=n(448),d=n.n(l),s=n(555),u=n.n(s),b=n(0),m=n.n(b),p=(n(404),n(1971)),g=n(3890),f=n(3891),v=n.n(f),y=n(554),h=n.n(y),w=n(1447),j=n(1055),O=n(972),C=n(459),R=n(996),N=n(420),k=n(442);n(347);function D(e){var t,n=e.id,a=e.meta,o=e.plot;return a?(a=v()(a,(function(e,t){return h()(t)})),a=g.a.dump(a),t='<img src="'.concat(o,'" style="display: block; margin: 0 auto;" data-plot-id="').concat(n,'" data-plot-meta="').concat(a,'"></img>')):t='<img src="'.concat(o,'" alt="R Plot" style="display: block; margin: 0 auto;" />'),t}Object(N.a)("R");var S=function(e){var t=e.code,n=e.className,o=e.draggable,r=e.id,l=e.libraries,s=e.prependCode,g=e.fileType,f=e.meta,v=e.onDone,y=u()(e,["code","className","draggable","id","libraries","prependCode","fileType","meta","onDone"]),h=Object(p.a)("R").t,N=Object(b.useState)(!1),k=d()(N,2),S=k[0],T=k[1],x=Object(b.useState)({img:null,body:null}),E=d()(x,2),P=E[0],H=E[1],J=Object(b.useContext)(C.a);Object(b.useEffect)((function(){T(!0);var e=Object(w.a)(l,s,J)+t;J.getRPlot(e,g,(function(e,t,n){e?v(e):(H({img:t,body:n}),T(!1),v(null,t,n))}))}),[t,g,l,s,J,v]);var A=null;return o&&(A=c()("button",{className:"rplot-draggable-bar",draggable:!0,onDragStart:function(e){var t=D({id:r,meta:f,plot:P.body});e.dataTransfer.setData("text/html",t)},onClick:function(){var e=D({id:r,meta:f,plot:P.body});Object(R.a)(e)}},void 0,h("drag-plot"))),c()("div",{className:"rplot ".concat(n),style:{minHeight:128,cursor:"pointer"}},void 0,c()(j.a,{running:S,width:256,height:128}),S?a||(a=c()("span",{})):c()(b.Fragment,{},void 0,A,m.a.createElement(O.a,i()({src:P.img,body:P.body,title:h("r-plot")},y))))};S.defaultProps={code:"",width:600,height:"auto",draggable:!1,fileType:"svg",libraries:[],prependCode:"",meta:null,className:"",onDone:function(){}},t.default=Object(k.a)(S)},996:function(e,t,n){"use strict";t.a=function(e){var t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.opacity=0,t.style.pointerEvents="none",document.body.appendChild(t),window.getSelection().removeAllRanges();var n=document.createRange();n.selectNode(t),window.getSelection().addRange(n),document.execCommand("copy"),document.body.removeChild(t)}}}]);