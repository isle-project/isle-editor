/*! For license information please see dll.vendors~News.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[174,158,180],{1002:function(t,n,e){"use strict";e.r(n),e.d(n,"resolveContainerRef",(function(){return i})),e.d(n,"default",(function(){return o}));var r=e(957),u=e(0),i=function(t){var n;return"undefined"==typeof document?null:null==t?Object(r.default)().body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),(null==(n=t)?void 0:n.nodeType)&&t||null)};function o(t,n){var e=Object(u.useState)((function(){return i(t)})),r=e[0],o=e[1];if(!r){var a=i(t);a&&o(a)}return Object(u.useEffect)((function(){n&&r&&n(r)}),[n,r]),Object(u.useEffect)((function(){var n=i(t);n!==r&&o(n)}),[t,r]),r}},1015:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(0);function u(){return Object(r.useState)(null)}},1047:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(0);function u(t){var n=Object(r.useRef)(null);return Object(r.useEffect)((function(){n.current=t})),n.current}},1090:function(t,n,e){"use strict";function r(t,n){return t.contains?t.contains(n):t.compareDocumentPosition?t===n||!!(16&t.compareDocumentPosition(n)):void 0}e.r(n),e.d(n,"default",(function(){return r}))},1091:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(0);function u(){var t=Object(r.useRef)(!0),n=Object(r.useRef)((function(){return t.current}));return Object(r.useEffect)((function(){return function(){t.current=!1}}),[]),n.current}},1160:function(t,n,e){"use strict";function r(t,n){return t.classList?!!n&&t.classList.contains(n):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" ")}e.r(n),e.d(n,"default",(function(){return r}))},2853:function(t,n,e){"use strict";var r=e(2854);t.exports=r},2854:function(t,n,e){"use strict";var r=e(34).isPrimitive;t.exports=function(t){if(!r(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");return""===t?"":t.charAt(0).toUpperCase()+t.slice(1)}},957:function(t,n,e){"use strict";function r(t){return t&&t.ownerDocument||document}e.r(n),e.d(n,"default",(function(){return r}))},969:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return i}));var r=e(0),u=e(985);function i(t){var n=Object(u.default)(t);return Object(r.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},970:function(t,n,e){"use strict";e.r(n);var r=e(975),u=e(977),i=e(979);n.default=function(t,n){var e="",o="";if("string"==typeof n)return t.style.getPropertyValue(Object(u.default)(n))||Object(r.default)(t).getPropertyValue(Object(u.default)(n));Object.keys(n).forEach((function(r){var a=n[r];a||0===a?Object(i.default)(r)?o+=r+"("+a+") ":e+=Object(u.default)(r)+": "+a+";":t.style.removeProperty(Object(u.default)(r))})),o&&(e+="transform: "+o+";"),t.style.cssText+=";"+e}},971:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return o}));var r=e(970),u=e(982);function i(t,n,e){void 0===e&&(e=5);var r=!1,i=setTimeout((function(){r||function(t){var n=document.createEvent("HTMLEvents");n.initEvent("transitionend",!0,!0),t.dispatchEvent(n)}(t)}),n+e),o=Object(u.default)(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),o()}}function o(t,n,e,o){var a,c,s;null==e&&(a=t,c=Object(r.default)(a,"transitionDuration")||"",s=-1===c.indexOf("ms")?1e3:1,e=parseFloat(c)*s||0);var f=i(t,e,o),l=Object(u.default)(t,"transitionend",n);return function(){f(),l()}}},973:function(t,n,e){"use strict";e.r(n),e.d(n,"UNMOUNTED",(function(){return l})),e.d(n,"EXITED",(function(){return d})),e.d(n,"ENTERING",(function(){return p})),e.d(n,"ENTERED",(function(){return E})),e.d(n,"EXITING",(function(){return v}));var r=e(11),u=e(202),i=(e(1),e(0)),o=e.n(i),a=e(26),c=e.n(a),s=e(980),f=e(981),l="unmounted",d="exited",p="entering",E="entered",v="exiting",m=function(t){function n(n,e){var r;r=t.call(this,n,e)||this;var u,i=e&&!e.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?i?(u=d,r.appearStatus=p):u=E:u=n.unmountOnExit||n.mountOnEnter?l:d,r.state={status:u},r.nextCallback=null,r}Object(u.default)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:d}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==p&&e!==E&&(n=p):e!==p&&e!==E||(n=v)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,r=this.props.timeout;return t=n=e=r,null!=r&&"number"!=typeof r&&(t=r.exit,n=r.enter,e=void 0!==r.appear?r.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===p?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,r=this.context?this.context.isMounting:t,u=this.props.nodeRef?[r]:[c.a.findDOMNode(this),r],i=u[0],o=u[1],a=this.getTimeouts(),f=r?a.appear:a.enter;!t&&!e||s.default.disabled?this.safeSetState({status:E},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:p},(function(){n.props.onEntering(i,o),n.onTransitionEnd(f,(function(){n.safeSetState({status:E},(function(){n.props.onEntered(i,o)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),r=this.props.nodeRef?void 0:c.a.findDOMNode(this);n&&!s.default.disabled?(this.props.onExit(r),this.safeSetState({status:v},(function(){t.props.onExiting(r),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(r)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(r){e&&(e=!1,n.nextCallback=null,t(r))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(e&&!r){if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],i=u[0],o=u[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,u=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,Object(r.default)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(f.default.Provider,{value:null},"function"==typeof e?e(t,u):o.a.cloneElement(o.a.Children.only(e),u))},n}(o.a.Component);function h(){}m.contextType=f.default,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},m.UNMOUNTED=l,m.EXITED=d,m.ENTERING=p,m.ENTERED=E,m.EXITING=v,n.default=m},974:function(t,n,e){"use strict";function r(t){t.offsetHeight}e.r(n),e.d(n,"default",(function(){return r}))},975:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(976);function u(t,n){return Object(r.default)(t).getComputedStyle(t,n)}},976:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(957);function u(t){var n=Object(r.default)(t);return n&&n.defaultView||window}},977:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return i}));var r=e(978),u=/^ms-/;function i(t){return Object(r.default)(t).replace(u,"-ms-")}},978:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=/([A-Z])/g;function u(t){return t.replace(r,"-$1").toLowerCase()}},979:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function u(t){return!(!t||!r.test(t))}},980:function(t,n,e){"use strict";e.r(n),n.default={disabled:!1}},981:function(t,n,e){"use strict";e.r(n);var r=e(0),u=e.n(r);n.default=u.a.createContext(null)},982:function(t,n,e){"use strict";e.r(n);var r=e(988),u=e(989);n.default=function(t,n,e,i){return Object(r.default)(t,n,e,i),function(){Object(u.default)(t,n,e,i)}}},984:function(t,n,e){"use strict";e.r(n),n.default=!("undefined"==typeof window||!window.document||!window.document.createElement)},985:function(t,n,e){"use strict";e.r(n);var r=e(0);n.default=function(t){var n=Object(r.useRef)(t);return Object(r.useEffect)((function(){n.current=t}),[t]),n}},986:function(t,n,e){"use strict";e.r(n);var r,u=e(5),i=e(11),o=e(12),a=e.n(o),c=e(971),s=e(0),f=e.n(s),l=e(973),d=e(974),p=((r={})[l.ENTERING]="show",r[l.ENTERED]="show",r),E=f.a.forwardRef((function(t,n){var e=t.className,r=t.children,o=Object(i.default)(t,["className","children"]),E=Object(s.useCallback)((function(t){Object(d.default)(t),o.onEnter&&o.onEnter(t)}),[o]);return f.a.createElement(l.default,Object(u.default)({ref:n,addEndListener:c.default},o,{onEnter:E}),(function(t,n){return f.a.cloneElement(r,Object(u.default)({},n,{className:a()("fade",e,r.props.className,p[t])}))}))}));E.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},E.displayName="Fade",n.default=E},988:function(t,n,e){"use strict";e.r(n),e.d(n,"optionsSupported",(function(){return u})),e.d(n,"onceSupported",(function(){return i}));var r=e(984),u=!1,i=!1;try{var o={get passive(){return u=!0},get once(){return i=u=!0}};r.default&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(t){}n.default=function(t,n,e,r){if(r&&"boolean"!=typeof r&&!i){var o=r.once,a=r.capture,c=e;!i&&o&&(c=e.__once||function t(r){this.removeEventListener(n,t,a),e.call(this,r)},e.__once=c),t.addEventListener(n,c,u?r:a)}t.addEventListener(n,e,r)}},989:function(t,n,e){"use strict";e.r(n),n.default=function(t,n,e,r){var u=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(n,e,u),e.__once&&t.removeEventListener(n,e.__once,u)}},997:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function u(t,n){return r(t.querySelectorAll(n))}}}]);