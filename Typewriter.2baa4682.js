(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{6753:function(t,e,n){"use strict";n.r(e);n(382),n(369),n(385);var i=n(367),s=n.n(i),o=n(373),r=n.n(o),a=n(375),u=n.n(a),c=n(390),p=n.n(c),l=n(379),h=n.n(l),f=n(380),d=n.n(f),v=n(377),y=n.n(v),x=n(371),m=n.n(x),T=n(0),k=(n(359),n(1386)),g=n.n(k),w=n(433),A=n.n(w);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=y()(t);if(e){var s=y()(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return d()(this,n)}}var R=function(t){h()(n,t);var e=C(n);function n(t){var i;return r()(this,n),i=e.call(this,t),m()(p()(i),"playAudio",(function(t){i.audio.volume=.3+.7*g()()," "!==t&&i.audio.play()})),m()(p()(i),"setText",(function(){if(i.state.ct<i.props.text.length){var t=i.state.ct+1,e=i.props.text.slice(0,t);if(i.props.sound){var n=e[e.length-1];i.playAudio(n)}i.setState({ct:t,actualText:e})}})),m()(p()(i),"setArrayText",(function(){if(i.state.textCt<i.props.text.length){var t=i.props.text[i.state.textCt];if(i.state.ct<t.length){var e=i.state.ct+1,n=t.slice(0,e);if(i.props.sound){var s=n[n.length-1];i.playAudio(s)}i.setState({ct:e,actualText:n})}else{var o=i.state.textCt+1;i.timeout=setTimeout((function(){i.setState({ct:0,textCt:o})}),i.props.hold)}}})),m()(p()(i),"process",(function(){!1===i.started?i.init():i.next()})),i.started=!1,i.state={actualText:"",ct:0,textCt:0},i}return u()(n,[{key:"componentWillUnmount",value:function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=0)}},{key:"init",value:function(){var t=this;this.audio||(this.audio=new Audio("https://isle.heinz.cmu.edu/keystroke2_1544120411143.ogg")),null!==this.props.delay?this.timeout=setTimeout((function(){t.started=!0,t.next()}),this.props.delay):(this.started=!0,this.next())}},{key:"next",value:function(){var t=this.props.interval;this.props.random&&(t=g()()*this.props.deviation,t-=.5*this.props.deviation,t=parseInt(t,10),t+=this.props.interval),A()(this.props.text)?this.timeout=setTimeout(this.setArrayText,t):this.timeout=setTimeout(this.setText,t)}},{key:"type",value:function(){return this.process(),s()("span",{style:this.props.style},void 0,this.state.actualText)}},{key:"render",value:function(){return s()("span",{},void 0,this.type())}}]),n}(T.Component);R.defaultProps={deviation:30,delay:null,hold:2e3,interval:100,random:!1,sound:!1,style:{},text:""},e.default=R}}]);