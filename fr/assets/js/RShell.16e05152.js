(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1571:function(t,e,n){"use strict";var i=n(448),r=n.n(i);e.a=function(t,e,n){var i=n.config.rshell;i&&i.libraries&&(t=t.concat(i.libraries));var o=function(t){return t.map((function(t){return"library("+t+");"})).join(" ")}(t);return i&&i.global&&(o+=i.global+"\n"),e=r()(e)?e.join("\n"):e,o+=e+="\n"}},517:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return i(t.querySelectorAll(e))}},6076:function(t,e,n){!function(t){"use strict";t.registerHelper("wordChars","r",/[\w.]/),t.defineMode("r",(function(e){function n(t){for(var e={},n=0;n<t.length;++n)e[t[n]]=!0;return e}var i=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],r=["list","quote","bquote","eval","return","call","parse","deparse"],o=["if","else","repeat","while","function","for","in","next","break"],s=["if","else","repeat","while","function","for"];t.registerHelper("hintWords","r",i.concat(r,o));var a,l=n(i),u=n(r),c=n(o),p=n(s),d=/[+\-*\/^<>=!&|~$:]/;function h(t,e){a=null;var n=t.next();if("#"==n)return t.skipToEnd(),"comment";if("0"==n&&t.eat("x"))return t.eatWhile(/[\da-f]/i),"number";if("."==n&&t.eat(/\d/))return t.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(n))return t.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==n||'"'==n)return e.tokenize=f(n),"string";if("`"==n)return t.match(/[^`]+`/),"variable-3";if("."==n&&t.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(n)&&"_"!=n){t.eatWhile(/[\w\.]/);var i=t.current();return l.propertyIsEnumerable(i)?"atom":c.propertyIsEnumerable(i)?(p.propertyIsEnumerable(i)&&!t.match(/\s*if(\s+|$)/,!1)&&(a="block"),"keyword"):u.propertyIsEnumerable(i)?"builtin":"variable"}return"%"==n?(t.skipTo("%")&&t.next(),"operator variable-2"):"<"==n&&t.eat("-")||"<"==n&&t.match("<-")||"-"==n&&t.match(/>>?/)?"operator arrow":"="==n&&e.ctx.argList?"arg-is":d.test(n)?"$"==n?"operator dollar":(t.eatWhile(d),"operator"):/[\(\){}\[\];]/.test(n)?(a=n,";"==n?"semi":null):null}function f(t){return function(e,n){if(e.eat("\\")){var i=e.next();return"x"==i?e.match(/^[a-f0-9]{2}/i):("u"==i||"U"==i)&&e.eat("{")&&e.skipTo("}")?e.next():"u"==i?e.match(/^[a-f0-9]{4}/i):"U"==i?e.match(/^[a-f0-9]{8}/i):/[0-7]/.test(i)&&e.match(/^[0-7]{1,2}/),"string-2"}for(var r;null!=(r=e.next());){if(r==t){n.tokenize=h;break}if("\\"==r){e.backUp(1);break}}return"string"}}var v=1,b=2,m=4;function g(t,e,n){t.ctx={type:e,indent:t.indent,flags:0,column:n.column(),prev:t.ctx}}function y(t,e){var n=t.ctx;t.ctx={type:n.type,indent:n.indent,flags:n.flags|e,column:n.column,prev:n.prev}}function x(t){t.indent=t.ctx.indent,t.ctx=t.ctx.prev}return{startState:function(){return{tokenize:h,ctx:{type:"top",indent:-e.indentUnit,flags:b},indent:0,afterIdent:!1}},token:function(t,e){if(t.sol()&&(0==(3&e.ctx.flags)&&(e.ctx.flags|=b),e.ctx.flags&m&&x(e),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"!=n&&0==(e.ctx.flags&b)&&y(e,v),";"!=a&&"{"!=a&&"}"!=a||"block"!=e.ctx.type||x(e),"{"==a?g(e,"}",t):"("==a?(g(e,")",t),e.afterIdent&&(e.ctx.argList=!0)):"["==a?g(e,"]",t):"block"==a?g(e,"block",t):a==e.ctx.type?x(e):"block"==e.ctx.type&&"comment"!=n&&y(e,m),e.afterIdent="variable"==n||"keyword"==n,n},indent:function(t,n){if(t.tokenize!=h)return 0;var i=n&&n.charAt(0),r=t.ctx,o=i==r.type;return r.flags&m&&(r=r.prev),"block"==r.type?r.indent+("{"==i?0:e.indentUnit):r.flags&v?r.column+(o?0:1):r.indent+(o?0:e.indentUnit)},lineComment:"#"}})),t.defineMIME("text/x-rsrc","r")}(n(2771))},6474:function(t,e,n){"use strict";n.r(e);n(421),n(438),n(436),n(540),n(441);var i=n(412),r=n.n(i),o=n(416),s=n.n(o),a=n(425),l=n.n(a),u=n(418),c=n.n(u),p=n(419),d=n.n(p),h=n(417),f=n.n(h),v=n(410),b=n.n(v),m=n(404),g=n.n(m),y=(n(525),n(663),n(747),n(0)),x=n.n(y),O=n(23),k=n.n(O),w=(n(402),n(4088)),E=n(1123),S=n(818),C=n(431),j=n(872),H=n(676),P=n(861),R=n(4419),L=n.n(R),_=n(1571),I=n(687),N=n(448),U=n.n(N),z=n(626),V=n.n(z),A=n(492),D=n.n(A),M=n(442),W=n(490),T=n.n(W),B=n(451),F=n.n(B),q=n(2771),$=n.n(q),J=n(612),X=n(1188),G=n(823),K=n(816),Q=n(465),Y=n(471),Z=n(588),tt=n(423),et=n(445);n(6076),n(90),n(91),n(351);function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function it(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f()(t);if(e){var r=f()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d()(this,n)}}Object(tt.a)("R");var rt=F()("isle:r-shell"),ot=Object(J.a)("r-shell"),st=/(help\([^)]*\)|\?[^\n]*)/,at=0,lt=[],ut=function(t,e){if(V()(t)){var n=t[e];if(U()(n)&&(n=n.filter((function(t){return t.type===Y.Wb}))).length>0)return n[0].value}return null},ct=g()("span",{}),pt=g()("span",{}),dt=function(t){c()(n,t);var e=it(n);function n(t){var i;return r()(this,n),i=e.call(this,t),b()(l()(i),"handleResetClick",(function(){i.editor.setValue(i.props.code,1)})),b()(l()(i),"logHint",(function(t){i.context.log({id:i.id,type:Y.Xb,value:t})})),b()(l()(i),"hideHelp",(function(){i.setState({help:""})})),i.state={id:at,exhaustedHints:0===t.hints.length,result:"",plots:[],running:!1,nEvaluations:0,solutionOpen:!1,help:""},i.id=t.id||ot(t),at+=1,lt.push(t.code),i.insertPlot=function(e,n){return g()(E.a,{src:e,title:t.t("r-plot")},n)},i.handleSolutionClick=function(){var t=i.editor.getValue(),e=i.props.solution.replace(/\\n/g,"\n");(!1===i.state.solutionOpen?(i.editor.setOption("theme","paraiso-light"),i.editor.setOption("readOnly",!0)):(i.editor.setOption("theme","elegant"),i.editor.setOption("readOnly",!1)),t!==e)?(i.context.log({id:i.id,type:Y.Vb,value:t}),i.setState({lastSolution:t,solutionOpen:!i.state.solutionOpen}),i.editor.setValue(e,1)):(i.setState({solutionOpen:!i.state.solutionOpen}),i.editor.setValue(i.state.lastSolution||e,1))},i.handleEvaluationClick=function(){rt("Evaluate R code..."),i.setState({result:"",plots:[],running:!0});var t=i.editor.getValue();if(lt[i.state.id]=t,""===t)i.setState({result:"Code to be evaluated is empty",running:!1});else{var e=i.context,n=t.match(st);n&&e.getRHelpPage(n[0],(function(t,e,n){t||i.setState({help:n})})),e.log({id:i.id,type:Y.Wb,value:t});var r=Object(_.a)(i.props.libraries,i.props.prependCode,e);if(i.props.addPreceding)for(var o=0;o<i.state.id;o++)r+=lt[o],r+="\n";if(t=r+t+"\n",i.props.onEvaluate(t),!e)return i.setState({result:"R code can only be run in a production environment",nEvaluations:i.state.nEvaluations+1,running:!1});e.executeRCode({code:t,onResult:function(t,e,n){i.setState({result:n,nEvaluations:i.state.nEvaluations+1}),i.props.onResult(i.state.result)},onPlots:function(t){i.setState({plots:t,running:!1,nEvaluations:i.state.nEvaluations+1})},onError:function(t){i.setState({result:t,running:!1,nEvaluations:i.state.nEvaluations+1})}})}},i}return s()(n,[{key:"componentDidMount",value:function(){var t=this;this.editor=$()(this.editorDiv,{mode:"r",theme:"elegant",lineNumbers:!0,lineWrapping:!0}),this.editor.setValue(this.props.code,-1),this.props.disabled&&this.editor.setOption("readOnly","nocursor"),this.editor.on("change",this.props.onChange),this.props.precompute&&this.handleEvaluationClick();var e=this.context;if(e){this.unsubscribe=e.subscribe((function(e,n){if(e===Z.A){var i=ut(n,t.id);Object(M.isPrimitive)(i)&&(t.setState({lastSolution:i,solutionOpen:!1}),t.editor.setValue(i,1))}else t.forceUpdate()}));var n=e.currentUserActions,i=ut(n,this.id);Object(M.isPrimitive)(i)&&(this.setState({lastSolution:i,solutionOpen:!1}),this.editor.setValue(i,1))}}},{key:"componentDidUpdate",value:function(t){if(this.props.code!==t.code)lt[this.state.id]=this.props.code,this.editor.setValue(this.props.code,1),this.props.precompute&&this.handleEvaluationClick();else if(this.props.disabled!==t.disabled)this.props.disabled?this.editor.setOption("readOnly",!0):this.editor.setOption("readOnly",!1);else{var e=k.a.findDOMNode(this),n=e.closest?e.closest(".spectacle-content"):null;if(n){var i=window.getComputedStyle(n).getPropertyValue("transform"),r=/matrix\(([0-9.]*)/.exec(i);if(U()(r)&&r.length>1){var o=r[1];e.style.transform="scale(".concat(1/o,")")}}}this.editor.refresh()}},{key:"componentWillUnmount",value:function(){at=0,lt=[],this.unsubscribe&&this.unsubscribe(),D()(this.editor.destroy)&&this.editor.destroy(),this.editor=null}},{key:"renderHelpModal",value:function(){var t=this.props.t;return g()(H.a,{backdrop:!1,show:Boolean(this.state.help),title:t("r-help"),onHide:this.hideHelp,style:{left:"auto",padding:"10px",position:"fixed",top:"10px",right:"30px",zIndex:99999,overflow:"hidden"},enforceFocus:!1},void 0,g()(H.a.Header,{closeButton:!0},void 0,g()(H.a.Title,{id:"contained-modal-title-lg"},void 0,t("r-help"))),g()(H.a.Body,{style:{height:"400",overflow:"auto"}},void 0,g()("span",{dangerouslySetInnerHTML:{__html:this.state.help}})),g()(H.a.Footer,{},void 0,g()(C.a,{onClick:this.hideHelp},void 0,t("close"))))}},{key:"render",value:function(){var t=this,e=this.props.hints.length,n=this.props.t,i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){b()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({lineHeight:"1.2em",maxHeight:"".concat(1.2*T()(5,this.props.lines)+.5,"em"),height:"".concat(1.2*this.props.lines+.5,"em")},this.props.style);return g()("div",{className:"rshell",style:this.props.style},void 0,x.a.createElement("div",{className:"rshell-editor",style:i,ref:function(e){t.editorDiv=e}}),this.props.disabled?pt:g()(C.a,{variant:"primary",size:"sm",style:{marginBottom:"8px"},onClick:this.handleEvaluationClick},void 0,n("evaluate")),g()(X.a,{running:this.state.running,width:60,height:30,display:"inline",lines:12,style:{marginBottom:"-12px"}}),this.props.disabled?null:g()(j.a,{style:{float:"right"}},void 0,e>0?g()(G.a,{disabled:this.props.disabled,hints:this.props.hints,onClick:this.logHint,onFinished:function(){t.setState({exhaustedHints:!0})}}):null,this.props.solution?function(t,e,n,i,r){var o=g()(P.a,{id:"tooltip"},void 0,r("solution-tooltip"));return!t||i<1?g()(K.a,{placement:"top",positionLeft:100,overlay:o,rootClose:!0},void 0,g()("span",{style:{display:"inline-block",marginLeft:"4px"}},void 0,g()(C.a,{variant:"warning",size:"sm",disabled:!0,style:{pointerEvents:"none"}},void 0,r(n?"hide-solution":"show-solution")))):g()(C.a,{variant:"warning",size:"sm",onClick:e},void 0,n?"Hide Solution":"Show Solution")}(this.state.exhaustedHints,this.handleSolutionClick,this.state.solutionOpen,this.state.nEvaluations,n):null,this.props.resettable?function(t,e){var n=g()(P.a,{id:"tooltip"},void 0,e("reset-tooltip"));return g()(K.a,{placement:"top",positionLeft:100,overlay:n,rootClose:!0},void 0,g()("span",{style:{display:"inline-block",marginLeft:"4px"}},void 0,g()(C.a,{variant:"warning",size:"sm",onClick:t},void 0,e("reset"))))}(this.handleResetClick,n):null,this.props.chat?g()("span",{style:{display:"inline-block",marginLeft:"4px"}},void 0,g()(I.a,{for:this.id})):null),g()("div",{id:"output"},void 0,function(t){if(t){var e={__html:L.a.sanitize(t)};return g()("pre",{id:"output"},void 0,g()("span",{dangerouslySetInnerHTML:e}))}return ct}(this.state.result),function(t,e){for(var n=[],i=0;i<t.length;i++)n[i]=g()(E.a,{width:"60%",height:"auto",src:t[i],title:e("r-plot")},i);return n}(this.state.plots,n)),g()(S.a,{id:this.id,info:Y.Wb}),this.renderHelpModal())}}]),n}(y.Component);dt.defaultProps={code:"",solution:"",hints:[],addPreceding:!1,libraries:[],precompute:!1,prependCode:"",chat:!1,disabled:!1,lines:5,resettable:!1,style:{},onChange:function(){},onEvaluate:function(){},onResult:function(){}},dt.contextType=Q.a,e.default=Object(w.a)("R")(Object(et.a)(dt))},687:function(t,e,n){"use strict";var i=n(406),r=Object(i.a)((function(){return n.e(154).then(n.bind(null,1027))}));e.a=r},811:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(0);function r(t){var e=Object(i.useRef)(null);return Object(i.useEffect)((function(){e.current=t})),e.current}},823:function(t,e,n){"use strict";var i=n(406),r=Object(i.a)((function(){return n.e(182).then(n.bind(null,1168))}));e.a=r}}]);