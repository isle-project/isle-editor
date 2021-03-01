(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{3812:function(e,t,n){"use strict";n.r(t);var i=n(406),s=n.n(i),c=n(462),o=n.n(c),a=(n(502),n(0)),r=(n(404),n(453)),u=n.n(r),l=n(2030),d=n(475),b=n(609),f=n(1677),m=n(1080),p=n(826),v=n(821),O=n(689),g=n(688),h=n(966),j=n(467),k=n(473),y=n(425),N=n(448);n(339);Object(y.a)("OrderQuestion");var S=Object(b.a)("order-question"),C=u()("isle:order-question"),q=function(e){var t=e.disableSubmitNotification,n=e.onChange,i=e.onSubmit,c=Object(a.useRef)(e.id||S(e)),r=Object(a.useContext)(j.a),u=Object(l.a)("OrderQuestion").t,b=Object(a.useState)(!1),y=o()(b,2),N=y[0],q=y[1],w=Object(a.useState)(e.options.map((function(e,t){return{id:t,text:e}}))),M=o()(w,2),x=M[0],I=M[1],P=Object(a.useState)({cards:null,correct:!1}),E=o()(P,2),F=E[0],Q=E[1];Object(a.useEffect)((function(){I(e.options.map((function(e,t){return{id:t,text:e}})))}),[e.options]);var R=Object(a.useCallback)((function(e){for(var t=!0,i=0;i<e.length;i++)if(e[i].id!==i){t=!1;break}n(e,t),Q({cards:e,correct:t}),q(!1)}),[n]),_=Object(a.useCallback)((function(e){C("Logging hint..."),r.log({id:c.current,type:k.Hb,value:e})}),[r]),B=Object(a.useCallback)((function(){e.provideFeedback?F.correct?r.addNotification({title:u("correct"),message:e.successMsg||u("submission-correct"),level:"success"}):r.addNotification({title:u("incorrect"),message:e.failureMsg||u("submission-incorrect"),level:"error"}):r.addNotification({title:u("submitted"),message:u("submission-message"),level:"info"})}),[e.failureMsg,e.successMsg,F.correct,e.provideFeedback,r,u]),J=Object(a.useCallback)((function(){t||B(),i(F.cards,F.correct),q(!0),r.log({id:c.current,type:k.Ib,value:F.cards.map((function(e){return e.text})).join(" -> ")})}),[t,B,r,F,i]),L=e.hints.length;return s()(d.a,{id:c.current,className:"order-question",style:e.style},void 0,s()(d.a.Body,{style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,s()("label",{},void 0,e.question),s()(f.a,{shuffle:!0,data:x,onChange:R,onInit:R,disabled:N&&F.correct}),s()("div",{className:"order-question-toolbar"},void 0,L>0?s()(p.a,{onClick:_,hints:e.hints,placement:e.hintPlacement}):null,e.until&&r.startTime>e.until?s()("span",{className:"title",style:{marginLeft:4}},void 0,u("question-closed")):s()(m.a,{className:"submit-button",variant:"primary",size:"sm",onClick:J,disabled:N&&F.correct},void 0,u(N?"resubmit":"submit")),e.chat?s()(O.a,{for:c.current}):null),s()(v.a,{id:c.current,data:{type:"factor",question:e.question,solution:e.options},info:"ORDER_QUESTION_SUBMISSION",points:e.points}),e.feedback?s()(g.a,{id:c.current+"_feedback"}):null,s()(h.a,{for:c.current,points:e.points})))};q.defaultProps={question:"",provideFeedback:!0,hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,failureMsg:null,successMsg:null,disableSubmitNotification:!1,until:null,points:10,style:{},onChange:function(){},onSubmit:function(){}},t.default=Object(N.a)(q)},689:function(e,t,n){"use strict";var i=n(408),s=Object(i.a)((function(){return n.e(172).then(n.bind(null,1029))}));t.a=s},826:function(e,t,n){"use strict";var i=n(408),s=Object(i.a)((function(){return n.e(200).then(n.bind(null,1173))}));t.a=s},966:function(e,t,n){"use strict";var i=n(408),s=Object(i.a)((function(){return Promise.all([n.e(0),n.e(197)]).then(n.bind(null,1516))}));t.a=s}}]);