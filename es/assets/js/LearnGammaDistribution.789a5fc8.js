"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1393],{754213:function(e,t,a){a.r(t);var l=a(202784),n=a(213980),r=a.n(n),s=a(498614),m=a(790817),p=a(471275),i=a(458264),o=a(312594),c=a(360626),h=a(594010),d=a(822736),E=a(323522),y=a(844204),u=a(850013),x=a(405362),b=a(328731),g=a(287013),Z=a.n(g),k=a(74039),C=a.n(k),f=a(784691),j=a.n(f),w=a(679526),$=a.n(w),P=a(924812),F=a.n(P),A=a(506078),v=a(658774),O=a(426214),L=a(194542),D=Object.defineProperty,J=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,z=(e,t,a)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,I=(e,t)=>{for(var a in t||(t={}))V.call(t,a)&&z(e,a,t[a]);if(J)for(var a of J(t))X.call(t,a)&&z(e,a,t[a]);return e},S=(e,t,a)=>(z(e,"symbol"!=typeof t?t+"":t,a),a);const B=.999999,K={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},W={data:{opacity:.3,fill:"tomato"}};class _ extends l.Component{constructor(e){super(e),S(this,"handleAlphaChange",(e=>{this.setState({alpha:e})})),S(this,"handleBetaChange",(e=>{this.setState({beta:e})})),S(this,"handleLowerChange",(e=>{this.setState({x0:e})})),S(this,"handleUpperChange",(e=>{this.setState({x1:e})})),this.state={alpha:1,beta:1,x0:0,x1:1}}renderInputs(e){const{alpha:t,beta:a,x0:n,x1:r}=this.state,s=this.props.scaleParameterization?F()(B,t,1/a)+1:F()(B,t,a)+1;return l.createElement(l.Fragment,null,this.props.scaleParameterization?l.createElement(l.Fragment,null,l.createElement(A.Z,{key:`${e}-alpha`,legend:this.props.symbols?l.createElement("span",null,l.createElement(L.Z,{raw:"k"})," (",this.props.t("shape"),")"):this.props.t("shape"),defaultValue:t,min:.001,step:this.props.step,onChange:this.handleAlphaChange}),l.createElement(A.Z,{key:`${e}-beta`,legend:this.props.symbols?l.createElement("span",null,l.createElement(L.Z,{raw:"\\theta"})," (",this.props.t("scale"),")"):this.props.t("scale"),defaultValue:a,step:this.props.step,min:.001,onChange:this.handleBetaChange})):l.createElement(l.Fragment,null,l.createElement(A.Z,{key:`${e}-alpha`,legend:this.props.symbols?l.createElement("span",null,l.createElement(L.Z,{raw:"\\alpha"})," (",this.props.t("shape"),")"):this.props.t("shape"),defaultValue:t,min:.001,step:this.props.step,onChange:this.handleAlphaChange}),l.createElement(A.Z,{key:`${e}-beta`,legend:this.props.symbols?l.createElement("span",null,l.createElement(L.Z,{raw:"\\beta"})," (",this.props.t("rate"),")"):this.props.t("rate"),defaultValue:a,step:this.props.step,min:.001,onChange:this.handleBetaChange})),l.createElement(v.Z,{key:`${e}-x0`,legend:"x0",defaultValue:n,step:this.props.step,min:-.1,max:s,onChange:this.handleLowerChange}),"range"===e?l.createElement(v.Z,{key:`${e}-x1`,legend:"x1",defaultValue:r,min:-.1,max:s,step:this.props.step,onChange:this.handleUpperChange}):null)}render(){const e=this.props.domain,t=this.props.tabs,{alpha:a,x0:n,x1:r}=this.state,s=this.props.scaleParameterization?1/this.state.beta:this.state.beta,g=Z()(t,"smaller")?l.createElement(h.Z,{eventKey:"smaller",title:l.createElement(L.Z,{raw:"P(X \\le x_0)"})},l.createElement(p.Z,null,l.createElement(i.Z,null,l.createElement(o.Z,null,l.createElement(O.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("smaller"),l.createElement(L.Z,{raw:`P(X \\le ${C()(n,-4)}) = ${C()(j()(n,a,s),-4)}`,displayMode:!0,tag:""}))),l.createElement(o.Z,null,l.createElement(E.k,{domain:e||{x:[-.1,F()(B,a,s)],y:[0,a<50||s<50?2:5]},theme:y.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(x.b,{samples:200,interpolation:"step",y:e=>e.x<=n?$()(e.x,a,s):0,style:W}),l.createElement(b.j,{samples:200,y:e=>$()(e.x,a,s)}))),l.createElement(o.Z,null,l.createElement(E.k,{theme:y.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(b.j,{samples:600,y:e=>j()(e.x,a,s),domain:{x:[-.1,F()(B,a,s)],y:[0,1.1]}}),l.createElement(b.j,{data:[{x:n,y:0},{x:n,y:j()(n,a,s)}],style:K}),l.createElement(b.j,{data:[{x:0,y:j()(n,a,s)},{x:n,y:j()(n,a,s)}],style:K})))))):null,k=Z()(t,"greater")?l.createElement(h.Z,{eventKey:"greater",title:l.createElement(L.Z,{raw:"P(X > x_0)"})},l.createElement(p.Z,null,l.createElement(i.Z,null,l.createElement(o.Z,null,l.createElement(O.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("greater"),l.createElement(L.Z,{raw:`P(X > ${C()(n,-4)}) = ${C()(1-j()(n,a,s),-4)}`,displayMode:!0,tag:""}))),l.createElement(o.Z,null,l.createElement(E.k,{domain:e||{x:[-.1,F()(B,a,s)],y:[0,a<50||s<50?2:5]},theme:y.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(x.b,{samples:200,interpolation:"step",y:e=>e.x>n?$()(e.x,a,s):0,style:W}),l.createElement(b.j,{samples:200,y:e=>$()(e.x,a,s)}))),l.createElement(o.Z,null,l.createElement(E.k,{theme:y.J.material,domain:{x:[-.1,F()(B,a,s)],y:[0,1.1]}},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(b.j,{samples:600,y:e=>j()(e.x,a,s)}),l.createElement(b.j,{data:[{x:n,y:0},{x:n,y:j()(n,a,s)}],style:K}),l.createElement(b.j,{data:[{x:n,y:1},{x:n,y:j()(n,a,s)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(b.j,{data:[{x:0,y:j()(n,a,s)},{x:n,y:j()(n,a,s)}],style:K})))))):null,f=Z()(t,"range")?l.createElement(h.Z,{eventKey:"range",title:l.createElement(L.Z,{raw:"P( x_0 \\le X \\le x_1)"})},l.createElement(p.Z,null,l.createElement(i.Z,null,l.createElement(o.Z,null,l.createElement(O.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("range"),r>=n?l.createElement(L.Z,{raw:`P(${C()(n,-4)} \\le X \\le ${C()(r,-4)}) = ${C()(j()(r,a,s)-j()(n,a,s),-4)}`,displayMode:!0,tag:""}):l.createElement(d.Z,{variant:"warning"},this.props.t("lower-bound-smaller-equal-upper-bound")))),l.createElement(o.Z,null,l.createElement(E.k,{domain:e||{x:[-.1,F()(B,a,s)],y:[0,a<50||s<50?2:5]},theme:y.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(x.b,{samples:200,interpolation:"step",y:e=>e.x>n&&e.x<r?$()(e.x,a,s):0,style:W}),l.createElement(b.j,{samples:200,y:e=>$()(e.x,a,s)}))),l.createElement(o.Z,null,l.createElement(E.k,{theme:y.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(b.j,{samples:600,y:e=>j()(e.x,a,s),domain:{x:[-.1,F()(B,a,s)],y:[0,1.1]}}),l.createElement(b.j,{data:[{x:r,y:j()(n,a,s)},{x:r,y:j()(r,a,s)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(b.j,{data:[{x:n,y:j()(n,a,s)},{x:r,y:j()(n,a,s)}],style:K})))))):null;return l.createElement(m.Z,{style:I({maxWidth:1200,margin:"10px auto"},this.props.style)},l.createElement(m.Z.Header,{as:"h3"},this.props.t("gamma-distribution")),l.createElement(m.Z.Body,null,l.createElement(c.Z,{defaultActiveKey:this.props.tabs[0],id:"beta-tabs"},g,k,f)))}}_.propTypes={domain:r().object,scaleParameterization:r().bool,step:r().oneOfType([r().number,r().string]),symbols:r().bool,tabs:r().arrayOf(r().oneOf(["smaller","greater","range"])),style:r().object},_.defaultProps={domain:null,scaleParameterization:!1,step:.01,symbols:!0,tabs:["smaller","greater","range"],style:{}},t.default=(0,s.Zh)("learn/distribution")(_)}}]);