(window.webpackJsonp=window.webpackJsonp||[]).push([[773],{3778:function(e,t,n){"use strict";n.r(t);var i=n(407),c=n.n(i),s=n(448),a=n.n(s),o=(n(428),n(0)),r=(n(404),n(450)),u=n.n(r),l=n(1971),d=n(464),b=n(543),f=n(1492),m=n(881),p=n(690),v=n(582),h=n(606),O=n(623),g=n(812),j=n(459),k=n(458),y=n(420),N=n(442);n(334);Object(y.a)("OrderQuestion");var S=Object(b.a)("order-question"),C=u()("isle:order-question"),q=function(e){var t=e.disableSubmitNotification,n=e.onChange,i=e.onSubmit,s=Object(o.useRef)(e.id||S(e)),r=Object(o.useContext)(j.a),u=Object(l.a)("OrderQuestion").t,b=Object(o.useState)(!1),y=a()(b,2),N=y[0],q=y[1],w=Object(o.useState)(e.options.map((function(e,t){return{id:t,text:e}}))),M=a()(w,2),x=M[0],P=M[1],E=Object(o.useState)({cards:null,correct:!1}),I=a()(E,2),F=I[0],J=I[1];Object(o.useEffect)((function(){P(e.options.map((function(e,t){return{id:t,text:e}})))}),[e.options]);var Q=Object(o.useCallback)((function(e){for(var t=!0,i=0;i<e.length;i++)if(e[i].id!==i){t=!1;break}n(e,t),J({cards:e,correct:t}),q(!1)}),[n]),R=Object(o.useCallback)((function(e){C("Logging hint..."),r.log({id:s.current,type:k.Jb,value:e})}),[r]),_=Object(o.useCallback)((function(){e.provideFeedback?F.correct?r.addNotification({title:u("correct"),message:e.successMsg||u("submission-correct"),level:"success"}):r.addNotification({title:u("incorrect"),message:e.failureMsg||u("submission-incorrect"),level:"error"}):r.addNotification({title:u("submitted"),message:u("submission-message"),level:"info"})}),[e.failureMsg,e.successMsg,F.correct,e.provideFeedback,r,u]),B=Object(o.useCallback)((function(){t||_(),i(F.cards,F.correct),q(!0),r.log({id:s.current,type:k.Kb,value:F.cards.map((function(e){return e.text})).join(" -> ")})}),[t,_,r,F,i]),L=e.hints.length;return c()(d.a,{id:s.current,className:"order-question",style:e.style},void 0,c()(d.a.Body,{style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,c()("label",{},void 0,e.question),c()(f.a,{shuffle:!0,data:x,onChange:Q,onInit:Q,disabled:N&&F.correct}),c()("div",{className:"order-question-toolbar"},void 0,L>0?c()(p.a,{onClick:R,hints:e.hints,placement:e.hintPlacement}):null,e.until&&r.startTime>e.until?c()("span",{className:"title",style:{marginLeft:4}},void 0,u("question-closed")):c()(m.a,{className:"submit-button",variant:"primary",size:"sm",onClick:B,disabled:N&&F.correct},void 0,u(N?"resubmit":"submit")),e.chat?c()(h.a,{for:s.current}):null),c()(v.a,{id:s.current,data:{type:"factor",question:e.question,solution:e.options},info:"ORDER_QUESTION_SUBMISSION",points:e.points}),e.feedback?c()(O.a,{id:s.current+"_feedback"}):null,c()(g.a,{for:s.current,points:e.points})))};q.defaultProps={question:"",provideFeedback:!0,hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,failureMsg:null,successMsg:null,disableSubmitNotification:!1,until:null,points:10,style:{},onChange:function(){},onSubmit:function(){}},t.default=Object(N.a)(q)},582:function(e,t,n){"use strict";var i=n(555),c=n.n(i),s=n(0),a=n.n(s),o=(n(404),function(e){var t=e.children,n=c()(e,["children"]);return a.a.createElement("div",n,t)});o.defaultProps={className:"",style:{}},t.a=o},606:function(e,t,n){"use strict";var i=n(405),c=Object(i.a)((function(){return n.e(205).then(n.bind(null,865))}));t.a=c},690:function(e,t,n){"use strict";var i=n(405),c=Object(i.a)((function(){return n.e(390).then(n.bind(null,1017))}));t.a=c},812:function(e,t,n){"use strict";var i=n(405),c=Object(i.a)((function(){return Promise.all([n.e(0),n.e(363)]).then(n.bind(null,1355))}));t.a=c}}]);