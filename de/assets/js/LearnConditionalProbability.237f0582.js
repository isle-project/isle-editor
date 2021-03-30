/*! For license information please see LearnConditionalProbability.237f0582.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{5196:function(t,n,e){"use strict";var a=e(5197);t.exports=a},5197:function(t,n,e){"use strict";var a=e(5198),o=e(415),i=e(427),c=e(647),r=e(579),s=c*r;t.exports=function(t,n,e){var p=a(t,n,e||"max-abs");return o(p)||p===i?p:p>=s?c:p/r}},5198:function(t,n,e){"use strict";var a=e(5199);t.exports=a},5199:function(t,n,e){"use strict";var a=e(476),o=e(415),i=e(427),c=e(457),r=e(431),s=e(5200);t.exports=function(t,n,e){var p,d;if(o(t)||o(n))return NaN;if(t===i||t===c||n===i||n===c)return t===n?NaN:i;if(t===n)return 0;if(a(e))p=e;else if(void 0===e&&(e="max-abs"),void 0===(p=s[e]))throw new Error("invalid argument. Unrecognized/unsupported scale function. Value: `"+e+"`.");return 0===(d=p(t,n))?NaN:r((t-n)/d)}},5200:function(t,n,e){"use strict";var a={"max-abs":e(5201),max:e(5202),"min-abs":e(5203),min:e(5204),"mean-abs":e(5205),mean:e(5206),x:e(5207),y:e(5208)};t.exports=a},5201:function(t,n,e){"use strict";var a=e(431);t.exports=function(t,n){return(t=a(t))<(n=a(n))?n:t}},5202:function(t,n,e){"use strict";t.exports=function(t,n){return t<n?n:t}},5203:function(t,n,e){"use strict";var a=e(431);t.exports=function(t,n){return(t=a(t))>(n=a(n))?n:t}},5204:function(t,n,e){"use strict";t.exports=function(t,n){return t>n?n:t}},5205:function(t,n,e){"use strict";var a=e(431);t.exports=function(t,n){return(t=a(t))+((n=a(n))-t)/2}},5206:function(t,n,e){"use strict";t.exports=function(t,n){return t+(n-t)/2}},5207:function(t,n,e){"use strict";t.exports=function(t){return t}},5208:function(t,n,e){"use strict";t.exports=function(t,n){return n}},6459:function(t,n,e){"use strict";e.r(n);e(421);var a,o,i,c,r,s,p,d,v,u,B,A=e(407),h=e.n(A),l=e(414),f=e.n(l),x=e(416),g=e.n(x),b=e(424),m=e.n(b),P=e(418),w=e.n(P),y=e(419),N=e.n(y),C=e(417),V=e.n(C),S=e(412),k=e.n(S),R=e(0),O=(e(404),e(4096)),q=e(4095),z=e(490),F=e(507),T=e(464),j=e(477),J=e(6445),K=e(4603),L=e(6464),E=e(6328),U=e(6454),W=e(474),_=e.n(W),D=e(481),G=e.n(D),H=e(502),I=e.n(H),M=e(5196),Q=e.n(M),X=e(623),Y=e(487),Z=e(745),$=e(492),tt=e(420),nt=function(t,n){var e=t.A,c=t.B;return h()("table",{className:"table-bordered"},void 0,h()("tbody",{},void 0,h()("tr",{},void 0,a||(a=h()("th",{})),h()("th",{},void 0," ",c," "),h()("th",{},void 0,n("not")," ",c," ")),h()("tr",{},void 0,h()("th",{},void 0," ",e," "),h()("td",{},void 0,h()($.a,{raw:"P(\\text{".concat(e,"} \\cap \\text{").concat(c,"} )")})),h()("td",{},void 0,h()($.a,{raw:"P(\\text{".concat(e,"} \\cap \\text{").concat(c,"}^C )")})),h()("td",{},void 0,h()($.a,{raw:"P(\\text{".concat(e,"})")}))),h()("tr",{},void 0,h()("th",{},void 0,n("not")," ",e),h()("td",{},void 0,h()($.a,{raw:"P(\\text{".concat(e,"}^C \\cap \\text{").concat(c,"} )")})),h()("td",{},void 0,h()($.a,{raw:"P(\\text{".concat(e,"} \\cap \\text{").concat(c,"} )")})),h()("td",{},void 0,h()($.a,{raw:"P(\\text{".concat(e,"}^c)")}))),h()("tr",{},void 0,o||(o=h()("th",{})),h()("td",{},void 0,h()($.a,{raw:"P( \\text{".concat(c,"} )")})),h()("td",{},void 0,h()($.a,{raw:"P(\\text{".concat(c,"}^c)")})),i||(i=h()("td",{},void 0,h()($.a,{raw:"P(\\Omega)"}))))))};function et(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=V()(t);if(n){var o=V()(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return N()(this,e)}}Object(tt.a)("LearnConditionalProbability");var at=function(t){w()(e,t);var n=et(e);function e(t){var a;return f()(this,e),a=n.call(this,t),k()(m()(a),"changeProbA",(function(t){var n=a.state.pB;a.setState({pA:t,pAB:t*n,pAnotB:t*(1-n),pnotAB:(1-t)*n,pnotAnotB:(1-t)*(1-n),pAgivenB:t,pAgivenNotB:t,independent:!0})})),k()(m()(a),"changeProbB",(function(t){var n=a.state.pA;a.setState({pB:t,pAB:n*t,pAnotB:n*(1-t),pnotAB:(1-n)*t,pnotAnotB:(1-n)*(1-t),pAgivenB:n,pAgivenNotB:n,independent:!0})})),k()(m()(a),"changeProbAB",(function(t){var n=a.state.pA-t,e=a.state.pB-t,o=t/a.state.pB,i=n/(1-a.state.pB);a.setState({pAB:t,pAnotB:n,pnotAB:e,pnotAnotB:1-n-e-t,pAgivenB:o,pAgivenNotB:i,independent:o===i&&o===a.state.pA})})),k()(m()(a),"changeProbAnotB",(function(t){var n=a.state.pA-t,e=1-a.state.pB-t,o=n/a.state.pB,i=t/(1-a.state.pB);a.setState({pAnotB:t,pAB:n,pnotAnotB:e,pnotAB:1-n-e-t,pAgivenB:o,pAgivenNotB:i,independent:o===i&&o===a.state.pA})})),k()(m()(a),"changeProbNotAB",(function(t){var n=1-a.state.pA-t,e=a.state.pB-t,o=e/a.state.pB,i=(1-e-n-t)/(1-a.state.pB);a.setState({pnotAB:t,pnotAnotB:n,pAB:e,pAnotB:1-e-n-t,pAgivenB:o,pAgivenNotB:i,independent:o===i&&o===a.state.pA})})),k()(m()(a),"changeProbNotAnotB",(function(t){var n=1-a.state.pA-t,e=1-a.state.pB-t,o=(1-n-e-t)/a.state.pB,i=e/(1-a.state.pB);a.setState({pnotAnotB:t,pnotAB:n,pAnotB:e,pAB:1-n-e-t,pAgivenB:o,pAgivenNotB:i,independent:o===i&&o===a.state.pA})})),k()(m()(a),"changeProbAgivenB",(function(t){var n=t,e=n*a.state.pB,o=a.state.pA-e,i=a.state.pB-e,c=1-e-o-i,r=(a.state.pA-n*a.state.pB)/(1-a.state.pB),s=Q()(n,r)<2&&Q()(r,a.state.pA)<2;a.setState({pAgivenB:n,pAB:e,pAnotB:o,pnotAB:i,pnotAnotB:c,pAgivenNotB:r,independent:s})})),k()(m()(a),"changeProbAgivenNotB",(function(t){var n=t,e=1-a.state.pB,o=n*e,i=e-o,c=a.state.pA-o,r=a.state.pB-c,s=(a.state.pA-n*e)/a.state.pB,p=Q()(n,s)<2&&Q()(s,a.state.pA)<2;a.setState({pAgivenNotB:n,pAB:c,pAnotB:o,pnotAB:r,pnotAnotB:i,pAgivenB:s,independent:p})})),a.state={A:t.A,B:t.B,pA:.5,pB:.5,pAB:.25,pAnotB:.25,pnotAB:.25,pnotAnotB:.25,pAgivenNotB:.5,pAgivenB:.5,independent:!0},a}return g()(e,[{key:"renderTable",value:function(){var t=this.state,n=t.A,e=t.B,a=t.pA,o=t.pB,i=t.pAB,p=t.pAnotB;return h()("table",{className:"table-bordered"},void 0,h()("tbody",{},void 0,h()("tr",{},void 0,c||(c=h()("th",{})),h()("th",{},void 0,e),h()("th",{},void 0,this.props.t("not")," ",e)),h()("tr",{},void 0,h()("th",{},void 0,n),h()("td",{},void 0,h()(Y.b,{inline:!0,min:_()(G()(a-(1-o),0),-10),max:_()(I()(a,o),-10),step:.01,onChange:this.changeProbAB,defaultValue:i})),h()("td",{},void 0,h()(Y.b,{inline:!0,min:_()(G()(a-o,0),-10),max:_()(I()(a,1-o),-10),step:.01,onChange:this.changeProbAnotB,defaultValue:p})),h()("td",{},void 0,a)),h()("tr",{},void 0,h()("th",{},void 0,this.props.t("not")," ",n),h()("td",{},void 0,h()(Y.b,{inline:!0,min:_()(G()(o-I()(a,o),0),-10),max:_()(I()(1-a,o),-10),step:.01,onChange:this.changeProbNotAB,defaultValue:this.state.pnotAB})),h()("td",{},void 0,h()(Y.b,{inline:!0,min:_()(G()(1-a-o,0),-10),max:_()(I()(1-a,1-o),-10),step:.01,onChange:this.changeProbNotAnotB,defaultValue:this.state.pnotAnotB})),h()("td",{},void 0,_()(1-a,-3))),h()("tr",{},void 0,r||(r=h()("th",{})),h()("td",{},void 0,o),h()("td",{},void 0,_()(1-o,-3)),s||(s=h()("td",{},void 0,"1.0")))))}},{key:"render",value:function(){var t=this,n=this.state,e=n.A,a=n.B,o=n.pA,i=n.pB,c=this.props.t,r=[{x:"P(".concat(e,"|").concat(a,")"),y:100*this.state.pAgivenB},{x:"P(".concat(e,"|not ").concat(a,")"),y:100*this.state.pAgivenNotB}],s=[{x:"P(".concat(e,"|").concat(a,")"),y:100*this.state.pAgivenB},{x:"P(".concat(e,"|not ").concat(a,")"),y:100*this.state.pAgivenNotB}];return h()(T.a,{body:!0},void 0,h()("p",{},void 0,c("consider-events")," ",h()(Z.a,{inline:!0,defaultValue:e,onChange:function(n){return t.setState({A:n})}})," ",c("and")," ",h()(Z.a,{inline:!0,defaultValue:a,onChange:function(n){return t.setState({B:n})}}),". ",c("let")," ",h()($.a,{raw:"P(\\text{".concat(e,"}) = ")}),h()(Y.b,{min:0,max:1,step:.01,defaultValue:.5,inline:!0,onChange:this.changeProbA})," ",c("and")," ",h()($.a,{raw:"P(\\text{".concat(a,"}) = ")}),h()(Y.b,{min:0,max:1,step:.01,defaultValue:.5,inline:!0,onChange:this.changeProbB}),". ",c("then-we-have")," ",h()($.a,{raw:"P(\\text{".concat(e,"}^C) = ").concat(_()(1-o,-4))})," ",c("and")," ",h()($.a,{raw:"P(\\text{".concat(a,"}^C) = ").concat(_()(1-i,-4))}),". ",c("these-form-marginals")),h()(F.a,{},void 0,h()(j.a,{},void 0,h()(z.a,{sm:6},void 0,h()("p",{},void 0,c("inner-cells-equal")," ",h()($.a,{raw:"P(\\text{".concat(e,"} \\cap \\text{").concat(a,"} ) = P(\\text{").concat(e,"}) \\cdot P(\\text{").concat(a,"}) = ").concat(_()(o*i,-4))}),". "),this.renderTable(),p||(p=h()("br",{})),nt({A:e,B:a},c),d||(d=h()("br",{})),h()(j.a,{},void 0,h()("span",{},void 0,c("choose")),h()(Y.b,{legend:h()($.a,{raw:"P(\\text{".concat(e,"} \\mid \\text{").concat(a,")}")}),min:G()((o-1+i)/i,0),max:I()(o/i,1),step:.001,onChange:this.changeProbAgivenB,defaultValue:this.state.pAgivenB,inline:!0}),h()("span",{},void 0,c("and")),h()(Y.b,{legend:h()($.a,{raw:"P( \\text{".concat(e,"} \\mid \\text{ ").concat(a," }^C)")}),min:G()((o-i)/(1-i),0),max:I()(o/(1-i),1),step:.001,onChange:this.changeProbAgivenNotB,defaultValue:this.state.pAgivenNotB,inline:!0}))),h()(z.a,{sm:5},void 0,h()("p",{},void 0,c("conditional-probabilities")),0===i||0===o?h()(T.a,{},void 0,0===i?h()("span",{},void 0,c("conditional-probability-undefined")," ",h()($.a,{raw:"P( \\text{".concat(a,"}) = 0")})):h()(O.a,{i18nKey:"must-have-nonzero-probability"},void 0,"When ",h()($.a,{raw:"P( ".concat(e,") = 0")}),", we must have ",h()($.a,{raw:"P( \\text{".concat(e,"} \\mid \\text{").concat(a,"} ) = P( \\text{").concat(e,"} \\mid \\text{").concat(a,"}^C ) = 0")})," in case B has non-zero probability.")):h()(F.a,{},void 0,h()(j.a,{},void 0,h()(z.a,{md:12},void 0,h()(J.a,{theme:K.a.material,domainPadding:{x:50,y:[10,20]},height:350},void 0,h()(L.a,{dependentAxis:!0,tickFormat:function(t){return t/100}}),v||(v=h()(L.a,{})),h()(E.a,{data:r,domain:{y:[0,100]},x:"x",y:"y",labels:function(t){return _()(t.y/100,-3)}}),this.state.independent?h()(U.a,{data:s}):null))),h()(j.a,{},void 0,this.state.independent?h()(R.Fragment,{},void 0,h()("p",{},void 0,c("events-independent")),h()($.a,{raw:"P( \\text{".concat(e,"} \\mid \\text{ ").concat(a," } ) = P( \\text{").concat(e,"} \\mid \\text{ ").concat(a," }^C )")})):h()(R.Fragment,{},void 0,u||(u=h()("p",{},void 0,h()(O.a,{i18nKey:"events-not-independent"},void 0,"The events are ",h()("b",{},void 0,"not")," independent because"))),h()($.a,{raw:0===this.state.pAgivenB&&0===this.state.pAgivenNotB?"P( \\text{ ".concat(e," } \\mid \\text{ ").concat(a," } ) = P( \\text{").concat(e,"} \\mid \\text{ ").concat(a," }^C \\neq P( \\text{").concat(e,"})"):"P( \\text{ ".concat(e," } \\mid \\text{ ").concat(a," } ) \\neq P( \\text{").concat(e,"} \\mid \\text{ ").concat(a," }^C )")}))))),B||(B=h()(z.a,{sm:"1"},void 0,h()(X.a,{id:"independence_applet",vertical:!0}))))))}}]),e}(R.Component);at.defaultProps={A:"A",B:"B"};n.default=Object(q.a)("LearnConditionalProbability")(at)}}]);