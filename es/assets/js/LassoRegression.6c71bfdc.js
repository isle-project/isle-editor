/*! For license information please see LassoRegression.6c71bfdc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6794],{842339:function(t,e,r){r.r(e),r.d(e,{default:function(){return Zt}});var a=r(497326),i=r(894578),n=r(55196),s=r(202784),o=r(213980),u=r.n(o),l=r(198),c=r(822736),v=r(287013),h=r.n(v),f=r(309765),p=r.n(f),d=r(770561),m=r(708579),b=r(43649),y=r(89596),g=r.n(y);var w=function(t,e){var r=g()(e);if(!g()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,f.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,i=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be multiplied must have a length equal to that of the input array.");for(var n=0;n<a;n++)i[n]=t[n]*e[n]}else for(var s=0;s<a;s++)i[s]=t[s]*e;return i},E=r(12860),x=r(519907),Z=r(649985),P=r(881447),T=r.n(P);var q=function(t,e,r){void 0===e&&(e=!0),void 0===r&&(r=!0);var a=(0,x.Z)(t),i=(0,Z.Z)(t),n=t.length,s=new Array(n);if(e)if(r)for(var o=0;o<n;o++)s[o]=(t[o]-a)/i;else for(var u=0;u<n;u++)s[u]=t[u]-a;else if(r)for(var l=0;l<n;l++)s[l]=t[l]/i;else t.slice(),(0,E.Z)("out");return T()(s,"mu",a),T()(s,"sigma",i),s},A=r(338664),k=r(412042),O=r(588703),N=r.n(O),F=r(147777),S=r.n(F),V=r(471205),z=r.n(V),j=r(437069),R=r.n(j),C=r(695688),K=r.n(C);var _=function(t,e,r,a){N()(t)||(t=[t]);for(var i=[],n=[],s={},o={},u={},l=e[t[0]].length,c=0;c<t.length;c++)if(h()(r,t[c])){var v=q(e[t[c]]);o[t[c]]=v,n.push(t[c])}else{for(var f=e[t[c]],p=S()(f,z()),d=t[c].categories||R()(p),m=a?1:0;m<d.length;m++){var b=t[c]+"_"+d[m];n.push(b);var y=p[d[m]]/l;u[b]={mu:y,sigma:K()(y*(1-y))}}s[t[c]]=d}for(var g=0;g<l;g++){var w=[];a&&w.push(1);for(var E=0;E<t.length;E++)if(h()(r,t[E])){var x=o[t[E]];w.push(x[g])}else for(var Z=e[t[E]],P=s[t[E]],T=Z[g],A=a?1:0;A<P.length;A++){var k=u[t[E]+"_"+P[A]],O=k.mu,F=k.sigma;w.push(T===P[A]?(1-O)/F:-O/F)}i.push(w)}return{matrix:i,predictors:n,categoricalStats:u,standardized:o}},M=r(690299),B=r.n(M),D=r(605977),I=r.n(D),W=r(916290),X=r.n(W),G=r(248453),H=r.n(G),J=r(335396),L=r.n(J),Q=r(879224),U=r.n(Q),Y=r(973670),$=r.n(Y),tt=r(32593),et=r.n(tt),rt=r(5462),at=r(383356),it=r(211565);var nt=function(t,e,r){var a=g()(e);if(!g()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!a&&!(0,f.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var i=t.length,n=new Array(i);if(a){if(i!==e.length)throw new Error("invalid input argument. Array to be divided must have a length equal to that of the input array.");for(var s=0;s<i;s++)n[s]=t[s]/e[s]}else for(var o=0;o<i;o++)n[o]=t[o]/e;return n};var st=function(t,e,r){for(var a=0,i=t.shape[0],n=0;n<i;n++){var s=t.get(n,r),o=e.get(n,r);0!==s&&0!==o&&(a+=s*o)}return a};var ot=function(t,e){for(var r=t.length,a=0,i=0;i<r;i++)a+=t[i]*e[i];return a};var ut=function(t,e){return t>e?t-e:t<-e?t+e:0},lt=B()("isle:lasso"),ct=1e-9,vt=function(t,e){for(var r=new Float64Array(t.shape[0]),a=0;a<r.length;a++)r[a]=t.get(a,e);return r};function ht(t,e,r){var a=this;this.y=t,this.x=e,this.lambda=r,this.N=e.shape[0],this.p=e.shape[1],this.beta=new Float64Array(this.p),this.betast=new Float64Array(this.p),this.active=I()(0,this.beta.length,1),this.nonactive=[],this.presid=U()("float64",new Float64Array(e._buffer.length),e.shape,e.strides,e.offset,e.order),this.init=function(){a.iteration=0,a.iterate()},this.init()}ht.prototype.testKKT=function(){for(var t=this.beta,e=this.N,r=this.x,a=this.y,i=(0,it.Z)(a,(0,rt.Z)(r,t)),n=nt((0,rt.Z)((0,at.Z)(r),i),e),s=0;s<t.length;s++)if(0===t[s]){if(et()(n[s])>this.lambda+ct)return!1}else if(t[s]>0&&n[s]-this.lambda*X()(t[s])>ct)return!1;return!0},ht.prototype.testActiveSet=function(){for(var t=!1,e=this.predict(this.x).residuals,r=0;r<this.nonactive.length;r++){var a=this.nonactive[r],i=vt(this.x,a);et()(ot(i,e))/this.N>this.lambda&&(this.active.push(a),this.nonactive.splice(r,1),t=!0)}return lt("Active set changes..."),t},ht.prototype.iterate=function(){var t=this.N,e=this.p,r=this.x,a=this.y;if(this.iteration+=1,!(this.iteration>1e4)){for(var i=!0,n=0;n<this.active.length;n++){for(var s=this.active[n],o=0;o<t;o++){for(var u=a[o],l=0;l<e;l++)u-=s!==l?r.get(o,l)*this.beta[l]:0;this.presid.set(o,s,u)}this.betast[s]=1/t*st(r,this.presid,s);var c=this.beta[s],v=ut(this.betast[s],this.lambda);et()(v-c)>ct&&(i=!1),this.beta[s]=v}for(var h=this.active.length-1;h>=0;h--){var f=this.active[h];et()(this.beta[f])<ct&&(this.active.splice(h,1),this.nonactive.push(f))}(!1===i||this.testActiveSet())&&this.iterate()}},ht.prototype.predict=function(t){return H()(t)&&(t=$()(t)),(0,rt.Z)(t,this.beta)};var ft=function(t,e,r){if(!p())throw new TypeError("invalid input argument. The third argument must be a number primitive. Value: `"+r+"`");if(!g()(e))throw new TypeError("invalid input argument. The second argument must be array-like. Value: `"+e+"`");if(H()(t))t=$()(t);else if(!L()(t)){throw new TypeError("invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `"+t+"`")}return new ht(e,t,r)},pt=Object.defineProperty,dt=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,yt=function(t,e,r){return e in t?pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},gt=function(t,e){for(var r in e||(e={}))mt.call(e,r)&&yt(t,r,e[r]);if(dt)for(var a,i=(0,n.Z)(dt(e));!(a=i()).done;){r=a.value;bt.call(e,r)&&yt(t,r,e[r])}return t},wt=0,Et=function(t){var e=t.x,r=t.y,a=t.lambda,i=t.data,n=t.quantitative,s=t.intercept;try{var o=i[r];o=q(o,!1,!0);var u=_(e,i,n,s),l=u.matrix,c=u.predictors,v=u.categoricalStats,f=u.standardized,p=new ft(l,o,a);if(s){for(var d=0,m=1;m<p.beta.length;m++){var b=c[m-1];h()(n,b)?(p.beta[m]*=o.sigma/f[b].sigma,d+=p.beta[m]*f[b].mu):(p.beta[m]*=o.sigma/v[b].sigma,d+=p.beta[m]*v[b].mu)}p.beta[0]=o.mu-d}else for(var y=0;y<p.beta.length;y++){var g=c[y];h()(n,g)?p.beta[y]*=o.sigma/f[g].sigma:p.beta[y]*=o.sigma/v[g].sigma}return{predictors:c,result:p,yvalues:o}}catch(w){return{}}},xt=function(t){function e(e){var r,i,n,s;r=t.call(this,e)||this,i=(0,a.Z)(r),s=function(){r.props.onPredict((function(t){var e=_(r.props.x,t,r.props.quantitative,r.props.intercept).matrix,a=r.state.result.predict(e);a=w(a,r.state.yvalues.sigma);for(var i=new Array(a.length),n=0;n<a.length;n++)i[n]=t[r.props.y][n]-a[n];return{fitted:a,residuals:i}}),wt)},yt(i,"symbol"!=typeof(n="handlePredict")?n+"":n,s),wt+=1;var o=e.x,u=e.y,l=e.lambda,c=e.data,v=e.quantitative,h=e.intercept;return r.state=gt(gt({},Et({x:o,y:u,lambda:l,data:c,quantitative:v,intercept:h})),e),r}return(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.intercept!==e.intercept||t.lambda!==e.lambda){var r=t.x,a=t.y,i=t.lambda,n=t.data,s=t.quantitative,o=t.intercept;return gt(gt({},Et({x:r,y:a,lambda:i,data:n,quantitative:s,intercept:o})),t)}return null},e.prototype.render=function(){var t=this.props,e=t.y,r=t.intercept,a=t.lambda,i=t.onPredict,n=t.t,o=this.state,u=o.result,l=o.predictors;return u?(0,f.isPrimitive)(a)?s.createElement("div",{style:{overflowX:"auto",width:"100%"}},s.createElement("span",{className:"title"},n("lasso-title",{y:e,lambda:a.toFixed(4),counter:wt})),function(t,e,r,a){return s.createElement(b.Z,{bordered:!0,size:"sm"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,a("predictor")),s.createElement("th",null,a("coefficient")))),s.createElement("tbody",null,e?s.createElement("tr",null,s.createElement("th",null,a("intercept")),s.createElement("td",null,r.beta[0].toFixed(6))):null,t.map((function(t,a){return s.createElement("tr",{key:a},s.createElement("th",null,t),s.createElement("td",null,r.beta[a+Number(e)].toFixed(6)))}))))}(l,r,u,n),s.createElement("p",null,u.testKKT()?n("kkt-satisfied"):n("kkt-not-satisfied")),i?s.createElement(m.Z,{tooltip:n("use-model-to-predict-tooltip")},s.createElement(d.Z,{variant:"secondary",size:"sm",onClick:this.handlePredict},this.props.t("use-model-to-predict"))):null):s.createElement(c.Z,{variant:"danger"},n("lambda-not-number")):s.createElement(c.Z,{variant:"danger"},n("missing-attributes"))},e}(s.Component);xt.defaultProps={lambda:.001,intercept:!0,onPredict:function(){}},xt.propTypes={data:u().object.isRequired,y:u().string.isRequired,x:u().oneOfType([u().arrayOf(u().oneOfType([u().string,u().instanceOf(k.E)])),u().string,u().instanceOf(k.E)]).isRequired,quantitative:u().arrayOf(u().string).isRequired,lambda:u().number,intercept:u().bool,onPredict:u().func};var Zt=(0,l.Z)("models")((0,A.W)(xt))},5462:function(t,e){e.Z=function(t,e){for(var r=t.shape[0],a=t.shape[1],i=new Float64Array(r),n=0;n<r;n++){for(var s=0,o=0;o<a;o++)s+=t.get(n,o)*e[o];i[n]=s}return i}},211565:function(t,e,r){var a=r(89596),i=r.n(a),n=r(309765);e.Z=function(t,e){var r=i()(e);if(!i()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,n.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,s=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var o=0;o<a;o++)s[o]=t[o]-e[o]}else for(var u=0;u<a;u++)s[u]=t[u]-e;return s}},383356:function(t,e,r){var a=r(879224),i=r.n(a);e.Z=function(t){var e=[t.shape[1],t.shape[0]],r=[t.strides[1],t.strides[0]],a=t.offset,n=t.order;return i()("float64",t._buffer,e,r,a,n)}},248453:function(t,e,r){var a=r(113449);t.exports=a},113449:function(t,e,r){var a=r(384871)(r(588703));t.exports=a},881447:function(t,e,r){var a=r(324169);t.exports=a},324169:function(t,e,r){var a=r(555528);t.exports=function(t,e,r){a(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}},770561:function(t,e,r){var a=r(807896),i=r(231461),n=r(72779),s=r.n(n),o=r(202784),u=r(429658),l=r(482695),c=["bsPrefix","variant","size","active","className","block","type","as"],v=o.forwardRef((function(t,e){var r=t.bsPrefix,n=t.variant,v=t.size,h=t.active,f=t.className,p=t.block,d=t.type,m=t.as,b=(0,i.Z)(t,c),y=(0,u.vE)(r,"btn"),g=s()(f,y,h&&"active",n&&y+"-"+n,p&&y+"-block",v&&y+"-"+v);if(b.href)return o.createElement(l.Z,(0,a.Z)({},b,{as:m,ref:e,className:s()(g,b.disabled&&"disabled")}));e&&(b.ref=e),d?b.type=d:m||(b.type="button");var w=m||"button";return o.createElement(w,(0,a.Z)({},b,{className:g}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=v}}]);