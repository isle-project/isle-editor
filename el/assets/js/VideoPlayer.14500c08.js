"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6964],{638823:function(e,t,n){n.r(t);var r=n(497326),o=n(894578),i=n(55196),a=n(202784),s=n(213980),l=n.n(s),p=n(690299),d=n.n(p),u=n(198),c=n(280960),y=n(822736),h=n(770561),f=n(635314),g=n.n(f),m=n(287013),v=n.n(m),E=n(24551),P=n(708579),b=n(267682),Z=n(489572),w=n(289973),S=n(382617),I=n(338664),k=Object.defineProperty,O=Object.defineProperties,V=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,L=function(e,t,n){return t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},R=function(e,t){for(var n in t||(t={}))x.call(t,n)&&L(e,n,t[n]);if(T)for(var r,o=(0,i.Z)(T(t));!(r=o()).done;){n=r.value;j.call(t,n)&&L(e,n,t[n])}return e},C=function(e,t,n){return L(e,"symbol"!=typeof t?t+"":t,n),n},B=(0,E.Z)("video-player"),D=d()("isle:video-player"),N=["center","startTime","t","tReady"];var U=function(e){function t(t){var n;return n=e.call(this,t)||this,C((0,r.Z)(n),"isInViewport",(function(){if(D("Check whether video player is in viewport..."),!n.videoPlayer)return!1;var e=n.videoPlayer.getBoundingClientRect().top;n.setState({inViewport:e>=0&&e<=window.innerHeight})})),C((0,r.Z)(n),"handleStart",(function(){n.context.log({id:n.id,type:S.Om,value:n.state.progress.playedSeconds}),n.props.onStart()})),C((0,r.Z)(n),"handlePlay",(function(){n.context.log({id:n.id,type:S.Z6,value:n.state.progress.playedSeconds}),n.props.onPlay()})),C((0,r.Z)(n),"handlePause",(function(){n.context.log({id:n.id,type:S.ot,value:n.state.progress.playedSeconds}),n.props.onPause()})),C((0,r.Z)(n),"handleSeek",(function(e){n.context.log({id:n.id,type:S.a4,value:e}),n.props.onSeek(e)})),C((0,r.Z)(n),"handleReady",(function(e){(n.player=e,n.props.startTime)&&n.player.getInternalPlayer().seekTo(n.props.startTime)})),C((0,r.Z)(n),"handleEnded",(function(){n.context.log({id:n.id,type:S.Kq,value:n.state.progress.playedSeconds}),n.props.onEnded()})),C((0,r.Z)(n),"handleError",(function(e){var t;if(D("Encountered an error: "+e),150===e)t=n.props.t("playback-disabled");else t=n.props.t("video-not-loaded");n.setState({encounteredError:t})})),C((0,r.Z)(n),"handleProgress",(function(e){n.setState({progress:e})})),C((0,r.Z)(n),"pausePlayer",(function(){n.player.getInternalPlayer().pauseVideo()})),C((0,r.Z)(n),"startPlayer",(function(){n.player.getInternalPlayer().playVideo()})),C((0,r.Z)(n),"stopPlayer",(function(){n.player.getInternalPlayer().stopVideo()})),n.id=t.id||B(t),n.state={encounteredError:null,progress:{},inViewport:!0},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.playing&&(w.Z?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)},n.componentDidUpdate=function(e){this.props.playing&&!e.playing&&(w.Z?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)},n.componentWillUnmount=function(){(w.Z?document.getElementById("Lesson"):document).removeEventListener("scroll",this.isInViewport)},n.renderError=function(){var e=this;if(!this.state.encounteredError)return null;var t=a.createElement(P.Z,{tooltip:this.props.t("retry")},a.createElement(h.Z,{size:"sm",variant:"light-outline",onClick:function(){e.setState({encounteredError:null})},style:{position:"absolute",top:5,right:5}},a.createElement("i",{className:"fas fa-redo"})));return a.createElement("div",{style:{position:"relative"}},a.createElement("pre",null,this.state.encounteredError),t)},n.render=function(){var e=this;if(!this.props.url)return a.createElement(y.Z,{variant:"danger"},this.props.t("url-missing"));var t=this.props,n=R({width:t.width,height:t.height,marginTop:"10px",marginBottom:"10px"},t.style);t.center&&(n.marginLeft="auto",n.marginRight="auto"),t=g()(t,N);var r,o,i,s=(0,Z.Z)(this.videoPlayer);if(!this.props.playing||this.state.inViewport&&!s||this.player){var l={};v()(t.url,"yout")&&(l={youtube:{playerVars:{showinfo:0,rel:0,modestbranding:1}}}),s&&(t.playing=!1),r=a.createElement(a.Fragment,null,this.state.encounteredError?this.renderError():a.createElement(c.Z,(o=R({},t),i={onStart:this.handleStart,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onProgress:this.handleProgress,onReady:this.handleReady,onSeek:this.handleSeek,onError:this.handleError,progressInterval:1e3,config:l},O(o,V(i)))))}else r=null;return a.createElement("div",{id:this.id,style:n,className:"video",ref:function(t){var n,r,o;e.videoPlayer||(e.videoPlayer=t,n=e.videoPlayer,r=e.isInViewport,o={root:document.documentElement},new IntersectionObserver((function(e,t){e.forEach((function(e){r(e.intersectionRatio>0)}))}),o).observe(n))}},r)},t}(a.Component);U.propTypes={url:l().string,controls:l().bool,playing:l().bool,volume:l().number,center:l().bool,height:l().oneOfType([l().string,l().number]),width:l().oneOfType([l().string,l().number]),loop:l().bool,startTime:l().number,style:l().object,onEnded:l().func,onPause:l().func,onPlay:l().func,onStart:l().func,onSeek:l().func},U.defaultProps={url:"",controls:!1,playing:!1,volume:.8,center:!0,height:360,width:640,loop:!1,startTime:null,style:{},onEnded:function(){},onPause:function(){},onPlay:function(){},onStart:function(){},onSeek:function(){}},U.contextType=b.Z,t.default=(0,u.Z)("video")((0,I.W)(U))},489572:function(e,t){t.Z=function(e){return!e||null===e.offsetParent}}}]);