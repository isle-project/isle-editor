(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{423:function(e,t,r){"use strict";var n=r(406),o=r(408),a=r(409),s=r.n(a),c=r(0),i=r.n(c),l=r(411),u=r(463),p=i.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.variant,c=e.size,p=e.active,f=e.className,d=e.block,b=e.type,h=e.as,v=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(l.a)(r,"btn"),m=s()(f,y,p&&"active",a&&y+"-"+a,d&&y+"-block",c&&y+"-"+c);if(v.href)return i.a.createElement(u.a,Object(n.a)({},v,{as:h,ref:t,className:s()(m,v.disabled&&"disabled")}));t&&(v.ref=t),b?v.type=b:h||(v.type="button");var O=h||"button";return i.a.createElement(O,Object(n.a)({},v,{className:m}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p},4428:function(e,t,r){"use strict";r.r(t);r(421),r(437),r(433),r(430),r(438),r(439);var n,o=r(407),a=r.n(o),s=r(414),c=r.n(s),i=r(416),l=r.n(i),u=r(424),p=r.n(u),f=r(418),d=r.n(f),b=r(419),h=r.n(b),v=r(417),y=r.n(v),m=r(412),O=r.n(m),w=r(0),g=r.n(w),j=r(4095),P=(r(404),r(423)),F=r(464),N=r(594),k=r(483),B=r(645),R=r(420);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y()(e);if(t){var o=y()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}Object(R.a)("FullscreenButton");var S=function(e){d()(r,e);var t=z(r);function r(){var e;return c()(this,r),e=t.call(this),O()(p()(e),"toggleFullscreen",(function(){e.setState({fullscreen:!e.state.fullscreen})})),e.state={fullscreen:!1},e}return l()(r,[{key:"render",value:function(){return a()(w.Fragment,{},void 0,g.a.createElement(B.a,this.props,a()(k.a,{id:"fullscreen_tooltip",placement:"bottom",tooltip:this.props.t("fullscreen-tooltip")},void 0,a()(P.a,{variant:"outline-secondary",size:"sm",onClick:this.toggleFullscreen,style:E({position:"absolute",top:0,right:0,fontSize:12},this.props.style),"aria-label":this.props.t("fullscreen-tooltip")},void 0,n||(n=a()("span",{className:"fa fa-window-maximize"}))))),this.state.fullscreen?a()(N.a,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,a()(N.a.Header,{closeButton:!0},void 0,a()(N.a.Title,{as:"h1"},void 0,this.props.header||this.props.t("fullscreen-header"))),a()(N.a.Body,{style:{height:.75*window.innerHeight}},void 0,this.props.wrapInCard?a()(F.a,{body:!0,className:"".concat(this.props.className," panel-fullscreen-view")},void 0,this.props.body):this.props.body),a()(N.a.Footer,{},void 0,this.props.footer,a()(P.a,{onClick:this.toggleFullscreen},void 0,this.props.t("close")))):null)}}]),r}(w.Component);S.defaultProps={className:"",header:null,wrapInCard:!0,style:{}},t.default=Object(j.a)("FullscreenButton")(S)},496:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return n(e.querySelectorAll(t))}},684:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);function o(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}}}]);