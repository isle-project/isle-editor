"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16964],{276900:function(e,t,r){r.r(t);var n=r(202784),s=r(213980),o=r.n(s),i=r(690299),l=r.n(i),a=r(198),p=r(280960),h=r(822736),d=r(770561),c=r(635314),u=r.n(c),y=r(287013),g=r.n(y),m=r(417332),f=r(112114),v=r(123103),E=r(257513),P=r(539365),b=r(691334),w=r(741082),S=Object.defineProperty,I=Object.defineProperties,k=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&T(e,r,t[r]);if(O)for(var r of O(t))V.call(t,r)&&T(e,r,t[r]);return e},j=(e,t,r)=>(T(e,"symbol"!=typeof t?t+"":t,r),r);const L=(0,m.Z)("video-player"),R=l()("isle:video-player"),C=["center","startTime","t","tReady"];class B extends n.Component{constructor(e){super(e),j(this,"isInViewport",(()=>{if(R("Check whether video player is in viewport..."),!this.videoPlayer)return!1;const e=this.videoPlayer.getBoundingClientRect().top;this.setState({inViewport:e>=0&&e<=window.innerHeight})})),j(this,"handleStart",(()=>{this.context.log({id:this.id,type:b.Omi,value:this.state.progress.playedSeconds}),this.props.onStart()})),j(this,"handlePlay",(()=>{this.context.log({id:this.id,type:b.Z6M,value:this.state.progress.playedSeconds}),this.props.onPlay()})),j(this,"handlePause",(()=>{this.context.log({id:this.id,type:b.ott,value:this.state.progress.playedSeconds}),this.props.onPause()})),j(this,"handleSeek",(e=>{this.context.log({id:this.id,type:b.a4O,value:e}),this.props.onSeek(e)})),j(this,"handleReady",(e=>{if(this.player=e,this.props.startTime){this.player.getInternalPlayer().seekTo(this.props.startTime)}})),j(this,"handleEnded",(()=>{this.context.log({id:this.id,type:b.Kqt,value:this.state.progress.playedSeconds}),this.props.onEnded()})),j(this,"handleError",(e=>{let t;if(R("Encountered an error: "+e),150===e)t=this.props.t("playback-disabled");else t=this.props.t("video-not-loaded");this.setState({encounteredError:t})})),j(this,"handleProgress",(e=>{this.setState({progress:e})})),j(this,"pausePlayer",(()=>{this.player.getInternalPlayer().pauseVideo()})),j(this,"startPlayer",(()=>{this.player.getInternalPlayer().playVideo()})),j(this,"stopPlayer",(()=>{this.player.getInternalPlayer().stopVideo()})),this.id=e.id||L(e),this.state={encounteredError:null,progress:{},inViewport:!0}}componentDidMount(){if(this.props.playing){(P.Z?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}}componentDidUpdate(e){if(this.props.playing&&!e.playing){(P.Z?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}}componentWillUnmount(){(P.Z?document.getElementById("Lesson"):document).removeEventListener("scroll",this.isInViewport)}renderError(){if(!this.state.encounteredError)return null;const e=n.createElement(f.Z,{tooltip:this.props.t("retry")},n.createElement(d.Z,{size:"sm",variant:"light-outline",onClick:()=>{this.setState({encounteredError:null})},style:{position:"absolute",top:5,right:5}},n.createElement("i",{className:"fas fa-redo"})));return n.createElement("div",{style:{position:"relative"}},n.createElement("pre",null,this.state.encounteredError),e)}render(){if(!this.props.url)return n.createElement(h.Z,{variant:"danger"},this.props.t("url-missing"));let e=this.props;const t=x({width:e.width,height:e.height,marginTop:"10px",marginBottom:"10px"},e.style);e.center&&(t.marginLeft="auto",t.marginRight="auto"),e=u()(e,C);const r=(0,E.Z)(this.videoPlayer);let s;if(!this.props.playing||this.state.inViewport&&!r||this.player){let t={};g()(e.url,"yout")&&(t={youtube:{playerVars:{showinfo:0,rel:0,modestbranding:1}}}),r&&(e.playing=!1),s=n.createElement(n.Fragment,null,this.state.encounteredError?this.renderError():n.createElement(p.Z,(o=x({},e),i={onStart:this.handleStart,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onProgress:this.handleProgress,onReady:this.handleReady,onSeek:this.handleSeek,onError:this.handleError,progressInterval:1e3,config:t},I(o,k(i)))))}else s=null;var o,i;return n.createElement("div",{id:this.id,style:t,className:"video",ref:e=>{this.videoPlayer||(this.videoPlayer=e,function(e,t){const r={root:document.documentElement};new IntersectionObserver(((e,r)=>{e.forEach((e=>{t(e.intersectionRatio>0)}))}),r).observe(e)}(this.videoPlayer,this.isInViewport))}},s)}}B.propTypes={url:o().string,controls:o().bool,playing:o().bool,volume:o().number,center:o().bool,height:o().oneOfType([o().string,o().number]),width:o().oneOfType([o().string,o().number]),loop:o().bool,startTime:o().number,style:o().object,onEnded:o().func,onPause:o().func,onPlay:o().func,onStart:o().func,onSeek:o().func},B.defaultProps={url:"",controls:!1,playing:!1,volume:.8,center:!0,height:360,width:640,loop:!1,startTime:null,style:{},onEnded(){},onPause(){},onPlay(){},onStart(){},onSeek(){}},B.contextType=v.Z,t.default=(0,a.Z)("video")((0,w.W)(B))},257513:function(e,t){t.Z=function(e){return!e||null===e.offsetParent}}}]);