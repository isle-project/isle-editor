(self.webpackChunk=self.webpackChunk||[]).push([[1338],{812383:function(t,e,i){"use strict";var s=i(454530),r=i(202784),n=(i(213980),function(t){var e=t.children,i=(0,s.Z)(t,["children"]);return r.createElement("div",i,e)});n.defaultProps={className:"",style:{}},e.Z=n},877046:function(t,e,i){"use strict";i.r(e);i(382139);var s=i(858255),r=i(264659),n=i(904730),a=i(673989),o=i(175663),c=i(750591),l=i(575630),u=i(151119),p=(i(751876),i(319371),i(202784)),d=(i(213980),i(911755)),h=i.n(d),Z=i(198),f=i(640391),m=i.n(f),v=i(671655),b=i(770561),y=i(260952),w=i(398781),k=i(312594),g=i(228856),N=i(744902),x=i(812383),S=i(592864),C=i(741319),P=i(5140),R=i(432261);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=(0,l.Z)(t);if(e){var r=(0,l.Z)(this).constructor;i=Reflect.construct(s,arguments,r)}else i=s.apply(this,arguments);return(0,c.Z)(this,i)}}var T=h()("isle:multiple-choice-matrix"),B=function(t){(0,o.Z)(i,t);var e=A(i);function i(t){var s;(0,r.Z)(this,i),s=e.call(this,t),(0,u.Z)((0,a.Z)(s),"handleCheckboxClick",(function(t){if("INPUT"===m()(t.target.tagName)){var e=t.target.checked,i=t.target.dataset.pos.split("-"),r=s.state.active;r[i[0]][i[1]]=e,s.setState({active:r}),s.props.onChange(r)}})),(0,u.Z)((0,a.Z)(s),"handleRadioClick",(function(t){if("INPUT"===m()(t.target.tagName)){var e=t.target.checked,i=t.target.dataset.pos.split("-"),r=s.state.active;r[i[0]]=new Array(s.props.answers.length),r[i[0]][i[1]]=e,s.setState({active:r}),s.props.onChange(r)}})),(0,u.Z)((0,a.Z)(s),"sendSubmitNotification",(function(){var t=s.context;s.state.submitted?t.addNotification({title:s.props.t("answer-re-submitted"),message:s.props.t("successfully-re-submitted-your-answer"),level:"success"}):t.addNotification({title:s.props.t("answer-submitted"),message:s.props.t("successfully-submitted-your-answer"),level:"success"})})),(0,u.Z)((0,a.Z)(s),"handleSubmit",(function(){var t=s.context;T("Submit answer..."),s.props.disableSubmitNotification||s.sendSubmitNotification(),s.props.id&&t.log({id:s.props.id,type:P.P1,value:JSON.stringify(s.state.active)}),s.setState({submitted:!0}),s.props.onSubmit(s.state.active)})),(0,u.Z)((0,a.Z)(s),"toggleSolution",(function(){}));for(var n=new Array(t.questions.length),o=0;o<n.length;o++)n[o]=new Array(t.answers.length);return s.state={submitted:!1,active:n},s}return(0,n.Z)(i,[{key:"renderAnswerHeader",value:function(){var t,e=this.props.answers.length;return t=e>7?3:e>4?4:6,(0,s.Z)(w.Z.Row,{className:"multiple-choice-matrix-question-header"},void 0,(0,s.Z)(k.Z,{sm:t}),this.props.answers.map((function(t,e){return(0,s.Z)(k.Z,{},e,(0,s.Z)(w.Z.Label,{},void 0,(0,v.isPrimitive)(t)?(0,s.Z)(S.Z,{raw:t}):t))})))}},{key:"renderAnswerButtons",value:function(t){for(var e,i=this.props.answers.length,r=new Array(i),n=0;n<i;n++){var a=this.props.answers[n];r[n]=(0,s.Z)(k.Z,{},n,(0,s.Z)(w.Z.Check,{name:"radios-".concat(t),"data-pos":"".concat(t,"-").concat(n),type:this.props.type,id:"".concat(t,"-").concat(n),label:(0,s.Z)("span",{className:"multiple-choice-matrix-answer-text"},void 0,(0,v.isPrimitive)(a)?e||(e=(0,s.Z)(S.Z,{raw:a})):a)}))}return(0,s.Z)(p.Fragment,{},void 0,r)}},{key:"renderQuestionRows",value:function(){var t,e=this,i=this.props.answers.length;return t=i>7?3:i>4?4:6,this.props.questions.map((function(i,r){return(0,s.Z)(w.Z.Row,{},r,(0,s.Z)(k.Z,{sm:t},void 0,(0,s.Z)(w.Z.Label,{column:!0},void 0,(0,v.isPrimitive)(i)?(0,s.Z)(S.Z,{raw:i}):i)),e.renderAnswerButtons(r))}))}},{key:"render",value:function(){var t=this.props.solution?(0,s.Z)(N.Z,{onClick:this.toggleSolution,disabled:!this.state.submitted}):null;return(0,s.Z)(y.Z,{className:"multiple-choice-matrix"},void 0,this.props.title?(0,s.Z)(y.Z.Header,{},void 0,(0,s.Z)(y.Z.Title,{as:"h5"},void 0,this.props.title)):null,(0,s.Z)(y.Z.Body,{},void 0,(0,s.Z)("i",{style:{fontSize:"0.8rem"}},void 0,"checkbox"===this.props.type?this.props.t("each-row-click-check-boxes-which-apply"):this.props.t("each-row-pick-answer-by-clicking"),"."),(0,s.Z)(w.Z,{style:{marginTop:"12px"},onClick:"checkbox"===this.props.type?this.handleCheckboxClick:this.handleRadioClick},void 0,this.renderAnswerHeader(),this.renderQuestionRows()),(0,s.Z)("div",{className:"multiple-choice-matrix-controls"},void 0,t,(0,s.Z)(b.Z,{className:"submit-button",variant:"primary",size:"sm",onClick:this.handleSubmit,style:{marginTop:"10px"}},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),(0,s.Z)(x.Z,{id:this.props.id,data:{type:"matrix",rows:this.props.questions,cols:this.props.answers,solution:this.props.solution},info:"MULTIPLE_CHOICE_MATRIX_SUBMISSION"}),this.props.id&&this.props.feedback?(0,s.Z)(g.Z,{id:this.props.id+"_feedback"}):null)))}}]),i}(p.Component);B.defaultProps={title:null,solution:null,type:"radio",disableSubmitNotification:!1,onChange:function(){},onSubmit:function(){}},B.contextType=C.Z,e.default=(0,Z.Z)("questions/multiple-choice")((0,R.W)(B))},744902:function(t,e,i){"use strict";var s=(0,i(844601).Z)((function(){return i.e(8905).then(i.bind(i,912358))}));e.Z=s},770561:function(t,e,i){"use strict";var s=i(607560),r=i(998283),n=i(72779),a=i.n(n),o=i(202784),c=i(429658),l=i(482695),u=o.forwardRef((function(t,e){var i=t.bsPrefix,n=t.variant,u=t.size,p=t.active,d=t.className,h=t.block,Z=t.type,f=t.as,m=(0,r.Z)(t,["bsPrefix","variant","size","active","className","block","type","as"]),v=(0,c.vE)(i,"btn"),b=a()(d,v,p&&"active",n&&v+"-"+n,h&&v+"-block",u&&v+"-"+u);if(m.href)return o.createElement(l.Z,(0,s.Z)({},m,{as:f,ref:e,className:a()(b,m.disabled&&"disabled")}));e&&(m.ref=e),Z?m.type=Z:f||(m.type="button");var y=f||"button";return o.createElement(y,(0,s.Z)({},m,{className:b}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=u}}]);