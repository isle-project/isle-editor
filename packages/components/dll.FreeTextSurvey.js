/*! For license information please see dll.FreeTextSurvey.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[47],{2561:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a.n(n),l=a(2562),s={insert:"head",singleton:!1};r()(l.default,s);t.default=l.default.locals||{}},2562:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a.n(n)()(!1);r.push([e.i,".free-text-survey {\n\tborder: 1px solid rgba(92, 92, 92, 0.6);\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 4px rgba(92, 92, 92, 0.5);\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n\tmargin-bottom: 12px;\n\tmax-width: 600px;\n\tmargin-left: -20px;\n}\n",""]),t.default=r},848:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),l=a(13),s=a.n(l),u=a(10),i=a.n(u),o=a(15),c=a.n(o),d=a(16),f=a.n(d),m=a(8),p=a.n(m),h=a(7),b=a.n(h),v=a(0),y=a.n(v),E=a(1),w=a.n(E),g=a(76),x=a(87),S=a(983),N=a(68),T=a(961),R=a(2560),k=a(368),_=a(36),q=a.n(_),C=a(1292),D=a.n(C),M=a(1483),O=a.n(M),Y=a(1290),A=a.n(Y),B=a(1485),I=a.n(B),P=a(63),U=a(223),F=a(143),J=a(146),Q=a(158),j=a(37),V=a(201);a(2561);function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}var z=q()("isle:free-text-survey"),L=Object(P.default)("free-text-survey");var G=function(e){c()(a,e);var t=X(a);function a(e){var n;return r()(this,a),n=t.call(this,e),b()(i()(n),"submitQuestion",(function(){var e=n.context,t=function(e){e=A()(e);for(var t=I()(e),a=0;a<R.length;a++)for(var n=0;n<t.length;n++)if(t[n]===R[a])return R[a];return null}(n.state.value);t?e.addNotification({title:"Action required",message:"Your answer contains an offensive word: ".concat(t,". Please remove."),level:"warning"}):(e.log({id:n.id,type:V.TEXT_SURVEY_SUBMISSION,value:n.state.value,anonymous:n.props.anonymous},"members"),n.setState({submitted:!0}),e.addNotification({title:"Submitted",message:"Your answer has been submitted.",level:"success"}),n.props.onSubmit(n.state.value))})),b()(i()(n),"onData",(function(e){z("FreeTextQuestion is receiving data: "+JSON.stringify(e));var t,a=O()(e),r=a.map((function(e){return{x:e[0],y:e[1]}}));t=y.a.createElement("table",{className:"table table-bordered"},y.a.createElement("tr",null,y.a.createElement("th",null,"Category"),y.a.createElement("th",null,"Count"),y.a.createElement("th",null,"Relative Frequency")),a.map((function(e,t){return y.a.createElement("tr",{key:t},e.map((function(e,t){return 2===t&&(e=e.toFixed(3)),y.a.createElement("td",{key:t},e)})))}))),n.setState({data:r,freqTable:t})})),n.id=e.id||L(e),n.state={data:[],submitted:!1,value:null},n}return s()(a,[{key:"renderChart",value:function(){return D()(this.state.data)?y.a.createElement("h3",null,"No responses yet"):y.a.createElement(k.default,{data:[{x:this.state.data.map((function(e){return e.x})),y:this.state.data.map((function(e){return e.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var e=this,t=this.props,a=this.state.submitted&&!t.allowMultipleAnswers;return y.a.createElement(F.default,{user:!0,banner:y.a.createElement("h2",null,"Please sign in...")},y.a.createElement(x.default,{id:this.id,className:this.props.className,style:this.props.style},y.a.createElement(x.default.Body,{style:{overflowY:"auto"}},y.a.createElement(S.default,null,y.a.createElement(T.default,null,y.a.createElement(N.default,{md:6},y.a.createElement(x.default,{className:"free-text-survey",body:!0},y.a.createElement("label",null,t.question),y.a.createElement(U.default,{value:this.state.value,inline:!0,disabled:a,onChange:function(t){e.setState({value:t})},rows:this.props.rows}),y.a.createElement(g.default,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:a},a?"Submitted":"Submit"))),y.a.createElement(N.default,{md:6},y.a.createElement(Q.default,{for:[this.id],onData:this.onData}),this.renderChart(),this.state.freqTable))),y.a.createElement(J.default,{buttonLabel:"Responses",id:this.id,info:V.TEXT_SURVEY_SUBMISSION}))))}}]),a}(v.Component);G.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,rows:4,className:"",style:{},onSubmit:function(){}},G.propTypes={question:w.a.oneOfType([w.a.string,w.a.node]),allowMultipleAnswers:w.a.bool,anonymous:w.a.bool,rows:w.a.number,className:w.a.string,style:w.a.object,onSubmit:w.a.func},G.contextType=j.default,t.default=G}}]);