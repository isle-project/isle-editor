(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{6377:function(t,a,e){"use strict";e.r(a);e(421),e(437),e(433),e(430),e(438),e(439);var n,s,r,i,o,l,p,d,c,u,h,y,m,x=e(407),f=e.n(x),v=e(414),b=e.n(v),g=e(416),w=e.n(g),P=e(424),C=e.n(P),O=e(418),k=e.n(O),F=e(419),j=e.n(F),A=e(417),D=e.n(A),L=e(412),B=e.n(L),S=e(0),V=(e(404),e(4095)),X=e(464),R=e(507),z=e(477),I=e(490),K=e(587),W=e(568),_=e(454),M=e(6445),E=e(4603),J=e(6464),U=e(894),q=e(6454),H=e(471),G=e.n(H),N=e(474),Q=e.n(N),T=e(1117),Y=e.n(T),Z=e(3739),$=e.n(Z),tt=e(3740),at=e.n(tt),et=e(487),nt=e(581),st=e(518),rt=e(492),it=e(420);function ot(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function lt(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?ot(Object(e),!0).forEach((function(a){B()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ot(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function pt(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=D()(t);if(a){var s=D()(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return j()(this,e)}}Object(it.a)("LearnDistribution");var dt=.999999,ct={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},ut={data:{opacity:.3,fill:"tomato"}},ht=function(t){k()(e,t);var a=pt(e);function e(t){var n;return b()(this,e),n=a.call(this,t),B()(C()(n),"handleAlphaChange",(function(t){n.setState({alpha:t})})),B()(C()(n),"handleBetaChange",(function(t){n.setState({beta:t})})),B()(C()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),B()(C()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={alpha:1,beta:1,x0:0,x1:1},n}return w()(e,[{key:"renderInputs",value:function(t){var a=this.state,e=a.alpha,o=a.beta,l=a.x0,p=a.x1,d=this.props.scaleParameterization?at()(dt,e,1/o)+1:at()(dt,e,o)+1;return f()(S.Fragment,{},void 0,this.props.scaleParameterization?f()(S.Fragment,{},void 0,f()(et.b,{legend:this.props.symbols?f()("span",{},void 0,n||(n=f()(rt.a,{raw:"k"}))," (",this.props.t("shape"),")"):this.props.t("shape"),defaultValue:e,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(t,"-alpha")),f()(et.b,{legend:this.props.symbols?f()("span",{},void 0,s||(s=f()(rt.a,{raw:"\\theta"}))," (",this.props.t("scale"),")"):this.props.t("scale"),defaultValue:o,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(t,"-beta"))):f()(S.Fragment,{},void 0,f()(et.b,{legend:this.props.symbols?f()("span",{},void 0,r||(r=f()(rt.a,{raw:"\\alpha"}))," (",this.props.t("shape"),")"):this.props.t("shape"),defaultValue:e,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(t,"-alpha")),f()(et.b,{legend:this.props.symbols?f()("span",{},void 0,i||(i=f()(rt.a,{raw:"\\beta"}))," (",this.props.t("rate"),")"):this.props.t("rate"),defaultValue:o,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(t,"-beta"))),f()(nt.a,{legend:"x0",defaultValue:l,step:this.props.step,min:-.1,max:d,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?f()(nt.a,{legend:"x1",defaultValue:p,min:-.1,max:d,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.props.domain,a=this.props.tabs,e=this.state,n=e.alpha,s=e.x0,r=e.x1,i=this.props.scaleParameterization?1/this.state.beta:this.state.beta,x=G()(a,"smaller")?f()(W.a,{eventKey:"smaller",title:o||(o=f()(rt.a,{raw:"P(X \\le x_0)"}))},void 0,f()(R.a,{},void 0,f()(z.a,{},void 0,f()(I.a,{},void 0,f()(st.a,{},void 0,this.renderInputs("smaller"),f()(rt.a,{raw:"P(X \\le ".concat(Q()(s,-4),") = ").concat(Q()(Y()(s,n,i),-4)),displayMode:!0,tag:""}))),f()(I.a,{},void 0,f()(M.a,{domain:t||{x:[-.1,at()(dt,n,i)],y:[0,n<50||i<50?2:5]},theme:E.a.material},void 0,l||(l=f()(J.a,{dependentAxis:!0})),f()(J.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),f()(U.a,{samples:200,interpolation:"step",y:function(t){return t.x<=s?$()(t.x,n,i):0},style:ut}),f()(q.a,{samples:200,y:function(t){return $()(t.x,n,i)}}))),f()(I.a,{},void 0,f()(M.a,{theme:E.a.material},void 0,p||(p=f()(J.a,{dependentAxis:!0})),f()(J.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),f()(q.a,{samples:600,y:function(t){return Y()(t.x,n,i)},domain:{x:[-.1,at()(dt,n,i)],y:[0,1.1]}}),f()(q.a,{data:[{x:s,y:0},{x:s,y:Y()(s,n,i)}],style:ct}),f()(q.a,{data:[{x:0,y:Y()(s,n,i)},{x:s,y:Y()(s,n,i)}],style:ct})))))):null,v=G()(a,"greater")?f()(W.a,{eventKey:"greater",title:d||(d=f()(rt.a,{raw:"P(X > x_0)"}))},void 0,f()(R.a,{},void 0,f()(z.a,{},void 0,f()(I.a,{},void 0,f()(st.a,{},void 0,this.renderInputs("greater"),f()(rt.a,{raw:"P(X > ".concat(Q()(s,-4),") = ").concat(Q()(1-Y()(s,n,i),-4)),displayMode:!0,tag:""}))),f()(I.a,{},void 0,f()(M.a,{domain:t||{x:[-.1,at()(dt,n,i)],y:[0,n<50||i<50?2:5]},theme:E.a.material},void 0,c||(c=f()(J.a,{dependentAxis:!0})),f()(J.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),f()(U.a,{samples:200,interpolation:"step",y:function(t){return t.x>s?$()(t.x,n,i):0},style:ut}),f()(q.a,{samples:200,y:function(t){return $()(t.x,n,i)}}))),f()(I.a,{},void 0,f()(M.a,{theme:E.a.material,domain:{x:[-.1,at()(dt,n,i)],y:[0,1.1]}},void 0,u||(u=f()(J.a,{dependentAxis:!0})),f()(J.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),f()(q.a,{samples:600,y:function(t){return Y()(t.x,n,i)}}),f()(q.a,{data:[{x:s,y:0},{x:s,y:Y()(s,n,i)}],style:ct}),f()(q.a,{data:[{x:s,y:1},{x:s,y:Y()(s,n,i)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),f()(q.a,{data:[{x:0,y:Y()(s,n,i)},{x:s,y:Y()(s,n,i)}],style:ct})))))):null,b=G()(a,"range")?f()(W.a,{eventKey:"range",title:h||(h=f()(rt.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,f()(R.a,{},void 0,f()(z.a,{},void 0,f()(I.a,{},void 0,f()(st.a,{},void 0,this.renderInputs("range"),r>=s?f()(rt.a,{raw:"P(".concat(Q()(s,-4)," \\le X \\le ").concat(Q()(r,-4),") = ").concat(Q()(Y()(r,n,i)-Y()(s,n,i),-4)),displayMode:!0,tag:""}):f()(_.a,{variant:"warning"},void 0,this.props.t("lower-bound-smaller-equal-upper-bound")))),f()(I.a,{},void 0,f()(M.a,{domain:t||{x:[-.1,at()(dt,n,i)],y:[0,n<50||i<50?2:5]},theme:E.a.material},void 0,y||(y=f()(J.a,{dependentAxis:!0})),f()(J.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),f()(U.a,{samples:200,interpolation:"step",y:function(t){return t.x>s&&t.x<r?$()(t.x,n,i):0},style:ut}),f()(q.a,{samples:200,y:function(t){return $()(t.x,n,i)}}))),f()(I.a,{},void 0,f()(M.a,{theme:E.a.material},void 0,m||(m=f()(J.a,{dependentAxis:!0})),f()(J.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),f()(q.a,{samples:600,y:function(t){return Y()(t.x,n,i)},domain:{x:[-.1,at()(dt,n,i)],y:[0,1.1]}}),f()(q.a,{data:[{x:r,y:Y()(s,n,i)},{x:r,y:Y()(r,n,i)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),f()(q.a,{data:[{x:s,y:Y()(s,n,i)},{x:r,y:Y()(s,n,i)}],style:ct})))))):null;return f()(X.a,{style:lt({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,f()(X.a.Header,{as:"h3"},void 0,this.props.t("gamma-distribution")),f()(X.a.Body,{},void 0,f()(K.a,{defaultActiveKey:this.props.tabs[0],id:"beta-tabs"},void 0,x,v,b)))}}]),e}(S.Component);ht.defaultProps={domain:null,scaleParameterization:!1,step:.01,symbols:!0,tabs:["smaller","greater","range"],style:{}},a.default=Object(V.a)("LearnDistribution")(ht)}}]);