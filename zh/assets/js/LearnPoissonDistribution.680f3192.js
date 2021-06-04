/*! For license information please see LearnPoissonDistribution.680f3192.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[3042],{684270:function(t,e,a){"use strict";a.r(e);a(382139),a(627476),a(95767),a(898837),a(694882),a(298351);var n,r,i,o,s,Z,c,d,u,l,f,p,v,x,h=a(858255),y=a(264659),m=a(904730),g=a(673989),b=a(175663),w=a(750591),k=a(575630),N=a(151119),P=a(202784),C=(a(213980),a(198)),F=a(822736),O=a(260952),L=a(320123),A=a(188429),j=a(471275),X=a(458264),D=a(312594),R=a(409788),W=a(213763),M=a(472482),K=a(675573),S=a(690473),V=a(172203),_=a.n(V),I=a(685267),B=a.n(I),E=a(120783),U=a.n(E),q=a(550164),H=a.n(q),z=a(580266),G=a.n(z),J=a(144571),Q=a(741709),T=a(462874),Y=a(997354);function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function tt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(Object(a),!0).forEach((function(e){(0,N.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=(0,k.Z)(t);if(e){var r=(0,k.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,w.Z)(this,a)}}var at=.999,nt=function(t){(0,b.Z)(a,t);var e=et(a);function a(t){var n;(0,y.Z)(this,a),n=e.call(this,t),(0,N.Z)((0,g.Z)(n),"handleRateChange",(function(t){for(var e=B()(0,G()(at,t)+1,1),a=new Array(e.length),r=0;r<e.length;r++)a[r]={x:e[r],y:U()(e[r],t)};n.setState({data:a,rate:t})})),(0,N.Z)((0,g.Z)(n),"handleLowerChange",(function(t){n.setState({x0:t})})),(0,N.Z)((0,g.Z)(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=B()(0,G()(at,1),1),i=new Array(r.length),o=0;o<r.length;o++)i[o]={x:r[o],y:U()(r[o],1)};return n.state={rate:1,x0:0,x1:1,data:i},n}return(0,m.Z)(a,[{key:"renderInputs",value:function(t){var e=this.props.t;return(0,h.Z)(P.Fragment,{},void 0,(0,h.Z)(J.Z,{legend:e("rate"),defaultValue:this.state.rate,min:1e-12,step:this.props.step,max:99,onChange:this.handleRateChange},"".concat(t,"-rate")),(0,h.Z)(J.Z,{legend:"x0",defaultValue:this.state.x0,min:0,max:G()(at,this.state.rate),step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?(0,h.Z)(J.Z,{legend:"x1",defaultValue:this.state.x1,min:0,max:G()(at,this.state.rate),step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this,e=this.state,a=e.x0,y=e.x1,m=e.rate,g=this.props.t;return(0,h.Z)(O.Z,{style:tt({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,(0,h.Z)(O.Z.Header,{as:"h3"},void 0,g("poisson-distribution")),(0,h.Z)(O.Z.Body,{},void 0,(0,h.Z)(L.Z,{defaultActiveKey:0,id:"poisson-tabs"},void 0,(0,h.Z)(A.Z,{eventKey:0,title:n||(n=(0,h.Z)(Y.Z,{raw:"P(X = x_0)"}))},void 0,(0,h.Z)(j.Z,{},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:5},void 0,(0,h.Z)(T.Z,{title:g("poisson-probabilities")},void 0,(0,h.Z)("p",{},void 0,g("let")," ",r||(r=(0,h.Z)(Y.Z,{raw:"X"}))," ",g("number-of-occurrences")),(0,h.Z)("span",{},void 0,g("rate-parameter")),(0,h.Z)(Q.Z,{inline:!0,legend:i||(i=(0,h.Z)(Y.Z,{raw:"\\lambda"})),defaultValue:1,step:.01,max:99,min:0,onChange:this.handleRateChange}),(0,h.Z)("span",{},void 0,g("we-get")),(0,h.Z)(Y.Z,{raw:"P(X=x)= \\Large \\frac{".concat(m,"^x e^{-").concat(m,"}}{x!}"),displayMode:!0}),(0,h.Z)("span",{},void 0,g("evaluated-at")),(0,h.Z)(Q.Z,{inline:!0,legend:"x",defaultValue:1,step:1,max:G()(at,m)+1,min:0,onChange:this.handleLowerChange})," ",(0,h.Z)("span",{},void 0,g("we-get")),(0,h.Z)(Y.Z,{raw:"P(X=".concat(a,")= \\Large \\frac{").concat(m,"^").concat(a," e^{-").concat(m,"}}{").concat(a,"!} = ").concat(U()(a,m).toFixed(4)),displayMode:!0}))),(0,h.Z)(D.Z,{md:7},void 0,(0,h.Z)(T.Z,{header:"Probability Plot"},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{theme:W.Z.material},void 0,o||(o=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),(0,h.Z)(K.Z,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===a?"tomato":"steelblue"}}}}))),(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{theme:W.Z.material},void 0,s||(s=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,h.Z)(S.Z,{samples:600,y:function(t){return H()(t.x,m)},domain:{x:[0,G()(at,m)+1],y:[0,1.1]}}),(0,h.Z)(S.Z,{data:[{x:a,y:0},{x:a,y:H()(a,m)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),(0,h.Z)(S.Z,{data:[{x:0,y:H()(a,m)},{x:a,y:H()(a,m)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),(0,h.Z)(A.Z,{eventKey:1,title:Z||(Z=(0,h.Z)(Y.Z,{raw:"P(X \\le x_0)"}))},void 0,(0,h.Z)(j.Z,{},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:4},void 0,(0,h.Z)(T.Z,{},void 0,this.renderInputs("smaller"),(0,h.Z)(Y.Z,{raw:"P(X \\le ".concat(_()(a,-4),") = ").concat(_()(H()(a,m),-4))}))),(0,h.Z)(D.Z,{md:8},void 0,(0,h.Z)(j.Z,{},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{domain:{x:[0,G()(at,this.state.rate)+2]},theme:W.Z.material},void 0,c||(c=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),(0,h.Z)(K.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<=t.state.x0?"tomato":"steelblue"}}}}))),(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{theme:W.Z.material},void 0,d||(d=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),(0,h.Z)(S.Z,{samples:600,y:function(e){return H()(e.x,t.state.rate)},domain:{x:[0,G()(at,this.state.rate)+1],y:[0,1.1]}}),(0,h.Z)(S.Z,{data:[{x:a,y:0},{x:a,y:H()(a,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),(0,h.Z)(S.Z,{data:[{x:0,y:H()(a,this.state.rate)},{x:a,y:H()(a,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),(0,h.Z)(A.Z,{eventKey:2,title:u||(u=(0,h.Z)(Y.Z,{raw:"P(X > x_0)"}))},void 0,(0,h.Z)(j.Z,{},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:4},void 0,(0,h.Z)(T.Z,{},void 0,this.renderInputs("greater"),(0,h.Z)(Y.Z,{raw:"P(X > ".concat(_()(a,-4),") = ").concat(_()(1-H()(a,m),-4))}))),(0,h.Z)(D.Z,{md:8},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{domain:{x:[0,G()(at,m)+2]},theme:W.Z.material},void 0,l||(l=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),(0,h.Z)(K.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>=t.state.x0?"tomato":"steelblue"}}}}))),(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{theme:W.Z.material},void 0,f||(f=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),(0,h.Z)(S.Z,{samples:600,y:function(t){return H()(t.x,m)},domain:{x:[0,G()(at,m)+1],y:[0,1.1]}}),(0,h.Z)(S.Z,{data:[{x:a,y:0},{x:a,y:H()(a,m)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),(0,h.Z)(S.Z,{data:[{x:0,y:H()(a,m)},{x:a,y:H()(a,m)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),(0,h.Z)(A.Z,{eventKey:3,title:p||(p=(0,h.Z)(Y.Z,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,(0,h.Z)(j.Z,{},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:4},void 0,(0,h.Z)(T.Z,{},void 0,this.renderInputs("range"),y>=a?(0,h.Z)(Y.Z,{raw:"P( ".concat(_()(a,-4)," \\le X \\le ").concat(_()(y,-4),") = ").concat(_()(H()(y,m)-H()(a-1,m),-4))}):(0,h.Z)(F.Z,{variant:"warning"},void 0,g("lower-bound-smaller-equal-upper-bound")))),(0,h.Z)(D.Z,{md:8},void 0,(0,h.Z)(X.Z,{},void 0,(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{domain:{x:[0,G()(at,m)+2]},theme:W.Z.material},void 0,v||(v=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),(0,h.Z)(K.Z,{data:this.state.data,style:{data:{fill:function(e){return t.state.x0<=e.datum.x&&e.datum.x<=t.state.x1?"tomato":"steelblue"}}}}))),(0,h.Z)(D.Z,{md:6},void 0,(0,h.Z)(R.Z,{theme:W.Z.material},void 0,x||(x=(0,h.Z)(M.Z,{dependentAxis:!0})),(0,h.Z)(M.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),(0,h.Z)(S.Z,{samples:600,y:function(t){return H()(t.x,m)},domain:{x:[0,G()(at,m)+1],y:[0,1.1]}})))))))))))}}]),a}(P.Component);nt.defaultProps={step:.1,style:{}},e.default=(0,C.Z)("learn/distribution")(nt)},570382:function(t,e,a){"use strict";var n=a(794784);t.exports=n},794784:function(t,e,a){"use strict";var n=a(737535);t.exports=function(t){return n(t)===t&&t<0}},215542:function(t,e,a){"use strict";var n=a(570382),r=a(296434);t.exports=function(t){return n(t)?NaN:r(t+1)}},166659:function(t,e,a){"use strict";var n=a(215542);t.exports=n},581941:function(t,e,a){"use strict";var n=a(361060),r=a(122860);t.exports=function(t){return r(t)?n(NaN):function(e){if(r(e))return NaN;return e===t?1:0}}},418575:function(t,e,a){"use strict";var n=a(220091),r=a(254023);n(r,"factory",a(581941)),t.exports=r},254023:function(t,e,a){"use strict";var n=a(122860);t.exports=function(t,e){return n(t)||n(e)?NaN:t===e?1:0}},853003:function(t,e,a){"use strict";var n=a(286367),r=a(122860),i=a(737535),o=a(740015);t.exports=function(t,e){return r(t)||r(e)||e<0?NaN:t<0?0:0===e||t===o?1:n(e,i(t)+1,!0,!0)}},108973:function(t,e,a){"use strict";var n=a(361060),r=a(799925).factory,i=a(286367),o=a(122860),s=a(737535),Z=a(740015);t.exports=function(t){return o(t)||t<0?n(NaN):0===t?r(0):function(e){if(o(e))return NaN;if(e<0)return 0;if(e===Z)return 1;return i(t,s(e)+1,!0,!0)}}},550164:function(t,e,a){"use strict";var n=a(220091),r=a(853003);n(r,"factory",a(108973)),t.exports=r},13283:function(t,e,a){"use strict";var n=a(693561),r=a(361060),i=a(166659),o=a(418575).factory,s=a(122860),Z=a(808628),c=a(180909),d=a(740015);t.exports=function(t){return s(t)||t<0?r(NaN):0===t?o(0):function(e){var a;if(s(e))return NaN;if(n(e)&&e!==d)return a=e*c(t)-t-i(e),Z(a);return 0}}},120783:function(t,e,a){"use strict";var n=a(220091),r=a(331769);n(r,"factory",a(13283)),t.exports=r},331769:function(t,e,a){"use strict";var n=a(693561),r=a(166659),i=a(122860),o=a(808628),s=a(180909),Z=a(740015);t.exports=function(t,e){var a;return i(t)||i(e)||e<0?NaN:0===e?0===t?1:0:n(t)&&t!==Z?(a=t*s(e)-e-r(t),o(a)):0}},191057:function(t,e,a){"use strict";var n=a(361060),r=a(772336).factory,i=a(44857),o=a(122860),s=a(857906),Z=a(989202),c=a(550164),d=a(131374),u=a(740015),l=a(236041);t.exports=function(t){var e,a;return o(t)||t<0?n(NaN):0===t?r(0):(a=Z(t),e=1/a,function(n){var r,Z;if(o(n)||n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return u;Z=n<.5?-i(2*n)*d:i(2*(1-n))*d;return r=s(t+a*(Z+e*(Z*Z-1)/6)),c(r,t)>=n?l.left(r,n,t):l.right(r,n,t)})}},580266:function(t,e,a){"use strict";var n=a(220091),r=a(980626);n(r,"factory",a(191057)),t.exports=r},980626:function(t,e,a){"use strict";var n=a(44857),r=a(122860),i=a(857906),o=a(989202),s=a(550164),Z=a(131374),c=a(740015),d=a(236041);t.exports=function(t,e){var a,u,l,f;return r(e)||e<0||r(t)||t<0||t>1?NaN:0===e||0===t?0:1===t?c:(a=1/(l=o(e)),f=t<.5?-n(2*t)*Z:n(2*(1-t))*Z,u=i(e+l*(f+a*(f*f-1)/6)),s(u,e)>=t?d.left(u,t,e):d.right(u,t,e))}},236041:function(t,e,a){"use strict";var n,r=a(550164);n={left:function(t,e,a){for(;;){if(0===t||r(t-1,a)<e)return t;t-=1}},right:function(t,e,a){for(;;)if(r(t+=1,a)>=e)return t}},t.exports=n}}]);