(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{2675:function(t,e,i){"use strict";var s=i(451),n=i.n(s),o=i(628),a=i.n(o);e.a=function(t,e,i){if(a()(t)){var s=t[e];if(n()(s)&&(s=s.filter((function(t){return t.type===i}))).length>0)return s[0].value}return null}},3751:function(t,e,i){"use strict";i.r(e);i(423);var s=i(406),n=i.n(s),o=i(414),a=i.n(o),r=i(418),l=i.n(r),u=i(427),c=i.n(u),p=i(420),d=i.n(p),h=i(421),b=i.n(h),f=i(419),m=i.n(f),v=i(413),g=i.n(v),y=i(0),x=i.n(y),k=i(23),w=i.n(k),S=(i(404),i(4097)),N=i(433),j=i(873),O=i(736),q=i(668),D=i(862),T=i(453),C=i.n(T),L=i(442),P=i(609),H=i(573),F=i(689),R=i(1080),A=i(821),B=i(1415),z=i(826),M=i(962),U=i(819),E=i(688),I=i(966),J=i(467),Q=i(2675),W=i(1525),Y=i(473),_=i(591),G=i(425),K=i(448),V=i(4806);i(324);function X(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=m()(t);if(e){var n=m()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return b()(this,i)}}Object(G.a)("FreeTextQuestion");var Z=Object(P.a)("free-text-question"),$=C()("isle:free-text-question"),tt=function(t){d()(i,t);var e=X(i);function i(t,s){var n;a()(this,i),n=e.call(this,t),g()(c()(n),"handleChange",(function(t){var e=t.target.value;n.setState({value:e}),n.beforeUnload||(window.addEventListener("beforeunload",W.a),n.beforeUnload=!0),n.props.onChange(e)})),g()(c()(n),"appendText",(function(t){n.setState({value:n.state.value+" "+t})})),g()(c()(n),"sendSubmitNotification",(function(){var t=n.context;if(n.state.submitted)t.addNotification({title:n.props.t("answer-resubmitted"),message:n.props.resubmissionMsg,level:"success"});else{var e=n.props.submissionMsg;""===e&&(e=n.props.solution&&n.props.provideFeedback?n.props.t("submission-message-solution"):n.props.t("submission-message-no-solution")),t.addNotification({title:n.props.t("answer-submitted"),message:e,level:"success"})}})),g()(c()(n),"submitHandler",(function(t){var e=n.context;n.props.disableSubmitNotification||n.sendSubmitNotification(),n.props.onSubmit(n.state.value),n.setState({submitted:!0}),window.removeEventListener("beforeunload",W.a),n.beforeUnload=!1,e.log({id:n.id,type:Y.jb,value:n.state.value})})),g()(c()(n),"handleSolutionClick",(function(){var t=n.context;n.state.solutionDisplayed?n.setState({solutionDisplayed:!1,value:n.state.studentAnswer}):(t.log({id:n.id,type:Y.hb,value:null}),n.setState({solutionDisplayed:!0,studentAnswer:n.state.value,value:n.props.solution}))})),g()(c()(n),"logHint",(function(t){$("Logging hint..."),n.context.log({id:n.id,type:Y.ib,value:t})})),$("Invoking constructor of FreeTextQuestion...");var o=s.currentUserActions;n.id=t.id||Z(t);var r=Object(Q.a)(o,n.id,Y.jb);return n.state={exhaustedHints:0===t.hints.length,value:Object(L.isPrimitive)(r)?r:"",solutionDisplayed:!1,submitted:Object(L.isPrimitive)(r),placeholder:t.placeholder,solution:t.solution,question:t.question},n}return l()(i,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(e){e===_.A&&t.setToLastAction()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"setToLastAction",value:function(){var t=this.context.currentUserActions,e=Object(Q.a)(t,this.id,Y.jb);Object(L.isPrimitive)(e)&&e!==this.state.value&&this.setState({value:e,submitted:!0})}},{key:"triggerHint",value:function(){w.a.findDOMNode(this.hintButton).click()}},{key:"renderSubmitButton",value:function(){var t=this.context;return this.props.until&&t.startTime>this.props.until?n()("span",{className:"title",style:{marginLeft:4}},void 0,this.props.t("question-closed")):this.state.value.length>=1&&!this.state.solutionDisplayed?n()(R.a,{className:"submit-button",variant:"primary",size:"sm",onClick:this.submitHandler,duration:5,style:{marginLeft:"4px"}},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")):n()(U.a,{placement:"top",positionLeft:100,overlay:n()(D.a,{id:"submitTooltip"},void 0,this.props.t("submit-tooltip")),rootClose:!0},void 0,n()("div",{style:{display:"inline-block"}},void 0,n()(N.a,{className:"submit-button",variant:"primary",size:"sm",style:{pointerEvents:"none",marginLeft:"4px"},disabled:!0},void 0,this.props.t("submit"))))}},{key:"render",value:function(){var t=this,e=this.props.hints.length,i=n()(B.a,{disabled:!(this.props.instantSolution||this.state.submitted&&this.state.exhaustedHints),onClick:this.handleSolutionClick,hasHints:this.props.hints.length>0});return n()(H.a,{id:this.id,className:"free-text-question ".concat(this.props.className),style:this.props.style,fullscreen:!0,bodyStyle:{width:this.props.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,n()(M.a,{id:this.props.voiceID,reference:this,commands:V}),this.props.question?n()("div",{className:"title"},void 0,this.props.question):null,n()(q.a,{},void 0,n()("label",{htmlFor:"".concat(this.id,"-textarea")},void 0,this.state.solutionDisplayed?this.props.t("solution"):this.props.t("your-answer")),this.state.solutionDisplayed?n()("div",{className:"free-text-question-solution-wrapper",style:{height:"calc(".concat(1.5*this.props.rows,"rem + 14px)")}},void 0,this.state.value):n()(O.a,{id:"".concat(this.id,"-textarea"),as:"textarea",placeholder:this.props.placeholder||this.props.t("enter-your-answer-here"),onChange:this.handleChange,style:{resize:this.props.resizable?"both":"none"},maxLength:this.props.maxlength,rows:this.props.rows,value:this.state.value,disabled:this.state.solutionDisplayed})),n()(A.a,{buttonLabel:this.props.t("answers"),id:this.id,info:Y.jb,data:{question:this.props.question,solution:this.props.solution},style:{float:"left"},points:this.props.points}),n()(j.a,{className:"free-text-question-toolbar"},void 0,e>0?x.a.createElement(z.a,{id:"".concat(this.id,"-hints"),onClick:this.logHint,ref:function(e){t.hintButton=e},hints:this.props.hints,onFinished:function(){t.setState({exhaustedHints:!0})},style:{marginRight:"4px"},placement:this.props.hintPlacement}):null,this.props.provideFeedback&&this.props.solution?i:null,this.props.chat?n()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,n()(F.a,{for:this.id})):null,this.renderSubmitButton()),this.props.feedback?n()(E.a,{id:this.id+"_feedback",style:{marginRight:5,marginTop:-5}}):null,n()(I.a,{for:this.id,points:this.props.points}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.placeholder!==e.placeholder||t.solution!==e.solution||t.question!==e.question?{value:"",solutionDisplayed:!1,submitted:!1,placeholder:t.placeholder,solution:t.solution,question:t.question}:null}}]),i}(y.Component);tt.defaultProps={question:"",hints:[],hintPlacement:"top",feedback:!0,solution:"",instantSolution:!1,rows:5,chat:!1,placeholder:"",resizable:!1,disableSubmitNotification:!1,submissionMsg:"",resubmissionMsg:"You have successfully re-submitted your answer.",provideFeedback:!0,maxlength:2500,voiceID:null,until:null,points:10,className:"",style:{},onChange:function(){},onSubmit:function(){}},tt.contextType=J.a,e.default=Object(S.a)("FreeTextQuestion")(Object(K.a)(tt))},4806:function(t){t.exports=JSON.parse('[{"command":"appendText","trigger":"insert","description":"Dictate your answer","params":["text"],"regexp":"/insert[a-z]* (?<text>[\\\\s\\\\S]+)/i"},{"command":"handleSolutionClick","trigger":"solution","description":"Toggle the solution"},{"command":"submitHandler","trigger":"submit","description":"Submit your answer"},{"command":"triggerHint","trigger":"hint","description":"Toggle hint"}]')},689:function(t,e,i){"use strict";var s=i(408),n=Object(s.a)((function(){return i.e(159).then(i.bind(null,1029))}));e.a=n},826:function(t,e,i){"use strict";var s=i(408),n=Object(s.a)((function(){return i.e(187).then(i.bind(null,1173))}));e.a=n},873:function(t,e,i){"use strict";var s=i(407),n=i(409),o=i(410),a=i.n(o),r=i(0),l=i.n(r),u=i(415),c=l.a.forwardRef((function(t,e){var i=t.bsPrefix,o=t.className,r=Object(n.a)(t,["bsPrefix","className"]),c=Object(u.a)(i,"btn-toolbar");return l.a.createElement("div",Object(s.a)({},r,{ref:e,className:a()(o,c)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},e.a=c},966:function(t,e,i){"use strict";var s=i(408),n=Object(s.a)((function(){return Promise.all([i.e(0),i.e(184)]).then(i.bind(null,1516))}));e.a=n}}]);