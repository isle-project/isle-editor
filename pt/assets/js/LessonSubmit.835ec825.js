(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1648:function(e,t,n){"use strict";var i=function(e,t){return e+o(t)},o=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(i,""):function(e){return Object.prototype.hasOwnProperty.call(e,"props")}(e)&&Object.prototype.hasOwnProperty.call(e.props,"children")?o(e.props.children):""};o.default=o,e.exports=o},3804:function(e,t,n){"use strict";var i=n(408),o=Object(i.a)((function(){return n.e(293).then(n.bind(null,4455))}));t.a=o},3805:function(e,t,n){"use strict";var i=n(408),o=Object(i.a)((function(){return Promise.all([n.e(0),n.e(251)]).then(n.bind(null,4456))}));t.a=o},6472:function(e,t,n){"use strict";n.r(t);n(423),n(440),n(438),n(543),n(444);var i=n(406),o=n.n(i),s=n(414),r=n.n(s),a=n(418),c=n.n(a),l=n(427),u=n.n(l),p=n(420),f=n.n(p),d=n(421),m=n.n(d),h=n(419),v=n.n(h),b=n(413),g=n.n(b),y=(n(504),n(528),n(502),n(0)),S=n(453),O=n.n(S),w=(n(404),n(4097)),x=n(1647),j=n.n(x),P=n(1648),k=n.n(P),L=n(433),z=n(680),C=n(442),N=n(884),U=n.n(N),R=n(451),D=n.n(R),M=n(597),E=n.n(M),T=n(1525),A=n(3804),B=n(3805),q=n(467),F=n(591),H=n(473),J=(n(2790),n(425)),V=n(448);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=v()(e);if(t){var o=v()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return m()(this,n)}}Object(J.a)("LessonSubmit");var K=O()("isle:lesson-submit");var Q=function(e){f()(n,e);var t=G(n);function n(e){var i;return r()(this,n),i=t.call(this,e),g()(u()(i),"createReponseSummaryDoc",(function(){var e=i.context,t={content:[{text:"".concat(i.props.t("responses-header")," ").concat(e.namespaceName+"/"+e.lessonName),style:"header",alignment:"center"}],styles:{header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},elapsed:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,0,0,10],italics:!0}}};U()(e.user)||t.content.push({text:"".concat(i.props.t("by")," ").concat(e.user.name," (").concat(e.user.email,")"),style:"author"});var n=new Date;if(t.content.push({text:"".concat(n.toLocaleDateString()," - ").concat(n.toLocaleTimeString()),style:"date"}),t.content.push({text:"".concat(i.props.t("elapsed"),": ").concat(E()(e.duration/6e4),"min"),style:"elapsed"}),e.currentUserActions)for(var o=e.responseVisualizerIds,s=0;s<o.length;s++){var r=e.responseVisualizers[o[s]];t.content.push({text:o[s],style:"subheader"}),r&&function(){var n=r.type,a=r.ref.props.data.question,c=r.ref.props.data.type;t.content.push({text:Object(C.isPrimitive)(a)?a:k()(a),style:"question"});var l=e.currentUserActions[o[s]];if(l){var u=(l=(l=l.filter((function(e){return e.type===n}))).sort((function(e,t){return e.absoluteTime-t.absoluteTime})))[l.length-1];if("image"===c)t.content.push({image:u.value,width:500});else if("factor"===c){var p,f=r.ref.props.data.levels;f=f.map((function(e,t){var n=Object(C.isPrimitive)(e)?e:k()(e);return n||(n="".concat(i.props.t("choice")," ").concat(t+1)),n})),p=D()(u.value)?u.value.map((function(e){return f[e]})).join(", "):f[u.value],t.content.push({text:p})}else t.content.push({text:u.value})}}()}j.a.createPdf(t).download("responses.pdf")})),g()(u()(i),"closeUserModal",(function(){i.setState({showUserModal:!1,visibleLogin:!1,visibleSignup:!1})})),g()(u()(i),"login",(function(e){e.stopPropagation(),i.setState({visibleLogin:!0,visibleSignup:!1})})),g()(u()(i),"signup",(function(e){e.stopPropagation(),i.setState({visibleSignup:!0,visibleLogin:!1})})),g()(u()(i),"closeSignup",(function(){i.setState({visibleSignup:!1,showUserModal:!1})})),g()(u()(i),"closeLogin",(function(){i.setState({visibleLogin:!1,showUserModal:!1})})),g()(u()(i),"finalizeSession",(function(){K("Finalizing session...");for(var e=i.context,t=document.getElementsByClassName("submit-button"),n=0;n<t.length;n++)t[n].innerText===i.props.t("submit")&&t[n].click();e.finalize();var s=i.props.t("lesson-successfully-completed");if(!U()(e.user)&&i.props.sendConfirmationEmail){s+=i.props.t("confirmation-email");var r=function(e,t,n){return{text:n("lesson-completed-msg",{name:e.user.name,lessonName:e.lessonName,namespaceName:e.namespaceName,msg:t||""}),subject:"".concat(e.lessonName," ").concat(n("successfully-completed"),"!")}}(e,i.props.message,i.props.t);e.sendMail(r,e.user.email)}e.addNotification({title:i.props.t("completed"),message:s,level:"success",position:"tr",autoDismiss:0,dismissible:"button",children:o()("div",{style:{marginBottom:"40px"}},void 0,o()(L.a,{variant:"success",size:"sm",style:{float:"right",marginRight:"10px",marginTop:"10px"},onClick:i.createReponseSummaryDoc},void 0,i.props.t("download-pdf"))),onRemove:function(){i.setState({disabled:!1})}}),e.log({id:e.lessonName,type:H.tb,value:i.props.t("lesson-submitted")}),i.setState({disabled:!0}),window.removeEventListener("beforeunload",T.a)})),g()(u()(i),"handleClick",(function(){i.props.onClick();var e=i.context;if(i.props.requireLogin&&U()(e.user))return i.setState({showUserModal:!0});i.finalizeSession()})),i.state={showUserModal:!1,visibleLogin:!1,visibleSignup:!1},i}return c()(n,[{key:"componentDidMount",value:function(){var e=this,t=this.context;this.unsubsribe=t.subscribe((function(t){t!==F.x&&t!==F.j&&t!==F.k||e.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubsribe()}},{key:"render",value:function(){var e=!this.context.live||this.state.disabled;return o()("div",{className:"bg-light ".concat(this.props.className),style:I({maxWidth:400,margin:"0 auto 0px",padding:"20px",fontFamily:"Arial"},this.props.style)},void 0,o()(L.a,{disabled:e,variant:"primary",size:"large",onClick:this.handleClick,block:!0},void 0,this.props.label?this.props.label:this.props.t("finish-lesson")),o()(z.a,{show:this.state.showUserModal,onHide:this.closeUserModal},void 0,o()(z.a.Header,{closeButton:!0},void 0,o()(z.a.Title,{},void 0,this.props.t("authentication"))),o()(z.a.Body,{},void 0,o()("p",{},void 0,this.props.t("authentication-prompt"))),o()(z.a.Footer,{style:{textAlign:"center"}},void 0,o()(L.a,{variant:"primary",onClick:this.login.bind(this),style:{marginRight:"10px"}},void 0,this.props.t("login")),o()(L.a,{onClick:this.signup.bind(this)},void 0,this.props.t("signup")))),o()(B.a,{show:this.state.visibleLogin,onClose:this.closeLogin}),o()(A.a,{show:this.state.visibleSignup,onClose:this.closeSignup}))}}]),n}(y.Component);Q.defaultProps={label:null,message:"",requireLogin:!0,sendConfirmationEmail:!0,className:"",style:{},onClick:function(){}},Q.contextType=q.a,t.default=Object(w.a)("LessonSubmit")(Object(V.a)(Q))},813:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0);function o(e){var t=Object(i.useRef)(null);return Object(i.useEffect)((function(){t.current=e})),t.current}}}]);