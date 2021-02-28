(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{3941:function(e,n,t){"use strict";t.r(n);var i=t(404),a=t.n(i),s=t(457),o=t.n(s),l=t(0),u=(t(402),t(2022)),r=t(872),c=t(473),d=t(918),b=t(451),m=t.n(b),f=t(430),g=t.n(f),p=t(466),v=t.n(p),h=t(520),w=t.n(h),y=t(490),O=t.n(y),j=t(489),N=t.n(j),k=t(458),x=t.n(k),C=t(668),S=t.n(C),q=t(612),P=t(687),L=t(1079),T=t(818),R=t(515),B=t(823),E=t(680),F=t(965),J=t(465),z=t(471),A=t(423),K=t(445);t(346);Object(A.a)("RangeQuestion");var M=m()("isle:range-question"),Q=Object(q.a)("range-question"),U=function(e){var n=e.id||Q(e),t=e.min,i=e.max,s=e.points,b=e.question,m=e.solution,f=e.until,g=e.feedback,p=e.style,v=e.provideFeedback,h=e.allowMultipleAnswers,y=e.hints,j=e.chat,k=Object(l.useContext)(J.a),C=Object(l.useState)(t),q=o()(C,2),A=q[0],K=q[1],U=Object(l.useState)(i),V=o()(U,2),_=V[0],D=V[1],G=Object(l.useState)(!1),H=o()(G,2),I=H[0],W=H[1],X=Object(l.useState)(!1),Y=o()(X,2),Z=Y[0],$=Y[1],ee=Object(u.a)("RangeQuestion").t,ne=function(){var t,i=e.digits,a=e.solution,s=void 0===a?[]:a,o=parseFloat(A),l=parseFloat(_);S()(s)?(e.onSubmit([o,l]),k.addNotification({title:ee(I?"answer-resubmitted":"answer-submitted"),message:ee(I?"resubmission-message":"submission-message"),level:"success"})):(t=null===i?o===s[0]&&l===s[1]:N()(o,-i)===N()(s[0],-i)&&N()(l,-i)===N()(s[1],-i),e.onSubmit([o,l],t),v?k.addNotification({title:ee("answer-submitted"),message:ee(t?"submission-correct":"submission-incorrect"),level:t?"success":"error"}):k.addNotification({title:ee(I?"answer-resubmitted":"answer-submitted"),message:ee(I?"resubmission-message":"submission-message"),level:"info"})),W(!0),$(t),k.log({id:n,type:z.Tb,value:JSON.stringify([A,_])})},te=function(e){13===e.charCode&&(document&&document.activeElement&&(M("Trigger blur event..."),document.activeElement.blur()),setTimeout(ne,50))};Object(l.useEffect)((function(){!m||x()(m[1])||x()(m[0])||(K(t),D(i),W(!1),$(!1))}),[b,m,t,i]);var ie=y.length,ae=null!==m;return a()(c.a,{id:n,className:"range-question",style:p},void 0,a()(c.a.Body,{style:{width:g?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,b?a()("label",{},void 0,b):null,a()("div",{className:"range-question-input-wrapper"},void 0,a()(R.b,{step:"any",legend:ee("lower"),onChange:function(n){K(n),e.onChangeLower(w()(n,_))},defaultValue:A,disabled:I&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e>=_&&K(_)},onKeyPress:te}),a()(R.b,{step:"any",legend:ee("upper"),onChange:function(n){D(n),e.onChangeUpper(O()(n,A))},defaultValue:_,disabled:I&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e<=A&&D(A)},onKeyPress:te}),I&&ae&&v?a()(d.a,{variant:Z?"success":"danger",style:{fontSize:18}},void 0,"".concat(ee("solution"),":   "),m[0],", ",m[1]):null),a()(r.a,{className:"range-question-toolbar"},void 0,a()(T.a,{buttonLabel:ee("answers"),id:n,data:{type:"range",question:b,solution:m},info:z.Tb,style:{marginLeft:"3px",marginRight:"3px"},points:s}),ie>0?a()(B.a,{onClick:function(e){M("Logging hint..."),k.log({id:n,type:z.Sb,value:e})},hints:y,placement:e.hintPlacement}):null,j?a()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,a()(P.a,{for:n})):null,f&&k.startTime>f?a()("span",{className:"title",style:{marginLeft:4}},void 0,ee("question-closed")):a()(L.a,{className:"submit-button",variant:"primary",size:"sm",disabled:I&&!h,onClick:ne},void 0,ee(I&&h?"resubmit":"submit"))),g?a()(E.a,{id:n+"_feedback",style:{marginRight:5,marginTop:-5}}):null,a()(F.a,{for:n,points:s})))};U.defaultProps={question:"",solution:null,hints:[],hintPlacement:"top",feedback:!0,chat:!1,digits:3,max:g.a,min:v.a,provideFeedback:!0,allowMultipleAnswers:!1,until:null,points:10,style:{},onChangeUpper:function(){},onChangeLower:function(){},onSubmit:function(){}},n.default=Object(K.a)(U)},687:function(e,n,t){"use strict";var i=t(406),a=Object(i.a)((function(){return t.e(154).then(t.bind(null,1027))}));n.a=a},823:function(e,n,t){"use strict";var i=t(406),a=Object(i.a)((function(){return t.e(182).then(t.bind(null,1168))}));n.a=a},872:function(e,n,t){"use strict";var i=t(405),a=t(407),s=t(408),o=t.n(s),l=t(0),u=t.n(l),r=t(413),c=u.a.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,l=Object(a.a)(e,["bsPrefix","className"]),c=Object(r.a)(t,"btn-toolbar");return u.a.createElement("div",Object(i.a)({},l,{ref:n,className:o()(s,c)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},n.a=c},965:function(e,n,t){"use strict";var i=t(406),a=Object(i.a)((function(){return Promise.all([t.e(0),t.e(179)]).then(t.bind(null,1512))}));n.a=a}}]);