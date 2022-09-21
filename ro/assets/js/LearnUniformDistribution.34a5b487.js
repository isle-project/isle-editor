"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63596],{756473:function(e,t,a){a.r(t);var l=a(202784),n=a(213980),r=a.n(n),s=a(198),m=a(471275),i=a(312594),c=a(458264),d=a(790817),o=a(320123),p=a(594010),E=a(323522),y=a(844204),x=a(850013),h=a(405362),u=a(328731),b=a(74039),g=a.n(b),Z=a(383975),k=a.n(Z),C=a(58469),f=a.n(C),j=a(506078),F=a(658774),$=a(426214),w=a(194542),P=Object.defineProperty,D=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,L=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,M=(e,t)=>{for(var a in t||(t={}))A.call(t,a)&&L(e,a,t[a]);if(D)for(var a of D(t))v.call(t,a)&&L(e,a,t[a]);return e},O=(e,t,a)=>(L(e,"symbol"!=typeof t?t+"":t,a),a);const J={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},X={data:{opacity:.3,fill:"tomato"}};class I extends l.Component{constructor(e){super(e),O(this,"handleMinChange",(e=>{this.setState({min:e})})),O(this,"handleMaxChange",(e=>{this.setState({max:e})})),O(this,"handleLowerChange",(e=>{this.setState({x0:e})})),O(this,"handleUpperChange",(e=>{this.setState({x1:e})}));this.state={min:0,max:1,x0:0,x1:1}}renderInputs(e){const{min:t,max:a,x0:n,x1:r}=this.state,{t:s}=this.props;return l.createElement(l.Fragment,null,l.createElement(j.Z,{key:`${e}-min`,legend:s("minimum"),defaultValue:t,max:a-.01,step:.1,onChange:this.handleMinChange}),l.createElement(j.Z,{key:`${e}-max`,legend:s("maximum"),defaultValue:a,step:.1,onChange:this.handleMaxChange}),l.createElement(F.Z,{key:`${e}-x0`,legend:"x0",defaultValue:n,min:t-1,max:a+1,step:this.props.step,onChange:this.handleLowerChange}),"range"===e?l.createElement(F.Z,{key:`${e}-x1`,legend:"x1",defaultValue:r,min:t-1,max:a+1,step:this.props.step,onChange:this.handleUpperChange}):null)}render(){const{min:e,max:t,x0:a,x1:n}=this.state,{t:r}=this.props,s=k()(e,e,t);return l.createElement(d.Z,{style:M({maxWidth:1200,margin:"10px auto"},this.props.style)},l.createElement(d.Z.Header,{as:"h3"},r("uniform-distribution")),l.createElement(d.Z.Body,null,l.createElement(o.Z,{defaultActiveKey:1,id:"uniform-tabs"},l.createElement(p.Z,{eventKey:1,title:l.createElement(w.Z,{raw:"P(X \\le x_0)"})},l.createElement(m.Z,null,l.createElement(c.Z,null,l.createElement(i.Z,null,l.createElement($.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("smaller"),l.createElement(w.Z,{raw:`P(X \\le ${g()(a,-4)}) = ${g()(f()(a,e,t),-4)}`,displayMode:!0}))),l.createElement(i.Z,null,l.createElement(E.k,{domain:{x:[e-1,t+1],y:[0,s+.1]},theme:y.J.material},l.createElement(x.E,{dependentAxis:!0}),l.createElement(x.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(h.b,{samples:200,interpolation:"step",y:l=>l.x<=a?k()(l.x,e,t):0,style:X}),l.createElement(u.j,{data:[[e,0],[e,s],[t,s],[t,0]],x:e=>e[0],y:e=>e[1]}))),this.props.hideCDF?null:l.createElement(i.Z,null,l.createElement(E.k,{theme:y.J.material},l.createElement(x.E,{dependentAxis:!0}),l.createElement(x.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(u.j,{samples:200,y:a=>f()(a.x,e,t),domain:{x:[e-1,t+1],y:[0,1.1]}}),l.createElement(u.j,{data:[{x:a,y:0},{x:a,y:f()(a,e,t)}],style:J}),l.createElement(u.j,{data:[{x:0,y:f()(a,e,t)},{x:a,y:f()(a,e,t)}],style:J})))))),l.createElement(p.Z,{eventKey:2,title:l.createElement(w.Z,{raw:"P(X > x_0)"})},l.createElement(m.Z,null,l.createElement(c.Z,null,l.createElement(i.Z,null,l.createElement($.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("greater"),l.createElement(w.Z,{raw:`P(X > ${g()(a,-4)}) = ${g()(1-f()(a,e,t),-4)}`,displayMode:!0}))),l.createElement(i.Z,null,l.createElement(E.k,{domain:{x:[e-1,t+1],y:[0,s+.1]},theme:y.J.material},l.createElement(x.E,{dependentAxis:!0}),l.createElement(x.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(h.b,{samples:200,interpolation:"step",y:l=>l.x>a?k()(l.x,e,t):0,style:X}),l.createElement(u.j,{data:[[e,0],[e,s],[t,s],[t,0]],x:e=>e[0],y:e=>e[1]}))),this.props.hideCDF?null:l.createElement(i.Z,null,l.createElement(E.k,{theme:y.J.material},l.createElement(x.E,{dependentAxis:!0}),l.createElement(x.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(u.j,{samples:200,y:a=>f()(a.x,e,t),domain:{x:[e-1,t+1],y:[0,1.1]}}),l.createElement(u.j,{data:[{x:a,y:0},{x:a,y:f()(a,e,t)}],style:J}),l.createElement(u.j,{data:[{x:a,y:1},{x:a,y:f()(a,e,t)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(u.j,{data:[{x:0,y:f()(a,e,t)},{x:a,y:f()(a,e,t)}],style:J})))))),l.createElement(p.Z,{eventKey:3,title:l.createElement(w.Z,{raw:"P( x_0 \\le X \\le x_1 )"})},l.createElement(m.Z,null,l.createElement(c.Z,null,l.createElement(i.Z,null,l.createElement($.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("range"),l.createElement(w.Z,{raw:`P( ${g()(a,-4)} \\le X \\le ${g()(n,-4)}) = ${g()(f()(n,e,t)-f()(a,e,t),-4)}`,displayMode:!0}))),l.createElement(i.Z,null,l.createElement(E.k,{domain:{x:[e-1,t+1],y:[0,s+.1]},theme:y.J.material},l.createElement(x.E,{dependentAxis:!0}),l.createElement(x.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(h.b,{samples:200,interpolation:"step",y:l=>l.x>=a&&l.x<=n?k()(l.x,e,t):0,style:X}),l.createElement(u.j,{data:[[e,0],[e,s],[t,s],[t,0]],x:e=>e[0],y:e=>e[1]}))),this.props.hideCDF?null:l.createElement(i.Z,null,l.createElement(E.k,{theme:y.J.material},l.createElement(x.E,{dependentAxis:!0}),l.createElement(x.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(u.j,{samples:200,y:a=>f()(a.x,e,t),domain:{x:[e-1,t+1],y:[0,1.1]}}),l.createElement(u.j,{data:[{x:n,y:f()(a,e,t)},{x:n,y:f()(n,e,t)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(u.j,{data:[{x:a,y:f()(a,e,t)},{x:n,y:f()(a,e,t)}],style:J})))))))))}}I.propTypes={hideCDF:r().bool,step:r().oneOfType([r().number,r().string]),style:r().object},I.defaultProps={hideCDF:!1,step:.01,style:{}},t.default=(0,s.Z)("learn/distribution")(I)}}]);