"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65878],{609399:function(e,t,n){n.r(t);var r=n(202784),o=n(323522),a=n(215476),i=n(405362),l=n(501258),c=n.n(l),s=n(295943),u=n.n(s);function p(){let e=new Array(100);for(let t=0;t<e.length;t++)e[t]=c()(0,1);return e}class f extends r.Component{constructor(e){super(e),this.state={points:p(),data:[]}}componentDidMount(){this.setStateInterval=window.setInterval((()=>{this.setState({data:this.getData()})}),6e3)}componentWillUnmount(){this.setStateInterval&&window.clearInterval(this.setStateInterval)}getData(){const e=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","black"],t=["square","circle"],n=u()(c()(0,10)),r=10*(n-1),o=10*n;return this.state.points.map(((n,a)=>{const i=u()(a/10);let l=r<=a&&a<=o;return{x:a,y:n,inTest:l,symbol:l?t[0]:t[1],fill:e[i],opacity:.6}}))}render(){return r.createElement("div",null,r.createElement(o.k,{animate:{duration:2e3,easing:"bounce"}},r.createElement(a.Z,{data:this.state.data}),r.createElement(i.b,{data:this.state.data,x:"x",y:e=>e.inTest?1:0,style:{data:{fill:"tomato",opacity:.4}}}),r.createElement(i.b,{data:this.state.data,x:"x",y:e=>e.inTest?0:1,style:{data:{fill:"lightblue",opacity:.4}}})))}}t.default=f},405362:function(e,t,n){n.d(t,{b:function(){return Q}});var r=n(213980),o=n.n(r),a=n(202784),i=n(301842),l=n.n(i),c=n(460019),s=n.n(c),u=n(639332),p=n(215378),f=n(733419),d=n(585613),y=n(938151),b=n(338094),m=function(e){var t=e.polar,n=d.Lo(e,"area"),r=d.Wi(e.style,n),o={x:d.rx(e,"x"),y:d.rx(e,"y")},a={x:y.x1(e,"x"),y:y.x1(e,"y")},i={x:p.q8(e,"x").domain(a.x).range(e.horizontal?o.y:o.x),y:p.q8(e,"y").domain(a.y).range(e.horizontal?o.x:o.y)},l=t?e.origin||d.IW(e):void 0,c=function(e,t){var n=u.Yu(e);n.length<2&&(n=[]);var r=function(e){var n="log"===p.oL(t[e])?1/Number.MAX_SAFE_INTEGER:0,r=t[e].domain(),o=f.ao(r),a=f.MN(r),i=n;return o<0&&a<=0?i=a:o>=0&&a>0&&(i=o),f.AM(r)?new Date(i):i};return n.map((function(e){var t=void 0!==e._y1?e._y1:e._y,n=void 0!==e._y0?e._y0:r("y"),o=void 0!==e._x1?e._x1:e._x,a=void 0!==e._x0?e._x0:r("x");return s()({},e,{_y0:n,_y1:t,_x0:a,_x1:o})}))}(e,i);return{style:r,data:c,scale:i,domain:a,origin:l}},h=n(56195),v=n(928378),g=n(929639),x=n(575380),O=n(50038),_=n(117497);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},E=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},k=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},I=function(e){return function(t){return e.y(t._y0)}},D=function(e){var t=e.polar,n=e.scale,r=g.U(e);return t?v.Z().defined(C).curve(r).angle(function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}}(n)).outerRadius(k(n)).innerRadius(I(n)):function(e){var t=e.horizontal,n=e.scale,r=g.U(e);return t?h.Z().defined(C).curve(r).x0(I(n)).x1(k(n)).y(E(n)):h.Z().defined(C).curve(r).x(E(n)).y1(k(n)).y0(I(n))}(e)},T=function(e){e=function(e){var t=d.xs(e.ariaLabel,e),n=d.xs(e.desc,e),r=d.xs(e.id,e),o=d.F3(s()({fill:"black"},e.style),e),a=d.xs(e.tabIndex,e);return s()({},e,{ariaLabel:t,desc:n,id:r,style:o,tabIndex:a})}(e);var t=e,n=t.ariaLabel,r=t.role,o=t.shapeRendering,i=t.className,l=t.polar,c=t.origin,u=t.data,p=t.pathComponent,f=t.events,y=t.groupComponent,b=t.clipPath,m=t.id,h=t.style,v=t.desc,O=t.tabIndex,_=x.I(e),w=l&&c?"translate(".concat(c.x,", ").concat(c.y,")"):void 0,j=e.transform||w,C=h.stroke&&"none"!==h.stroke&&"transparent"!==h.stroke,E=D(e),k=C&&g.G(e),I=h.stroke?"none":h.fill,T=P(P({"aria-label":n,className:i,role:r,shapeRendering:o,transform:j},f),{},{clipPath:b,tabIndex:O}),R=a.cloneElement(p,s()({key:"".concat(m,"-area"),style:s()({},h,{stroke:I}),d:E(u),desc:v,tabIndex:O},T,_)),S=C?a.cloneElement(p,s()({key:"".concat(m,"-area-stroke"),style:s()({},h,{fill:"none"}),d:k(u)},T)):null;return C?a.cloneElement(y,_,[R,S]):R};T.propTypes=P(P({},O.l.primitiveProps),{},{groupComponent:o().element,interpolation:o().oneOfType([o().string,o().func]),pathComponent:o().element}),T.defaultProps={groupComponent:a.createElement("g",null),pathComponent:a.createElement(_.y,null),role:"presentation",shapeRendering:"auto"};var R=n(228300),S=n(761027),A=n(339849),z=n(564167),M=n(844204),N=n(322),L=n(246522);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return X(this,n)}}function X(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var G={width:450,height:300,padding:50,interpolation:"linear"},J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o=K(a);function a(){return U(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=a.animationWhitelist,t=a.role,n=d.TY(this.props,G,t);if(this.shouldAnimate())return this.animateComponent(n,e);var r=this.renderContinuousData(n),o=n.standalone?this.renderContainer(n.containerComponent,r):r;return x.h(o,n)}}])&&Z(t.prototype,n),r&&Z(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(a.Component);J.animationWhitelist=["data","domain","height","padding","style","width"],J.propTypes=Y(Y(Y({},O.l.baseProps),O.l.dataProps),{},{interpolation:o().oneOfType([o().oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),o().func]),label:R.x9(o().string,"Use `labels` instead for individual data labels")}),J.defaultProps={containerComponent:a.createElement(S._,null),dataComponent:a.createElement(T,null),groupComponent:a.createElement(A.j,null),labelComponent:a.createElement(z.X,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:M.J.grayscale},J.displayName="VictoryArea",J.role="area",J.continuous=!0,J.defaultTransitions=N.sA(),J.defaultPolarTransitions=N.Jm(),J.getDomain=y.x1,J.getData=u.Yu,J.getBaseProps=function(e){return function(e,t){var n=d.TY(e,t,"area"),r=e=s()({},n,m(n)),o=r.data,a=r.domain,i=r.events,c=r.groupComponent,u=r.height,p=r.horizontal,f=r.interpolation,y=r.origin,h=r.padding,v=r.polar,g=r.scale,x=r.sharedEvents,O=r.standalone,_=r.style,w=r.theme,P=r.width,j=r.labels,C=r.name,E=r.disableInlineStyles,k={parent:{style:_.parent,width:P,height:u,scale:g,data:o,domain:a,standalone:O,theme:w,polar:v,origin:y,padding:h,name:C,horizontal:p},all:{data:{horizontal:p,polar:v,origin:y,scale:g,data:o,interpolation:f,groupComponent:c,style:E?{}:_.data,disableInlineStyles:E}}};return o.reduce((function(t,n,r){return(null!=b.Q(e,n,r)||j&&(i||x))&&(t[l()(n.eventKey)?r:n.eventKey]={labels:b.AM(e,r)}),t}),k)}(e,G)},J.expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];var Q=(0,L.o)(J,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);