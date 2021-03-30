(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{6375:function(t,e,a){"use strict";a.r(e);a(421),a(437),a(433),a(430),a(438),a(439);var n,i,o,r,s,l,d,c,p,u=a(407),y=a.n(u),x=a(414),f=a.n(x),h=a(416),v=a.n(h),m=a(424),b=a.n(m),g=a(418),k=a.n(g),w=a(419),O=a.n(w),P=a(417),C=a.n(P),F=a(412),D=a.n(F),j=a(0),R=(a(404),a(4095)),A=a(454),L=a(507),W=a(477),X=a(490),S=a(464),I=a(587),K=a(568),_=a(6445),B=a(4603),M=a(6464),V=a(894),E=a(6454),J=a(474),U=a.n(J),q=a(1394),H=a.n(q),z=a(2744),G=a.n(z),N=a(3743),Q=a.n(N),T=a(581),Y=a(518),Z=a(492),$=a(420);function tt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function et(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(a),!0).forEach((function(e){D()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):tt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function at(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=C()(t);if(e){var i=C()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return O()(this,a)}}Object($.a)("LearnDistribution");var nt=.999999,it=function(t){k()(a,t);var e=at(a);function a(t){var n;return f()(this,a),n=e.call(this,t),D()(b()(n),"handleRateChange",(function(t){n.setState({rate:t})})),D()(b()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),D()(b()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={rate:1,x0:0,x1:1},n}return v()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.rate,n=e.x0,i=e.x1,o=this.props.t;return y()(j.Fragment,{},void 0,y()(T.a,{legend:o("rate"),defaultValue:a,min:this.props.minRate,step:this.props.step,max:this.props.maxRate,onChange:this.handleRateChange},"".concat(t,"-rate")),y()(T.a,{legend:"x0",defaultValue:n,min:0,max:Q()(nt,a),step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?y()(T.a,{legend:"x1",defaultValue:i,min:0,max:Q()(nt,a),step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this.state,e=t.rate,a=t.x0,u=t.x1,x=this.props.t;return y()(S.a,{style:et({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,y()(S.a.Header,{as:"h3"},void 0,x("exponential-distribution")),y()(S.a.Body,{},void 0,y()(I.a,{defaultActiveKey:1,id:"exponential-tabs"},void 0,y()(K.a,{eventKey:1,title:n||(n=y()(Z.a,{raw:"P(X \\le x_0)"}))},void 0,y()(L.a,{},void 0,y()(W.a,{},void 0,y()(X.a,{},void 0,y()(Y.a,{},void 0,this.renderInputs("smaller"),y()(Z.a,{raw:"P(X \\le ".concat(U()(a,-4),") = ").concat(U()(G()(a,e),-4)),displayMode:!0}))),y()(X.a,{},void 0,y()(_.a,{domain:{x:[0,Q()(nt,e)]},theme:B.a.material},void 0,i||(i=y()(M.a,{dependentAxis:!0})),y()(M.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(V.a,{samples:200,interpolation:"step",y:function(t){return t.x<=a?H()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),y()(E.a,{y:function(t){return H()(t.x,e)}}))),this.props.hideCDF?null:y()(X.a,{},void 0,y()(_.a,{theme:B.a.material},void 0,o||(o=y()(M.a,{dependentAxis:!0})),y()(M.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return G()(t.x,e)},domain:{x:[0,Q()(nt,e)],y:[0,1.1]}}),y()(E.a,{data:[{x:a,y:0},{x:a,y:G()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:0,y:G()(a,e)},{x:a,y:G()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),y()(K.a,{eventKey:2,title:r||(r=y()(Z.a,{raw:"P(X > x_0)"}))},void 0,y()(L.a,{},void 0,y()(W.a,{},void 0,y()(X.a,{},void 0,y()(Y.a,{},void 0,this.renderInputs("greater"),y()(Z.a,{raw:"P(X > ".concat(U()(a,-4)," ) = ").concat(U()(1-G()(a,e),-4)),displayMode:!0}))),y()(X.a,{},void 0,y()(_.a,{domain:{x:[0,Q()(nt,e)]},theme:B.a.material},void 0,s||(s=y()(M.a,{dependentAxis:!0})),y()(M.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(V.a,{samples:200,interpolation:"step",y:function(t){return t.x>a?H()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),y()(E.a,{y:function(t){return H()(t.x,e)}}))),this.props.hideCDF?null:y()(X.a,{},void 0,y()(_.a,{theme:B.a.material},void 0,l||(l=y()(M.a,{dependentAxis:!0})),y()(M.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return G()(t.x,e)},domain:{x:[0,Q()(nt,e)],y:[0,1.1]}}),y()(E.a,{data:[{x:a,y:0},{x:a,y:G()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:a,y:1},{x:a,y:G()(a,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:0,y:G()(a,e)},{x:a,y:G()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),y()(K.a,{eventKey:3,title:d||(d=y()(Z.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,y()(L.a,{},void 0,y()(W.a,{},void 0,y()(X.a,{},void 0,y()(Y.a,{},void 0,this.renderInputs("range"),u>=a?y()(Z.a,{raw:"P( ".concat(U()(a,-4)," \\le X \\le ").concat(U()(u,-4)," ) = ").concat(U()(G()(u,e)-G()(a,e),-4)),displayMode:!0}):y()(A.a,{variant:"warning"},void 0,x("lower-bound-smaller-equal-upper-bound")))),y()(X.a,{},void 0,y()(_.a,{domain:{x:[0,Q()(nt,e)]},theme:B.a.material},void 0,c||(c=y()(M.a,{dependentAxis:!0})),y()(M.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(V.a,{samples:200,interpolation:"step",y:function(t){return t.x>=a&&t.x<=u?H()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),y()(E.a,{y:function(t){return H()(t.x,e)}}))),this.props.hideCDF?null:y()(X.a,{},void 0,y()(_.a,{theme:B.a.material},void 0,p||(p=y()(M.a,{dependentAxis:!0})),y()(M.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return G()(t.x,e)},domain:{x:[0,Q()(nt,e)],y:[0,1.1]}}),y()(E.a,{data:[{x:u,y:G()(a,e)},{x:u,y:G()(u,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:a,y:G()(a,e)},{x:u,y:G()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))))}}]),a}(j.Component);it.defaultProps={hideCDF:!1,maxRate:10,minRate:.001,step:.01,style:{}},e.default=Object(R.a)("LearnDistribution")(it)}}]);