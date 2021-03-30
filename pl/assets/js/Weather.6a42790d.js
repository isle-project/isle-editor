(window.webpackJsonp=window.webpackJsonp||[]).push([[1175],{6453:function(e,t,a){"use strict";a.r(t);a(421);var n=a(414),r=a.n(n),i=a(416),o=a.n(i),s=a(424),c=a.n(s),l=a(418),u=a.n(l),h=a(419),d=a.n(h),p=a(417),v=a.n(p),m=a(412),f=a.n(m),w=a(407),g=a.n(w),y=a(448),b=a.n(y),N=(a(1035),a(482),a(0)),D=(a(404),a(450)),k=a.n(D),x=a(1469),I=a.n(x),O=a(4095),R=a(548),W=a.n(R),j=a(809),C=a(459),P=a(420),S=a(442);var B=function(e){var t=e.weather;return t?g()("div",{className:"weather-description"},void 0,t.main," (",t.description,")"):null};var J,T,E=function(e){var t=e.name,a=e.sys;return g()("div",{className:"weather-location"},void 0,g()("div",{className:"weather-place"},void 0,t,","),g()("div",{className:"weather-location-country"},void 0,a.country))};a(376);function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}Object(P.a)("Weather");var G=k()("isle:weather"),K=[{command:"trigger",trigger:["in"],description:"Location name",text:!0},{command:"reset",trigger:["close"],description:"Close weather modal window"}],L=function(e){var t,a,n=e.main,r=e.weather,i=Object(N.useState)("fahrenheit"),o=b()(i,2),s=o[0],c=o[1],l=function(){c("celsius"===s?"fahrenheit":"celsius")};"celsius"===s?(t=W()((n.temp-32)*(5/9),-2),a="C"):(t=W()(n.temp),a="F");var u="http://openweathermap.org/img/wn/".concat(r.icon,"@2x.png");return g()("div",{className:"weather-temperature"},void 0,t,"\xb0",g()("span",{role:"button",onClick:l,onKeyPress:l,className:"weather-temperature-type",tabIndex:0},void 0,a),g()("img",{className:"weather-icon",alt:"Weather icon",src:u}))},M=function(e){var t=e.main,a=e.wind,n=e.t;return g()("div",{className:"weather-details"},void 0,g()("div",{className:"weather-humidity"},void 0,n("humidity"),": ",t.humidity,"%"),g()("div",{className:"weather-wind"},void 0,n("wind"),": ",a.speed," ","m/sec",J||(J=g()("br",{})),n("direction"),": ",a.deg))},q=function(e){u()(a,e);var t=F(a);function a(e){var n;return r()(this,a),n=t.call(this,e),f()(c()(n),"register",(function(){n.context.speechInterface.register({name:n.props.voiceID,ref:c()(n),commands:K})})),f()(c()(n),"reset",(function(){n.setState({data:null})})),f()(c()(n),"trigger",(function(e,t){G("Trigger weather retrieval..."),n.callback=t||null;var a=n.props.t("in"),r=e.search(a);if(-1!==(r+=a.length+1)){var i=e.substring(r,e.length);G("Get weather info for location: "+i),n.getData(i)}})),f()(c()(n),"getData",(function(e){var t=n.context;e&&t.server&&I.a.get("".concat(t.server,"/weather?location=").concat(e)).then((function(e){n.setWeatherData(e.data)})).catch((function(e){G("Encountered an error: "+e.message)}))})),f()(c()(n),"setWeatherData",(function(e){n.callback&&n.callback(e),n.setState({data:e})})),n.state={data:null},n}return o()(a,[{key:"componentDidMount",value:function(){this.getData(this.props.location),this.props.voiceID&&this.register()}},{key:"render",value:function(){var e=null;this.props.voiceID&&(e=g()(j.a,{id:this.props.voiceID,reference:this,commands:K}));var t=this.state.data;return t?g()("div",{className:"weather",style:this.props.style},void 0,e,g()(E,{name:t.name,sys:t.sys}),g()(B,{weather:t.weather[0]}),g()(L,{main:t.main,weather:t.weather[0]}),g()(M,{main:t.main,wind:t.wind,t:this.props.t}),T||(T=g()("br",{}))):g()("div",{className:"weather",style:this.props.style},void 0,g()("div",{className:"weather-loading title"},void 0,this.props.t("loading-weather-data-for",{loc:this.props.location})))}}]),a}(N.Component);q.defaultProps={location:null,voiceID:null,style:{}},q.contextType=C.a;t.default=Object(O.a)("Weather")(Object(S.a)(q))}}]);