/*! For license information please see dll.RangeQuestion.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[119],{1036:function(e,t,n){"use strict";var s=n(1080);e.exports=s},1043:function(e,t,n){"use strict";var s=n(1036),a=n(55),i=n(40),r=n(27);e.exports=function(e,t){var n,o,u,l;if(2===(n=arguments.length))return a(e)||a(t)?NaN:e===i||t===i?i:e===t&&0===e?s(e)?e:t:e<t?e:t;for(o=r,l=0;l<n;l++){if(a(u=arguments[l])||u===i)return u;(u<o||u===o&&0===u&&s(u))&&(o=u)}return o}},1048:function(e,t,n){"use strict";var s=n(1168);e.exports=s},1070:function(e,t,n){"use strict";n.r(t);var s=n(5),a=n(11),i=n(12),r=n.n(i),o=n(0),u=n.n(o),l=n(17),c=u.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=Object(a.default)(e,["bsPrefix","className"]),c=Object(l.useBootstrapPrefix)(n,"btn-toolbar");return u.a.createElement("div",Object(s.default)({},o,{ref:t,className:r()(i,c)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},t.default=c},1080:function(e,t,n){"use strict";var s=n(40);e.exports=function(e){return 0===e&&1/e===s}},1113:function(e,t,n){"use strict";n.r(t);var s=n(2),a=Object(s.default)((function(){return Promise.all([n.e(4),n.e(159),n.e(51)]).then(n.bind(null,1321))}));t.default=a},1168:function(e,t,n){"use strict";e.exports=function(e){return null==e}},3001:function(e,t,n){"use strict";n.r(t);var s=n(958),a=n(3002);s.default.addResources("de","range-question",a.DE),s.default.addResources("en","range-question",a.EN),s.default.addResources("es","range-question",a.ES)},3002:function(e){e.exports=JSON.parse('{"DE":{"answers":"Antworten","answer-resubmitted":"Antwort erneut eingereicht","answer-submitted":"Antwort eingereicht.","lower":"Untere","question-closed":"Frage ist nun geschlossen.","resubmit":"Erneut einreichen","solution":"Lösung","submission-correct":"Herzlichen Glückwunsch, das ist korrekt!","submission-incorrect":"Nicht ganz. Vergleiche Deine Antwort mit der Lösung","submission-message":"Deine Antwort wurde aufgezeichnet","submit":"Abschicken","upper":"Obere"},"EN":{"answers":"Answers","answer-resubmitted":"Answer re-submitted.","answer-submitted":"Answer submitted.","lower":"Lower","question-closed":"Question is now closed.","resubmit":"Resubmit","resubmission-message":"You have successfully re-submitted your answer.","solution":"Solution","submission-correct":"Congratulations, that is correct!","submission-incorrect":"Not quite. Compare your answer with the solution.","submission-message":"Your answer has been submitted.","submit":"Submit","upper":"Upper"},"ES":{"answers":"Respuestas","answer-resubmitted":"Respuesta presentada de nuevo.","answer-submitted":"Respuesta presentada.","lower":"Inferior","question-closed":"La pregunta está ahora cerrada.","resubmit":"Volver a presentar","resubmission-message":"Ha vuelto a presentar su respuesta con éxito.","solution":"Solución","submission-correct":"¡Felicidades, eso es correcto!","submission-incorrect":"No del todo. Compare su respuesta con la solución.","submission-message":"Su respuesta ha sido presentada.","submit":"Presentar","upper":"Superior"}}')},3003:function(e,t,n){"use strict";n.r(t);var s=n(22),a=n.n(s),i=n(3004),r={insert:"head",singleton:!1};a()(i.default,r);t.default=i.default.locals||{}},3004:function(e,t,n){"use strict";n.r(t);var s=n(23),a=n.n(s)()(!1);a.push([e.i,".range-question {\n\tborder: 1px solid rgba(92, 92, 92, 0.6);\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 8px rgba(92, 92, 92, 0.5);\n\tmargin: 0 auto 10px;\n\tmax-width: 900px;\n}\n\n.range-question-toolbar {\n\tfloat: right;\n}\n\n.range-question-input-wrapper {\n\tmargin-bottom: 12px;\n}\n",""]),t.default=a},915:function(e,t,n){"use strict";n.r(t);var s=n(203),a=n.n(s),i=n(0),r=n.n(i),o=n(1),u=n.n(o),l=n(2300),c=n(1070),d=n(87),m=n(91),b=n(36),f=n.n(b),p=n(27),g=n.n(p),w=n(40),h=n.n(w),v=n(962),E=n.n(v),y=n(140),N=n.n(y),x=n(209),O=n.n(x),S=n(139),q=n.n(S),k=n(1048),A=n.n(k),C=n(63),R=n(377),T=n(390),_=n(146),j=n(207),P=n(382),L=n(144),U=n(1113),B=n(37),F=n(201),I=(n(3001),n(3003),f()("isle:range-question")),z=Object(C.default)("range-question"),D=function(e){var t=e.id||z(e),n=e.min,s=e.max,o=e.points,u=e.question,l=e.solution,b=e.t,f=e.until,p=e.feedback,g=e.style,w=e.provideFeedback,h=e.allowMultipleAnswers,v=e.hints,y=e.chat,x=Object(i.useContext)(B.default),S=Object(i.useState)(n),k=a()(S,2),C=k[0],D=k[1],M=Object(i.useState)(s),G=a()(M,2),J=G[0],Q=G[1],V=Object(i.useState)(!1),H=a()(V,2),K=H[0],W=H[1],Y=Object(i.useState)(!1),X=a()(Y,2),Z=X[0],$=X[1],ee=function(){var n,s=e.digits,a=e.solution,i=parseFloat(C),r=parseFloat(J);A()(a)?(e.onSubmit([i,r]),x.addNotification({title:b(K?"answer-resubmitted":"answer-submitted"),message:b(K?"resubmission-message":"submission-message"),level:"success"})):(n=null===s?i===a[0]&&r===a[1]:O()(i,-s)===O()(a[0],-s)&&O()(r,-s)===O()(a[1],-s),e.onSubmit([i,r],n),w?x.addNotification({title:b("answer-submitted"),message:b(n?"submission-correct":"submission-incorrect"),level:n?"success":"error"}):x.addNotification({title:b(K?"answer-resubmitted":"answer-submitted"),message:b(K?"resubmission-message":"submission-message"),level:"info"})),W(!0),$(n),x.log({id:t,type:F.RANGE_QUESTION_SUBMIT_ANSWER,value:JSON.stringify([C,J])})},te=function(e){13===e.charCode&&(document&&document.activeElement&&(I("Trigger blur event..."),document.activeElement.blur()),setTimeout(ee,50))};Object(i.useEffect)((function(){q()(l[1])||q()(l[0])||(D(n),Q(s),W(!1),$(!1))}),[u,l,n,s]);var ne=v.length,se=null!==l;return r.a.createElement(d.default,{id:t,className:"range-question",style:g},r.a.createElement(d.default.Body,{style:{width:p?"calc(100%-60px)":"100%",display:"inline-block"}},u?r.a.createElement("label",null,u):null,r.a.createElement("div",{className:"range-question-input-wrapper"},r.a.createElement(j.default,{step:"any",legend:b("lower"),onChange:function(t){D(t),e.onChangeLower(E()(t,J))},defaultValue:C,disabled:K&&!h,inline:!0,width:90,min:n,max:s,numbersOnly:!1,onBlur:function(e){e>=J&&D(J)},onKeyPress:te}),r.a.createElement(j.default,{step:"any",legend:b("upper"),onChange:function(t){Q(t),e.onChangeUpper(N()(t,C))},defaultValue:J,disabled:K&&!h,inline:!0,width:90,min:n,max:s,numbersOnly:!1,onBlur:function(e){e<=C&&Q(C)},onKeyPress:te}),K&&se&&w?r.a.createElement(m.default,{variant:Z?"success":"danger",style:{fontSize:18}},"".concat(b("solution"),":   "),l[0],", ",l[1]):null),r.a.createElement(c.default,{className:"range-question-toolbar"},r.a.createElement(_.default,{buttonLabel:b("answers"),id:t,data:{type:"range",question:u,solution:l},info:F.RANGE_QUESTION_SUBMIT_ANSWER,style:{marginLeft:"3px",marginRight:"3px"},points:o}),ne>0?r.a.createElement(P.default,{onClick:function(e){I("Logging hint..."),x.log({id:t,type:F.RANGE_QUESTION_OPEN_HINT,value:e})},hints:v,placement:e.hintPlacement}):null,y?r.a.createElement("div",{style:{display:"inline-block",marginLeft:"4px"}},r.a.createElement(R.default,{for:t})):null,f&&x.startTime>f?r.a.createElement("span",{className:"title",style:{marginLeft:4}},b("question-closed")):r.a.createElement(T.default,{className:"submit-button",variant:"primary",size:"sm",disabled:K&&!h,onClick:ee},b(K&&h?"resubmit":"submit"))),p?r.a.createElement(L.default,{id:t+"_feedback",style:{marginRight:5,marginTop:-5}}):null,r.a.createElement(U.default,{for:t,points:o})))};D.defaultProps={question:"",solution:null,hints:[],hintPlacement:"top",feedback:!0,chat:!1,digits:3,max:g.a,min:h.a,provideFeedback:!0,allowMultipleAnswers:!1,until:null,points:10,style:{},onChangeUpper:function(){},onChangeLower:function(){},onSubmit:function(){}},D.propTypes={question:u.a.oneOfType([u.a.string,u.a.node]),solution:u.a.arrayOf(u.a.number),hintPlacement:u.a.string,hints:u.a.arrayOf(u.a.oneOfType([u.a.string,u.a.node])),feedback:u.a.bool,chat:u.a.bool,digits:u.a.number,max:u.a.number,min:u.a.number,provideFeedback:u.a.bool,allowMultipleAnswers:u.a.bool,until:u.a.instanceOf(Date),points:u.a.number,style:u.a.object,onChangeLower:u.a.func,onChangeUpper:u.a.func,onSubmit:u.a.func},t.default=Object(l.withTranslation)("range-question")(D)},962:function(e,t,n){"use strict";var s=n(1043);e.exports=s}}]);