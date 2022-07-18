/*! For license information please see LearnBinomialDistribution.37244266.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16315],{577371:function(e,t,a){var n=a(846933);e.exports=n},846933:function(e,t,a){var n=a(295943);e.exports=function(e){return n(e)===e&&e>=0}},787903:function(e,t,a){var n=a(998613),l=a(422957),r=a(764262),s=a(32593),i=a(798030),m=a(395465);e.exports=function e(t,a){return l(t)||l(a)?NaN:n(t)&&n(a)?t<0?e(-t+a-1,a):a<0?m:0===a?0:1===a?i(s(t)):t<a?m:t-a<2?e(t,t-a):-i(t+1)-r(t-a+1,a+1):NaN}},550704:function(e,t,a){var n=a(787903);e.exports=n},255149:function(e,t,a){var n=a(577371),l=a(513596),r=a(422957),s=a(295943),i=a(109918);e.exports=function(e,t,a){return r(e)||r(t)||r(a)||a<0||a>1||!n(t)||t===i?NaN:e<0?0:e>=t?1:(e=s(e+1e-7),l(a,e+1,t-e,!0,!0))}},713059:function(e,t,a){var n=a(577371),l=a(362739),r=a(513596),s=a(422957),i=a(295943),m=a(109918);e.exports=function(e,t){return s(e)||s(t)||t<0||t>1||!n(e)||e===m?l(NaN):function(a){if(s(a))return NaN;if(a<0)return 0;if(a>=e)return 1;return a=i(a+1e-7),r(t,a+1,e-a,!0,!0)}}},549916:function(e,t,a){var n=a(501874),l=a(255149);n(l,"factory",a(713059)),e.exports=l},581683:function(e,t,a){var n=a(577371),l=a(362739),r=a(550704),s=a(138926).factory,i=a(422957),m=a(745794),c=a(190465),o=a(798030),d=a(109918);e.exports=function(e,t){return i(e)||i(t)||!n(e)||e===d||t<0||t>1?l(NaN):0===t||0===e?s(0):1===t?s(e):function(a){var l;if(i(a))return NaN;if(n(a))return a>e?0:(l=r(e,a),l+=a*o(t)+(e-a)*m(-t),c(l));return 0}}},812757:function(e,t,a){var n=a(501874),l=a(944092);n(l,"factory",a(581683)),e.exports=l},944092:function(e,t,a){var n=a(577371),l=a(550704),r=a(422957),s=a(745794),i=a(190465),m=a(798030),c=a(109918);e.exports=function(e,t,a){var o;return r(e)||r(t)||r(a)||a<0||a>1||!n(t)||t===c?NaN:n(e)?e>t?0:0===a?0===e?1:0:1===a?e===t?1:0:(o=l(t,e),o+=e*m(a)+(t-e)*s(-a),i(o)):0}},456685:function(e,t,a){var n=a(362739),l=a(422957);e.exports=function(e){return l(e)?n(NaN):function(t){if(l(t))return NaN;return t===e?1:0}}},138926:function(e,t,a){var n=a(501874),l=a(317825);n(l,"factory",a(456685)),e.exports=l},317825:function(e,t,a){var n=a(422957);e.exports=function(e,t){return n(e)||n(t)?NaN:e===t?1:0}},240399:function(e,t,a){a.r(t);var n=a(202784),l=a(213980),r=a.n(l),s=a(198),i=a(790817),m=a(360626),c=a(594010),o=a(822736),d=a(471275),p=a(312594),u=a(458264),h=a(323522),E=a(844204),x=a(850013),y=a(945618),Z=a(328731),f=a(74039),b=a.n(f),g=a(605977),k=a.n(g),C=a(812757),$=a.n(C),v=a(549916),N=a.n(v),w=a(548667),F=a.n(w),P=a(172888),j=a(506078),A=a(658774),L=a(426214),D=a(194542),M=Object.defineProperty,X=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,V=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,W=(e,t)=>{for(var a in t||(t={}))J.call(t,a)&&V(e,a,t[a]);if(X)for(var a of X(t))O.call(t,a)&&V(e,a,t[a]);return e},I=(e,t,a)=>(V(e,"symbol"!=typeof t?t+"":t,a),a);class K extends n.Component{constructor(e){super(e),I(this,"handleTrialsChange",(e=>{const t=k()(0,e+1,1),a=new Array(t.length);for(let n=0;n<t.length;n++)a[n]={x:t[n],y:$()(t[n],e,this.state.p)};this.setState({data:a,n:e})})),I(this,"handlePropChange",(e=>{const t=k()(0,this.state.n+1,1),a=new Array(t.length);for(let n=0;n<t.length;n++)a[n]={x:t[n],y:$()(t[n],this.state.n,this.state.p)};this.setState({data:a,p:e})})),I(this,"handleLowerChange",(e=>{this.setState({x0:e})})),I(this,"handleUpperChange",(e=>{this.setState({x1:e})}));const t=k()(0,11,1),a=new Array(t.length);for(let n=0;n<t.length;n++)a[n]={x:t[n],y:$()(t[n],10,.5)};this.state={n:10,p:.5,x0:0,x1:1,data:a}}renderInputs(e){const{t:t}=this.props;return n.createElement(n.Fragment,null,n.createElement(j.Z,{key:`${e}-n`,legend:`${t("number-of-trials")} (n)`,defaultValue:this.state.n,min:1,step:1,onChange:this.handleTrialsChange}),n.createElement(j.Z,{key:`${e}-p`,legend:`${t("success-probability")} (p)`,defaultValue:this.state.p,step:this.props.step,onChange:this.handlePropChange,min:0,max:1}),n.createElement(A.Z,{key:`${e}-x0`,legend:"x0",defaultValue:this.state.x0,step:1,min:0,max:this.state.n,onChange:this.handleLowerChange}),"range"===e?n.createElement(A.Z,{legend:"x1",defaultValue:this.state.x1,min:0,max:this.state.n,step:1,onChange:this.handleUpperChange}):null)}render(){const{x0:e,x1:t,n:a,p:l}=this.state,{t:r}=this.props;return n.createElement(i.Z,{style:W({maxWidth:1200,margin:"10px auto"},this.props.style)},n.createElement(i.Z.Header,{as:"h3"},r("binomial-distribution")),n.createElement(i.Z.Body,null,n.createElement(m.Z,{defaultActiveKey:0,id:"binomial-tabs"},n.createElement(c.Z,{eventKey:0,title:n.createElement(D.Z,{raw:"P(X = x)"})},n.createElement(d.Z,null,n.createElement(u.Z,null,n.createElement(p.Z,{md:5},n.createElement(L.Z,{title:r("binomial-probabilities")},n.createElement("span",null,F()(r("for"))),n.createElement(j.Z,{inline:!0,legend:"n",defaultValue:a,step:1,min:0,max:999,onChange:this.handleTrialsChange}),n.createElement("span",null,r("trials-and-success-probability")),n.createElement(j.Z,{inline:!0,legend:"p",defaultValue:l,step:.01,max:1,min:0,onChange:this.handlePropChange}),n.createElement("span",null,r("we-get")),n.createElement(D.Z,{raw:`P(X=x)= \\Large \\tbinom{${a}}{x} ${l}^x ${b()(1-l,-4)}^{${a}-x}`,displayMode:!0}),n.createElement("span",null,r("evaluated-at")," "),n.createElement(j.Z,{inline:!0,legend:"x",defaultValue:0,step:1,max:a,min:0,onChange:this.handleLowerChange})," ",n.createElement("span",null,r("we-get")),n.createElement(D.Z,{raw:`P(X=${e})= \\Large \\tbinom{${a}}{${e}} ${l}^{${e}} ${b()(1-l,-4)}^{${a}-${e}} \\approx ${$()(e,this.state.n,l).toFixed(4)}`,displayMode:!0}))),n.createElement(p.Z,{md:7},n.createElement(L.Z,{header:r("probability-plot")},n.createElement(u.Z,null,n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"PMF",tickFormat:e=>b()(e,-2),style:{axisLabel:{padding:40}}}),n.createElement(y.Z,{data:this.state.data,style:{data:{fill:t=>t.datum.x===e?"tomato":"steelblue"}}}))),this.props.hideCDF?null:n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),n.createElement(Z.j,{samples:600,y:e=>N()(e.x,a,l),domain:{x:[0,a+1],y:[0,1.1]}}),n.createElement(Z.j,{data:[{x:e,y:0},{x:e,y:N()(e,a,l)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),n.createElement(Z.j,{data:[{x:0,y:N()(e,a,l)},{x:e,y:N()(e,a,l)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),n.createElement(c.Z,{eventKey:1,title:n.createElement(D.Z,{raw:"P(X \\le x_0)"})},n.createElement(d.Z,null,n.createElement(u.Z,null,n.createElement(p.Z,{md:4},n.createElement(L.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("smaller"),n.createElement(D.Z,{raw:`P(X \\le${b()(e,-4)}) = ${b()(N()(e,a,l),-4)}`,displayMode:!0,tag:""}))),n.createElement(p.Z,{md:8},n.createElement(L.Z,{header:r("probability-plot")},n.createElement(u.Z,null,n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"PMF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),n.createElement(y.Z,{data:this.state.data,style:{data:{fill:t=>t.datum.x<=e?"tomato":"steelblue"}}}))),this.props.hideCDF?null:n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),n.createElement(Z.j,{samples:600,y:e=>N()(e.x,a,l),domain:{x:[0,a+1],y:[0,1.1]}}),n.createElement(Z.j,{data:[{x:e,y:0},{x:e,y:N()(e,a,l)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),n.createElement(Z.j,{data:[{x:0,y:N()(e,a,l)},{x:e,y:N()(e,a,l)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),n.createElement(c.Z,{eventKey:2,title:n.createElement(D.Z,{raw:"P(X > x_0)"})},n.createElement(d.Z,null,n.createElement(u.Z,null,n.createElement(p.Z,{md:4},n.createElement(L.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("greater"),n.createElement(D.Z,{raw:`P(X >${b()(e,-4)}) = ${b()(1-N()(e,a,l),-4)}`,displayMode:!0,tag:""}))),n.createElement(p.Z,{md:8},n.createElement(L.Z,{header:r("probability-plot")},n.createElement(u.Z,null,n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"PMF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),n.createElement(y.Z,{data:this.state.data,style:{data:{fill:e=>e.datum.x>this.state.x0?"tomato":"steelblue"}}}))),this.props.hideCDF?null:n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),n.createElement(Z.j,{samples:600,y:e=>N()(e.x,a,l),domain:{x:[0,a+1],y:[0,1.1]}}),n.createElement(Z.j,{data:[{x:e,y:0},{x:e,y:N()(e,a,l)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),n.createElement(Z.j,{data:[{x:0,y:N()(e,a,l)},{x:e,y:N()(e,a,l)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),n.createElement(c.Z,{eventKey:3,title:n.createElement(D.Z,{raw:"P( x_0 \\le X \\le x_1)"})},n.createElement(d.Z,null,n.createElement(u.Z,null,n.createElement(p.Z,{md:4},n.createElement(L.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("range"),t>=e?n.createElement(D.Z,{raw:`P(${b()(e,-4)} \\le X \\le ${b()(t,-4)}) = ${b()(N()(t,a,l)-N()(e-1,a,l),-4)}`,displayMode:!0,tag:""}):n.createElement(o.Z,{variant:"warning"},r("lower-bound-smaller-equal-upper-bound")))),n.createElement(p.Z,{md:8},n.createElement(L.Z,{header:r("probability-plot")},n.createElement(u.Z,null,n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"PMF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),n.createElement(y.Z,{data:this.state.data,style:{data:{fill:e=>this.state.x0<=e.datum.x&&e.datum.x<=this.state.x1?"tomato":"steelblue"}}}))),this.props.hideCDF?null:n.createElement(p.Z,{md:6},n.createElement(h.k,{theme:E.J.material},n.createElement(x.Z,{dependentAxis:!0}),n.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),n.createElement(Z.j,{samples:600,y:e=>N()(e.x,a,l),domain:{x:[0,a+1],y:[0,1.1]}})))))))))),n.createElement(P.Z,{id:"binomial_distribution"})))}}K.propTypes={hideCDF:r().bool,step:r().oneOfType([r().number,r().string]),style:r().object},K.defaultProps={hideCDF:!1,step:.01,style:{}},t.default=(0,s.Z)("learn/distribution")(K)}}]);