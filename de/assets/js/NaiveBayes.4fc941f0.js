/*! For license information please see NaiveBayes.4fc941f0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{610615:function(t,e,r){r.r(e),r.d(e,{default:function(){return ot}});var a=r(497326),n=r(894578),s=r(55196),i=r(202784),o=r(213980),l=r.n(o),c=r(198),u=r(822736),p=r(770561),h=r(287013),f=r.n(h),v=r(43649),m=r(190465),d=r.n(m),y=r(708579),g=r(973670),b=r.n(g),E=(r(700601),r(248453)),w=r.n(E),Z=r(89596),P=r.n(Z),x=r(335396),k=r.n(x),A=(r(309765),r(12860)),O=r(320231),q=r.n(O),M=r(798030),T=r.n(M),F=r(733727),N=r.n(F),G=r(987598),z=r.n(G),V=r(519907),j=r(649985),R=r(292169),_=r(211565);function C(t,e){this.n=t.shape[0],this.p=t.shape[1],this.classes=q()(e.slice()),this.nclass=this.classes.length,this.fitGaussian(t,e)}C.prototype.score=r(887461),C.prototype.fitGaussian=function(t,e){var r=this;this.prior={};var a=[this.p,this.nclass];this.mu=b()(new Float64Array(a[0]*a[1]),{shape:a}),this.sigma=b()(new Float64Array(a[0]*a[1]),{shape:a});for(var n=0;n<this.nclass;n++){for(var s=[],i=this.classes[n],o=0;o<this.n;o++)e[o]===i&&s.push(o);var l=s.length;this.prior[i]=T()(l/this.n);for(var c=function(e){var a=s.map((function(r){return t.get(r,e)})),i=(0,V.Z)(a),o=(0,j.Z)(a);r.mu.set(e,n,i),r.sigma.set(e,n,o)},u=0;u<this.p;u++)c(u)}},C.prototype.calcGaussianProb=function(t,e){for(var r=this.classes[e],a=this.prior[r],n=0;n<this.p;n++){var s=this.sigma.get(n,e),i=s*s,o=this.mu.get(n,e);a+=-.5*T()(2*z()*i)-N()(t[n]-o,2)/i}return a},C.prototype.predictOne=function(t){for(var e=this.classes.length,r=new Array(e),a=0;a<e;a++)r[a]=this.calcGaussianProb(t,a);for(var n=r[0],s=this.classes[0],i=0;i<e;i++){var o=r[i];o>n&&(n=o,s=this.classes[i])}return s},C.prototype.predict=function(t){var e=this.classes.length;if(w()(t)&&(t=b()(t)),k()(t)){for(var r=t.shape,a=r[0],n=r[1],s=new Array(a),i=0;i<a;i++){for(var o=new Array(e),l=0;l<e;l++){for(var c=new Array(n),u=0;u<n;u++)c[u]=t.get(i,u);o[l]=this.calcGaussianProb(c,l)}for(var p=o[0],h=this.classes[0],f=0;f<e;f++){var v=o[f];v>p&&(p=v,h=this.classes[f])}s[i]=h}return s}return this.predictOne(t)},C.prototype.predictProbs=function(t){if(w()(t)&&(t=b()(t)),k()(t)){for(var e=t.shape,r=e[0],a=e[1],n=new Array(r),s=0;s<r;s++){for(var i=new Array(this.nclass),o=0;o<this.nclass;o++){for(var l=new Array(a),c=0;c<a;c++)l[c]=t.get(s,c);i[o]=this.calcGaussianProb(l,o)}for(var u=(0,R.Z)(i),p=0,h=0;h<i.length;h++)p+=d()(i[h]-u);var f=u+T()(p);i=(0,_.Z)(i,f),n[s]=i.map((function(t){return d()(t)}))}return n}for(var v=new Array(this.nclass),m=0;m<this.nclass;m++)v[m]=this.calcGaussianProb(t,m);for(var y=(0,R.Z)(v),g=0,E=0;E<v.length;E++)g+=d()(v[E]-y);var Z=y+T()(g);return(0,_.Z)(v,Z),(0,A.Z)("logLik"),v.map((function(t){return d()(t)}))};var S=C,I=r(376353);function B(t,e,r){this.n=t.shape[0],this.p=t.shape[1],this.classes=q()(e.slice()),this.nclass=this.classes.length,this.alpha=r,this.fitMultinomial(t,e)}B.prototype.score=r(887461),B.prototype.fitMultinomial=function(t,e){for(var r={},a=[this.p,this.nclass],n=b()(new Float64Array(a[0]*a[1]),{shape:a}),s=0;s<this.nclass;s++){for(var i=[],o=new Int32Array(this.p),l=this.classes[s],c=0;c<this.n;c++)e[c]===l&&i.push(c);var u=i.length;r[l]=T()(u/this.n);for(var p=0,h=function(e){var r=i.map((function(r){return t.get(r,e)}));o[e]=(0,I.Z)(r),p+=o[e]},f=0;f<this.p;f++)h(f);for(var v=0;v<this.p;v++){var m=T()(o[v]+this.alpha)-T()(p+this.p*this.alpha);n.set(v,s,m)}}this.prior=r,this.cprob=n},B.prototype.calcMultinomProb=function(t,e,r){var a=this.classes[e],n=this.prior[a];for(r=0;r<this.p;r++){n+=t[r]?t[r]*this.cprob.get(r,e):0}return n},B.prototype.predictOne=function(t){for(var e=this.classes.length,r=new Array(e),a=0;a<e;a++){var n=this.classes[a];r[a]=this.prior[n];for(var s=0;s<this.p;s++){var i=t[s]?t[s]*this.cprob.get(s,a):0;r[a]+=i}}for(var o=r[0],l=this.classes[0],c=0;c<e;c++){var u=r[c];u>o&&(o=u,l=this.classes[c])}return l},B.prototype.predict=function(t){var e=this.classes.length;if(w()(t)&&(t=b()(t)),k()(t)){for(var r=[],a=t.shape[0],n=0;n<a;n++){for(var s=new Array(e),i=0;i<e;i++){var o=this.classes[i];s[i]=this.prior[o];for(var l=0;l<this.p;l++){var c=t.get(n,l)?t.get(n,l)*this.cprob.get(l,i):0;s[i]+=c}}for(var u=s[0],p=this.classes[0],h=0;h<e;h++){var f=s[h];f>u&&(u=f,p=this.classes[h])}r[n]=p}return r}return this.predictOne(t)},B.prototype.predictProbs=function(t){if(w()(t)&&(t=b()(t)),k()(t)){for(var e=t.shape[0],r=new Array(e),a=0;a<e;a++){for(var n=new Array(this.nclass),s=0;s<this.nclass;s++){var i=this.classes[s];n[s]=this.prior[i];for(var o=0;o<this.p;o++){var l=t.get(a,o)?t.get(a,o)*this.cprob.get(o,s):0;n[s]+=l}}for(var c=(0,R.Z)(n),u=0,p=0;p<n.length;p++)u+=d()(n[p]-c);var h=c+T()(u);n=(0,_.Z)(n,h),r[a]=n.map((function(t){return d()(t)}))}return r}for(var f=new Array(this.nclass),v=0;v<this.nclass;v++){var m=this.classes[v];f[v]=this.prior[m];for(var y=0;y<this.p;y++){var g=t[y]*this.cprob.get(y,v);f[v]+=g}}for(var E=(0,R.Z)(f),Z=0,P=0;P<f.length;P++)Z+=d()(f[P]-E);var x=E+T()(Z);return(f=(0,_.Z)(f,x)).map((function(t){return d()(t)}))};var D=r(588703),L=r.n(D),W=r(754176),X=r(479724),H=r(641728);function J(t,e,r,a){var n=[],s=[],i={};L()(t)||(t=[t]);for(var o=0;o<t.length;o++){var l=r[t[o]];if(f()(a,t[o]))s.push(t[o]);else{for(var c=(0,W.Z)(l,t[o]),u=0;u<c.length;u++)s.push(t[o]+"_"+c[u]);i[t[o]]=c}}for(var p=r[t[0]].length,h=0;h<p;h++){for(var v=[],m=0;m<t.length;m++){var d=r[t[m]];if(f()(a,t[m]))v.push(d[h]);else for(var y=i[t[m]],g=d[h],E=0;E<y.length;E++)v.push(g===y[E]?1:0)}n.push(v)}return{matrix:n=b()(n),predictors:s,yvalues:r[e]}}function K(t,e,r,a){var n=[],s=[],i={};L()(t)||(t=[t]);for(var o=0;o<t.length;o++){var l=r[t[o]];if(f()(a,t[o]))s.push(t[o]);else{for(var c=(0,W.Z)(l,t[o]),u=0;u<c.length;u++)s.push(t[o]+"_"+c[u]);i[t[o]]=c}}for(var p=r[t[0]].length,h=[],v=0;v<p;v++){for(var m=[],d=!1,y=0;y<t.length;y++){var g=r[t[y]];if(f()(a,t[y]))(0,X.Z)(g[v])?m.push(g[v]):d=!0;else{var E=i[t[y]],w=g[v];if((0,H.Z)(w))d=!0;else for(var Z=0;Z<E.length;Z++)m.push(w===E[Z]?1:0)}}(0,H.Z)(r[e][v])&&(d=!0),d||(n.push(m),h.push(r[e][v]))}return{matrix:n=b()(n),predictors:s,yvalues:h}}var Q=r(338664),U=r(412042),Y=Object.defineProperty,$=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,rt=function(t,e,r){return e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},at=function(t,e){for(var r in e||(e={}))tt.call(e,r)&&rt(t,r,e[r]);if($)for(var a,n=(0,s.Z)($(e));!(a=n()).done;){r=a.value;et.call(e,r)&&rt(t,r,e[r])}return t},nt=0,st=function(t){var e=t.x,r=t.y,a=t.data,n=t.quantitative,s=t.omitMissing;try{var i=(s?K:J)(e,r,a,n),o=i.matrix,l=i.predictors,c=function(t,e){if(w()(t))t=b()(t);else if(!k()(t))throw new TypeError("invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `"+t+"`");if(!P()(e))throw new TypeError("invalid input argument. The second argument must be array-like. Value: `"+e+"`");return new S(t,e)}(o,i.yvalues);return{result:c,predictors:l}}catch(u){return{}}},it=function(t){function e(e){var r,n,s,i;r=t.call(this,e)||this,n=(0,a.Z)(r),i=function(){r.props.onPredict((function(t){for(var e=r.state.result,a=J(r.props.x,r.props.y,t,r.props.quantitative).matrix,n=e.predictProbs(a),s={},i=function(t){var r="probs_"+e.classes[t]+"_bayes"+nt;s[r]=n.map((function(e){return e[t]}))},o=0;o<e.classes.length;o++)i(o);var l=e.predict(a),c="pred_bayes"+nt,u=r.props.categorical.slice();return f()(u,c)||u.push(c),{fitted:l,classProbs:s}}),nt)},rt(n,"symbol"!=typeof(s="handlePrediction")?s+"":s,i),nt+=1;var o=e.x,l=e.y,c=e.data,u=e.quantitative,p=e.omitMissing;return r.state=at(at({},st({x:o,y:l,data:c,quantitative:u,omitMissing:p})),e),r}return(0,n.Z)(e,t),e.getDerivedStateFromProps=function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.omitMissing!==e.omitMissing){var r=t.x,a=t.y,n=t.data,s=t.quantitative,i=t.omitMissing;return at(at({},st({x:r,y:a,data:n,quantitative:s,omitMissing:i})),t)}return null},e.prototype.render=function(){var t=this.state,e=t.result,r=t.predictors,a=this.props.t;return e?i.createElement("div",{style:{overflowX:"auto",width:"100%"}},i.createElement("span",{className:"title"},a("naive-bayes-for-response",{y:this.props.y,counter:nt})),function(t,e,r,a){return i.createElement("div",null,i.createElement("span",{className:"title"},a("apriori-probs"),":"),i.createElement(v.Z,{bordered:!0,size:"sm"},i.createElement("thead",null,i.createElement("tr",null,e.classes.map((function(t,e){return i.createElement("th",{key:e},t)})))),i.createElement("tbody",null,i.createElement("tr",null,e.classes.map((function(t,r){return i.createElement("th",{key:r},d()(e.prior[t]).toFixed(3))}))))),i.createElement("span",{className:"title"},a("conditionals"),":"),t.map((function(t,n){return f()(r,t)?i.createElement(v.Z,{bordered:!0,size:"sm",key:n},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,t),e.classes.map((function(t,e){return i.createElement("th",{key:e},t)})))),i.createElement("tbody",null,i.createElement("tr",null,i.createElement("th",null,a("mean")),e.classes.map((function(t,r){return i.createElement("td",{key:n+"-"+r},e.mu.get(n,r).toFixed(6))}))),i.createElement("tr",null,i.createElement("th",null,a("sd")),e.classes.map((function(t,r){return i.createElement("td",{key:n+"-"+r},e.sigma.get(n,r).toFixed(6))}))))):i.createElement(v.Z,{bordered:!0,size:"sm",key:n},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,t),e.classes.map((function(t,e){return i.createElement("th",{key:e},t)})))),i.createElement("tbody",null,i.createElement("tr",null,i.createElement("th",null,a("yes")),e.classes.map((function(t,r){return i.createElement("td",{key:n+"-"+r},e.mu.get(n,r).toFixed(3))}))),i.createElement("tr",null,i.createElement("th",null,a("no")),e.classes.map((function(t,r){return i.createElement("td",{key:n+"-"+r},(1-e.mu.get(n,r)).toFixed(3))})))))})))}(r,e,this.props.quantitative,a),this.props.onPredict?i.createElement(y.Z,{tooltip:a("use-model-to-predict-tooltip")},i.createElement(p.Z,{variant:"secondary",size:"sm",onClick:this.handlePrediction},a("use-model-to-predict"))):null):i.createElement(u.Z,{variant:"danger"},a("missing-attributes"))},e}(i.Component);it.defaultProps={omitMissing:!1,onPredict:null},it.propTypes={data:l().object.isRequired,y:l().oneOfType([l().string,l().instanceOf(U.E)]).isRequired,x:l().oneOfType([l().arrayOf(l().oneOfType([l().string,l().instanceOf(U.E)])),l().string,l().instanceOf(U.E)]).isRequired,quantitative:l().arrayOf(l().string).isRequired,omitMissing:l().bool,onPredict:l().func};var ot=(0,c.Z)("models")((0,Q.W)(it))},887461:function(t,e,r){r.r(e);var a=r(89596),n=r.n(a);e.default=function(t,e){if(!n()(t))throw new TypeError("invalid argument. First argument must be a matrix or array of test data. Value: `"+t+"`");if(!n()(e))throw new TypeError("invalid argument. Second argument must be an array of labels for the test data. Value: `"+e+"`");for(var r=this.predict(t),a=e.length,s=0,i=0;i<a;i++)r[i]===e[i]&&(s+=1);return s/=a}},211565:function(t,e,r){var a=r(89596),n=r.n(a),s=r(309765);e.Z=function(t,e){var r=n()(e);if(!n()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,s.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,i=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var o=0;o<a;o++)i[o]=t[o]-e[o]}else for(var l=0;l<a;l++)i[l]=t[l]-e;return i}},248453:function(t,e,r){var a=r(113449);t.exports=a},113449:function(t,e,r){var a=r(384871)(r(588703));t.exports=a},770561:function(t,e,r){var a=r(807896),n=r(231461),s=r(72779),i=r.n(s),o=r(202784),l=r(429658),c=r(482695),u=["bsPrefix","variant","size","active","className","block","type","as"],p=o.forwardRef((function(t,e){var r=t.bsPrefix,s=t.variant,p=t.size,h=t.active,f=t.className,v=t.block,m=t.type,d=t.as,y=(0,n.Z)(t,u),g=(0,l.vE)(r,"btn"),b=i()(f,g,h&&"active",s&&g+"-"+s,v&&g+"-block",p&&g+"-"+p);if(y.href)return o.createElement(c.Z,(0,a.Z)({},y,{as:d,ref:e,className:i()(b,y.disabled&&"disabled")}));e&&(y.ref=e),m?y.type=m:d||(y.type="button");var E=d||"button";return o.createElement(E,(0,a.Z)({},y,{className:b}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=p}}]);