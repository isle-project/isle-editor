/*! For license information please see SimpleLinearRegression.b2b8edce.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54651],{784373:function(e,t,l){var n=l(863653);e.exports=n},863653:function(e){e.exports=function(){var e,t=0;return function(l){if(0===arguments.length)return e?t:null;return e=!0,t+=l*l}}},37605:function(e,t,l){l.r(t);var n=l(202784),r=l(213980),a=l.n(r),s=l(498614),i=l(822736),o=l(770561),c=l(257457),d=l(112114),u=l(524785),m=l.n(u),p=l(563402),g=l.n(p),y=l(784373),h=l.n(y),f=l(254988),E=l.n(f),x=l(32593),b=l.n(x),v=l(695688),Z=l.n(v),F=l(99733),w=l(46739),P=l(595959),R=l(788281),k=l(22242),O=l(785419),j=l(741082),M=l(848285),A=l(55902),D=l(577662),q=Object.defineProperty,z=Object.defineProperties,C=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,L=(e,t,l)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,S=(e,t)=>{for(var l in t||(t={}))$.call(t,l)&&L(e,l,t[l]);if(N)for(var l of N(t))T.call(t,l)&&L(e,l,t[l]);return e},X=(e,t)=>z(e,C(t));let _=0;function B(e,t){const l=(0,F.Z)(e),n=(0,F.Z)(t);let r=0,a=0;const s=e.length;for(let o=0;o<s;o++){let s=e[o]-l;r+=s*s,a+=s*(t[o]-n)}const i=a/r;return{yint:n-i*l,slope:i,xg:e,yg:t}}function I({x:e,y:t,data:l,group:n,omitMissing:r}){const a=l[e],s=l[t],i=l[n];let o=0;if(r){const e=[],t=[],l=[];if(i)for(let n=0;n<a.length;n++)!(0,D.Z)(i[n])&&(0,A.Z)(a[n])&&(0,A.Z)(s[n])?(e.push(a[n]),t.push(s[n]),l.push(i[n])):o+=1;else for(let n=0;n<a.length;n++)(0,A.Z)(a[n])&&(0,A.Z)(s[n])?(e.push(a[n]),t.push(s[n])):o+=1;return{xd:e,yd:t,groups:l,nRemoved:o}}return{xd:a,yd:s,groups:i}}class W extends n.Component{constructor(e){super(e),_+=1;const{x:t,y:l,data:n,group:r,omitMissing:a}=e;this.state=I({x:t,y:l,data:n,group:r,omitMissing:a})}static getDerivedStateFromProps(e,t){if(e.data!==t.data||e.x!==t.x||e.y!==t.y||e.group!==t.group||e.omitMissing!==t.omitMissing){const{x:t,y:l,intercept:n,omitMissing:r,data:a,group:s}=e;return I({x:t,y:l,intercept:n,omitMissing:r,data:a,group:s})}return null}render(){const{xd:e,yd:t,groups:l}=this.state,{x:r,y:a,group:s,data:u,t:p}=this.props;let y;try{if(s){const f=(0,O.Z)(e,l,F.Z);if(Object.keys(f).length>50)return n.createElement(i.Z,{variant:"danger"},p("too-many-groups"));const x=(0,k.Z)(e,t,l,B);y=n.createElement("div",{style:{overflowX:"auto",width:"100%"}},n.createElement("label",null,p("regression-y-on-x",{x:r,y:a})),n.createElement("p",null,n.createElement("i",null,p("grouped-by")," ",s,":")),m()(g()(x,((e,t)=>{const{yint:l,slope:a,xg:s,yg:i}=e,o=h()(),d=h()(),u=h()(),m=E().factory(i.length-2);for(let n=0;n<i.length;n++){o(l+a*s[n]-i[n]),d(s[n]),u(s[n]-f[t])}const g=o()/(i.length-2),y=g/u(),x=Z()(y),v=1/i.length*g*d()/u(),F=Z()(v),w=a/x,P=l/F;return n.createElement("div",{key:`group-${t}`},n.createElement("label",null,t,":"),n.createElement(c.Z,{bordered:!0,size:"sm"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,p("variable")),n.createElement("th",null,p("coefficient")),n.createElement("th",null,p("std-error")),n.createElement("th",null,"t"),n.createElement("th",null,p("p-value")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,p("intercept")),n.createElement("td",null,l.toFixed(4)),n.createElement("td",null,F.toFixed(4)),n.createElement("td",null,P.toFixed(4)),n.createElement("td",null,2*(1-m(b()(P))).toFixed(4))),n.createElement("tr",null,n.createElement("td",null,r),n.createElement("td",null,a.toFixed(4)),n.createElement("td",null,x.toFixed(4)),n.createElement("td",null,w.toFixed(4)),n.createElement("td",null,2*(1-m(b()(w))).toFixed(4))))))}))),this.props.onPredict?n.createElement(d.Z,{tooltip:p("use-model-to-predict-tooltip")},n.createElement(o.Z,{variant:"secondary",size:"sm",onClick:()=>{this.props.onPredict((e=>{const t=e[r],l=e[a],n=new Float64Array(l.length),i=new Float64Array(l.length),o=e[s];for(let r=0;r<n.length;r++){const{yint:e,slope:a}=x[o[r]];n[r]=e+a*t[r],i[r]=l[r]-n[r]}return{fitted:n,residuals:i}}),_)}},this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?n.createElement(o.Z,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:()=>{const e=u[r],t=u[a],l=new Float64Array(t.length),i=new Float64Array(t.length),o=u[s];for(let n=0;n<l.length;n++){const{yint:r,slope:a}=x[o[n]];l[n]=r+a*e[n],i[n]=t[n]-l[n]}const c=n.createElement(w.Z,X(S({draggable:!0,editable:!0,fit:!0},(0,R._)(i,"residuals")),{meta:{type:"qqplot of regression residuals",x:e,y:t}})),d=n.createElement(w.Z,{draggable:!0,editable:!0,fit:!0,data:[{x:l,y:i,mode:"markers"}],layout:{xaxis:{title:p("fitted-values")},yaxis:{title:p("residuals")},title:p("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:e,y:t}}),m=n.createElement(P.Z,{data:{Residuals:i},variable:"Residuals",title:p("plotly:histogram-title",{x:"Residuals"})});this.props.onDiagnostics([c,m,d])}},p("model-diagnostics")):null)}else{const{yint:l,slope:s}=B(e,t),i=h()(),m=h()(),g=h()(),f=(0,F.Z)(e),x=E().factory(t.length-2);for(let n=0;n<t.length;n++){i(l+s*e[n]-t[n]),m(e[n]),g(e[n]-f)}const v=i()/(t.length-2),k=v/g(),O=Z()(k),j=1/t.length*v*m()/g(),M=Z()(j),A=s/O,D=l/M;y=n.createElement("div",{style:{overflowX:"auto",width:"100%"}},n.createElement("label",null,p("simple-regression-title",{x:r,y:a,counter:_})),n.createElement(c.Z,{bordered:!0,size:"sm"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,p("variable")),n.createElement("th",null,p("coefficient")),n.createElement("th",null,p("std-error")),n.createElement("th",null,"t"),n.createElement("th",null,p("p-value")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,p("intercept")),n.createElement("td",null,l.toFixed(4)),n.createElement("td",null,M.toFixed(4)),n.createElement("td",null,D.toFixed(4)),n.createElement("td",null,2*(1-x(b()(D))).toFixed(4))),n.createElement("tr",null,n.createElement("td",null,r),n.createElement("td",null,s.toFixed(4)),n.createElement("td",null,O.toFixed(4)),n.createElement("td",null,A.toFixed(4)),n.createElement("td",null,2*(1-x(b()(A))).toFixed(4))))),this.state.nRemoved>0&&n.createElement("small",null,p("missing-excluded",{nRemoved:this.state.nRemoved})),this.props.onPredict?n.createElement(d.Z,{tooltip:p("use-model-to-predict-tooltip")},n.createElement(o.Z,{variant:"secondary",size:"sm",onClick:()=>{this.props.onPredict((e=>{const t=e[r],n=e[a],i=new Array(n.length),o=new Array(n.length);for(let r=0;r<i.length;r++)i[r]=l+s*t[r],o[r]=n[r]-i[r];return{fitted:i,residuals:o}}),_)}},this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?n.createElement(o.Z,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:()=>{const e=u[r],t=u[a],i=new Array(t.length),o=new Array(t.length);for(let n=0;n<i.length;n++)i[n]=l+s*e[n],o[n]=t[n]-i[n];const c=n.createElement(w.Z,X(S({draggable:!0,editable:!0,fit:!0},(0,R._)(o,"residuals")),{meta:{type:"qqplot of regression residuals",x:e,y:t}})),d=n.createElement(P.Z,{data:{Residuals:o},variable:"Residuals",title:p("plotly:histogram-title",{x:"Residuals"})}),m=n.createElement(w.Z,{draggable:!0,editable:!0,fit:!0,data:[{x:i,y:o,mode:"markers",type:i.length>2e3?"scattergl":"scatter"}],layout:{xaxis:{title:p("fitted-values")},yaxis:{title:p("residuals")},title:p("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:e,y:t}});this.props.onDiagnostics([c,d,m])}},p("model-diagnostics")):null)}return y}catch(f){return n.createElement(i.Z,{variant:"danger"},p("missing-attributes"))}}}W.defaultProps={group:null,omitMissing:!1,onDiagnostics:null,onPredict:null},W.propTypes={data:a().object.isRequired,x:a().string.isRequired,y:a().string.isRequired,group:a().oneOfType([a().string,a().instanceOf(M.E)]),omitMissing:a().bool,onDiagnostics:a().func,onPredict:a().func},t.default=(0,s.Zh)(["models","plotly"])((0,j.W)(W))},770561:function(e,t,l){var n=l(72779),r=l.n(n),a=l(202784),s=l(247830),i=l(429658),o=l(552322);const c=a.forwardRef((({as:e,bsPrefix:t,variant:l,size:n,active:a,className:c,...d},u)=>{const m=(0,i.vE)(t,"btn"),[p,{tagName:g}]=(0,s.FT)({tagName:e,...d}),y=g;return(0,o.jsx)(y,{...p,...d,ref:u,className:r()(c,m,a&&"active",l&&`${m}-${l}`,n&&`${m}-${n}`,d.href&&d.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c}}]);