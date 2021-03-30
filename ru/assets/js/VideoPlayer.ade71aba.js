(window.webpackJsonp=window.webpackJsonp||[]).push([[1162],{1538:function(e,t,n){"use strict";t.a=function(e){return!e||null===e.offsetParent}},4012:function(e,t,n){"use strict";n.r(t);n(421),n(437),n(433),n(430),n(438),n(439);var r,o=n(488),i=n.n(o),a=n(407),s=n.n(a),l=n(414),c=n.n(l),p=n(416),d=n.n(p),u=n(424),y=n.n(u),f=n(418),h=n.n(f),v=n(419),g=n.n(v),m=n(417),P=n.n(m),b=n(412),w=n.n(b),E=n(0),O=n.n(E),S=(n(404),n(450)),k=n.n(S),I=n(4095),j=n(6081),V=n.n(j),R=n(454),x=n(423),D=n(1448),L=n.n(D),B=n(471),T=n.n(B),C=n(543),J=n(809),N=n(483),M=n(459),U=n(1538),z=n(780),F=n(458),H=n(420),K=n(442),W=n(6100);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P()(e);if(t){var o=P()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g()(this,n)}}Object(H.a)("Video");var G=Object(C.a)("video-player"),Q=k()("isle:video-player"),X=["center","startTime","voiceID","t","tReady"];var Y=function(e){h()(n,e);var t=A(n);function n(e){var r;return c()(this,n),r=t.call(this,e),w()(y()(r),"isInViewport",(function(){if(Q("Check whether video player is in viewport..."),!r.videoPlayer)return!1;var e=r.videoPlayer.getBoundingClientRect().top;r.setState({inViewport:e>=0&&e<=window.innerHeight})})),w()(y()(r),"handleStart",(function(){r.context.log({id:r.id,type:F.Mc,value:r.state.progress.playedSeconds}),r.props.onStart()})),w()(y()(r),"handlePlay",(function(){r.context.log({id:r.id,type:F.Kc,value:r.state.progress.playedSeconds}),r.props.onPlay()})),w()(y()(r),"handlePause",(function(){r.context.log({id:r.id,type:F.Jc,value:r.state.progress.playedSeconds}),r.props.onPause()})),w()(y()(r),"handleSeek",(function(e){r.context.log({id:r.id,type:F.Lc,value:e}),r.props.onSeek(e)})),w()(y()(r),"handleReady",(function(e){(r.player=e,r.props.startTime)&&r.player.getInternalPlayer().seekTo(r.props.startTime)})),w()(y()(r),"handleEnded",(function(){r.context.log({id:r.id,type:F.Ic,value:r.state.progress.playedSeconds}),r.props.onEnded()})),w()(y()(r),"handleError",(function(e){var t;switch(Q("Encountered an error: "+e),e){case 150:t=r.props.t("playback-disabled");break;default:t=r.props.t("video-not-loaded")}r.setState({encounteredError:t})})),w()(y()(r),"handleProgress",(function(e){r.setState({progress:e})})),w()(y()(r),"pausePlayer",(function(){r.player.getInternalPlayer().pauseVideo()})),w()(y()(r),"startPlayer",(function(){r.player.getInternalPlayer().playVideo()})),w()(y()(r),"stopPlayer",(function(){r.player.getInternalPlayer().stopVideo()})),r.id=e.id||G(e),r.state={encounteredError:null,progress:{},inViewport:!0},r}return d()(n,[{key:"componentDidMount",value:function(){this.props.playing&&(z.a?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}},{key:"componentDidUpdate",value:function(e){this.props.playing&&!e.playing&&(z.a?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}},{key:"componentWillUnmount",value:function(){(z.a?document.getElementById("Lesson"):document).removeEventListener("scroll",this.isInViewport)}},{key:"renderError",value:function(){var e=this;if(!this.state.encounteredError)return null;var t=s()(N.a,{tooltip:this.props.t("retry")},void 0,s()(x.a,{size:"sm",variant:"light-outline",onClick:function(){e.setState({encounteredError:null})},style:{position:"absolute",top:5,right:5}},void 0,r||(r=s()("i",{className:"fas fa-redo"}))));return s()("div",{style:{position:"relative"}},void 0,s()("pre",{},void 0,this.state.encounteredError),t)}},{key:"render",value:function(){var e=this;if(!this.props.url)return s()(R.a,{variant:"danger"},void 0,this.props.t("url-missing"));var t=this.props,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t.width,height:t.height,marginTop:"10px",marginBottom:"10px"},t.style);t.center&&(n.marginLeft="auto",n.marginRight="auto"),t=L()(t,X);var r,o=Object(U.a)(this.videoPlayer);if(!this.props.playing||this.state.inViewport&&!o||this.player){var a={};T()(t.url,"yout")&&(a={youtube:{playerVars:{showinfo:0,rel:0,modestbranding:1}}}),o&&(t.playing=!1),r=s()(E.Fragment,{},void 0,s()(J.a,{reference:this,id:this.props.voiceID,commands:W}),this.state.encounteredError?this.renderError():O.a.createElement(V.a,i()({},t,{onStart:this.handleStart,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onProgress:this.handleProgress,onReady:this.handleReady,onSeek:this.handleSeek,onError:this.handleError,progressInterval:1e3,config:a})))}else r=null;return O.a.createElement("div",{id:this.id,style:n,className:"video",ref:function(t){var n,r,o;e.videoPlayer||(e.videoPlayer=t,n=e.videoPlayer,r=e.isInViewport,o={root:document.documentElement},new IntersectionObserver((function(e,t){e.forEach((function(e){r(e.intersectionRatio>0)}))}),o).observe(n))}},r)}}]),n}(E.Component);Y.defaultProps={url:"",controls:!1,playing:!1,volume:.8,center:!0,height:360,width:640,loop:!1,voiceID:null,startTime:null,style:{},onEnded:function(){},onPause:function(){},onPlay:function(){},onStart:function(){},onSeek:function(){}},Y.contextType=M.a,t.default=Object(I.a)("Video")(Object(K.a)(Y))},6100:function(e){e.exports=JSON.parse('[{"command":"startPlayer","trigger":["start","begin","continue"],"description":"Start player"},{"command":"pausePlayer","trigger":"pause","description":"Pause player"},{"command":"stopPlayer","trigger":"stop","description":"Stop player"}]')}}]);