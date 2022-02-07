"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8117],{134656:function(e,t,s){var n=(0,s(708717).Z)((function(){return s.e(112).then(s.bind(s,643549))}));t.Z=n},569904:function(e,t,s){var n=s(867855),i=s(202784),a=s(213980),r=s.n(a),o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=function(e,t,s){return t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s},d=function(e){var t=e,s=t.children,a=function(e,t){var s={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&l)for(var a,r=(0,n.Z)(l(e));!(a=r()).done;)i=a.value,t.indexOf(i)<0&&p.call(e,i)&&(s[i]=e[i]);return s}(t,["children"]);return i.createElement("div",function(e,t){for(var s in t||(t={}))c.call(t,s)&&u(e,s,t[s]);if(l)for(var i,a=(0,n.Z)(l(t));!(i=a()).done;)s=i.value,p.call(t,s)&&u(e,s,t[s]);return e}({},a),s)};d.defaultProps={className:"",style:{}},d.propTypes={className:r().string,style:r().object},t.Z=d},615697:function(e,t,s){var n=(0,s(708717).Z)((function(){return s.e(6131).then(s.bind(s,102149))}));t.Z=n},870717:function(e,t,s){var n=(0,s(708717).Z)((function(){return Promise.all([s.e(3312),s.e(4507)]).then(s.bind(s,552767))}));t.Z=n},878545:function(e,t,s){s.r(t);var n=s(497326),i=s(894578),a=s(867855),r=s(202784),o=s(213980),l=s.n(o),c=s(198),p=s(770561),u=s(23836),d=s(26266),h=s(10863),m=s(790817),f=s(552770),b=s.n(f),v=s(871199),y=s.n(v),g=s(864892),Z=s(134656),E=s(569904),S=s(615697),w=s(269891),O=s(870717),N=s(24551),k=s(267682),C=s(382617),q=s(615558),P=Object.defineProperty,j=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,x=function(e,t,s){return t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s},M=function(e,t){for(var s in t||(t={}))T.call(t,s)&&x(e,s,t[s]);if(j)for(var n,i=(0,a.Z)(j(t));!(n=i()).done;){s=n.value;I.call(t,s)&&x(e,s,t[s])}return e},F=function(e,t,s){return x(e,"symbol"!=typeof t?t+"":t,s),s},$=(0,N.Z)("select-question"),z=function(e){function t(t){var s;return s=e.call(this,t)||this,F((0,n.Z)(s),"handleChange",(function(e){var t=e.target.value;s.setState({value:t,answerState:"secondary"},(function(){s.props.onChange(t)}))})),F((0,n.Z)(s),"handleSubmit",(function(){var e,t,n=s.context;!y()(s.props.solution)&&s.props.provideFeedback?(t=(e=s.props.solution===b()(s.props.options,s.state.value))?"success":"danger",e?n.addNotification({title:s.props.t("correct"),message:s.props.successMsg,level:"success"}):n.addNotification({title:s.props.t("incorrect"),message:s.props.failureMsg,level:"error"})):(t="info",n.addNotification({title:s.state.submitted?s.props.t("answer-resubmitted"):s.props.t("answer-submitted"),message:s.state.submitted?s.props.t("resubmit-message"):s.props.t("submit-message"),level:"info"})),n.log({id:s.id,type:C.aF,value:s.state.value}),s.props.onSubmit(s.state.value,e),s.setState({answerState:t,submitted:!0})})),s.id=t.id||$(t),s.state={value:t.options[t.preselected],answerState:"secondary"},s}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props.hints.length,t="success"===this.state.answerState,s="danger"===this.state.answerState,n=r.createElement(E.Z,{id:this.id,info:"SELECT_QUESTION_SUBMISSION",data:{type:"factor",levels:this.props.options,question:this.props.question,solution:this.props.solution},inline:this.props.inline,points:this.props.points});return this.props.inline?r.createElement("span",{id:this.id,style:M({},this.props.style)},r.createElement("span",{style:{display:"inherit"}},r.createElement(d.Z,{value:this.state.value,as:"select",placeholder:"select",onChange:this.handleChange,style:{display:"inline",width:"max-content"},isInvalid:s,isValid:t,disabled:t},this.props.options.map((function(e,t){return r.createElement("option",{key:t,value:e},e)}))),r.createElement(p.Z,{"aria-label":this.props.t("submit"),size:"small",variant:"outline-"+this.state.answerState,disabled:t,style:{display:"inline",marginTop:-3},onClick:this.handleSubmit},r.createElement("i",{className:"fa fa-check-square"}))),n):r.createElement(m.Z,{id:this.id,className:"select-question",style:this.props.style,body:!0},r.createElement(u.Z,null,r.createElement(h.Z,{controlId:this.id+"-form"},this.props.question?r.createElement("label",null,this.props.question):null,r.createElement(d.Z,{value:this.state.value,as:"select",placeholder:"select",onChange:this.handleChange,isInvalid:"danger"===this.state.answerState,isValid:t,disabled:t},this.props.options.map((function(e,t){return r.createElement("option",{className:"select-question-option",key:t,value:e},e)}))))),r.createElement("div",{className:"select-question-toolbar"},r.createElement(g.Z,{className:"submit-button",variant:"primary",disabled:t,size:"sm",onClick:this.handleSubmit},this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),e>0?r.createElement(Z.Z,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement}):null,this.props.chat?r.createElement(S.Z,{for:this.id}):null),n,this.props.feedback?r.createElement(w.Z,{id:this.id+"_feedback"}):null,r.createElement(O.Z,{for:this.id,points:this.props.points}))},t}(r.Component);z.defaultProps={question:"",solution:null,preselected:0,inline:!1,hints:[],hintPlacement:"top",feedback:!0,chat:!1,provideFeedback:!0,failureMsg:"Not quite, try again!",successMsg:"That's the correct answer!",points:10,style:{},onChange:function(){},onSubmit:function(){}},z.propTypes={question:l().oneOfType([l().string,l().node]),options:l().array.isRequired,solution:l().number,preselected:l().number,inline:l().bool,hintPlacement:l().string,hints:l().arrayOf(l().oneOfType([l().string,l().node])),feedback:l().bool,chat:l().bool,provideFeedback:l().bool,failureMsg:l().string,successMsg:l().string,points:l().number,style:l().object,onChange:l().func,onSubmit:l().func},z.contextType=k.Z,t.default=(0,c.Z)("questions/select")((0,q.W)(z))},770561:function(e,t,s){var n=s(72779),i=s.n(n),a=s(202784),r=s(247830),o=s(429658),l=s(552322);const c=a.forwardRef((({as:e,bsPrefix:t,variant:s,size:n,active:a,className:c,...p},u)=>{const d=(0,o.vE)(t,"btn"),[h,{tagName:m}]=(0,r.FT)({tagName:e,...p}),f=m;return(0,l.jsx)(f,{...h,...p,ref:u,className:i()(c,d,a&&"active",s&&`${d}-${s}`,n&&`${d}-${n}`,p.href&&p.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c}}]);