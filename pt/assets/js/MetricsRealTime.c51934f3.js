(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{3897:function(t,n,e){"use strict";e.r(n);e(421);var i,o=e(407),r=e.n(o),s=e(414),u=e.n(s),c=e(416),a=e.n(c),f=e(418),l=e.n(f),p=e(419),h=e.n(p),v=e(417),d=e.n(v),b=(e(465),e(0)),y=(e(404),e(450)),m=e.n(y),w=e(596),D=e.n(w),k=e(459),R=e(533);function g(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=d()(t);if(n){var o=d()(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return h()(this,e)}}var M=m()("isle:real-time-metrics"),O=function(t){l()(e,t);var n=g(e);function e(){var t;return u()(this,e),(t=n.call(this)).state={actions:[]},t}return a()(e,[{key:"componentDidMount",value:function(){var t=this;this._isMounted=!0;var n=this.context;n&&(M("Listening for all actions with id: "+this.props.for),this.unsubscribe=n.subscribe((function(n,e){if(n===R.n){if(e.type===R.h||e.type===R.l)return null;var i=D()(t.props.for,e.id);if(-1!==i){var o=t.state.actions.slice();o.push(t.props.returnFullObject?e:e.value),t.setState({actions:o},(function(){M("A new value for the given IDs was submitted: "+JSON.stringify(t.state.actions)),t.props.onData(t.state.actions,i),t.props.onDatum(t.state.actions[t.state.actions.length-1],i)}))}}t._isMounted&&t.forceUpdate()})))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.unsubscribe&&this.unsubscribe()}},{key:"render",value:function(){return i||(i=r()("div",{}))}}]),e}(b.Component);O.defaultProps={onData:function(){},onDatum:function(){},returnFullObject:!1},O.contextType=k.a,n.default=O}}]);