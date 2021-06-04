(self.webpackChunk=self.webpackChunk||[]).push([[1503],{83223:function(e,t,a){"use strict";a.r(t);a(382139),a(627476),a(95767),a(898837),a(694882),a(298351);var n,r,i,o,Z,s,l,c,d,p=a(858255),u=a(264659),y=a(904730),h=a(673989),x=a(175663),f=a(750591),m=a(575630),v=a(151119),b=a(202784),g=(a(213980),a(198)),k=a(260952),P=a(471275),w=a(458264),C=a(312594),O=a(320123),A=a(188429),F=a(822736),j=a(409788),D=a(213763),L=a(472482),B=a(648883),S=a(690473),X=a(636150),R=a.n(X),I=a(172203),K=a.n(I),V=a(174456),W=a.n(V),_=a(868350),M=a.n(_),E=a(741709),U=a(144571),q=a(462874),H=a(997354);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){(0,v.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,m.Z)(e);if(t){var r=(0,m.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,f.Z)(this,a)}}var N={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},Q={data:{opacity:.3,fill:"tomato"}},T=function(e){(0,x.Z)(a,e);var t=J(a);function a(e){var n;return(0,u.Z)(this,a),n=t.call(this,e),(0,v.Z)((0,h.Z)(n),"handleAlphaChange",(function(e){n.setState({alpha:e})})),(0,v.Z)((0,h.Z)(n),"handleBetaChange",(function(e){n.setState({beta:e})})),(0,v.Z)((0,h.Z)(n),"handleLowerChange",(function(e){n.setState({x0:e})})),(0,v.Z)((0,h.Z)(n),"handleUpperChange",(function(e){n.setState({x1:e})})),n.state={alpha:1,beta:1,x0:0,x1:1},n}return(0,y.Z)(a,[{key:"renderInputs",value:function(e){var t=this.state,a=t.alpha,n=t.beta,r=t.x0,i=t.x1;return(0,p.Z)(b.Fragment,{},void 0,(0,p.Z)(E.Z,{legend:"Alpha",defaultValue:a,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(e,"-alpha")),(0,p.Z)(E.Z,{legend:"Beta",defaultValue:n,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(e,"-beta")),(0,p.Z)(U.Z,{legend:"x0",defaultValue:r,step:this.props.step,min:-.1,max:1.1,onChange:this.handleLowerChange},"".concat(e,"-x0")),"range"===e?(0,p.Z)(U.Z,{legend:"x1",defaultValue:i,min:-.1,max:1.1,step:this.props.step,onChange:this.handleUpperChange},"".concat(e,"-x1")):null)}},{key:"render",value:function(){var e=this.props.domain,t=this.props.tabs,a=this.state,u=a.alpha,y=a.beta,h=a.x0,x=a.x1,f=R()(t,"smaller")?(0,p.Z)(A.Z,{eventKey:"smaller",title:n||(n=(0,p.Z)(H.Z,{raw:"P(X \\le x_0)"}))},void 0,(0,p.Z)(P.Z,{},void 0,(0,p.Z)(w.Z,{},void 0,(0,p.Z)(C.Z,{},void 0,(0,p.Z)(q.Z,{},void 0,this.renderInputs("smaller"),(0,p.Z)(H.Z,{raw:"P(X \\le ".concat(K()(h,-4),") = ").concat(K()(W()(h,u,y),-4)),displayMode:!0,tag:""}))),(0,p.Z)(C.Z,{},void 0,(0,p.Z)(j.Z,{domain:e||{x:[-.1,1.1],y:[0,u<.75||y<.75?5:2.5]},theme:D.Z.material},void 0,r||(r=(0,p.Z)(L.Z,{dependentAxis:!0})),(0,p.Z)(L.Z,{label:"PDF",tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,p.Z)(B.Z,{samples:200,interpolation:"step",y:function(e){return e.x<=h?M()(e.x,u,y):0},style:Q}),(0,p.Z)(S.Z,{samples:200,y:function(e){return M()(e.x,u,y)}}))),(0,p.Z)(C.Z,{},void 0,(0,p.Z)(j.Z,{theme:D.Z.material},void 0,i||(i=(0,p.Z)(L.Z,{dependentAxis:!0})),(0,p.Z)(L.Z,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),(0,p.Z)(S.Z,{samples:600,y:function(e){return W()(e.x,u,y)},domain:{x:[-.1,1.1],y:[0,1.1]}}),(0,p.Z)(S.Z,{data:[{x:h,y:0},{x:h,y:W()(h,u,y)}],style:N}),(0,p.Z)(S.Z,{data:[{x:0,y:W()(h,u,y)},{x:h,y:W()(h,u,y)}],style:N})))))):null,m=R()(t,"greater")?(0,p.Z)(A.Z,{eventKey:"greater",title:o||(o=(0,p.Z)(H.Z,{raw:"P(X > x_0)"}))},void 0,(0,p.Z)(P.Z,{},void 0,(0,p.Z)(w.Z,{},void 0,(0,p.Z)(C.Z,{},void 0,(0,p.Z)(q.Z,{},void 0,this.renderInputs("greater"),(0,p.Z)(H.Z,{raw:"P(X > ".concat(K()(h,-4),") = ").concat(K()(1-W()(h,u,y),-4)),displayMode:!0,tag:""}))),(0,p.Z)(C.Z,{},void 0,(0,p.Z)(j.Z,{domain:e||{x:[-.1,1.1],y:[0,u<.75||y<.75?5:2.5]},theme:D.Z.material},void 0,Z||(Z=(0,p.Z)(L.Z,{dependentAxis:!0})),(0,p.Z)(L.Z,{label:"PDF",tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,p.Z)(B.Z,{samples:200,interpolation:"step",y:function(e){return e.x>h?M()(e.x,u,y):0},style:Q}),(0,p.Z)(S.Z,{samples:200,y:function(e){return M()(e.x,u,y)}}))),(0,p.Z)(C.Z,{},void 0,(0,p.Z)(j.Z,{theme:D.Z.material,domain:{x:[-.1,1.1],y:[0,1.1]}},void 0,s||(s=(0,p.Z)(L.Z,{dependentAxis:!0})),(0,p.Z)(L.Z,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),(0,p.Z)(S.Z,{samples:600,y:function(e){return W()(e.x,u,y)}}),(0,p.Z)(S.Z,{data:[{x:h,y:0},{x:h,y:W()(h,u,y)}],style:N}),(0,p.Z)(S.Z,{data:[{x:h,y:1},{x:h,y:W()(h,u,y)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),(0,p.Z)(S.Z,{data:[{x:0,y:W()(h,u,y)},{x:h,y:W()(h,u,y)}],style:N})))))):null,v=R()(t,"range")?(0,p.Z)(A.Z,{eventKey:"range",title:l||(l=(0,p.Z)(H.Z,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,(0,p.Z)(P.Z,{},void 0,(0,p.Z)(w.Z,{},void 0,(0,p.Z)(C.Z,{},void 0,(0,p.Z)(q.Z,{},void 0,this.renderInputs("range"),x>=h?(0,p.Z)(H.Z,{raw:"P(".concat(K()(h,-4)," \\le X \\le ").concat(K()(x,-4),") = ").concat(K()(W()(x,u,y)-W()(h,u,y),-4)),displayMode:!0,tag:""}):(0,p.Z)(F.Z,{variant:"warning"},void 0,this.props.t("lower-bound-smaller-equal-upper-bound")))),(0,p.Z)(C.Z,{},void 0,(0,p.Z)(j.Z,{domain:e||{x:[-.1,1.1],y:[0,u<.75||y<.75?5:2.5]},theme:D.Z.material},void 0,c||(c=(0,p.Z)(L.Z,{dependentAxis:!0})),(0,p.Z)(L.Z,{label:"PDF",tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,p.Z)(B.Z,{samples:200,interpolation:"step",y:function(e){return e.x>h&&e.x<x?M()(e.x,u,y):0},style:Q}),(0,p.Z)(S.Z,{samples:200,y:function(e){return M()(e.x,u,y)}}))),(0,p.Z)(C.Z,{},void 0,(0,p.Z)(j.Z,{theme:D.Z.material},void 0,d||(d=(0,p.Z)(L.Z,{dependentAxis:!0})),(0,p.Z)(L.Z,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),(0,p.Z)(S.Z,{samples:600,y:function(e){return W()(e.x,u,y)},domain:{x:[-.1,1.1],y:[0,1.1]}}),(0,p.Z)(S.Z,{data:[{x:x,y:W()(h,u,y)},{x:x,y:W()(x,u,y)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),(0,p.Z)(S.Z,{data:[{x:h,y:W()(h,u,y)},{x:x,y:W()(h,u,y)}],style:N})))))):null;return(0,p.Z)(k.Z,{style:G({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,(0,p.Z)(k.Z.Header,{as:"h3"},void 0,this.props.t("beta-distribution")),(0,p.Z)(k.Z.Body,{},void 0,(0,p.Z)(O.Z,{defaultActiveKey:this.props.tabs[0],id:"beta-tabs"},void 0,f,m,v)))}}]),a}(b.Component);T.defaultProps={domain:null,step:.01,tabs:["smaller","greater","range"],style:{}},t.default=(0,g.Z)("learn/distribution")(T)}}]);