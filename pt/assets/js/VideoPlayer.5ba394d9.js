(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1670:function(e,t,n){"use strict";t.a=function(e){return!e||null===e.offsetParent}},4018:function(e,t,n){"use strict";n.r(t);n(421),n(438),n(436),n(525),n(540),n(441);var r=n(513),o=n.n(r),i=n(404),a=n.n(i),s=n(412),l=n.n(s),c=n(416),p=n.n(c),d=n(425),u=n.n(d),y=n(418),f=n.n(y),h=n(419),v=n.n(h),g=n(417),m=n.n(g),P=n(410),b=n.n(P),w=n(0),E=n.n(w),O=(n(402),n(451)),S=n.n(O),k=n(4088),I=n(6153),j=n.n(I),V=n(456),R=n(431),x=n(1572),D=n.n(x),B=n(482),L=n.n(B),T=n(612),C=n(961),J=n(499),N=n(465),H=n(1670),U=n(917),z=n(471),F=n(423),G=n(445),K=n(6172);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}Object(F.a)("Video");var q=Object(T.a)("video-player"),A=S()("isle:video-player"),Q=["center","startTime","voiceID","t","tReady"];var X=a()("i",{className:"fas fa-redo"}),Y=function(e){f()(n,e);var t=W(n);function n(e){var r;return l()(this,n),r=t.call(this,e),b()(u()(r),"isInViewport",(function(){if(A("Check whether video player is in viewport..."),!r.videoPlayer)return!1;var e=r.videoPlayer.getBoundingClientRect().top;r.setState({inViewport:e>=0&&e<=window.innerHeight})})),b()(u()(r),"handleStart",(function(){r.context.log({id:r.id,type:z.Kc,value:r.state.progress.playedSeconds}),r.props.onStart()})),b()(u()(r),"handlePlay",(function(){r.context.log({id:r.id,type:z.Ic,value:r.state.progress.playedSeconds}),r.props.onPlay()})),b()(u()(r),"handlePause",(function(){r.context.log({id:r.id,type:z.Hc,value:r.state.progress.playedSeconds}),r.props.onPause()})),b()(u()(r),"handleSeek",(function(e){r.context.log({id:r.id,type:z.Jc,value:e}),r.props.onSeek(e)})),b()(u()(r),"handleReady",(function(e){(r.player=e,r.props.startTime)&&r.player.getInternalPlayer().seekTo(r.props.startTime)})),b()(u()(r),"handleEnded",(function(){r.context.log({id:r.id,type:z.Gc,value:r.state.progress.playedSeconds}),r.props.onEnded()})),b()(u()(r),"handleError",(function(e){var t;switch(A("Encountered an error: "+e),e){case 150:t=r.props.t("playback-disabled");break;default:t=r.props.t("video-not-loaded")}r.setState({encounteredError:t})})),b()(u()(r),"handleProgress",(function(e){r.setState({progress:e})})),b()(u()(r),"pausePlayer",(function(){r.player.getInternalPlayer().pauseVideo()})),b()(u()(r),"startPlayer",(function(){r.player.getInternalPlayer().playVideo()})),b()(u()(r),"stopPlayer",(function(){r.player.getInternalPlayer().stopVideo()})),r.id=e.id||q(e),r.state={encounteredError:null,progress:{},inViewport:!0},r}return p()(n,[{key:"componentDidMount",value:function(){this.props.playing&&(U.a?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}},{key:"componentDidUpdate",value:function(e){this.props.playing&&!e.playing&&(U.a?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}},{key:"componentWillUnmount",value:function(){(U.a?document.getElementById("Lesson"):document).removeEventListener("scroll",this.isInViewport)}},{key:"renderError",value:function(){var e=this;if(!this.state.encounteredError)return null;var t=a()(J.a,{tooltip:this.props.t("retry")},void 0,a()(R.a,{size:"sm",variant:"light-outline",onClick:function(){e.setState({encounteredError:null})},style:{position:"absolute",top:5,right:5}},void 0,X));return a()("div",{style:{position:"relative"}},void 0,a()("pre",{},void 0,this.state.encounteredError),t)}},{key:"render",value:function(){var e=this;if(!this.props.url)return a()(V.a,{variant:"danger"},void 0,this.props.t("url-missing"));var t=this.props,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t.width,height:t.height,marginTop:"10px",marginBottom:"10px"},t.style);t.center&&(n.marginLeft="auto",n.marginRight="auto"),t=D()(t,Q);var r,i=Object(H.a)(this.videoPlayer);if(!this.props.playing||this.state.inViewport&&!i||this.player){var s={};L()(t.url,"yout")&&(s={youtube:{playerVars:{showinfo:0,rel:0,modestbranding:1}}}),i&&(t.playing=!1),r=a()(w.Fragment,{},void 0,a()(C.a,{reference:this,id:this.props.voiceID,commands:K}),this.state.encounteredError?this.renderError():E.a.createElement(j.a,o()({},t,{onStart:this.handleStart,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onProgress:this.handleProgress,onReady:this.handleReady,onSeek:this.handleSeek,onError:this.handleError,progressInterval:1e3,config:s})))}else r=null;return E.a.createElement("div",{id:this.id,style:n,className:"video",ref:function(t){var n,r,o;e.videoPlayer||(e.videoPlayer=t,n=e.videoPlayer,r=e.isInViewport,o={root:document.documentElement},new IntersectionObserver((function(e,t){e.forEach((function(e){r(e.intersectionRatio>0)}))}),o).observe(n))}},r)}}]),n}(w.Component);Y.defaultProps={url:"",controls:!1,playing:!1,volume:.8,center:!0,height:360,width:640,loop:!1,voiceID:null,startTime:null,style:{},onEnded:function(){},onPause:function(){},onPlay:function(){},onStart:function(){},onSeek:function(){}},Y.contextType=N.a,t.default=Object(k.a)("Video")(Object(G.a)(Y))},6172:function(e){e.exports=JSON.parse('[{"command":"startPlayer","trigger":["start","begin","continue"],"description":"Start player"},{"command":"pausePlayer","trigger":"pause","description":"Pause player"},{"command":"stopPlayer","trigger":"stop","description":"Stop player"}]')}}]);