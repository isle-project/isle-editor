"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16964],{276900:function(e,t,n){n.r(t);var r=n(202784),o=n(213980),l=n.n(o),a=n(690299),i=n.n(a),s=n(498614),c=n(280960),u=n(822736),d=n(770561),p=n(287013),f=n.n(p),y=n(112114),m=n(257513),b=n(539365),g=n(691334),h=n(487890),v=n(741082),E=Object.defineProperty,k=Object.defineProperties,P=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&O(e,n,t[n]);if(w)for(var n of w(t))C.call(t,n)&&O(e,n,t[n]);return e};const j=i()("isle:video-player");const R=({error:e,t:t,onClick:n})=>{const o=r.createElement(y.Z,{tooltip:t("retry")},r.createElement(d.Z,{size:"sm",variant:"light-outline",onClick:n,style:{position:"absolute",top:5,right:5}},r.createElement("i",{className:"fas fa-redo"})));return r.createElement("div",{style:{position:"relative"}},r.createElement("pre",null,e),o)},Z=e=>{const t=e,{url:n,center:o,playing:l,startTime:a,width:i,height:d,style:p,onEnded:y,onStart:v,onPlay:E,onPause:O,onSeek:Z}=t,I=((e,t)=>{var n={};for(var r in e)S.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&w)for(var r of w(e))t.indexOf(r)<0&&C.call(e,r)&&(n[r]=e[r]);return n})(t,["url","center","playing","startTime","width","height","style","onEnded","onStart","onPlay","onPause","onSeek"]),[x,L]=(0,r.useState)(null),[B,G]=(0,r.useState)(!1),[N,D]=(0,r.useState)({}),{id:H,logAction:V}=(0,h.G)("VIDEO",e),{t:$}=(0,s.$G)("video"),z=(0,r.useRef)(null),A=(0,r.useRef)(null),F=(0,r.useCallback)((()=>{if(j("Check whether video player is in viewport..."),!z.current)return!1;const e=z.current.getBoundingClientRect().top;G(e>=0&&e<=window.innerHeight)}),[]);(0,r.useEffect)((()=>{const e=b.Z?document.getElementById("Lesson"):document;return l&&e.addEventListener("scroll",F),()=>{e.removeEventListener("scroll",F)}}),[l,F]);const W=(0,r.useCallback)((()=>{V(g.tj,N.playedSeconds),v()}),[V,v,N]),q=(0,r.useCallback)((()=>{V(g.NH,N.playedSeconds),E()}),[V,E,N]),J=(0,r.useCallback)((()=>{V(g.E7,N.playedSeconds),O()}),[V,O,N]),K=(0,r.useCallback)((e=>{V(g.tG,e),Z(e)}),[V,Z]),M=(0,r.useCallback)((e=>{if(A.current=e,a){A.current.getInternalPlayer().seekTo(a)}}),[a]),Q=(0,r.useCallback)((()=>{V(g.uR,N.playedSeconds),y()}),[V,y,N]),U=(0,r.useCallback)((e=>{let t;if(j("Encountered an error: "+e),150===e)t=$("playback-disabled");else t=$("video-not-loaded");L(t)}),[$]);if(!n)return r.createElement(u.Z,{variant:"danger"},$("url-missing"));const X=T({width:i,height:d,marginTop:"10px",marginBottom:"10px"},p);o&&(X.marginLeft="auto",X.marginRight="auto");const Y=(0,m.Z)(z.current);let _;if(!l||B&&!Y||A.current){let e={};f()(n,"yout")&&(e={youtube:{playerVars:{showinfo:0,rel:0,modestbranding:1}}}),_=r.createElement(r.Fragment,null,x&&r.createElement(R,{error:x,t:$,onClick:()=>{L(null)}}),r.createElement(c.Z,(ee=T({},I),k(ee,P({url:n,playing:l&&!Y,onStart:W,onPlay:q,onPause:J,onEnded:Q,onProgress:D,onReady:M,onSeek:K,onError:U,progressInterval:1e3,config:e,width:i,height:d})))))}else _=null;var ee;return r.createElement("div",{id:`${H}-outer`,style:X,className:"video",ref:e=>{z.current||(!function(e,t){const n={root:document.documentElement};new IntersectionObserver(((e,n)=>{e.forEach((e=>{t(e.intersectionRatio>0)}))}),n).observe(e)}(e,F),z.current=e)}},_)};Z.propTypes={url:l().string,controls:l().bool,playing:l().bool,volume:l().number,center:l().bool,height:l().oneOfType([l().string,l().number]),width:l().oneOfType([l().string,l().number]),loop:l().bool,startTime:l().number,style:l().object,onEnded:l().func,onPause:l().func,onPlay:l().func,onStart:l().func,onSeek:l().func},Z.defaultProps={url:"",controls:!1,playing:!1,volume:.8,center:!0,height:360,width:640,loop:!1,startTime:null,style:{},onEnded(){},onPause(){},onPlay(){},onStart(){},onSeek(){}},t.default=(0,v.W)(Z)},257513:function(e,t){t.Z=function(e){return!e||null===e.offsetParent}}}]);