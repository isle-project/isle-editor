(self.webpackChunk=self.webpackChunk||[]).push([[2767],{987980:function(e,t,r){"use strict";r.r(t);r(382139),r(627476),r(95767),r(898837),r(694882),r(298351);var n,o=r(858255),s=r(264659),i=r(904730),l=r(673989),c=r(175663),a=r(750591),u=r(575630),f=r(151119),p=r(202784),d=r(198),h=(r(213980),r(770561)),v=r(260952),Z=r(81982),y=r(150275),b=r(778886);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var O=function(e){(0,c.Z)(r,e);var t=w(r);function r(){var e;return(0,s.Z)(this,r),e=t.call(this),(0,f.Z)((0,l.Z)(e),"toggleFullscreen",(function(){e.setState({fullscreen:!e.state.fullscreen})})),e.state={fullscreen:!1},e}return(0,i.Z)(r,[{key:"render",value:function(){return(0,o.Z)(p.Fragment,{},void 0,p.createElement(b.Z,this.props,(0,o.Z)(y.Z,{id:"fullscreen_tooltip",placement:"bottom",tooltip:this.props.t("fullscreen-tooltip")},void 0,(0,o.Z)(h.Z,{variant:"outline-secondary",size:"sm",onClick:this.toggleFullscreen,style:g({position:"absolute",top:0,right:0,fontSize:12},this.props.style),"aria-label":this.props.t("fullscreen-tooltip")},void 0,n||(n=(0,o.Z)("span",{className:"fa fa-window-maximize"}))))),this.state.fullscreen?(0,o.Z)(Z.Z,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,(0,o.Z)(Z.Z.Header,{closeButton:!0},void 0,(0,o.Z)(Z.Z.Title,{as:"h1"},void 0,this.props.header||this.props.t("fullscreen-header"))),(0,o.Z)(Z.Z.Body,{style:{height:.75*window.innerHeight}},void 0,this.props.wrapInCard?(0,o.Z)(v.Z,{body:!0,className:"".concat(this.props.className," panel-fullscreen-view")},void 0,this.props.body):this.props.body),(0,o.Z)(Z.Z.Footer,{},void 0,this.props.footer,(0,o.Z)(h.Z,{onClick:this.toggleFullscreen},void 0,this.props.t("close")))):null)}}]),r}(p.Component);O.defaultProps={className:"",header:null,wrapInCard:!0,style:{}},t.default=(0,d.Z)("internal/fullscreen-button")(O)},783679:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(202784);function o(e){var t=(0,n.useRef)(null);return(0,n.useEffect)((function(){t.current=e})),t.current}},658092:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return n(e.querySelectorAll(t))}},770561:function(e,t,r){"use strict";var n=r(607560),o=r(998283),s=r(72779),i=r.n(s),l=r(202784),c=r(429658),a=r(482695),u=l.forwardRef((function(e,t){var r=e.bsPrefix,s=e.variant,u=e.size,f=e.active,p=e.className,d=e.block,h=e.type,v=e.as,Z=(0,o.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,c.vE)(r,"btn"),b=i()(p,y,f&&"active",s&&y+"-"+s,d&&y+"-block",u&&y+"-"+u);if(Z.href)return l.createElement(a.Z,(0,n.Z)({},Z,{as:v,ref:t,className:i()(b,Z.disabled&&"disabled")}));t&&(Z.ref=t),h?Z.type=h:v||(Z.type="button");var m=v||"button";return l.createElement(m,(0,n.Z)({},Z,{className:b}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u}}]);