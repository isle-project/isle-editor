/*! For license information please see LearnChisquareDistribution.74164403.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53691],{726786:function(e,t,a){var l=a(924812).factory;e.exports=function(e){return l(e/2,.5)}},789239:function(e,t,a){var l=a(501874),n=a(536238);l(n,"factory",a(726786)),e.exports=n},536238:function(e,t,a){var l=a(924812);e.exports=function(e,t){return l(e,t/2,.5)}},527758:function(e,t,a){a.r(t);var l=a(202784),n=a(213980),r=a.n(n),s=a(198),m=a(822736),i=a(471275),c=a(458264),o=a(312594),d=a(790817),p=a(320123),y=a(594010),E=a(323522),x=a(844204),u=a(850013),h=a(405362),b=a(328731),f=a(74039),Z=a.n(f),g=a(991655),k=a.n(g),F=a(589109),j=a.n(F),C=a(789239),w=a.n(C),$=a(658774),D=a(426214),P=a(194542),v=Object.defineProperty,A=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,O=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,J=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&O(e,a,t[a]);if(A)for(var a of A(t))W.call(t,a)&&O(e,a,t[a]);return e},X=(e,t,a)=>(O(e,"symbol"!=typeof t?t+"":t,a),a);const I=.99999;class K extends l.Component{constructor(e){super(e),X(this,"handleDFChange",(e=>{this.setState({df:e})})),X(this,"handleLowerChange",(e=>{this.setState({x0:e})})),X(this,"handleUpperChange",(e=>{this.setState({x1:e})})),this.state={df:1,x0:0,x1:1}}renderInputs(e){const{df:t,x0:a,x1:n}=this.state;return l.createElement(l.Fragment,null,l.createElement($.Z,{key:`${e}-df`,legend:this.props.t("degrees-of-freedom"),defaultValue:t,min:this.props.minDF,step:this.props.step,max:this.props.maxDF,onChange:this.handleDFChange}),l.createElement($.Z,{key:`${e}-x0`,legend:"x0",defaultValue:a,min:0,max:w()(I,t),step:this.props.step,onChange:this.handleLowerChange}),"range"===e?l.createElement($.Z,{legend:"x1",defaultValue:n,min:0,max:w()(I,t),step:this.props.step,onChange:this.handleUpperChange}):null)}render(){const{df:e,x0:t,x1:a}=this.state;return l.createElement(d.Z,{style:J({maxWidth:1200,margin:"10px auto"},this.props.style)},l.createElement(d.Z.Header,{as:"h3"},this.props.t("chi-squared-distribution")),l.createElement(d.Z.Body,null,l.createElement(p.Z,{defaultActiveKey:1,id:"chisquared-tabs"},l.createElement(y.Z,{eventKey:1,title:l.createElement(P.Z,{raw:"P(X \\le x_0)"})},l.createElement(i.Z,null,l.createElement(c.Z,null,l.createElement(o.Z,null,l.createElement(D.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("smaller"),l.createElement(P.Z,{raw:`P(X \\le ${Z()(t,-4)}) = ${Z()(j()(t,e),-4)}`,displayMode:!0}))),l.createElement(o.Z,null,l.createElement(E.k,{domain:{x:[.001,w()(I,e)],y:[0,.25]},theme:x.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(h.b,{samples:100,interpolation:"step",y:a=>a.x<=t?k()(a.x,e):0,style:{data:{opacity:.3,fill:"tomato"}}}),l.createElement(b.j,{samples:150,y:t=>k()(t.x,e)}))),l.createElement(o.Z,null,l.createElement(E.k,{theme:x.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(b.j,{samples:100,y:t=>j()(t.x,e),domain:{x:[0,w()(I,e)],y:[0,1.1]}}),l.createElement(b.j,{data:[{x:t,y:0},{x:t,y:j()(t,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),l.createElement(b.j,{data:[{x:0,y:j()(t,e)},{x:t,y:j()(t,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),l.createElement(y.Z,{eventKey:2,title:l.createElement(P.Z,{raw:"P(X > x_0)"})},l.createElement(i.Z,null,l.createElement(c.Z,null,l.createElement(o.Z,null,l.createElement(D.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("greater"),l.createElement(P.Z,{raw:`P(X > ${Z()(t,-4)} ) = ${Z()(1-j()(t,e),-4)}`,displayMode:!0}))),l.createElement(o.Z,null,l.createElement(E.k,{domain:{x:[.001,w()(I,e)],y:[0,.25]},theme:x.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(h.b,{samples:100,interpolation:"step",y:a=>a.x>t?k()(a.x,e):0,style:{data:{opacity:.3,fill:"tomato"}}}),l.createElement(b.j,{y:t=>k()(t.x,e),samples:150}))),l.createElement(o.Z,null,l.createElement(E.k,{theme:x.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(b.j,{samples:100,y:t=>j()(t.x,e),domain:{x:[0,w()(I,e)],y:[0,1.1]}}),l.createElement(b.j,{data:[{x:t,y:0},{x:t,y:j()(t,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),l.createElement(b.j,{data:[{x:t,y:1},{x:t,y:j()(t,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(b.j,{data:[{x:0,y:j()(t,e)},{x:t,y:j()(t,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),l.createElement(y.Z,{eventKey:3,title:l.createElement(P.Z,{raw:"P( x_0 \\le X \\le x_1)"})},l.createElement(i.Z,null,l.createElement(c.Z,null,l.createElement(o.Z,null,l.createElement(D.Z,{bodyClassName:"d-grid gap-1"},this.renderInputs("range"),a>=t?l.createElement(P.Z,{raw:`P( ${Z()(t,-4)} \\le X \\le ${Z()(a,-4)} ) = ${Z()(j()(a,e)-j()(t,e),-4)}`,displayMode:!0}):l.createElement(m.Z,{variant:"warning"},this.props.t("lower-bound-smaller-equal-upper-bound")))),l.createElement(o.Z,null,l.createElement(E.k,{domain:{x:[.001,w()(I,e)],y:[0,.25]},theme:x.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"PDF",tickFormat:e=>`${e}`,crossAxis:!1,style:{axisLabel:{padding:40}}}),l.createElement(h.b,{samples:100,interpolation:"step",y:l=>l.x>=t&&l.x<=a?k()(l.x,e):0,style:{data:{opacity:.3,fill:"tomato"}}}),l.createElement(b.j,{samples:150,y:t=>k()(t.x,e)}))),l.createElement(o.Z,null,l.createElement(E.k,{theme:x.J.material},l.createElement(u.E,{dependentAxis:!0}),l.createElement(u.E,{label:"CDF",tickFormat:e=>`${e}`,style:{axisLabel:{padding:40}}}),l.createElement(b.j,{samples:600,y:t=>j()(t.x,e),domain:{x:[0,w()(I,e)],y:[0,1.1]}}),l.createElement(b.j,{data:[{x:a,y:j()(t,e)},{x:a,y:j()(a,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),l.createElement(b.j,{data:[{x:t,y:j()(t,e)},{x:a,y:j()(t,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))))}}K.propTypes={step:r().oneOfType([r().number,r().string]),maxDF:r().number,minDF:r().number,style:r().object},K.defaultProps={maxDF:50,minDF:1,step:.01,style:{}},t.default=(0,s.Z)("learn/distribution")(K)}}]);