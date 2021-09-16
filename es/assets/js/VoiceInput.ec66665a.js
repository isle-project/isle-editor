(self.webpackChunk=self.webpackChunk||[]).push([[4331],{284142:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(55196),r=n(202784),l=n(213980),a=n.n(l),i=n(690299),c=n.n(i),s=n(376699),u=n(31071),m=n(259893),d=n(267682),p=n(525439),f=n(894578),g=n(24077),h=n.n(g),v=function(e){function t(){return e.apply(this,arguments)||this}return(0,f.Z)(t,e),t.prototype.render=function(){return r.createElement("button",{onClick:this.props.onClick})},t}(r.Component);v.propTypes={onClick:a().func},v.defaultProps={onClick:function(){}};var b=h()||v,w=Object.defineProperty,y=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=function(e,t,n){return t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},E=function(e,t){for(var n in t||(t={}))k.call(t,n)&&S(e,n,t[n]);if(y)for(var r,l=(0,o.Z)(y(t));!(r=l()).done;){n=r.value;C.call(t,n)&&S(e,n,t[n])}return e},x=c()("isle:voice-input");var R=function(e){var t=e.autorecord,o=e.bind,l=e.defaultValue,a=e.grammars,i=e.id,c=e.maxAlternatives,f=e.remote,g=e.startTooltip,h=e.stopTooltip,v=e.speechInterface,w=e.onChange,y=e.onClick,k=e.onFinalText,C=e.onRecordingStart,S=e.onRecordingStop,R=e.onSegment,N=e.onSubmit,T=e.timeout,P=(0,r.useState)(t),F=P[0],O=P[1],Z=(0,r.useContext)(d.Z),j=(0,s.$)("input").t,A=(0,r.useState)(o&&Z.state?Z.state[o]:l),z=A[0],I=A[1],V=(0,r.useRef)(),B=(0,r.useRef)(),Y=(0,r.useCallback)((function(e){var t,r=e.target.value;(I(r),w(r),o)&&n.g.lesson.setState(((t={})[o]=r,t))}),[o,w]),D=(0,r.useCallback)((function(e){if(13===e.keyCode)N(z)}),[z,N]),G=(0,r.useCallback)((function(){x("Set `isRecording` to false..."),O(!1),V.current&&V.current.stop(),S()}),[S]),H=(0,r.useCallback)((function(){V.current=null;var e=window.SpeechRecognition||window.webkitSpeechRecognition;if(e){var t=new e;t.lang=p.a.language,t.continuous=!0,t.interimResults=!0,t.maxAlternatives=c,t.grammars=function(e){for(var t=t||webkitSpeechGrammarList,n=new t,o=0;o<e.length;o++){var r=e[o],l=r.src,a=r.weight;n.addFromString(l,a)}return n}(a),t.onerror=function(e){if(x("Encountered an error..."),"not-allowed"===e.error||"service-not-allowed"===e.error)return O(!1),Z.addNotification({title:"Not allowed",message:"No permission to use the speech recognition service",level:"error",position:"tr"});try{t.start()}catch(n){x(n)}},t.onend=function(){x("onend: %s",i),F&&t.start()},t.onstart=function(){x("onstart: %s",i),C()},t.onresult=function(e){if(x("Processing result..."),void 0!==e.results)for(var t=e.resultIndex;t<e.results.length;++t){var n=e.results[t];if(e.results[t].isFinal){T&&(B.current=setTimeout(G,T)),x("Received final text");var o=void 0;if(c>1){o=new Array(n.length);for(var r=0;r<n.length;r++)o[r]=n[r].transcript}else o=n[0].transcript;I(o),k(o),v&&v.check(o,{onStart:function(){G()},onEnd:function(){H()}})}else{B.current&&clearTimeout(B.current);var l=void 0;if(c>1){l=new Array(n.length);for(var a=0;a<n.length;a++)l[a]=n[a].transcript}else l=n[0].transcript;I(l),R(l)}}else x("Something went wrong...")},t.start(),V.current=t}x("Set `isRecording` to true..."),O(!0)}),[a,i,F,c,C,Z,v,G,T,k,R]),K=(0,r.useCallback)((function(e){return e?!0===F?h||j("click-to-stop-recording"):g||j("click-to-start-recording"):"Your browser does not support voice recognition. You may use the Chrome Browser instead"}),[F,g,h,j]);(0,r.useEffect)((function(){f&&(window.onkeydown=function(e){switch(e.keyCode){case f.stop:G();break;case f.start:F||H();break;case f.toggle:F?G():H()}}),t&&(x("Should record voice..."),H())}),[t,f,F,H,G]);var L=(0,r.useCallback)((function(e){y(e),F?G():H()}),[F,H,G,y]),M="voice-microphone";!0===F&&(M="voice-microphone voice-recording");var $=K(function(){try{var e=e||webkitSpeechRecognition;return!!e}catch(t){return!1}}()),q=r.createElement(u.Z,{id:e.id+"-voice-input-tooltip"},$);switch(e.mode){case"full":return r.createElement(r.Fragment,null,e.legend?r.createElement("label",null,e.legend):null,r.createElement("div",{className:"input voice-input "+e.className,style:E({height:e.height,width:e.width},e.style)},r.createElement("input",{className:"voice-input-text",type:"text",onKeyDown:D,onChange:Y,placeholder:null!==e.placeholder?e.placeholder:j("enter-text"),value:z}),r.createElement(m.Z,{placement:e.tooltipPlacement,overlay:q},r.createElement(b,{onClick:L,className:M}))));case"status":return r.createElement(r.Fragment,null,e.legend?r.createElement("label",null,e.legend):null,r.createElement("div",{className:"voice-input-status-text "+e.className,style:E({height:e.height,width:e.width},e.style)},r.createElement("div",{className:"voice-input-status"},z),r.createElement(m.Z,{placement:"bottom",overlay:q},r.createElement(b,{onClick:L,className:M}))));case"microphone":return r.createElement(r.Fragment,null,e.legend?r.createElement("label",null,e.legend):null,r.createElement("div",{className:"voice-solo-microphone "+e.className,style:E({height:e.height,width:e.width},e.style)},r.createElement(m.Z,{placement:"bottom",overlay:q},r.createElement(b,{onClick:L,className:M}))));case"none":return null}};R.defaultProps={autorecord:!1,defaultValue:"",grammars:[],legend:"",mode:"full",maxAlternatives:1,onChange:function(){},onClick:function(){},onFinalText:function(){},onSegment:function(){},onRecordingStart:function(){},onRecordingStop:function(){},onSubmit:function(){},placeholder:null,remote:null,className:"",style:{},timeout:null,stopTooltip:null,startTooltip:null,tooltipPlacement:"left",width:500,height:36},R.propTypes={autorecord:a().bool,defaultValue:a().string,grammars:a().array,legend:a().oneOfType([a().string,a().node]),mode:a().string,maxAlternatives:a().number,onChange:a().func,onClick:a().func,onFinalText:a().func,onRecordingStart:a().func,onRecordingStop:a().func,onSegment:a().func,onSubmit:a().func,placeholder:a().string,remote:a().object,className:a().string,style:a().object,timeout:a().number,stopTooltip:a().string,startTooltip:a().string,tooltipPlacement:a().oneOf(["top","right","bottom","left"]),width:a().number,height:a().number};var N=R},24077:function(e,t,n){var o=n(202784);function r(e){return o.createElement("svg",e,[o.createElement("defs",{id:"defs3723",key:0}),o.createElement("path",{d:"m 75.897176,155.35465 h -20.741 c -4.834,0 -4.84,15.963 0,15.963 h 53.854004 c 4.839,0 4.833,-15.963 0,-15.963 H 88.718176 l -0.602,-10.14 c 35.693004,-3.164 48.733004,-32.896 47.931004,-63.961003 -0.198,-7.666 -13.296,-6.779 -12.443,0.979 3.413,71.099003 -86.068004,69.681003 -83.271004,-1.358 0.251,-6.389 -11.982,-6.453 -12.232,0.46 -0.598,28.619003 13.64,60.803003 48.257,63.880003 z M 107.47818,48.083647 c -0.528,-14.312 -6.628,-23.486 -14.452004,-27.655 -6.579,-3.506 -14.45,-3.5 -21.076,-0.113 -8.071,4.127 -14.504,13.346 -15.273,27.676 l 0.005,20.069 h 50.800004 z m -9.674004,-36.613 c 10.769004,5.739 19.146004,17.829 19.826004,36.254 l 0.008,44.158 c 0,12.720003 -7.705,26.975003 -18.903004,33.302003 -9.819,5.547 -21.804,5.594 -31.748,0.326 -10.292,-5.451 -18.583,-16.519 -20.432,-33.071003 l -0.031,-44.705 c 0,-14.39 7.714,-29.763 20.808,-36.458 9.579,-4.8959999 20.965,-4.8729999 30.472,0.194 z",id:"path3713",style:{clipRule:"evenodd",fillRule:"evenodd"},key:1})])}r.defaultProps={x:"0px",y:"0px",viewBox:"0 0 164 180",xmlSpace:"preserve",id:"svg3719",width:"32",height:"35"},e.exports=r,r.default=r}}]);