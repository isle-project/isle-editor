/*! For license information please see LearnProportionTest.55b52288.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{4140:function(e,t,a){"use strict";var n=a(429).isPrimitive,o=a(642);e.exports=function(e){return n(e)&&o(e)}},4141:function(e,t,a){"use strict";var n=a(429).isObject,o=a(642);e.exports=function(e){return n(e)&&o(e.valueOf())}},4914:function(e,t,a){"use strict";var n=a(422),o=a(4915),r=a(4140),i=a(4141);n(o,"isPrimitive",r),n(o,"isObject",i),e.exports=o},4915:function(e,t,a){"use strict";var n=a(4140),o=a(4141);e.exports=function(e){return n(e)||o(e)}},6393:function(e,t,a){"use strict";a.r(t);a(421),a(437),a(433),a(430),a(438),a(439);var n,o,r,i,l=a(407),c=a.n(l),s=a(414),p=a.n(s),u=a(416),d=a.n(u),f=a(424),y=a.n(f),m=a(418),b=a.n(m),h=a(419),v=a.n(h),g=a(417),P=a.n(g),w=a(412),O=a.n(w),x=(a(428),a(0)),_=(a(404),a(4095)),j=a(507),S=a(477),C=a(490),D=a(787),k=a(464),T=a(6445),z=a(6454),E=a(894),R=a(450),H=a.n(R),M=a(431),V=a.n(M),B=a(435),G=a.n(B),Z=a(474),A=a.n(Z),I=a(659),N=a.n(I),F=a(4914),W=a.n(F),L=a(455),q=a.n(L),K=a(909),J=a.n(K),U=a(683),X=a.n(U),Y=a(623),Q=a(487),$=a(506),ee=a(1056),te=a(492),ae=a(420);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){O()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=P()(e);if(t){var o=P()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return v()(this,a)}}Object(ae.a)("LearnHypothesisTesting");var ie={data:{fill:"tomato",stroke:"tomato",opacity:.3}},le=H()("isle:learn:hypothesis-testing-proportion");function ce(e){return{x:e,y:J()(e,0,1)}}var se=function(e){b()(a,e);var t=re(a);function a(e){var n;return p()(this,a),n=t.call(this,e),O()(y()(n),"onGenerate",(function(){le("Should generate new values...");var e,t,a,o,r,i,l=n.state,c=l.p0,s=l.phat,p=l.phat2,u=l.n,d=l.n2,f=l.samples,y=l.type;if(e=(e=N()(-3.5,3.5,300)).map((function(e){return{x:e,y:J()(e,0,1)}})),"Two-Sample"===f){var m=s*(1-s)/u,b=p*(1-p)/d;r=G()(m+b),i=A()((s-p-c)/r,-3)}else i=A()((s-c)/G()(c*(1-c)/u),-3);switch(y){case 2:t=W()(i)||q()(i)?N()(-3,3,200).map(ce):N()(-3,i,200).map(ce),o="P( Z < ".concat(i,") = ").concat(A()(X()(i,0,1),-3));break;case 1:t=W()(i)||q()(i)?N()(-3,3,200).map(ce):N()(i,3,200).map(ce),o="P( Z > ".concat(i,") = ").concat(A()(1-X()(i,0,1),-3));break;case 0:W()(i)||q()(i)?(t=N()(0,3,200).map(ce),a=N()(-3,0,200).map(ce)):(t=N()(V()(i),3,200).map(ce),a=N()(-3,-V()(i),200).map(ce)),o="P( |Z| > ".concat(V()(i),") = ").concat(A()(1-X()(V()(i),0,1)+X()(-V()(i),0,1),-3))}var h={n:u,n2:d,p0:c,phat:s,phat2:p,pStat:i,areaData:t,areaData2:a,pdfData:e,probFormula:o,stderr:r};n.setState(h)})),O()(y()(n),"onDirectionChange",(function(e){var t,a,o,r=n.state.pStat;switch(e){case 0:t=N()(V()(r),3,200).map((function(e){return{x:e,y:J()(e,0,1)}})),a=N()(-3,-V()(r),200).map((function(e){return{x:e,y:J()(e,0,1)}})),o="P( |Z| > ".concat(V()(r),") = ").concat(A()(1-X()(V()(r),0,1)+X()(-V()(r),0,1),-3));break;case 1:t=N()(r||0,3,200).map((function(e){return{x:e,y:J()(e,0,1)}})),o="P( Z > ".concat(r,") = ").concat(A()(1-X()(r,0,1),-3));break;case 2:t=N()(-3,r,200).map((function(e){return{x:e,y:J()(e,0,1)}})),o="P( Z < ".concat(r,") = ").concat(A()(X()(r,0,1),-3))}n.setState({type:e,probFormula:o,areaData:t,areaData2:a})})),n.state={n:5,n2:5,p0:.5,phat:0,phat2:.001,pStat:0,probFormula:"",pdfData:null,areaData:null,areaData2:null,type:0,samples:n.props.types[0]},n}return d()(a,[{key:"componentDidMount",value:function(){this.onGenerate()}},{key:"renderParametersPanel",value:function(){var e=this,t=this.state,a=t.p0,r=t.samples,i=this.props.t,l=c()("div",{},void 0,"Two-Sample"===r?n||(n=c()(D.a,{variant:"secondary"},void 0,"First Sample")):null,c()(Q.b,{legend:i("sample-proportion"),defaultValue:this.state.phat,step:.001,min:0,max:1,onChange:function(t){e.setState({phat:t},e.onGenerate)}}),c()(Q.b,{legend:i("sample-size"),defaultValue:this.state.n,step:1,min:1,onChange:function(t){e.setState({n:t},e.onGenerate)}})),s=c()("div",{},void 0,"Two-Sample"===r?o||(o=c()(D.a,{variant:"secondary"},void 0,"Second Sample")):null,c()(Q.b,{legend:i("sample-proportion"),defaultValue:this.state.phat2,step:.001,min:.001,max:.999,onChange:function(t){e.setState({phat2:t},e.onGenerate)}}),c()(Q.b,{legend:i("sample-size"),defaultValue:this.state.n2,step:1,min:1,onChange:function(t){e.setState({n2:t},e.onGenerate)}})),p="Two-Sample"===r?"p_1 - p_2":"p",u=this.props.nullHypothesisAsValue;return c()(k.a,{maxWidth:1600},void 0,c()(k.a.Header,{as:"h4"},void 0,i("parameters")),c()(k.a.Body,{},void 0,c()(k.a,{body:!0,className:"bg-light"},void 0,c()($.a,{options:this.props.types,defaultValue:r,onChange:function(t){e.setState({samples:t,p0:"Two-Sample"===t?0:.5},e.onGenerate)}}),c()(Q.b,{legend:"".concat("Two-Sample"===r?"Difference in proportions":"Hypothesized proportion"," (null hypothesis)"),defaultValue:a,step:.001,min:0,max:1,onChange:function(t){e.setState({p0:t},e.onGenerate)}})),i("lets-assume"),c()(k.a,{body:!0,className:"bg-light"},void 0,l,"Two-Sample"===r?s:null),c()("p",{},void 0,i("conduct-the-following-test")),c()(ee.a,{onChange:this.onDirectionChange,style:{width:"100%"}},void 0,c()(te.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(p," = ").concat(a," \\; vs. \\; H_1: ").concat(p," \\ne ").concat(a)}),c()(te.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(p," ").concat(u?"=":"\\le"," ").concat(a," \\; vs. \\; H_1: ").concat(p," > ").concat(a)}),c()(te.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(p," ").concat(u?"=":"\\ge"," ").concat(a," \\; vs. \\; H_1: ").concat(p," < ").concat(a)})),c()("p",{},void 0,i("calculate-test-statistic")),c()(te.a,"Two-Sample"===r?{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"z  = \\frac{(\\hat p_1 - \\hat p_2) - (p_1 - p_2)}{\\sqrt{\\tfrac{\\hat p_1 (1- \\hat p_1)}{n_1} + \\tfrac{\\hat p_2 (1 - \\hat p_2)}{n_2} }}",elems:{n:{tooltip:i("sample-size")},p:{tooltip:i("proportion")},z:{tooltip:i("test-statistic")}}}:{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"z = \\frac{\\hat p - p}{\\sqrt{p (1-p) / n}}",elems:{n:{tooltip:i("sample-size")},p:{tooltip:i("proportion")},z:{tooltip:i("test-statistic")}}})))}},{key:"renderResultPanel",value:function(){var e=this.state,t=e.p0,a=e.phat,n=e.phat2,o=e.pStat,r=e.samples,i=e.n,l=e.stderr,s=this.props.t;return c()(k.a,{},void 0,c()(k.a.Header,{as:"h4"},void 0,s("test-result")),c()(k.a.Body,{},void 0,c()("p",{},void 0,s("plugging-in")),c()(te.a,"Two-Sample"===r?{tag:"",displayMode:!0,raw:"z  = \\frac{".concat(A()(a-n,-3)," - ").concat(t,"}{\\sqrt{").concat(A()(l*l,-5),"}} = ").concat(o)}:{tag:"",displayMode:!0,raw:"z  = \\frac{".concat(a," - ").concat(t,"}{\\sqrt{\\frac{").concat(A()(t,-3)," \\cdot ").concat(A()(1-t,-3),"}{").concat(i,"} }} = ").concat(o)}),c()("p",{},void 0,s("calculate-p-value")),c()(te.a,{raw:this.state.probFormula}),c()(T.a,{domain:{x:[-3,3]}},void 0,c()(z.a,{data:this.state.pdfData}),c()(E.a,{data:this.state.areaData,style:ie}),this.state.areaData2?c()(E.a,{data:this.state.areaData2,style:ie}):null)))}},{key:"render",value:function(){return c()(j.a,{style:oe({paddingTop:20,paddingBottom:20},this.props.style)},void 0,c()(S.a,{},void 0,c()(C.a,{md:6},void 0,this.renderParametersPanel()),c()(C.a,{md:6},void 0,this.renderResultPanel(),r||(r=c()("br",{})),this.props.feedback?i||(i=c()(Y.a,{id:"hypothesisTestingProportion"})):null)))}}]),a}(x.Component);se.defaultProps={types:["One-Sample","Two-Sample"],feedback:!1,nullHypothesisAsValue:!1,style:{}},t.default=Object(_.a)("LearnHypothesisTesting")(se)},894:function(e,t,a){"use strict";var n=a(404),o=a.n(n),r=a(0),i=a.n(r),l=a(580),c=a.n(l),s=a(456),p=a.n(s),u=a(2809),d=a(1463),f=a(806),y=a(570),m=a(4124),b=a(2046),h=function(e){var t=e.polar,a=y.a.getDefaultStyles(e,"area"),n=y.a.getStyles(e.style,a),o={x:y.a.getRange(e,"x"),y:y.a.getRange(e,"y")},r={x:m.a.getDomainWithZero(e,"x"),y:m.a.getDomainWithZero(e,"y")},i={x:d.a.getBaseScale(e,"x").domain(r.x).range(e.horizontal?o.y:o.x),y:d.a.getBaseScale(e,"y").domain(r.y).range(e.horizontal?o.x:o.y)},l=t?e.origin||y.a.getPolarOrigin(e):void 0;return{style:n,data:function(e,t){var a=u.a.getData(e);a.length<2&&(a=[]);var n=function(e){var a="log"===d.a.getType(t[e])?1/Number.MAX_SAFE_INTEGER:0,n=t[e].domain(),o=f.a.getMinValue(n),r=f.a.getMaxValue(n),i=a;return o<0&&r<=0?i=r:o>=0&&r>0&&(i=o),f.a.containsDates(n)?new Date(i):i};return a.map((function(e){var t=void 0!==e._y1?e._y1:e._y,a=void 0!==e._y0?e._y0:n("y"),o=void 0!==e._x1?e._x1:e._x,r=void 0!==e._x0?e._x0:n("x");return p()({},e,{_y0:a,_y1:t,_x0:r,_x1:o})}))}(e,i),scale:i,domain:r,origin:l}},v=a(2736),g=a(612),P=a(2735),w=a(3702),O=a(3703),x=a(1246),_=a(1481);function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){S(e,t,a[t])}))}return e}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},D=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},k=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},T=function(e){return function(t){return e.y(t._y0)}},z=function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}},E=function(e){var t;return"curve".concat((t=e)&&t[0].toUpperCase()+t.slice(1))},R=function(e){var t=e.polar,a=e.scale,n="function"==typeof e.interpolation&&e.interpolation,o="string"==typeof e.interpolation&&E(e.interpolation),r=n||o;return t?O.a().defined(C).curve(n||g["".concat(o,"Closed")]).angle(z(a)).outerRadius(k(a)).innerRadius(T(a)):function(e,t){var a=e.horizontal,n=e.scale,o="function"==typeof t&&t,r="string"==typeof t&&t;return a?w.a().defined(C).curve(o||g[r]).x0(T(n)).x1(k(n)).y(D(n)):w.a().defined(C).curve(o||g[r]).x(D(n)).y1(k(n)).y0(T(n))}(e,r)},H=function(e){var t=e=function(e){var t=y.a.evaluateProp(e.ariaLabel,e),a=y.a.evaluateProp(e.desc,e),n=y.a.evaluateProp(e.id,e),o=y.a.evaluateStyle(p()({fill:"black"},e.style),e),r=y.a.evaluateProp(e.tabIndex,e);return p()({},e,{ariaLabel:t,desc:a,id:n,style:o,tabIndex:r})}(e),a=t.ariaLabel,n=t.role,o=t.shapeRendering,r=t.className,l=t.polar,c=t.origin,s=t.data,u=t.pathComponent,d=t.events,f=t.groupComponent,m=t.clipPath,b=t.id,h=t.style,w=t.desc,O=t.tabIndex,x=l&&c?"translate(".concat(c.x,", ").concat(c.y,")"):void 0,_=e.transform||x,S=h.stroke&&"none"!==h.stroke&&"transparent"!==h.stroke,T=R(e),H=S&&function(e){var t=e.polar,a=e.scale,n=e.horizontal,o="function"==typeof e.interpolation&&e.interpolation,r="string"==typeof e.interpolation&&E(e.interpolation);return t?v.a().defined(C).curve(o||g["".concat(r,"Closed")]).angle(z(a)).radius(k(a)):P.a().defined(C).curve(o||g[r]).x(n?k(a):D(a)).y(n?D(a):k(a))}(e),M=h.stroke?"none":h.fill,V=j({"aria-label":a,className:r,role:n,shapeRendering:o,transform:_},d,{clipPath:m,tabIndex:O}),B=i.a.cloneElement(u,p()({key:"".concat(b,"-area"),style:p()({},h,{stroke:M}),d:T(s),desc:w,tabIndex:O},V)),G=S?i.a.cloneElement(u,p()({key:"".concat(b,"-area-stroke"),style:p()({},h,{fill:"none"}),d:H(s)},V)):null;return S?i.a.cloneElement(f,{},[B,G]):B};H.propTypes=j({},x.a.primitiveProps,{groupComponent:o.a.element,interpolation:o.a.oneOfType([o.a.string,o.a.func]),pathComponent:o.a.element}),H.defaultProps={groupComponent:i.a.createElement("g",null),pathComponent:i.a.createElement(_.a,null),role:"presentation",shapeRendering:"auto"};var M=H,V=a(766),B=a(4606),G=a(4609),Z=a(4602),A=a(4603),I=a(4125),N=a(4600);function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var K={width:450,height:300,padding:50,interpolation:"linear"},J=function(e){function t(){return W(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a=t,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,a=t.role,n=y.a.modifyProps(this.props,K,a);if(this.shouldAnimate())return this.animateComponent(n,e);var o=this.renderContinuousData(n);return n.standalone?this.renderContainer(n.containerComponent,o):o}}])&&L(a.prototype,n),o&&L(a,o),t}(i.a.Component);Object.defineProperty(J,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(J,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){F(e,t,a[t])}))}return e}({},x.a.baseProps,x.a.dataProps,{interpolation:o.a.oneOfType([o.a.oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),o.a.func]),label:V.a.deprecated(o.a.string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(J,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(B.a,null),dataComponent:i.a.createElement(M,null),groupComponent:i.a.createElement(G.a,null),labelComponent:i.a.createElement(Z.a,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:A.a.grayscale}}),Object.defineProperty(J,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryArea"}),Object.defineProperty(J,"role",{configurable:!0,enumerable:!0,writable:!0,value:"area"}),Object.defineProperty(J,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(J,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:I.a.continuousTransitions()}),Object.defineProperty(J,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:I.a.continuousPolarTransitions()}),Object.defineProperty(J,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:m.a.getDomainWithZero}),Object.defineProperty(J,"getData",{configurable:!0,enumerable:!0,writable:!0,value:u.a.getData}),Object.defineProperty(J,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,t){var a=y.a.modifyProps(e,t,"area"),n=e=p()({},a,h(a)),o=n.data,r=n.domain,i=n.events,l=n.groupComponent,s=n.height,u=n.horizontal,d=n.interpolation,f=n.origin,m=n.padding,v=n.polar,g=n.scale,P=n.sharedEvents,w=n.standalone,O=n.style,x=n.theme,_=n.width,j=n.labels,S=n.name,C={parent:{style:O.parent,width:_,height:s,scale:g,data:o,domain:r,standalone:w,theme:x,polar:v,origin:f,padding:m,name:S,horizontal:u},all:{data:{horizontal:u,polar:v,origin:f,scale:g,data:o,interpolation:d,groupComponent:l,style:O.data}}};return o.reduce((function(t,a,n){return(null!=b.a.getText(e,a,n)||j&&(i||P))&&(t[c()(a.eventKey)?n:a.eventKey]={labels:b.a.getProps(e,n)}),t}),C)}(e,K)}}),Object.defineProperty(J,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(N.a)(J,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);