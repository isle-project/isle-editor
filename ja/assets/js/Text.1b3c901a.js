(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{3809:function(e,t,r){"use strict";r.r(t);r(428),r(417),r(423);var n=r(406),s=r.n(n),a=(r(681),r(414)),i=r.n(a),o=r(418),c=r.n(o),p=r(420),u=r.n(p),l=r(421),h=r.n(l),f=r(419),d=r.n(f),w=r(0),v=r.n(w),y=(r(404),r(1646)),m=r.n(y),S=r(5264),g=r.n(S),x=r(453),k=r.n(x),R=r(5265),D=r.n(R),I=r(962);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var s=d()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return h()(this,r)}}var U=k()("isle:text"),T=[{command:"textToSpeech",trigger:"text to speech",description:"Read out the text"}],_=m()({html:!0,xhtmlOut:!0,breaks:!0,typographer:!1});_.use(g.a,{throwOnError:!1,errorColor:"#cc0000"});var b=function(e){u()(r,e);var t=N(r);function r(e){var n;return i()(this,r),(n=t.call(this,e)).state={rawUnaltered:e.raw,raw:e.raw.split("\n").map((function(e){return D()(e)})).join("\n")},n}return c()(r,[{key:"textToSpeech",value:function(){U("Read out text: "+this.props.raw);var e=new SpeechSynthesisUtterance(this.props.raw);e.lang="en-US",window.speechSynthesis.speak(e)}},{key:"render",value:function(){if(this.props.raw){var e=this.state.raw,t={__html:this.props.inline?_.renderInline(e):_.render(e)};return s()("div",{className:this.props.className,style:this.props.style},void 0,s()(I.a,{reference:this,id:this.props.voiceID,commands:T}),s()("div",{dangerouslySetInnerHTML:t}))}var r=v.a.Children.map(this.props.children,(function(e){return"string"==typeof e?s()("span",{dangerouslySetInnerHTML:{__html:_.render(e)}}):e}));return s()("div",{className:this.props.className,style:this.props.style},void 0,r)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r={};return e.raw!==t.rawUnaltered&&(r.rawUnaltered=e.raw,r.raw=e.raw.split("\n").map((function(e){return D()(e)})).join("\n")),r}}]),r}(w.Component);b.defaultProps={raw:"",className:"",inline:!1,style:{},voiceID:null},t.default=b}}]);