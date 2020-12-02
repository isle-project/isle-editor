/*! For license information please see dll.LearnMeanTest.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[73],{866:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a.n(n),r=a(13),c=a.n(r),o=a(10),s=a.n(o),u=a(15),i=a.n(u),m=a(16),p=a.n(m),f=a(8),d=a.n(f),y=a(7),h=a.n(y),g=a(0),b=a.n(g),E=a(1),S=a.n(E),w=a(983),T=a(961),v=a(68),x=a(91),P=a(87),D=a(815),O=a(36),_=a.n(O),k=a(105),V=a.n(k),C=a(362),Z=a.n(C),z=a(209),j=a.n(z),H=a(1081),G=a.n(H),M=a(1099),R=a.n(M),A=a(1062),F=a.n(A),q=a(1874),B=a.n(q),W=a(1287),J=a.n(W),L=a(144),N=a(207),U=a(205),I=a(392),K=a(365);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var l=d()(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return p()(this,a)}}var $={data:{fill:"tomato",stroke:"tomato",opacity:.3}},ee=_()("isle:learn:hypothesis-testing-mean"),te={n:{tooltip:"Sample Size"},s:{tooltip:"Standard Deviation"},"μ":{tooltip:"True mean"},x:{tooltip:"Sample Mean"},z:{tooltip:"Test Statistic"},t:{tooltip:"Test Statistic"}},ae=function(e){i()(a,e);var t=Y(a);function a(e){var n;return l()(this,a),n=t.call(this,e),h()(s()(n),"onGenerate",(function(){ee("Should generate new values...");var e,t,a=n.state,l=a.mu0,r=a.xbar,c=a.xbar2,o=a.sigma,s=a.sigma2,u=a.n,i=a.n2,m=a.samples,p=a.selectedTest;"Z-Test"===p?(t=F.a.factory(0,1),e=R.a.factory(0,1)):"Two-Sample"===m?(t=J.a.factory(u+i-2),e=B.a.factory(u+i-2)):(t=J.a.factory(u-1),e=B.a.factory(u-1));var f,d,y,h,g=G()(-3.5,3.5,300);g=g.map((function(t){return{x:t,y:e(t)}})),f="Two-Sample"===m?j()((r-c-l)/Z()(o*o/u+s*s/i),-3):j()((r-l)/(o/Z()(u)),-3);var b="Z-Test"===p?"Z":"T";switch(n.state.type){case 2:d=G()(-3,f,200).map((function(t){return{x:t,y:e(t)}})),h="P( ".concat(b," < ").concat(f,") = ").concat(j()(t(f),-3));break;case 1:d=G()(f,3,200).map((function(t){return{x:t,y:e(t)}})),h="P( ".concat(b," > ").concat(f,") = ").concat(j()(1-t(f),-3));break;case 0:d=G()(V()(f),3,200).map((function(t){return{x:t,y:e(t)}})),y=G()(-3,-V()(f),200).map((function(t){return{x:t,y:e(t)}})),h="P( |".concat(b,"| > ").concat(V()(f),") = ").concat(j()(1-t(V()(f))+t(-V()(f)),-3))}n.setState({n:u,mu0:l,sigma:o,sigma2:s,pdfData:g,xbar:r,xbar2:c,zStat:f,areaData:d,areaData2:y,probFormula:h})})),h()(s()(n),"onDirectionChange",(function(e){var t,a,l,r,c,o=n.state,s=o.zStat,u=o.selectedTest,i=o.samples,m=o.n,p=o.n2;switch("Z-Test"===u?(c=F.a.factory(0,1),r=R.a.factory(0,1)):"Two-Sample"===i?(c=J.a.factory(m+p-2),r=B.a.factory(m+p-2)):(c=J.a.factory(m-1),r=B.a.factory(m-1)),e){case 0:t=G()(V()(s),3,200).map((function(e){return{x:e,y:r(e)}})),a=G()(-3,-V()(s),200).map((function(e){return{x:e,y:r(e)}})),l="P( |Z| > ".concat(V()(s),") = ").concat(j()(1-c(V()(s))+c(-V()(s)),-3));break;case 1:t=G()(s,3,200).map((function(e){return{x:e,y:r(e)}})),l="P( Z > ".concat(s,") = ").concat(j()(1-c(s),-3));break;case 2:t=G()(-3,s,200).map((function(e){return{x:e,y:r(e)}})),l="P( Z < ".concat(s,") = ").concat(j()(c(s),-3))}n.setState({type:e,probFormula:l,areaData:t,areaData2:a})})),n.state={n:5,n2:5,mu0:0,sigma:1,sigma2:1,pdfData:null,xbar:0,xbar2:0,zStat:0,areaData:null,areaData2:null,probFormula:"",type:0,samples:e.types[0],selectedTest:e.tests[0]},n}return c()(a,[{key:"componentDidMount",value:function(){this.onGenerate()}},{key:"renderParametersPanel",value:function(){var e=this,t=this.state,a=t.mu0,n=t.xbar,l=t.xbar2,r=t.sigma,c=t.sigma2,o=t.n,s=t.n2,u=t.samples,i=t.selectedTest,m="Z-Test"===i?"z":"t",p=b.a.createElement("div",null,"Two-Sample"===u?b.a.createElement(x.default,{variant:"secondary"},"First Sample"):null,b.a.createElement(N.default,{legend:"Sample mean",defaultValue:n,step:"any",onChange:function(t){e.setState({xbar:t},e.onGenerate)}}),b.a.createElement(N.default,{legend:"Z-Test"===i?b.a.createElement("span",null,"Sigma ",b.a.createElement(K.default,{raw:"\\left( \\sigma \\right)"})):"Sample standard deviation",defaultValue:r,min:.1,step:"any",onChange:function(t){e.setState({sigma:t},e.onGenerate)}}),b.a.createElement(N.default,{legend:"Sample size",defaultValue:o,step:1,min:1,onChange:function(t){e.setState({n:t},e.onGenerate)}})),f=b.a.createElement("div",null,"Two-Sample"===u?b.a.createElement(x.default,{variant:"secondary"},"Second Sample"):null,b.a.createElement(N.default,{legend:"Sample mean",defaultValue:l,step:"any",onChange:function(t){e.setState({xbar2:t},e.onGenerate)}}),b.a.createElement(N.default,{legend:"Z-Test"===i?b.a.createElement("span",null,"Sigma ",b.a.createElement(K.default,{raw:"\\left( \\sigma \\right)"})):"Sample standard deviation",defaultValue:c,min:.1,step:"any",onChange:function(t){e.setState({sigma2:t},e.onGenerate)}}),b.a.createElement(N.default,{legend:"Sample size",defaultValue:s,step:1,min:1,onChange:function(t){e.setState({n2:t},e.onGenerate)}})),d="Two-Sample"===u?"\\mu_1 - \\mu_2":"\\mu",y=this.props.nullHypothesisAsValue,h="Z-Test"===i?"\\sigma":"s";return b.a.createElement(P.default,{maxWidth:1600},b.a.createElement(P.default.Header,{as:"h4"},"Parameters"),b.a.createElement(P.default.Body,null,b.a.createElement(P.default,{body:!0,className:"bg-light"},b.a.createElement(U.default,{options:this.props.types,defaultValue:u,onChange:function(t){e.setState({samples:t},e.onGenerate)}}),this.props.tests.length>1?b.a.createElement(U.default,{options:this.props.tests,defaultValue:this.props.tests[0],onChange:function(t){e.setState({selectedTest:t},e.onGenerate)}}):null,b.a.createElement(N.default,{legend:"Hypothesized ".concat("Two-Sample"===u?"difference":"mean"," (null hypothesis)"),defaultValue:a,step:"any",onChange:function(t){e.setState({mu0:t},e.onGenerate)}})),b.a.createElement("p",null,"Let's assume that we have observed data with the following characteristics"),b.a.createElement(P.default,{body:!0,className:"bg-light"},p,"Two-Sample"===u?f:null),b.a.createElement("p",null,"We conduct the following test (click on the hypotheses below to switch between the one-sided variants and the two-sided test):"),b.a.createElement(I.default,{onChange:this.onDirectionChange,style:{width:"100%"}},b.a.createElement(K.default,{displayMode:!0,tag:"",raw:"H_0: ".concat(d," = ").concat(a," \\; vs. \\; H_1: ").concat(d," \\ne ").concat(a)}),b.a.createElement(K.default,{displayMode:!0,tag:"",raw:"H_0: ".concat(d," ").concat(y?"=":"\\le"," ").concat(a," \\; vs. \\; H_1: ").concat(d," > ").concat(a)}),b.a.createElement(K.default,{displayMode:!0,tag:"",raw:"H_0: ".concat(d," ").concat(y?"=":"\\ge"," ").concat(a," \\; vs. \\; H_1: ").concat(d," < ").concat(a)})),b.a.createElement("p",null,"We calculate the following test statistic:"),"Two-Sample"===u?b.a.createElement(K.default,{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"".concat(m,"  = \\frac{(\\bar x_1 - \\bar x_2) - (\\mu_1 - \\mu_2)}{\\sqrt{\\tfrac{").concat(h,"_1^2}{n_1}+\\tfrac{").concat(h,"_2^2}{n_2}}}"),elems:te}):b.a.createElement(K.default,{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"".concat(m," = \\frac{\\bar x - \\mu}{").concat(h," / \\sqrt{n}}"),elems:te})))}},{key:"renderResultPanel",value:function(){var e=this.state,t=e.mu0,a=e.xbar,n=e.xbar2,l=e.sigma,r=e.sigma2,c=e.n,o=e.n2,s=e.samples,u=e.zStat,i="Z-Test"===e.selectedTest?"z":"t";return b.a.createElement(P.default,null,b.a.createElement(P.default.Header,{as:"h4"},"Test Result"),b.a.createElement(P.default.Body,null,b.a.createElement("p",null,"Plugging in our values, we have:"),"Two-Sample"===s?b.a.createElement(K.default,{tag:"",displayMode:!0,raw:"".concat(i," = \\frac{").concat(j()(a-n,-3)," - ").concat(t,"}{\\sqrt{").concat(j()(l*l/c+r*r/o,-3),"}} = ").concat(u)}):b.a.createElement(K.default,{tag:"",displayMode:!0,raw:"".concat(i," = \\frac{").concat(a," - ").concat(t,"}{").concat(l," / \\sqrt{").concat(c,"}} = ").concat(u)}),b.a.createElement("p",null,"Under the null hypothesis, we calculate the p-value:"),b.a.createElement(K.default,{raw:this.state.probFormula}),b.a.createElement(D.VictoryChart,{domain:{x:[-3,3]}},b.a.createElement(D.VictoryLine,{data:this.state.pdfData}),b.a.createElement(D.VictoryArea,{data:this.state.areaData,style:$}),this.state.areaData2?b.a.createElement(D.VictoryArea,{data:this.state.areaData2,style:$}):null)))}},{key:"render",value:function(){return b.a.createElement(w.default,{style:X({paddingTop:20,paddingBottom:20},this.props.style)},b.a.createElement(T.default,null,b.a.createElement(v.default,{md:6},this.renderParametersPanel()),b.a.createElement(v.default,{md:6},this.renderResultPanel(),b.a.createElement("br",null),this.props.feedback?b.a.createElement(L.default,{id:"hypothesisTestingMean"}):null)))}}]),a}(g.Component);ae.defaultProps={types:["One-Sample","Two-Sample"],tests:["Z-Test","T-Test"],nullHypothesisAsValue:!1,feedback:!1,style:{}},ae.propTypes={types:S.a.arrayOf(S.a.string),tests:S.a.arrayOf(S.a.oneOf(["Z-Test","T-Test"])),nullHypothesisAsValue:S.a.bool,feedback:S.a.bool,style:S.a.object},t.default=ae}}]);