(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1646:function(e,t,n){"use strict";var i=function(e,t){return e+o(t)},o=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(i,""):function(e){return Object.prototype.hasOwnProperty.call(e,"props")}(e)&&Object.prototype.hasOwnProperty.call(e.props,"children")?o(e.props.children):""};o.default=o,e.exports=o},2682:function(e,t,n){"use strict";var i=n(0),o=n(451),s=n.n(o),r=n(448),a=n.n(r),c=n(446),u=n.n(c),l=n(566),d=n.n(l),p=n(514),h=n(1404),f=n(1412),v=n(1586),b=n(1409),m=n(1413),g=n(1414),w=n(1415),y=n(1417),k=s()("isle:convert-json");t.a=function e(t){k("Convert JSON ".concat(t.component," object to React element..."));var n=d()(t.children);if(a()(n))for(var o=0;o<n.length;o++){var s=n[o];u()(s)&&(n[o]=e(s))}else u()(n)&&(n=e(n));var r=t.component;switch(r){case"Fragment":r=i.Fragment;break;case"TeX":r=p.a;break;case"FreeTextQuestion":r=h.a;break;case"MultipleChoiceMatrix":r=v.a;break;case"MultipleChoiceQuestion":r=f.a;break;case"MatchListQuestion":r=b.a;break;case"NumberQuestion":r=m.a;break;case"OrderQuestion":r=g.a;break;case"RangeQuestion":r=w.a;break;case"SelectQuestion":r=y.a;break;default:r=t.component}var c=t.props||{};return Object(i.createElement)(r,c,n)}},6522:function(e,t,n){"use strict";n.r(t);n(421);var i=n(513),o=n.n(i),s=n(404),r=n.n(s),a=n(412),c=n.n(a),u=n(416),l=n.n(u),d=n(425),p=n.n(d),h=n(418),f=n.n(h),v=n(419),b=n.n(v),m=n(417),g=n.n(m),w=n(410),y=n.n(w),k=(n(849),n(501),n(525),n(511),n(0)),S=n.n(k),C=(n(402),n(1645)),q=n.n(C),F=n(4088),N=n(1646),x=n.n(N),z=n(665),O=n(697),j=n(431),Q=n(933),R=n(473),M=n(451),B=n.n(M),E=n(906),I=n.n(E),P=n(448),T=n.n(P),D=n(446),H=n.n(D),L=n(883),V=n.n(L),A=n(442),J=n(753),G=n.n(J),U=n(1419),X=n(1404),_=n(1412),K=n(1409),W=n(1413),Y=n(1414),Z=n(1415),$=n(1417),ee=n(707),te=n(465),ne=n(2682),ie=n(612),oe=n(471),se=n(423),re=n(445),ae=(n(426),n(415),n(676));function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b()(this,n)}}var ue=function(e){f()(n,e);var t=ce(n);function n(){var e;c()(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),y()(p()(e),"clickHide",(function(){e.props.onHide()})),y()(p()(e),"handleClick",(function(){e.props.onSubmit(),e.props.onHide()})),e}return l()(n,[{key:"render",value:function(){return r()(ae.a,{onHide:this.clickHide,show:this.props.show,dialogClassName:"modal-w30"},void 0,r()(ae.a.Header,{closeButton:!0},void 0,r()(ae.a.Title,{as:"h4"},void 0,this.props.t("finish"),"?")),r()(ae.a.Body,{},void 0,this.props.t("finish-prompt")),r()(ae.a.Footer,{},void 0,r()(j.a,{variant:"secondary",onClick:this.clickHide},void 0,this.props.t("cancel")),r()(j.a,{variant:"warning",onClick:this.handleClick},void 0,this.props.t("confirm"))))}}]),n}(k.Component);ue.defaultProps={onHide:function(){},onSubmit:function(){}};var le=ue;n(2781),n(345);function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b()(this,n)}}Object(se.a)("Quiz");var pe=B()("isle:quiz"),he=Object(ie.a)("quiz"),fe={header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,10,0,0],italics:!0},boldTitle:{fontSize:14,margin:[0,5,0,5],bold:!0}};function ve(e){return H()(e)&&e.component}var be=r()("br",{}),me=function(e){f()(n,e);var t=de(n);function n(e){var i;c()(this,n),pe("Instantiating quiz component..."),i=t.call(this,e),y()(p()(i),"toggleFinishModal",(function(){i.setState({showFinishModal:!i.state.showFinishModal})})),y()(p()(i),"handleFinishClick",(function(){i.setState({counter:i.state.count},(function(){i.handleNextClick()}))})),y()(p()(i),"handleNextClick",(function(){for(var e=i.quizBody.getElementsByClassName("submit-button"),t=0;t<e.length;t++)e[t].click();pe("Display next question...");var n=i.state.questions[i.state.current],o=i.context;i.state.answered||o.log({id:n.props.id,type:oe.Rb,value:!0}),n.props&&n.props.id&&i.state.selectedConfidence&&o.log({id:n.props.id+"_confidence",type:oe.Qb,value:i.state.selectedConfidence}),i.props.onSubmit();var s={},r=i.state.counter;(r+=1)>=i.state.count?(pe("No further questions should be shown..."),s.finished=!0,i.props.onFinished()):(r===i.state.count-1&&(s.last=!0),s.current=i.sample()[0],pe("Selected question at index "+s.current)),s.answered=!1,s.selectedConfidence=null,s.answerSelected=!1,s.counter=r,i.setState(s)})),y()(p()(i),"markSelected",(function(){pe("Mark answer as selected..."),i.setState({answerSelected:!0})})),y()(p()(i),"handleSubmission",(function(e){var t,n,o=i.state.questions[i.state.current],s=i.state.answers.slice();if(o.props){if(T()(o.props.answers)&&void 0!==o.props.solution){t=o.props.answers[e].content;var r=o.props.solution;if(T()(r)){n="";for(var a=0;a<r.length;a++)n+=o.props.answers[r[a]],n+="; "}else n=o.props.answers[r].content}else if(T()(o.props.elements)){pe("Create answer and solution string for <MatchListQuestion />"),t="",n="";for(var c=0;c<o.props.elements.length;c++){for(var u=o.props.elements[c],l=0;l<e.length;l++){var d=e[l];if(d.a===u.a){t+="".concat(d.a,":").concat(d.b,"; ");break}}n+="".concat(u.a,":").concat(u.b,"; ")}}else if(T()(o.props.options)){t="",n="";for(var p=0;p<o.props.options.length;p++){var h=o.props.options[p],f=e[p];n+="".concat(h.text,"; "),t+="".concat(f.text,"; ")}}else t=e,n=o.props.solution,T()(n)&&(t=t.join(", "),n=n.join(", "));s[i.state.current]={question:o.props?o.props.question:null,answer:t,solution:n,counter:i.state.counter}}i.setState({answered:!0,answers:s})})),y()(p()(i),"handleConfidenceChange",(function(e){var t=e.target.value;pe("Choosing confidence: "+t);var n=i.state.confidences.slice();n[i.state.current]=t,i.setState({selectedConfidence:t,confidences:n})})),y()(p()(i),"toggleInstructorView",(function(){i.setState({showInstructorView:!i.state.showInstructorView})})),i.id=e.id||he(e);var o=e.questions;e.questions||(o=[]);var s=null;if(o.length>0){var r=G()(0,o.length,1);i.sample=I.a.factory(r,{size:1,mutate:!0,replace:!1}),s=i.sample()[0]}return i.state={answers:new Array(o.length),answered:!1,confidences:new Array(o.length),current:s,count:e.count||o.length,counter:0,finished:!1,answerSelected:!1,last:!1,selectedConfidence:null,showInstructorView:!1,showFinishModal:!1,questions:[],questionIDs:[]},i}return l()(n,[{key:"componentDidUpdate",value:function(e){if(pe("Component did update..."),this.props.count!==e.count||this.props.questions&&this.props.questions.length!==e.questions.length){pe("Resetting component...");var t=G()(0,this.props.questions.length,1);this.sample=I.a.factory(t,{size:1,mutate:!0}),this.setState({count:this.props.count||this.prop.questions.length})}}},{key:"downloadResponsesFactory",value:function(e){var t=this;return function(){var n={content:[{text:t.props.t("answer-for",{id:t.id}),style:"header",alignment:"center"}],styles:fe},i=t.context;V()(i.user)||n.content.push({text:"".concat(t.props.t("by")," ").concat(i.user.name," (").concat(i.user.email,")"),style:"author"});var o=new Date;n.content.push({text:"".concat(o.toLocaleDateString()," - ").concat(o.toLocaleTimeString()),style:"date"});for(var s=0;s<e.length;s++){var r=e[s],a=r.question,c=r.answer,u=r.solution,l=r.confidence;a=Object(A.isPrimitive)(a)?a:x()(a),c=Object(A.isPrimitive)(c)?c:x()(c),u=Object(A.isPrimitive)(u)?u:x()(u),n.content.push({text:a,style:"question"}),n.content.push({text:"".concat(t.props.t("answer"),":"),style:"boldTitle"}),n.content.push({text:c,style:{color:c===u?"#3c763d":"#d9534f",margin:[0,0,0,10]}}),l&&(n.content.push({text:"".concat(t.props.t("your-confidence"),":"),style:"boldTitle"}),n.content.push({text:l})),n.content.push({text:"".concat(t.props.t("solution"),":"),style:"boldTitle"}),n.content.push({text:Object(A.isPrimitive)(u)?u:x()(u)})}q.a.createPdf(n).download("responses.pdf")}}},{key:"renderScoreboard",value:function(){var e=this;if(pe("Rendering scoreboard..."),!this.props.provideFeedback)return r()("h3",{},void 0,this.props.t("quiz-finished"));for(var t=this.state.answers.slice(),n=0;n<t.length;n++)t[n]&&(t[n].confidence=this.state.confidences[n]);return t.sort((function(e,t){return e.counter>t.counter})),t=t.filter((function(e){return H()(e)})),r()("div",{},void 0,r()("p",{},void 0,this.props.duration?this.props.t("time-up"):this.props.t("quiz-finished"),this.props.t("summary-label"),":"),r()("table",{className:"table table-bordered"},void 0,r()("thead",{},void 0,r()("tr",{},void 0,r()("th",{},void 0,this.props.t("question")),r()("th",{},void 0,this.props.t("your-answer")),r()("th",{},void 0,this.props.t("solution")),this.props.confidence?r()("th",{},void 0,this.props.t("your-confidence")):null)),r()("tbody",{},void 0,t.map((function(t,n){var i;i=t.answer===t.solution?"quiz-right-answer":"quiz-wrong-answer";var o=t.question;ve(o)&&(o=Object(ne.a)(o));var s=t.answer;ve(s)&&(s=Object(ne.a)(s));var a=t.solution;return ve(a)&&(a=Object(ne.a)(a)),r()("tr",{className:i},n,r()("td",{},void 0,o),r()("td",{},void 0,s),r()("td",{},void 0,a),e.props.confidence?r()("td",{},void 0,t.confidence):null)})))),this.props.downloadButton?r()(j.a,{onClick:this.downloadResponsesFactory(t)},void 0,this.props.t("download-pdf")):null)}},{key:"renderQuestion",value:function(e,t){if(!e)return null;var n=e.props||{};switch(ve(n.question)&&(pe("Question property is an object, convert to JSX..."),n.question=Object(ne.a)(n.question)),e.component){case"Fragment":case"div":return Object(ne.a)(e);case"FreeTextQuestion":return S.a.createElement(X.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"MultipleChoiceQuestion":return S.a.createElement(_.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:"none"},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"MatchListQuestion":return S.a.createElement(K.a,o()({disableSubmitNotification:!0,feedback:!1,showSolution:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"NumberQuestion":return S.a.createElement(W.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"OrderQuestion":return S.a.createElement(Y.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"RangeQuestion":return S.a.createElement(Z.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"SelectQuestion":return S.a.createElement($.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));default:return S.a.createElement(e.type,o()({},e.props,n,{disableSubmitNotification:!0,feedback:!1,provideFeedback:!1,onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}))}}},{key:"renderConfidenceSurvey",value:function(){return this.props.confidence?r()(R.a,{className:"center",style:{width:"75%"}},void 0,r()(z.a,{className:"center"},void 0,r()(Q.a.Label,{},void 0,this.props.t("confidence-prompt")),be,r()(Q.a.Check,{type:"radio",label:this.props.t("guessed"),checked:"Guessed"===this.state.selectedConfidence,value:"Guessed",inline:!0,onClick:this.handleConfidenceChange})," ",r()(Q.a.Check,{type:"radio",label:this.props.t("somewhat-sure"),checked:"Somewhat sure"===this.state.selectedConfidence,value:"Somewhat sure",inline:!0,onClick:this.handleConfidenceChange})," ",r()(Q.a.Check,{type:"radio",label:this.props.t("confident"),checked:"Confident"===this.state.selectedConfidence,value:"Confident",inline:!0,onClick:this.handleConfidenceChange}))):null}},{key:"renderFooterNodes",value:function(e,t){var n,i=this;return e.props&&(n=e.props.id),n||(n="".concat(this.id,"-").concat(t)),S.a.Children.map(this.props.footerNodes,(function(e,t){return S.a.cloneElement(e,{id:"".concat(e.props.id,"-footer-").concat(n),key:"".concat(i.state.current,"-").concat(t)})}))}},{key:"render",value:function(){var e,t=this;if(pe("Rendering component..."),e=!this.state.finished&&(this.state.answered||this.state.answerSelected||this.props.skippable),this.state.showInstructorView)return r()(R.a,{className:"quiz"},void 0,r()(R.a.Header,{},void 0,r()("span",{},void 0,r()("h3",{style:{display:"inline-block"}},void 0,this.props.t("instructor-view")),r()(j.a,{variant:"secondary",style:{float:"right"},onClick:this.toggleInstructorView},void 0,this.props.t("close-instructor-view")))),r()(R.a.Body,{},void 0,this.state.questions.map((function(e,n){var i=t.state.questionIDs[n];return r()("div",{},n,r()("h3",{},void 0,t.props.t("question")," ",n+1,":"),t.renderQuestion(e,i),t.renderFooterNodes(e,n))}))),r()(j.a,{className:"quiz-button",variant:"secondary",onClick:this.toggleInstructorView},void 0,this.props.t("close-instructor-view")));var n=this.state.questions[this.state.current],i=this.state.questionIDs[this.state.current];return r()(k.Fragment,{},void 0,this.props.duration?r()(U.a,{invisible:!0,id:this.id,active:this.props.active,duration:this.props.duration,onTimeUp:function(){pe("Time is up..."),t.setState({finished:!0},(function(){t.props.onFinished()}))}}):null,r()(R.a,{className:"quiz"},void 0,r()(R.a.Header,{},void 0,this.state.finished?r()("h3",{},void 0,this.props.t("answer-summary")):r()("h3",{},void 0,this.props.t("question")," ",this.state.counter+1,"/",this.state.count)),r()(R.a.Body,{},void 0,S.a.createElement("div",{ref:function(e){t.quizBody=e}},this.state.finished?this.renderScoreboard():r()("span",{},this.state.current,this.renderQuestion(n,i)),this.state.finished?null:this.renderConfidenceSurvey(),n?this.renderFooterNodes(n):null,r()(O.a,{style:{float:"right"}},void 0,r()(ee.a,{owner:!0},void 0,r()(j.a,{className:"quiz-button",variant:"secondary",onClick:this.toggleInstructorView,style:{marginRight:10}},void 0,this.props.t("open-instructor-view"))),!this.props.showFinishButton&&!this.state.last||this.state.finished?null:r()(j.a,{style:{marginRight:10},className:"quiz-button",variant:"secondary",onClick:this.state.last?this.handleFinishClick:this.toggleFinishModal},void 0,this.props.finishLabel||this.props.t("finish-label")),e&&!this.state.last?r()(j.a,{className:"quiz-button",variant:"primary",onClick:this.handleNextClick,disabled:this.props.forceConfidence&&!this.state.selectedConfidence&&this.state.answerSelected},void 0,this.props.nextLabel||this.props.t("next-question")):null)))),r()(le,{show:this.state.showFinishModal,onSubmit:this.handleFinishClick,onHide:this.toggleFinishModal,t:this.props.t}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.questions&&e.questions.length!==t.questions.length){for(var n=e.questions.length,i=new Array(n),o=0;o<n;o++){var s=e.questions[o];s.props&&s.props.id?i[o]=s.props.id:i[o]="".concat(t.id,"-").concat(o)}return{questions:e.questions,questionIDs:i}}return null}}]),n}(k.Component);me.defaultProps={confidence:!1,forceConfidence:!1,count:null,active:!0,duration:null,skippable:!0,footerNodes:[],nextLabel:null,provideFeedback:!0,showFinishButton:!1,finishLabel:null,downloadButton:!0,onFinished:function(){},onSubmit:function(){}},me.contextType=te.a;t.default=Object(F.a)("Quiz")(Object(re.a)(me))},811:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0);function o(e){var t=Object(i.useRef)(null);return Object(i.useEffect)((function(){t.current=e})),t.current}}}]);