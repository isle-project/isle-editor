"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43042],{476493:function(e,t,a){a.r(t);var l=a(202784),n=a(213980),r=a.n(n),s=a(198),m=a(822736),i=a(790817),d=a(320123),c=a(594010),o=a(471275),Z=a(458264),E=a(312594),p=a(323522),h=a(844204),x=a(850013),y=a(945618),u=a(357521),g=a(74039),b=a.n(g),f=a(605977),k=a.n(f),w=a(412671),$=a.n(w),C=a(404093),P=a.n(C),F=a(374750),L=a.n(F),A=a(658774),v=a(506078),X=a(426214),O=a(194542),W=Object.defineProperty,M=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,K=(e,t,a)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,V=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&K(e,a,t[a]);if(M)for(var a of M(t))I.call(t,a)&&K(e,a,t[a]);return e},_=(e,t,a)=>(K(e,"symbol"!=typeof t?t+"":t,a),a);const D=.999;class S extends l.Component{constructor(e){super(e),_(this,"handleRateChange",(e=>{const t=k()(0,L()(D,e)+1,1),a=new Array(t.length);for(let l=0;l<t.length;l++)a[l]={x:t[l],y:$()(t[l],e)};this.setState({data:a,rate:e})})),_(this,"handleLowerChange",(e=>{this.setState({x0:e})})),_(this,"handleUpperChange",(e=>{this.setState({x1:e})}));const t=k()(0,L()(D,1),1),a=new Array(t.length);for(let l=0;l<t.length;l++)a[l]={x:t[l],y:$()(t[l],1)};this.state={rate:1,x0:0,x1:1,data:a}}renderInputs(e){const{t:t}=this.props;return l.createElement(l.Fragment,null,l.createElement(A.Z,{key:`${e}-rate`,legend:t("rate"),defaultValue:this.state.rate,min:1e-12,step:this.props.step,max:99,onChange:this.handleRateChange}),l.createElement(A.Z,{key:`${e}-x0`,legend:"x0",defaultValue:this.state.x0,min:0,max:L()(D,this.state.rate),step:this.props.step,onChange:this.handleLowerChange}),"range"===e?l.createElement(A.Z,{legend:"x1",defaultValue:this.state.x1,min:0,max:L()(D,this.state.rate),step:this.props.step,onChange:this.handleUpperChange}):null)}render(){const{x0:e,x1:t,rate:a}=this.state,{t:n}=this.props;return l.createElement(i.Z,{style:V({maxWidth:1200,margin:"10px auto"},this.props.style)},l.createElement(i.Z.Header,{as:"h3"},n("poisson-distribution")),l.createElement(i.Z.Body,null,l.createElement(d.Z,{defaultActiveKey:0,id:"poisson-tabs"},l.createElement(c.Z,{eventKey:0,title:l.createElement(O.Z,{raw:"P(X = x_0)"})},l.createElement(o.Z,null,l.createElement(Z.Z,null,l.createElement(E.Z,{md:5},l.createElement(X.Z,{title:n("poisson-probabilities")},l.createElement("p",null,n("let")," ",l.createElement(O.Z,{raw:"X"})," ",n("number-of-occurrences")),l.createElement("span",null,n("rate-parameter")),l.createElement(v.Z,{inline:!0,legend:l.createElement(O.Z,{raw:"\\lambda"}),defaultValue:1,step:.01,max:99,min:0,onChange:this.handleRateChange}),l.createElement("span",null,n("we-get")),l.createElement(O.Z,{raw:`P(X=x)= \\Large \\frac{${a}^x e^{-${a}}}{x!}`,displayMode:!0}),l.createElement("span",null,n("evaluated-at")),l.createElement(v.Z,{inline:!0,legend:"x",defaultValue:1,step:1,max:L()(D,a)+1,min:0,onChange:this.handleLowerChange})," ",l.createElement("span",null,n("we-get")),l.createElement(O.Z,{raw:`P(X=${e})= \\Large \\frac{${a}^${e} e^{-${a}}}{${e}!} = ${$()(e,a).toFixed(4)}`,displayMode:!0}))),l.createElement(E.Z,{md:7},l.createElement(X.Z,{header:"Probability Plot"},l.createElement(Z.Z,null,l.createElement(E.Z,{md:6},l.createElement(p.Z,{theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"PMF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(y.Z,{data:this.state.data,style:{data:{fill:t=>t.datum.x===e?"tomato":"steelblue"}}}))),l.createElement(E.Z,{md:6},l.createElement(p.Z,{theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(u.Z,{samples:600,y:e=>P()(e.x,a),domain:{x:[0,L()(D,a)+1],y:[0,1.1]}}),l.createElement(u.Z,{data:[{x:e,y:0},{x:e,y:P()(e,a)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),l.createElement(u.Z,{data:[{x:0,y:P()(e,a)},{x:e,y:P()(e,a)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),l.createElement(c.Z,{eventKey:1,title:l.createElement(O.Z,{raw:"P(X \\le x_0)"})},l.createElement(o.Z,null,l.createElement(Z.Z,null,l.createElement(E.Z,{md:4},l.createElement(X.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("smaller"),l.createElement(O.Z,{raw:`P(X \\le ${b()(e,-4)}) = ${b()(P()(e,a),-4)}`}))),l.createElement(E.Z,{md:8},l.createElement(o.Z,null,l.createElement(Z.Z,null,l.createElement(E.Z,{md:6},l.createElement(p.Z,{domain:{x:[0,L()(D,this.state.rate)+2]},theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"PMF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(y.Z,{data:this.state.data,style:{data:{fill:e=>e.datum.x<=this.state.x0?"tomato":"steelblue"}}}))),l.createElement(E.Z,{md:6},l.createElement(p.Z,{theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(u.Z,{samples:600,y:e=>P()(e.x,this.state.rate),domain:{x:[0,L()(D,this.state.rate)+1],y:[0,1.1]}}),l.createElement(u.Z,{data:[{x:e,y:0},{x:e,y:P()(e,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),l.createElement(u.Z,{data:[{x:0,y:P()(e,this.state.rate)},{x:e,y:P()(e,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),l.createElement(c.Z,{eventKey:2,title:l.createElement(O.Z,{raw:"P(X > x_0)"})},l.createElement(o.Z,null,l.createElement(Z.Z,null,l.createElement(E.Z,{md:4},l.createElement(X.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("greater"),l.createElement(O.Z,{raw:`P(X > ${b()(e,-4)}) = ${b()(1-P()(e,a),-4)}`}))),l.createElement(E.Z,{md:8},l.createElement(Z.Z,null,l.createElement(E.Z,{md:6},l.createElement(p.Z,{domain:{x:[0,L()(D,a)+2]},theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"PMF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(y.Z,{data:this.state.data,style:{data:{fill:e=>e.datum.x>=this.state.x0?"tomato":"steelblue"}}}))),l.createElement(E.Z,{md:6},l.createElement(p.Z,{theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(u.Z,{samples:600,y:e=>P()(e.x,a),domain:{x:[0,L()(D,a)+1],y:[0,1.1]}}),l.createElement(u.Z,{data:[{x:e,y:0},{x:e,y:P()(e,a)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),l.createElement(u.Z,{data:[{x:0,y:P()(e,a)},{x:e,y:P()(e,a)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),l.createElement(c.Z,{eventKey:3,title:l.createElement(O.Z,{raw:"P( x_0 \\le X \\le x_1)"})},l.createElement(o.Z,null,l.createElement(Z.Z,null,l.createElement(E.Z,{md:4},l.createElement(X.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("range"),t>=e?l.createElement(O.Z,{raw:`P( ${b()(e,-4)} \\le X \\le ${b()(t,-4)}) = ${b()(P()(t,a)-P()(e-1,a),-4)}`}):l.createElement(m.Z,{variant:"warning"},n("lower-bound-smaller-equal-upper-bound")))),l.createElement(E.Z,{md:8},l.createElement(Z.Z,null,l.createElement(E.Z,{md:6},l.createElement(p.Z,{domain:{x:[0,L()(D,a)+2]},theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"PMF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(y.Z,{data:this.state.data,style:{data:{fill:e=>this.state.x0<=e.datum.x&&e.datum.x<=this.state.x1?"tomato":"steelblue"}}}))),l.createElement(E.Z,{md:6},l.createElement(p.Z,{theme:h.Z.material},l.createElement(x.Z,{dependentAxis:!0}),l.createElement(x.Z,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(u.Z,{samples:600,y:e=>P()(e.x,a),domain:{x:[0,L()(D,a)+1],y:[0,1.1]}})))))))))))}}S.propTypes={step:r().oneOfType([r().number,r().string]),style:r().object},S.defaultProps={step:.1,style:{}},t.default=(0,s.Z)("learn/distribution")(S)}}]);