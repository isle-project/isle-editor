(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{6361:function(t,e,n){"use strict";n.r(e);n(421);var i,r=n(407),o=n.n(r),c=n(414),s=n.n(c),u=n(416),l=n.n(u),a=n(418),p=n.n(a),h=n(419),f=n.n(h),v=n(417),d=n.n(v),m=n(0);n(404);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=d()(t);if(e){var r=d()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return f()(this,n)}}var k=function(t){p()(n,t);var e=y(n);function n(t){var i;return s()(this,n),(i=e.call(this)).state={visible:!0,children:t.children},i}return l()(n,[{key:"componentDidMount",value:function(){this.props.active&&this.setTimer()}},{key:"componentDidUpdate",value:function(t){(this.props.children!==t.children&&this.props.active||this.props.active&&this.props.active!==t.active)&&this.setTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"setTimer",value:function(){var t=this;null!==this._timer&&clearTimeout(this._timer),this._timer=setTimeout((function(){t.setState({visible:!1}),t._timer=null}),this.props.delay)}},{key:"render",value:function(){return this.state.visible?o()(m.Fragment,{},void 0,this.props.children):i||(i=o()("span",{}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.children!==e.children?{visible:!0,children:t.children}:null}}]),n}(m.Component);k.defaultProps={active:!1,delay:1e3},e.default=k}}]);