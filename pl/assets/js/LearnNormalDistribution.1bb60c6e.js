(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{6381:function(t,e,a){"use strict";a.r(e);a(421),a(437),a(433),a(430),a(438),a(439);var n,i,r,o,s,l,d,c,p,u=a(407),y=a.n(u),m=a(414),x=a.n(m),h=a(416),f=a.n(h),v=a(424),g=a.n(v),b=a(418),w=a.n(b),D=a(419),C=a.n(D),O=a(417),P=a.n(O),k=a(412),F=a.n(k),j=a(0),S=(a(404),a(4095)),A=a(464),L=a(507),X=a(477),M=a(490),R=a(587),I=a(568),K=a(454),V=a(6445),W=a(4603),_=a(6464),B=a(894),E=a(6454),J=a(471),U=a.n(J),q=a(481),H=a.n(q),z=a(474),G=a.n(z),N=a(909),Q=a.n(N),T=a(683),Y=a.n(T),Z=a(487),$=a(581),tt=a(518),et=a(492),at=a(420);function nt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function it(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(a),!0).forEach((function(e){F()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):nt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=P()(t);if(e){var i=P()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return C()(this,a)}}Object(at.a)("LearnDistribution");var ot={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},st={data:{opacity:.3,fill:"tomato"}};function lt(t,e){return{x:[t-6-3*e,t+6+3*e],y:[0,100/H()(100,e)*.6]}}var dt=function(t){w()(a,t);var e=rt(a);function a(t){var n;x()(this,a),n=e.call(this,t),F()(g()(n),"handleMeanChange",(function(t){var e=n.state,a=e.sd,i=e.domain,r=3*a;t-r<i.x[0]||t+r>i.x[1]||i.x[0]<t-10*r||i.x[1]>t+10*r||Q()(t,t,a)>=i.y[1]?n.setState({mean:t,domain:lt(t,a)}):n.setState({mean:t})})),F()(g()(n),"handleSDChange",(function(t){var e=3*t,a=n.state,i=a.mean,r=a.domain;i-e<r.x[0]||i+e>r.x[1]||r.x[0]<i-10*e||r.x[1]>i+10*e||Q()(i,i,t)>=r.y[1]?n.setState({sd:t,domain:lt(i,t)}):n.setState({sd:t})})),F()(g()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),F()(g()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));return n.state={mean:0,sd:1,x0:0,x1:1,domain:lt(0,1)},n}return f()(a,[{key:"renderInputs",value:function(t){var e=this.props.t,a=this.state,n=a.mean,i=a.sd,r=a.x0,o=a.x1;return y()(j.Fragment,{},void 0,y()(Z.b,{legend:e("mean"),defaultValue:0,step:this.props.step,onChange:this.handleMeanChange},"".concat(t,"-mean")),y()(Z.b,{legend:e("standard-deviation"),defaultValue:this.props.minStDev,step:this.props.step,min:this.props.minStDev,onChange:this.handleSDChange},"".concat(t,"-sd")),y()($.a,{legend:"x0",defaultValue:r,step:this.props.step,min:n-4*i,max:n+4*i,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?y()($.a,{legend:"x1",defaultValue:o,min:n-4*i,max:n+4*i,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.props.domain,e=this.props.tabs,a=this.state,u=a.mean,m=a.sd,x=a.x0,h=a.x1,f=this.props.t,v=U()(e,"smaller")?y()(I.a,{eventKey:"smaller",title:n||(n=y()(et.a,{raw:"P(X \\le x_0)"}))},void 0,y()(L.a,{},void 0,y()(X.a,{},void 0,y()(M.a,{},void 0,y()(tt.a,{},void 0,this.renderInputs("smaller"),y()(et.a,{raw:"P(X \\le ".concat(G()(x,-4),") = ").concat(G()(Y()(x,u,m),-4)),displayMode:!0,tag:""}))),y()(M.a,{},void 0,y()(V.a,{domain:t||this.state.domain,theme:W.a.material},void 0,i||(i=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(B.a,{samples:200,interpolation:"step",y:function(t){return t.x<=x?Q()(t.x,u,m):0},style:st}),y()(E.a,{samples:200,y:function(t){return Q()(t.x,u,m)}}))),this.props.hideCDF?null:y()(M.a,{},void 0,y()(V.a,{theme:W.a.material},void 0,r||(r=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return Y()(t.x,u,m)},domain:{x:[u-4*m,u+4*m],y:[0,1.1]}}),y()(E.a,{data:[{x:x,y:0},{x:x,y:Y()(x,u,m)}],style:ot}),y()(E.a,{data:[{x:0,y:Y()(x,u,m)},{x:x,y:Y()(x,u,m)}],style:ot})))))):null,g=U()(e,"greater")?y()(I.a,{eventKey:"greater",title:o||(o=y()(et.a,{raw:"P(X > x_0)"}))},void 0,y()(L.a,{},void 0,y()(X.a,{},void 0,y()(M.a,{},void 0,y()(tt.a,{},void 0,this.renderInputs("greater"),y()(et.a,{raw:"P(X > ".concat(G()(x,-4),") = ").concat(G()(1-Y()(x,u,m),-4)),displayMode:!0,tag:""}))),y()(M.a,{},void 0,y()(V.a,{domain:t||this.state.domain,theme:W.a.material},void 0,s||(s=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(B.a,{samples:200,interpolation:"step",y:function(t){return t.x>x?Q()(t.x,u,m):0},style:st}),y()(E.a,{samples:200,y:function(t){return Q()(t.x,u,m)}}))),this.props.hideCDF?null:y()(M.a,{},void 0,y()(V.a,{theme:W.a.material},void 0,l||(l=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return Y()(t.x,u,m)},domain:{x:[u-4*m,u+4*m],y:[0,1.1]}}),y()(E.a,{data:[{x:x,y:0},{x:x,y:Y()(x,u,m)}],style:ot}),y()(E.a,{data:[{x:x,y:1},{x:x,y:Y()(x,u,m)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:0,y:Y()(x,u,m)},{x:x,y:Y()(x,u,m)}],style:ot})))))):null,b=U()(e,"range")?y()(I.a,{eventKey:"range",title:d||(d=y()(et.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,y()(L.a,{},void 0,y()(X.a,{},void 0,y()(M.a,{},void 0,y()(tt.a,{},void 0,this.renderInputs("range"),h>=x?y()(et.a,{raw:"P(".concat(G()(x,-4)," \\le X \\le ").concat(G()(h,-4),") = ").concat(G()(Y()(h,u,m)-Y()(x,u,m),-4)),displayMode:!0,tag:""}):y()(K.a,{variant:"warning"},void 0,f("lower-bound-smaller-equal-upper-bound")))),y()(M.a,{},void 0,y()(V.a,{domain:t||this.state.domain,theme:W.a.material},void 0,c||(c=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(B.a,{samples:200,interpolation:"step",y:function(t){return t.x>x&&t.x<h?Q()(t.x,u,m):0},style:st}),y()(E.a,{samples:200,y:function(t){return Q()(t.x,u,m)}}))),this.props.hideCDF?null:y()(M.a,{},void 0,y()(V.a,{theme:W.a.material},void 0,p||(p=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(E.a,{samples:600,y:function(t){return Y()(t.x,u,m)},domain:{x:[u-4*m,u+4*m],y:[0,1.1]}}),y()(E.a,{data:[{x:h,y:Y()(x,u,m)},{x:h,y:Y()(h,u,m)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(E.a,{data:[{x:x,y:Y()(x,u,m)},{x:h,y:Y()(x,u,m)}],style:ot})))))):null;return y()(A.a,{style:it({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,y()(A.a.Header,{as:"h3"},void 0,f("normal-distribution")),y()(A.a.Body,{},void 0,y()(R.a,{defaultActiveKey:this.props.tabs[0],id:"normal-tabs"},void 0,v,g,b)))}}]),a}(j.Component);dt.defaultProps={domain:null,hideCDF:!1,minStDev:1,step:.01,tabs:["smaller","greater","range"],style:{}},e.default=Object(S.a)("LearnDistribution")(dt)}}]);