/*! For license information please see 5505.ec3eb001.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5505],{418919:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(202784);function a(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},766267:function(e,n,t){"use strict";var r=t(361060),a=t(733973).factory,o=t(122860),i=t(740015),l=t(779247);e.exports=function(e,n){return o(e)||o(n)||e<0||n<=0?r(NaN):0===e?a(0):function(t){if(o(t))return NaN;if(t<0||t===i)return 0;return l(e,t*n)*n}}},779247:function(e,n,t){"use strict";var r=t(296434),a=t(808628),o=t(180909),i=t(740015),l=t(73242),u=t(236625);e.exports=function(e,n){var t;return e<=0||n<0?NaN:0===n?e>1?0:1===e?1:i:(t=u(e,n),n<1&&l*n<t?i:(0===t?(t=e*o(n)-n-r(e)-o(n),t=a(t)):t/=n,t))}},42594:function(e,n,t){"use strict";var r=t(220091),a=t(201345);r(a,"factory",t(766267)),e.exports=a},201345:function(e,n,t){"use strict";var r=t(122860),a=t(740015),o=t(779247);e.exports=function(e,n,t){return r(e)||r(n)||r(t)||n<0||t<=0?NaN:e<0||e===a?0:0===n?0===e?a:0:o(n,e*t)*t}},236625:function(e,n,t){"use strict";var r=t(452903),a=t(296434),o=t(790411),i=t(980270),l=t(989202),u=t(656523),c=t(808628),s=t(439402),f=t(974652),d=t(272008),v=t(180909),p=t(364987),m=t(851766),y=t(509777),b=t(842129);e.exports=function(e,n){var t,Z,g,h,x,E,C;return C=(n-e-y+.5)/(g=e+y-.5),e<1?n<=m?c(e*v(n)-n-a(e)):s(n,e)*c(-n)/o(e):(u(C*C*e)<=100&&e>150?(t=e*(i(C)-C)+n*(.5-y)/g,t=c(t)):(h=e*v(n/g),d(h,x=e-n)<=m||f(h,x)>=p?(Z=x/e,d(h,x)/2>m&&f(h,x)/2<p?t=(E=s(n/g,e/2)*c(x/2))*E:d(h,x)/4>m&&f(h,x)/4<p&&n>e?(t=(E=s(n/g,e/4)*c(x/4))*E,t*=t):t=Z>m&&Z<p?s(n*c(Z)/g,e):c(h+x)):t=s(n/g,e)*c(x)),t*=l(g/b)/r(e))}},188046:function(e,n,t){"use strict";var r=t(361060),a=t(841515),o=t(772336).factory,i=t(122860);e.exports=function(e,n){return i(e)||i(n)||e<0||n<=0?r(NaN):0===e?o(0):function(t){if(i(t)||t<0||t>1)return NaN;return 1/n*a(t,e)}}},297025:function(e,n,t){"use strict";var r=t(220091),a=t(288985);r(a,"factory",t(188046)),e.exports=a},288985:function(e,n,t){"use strict";var r=t(122860),a=t(841515);e.exports=function(e,n,t){return r(n)||r(t)||r(e)||n<0||t<=0||e<0||e>1?NaN:0===n?0:1/t*a(e,n)}},658092:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,n){return r(e.querySelectorAll(n))}},172643:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(658092),i=t(202784),l=t(418919),u=t(225879),c=t(62207),s=t(942932),f=t(395269),d=function(){},v=i.forwardRef((function(e,n){var t,v,p=e.as,m=void 0===p?"ul":p,y=e.onSelect,b=e.activeKey,Z=e.role,g=e.onKeyDown,h=(0,a.Z)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=(0,l.Z)(),E=(0,i.useRef)(!1),C=(0,i.useContext)(s.Z),P=(0,i.useContext)(f.Z);P&&(Z=Z||"tablist",b=P.activeKey,t=P.getControlledId,v=P.getControllerId);var O=(0,i.useRef)(null),w=function(e){var n=O.current;if(!n)return null;var t=(0,o.Z)(n,"[data-rb-event-key]:not(.disabled)"),r=n.querySelector(".active");if(!r)return null;var a=t.indexOf(r);if(-1===a)return null;var i=a+e;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},N=function(e,n){null!=e&&(y&&y(e,n),C&&C(e,n))};(0,i.useEffect)((function(){if(O.current&&E.current){var e=O.current.querySelector("[data-rb-event-key].active");e&&e.focus()}E.current=!1}));var K=(0,u.Z)(n,O);return i.createElement(s.Z.Provider,{value:N},i.createElement(c.Z.Provider,{value:{role:Z,activeKey:(0,s.h)(b),getControlledId:t||d,getControllerId:v||d}},i.createElement(m,(0,r.Z)({},h,{onKeyDown:function(e){var n;switch(g&&g(e),e.key){case"ArrowLeft":case"ArrowUp":n=w(-1);break;case"ArrowRight":case"ArrowDown":n=w(1);break;default:return}n&&(e.preventDefault(),N(n.dataset.rbEventKey,e),E.current=!0,x())},ref:K,role:Z}))))}));n.Z=v},492784:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(72779),i=t.n(o),l=t(202784),u=t(806252),c=(t(645982),t(62207)),s=t(942932),f=l.forwardRef((function(e,n){var t=e.active,o=e.className,f=e.eventKey,d=e.onSelect,v=e.onClick,p=e.as,m=(0,a.Z)(e,["active","className","eventKey","onSelect","onClick","as"]),y=(0,s.h)(f,m.href),b=(0,l.useContext)(s.Z),Z=(0,l.useContext)(c.Z),g=t;if(Z){m.role||"tablist"!==Z.role||(m.role="tab");var h=Z.getControllerId(y),x=Z.getControlledId(y);m["data-rb-event-key"]=y,m.id=h||m.id,m["aria-controls"]=x||m["aria-controls"],g=null==t&&null!=y?Z.activeKey===y:t}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=g);var E=(0,u.Z)((function(e){v&&v(e),null!=y&&(d&&d(y,e),b&&b(y,e))}));return l.createElement(p,(0,r.Z)({},m,{ref:n,onClick:E,className:i()(o,g&&"active")}))}));f.defaultProps={disabled:!1},n.Z=f},21027:function(e,n,t){"use strict";t.d(n,{U:function(){return a},E:function(){return o}});var r=t(202784);function a(e,n){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,t++):e}))}function o(e,n){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,t++)}))}},569862:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(72779),i=t.n(o),l=(t(970688),t(202784)),u=t(229277),c=t(429658),s=t(915462),f=t(144876),d=t(172643),v=t(477029),p=t(206198),m=l.forwardRef((function(e,n){var t,o,v,p=(0,u.Ch)(e,{activeKey:"onSelect"}),m=p.as,y=void 0===m?"div":m,b=p.bsPrefix,Z=p.variant,g=p.fill,h=p.justify,x=p.navbar,E=p.navbarScroll,C=p.className,P=p.children,O=p.activeKey,w=(0,a.Z)(p,["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"]),N=(0,c.vE)(b,"nav"),K=!1,_=(0,l.useContext)(s.Z),j=(0,l.useContext)(f.Z);return _?(o=_.bsPrefix,K=null==x||x):j&&(v=j.cardHeaderBsPrefix),l.createElement(d.Z,(0,r.Z)({as:y,ref:n,activeKey:O,className:i()(C,(t={},t[N]=!K,t[o+"-nav"]=K,t[o+"-nav-scroll"]=K&&E,t[v+"-"+Z]=!!v,t[N+"-"+Z]=!!Z,t[N+"-fill"]=g,t[N+"-justified"]=h,t))},w),P)}));m.displayName="Nav",m.defaultProps={justify:!1,fill:!1},m.Item=v.Z,m.Link=p.Z,n.Z=m},62207:function(e,n,t){"use strict";var r=t(202784).createContext(null);r.displayName="NavContext",n.Z=r},477029:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(72779),i=t.n(o),l=t(202784),u=t(429658),c=l.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,c=e.children,s=e.as,f=void 0===s?"div":s,d=(0,a.Z)(e,["bsPrefix","className","children","as"]);return t=(0,u.vE)(t,"nav-item"),l.createElement(f,(0,r.Z)({},d,{ref:n,className:i()(o,t)}),c)}));c.displayName="NavItem",n.Z=c},206198:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(72779),i=t.n(o),l=t(202784),u=t(482695),c=t(492784),s=t(429658),f={disabled:!1,as:u.Z},d=l.forwardRef((function(e,n){var t=e.bsPrefix,o=e.disabled,u=e.className,f=e.href,d=e.eventKey,v=e.onSelect,p=e.as,m=(0,a.Z)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return t=(0,s.vE)(t,"nav-link"),l.createElement(c.Z,(0,r.Z)({},m,{href:f,ref:n,eventKey:d,as:p,disabled:o,onSelect:v,className:i()(u,t,o&&"disabled")}))}));d.displayName="NavLink",d.defaultProps=f,n.Z=d},915462:function(e,n,t){"use strict";var r=t(202784).createContext(null);r.displayName="NavbarContext",n.Z=r},942932:function(e,n,t){"use strict";t.d(n,{h:function(){return a}});var r=t(202784).createContext(null),a=function(e,n){return void 0===n&&(n=null),null!=e?String(e):n||null};n.Z=r},188429:function(e,n,t){"use strict";var r=t(535307),a=t(202784),o=t(485571),i=t(821729),l=t(557747),u=function(e){function n(){return e.apply(this,arguments)||this}return(0,r.Z)(n,e),n.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},n}(a.Component);u.Container=o.Z,u.Content=i.Z,u.Pane=l.Z,n.Z=u},485571:function(e,n,t){"use strict";var r=t(202784),a=t(229277),o=t(395269),i=t(942932);n.Z=function(e){var n=(0,a.Ch)(e,{activeKey:"onSelect"}),t=n.id,l=n.generateChildId,u=n.onSelect,c=n.activeKey,s=n.transition,f=n.mountOnEnter,d=n.unmountOnExit,v=n.children,p=(0,r.useMemo)((function(){return l||function(e,n){return t?t+"-"+n+"-"+e:null}}),[t,l]),m=(0,r.useMemo)((function(){return{onSelect:u,activeKey:c,transition:s,mountOnEnter:f||!1,unmountOnExit:d||!1,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[u,c,s,f,d,p]);return r.createElement(o.Z.Provider,{value:m},r.createElement(i.Z.Provider,{value:u||null},v))}},821729:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(72779),i=t.n(o),l=t(202784),u=t(429658),c=l.forwardRef((function(e,n){var t=e.bsPrefix,o=e.as,c=void 0===o?"div":o,s=e.className,f=(0,a.Z)(e,["bsPrefix","as","className"]),d=(0,u.vE)(t,"tab-content");return l.createElement(c,(0,r.Z)({ref:n},f,{className:i()(s,d)}))}));n.Z=c},395269:function(e,n,t){"use strict";var r=t(202784).createContext(null);n.Z=r},557747:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(72779),i=t.n(o),l=t(202784),u=t(429658),c=t(395269),s=t(942932),f=t(558370);var d=l.forwardRef((function(e,n){var t=function(e){var n=(0,l.useContext)(c.Z);if(!n)return e;var t=n.activeKey,o=n.getControlledId,i=n.getControllerId,u=(0,a.Z)(n,["activeKey","getControlledId","getControllerId"]),d=!1!==e.transition&&!1!==u.transition,v=(0,s.h)(e.eventKey);return(0,r.Z)({},e,{active:null==e.active&&null!=v?(0,s.h)(t)===v:e.active,id:o(e.eventKey),"aria-labelledby":i(e.eventKey),transition:d&&(e.transition||u.transition||f.Z),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:u.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:u.unmountOnExit})}(e),o=t.bsPrefix,d=t.className,v=t.active,p=t.onEnter,m=t.onEntering,y=t.onEntered,b=t.onExit,Z=t.onExiting,g=t.onExited,h=t.mountOnEnter,x=t.unmountOnExit,E=t.transition,C=t.as,P=void 0===C?"div":C,O=(t.eventKey,(0,a.Z)(t,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=(0,u.vE)(o,"tab-pane");if(!v&&!E&&x)return null;var N=l.createElement(P,(0,r.Z)({},O,{ref:n,role:"tabpanel","aria-hidden":!v,className:i()(d,w,{active:v})}));return E&&(N=l.createElement(E,{in:v,onEnter:p,onEntering:m,onEntered:y,onExit:b,onExiting:Z,onExited:g,mountOnEnter:h,unmountOnExit:x},N)),l.createElement(c.Z.Provider,{value:null},l.createElement(s.Z.Provider,{value:null},N))}));d.displayName="TabPane",n.Z=d},320123:function(e,n,t){"use strict";var r=t(607560),a=t(998283),o=t(202784),i=(t(840368),t(229277)),l=t(569862),u=t(206198),c=t(477029),s=t(485571),f=t(821729),d=t(557747),v=t(21027);function p(e){var n=e.props,t=n.title,r=n.eventKey,a=n.disabled,i=n.tabClassName,l=n.id;return null==t?null:o.createElement(c.Z,{as:u.Z,eventKey:r,disabled:a,id:l,className:i},t)}var m=function(e){var n=(0,i.Ch)(e,{activeKey:"onSelect"}),t=n.id,u=n.onSelect,c=n.transition,m=n.mountOnEnter,y=n.unmountOnExit,b=n.children,Z=n.activeKey,g=void 0===Z?function(e){var n;return(0,v.E)(e,(function(e){null==n&&(n=e.props.eventKey)})),n}(b):Z,h=(0,a.Z)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.createElement(s.Z,{id:t,activeKey:g,onSelect:u,transition:c,mountOnEnter:m,unmountOnExit:y},o.createElement(l.Z,(0,r.Z)({},h,{role:"tablist",as:"nav"}),(0,v.U)(b,p)),o.createElement(f.Z,null,(0,v.U)(b,(function(e){var n=(0,r.Z)({},e.props);return delete n.title,delete n.disabled,delete n.tabClassName,o.createElement(d.Z,n)}))))};m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs",n.Z=m},648883:function(e,n,t){"use strict";t.d(n,{Z:function(){return H}});var r=t(213980),a=t.n(r),o=t(202784),i=t(301842),l=t.n(i),u=t(460019),c=t.n(u),s=t(382480),f=t(907920),d=t(733419),v=t(585613),p=t(938151),m=t(338094),y=function(e){var n=e.polar,t=v.Z.getDefaultStyles(e,"area"),r=v.Z.getStyles(e.style,t),a={x:v.Z.getRange(e,"x"),y:v.Z.getRange(e,"y")},o={x:p.Z.getDomainWithZero(e,"x"),y:p.Z.getDomainWithZero(e,"y")},i={x:f.Z.getBaseScale(e,"x").domain(o.x).range(e.horizontal?a.y:a.x),y:f.Z.getBaseScale(e,"y").domain(o.y).range(e.horizontal?a.x:a.y)},l=n?e.origin||v.Z.getPolarOrigin(e):void 0;return{style:r,data:function(e,n){var t=s.Z.getData(e);t.length<2&&(t=[]);var r=function(e){var t="log"===f.Z.getType(n[e])?1/Number.MAX_SAFE_INTEGER:0,r=n[e].domain(),a=d.Z.getMinValue(r),o=d.Z.getMaxValue(r),i=t;return a<0&&o<=0?i=o:a>=0&&o>0&&(i=a),d.Z.containsDates(r)?new Date(i):i};return t.map((function(e){var n=void 0!==e._y1?e._y1:e._y,t=void 0!==e._y0?e._y0:r("y"),a=void 0!==e._x1?e._x1:e._x,o=void 0!==e._x0?e._x0:r("x");return c()({},e,{_y0:t,_y1:n,_x0:o,_x1:a})}))}(e,i),scale:i,domain:o,origin:l}},b=t(172440),Z=t(608329),g=t(779767),h=t(779493),x=t(969896),E=t(50038),C=t(117497);function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){O(e,n,t[n])}))}return e}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var w=function(e){var n=void 0!==e._y1?e._y1:e._y;return null!=n&&null!==e._y0},N=function(e){return function(n){return e.x(void 0!==n._x1?n._x1:n._x)}},K=function(e){return function(n){return e.y(void 0!==n._y1?n._y1:n._y)}},_=function(e){return function(n){return e.y(n._y0)}},j=function(e){return function(n){return-1*e.x(void 0!==n._x1?n._x1:n._x)+Math.PI/2}},S=function(e){var n;return"curve".concat((n=e)&&n[0].toUpperCase()+n.slice(1))},k=function(e){var n=e.polar,t=e.scale,r=e.horizontal,a="function"==typeof e.interpolation&&e.interpolation,o="string"==typeof e.interpolation&&S(e.interpolation);return n?Z.Z().defined(w).curve(a||b["".concat(o,"Closed")]).angle(j(t)).radius(K(t)):g.Z().defined(w).curve(a||b[o]).x(r?K(t):N(t)).y(r?N(t):K(t))},I=function(e){var n=e.polar,t=e.scale,r="function"==typeof e.interpolation&&e.interpolation,a="string"==typeof e.interpolation&&S(e.interpolation),o=r||a;return n?x.Z().defined(w).curve(r||b["".concat(a,"Closed")]).angle(j(t)).outerRadius(K(t)).innerRadius(_(t)):function(e,n){var t=e.horizontal,r=e.scale,a="function"==typeof n&&n,o="string"==typeof n&&n;return t?h.Z().defined(w).curve(a||b[o]).x0(_(r)).x1(K(r)).y(N(r)):h.Z().defined(w).curve(a||b[o]).x(N(r)).y1(K(r)).y0(_(r))}(e,o)},R=function(e){var n=e=function(e){var n=v.Z.evaluateProp(e.ariaLabel,e),t=v.Z.evaluateProp(e.desc,e),r=v.Z.evaluateProp(e.id,e),a=v.Z.evaluateStyle(c()({fill:"black"},e.style),e),o=v.Z.evaluateProp(e.tabIndex,e);return c()({},e,{ariaLabel:n,desc:t,id:r,style:a,tabIndex:o})}(e),t=n.ariaLabel,r=n.role,a=n.shapeRendering,i=n.className,l=n.polar,u=n.origin,s=n.data,f=n.pathComponent,d=n.events,p=n.groupComponent,m=n.clipPath,y=n.id,b=n.style,Z=n.desc,g=n.tabIndex,h=l&&u?"translate(".concat(u.x,", ").concat(u.y,")"):void 0,x=e.transform||h,E=b.stroke&&"none"!==b.stroke&&"transparent"!==b.stroke,C=I(e),O=E&&k(e),w=b.stroke?"none":b.fill,N=P({"aria-label":t,className:i,role:r,shapeRendering:a,transform:x},d,{clipPath:m,tabIndex:g}),K=o.cloneElement(f,c()({key:"".concat(y,"-area"),style:c()({},b,{stroke:w}),d:C(s),desc:Z,tabIndex:g},N)),_=E?o.cloneElement(f,c()({key:"".concat(y,"-area-stroke"),style:c()({},b,{fill:"none"}),d:O(s)},N)):null;return E?o.cloneElement(p,{},[K,_]):K};R.propTypes=P({},E.Z.primitiveProps,{groupComponent:a().element,interpolation:a().oneOfType([a().string,a().func]),pathComponent:a().element}),R.defaultProps={groupComponent:o.createElement("g",null),pathComponent:o.createElement(C.Z,null),role:"presentation",shapeRendering:"auto"};var T=R,D=t(228300),A=t(502622),z=t(67546),B=t(497596),L=t(213763),M=t(322),U=t(647643);function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function F(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}var X={width:450,height:300,padding:50,interpolation:"linear"},G=function(e){function n(){return W(this,n),q(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),t=n,(r=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=n.animationWhitelist,t=n.role,r=v.Z.modifyProps(this.props,X,t);if(this.shouldAnimate())return this.animateComponent(r,e);var a=this.renderContinuousData(r);return r.standalone?this.renderContainer(r.containerComponent,a):a}}])&&F(t.prototype,r),a&&F(t,a),n}(o.Component);Object.defineProperty(G,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(G,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){V(e,n,t[n])}))}return e}({},E.Z.baseProps,E.Z.dataProps,{interpolation:a().oneOfType([a().oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),a().func]),label:D.Z.deprecated(a().string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(G,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:o.createElement(A.Z,null),dataComponent:o.createElement(T,null),groupComponent:o.createElement(z.Z,null),labelComponent:o.createElement(B.Z,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:L.Z.grayscale}}),Object.defineProperty(G,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryArea"}),Object.defineProperty(G,"role",{configurable:!0,enumerable:!0,writable:!0,value:"area"}),Object.defineProperty(G,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(G,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:M.Z.continuousTransitions()}),Object.defineProperty(G,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:M.Z.continuousPolarTransitions()}),Object.defineProperty(G,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:p.Z.getDomainWithZero}),Object.defineProperty(G,"getData",{configurable:!0,enumerable:!0,writable:!0,value:s.Z.getData}),Object.defineProperty(G,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,n){var t=v.Z.modifyProps(e,n,"area"),r=e=c()({},t,y(t)),a=r.data,o=r.domain,i=r.events,u=r.groupComponent,s=r.height,f=r.horizontal,d=r.interpolation,p=r.origin,b=r.padding,Z=r.polar,g=r.scale,h=r.sharedEvents,x=r.standalone,E=r.style,C=r.theme,P=r.width,O=r.labels,w=r.name,N={parent:{style:E.parent,width:P,height:s,scale:g,data:a,domain:o,standalone:x,theme:C,polar:Z,origin:p,padding:b,name:w,horizontal:f},all:{data:{horizontal:f,polar:Z,origin:p,scale:g,data:a,interpolation:d,groupComponent:u,style:E.data}}};return a.reduce((function(n,t,r){return(null!=m.Z.getText(e,t,r)||O&&(i||h))&&(n[l()(t.eventKey)?r:t.eventKey]={labels:m.Z.getProps(e,r)}),n}),N)}(e,X)}}),Object.defineProperty(G,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});var H=(0,U.Z)(G,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);