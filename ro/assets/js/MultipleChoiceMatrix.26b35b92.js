"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21338],{956260:function(e,t,s){var i=s(202784),r=s(213980),a=s.n(r),n=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,s)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const h=e=>{const t=e,{children:s}=t,r=((e,t)=>{var s={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&c.call(e,i)&&(s[i]=e[i]);return s})(t,["children"]);return i.createElement("div",((e,t)=>{for(var s in t||(t={}))l.call(t,s)&&p(e,s,t[s]);if(o)for(var s of o(t))c.call(t,s)&&p(e,s,t[s]);return e})({},r),s)};h.defaultProps={className:"",style:{}},h.propTypes={className:a().string,style:a().object},t.Z=h},215229:function(e,t,s){s.r(t);var i=s(202784),r=s(213980),a=s.n(r),n=s(690299),o=s.n(n),l=s(498614),c=s(293367),p=s.n(c),h=s(294565),u=s(770561),m=s(790817),d=s(889969),b=s(458264),f=s(312594),y=s(172888),g=s(380827),w=s(956260),v=s(925188),E=s(123103),k=s(691334),N=s(741082),Z=s(487890),x=Object.defineProperty,S=(e,t,s)=>(((e,t,s)=>{t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s);const C=o()("isle:multiple-choice-matrix");class O extends i.Component{constructor(e){super(e),S(this,"handleCheckboxClick",(e=>{if("INPUT"===p()(e.target.tagName)){const t=e.target.checked,s=e.target.dataset.pos.split("-"),i=this.state.active;i[s[0]][s[1]]=t,this.setState({active:i}),this.props.onChange(i)}})),S(this,"handleRadioClick",(e=>{if("INPUT"===p()(e.target.tagName)){const t=e.target.checked,s=e.target.dataset.pos.split("-"),i=this.state.active;i[s[0]]=new Array(this.props.answers.length),i[s[0]][s[1]]=t,this.setState({active:i}),this.props.onChange(i)}})),S(this,"sendSubmitNotification",(()=>{const e=this.context;this.state.submitted?e.addNotification({title:this.props.t("answer-re-submitted"),message:this.props.t("successfully-re-submitted-your-answer"),level:"success"}):e.addNotification({title:this.props.t("answer-submitted"),message:this.props.t("successfully-submitted-your-answer"),level:"success"})})),S(this,"handleSubmit",(()=>{C("Submit answer..."),this.props.disableSubmitNotification||this.sendSubmitNotification(),this.props.logAction(k.gY,JSON.stringify(this.state.active)),this.setState({submitted:!0}),this.props.onSubmit(this.state.active)})),S(this,"toggleSolution",(()=>{console.log("TODO: Toggle solution:"),console.log(this.props.solution)}));const t=new Array(e.questions.length);for(let s=0;s<t.length;s++)t[s]=new Array(e.answers.length);this.state={submitted:!1,active:t}}renderAnswerHeader(){const e=this.props.answers.length;let t;return t=e>7?3:e>4?4:6,i.createElement(b.Z,{className:"multiple-choice-matrix-question-header"},i.createElement(f.Z,{sm:t}),this.props.answers.map(((e,t)=>i.createElement(f.Z,{key:t},i.createElement(d.Z.Label,null,(0,h.isPrimitive)(e)?i.createElement(v.Z,{raw:e}):e)))))}renderAnswerButtons(e){const t=this.props.answers.length,s=new Array(t);for(let r=0;r<t;r++){const t=this.props.answers[r];s[r]=i.createElement(f.Z,{key:r},i.createElement(d.Z.Check,{name:`radios-${e}`,"data-pos":`${e}-${r}`,type:this.props.type,id:`${e}-${r}`,label:i.createElement("span",{className:"multiple-choice-matrix-answer-text"},(0,h.isPrimitive)(t)?i.createElement(v.Z,{raw:t}):t)}))}return i.createElement(i.Fragment,null,s)}renderQuestionRows(){const e=this.props.answers.length;let t;return t=e>7?3:e>4?4:6,this.props.questions.map(((e,s)=>i.createElement(b.Z,{key:s},i.createElement(f.Z,{sm:t},i.createElement(d.Z.Label,{column:!0},(0,h.isPrimitive)(e)?i.createElement(v.Z,{raw:e}):e)),this.renderAnswerButtons(s))))}render(){const e=this.props.solution?i.createElement(g.Z,{onClick:this.toggleSolution,disabled:!this.state.submitted}):null;return i.createElement(m.Z,{className:"multiple-choice-matrix"},this.props.title?i.createElement(m.Z.Header,null,i.createElement(m.Z.Title,{as:"h5"},this.props.title)):null,i.createElement(m.Z.Body,null,i.createElement("i",{style:{fontSize:"0.8rem"}},"checkbox"===this.props.type?this.props.t("each-row-click-check-boxes-which-apply"):this.props.t("each-row-pick-answer-by-clicking"),"."),i.createElement(d.Z,{style:{marginTop:"12px"},onClick:"checkbox"===this.props.type?this.handleCheckboxClick:this.handleRadioClick},this.renderAnswerHeader(),this.renderQuestionRows()),i.createElement("div",{className:"multiple-choice-matrix-controls"},e,i.createElement(u.Z,{className:"submit-button",variant:"primary",size:"sm",onClick:this.handleSubmit,style:{marginTop:"10px"}},this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),i.createElement(w.Z,{id:this.props.id,data:{type:"matrix",rows:this.props.questions,cols:this.props.answers,solution:this.props.solution},info:"MULTIPLE_CHOICE_MATRIX_SUBMISSION"}),this.props.id&&this.props.feedback?i.createElement(y.Z,{id:this.props.id+"_feedback"}):null)))}}O.propTypes={questions:a().array.isRequired,answers:a().array.isRequired,title:a().oneOfType([a().string,a().node]),solution:a().arrayOf([a().array]),type:a().oneOf(["radio","checkbox"]),disableSubmitNotification:a().bool,onChange:a().func,onSubmit:a().func},O.defaultProps={title:null,solution:null,type:"radio",disableSubmitNotification:!1,onChange(){},onSubmit(){}},O.contextType=E.Z,t.default=(0,Z.D)("MULTIPLE_CHOICE_MATRIX")((0,l.Zh)("questions/multiple-choice")((0,N.W)(O)))},380827:function(e,t,s){const i=(0,s(217431).Z)((()=>s.e(78905).then(s.bind(s,960226))));t.Z=i},770561:function(e,t,s){var i=s(72779),r=s.n(i),a=s(202784),n=s(247830),o=s(429658),l=s(552322);const c=a.forwardRef((({as:e,bsPrefix:t,variant:s,size:i,active:a,className:c,...p},h)=>{const u=(0,o.vE)(t,"btn"),[m,{tagName:d}]=(0,n.FT)({tagName:e,...p}),b=d;return(0,l.jsx)(b,{...m,...p,ref:h,className:r()(c,u,a&&"active",s&&`${u}-${s}`,i&&`${u}-${i}`,p.href&&p.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},458264:function(e,t,s){var i=s(72779),r=s.n(i),a=s(202784),n=s(429658),o=s(552322);const l=a.forwardRef((({bsPrefix:e,className:t,as:s="div",...i},a)=>{const l=(0,n.vE)(e,"row"),c=(0,n.pi)(),p=(0,n.zG)(),h=`${l}-cols`,u=[];return c.forEach((e=>{const t=i[e];let s;delete i[e],null!=t&&"object"==typeof t?({cols:s}=t):s=t;const r=e!==p?`-${e}`:"";null!=s&&u.push(`${h}${r}-${s}`)})),(0,o.jsx)(s,{ref:a,...i,className:r()(t,l,...u)})}));l.displayName="Row",t.Z=l}}]);