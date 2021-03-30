(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{6383:function(t,e,a){"use strict";a.r(e);a(421),a(437),a(433),a(430),a(438),a(439);var n,i,o,r,s,d,l,c,u,p,y=a(407),f=a.n(y),x=a(414),h=a.n(x),m=a(416),v=a.n(m),g=a(424),b=a.n(g),k=a(418),w=a.n(k),P=a(419),O=a.n(P),F=a(417),C=a.n(F),D=a(412),j=a.n(D),A=a(0),L=(a(404),a(4095)),W=a(507),q=a(490),S=a(477),X=a(454),I=a(464),K=a(587),R=a(568),V=a(6445),_=a(4603),B=a(6464),M=a(6454),E=a(894),J=a(474),Q=a.n(J),T=a(3750),U=a.n(T),H=a(810),z=a.n(H),G=a(986),N=a.n(G),Y=a(581),Z=a(518),$=a(492),tt=a(420);function et(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function at(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?et(Object(a),!0).forEach((function(e){j()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):et(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=C()(t);if(e){var i=C()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return O()(this,a)}}Object(tt.a)("LearnDistribution");var it=function(t){w()(a,t);var e=nt(a);function a(t){var n;return h()(this,a),n=e.call(this,t),j()(b()(n),"handleDFChange",(function(t){n.setState({df:t})})),j()(b()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),j()(b()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),j()(b()(n),"handlePropChange",(function(t){n.setState({p:t})})),n.state={df:1,x0:-1,x1:1,p:.5},n}return v()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.df,n=e.x0,i=e.x1,o=e.p,r=this.props.t;return f()(A.Fragment,{},void 0,f()(Y.a,{legend:r("degrees-of-freedom"),defaultValue:a,min:.001,step:this.props.step,max:25,onChange:this.handleDFChange},"".concat(t,"-df")),"quantile"!==t?f()(Y.a,{legend:"x0",defaultValue:n,min:-4,max:4,step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")):f()(Y.a,{legend:"p",defaultValue:o,min:0,max:1,step:this.props.step,onChange:this.handlePropChange},"".concat(t,"-p")),"range"===t?f()(Y.a,{legend:"x1",defaultValue:i,min:-4,max:4,step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"renderQuantileTab",value:function(){var t=this.state,e=t.df,a=t.p,i=this.props.t,o=N()(a,e);return f()(W.a,{},void 0,f()(S.a,{},void 0,f()(q.a,{md:4},void 0,f()(Z.a,{},void 0,this.renderInputs("quantile"),f()($.a,{raw:"F^{-1}(p) = ".concat(Q()(o,-4))}))),f()(q.a,{md:6},void 0,f()(V.a,{domain:{x:[.001,.999],y:[N()(.001,e),N()(.999,e)]},theme:_.a.material},void 0,n||(n=f()(B.a,{dependentAxis:!0})),f()(B.a,{label:i("quantile-function"),tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),f()(M.a,{samples:200,animate:{duration:500,easing:"linear"},y:function(t){return N()(t.x,e)}}),f()(M.a,{data:[{x:a,y:0},{x:a,y:o}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),f()(M.a,{data:[{x:0,y:o},{x:a,y:o}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))}},{key:"render",value:function(){var t=this.state,e=t.df,a=t.x0,n=t.x1,y=this.props.t;return f()(I.a,{style:at({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,f()(I.a.Header,{as:"h3"},void 0,y("students-t-distribution")),f()(I.a.Body,{},void 0,f()(K.a,{defaultActiveKey:1,id:"student-tabs"},void 0,f()(R.a,{eventKey:1,title:i||(i=f()($.a,{raw:"P(X \\le x_0)"}))},void 0,f()(W.a,{},void 0,f()(S.a,{},void 0,f()(q.a,{},void 0,f()(Z.a,{},void 0,this.renderInputs("smaller"),f()($.a,{raw:"P(X \\le ".concat(Q()(a,-4),") = ").concat(Q()(z()(a,e),-4)),displayMode:!0,tag:""}))),f()(q.a,{},void 0,f()(V.a,{domain:{x:[-4,4],y:[0,U()(0,e)]},theme:_.a.material},void 0,o||(o=f()(B.a,{dependentAxis:!0})),f()(B.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),f()(E.a,{samples:100,interpolation:"step",y:function(t){return t.x<=a?U()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),f()(M.a,{animate:{duration:500,easing:"linear"},samples:200,y:function(t){return U()(t.x,e)}}))),f()(q.a,{},void 0,f()(V.a,{theme:_.a.material},void 0,r||(r=f()(B.a,{dependentAxis:!0})),f()(B.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),f()(M.a,{samples:100,y:function(t){return z()(t.x,e)},domain:{x:[-4,4],y:[0,1.1]}}),f()(M.a,{data:[{x:a,y:0},{x:a,y:z()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),f()(M.a,{data:[{x:0,y:z()(a,e)},{x:a,y:z()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),f()(R.a,{eventKey:2,title:s||(s=f()($.a,{raw:"P(X > x_0)"}))},void 0,f()(W.a,{},void 0,f()(S.a,{},void 0,f()(q.a,{},void 0,f()(Z.a,{},void 0,this.renderInputs("greater"),f()($.a,{raw:"P(X > ".concat(Q()(a,-4),") = ").concat(Q()(1-z()(a,e),-4)),displayMode:!0,tag:""}))),f()(q.a,{},void 0,f()(V.a,{domain:{x:[-4,4],y:[0,U()(0,e)]},theme:_.a.material},void 0,d||(d=f()(B.a,{dependentAxis:!0})),f()(B.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),f()(E.a,{samples:100,interpolation:"step",y:function(t){return t.x>a?U()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),f()(M.a,{animate:{duration:500,easing:"linear"},samples:200,y:function(t){return U()(t.x,e)}}))),f()(q.a,{},void 0,f()(V.a,{theme:_.a.material},void 0,l||(l=f()(B.a,{dependentAxis:!0})),f()(B.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),f()(M.a,{samples:100,y:function(t){return z()(t.x,e)},domain:{x:[-4,4],y:[0,1.1]}}),f()(M.a,{data:[{x:a,y:0},{x:a,y:z()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),f()(M.a,{data:[{x:a,y:1},{x:a,y:z()(a,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),f()(M.a,{data:[{x:0,y:z()(a,e)},{x:a,y:z()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),f()(R.a,{eventKey:3,title:c||(c=f()($.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,f()(W.a,{},void 0,f()(S.a,{},void 0,f()(q.a,{},void 0,f()(Z.a,{},void 0,this.renderInputs("range"),n>=a?f()($.a,{raw:"P( ".concat(Q()(a,-4)," \\le X \\le ").concat(Q()(n,-4),") = ").concat(Q()(z()(n,e)-z()(a,e),-4)),displayMode:!0,tag:""}):f()(X.a,{variant:"warning"},void 0,y("lower-bound-smaller-equal-upper-bound")))),f()(q.a,{},void 0,f()(V.a,{domain:{x:[-4,4],y:[0,U()(0,e)]},theme:_.a.material},void 0,u||(u=f()(B.a,{dependentAxis:!0})),f()(B.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),f()(E.a,{samples:100,interpolation:"step",y:function(t){return t.x>=a&&t.x<=n?U()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),f()(M.a,{samples:200,animate:{duration:500,easing:"linear"},y:function(t){return U()(t.x,e)}}))),f()(q.a,{},void 0,f()(V.a,{theme:_.a.material},void 0,p||(p=f()(B.a,{dependentAxis:!0})),f()(B.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),f()(M.a,{samples:200,y:function(t){return z()(t.x,e)},domain:{x:[-4,4],y:[0,1.1]}}),f()(M.a,{data:[{x:n,y:z()(a,e)},{x:n,y:z()(n,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),f()(M.a,{data:[{x:a,y:z()(a,e)},{x:n,y:z()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),this.props.quantile?f()(R.a,{eventKey:4,title:y("quantile-function")},void 0,this.renderQuantileTab()):null)))}}]),a}(A.Component);it.defaultProps={step:.01,quantile:!1,style:{}},e.default=Object(L.a)("LearnDistribution")(it)}}]);