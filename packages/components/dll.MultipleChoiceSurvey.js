/*! For license information please see dll.MultipleChoiceSurvey.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[90],{2850:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(1),l=n.n(s),i=n(1051),u=function(e){return e.disabled?r.a.createElement(i.default,null,e.answerContent):r.a.createElement(i.default,{onClick:e.onAnswerSelected,active:e.active},e.answerContent)};u.propTypes={active:l.a.bool.isRequired,answerContent:l.a.oneOfType([l.a.element,l.a.string]).isRequired,disabled:l.a.bool.isRequired,onAnswerSelected:l.a.func.isRequired},t.default=u},2851:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n.n(a),s=n(2852),l={insert:"head",singleton:!1};r()(s.default,l);t.default=s.default.locals||{}},2852:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a)()(!1);r.push([e.i,".multiple-choice-survey {\n\tborder: 1px solid rgba(92, 92, 92, 0.6);\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 4px rgba(92, 92, 92, 0.5);\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n\tmargin-bottom: 12px;\n\tmax-width: 600px;\n\tmargin-left: -20px;\n}\n",""]),t.default=r},893:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),s=n(13),l=n.n(s),i=n(10),u=n.n(i),o=n(15),c=n.n(o),d=n(16),m=n.n(d),p=n(8),f=n.n(p),b=n(7),h=n.n(b),y=n(0),w=n.n(y),v=n(1),E=n.n(v),S=n(76),g=n(68),x=n(961),C=n(983),A=n(1162),R=n(87),O=n(36),k=n.n(O),q=n(1292),M=n.n(q),_=n(1483),T=n.n(_),I=n(63),N=n(368),U=n(143),D=n(146),L=n(158),P=n(37),Y=n(201),B=n(2850);n(2851);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var j=k()("isle:multiple-choice-survey"),F=Object(I.default)("multiple-choice-survey"),H=function(e){c()(n,e);var t=J(n);function n(e){var a;r()(this,n),a=t.call(this,e),h()(u()(a),"submitQuestion",(function(){var e=a.context;e.log({id:a.id,type:Y.MULTIPLE_CHOICE_SURVEY_SUBMISSION,value:a.state.active,anonymous:a.props.anonymous},"members"),a.props.allowMultipleAnswers||a.setState({submitted:!0}),e.addNotification({title:"Submitted",message:"Your answer has been submitted.",level:"success"}),a.props.onSubmit(a.state.active)})),h()(u()(a),"onData",(function(e){j("MultipleChoiceSurvey is receiving data: "+JSON.stringify(e));var t,n=T()(e),r=n.map((function(e){return{x:a.props.answers[e[0]],y:e[1]}}));t=w.a.createElement("table",{className:"table table-bordered"},w.a.createElement("tr",null,w.a.createElement("th",null,"Category"),w.a.createElement("th",null,"Count"),w.a.createElement("th",null,"Relative Frequency")),n.map((function(e,t){return w.a.createElement("tr",{key:t},e.map((function(e,n){return 0===n?e=a.props.answers[e]:2===n&&(e=e.toFixed(3)),w.a.createElement("td",{key:"".concat(t,":").concat(n)},e)})))}))),a.setState({data:r,freqTable:t})})),h()(u()(a),"renderAnswerOptionsSingle",(function(e,t){return w.a.createElement(B.default,{key:t,no:t,answerContent:e,active:a.state.active===t,submitted:a.state.submitted,onAnswerSelected:function(){a.state.submitted||a.setState({active:t,answerSelected:!0})}})})),h()(u()(a),"renderAnswerOptionsMultiple",(function(e,t){return w.a.createElement(B.default,{key:e,no:t,answerContent:e,active:a.state.active[t],submitted:a.state.submitted,onAnswerSelected:function(){if(!a.state.submitted){var e=a.state.active.slice();e[t]=!e[t],a.setState({active:e})}}})}));var s=e.multipleAnswers?new Array(e.answers.length):null;return a.id=e.id||F(e),a.state={data:[],submitted:!1,active:s,answerSelected:!1},a}return l()(n,[{key:"renderChart",value:function(){return M()(this.state.data)?w.a.createElement("h3",null,"No responses yet"):w.a.createElement(N.default,{data:[{x:this.state.data.map((function(e){return e.x})),y:this.state.data.map((function(e){return e.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var e,t=this.props,n=t.answers,a=t.id,r=t.multipleAnswers,s=t.question;return e=r?this.state.submitted:this.state.submitted||!this.state.answerSelected,w.a.createElement(U.default,{user:!0,banner:w.a.createElement("h2",null,"Please sign in...")},w.a.createElement(R.default,{id:this.id,style:this.props.style},w.a.createElement(R.default.Body,{style:{overflowY:"auto"}},w.a.createElement(C.default,null,w.a.createElement(x.default,null,w.a.createElement(g.default,{md:6},w.a.createElement(R.default,{body:!0,className:"multiple-choice-survey"},w.a.createElement("p",null,w.a.createElement("label",null,s)),r?w.a.createElement("span",null,"You may select multiple answers"):null,w.a.createElement(A.default,{fill:!0},r?n.map(this.renderAnswerOptionsMultiple):n.map(this.renderAnswerOptionsSingle)),w.a.createElement(S.default,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:e},this.state.submitted?"Submitted":"Submit"))),w.a.createElement(g.default,{md:6},w.a.createElement(L.default,{for:[a],onData:this.onData}),this.renderChart(),w.a.createElement("p",null,this.state.freqTable)))),w.a.createElement(D.default,{buttonLabel:"Responses",id:a,data:{type:"factor",levels:this.props.answers},info:Y.MULTIPLE_CHOICE_SURVEY_SUBMISSION}))))}}]),n}(y.Component);H.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,answers:[],multipleAnswers:!1,style:{},onSubmit:function(){}},H.propTypes={question:E.a.oneOfType([E.a.string,E.a.node]),allowMultipleAnswers:E.a.bool,anonymous:E.a.bool,answers:E.a.array,multipleAnswers:E.a.bool,style:E.a.object,onSubmit:E.a.func},H.contextType=P.default,t.default=H}}]);