/*! For license information please see Toolbar.19c934ce.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1549:function(t,e,a){"use strict";var n=a(1550);t.exports=n},1550:function(t,e,a){"use strict";var n=a(480).isPrimitive,o=a(442).isPrimitive;t.exports=function(t,e,a){var i,s;if(!o(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!o(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!n(a))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+a+"`.");if(0===a)return 0===e.length;i=a<0?t.length+a:a}else i=t.length;if(0===e.length)return!0;if((i-=e.length)<0)return!1;for(s=0;s<e.length;s++)if(t.charCodeAt(i+s)!==e.charCodeAt(s))return!1;return!0}},2718:function(t,e,a){"use strict";var n=a(595),o=a.n(n),i=a(1549),s=a.n(i);e.a=function(t){return s()(t,"px")&&(t=parseFloat(o()(t,"px",""))),t}},6507:function(t,e,a){"use strict";a.r(e);a(421);var n=a(513),o=a.n(n),i=a(404),s=a.n(i),l=a(412),c=a.n(l),r=a(416),u=a.n(r),h=a(425),g=a.n(h),p=a(418),m=a.n(p),d=a(419),b=a.n(d),f=a(417),v=a.n(f),k=a(410),y=a.n(k),w=(a(501),a(511),a(525),a(0)),N=a.n(w),P=(a(402),a(4088)),C=a(431),T=a(697),S=a(1030),H=a(853),q=a(707),x=a(499),O=a(1528),E=a(570),j=a(1124),B=a(917),I=a(465),M=a(2718),W=a(423),K=a(471),Q=a(588),F=a(406),R=Object(F.a)((function(){return Promise.all([a.e(11),a.e(386),a.e(181)]).then(a.bind(null,6510))})),z=Object(F.a)((function(){return Promise.all([a.e(0),a.e(379),a.e(154)]).then(a.bind(null,6523))})),V=Object(F.a)((function(){return Promise.all([a.e(0),a.e(10),a.e(16),a.e(170)]).then(a.bind(null,6508))})),A=Object(F.a)((function(){return Promise.all([a.e(0),a.e(392),a.e(290)]).then(a.bind(null,6499))})),D=Object(F.a)((function(){return Promise.all([a.e(0),a.e(16),a.e(256)]).then(a.bind(null,6500))}));a(369);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=v()(t);if(e){var o=v()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return b()(this,a)}}var L=s()("span",{className:"fa fa-lg fa-check toolbar-icon"}),U=s()("span",{className:"fa fa-lg fa-tachometer-alt toolbar-icon"}),_=s()("span",{className:"fa fa-lg fa-thumbs-up toolbar-icon"}),G=s()("span",{className:"fa fa-lg fa-poll toolbar-icon"}),X=s()("i",{className:"fas fa-chevron-right"}),Y=s()("i",{className:"fas fa-chevron-left"}),Z=s()("span",{className:"fa fa-lg fa-calculator toolbar-icon"}),$=s()("span",{className:"fa fa-lg fa-question-circle toolbar-icon"}),tt=s()("span",{className:"fa fa-lg fa-paint-brush toolbar-icon"}),et=s()("span",{className:"fa fa-lg fa-book toolbar-icon"}),at=s()("span",{className:"fa fa-lg fa-medkit toolbar-icon"}),nt=s()("span",{className:"fa fa-lg fa-poll-h toolbar-icon"}),ot=function(t){m()(a,t);var e=J(a);function a(t){var n;c()(this,a),n=e.call(this,t),y()(g()(n),"toggleCalculator",(function(){n.setState({calculator:!n.state.calculator})})),y()(g()(n),"toggleQueue",(function(){n.setState({queue:!n.state.queue})})),y()(g()(n),"toggleSketchpad",(function(){n.setState({sketchpad:!n.state.sketchpad})})),y()(g()(n),"toggleTicketing",(function(){n.setState({ticketing:!n.state.ticketing})})),y()(g()(n),"toggleEngagement",(function(){var t=n.context;if(n.state.engagementInProgress){var e={id:"engagement",type:K.eb};return t.log(e,"members")}n.setState({engagementMenu:!n.state.engagementMenu})})),y()(g()(n),"toggleHelp",(function(){n.setState({help:!n.state.help})})),y()(g()(n),"renderEngagementButtons",(function(t){var e=n.context;return N.a.createElement(T.a,o()({vertical:!0,className:"toolbar-engagement-buttons"},t),s()(x.a,{tooltip:n.props.t("yes-no"),placement:"right"},void 0,s()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"yes:no"};e.log(t,"members")},"aria-label":"".concat(n.props.t("yes-no")," ").concat(n.props.t("poll"))},void 0,L)),s()(x.a,{tooltip:n.props.t("slow-fast"),placement:"right"},void 0,s()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"too-slow:too-fast"};e.log(t,"members")},"aria-label":"".concat(n.props.t("slow-fast")," ").concat(n.props.t("poll"))},void 0,U)),s()(x.a,{tooltip:n.props.t("like-dislike"),placement:"right"},void 0,s()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"like:dislike"};e.log(t,"members")},"aria-label":"".concat(n.props.t("like-dislike")," ").concat(n.props.t("poll"))},void 0,_)),s()(x.a,{tooltip:n.props.t("survey"),placement:"right"},void 0,s()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"survey"};e.log(t,"members")},"aria-label":n.props.t("survey")},void 0,G)))})),y()(g()(n),"toggleToolbar",(function(){n.setState({showToolbar:!n.state.showToolbar})}));var i={calculator:!1,queue:!1,help:!1,sketchpad:!1,engagementMenu:!1,engagementInProgress:!1,ticketing:!1,elements:[],showToolbar:!0,sketchpadHeight:.6*window.innerHeight,sketchpadWidth:.75*window.innerWidth};return n.state=i,n}return u()(a,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(e,a){if(e===K.Cc&&t.setState({showToolbar:!a}),e===Q.w||e===Q.O||e===Q.u||e===Q.v)t.forceUpdate();else if(e===Q.n&&"engagement"===a.id){var n=a.type;n===K.fb?t.setState({engagementInProgress:!0,engagementMenu:!1}):n===K.eb&&t.setState({engagementInProgress:!1})}}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"renderButton",value:function(t,e){var a=this,n=function(){a.setState(y()({},t.name,!a.state[t.name]))};return s()(x.a,{tooltip:"".concat(this.state[t.name]?this.props.t("close"):this.props.t("open")," ").concat(t.name),placement:"right"},e,s()(C.a,{variant:"light",className:"toolbar-button",onClick:n,onKeyPress:n},void 0,s()("span",{className:"fa fa-lg fa-".concat(t.icon," toolbar-icon")})))}},{key:"render",value:function(){var t=this,e=this.context,a=this.props.t,n=a("close"),i=a("open");return s()(w.Fragment,{},void 0,s()(x.a,{tooltip:a("show-toolbar"),placement:"top"},void 0,s()(C.a,{variant:"warning",className:"toolbar-buttongroup toolbar-toggle",onClick:this.toggleToolbar,onKeyPress:this.toggleToolbar,"aria-label":a("show-toolbar"),style:{display:this.state.showToolbar?"none":"inherit"}},void 0,X)),s()(T.a,{className:"toolbar-buttongroup",style:{display:this.state.showToolbar?"inherit":"none"}},void 0,s()(x.a,{tooltip:a("hide-toolbar"),placement:"top"},void 0,s()(C.a,{variant:"secondary",className:"toolbar-toggle",onClick:this.toggleToolbar,onKeyPress:this.toggleToolbar,"aria-label":a("hide-toolbar")},void 0,Y)),this.state.elements.filter((function(t){return!!t.component})).map((function(e,a){return t.renderButton(e,a)})),s()(x.a,{tooltip:"".concat(this.state.calculator?n:i," ").concat(a("calculator")," ").concat("(F2)"),placement:"top",onToggle:function(){Object(W.a)("Calculator")}},void 0,s()(C.a,{variant:this.state.calculator?"success":"light",className:"toolbar-button toolbar-calculator",onClick:this.toggleCalculator,onKeyPress:this.toggleCalculator,style:{display:this.state.hideCalculator?"none":"inline-block"},"aria-label":"".concat(this.state.calculator?n:i," ").concat(a("calculator"))},void 0,Z)),e.hasOwner||B.a?s()(C.a,{variant:this.state.queue?"success":"light",className:"toolbar-button toolbar-queue",onClick:this.toggleQueue,onKeyPress:this.toggleQueue,onMouseOver:function(){Object(W.a)("Queue")},style:{display:this.state.hideQueue?"none":"inline-block"},"aria-label":"".concat(this.state.queue?n:i," ").concat(a("help-queue"))},void 0,s()(x.a,{tooltip:"".concat(this.state.queue?n:i," ").concat(a("help-queue")),placement:"top"},void 0,$),s()(x.a,{placement:"right",tooltip:a("num-open-questions")},void 0,s()("span",{className:"toolbar-queue-counter"},void 0,"   ".concat(e.questions.length)))):null,s()(x.a,{tooltip:"".concat(this.state.sketchpad?n:i," ").concat(a("sketchpad")),placement:"top",onToggle:O.a.preload},void 0,s()(C.a,{variant:this.state.sketchpad?"success":"light",className:"toolbar-button toolbar-sketchpad",onClick:this.toggleSketchpad,onKeyPress:this.toggleSketchpad,style:{display:this.state.hideSketchpad?"none":"inline-block"},"aria-label":"".concat(this.state.sketchpad?n:i," ").concat(a("sketchpad"))},void 0,tt)),s()(x.a,{tooltip:"".concat(this.state.help?n:i," ").concat(a("documentation")),placement:"top",onToggle:function(){Object(W.a)("HelpPage")}},void 0,s()(C.a,{variant:this.state.help?"success":"light",className:"toolbar-button toolbar-help",onClick:this.toggleHelp,onKeyPress:this.toggleHelp,"aria-label":"".concat(this.state.help?n:i," ").concat(a("documentation")),style:{display:this.state.hideHelpPage?"none":"inline-block"}},void 0,et)),s()(q.a,{user:!0,disabled:!e.enableTicketing},void 0,s()(x.a,{tooltip:"".concat(this.state.ticketing?n:i," ").concat(a("ticketing")),placement:"top",onToggle:A.preload},void 0,s()(C.a,{variant:this.state.ticketing?"success":"light",className:"toolbar-button toolbar-ticketing",onClick:this.toggleTicketing,onKeyPress:this.toggleTicketing,"aria-label":"".concat(this.state.ticketing?n:i," ").concat(a("ticketing"))},void 0,at))),s()(q.a,{owner:!0,inline:!0,showOwnerInPresentationMode:!0},void 0,s()(x.a,{tooltip:this.state.engagementInProgress?this.props.t("finish-poll"):this.props.t("polls"),placement:"right"},void 0,N.a.createElement(C.a,{variant:this.state.engagementInProgress?"warning":this.state.engagementMenu?"success":"light",className:"toolbar-button toolbar-engagement",onClick:this.toggleEngagement,ref:function(e){t.engagementButton=e},"aria-label":this.state.engagementInProgress?this.props.t("finish-poll"):this.props.t("open-poll-menu")},nt)),s()(S.a,{placement:"top",show:this.state.engagementMenu,target:this.engagementButton,trigger:"click"},void 0,this.renderEngagementButtons()))),s()(V,{session:this.context,onHide:this.toggleEngagement}),this.state.sketchpad?s()(H.a,{resizable:!0,onResize:function(e,a,n){t.setState({sketchpadWidth:Object(M.a)(n.style.width)-50,sketchpadHeight:Object(M.a)(n.style.height)-150})},default:{width:this.state.sketchpadWidth+50,height:this.state.sketchpadHeight+150},minWidth:510,minHeight:300,cancel:".textLayer,.btn"},void 0,N.a.createElement(E.a,{title:this.props.t("sketchpad"),style:{maxWidth:"none"},header:this.props.t("sketchpad"),onHide:this.toggleSketchpad,minimizable:!0,ref:function(e){t.sketchpad=e}},s()(O.a,{id:"".concat(e.namespaceName,"-").concat(e.lessonName,"-toolbar-sketchpad"),canvasWidth:this.state.sketchpadWidth,canvasHeight:this.state.sketchpadHeight,dynamicallyHideButtons:!0,useHashSign:!1}))):null,this.state.calculator?s()(z,{show:this.state.calculator,onHide:this.toggleCalculator}):null,s()(D,{id:"main_queue",show:this.state.queue,onHide:this.toggleQueue,onNewQuestion:function(){e.addNotification({title:a("queue"),message:a("posted-to-queue"),level:"success",position:"tr",action:{label:a("open-queue"),callback:function(){t.setState({queue:!0})}}})}}),this.state.ticketing?s()(A,{show:this.state.ticketing,onHide:this.toggleTicketing,t:this.props.t,session:this.context}):null,this.state.elements.filter((function(t){return!!t.component})).map((function(e,a){var n=e.component;return t.state[e.name]?s()(H.a,{bounds:"#Lesson",cancel:".card-body,.cancel"},a,s()("div",{className:"toolbar-outer-element"},void 0,s()("div",{className:"toolbar-inner-element",tabIndex:0,role:"button"},void 0,N.a.createElement(n.type,o()({},n.props,{style:{position:"inline-block",margin:"0px"}}),n.props.children)),s()("button",{name:n.props.name,className:"toolbar-hide-button fa fa-times",onClick:function(){t.setState(y()({},e.name,!t.state[e.name]))}}))):null})),this.state.help?s()(R,{session:this.context,onClose:this.toggleHelp}):null,s()(j.a,{actions:{F2:this.toggleCalculator}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.elements&&!e.elements||t.elements.length!==e.elements.length){var a={};return t.elements.forEach((function(t){a[t.name]=!1,"queue"===t.name&&(a.hideQueue=!0),"calculator"===t.name&&(a.hideCalculator=!0),"sketchpad"===t.name&&(a.hideSketchpad=!0),"help"===t.name&&(a.hideHelpPage=!0)})),a.elements=t.elements,a}return null}}]),a}(w.Component);ot.defaultProps={elements:[]},ot.contextType=I.a;e.default=Object(P.a)("Toolbar")(ot)},853:function(t,e,a){"use strict";var n=a(406),o=Object(n.a)((function(){return Promise.all([a.e(0),a.e(10),a.e(393),a.e(168)]).then(a.bind(null,1668))}));e.a=o}}]);