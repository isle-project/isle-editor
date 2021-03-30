/*! For license information please see LearnMeanTest.ef9705a1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{3750:function(e,t,a){"use strict";var n=a(422),o=a(3751);n(o,"factory",a(3752)),e.exports=o},3751:function(e,t,a){"use strict";var n=a(415),o=a(910),r=a(435),i=a(446);e.exports=function(e,t){var a;return n(e)||n(t)||t<=0?NaN:(a=r(t)*o(t/2,.5),i(t/(t+i(e,2)),(1+t)/2)/a)}},3752:function(e,t,a){"use strict";var n=a(470),o=a(415),r=a(910),i=a(435),l=a(446);e.exports=function(e){var t,a;return o(e)||e<=0?n(NaN):(a=i(e)*r(e/2,.5),t=(1+e)/2,function(n){if(o(n))return NaN;return l(e/(e+l(n,2)),t)/a})}},6392:function(e,t,a){"use strict";a.r(t);a(421),a(437),a(433),a(430),a(438),a(439);var n,o,r,i,l,s=a(407),c=a.n(s),u=a(414),p=a.n(u),d=a(416),f=a.n(d),m=a(424),y=a.n(m),b=a(418),g=a.n(b),v=a(419),h=a.n(v),x=a(417),w=a.n(x),P=a(412),O=a.n(P),_=(a(428),a(0)),S=(a(404),a(4095)),T=a(507),j=a(477),C=a(490),D=a(787),k=a(464),z=a(6445),E=a(6454),R=a(894),Z=a(450),M=a.n(Z),V=a(431),H=a.n(V),N=a(435),G=a.n(N),B=a(474),A=a.n(B),I=a(659),F=a.n(I),W=a(909),L=a.n(W),q=a(683),K=a.n(q),J=a(3750),U=a.n(J),X=a(810),Y=a.n(X),Q=a(623),$=a(487),ee=a(506),te=a(1056),ae=a(492),ne=a(420);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(a),!0).forEach((function(t){O()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ie(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=w()(e);if(t){var o=w()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return h()(this,a)}}Object(ne.a)("LearnHypothesisTesting");var le={data:{fill:"tomato",stroke:"tomato",opacity:.3}},se=M()("isle:learn:hypothesis-testing-mean"),ce={n:{tooltip:"Sample Size"},s:{tooltip:"Standard Deviation"},"\u03bc":{tooltip:"True mean"},x:{tooltip:"Sample Mean"},z:{tooltip:"Test Statistic"},t:{tooltip:"Test Statistic"}},ue=function(e){g()(a,e);var t=ie(a);function a(e){var n;return p()(this,a),n=t.call(this,e),O()(y()(n),"onGenerate",(function(){se("Should generate new values...");var e,t,a=n.state,o=a.mu0,r=a.xbar,i=a.xbar2,l=a.sigma,s=a.sigma2,c=a.n,u=a.n2,p=a.samples,d=a.selectedTest;"Z-Test"===d?(t=K.a.factory(0,1),e=L.a.factory(0,1)):"Two-Sample"===p?(t=Y.a.factory(c+u-2),e=U.a.factory(c+u-2)):(t=Y.a.factory(c-1),e=U.a.factory(c-1));var f,m,y,b,g=F()(-3.5,3.5,300);g=g.map((function(t){return{x:t,y:e(t)}})),f="Two-Sample"===p?A()((r-i-o)/G()(l*l/c+s*s/u),-3):A()((r-o)/(l/G()(c)),-3);var v="Z-Test"===d?"Z":"T";switch(n.state.type){case 2:m=F()(-3,f,200).map((function(t){return{x:t,y:e(t)}})),b="P( ".concat(v," < ").concat(f,") = ").concat(A()(t(f),-3));break;case 1:m=F()(f,3,200).map((function(t){return{x:t,y:e(t)}})),b="P( ".concat(v," > ").concat(f,") = ").concat(A()(1-t(f),-3));break;case 0:m=F()(H()(f),3,200).map((function(t){return{x:t,y:e(t)}})),y=F()(-3,-H()(f),200).map((function(t){return{x:t,y:e(t)}})),b="P( |".concat(v,"| > ").concat(H()(f),") = ").concat(A()(1-t(H()(f))+t(-H()(f)),-3))}n.setState({n:c,mu0:o,sigma:l,sigma2:s,pdfData:g,xbar:r,xbar2:i,zStat:f,areaData:m,areaData2:y,probFormula:b})})),O()(y()(n),"onDirectionChange",(function(e){var t,a,o,r,i,l=n.state,s=l.zStat,c=l.selectedTest,u=l.samples,p=l.n,d=l.n2;switch("Z-Test"===c?(i=K.a.factory(0,1),r=L.a.factory(0,1)):"Two-Sample"===u?(i=Y.a.factory(p+d-2),r=U.a.factory(p+d-2)):(i=Y.a.factory(p-1),r=U.a.factory(p-1)),e){case 0:t=F()(H()(s),3,200).map((function(e){return{x:e,y:r(e)}})),a=F()(-3,-H()(s),200).map((function(e){return{x:e,y:r(e)}})),o="P( |Z| > ".concat(H()(s),") = ").concat(A()(1-i(H()(s))+i(-H()(s)),-3));break;case 1:t=F()(s,3,200).map((function(e){return{x:e,y:r(e)}})),o="P( Z > ".concat(s,") = ").concat(A()(1-i(s),-3));break;case 2:t=F()(-3,s,200).map((function(e){return{x:e,y:r(e)}})),o="P( Z < ".concat(s,") = ").concat(A()(i(s),-3))}n.setState({type:e,probFormula:o,areaData:t,areaData2:a})})),n.state={n:5,n2:5,mu0:0,sigma:1,sigma2:1,pdfData:null,xbar:0,xbar2:0,zStat:0,areaData:null,areaData2:null,probFormula:"",type:0,samples:e.types[0],selectedTest:e.tests[0]},n}return f()(a,[{key:"componentDidMount",value:function(){this.onGenerate()}},{key:"renderParametersPanel",value:function(){var e=this,t=this.props.t,a=this.state,i=a.mu0,l=a.xbar,s=a.xbar2,u=a.sigma,p=a.sigma2,d=a.n,f=a.n2,m=a.samples,y=a.selectedTest,b="Z-Test"===y?"z":"t",g=c()("div",{},void 0,"Two-Sample"===m?n||(n=c()(D.a,{variant:"secondary"},void 0,"First Sample")):null,c()($.b,{legend:t("sample-mean"),defaultValue:l,step:"any",onChange:function(t){e.setState({xbar:t},e.onGenerate)}}),c()($.b,{legend:"Z-Test"===y?o||(o=c()("span",{},void 0,"Sigma ",c()(ae.a,{raw:"\\left( \\sigma \\right)"}))):t("sample-standard-deviation"),defaultValue:u,min:.1,step:"any",onChange:function(t){e.setState({sigma:t},e.onGenerate)}}),c()($.b,{legend:t("sample-size"),defaultValue:d,step:1,min:1,onChange:function(t){e.setState({n:t},e.onGenerate)}})),v=c()("div",{},void 0,"Two-Sample"===m?c()(D.a,{variant:"secondary"},void 0,t("second-sample")):null,c()($.b,{legend:t("sample-mean"),defaultValue:s,step:"any",onChange:function(t){e.setState({xbar2:t},e.onGenerate)}}),c()($.b,{legend:"Z-Test"===y?r||(r=c()("span",{},void 0,"Sigma ",c()(ae.a,{raw:"\\left( \\sigma \\right)"}))):t("sample-standard-deviation"),defaultValue:p,min:.1,step:"any",onChange:function(t){e.setState({sigma2:t},e.onGenerate)}}),c()($.b,{legend:t("sample-size"),defaultValue:f,step:1,min:1,onChange:function(t){e.setState({n2:t},e.onGenerate)}})),h="Two-Sample"===m?"\\mu_1 - \\mu_2":"\\mu",x=this.props.nullHypothesisAsValue,w="Z-Test"===y?"\\sigma":"s";return c()(k.a,{maxWidth:1600},void 0,c()(k.a.Header,{as:"h4"},void 0,t("parameters")),c()(k.a.Body,{},void 0,c()(k.a,{body:!0,className:"bg-light"},void 0,c()(ee.a,{options:this.props.types,defaultValue:m,onChange:function(t){e.setState({samples:t},e.onGenerate)}}),this.props.tests.length>1?c()(ee.a,{options:this.props.tests,defaultValue:this.props.tests[0],onChange:function(t){e.setState({selectedTest:t},e.onGenerate)}}):null,c()($.b,{legend:"Hypothesized ".concat("Two-Sample"===m?"difference":"mean"," (null hypothesis)"),defaultValue:i,step:"any",onChange:function(t){e.setState({mu0:t},e.onGenerate)}})),c()("p",{},void 0,t("lets-assume")),c()(k.a,{body:!0,className:"bg-light"},void 0,g,"Two-Sample"===m?v:null),c()("p",{},void 0,t("conduct-the-following-test")),c()(te.a,{onChange:this.onDirectionChange,style:{width:"100%"}},void 0,c()(ae.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(h," = ").concat(i," \\; vs. \\; H_1: ").concat(h," \\ne ").concat(i)}),c()(ae.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(h," ").concat(x?"=":"\\le"," ").concat(i," \\; vs. \\; H_1: ").concat(h," > ").concat(i)}),c()(ae.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(h," ").concat(x?"=":"\\ge"," ").concat(i," \\; vs. \\; H_1: ").concat(h," < ").concat(i)})),c()("p",{},void 0,t("calculate-test-statistic")),c()(ae.a,"Two-Sample"===m?{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"".concat(b,"  = \\frac{(\\bar x_1 - \\bar x_2) - (\\mu_1 - \\mu_2)}{\\sqrt{\\tfrac{").concat(w,"_1^2}{n_1}+\\tfrac{").concat(w,"_2^2}{n_2}}}"),elems:ce}:{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"".concat(b," = \\frac{\\bar x - \\mu}{").concat(w," / \\sqrt{n}}"),elems:ce})))}},{key:"renderResultPanel",value:function(){var e=this.state,t=e.mu0,a=e.xbar,n=e.xbar2,o=e.sigma,r=e.sigma2,i=e.n,l=e.n2,s=e.samples,u=e.zStat,p=e.selectedTest,d=this.props.t,f="Z-Test"===p?"z":"t";return c()(k.a,{},void 0,c()(k.a.Header,{as:"h4"},void 0,d("test-result")),c()(k.a.Body,{},void 0,c()("p",{},void 0,d("plugging-in")),c()(ae.a,"Two-Sample"===s?{tag:"",displayMode:!0,raw:"".concat(f," = \\frac{").concat(A()(a-n,-3)," - ").concat(t,"}{\\sqrt{").concat(A()(o*o/i+r*r/l,-3),"}} = ").concat(u)}:{tag:"",displayMode:!0,raw:"".concat(f," = \\frac{").concat(a," - ").concat(t,"}{").concat(o," / \\sqrt{").concat(i,"}} = ").concat(u)}),c()("p",{},void 0,d("calculate-p-value")),c()(ae.a,{raw:this.state.probFormula}),c()(z.a,{domain:{x:[-3,3]}},void 0,c()(E.a,{data:this.state.pdfData}),c()(R.a,{data:this.state.areaData,style:le}),this.state.areaData2?c()(R.a,{data:this.state.areaData2,style:le}):null)))}},{key:"render",value:function(){return c()(T.a,{style:re({paddingTop:20,paddingBottom:20},this.props.style)},void 0,c()(j.a,{},void 0,c()(C.a,{md:6},void 0,this.renderParametersPanel()),c()(C.a,{md:6},void 0,this.renderResultPanel(),i||(i=c()("br",{})),this.props.feedback?l||(l=c()(Q.a,{id:"hypothesisTestingMean"})):null)))}}]),a}(_.Component);ue.defaultProps={types:["One-Sample","Two-Sample"],tests:["Z-Test","T-Test"],nullHypothesisAsValue:!1,feedback:!1,style:{}},t.default=Object(S.a)("LearnHypothesisTesting")(ue)},894:function(e,t,a){"use strict";var n=a(404),o=a.n(n),r=a(0),i=a.n(r),l=a(580),s=a.n(l),c=a(456),u=a.n(c),p=a(2809),d=a(1463),f=a(806),m=a(570),y=a(4124),b=a(2046),g=function(e){var t=e.polar,a=m.a.getDefaultStyles(e,"area"),n=m.a.getStyles(e.style,a),o={x:m.a.getRange(e,"x"),y:m.a.getRange(e,"y")},r={x:y.a.getDomainWithZero(e,"x"),y:y.a.getDomainWithZero(e,"y")},i={x:d.a.getBaseScale(e,"x").domain(r.x).range(e.horizontal?o.y:o.x),y:d.a.getBaseScale(e,"y").domain(r.y).range(e.horizontal?o.x:o.y)},l=t?e.origin||m.a.getPolarOrigin(e):void 0;return{style:n,data:function(e,t){var a=p.a.getData(e);a.length<2&&(a=[]);var n=function(e){var a="log"===d.a.getType(t[e])?1/Number.MAX_SAFE_INTEGER:0,n=t[e].domain(),o=f.a.getMinValue(n),r=f.a.getMaxValue(n),i=a;return o<0&&r<=0?i=r:o>=0&&r>0&&(i=o),f.a.containsDates(n)?new Date(i):i};return a.map((function(e){var t=void 0!==e._y1?e._y1:e._y,a=void 0!==e._y0?e._y0:n("y"),o=void 0!==e._x1?e._x1:e._x,r=void 0!==e._x0?e._x0:n("x");return u()({},e,{_y0:a,_y1:t,_x0:r,_x1:o})}))}(e,i),scale:i,domain:r,origin:l}},v=a(2736),h=a(612),x=a(2735),w=a(3702),P=a(3703),O=a(1246),_=a(1481);function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){T(e,t,a[t])}))}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var j=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},C=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},D=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},k=function(e){return function(t){return e.y(t._y0)}},z=function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}},E=function(e){var t;return"curve".concat((t=e)&&t[0].toUpperCase()+t.slice(1))},R=function(e){var t=e.polar,a=e.scale,n="function"==typeof e.interpolation&&e.interpolation,o="string"==typeof e.interpolation&&E(e.interpolation),r=n||o;return t?P.a().defined(j).curve(n||h["".concat(o,"Closed")]).angle(z(a)).outerRadius(D(a)).innerRadius(k(a)):function(e,t){var a=e.horizontal,n=e.scale,o="function"==typeof t&&t,r="string"==typeof t&&t;return a?w.a().defined(j).curve(o||h[r]).x0(k(n)).x1(D(n)).y(C(n)):w.a().defined(j).curve(o||h[r]).x(C(n)).y1(D(n)).y0(k(n))}(e,r)},Z=function(e){var t=e=function(e){var t=m.a.evaluateProp(e.ariaLabel,e),a=m.a.evaluateProp(e.desc,e),n=m.a.evaluateProp(e.id,e),o=m.a.evaluateStyle(u()({fill:"black"},e.style),e),r=m.a.evaluateProp(e.tabIndex,e);return u()({},e,{ariaLabel:t,desc:a,id:n,style:o,tabIndex:r})}(e),a=t.ariaLabel,n=t.role,o=t.shapeRendering,r=t.className,l=t.polar,s=t.origin,c=t.data,p=t.pathComponent,d=t.events,f=t.groupComponent,y=t.clipPath,b=t.id,g=t.style,w=t.desc,P=t.tabIndex,O=l&&s?"translate(".concat(s.x,", ").concat(s.y,")"):void 0,_=e.transform||O,T=g.stroke&&"none"!==g.stroke&&"transparent"!==g.stroke,k=R(e),Z=T&&function(e){var t=e.polar,a=e.scale,n=e.horizontal,o="function"==typeof e.interpolation&&e.interpolation,r="string"==typeof e.interpolation&&E(e.interpolation);return t?v.a().defined(j).curve(o||h["".concat(r,"Closed")]).angle(z(a)).radius(D(a)):x.a().defined(j).curve(o||h[r]).x(n?D(a):C(a)).y(n?C(a):D(a))}(e),M=g.stroke?"none":g.fill,V=S({"aria-label":a,className:r,role:n,shapeRendering:o,transform:_},d,{clipPath:y,tabIndex:P}),H=i.a.cloneElement(p,u()({key:"".concat(b,"-area"),style:u()({},g,{stroke:M}),d:k(c),desc:w,tabIndex:P},V)),N=T?i.a.cloneElement(p,u()({key:"".concat(b,"-area-stroke"),style:u()({},g,{fill:"none"}),d:Z(c)},V)):null;return T?i.a.cloneElement(f,{},[H,N]):H};Z.propTypes=S({},O.a.primitiveProps,{groupComponent:o.a.element,interpolation:o.a.oneOfType([o.a.string,o.a.func]),pathComponent:o.a.element}),Z.defaultProps={groupComponent:i.a.createElement("g",null),pathComponent:i.a.createElement(_.a,null),role:"presentation",shapeRendering:"auto"};var M=Z,V=a(766),H=a(4606),N=a(4609),G=a(4602),B=a(4603),A=a(4125),I=a(4600);function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var K={width:450,height:300,padding:50,interpolation:"linear"},J=function(e){function t(){return W(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a=t,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,a=t.role,n=m.a.modifyProps(this.props,K,a);if(this.shouldAnimate())return this.animateComponent(n,e);var o=this.renderContinuousData(n);return n.standalone?this.renderContainer(n.containerComponent,o):o}}])&&L(a.prototype,n),o&&L(a,o),t}(i.a.Component);Object.defineProperty(J,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(J,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){F(e,t,a[t])}))}return e}({},O.a.baseProps,O.a.dataProps,{interpolation:o.a.oneOfType([o.a.oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),o.a.func]),label:V.a.deprecated(o.a.string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(J,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(H.a,null),dataComponent:i.a.createElement(M,null),groupComponent:i.a.createElement(N.a,null),labelComponent:i.a.createElement(G.a,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:B.a.grayscale}}),Object.defineProperty(J,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryArea"}),Object.defineProperty(J,"role",{configurable:!0,enumerable:!0,writable:!0,value:"area"}),Object.defineProperty(J,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(J,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:A.a.continuousTransitions()}),Object.defineProperty(J,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:A.a.continuousPolarTransitions()}),Object.defineProperty(J,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:y.a.getDomainWithZero}),Object.defineProperty(J,"getData",{configurable:!0,enumerable:!0,writable:!0,value:p.a.getData}),Object.defineProperty(J,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,t){var a=m.a.modifyProps(e,t,"area"),n=e=u()({},a,g(a)),o=n.data,r=n.domain,i=n.events,l=n.groupComponent,c=n.height,p=n.horizontal,d=n.interpolation,f=n.origin,y=n.padding,v=n.polar,h=n.scale,x=n.sharedEvents,w=n.standalone,P=n.style,O=n.theme,_=n.width,S=n.labels,T=n.name,j={parent:{style:P.parent,width:_,height:c,scale:h,data:o,domain:r,standalone:w,theme:O,polar:v,origin:f,padding:y,name:T,horizontal:p},all:{data:{horizontal:p,polar:v,origin:f,scale:h,data:o,interpolation:d,groupComponent:l,style:P.data}}};return o.reduce((function(t,a,n){return(null!=b.a.getText(e,a,n)||S&&(i||x))&&(t[s()(a.eventKey)?n:a.eventKey]={labels:b.a.getProps(e,n)}),t}),j)}(e,K)}}),Object.defineProperty(J,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(I.a)(J,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);