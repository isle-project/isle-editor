"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10068],{862647:function(e,t,n){n.r(t);var r=n(202784),a=n(213980),o=n.n(a),l=n(198),i=n(471275),s=n(458264),c=n(312594),p=n(223444),u=n(790817),f=n(323522),m=n(328731),d=n(405362),y=n(690299),h=n.n(y),b=n(32593),g=n.n(b),v=n(695688),O=n.n(v),x=n(74039),w=n.n(x),P=n(523632),E=n.n(P),j=n(616145),_=n.n(j),T=n(900766),$=n.n(T),C=n(840618),S=n.n(C),Z=n(254988),D=n.n(Z),k=n(172888),R=n(506078),z=n(440835),I=n(228713),V=n(194542),A=Object.defineProperty,N=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,H=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&H(e,n,t[n]);if(N)for(var n of N(t))G.call(t,n)&&H(e,n,t[n]);return e},q=(e,t,n)=>(H(e,"symbol"!=typeof t?t+"":t,n),n);const L={data:{fill:"tomato",stroke:"tomato",opacity:.3}},Y=h()("isle:learn:hypothesis-testing-mean"),W={n:{tooltip:"Sample Size"},s:{tooltip:"Standard Deviation"},mu:{tooltip:"True mean"},x:{tooltip:"Sample Mean"},z:{tooltip:"Test Statistic"},t:{tooltip:"Test Statistic"}};class F extends r.Component{constructor(e){super(e),q(this,"onGenerate",(()=>{Y("Should generate new values...");const{mu0:e,xbar:t,xbar2:n,sigma:r,sigma2:a,n:o,n2:l,samples:i,selectedTest:s}=this.state,{pValue:c}=this.props;let p,u;"Z-Test"===s?(u=$().factory(0,1),p=_().factory(0,1)):"Two-Sample"===i?(u=D().factory(o+l-2),p=S().factory(o+l-2)):(u=D().factory(o-1),p=S().factory(o-1));let f,m,d,y,h=E()(-3.5,3.5,300);h=h.map((e=>({x:e,y:p(e)}))),f="Two-Sample"===i?w()((t-n-e)/O()(r*r/o+a*a/l),-3):w()((t-e)/(r/O()(o)),-3);const b="Z-Test"===s?"Z":"T";switch(this.state.type){case 2:m=E()(-3,f,200).map((e=>({x:e,y:p(e)}))),y=`${c||`P( ${b} < ${f})`} = ${w()(u(f),-3)}`;break;case 1:m=E()(f,3,200).map((e=>({x:e,y:p(e)}))),y=`${c||`P( ${b} > ${f})`} = ${w()(1-u(f),-3)}`;break;case 0:m=E()(g()(f),3,200).map((e=>({x:e,y:p(e)}))),d=E()(-3,-g()(f),200).map((e=>({x:e,y:p(e)}))),y=`${c||`P( |${b}| > ${g()(f)})`} = ${w()(1-u(g()(f))+u(-g()(f)),-3)}`}this.setState({n:o,mu0:e,sigma:r,sigma2:a,pdfData:h,xbar:t,xbar2:n,zStat:f,areaData:m,areaData2:d,probFormula:y})})),q(this,"onDirectionChange",(e=>{let t,n,r,{zStat:a,selectedTest:o,samples:l,n:i,n2:s}=this.state;const{pValue:c}=this.props;let p,u;"Z-Test"===o?(u=$().factory(0,1),p=_().factory(0,1)):"Two-Sample"===l?(u=D().factory(i+s-2),p=S().factory(i+s-2)):(u=D().factory(i-1),p=S().factory(i-1));const f="Z-Test"===o?"Z":"T";switch(e){case 0:t=E()(g()(a),3,200).map((e=>({x:e,y:p(e)}))),n=E()(-3,-g()(a),200).map((e=>({x:e,y:p(e)}))),r=`${c||`P( |${f}| > ${g()(a)})`} = ${w()(1-u(g()(a))+u(-g()(a)),-3)}`;break;case 1:t=E()(a,3,200).map((e=>({x:e,y:p(e)}))),r=`${c||`P( ${f} > ${a})`} = ${w()(1-u(a),-3)}`;break;case 2:t=E()(-3,a,200).map((e=>({x:e,y:p(e)}))),r=`${c||`P( ${f} < ${a})`} = ${w()(u(a),-3)}`}this.setState({type:e,probFormula:r,areaData:t,areaData2:n})})),this.state={n:5,n2:5,mu0:0,sigma:1,sigma2:1,pdfData:null,xbar:0,xbar2:0,zStat:0,areaData:null,areaData2:null,probFormula:"",type:0,samples:e.types[0],selectedTest:e.tests[0]}}componentDidMount(){this.onGenerate()}renderParametersPanel(){const{t:e}=this.props,{mu0:t,xbar:n,xbar2:a,sigma:o,sigma2:l,n:i,n2:s,samples:c,selectedTest:f}=this.state,m="Z-Test"===f?"z":"t",d=r.createElement("div",null,"Two-Sample"===c?r.createElement(p.Z,{bg:"secondary"},"First Sample"):null,r.createElement(R.Z,{legend:e("sample-mean"),defaultValue:n,step:"any",onChange:e=>{this.setState({xbar:e},this.onGenerate)}}),r.createElement(R.Z,{legend:"Z-Test"===f?r.createElement("span",null,"Sigma ",r.createElement(V.Z,{raw:"\\left( \\sigma \\right)"})):e("sample-standard-deviation"),defaultValue:o,min:.1,step:"any",onChange:e=>{this.setState({sigma:e},this.onGenerate)}}),r.createElement(R.Z,{legend:e("sample-size"),defaultValue:i,step:1,min:1,onChange:e=>{this.setState({n:e},this.onGenerate)}})),y=r.createElement("div",null,"Two-Sample"===c?r.createElement(p.Z,{bg:"secondary"},e("second-sample")):null,r.createElement(R.Z,{legend:e("sample-mean"),defaultValue:a,step:"any",onChange:e=>{this.setState({xbar2:e},this.onGenerate)}}),r.createElement(R.Z,{legend:"Z-Test"===f?r.createElement("span",null,"Sigma ",r.createElement(V.Z,{raw:"\\left( \\sigma \\right)"})):e("sample-standard-deviation"),defaultValue:l,min:.1,step:"any",onChange:e=>{this.setState({sigma2:e},this.onGenerate)}}),r.createElement(R.Z,{legend:e("sample-size"),defaultValue:s,step:1,min:1,onChange:e=>{this.setState({n2:e},this.onGenerate)}})),h="Two-Sample"===c?"\\mu_1 - \\mu_2":"\\mu",b=this.props.nullHypothesisAsValue,g="Z-Test"===f?"\\sigma":"s";return r.createElement(u.Z,{maxWidth:1600},r.createElement(u.Z.Header,{as:"h4"},e("parameters")),r.createElement(u.Z.Body,null,r.createElement(u.Z,{body:!0,className:"bg-light"},r.createElement(z.Z,{options:this.props.types,defaultValue:c,onChange:e=>{this.setState({samples:e},this.onGenerate)}}),this.props.tests.length>1?r.createElement(z.Z,{options:this.props.tests,defaultValue:this.props.tests[0],onChange:e=>{this.setState({selectedTest:e},this.onGenerate)}}):null,r.createElement(R.Z,{legend:`Hypothesized ${"Two-Sample"===c?"difference":"mean"} (null hypothesis)`,defaultValue:t,step:"any",onChange:e=>{this.setState({mu0:e},this.onGenerate)}})),r.createElement("p",null,e("lets-assume")),r.createElement(u.Z,{body:!0,className:"bg-light"},d,"Two-Sample"===c?y:null),r.createElement("p",null,e("conduct-the-following-test")),r.createElement(I.Z,{onChange:this.onDirectionChange,style:{width:"100%"}},r.createElement(V.Z,{displayMode:!0,tag:"",raw:`H_0: ${h} = ${t} \\; vs. \\; H_1: ${h} \\ne ${t}`}),r.createElement(V.Z,{displayMode:!0,tag:"",raw:`H_0: ${h} ${b?"=":"\\le"} ${t} \\; vs. \\; H_1: ${h} > ${t}`}),r.createElement(V.Z,{displayMode:!0,tag:"",raw:`H_0: ${h} ${b?"=":"\\ge"} ${t} \\; vs. \\; H_1: ${h} < ${t}`})),r.createElement("p",null,e("calculate-test-statistic")),"Two-Sample"===c?r.createElement(V.Z,{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:`${m}  = \\frac{(\\bar x_1 - \\bar x_2) - (\\mu_1 - \\mu_2)}{\\sqrt{\\tfrac{${g}_1^2}{n_1}+\\tfrac{${g}_2^2}{n_2}}}`,elems:W}):r.createElement(V.Z,{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:`${m} = \\frac{\\bar{x} - \\mu}{${g} / \\sqrt{n}}`,elems:W})))}renderResultPanel(){const{mu0:e,xbar:t,xbar2:n,sigma:a,sigma2:o,n:l,n2:i,samples:s,zStat:c,selectedTest:p}=this.state,{t:y}=this.props,h="Z-Test"===p?"z":"t";return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h4"},y("test-result")),r.createElement(u.Z.Body,null,r.createElement("p",null,y("plugging-in")),"Two-Sample"===s?r.createElement(V.Z,{tag:"",displayMode:!0,raw:`${h} = \\frac{${w()(t-n,-3)} - ${e}}{\\sqrt{${w()(a*a/l+o*o/i,-3)}}} = ${c}`}):r.createElement(V.Z,{tag:"",displayMode:!0,raw:`${h} = \\frac{${t} - ${e}}{${a} / \\sqrt{${l}}} = ${c}`}),r.createElement("p",null,y("calculate-p-value")),r.createElement(V.Z,{raw:this.state.probFormula}),r.createElement(f.k,{domain:{x:[-3,3]}},r.createElement(m.j,{data:this.state.pdfData}),r.createElement(d.b,{data:this.state.areaData,style:L}),this.state.areaData2?r.createElement(d.b,{data:this.state.areaData2,style:L}):null)))}render(){return r.createElement(i.Z,{style:B({paddingTop:20,paddingBottom:20},this.props.style)},r.createElement(s.Z,null,r.createElement(c.Z,{md:6},this.renderParametersPanel()),r.createElement(c.Z,{md:6},this.renderResultPanel(),r.createElement("br",null),this.props.feedback?r.createElement(k.Z,{id:"hypothesisTestingMean"}):null)))}}F.defaultProps={types:["One-Sample","Two-Sample"],tests:["Z-Test","T-Test"],nullHypothesisAsValue:!1,feedback:!1,pValue:null,style:{}},F.propTypes={types:o().arrayOf(o().string),tests:o().arrayOf(o().oneOf(["Z-Test","T-Test"])),nullHypothesisAsValue:o().bool,feedback:o().bool,pValue:o().string,style:o().object},t.default=(0,l.Z)("learn/hypothesis-testing")(F)},471275:function(e,t,n){var r=n(72779),a=n.n(r),o=n(202784),l=n(429658),i=n(552322);const s=o.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...o},s)=>{const c=(0,l.vE)(e,"container"),p="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:s,...o,className:a()(r,t?`${c}${p}`:c)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},458264:function(e,t,n){var r=n(72779),a=n.n(r),o=n(202784),l=n(429658),i=n(552322);const s=o.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},o)=>{const s=(0,l.vE)(e,"row"),c=(0,l.pi)(),p=(0,l.zG)(),u=`${s}-cols`,f=[];return c.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const a=e!==p?`-${e}`:"";null!=n&&f.push(`${u}${a}-${n}`)})),(0,i.jsx)(n,{ref:o,...r,className:a()(t,s,...f)})}));s.displayName="Row",t.Z=s},405362:function(e,t,n){n.d(t,{b:function(){return X}});var r=n(213980),a=n.n(r),o=n(202784),l=n(301842),i=n.n(l),s=n(460019),c=n.n(s),p=n(639332),u=n(215378),f=n(733419),m=n(585613),d=n(938151),y=n(338094),h=function(e){var t=e.polar,n=m.Lo(e,"area"),r=m.Wi(e.style,n),a={x:m.rx(e,"x"),y:m.rx(e,"y")},o={x:d.x1(e,"x"),y:d.x1(e,"y")},l={x:u.q8(e,"x").domain(o.x).range(e.horizontal?a.y:a.x),y:u.q8(e,"y").domain(o.y).range(e.horizontal?a.x:a.y)},i=t?e.origin||m.IW(e):void 0,s=function(e,t){var n=p.Yu(e);n.length<2&&(n=[]);var r=function(e){var n="log"===u.oL(t[e])?1/Number.MAX_SAFE_INTEGER:0,r=t[e].domain(),a=f.ao(r),o=f.MN(r),l=n;return a<0&&o<=0?l=o:a>=0&&o>0&&(l=a),f.AM(r)?new Date(l):l};return n.map((function(e){var t=void 0!==e._y1?e._y1:e._y,n=void 0!==e._y0?e._y0:r("y"),a=void 0!==e._x1?e._x1:e._x,o=void 0!==e._x0?e._x0:r("x");return c()({},e,{_y0:n,_y1:t,_x0:o,_x1:a})}))}(e,l);return{style:r,data:s,scale:l,domain:o,origin:i}},b=n(56195),g=n(928378),v=n(929639),O=n(575380),x=n(50038),w=n(117497);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},T=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},$=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},C=function(e){return function(t){return e.y(t._y0)}},S=function(e){var t=e.polar,n=e.scale,r=v.U(e);return t?g.Z().defined(_).curve(r).angle(function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}}(n)).outerRadius($(n)).innerRadius(C(n)):function(e){var t=e.horizontal,n=e.scale,r=v.U(e);return t?b.Z().defined(_).curve(r).x0(C(n)).x1($(n)).y(T(n)):b.Z().defined(_).curve(r).x(T(n)).y1($(n)).y0(C(n))}(e)},Z=function(e){e=function(e){var t=m.xs(e.ariaLabel,e),n=m.xs(e.desc,e),r=m.xs(e.id,e),a=m.F3(c()({fill:"black"},e.style),e),o=m.xs(e.tabIndex,e);return c()({},e,{ariaLabel:t,desc:n,id:r,style:a,tabIndex:o})}(e);var t=e,n=t.ariaLabel,r=t.role,a=t.shapeRendering,l=t.className,i=t.polar,s=t.origin,p=t.data,u=t.pathComponent,f=t.events,d=t.groupComponent,y=t.clipPath,h=t.id,b=t.style,g=t.desc,x=t.tabIndex,w=O.I(e),P=i&&s?"translate(".concat(s.x,", ").concat(s.y,")"):void 0,j=e.transform||P,_=b.stroke&&"none"!==b.stroke&&"transparent"!==b.stroke,T=S(e),$=_&&v.G(e),C=b.stroke?"none":b.fill,Z=E(E({"aria-label":n,className:l,role:r,shapeRendering:a,transform:j},f),{},{clipPath:y,tabIndex:x}),D=o.cloneElement(u,c()({key:"".concat(h,"-area"),style:c()({},b,{stroke:C}),d:T(p),desc:g,tabIndex:x},Z,w)),k=_?o.cloneElement(u,c()({key:"".concat(h,"-area-stroke"),style:c()({},b,{fill:"none"}),d:$(p)},Z)):null;return _?o.cloneElement(d,w,[D,k]):D};Z.propTypes=E(E({},x.l.primitiveProps),{},{groupComponent:a().element,interpolation:a().oneOfType([a().string,a().func]),pathComponent:a().element}),Z.defaultProps={groupComponent:o.createElement("g",null),pathComponent:o.createElement(w.y,null),role:"presentation",shapeRendering:"auto"};var D=n(228300),k=n(761027),R=n(339849),z=n(564167),I=n(844204),V=n(322),A=n(246522);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=W(e);if(t){var a=W(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var F={width:450,height:300,padding:50,interpolation:"linear"},K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(o,e);var t,n,r,a=L(o);function o(){return H(this,o),a.apply(this,arguments)}return t=o,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=o.animationWhitelist,t=o.role,n=m.TY(this.props,F,t);if(this.shouldAnimate())return this.animateComponent(n,e);var r=this.renderContinuousData(n),a=n.standalone?this.renderContainer(n.containerComponent,r):r;return O.h(a,n)}}])&&B(t.prototype,n),r&&B(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(o.Component);K.animationWhitelist=["data","domain","height","padding","style","width"],K.propTypes=M(M(M({},x.l.baseProps),x.l.dataProps),{},{interpolation:a().oneOfType([a().oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),a().func]),label:D.x9(a().string,"Use `labels` instead for individual data labels")}),K.defaultProps={containerComponent:o.createElement(k._,null),dataComponent:o.createElement(Z,null),groupComponent:o.createElement(R.j,null),labelComponent:o.createElement(z.X,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:I.J.grayscale},K.displayName="VictoryArea",K.role="area",K.continuous=!0,K.defaultTransitions=V.sA(),K.defaultPolarTransitions=V.Jm(),K.getDomain=d.x1,K.getData=p.Yu,K.getBaseProps=function(e){return function(e,t){var n=m.TY(e,t,"area"),r=e=c()({},n,h(n)),a=r.data,o=r.domain,l=r.events,s=r.groupComponent,p=r.height,u=r.horizontal,f=r.interpolation,d=r.origin,b=r.padding,g=r.polar,v=r.scale,O=r.sharedEvents,x=r.standalone,w=r.style,P=r.theme,E=r.width,j=r.labels,_=r.name,T=r.disableInlineStyles,$={parent:{style:w.parent,width:E,height:p,scale:v,data:a,domain:o,standalone:x,theme:P,polar:g,origin:d,padding:b,name:_,horizontal:u},all:{data:{horizontal:u,polar:g,origin:d,scale:v,data:a,interpolation:f,groupComponent:s,style:T?{}:w.data,disableInlineStyles:T}}};return a.reduce((function(t,n,r){return(null!=y.Q(e,n,r)||j&&(l||O))&&(t[i()(n.eventKey)?r:n.eventKey]={labels:y.AM(e,r)}),t}),$)}(e,F)},K.expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];var X=(0,A.o)(K,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})},328731:function(e,t,n){n.d(t,{j:function(){return G}});var r=n(213980),a=n.n(r),o=n(202784),l=n(301842),i=n.n(l),s=n(460019),c=n.n(s),p=n(639332),u=n(585613),f=n(938151),m=n(215378),d=n(338094),y=function(e,t){var n=u.TY(e,t,"line");e=c()({},n,function(e){var t=p.Yu(e);t.length<2&&(t=[]);var n={x:u.rx(e,"x"),y:u.rx(e,"y")},r={x:f.ge(e,"x"),y:f.ge(e,"y")},a={x:m.q8(e,"x").domain(r.x).range(e.horizontal?n.y:n.x),y:m.q8(e,"y").domain(r.y).range(e.horizontal?n.x:n.y)},o=e.polar?e.origin||u.IW(e):void 0,l=u.Lo(e,"line");return{domain:r,data:t,scale:a,style:u.Wi(e.style,l),origin:o}}(n));var r=e,a=r.data,o=r.domain,l=r.events,s=r.groupComponent,y=r.height,h=r.horizontal,b=r.interpolation,g=r.origin,v=r.padding,O=r.polar,x=r.scale,w=r.sharedEvents,P=r.standalone,E=r.style,j=r.theme,_=r.width,T=r.labels,$=r.name,C=r.disableInlineStyles,S={parent:{style:E.parent,scale:x,data:a,height:y,width:_,name:$,domain:o,standalone:P,polar:O,origin:g,padding:v,horizontal:h},all:{data:{horizontal:h,polar:O,origin:g,scale:x,data:a,interpolation:b,groupComponent:s,style:C?{}:E.data,theme:j,disableInlineStyles:C}}};return a.reduce((function(t,n,r){var a=d.Q(e,n,r);(null!=a||T&&(l||w))&&(t[i()(n.eventKey)?r:n.eventKey]={labels:d.AM(e,r)});return t}),S)},h=n(575380),b=n(929639),g=n(50038),v=n(117497);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){e=function(e){var t=u.xs(e.ariaLabel,e),n=u.xs(e.id,e),r=u.F3(c()({fill:"none",stroke:"black"},e.style),e),a=u.xs(e.tabIndex,e);return c()({},e,{ariaLabel:t,id:n,style:r,tabIndex:a})}(e);var t=h.I(e),n=e,r=n.polar,a=n.origin,l=b.G(e),i=r&&a?"translate(".concat(a.x,", ").concat(a.y,")"):void 0,s=l(e.data);return o.cloneElement(e.pathComponent,x(x(x({},e.events),t),{},{"aria-label":e.ariaLabel,d:s,style:e.style,transform:e.transform||i,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath,tabIndex:e.tabIndex}))};P.propTypes=x(x({},g.l.primitiveProps),{},{interpolation:a().oneOfType([a().string,a().func]),openCurve:a().bool,origin:a().shape({x:a().number.isRequired,y:a().number.isRequired}),pathComponent:a().element,polar:a().bool}),P.defaultProps={pathComponent:o.createElement(v.y,null),role:"presentation",shapeRendering:"auto"};var E=n(322),j=n(228300),_=n(761027),T=n(564167),$=n(339849),C=n(844204),S=n(246522);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var a=A(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V(this,n)}}function V(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var N={width:450,height:300,padding:50,interpolation:"linear"},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(o,e);var t,n,r,a=I(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a.call(this,e)}return t=o,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=o.animationWhitelist,t=o.role,n=u.TY(this.props,N,t);if(this.shouldAnimate())return this.animateComponent(n,e);var r=this.renderContinuousData(n),a=n.standalone?this.renderContainer(n.containerComponent,r):r;return h.h(a,n)}}])&&R(t.prototype,n),r&&R(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(o.Component);M.animationWhitelist=["data","domain","height","padding","samples","style","width"],M.displayName="VictoryLine",M.role="line",M.defaultTransitions=E.sA(),M.defaultPolarTransitions=E.Jm(),M.continuous=!0,M.propTypes=D(D(D({},g.l.baseProps),g.l.dataProps),{},{interpolation:a().oneOfType([a().oneOf(["basis","bundle","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),a().func]),label:j.x9(a().string,"Use `labels` instead for individual data labels")}),M.defaultProps={containerComponent:o.createElement(_._,null),dataComponent:o.createElement(P,null),labelComponent:o.createElement(T.X,{renderInPortal:!0}),groupComponent:o.createElement($.j,null),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:C.J.grayscale},M.getDomain=f.ge,M.getData=p.Yu,M.getBaseProps=function(e){return y(e,N)},M.expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];var G=(0,S.o)(M,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);