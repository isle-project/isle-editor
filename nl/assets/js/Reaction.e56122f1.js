(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{6470:function(t,n,e){"use strict";e.r(n);e(421);var r=e(404),o=e.n(r),i=e(412),s=e.n(i),u=e(416),c=e.n(u),a=e(418),p=e.n(a),l=e(419),f=e.n(l),h=e(417),v=e.n(h),d=(e(525),e(0)),y=(e(402),e(451)),b=e.n(y),w=e(4088),m=e(456),R=e(465),k=e(626),D=e.n(k),x=e(492),I=e.n(x),U=e(588),O=e(445);function T(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)}}var g=b()("isle:reaction"),j=function(t){p()(e,t);var n=T(e);function e(t){return s()(this,e),n.call(this,t)}return c()(e,[{key:"componentDidMount",value:function(){var t=this,n=this.context;this.unsubscribe=n.subscribe((function(n,e){n===U.n&&e.id===t.props.actionID&&t.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){g("Render component...");var t=this.context;if(!this.props.actionID)return o()(m.a,{variant:"danger"},void 0,this.props.t("supply-component-id"));if(t.currentUserActions){var n=t.responseVisualizers[this.props.actionID];if(n){var e=n.type,r=t.currentUserActions[this.props.actionID];if(r){var i=(r=(r=r.filter((function(t){return t.type===e}))).sort((function(t,n){return t.absoluteTime-n.absoluteTime})))[r.length-1];if(D()(this.props.show))return this.props.show[i.value]||this.props.show.default||null;if(I()(this.props.show))return this.props.show(i.value,i)||null}return null}}return null}}]),e}(d.Component);j.defaultProps={show:{}},j.contextType=R.a,n.default=Object(w.a)("General")(Object(O.a)(j))}}]);