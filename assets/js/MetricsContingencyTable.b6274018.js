(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{6401:function(t,r,e){"use strict";e.r(r);e(421);var n=e(407),o=e.n(n),s=e(414),c=e.n(s),a=e(416),u=e.n(a),i=e(418),l=e.n(i),p=e(419),f=e.n(p),v=e(417),d=e.n(v),h=(e(428),e(603),e(526),e(468),e(485),e(501),e(0)),w=e.n(h),y=(e(404),e(425)),m=e.n(y),b=e(480),k=e.n(b),C=e(680),R=e(518),A=e(645),S=e(974);function V(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=d()(t);if(r){var o=d()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return f()(this,e)}}var B=function(t){l()(e,t);var r=V(e);function e(t){var n;return c()(this,e),(n=r.call(this,t)).state={users:{}},n}return u()(e,[{key:"calcCellCount",value:function(t,r){for(var e=this.state.users,n=k()(e),o=0,s=0;s<n.length;s++){var c=e[n[s]];c.row.has(t)&&c.col.has(r)&&(o+=1)}return o}},{key:"renderTable",value:function(){var t=this;return o()(R.a,{style:this.props.style},void 0,o()(C.a,{bordered:!0},void 0,o()("thead",{},void 0,o()("tr",{},void 0,o()("th",{},void 0,"".concat(this.props.row," / ").concat(this.props.col)),this.props.colValues.map((function(t,r){return o()("th",{},r,t)})))),o()("tbody",{},void 0,this.props.rowValues.map((function(r,e){return o()("tr",{},e,o()("th",{},void 0,r),t.props.colValues.map((function(e,n){return o()("td",{},n,t.calcCellCount(r,e))})))})))))}},{key:"render",value:function(){var t=this;return w.a.createElement(A.a,this.props,o()("div",{},void 0,o()(S.a,{for:[this.props.row,this.props.col],returnFullObject:!0,onDatum:function(r,e){if(!r.owner){var n=t.state.users;if(m()(n,r.email)||(n[r.email]={row:new Set,col:new Set}),0===e){var o=t.props.rowAccessor(r);n[r.email].row.add(o)}else if(1===e){var s=t.props.colAccessor(r);n[r.email].col.add(s)}t.setState({users:n})}}}),this.renderTable()))}}]),e}(h.Component);B.defaultProps={rowAccessor:function(t){return t.value},colAccessor:function(t){return t.value},style:{}},r.default=B}}]);