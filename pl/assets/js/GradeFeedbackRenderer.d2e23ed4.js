(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1512:function(e,t,r){"use strict";r.r(t);r(441),r(436),r(444),r(443),r(438),r(426),r(415),r(421);var s=r(513),n=r.n(s),a=r(708),o=r.n(a),i=r(404),c=r.n(i),l=r(412),u=r.n(l),p=r(416),d=r.n(p),f=r(425),g=r.n(f),h=r(418),m=r.n(h),v=r(419),b=r.n(v),y=r(417),w=r.n(y),k=r(410),O=r.n(k),j=r(0),x=r.n(j),M=r(4088),P=(r(402),r(432)),D=r(465),N=r(918),R=r(1030),S=r(431),G=r(499),z=r(2832),B=r(423);r(378);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=w()(e);if(t){var n=w()(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return b()(this,r)}}Object(B.a)("GradeFeedbackRenderer");var F=c()("br",{}),T=c()("i",{className:"fas fa-times"}),J=c()("hr",{}),L=c()("i",{className:"fas fa-envelope-open"}),q=function(e){m()(r,e);var t=I(r);function r(e){var s;return u()(this,r),s=t.call(this,e),O()(g()(s),"toggleMessages",(function(){s.setState({showMessages:!s.state.showMessages})})),s.state={showMessages:!1},s}return d()(r,[{key:"renderMessages",value:function(){var e=this,t=this.context,r=t.user.lessonGradeMessages[t.lessonID];return r&&r[this.props.for]?c()("div",{className:"grade-feedback-renderer-messages"},void 0,r[this.props.for].map((function(r,s){return c()("div",{className:"grade-feedback-message"},s,c()("img",{className:"grade-feedback-picture unselectable",src:t.server+"/thumbnail/"+r.picture,alt:e.props.t("profile-pic")}),c()("div",{className:"grade-feedback-message-right"},void 0,c()("span",{className:"grade-feedback-user"},void 0,r.user)," - ",c()("span",{className:"grade-feedback-time"},void 0,Object(z.a)(r.time)),F,c()("span",{className:"grade-feedback-message-content"},void 0,r.content)))}))):null}},{key:"renderOverlay",value:function(){var e=this;return this.state.showMessages?c()(R.a,{target:this.messagesButton,show:this.state.showMessages,placement:"right"},void 0,(function(t){t.placement,t.arrowProps,t.show,t.popper;var r=o()(t,["placement","arrowProps","show","popper"]);return x.a.createElement("div",n()({},r,{style:E({backgroundColor:"#f8f9fa",padding:"2px 10px",color:"darkslategrey",borderRadius:6,border:"1px solid darkslategrey",width:"600px",boxShadow:"0px 0px 4px darkslategrey",zIndex:1006},r.style)}),c()("div",{style:{marginTop:6,marginBottom:6}},void 0,e.props.for,c()(S.a,{variant:"secondary",size:"sm",onClick:function(){e.setState({showMessages:!1})},style:{float:"right",marginBottom:4}},void 0,T)),J,e.renderMessages())})):null}},{key:"render",value:function(){var e=this,t=this.context;if(!t.user||!t.user.lessonGrades)return null;var r=t.user.lessonGrades[t.lessonID];if(!r||!Object(P.isPrimitive)(r[this.props.for]))return null;var s=t.user.lessonGradeMessages[t.lessonID],n=s&&s[this.props.for];return c()(j.Fragment,{},void 0,c()(N.a,{variant:"success",style:{fontSize:"1em"}},void 0,this.props.t("your-points"),": ",r[this.props.for]," / ",this.props.points),n?c()(G.a,{tooltip:this.props.t("display-instructor-feedback")},void 0,x.a.createElement(S.a,{ref:function(t){e.messagesButton=t},onClick:this.toggleMessages,size:"small",variant:"light",style:{marginLeft:12},className:"grade-feedback-button"},L)):null,this.renderOverlay())}}]),r}(j.Component);q.contextType=D.a,t.default=Object(M.a)("GradeFeedbackRenderer")(q)},2832:function(e,t,r){"use strict";t.a=function(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"})}}}]);