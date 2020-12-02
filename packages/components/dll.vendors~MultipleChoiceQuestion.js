/*! For license information please see dll.vendors~MultipleChoiceQuestion.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[172],{1e3:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r).a.createContext(null);o.displayName="NavContext",t.default=o},1001:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r).a.createContext(null);t.default=o},1009:function(e,t,n){"use strict";n.r(t),n.d(t,"uncontrolledPropTypes",(function(){return o})),n.d(t,"isProp",(function(){return a})),n.d(t,"defaultKey",(function(){return i})),n.d(t,"canAcceptRef",(function(){return u}));n(999);var r=function(){};function o(e,t){var n={};return Object.keys(e).forEach((function(e){n[i(e)]=r})),n}function a(e,t){return void 0!==e[t]}function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){return!!e&&("function"!=typeof e||e.prototype&&e.prototype.isReactComponent)}},1010:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(11),o=n(5),a=n(202),i=n(0),u=n.n(i),c=n(1022),l=n(999),s=n.n(l),f=n(1009);function p(e,t,n){void 0===n&&(n=[]);var i=e.displayName||e.name||"Component",l=f.canAcceptRef(e),d=Object.keys(t),v=d.map(f.defaultKey);!l&&n.length&&s()(!1);var m=function(i){function c(){for(var e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];(e=i.call.apply(i,[this].concat(a))||this).handlers=Object.create(null),d.forEach((function(n){var r=t[n];e.handlers[r]=function(t){if(e.props[r]){var a;e._notifying=!0;for(var i=arguments.length,u=new Array(i>1?i-1:0),c=1;c<i;c++)u[c-1]=arguments[c];(a=e.props)[r].apply(a,[t].concat(u)),e._notifying=!1}e.unmounted||e.setState((function(e){var r,a=e.values;return{values:Object(o.default)(Object.create(null),a,(r={},r[n]=t,r))}}))}})),n.length&&(e.attachRef=function(t){e.inner=t});var c=Object.create(null);return d.forEach((function(t){c[t]=e.props[f.defaultKey(t)]})),e.state={values:c,prevProps:{}},e}Object(a.default)(c,i);var l=c.prototype;return l.shouldComponentUpdate=function(){return!this._notifying},c.getDerivedStateFromProps=function(e,t){var n=t.values,r=t.prevProps,a={values:Object(o.default)(Object.create(null),n),prevProps:{}};return d.forEach((function(t){a.prevProps[t]=e[t],!f.isProp(e,t)&&f.isProp(r,t)&&(a.values[t]=e[f.defaultKey(t)])})),a},l.componentWillUnmount=function(){this.unmounted=!0},l.render=function(){var t=this,n=this.props,a=n.innerRef,i=Object(r.default)(n,["innerRef"]);v.forEach((function(e){delete i[e]}));var c={};return d.forEach((function(e){var n=t.props[e];c[e]=void 0!==n?n:t.state.values[e]})),u.a.createElement(e,Object(o.default)({},i,c,this.handlers,{ref:a||this.attachRef}))},c}(u.a.Component);Object(c.polyfill)(m),m.displayName="Uncontrolled("+i+")",m.propTypes=Object(o.default)({innerRef:function(){}},f.uncontrolledPropTypes(t,i)),n.forEach((function(e){m.prototype[e]=function(){var t;return(t=this.inner)[e].apply(t,arguments)}}));var b=m;return u.a.forwardRef&&((b=u.a.forwardRef((function(e,t){return u.a.createElement(m,Object(o.default)({},e,{innerRef:t}))}))).propTypes=m.propTypes),b.ControlledComponent=e,b.deferControlTo=function(e,n,r){return void 0===n&&(n={}),p(e,Object(o.default)({},t,n),r)},b}},1017:function(e,t,n){"use strict";e.exports=function(e){return null===e}},1021:function(e,t,n){"use strict";var r=n(1023);e.exports=r},1022:function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function a(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,u=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?u="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(u="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==u){var c=e.displayName||e.name,l="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==u?"\n  "+u:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",(function(){return i})),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},1023:function(e,t,n){"use strict";var r=n(112),o=n(28),a=n(1024),i=r();e.exports=function(e){return"object"==typeof e&&(e instanceof RegExp||(i?a(e):"[object RegExp]"===o(e)))}},1024:function(e,t,n){"use strict";var r=n(1025);e.exports=function(e){try{return r.call(e),!0}catch(e){return!1}}},1025:function(e,t,n){"use strict";var r=RegExp.prototype.exec;e.exports=r},1029:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),a=n(12),i=n.n(a),u=n(0),c=n.n(u),l=n(969),s=(n(211),n(1e3)),f=n(960),p=c.a.forwardRef((function(e,t){var n=e.active,a=e.className,p=e.eventKey,d=e.onSelect,v=e.onClick,m=e.as,b=Object(o.default)(e,["active","className","eventKey","onSelect","onClick","as"]),y=Object(f.makeEventKey)(p,b.href),h=Object(u.useContext)(f.default),g=Object(u.useContext)(s.default),j=n;if(g){b.role||"tablist"!==g.role||(b.role="tab");var O=g.getControllerId(y),w=g.getControlledId(y);b["data-rb-event-key"]=y,b.id=O||b.id,b["aria-controls"]=w||b["aria-controls"],j=null==n&&null!=y?g.activeKey===y:n}"tab"===b.role&&(b.tabIndex=j?b.tabIndex:-1,b["aria-selected"]=j);var P=Object(l.default)((function(e){v&&v(e),null!=y&&(d&&d(y,e),h&&h(y,e))}));return c.a.createElement(m,Object(r.default)({},b,{ref:t,onClick:P,className:i()(a,j&&"active")}))}));p.defaultProps={disabled:!1},t.default=p},1030:function(e,t,n){"use strict";var r=n(1031),o=n(107),a=n(34).isPrimitive,i=n(1021);e.exports=function(e,t,n){if(!a(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(a(t))t=r(t),t=new RegExp(t,"g");else if(!i(t))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+t+"`.");if(!a(n)&&!o(n))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+n+"`.");return e.replace(t,n)}},1031:function(e,t,n){"use strict";var r=n(1032);e.exports=r},1032:function(e,t,n){"use strict";var r=n(34).isPrimitive,o=/[-\/\\^$*+?.()|[\]{}]/g;e.exports=function(e){var t,n;if(!r(e))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+e+"`.");if("/"===e[0])for(n=e.length-1;n>=0&&"/"!==e[n];n--);return void 0===n||n<=0?e.replace(o,"\\$&"):(t=(t=e.substring(1,n)).replace(o,"\\$&"),e=e[0]+t+e.substring(n))}},1034:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n(0);function o(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},1038:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),a=n(997),i=n(0),u=n.n(i),c=n(1034),l=n(993),s=n(1e3),f=n(960),p=n(1001),d=function(){},v=u.a.forwardRef((function(e,t){var n,v,m=e.as,b=void 0===m?"ul":m,y=e.onSelect,h=e.activeKey,g=e.role,j=e.onKeyDown,O=Object(o.default)(e,["as","onSelect","activeKey","role","onKeyDown"]),w=Object(c.default)(),P=Object(i.useRef)(!1),x=Object(i.useContext)(f.default),E=Object(i.useContext)(p.default);E&&(g=g||"tablist",h=E.activeKey,n=E.getControlledId,v=E.getControllerId);var S=Object(i.useRef)(null),C=function(e){var t=S.current;if(!t)return null;var n=Object(a.default)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var o=n.indexOf(r);if(-1===o)return null;var i=o+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},R=function(e,t){null!=e&&(y&&y(e,t),x&&x(e,t))};Object(i.useEffect)((function(){if(S.current&&P.current){var e=S.current.querySelector("[data-rb-event-key].active");e&&e.focus()}P.current=!1}));var N=Object(l.default)(t,S);return u.a.createElement(f.default.Provider,{value:R},u.a.createElement(s.default.Provider,{value:{role:g,activeKey:Object(f.makeEventKey)(h),getControlledId:n||d,getControllerId:v||d}},u.a.createElement(b,Object(r.default)({},O,{onKeyDown:function(e){var t;switch(j&&j(e),e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),R(t.dataset.rbEventKey,e),P.current=!0,w())},ref:N,role:g}))))}));t.default=v},1051:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),a=n(12),i=n.n(a),u=n(0),c=n.n(u),l=n(1029),s=n(960),f=n(17),p={variant:void 0,active:!1,disabled:!1},d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.active,p=e.disabled,d=e.className,v=e.variant,m=e.action,b=e.as,y=e.eventKey,h=e.onClick,g=Object(o.default)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);n=Object(f.useBootstrapPrefix)(n,"list-group-item");var j=Object(u.useCallback)((function(e){if(p)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[p,h]);return c.a.createElement(l.default,Object(r.default)({ref:t},g,{eventKey:Object(s.makeEventKey)(y,g.href),as:b||(m?g.href?"a":"button":"div"),onClick:j,className:i()(d,n,a&&"active",p&&"disabled",v&&n+"-"+v,m&&n+"-action")}))}));d.defaultProps=p,d.displayName="ListGroupItem",t.default=d},1162:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),a=n(12),i=n.n(a),u=n(0),c=n.n(u),l=(n(211),n(967)),s=n(17),f=n(1038),p=n(1051),d={variant:void 0,horizontal:void 0},v=c.a.forwardRef((function(e,t){var n,a=Object(l.useUncontrolled)(e,{activeKey:"onSelect"}),u=a.className,p=a.bsPrefix,d=a.variant,v=a.horizontal,m=a.as,b=void 0===m?"div":m,y=Object(o.default)(a,["className","bsPrefix","variant","horizontal","as"]),h=Object(s.useBootstrapPrefix)(p,"list-group");return n=v?!0===v?"horizontal":"horizontal-"+v:null,c.a.createElement(f.default,Object(r.default)({ref:t},y,{as:b,className:i()(u,h,d&&h+"-"+d,n&&h+"-"+n)}))}));v.defaultProps=d,v.displayName="ListGroup",v.Item=p.default,t.default=v},1381:function(e,t,n){"use strict";var r=n(1382);e.exports=r},1382:function(e,t,n){"use strict";var r=n(34).isPrimitive,o=n(994),a=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;e.exports=function(e){if(!r(e))throw new TypeError("invalid argument. Must provide a string primitive. Value: `"+e+"`.");return o(e,a,"$1")}},960:function(e,t,n){"use strict";n.r(t),n.d(t,"makeEventKey",(function(){return a}));var r=n(0),o=n.n(r).a.createContext(null),a=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.default=o},963:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),a=n(12),i=n.n(a),u=n(0),c=n.n(u),l=n(17),s=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,u=e.bsPrefix,s=e.className,f=e.children,p=Object(o.default)(e,["as","bsPrefix","className","children"]);return u=Object(l.useBootstrapPrefix)(u,"popover-body"),c.a.createElement(a,Object(r.default)({ref:t},p,{className:i()(s,u)}),f)}));t.default=s},966:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),a=n(12),i=n.n(a),u=n(0),c=n.n(u),l=n(17),s=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,u=e.bsPrefix,s=e.className,f=e.children,p=Object(o.default)(e,["as","bsPrefix","className","children"]);return u=Object(l.useBootstrapPrefix)(u,"popover-header"),c.a.createElement(a,Object(r.default)({ref:t},p,{className:i()(u,s)}),f)}));t.default=s},967:function(e,t,n){"use strict";n.r(t);var r=n(987);n.d(t,"useUncontrolled",(function(){return r.default})),n.d(t,"useUncontrolledProp",(function(){return r.useUncontrolledProp}));var o=n(1010);n.d(t,"uncontrollable",(function(){return o.default}))},968:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),a=n(12),i=n.n(a),u=n(0),c=n.n(u),l=(n(374),n(17)),s=n(966),f=n(963),p=c.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.placement,u=e.className,s=e.style,p=e.children,d=e.content,v=e.arrowProps,m=(e.popper,e.show,Object(o.default)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),b=Object(l.useBootstrapPrefix)(n,"popover"),y=((null==a?void 0:a.split("-"))||[])[0];return c.a.createElement("div",Object(r.default)({ref:t,role:"tooltip",style:s,"x-placement":y,className:i()(u,b,y&&"bs-popover-"+y)},m),c.a.createElement("div",Object(r.default)({className:"arrow"},v)),d?c.a.createElement(f.default,null,p):p)}));p.defaultProps={placement:"right"},p.Title=s.default,p.Content=f.default,t.default=p},969:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(0),o=n(985);function a(e){var t=Object(o.default)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},985:function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},987:function(e,t,n){"use strict";n.r(t),n.d(t,"useUncontrolledProp",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(5),o=n(11),a=n(0),i=n(1009);function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function c(e,t,n){var r=Object(a.useRef)(void 0!==e),o=Object(a.useState)(t),i=o[0],u=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&i!==t&&u(t),[c?e:i,Object(a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}function l(e,t){return Object.keys(t).reduce((function(n,a){var l,s=n,f=s[i.defaultKey(a)],p=s[a],d=Object(o.default)(s,[i.defaultKey(a),a].map(u)),v=t[a],m=c(p,f,e[v]),b=m[0],y=m[1];return Object(r.default)({},d,((l={})[a]=b,l[v]=y,l))}),e)}},990:function(e,t,n){"use strict";var r=n(1017);e.exports=r},993:function(e,t,n){"use strict";n.r(t),n.d(t,"mergeRefs",(function(){return a}));var r=n(0),o=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};function a(e,t){var n=o(e),r=o(t);return function(e){n&&n(e),r&&r(e)}}t.default=function(e,t){return Object(r.useMemo)((function(){return a(e,t)}),[e,t])}},994:function(e,t,n){"use strict";var r=n(1030);e.exports=r},997:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},999:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,i,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,u],s=0;(c=new Error(t.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}}}]);