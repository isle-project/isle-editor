(self.webpackChunk=self.webpackChunk||[]).push([[9080],{701501:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return Promise.all([n.e(532),n.e(4438)]).then(n.bind(n,664062))}));t.Z=i},460231:function(e,t,n){"use strict";var i=(0,n(844601).Z)((function(){return n.e(9036).then(n.bind(n,358699))}));t.Z=i},825818:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});n(382139),n(627476),n(95767),n(694882),n(298351);var i=n(858255),s=n(264659),o=n(904730),r=n(673989),a=n(175663),c=n(750591),l=n(575630),u=n(151119),p=(n(6059),n(898837),n(319371),n(202784)),f=n(911755),d=n.n(f),m=(n(213980),n(198)),v=n(912895),h=n.n(v),b=n(318967),g=n.n(b),y=n(770561),Z=n(81982),S=n(294565),x=n(623102),w=n.n(x),k=n(588703),O=n.n(k),P=n(686605),N=n.n(P),z=n(509901),C=n(460231),j=n(701501),L=n(741319),R=n(964909),U=n(5140),E=(n(697927),n(432261));var D=function(e,t,n){return{text:n("lesson-completed-msg",{name:e.user.name,lessonName:e.lessonName,namespaceName:e.namespaceName,msg:t||""}),subject:"".concat(e.lessonName," ").concat(n("successfully-completed"),"!")}};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(t){var s=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return(0,c.Z)(this,n)}}var A=d()("isle:lesson-submit"),q=function(e){(0,a.Z)(n,e);var t=T(n);function n(e){var o;return(0,s.Z)(this,n),o=t.call(this,e),(0,u.Z)((0,r.Z)(o),"createReponseSummaryDoc",(function(){var e=o.context,t={content:[{text:"".concat(o.props.t("responses-header")," ").concat(e.namespaceName+"/"+e.lessonName),style:"header",alignment:"center"}],styles:{header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},elapsed:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,0,0,10],italics:!0}}};w()(e.user)||t.content.push({text:"".concat(o.props.t("by")," ").concat(e.user.name," (").concat(e.user.email,")"),style:"author"});var n=new Date;if(t.content.push({text:"".concat(n.toLocaleDateString()," - ").concat(n.toLocaleTimeString()),style:"date"}),t.content.push({text:"".concat(o.props.t("elapsed"),": ").concat(N()(e.duration/6e4),"min"),style:"elapsed"}),e.currentUserActions)for(var i=e.responseVisualizerIds,s=0;s<i.length;s++){var r=e.responseVisualizers[i[s]];t.content.push({text:i[s],style:"subheader"}),r&&function(){var n=r.type,a=r.ref.props.data.question,c=r.ref.props.data.type;t.content.push({text:(0,S.isPrimitive)(a)?a:g()(a),style:"question"});var l=e.currentUserActions[i[s]];if(l){var u=(l=(l=l.filter((function(e){return e.type===n}))).sort((function(e,t){return e.absoluteTime-t.absoluteTime})))[l.length-1];if("image"===c)t.content.push({image:u.value,width:500});else if("factor"===c){var p,f=r.ref.props.data.levels;f=f.map((function(e,t){var n=(0,S.isPrimitive)(e)?e:g()(e);return n||(n="".concat(o.props.t("choice")," ").concat(t+1)),n})),p=O()(u.value)?u.value.map((function(e){return f[e]})).join(", "):f[u.value],t.content.push({text:p})}else t.content.push({text:u.value})}}()}h().createPdf(t).download("responses.pdf")})),(0,u.Z)((0,r.Z)(o),"closeUserModal",(function(){o.setState({showUserModal:!1,visibleLogin:!1,visibleSignup:!1})})),(0,u.Z)((0,r.Z)(o),"login",(function(e){e.stopPropagation(),o.setState({visibleLogin:!0,visibleSignup:!1})})),(0,u.Z)((0,r.Z)(o),"signup",(function(e){e.stopPropagation(),o.setState({visibleSignup:!0,visibleLogin:!1})})),(0,u.Z)((0,r.Z)(o),"closeSignup",(function(){o.setState({visibleSignup:!1,showUserModal:!1})})),(0,u.Z)((0,r.Z)(o),"closeLogin",(function(){o.setState({visibleLogin:!1,showUserModal:!1})})),(0,u.Z)((0,r.Z)(o),"finalizeSession",(function(){A("Finalizing session...");for(var e=o.context,t=document.getElementsByClassName("submit-button"),n=0;n<t.length;n++)t[n].innerText===o.props.t("submit")&&t[n].click();e.finalize();var s=o.props.t("lesson-successfully-completed");if(!w()(e.user)&&o.props.sendConfirmationEmail){s+=o.props.t("confirmation-email");var r=D(e,o.props.message,o.props.t);e.sendMail(r,e.user.email)}e.addNotification({title:o.props.t("completed"),message:s,level:"success",position:"tr",autoDismiss:0,dismissible:"button",children:(0,i.Z)("div",{style:{marginBottom:"40px"}},void 0,(0,i.Z)(y.Z,{variant:"success",size:"sm",style:{float:"right",marginRight:"10px",marginTop:"10px"},onClick:o.createReponseSummaryDoc},void 0,o.props.t("download-pdf"))),onRemove:function(){o.setState({disabled:!1})}}),e.log({id:e.lessonName,type:U.kv,value:o.props.t("lesson-submitted")}),o.setState({disabled:!0}),window.removeEventListener("beforeunload",z.Z)})),(0,u.Z)((0,r.Z)(o),"handleClick",(function(){o.props.onClick();var e=o.context;if(o.props.requireLogin&&w()(e.user))return o.setState({showUserModal:!0});o.finalizeSession()})),o.state={showUserModal:!1,visibleLogin:!1,visibleSignup:!1},o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.context;this.unsubsribe=t.subscribe((function(t){t!==R.YQ&&t!==R.Fw&&t!==R.E7||e.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubsribe()}},{key:"render",value:function(){var e=!this.context.live||this.state.disabled;return(0,i.Z)("div",{className:"bg-light ".concat(this.props.className),style:B({maxWidth:400,margin:"0 auto 0px",padding:"20px",fontFamily:"Arial"},this.props.style)},void 0,(0,i.Z)(y.Z,{disabled:e,variant:"primary",size:"large",onClick:this.handleClick,block:!0},void 0,this.props.label?this.props.label:this.props.t("finish-lesson")),(0,i.Z)(Z.Z,{show:this.state.showUserModal,onHide:this.closeUserModal},void 0,(0,i.Z)(Z.Z.Header,{closeButton:!0},void 0,(0,i.Z)(Z.Z.Title,{},void 0,this.props.t("authentication"))),(0,i.Z)(Z.Z.Body,{},void 0,(0,i.Z)("p",{},void 0,this.props.t("authentication-prompt"))),(0,i.Z)(Z.Z.Footer,{style:{textAlign:"center"}},void 0,(0,i.Z)(y.Z,{variant:"primary",onClick:this.login.bind(this),style:{marginRight:"10px"}},void 0,this.props.t("login")),(0,i.Z)(y.Z,{onClick:this.signup.bind(this)},void 0,this.props.t("signup")))),(0,i.Z)(j.Z,{show:this.state.visibleLogin,onClose:this.closeLogin}),(0,i.Z)(C.Z,{show:this.state.visibleSignup,onClose:this.closeSignup}))}}]),n}(p.Component);q.defaultProps={label:null,message:"",requireLogin:!0,sendConfirmationEmail:!0,className:"",style:{},onClick:function(){}},q.contextType=L.Z;var F=(0,m.Z)("lesson-submit")((0,E.W)(q))},783679:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(202784);function s(e){var t=(0,i.useRef)(null);return(0,i.useEffect)((function(){t.current=e})),t.current}},770561:function(e,t,n){"use strict";var i=n(607560),s=n(998283),o=n(72779),r=n.n(o),a=n(202784),c=n(429658),l=n(482695),u=["bsPrefix","variant","size","active","className","block","type","as"],p=a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,p=e.size,f=e.active,d=e.className,m=e.block,v=e.type,h=e.as,b=(0,s.Z)(e,u),g=(0,c.vE)(n,"btn"),y=r()(d,g,f&&"active",o&&g+"-"+o,m&&g+"-block",p&&g+"-"+p);if(b.href)return a.createElement(l.Z,(0,i.Z)({},b,{as:h,ref:t,className:r()(y,b.disabled&&"disabled")}));t&&(b.ref=t),v?b.type=v:h||(b.type="button");var Z=h||"button";return a.createElement(Z,(0,i.Z)({},b,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=p},318967:function(e){"use strict";var t=function(e,t){return e+n(t)},n=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(t,""):function(e){return Object.prototype.hasOwnProperty.call(e,"props")}(e)&&Object.prototype.hasOwnProperty.call(e.props,"children")?n(e.props.children):""};n.default=n,e.exports=n}}]);