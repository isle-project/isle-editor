(self.webpackChunk=self.webpackChunk||[]).push([[2342],{956780:function(e,t,n){"use strict";var r=(0,n(844601).Z)((function(){return n.e(112).then(n.bind(n,198164))}));t.Z=r},812383:function(e,t,n){"use strict";var r=n(454530),i=n(202784),s=(n(213980),["children"]),a=function(e){var t=e.children,n=(0,r.Z)(e,s);return i.createElement("div",n,t)};a.defaultProps={className:"",style:{}},t.Z=a},912740:function(e,t,n){"use strict";var r=(0,n(844601).Z)((function(){return n.e(6131).then(n.bind(n,357459))}));t.Z=r},810035:function(e,t,n){"use strict";var r=(0,n(844601).Z)((function(){return Promise.all([n.e(532),n.e(4507)]).then(n.bind(n,149764))}));t.Z=r},496670:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ue}});n(382139),n(627476),n(95767),n(694882),n(298351);var r=n(858255),i=n(264659),s=n(904730),a=n(673989),o=n(175663),c=n(750591),l=n(575630),u=n(151119),p=(n(850110),n(898837),n(319371),n(202784)),d=(n(213980),n(198)),v=n(770561),f=n(188304),b=n(260952),m=n(911755),h=n.n(m),Z=n(588703),w=n.n(Z),y=n(309765),g=n(779572),k=n(409961),S=n.n(k),x=n(287013),C=n.n(x),N=n(812383),P=n(912740),E=n(956780),A=n(228856),O=n(172245),F=n(810035),q=n(741319),I=n(300198),R=n.n(I);var D=function(e){switch(e=R()(e)){case"zeroth":case"zero":case"0":return 0;case"first":case"one":case"1":return 1;case"second":case"two":case"2":return 2;case"third":case"three":case"3":return 3;case"fourth":case"four":case"4":return 4;case"fifth":case"five":case"5":return 5;case"sixth":case"six":case"6":return 6;case"sevent":case"seven":case"7":return 7;case"eighth":case"eight":case"8":return 8;case"ninth":case"nine":case"9":return 9;case"tenth":case"ten":case"10":return 10}},K=n(42111),z=n(312093),j=n(5140),Q=n(964909),L=n(432261),M=JSON.parse('[{"command":"selectAnswer","trigger":["choose","pick","take"],"description":"Select an answer","params":["no"],"regexp":["/(?:choose|pick|take) (?:the )?(?<no>[\\\\s\\\\S]*) answer/i","/(?:choose|pick|take) (?:[\\\\s\\\\S]*?)?answer (?:number )?(?<no>[\\\\s\\\\S]*)/i"]},{"command":"submitQuestion","trigger":["submit"],"description":"Submit answer"}]'),B=n(912860),T=n(435376),U=n(975249),G=n(68212),H=n(833022),J=n.n(H);var W=function(e){return J()(e)&&e.component},X=function(e){var t,n;!0===e.correct?(n="success",t="multiple-choice-answer-correct-popover"):!1===e.correct?(n="danger",t="multiple-choice-answer-incorrect-popover"):!0===e.solution&&(n="warning");var i=W(e.answerContent)?(0,G.Z)(e.answerContent):e.answerContent,s=(0,r.Z)(T.Z,{id:e.no,className:t},void 0,(0,r.Z)("strong",{},void 0,e.solution?"Correct answer":"Incorrect answer",e.answerExplanation?": ":""),e.answerExplanation);return e.disabled?(0,r.Z)(B.Z,{className:"multiple-choice-answer",variant:n,disabled:!0},void 0,i):e.submitted?(0,r.Z)(U.Z,{trigger:["click","hover"],placement:"top-end",overlay:s},void 0,(0,r.Z)(B.Z,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,onKeyPress:e.onAnswerSelected,variant:n,tabIndex:0,role:"button"},void 0,i)):(0,r.Z)(B.Z,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,onKeyPress:e.onAnswerSelected,active:e.active,tabIndex:0,role:"button"},void 0,i)};X.defaultProps={correct:null};var _=X,V=function(e){var t,n;!0===e.correct?(n="success",t="multiple-choice-answer-correct-popover"):!1===e.correct&&(n="danger",t="multiple-choice-answer-incorrect-popover");var i=W(e.answerContent)?(0,G.Z)(e.answerContent):e.answerContent;if(e.disabled)return(0,r.Z)(B.Z,{className:"multiple-choice-answer",variant:n,disabled:!0},void 0,i);if((0,g.isPrimitive)(e.correct)||e.isSolved){var s=(0,r.Z)(T.Z,{id:e.no,className:t},void 0,(0,r.Z)("strong",{},void 0,e.solution?"Correct answer":"Incorrect answer",e.answerExplanation?": ":""),e.answerExplanation);return(0,r.Z)(U.Z,{trigger:["click","hover"],placement:"top-end",overlay:s},void 0,(0,r.Z)(B.Z,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,onKeyPress:e.onAnswerSelected,variant:n,tabIndex:0,role:"button"},void 0,i))}return(0,r.Z)(B.Z,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,onKeyPress:e.onAnswerSelected,active:e.active,tabIndex:0,role:"button"},void 0,i)};V.defaultProps={correct:null};var Y=V,$=function(e){var t;(0,g.isPrimitive)(e.correct)&&(t="info");var n=W(e.answerContent)?(0,G.Z)(e.answerContent):e.answerContent;return e.disabled?(0,r.Z)(B.Z,{className:"multiple-choice-answer",variant:t,disabled:!0},void 0,n):(0,r.Z)(B.Z,{className:"multiple-choice-answer",variant:t,onClick:e.onAnswerSelected,onKeyPress:e.onAnswerSelected,active:e.active,tabIndex:0,role:"button"},void 0,n)};$.defaultProps={correct:null};var ee,te=$,ne=n(294565),re=function(e){var t=e.content;return(0,ne.isPrimitive)(t)&&(t=(0,r.Z)("label",{},void 0,t)),(0,r.Z)("span",{className:"question"},void 0,t,ee||(ee=(0,r.Z)("br",{})),(0,r.Z)("i",{style:{fontSize:"0.8rem"}},void 0,e.task,":"))};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var oe=h()("isle:multiple-choice-question"),ce=(0,K.Z)("multiple-choice-question"),le=function(e){(0,o.Z)(n,e);var t=ae(n);function n(e,s){var o;(0,i.Z)(this,n),o=t.call(this,e),(0,u.Z)((0,a.Z)(o),"logHint",(function(e){oe("Logging hint..."),o.context.log({id:o.id,type:j.kr,value:e})})),(0,u.Z)((0,a.Z)(o),"sendSubmitNotification",(function(e,t,n){var r,i=o.context,s=o.props.solution,a=!S()(s),c=a&&w()(s),l="success";"incremental"===o.props.provideFeedback&&a?e?r=o.props.t("answer-correct"):(l="error",r=0!==t&&c?n<s.length?o.props.t("answer-incorrect-incremental-missing"):n===s.length?o.props.t("answer-incorrect-incremental-equal"):o.props.t("answer-incorrect-incremental-extra"):o.props.t("answer-incorrect-incremental")):"full"===o.props.provideFeedback&&a?e?r=o.props.t("answer-correct"):(r=o.props.t("answer-incorrect-full"),function(e){for(var t=0;t<e.length;t++)if(e[t].explanation)return!0;return!1}(o.props.answers)&&(r+=o.props.t("answer-incorrect-explanations")),l="error"):r=o.props.t("answer-submitted-nofeedback"),i.addNotification({title:o.props.t("answer-submitted"),message:r,level:l})})),(0,u.Z)((0,a.Z)(o),"submitQuestion",(function(){var e=o.props.solution,t=S()(e),n=o.context,r="incremental"!==o.props.provideFeedback||t?new Array(o.props.answers.length):o.state.correct.slice();n.log({id:o.id,type:j.n5,value:o.state.active});var i=!1;if(w()(e)){for(var s=0;s<o.state.active.length;s++)!0===o.state.active[s]&&(C()(e,s)?r[s]=!0:r[s]=!1);for(var a=0,c=0,l=0;l<r.length;l++)(0,g.isPrimitive)(r[l])&&(a+=1,r[l]&&(c+=1));i=!(c<e.length||a>e.length);var u=new Array(o.props.answers.length);o.props.disableSubmitNotification||o.sendSubmitNotification(i,c,a),o.setState({correct:r,submitted:!0,isSolved:i,active:u})}else{for(var p=0;p<r.length;p++)o.state.active===p&&(p===e||t?(r[p]=!0,i=!0):r[p]=!1);o.props.disableSubmitNotification||o.sendSubmitNotification(i),o.setState({correct:r,submitted:!0,active:null,isSolved:i})}o.props.onSubmit(o.state.active)})),(0,u.Z)((0,a.Z)(o),"checkDisabledStatus",(function(){var e=w()(o.props.solution)&&w()(o.state.active);if(o.props.disabled)return!0;if(!e&&!(0,y.isPrimitive)(o.state.active))return!0;if(S()(o.props.solution))return!1;switch(o.props.provideFeedback){case"full":return e?o.state.submitted:o.state.submitted||!o.state.answerSelected;case"incremental":return!!S()(o.state.active)||!!o.state.submitted&&o.state.isSolved}return!1})),(0,u.Z)((0,a.Z)(o),"triggerFocusEvent",(function(){var e=o.context;e.log({type:Q.gz,value:e.user.email,id:o.id,noSave:!0},"owners")})),(0,u.Z)((0,a.Z)(o),"renderAnswerOptionsMultiple",(function(e,t){if("none"===o.props.provideFeedback||S()(o.props.solution))return(0,r.Z)(te,{answerContent:e.content,active:o.state.active[t],correct:o.state.correct[t],disabled:o.props.disabled,onAnswerSelected:function(){o.triggerFocusEvent();var e=o.state.active.slice();e[t]=!e[t],o.setState({active:e}),o.props.onChange(e)}},"".concat(e.content,"-").concat(t));var n=C()(o.props.solution,t),i={key:"".concat(e.content,"-").concat(t),no:t,answerContent:e.content,answerExplanation:e.explanation,active:o.state.active[t],correct:o.state.correct[t],disabled:o.props.disabled,submitted:o.state.submitted,solution:n,isSolved:o.state.isSolved,onAnswerSelected:function(){if(o.triggerFocusEvent(),!o.state.submitted||"incremental"===o.props.provideFeedback){var e=o.state.active.slice(),n=o.state.correct.slice();!1===o.state.correct[t]?n[t]=void 0:e[t]=!e[t],o.setState({correct:n,active:e}),o.props.onChange(e)}}};return"full"===o.props.provideFeedback?p.createElement(_,i):p.createElement(Y,i)})),(0,u.Z)((0,a.Z)(o),"renderAnswerOptionsSingle",(function(e,t){if("none"===o.props.provideFeedback||S()(o.props.solution))return(0,r.Z)(te,{answerContent:e.content,active:o.state.active===t,correct:o.state.correct[t],disabled:o.props.disabled,onAnswerSelected:function(){o.triggerFocusEvent(),o.setState({active:t,answerSelected:!0}),o.props.onChange(t)}},t);var n=o.props.solution===t,i={key:"".concat(e.content,"-").concat(t),no:t,answerContent:e.content,answerExplanation:e.explanation,active:o.state.active===t,correct:o.state.correct[t],disabled:o.props.disabled,submitted:o.state.submitted,solution:n,isSolved:o.state.isSolved,onAnswerSelected:function(){if(o.triggerFocusEvent(),!o.state.submitted||"incremental"===o.props.provideFeedback){var e=o.state.correct.slice();!1===o.state.correct[t]&&(e[t]=void 0),o.setState({active:t,correct:e,answerSelected:!0}),o.props.onChange(t)}}};return"full"===o.props.provideFeedback?p.createElement(_,i):p.createElement(Y,i)})),o.id=e.id||ce(e);var c=s.currentUserActions,l=(0,z.Z)(c,o.id,j.n5);return o.state={correct:new Array(e.answers.length),answerSelected:!1,question:e.question,isSolved:!1},e.displaySolution?(o.state.submitted=!0,o.state.active=o.props.solution):w()(l)||(0,y.isPrimitive)(l)?(o.state.active=l,o.state.submitted=!0):(o.state.active=w()(o.props.solution)?new Array(e.answers.length):null,o.state.submitted=!1),o}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.displaySolution&&this.submitQuestion();var t=this.context;t&&(this.unsubscribe=t.subscribe((function(t,n){if(t===Q.u){var r=n[e.id];if(w()(r)&&(r=r.filter((function(e){return e.type===j.n5}))).length>0){var i=r[0].value;e.setState({active:i,submitted:"none"===e.props.provideFeedback})}}})))}},{key:"componentDidUpdate",value:function(e){if(e.solution!==this.props.solution||e.answers.length!==this.props.answers.length){var t=w()(this.props.solution)?new Array(this.props.answers.length):null;this.setState({active:t})}}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"selectAnswer",value:function(e){oe("Parse input: ".concat(e)),e=D(e)-1,oe("Select answer at position ".concat(e)),this.setState({active:e,answerSelected:!0})}},{key:"renderSubmitButton",value:function(){var e,t=this.context;if(this.props.until&&t.startTime>this.props.until)return(0,r.Z)("span",{className:"title",style:{marginLeft:4}},void 0,this.props.t("question-closed"));if(this.state.submitted)switch(this.props.provideFeedback){case"none":e=this.props.t("resubmit");break;case"full":default:e=this.props.t("submitted");break;case"incremental":e=this.props.t("submit")}else e=this.props.t("submit");return(0,r.Z)(v.Z,{className:"submit-button",size:"small",onClick:this.submitQuestion,disabled:this.checkDisabledStatus(),block:!0},void 0,e)}},{key:"render",value:function(){var e=this.props,t=e.answers,n=e.hints,i=e.chat,s=e.hintPlacement,a=e.question,o=w()(this.props.solution)&&w()(this.state.active),c=n.length,l={};return this.props.feedback?(l.width="calc(100%-60px)",l.display="inline-block"):l.width="100%",(0,r.Z)(b.Z,{id:this.id,className:"multiple-choice-question-container",style:se({},this.props.style)},void 0,(0,r.Z)(b.Z.Body,{style:l},void 0,(0,r.Z)(re,{content:a,task:o?this.props.t("chose-all-apply"):this.props.t("select-answer")}),(0,r.Z)(f.Z,{},void 0,o?t.map(this.renderAnswerOptionsMultiple):t.map(this.renderAnswerOptionsSingle)),(0,r.Z)("div",{className:"multiple-choice-question-toolbar"},void 0,this.renderSubmitButton(),c>0?(0,r.Z)(E.Z,{size:"small",onClick:this.logHint,hints:n,placement:s}):null,i&&this.id?(0,r.Z)("div",{style:{display:"inline-block"}},void 0,(0,r.Z)(P.Z,{size:"small",for:this.id})):null,(0,r.Z)(O.Z,{reference:this,id:this.props.voiceID,commands:M})),this.id?(0,r.Z)("div",{style:{marginTop:"6px"}},void 0,(0,r.Z)(N.Z,{buttonLabel:this.props.t("answers"),id:this.id,data:{type:"factor",levels:this.props.answers.map((function(e){return e.content})),question:this.props.question,solution:this.props.solution},info:j.n5,points:this.props.points}),this.props.feedback?(0,r.Z)(A.Z,{id:this.id+"_feedback"}):null):null,(0,r.Z)(F.Z,{for:this.id,points:this.props.points})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.question!==t.question?{submitted:!1,question:e.question}:null}}]),n}(p.Component);le.defaultProps={question:"",solution:null,hints:[],hintPlacement:"bottom",feedback:!0,disabled:!1,displaySolution:!1,chat:!1,provideFeedback:"incremental",disableSubmitNotification:!1,voiceID:null,until:null,points:10,style:{},onChange:function(){},onSubmit:function(){}},le.contextType=q.Z;var ue=(0,d.Z)("questions/multiple-choice")((0,L.W)(le))},312093:function(e,t,n){"use strict";n(898837);var r=n(588703),i=n.n(r),s=n(830324),a=n.n(s);t.Z=function(e,t,n){if(a()(e)){var r=e[t];if(i()(r)&&(r=r.filter((function(e){return e.type===n}))).length>0)return r[0].value}return null}},68212:function(e,t,n){"use strict";var r=n(202784),i=n(911755),s=n.n(i),a=n(588703),o=n.n(a),c=n(833022),l=n.n(c),u=n(224008),p=n.n(u),d=n(997354),v=n(600078),f=n(41460),b=n(530729),m=n(751879),h=n(492981),Z=n(155436),w=n(18110),y=n(213022),g=s()("isle:convert-json");t.Z=function e(t){g("Convert JSON ".concat(t.component," object to React element..."));var n=p()(t.children);if(o()(n))for(var i=0;i<n.length;i++){var s=n[i];l()(s)&&(n[i]=e(s))}else l()(n)&&(n=e(n));var a=t.component;switch(a){case"Fragment":a=r.Fragment;break;case"TeX":a=d.Z;break;case"FreeTextQuestion":a=v.Z;break;case"MultipleChoiceMatrix":a=b.Z;break;case"MultipleChoiceQuestion":a=f.Z;break;case"MatchListQuestion":a=m.Z;break;case"NumberQuestion":a=h.Z;break;case"OrderQuestion":a=Z.Z;break;case"RangeQuestion":a=w.Z;break;case"SelectQuestion":a=y.Z;break;default:a=t.component}var c=t.props||{};return(0,r.createElement)(a,c,n)}},418919:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(202784);function i(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},658092:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(e,t){return r(e.querySelectorAll(t))}},172643:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(658092),a=n(202784),o=n(418919),c=n(225879),l=n(62207),u=n(942932),p=n(395269),d=["as","onSelect","activeKey","role","onKeyDown"],v=function(){},f=a.forwardRef((function(e,t){var n,f,b=e.as,m=void 0===b?"ul":b,h=e.onSelect,Z=e.activeKey,w=e.role,y=e.onKeyDown,g=(0,i.Z)(e,d),k=(0,o.Z)(),S=(0,a.useRef)(!1),x=(0,a.useContext)(u.Z),C=(0,a.useContext)(p.Z);C&&(w=w||"tablist",Z=C.activeKey,n=C.getControlledId,f=C.getControllerId);var N=(0,a.useRef)(null),P=function(e){var t=N.current;if(!t)return null;var n=(0,s.Z)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var i=n.indexOf(r);if(-1===i)return null;var a=i+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},E=function(e,t){null!=e&&(h&&h(e,t),x&&x(e,t))};(0,a.useEffect)((function(){if(N.current&&S.current){var e=N.current.querySelector("[data-rb-event-key].active");e&&e.focus()}S.current=!1}));var A=(0,c.Z)(t,N);return a.createElement(u.Z.Provider,{value:E},a.createElement(l.Z.Provider,{value:{role:w,activeKey:(0,u.h)(Z),getControlledId:n||v,getControllerId:f||v}},a.createElement(m,(0,r.Z)({},g,{onKeyDown:function(e){var t;switch(y&&y(e),e.key){case"ArrowLeft":case"ArrowUp":t=P(-1);break;case"ArrowRight":case"ArrowDown":t=P(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),S.current=!0,k())},ref:A,role:w}))))}));t.Z=f},492784:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(72779),a=n.n(s),o=n(202784),c=n(806252),l=(n(645982),n(62207)),u=n(942932),p=["active","className","eventKey","onSelect","onClick","as"],d=o.forwardRef((function(e,t){var n=e.active,s=e.className,d=e.eventKey,v=e.onSelect,f=e.onClick,b=e.as,m=(0,i.Z)(e,p),h=(0,u.h)(d,m.href),Z=(0,o.useContext)(u.Z),w=(0,o.useContext)(l.Z),y=n;if(w){m.role||"tablist"!==w.role||(m.role="tab");var g=w.getControllerId(h),k=w.getControlledId(h);m["data-rb-event-key"]=h,m.id=g||m.id,m["aria-controls"]=k||m["aria-controls"],y=null==n&&null!=h?w.activeKey===h:n}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=y);var S=(0,c.Z)((function(e){f&&f(e),null!=h&&(v&&v(h,e),Z&&Z(h,e))}));return o.createElement(b,(0,r.Z)({},m,{ref:t,onClick:S,className:a()(s,y&&"active")}))}));d.defaultProps={disabled:!1},t.Z=d},770561:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(72779),a=n.n(s),o=n(202784),c=n(429658),l=n(482695),u=["bsPrefix","variant","size","active","className","block","type","as"],p=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.variant,p=e.size,d=e.active,v=e.className,f=e.block,b=e.type,m=e.as,h=(0,i.Z)(e,u),Z=(0,c.vE)(n,"btn"),w=a()(v,Z,d&&"active",s&&Z+"-"+s,f&&Z+"-block",p&&Z+"-"+p);if(h.href)return o.createElement(l.Z,(0,r.Z)({},h,{as:m,ref:t,className:a()(w,h.disabled&&"disabled")}));t&&(h.ref=t),b?h.type=b:m||(h.type="button");var y=m||"button";return o.createElement(y,(0,r.Z)({},h,{className:w}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=p},188304:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(72779),a=n.n(s),o=n(202784),c=(n(645982),n(229277)),l=n(429658),u=n(172643),p=n(912860),d=["className","bsPrefix","variant","horizontal","as"],v={variant:void 0,horizontal:void 0},f=o.forwardRef((function(e,t){var n,s=(0,c.Ch)(e,{activeKey:"onSelect"}),p=s.className,v=s.bsPrefix,f=s.variant,b=s.horizontal,m=s.as,h=void 0===m?"div":m,Z=(0,i.Z)(s,d),w=(0,l.vE)(v,"list-group");return n=b?!0===b?"horizontal":"horizontal-"+b:null,o.createElement(u.Z,(0,r.Z)({ref:t},Z,{as:h,className:a()(p,w,f&&w+"-"+f,n&&w+"-"+n)}))}));f.defaultProps=v,f.displayName="ListGroup",f.Item=p.Z,t.Z=f},912860:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(72779),a=n.n(s),o=n(202784),c=n(492784),l=n(429658),u=["bsPrefix","active","disabled","className","variant","action","as","onClick"],p={variant:void 0,active:!1,disabled:!1},d=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.active,p=e.disabled,d=e.className,v=e.variant,f=e.action,b=e.as,m=e.onClick,h=(0,i.Z)(e,u);n=(0,l.vE)(n,"list-group-item");var Z=(0,o.useCallback)((function(e){if(p)return e.preventDefault(),void e.stopPropagation();m&&m(e)}),[p,m]);return p&&void 0===h.tabIndex&&(h.tabIndex=-1,h["aria-disabled"]=!0),o.createElement(c.Z,(0,r.Z)({ref:t},h,{as:b||(f?h.href?"a":"button":"div"),onClick:Z,className:a()(d,n,s&&"active",p&&"disabled",v&&n+"-"+v,f&&n+"-action")}))}));d.defaultProps=p,d.displayName="ListGroupItem",t.Z=d},62207:function(e,t,n){"use strict";var r=n(202784).createContext(null);r.displayName="NavContext",t.Z=r},435376:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(72779),a=n.n(s),o=n(202784),c=(n(840368),n(429658)),l=n(203858),u=n(175891),p=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"],d=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.placement,l=e.className,d=e.style,v=e.children,f=e.content,b=e.arrowProps,m=(e.popper,e.show,(0,i.Z)(e,p)),h=(0,c.vE)(n,"popover"),Z=((null==s?void 0:s.split("-"))||[])[0];return o.createElement("div",(0,r.Z)({ref:t,role:"tooltip",style:d,"x-placement":Z,className:a()(l,h,Z&&"bs-popover-"+Z)},m),o.createElement("div",(0,r.Z)({className:"arrow"},b)),f?o.createElement(u.Z,null,v):v)}));d.defaultProps={placement:"right"},d.Title=l.Z,d.Content=u.Z,t.Z=d},175891:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(72779),a=n.n(s),o=n(202784),c=n(429658),l=["as","bsPrefix","className","children"],u=o.forwardRef((function(e,t){var n=e.as,s=void 0===n?"div":n,u=e.bsPrefix,p=e.className,d=e.children,v=(0,i.Z)(e,l);return u=(0,c.vE)(u,"popover-body"),o.createElement(s,(0,r.Z)({ref:t},v,{className:a()(p,u)}),d)}));t.Z=u},203858:function(e,t,n){"use strict";var r=n(607560),i=n(998283),s=n(72779),a=n.n(s),o=n(202784),c=n(429658),l=["as","bsPrefix","className","children"],u=o.forwardRef((function(e,t){var n=e.as,s=void 0===n?"div":n,u=e.bsPrefix,p=e.className,d=e.children,v=(0,i.Z)(e,l);return u=(0,c.vE)(u,"popover-header"),o.createElement(s,(0,r.Z)({ref:t},v,{className:a()(u,p)}),d)}));t.Z=u},942932:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(202784).createContext(null),i=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.Z=r},395269:function(e,t,n){"use strict";var r=n(202784).createContext(null);t.Z=r}}]);