(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{2642:function(e,r,t){"use strict";var a=t(553);t.d(r,"a",(function(){return a.a}));var n=t(487);t.d(r,"b",(function(){return n.b}));var o=t(506);t.d(r,"c",(function(){return o.a}));t(581),t(772),t(745),t(851)},423:function(e,r,t){"use strict";var a=t(406),n=t(408),o=t(409),i=t.n(o),l=t(0),s=t.n(l),c=t(411),u=t(463),p=s.a.forwardRef((function(e,r){var t=e.bsPrefix,o=e.variant,l=e.size,p=e.active,d=e.className,f=e.block,m=e.type,b=e.as,v=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.a)(t,"btn"),h=i()(d,y,p&&"active",o&&y+"-"+o,f&&y+"-block",l&&y+"-"+l);if(v.href)return s.a.createElement(u.a,Object(a.a)({},v,{as:b,ref:r,className:i()(h,v.disabled&&"disabled")}));r&&(v.ref=r),m?v.type=m:b||(v.type="button");var g=b||"button";return s.a.createElement(g,Object(a.a)({},v,{className:h}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},r.a=p},4604:function(e,r,t){"use strict";var a=t(404),n=t.n(a),o=t(0),i=t.n(o),l=t(570),s=t(4125),c=t(1246),u=t(766),p=t(4606),d=t(4602),f=t(4603),m=t(4600),b=t(456),v=t.n(b),y=t(4831);function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){g(e,r,t[r])}))}return e}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var x=function(e,r,t){var a="right"===t||"left"===t;return i.a.cloneElement(e.lineComponent,h({},e.events,{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-border-").concat(t),x1:a?r[t]:e.x-e.borderWidth,x2:a?r[t]:e.x+e.borderWidth,y1:a?e.y-e.borderWidth:r[t],y2:a?e.y+e.borderWidth:r[t]}))},w=function(e,r,t){var a="top"===t||"bottom"===t;return i.a.cloneElement(e.lineComponent,h({},e.events,{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-cross-").concat(t),x1:e.x,x2:a?e.x:r[t],y1:e.y,y2:a?r[t]:e.y}))},O=function(e){var r=e.errorX,t=e.errorY,a={right:{error:r,errorIndex:0},left:{error:r,errorIndex:1},top:{error:t,errorIndex:1},bottom:{error:t,errorIndex:0}};return["right","left","top","bottom"].reduce((function(e,r){var t,n,o;return e[r]=(n=(t=a[r]).error,o=t.errorIndex,n?n[o]:void 0),e}),{})},P=function(e){var r=e=function(e){var r=l.a.evaluateProp(e.ariaLabel,e),t=l.a.evaluateProp(e.id,e),a=l.a.evaluateStyle(v()({stroke:"black"},e.style),e),n=l.a.evaluateProp(e.tabIndex,e);return v()({},e,{ariaLabel:r,id:t,style:a,tabIndex:n})}(e),t=r.ariaLabel,a=r.tabIndex,n=O(e),o=[n.right?x(e,n,"right"):null,n.left?x(e,n,"left"):null,n.bottom?x(e,n,"bottom"):null,n.top?x(e,n,"top"):null,n.right?w(e,n,"right"):null,n.left?w(e,n,"left"):null,n.bottom?w(e,n,"bottom"):null,n.top?w(e,n,"top"):null].filter(Boolean);return i.a.cloneElement(e.groupComponent,{"aria-label":t,tabIndex:a},o)};P.propTypes=h({},c.a.primitiveProps,{borderWidth:n.a.number,datum:n.a.object,errorX:n.a.oneOfType([n.a.number,n.a.array,n.a.bool]),errorY:n.a.oneOfType([n.a.number,n.a.array,n.a.bool]),groupComponent:n.a.element,lineComponent:n.a.element,x:n.a.number,y:n.a.number}),P.defaultProps={groupComponent:i.a.createElement("g",null),lineComponent:i.a.createElement(y.a,null),role:"presentation",shapeRendering:"auto"};var j=P,C=t(580),S=t.n(C),z=t(517),k=t.n(z),B=t(2809),T=t(4124),E=t(1463),_=t(2046),N=function(e,r,t){var a=r[{x:"_errorX",y:"_errorY"}[t]];if(0===a)return!1;var n=e.scale[t];return Array.isArray(a)?[0!==a[0]&&n(a[0]+r["_".concat(t)]),0!==a[1]&&n(r["_".concat(t)]-a[1])]:[n(a+r["_".concat(t)]),n(r["_".concat(t)]-a)]},M=function(e){var r=["x","y","errorX","errorY"];if(e.data)return B.a.formatData(e.data,e,r);var t=e.errorX||e.errorY?B.a.generateData(e):[];return B.a.formatData(t,e,r)},R=function(e,r){var t=T.a.getMinFromProps(e,r),a=T.a.getMaxFromProps(e,r),n=M(e);if(n.length<1)return void 0!==t&&void 0!==a?T.a.getDomainFromMinMax(t,a):void 0;var o="x"===r?"_errorX":"_errorY",i=function(e){var t="min"===e?1/0:-1/0,a="min"===e?1:0,i="min"===e?-1:1;return n.reduce((function(t,n){var l=Array.isArray(n[o])?n[o][a]:n[o],s=n["_".concat(r)]+i*(l||0);return t<s&&"min"===e||t>s&&"max"===e?t:s}),t)},l=void 0!==t?t:i("min"),s=void 0!==a?a:i("max");return T.a.getDomainFromMinMax(l,s)},X=function(e,r){return T.a.createDomainFunction(R)(e,r)},Y=function(e,r){var t=l.a.modifyProps(e,r,"errorbar"),a=e=v()({},t,function(e){var r=l.a.getDefaultStyles(e,"errorbar"),t=l.a.getStyles(e.style,r)||{},a=M(e),n={x:l.a.getRange(e,"x"),y:l.a.getRange(e,"y")},o={x:X(e,"x"),y:X(e,"y")};return{domain:o,data:a,scale:{x:E.a.getBaseScale(e,"x").domain(o.x).range(e.horizontal?n.y:n.x),y:E.a.getBaseScale(e,"y").domain(o.y).range(e.horizontal?n.x:n.y)},style:t,origin:e.polar?e.origin||l.a.getPolarOrigin(e):void 0}}(t)),n=a.borderWidth,o=a.data,i=a.domain,s=a.events,c=a.groupComponent,u=a.height,p=a.horizontal,d=a.labels,f=a.name,m=a.origin,b=a.padding,y=a.polar,h=a.scale,g=a.sharedEvents,x=a.standalone,w=a.style,O=a.theme,P=a.width,j={parent:{data:o,domain:i,height:u,horizontal:p,name:f,origin:m,padding:b,polar:y,scale:h,standalone:x,style:w.parent,theme:O,width:P}};return o.reduce((function(r,t,a){var i=S()(t.eventKey)?a:t.eventKey,u=l.a.scalePoint(v()({},e,{scale:h}),t),f=u.x,m=u.y,b=N(e,t,"x"),y=N(e,t,"y"),x={borderWidth:n,data:o,datum:t,errorX:p?y:b,errorY:p?b:y,groupComponent:c,horizontal:p,index:a,scale:h,style:w.data,x:f,y:m};r[i]={data:x};var O=_.a.getText(e,t,a);return(null!=O||d&&(s||g))&&(r[i].labels=function(e,r,t){var a=e.x,n=e.y,o=e.index,i=e.scale,s=e.errorY,c=e.errorX,u=e.horizontal,p=e.labelComponent,d=e.theme,f=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",t="y"===r?s:c;return(t&&Array.isArray(t)?t[0]:t)||e[r]},m=t.labels||{},b=m.padding||0,v=u?"start":"middle",y=u?"middle":"end",h={style:m,y:u?n:f("y"),x:u?f("x"):a,dy:u?0:-b,dx:u?b:0,text:r,index:o,scale:i,datum:e.datum,data:e.data,textAnchor:m.textAnchor||v,verticalAnchor:m.verticalAnchor||y,angle:m.angle,horizontal:u};if(!l.a.isTooltip(p))return h;var g=d&&d.tooltip||{};return k()({},h,l.a.omit(g,["style"]))}(v()({},e,x),O,w)),r}),j)};function A(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function L(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function D(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function W(e,r){return!r||"object"!=typeof r&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}var I={width:450,height:300,padding:50},H=function(e){function r(){return L(this,r),W(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}var t,a,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),t=r,(a=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=r.animationWhitelist,t=r.role,a=l.a.modifyProps(this.props,I,t);if(this.shouldAnimate())return this.animateComponent(a,e);var n=this.renderData(a);return a.standalone?this.renderContainer(a.containerComponent,n):n}}])&&D(t.prototype,a),n&&D(t,n),r}(i.a.Component);Object.defineProperty(H,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","samples","style","width","errorX","errorY","borderWidth"]}),Object.defineProperty(H,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryErrorBar"}),Object.defineProperty(H,"role",{configurable:!0,enumerable:!0,writable:!0,value:"errorbar"}),Object.defineProperty(H,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:s.a.discreteTransitions()}),Object.defineProperty(H,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){A(e,r,t[r])}))}return e}({},c.a.baseProps,c.a.dataProps,{borderWidth:n.a.number,errorX:n.a.oneOfType([n.a.func,u.a.allOfType([u.a.integer,u.a.nonNegative]),n.a.string,n.a.arrayOf(n.a.string)]),errorY:n.a.oneOfType([n.a.func,u.a.allOfType([u.a.integer,u.a.nonNegative]),n.a.string,n.a.arrayOf(n.a.string)]),horizontal:n.a.bool})}),Object.defineProperty(H,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(p.a,null),data:[{x:1,y:1,errorX:.1,errorY:.1},{x:2,y:2,errorX:.2,errorY:.2},{x:3,y:3,errorX:.3,errorY:.3},{x:4,y:4,errorX:.4,errorY:.4}],dataComponent:i.a.createElement(j,null),labelComponent:i.a.createElement(d.a,null),groupComponent:i.a.createElement("g",{role:"presentation"}),samples:50,sortOrder:"ascending",standalone:!0,theme:f.a.grayscale}}),Object.defineProperty(H,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:X}),Object.defineProperty(H,"getData",{configurable:!0,enumerable:!0,writable:!0,value:M}),Object.defineProperty(H,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return Y(e,I)}}),Object.defineProperty(H,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});r.a=Object(m.a)(H)},556:function(e,r,t){"use strict";var a=t(406),n=t(408),o=t(409),i=t.n(o),l=t(0),s=t.n(l),c=t(411),u=s.a.forwardRef((function(e,r){var t=e.bsPrefix,o=e.size,l=e.toggle,u=e.vertical,p=e.className,d=e.as,f=void 0===d?"div":d,m=Object(n.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(c.a)(t,"btn-group"),v=b;return u&&(v=b+"-vertical"),s.a.createElement(f,Object(a.a)({},m,{ref:r,className:i()(p,v,o&&b+"-"+o,l&&b+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},r.a=u},6390:function(e,r,t){"use strict";t.r(r);t(421);var a,n,o,i=t(407),l=t.n(i),s=t(778),c=t.n(s),u=t(414),p=t.n(u),d=t(416),f=t.n(d),m=t(424),b=t.n(m),v=t(418),y=t.n(v),h=t(419),g=t.n(h),x=t(417),w=t.n(x),O=t(412),P=t.n(O),j=(t(465),t(468),t(485),t(501),t(430),t(603),t(526),t(428),t(0)),C=(t(404),t(4095)),S=t(454),z=t(423),k=t(556),B=t(507),T=t(490),E=t(477),_=t(431),N=t.n(_),M=t(435),R=t.n(M),X=t(758),Y=t.n(X),A=t(6445),L=t(4603),D=t(6464),W=t(4604),I=t(6454),H=t(986),F=t.n(H),V=t(731),J=t.n(V),K=t(474),Q=t.n(K),G=t(425),q=t.n(G),U=t(592),Z=t.n(U),$=t(2642),ee=t(518),re=t(492),te=t(585),ae=t(646),ne=t(420);t(63),t(64);function oe(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=w()(e);if(r){var n=w()(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return g()(this,t)}}Object(ne.a)("LearnConfidenceCoverage");var ie=function(e){y()(t,e);var r=oe(t);function t(e){var a;return p()(this,t),a=r.call(this,e),P()(b()(a),"drawSamples",(function(e){"numeric"===a.state.type?a.drawQuantitative(e):"binary"===a.state.type&&a.drawBinary(e)})),P()(b()(a),"drawQuantitative",(function(e){for(var r=a.state,t=r.nTrapped,n=r.nLower,o=r.nHigher,i=1-a.state.level,l=a.state.errorBars.slice(),s=a.state.trueMean,c=a.state.sampleSize,u=0;u<e;u++){var p=Y()(a.state.values,{size:c}),d=Object(te.a)(p),f=Object(ae.a)(p)/R()(c),m=F()(1-i/2,c-1),b=N()(f*m),v={num:l.length+1,yval:d,err:b};v.yval-v.err>s?o+=1:v.yval+v.err<s?n+=1:t+=1,l.push(v)}a.setState({nTrapped:t,nLower:n,nHigher:o,errorBars:l})})),P()(b()(a),"drawBinary",(function(e){for(var r=a.state,t=r.nTrapped,n=r.nLower,o=r.nHigher,i=1-a.state.level,l=a.state.errorBars.slice(),s=a.state.trueMean,c=0;c<e;c++){var u=Y()(a.state.values,{size:a.state.sampleSize}),p=Object(te.a)(u),d=R()(p*(1-p)/a.state.sampleSize),f={num:l.length+1,yval:p,err:N()(d*J()(1-i/2,0,1))};f.yval-f.err>s?o+=1:f.yval+f.err<s?n+=1:t+=1,l.push(f)}a.setState({nTrapped:t,nLower:n,nHigher:o,errorBars:l})})),P()(b()(a),"onSelectVariable",(function(e){var r=a.props.data[e];r=r.filter((function(e){return null!==e&&""!==e}));var t,n,o="none";if(Z()(r)&&(o="numeric",t=Object(te.a)(r)),function(e){for(var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t={},a=0,n=0;n<e.length;n++){if(q()(t,e[n])||(t[e[n]]=!0,a+=1),a>2)return!1;if(r&&n>50)break}return 2===a}(r)){o="binary",n=c()(new Set(r)).sort();for(var i=0,l=0;l<r.length;l++)r[l]===n[1]&&(i+=1);t=i/r.length}var s=a.state.sampleSize;s>r.length&&(s=r.length),a.setState({variable:e,values:r,sampleSize:s,type:o,trueMean:t})})),a.state={variable:null,type:"none",errorBars:[],nTrapped:0,nLower:0,nHigher:0,sampleSize:25,level:.95},a}return f()(t,[{key:"clear",value:function(){this.setState({errorBars:[],nTrapped:0,nLower:0,nHigher:0})}},{key:"renderChart",value:function(){var e=this.state.errorBars;if(!e||0===e.length)return null;var r=this.state.trueMean;return l()(A.a,{padding:{top:20,bottom:30,left:40,right:20},height:2.5*this.state.errorBars.length+50,theme:L.a.material},void 0,l()(D.a,{padding:20,standalone:!1,style:{tickLabels:{fontSize:"9px"}}}),a||(a=l()(D.a,{dependentAxis:!0,padding:20,standalone:!1})),l()(W.a,{animate:{duration:100},style:{data:{stroke:function(e){return e.datum.yval-e.datum.err>r||e.datum.yval+e.datum.err<r?"darkred":"steelblue"}}},data:this.state.errorBars,x:"yval",y:"num",errorX:function(e){return e.err}}),l()(I.a,{data:[{x:r,y:0},{x:r,y:this.state.errorBars.length}]}))}},{key:"render",value:function(){var e=this,r=this.props.t,t=this.state.errorBars.length,a="numeric"===this.state.type?"mean":"proportion";return l()(B.a,{style:{maxWidth:1200}},void 0,l()($.c,{legend:r("select-variable"),options:this.props.variables,onChange:this.onSelectVariable}),"numeric"===this.state.type||"binary"===this.state.type?l()(E.a,{},void 0,l()(T.a,{md:6},void 0,l()(ee.a,{header:l()("span",{},void 0,r("confidence-intervals-for")," ",this.state.variable),style:{height:"85vh"}},void 0,this.renderChart())),l()(T.a,{md:6},void 0,"numeric"===this.state.type||"binary"===this.state.type?l()(ee.a,{header:r("parameters")},void 0,l()($.b,{legend:r("sample-size"),step:1,min:1,value:this.state.sampleSize,max:this.state.values.length,onChange:function(r){return e.setState({sampleSize:r})}}),l()($.b,{legend:r("confidence-level"),step:.01,min:0,max:1,value:this.state.level,onChange:function(r){return e.setState({level:r})}}),l()(k.a,{},void 0,Z()(this.props.samples)?this.props.samples.map((function(t,a){return l()(z.a,{onClick:function(){e.drawSamples(t)}},a,r("draw-samples",{n:t}))})):l()(z.a,{onClick:function(){e.drawSamples(e.props.samples)}},void 0,r("draw-samples",{n:this.props.samples})),l()(z.a,{onClick:this.clear.bind(this)},void 0,r("clear")))):null,l()(ee.a,{header:r("statistics")},void 0,r("number-of-confidence-intervals-of",{center:a}),"\xa0",l()(re.a,{raw:Q()(this.state.trueMean,-3)}),": ",n||(n=l()("br",{})),l()(re.a,{raw:"\\text{".concat(r("covering-population")," ").concat(r(a),": }").concat(this.state.nTrapped," \\text{ out of } ").concat(t),displayMode:!0}),this.state.errorBars.length>0?l()(j.Fragment,{},void 0,l()(re.a,{raw:"\\text{".concat(r("coverage"),": }").concat(Q()(this.state.nTrapped/t,-3),"\\%"),displayMode:!0}),r("number-of-confidence-intervals",{center:a})," ",o||(o=l()("br",{})),l()(re.a,{raw:"\\text{".concat(r("interval-above-population")," ").concat(a,": }").concat(this.state.nHigher),displayMode:!0}),l()(re.a,{raw:"\\text{".concat(r("interval-below-population")," ").concat(a,": }").concat(this.state.nLower),displayMode:!0})):null))):l()(S.a,{variant:"info",style:{fontSize:24}},void 0,r("please-sample")))}}]),t}(j.Component);ie.defaultProps={samples:25},r.default=Object(C.a)("LearnConfidenceCoverage")(ie)}}]);