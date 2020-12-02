/*! For license information please see dll.SelectQuestionMatrix.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[128],{3025:function(e,t,s){"use strict";s.r(t);var r=s(958),n=s(3026);r.default.addResources("de","select-question-matrix",n.DE),r.default.addResources("en","select-question-matrix",n.EN),r.default.addResources("es","select-question-matrix",n.ES)},3026:function(e){e.exports=JSON.parse('{"DE":{"answer-resubmitted":"Antwort erneut eingereicht","answer-submitted":"Antwort eingereicht.","correct-answer":"Richtige Antwort","success-message":"Das ist die richtige Antwort!","failure-message":"Nicht ganz.","resubmit":"Erneut einreichen","resubmit-message":"Du hast Deine Antwort erfolgreich erneut eingereicht.","submit":"Abschicken","submit-message":"Deine Antwort wurde übermittelt."},"EN":{"answer-resubmitted":"Answer re-submitted.","answer-submitted":"Answer submitted.","correct-answer":"Correct answer","success-message":"That\'s the correct answer!","failure-message":"Not quite.","resubmit":"Resubmit","resubmit-message":"You have successfully re-submitted your answer.","submit":"Submit","submit-message":"Your answer has been submitted."},"ES":{"answer-resubmitted":"Respuesta presentada de nuevo.","answer-submitted":"Respuesta presentada.","correct-answer":"Respuesta correcta","success-message":"¡Esa es la respuesta correcta!","failure-message":"No del todo.","resubmit":"Volver a presentar","resubmit-message":"Ha vuelto a enviar su respuesta con éxito","submit":"Presentar","submit-message":"Su respuesta ha sido presentada."}}')},3027:function(e,t,s){"use strict";s.r(t);var r=s(22),n=s.n(r),a=s(3028),i={insert:"head",singleton:!1};n()(a.default,i);t.default=a.default.locals||{}},3028:function(e,t,s){"use strict";s.r(t);var r=s(23),n=s.n(r)()(!1);n.push([e.i,".select-question-matrix {\n\tborder: 1px solid rgba(92, 92, 92, 0.6);\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 4px rgba(92, 92, 92, 0.5);\n\tmargin: 0 auto 10px;\n\tmargin-top: 8px;\n\tmax-width: 900px;\n}\n\n.select-question-matrix-toolbar {\n\tfloat: right;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n\n.select-question-matrix-cell-label {\n\tmargin-top: 6px;\n\tmargin-right: 6px;\n\tfloat: left;\n}\n",""]),t.default=n},923:function(e,t,s){"use strict";s.r(t);var r=s(14),n=s.n(r),a=s(13),i=s.n(a),o=s(10),l=s.n(o),u=s(15),c=s.n(u),p=s(16),m=s.n(p),d=s(8),b=s.n(d),f=s(7),h=s.n(f),g=s(0),w=s.n(g),v=s(36),y=s.n(v),E=s(1),S=s.n(E),x=s(2300),O=s(59),k=s(216),N=s(91),R=s(76),j=s(87),q=s(68),P=s(34),A=s(364),T=s.n(A),I=s(88),D=s.n(I),C=s(204),F=s.n(C),_=s(39),M=s.n(_),L=s(106),U=s(45),z=s.n(U),B=s(63),J=s(382),H=s(146),Q=s(377),V=s(97),X=s(144),Y=s(37),G=s(201);s(3025),s(3027);function K(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function W(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?K(Object(s),!0).forEach((function(t){h()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):K(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=b()(e);if(t){var n=b()(this).constructor;s=Reflect.construct(r,arguments,n)}else s=r.apply(this,arguments);return m()(this,s)}}var $=y()("isle:select-question-matrix"),ee=Object(B.default)("select-question-matrix"),te=function(e){c()(s,e);var t=Z(s);function s(e){var r;return n()(this,s),r=t.call(this,e),h()(l()(r),"handleChangeFactory",(function(e){return function(t){$("Received a new value for ".concat(e,"..."));var s=T()(r.state.answers,1);s[e]=t.value,r.setState({answers:s})}})),h()(l()(r),"handleSubmit",(function(){for(var e=r.context,t=!0,s=D()(r.props.solution),n=0;n<s.length;n++){var a=s[n],i=r.props.solution[a],o=r.state.answers[a];Object(L.isPrimitive)(o)&&(M()(i)?F()(i,o)||(t=!1):i!==o&&(t=!1))}var l=!z()(r.props.solution);"none"!==r.props.provideFeedback&&l?t?e.addNotification({title:"Correct",message:r.props.successMsg||r.props.t("success-message"),level:"success"}):e.addNotification({title:"Incorrect",message:r.props.failureMsg||r.props.t("failure-message"),level:"error"}):e.addNotification({title:r.state.submitted?r.props.t("answer-resubmitted"):r.props.t("answer-submitted"),message:r.state.submitted?r.props.t("resubmit-message"):r.props.t("submit-message"),level:"info"}),e.log({id:r.id,type:G.SELECT_QUESTION_MATRIX_SUBMISSION,value:r.state.answers}),r.props.onSubmit(r.state.answers,t);var u=null;r.props.provideFeedback&&l&&(u=t?"success":"danger");var c=D()(r.state.answers).length,p=D()(r.props.options).length,m=r.state.numbSubmissions+1;r.setState({submitted:!0,answerState:u,submittedAnswers:T()(r.state.answers),numbSubmissions:m,completed:(m>=r.props.nTries||"success"===u&&c===p)&&"none"!==r.props.provideFeedback&&l})})),r.id=e.id||ee(e),r.state={answers:{},submitted:!1,answerState:null,completed:!1,numbSubmissions:0,submittedAnswers:null},r}return i()(s,[{key:"renderColumnNames",value:function(){var e,t=this.props.cols.length;return e=t>7?1:t>4?2:3,w.a.createElement(O.default.Row,{className:"multiple-choice-matrix-question-header"},w.a.createElement(q.default,{sm:e}),this.props.cols.map((function(e,t){return w.a.createElement(q.default,{key:t},w.a.createElement(O.default.Label,null,Object(P.isPrimitive)(e)?w.a.createElement(V.default,{raw:e}):e))})))}},{key:"renderSelectInput",value:function(e,t){var s,r=e+":"+t,n=this.props.options[r]||[];n=n.map((function(e,t){return{label:e,value:t}}));var a="overall"===this.props.provideFeedback&&this.state.submitted||"individual"===this.props.provideFeedback&&this.state.submitted&&this.state.submittedAnswers[r];a&&this.props.solution[r]&&(s=this.state.submittedAnswers[r]===this.props.solution[r]?"green":"red");var i=w.a.createElement(k.default,{name:"form-field-name",className:"select-field",isDisabled:this.state.completed,isSearchable:!1,options:n,key:"select-".concat(e,"-").concat(t),onChange:this.handleChangeFactory(r),menuPlacement:"top",menuPortalTarget:document.body,styles:{menuPortal:function(e){return W(W({},e),{},{zIndex:1010})},singleValue:function(e){return W(W({},e),{},{color:s})}}}),o=this.props.cellLabels[r];return w.a.createElement(g.Fragment,null,o?w.a.createElement("span",{className:"select-question-matrix-cell-label"},o):null,i,a&&this.state.completed?w.a.createElement(N.default,{variant:"green"===s?"success":"danger"},this.props.t("correct-answer"),":",this.props.options[r][this.props.solution[r]]):null)}},{key:"renderRowSelects",value:function(e){for(var t=this.props.cols.length,s=new Array(t),r=0;r<t;r++)s[r]=w.a.createElement(q.default,{key:r},this.renderSelectInput(e,r));return w.a.createElement(g.Fragment,null,s)}},{key:"renderRows",value:function(){var e,t=this,s=this.props.rows.length;return e=s>7?1:s>4?2:3,this.props.rows.map((function(s,r){return w.a.createElement(O.default.Row,{key:r,style:{marginBottom:15,marginTop:15}},w.a.createElement(q.default,{sm:e},w.a.createElement(O.default.Label,{column:!0,style:{textAlign:"right"}},Object(P.isPrimitive)(s)?w.a.createElement(V.default,{raw:s}):s)),t.renderRowSelects(r))}))}},{key:"render",value:function(){var e=this.props.hints.length,t=D()(this.state.answers).length,s=D()(this.props.options).length,r=0===t||t<s&&!this.props.allowIncomplete||this.state.completed;return w.a.createElement(j.default,{id:this.id,border:this.state.answerState,className:"select-question-matrix ".concat(this.props.className),style:this.props.style,body:!0},this.props.question?w.a.createElement("label",null,this.props.question):null,this.renderColumnNames(),this.renderRows(),w.a.createElement("div",{className:"select-question-matrix-toolbar"},w.a.createElement(R.default,{className:"submit-button",variant:"primary",size:"sm",onClick:this.handleSubmit,disabled:r},this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),e>0?w.a.createElement(J.default,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement}):null,this.props.chat?w.a.createElement(Q.default,{for:this.id}):null),w.a.createElement("div",null,w.a.createElement(H.default,{id:this.id,data:{type:"tensor",rows:this.props.rows,cols:this.props.cols,question:this.props.question,solution:this.props.solution},info:G.SELECT_QUESTION_MATRIX_SUBMISSION}),this.props.feedback?w.a.createElement(X.default,{id:this.id+"_feedback",style:{float:"left"}}):null))}}]),s}(g.Component);te.defaultProps={question:"",rows:[],cols:[],solution:{},options:{},hints:[],hintPlacement:"bottom",feedback:!0,provideFeedback:"individual",allowIncomplete:!1,nTries:1,failureMsg:null,successMsg:null,cellLabels:{},chat:!1,className:"",style:{},onSubmit:function(){}},te.propTypes={question:S.a.oneOfType([S.a.string,S.a.node]),rows:S.a.array,cols:S.a.array,options:S.a.object,solution:S.a.object,hints:S.a.arrayOf(S.a.oneOfType([S.a.string,S.a.node])),hintPlacement:S.a.string,feedback:S.a.bool,provideFeedback:S.a.oneOf(["none","overall","individual"]),allowIncomplete:S.a.bool,nTries:S.a.number,failureMsg:S.a.string,successMsg:S.a.string,cellLabels:S.a.object,chat:S.a.bool,className:S.a.string,style:S.a.object,onSubmit:S.a.func},te.contextType=Y.default,t.default=Object(x.withTranslation)("select-question-matrix")(te)}}]);