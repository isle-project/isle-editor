(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{3780:function(e,t,n){"use strict";var i=n(369),s=Object(i.a)((function(){return Promise.all([n.e(6),n.e(260)]).then(n.bind(null,5071))}));t.a=s},3781:function(e,t,n){"use strict";var i=n(369),s=Object(i.a)((function(){return Promise.all([n.e(0),n.e(6),n.e(215)]).then(n.bind(null,5072))}));t.a=s},6742:function(e,t,n){"use strict";n.r(t);n(418),n(414),n(403),n(402),n(411),n(382),n(373),n(386);var i=n(371),s=n.n(i),o=n(376),a=n.n(o),r=n(378),c=n.n(r),l=n(393),u=n.n(l),p=n(380),d=n.n(p),f=n(381),m=n.n(f),h=n(379),v=n.n(h),g=n(375),b=n.n(g),y=(n(506),n(0)),S=n(425),w=n.n(S),x=(n(363),n(6684)),O=n(1700),j=n.n(O),k=n(1567),P=n.n(k),L=n(400),z=n(716),C=n(421),N=n(1106),D=n.n(N),U=n(437),M=n.n(U),R=n(518),T=n.n(R),E=n(1609),q=n(3780),A=n(3781),B=n(445),F=n(619),H=n(447),J=(n(2004),n(396));function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=v()(e);if(t){var s=v()(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return m()(this,n)}}Object(J.a)("LessonSubmit");var G=w()("isle:lesson-submit");var K=function(e){d()(n,e);var t=I(n);function n(e){var i;return a()(this,n),i=t.call(this,e),b()(u()(i),"createReponseSummaryDoc",(function(){var e=i.context,t={content:[{text:"".concat(i.props.t("responses-header")," ").concat(e.namespaceName+"/"+e.lessonName),style:"header",alignment:"center"}],styles:{header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},elapsed:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,0,0,10],italics:!0}}};D()(e.user)||t.content.push({text:"".concat(i.props.t("by")," ").concat(e.user.name," (").concat(e.user.email,")"),style:"author"});var n=new Date;if(t.content.push({text:"".concat(n.toLocaleDateString()," - ").concat(n.toLocaleTimeString()),style:"date"}),t.content.push({text:"".concat(i.props.t("elapsed"),": ").concat(T()(e.duration/6e4),"min"),style:"elapsed"}),e.currentUserActions)for(var s=e.responseVisualizerIds,o=0;o<s.length;o++){var a=e.responseVisualizers[s[o]];t.content.push({text:s[o],style:"subheader"}),a&&function(){var n=a.type,r=a.ref.props.data.question,c=a.ref.props.data.type;t.content.push({text:Object(C.isPrimitive)(r)?r:P()(r),style:"question"});var l=e.currentUserActions[s[o]];if(l){var u=(l=(l=l.filter((function(e){return e.type===n}))).sort((function(e,t){return e.absoluteTime-t.absoluteTime})))[l.length-1];if("image"===c)t.content.push({image:u.value,width:500});else if("factor"===c){var p,d=a.ref.props.data.levels;d=d.map((function(e,t){var n=Object(C.isPrimitive)(e)?e:P()(e);return n||(n="".concat(i.props.t("choice")," ").concat(t+1)),n})),p=M()(u.value)?u.value.map((function(e){return d[e]})).join(", "):d[u.value],t.content.push({text:p})}else t.content.push({text:u.value})}}()}j.a.createPdf(t).download("responses.pdf")})),b()(u()(i),"closeUserModal",(function(){i.setState({showUserModal:!1,visibleLogin:!1,visibleSignup:!1})})),b()(u()(i),"login",(function(e){e.stopPropagation(),i.setState({visibleLogin:!0,visibleSignup:!1})})),b()(u()(i),"signup",(function(e){e.stopPropagation(),i.setState({visibleSignup:!0,visibleLogin:!1})})),b()(u()(i),"closeSignup",(function(){i.setState({visibleSignup:!1,showUserModal:!1})})),b()(u()(i),"closeLogin",(function(){i.setState({visibleLogin:!1,showUserModal:!1})})),b()(u()(i),"finalizeSession",(function(){G("Finalizing session...");for(var e=i.context,t=document.getElementsByClassName("submit-button"),n=0;n<t.length;n++)t[n].innerText===i.props.t("submit")&&t[n].click();e.finalize();var o=i.props.t("lesson-successfully-completed");if(!D()(e.user)&&i.props.sendConfirmationEmail){o+=i.props.t("confirmation-email");var a=function(e,t,n){return{text:n("lesson-completed-msg",{name:e.user.name,lessonName:e.lessonName,namespaceName:e.namespaceName,msg:t||""}),subject:"".concat(e.lessonName," ").concat(n("successfully-completed"),"!")}}(e,i.props.message,i.props.t);e.sendMail(a,e.user.email)}e.addNotification({title:i.props.t("completed"),message:o,level:"success",position:"tr",autoDismiss:0,dismissible:"button",children:s()("div",{style:{marginBottom:"40px"}},void 0,s()(L.a,{variant:"success",size:"sm",style:{float:"right",marginRight:"10px",marginTop:"10px"},onClick:i.createReponseSummaryDoc},void 0,i.props.t("download-pdf"))),onRemove:function(){i.setState({disabled:!1})}}),e.log({id:e.lessonName,type:H.tb,value:i.props.t("lesson-submitted")}),i.setState({disabled:!0}),window.removeEventListener("beforeunload",E.a)})),b()(u()(i),"handleClick",(function(){i.props.onClick();var e=i.context;if(i.props.requireLogin&&D()(e.user))return i.setState({showUserModal:!0});i.finalizeSession()})),i.state={showUserModal:!1,visibleLogin:!1,visibleSignup:!1},i}return c()(n,[{key:"componentDidMount",value:function(){var e=this,t=this.context;this.unsubsribe=t.subscribe((function(t){t!==F.x&&t!==F.j&&t!==F.k||e.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubsribe()}},{key:"render",value:function(){var e=!this.context.live||this.state.disabled;return s()("div",{className:"bg-light ".concat(this.props.className),style:W({maxWidth:400,margin:"0 auto 0px",padding:"20px",fontFamily:"Arial"},this.props.style)},void 0,s()(L.a,{disabled:e,variant:"primary",size:"large",onClick:this.handleClick,block:!0},void 0,this.props.label?this.props.label:this.props.t("finish-lesson")),s()(z.a,{show:this.state.showUserModal,onHide:this.closeUserModal},void 0,s()(z.a.Header,{closeButton:!0},void 0,s()(z.a.Title,{},void 0,this.props.t("authentication"))),s()(z.a.Body,{},void 0,s()("p",{},void 0,this.props.t("authentication-prompt"))),s()(z.a.Footer,{style:{textAlign:"center"}},void 0,s()(L.a,{variant:"primary",onClick:this.login.bind(this),style:{marginRight:"10px"}},void 0,this.props.t("login")),s()(L.a,{onClick:this.signup.bind(this)},void 0,this.props.t("signup")))),s()(A.a,{show:this.state.visibleLogin,onClose:this.closeLogin}),s()(q.a,{show:this.state.visibleSignup,onClose:this.closeSignup}))}}]),n}(y.Component);K.defaultProps={label:null,message:"",requireLogin:!0,sendConfirmationEmail:!0,className:"",style:{},onClick:function(){}},K.contextType=B.a,t.default=Object(x.a)("LessonSubmit")(K)}}]);