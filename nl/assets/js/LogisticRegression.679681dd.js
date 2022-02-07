/*! For license information please see LogisticRegression.679681dd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3488],{60666:function(t,e,r){r.r(e),r.d(e,{default:function(){return Pt}});var n=r(497326),a=r(894578),o=r(867855),s=r(202784),i=r(213980),l=r.n(i),u=r(198),f=r(822736),c=r(423184),h=r(109203),g=r(26266),m=r(770561),p=r(588703),d=r.n(p),v=r(32593),w=r.n(v),y=r(900766),b=r.n(y),x=r(74039),E=r.n(x),M=r(708579),Z=r(43649),F=r(837898),N=r(211565),A=r(615558),k=r(412042),P=r(287013),q=r.n(P),R=r(973670),V=r.n(R),S=r(20905),O=r(479724),T=r(641728);var j=function(t,e,r,n,a,o){for(var s=[],i={},l=0;l<t.length;l++){var u=r[t[l]];if(q()(n,t[l]))s.push(t[l]);else{for(var f=(0,S.Z)(u,t[l]),c=a?1:0;c<f.length;c++)s.push(t[l]+"_"+f[c]);i[t[l]]=f}}for(var h=[],g=[],m=0;m<r[t[0]].length;m++){var p=!1,d=[];a&&d.push(1);for(var v=0;v<t.length;v++){var w=r[t[v]];if(q()(n,t[v]))(0,O.Z)(w[m])?d.push(w[m]):p=!0;else{var y=w[m];if((0,T.Z)(y))p=!0;else for(var b=i[t[v]],x=a?1:0;x<b.length;x++)d.push(y===b[x]?1:0)}}p||(h=h.concat(d),g.push(r[e][m]===o?1:0))}var E=g.length;return{matrix:V()(h,{shape:[E,s.length+1]}),predictors:s,yvalues:g,nobs:E}};var L=function(t,e,r,n,a,o){for(var s=[],i={},l=r[t[0]].length,u=0;u<t.length;u++){var f=r[t[u]];if(q()(n,t[u]))s.push(t[u]);else{for(var c=(0,S.Z)(f,t[u]),h=a?1:0;h<c.length;h++)s.push(t[u]+"_"+c[h]);i[t[u]]=c}}for(var g=new Float64Array(l*(s.length+1)),m=0;m<l;m++){a&&(g[(s.length+1)*m]=1);for(var p=0,d=0;d<t.length;d++){var v=r[t[d]];if(q()(n,t[d]))p+=1,g[(s.length+1)*m+p]=v[m];else for(var w=i[t[d]],y=v[m],b=a?1:0;b<w.length;b++)p+=1,g[(s.length+1)*m+p]=y===w[b]?1:0}}return{matrix:V()(g,{shape:[l,s.length+1]}),predictors:s,yvalues:r[e].map((function(t){return t===o?1:0})),nobs:l}},U=r(566764),C=r(70756);class z{constructor(t){let e,r,n,a,o,s,i,l,u,f=(t=C.Z.checkMatrix(t)).clone(),c=f.rows,h=f.columns,g=new Float64Array(c),m=1;for(e=0;e<c;e++)g[e]=e;for(l=new Float64Array(c),r=0;r<h;r++){for(e=0;e<c;e++)l[e]=f.get(e,r);for(e=0;e<c;e++){for(u=Math.min(e,r),o=0,n=0;n<u;n++)o+=f.get(e,n)*l[n];l[e]-=o,f.set(e,r,l[e])}for(a=r,e=r+1;e<c;e++)Math.abs(l[e])>Math.abs(l[a])&&(a=e);if(a!==r){for(n=0;n<h;n++)s=f.get(a,n),f.set(a,n,f.get(r,n)),f.set(r,n,s);i=g[a],g[a]=g[r],g[r]=i,m=-m}if(r<c&&0!==f.get(r,r))for(e=r+1;e<c;e++)f.set(e,r,f.get(e,r)/f.get(r,r))}this.LU=f,this.pivotVector=g,this.pivotSign=m}isSingular(){let t=this.LU,e=t.columns;for(let r=0;r<e;r++)if(0===t.get(r,r))return!0;return!1}solve(t){t=U.Z.checkMatrix(t);let e=this.LU;if(e.rows!==t.rows)throw new Error("Invalid matrix dimensions");if(this.isSingular())throw new Error("LU matrix is singular");let r,n,a,o=t.columns,s=t.subMatrixRow(this.pivotVector,0,o-1),i=e.columns;for(a=0;a<i;a++)for(r=a+1;r<i;r++)for(n=0;n<o;n++)s.set(r,n,s.get(r,n)-s.get(a,n)*e.get(r,a));for(a=i-1;a>=0;a--){for(n=0;n<o;n++)s.set(a,n,s.get(a,n)/e.get(a,a));for(r=0;r<a;r++)for(n=0;n<o;n++)s.set(r,n,s.get(r,n)-s.get(a,n)*e.get(r,a))}return s}get determinant(){let t=this.LU;if(!t.isSquare())throw new Error("Matrix must be square");let e=this.pivotSign,r=t.columns;for(let n=0;n<r;n++)e*=t.get(n,n);return e}get lowerTriangularMatrix(){let t=this.LU,e=t.rows,r=t.columns,n=new U.Z(e,r);for(let a=0;a<e;a++)for(let e=0;e<r;e++)a>e?n.set(a,e,t.get(a,e)):a===e?n.set(a,e,1):n.set(a,e,0);return n}get upperTriangularMatrix(){let t=this.LU,e=t.rows,r=t.columns,n=new U.Z(e,r);for(let a=0;a<e;a++)for(let e=0;e<r;e++)a<=e?n.set(a,e,t.get(a,e)):n.set(a,e,0);return n}get pivotPermutationVector(){return Array.from(this.pivotVector)}}var G=r(31845);class I{constructor(t){let e,r,n,a,o=(t=C.Z.checkMatrix(t)).clone(),s=t.rows,i=t.columns,l=new Float64Array(i);for(n=0;n<i;n++){let t=0;for(e=n;e<s;e++)t=(0,G.G)(t,o.get(e,n));if(0!==t){for(o.get(n,n)<0&&(t=-t),e=n;e<s;e++)o.set(e,n,o.get(e,n)/t);for(o.set(n,n,o.get(n,n)+1),r=n+1;r<i;r++){for(a=0,e=n;e<s;e++)a+=o.get(e,n)*o.get(e,r);for(a=-a/o.get(n,n),e=n;e<s;e++)o.set(e,r,o.get(e,r)+a*o.get(e,n))}}l[n]=-t}this.QR=o,this.Rdiag=l}solve(t){t=U.Z.checkMatrix(t);let e=this.QR,r=e.rows;if(t.rows!==r)throw new Error("Matrix row dimensions must agree");if(!this.isFullRank())throw new Error("Matrix is rank deficient");let n,a,o,s,i=t.columns,l=t.clone(),u=e.columns;for(o=0;o<u;o++)for(a=0;a<i;a++){for(s=0,n=o;n<r;n++)s+=e.get(n,o)*l.get(n,a);for(s=-s/e.get(o,o),n=o;n<r;n++)l.set(n,a,l.get(n,a)+s*e.get(n,o))}for(o=u-1;o>=0;o--){for(a=0;a<i;a++)l.set(o,a,l.get(o,a)/this.Rdiag[o]);for(n=0;n<o;n++)for(a=0;a<i;a++)l.set(n,a,l.get(n,a)-l.get(o,a)*e.get(n,o))}return l.subMatrix(0,u-1,0,i-1)}isFullRank(){let t=this.QR.columns;for(let e=0;e<t;e++)if(0===this.Rdiag[e])return!1;return!0}get upperTriangularMatrix(){let t,e,r=this.QR,n=r.columns,a=new U.Z(n,n);for(t=0;t<n;t++)for(e=0;e<n;e++)t<e?a.set(t,e,r.get(t,e)):t===e?a.set(t,e,this.Rdiag[t]):a.set(t,e,0);return a}get orthogonalMatrix(){let t,e,r,n,a=this.QR,o=a.rows,s=a.columns,i=new U.Z(o,s);for(r=s-1;r>=0;r--){for(t=0;t<o;t++)i.set(t,r,0);for(i.set(r,r,1),e=r;e<s;e++)if(0!==a.get(r,r)){for(n=0,t=r;t<o;t++)n+=a.get(t,r)*i.get(t,e);for(n=-n/a.get(r,r),t=r;t<o;t++)i.set(t,e,i.get(t,e)+n*a.get(t,r))}}return i}}var $=r(49909);function _(t,e,r=!1){return t=C.Z.checkMatrix(t),e=C.Z.checkMatrix(e),r?new $.Z(t).solve(e):t.isSquare()?new z(t).solve(e):new I(t).solve(e)}var D=r(798030),Q=r.n(D),B=r(733727),X=r.n(B),W=r(190465),H=r.n(W),J=r(120638),K=r.n(J),Y=r(82483),tt=r.n(Y),et=r(808170),rt=r.n(et),nt=r(695688),at=r.n(nt),ot=r(5462),st=r(383356),it=r(376353);var lt=function(t,e){for(var r=t.shape,n=r[0],a=r[1],o=e.shape[1],s=U.Z.zeros(n,o),i=new Float64Array(a),l=0;l<o;l++){for(var u=0;u<a;u++)i[u]=e.get(u,l);for(var f=0;f<n;f++){for(var c=0,h=0;h<a;h++)c+=t.get(f,h)*i[h];s.set(f,l,c)}}return s};var ut=function(t,e){for(var r=t.shape,n=r[0],a=r[1],o=V()(new Float64Array(n*a),{shape:[n,a]}),s=0;s<n;s++)for(var i=0;i<a;i++)o.set(s,i,t.get(s,i)*e[s]);return o};var ft=function(t,e){for(var r=t.length,n=new Array(r),a=0;a<r;a++)n[a]=t[a]*e[a];return n},ct=function(t){for(var e=new Float64Array(t.length),r=0;r<t.length;r++)e[r]=t[r]*(1-t[r]);return e},ht=function(t){for(var e=t.length,r=new Float64Array(e),n=0;n<e;n++){var a=t[n];if(w()(a)>30)r[n]=tt();else{var o=H()(a);r[n]=o/(1+o)}}return r},gt=function(t){for(var e=t.length,r=new Float64Array(e),n=0;n<e;n++){var a=t[n];w()(a)>30?r[n]=tt():r[n]=H()(a)/X()(1+H()(a),2)}return r},mt=function(t,e,r){for(var n=0,a=0;a<t.length;a++)n+=Q()(rt()(t[a],e[a]));return-2*n+2*r},pt=function(t,e,r){for(var n=t.length,a=new Float64Array(n),o=0;o<n;o++){var s=e[o],i=t[o];a[o]=2*r[o]*(K()(i,i/s)+K()(1-i,(1-i)/(1-s)))}return a},dt=function(t,e,r){for(var n=new Float64Array(t.length),a=0;a<t.length;a++)n[a]=t[a]*(e[a]*e[a]/r[a]);return n},vt=function(t,e,r,n){for(var a=new Float64Array(e.length),o=0;o<e.length;o++)a[o]=t[o]+(e[o]-r[o])/n[o];return a};function wt(t,e){for(var r=new Float64Array(e.length),n=0;n<r.length;n++)r[n]=e[n]*(1-e[n]);for(var a=t.shape,o=a[0],s=a[1],i=new Float64Array(s),l=0;l<i.length;l++){for(var u=0,f=0;f<o;f++)u+=X()(t.get(f,l),2)*r[f];i[l]=at()(1/u)}return i}var yt=function(t,e,r){for(var n=(0,st.Z)(t),a=new Array(r).fill(1),o=new Float64Array(a.length),s=0;s<r;s++)o[s]=(a[s]*e[s]+.5)/(a[s]+1);var i,l,u=function(t){for(var e=t.length,r=new Float64Array(e),n=0;n<e;n++)r[n]=Q()(t[n]/(1-t[n]));return r}(o),f=ht(u),c=(0,it.Z)(pt(e,f,a)),h=!1;for(l=0;l<25;l++){var g=ct(f),m=gt(u),p=vt(u,e,f,m),d=dt(a,m,g),v=ft(d,p),y=ut(t,d),b=lt(n,y),x=(0,ot.Z)(n,v);i=_(b,U.Z.columnVector(x)),u=(0,ot.Z)(t,i.to1DArray()),f=ht(u);var E=(0,it.Z)(pt(e,f,a));if(w()(E-c)/(.1+w()(E))<1e-8){h=!0;break}c=E}var M=i.to1DArray(),Z=function(t){var e=function(t){for(var e=new Float64Array(t.length),r=0;r<t.length;r++)e[r]=1/(1+H()(-t[r]));return e}((0,ot.Z)(t,M));return e},F=Z(t);return{aic:mt(e,ht(u),M.length),stdErrors:wt(t,F),fitted:F,coefficients:M,iterations:l,converged:h,predict:Z}},bt=Object.defineProperty,xt=Object.getOwnPropertySymbols,Et=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,Zt=function(t,e,r){return e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},Ft=function(t,e){for(var r in e||(e={}))Et.call(e,r)&&Zt(t,r,e[r]);if(xt)for(var n,a=(0,o.Z)(xt(e));!(n=a()).done;){r=n.value;Mt.call(e,r)&&Zt(t,r,e[r])}return t},Nt=0,At=function(t){var e=t.y,r=t.success,n=t.x,a=t.intercept,o=t.omitMissing,s=t.data,i=t.quantitative;try{d()(n)||(n=[n]);var l=(o?j:L)(n,e,s,i,a,r),u=l.matrix,f=l.predictors,c=l.yvalues,h=l.nobs;return{result:yt(u,c,h),predictors:f}}catch(g){return{}}},kt=function(t){function e(e){var r,a,o,s;r=t.call(this,e)||this,a=(0,n.Z)(r),s=function(){var t=r.props,e=t.x,n=t.y,a=t.quantitative,o=t.intercept,s=t.success;d()(e)||(e=[e]),r.props.onPredict((function(t){var i=L(e,n,t,a,o,s),l=i.matrix,u=i.yvalues,f=r.state.result.predict(l),c=(0,N.Z)(f,u);return{yhat:f.map((function(t){return t>r.state.probabilityThreshold})),probs:f,residuals:c}}),Nt)},Zt(a,"symbol"!=typeof(o="handlePredict")?o+"":o,s),Nt+=1;var i=e.y,l=e.success,u=e.x,f=e.intercept,c=e.omitMissing,h=e.data,g=e.quantitative,m=At({y:i,success:l,x:u,intercept:f,omitMissing:c,data:h,quantitative:g}),p=m.result,v=m.predictors;return r.state=Ft({probabilityThreshold:.5,result:p,predictors:v},e),r}return(0,a.Z)(e,t),e.getDerivedStateFromProps=function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.success!==e.success||t.omitMissing!==e.omitMissing){var r=t.y,n=t.success,a=t.x,o=t.intercept,s=t.omitMissing,i=t.data,l=t.quantitative;return Ft(Ft({},At({y:r,success:n,x:a,intercept:o,omitMissing:s,data:i,quantitative:l})),t)}return null},e.prototype.render=function(){var t=this,e=this.state.result,r=this.props.t;return e?s.createElement("div",{style:{overflowX:"auto",width:"100%"}},s.createElement("span",{className:"title"},r("logistic-title",{y:this.props.y,counter:Nt})),function(t,e,r,n){return s.createElement(Z.Z,{bordered:!0,size:"sm"},s.createElement("thead",null,s.createElement("tr",null,s.createElement(M.Z,{placement:"right",tooltip:n("name-of-predictor")},s.createElement("th",null,n("predictor"))),s.createElement(M.Z,{placement:"right",tooltip:n("change-in-log")},s.createElement("th",null,n("coefficient"))),s.createElement(M.Z,{placement:"left",tooltip:n("standard-deviation-coefficient")},s.createElement("th",null,n("std-error"))),s.createElement(M.Z,{placement:"left",tooltip:s.createElement("span",null,n("test-statistic-coefficient-zero"),s.createElement(F.Z,{displayMode:!0,raw:"t = \\tfrac{\\text{Coefficient}}{\\text{Std. Error}}"}))},s.createElement("th",null,"t")),s.createElement(M.Z,{placement:"left",tooltip:s.createElement("span",null,n("p-value-coefficient-zero"),s.createElement(F.Z,{displayMode:!0,raw:"2 \\Phi( |t| )"}))},s.createElement("th",null,n("p-value"))))),s.createElement("tbody",null,e?s.createElement("tr",null,s.createElement("th",null,n("intercept")),s.createElement("td",null,r.coefficients[0].toFixed(6)),s.createElement("td",null,r.stdErrors[0].toFixed(4)),s.createElement("td",null,(r.coefficients[0]/r.stdErrors[0]).toFixed(4)),s.createElement("td",null,(2*b()(-w()(r.coefficients[0]/r.stdErrors[0]),0,1)).toFixed(4))):null,t.map((function(t,n){n+=Number(e);var a=r.coefficients[n]/r.stdErrors[n],o=2*b()(-w()(a),0,1);return s.createElement("tr",{key:n},s.createElement("th",null,t),s.createElement("td",null,r.coefficients[n].toFixed(6)),s.createElement("td",null,r.stdErrors[n].toFixed(4)),s.createElement("td",null,a.toFixed(4)),s.createElement("td",null,o.toFixed(4)))}))))}(this.state.predictors,this.props.intercept,e,this.props.t),s.createElement("i",null,e.converged?r("fisher-scoring-converged",{n:e.iterations}):r("fisher-scoring-not-converged",{n:e.iterations})),s.createElement("p",null,r("aic"),": ",E()(e.aic,-3)),this.props.onPredict?s.createElement(c.Z,null,s.createElement(M.Z,{tooltip:r("use-model-to-predict-tooltip-logistic")},s.createElement(m.Z,{variant:"secondary",size:"sm",onClick:this.handlePredict},this.props.t("use-model-to-predict"))),s.createElement(h.Z,{size:"sm"},s.createElement(h.Z.Text,null,r("threshold"),":"),s.createElement(g.Z,{type:"number",min:0,max:1,defaultValue:.5,step:.01,onChange:function(e){t.setState({probabilityThreshold:e.target.value})}}))):null):s.createElement(f.Z,{variant:"danger"},r("missing-attributes"))},e}(s.Component);kt.defaultProps={omitMissing:!1,intercept:!0,onPredict:null},kt.propTypes={data:l().object.isRequired,y:l().oneOfType([l().string,l().instanceOf(k.E)]).isRequired,success:l().any.isRequired,x:l().oneOfType([l().arrayOf(l().oneOfType([l().string,l().instanceOf(k.E)])),l().string,l().instanceOf(k.E)]).isRequired,quantitative:l().arrayOf(l().string).isRequired,omitMissing:l().bool,intercept:l().bool,onPredict:l().func};var Pt=(0,u.Z)("models")((0,A.W)(kt))},5462:function(t,e){e.Z=function(t,e){for(var r=t.shape[0],n=t.shape[1],a=new Float64Array(r),o=0;o<r;o++){for(var s=0,i=0;i<n;i++)s+=t.get(o,i)*e[i];a[o]=s}return a}},211565:function(t,e,r){var n=r(89596),a=r.n(n),o=r(309765);e.Z=function(t,e){var r=a()(e);if(!a()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,o.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var n=t.length,s=new Array(n);if(r){if(n!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var i=0;i<n;i++)s[i]=t[i]-e[i]}else for(var l=0;l<n;l++)s[l]=t[l]-e;return s}},383356:function(t,e,r){var n=r(879224),a=r.n(n);e.Z=function(t){var e=[t.shape[1],t.shape[0]],r=[t.strides[1],t.strides[0]],n=t.offset,o=t.order;return a()("float64",t._buffer,e,r,n,o)}},120638:function(t,e,r){var n=r(445369);t.exports=n},445369:function(t,e,r){var n=r(422957),a=r(798030);t.exports=function(t,e){return 0!==t||n(e)?t*a(e):0}},544602:function(t,e,r){var n=r(362739),a=r(422957);t.exports=function(t){return a(t)||t<0||t>1?n(NaN):function(e){if(a(e))return NaN;if(0===e)return 1-t;if(1===e)return t;return 0}}},808170:function(t,e,r){var n=r(501874),a=r(132502);n(a,"factory",r(544602)),t.exports=a},132502:function(t,e,r){var n=r(422957);t.exports=function(t,e){return n(t)||n(e)||e<0||e>1?NaN:0===t?1-e:1===t?e:0}},49909:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(566764),a=r(70756),o=r(31845);class s{constructor(t,e={}){if((t=a.Z.checkMatrix(t)).isEmpty())throw new Error("Matrix must be non-empty");let r=t.rows,s=t.columns;const{computeLeftSingularVectors:i=!0,computeRightSingularVectors:l=!0,autoTranspose:u=!1}=e;let f,c=Boolean(i),h=Boolean(l),g=!1;if(r<s)if(u){f=t.transpose(),r=f.rows,s=f.columns,g=!0;let e=c;c=h,h=e}else f=t.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else f=t.clone();let m=Math.min(r,s),p=Math.min(r+1,s),d=new Float64Array(p),v=new n.Z(r,m),w=new n.Z(s,s),y=new Float64Array(s),b=new Float64Array(r),x=new Float64Array(p);for(let n=0;n<p;n++)x[n]=n;let E=Math.min(r-1,s),M=Math.max(0,Math.min(s-2,r)),Z=Math.max(E,M);for(let n=0;n<Z;n++){if(n<E){d[n]=0;for(let t=n;t<r;t++)d[n]=(0,o.G)(d[n],f.get(t,n));if(0!==d[n]){f.get(n,n)<0&&(d[n]=-d[n]);for(let t=n;t<r;t++)f.set(t,n,f.get(t,n)/d[n]);f.set(n,n,f.get(n,n)+1)}d[n]=-d[n]}for(let t=n+1;t<s;t++){if(n<E&&0!==d[n]){let e=0;for(let a=n;a<r;a++)e+=f.get(a,n)*f.get(a,t);e=-e/f.get(n,n);for(let a=n;a<r;a++)f.set(a,t,f.get(a,t)+e*f.get(a,n))}y[t]=f.get(n,t)}if(c&&n<E)for(let t=n;t<r;t++)v.set(t,n,f.get(t,n));if(n<M){y[n]=0;for(let t=n+1;t<s;t++)y[n]=(0,o.G)(y[n],y[t]);if(0!==y[n]){y[n+1]<0&&(y[n]=0-y[n]);for(let t=n+1;t<s;t++)y[t]/=y[n];y[n+1]+=1}if(y[n]=-y[n],n+1<r&&0!==y[n]){for(let t=n+1;t<r;t++)b[t]=0;for(let t=n+1;t<r;t++)for(let e=n+1;e<s;e++)b[t]+=y[e]*f.get(t,e);for(let t=n+1;t<s;t++){let e=-y[t]/y[n+1];for(let a=n+1;a<r;a++)f.set(a,t,f.get(a,t)+e*b[a])}}if(h)for(let t=n+1;t<s;t++)w.set(t,n,y[t])}}let F=Math.min(s,r+1);if(E<s&&(d[E]=f.get(E,E)),r<F&&(d[F-1]=0),M+1<F&&(y[M]=f.get(M,F-1)),y[F-1]=0,c){for(let t=E;t<m;t++){for(let e=0;e<r;e++)v.set(e,t,0);v.set(t,t,1)}for(let t=E-1;t>=0;t--)if(0!==d[t]){for(let e=t+1;e<m;e++){let n=0;for(let a=t;a<r;a++)n+=v.get(a,t)*v.get(a,e);n=-n/v.get(t,t);for(let a=t;a<r;a++)v.set(a,e,v.get(a,e)+n*v.get(a,t))}for(let e=t;e<r;e++)v.set(e,t,-v.get(e,t));v.set(t,t,1+v.get(t,t));for(let e=0;e<t-1;e++)v.set(e,t,0)}else{for(let e=0;e<r;e++)v.set(e,t,0);v.set(t,t,1)}}if(h)for(let n=s-1;n>=0;n--){if(n<M&&0!==y[n])for(let t=n+1;t<s;t++){let e=0;for(let r=n+1;r<s;r++)e+=w.get(r,n)*w.get(r,t);e=-e/w.get(n+1,n);for(let r=n+1;r<s;r++)w.set(r,t,w.get(r,t)+e*w.get(r,n))}for(let t=0;t<s;t++)w.set(t,n,0);w.set(n,n,1)}let N=F-1,A=0,k=Number.EPSILON;for(;F>0;){let t,e;for(t=F-2;t>=-1&&-1!==t;t--){const e=Number.MIN_VALUE+k*Math.abs(d[t]+Math.abs(d[t+1]));if(Math.abs(y[t])<=e||Number.isNaN(y[t])){y[t]=0;break}}if(t===F-2)e=4;else{let r;for(r=F-1;r>=t&&r!==t;r--){let e=(r!==F?Math.abs(y[r]):0)+(r!==t+1?Math.abs(y[r-1]):0);if(Math.abs(d[r])<=k*e){d[r]=0;break}}r===t?e=3:r===F-1?e=1:(e=2,t=r)}switch(t++,e){case 1:{let e=y[F-2];y[F-2]=0;for(let r=F-2;r>=t;r--){let n=(0,o.G)(d[r],e),a=d[r]/n,i=e/n;if(d[r]=n,r!==t&&(e=-i*y[r-1],y[r-1]=a*y[r-1]),h)for(let t=0;t<s;t++)n=a*w.get(t,r)+i*w.get(t,F-1),w.set(t,F-1,-i*w.get(t,r)+a*w.get(t,F-1)),w.set(t,r,n)}break}case 2:{let e=y[t-1];y[t-1]=0;for(let n=t;n<F;n++){let a=(0,o.G)(d[n],e),s=d[n]/a,i=e/a;if(d[n]=a,e=-i*y[n],y[n]=s*y[n],c)for(let e=0;e<r;e++)a=s*v.get(e,n)+i*v.get(e,t-1),v.set(e,t-1,-i*v.get(e,n)+s*v.get(e,t-1)),v.set(e,n,a)}break}case 3:{const e=Math.max(Math.abs(d[F-1]),Math.abs(d[F-2]),Math.abs(y[F-2]),Math.abs(d[t]),Math.abs(y[t])),n=d[F-1]/e,a=d[F-2]/e,i=y[F-2]/e,l=d[t]/e,u=y[t]/e,f=((a+n)*(a-n)+i*i)/2,g=n*i*(n*i);let m=0;0===f&&0===g||(m=f<0?0-Math.sqrt(f*f+g):Math.sqrt(f*f+g),m=g/(f+m));let p=(l+n)*(l-n)+m,b=l*u;for(let x=t;x<F-1;x++){let e=(0,o.G)(p,b);0===e&&(e=Number.MIN_VALUE);let n=p/e,a=b/e;if(x!==t&&(y[x-1]=e),p=n*d[x]+a*y[x],y[x]=n*y[x]-a*d[x],b=a*d[x+1],d[x+1]=n*d[x+1],h)for(let t=0;t<s;t++)e=n*w.get(t,x)+a*w.get(t,x+1),w.set(t,x+1,-a*w.get(t,x)+n*w.get(t,x+1)),w.set(t,x,e);if(e=(0,o.G)(p,b),0===e&&(e=Number.MIN_VALUE),n=p/e,a=b/e,d[x]=e,p=n*y[x]+a*d[x+1],d[x+1]=-a*y[x]+n*d[x+1],b=a*y[x+1],y[x+1]=n*y[x+1],c&&x<r-1)for(let t=0;t<r;t++)e=n*v.get(t,x)+a*v.get(t,x+1),v.set(t,x+1,-a*v.get(t,x)+n*v.get(t,x+1)),v.set(t,x,e)}y[F-2]=p,A+=1;break}case 4:if(d[t]<=0&&(d[t]=d[t]<0?-d[t]:0,h))for(let e=0;e<=N;e++)w.set(e,t,-w.get(e,t));for(;t<N&&!(d[t]>=d[t+1]);){let e=d[t];if(d[t]=d[t+1],d[t+1]=e,h&&t<s-1)for(let r=0;r<s;r++)e=w.get(r,t+1),w.set(r,t+1,w.get(r,t)),w.set(r,t,e);if(c&&t<r-1)for(let n=0;n<r;n++)e=v.get(n,t+1),v.set(n,t+1,v.get(n,t)),v.set(n,t,e);t++}A=0,F--}}if(g){let t=w;w=v,v=t}this.m=r,this.n=s,this.s=d,this.U=v,this.V=w}solve(t){let e=t,r=this.threshold,a=this.s.length,o=n.Z.zeros(a,a);for(let n=0;n<a;n++)Math.abs(this.s[n])<=r?o.set(n,n,0):o.set(n,n,1/this.s[n]);let s=this.U,i=this.rightSingularVectors,l=i.mmul(o),u=i.rows,f=s.rows,c=n.Z.zeros(u,f);for(let n=0;n<u;n++)for(let t=0;t<f;t++){let e=0;for(let r=0;r<a;r++)e+=l.get(n,r)*s.get(t,r);c.set(n,t,e)}return c.mmul(e)}solveForDiagonal(t){return this.solve(n.Z.diag(t))}inverse(){let t=this.V,e=this.threshold,r=t.rows,a=t.columns,o=new n.Z(r,this.s.length);for(let n=0;n<r;n++)for(let r=0;r<a;r++)Math.abs(this.s[r])>e&&o.set(n,r,t.get(n,r)/this.s[r]);let s=this.U,i=s.rows,l=s.columns,u=new n.Z(r,i);for(let n=0;n<r;n++)for(let t=0;t<i;t++){let e=0;for(let r=0;r<l;r++)e+=o.get(n,r)*s.get(t,r);u.set(n,t,e)}return u}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let t=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,e=0,r=this.s;for(let n=0,a=r.length;n<a;n++)r[n]>t&&e++;return e}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return n.Z.diag(this.s)}}},31845:function(t,e,r){function n(t,e){let r=0;return Math.abs(t)>Math.abs(e)?(r=e/t,Math.abs(t)*Math.sqrt(1+r*r)):0!==e?(r=t/e,Math.abs(e)*Math.sqrt(1+r*r)):0}r.d(e,{G:function(){return n}})},70756:function(t,e,r){r.d(e,{Z:function(){return a}});var n=r(566764);class a extends n.X{constructor(t){super(),this.data=t,this.rows=t.length,this.columns=t[0].length}set(t,e,r){return this.data[t][e]=r,this}get(t,e){return this.data[t][e]}}},770561:function(t,e,r){var n=r(72779),a=r.n(n),o=r(202784),s=r(247830),i=r(429658),l=r(552322);const u=o.forwardRef((({as:t,bsPrefix:e,variant:r,size:n,active:o,className:u,...f},c)=>{const h=(0,i.vE)(e,"btn"),[g,{tagName:m}]=(0,s.FT)({tagName:t,...f}),p=m;return(0,l.jsx)(p,{...g,...f,ref:c,className:a()(u,h,o&&"active",r&&`${h}-${r}`,n&&`${h}-${n}`,f.href&&f.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=u},423184:function(t,e,r){var n=r(72779),a=r.n(n),o=r(202784),s=r(429658),i=r(552322);const l=o.forwardRef((({bsPrefix:t,size:e,vertical:r,className:n,as:o="div",...l},u)=>{const f=(0,s.vE)(t,"btn-group");let c=f;return r&&(c=`${f}-vertical`),(0,i.jsx)(o,{...l,ref:u,className:a()(n,c,e&&`${f}-${e}`)})}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,role:"group"},e.Z=l},109203:function(t,e,r){var n=r(72779),a=r.n(n),o=r(202784),s=r(911475),i=r(429658),l=r(676597),u=r(532094),f=r(552322);const c=(0,s.Z)("input-group-text",{Component:"span"}),h=o.forwardRef((({bsPrefix:t,size:e,hasValidation:r,className:n,as:s="div",...l},c)=>{t=(0,i.vE)(t,"input-group");const h=(0,o.useMemo)((()=>({})),[]);return(0,f.jsx)(u.Z.Provider,{value:h,children:(0,f.jsx)(s,{ref:c,...l,className:a()(n,t,e&&`${t}-${e}`,r&&"has-validation")})})}));h.displayName="InputGroup",e.Z=Object.assign(h,{Text:c,Radio:t=>(0,f.jsx)(c,{children:(0,f.jsx)(l.Z,{type:"radio",...t})}),Checkbox:t=>(0,f.jsx)(c,{children:(0,f.jsx)(l.Z,{type:"checkbox",...t})})})},532094:function(t,e,r){const n=r(202784).createContext(null);n.displayName="InputGroupContext",e.Z=n}}]);