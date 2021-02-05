/*! For license information please see RangeQuestion.a9c38229.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1030:function(e,n,t){"use strict";var i=t(368),s=t(366),a=t(370),o=t.n(a),u=t(0),l=t.n(u),r=t(383),c=l.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,u=Object(s.a)(e,["bsPrefix","className"]),c=Object(r.a)(t,"btn-toolbar");return l.a.createElement("div",Object(i.a)({},u,{ref:n,className:o()(a,c)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},n.a=c},1164:function(e,n,t){"use strict";var i=t(369),s=Object(i.a)((function(){return Promise.all([t.e(0),t.e(6),t.e(367),t.e(162)]).then(t.bind(null,1585))}));n.a=s},1317:function(e,n,t){"use strict";e.exports=function(e){return null==e}},434:function(e,n,t){"use strict";var i=t(640);e.exports=i},4651:function(e,n,t){"use strict";t.r(n);var i=t(371),s=t.n(i),a=t(460),o=t.n(a),u=t(0),l=(t(363),t(6684)),r=t(1030),c=t(458),d=t(1108),b=t(425),m=t.n(b),f=t(385),p=t.n(f),g=t(405),v=t.n(g),h=t(434),w=t.n(h),y=t(451),O=t.n(y),j=t(608),x=t.n(j),N=t(549),k=t.n(N),C=t(868),S=t.n(C),q=t(649),P=t(755),L=t(1300),T=t(972),R=t(501),B=t(979),E=t(760),F=t(1164),J=t(445),z=t(447),A=t(396);t(309);Object(A.a)("RangeQuestion");var K=m()("isle:range-question"),M=Object(q.a)("range-question"),Q=function(e){var n=e.id||M(e),t=e.min,i=e.max,a=e.points,l=e.question,b=e.solution,m=e.t,f=e.until,p=e.feedback,g=e.style,v=e.provideFeedback,h=e.allowMultipleAnswers,y=e.hints,j=e.chat,N=Object(u.useContext)(J.a),C=Object(u.useState)(t),q=o()(C,2),A=q[0],Q=q[1],U=Object(u.useState)(i),V=o()(U,2),_=V[0],D=V[1],G=Object(u.useState)(!1),H=o()(G,2),I=H[0],W=H[1],X=Object(u.useState)(!1),Y=o()(X,2),Z=Y[0],$=Y[1],ee=function(){var t,i=e.digits,s=e.solution,a=void 0===s?[]:s,o=parseFloat(A),u=parseFloat(_);S()(a)?(e.onSubmit([o,u]),N.addNotification({title:m(I?"answer-resubmitted":"answer-submitted"),message:m(I?"resubmission-message":"submission-message"),level:"success"})):(t=null===i?o===a[0]&&u===a[1]:x()(o,-i)===x()(a[0],-i)&&x()(u,-i)===x()(a[1],-i),e.onSubmit([o,u],t),v?N.addNotification({title:m("answer-submitted"),message:m(t?"submission-correct":"submission-incorrect"),level:t?"success":"error"}):N.addNotification({title:m(I?"answer-resubmitted":"answer-submitted"),message:m(I?"resubmission-message":"submission-message"),level:"info"})),W(!0),$(t),N.log({id:n,type:z.Tb,value:JSON.stringify([A,_])})},ne=function(e){13===e.charCode&&(document&&document.activeElement&&(K("Trigger blur event..."),document.activeElement.blur()),setTimeout(ee,50))};Object(u.useEffect)((function(){!b||k()(b[1])||k()(b[0])||(Q(t),D(i),W(!1),$(!1))}),[l,b,t,i]);var te=y.length,ie=null!==b;return s()(c.a,{id:n,className:"range-question",style:g},void 0,s()(c.a.Body,{style:{width:p?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,l?s()("label",{},void 0,l):null,s()("div",{className:"range-question-input-wrapper"},void 0,s()(R.b,{step:"any",legend:m("lower"),onChange:function(n){Q(n),e.onChangeLower(w()(n,_))},defaultValue:A,disabled:I&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e>=_&&Q(_)},onKeyPress:ne}),s()(R.b,{step:"any",legend:m("upper"),onChange:function(n){D(n),e.onChangeUpper(O()(n,A))},defaultValue:_,disabled:I&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e<=A&&D(A)},onKeyPress:ne}),I&&ie&&v?s()(d.a,{variant:Z?"success":"danger",style:{fontSize:18}},void 0,"".concat(m("solution"),":   "),b[0],", ",b[1]):null),s()(r.a,{className:"range-question-toolbar"},void 0,s()(T.a,{buttonLabel:m("answers"),id:n,data:{type:"range",question:l,solution:b},info:z.Tb,style:{marginLeft:"3px",marginRight:"3px"},points:a}),te>0?s()(B.a,{onClick:function(e){K("Logging hint..."),N.log({id:n,type:z.Sb,value:e})},hints:y,placement:e.hintPlacement}):null,j?s()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,s()(P.a,{for:n})):null,f&&N.startTime>f?s()("span",{className:"title",style:{marginLeft:4}},void 0,m("question-closed")):s()(L.a,{className:"submit-button",variant:"primary",size:"sm",disabled:I&&!h,onClick:ee},void 0,m(I&&h?"resubmit":"submit"))),p?s()(E.a,{id:n+"_feedback",style:{marginRight:5,marginTop:-5}}):null,s()(F.a,{for:n,points:a})))};Q.defaultProps={question:"",solution:null,hints:[],hintPlacement:"top",feedback:!0,chat:!1,digits:3,max:p.a,min:v.a,provideFeedback:!0,allowMultipleAnswers:!1,until:null,points:10,style:{},onChangeUpper:function(){},onChangeLower:function(){},onSubmit:function(){}},n.default=Object(l.a)("RangeQuestion")(Q)},640:function(e,n,t){"use strict";var i=t(681),s=t(367),a=t(405),o=t(385);e.exports=function(e,n){var t,u,l,r;if(2===(t=arguments.length))return s(e)||s(n)?NaN:e===a||n===a?a:e===n&&0===e?i(e)?e:n:e<n?e:n;for(u=o,r=0;r<t;r++){if(s(l=arguments[r])||l===a)return l;(l<u||l===u&&0===l&&i(l))&&(u=l)}return u}},755:function(e,n,t){"use strict";var i=t(369),s=Object(i.a)((function(){return t.e(136).then(t.bind(null,1183))}));n.a=s},868:function(e,n,t){"use strict";var i=t(1317);e.exports=i},979:function(e,n,t){"use strict";var i=t(369),s=Object(i.a)((function(){return t.e(165).then(t.bind(null,1374))}));n.a=s}}]);