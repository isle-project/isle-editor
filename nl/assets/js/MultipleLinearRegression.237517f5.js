"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93215],{739175:function(t,e,r){r.r(e),r.d(e,{default:function(){return Q}});var s=r(202784),i=r(213980),n=r.n(i),a=r(198),o=r(872204),l=r(49909);class u{constructor(t,e,r={}){const{intercept:s=!0,statistics:i=!0}=r;if(this.statistics=i,!0===t)this.weights=e.weights,this.inputs=e.inputs,this.outputs=e.outputs,this.intercept=e.intercept;else{t=new o.Z(t),e=new o.Z(e),s&&t.addColumn(new Array(t.rows).fill(1));let r=t.transpose();const n=r.mmul(t),a=r.mmul(e),u=new l.Z(n).inverse(),h=a.transpose().mmul(u).transpose();if(this.weights=h.to2DArray(),this.inputs=t.columns,this.outputs=e.columns,s&&this.inputs--,this.intercept=s,i){const r=t.mmul(h),s=e.clone().addM(r.neg()).to2DArray().map((t=>Math.pow(t[0],2))).reduce(((t,e)=>t+e))/(e.rows-t.columns);this.stdError=Math.sqrt(s),this.stdErrorMatrix=function(t,e=Number.EPSILON){if((t=o.Z.checkMatrix(t)).isEmpty())return t.transpose();let r=new l.Z(t,{autoTranspose:!0}),s=r.leftSingularVectors,i=r.rightSingularVectors,n=r.diagonal;for(let a=0;a<n.length;a++)Math.abs(n[a])>e?n[a]=1/n[a]:n[a]=0;return i.mmul(o.Z.diag(n).mmul(s.transpose()))}(n).mul(s),this.stdErrors=this.stdErrorMatrix.diagonal().map((t=>Math.sqrt(t))),this.tStats=this.weights.map(((t,e)=>0===this.stdErrors[e]?0:t[0]/this.stdErrors[e]))}}}predict(t){if(Array.isArray(t)){if("number"==typeof t[0])return this._predict(t);if(Array.isArray(t[0])){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=this._predict(t[r]);return e}}else if(o.Z.isMatrix(t)){const e=new o.Z(t.rows,this.outputs);for(let r=0;r<t.rows;r++)e.setRow(r,this._predict(t.getRow(r)));return e}throw new TypeError("x must be a matrix or array of numbers")}_predict(t){const e=new Array(this.outputs);if(this.intercept)for(let r=0;r<this.outputs;r++)e[r]=this.weights[this.inputs][r];else e.fill(0);for(let r=0;r<this.inputs;r++)for(let s=0;s<this.outputs;s++)e[s]+=this.weights[r][s]*t[r];return e}score(){throw new Error("score method is not implemented yet")}toJSON(){return{name:"multivariateLinearRegression",weights:this.weights,inputs:this.inputs,outputs:this.outputs,intercept:this.intercept,summary:this.statistics?{regressionStatistics:{standardError:this.stdError,observations:this.outputs},variables:this.weights.map(((t,e)=>({label:e===this.weights.length-1?"Intercept":`X Variable ${e+1}`,coefficients:t,standardError:this.stdErrors[e],tStat:this.tStats[e]})))}:void 0}}static load(t){if("multivariateLinearRegression"!==t.name)throw new Error("not a MLR model");return new u(!0,t)}}var h=r(822736),c=r(770561),f=r(733727),d=r.n(f),g=r(686605),p=r.n(g),m=r(694751),y=r.n(m),b=r(287013),w=r.n(b),E=r(588703),v=r.n(E),M=r(32593),x=r.n(M),Z=r(254988),S=r.n(Z),q=r(257457),N=r(112114),O=r(46739),P=r(595959),A=r(788281),F=r(30468),k=r(99733),R=r(648246),V=r(741082),D=r(848285),L=r(55902),j=r(577662),T=Object.defineProperty,_=Object.defineProperties,I=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,U=(t,e,r)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,z=(t,e)=>{for(var r in e||(e={}))C.call(e,r)&&U(t,r,e[r]);if($)for(var r of $(e))G.call(e,r)&&U(t,r,e[r]);return t},B=(t,e,r)=>(U(t,"symbol"!=typeof e?e+"":e,r),r);let X=0;function J(t,e,r,s,i){v()(t)||(t=[t]);const n=[],a=[],o={},l=r[t[0]].length;for(let u=0;u<t.length;u++){const e=r[t[u]];if(w()(s,t[u]))a.push(t[u]);else{const r=(0,R.Z)(e,t[u]);for(let e=i?1:0;e<r.length;e++)a.push(`${t[u]}_${r[e]}`);o[t[u]]=r}}for(let u=0;u<l;u++){const e=[];for(let n=0;n<t.length;n++){const a=r[t[n]];if(w()(s,t[n]))e.push(a[u]);else{const r=o[t[n]],s=a[u];for(let t=i?1:0;t<r.length;t++)e.push(s===r[t]?1:0)}}n.push(e)}return{matrix:n,predictors:a,yvalues:r[e].map((t=>[t])),nobs:l}}function W(t,e,r,s,i){v()(t)||(t=[t]);const n=[],a=[],o={},l=[];for(let u=0;u<t.length;u++){const e=r[t[u]];if(w()(s,t[u]))a.push(t[u]);else{const r=(0,R.Z)(e,t[u]);for(let e=i?1:0;e<r.length;e++)a.push(`${t[u]}_${r[e]}`);o[t[u]]=r}}for(let u=0;u<r[t[0]].length;u++){const a=[];let h=!1;for(let e=0;e<t.length;e++){const n=r[t[e]];if(w()(s,t[e])){if(!(0,L.Z)(n[u])){h=!0;break}a.push(n[u])}else{const r=n[u];if((0,j.Z)(r)){h=!0;break}{const s=o[t[e]];for(let t=i?1:0;t<s.length;t++)a.push(r===s[t]?1:0)}}}const c=r[e][u];!h&&(0,L.Z)(c)&&(n.push(a),l.push([c]))}return{matrix:n,predictors:a,yvalues:l,nobs:l.length}}const H=({x:t,y:e,intercept:r,omitMissing:s,data:i,quantitative:n})=>{const a={};try{const o=s?W:J,{matrix:l,predictors:h,yvalues:c,nobs:f}=o(t,e,i,n,r);if(h.length>500)throw new Error("Too many predictors...");if(f<h.length)throw new Error("Not enough observations...");a.result=new u(l,c,{intercept:r});const g=a.result.predict(l).map((t=>t[0]));a.yhat=g;const p=(0,k.Z)(g);let m=0;for(let t=0;t<g.length;t++)m+=d()(g[t]-p,2);const y=(0,F.Z)(c,g);let b=0;for(let t=0;t<y.length;t++)b+=d()(y[t],2);const w=h.length;return a.resid=y,a.rSquared=m/(m+b),a.adjRSquared=1-(1-a.rSquared)*(f-1)/(f-w-1),a.fScore=m/w/(b/(f-w-1)),a.p=w,a.nobs=f,a.predictors=h,a}catch(o){return a}};class K extends s.Component{constructor(t){super(t),B(this,"handleDiagnostics",(()=>{const{x:t,y:e,intercept:r,t:i}=this.props,n=s.createElement(O.Z,(a=z({draggable:!0,editable:!0,fit:!0},(0,A._)(this.state.resid,"residuals")),_(a,I({meta:{type:"qqplot of regression residuals",x:t,y:e,intercept:r}}))));var a;const o=s.createElement(P.Z,{data:{Residuals:this.state.resid},variable:"Residuals",title:i("plotly:histogram-title",{x:"Residuals"})}),l=s.createElement(O.Z,{draggable:!0,editable:!0,fit:!0,data:[{x:this.state.yhat,y:this.state.resid,mode:"markers",type:this.state.yhat.length>2e3?"scattergl":"scatter"}],layout:{xaxis:{title:i("fitted-values")},yaxis:{title:i("residuals")},title:i("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:t,y:e,intercept:r}});this.props.onDiagnostics([n,o,l])})),B(this,"handlePredict",(()=>{const{quantitative:t,intercept:e}=this.props;this.props.onPredict((r=>{const{x:s,y:i}=this.props,{matrix:n}=J(s,i,r,t,e),a=this.state.result.predict(n).map((t=>t[0]));return{fitted:a,residuals:(0,F.Z)(r[i],a)}}),X)})),X+=1;const{x:e,y:r,intercept:i,omitMissing:n,data:a,quantitative:o}=t;this.state=z(z({},H({x:e,y:r,intercept:i,omitMissing:n,data:a,quantitative:o})),t)}static getDerivedStateFromProps(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.omitMissing!==e.omitMissing||t.intercept!==e.intercept){const{x:e,y:r,intercept:s,omitMissing:i,data:n,quantitative:a}=t;return z(z({},H({x:e,y:r,intercept:s,omitMissing:i,data:n,quantitative:a})),t)}return null}render(){const{y:t,predictors:e,nobs:r,result:i,adjRSquared:n,p:a,fScore:o,rSquared:l}=this.state,{t:u}=this.props;return i?s.createElement("div",{style:{overflowX:"auto",width:"100%"}},s.createElement("span",{className:"title"},u("multiple-regression-title",{y:t,counter:X})),((t,e,r,i,n)=>{const a=S().factory(r-e.length-1);return s.createElement(q.Z,{bordered:!0,size:"sm"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,n("predictor")),s.createElement("th",null,n("coefficient")),s.createElement("th",null,n("std-error")),s.createElement("th",null,"t"),s.createElement("th",null,n("p-value")))),s.createElement("tbody",null,i.intercept?s.createElement("tr",null,s.createElement("th",null,n("intercept")),s.createElement("td",null,i.weights[e.length][0].toFixed(6)),s.createElement("td",null,i.stdErrors[e.length].toFixed(4)),s.createElement("td",null,i.tStats[e.length].toFixed(4)),s.createElement("td",null,2*(1-a(x()(i.tStats[e.length]))).toFixed(4))):null,e.map(((t,e)=>s.createElement("tr",{key:e},s.createElement("th",null,t),s.createElement("td",null,i.weights[e][0].toFixed(6)),s.createElement("td",null,i.stdErrors[e].toFixed(4)),s.createElement("td",null,i.tStats[e].toFixed(4)),s.createElement("td",null,2*(1-a(x()(i.tStats[e]))).toFixed(4)))))))})(0,e,r,i,u),s.createElement("p",null,u("residual-standard-error"),": ",p()(i.stdError)),s.createElement("p",null,"R\xb2:"," ",l.toFixed(6),", ",u("adjusted")," ","R\xb2:"," ",n.toFixed(6)),s.createElement("p",null,u("f-statistic"),": ",o.toFixed(3)," (","df",": ",r-a-1,", ",a,"), ",u("p-value"),": ",(1-y()(o,a,r-a-1)).toFixed(6)),this.props.onPredict?s.createElement(N.Z,{placement:"top",tooltip:u("use-model-to-predict-tooltip")},s.createElement(c.Z,{variant:"secondary",size:"sm",onClick:this.handlePredict},u("use-model-to-predict"))):null,this.props.onDiagnostics?s.createElement(c.Z,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:this.handleDiagnostics},u("model-diagnostics")):null):s.createElement(h.Z,{variant:"danger"},this.props.t("missing-attributes"))}}K.defaultProps={omitMissing:!1,intercept:!0,onDiagnostics:null,onPredict:null},K.propTypes={data:n().object.isRequired,y:n().string.isRequired,x:n().oneOfType([n().arrayOf(n().oneOfType([n().string,n().instanceOf(D.E)])),n().string,n().instanceOf(D.E)]).isRequired,quantitative:n().arrayOf(n().string).isRequired,omitMissing:n().bool,intercept:n().bool,onDiagnostics:n().func,onPredict:n().func};var Q=(0,a.Z)(["models","plotly"])((0,V.W)(K))},30468:function(t,e,r){var s=r(89596),i=r.n(s),n=r(309765);e.Z=function(t,e){const r=i()(e);if(!i()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,n.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");const s=t.length,a=new Array(s);if(r){if(s!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(let r=0;r<s;r++)a[r]=t[r]-e[r]}else for(let i=0;i<s;i++)a[i]=t[i]-e;return a}},49909:function(t,e,r){r.d(e,{Z:function(){return a}});var s=r(872204),i=r(70756),n=r(31845);class a{constructor(t,e={}){if((t=i.Z.checkMatrix(t)).isEmpty())throw new Error("Matrix must be non-empty");let r=t.rows,a=t.columns;const{computeLeftSingularVectors:o=!0,computeRightSingularVectors:l=!0,autoTranspose:u=!1}=e;let h,c=Boolean(o),f=Boolean(l),d=!1;if(r<a)if(u){h=t.transpose(),r=h.rows,a=h.columns,d=!0;let e=c;c=f,f=e}else h=t.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else h=t.clone();let g=Math.min(r,a),p=Math.min(r+1,a),m=new Float64Array(p),y=new s.Z(r,g),b=new s.Z(a,a),w=new Float64Array(a),E=new Float64Array(r),v=new Float64Array(p);for(let s=0;s<p;s++)v[s]=s;let M=Math.min(r-1,a),x=Math.max(0,Math.min(a-2,r)),Z=Math.max(M,x);for(let s=0;s<Z;s++){if(s<M){m[s]=0;for(let t=s;t<r;t++)m[s]=(0,n.G)(m[s],h.get(t,s));if(0!==m[s]){h.get(s,s)<0&&(m[s]=-m[s]);for(let t=s;t<r;t++)h.set(t,s,h.get(t,s)/m[s]);h.set(s,s,h.get(s,s)+1)}m[s]=-m[s]}for(let t=s+1;t<a;t++){if(s<M&&0!==m[s]){let e=0;for(let i=s;i<r;i++)e+=h.get(i,s)*h.get(i,t);e=-e/h.get(s,s);for(let i=s;i<r;i++)h.set(i,t,h.get(i,t)+e*h.get(i,s))}w[t]=h.get(s,t)}if(c&&s<M)for(let t=s;t<r;t++)y.set(t,s,h.get(t,s));if(s<x){w[s]=0;for(let t=s+1;t<a;t++)w[s]=(0,n.G)(w[s],w[t]);if(0!==w[s]){w[s+1]<0&&(w[s]=0-w[s]);for(let t=s+1;t<a;t++)w[t]/=w[s];w[s+1]+=1}if(w[s]=-w[s],s+1<r&&0!==w[s]){for(let t=s+1;t<r;t++)E[t]=0;for(let t=s+1;t<r;t++)for(let e=s+1;e<a;e++)E[t]+=w[e]*h.get(t,e);for(let t=s+1;t<a;t++){let e=-w[t]/w[s+1];for(let i=s+1;i<r;i++)h.set(i,t,h.get(i,t)+e*E[i])}}if(f)for(let t=s+1;t<a;t++)b.set(t,s,w[t])}}let S=Math.min(a,r+1);if(M<a&&(m[M]=h.get(M,M)),r<S&&(m[S-1]=0),x+1<S&&(w[x]=h.get(x,S-1)),w[S-1]=0,c){for(let t=M;t<g;t++){for(let e=0;e<r;e++)y.set(e,t,0);y.set(t,t,1)}for(let t=M-1;t>=0;t--)if(0!==m[t]){for(let e=t+1;e<g;e++){let s=0;for(let i=t;i<r;i++)s+=y.get(i,t)*y.get(i,e);s=-s/y.get(t,t);for(let i=t;i<r;i++)y.set(i,e,y.get(i,e)+s*y.get(i,t))}for(let e=t;e<r;e++)y.set(e,t,-y.get(e,t));y.set(t,t,1+y.get(t,t));for(let e=0;e<t-1;e++)y.set(e,t,0)}else{for(let e=0;e<r;e++)y.set(e,t,0);y.set(t,t,1)}}if(f)for(let s=a-1;s>=0;s--){if(s<x&&0!==w[s])for(let t=s+1;t<a;t++){let e=0;for(let r=s+1;r<a;r++)e+=b.get(r,s)*b.get(r,t);e=-e/b.get(s+1,s);for(let r=s+1;r<a;r++)b.set(r,t,b.get(r,t)+e*b.get(r,s))}for(let t=0;t<a;t++)b.set(t,s,0);b.set(s,s,1)}let q=S-1,N=0,O=Number.EPSILON;for(;S>0;){let t,e;for(t=S-2;t>=-1&&-1!==t;t--){const e=Number.MIN_VALUE+O*Math.abs(m[t]+Math.abs(m[t+1]));if(Math.abs(w[t])<=e||Number.isNaN(w[t])){w[t]=0;break}}if(t===S-2)e=4;else{let r;for(r=S-1;r>=t&&r!==t;r--){let e=(r!==S?Math.abs(w[r]):0)+(r!==t+1?Math.abs(w[r-1]):0);if(Math.abs(m[r])<=O*e){m[r]=0;break}}r===t?e=3:r===S-1?e=1:(e=2,t=r)}switch(t++,e){case 1:{let e=w[S-2];w[S-2]=0;for(let r=S-2;r>=t;r--){let s=(0,n.G)(m[r],e),i=m[r]/s,o=e/s;if(m[r]=s,r!==t&&(e=-o*w[r-1],w[r-1]=i*w[r-1]),f)for(let t=0;t<a;t++)s=i*b.get(t,r)+o*b.get(t,S-1),b.set(t,S-1,-o*b.get(t,r)+i*b.get(t,S-1)),b.set(t,r,s)}break}case 2:{let e=w[t-1];w[t-1]=0;for(let s=t;s<S;s++){let i=(0,n.G)(m[s],e),a=m[s]/i,o=e/i;if(m[s]=i,e=-o*w[s],w[s]=a*w[s],c)for(let e=0;e<r;e++)i=a*y.get(e,s)+o*y.get(e,t-1),y.set(e,t-1,-o*y.get(e,s)+a*y.get(e,t-1)),y.set(e,s,i)}break}case 3:{const e=Math.max(Math.abs(m[S-1]),Math.abs(m[S-2]),Math.abs(w[S-2]),Math.abs(m[t]),Math.abs(w[t])),s=m[S-1]/e,i=m[S-2]/e,o=w[S-2]/e,l=m[t]/e,u=w[t]/e,h=((i+s)*(i-s)+o*o)/2,d=s*o*(s*o);let g=0;0===h&&0===d||(g=h<0?0-Math.sqrt(h*h+d):Math.sqrt(h*h+d),g=d/(h+g));let p=(l+s)*(l-s)+g,E=l*u;for(let v=t;v<S-1;v++){let e=(0,n.G)(p,E);0===e&&(e=Number.MIN_VALUE);let s=p/e,i=E/e;if(v!==t&&(w[v-1]=e),p=s*m[v]+i*w[v],w[v]=s*w[v]-i*m[v],E=i*m[v+1],m[v+1]=s*m[v+1],f)for(let t=0;t<a;t++)e=s*b.get(t,v)+i*b.get(t,v+1),b.set(t,v+1,-i*b.get(t,v)+s*b.get(t,v+1)),b.set(t,v,e);if(e=(0,n.G)(p,E),0===e&&(e=Number.MIN_VALUE),s=p/e,i=E/e,m[v]=e,p=s*w[v]+i*m[v+1],m[v+1]=-i*w[v]+s*m[v+1],E=i*w[v+1],w[v+1]=s*w[v+1],c&&v<r-1)for(let t=0;t<r;t++)e=s*y.get(t,v)+i*y.get(t,v+1),y.set(t,v+1,-i*y.get(t,v)+s*y.get(t,v+1)),y.set(t,v,e)}w[S-2]=p,N+=1;break}case 4:if(m[t]<=0&&(m[t]=m[t]<0?-m[t]:0,f))for(let e=0;e<=q;e++)b.set(e,t,-b.get(e,t));for(;t<q&&!(m[t]>=m[t+1]);){let e=m[t];if(m[t]=m[t+1],m[t+1]=e,f&&t<a-1)for(let r=0;r<a;r++)e=b.get(r,t+1),b.set(r,t+1,b.get(r,t)),b.set(r,t,e);if(c&&t<r-1)for(let s=0;s<r;s++)e=y.get(s,t+1),y.set(s,t+1,y.get(s,t)),y.set(s,t,e);t++}N=0,S--}}if(d){let t=b;b=y,y=t}this.m=r,this.n=a,this.s=m,this.U=y,this.V=b}solve(t){let e=t,r=this.threshold,i=this.s.length,n=s.Z.zeros(i,i);for(let s=0;s<i;s++)Math.abs(this.s[s])<=r?n.set(s,s,0):n.set(s,s,1/this.s[s]);let a=this.U,o=this.rightSingularVectors,l=o.mmul(n),u=o.rows,h=a.rows,c=s.Z.zeros(u,h);for(let s=0;s<u;s++)for(let t=0;t<h;t++){let e=0;for(let r=0;r<i;r++)e+=l.get(s,r)*a.get(t,r);c.set(s,t,e)}return c.mmul(e)}solveForDiagonal(t){return this.solve(s.Z.diag(t))}inverse(){let t=this.V,e=this.threshold,r=t.rows,i=t.columns,n=new s.Z(r,this.s.length);for(let s=0;s<r;s++)for(let r=0;r<i;r++)Math.abs(this.s[r])>e&&n.set(s,r,t.get(s,r)/this.s[r]);let a=this.U,o=a.rows,l=a.columns,u=new s.Z(r,o);for(let s=0;s<r;s++)for(let t=0;t<o;t++){let e=0;for(let r=0;r<l;r++)e+=n.get(s,r)*a.get(t,r);u.set(s,t,e)}return u}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let t=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,e=0,r=this.s;for(let s=0,i=r.length;s<i;s++)r[s]>t&&e++;return e}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return s.Z.diag(this.s)}}},31845:function(t,e,r){function s(t,e){let r=0;return Math.abs(t)>Math.abs(e)?(r=e/t,Math.abs(t)*Math.sqrt(1+r*r)):0!==e?(r=t/e,Math.abs(e)*Math.sqrt(1+r*r)):0}r.d(e,{G:function(){return s}})},70756:function(t,e,r){r.d(e,{Z:function(){return i}});var s=r(872204);class i extends s.X{constructor(t){super(),this.data=t,this.rows=t.length,this.columns=t[0].length}set(t,e,r){return this.data[t][e]=r,this}get(t,e){return this.data[t][e]}}},770561:function(t,e,r){var s=r(72779),i=r.n(s),n=r(202784),a=r(247830),o=r(429658),l=r(552322);const u=n.forwardRef((({as:t,bsPrefix:e,variant:r,size:s,active:n,className:u,...h},c)=>{const f=(0,o.vE)(e,"btn"),[d,{tagName:g}]=(0,a.FT)({tagName:t,...h}),p=g;return(0,l.jsx)(p,{...d,...h,ref:c,className:i()(u,f,n&&"active",r&&`${f}-${r}`,s&&`${f}-${s}`,h.href&&h.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=u}}]);