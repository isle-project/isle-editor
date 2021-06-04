/*! For license information please see 5821.95afdafc.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5821],{407547:function(t,e,i){"use strict";var o=i(220091),s=i(31020),r=i(671655),n=s(r);o(n,"primitives",s(r.isPrimitive)),o(n,"objects",s(r.isObject)),t.exports=n},268344:function(t,e,i){"use strict";var o=i(500927);t.exports=o},500927:function(t,e,i){"use strict";var o=i(382470),s=i(671655).isPrimitive,r=i(407547).primitives,n=i(499937);t.exports=function(t,e){var i,a,h,p;if("object"!=typeof t||null===t)throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if(i=o(t),a={},s(e)){for(p=0;p<i.length;p++)(h=i[p])!==e&&(a[h]=t[h]);return a}if(r(e)){for(p=0;p<i.length;p++)h=i[p],-1===n(e,h)&&(a[h]=t[h]);return a}throw new TypeError("invalid argument. Second argument must be either a string primitive or an array of string primitives. Value: `"+e+"`.")}},606238:function(t){function e(t,e,i,o){var s,r=null==(s=o)||"number"==typeof s||"boolean"==typeof s?o:i(o),n=e.get(r);return void 0===n&&(n=t.call(this,o),e.set(r,n)),n}function i(t,e,i){var o=Array.prototype.slice.call(arguments,3),s=i(o),r=e.get(s);return void 0===r&&(r=t.apply(this,o),e.set(s,r)),r}function o(t,e,i,o,s){return i.bind(e,t,o,s)}function s(t,s){return o(t,this,1===t.length?e:i,s.cache.create(),s.serializer)}function r(){return JSON.stringify(arguments)}function n(){this.cache=Object.create(null)}n.prototype.has=function(t){return t in this.cache},n.prototype.get=function(t){return this.cache[t]},n.prototype.set=function(t,e){this.cache[t]=e};var a={create:function(){return new n}};t.exports=function(t,e){var i=e&&e.cache?e.cache:a,o=e&&e.serializer?e.serializer:r;return(e&&e.strategy?e.strategy:s)(t,{cache:i,serializer:o})},t.exports.strategies={variadic:function(t,e){return o(t,this,i,e.cache.create(),e.serializer)},monadic:function(t,i){return o(t,this,e,i.cache.create(),i.serializer)}}},179108:function(t,e,i){"use strict";i.d(e,{Z:function(){return y}});var o=i(928316),s=i(202784),r=i(213980),n=i.n(r),a=!("undefined"==typeof window||!window.document||!window.document.createElement),h=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=function(t){function e(){return p(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),h(e,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return a?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),o.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),e}(s.Component);u.propTypes={children:n().node.isRequired,node:n().any};var d=u,c=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var b=function(t){function e(){return f(this,e),g(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),c(e,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(t){this.renderPortal()}},{key:"componentWillUnmount",value:function(){o.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(t){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var e=this.props.children;"function"==typeof this.props.children.type&&(e=s.cloneElement(this.props.children)),this.portal=o.unstable_renderSubtreeIntoContainer(this,e,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),e}(s.Component),m=b;b.propTypes={children:n().node.isRequired,node:n().any};var y=o.createPortal?d:m},355008:function(t,e,i){"use strict";i.d(e,{s:function(){return D}});var o=i(202784),s=i(341327),r=i.n(s),n=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),a=function(){return(a=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},h={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onMouseDown=function(t){e.props.onResizeStart(t,e.props.direction)},e.onTouchStart=function(t){e.props.onResizeStart(t,e.props.direction)},e}return n(e,t),e.prototype.render=function(){return o.createElement("div",{className:this.props.className||"",style:a(a({position:"absolute",userSelect:"none"},h[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},e}(o.PureComponent),l=i(606238),u=i.n(l),d=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),c=function(){return(c=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},f={width:"auto",height:"auto"},g=u()((function(t,e,i){return Math.max(Math.min(t,i),e)})),b=u()((function(t,e){return Math.round(t/e)*e})),m=u()((function(t,e){return new RegExp(t,"i").test(e)})),y=function(t){return Boolean(t.touches&&t.touches.length)},w=u()((function(t,e,i){void 0===i&&(i=0);var o=e.reduce((function(i,o,s){return Math.abs(o-t)<Math.abs(e[i]-t)?s:i}),0),s=Math.abs(e[o]-t);return 0===i||s<i?e[o]:t})),z=u()((function(t,e){return t.substr(t.length-e.length,e.length)===e})),v=u()((function(t){return"auto"===(t=t.toString())||z(t,"px")||z(t,"%")||z(t,"vh")||z(t,"vw")||z(t,"vmax")||z(t,"vmin")?t:t+"px"})),x=function(t,e,i,o){if(t&&"string"==typeof t){if(z(t,"px"))return Number(t.replace("px",""));if(z(t,"%"))return e*(Number(t.replace("%",""))/100);if(z(t,"vw"))return i*(Number(t.replace("vw",""))/100);if(z(t,"vh"))return o*(Number(t.replace("vh",""))/100)}return t},S=u()((function(t,e,i,o,s,r,n){return o=x(o,t.width,e,i),s=x(s,t.height,e,i),r=x(r,t.width,e,i),n=x(n,t.height,e,i),{maxWidth:void 0===o?void 0:Number(o),maxHeight:void 0===s?void 0:Number(s),minWidth:void 0===r?void 0:Number(r),minHeight:void 0===n?void 0:Number(n)}})),R=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],P="__resizable_base__",W=function(t){function e(e){var i=t.call(this,e)||this;return i.ratio=1,i.resizable=null,i.parentLeft=0,i.parentTop=0,i.resizableLeft=0,i.resizableRight=0,i.resizableTop=0,i.resizableBottom=0,i.targetLeft=0,i.targetTop=0,i.appendBase=function(){if(!i.resizable||!i.window)return null;var t=i.parentNode;if(!t)return null;var e=i.window.document.createElement("div");return e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.transform="scale(0, 0)",e.style.left="0",e.style.flex="0",e.classList?e.classList.add(P):e.className+=P,t.appendChild(e),e},i.removeBase=function(t){var e=i.parentNode;e&&e.removeChild(t)},i.ref=function(t){t&&(i.resizable=t)},i.state={isResizing:!1,width:void 0===(i.propsSize&&i.propsSize.width)?"auto":i.propsSize&&i.propsSize.width,height:void 0===(i.propsSize&&i.propsSize.height)?"auto":i.propsSize&&i.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},i.onResizeStart=i.onResizeStart.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.onMouseUp=i.onMouseUp.bind(i),i}return d(e,t),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||f},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var t=0,e=0;if(this.resizable&&this.window){var i=this.resizable.offsetWidth,o=this.resizable.offsetHeight,s=this.resizable.style.position;"relative"!==s&&(this.resizable.style.position="relative"),t="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,e="auto"!==this.resizable.style.height?this.resizable.offsetHeight:o,this.resizable.style.position=s}return{width:t,height:e}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeStyle",{get:function(){var t=this,e=this.props.size,i=function(e){if(void 0===t.state[e]||"auto"===t.state[e])return"auto";if(t.propsSize&&t.propsSize[e]&&z(t.propsSize[e].toString(),"%")){if(z(t.state[e].toString(),"%"))return t.state[e].toString();var i=t.getParentSize();return Number(t.state[e].toString().replace("px",""))/i[e]*100+"%"}return v(t.state[e])};return{width:e&&void 0!==e.width&&!this.state.isResizing?v(e.width):i("width"),height:e&&void 0!==e.height&&!this.state.isResizing?v(e.height):i("height")}},enumerable:!1,configurable:!0}),e.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var t=this.appendBase();if(!t)return{width:0,height:0};var e=!1,i=this.parentNode.style.flexWrap;"wrap"!==i&&(e=!0,this.parentNode.style.flexWrap="wrap"),t.style.position="relative",t.style.minWidth="100%";var o={width:t.offsetWidth,height:t.offsetHeight};return e&&(this.parentNode.style.flexWrap=i),this.removeBase(t),o},e.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},e.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},e.prototype.componentDidMount=function(){if(this.resizable&&this.window){var t=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==t.flexBasis?t.flexBasis:void 0})}},e.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},e.prototype.createSizeForCssProperty=function(t,e){var i=this.propsSize&&this.propsSize[e];return"auto"!==this.state[e]||this.state.original[e]!==t||void 0!==i&&"auto"!==i?t:"auto"},e.prototype.calculateNewMaxFromBoundary=function(t,e){var i,o,s=this.props.boundsByDirection,r=this.state.direction,n=s&&m("left",r),a=s&&m("top",r);if("parent"===this.props.bounds){var h=this.parentNode;h&&(i=n?this.resizableRight-this.parentLeft:h.offsetWidth+(this.parentLeft-this.resizableLeft),o=a?this.resizableBottom-this.parentTop:h.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(i=n?this.resizableRight:this.window.innerWidth-this.resizableLeft,o=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(i=n?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),o=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return i&&Number.isFinite(i)&&(t=t&&t<i?t:i),o&&Number.isFinite(o)&&(e=e&&e<o?e:o),{maxWidth:t,maxHeight:e}},e.prototype.calculateNewSizeFromDirection=function(t,e){var i=this.props.scale||1,o=this.props.resizeRatio||1,s=this.state,r=s.direction,n=s.original,a=this.props,h=a.lockAspectRatio,p=a.lockAspectRatioExtraHeight,l=a.lockAspectRatioExtraWidth,u=n.width,d=n.height,c=p||0,f=l||0;return m("right",r)&&(u=n.width+(t-n.x)*o/i,h&&(d=(u-f)/this.ratio+c)),m("left",r)&&(u=n.width-(t-n.x)*o/i,h&&(d=(u-f)/this.ratio+c)),m("bottom",r)&&(d=n.height+(e-n.y)*o/i,h&&(u=(d-c)*this.ratio+f)),m("top",r)&&(d=n.height-(e-n.y)*o/i,h&&(u=(d-c)*this.ratio+f)),{newWidth:u,newHeight:d}},e.prototype.calculateNewSizeFromAspectRatio=function(t,e,i,o){var s=this.props,r=s.lockAspectRatio,n=s.lockAspectRatioExtraHeight,a=s.lockAspectRatioExtraWidth,h=void 0===o.width?10:o.width,p=void 0===i.width||i.width<0?t:i.width,l=void 0===o.height?10:o.height,u=void 0===i.height||i.height<0?e:i.height,d=n||0,c=a||0;if(r){var f=(l-d)*this.ratio+c,b=(u-d)*this.ratio+c,m=(h-c)/this.ratio+d,y=(p-c)/this.ratio+d,w=Math.max(h,f),z=Math.min(p,b),v=Math.max(l,m),x=Math.min(u,y);t=g(t,w,z),e=g(e,v,x)}else t=g(t,h,p),e=g(e,l,u);return{newWidth:t,newHeight:e}},e.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var t=this.parentNode;if(t){var e=t.getBoundingClientRect();this.parentLeft=e.left,this.parentTop=e.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var i=this.props.bounds.getBoundingClientRect();this.targetLeft=i.left,this.targetTop=i.top}if(this.resizable){var o=this.resizable.getBoundingClientRect(),s=o.left,r=o.top,n=o.right,a=o.bottom;this.resizableLeft=s,this.resizableRight=n,this.resizableTop=r,this.resizableBottom=a}},e.prototype.onResizeStart=function(t,e){if(this.resizable&&this.window){var i,o=0,s=0;if(t.nativeEvent&&function(t){return Boolean((t.clientX||0===t.clientX)&&(t.clientY||0===t.clientY))}(t.nativeEvent)){if(o=t.nativeEvent.clientX,s=t.nativeEvent.clientY,3===t.nativeEvent.which)return}else t.nativeEvent&&y(t.nativeEvent)&&(o=t.nativeEvent.touches[0].clientX,s=t.nativeEvent.touches[0].clientY);if(this.props.onResizeStart)if(this.resizable)if(!1===this.props.onResizeStart(t,e,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var r=this.window.getComputedStyle(this.resizable);if("auto"!==r.flexBasis){var n=this.parentNode;if(n){var a=this.window.getComputedStyle(n).flexDirection;this.flexDir=a.startsWith("row")?"row":"column",i=r.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var h={original:{x:o,y:s,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:c(c({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(t.target).cursor||"auto"}),direction:e,flexBasis:i};this.setState(h)}},e.prototype.onMouseMove=function(t){if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&y(t))try{t.preventDefault(),t.stopPropagation()}catch(O){}var e=this.props,i=e.maxWidth,o=e.maxHeight,s=e.minWidth,r=e.minHeight,n=y(t)?t.touches[0].clientX:t.clientX,a=y(t)?t.touches[0].clientY:t.clientY,h=this.state,p=h.direction,l=h.original,u=h.width,d=h.height,c=this.getParentSize(),f=S(c,this.window.innerWidth,this.window.innerHeight,i,o,s,r);i=f.maxWidth,o=f.maxHeight,s=f.minWidth,r=f.minHeight;var g=this.calculateNewSizeFromDirection(n,a),m=g.newHeight,v=g.newWidth,x=this.calculateNewMaxFromBoundary(i,o),R=this.calculateNewSizeFromAspectRatio(v,m,{width:x.maxWidth,height:x.maxHeight},{width:s,height:r});if(v=R.newWidth,m=R.newHeight,this.props.grid){var P=b(v,this.props.grid[0]),W=b(m,this.props.grid[1]),E=this.props.snapGap||0;v=0===E||Math.abs(P-v)<=E?P:v,m=0===E||Math.abs(W-m)<=E?W:m}this.props.snap&&this.props.snap.x&&(v=w(v,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(m=w(m,this.props.snap.y,this.props.snapGap));var H={width:v-l.width,height:m-l.height};if(u&&"string"==typeof u)if(z(u,"%"))v=v/c.width*100+"%";else if(z(u,"vw")){v=v/this.window.innerWidth*100+"vw"}else if(z(u,"vh")){v=v/this.window.innerHeight*100+"vh"}if(d&&"string"==typeof d)if(z(d,"%"))m=m/c.height*100+"%";else if(z(d,"vw")){m=m/this.window.innerWidth*100+"vw"}else if(z(d,"vh")){m=m/this.window.innerHeight*100+"vh"}var N={width:this.createSizeForCssProperty(v,"width"),height:this.createSizeForCssProperty(m,"height")};"row"===this.flexDir?N.flexBasis=N.width:"column"===this.flexDir&&(N.flexBasis=N.height),this.setState(N),this.props.onResize&&this.props.onResize(t,p,this.resizable,H)}},e.prototype.onMouseUp=function(t){var e=this.state,i=e.isResizing,o=e.direction,s=e.original;if(i&&this.resizable){var r={width:this.size.width-s.width,height:this.size.height-s.height};this.props.onResizeStop&&this.props.onResizeStop(t,o,this.resizable,r),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:c(c({},this.state.backgroundStyle),{cursor:"auto"})})}},e.prototype.updateSize=function(t){this.setState({width:t.width,height:t.height})},e.prototype.renderResizer=function(){var t=this,e=this.props,i=e.enable,s=e.handleStyles,r=e.handleClasses,n=e.handleWrapperStyle,a=e.handleWrapperClass,h=e.handleComponent;if(!i)return null;var l=Object.keys(i).map((function(e){return!1!==i[e]?o.createElement(p,{key:e,direction:e,onResizeStart:t.onResizeStart,replaceStyles:s&&s[e],className:r&&r[e]},h&&h[e]?h[e]:null):null}));return o.createElement("div",{className:a,style:n},l)},e.prototype.render=function(){var t=this,e=Object.keys(this.props).reduce((function(e,i){return-1!==R.indexOf(i)||(e[i]=t.props[i]),e}),{}),i=c(c(c({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(i.flexBasis=this.state.flexBasis);var s=this.props.as||"div";return o.createElement(s,c({ref:this.ref,style:i,className:this.props.className},e),this.state.isResizing&&o.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},e.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},e}(o.PureComponent),E=function(t,e){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};var H=function(){return(H=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};var N=r(),O={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},D=function(t){function e(e){var i=t.call(this,e)||this;return i.resizing=!1,i.resizingPosition={x:0,y:0},i.offsetFromParent={left:0,top:0},i.resizableElement={current:null},i.originalPosition={x:0,y:0},i.refDraggable=function(t){t&&(i.draggable=t)},i.refResizable=function(t){t&&(i.resizable=t,i.resizableElement.current=t.resizable)},i.state={original:{x:0,y:0},bounds:{top:0,right:0,bottom:0,left:0},maxWidth:e.maxWidth,maxHeight:e.maxHeight},i.onResizeStart=i.onResizeStart.bind(i),i.onResize=i.onResize.bind(i),i.onResizeStop=i.onResizeStop.bind(i),i.onDragStart=i.onDragStart.bind(i),i.onDrag=i.onDrag.bind(i),i.onDragStop=i.onDragStop.bind(i),i.getMaxSizesFromProps=i.getMaxSizesFromProps.bind(i),i}return function(t,e){function i(){this.constructor=t}E(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.prototype.componentDidMount=function(){this.updateOffsetFromParent();var t=this.offsetFromParent,e=t.left,i=t.top,o=this.getDraggablePosition(),s=o.x,r=o.y;this.draggable.setState({x:s-e,y:r-i}),this.forceUpdate()},e.prototype.getDraggablePosition=function(){var t=this.draggable.state;return{x:t.x,y:t.y}},e.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},e.prototype.getParentSize=function(){return this.resizable.getParentSize()},e.prototype.getMaxSizesFromProps=function(){return{maxWidth:void 0===this.props.maxWidth?Number.MAX_SAFE_INTEGER:this.props.maxWidth,maxHeight:void 0===this.props.maxHeight?Number.MAX_SAFE_INTEGER:this.props.maxHeight}},e.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},e.prototype.getOffsetHeight=function(t){var e=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/e;case"body":return document.body.offsetHeight/e;default:return t.offsetHeight}},e.prototype.getOffsetWidth=function(t){var e=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/e;case"body":return document.body.offsetWidth/e;default:return t.offsetWidth}},e.prototype.onDragStart=function(t,e){this.props.onDragStart&&this.props.onDragStart(t,e);var i=this.getDraggablePosition();if(this.originalPosition=i,this.props.bounds){var o,s=this.getParent(),r=this.props.scale;if("parent"===this.props.bounds)o=s;else{if("body"===this.props.bounds){var n=s.getBoundingClientRect(),a=n.left,h=n.top,p=document.body.getBoundingClientRect(),l=-(a-s.offsetLeft*r-p.left)/r,u=-(h-s.offsetTop*r-p.top)/r,d=(document.body.offsetWidth-this.resizable.size.width*r)/r+l,c=(document.body.offsetHeight-this.resizable.size.height*r)/r+u;return this.setState({bounds:{top:u,right:d,bottom:c,left:l}})}if("window"===this.props.bounds){if(!this.resizable)return;var f=s.getBoundingClientRect(),g=f.left,b=f.top,m=-(g-s.offsetLeft*r)/r,y=-(b-s.offsetTop*r)/r;d=(window.innerWidth-this.resizable.size.width*r)/r+m,c=(window.innerHeight-this.resizable.size.height*r)/r+y;return this.setState({bounds:{top:y,right:d,bottom:c,left:m}})}o=document.querySelector(this.props.bounds)}if(o instanceof HTMLElement&&s instanceof HTMLElement){var w=o.getBoundingClientRect(),z=w.left,v=w.top,x=s.getBoundingClientRect(),S=(z-x.left)/r,R=v-x.top;if(this.resizable){this.updateOffsetFromParent();var P=this.offsetFromParent;this.setState({bounds:{top:R-P.top,right:S+(o.offsetWidth-this.resizable.size.width)-P.left/r,bottom:R+(o.offsetHeight-this.resizable.size.height)-P.top,left:S-P.left/r}})}}}},e.prototype.onDrag=function(t,e){if(this.props.onDrag){var i=this.offsetFromParent,o=i.left,s=i.top;return this.props.dragAxis&&"both"!==this.props.dragAxis?"x"===this.props.dragAxis?this.props.onDrag(t,H(H({},e),{x:e.x+o,y:this.originalPosition.y+s,deltaY:0})):"y"===this.props.dragAxis?this.props.onDrag(t,H(H({},e),{x:this.originalPosition.x+o,y:e.y+s,deltaX:0})):void 0:this.props.onDrag(t,H(H({},e),{x:e.x-o,y:e.y-s}))}},e.prototype.onDragStop=function(t,e){if(this.props.onDragStop){var i=this.offsetFromParent,o=i.left,s=i.top;return this.props.dragAxis&&"both"!==this.props.dragAxis?"x"===this.props.dragAxis?this.props.onDragStop(t,H(H({},e),{x:e.x+o,y:this.originalPosition.y+s,deltaY:0})):"y"===this.props.dragAxis?this.props.onDragStop(t,H(H({},e),{x:this.originalPosition.x+o,y:e.y+s,deltaX:0})):void 0:this.props.onDragStop(t,H(H({},e),{x:e.x+o,y:e.y+s}))}},e.prototype.onResizeStart=function(t,e,i){t.stopPropagation(),this.resizing=!0;var o=this.props.scale,s=this.offsetFromParent,r=this.getDraggablePosition();if(this.resizingPosition={x:r.x+s.left,y:r.y+s.top},this.setState({original:r}),this.props.bounds){var n=this.getParent(),a=void 0;a="parent"===this.props.bounds?n:"body"===this.props.bounds?document.body:"window"===this.props.bounds?window:document.querySelector(this.props.bounds);var h=this.getSelfElement();if(h instanceof Element&&(a instanceof HTMLElement||a===window)&&n instanceof HTMLElement){var p=this.getMaxSizesFromProps(),l=p.maxWidth,u=p.maxHeight,d=this.getParentSize();if(l&&"string"==typeof l)if(l.endsWith("%")){var c=Number(l.replace("%",""))/100;l=d.width*c}else l.endsWith("px")&&(l=Number(l.replace("px","")));if(u&&"string"==typeof u)if(u.endsWith("%")){c=Number(u.replace("%",""))/100;u=d.width*c}else u.endsWith("px")&&(u=Number(u.replace("px","")));var f=h.getBoundingClientRect(),g=f.left,b=f.top,m="window"===this.props.bounds?{left:0,top:0}:a.getBoundingClientRect(),y=m.left,w=m.top,z=this.getOffsetWidth(a),v=this.getOffsetHeight(a),x=e.toLowerCase().endsWith("left"),S=e.toLowerCase().endsWith("right"),R=e.startsWith("top"),P=e.startsWith("bottom");if(x&&this.resizable){var W=(g-y)/o+this.resizable.size.width;this.setState({maxWidth:W>Number(l)?l:W})}if(S||this.props.lockAspectRatio&&!x){W=z+(y-g)/o;this.setState({maxWidth:W>Number(l)?l:W})}if(R&&this.resizable){W=(b-w)/o+this.resizable.size.height;this.setState({maxHeight:W>Number(u)?u:W})}if(P||this.props.lockAspectRatio&&!R){W=v+(w-b)/o;this.setState({maxHeight:W>Number(u)?u:W})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(t,e,i)},e.prototype.onResize=function(t,e,i,o){var s={x:this.state.original.x,y:this.state.original.y},r=-o.width,n=-o.height;-1!==["top","left","topLeft","bottomLeft","topRight"].indexOf(e)&&("bottomLeft"===e?s.x+=r:("topRight"===e||(s.x+=r),s.y+=n)),s.x===this.draggable.state.x&&s.y===this.draggable.state.y||this.draggable.setState(s),this.updateOffsetFromParent();var a=this.offsetFromParent,h=this.getDraggablePosition().x+a.left,p=this.getDraggablePosition().y+a.top;this.resizingPosition={x:h,y:p},this.props.onResize&&this.props.onResize(t,e,i,o,{x:h,y:p})},e.prototype.onResizeStop=function(t,e,i,o){this.resizing=!1;var s=this.getMaxSizesFromProps(),r=s.maxWidth,n=s.maxHeight;this.setState({maxWidth:r,maxHeight:n}),this.props.onResizeStop&&this.props.onResizeStop(t,e,i,o,this.resizingPosition)},e.prototype.updateSize=function(t){this.resizable&&this.resizable.updateSize({width:t.width,height:t.height})},e.prototype.updatePosition=function(t){this.draggable.setState(t)},e.prototype.updateOffsetFromParent=function(){var t=this.props.scale,e=this.getParent(),i=this.getSelfElement();if(!e||null===i)return{top:0,left:0};var o=e.getBoundingClientRect(),s=o.left,r=o.top,n=i.getBoundingClientRect(),a=this.getDraggablePosition();this.offsetFromParent={left:n.left-s-a.x*t,top:n.top-r-a.y*t}},e.prototype.render=function(){var t=this.props,e=t.disableDragging,i=t.style,s=t.dragHandleClassName,r=t.position,n=t.onMouseDown,a=t.onMouseUp,h=t.dragAxis,p=t.dragGrid,l=t.bounds,u=t.enableUserSelectHack,d=t.cancel,c=t.children,f=(t.onResizeStart,t.onResize,t.onResizeStop,t.onDragStart,t.onDrag,t.onDragStop,t.resizeHandleStyles),g=t.resizeHandleClasses,b=t.resizeHandleComponent,m=t.enableResizing,y=t.resizeGrid,w=t.resizeHandleWrapperClass,z=t.resizeHandleWrapperStyle,v=t.scale,x=t.allowAnyClick,S=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(t);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(i[o[s]]=t[o[s]])}return i}(t,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick"]),R=this.props.default?H({},this.props.default):void 0;delete S.default;var P,E=e||s?{cursor:"auto"}:{cursor:"move"},D=H(H(H({},O),E),i),M=this.offsetFromParent,C=M.left,_=M.top;r&&(P={x:r.x-C,y:r.y-_});var k,A=this.resizing?void 0:P,L=this.resizing?"both":h;return(0,o.createElement)(N,{ref:this.refDraggable,handle:s?"."+s:void 0,defaultPosition:R,onMouseDown:n,onMouseUp:a,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:L,disabled:e,grid:p,bounds:l?this.state.bounds:void 0,position:A,enableUserSelectHack:u,cancel:d,scale:v,allowAnyClick:x,nodeRef:this.resizableElement},(0,o.createElement)(W,H({},S,{ref:this.refResizable,defaultSize:R,size:this.props.size,enable:"boolean"==typeof m?(k=m,{bottom:k,bottomLeft:k,bottomRight:k,left:k,right:k,top:k,topLeft:k,topRight:k}):m,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:D,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.resizing?this.state.maxHeight:this.props.maxHeight,grid:y,handleWrapperClass:w,handleWrapperStyle:z,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:f,handleClasses:g,handleComponent:b,scale:this.props.scale}),c))},e.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},e}(o.PureComponent)}}]);