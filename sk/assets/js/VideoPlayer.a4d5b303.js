"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6964],{468685:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(497326),o=n(894578),i=n(55196),a=n(202784),s=n(213980),l=n.n(s),p=n(690299),d=n.n(p),c=n(198),u=n(280960),y=n(822736),h=n(770561),f=n(635314),m=n.n(f),g=n(287013),v=n.n(g),P=n(24551),E=n(923723),b=n(708579),Z=n(267682),w=n(489572),S=n(289973),I=n(382617),k=n(338664),O=JSON.parse('[{"command":"startPlayer","trigger":["start","begin","continue"],"description":"Start player"},{"command":"pausePlayer","trigger":"pause","description":"Pause player"},{"command":"stopPlayer","trigger":"stop","description":"Stop player"}]'),V=Object.defineProperty,T=Object.defineProperties,x=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,R=function(e,t,n){return t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},C=function(e,t){for(var n in t||(t={}))D.call(t,n)&&R(e,n,t[n]);if(j)for(var r,o=(0,i.Z)(j(t));!(r=o()).done;){n=r.value;L.call(t,n)&&R(e,n,t[n])}return e},B=function(e,t,n){return R(e,"symbol"!=typeof t?t+"":t,n),n},N=(0,P.Z)("video-player"),U=d()("isle:video-player"),W=["center","startTime","voiceID","t","tReady"];var q=function(e){function t(t){var n;return n=e.call(this,t)||this,B((0,r.Z)(n),"isInViewport",(function(){if(U("Check whether video player is in viewport..."),!n.videoPlayer)return!1;var e=n.videoPlayer.getBoundingClientRect().top;n.setState({inViewport:e>=0&&e<=window.innerHeight})})),B((0,r.Z)(n),"handleStart",(function(){n.context.log({id:n.id,type:I.Om,value:n.state.progress.playedSeconds}),n.props.onStart()})),B((0,r.Z)(n),"handlePlay",(function(){n.context.log({id:n.id,type:I.Z6,value:n.state.progress.playedSeconds}),n.props.onPlay()})),B((0,r.Z)(n),"handlePause",(function(){n.context.log({id:n.id,type:I.ot,value:n.state.progress.playedSeconds}),n.props.onPause()})),B((0,r.Z)(n),"handleSeek",(function(e){n.context.log({id:n.id,type:I.a4,value:e}),n.props.onSeek(e)})),B((0,r.Z)(n),"handleReady",(function(e){(n.player=e,n.props.startTime)&&n.player.getInternalPlayer().seekTo(n.props.startTime)})),B((0,r.Z)(n),"handleEnded",(function(){n.context.log({id:n.id,type:I.Kq,value:n.state.progress.playedSeconds}),n.props.onEnded()})),B((0,r.Z)(n),"handleError",(function(e){var t;if(U("Encountered an error: "+e),150===e)t=n.props.t("playback-disabled");else t=n.props.t("video-not-loaded");n.setState({encounteredError:t})})),B((0,r.Z)(n),"handleProgress",(function(e){n.setState({progress:e})})),B((0,r.Z)(n),"pausePlayer",(function(){n.player.getInternalPlayer().pauseVideo()})),B((0,r.Z)(n),"startPlayer",(function(){n.player.getInternalPlayer().playVideo()})),B((0,r.Z)(n),"stopPlayer",(function(){n.player.getInternalPlayer().stopVideo()})),n.id=t.id||N(t),n.state={encounteredError:null,progress:{},inViewport:!0},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.playing&&(S.Z?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)},n.componentDidUpdate=function(e){this.props.playing&&!e.playing&&(S.Z?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)},n.componentWillUnmount=function(){(S.Z?document.getElementById("Lesson"):document).removeEventListener("scroll",this.isInViewport)},n.renderError=function(){var e=this;if(!this.state.encounteredError)return null;var t=a.createElement(b.Z,{tooltip:this.props.t("retry")},a.createElement(h.Z,{size:"sm",variant:"light-outline",onClick:function(){e.setState({encounteredError:null})},style:{position:"absolute",top:5,right:5}},a.createElement("i",{className:"fas fa-redo"})));return a.createElement("div",{style:{position:"relative"}},a.createElement("pre",null,this.state.encounteredError),t)},n.render=function(){var e=this;if(!this.props.url)return a.createElement(y.Z,{variant:"danger"},this.props.t("url-missing"));var t=this.props,n=C({width:t.width,height:t.height,marginTop:"10px",marginBottom:"10px"},t.style);t.center&&(n.marginLeft="auto",n.marginRight="auto"),t=m()(t,W);var r,o,i,s=(0,w.Z)(this.videoPlayer);if(!this.props.playing||this.state.inViewport&&!s||this.player){var l={};v()(t.url,"yout")&&(l={youtube:{playerVars:{showinfo:0,rel:0,modestbranding:1}}}),s&&(t.playing=!1),r=a.createElement(a.Fragment,null,a.createElement(E.Z,{reference:this,id:this.props.voiceID,commands:O}),this.state.encounteredError?this.renderError():a.createElement(u.Z,(o=C({},t),i={onStart:this.handleStart,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onProgress:this.handleProgress,onReady:this.handleReady,onSeek:this.handleSeek,onError:this.handleError,progressInterval:1e3,config:l},T(o,x(i)))))}else r=null;return a.createElement("div",{id:this.id,style:n,className:"video",ref:function(t){var n,r,o;e.videoPlayer||(e.videoPlayer=t,n=e.videoPlayer,r=e.isInViewport,o={root:document.documentElement},new IntersectionObserver((function(e,t){e.forEach((function(e){r(e.intersectionRatio>0)}))}),o).observe(n))}},r)},t}(a.Component);q.propTypes={url:l().string,controls:l().bool,playing:l().bool,volume:l().number,center:l().bool,height:l().oneOfType([l().string,l().number]),width:l().oneOfType([l().string,l().number]),loop:l().bool,voiceID:l().string,startTime:l().number,style:l().object,onEnded:l().func,onPause:l().func,onPlay:l().func,onStart:l().func,onSeek:l().func},q.defaultProps={url:"",controls:!1,playing:!1,volume:.8,center:!0,height:360,width:640,loop:!1,voiceID:null,startTime:null,style:{},onEnded:function(){},onPause:function(){},onPlay:function(){},onStart:function(){},onSeek:function(){}},q.contextType=Z.Z;var z=(0,c.Z)("video")((0,k.W)(q))},489572:function(e,t){t.Z=function(e){return!e||null===e.offsetParent}}}]);