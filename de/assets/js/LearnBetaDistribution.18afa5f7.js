(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{6372:function(t,e,a){"use strict";a.r(e);a(421),a(437),a(433),a(430),a(438),a(439);var n,r,i,o,s,l,c,d,p,u=a(407),y=a.n(u),h=a(414),x=a.n(h),f=a(416),m=a.n(f),v=a(424),b=a.n(v),g=a(418),w=a.n(g),O=a(419),P=a.n(O),k=a(417),C=a.n(k),j=a(412),A=a.n(j),F=a(0),D=(a(404),a(4095)),L=a(464),B=a(507),S=a(477),X=a(490),R=a(587),I=a(568),K=a(454),V=a(6445),W=a(4603),_=a(6464),M=a(894),E=a(6454),J=a(471),U=a.n(J),q=a(474),H=a.n(q),z=a(4832),G=a.n(z),N=a(4835),Q=a.n(N),T=a(487),Y=a(581),Z=a(518),$=a(492),tt=a(420);function et(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function at(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?et(Object(a),!0).forEach((function(e){A()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):et(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=C()(t);if(e){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return P()(this,a)}}Object(tt.a)("LearnDistribution");var rt={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},it={data:{opacity:.3,fill:"tomato"}},ot=function(t){w()(a,t);var e=nt(a);function a(t){var n;return x()(this,a),n=e.call(this,t),A()(b()(n),"handleAlphaChange",(function(t){n.setState({alpha:t})})),A()(b()(n),"handleBetaChange",(function(t){n.setState({beta:t})})),A()(b()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),A()(b()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={alpha:1,beta:1,x0:0,x1:1},n}return m()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.alpha,n=e.beta,r=e.x0,i=e.x1;return y()(F.Fragment,{},void 0,y()(T.b,{legend:"Alpha",defaultValue:a,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(t,"-alpha")),y()(T.b,{legend:"Beta",defaultValue:n,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(t,"-beta")),y()(Y.a,{legend:"x0",defaultValue:r,step:this.props.step,min:-.1,max:1.1,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?y()(Y.a,{legend:"x1",defaultValue:i,min:-.1,max:1.1,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.props.domain,e=this.props.tabs,a=this.state,u=a.alpha,h=a.beta,x=a.x0,f=a.x1,m=U()(e,"smaller")?y()(I.a,{eventKey:"smaller",title:n||(n=y()($.a,{raw:"P(X \\le x_0)"}))},void 0,y()(B.a,{},void 0,y()(S.a,{},void 0,y()(X.a,{},void 0,y()(Z.a,{},void 0,this.renderInputs("smaller"),y()($.a,{raw:"P(X \\le ".concat(H()(x,-4),") = ").concat(H()(G()(x,u,h),-4)),displayMode:!0,tag:""}))),y()(X.a,{},void 0,y()(V.a,{domain:t||{x:[-.1,1.1],y:[0,u<.75||h<.75?5:2.5]},theme:W.a.material},void 0,r||(r=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(M.a,{samples:200,interpolation:"step",y:function(t){return t.x<=x?Q()(t.x,u,h):0},style:it}),y()(E.a,{samples:200,y:function(t){return Q()(t.x,u,h)}}))),y()(X.a,{},void 0,y()(V.a,{theme:W.a.material},void 0,i||(i=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return G()(t.x,u,h)},domain:{x:[-.1,1.1],y:[0,1.1]}}),y()(E.a,{data:[{x:x,y:0},{x:x,y:G()(x,u,h)}],style:rt}),y()(E.a,{data:[{x:0,y:G()(x,u,h)},{x:x,y:G()(x,u,h)}],style:rt})))))):null,v=U()(e,"greater")?y()(I.a,{eventKey:"greater",title:o||(o=y()($.a,{raw:"P(X > x_0)"}))},void 0,y()(B.a,{},void 0,y()(S.a,{},void 0,y()(X.a,{},void 0,y()(Z.a,{},void 0,this.renderInputs("greater"),y()($.a,{raw:"P(X > ".concat(H()(x,-4),") = ").concat(H()(1-G()(x,u,h),-4)),displayMode:!0,tag:""}))),y()(X.a,{},void 0,y()(V.a,{domain:t||{x:[-.1,1.1],y:[0,u<.75||h<.75?5:2.5]},theme:W.a.material},void 0,s||(s=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(M.a,{samples:200,interpolation:"step",y:function(t){return t.x>x?Q()(t.x,u,h):0},style:it}),y()(E.a,{samples:200,y:function(t){return Q()(t.x,u,h)}}))),y()(X.a,{},void 0,y()(V.a,{theme:W.a.material,domain:{x:[-.1,1.1],y:[0,1.1]}},void 0,l||(l=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return G()(t.x,u,h)}}),y()(E.a,{data:[{x:x,y:0},{x:x,y:G()(x,u,h)}],style:rt}),y()(E.a,{data:[{x:x,y:1},{x:x,y:G()(x,u,h)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:0,y:G()(x,u,h)},{x:x,y:G()(x,u,h)}],style:rt})))))):null,b=U()(e,"range")?y()(I.a,{eventKey:"range",title:c||(c=y()($.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,y()(B.a,{},void 0,y()(S.a,{},void 0,y()(X.a,{},void 0,y()(Z.a,{},void 0,this.renderInputs("range"),f>=x?y()($.a,{raw:"P(".concat(H()(x,-4)," \\le X \\le ").concat(H()(f,-4),") = ").concat(H()(G()(f,u,h)-G()(x,u,h),-4)),displayMode:!0,tag:""}):y()(K.a,{variant:"warning"},void 0,this.props.t("lower-bound-smaller-equal-upper-bound")))),y()(X.a,{},void 0,y()(V.a,{domain:t||{x:[-.1,1.1],y:[0,u<.75||h<.75?5:2.5]},theme:W.a.material},void 0,d||(d=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(M.a,{samples:200,interpolation:"step",y:function(t){return t.x>x&&t.x<f?Q()(t.x,u,h):0},style:it}),y()(E.a,{samples:200,y:function(t){return Q()(t.x,u,h)}}))),y()(X.a,{},void 0,y()(V.a,{theme:W.a.material},void 0,p||(p=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return G()(t.x,u,h)},domain:{x:[-.1,1.1],y:[0,1.1]}}),y()(E.a,{data:[{x:f,y:G()(x,u,h)},{x:f,y:G()(f,u,h)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:x,y:G()(x,u,h)},{x:f,y:G()(x,u,h)}],style:rt})))))):null;return y()(L.a,{style:at({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,y()(L.a.Header,{as:"h3"},void 0,this.props.t("beta-distribution")),y()(L.a.Body,{},void 0,y()(R.a,{defaultActiveKey:this.props.tabs[0],id:"beta-tabs"},void 0,m,v,b)))}}]),a}(F.Component);ot.defaultProps={domain:null,step:.01,tabs:["smaller","greater","range"],style:{}},e.default=Object(D.a)("LearnDistribution")(ot)}}]);