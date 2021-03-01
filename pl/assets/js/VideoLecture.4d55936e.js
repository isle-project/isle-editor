(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{6493:function(t,e,i){"use strict";i.r(e);i(423);var s=i(515),r=i.n(s),n=i(406),o=i.n(n),a=i(414),c=i.n(a),l=i(418),u=i.n(l),v=i(427),d=i.n(v),h=i(420),p=i.n(h),f=i(421),w=i.n(f),m=i(419),b=i.n(m),y=i(413),g=i.n(y),S=(i(753),i(0)),k=i.n(S),I=(i(404),i(453)),V=i.n(I),N=i(4097),C=i(449),x=i.n(C),A=i(442),F=i(463),P=i(433),E=i(699),R=i(709),O=i(1129),j=i(1533),z=i(573),D=i(467),K=i(425),W=i(448);i(376);function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=b()(t);if(e){var r=b()(this).constructor;i=Reflect.construct(s,arguments,r)}else i=s.apply(this,arguments);return w()(this,i)}}Object(K.a)("Video");var L=V()("isle:video-lecture"),T=function(t){for(var e,i=new Array(t.length),s=0;s<i.length;s++)i[s]=(e=t[s])&&e.props&&e.props.question;return i},q=o()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}),B=o()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}),J=o()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}),G=o()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}),M=function(t){p()(i,t);var e=H(i);function i(t){var s;return c()(this,i),s=e.call(this,t),g()(d()(s),"incrementStep",(function(){L("Add one step to "+s.state.active),s.setState({active:s.state.active+1})})),g()(d()(s),"decrementStep",(function(){L("Go back one step from "+s.state.active),s.setState({active:s.state.active-1})})),g()(d()(s),"markCompleted",(function(t){L("Handle question submission...");var e=s.state.waitForAnswer.slice();e[s.state.active]=!1,s.setState({waitForAnswer:e})})),g()(d()(s),"toggleInstructorView",(function(){s.setState({showInstructorView:!s.state.showInstructorView})})),s.state={active:0,waitForAnswer:T(t.steps),showInstructorView:!1},s}return u()(i,[{key:"renderStep",value:function(t){var e=this.props.steps[t];if(e.props&&e.props.actionID&&e.props.show)return o()("div",{},void 0,this.state.active===t?e:null,this.state.active>0?o()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,q):null,o()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,B));var i=Object(A.isPrimitive)(e),s=!k.a.isValidElement(e)&&x()(e);if(i||s){var n=s?e:{id:e,url:e};return this.state.showInstructorView?o()("div",{},t,k.a.createElement(j.a,r()({},n,{controls:this.props.controls,light:!0}))):o()("div",{},void 0,this.state.active===t?k.a.createElement(j.a,r()({},n,{key:t,onEnded:this.incrementStep,controls:this.props.controls,width:this.props.videoWidth,height:this.props.videoHeight,playing:0!==this.state.active})):null,this.state.active>0?o()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,J):null,o()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,G))}return o()("div",{className:"video-lecture-content"},void 0,k.a.createElement(e.type,r()({},e.props,{onSubmit:this.markCompleted})),this.state.showInstructorView?null:o()(z.a,{style:{width:"90%"}},void 0,this.state.active>0?o()(P.a,{variant:"warning",size:"lg",onClick:this.decrementStep,style:{float:"left"}},void 0,this.props.t("back")):null,o()(P.a,{variant:"success",size:"lg",onClick:this.incrementStep,style:{float:"right"},disabled:this.state.waitForAnswer[this.state.active]},void 0,this.props.t("next"))))}},{key:"renderSteps",value:function(){for(var t=[],e=0;e<this.props.steps.length;e++){var i=this.state.active===e||this.state.showInstructorView?"visible-step":"invisible-step";t.push(o()("div",{className:i},e,this.renderStep(e)))}return t}},{key:"render",value:function(){var t=this,e=this.renderSteps(),i=this.context,s=this.props.t;return o()(S.Fragment,{},void 0,k.a.createElement("div",{className:"video-lecture-wrapper",ref:function(e){t.videoLectureWrapper=e},style:this.props.style},this.state.active>=this.props.steps.length&&!this.state.showInstructorView?o()(F.a,{variant:"success",className:"video-lecture-end-alert"},void 0,o()("h1",{},void 0,s("reached-end")),o()(E.a,{block:!0},void 0,o()(P.a,{variant:"secondary",size:"lg",onClick:this.decrementStep},void 0,s("to-previous")),this.props.linkToDashboard?o()("a",{href:i.server},void 0,o()(P.a,{variant:"secondary",size:"lg"},void 0,s("close-and-to-dashboard"))):null)):null,e,this.props.instructorView?o()(R.a,{owner:!0},void 0,o()(P.a,{className:"video-lecture-instructor-button",variant:"secondary",onClick:this.toggleInstructorView,block:!0},void 0,this.state.showInstructorView?s("close-instructor-view"):s("open-instructor-view"))):null),o()(O.a,{container:this.videoLectureWrapper,actions:{ArrowRight:this.incrementStep,ArrowLeft:this.decrementStep}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.steps.length!==e.waitForAnswer.length?{waitForAnswer:T(t.steps)}:null}}]),i}(S.Component);M.defaultProps={controls:!0,instructorView:!0,linkToDashboard:!1,videoWidth:"100%",videoHeight:"98vh",style:{}},M.contextType=D.a,e.default=Object(N.a)("Video")(Object(W.a)(M))}}]);