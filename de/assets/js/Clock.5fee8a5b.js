(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{6432:function(t,e,n){"use strict";n.r(e);n(444),n(438),n(447),n(446),n(440),n(428),n(417),n(423);var r=n(406),i=n.n(r),o=n(414),a=n.n(o),c=n(418),u=n.n(c),s=n(427),p=n.n(s),f=n(420),l=n.n(f),m=n(421),d=n.n(m),g=n(419),h=n.n(g),y=n(413),v=n.n(y),w=n(0);n(404);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d()(this,n)}}var O=function(t){l()(n,t);var e=b(n);function n(t){var r;return a()(this,n),r=e.call(this,t),v()(p()(r),"updateTime",(function(){r.props.duration?r.updateDuration():r.updateDate()})),v()(p()(r),"updateDuration",(function(){var t=(new Date).getTime()-r.state.startTime,e=new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});r.setState({time:e})})),v()(p()(r),"updateDate",(function(){var t;if(r.props.format)switch(r.props.format){case"HH":t=(new Date).toLocaleTimeString([],{hour:"2-digit"});break;case"HH:MM":t=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});break;case"HH:MM:SS":t=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}else t=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});r.state.time!==t&&r.setState({time:t})})),r.state={time:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),startTime:(new Date).getTime()},r}return u()(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.updateTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){v()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({fontSize:12,fontFamily:"monospace"},this.props.style);return i()("span",{style:t,className:this.props.className},void 0,this.state.time)}}]),n}(w.Component);O.defaultProps={duration:!1,format:"",className:"",style:{}},e.default=O}}]);