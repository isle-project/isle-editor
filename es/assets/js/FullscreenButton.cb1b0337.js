(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{4454:function(t,e,n){"use strict";n.r(e);n(423),n(440),n(438),n(528),n(543),n(444);var r=n(406),o=n.n(r),s=n(414),c=n.n(s),i=n(418),l=n.n(i),a=n(427),u=n.n(a),p=n(420),f=n.n(p),d=n(421),h=n.n(d),y=n(419),v=n.n(y),b=n(413),O=n.n(b),w=n(0),g=n.n(w),m=n(4097),j=(n(404),n(433)),F=n(475),P=n(680),k=n(501),B=n(709),C=n(425);function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){O()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}Object(C.a)("FullscreenButton");var D=o()("span",{className:"fa fa-window-maximize"}),E=function(t){f()(n,t);var e=S(n);function n(){var t;return c()(this,n),t=e.call(this),O()(u()(t),"toggleFullscreen",(function(){t.setState({fullscreen:!t.state.fullscreen})})),t.state={fullscreen:!1},t}return l()(n,[{key:"render",value:function(){return o()(w.Fragment,{},void 0,g.a.createElement(B.a,this.props,o()(k.a,{id:"fullscreen_tooltip",placement:"bottom",tooltip:this.props.t("fullscreen-tooltip")},void 0,o()(j.a,{variant:"outline-secondary",size:"sm",onClick:this.toggleFullscreen,style:N({position:"absolute",top:0,right:0,fontSize:12},this.props.style),"aria-label":this.props.t("fullscreen-tooltip")},void 0,D))),this.state.fullscreen?o()(P.a,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,o()(P.a.Header,{closeButton:!0},void 0,o()(P.a.Title,{as:"h1"},void 0,this.props.header||this.props.t("fullscreen-header"))),o()(P.a.Body,{style:{height:.75*window.innerHeight}},void 0,this.props.wrapInCard?o()(F.a,{body:!0,className:"".concat(this.props.className," panel-fullscreen-view")},void 0,this.props.body):this.props.body),o()(P.a.Footer,{},void 0,this.props.footer,o()(j.a,{onClick:this.toggleFullscreen},void 0,this.props.t("close")))):null)}}]),n}(w.Component);E.defaultProps={className:"",header:null,wrapInCard:!0,style:{}},e.default=Object(m.a)("FullscreenButton")(E)},520:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(t,e){return r(t.querySelectorAll(e))}},813:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);function o(t){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.current=t})),e.current}}}]);