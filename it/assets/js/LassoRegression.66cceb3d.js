/*! For license information please see LassoRegression.66cceb3d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5474],{21354:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return xt}});var a=r(264659),i=r(904730),n=r(673989),o=r(175663),s=r(750591),u=r(575630),c=r(151119),v=r(858255),l=(r(319371),r(111246),r(382139),r(627476),r(95767),r(898837),r(694882),r(298351),r(202784)),f=(r(213980),r(198)),h=r(822736),p=r(287013),d=r.n(p),m=r(309765),b=r.n(m),y=r(770561),g=r(150275),Z=r(122081),w=r(89596),x=r.n(w);var P=function(t,e){var r=x()(e);if(!x()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,m.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,i=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be multiplied must have a length equal to that of the input array.");for(var n=0;n<a;n++)i[n]=t[n]*e[n]}else for(var o=0;o<a;o++)i[o]=t[o]*e;return i},E=r(797479),O=(r(850110),r(821337)),k=r(243644),A=r(881447),T=r.n(A);var j=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=(0,O.Z)(t),i=(0,k.Z)(t),n=t.length,o=new Array(n);if(e)if(r)for(var s=0;s<n;s++)o[s]=(t[s]-a)/i;else for(var u=0;u<n;u++)o[u]=t[u]-a;else if(r)for(var c=0;c<n;c++)o[c]=t[c]/i;else t.slice(),(0,E.Z)("out");return T()(o,"mu",a),T()(o,"sigma",i),o},q=r(432261),N=(r(927299),r(588703)),F=r.n(N),S=r(147777),V=r.n(S),z=r(471205),R=r.n(z),D=r(437069),C=r.n(D),K=r(695688),_=r.n(K);var B=function(t,e,r,a){F()(t)||(t=[t]);for(var i=[],n=[],o={},s={},u={},c=e[t[0]].length,v=0;v<t.length;v++)if(d()(r,t[v])){var l=j(e[t[v]]);s[t[v]]=l,n.push(t[v])}else{for(var f=e[t[v]],h=V()(f,R()),p=t[v].categories||C()(h),m=a?1:0;m<p.length;m++){var b="".concat(t[v],"_").concat(p[m]);n.push(b);var y=h[p[m]]/c;u[b]={mu:y,sigma:_()(y*(1-y))}}o[t[v]]=p}for(var g=0;g<c;g++){var Z=[];a&&Z.push(1);for(var w=0;w<t.length;w++)if(d()(r,t[w])){var x=s[t[w]];Z.push(x[g])}else for(var P=e[t[w]],E=o[t[w]],O=P[g],k=a?1:0;k<E.length;k++){var A=u["".concat(t[w],"_").concat(E[k])],T=A.mu,q=A.sigma;Z.push(O===E[k]?(1-T)/q:-T/q)}i.push(Z)}return{matrix:i,predictors:n,categoricalStats:u,standardized:s}},M=(r(733834),r(911755)),W=r.n(M),X=r(605977),G=r.n(X),H=r(916290),I=r.n(H),J=r(248453),L=r.n(J),Q=r(335396),U=r.n(Q),Y=r(879224),$=r.n(Y),tt=r(973670),et=r.n(tt),rt=r(32593),at=r.n(rt),it=r(273856),nt=r(272336),ot=r(31388);var st=function(t,e,r){var a=x()(e);if(!x()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!a&&!(0,m.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var i=t.length,n=new Array(i);if(a){if(i!==e.length)throw new Error("invalid input argument. Array to be divided must have a length equal to that of the input array.");for(var o=0;o<i;o++)n[o]=t[o]/e[o]}else for(var s=0;s<i;s++)n[s]=t[s]/e;return n};var ut=function(t,e,r){for(var a=0,i=t.shape[0],n=0;n<i;n++){var o=t.get(n,r),s=e.get(n,r);0!==o&&0!==s&&(a+=o*s)}return a};var ct=function(t,e){for(var r=t.length,a=0,i=0;i<r;i++)a+=t[i]*e[i];return a};var vt=function(t,e){return t>e?t-e:t<-e?t+e:0},lt=W()("isle:lasso"),ft=1e-9,ht=function(t,e){for(var r=new Float64Array(t.shape[0]),a=0;a<r.length;a++)r[a]=t.get(a,e);return r};function pt(t,e,r){var a=this;this.y=t,this.x=e,this.lambda=r,this.N=e.shape[0],this.p=e.shape[1],this.beta=new Float64Array(this.p),this.betast=new Float64Array(this.p),this.active=G()(0,this.beta.length,1),this.nonactive=[],this.presid=$()("float64",new Float64Array(e._buffer.length),e.shape,e.strides,e.offset,e.order),this.init=function(){a.iteration=0,a.iterate()},this.init()}pt.prototype.testKKT=function(){for(var t=this.beta,e=this.N,r=this.x,a=this.y,i=(0,ot.Z)(a,(0,it.Z)(r,t)),n=st((0,it.Z)((0,nt.Z)(r),i),e),o=0;o<t.length;o++)if(0===t[o]){if(at()(n[o])>this.lambda+ft)return!1}else if(t[o]>0&&n[o]-this.lambda*I()(t[o])>ft)return!1;return!0},pt.prototype.testActiveSet=function(){for(var t=!1,e=this.predict(this.x).residuals,r=0;r<this.nonactive.length;r++){var a=this.nonactive[r],i=ht(this.x,a);at()(ct(i,e))/this.N>this.lambda&&(this.active.push(a),this.nonactive.splice(r,1),t=!0)}return lt("Active set changes..."),t},pt.prototype.iterate=function(){var t=this.N,e=this.p,r=this.x,a=this.y;if(this.iteration+=1,!(this.iteration>1e4)){for(var i=!0,n=0;n<this.active.length;n++){for(var o=this.active[n],s=0;s<t;s++){for(var u=a[s],c=0;c<e;c++)u-=o!==c?r.get(s,c)*this.beta[c]:0;this.presid.set(s,o,u)}this.betast[o]=1/t*ut(r,this.presid,o);var v=this.beta[o],l=vt(this.betast[o],this.lambda);at()(l-v)>ft&&(i=!1),this.beta[o]=l}for(var f=this.active.length-1;f>=0;f--){var h=this.active[f];at()(this.beta[h])<ft&&(this.active.splice(f,1),this.nonactive.push(h))}(!1===i||this.testActiveSet())&&this.iterate()}},pt.prototype.predict=function(t){return L()(t)&&(t=et()(t)),(0,it.Z)(t,this.beta)};var dt=function(t,e,r){if(!b())throw new TypeError("invalid input argument. The third argument must be a number primitive. Value: `"+r+"`");if(!x()(e))throw new TypeError("invalid input argument. The second argument must be array-like. Value: `"+e+"`");if(L()(t))t=et()(t);else if(!U()(t)){throw new TypeError("invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `"+t+"`")}return new pt(e,t,r)};function mt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function bt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?mt(Object(r),!0).forEach((function(e){(0,c.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):mt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=(0,u.Z)(t);if(e){var i=(0,u.Z)(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return(0,s.Z)(this,r)}}var gt=0,Zt=function(t){var e=t.x,r=t.y,a=t.lambda,i=t.data,n=t.quantitative,o=t.intercept;try{var s=i[r];s=j(s,!1,!0);var u=B(e,i,n,o),c=u.matrix,v=u.predictors,l=u.categoricalStats,f=u.standardized,h=new dt(c,s,a);if(o){for(var p=0,m=1;m<h.beta.length;m++){var b=v[m-1];d()(n,b)?(h.beta[m]*=s.sigma/f[b].sigma,p+=h.beta[m]*f[b].mu):(h.beta[m]*=s.sigma/l[b].sigma,p+=h.beta[m]*l[b].mu)}h.beta[0]=s.mu-p}else for(var y=0;y<h.beta.length;y++){var g=v[y];d()(n,g)?h.beta[y]*=s.sigma/f[g].sigma:h.beta[y]*=s.sigma/l[g].sigma}return{predictors:v,result:h,yvalues:s}}catch(Z){return{}}},wt=function(t){(0,o.Z)(r,t);var e=yt(r);function r(t){var i;(0,a.Z)(this,r),i=e.call(this,t),(0,c.Z)((0,n.Z)(i),"handlePredict",(function(){i.props.onPredict((function(t){var e=B(i.props.x,t,i.props.quantitative,i.props.intercept).matrix,r=i.state.result.predict(e);r=P(r,i.state.yvalues.sigma);for(var a=new Array(r.length),n=0;n<r.length;n++)a[n]=t[i.props.y][n]-r[n];return{fitted:r,residuals:a}}),gt)})),gt+=1;var o=t.x,s=t.y,u=t.lambda,v=t.data,l=t.quantitative,f=t.intercept;return i.state=bt(bt({},Zt({x:o,y:s,lambda:u,data:v,quantitative:l,intercept:f})),t),i}return(0,i.Z)(r,[{key:"render",value:function(){var t=this.props,e=t.y,r=t.intercept,a=t.lambda,i=t.onPredict,n=t.t,o=this.state,s=o.result,u=o.predictors;return s?(0,m.isPrimitive)(a)?(0,v.Z)("div",{style:{overflowX:"auto",width:"100%"}},void 0,(0,v.Z)("span",{className:"title"},void 0,n("lasso-title",{y:e,lambda:a.toFixed(4),counter:gt})),function(t,e,r,a){return(0,v.Z)(Z.Z,{bordered:!0,size:"sm"},void 0,(0,v.Z)("thead",{},void 0,(0,v.Z)("tr",{},void 0,(0,v.Z)("th",{},void 0,a("predictor")),(0,v.Z)("th",{},void 0,a("coefficient")))),(0,v.Z)("tbody",{},void 0,e?(0,v.Z)("tr",{},void 0,(0,v.Z)("th",{},void 0,a("intercept")),(0,v.Z)("td",{},void 0,r.beta[0].toFixed(6))):null,t.map((function(t,a){return(0,v.Z)("tr",{},a,(0,v.Z)("th",{},void 0,t),(0,v.Z)("td",{},void 0,r.beta[a+Number(e)].toFixed(6)))}))))}(u,r,s,n),(0,v.Z)("p",{},void 0,s.testKKT()?n("kkt-satisfied"):n("kkt-not-satisfied")),i?(0,v.Z)(g.Z,{tooltip:n("use-model-to-predict-tooltip")},void 0,(0,v.Z)(y.Z,{variant:"secondary",size:"sm",onClick:this.handlePredict},void 0,this.props.t("use-model-to-predict"))):null):(0,v.Z)(h.Z,{variant:"danger"},void 0,n("lambda-not-number")):(0,v.Z)(h.Z,{variant:"danger"},void 0,n("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.intercept!==e.intercept||t.lambda!==e.lambda){var r=t.x,a=t.y,i=t.lambda,n=t.data,o=t.quantitative,s=t.intercept;return bt(bt({},Zt({x:r,y:a,lambda:i,data:n,quantitative:o,intercept:s})),t)}return null}}]),r}(l.Component);wt.defaultProps={lambda:.001,intercept:!0,onPredict:function(){}};var xt=(0,f.Z)("models")((0,q.W)(wt))},273856:function(t,e,r){"use strict";r(733834);e.Z=function(t,e){for(var r=t.shape[0],a=t.shape[1],i=new Float64Array(r),n=0;n<r;n++){for(var o=0,s=0;s<a;s++)o+=t.get(n,s)*e[s];i[n]=o}return i}},31388:function(t,e,r){"use strict";var a=r(89596),i=r.n(a),n=r(309765);e.Z=function(t,e){var r=i()(e);if(!i()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!(0,n.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,o=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var s=0;s<a;s++)o[s]=t[s]-e[s]}else for(var u=0;u<a;u++)o[u]=t[u]-e;return o}},272336:function(t,e,r){"use strict";var a=r(879224),i=r.n(a);e.Z=function(t){var e=[t.shape[1],t.shape[0]],r=[t.strides[1],t.strides[0]],a=t.offset,n=t.order;return i()("float64",t._buffer,e,r,a,n)}},733834:function(t,e,r){r(778440)("Float64",8,(function(t){return function(e,r,a){return t(this,e,r,a)}}))},797479:function(t,e,r){"use strict";function a(t){throw new TypeError('"'+t+'" is read-only')}r.d(e,{Z:function(){return a}})},248453:function(t,e,r){"use strict";var a=r(113449);t.exports=a},113449:function(t,e,r){"use strict";var a=r(384871)(r(588703));t.exports=a},881447:function(t,e,r){"use strict";var a=r(324169);t.exports=a},324169:function(t,e,r){"use strict";var a=r(555528);t.exports=function(t,e,r){a(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}},770561:function(t,e,r){"use strict";var a=r(607560),i=r(998283),n=r(72779),o=r.n(n),s=r(202784),u=r(429658),c=r(482695),v=["bsPrefix","variant","size","active","className","block","type","as"],l=s.forwardRef((function(t,e){var r=t.bsPrefix,n=t.variant,l=t.size,f=t.active,h=t.className,p=t.block,d=t.type,m=t.as,b=(0,i.Z)(t,v),y=(0,u.vE)(r,"btn"),g=o()(h,y,f&&"active",n&&y+"-"+n,p&&y+"-block",l&&y+"-"+l);if(b.href)return s.createElement(c.Z,(0,a.Z)({},b,{as:m,ref:e,className:o()(g,b.disabled&&"disabled")}));e&&(b.ref=e),d?b.type=d:m||(b.type="button");var Z=m||"button";return s.createElement(Z,(0,a.Z)({},b,{className:g}))}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=l}}]);