/*! For license information please see NaiveBayes.cc574a71.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[139],{968838:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return ot}});e(382139),e(627476),e(95767),e(898837),e(694882),e(298351);var s=e(264659),a=e(904730),i=e(673989),n=e(175663),o=e(750591),c=e(575630),u=e(151119),h=e(858255),l=(e(319371),e(850110),e(202784)),p=(e(213980),e(198)),f=e(822736),v=e(770561),d=e(287013),y=e.n(d),m=(e(224008),e(122081)),g=e(190465),Z=e.n(g),b=e(150275),w=e(973670),P=e.n(w),x=(e(700601),e(248453)),O=e.n(x),A=e(89596),k=e.n(A),E=e(335396),M=e.n(E),j=(e(309765),e(797479)),F=e(574315),q=(e(733834),e(320231)),T=e.n(q),N=e(798030),G=e.n(N),z=e(733727),R=e.n(z),V=e(987598),D=e.n(V),S=e(821337),_=e(243644),C=e(945157),B=e(31388);function I(t,r){this.n=t.shape[0],this.p=t.shape[1],this.classes=T()(r.slice()),this.nclass=this.classes.length,this.fitGaussian(t,r)}I.prototype.score=e(780759),I.prototype.fitGaussian=function(t,r){var e=this;this.prior={};var s=[this.p,this.nclass];this.mu=P()(new Float64Array(s[0]*s[1]),{shape:s}),this.sigma=P()(new Float64Array(s[0]*s[1]),{shape:s});for(var a=0;a<this.nclass;a++){for(var i=[],n=this.classes[a],o=0;o<this.n;o++)r[o]===n&&i.push(o);var c=i.length;this.prior[n]=G()(c/this.n);for(var u=function(r){var s=i.map((function(e){return t.get(e,r)})),n=(0,S.Z)(s),o=(0,_.Z)(s);e.mu.set(r,a,n),e.sigma.set(r,a,o)},h=0;h<this.p;h++)u(h)}},I.prototype.calcGaussianProb=function(t,r){for(var e=this.classes[r],s=this.prior[e],a=0;a<this.p;a++){var i=this.sigma.get(a,r),n=i*i,o=this.mu.get(a,r);s+=-.5*G()(2*D()*n)-R()(t[a]-o,2)/n}return s},I.prototype.predictOne=function(t){for(var r=this.classes.length,e=new Array(r),s=0;s<r;s++)e[s]=this.calcGaussianProb(t,s);for(var a=e[0],i=this.classes[0],n=0;n<r;n++){var o=e[n];o>a&&(a=o,i=this.classes[n])}return i},I.prototype.predict=function(t){var r=this.classes.length;if(O()(t)&&(t=P()(t)),M()(t)){for(var e=(0,F.Z)(t.shape,2),s=e[0],a=e[1],i=new Array(s),n=0;n<s;n++){for(var o=new Array(r),c=0;c<r;c++){for(var u=new Array(a),h=0;h<a;h++)u[h]=t.get(n,h);o[c]=this.calcGaussianProb(u,c)}for(var l=o[0],p=this.classes[0],f=0;f<r;f++){var v=o[f];v>l&&(l=v,p=this.classes[f])}i[n]=p}return i}return this.predictOne(t)},I.prototype.predictProbs=function(t){if(O()(t)&&(t=P()(t)),M()(t)){for(var r=(0,F.Z)(t.shape,2),e=r[0],s=r[1],a=new Array(e),i=0;i<e;i++){for(var n=new Array(this.nclass),o=0;o<this.nclass;o++){for(var c=new Array(s),u=0;u<s;u++)c[u]=t.get(i,u);n[o]=this.calcGaussianProb(c,o)}for(var h=(0,C.Z)(n),l=0,p=0;p<n.length;p++)l+=Z()(n[p]-h);var f=h+G()(l);n=(0,B.Z)(n,f),a[i]=n.map((function(t){return Z()(t)}))}return a}for(var v=new Array(this.nclass),d=0;d<this.nclass;d++)v[d]=this.calcGaussianProb(t,d);for(var y=(0,C.Z)(v),m=0,g=0;g<v.length;g++)m+=Z()(v[g]-y);var b=y+G()(m);return(0,B.Z)(v,b),(0,j.Z)("logLik"),v.map((function(t){return Z()(t)}))};var L=I,W=(e(781303),e(242995));function X(t,r,e){this.n=t.shape[0],this.p=t.shape[1],this.classes=T()(r.slice()),this.nclass=this.classes.length,this.alpha=e,this.fitMultinomial(t,r)}X.prototype.score=e(780759),X.prototype.fitMultinomial=function(t,r){for(var e={},s=[this.p,this.nclass],a=P()(new Float64Array(s[0]*s[1]),{shape:s}),i=0;i<this.nclass;i++){for(var n=[],o=new Int32Array(this.p),c=this.classes[i],u=0;u<this.n;u++)r[u]===c&&n.push(u);var h=n.length;e[c]=G()(h/this.n);for(var l=0,p=function(r){var e=n.map((function(e){return t.get(e,r)}));o[r]=(0,W.Z)(e),l+=o[r]},f=0;f<this.p;f++)p(f);for(var v=0;v<this.p;v++){var d=G()(o[v]+this.alpha)-G()(l+this.p*this.alpha);a.set(v,i,d)}}this.prior=e,this.cprob=a},X.prototype.calcMultinomProb=function(t,r,e){var s=this.classes[r],a=this.prior[s];for(e=0;e<this.p;e++){a+=t[e]?t[e]*this.cprob.get(e,r):0}return a},X.prototype.predictOne=function(t){for(var r=this.classes.length,e=new Array(r),s=0;s<r;s++){var a=this.classes[s];e[s]=this.prior[a];for(var i=0;i<this.p;i++){var n=t[i]?t[i]*this.cprob.get(i,s):0;e[s]+=n}}for(var o=e[0],c=this.classes[0],u=0;u<r;u++){var h=e[u];h>o&&(o=h,c=this.classes[u])}return c},X.prototype.predict=function(t){var r=this.classes.length;if(O()(t)&&(t=P()(t)),M()(t)){for(var e=[],s=t.shape[0],a=0;a<s;a++){for(var i=new Array(r),n=0;n<r;n++){var o=this.classes[n];i[n]=this.prior[o];for(var c=0;c<this.p;c++){var u=t.get(a,c)?t.get(a,c)*this.cprob.get(c,n):0;i[n]+=u}}for(var h=i[0],l=this.classes[0],p=0;p<r;p++){var f=i[p];f>h&&(h=f,l=this.classes[p])}e[a]=l}return e}return this.predictOne(t)},X.prototype.predictProbs=function(t){if(O()(t)&&(t=P()(t)),M()(t)){for(var r=t.shape[0],e=new Array(r),s=0;s<r;s++){for(var a=new Array(this.nclass),i=0;i<this.nclass;i++){var n=this.classes[i];a[i]=this.prior[n];for(var o=0;o<this.p;o++){var c=t.get(s,o)?t.get(s,o)*this.cprob.get(o,i):0;a[i]+=c}}for(var u=(0,C.Z)(a),h=0,l=0;l<a.length;l++)h+=Z()(a[l]-u);var p=u+G()(h);a=(0,B.Z)(a,p),e[s]=a.map((function(t){return Z()(t)}))}return e}for(var f=new Array(this.nclass),v=0;v<this.nclass;v++){var d=this.classes[v];f[v]=this.prior[d];for(var y=0;y<this.p;y++){var m=t[y]*this.cprob.get(y,v);f[v]+=m}}for(var g=(0,C.Z)(f),b=0,w=0;w<f.length;w++)b+=Z()(f[w]-g);var x=g+G()(b);return(f=(0,B.Z)(f,x)).map((function(t){return Z()(t)}))};var H=e(588703),J=e.n(H),K=e(92766),Q=e(108272),U=e(37950);function Y(t,r,e,s){var a=[],i=[],n={};J()(t)||(t=[t]);for(var o=0;o<t.length;o++){var c=e[t[o]];if(y()(s,t[o]))i.push(t[o]);else{for(var u=(0,K.Z)(c,t[o]),h=0;h<u.length;h++)i.push("".concat(t[o],"_").concat(u[h]));n[t[o]]=u}}for(var l=e[t[0]].length,p=0;p<l;p++){for(var f=[],v=0;v<t.length;v++){var d=e[t[v]];if(y()(s,t[v]))f.push(d[p]);else for(var m=n[t[v]],g=d[p],Z=0;Z<m.length;Z++)f.push(g===m[Z]?1:0)}a.push(f)}return{matrix:a=P()(a),predictors:i,yvalues:e[r]}}function $(t,r,e,s){var a=[],i=[],n={};J()(t)||(t=[t]);for(var o=0;o<t.length;o++){var c=e[t[o]];if(y()(s,t[o]))i.push(t[o]);else{for(var u=(0,K.Z)(c,t[o]),h=0;h<u.length;h++)i.push("".concat(t[o],"_").concat(u[h]));n[t[o]]=u}}for(var l=e[t[0]].length,p=[],f=0;f<l;f++){for(var v=[],d=!1,m=0;m<t.length;m++){var g=e[t[m]];if(y()(s,t[m]))(0,Q.Z)(g[f])?v.push(g[f]):d=!0;else{var Z=n[t[m]],b=g[f];if((0,U.Z)(b))d=!0;else for(var w=0;w<Z.length;w++)v.push(b===Z[w]?1:0)}}(0,U.Z)(e[r][f])&&(d=!0),d||(a.push(v),p.push(e[r][f]))}return{matrix:a=P()(a),predictors:i,yvalues:p}}var tt=e(432261);e(927299);function rt(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,s)}return e}function et(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?rt(Object(e),!0).forEach((function(r){(0,u.Z)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):rt(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function st(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=(0,c.Z)(t);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(s,arguments,a)}else e=s.apply(this,arguments);return(0,o.Z)(this,e)}}var at=0,it=function(t){var r=t.x,e=t.y,s=t.data,a=t.quantitative,i=t.omitMissing;try{var n=(i?$:Y)(r,e,s,a),o=n.matrix,c=n.predictors;return{result:function(t,r){if(O()(t))t=P()(t);else if(!M()(t))throw new TypeError("invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `"+t+"`");if(!k()(r))throw new TypeError("invalid input argument. The second argument must be array-like. Value: `"+r+"`");return new L(t,r)}(o,n.yvalues),predictors:c}}catch(u){return{}}},nt=function(t){(0,n.Z)(e,t);var r=st(e);function e(t){var a;(0,s.Z)(this,e),a=r.call(this,t),(0,u.Z)((0,i.Z)(a),"handlePrediction",(function(){a.props.onPredict((function(t){for(var r=a.state.result,e=Y(a.props.x,a.props.y,t,a.props.quantitative).matrix,s=r.predictProbs(e),i={},n=function(t){var e="probs_"+r.classes[t]+"_bayes"+at;i[e]=s.map((function(r){return r[t]}))},o=0;o<r.classes.length;o++)n(o);var c=r.predict(e),u="pred_bayes"+at,h=a.props.categorical.slice();return y()(h,u)||h.push(u),{fitted:c,classProbs:i}}),at)})),at+=1;var n=t.x,o=t.y,c=t.data,h=t.quantitative,l=t.omitMissing;return a.state=et(et({},it({x:n,y:o,data:c,quantitative:h,omitMissing:l})),t),a}return(0,a.Z)(e,[{key:"render",value:function(){var t=this.state,r=t.result,e=t.predictors,s=this.props.t;return r?(0,h.Z)("div",{style:{overflowX:"auto",width:"100%"}},void 0,(0,h.Z)("span",{className:"title"},void 0,s("naive-bayes-for-response",{y:this.props.y,counter:at})),function(t,r,e,s){return(0,h.Z)("div",{},void 0,(0,h.Z)("span",{className:"title"},void 0,s("apriori-probs"),":"),(0,h.Z)(m.Z,{bordered:!0,size:"sm"},void 0,(0,h.Z)("thead",{},void 0,(0,h.Z)("tr",{},void 0,r.classes.map((function(t,r){return(0,h.Z)("th",{},r,t)})))),(0,h.Z)("tbody",{},void 0,(0,h.Z)("tr",{},void 0,r.classes.map((function(t,e){return(0,h.Z)("th",{},e,Z()(r.prior[t]).toFixed(3))}))))),(0,h.Z)("span",{className:"title"},void 0,s("conditionals"),":"),t.map((function(t,a){var i;return y()(e,t)?(0,h.Z)(m.Z,{bordered:!0,size:"sm"},a,(0,h.Z)("thead",{},void 0,(0,h.Z)("tr",{},void 0,i||(i=(0,h.Z)("th",{},void 0,t)),r.classes.map((function(t,r){return(0,h.Z)("th",{},r,t)})))),(0,h.Z)("tbody",{},void 0,(0,h.Z)("tr",{},void 0,(0,h.Z)("th",{},void 0,s("mean")),r.classes.map((function(t,e){return(0,h.Z)("td",{},"".concat(a,"-").concat(e),r.mu.get(a,e).toFixed(6))}))),(0,h.Z)("tr",{},void 0,(0,h.Z)("th",{},void 0,s("sd")),r.classes.map((function(t,e){return(0,h.Z)("td",{},"".concat(a,"-").concat(e),r.sigma.get(a,e).toFixed(6))}))))):(0,h.Z)(m.Z,{bordered:!0,size:"sm"},a,(0,h.Z)("thead",{},void 0,(0,h.Z)("tr",{},void 0,(0,h.Z)("th",{},void 0,t),r.classes.map((function(t,r){return(0,h.Z)("th",{},r,t)})))),(0,h.Z)("tbody",{},void 0,(0,h.Z)("tr",{},void 0,(0,h.Z)("th",{},void 0,s("yes")),r.classes.map((function(t,e){return(0,h.Z)("td",{},"".concat(a,"-").concat(e),r.mu.get(a,e).toFixed(3))}))),(0,h.Z)("tr",{},void 0,(0,h.Z)("th",{},void 0,s("no")),r.classes.map((function(t,e){return(0,h.Z)("td",{},"".concat(a,"-").concat(e),(1-r.mu.get(a,e)).toFixed(3))})))))})))}(e,r,this.props.quantitative,s),this.props.onPredict?(0,h.Z)(b.Z,{tooltip:s("use-model-to-predict-tooltip")},void 0,(0,h.Z)(v.Z,{variant:"secondary",size:"sm",onClick:this.handlePrediction},void 0,s("use-model-to-predict"))):null):(0,h.Z)(f.Z,{variant:"danger"},void 0,s("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,r){if(t.data!==r.data||t.quantitative!==r.quantitative||t.x!==r.x||t.y!==r.y||t.omitMissing!==r.omitMissing){var e=t.x,s=t.y,a=t.data,i=t.quantitative,n=t.omitMissing;return et(et({},it({x:e,y:s,data:a,quantitative:i,omitMissing:n})),t)}return null}}]),e}(l.Component);nt.defaultProps={omitMissing:!1,onPredict:null};var ot=(0,p.Z)("models")((0,tt.W)(nt))},780759:function(t,r,e){"use strict";e.r(r);var s=e(89596),a=e.n(s);r.default=function(t,r){if(!a()(t))throw new TypeError("invalid argument. First argument must be a matrix or array of test data. Value: `"+t+"`");if(!a()(r))throw new TypeError("invalid argument. Second argument must be an array of labels for the test data. Value: `"+r+"`");for(var e=this.predict(t),s=r.length,i=0,n=0;n<s;n++)e[n]===r[n]&&(i+=1);return i/=s}},31388:function(t,r,e){"use strict";var s=e(89596),a=e.n(s),i=e(309765);r.Z=function(t,r){var e=a()(r);if(!a()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!e&&!(0,i.isPrimitive)(r))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+r+"`.");var s=t.length,n=new Array(s);if(e){if(s!==r.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var o=0;o<s;o++)n[o]=t[o]-r[o]}else for(var c=0;c<s;c++)n[c]=t[c]-r;return n}},733834:function(t,r,e){e(778440)("Float64",8,(function(t){return function(r,e,s){return t(this,r,e,s)}}))},781303:function(t,r,e){e(778440)("Int32",4,(function(t){return function(r,e,s){return t(this,r,e,s)}}))},797479:function(t,r,e){"use strict";function s(t){throw new TypeError('"'+t+'" is read-only')}e.d(r,{Z:function(){return s}})},248453:function(t,r,e){"use strict";var s=e(113449);t.exports=s},113449:function(t,r,e){"use strict";var s=e(384871)(e(588703));t.exports=s},770561:function(t,r,e){"use strict";var s=e(607560),a=e(998283),i=e(72779),n=e.n(i),o=e(202784),c=e(429658),u=e(482695),h=["bsPrefix","variant","size","active","className","block","type","as"],l=o.forwardRef((function(t,r){var e=t.bsPrefix,i=t.variant,l=t.size,p=t.active,f=t.className,v=t.block,d=t.type,y=t.as,m=(0,a.Z)(t,h),g=(0,c.vE)(e,"btn"),Z=n()(f,g,p&&"active",i&&g+"-"+i,v&&g+"-block",l&&g+"-"+l);if(m.href)return o.createElement(u.Z,(0,s.Z)({},m,{as:y,ref:r,className:n()(Z,m.disabled&&"disabled")}));r&&(m.ref=r),d?m.type=d:y||(m.type="button");var b=y||"button";return o.createElement(b,(0,s.Z)({},m,{className:Z}))}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},r.Z=l}}]);