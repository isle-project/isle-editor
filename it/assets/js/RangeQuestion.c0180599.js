(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{3896:function(e,n,t){"use strict";t.r(n);var a=t(407),i=t.n(a),s=t(448),l=t.n(s),o=t(0),u=(t(404),t(1971)),c=t(734),r=t(464),b=t(787),d=t(450),m=t.n(d),f=t(427),p=t.n(f),g=t(457),v=t.n(g),h=t(502),O=t.n(h),y=t(481),w=t.n(y),j=t(474),k=t.n(j),C=t(455),N=t.n(C),x=t(591),P=t.n(x),q=t(543),S=t(606),L=t(881),E=t(582),R=t(487),T=t(690),B=t(623),F=t(812),V=t(459),J=t(458),U=t(420),z=t(442);t(344);Object(U.a)("RangeQuestion");var A=m()("isle:range-question"),K=Object(q.a)("range-question"),M=function(e){var n=e.id||K(e),t=e.digits,a=e.min,s=e.max,d=e.points,m=e.question,f=e.solution,p=e.until,g=e.feedback,v=e.style,h=e.provideFeedback,y=e.allowMultipleAnswers,j=e.hints,C=e.chat,x=e.labels,q=e.onChangeUpper,U=e.onChangeLower,z=e.onSubmit,M=Object(o.useContext)(V.a),Q=Object(o.useState)(a),_=l()(Q,2),D=_[0],G=_[1],H=Object(o.useState)(s),I=l()(H,2),W=I[0],X=I[1],Y=Object(o.useState)(!1),Z=l()(Y,2),$=Z[0],ee=Z[1],ne=Object(o.useState)(!1),te=l()(ne,2),ae=te[0],ie=te[1],se=Object(u.a)("RangeQuestion").t,le=Object(o.useCallback)((function(e){X(e),q(w()(e,D))}),[D,q]),oe=Object(o.useCallback)((function(e){G(e),U(O()(e,W))}),[W,U]),ue=Object(o.useCallback)((function(e){e<=D&&X(D)}),[D]),ce=Object(o.useCallback)((function(e){e>=W&&G(W)}),[W]),re=Object(o.useCallback)((function(e){A("Logging hint..."),M.log({id:n,type:J.Ub,value:e})}),[n,M]),be=Object(o.useCallback)((function(){var e,a=parseFloat(D),i=parseFloat(W);P()(f)?(z(null,[a,i]),M.addNotification({title:se($?"answer-resubmitted":"answer-submitted"),message:se($?"resubmission-message":"submission-message"),level:"success"})):(e=null===t?a===f[0]&&i===f[1]:k()(a,-t)===k()(f[0],-t)&&k()(i,-t)===k()(f[1],-t),z(e,[a,i]),h?M.addNotification({title:se("answer-submitted"),message:se(e?"submission-correct":"submission-incorrect"),level:e?"success":"error"}):M.addNotification({title:se($?"answer-resubmitted":"answer-submitted"),message:se($?"resubmission-message":"submission-message"),level:"info"})),ee(!0),ie(e),M.log({id:n,type:J.Vb,value:JSON.stringify([D,W])})}),[t,n,D,W,z,h,M,f,$,se]),de=Object(o.useCallback)((function(e){13===e.charCode&&(document&&document.activeElement&&(A("Trigger blur event..."),document.activeElement.blur()),setTimeout(be,50))}),[be]);Object(o.useEffect)((function(){!f||N()(f[1])||N()(f[0])||(G(a),X(s),ee(!1),ie(!1))}),[m,f,a,s]);var me=j.length,fe=null!==f;return i()(r.a,{id:n,className:"range-question",style:v},void 0,i()(r.a.Body,{style:{width:g?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,m?i()("label",{},void 0,m):null,i()("div",{className:"range-question-input-wrapper"},void 0,i()(R.b,{step:"any",legend:x?x[0]:se("lower"),onChange:oe,defaultValue:D,disabled:$&&!y,inline:!0,width:90,min:a,max:s,numbersOnly:!1,onBlur:ce,onKeyPress:de}),i()(R.b,{step:"any",legend:x?x[1]:se("upper"),onChange:le,defaultValue:W,disabled:$&&!y,inline:!0,width:90,min:a,max:s,numbersOnly:!1,onBlur:ue,onKeyPress:de}),$&&fe&&h?i()(b.a,{variant:ae?"success":"danger",style:{fontSize:18}},void 0,"".concat(se("solution"),":   "),f[0],", ",f[1]):null),i()(c.a,{className:"range-question-toolbar"},void 0,i()(E.a,{buttonLabel:se("answers"),id:n,data:{type:"range",question:m,solution:f},info:J.Vb,style:{marginLeft:"3px",marginRight:"3px"},points:d}),me>0?i()(T.a,{onClick:re,hints:j,placement:e.hintPlacement}):null,C?i()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,i()(S.a,{for:n})):null,p&&M.startTime>p?i()("span",{className:"title",style:{marginLeft:4}},void 0,se("question-closed")):i()(L.a,{className:"submit-button",variant:"primary",size:"sm",disabled:$&&!y,onClick:be},void 0,se($&&y?"resubmit":"submit"))),g?i()(B.a,{id:n+"_feedback",style:{marginRight:5,marginTop:-5}}):null,i()(F.a,{for:n,points:d})))};M.defaultProps={question:"",solution:null,hints:[],hintPlacement:"top",labels:null,feedback:!0,chat:!1,digits:3,max:p.a,min:v.a,provideFeedback:!0,allowMultipleAnswers:!1,until:null,points:10,style:{},onChangeUpper:function(){},onChangeLower:function(){},onSubmit:function(){}},n.default=Object(z.a)(M)},582:function(e,n,t){"use strict";var a=t(555),i=t.n(a),s=t(0),l=t.n(s),o=(t(404),function(e){var n=e.children,t=i()(e,["children"]);return l.a.createElement("div",t,n)});o.defaultProps={className:"",style:{}},n.a=o},606:function(e,n,t){"use strict";var a=t(405),i=Object(a.a)((function(){return t.e(189).then(t.bind(null,865))}));n.a=i},690:function(e,n,t){"use strict";var a=t(405),i=Object(a.a)((function(){return t.e(374).then(t.bind(null,1017))}));n.a=i},734:function(e,n,t){"use strict";var a=t(406),i=t(408),s=t(409),l=t.n(s),o=t(0),u=t.n(o),c=t(411),r=u.a.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,o=Object(i.a)(e,["bsPrefix","className"]),r=Object(c.a)(t,"btn-toolbar");return u.a.createElement("div",Object(a.a)({},o,{ref:n,className:l()(s,r)}))}));r.displayName="ButtonToolbar",r.defaultProps={role:"toolbar"},n.a=r},812:function(e,n,t){"use strict";var a=t(405),i=Object(a.a)((function(){return Promise.all([t.e(0),t.e(347)]).then(t.bind(null,1355))}));n.a=i}}]);