(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{1355:function(e,t,r){"use strict";r.r(t);r(421),r(437),r(433),r(430),r(438),r(439);var s,a,n,o,i=r(488),c=r.n(i),l=r(555),u=r.n(l),p=r(407),f=r.n(p),d=r(414),g=r.n(d),m=r(416),v=r.n(m),b=r(424),h=r.n(b),y=r(418),O=r.n(y),w=r(419),k=r.n(w),j=r(417),x=r.n(j),N=r(412),P=r.n(N),M=(r(428),r(0)),R=r.n(M),D=r(4095),B=(r(404),r(429)),S=r(459),z=r(787),E=r(868),G=r(423),C=r(483),I=r(2799),F=r(420);r(380);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){P()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=x()(e);if(t){var a=x()(this).constructor;r=Reflect.construct(s,arguments,a)}else r=s.apply(this,arguments);return k()(this,r)}}Object(F.a)("GradeFeedbackRenderer");var q=function(e){O()(r,e);var t=L(r);function r(e){var s;return g()(this,r),s=t.call(this,e),P()(h()(s),"toggleMessages",(function(){s.setState({showMessages:!s.state.showMessages})})),s.state={showMessages:!1},s}return v()(r,[{key:"renderMessages",value:function(){var e=this,t=this.context,r=t.user.lessonGradeMessages[t.lessonID];return r&&r[this.props.for]?f()("div",{className:"grade-feedback-renderer-messages"},void 0,r[this.props.for].map((function(r,a){return f()("div",{className:"grade-feedback-message"},a,f()("img",{className:"grade-feedback-picture unselectable",src:t.server+"/thumbnail/"+r.picture,alt:e.props.t("profile-pic")}),f()("div",{className:"grade-feedback-message-right"},void 0,f()("span",{className:"grade-feedback-user"},void 0,r.user)," - ",f()("span",{className:"grade-feedback-time"},void 0,Object(I.a)(r.time)),s||(s=f()("br",{})),f()("span",{className:"grade-feedback-message-content"},void 0,r.content)))}))):null}},{key:"renderOverlay",value:function(){var e=this;return this.state.showMessages?f()(E.a,{target:this.messagesButton,show:this.state.showMessages,placement:"right"},void 0,(function(t){t.placement,t.arrowProps,t.show,t.popper;var r=u()(t,["placement","arrowProps","show","popper"]);return R.a.createElement("div",c()({},r,{style:J({backgroundColor:"#f8f9fa",padding:"2px 10px",color:"darkslategrey",borderRadius:6,border:"1px solid darkslategrey",width:"600px",boxShadow:"0px 0px 4px darkslategrey",zIndex:1006},r.style)}),f()("div",{style:{marginTop:6,marginBottom:6}},void 0,e.props.for,f()(G.a,{variant:"secondary",size:"sm",onClick:function(){e.setState({showMessages:!1})},style:{float:"right",marginBottom:4}},void 0,a||(a=f()("i",{className:"fas fa-times"})))),n||(n=f()("hr",{})),e.renderMessages())})):null}},{key:"render",value:function(){var e=this,t=this.context;if(!t.user||!t.user.lessonGrades)return null;var r=t.user.lessonGrades[t.lessonID];if(!r||!Object(B.isPrimitive)(r[this.props.for]))return null;var s=t.user.lessonGradeMessages[t.lessonID],a=s&&s[this.props.for];return f()(M.Fragment,{},void 0,f()(z.a,{variant:"success",style:{fontSize:"1em"}},void 0,this.props.t("your-points"),": ",r[this.props.for]," / ",this.props.points),a?f()(C.a,{tooltip:this.props.t("display-instructor-feedback")},void 0,R.a.createElement(G.a,{ref:function(t){e.messagesButton=t},onClick:this.toggleMessages,size:"small",variant:"light",style:{marginLeft:12},className:"grade-feedback-button"},o||(o=f()("i",{className:"fas fa-envelope-open"})))):null,this.renderOverlay())}}]),r}(M.Component);q.contextType=S.a,t.default=Object(D.a)("GradeFeedbackRenderer")(q)},2799:function(e,t,r){"use strict";t.a=function(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"})}},423:function(e,t,r){"use strict";var s=r(406),a=r(408),n=r(409),o=r.n(n),i=r(0),c=r.n(i),l=r(411),u=r(463),p=c.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.variant,i=e.size,p=e.active,f=e.className,d=e.block,g=e.type,m=e.as,v=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(l.a)(r,"btn"),h=o()(f,b,p&&"active",n&&b+"-"+n,d&&b+"-block",i&&b+"-"+i);if(v.href)return c.a.createElement(u.a,Object(s.a)({},v,{as:m,ref:t,className:o()(h,v.disabled&&"disabled")}));t&&(v.ref=t),g?v.type=g:m||(v.type="button");var y=m||"button";return c.a.createElement(y,Object(s.a)({},v,{className:h}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p}}]);