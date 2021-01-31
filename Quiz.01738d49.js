(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{2265:function(e,t,n){"use strict";var i=n(0),o=n(421),s=n.n(o),a=n(433),r=n.n(a),c=n(459),u=n.n(c),l=n(632),d=n.n(l),h=n(544),p=n(1540),f=n(1543),v=n(1831),m=n(1541),b=n(1544),g=n(1545),w=n(1546),k=n(1547),y=s()("isle:convert-json");t.a=function e(t){y("Convert JSON ".concat(t.component," object to React element..."));var n=d()(t.children);if(r()(n))for(var o=0;o<n.length;o++){var s=n[o];u()(s)&&(n[o]=e(s))}else u()(n)&&(n=e(n));var a=t.component;switch(a){case"Fragment":a=i.Fragment;break;case"TeX":a=h.a;break;case"FreeTextQuestion":a=p.a;break;case"MultipleChoiceMatrix":a=v.a;break;case"MultipleChoiceQuestion":a=f.a;break;case"MatchListQuestion":a=m.a;break;case"NumberQuestion":a=b.a;break;case"OrderQuestion":a=g.a;break;case"RangeQuestion":a=w.a;break;case"SelectQuestion":a=k.a;break;default:a=t.component}var c=t.props||{};return Object(i.createElement)(a,c,n)}},6789:function(e,t,n){"use strict";n.r(t);n(382),n(369),n(385);var i=n(586),o=n.n(i),s=n(367),a=n.n(s),r=(n(502),n(373)),c=n.n(r),u=n(375),l=n.n(u),d=n(390),h=n.n(d),p=n(379),f=n.n(p),v=n(380),m=n.n(v),b=n(377),g=n.n(b),w=n(371),k=n.n(w),y=n(0),S=n.n(y),C=(n(359),n(1694)),q=n.n(C),F=n(6674),N=n(1561),x=n.n(N),z=n(775),Q=n(630),R=n(396),j=n(1205),O=n(454),M=n(421),D=n.n(M),I=n(1133),E=n.n(I),T=n(433),B=n.n(T),H=n(459),L=n.n(H),P=n(1101),V=n.n(P),A=n(417),J=n(750),G=n.n(J),U=n(1548),X=n(1540),_=n(1543),K=n(1541),W=n(1544),Y=n(1545),Z=n(1546),$=n(1547),ee=n(776),te=n(441),ne=n(2265),ie=n(645),oe=n(443),se=n(392),ae=n(711);function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return m()(this,n)}}var ce=function(e){f()(n,e);var t=re(n);function n(){var e;c()(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),k()(h()(e),"clickHide",(function(){e.props.onHide()})),k()(h()(e),"handleClick",(function(){e.props.onSubmit(),e.props.onHide()})),e}return l()(n,[{key:"render",value:function(){return a()(ae.a,{onHide:this.clickHide,show:this.props.show,dialogClassName:"modal-w30"},void 0,a()(ae.a.Header,{closeButton:!0},void 0,a()(ae.a.Title,{as:"h4"},void 0,this.props.t("finish"),"?")),a()(ae.a.Body,{},void 0,this.props.t("finish-prompt")),a()(ae.a.Footer,{},void 0,a()(R.a,{variant:"secondary",onClick:this.clickHide},void 0,this.props.t("cancel")),a()(R.a,{variant:"warning",onClick:this.handleClick},void 0,this.props.t("confirm"))))}}]),n}(y.Component);ce.defaultProps={onHide:function(){},onSubmit:function(){}};var ue=ce;n(1994),n(304);function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return m()(this,n)}}Object(se.a)("Quiz");var de=D()("isle:quiz"),he=Object(ie.a)("quiz"),pe={header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,10,0,0],italics:!0},boldTitle:{fontSize:14,margin:[0,5,0,5],bold:!0}};function fe(e){return L()(e)&&e.component}var ve=a()("br",{}),me=function(e){f()(n,e);var t=le(n);function n(e){var i;c()(this,n),de("Instantiating quiz component..."),i=t.call(this,e),k()(h()(i),"toggleFinishModal",(function(){i.setState({showFinishModal:!i.state.showFinishModal})})),k()(h()(i),"handleFinishClick",(function(){i.setState({counter:i.state.count},(function(){i.handleNextClick()}))})),k()(h()(i),"handleNextClick",(function(){for(var e=i.quizBody.getElementsByClassName("submit-button"),t=0;t<e.length;t++)e[t].click();de("Display next question...");var n=i.state.questions[i.state.current],o=i.context;i.state.answered||o.log({id:n.props.id,type:oe.Rb,value:!0}),n.props&&n.props.id&&i.state.selectedConfidence&&o.log({id:n.props.id+"_confidence",type:oe.Qb,value:i.state.selectedConfidence}),i.props.onSubmit();var s={},a=i.state.counter;(a+=1)>=i.state.count?(de("No further questions should be shown..."),s.finished=!0,i.props.onFinished()):(a===i.state.count-1&&(s.last=!0),s.current=i.sample()[0],de("Selected question at index "+s.current)),s.answered=!1,s.selectedConfidence=null,s.answerSelected=!1,s.counter=a,i.setState(s)})),k()(h()(i),"markSelected",(function(){de("Mark answer as selected..."),i.setState({answerSelected:!0})})),k()(h()(i),"handleSubmission",(function(e){var t,n,o=i.state.questions[i.state.current],s=i.state.answers.slice();if(o.props){if(B()(o.props.answers)&&void 0!==o.props.solution){t=o.props.answers[e].content;var a=o.props.solution;if(B()(a)){n="";for(var r=0;r<a.length;r++)n+=o.props.answers[a[r]],n+="; "}else n=o.props.answers[a].content}else if(B()(o.props.elements)){de("Create answer and solution string for <MatchListQuestion />"),t="",n="";for(var c=0;c<o.props.elements.length;c++){for(var u=o.props.elements[c],l=0;l<e.length;l++){var d=e[l];if(d.a===u.a){t+="".concat(d.a,":").concat(d.b,"; ");break}}n+="".concat(u.a,":").concat(u.b,"; ")}}else if(B()(o.props.options)){t="",n="";for(var h=0;h<o.props.options.length;h++){var p=o.props.options[h],f=e[h];n+="".concat(p.text,"; "),t+="".concat(f.text,"; ")}}else t=e,n=o.props.solution,B()(n)&&(t=t.join(", "),n=n.join(", "));s[i.state.current]={question:o.props?o.props.question:null,answer:t,solution:n,counter:i.state.counter}}i.setState({answered:!0,answers:s})})),k()(h()(i),"handleConfidenceChange",(function(e){var t=e.target.value;de("Choosing confidence: "+t);var n=i.state.confidences.slice();n[i.state.current]=t,i.setState({selectedConfidence:t,confidences:n})})),k()(h()(i),"toggleInstructorView",(function(){i.setState({showInstructorView:!i.state.showInstructorView})})),i.id=e.id||he(e);var o=e.questions;e.questions||(o=[]);var s=null;if(o.length>0){var a=G()(0,o.length,1);i.sample=E.a.factory(a,{size:1,mutate:!0,replace:!1}),s=i.sample()[0]}return i.state={answers:new Array(o.length),answered:!1,confidences:new Array(o.length),current:s,count:e.count||o.length,counter:0,finished:!1,answerSelected:!1,last:!1,selectedConfidence:null,showInstructorView:!1,showFinishModal:!1,questions:[],questionIDs:[]},i}return l()(n,[{key:"componentDidUpdate",value:function(e){if(de("Component did update..."),this.props.count!==e.count||this.props.questions&&this.props.questions.length!==e.questions.length){de("Resetting component...");var t=G()(0,this.props.questions.length,1);this.sample=E.a.factory(t,{size:1,mutate:!0}),this.setState({count:this.props.count||this.prop.questions.length})}}},{key:"downloadResponsesFactory",value:function(e){var t=this;return function(){var n={content:[{text:t.props.t("answer-for",{id:t.id}),style:"header",alignment:"center"}],styles:pe},i=t.context;V()(i.user)||n.content.push({text:"".concat(t.props.t("by")," ").concat(i.user.name," (").concat(i.user.email,")"),style:"author"});var o=new Date;n.content.push({text:"".concat(o.toLocaleDateString()," - ").concat(o.toLocaleTimeString()),style:"date"});for(var s=0;s<e.length;s++){var a=e[s],r=a.question,c=a.answer,u=a.solution,l=a.confidence;r=Object(A.isPrimitive)(r)?r:x()(r),c=Object(A.isPrimitive)(c)?c:x()(c),u=Object(A.isPrimitive)(u)?u:x()(u),n.content.push({text:r,style:"question"}),n.content.push({text:"".concat(t.props.t("answer"),":"),style:"boldTitle"}),n.content.push({text:c,style:{color:c===u?"#3c763d":"#d9534f",margin:[0,0,0,10]}}),l&&(n.content.push({text:"".concat(t.props.t("your-confidence"),":"),style:"boldTitle"}),n.content.push({text:l})),n.content.push({text:"".concat(t.props.t("solution"),":"),style:"boldTitle"}),n.content.push({text:Object(A.isPrimitive)(u)?u:x()(u)})}q.a.createPdf(n).download("responses.pdf")}}},{key:"renderScoreboard",value:function(){var e=this;if(de("Rendering scoreboard..."),!this.props.provideFeedback)return a()("h3",{},void 0,this.props.t("quiz-finished"));for(var t=this.state.answers.slice(),n=0;n<t.length;n++)t[n]&&(t[n].confidence=this.state.confidences[n]);return t.sort((function(e,t){return e.counter>t.counter})),t=t.filter((function(e){return L()(e)})),a()("div",{},void 0,a()("p",{},void 0,this.props.duration?this.props.t("time-up"):this.props.t("quiz-finished"),this.props.t("summary-label"),":"),a()("table",{className:"table table-bordered"},void 0,a()("thead",{},void 0,a()("tr",{},void 0,a()("th",{},void 0,this.props.t("question")),a()("th",{},void 0,this.props.t("your-answer")),a()("th",{},void 0,this.props.t("solution")),this.props.confidence?a()("th",{},void 0,this.props.t("your-confidence")):null)),a()("tbody",{},void 0,t.map((function(t,n){var i;i=t.answer===t.solution?"quiz-right-answer":"quiz-wrong-answer";var o=t.question;fe(o)&&(o=Object(ne.a)(o));var s=t.answer;fe(s)&&(s=Object(ne.a)(s));var r=t.solution;return fe(r)&&(r=Object(ne.a)(r)),a()("tr",{className:i},n,a()("td",{},void 0,o),a()("td",{},void 0,s),a()("td",{},void 0,r),e.props.confidence?a()("td",{},void 0,t.confidence):null)})))),this.props.downloadButton?a()(R.a,{onClick:this.downloadResponsesFactory(t)},void 0,this.props.t("download-pdf")):null)}},{key:"renderQuestion",value:function(e,t){if(!e)return null;var n=e.props||{};switch(fe(n.question)&&(de("Question property is an object, convert to JSX..."),n.question=Object(ne.a)(n.question)),e.component){case"Fragment":case"div":return Object(ne.a)(e);case"FreeTextQuestion":return S.a.createElement(X.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"MultipleChoiceQuestion":return S.a.createElement(_.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:"none"},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"MatchListQuestion":return S.a.createElement(K.a,o()({disableSubmitNotification:!0,feedback:!1,showSolution:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"NumberQuestion":return S.a.createElement(W.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"OrderQuestion":return S.a.createElement(Y.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"RangeQuestion":return S.a.createElement(Z.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"SelectQuestion":return S.a.createElement($.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));default:return S.a.createElement(e.type,o()({},e.props,n,{disableSubmitNotification:!0,feedback:!1,provideFeedback:!1,onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}))}}},{key:"renderConfidenceSurvey",value:function(){return this.props.confidence?a()(O.a,{className:"center",style:{width:"75%"}},void 0,a()(z.a,{className:"center"},void 0,a()(j.a.Label,{},void 0,this.props.t("confidence-prompt")),ve,a()(j.a.Check,{type:"radio",label:this.props.t("guessed"),checked:"Guessed"===this.state.selectedConfidence,value:"Guessed",inline:!0,onClick:this.handleConfidenceChange})," ",a()(j.a.Check,{type:"radio",label:this.props.t("somewhat-sure"),checked:"Somewhat sure"===this.state.selectedConfidence,value:"Somewhat sure",inline:!0,onClick:this.handleConfidenceChange})," ",a()(j.a.Check,{type:"radio",label:this.props.t("confident"),checked:"Confident"===this.state.selectedConfidence,value:"Confident",inline:!0,onClick:this.handleConfidenceChange}))):null}},{key:"renderFooterNodes",value:function(e,t){var n,i=this;return e.props&&(n=e.props.id),n||(n="".concat(this.id,"-").concat(t)),S.a.Children.map(this.props.footerNodes,(function(e,t){return S.a.cloneElement(e,{id:"".concat(e.props.id,"-footer-").concat(n),key:"".concat(i.state.current,"-").concat(t)})}))}},{key:"render",value:function(){var e,t=this;if(de("Rendering component..."),e=!this.state.finished&&(this.state.answered||this.state.answerSelected||this.props.skippable),this.state.showInstructorView)return a()(O.a,{className:"quiz"},void 0,a()(O.a.Header,{},void 0,a()("span",{},void 0,a()("h3",{style:{display:"inline-block"}},void 0,this.props.t("instructor-view")),a()(R.a,{variant:"secondary",style:{float:"right"},onClick:this.toggleInstructorView},void 0,this.props.t("close-instructor-view")))),a()(O.a.Body,{},void 0,this.state.questions.map((function(e,n){var i=t.state.questionIDs[n];return a()("div",{},n,a()("h3",{},void 0,t.props.t("question")," ",n+1,":"),t.renderQuestion(e,i),t.renderFooterNodes(e,n))}))),a()(R.a,{className:"quiz-button",variant:"secondary",onClick:this.toggleInstructorView},void 0,this.props.t("close-instructor-view")));var n=this.state.questions[this.state.current],i=this.state.questionIDs[this.state.current];return a()(y.Fragment,{},void 0,this.props.duration?a()(U.a,{invisible:!0,id:this.id,active:this.props.active,duration:this.props.duration,onTimeUp:function(){de("Time is up..."),t.setState({finished:!0},(function(){t.props.onFinished()}))}}):null,a()(O.a,{className:"quiz"},void 0,a()(O.a.Header,{},void 0,this.state.finished?a()("h3",{},void 0,this.props.t("answer-summary")):a()("h3",{},void 0,this.props.t("question")," ",this.state.counter+1,"/",this.state.count)),a()(O.a.Body,{},void 0,S.a.createElement("div",{ref:function(e){t.quizBody=e}},this.state.finished?this.renderScoreboard():a()("span",{},this.state.current,this.renderQuestion(n,i)),this.state.finished?null:this.renderConfidenceSurvey(),n?this.renderFooterNodes(n):null,a()(Q.a,{style:{float:"right"}},void 0,a()(ee.a,{owner:!0},void 0,a()(R.a,{className:"quiz-button",variant:"secondary",onClick:this.toggleInstructorView,style:{marginRight:10}},void 0,this.props.t("open-instructor-view"))),!this.props.showFinishButton&&!this.state.last||this.state.finished?null:a()(R.a,{style:{marginRight:10},className:"quiz-button",variant:"secondary",onClick:this.state.last?this.handleFinishClick:this.toggleFinishModal},void 0,this.props.finishLabel||this.props.t("finish-label")),e&&!this.state.last?a()(R.a,{className:"quiz-button",variant:"primary",onClick:this.handleNextClick,disabled:this.props.forceConfidence&&!this.state.selectedConfidence&&this.state.answerSelected},void 0,this.props.nextLabel||this.props.t("next-question")):null)))),a()(ue,{show:this.state.showFinishModal,onSubmit:this.handleFinishClick,onHide:this.toggleFinishModal,t:this.props.t}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.questions&&e.questions.length!==t.questions.length){for(var n=e.questions.length,i=new Array(n),o=0;o<n;o++){var s=e.questions[o];s.props&&s.props.id?i[o]=s.props.id:i[o]="".concat(t.id,"-").concat(o)}return{questions:e.questions,questionIDs:i}}return null}}]),n}(y.Component);me.defaultProps={confidence:!1,forceConfidence:!1,count:null,active:!0,duration:null,skippable:!0,footerNodes:[],nextLabel:null,provideFeedback:!0,showFinishButton:!1,finishLabel:null,downloadButton:!0,onFinished:function(){},onSubmit:function(){}},me.contextType=te.a;t.default=Object(F.a)("Quiz")(me)}}]);