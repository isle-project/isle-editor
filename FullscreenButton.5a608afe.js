(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{5061:function(e,t,r){"use strict";r.r(t);r(414),r(411),r(401),r(400),r(409),r(382),r(369),r(385);var n=r(367),o=r.n(n),s=r(373),i=r.n(s),c=r(375),l=r.n(c),a=r(390),u=r.n(a),p=r(379),f=r.n(p),h=r(380),d=r.n(h),y=r(377),v=r.n(y),b=r(371),g=r.n(b),w=r(0),O=r.n(w),m=r(6674),j=(r(359),r(396)),P=r(454),F=r(711),k=r(480),C=r(776),D=r(392);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){g()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d()(this,r)}}Object(D.a)("FullscreenButton");var B=o()("span",{className:"fa fa-window-maximize"}),z=function(e){f()(r,e);var t=S(r);function r(){var e;return i()(this,r),e=t.call(this),g()(u()(e),"toggleFullscreen",(function(){e.setState({fullscreen:!e.state.fullscreen})})),e.state={fullscreen:!1},e}return l()(r,[{key:"render",value:function(){return o()(w.Fragment,{},void 0,O.a.createElement(C.a,this.props,o()(k.a,{id:"fullscreen_tooltip",placement:"bottom",tooltip:this.props.t("fullscreen-tooltip")},void 0,o()(j.a,{variant:"outline-secondary",size:"sm",onClick:this.toggleFullscreen,style:R({position:"absolute",top:0,right:0,fontSize:12},this.props.style)},void 0,B))),this.state.fullscreen?o()(F.a,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,o()(F.a.Header,{closeButton:!0},void 0,o()(F.a.Title,{as:"h1"},void 0,this.props.header||this.props.t("fullscreen-header"))),o()(F.a.Body,{style:{height:.75*window.innerHeight}},void 0,this.props.wrapInCard?o()(P.a,{body:!0,className:"".concat(this.props.className," panel-fullscreen-view")},void 0,this.props.body):this.props.body),o()(F.a.Footer,{},void 0,this.props.footer,o()(j.a,{onClick:this.toggleFullscreen},void 0,this.props.t("close")))):null)}}]),r}(w.Component);z.defaultProps={className:"",header:null,wrapInCard:!0,style:{}},t.default=Object(m.a)("FullscreenButton")(z)}}]);