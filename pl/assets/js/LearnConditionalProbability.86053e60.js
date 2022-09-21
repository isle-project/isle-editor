/*! For license information please see LearnConditionalProbability.86053e60.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40389],{984873:function(e,t,n){var r=n(376188);e.exports=r},376188:function(e,t,n){var r=n(25819),a=n(422957),l=n(109918),o=n(756917),i=n(82483),s=o*i;e.exports=function(e,t,n){var c=r(e,t,n||"max-abs");return a(c)||c===l?c:c>=s?o:c/i}},25819:function(e,t,n){var r=n(92273);e.exports=r},92273:function(e,t,n){var r=n(213939),a=n(422957),l=n(109918),o=n(395465),i=n(32593),s=n(653381);e.exports=function(e,t,n){var c,p;if(a(e)||a(t))return NaN;if(e===l||e===o||t===l||t===o)return e===t?NaN:l;if(e===t)return 0;if(r(n))c=n;else if(void 0===n&&(n="max-abs"),void 0===(c=s[n]))throw new Error("invalid argument. Unrecognized/unsupported scale function. Value: `"+n+"`.");return 0===(p=c(e,t))?NaN:i((e-t)/p)}},575778:function(e){e.exports=function(e,t){return e<t?t:e}},859236:function(e,t,n){var r=n(32593);e.exports=function(e,t){return(e=r(e))<(t=r(t))?t:e}},738028:function(e){e.exports=function(e,t){return e+(t-e)/2}},328190:function(e,t,n){var r=n(32593);e.exports=function(e,t){return(e=r(e))+((t=r(t))-e)/2}},602010:function(e){e.exports=function(e,t){return e>t?t:e}},616871:function(e,t,n){var r=n(32593);e.exports=function(e,t){return(e=r(e))>(t=r(t))?t:e}},653381:function(e,t,n){var r={"max-abs":n(859236),max:n(575778),"min-abs":n(616871),min:n(602010),"mean-abs":n(328190),mean:n(738028),x:n(500526),y:n(815586)};e.exports=r},500526:function(e){e.exports=function(e){return e}},815586:function(e){e.exports=function(e,t){return t}},43968:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(202784),a=n(213980),l=n.n(a),o=n(38505),i=n(198),s=n(312594),c=n(471275),p=n(790817),u=n(458264),m=n(323522),d=n(844204),h=n(850013),f=n(945618),b=n(328731),g=n(74039),E=n.n(g),B=n(557106),A=n.n(B),y=n(783158),x=n.n(y),v=n(984873),P=n.n(v),w=n(172888),O=n(506078),$=n(369701),Z=n(194542);const C=({A:e,B:t},n)=>r.createElement("table",{className:"table-bordered"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null),r.createElement("th",null," ",t," "),r.createElement("th",null,n("not")," ",t," ")),r.createElement("tr",null,r.createElement("th",null," ",e," "),r.createElement("td",null,r.createElement(Z.Z,{raw:`P(\\text{${e}} \\cap \\text{${t}} )`})),r.createElement("td",null,r.createElement(Z.Z,{raw:`P(\\text{${e}} \\cap \\text{${t}}^C )`})),r.createElement("td",null,r.createElement(Z.Z,{raw:`P(\\text{${e}})`}))),r.createElement("tr",null,r.createElement("th",null,n("not")," ",e),r.createElement("td",null,r.createElement(Z.Z,{raw:`P(\\text{${e}}^C \\cap \\text{${t}} )`})),r.createElement("td",null,r.createElement(Z.Z,{raw:`P(\\text{${e}} \\cap \\text{${t}} )`})),r.createElement("td",null,r.createElement(Z.Z,{raw:`P(\\text{${e}}^c)`}))),r.createElement("tr",null,r.createElement("th",null),r.createElement("td",null,r.createElement(Z.Z,{raw:`P( \\text{${t}} )`})),r.createElement("td",null,r.createElement(Z.Z,{raw:`P(\\text{${t}}^c)`})),r.createElement("td",null,r.createElement(Z.Z,{raw:"P(\\Omega)"})))));C.propTypes={A:l().string.isRequired,B:l().string.isRequired};var j=C,N=Object.defineProperty,S=(e,t,n)=>(((e,t,n)=>{t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);class T extends r.Component{constructor(e){super(e),S(this,"changeProbA",(e=>{const t=this.state.pB;this.setState({pA:e,pAB:e*t,pAnotB:e*(1-t),pnotAB:(1-e)*t,pnotAnotB:(1-e)*(1-t),pAgivenB:e,pAgivenNotB:e,independent:!0})})),S(this,"changeProbB",(e=>{const t=this.state.pA;this.setState({pB:e,pAB:t*e,pAnotB:t*(1-e),pnotAB:(1-t)*e,pnotAnotB:(1-t)*(1-e),pAgivenB:t,pAgivenNotB:t,independent:!0})})),S(this,"changeProbAB",(e=>{const t=this.state.pA-e,n=this.state.pB-e,r=e/this.state.pB,a=t/(1-this.state.pB);this.setState({pAB:e,pAnotB:t,pnotAB:n,pnotAnotB:1-t-n-e,pAgivenB:r,pAgivenNotB:a,independent:r===a&&r===this.state.pA})})),S(this,"changeProbAnotB",(e=>{const t=this.state.pA-e,n=1-this.state.pB-e,r=t/this.state.pB,a=e/(1-this.state.pB);this.setState({pAnotB:e,pAB:t,pnotAnotB:n,pnotAB:1-t-n-e,pAgivenB:r,pAgivenNotB:a,independent:r===a&&r===this.state.pA})})),S(this,"changeProbNotAB",(e=>{let t=1-this.state.pA-e,n=this.state.pB-e,r=n/this.state.pB,a=(1-n-t-e)/(1-this.state.pB);this.setState({pnotAB:e,pnotAnotB:t,pAB:n,pAnotB:1-n-t-e,pAgivenB:r,pAgivenNotB:a,independent:r===a&&r===this.state.pA})})),S(this,"changeProbNotAnotB",(e=>{const t=1-this.state.pA-e,n=1-this.state.pB-e,r=(1-t-n-e)/this.state.pB,a=n/(1-this.state.pB);this.setState({pnotAnotB:e,pnotAB:t,pAnotB:n,pAB:1-t-n-e,pAgivenB:r,pAgivenNotB:a,independent:r===a&&r===this.state.pA})})),S(this,"changeProbAgivenB",(e=>{const t=e,n=t*this.state.pB,r=this.state.pA-n,a=this.state.pB-n,l=1-n-r-a,o=(this.state.pA-t*this.state.pB)/(1-this.state.pB),i=P()(t,o)<2&&P()(o,this.state.pA)<2;this.setState({pAgivenB:t,pAB:n,pAnotB:r,pnotAB:a,pnotAnotB:l,pAgivenNotB:o,independent:i})})),S(this,"changeProbAgivenNotB",(e=>{const t=e,n=1-this.state.pB,r=t*n,a=n-r,l=this.state.pA-r,o=this.state.pB-l,i=(this.state.pA-t*n)/this.state.pB,s=P()(t,i)<2&&P()(i,this.state.pA)<2;this.setState({pAgivenNotB:t,pAB:l,pAnotB:r,pnotAB:o,pnotAnotB:a,pAgivenB:i,independent:s})})),this.state={A:e.A,B:e.B,pA:.5,pB:.5,pAB:.25,pAnotB:.25,pnotAB:.25,pnotAnotB:.25,pAgivenNotB:.5,pAgivenB:.5,independent:!0}}renderTable(){const{A:e,B:t,pA:n,pB:a,pAB:l,pAnotB:o}=this.state;return r.createElement("table",{className:"table-bordered"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null),r.createElement("th",null,t),r.createElement("th",null,this.props.t("not")," ",t)),r.createElement("tr",null,r.createElement("th",null,e),r.createElement("td",null,r.createElement(O.Z,{inline:!0,min:E()(A()(n-(1-a),0),-10),max:E()(x()(n,a),-10),step:.01,onChange:this.changeProbAB,defaultValue:l})),r.createElement("td",null,r.createElement(O.Z,{inline:!0,min:E()(A()(n-a,0),-10),max:E()(x()(n,1-a),-10),step:.01,onChange:this.changeProbAnotB,defaultValue:o})),r.createElement("td",null,n)),r.createElement("tr",null,r.createElement("th",null,this.props.t("not")," ",e),r.createElement("td",null,r.createElement(O.Z,{inline:!0,min:E()(A()(a-x()(n,a),0),-10),max:E()(x()(1-n,a),-10),step:.01,onChange:this.changeProbNotAB,defaultValue:this.state.pnotAB})),r.createElement("td",null,r.createElement(O.Z,{inline:!0,min:E()(A()(1-n-a,0),-10),max:E()(x()(1-n,1-a),-10),step:.01,onChange:this.changeProbNotAnotB,defaultValue:this.state.pnotAnotB})),r.createElement("td",null,E()(1-n,-3))),r.createElement("tr",null,r.createElement("th",null),r.createElement("td",null,a),r.createElement("td",null,E()(1-a,-3)),r.createElement("td",null,"1.0"))))}render(){const{A:e,B:t,pA:n,pB:a}=this.state,{t:l}=this.props,i=[{x:`P(${e}|${t})`,y:100*this.state.pAgivenB},{x:`P(${e}|not ${t})`,y:100*this.state.pAgivenNotB}],g=[{x:`P(${e}|${t})`,y:100*this.state.pAgivenB},{x:`P(${e}|not ${t})`,y:100*this.state.pAgivenNotB}];return r.createElement(p.Z,{body:!0},r.createElement("p",null,l("consider-events")," ",r.createElement($.Z,{inline:!0,defaultValue:e,onChange:e=>this.setState({A:e})})," ",l("and")," ",r.createElement($.Z,{inline:!0,defaultValue:t,onChange:e=>this.setState({B:e})}),". ",l("let")," ",r.createElement(Z.Z,{raw:`P(\\text{${e}}) = `}),r.createElement(O.Z,{min:0,max:1,step:.01,defaultValue:.5,inline:!0,onChange:this.changeProbA})," ",l("and")," ",r.createElement(Z.Z,{raw:`P(\\text{${t}}) = `}),r.createElement(O.Z,{min:0,max:1,step:.01,defaultValue:.5,inline:!0,onChange:this.changeProbB}),". ",l("then-we-have")," ",r.createElement(Z.Z,{raw:`P(\\text{${e}}^C) = ${E()(1-n,-4)}`})," ",l("and")," ",r.createElement(Z.Z,{raw:`P(\\text{${t}}^C) = ${E()(1-a,-4)}`}),". ",l("these-form-marginals")),r.createElement(c.Z,null,r.createElement(u.Z,null,r.createElement(s.Z,{sm:6},r.createElement("p",null,l("inner-cells-equal")," ",r.createElement(Z.Z,{raw:`P(\\text{${e}} \\cap \\text{${t}} ) = P(\\text{${e}}) \\cdot P(\\text{${t}}) = ${E()(n*a,-4)}`}),". "),this.renderTable(),r.createElement("br",null),j({A:e,B:t},l),r.createElement("br",null),r.createElement(u.Z,null,r.createElement("span",null,l("choose")),r.createElement(O.Z,{legend:r.createElement(Z.Z,{raw:`P(\\text{${e}} \\mid \\text{${t})}`}),min:A()((n-1+a)/a,0),max:x()(n/a,1),step:.001,onChange:this.changeProbAgivenB,defaultValue:this.state.pAgivenB,inline:!0}),r.createElement("span",null,l("and")),r.createElement(O.Z,{legend:r.createElement(Z.Z,{raw:`P( \\text{${e}} \\mid \\text{ ${t} }^C)`}),min:A()((n-a)/(1-a),0),max:x()(n/(1-a),1),step:.001,onChange:this.changeProbAgivenNotB,defaultValue:this.state.pAgivenNotB,inline:!0}))),r.createElement(s.Z,{sm:5},r.createElement("p",null,l("conditional-probabilities")),0===a||0===n?r.createElement(p.Z,null,0===a?r.createElement("span",null,l("conditional-probability-undefined")," ",r.createElement(Z.Z,{raw:`P( \\text{${t}}) = 0`})):r.createElement(o.c,{i18nKey:"must-have-nonzero-probability"},"When ",r.createElement(Z.Z,{raw:`P( ${e}) = 0`}),", we must have ",r.createElement(Z.Z,{raw:`P( \\text{${e}} \\mid \\text{${t}} ) = P( \\text{${e}} \\mid \\text{${t}}^C ) = 0`})," in case B has non-zero probability.")):r.createElement(c.Z,null,r.createElement(u.Z,null,r.createElement(s.Z,{md:12},r.createElement(m.k,{theme:d.J.material,domainPadding:{x:50,y:[10,20]},height:350},r.createElement(h.E,{dependentAxis:!0,tickFormat:e=>e/100}),r.createElement(h.E,null),r.createElement(f.Z,{data:i,domain:{y:[0,100]},x:"x",y:"y",labels:e=>E()(e.y/100,-3)}),this.state.independent?r.createElement(b.j,{data:g}):null))),r.createElement(u.Z,null,this.state.independent?r.createElement(r.Fragment,null,r.createElement("p",null,l("events-independent")),r.createElement(Z.Z,{raw:`P( \\text{${e}} \\mid \\text{ ${t} } ) = P( \\text{${e}} \\mid \\text{ ${t} }^C )`})):r.createElement(r.Fragment,null,r.createElement("p",null,r.createElement(o.c,{i18nKey:"events-not-independent"},"The events are ",r.createElement("b",null,"not")," independent because")),r.createElement(Z.Z,{raw:0===this.state.pAgivenB&&0===this.state.pAgivenNotB?`P( \\text{ ${e} } \\mid \\text{ ${t} } ) = P( \\text{${e}} \\mid \\text{ ${t} }^C \\neq P( \\text{${e}})`:`P( \\text{ ${e} } \\mid \\text{ ${t} } ) \\neq P( \\text{${e}} \\mid \\text{ ${t} }^C )`}))))),r.createElement(s.Z,{sm:"1"},r.createElement(w.Z,{id:"independence_applet",vertical:!0})))))}}T.defaultProps={A:"A",B:"B"},T.propTypes={A:l().string,B:l().string};var R=(0,i.Z)("learn/conditional-probability")(T)},328731:function(e,t,n){n.d(t,{j:function(){return z}});var r=n(213980),a=n.n(r),l=n(202784),o=n(301842),i=n.n(o),s=n(460019),c=n.n(s),p=n(639332),u=n(585613),m=n(938151),d=n(215378),h=n(338094),f=function(e,t){var n=u.TY(e,t,"line");e=c()({},n,function(e){var t=p.Yu(e);t.length<2&&(t=[]);var n={x:u.rx(e,"x"),y:u.rx(e,"y")},r={x:m.ge(e,"x"),y:m.ge(e,"y")},a={x:d.q8(e,"x").domain(r.x).range(e.horizontal?n.y:n.x),y:d.q8(e,"y").domain(r.y).range(e.horizontal?n.x:n.y)},l=e.polar?e.origin||u.IW(e):void 0,o=u.Lo(e,"line");return{domain:r,data:t,scale:a,style:u.Wi(e.style,o),origin:l}}(n));var r=e,a=r.data,l=r.domain,o=r.events,s=r.groupComponent,f=r.height,b=r.horizontal,g=r.interpolation,E=r.origin,B=r.padding,A=r.polar,y=r.scale,x=r.sharedEvents,v=r.standalone,P=r.style,w=r.theme,O=r.width,$=r.labels,Z=r.name,C=r.disableInlineStyles,j={parent:{style:P.parent,scale:y,data:a,height:f,width:O,name:Z,domain:l,standalone:v,polar:A,origin:E,padding:B,horizontal:b},all:{data:{horizontal:b,polar:A,origin:E,scale:y,data:a,interpolation:g,groupComponent:s,style:C?{}:P.data,theme:w,disableInlineStyles:C}}};return a.reduce((function(t,n,r){var a=h.Q(e,n,r);(null!=a||$&&(o||x))&&(t[i()(n.eventKey)?r:n.eventKey]={labels:h.AM(e,r)});return t}),j)},b=n(575380),g=n(929639),E=n(50038),B=n(117497);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){e=function(e){var t=u.xs(e.ariaLabel,e),n=u.xs(e.id,e),r=u.F3(c()({fill:"none",stroke:"black"},e.style),e),a=u.xs(e.tabIndex,e);return c()({},e,{ariaLabel:t,id:n,style:r,tabIndex:a})}(e);var t=b.I(e),n=e,r=n.polar,a=n.origin,o=g.G(e),i=r&&a?"translate(".concat(a.x,", ").concat(a.y,")"):void 0,s=o(e.data);return l.cloneElement(e.pathComponent,y(y(y({},e.events),t),{},{"aria-label":e.ariaLabel,d:s,style:e.style,transform:e.transform||i,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath,tabIndex:e.tabIndex}))};v.propTypes=y(y({},E.l.primitiveProps),{},{interpolation:a().oneOfType([a().string,a().func]),openCurve:a().bool,origin:a().shape({x:a().number.isRequired,y:a().number.isRequired}),pathComponent:a().element,polar:a().bool}),v.defaultProps={pathComponent:l.createElement(B.y,null),role:"presentation",shapeRendering:"auto"};var P=n(322),w=n(228300),O=n(761027),$=n(564167),Z=n(339849),C=n(844204),j=n(246522);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var a=_(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V(this,n)}}function V(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var q={width:450,height:300,padding:50,interpolation:"linear"},I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(l,e);var t,n,r,a=D(l);function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a.call(this,e)}return t=l,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=l.animationWhitelist,t=l.role,n=u.TY(this.props,q,t);if(this.shouldAnimate())return this.animateComponent(n,e);var r=this.renderContinuousData(n),a=n.standalone?this.renderContainer(n.containerComponent,r):r;return b.h(a,n)}}])&&R(t.prototype,n),r&&R(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(l.Component);I.animationWhitelist=["data","domain","height","padding","samples","style","width"],I.displayName="VictoryLine",I.role="line",I.defaultTransitions=P.sA(),I.defaultPolarTransitions=P.Jm(),I.continuous=!0,I.propTypes=S(S(S({},E.l.baseProps),E.l.dataProps),{},{interpolation:a().oneOfType([a().oneOf(["basis","bundle","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),a().func]),label:w.x9(a().string,"Use `labels` instead for individual data labels")}),I.defaultProps={containerComponent:l.createElement(O._,null),dataComponent:l.createElement(v,null),labelComponent:l.createElement($.X,{renderInPortal:!0}),groupComponent:l.createElement(Z.j,null),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:C.J.grayscale},I.getDomain=m.ge,I.getData=p.Yu,I.getBaseProps=function(e){return f(e,q)},I.expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];var z=(0,j.o)(I,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);