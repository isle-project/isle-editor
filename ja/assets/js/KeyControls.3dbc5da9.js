(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{3729:function(e,n,t){"use strict";t.r(n);t(421);var o=t(414),r=t.n(o),c=t(416),i=t.n(c),a=t(424),s=t.n(a),u=t(418),p=t.n(u),d=t(419),f=t.n(d),v=t(417),l=t.n(v),y=t(412),m=t.n(y),h=t(0),g=t(23),k=t.n(g),w=(t(404),t(450)),E=t.n(w),L=t(480),D=t.n(L),K=t(476),R=t.n(K),C=t(459);function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=l()(e);if(n){var r=l()(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return f()(this,t)}}var M=E()("isle:key-controls"),O=function(e){p()(t,e);var n=P(t);function t(e){var o;return r()(this,t),o=n.call(this,e),m()(s()(o),"addListeners",(function(){var e=D()(o.props.actions);if(M("Add keydown event listeners for ".concat(o.props.container?"container":"document",": ").concat(e.join(", "))),o.props.container)try{k.a.findDOMNode(o.props.container).addEventListener("keydown",o.triggerEvent)}catch(n){M(n.message)}else document.addEventListener("keydown",o.triggerDocEvent)})),m()(s()(o),"removeListeners",(function(e){var n=D()(o.props.actions);if(M("Remove keydown event listeners for ".concat(e?"container":"document",": ").concat(n.join(", "))),e)try{k.a.findDOMNode(e).removeEventListener("keydown",o.triggerEvent)}catch(t){M(t.message)}document.removeEventListener("keydown",o.triggerDocEvent)})),m()(s()(o),"triggerEvent",(function(e){var n=e.key;M("Received key press for container: ".concat(n));var t=o.props.actions[n],r=e.ctrlKey||e.shiftKey||e.altKey||e.metaKey;document.activeElement===o.props.container&&!r&&R()(t)&&(e.preventDefault(),e.stopPropagation(),t(e))})),m()(s()(o),"triggerDocEvent",(function(e){var n=e.key,t=e.ctrlKey||e.shiftKey||e.altKey||e.metaKey;M("Received key press for document: ".concat(n));var r=o.props.actions[n];!t&&R()(r)&&(e.preventDefault(),e.stopPropagation(),r(e))})),o}return i()(t,[{key:"componentDidMount",value:function(){M("Component has mounted..."),this.addListeners()}},{key:"componentDidUpdate",value:function(e){this.props.container!==e.container&&(M("Container has changed, re-attach event listeners..."),this.removeListeners(e.container),this.addListeners())}},{key:"componentWillUnmount",value:function(){M("Component has unmounted..."),this.removeListeners()}},{key:"render",value:function(){return null}}]),t}(h.Component);O.defaultProps={actions:{},container:null},O.contextType=C.a,n.default=O}}]);