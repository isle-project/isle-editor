(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{4053:function(e,t,s){"use strict";s.r(t);s(421);var i=s(407),r=s.n(i),n=s(414),l=s.n(n),o=s(416),a=s.n(o),c=s(424),u=s.n(c),p=s(418),f=s.n(p),v=s(419),d=s.n(v),h=s(417),y=s.n(h),b=s(412),m=s.n(b),N=s(0),k=(s(404),s(450)),C=s.n(k),R=s(473),g=s(554),w=s.n(g),P=s(442);s(83);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=y()(e);if(t){var r=y()(this).constructor;s=Reflect.construct(i,arguments,r)}else s=i.apply(this,arguments);return d()(this,s)}}var S=function(e){f()(s,e);var t=O(s);function s(){return l()(this,s),t.apply(this,arguments)}return a()(s,[{key:"render",value:function(){return r()("button",{onClick:this.props.onClick,className:"vertical-slider-header ".concat(this.props.className),style:this.props.style},void 0,this.props.children)}}]),s}(N.Component);S.defaultProps={className:"",style:{}};var V=S;function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=y()(e);if(t){var r=y()(this).constructor;s=Reflect.construct(i,arguments,r)}else s=i.apply(this,arguments);return d()(this,s)}}var H=C()("isle:vertical-slider");function j(e){return!1===e?"vs-body vs-hidden":"vs-body vs-display"}var x=function(e){f()(s,e);var t=B(s);function s(e){var i;l()(this,s),i=t.call(this,e),m()(u()(i),"toggleVisibility",(function(){if(Object(R.isPrimitive)(i.props.visible))i.props.onClick(i.props.visible);else{var e=!i.state.visible;i.props.onClick(e),i.setState({visible:e,className:j(e)})}}));var r=e.visible||e.defaultVisible;return i.state={visible:r,className:j(r)},i}return a()(s,[{key:"renderHeader",value:function(){return null!==this.props.headerClassName?r()(V,{onClick:this.toggleVisibility,className:this.props.headerClassName,style:this.props.headerStyle},void 0,this.props.header):r()(V,{onClick:this.toggleVisibility,style:this.props.headerStyle},void 0,this.props.header)}},{key:"render",value:function(){return r()("div",{className:"".concat(this.props.className," vertical-slider"),style:this.props.style},void 0,this.renderHeader(),r()("div",{className:this.state.className},void 0,this.props.children))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return w()(e.visible)||e.visible===t.visible?null:(H("Override visible state..."),{visible:e.visible,className:j(e.visible)})}}]),s}(N.Component);x.defaultProps={header:"Header",headerClassName:null,headerStyle:null,defaultVisible:!1,visible:null,className:"",style:{},onClick:function(){}};t.default=Object(P.a)(x)}}]);