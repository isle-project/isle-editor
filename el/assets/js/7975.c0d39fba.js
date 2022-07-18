"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7975],{471275:function(e,r,t){var n=t(72779),o=t.n(n),a=t(202784),i=t(429658),l=t(552322);const c=a.forwardRef((({bsPrefix:e,fluid:r,as:t="div",className:n,...a},c)=>{const s=(0,i.vE)(e,"container"),u="string"==typeof r?`-${r}`:"-fluid";return(0,l.jsx)(t,{ref:c,...a,className:o()(n,r?`${s}${u}`:s)})}));c.displayName="Container",c.defaultProps={fluid:!1},r.Z=c},458264:function(e,r,t){var n=t(72779),o=t.n(n),a=t(202784),i=t(429658),l=t(552322);const c=a.forwardRef((({bsPrefix:e,className:r,as:t="div",...n},a)=>{const c=(0,i.vE)(e,"row"),s=(0,i.pi)(),u=`${c}-cols`,p=[];return s.forEach((e=>{const r=n[e];let t;delete n[e],null!=r&&"object"==typeof r?({cols:t}=r):t=r;const o="xs"!==e?`-${e}`:"";null!=t&&p.push(`${u}${o}-${t}`)})),(0,l.jsx)(t,{ref:a,...n,className:o()(r,c,...p)})}));c.displayName="Row",r.Z=c},700865:function(e,r,t){t.d(r,{Z:function(){return V}});var n=t(213980),o=t.n(n),a=t(202784),i=t(585613),l=t(575380),c=t(322),s=t(50038),u=t(228300),p=t(761027),f=t(564167),d=t(844204),y=t(246522),b=t(460019),m=t.n(b),h=t(896866);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){O(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var x=function(e,r,t){var n="right"===t||"left"===t;return a.cloneElement(e.lineComponent,v(v({},e.events),{},{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-border-").concat(t),x1:n?r[t]:e.x-e.borderWidth,x2:n?r[t]:e.x+e.borderWidth,y1:n?e.y-e.borderWidth:r[t],y2:n?e.y+e.borderWidth:r[t],"data-type":"border-".concat(t)}))},j=function(e,r,t){var n="top"===t||"bottom"===t;return a.cloneElement(e.lineComponent,v(v({},e.events),{},{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-cross-").concat(t),x1:e.x,x2:n?e.x:r[t],y1:e.y,y2:n?r[t]:e.y,"data-type":"cross-".concat(t)}))},P=function(e){var r=e.errorX,t=e.errorY,n={right:{error:r,errorIndex:0},left:{error:r,errorIndex:1},top:{error:t,errorIndex:1},bottom:{error:t,errorIndex:0}};return["right","left","top","bottom"].reduce((function(e,r){var t,o,a;return e[r]=(o=(t=n[r]).error,a=t.errorIndex,o?o[a]:void 0),e}),{})},w=function(e){e=function(e){var r=i.xs(e.ariaLabel,e),t=i.xs(e.id,e),n=i.F3(m()({stroke:"black"},e.style),e),o=i.xs(e.tabIndex,e);return m()({},e,{ariaLabel:r,id:t,style:n,tabIndex:o})}(e);var r=l.I(e),t=e,n=t.tabIndex,o=t.ariaLabel,c=P(e),s=[c.right?x(e,c,"right"):null,c.left?x(e,c,"left"):null,c.bottom?x(e,c,"bottom"):null,c.top?x(e,c,"top"):null,c.right?j(e,c,"right"):null,c.left?j(e,c,"left"):null,c.bottom?j(e,c,"bottom"):null,c.top?j(e,c,"top"):null].filter(Boolean);return a.cloneElement(e.groupComponent,v({tabIndex:n,"aria-label":o},r),s)};w.propTypes=v(v({},s.l.primitiveProps),{},{borderWidth:o().number,datum:o().object,errorX:o().oneOfType([o().number,o().array,o().bool]),errorY:o().oneOfType([o().number,o().array,o().bool]),groupComponent:o().element,lineComponent:o().element,x:o().number,y:o().number}),w.defaultProps={groupComponent:a.createElement("g",null),lineComponent:a.createElement(h.x,null),role:"presentation",shapeRendering:"auto"};var C=w,E=t(301842),_=t.n(E),R=t(984573),I=t.n(R),D=t(639332),T=t(938151),Y=t(733419),k=t(215378),A=t(338094),W=function(e,r,t){var n=r[{x:"_errorX",y:"_errorY"}[t]];if(0===n)return!1;var o=e.scale[t];return Array.isArray(n)?[0!==n[0]&&o(n[0]+r["_".concat(t)]),0!==n[1]&&o(r["_".concat(t)]-n[1])]:[o(n+r["_".concat(t)]),o(r["_".concat(t)]-n)]},X=function(e){var r=["x","y","errorX","errorY"];if(e.data)return D.lv(e.data,e,r);var t=e.errorX||e.errorY?D.I6(e):[];return D.lv(t,e,r)},N=function(e,r){var t=T.bZ(e,r),n=T.lg(e,r),o=X(e);if(o.length<1)return void 0!==t&&void 0!==n?T.CU(t,n):void 0;var a="x"===r?"_errorX":"_errorY",i=function(e){var t="min"===e?1/0:-1/0,n="min"===e?1:0,i="min"===e?-1:1;return o.reduce((function(t,o){var l=Array.isArray(o[a])?o[a][n]:o[a],c=o["_".concat(r)]+i*(l||0);return t<c&&"min"===e||t>c&&"max"===e?t:c}),t)},l=void 0!==t?t:i("min"),c=void 0!==n?n:i("max");return T.CU(l,c)},S=function(e,r){return T.Ae(N)(e,r)},z=function(e,r){var t=i.TY(e,r,"errorbar");e=m()({},t,function(e){var r=i.Lo(e,"errorbar"),t=i.Wi(e.style,r)||{},n=X(e),o={x:i.rx(e,"x"),y:i.rx(e,"y")},a={x:S(e,"x"),y:S(e,"y")};return{domain:a,data:n,scale:{x:k.q8(e,"x").domain(a.x).range(e.horizontal?o.y:o.x),y:k.q8(e,"y").domain(a.y).range(e.horizontal?o.x:o.y)},style:t,origin:e.polar?e.origin||i.IW(e):void 0}}(t));var n=e,o=n.borderWidth,a=n.data,l=n.domain,c=n.events,s=n.groupComponent,u=n.height,p=n.horizontal,f=n.labels,d=n.name,y=n.origin,b=n.padding,h=n.polar,g=n.scale,v=n.sharedEvents,O=n.standalone,x=n.style,j=n.theme,P=n.width,w=n.disableInlineStyles,C={parent:{data:a,domain:l,height:u,horizontal:p,name:d,origin:y,padding:b,polar:h,scale:g,standalone:O,style:x.parent,theme:j,width:P}};return a.reduce((function(r,t,n){var u=_()(t.eventKey)?n:t.eventKey,d=i.q2(m()({},e,{scale:g}),t),y=d.x,b=d.y;t=function(e,r){var t=Y.ao(r.x),n=Y.MN(r.x),o=Y.ao(r.y),a=Y.MN(r.y),i=e._x,l=e._y;return(i<t||i>n||l<o||l>a)&&(i=l=null),Object.assign({},e,{_x:i,_y:l})}(t,l);var h=W(e,t,"x"),O=W(e,t,"y"),j={borderWidth:o,data:a,datum:t,errorX:p?O:h,errorY:p?h:O,groupComponent:s,horizontal:p,index:n,scale:g,style:w?{}:x.data,x:y,y:b,disableInlineStyles:w};r[u]={data:j};var P=A.Q(e,t,n);return(null!=P||f&&(c||v))&&(r[u].labels=function(e,r,t){var n=e.x,o=e.y,a=e.index,l=e.scale,c=e.errorY,s=e.errorX,u=e.horizontal,p=e.labelComponent,f=e.theme,d=e.disableInlineStyles,y=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",t="y"===r?c:s;return(t&&Array.isArray(t)?t[0]:t)||e[r]},b=t.labels||{},m=b.padding||0,h=u?"start":"middle",g=u?"middle":"end",v={style:b,y:u?o:y("y"),x:u?y("x"):n,dy:u?0:-m,dx:u?m:0,text:r,index:a,scale:l,datum:e.datum,data:e.data,textAnchor:b.textAnchor||h,verticalAnchor:b.verticalAnchor||g,angle:b.angle,horizontal:u,disableInlineStyles:d};if(!i.ij(p))return v;var O=f&&f.tooltip||{};return I()({},v,i.CE(O,["style"]))}(m()({},e,j),P,x)),r}),C)};function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach((function(r){$(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function $(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function q(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function K(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,r){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},Z(e,r)}function J(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=U(e);if(r){var o=U(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return M(this,t)}}function M(e,r){if(r&&("object"==typeof r||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var F={width:450,height:300,padding:50},Q=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&Z(e,r)}(a,e);var r,t,n,o=J(a);function a(){return q(this,a),o.apply(this,arguments)}return r=a,(t=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=a.animationWhitelist,r=a.role,t=i.TY(this.props,F,r);if(this.shouldAnimate())return this.animateComponent(t,e);var n=this.renderData(t),o=t.standalone?this.renderContainer(t.containerComponent,n):n;return l.h(o,t)}}])&&K(r.prototype,t),n&&K(r,n),Object.defineProperty(r,"prototype",{writable:!1}),a}(a.Component);Q.animationWhitelist=["data","domain","height","padding","samples","style","width","errorX","errorY","borderWidth"],Q.displayName="VictoryErrorBar",Q.role="errorbar",Q.defaultTransitions=c.cv(),Q.propTypes=L(L(L({},s.l.baseProps),s.l.dataProps),{},{borderWidth:o().number,errorX:o().oneOfType([o().func,u.BO([u._L,u.A7]),o().string,o().arrayOf(o().string)]),errorY:o().oneOfType([o().func,u.BO([u._L,u.A7]),o().string,o().arrayOf(o().string)]),horizontal:o().bool}),Q.defaultProps={containerComponent:a.createElement(p._,null),data:[{x:1,y:1,errorX:.1,errorY:.1},{x:2,y:2,errorX:.2,errorY:.2},{x:3,y:3,errorX:.3,errorY:.3},{x:4,y:4,errorX:.4,errorY:.4}],dataComponent:a.createElement(C,null),labelComponent:a.createElement(f.X,null),groupComponent:a.createElement("g",{role:"presentation"}),samples:50,sortOrder:"ascending",standalone:!0,theme:d.J.grayscale},Q.getDomain=S,Q.getData=X,Q.getBaseProps=function(e){return z(e,F)},Q.expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];var V=(0,y.o)(Q)},328731:function(e,r,t){t.d(r,{j:function(){return L}});var n=t(213980),o=t.n(n),a=t(202784),i=t(301842),l=t.n(i),c=t(460019),s=t.n(c),u=t(639332),p=t(585613),f=t(938151),d=t(215378),y=t(338094),b=function(e,r){var t=p.TY(e,r,"line");e=s()({},t,function(e){var r=u.Yu(e);r.length<2&&(r=[]);var t={x:p.rx(e,"x"),y:p.rx(e,"y")},n={x:f.ge(e,"x"),y:f.ge(e,"y")},o={x:d.q8(e,"x").domain(n.x).range(e.horizontal?t.y:t.x),y:d.q8(e,"y").domain(n.y).range(e.horizontal?t.x:t.y)},a=e.polar?e.origin||p.IW(e):void 0,i=p.Lo(e,"line");return{domain:n,data:r,scale:o,style:p.Wi(e.style,i),origin:a}}(t));var n=e,o=n.data,a=n.domain,i=n.events,c=n.groupComponent,b=n.height,m=n.horizontal,h=n.interpolation,g=n.origin,v=n.padding,O=n.polar,x=n.scale,j=n.sharedEvents,P=n.standalone,w=n.style,C=n.theme,E=n.width,_=n.labels,R=n.name,I=n.disableInlineStyles,D={parent:{style:w.parent,scale:x,data:o,height:b,width:E,name:R,domain:a,standalone:P,polar:O,origin:g,padding:v,horizontal:m},all:{data:{horizontal:m,polar:O,origin:g,scale:x,data:o,interpolation:h,groupComponent:c,style:I?{}:w.data,theme:C,disableInlineStyles:I}}};return o.reduce((function(r,t,n){var o=y.Q(e,t,n);(null!=o||_&&(i||j))&&(r[l()(t.eventKey)?n:t.eventKey]={labels:y.AM(e,n)});return r}),D)},m=t(575380),h=t(929639),g=t(50038),v=t(117497);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){j(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var P=function(e){e=function(e){var r=p.xs(e.ariaLabel,e),t=p.xs(e.id,e),n=p.F3(s()({fill:"none",stroke:"black"},e.style),e),o=p.xs(e.tabIndex,e);return s()({},e,{ariaLabel:r,id:t,style:n,tabIndex:o})}(e);var r=m.I(e),t=e,n=t.polar,o=t.origin,i=h.G(e),l=n&&o?"translate(".concat(o.x,", ").concat(o.y,")"):void 0;return a.cloneElement(e.pathComponent,x(x(x({},e.events),r),{},{"aria-label":e.ariaLabel,d:i(e.data),style:e.style,transform:e.transform||l,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath,tabIndex:e.tabIndex}))};P.propTypes=x(x({},g.l.primitiveProps),{},{interpolation:o().oneOfType([o().string,o().func]),openCurve:o().bool,origin:o().shape({x:o().number.isRequired,y:o().number.isRequired}),pathComponent:o().element,polar:o().bool}),P.defaultProps={pathComponent:a.createElement(v.y,null),role:"presentation",shapeRendering:"auto"};var w=t(322),C=t(228300),E=t(761027),_=t(564167),R=t(339849),I=t(844204),D=t(246522);function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){k(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function A(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,r){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},W(e,r)}function X(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=S(e);if(r){var o=S(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return N(this,t)}}function N(e,r){if(r&&("object"==typeof r||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var z={width:450,height:300,padding:50,interpolation:"linear"},B=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&W(e,r)}(a,e);var r,t,n,o=X(a);function a(e){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,a),o.call(this,e)}return r=a,(t=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=a.animationWhitelist,r=a.role,t=p.TY(this.props,z,r);if(this.shouldAnimate())return this.animateComponent(t,e);var n=this.renderContinuousData(t),o=t.standalone?this.renderContainer(t.containerComponent,n):n;return m.h(o,t)}}])&&A(r.prototype,t),n&&A(r,n),Object.defineProperty(r,"prototype",{writable:!1}),a}(a.Component);B.animationWhitelist=["data","domain","height","padding","samples","style","width"],B.displayName="VictoryLine",B.role="line",B.defaultTransitions=w.sA(),B.defaultPolarTransitions=w.Jm(),B.continuous=!0,B.propTypes=Y(Y(Y({},g.l.baseProps),g.l.dataProps),{},{interpolation:o().oneOfType([o().oneOf(["basis","bundle","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),o().func]),label:C.x9(o().string,"Use `labels` instead for individual data labels")}),B.defaultProps={containerComponent:a.createElement(E._,null),dataComponent:a.createElement(P,null),labelComponent:a.createElement(_.X,{renderInPortal:!0}),groupComponent:a.createElement(R.j,null),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:I.J.grayscale},B.getDomain=f.ge,B.getData=u.Yu,B.getBaseProps=function(e){return b(e,z)},B.expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];var L=(0,D.o)(B,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);