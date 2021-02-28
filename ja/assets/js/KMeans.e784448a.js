(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{4040:function(t,e,n){"use strict";n.r(e);var r=n(410),i=n.n(r),o=n(412),s=n.n(o),a=n(416),c=n.n(a),l=n(418),u=n.n(l),h=n(419),f=n.n(h),d=n(417),v=n.n(d),m=n(404),b=n.n(m),g=(n(511),n(421),n(438),n(436),n(525),n(540),n(441),n(0)),p=(n(402),n(4088));function w(t,e){let n=0;for(let r=0;r<t.length;r++)n+=(t[r]-e[r])*(t[r]-e[r]);return n}const y={distanceFunction:w};function z(t,e,n=y){const r=n.distanceFunction||y.distanceFunction,i=n.similarityFunction||y.similarityFunction;let o=-1;if("function"==typeof i){let n=Number.MIN_VALUE;for(let r=0;r<t.length;r++){const s=i(e,t[r]);s>n&&(n=s,o=r)}}else{if("function"!=typeof r)throw new Error("A similarity or distance function it's required");{let n=Number.MAX_VALUE;for(let i=0;i<t.length;i++){const s=r(e,t[i]);s<n&&(n=s,o=i)}}}return o}function O(t,e,n,r){for(var i=0;i<t.length;i++)n[i]=z(e,t[i],{distanceFunction:r});return n}function A(t,e){const n=65535&(t>>>=0);return((t-n)*(e>>>=0)>>>0)+n*e>>>0}class x{constructor(t=Date.now()){this.state=new Uint32Array(4),this.init(t),this.random=this.getFloat.bind(this)}getUint32(){return this.nextState(),this.state[3]+this.state[2]>>>0}getFloat(){return 5.960464477539063e-8*(this.getUint32()>>>8)}init(t){if(!Number.isInteger(t))throw new TypeError("seed must be an integer");this.state[0]=t,this.state[1]=0,this.state[2]=0,this.state[3]=0;for(let e=1;e<8;e++)this.state[3&e]^=e+A(1812433253,this.state[e-1&3]^this.state[e-1&3]>>>30>>>0)>>>0;this.periodCertification();for(let e=0;e<8;e++)this.nextState()}periodCertification(){0===this.state[0]&&0===this.state[1]&&0===this.state[2]&&0===this.state[3]&&(this.state[0]=88,this.state[1]=83,this.state[2]=65,this.state[3]=68)}nextState(){let t=this.state[0];t^=t<<15,t^=t>>>18,t^=this.state[3]<<11,this.state[0]=this.state[1],this.state[1]=this.state[2],this.state[2]=this.state[3],this.state[3]=t}}function j(t,e,n){const r=e();if(n){let t=0;for(;r>n[t];)t++;return t}return Math.floor(r*t)}var E=function(t,e={},n=Math.random){const{size:r=1,replace:i=!1,probabilities:o}=e;let s,a;if(s="number"==typeof t?function(t){const e=[];for(let n=0;n<t;n++)e.push(n);return e}(t):t.slice(),o){if(!i)throw new Error("choice with probabilities and no replacement is not implemented");if(o.length!==s.length)throw new Error("the length of probabilities option should be equal to the number of choices");a=[o[0]];for(let t=1;t<o.length;t++)a[t]=a[t-1]+o[t];if(Math.abs(1-a[a.length-1])>1e-8)throw new Error(`probabilities should sum to 1, but instead sums to ${a[a.length-1]}`)}if(!1===i&&r>s.length)throw new Error("size option is too large");const c=[];for(let l=0;l<r;l++){const t=j(s.length,n,a);c.push(s[t]),i||s.splice(t,1)}return c};class R{constructor(t=Math.random){if("number"==typeof t){const e=new x(t);this.randomGenerator=e.random}else this.randomGenerator=t}choice(t,e){return E(t,e,this.randomGenerator)}random(){return this.randomGenerator()}randInt(t,e){return void 0===e&&(e=t,t=0),t+Math.floor(this.randomGenerator()*(e-t))}randomSample(t){const e=[];for(let n=0;n<t;n++)e.push(this.random());return e}}var F=n(1050);function I(t,e){const n=new F.b(t.rows,e.rows);for(let r=0;r<t.rows;r++)for(let i=0;i<e.rows;i++)n.set(r,i,w(t.getRow(r),e.getRow(i)));return n}function M(t){let e=[];for(let n=0;n<t;n++)e.push(n);return e}function k(t){let e=[t[0]];for(let n=1;n<t.length;n++)e[n]=e[n-1]+t[n];return e}const P=Symbol("distance");class K{constructor(t,e,n,r,i){this.clusters=t,this.centroids=e,this.converged=n,this.iterations=r,this[P]=i}nearest(t){const e=new Array(t.length);return O(t,this.centroids.map((function(t){return t.centroid})),e,this[P])}computeInformation(t){for(var e=this.centroids.map((function(t){return{centroid:t,error:0,size:0}})),n=0;n<t.length;n++)e[this.clusters[n]].error+=this[P](t[n],this.centroids[this.clusters[n]]),e[this.clusters[n]].size++;for(var r=0;r<this.centroids.length;r++)e[r].size?e[r].error/=e[r].size:e[r].error=null;return new K(this.clusters,e,this.converged,this.iterations,this[P])}}const S={maxIterations:100,tolerance:1e-6,withIterations:!1,initialization:"kmeans++",distanceFunction:w};function N(t,e,n,r,i,o){var s=function(t,e,n,r){const i=e[0].length;for(var o=new Array(r),s=new Array(r),a=0;a<r;a++){o[a]=new Array(i),s[a]=0;for(var c=0;c<i;c++)o[a][c]=0}for(var l=0;l<e.length;l++){s[n[l]]++;for(var u=0;u<i;u++)o[n[l]][u]+=e[l][u]}for(var h=0;h<r;h++)for(var f=0;f<i;f++)s[h]?o[h][f]/=s[h]:o[h][f]=t[h][f];return o}(t,e,n=O(e,t,n,i.distanceFunction),r),a=function(t,e,n,r){for(var i=0;i<t.length;i++)if(n(t[i],e[i])>r)return!1;return!0}(s,t,i.distanceFunction,i.tolerance);return new K(n,s,a,o,i.distanceFunction)}function U(t,e,n){if(n=Object.assign({},S,n),e<=0||e>t.length||!Number.isInteger(e))throw new Error("K should be a positive integer smaller than the number of points");var r;if(Array.isArray(n.initialization)){if(n.initialization.length!==e)throw new Error("The initial centers should have the same length as K");r=n.initialization}else switch(n.initialization){case"kmeans++":r=function(t,e,n={}){const r=(t=new F.b(t)).rows,i=new R(n.seed),o=[],s=n.localTrials||2+Math.floor(Math.log(e)),a=i.randInt(r);o.push(t.getRow(a));let c=new F.b(1,t.rows);for(let f=0;f<t.rows;f++)c.set(0,f,w(t.getRow(f),o[0]));let l=[k(c.getRow(0))];const u=1/l[0][r-1];let h=F.b.mul(c,u);for(let f=1;f<e;f++){const e=i.choice(r,{replace:!0,size:s,probabilities:h[0]}),n=I(t.selection(e,M(t.columns)),t);let a,u,d;for(let t=0;t<s;t++){const r=F.b.min(c,[n.getRow(t)]),i=r.sum();(void 0===a||i<u)&&(a=e[t],u=i,d=r)}o[f]=t.getRow(a),c=d,l=[k(c.getRow(0))],h=F.b.mul(c,1/l[0][r-1])}return o}(t,e,n);break;case"random":r=function(t,e,n){return new R(n).choice(t,{size:e})}(t,e,n.seed);break;case"mostDistant":r=function(t,e,n,r){const i=new R(r);var o=new Array(e);if(o[0]=Math.floor(i.random()*t.length),e>1){for(var s={dist:-1,index:-1},a=0;a<t.length;++a)n[o[0]][a]>s.dist&&(s.dist=n[o[0]][a],s.index=a);if(o[1]=s.index,e>2)for(var c=2;c<e;++c){for(var l={dist:-1,index:-1},u=0;u<t.length;++u){for(var h={dist:Number.MAX_VALUE,index:-1},f=0;f<c;++f)n[f][u]<h.dist&&-1===o.indexOf(u)&&(h={dist:n[f][u],index:u});h.dist!==Number.MAX_VALUE&&h.dist>l.dist&&(l=Object.assign({},h))}o[c]=l.index}}return o.map((e=>t[e]))}(t,e,function(t,e){for(var n=new Array(t.length),r=0;r<t.length;++r)for(var i=r;i<t.length;++i){n[r]||(n[r]=new Array(t.length)),n[i]||(n[i]=new Array(t.length));const o=e(t[r],t[i]);n[r][i]=o,n[i][r]=o}return n}(t,n.distanceFunction),n.seed);break;default:throw new Error(`Unknown initialization method: "${n.initialization}"`)}0===n.maxIterations&&(n.maxIterations=Number.MAX_VALUE);var i=new Array(t.length);if(n.withIterations)return function*(t,e,n,r,i){for(var o,s=!1,a=0;!s&&a<i.maxIterations;)o=N(t,e,n,r,i,++a),yield o.computeInformation(e),s=o.converged,t=o.centroids}(r,t,i,e,n);for(var o,s=!1,a=0;!s&&a<n.maxIterations;)s=(o=N(r,t,i,e,n,++a)).converged,r=o.centroids;return o.computeInformation(t)}var D=n(456),G=n(428),L=n.n(G),V=n(432),X=n(458),_=n.n(X),C=n(750),T=n(423),q=n(445);function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var i=v()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f()(this,n)}}Object(T.a)("StatisticalModels");var H=function(t){var e=t.K,n=t.variables,r=t.data,i=t.initialization;if(!(r&&n&&e&&i))return null;var o=[];if(!L()(r,n[0]))return null;for(var s,a=r[n[0]].length,c=0;c<a;c++){for(var l=[],u=!1,h=0;h<n.length;h++){if(!L()(r,n[h]))return null;var f=r[n[h]][c];if(s=f,!Object(V.isPrimitive)(s)||_()(s)){u=!0;break}l.push(f)}u||o.push(l)}try{return U(o,e,{initialization:i})}catch(d){return null}},Q=function(t){u()(n,t);var e=$(n);function n(t){var r;s()(this,n),r=e.call(this,t);var i=t.K,o=t.variables,a=t.data,c=t.initialization,l=H({K:i,variables:o,data:a,initialization:c});return r.state=J({result:l},t),l&&t.onResult(l),r}return c()(n,[{key:"render",value:function(){var t=this.state.result,e=this.props,n=e.t,r=e.variables;return t?b()("div",{style:{overflowX:"auto",width:"100%"}},void 0,b()("span",{className:"title"},void 0,n("kmeans-summary")),b()("p",{},void 0,t.converged?n("algorithm-converged",{n:t.iterations}):n("algorithm-not-converged",{n:t.iterations})),function(t,e,n){return b()(C.a,{bordered:!0,size:"sm"},void 0,b()("thead",{},void 0,b()("tr",{},void 0,b()("th",{},void 0,n("cluster")),e.map((function(t,e){return b()("th",{},e,e+1)})))),b()("tbody",{},void 0,t.map((function(t,n){return b()("tr",{},n,b()("th",{},void 0,t),e.map((function(t,e){return b()("td",{},e,t.centroid[n].toFixed(4))})))}))),b()("tbody",{},void 0,b()("tr",{},void 0,b()("th",{},void 0,n("size")),e.map((function(t,e){return b()("th",{},e,t.size)})))))}(r,t.centroids,n)):b()(D.a,{variant:"danger"},void 0,n("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.variables!==e.variables||t.K!==e.K||t.initialization!==e.initialization){var n=t.K,r=t.variables,i=t.data,o=t.initialization,s=H({K:n,variables:r,data:i,initialization:o});return t.onResult(s),J({result:s},t)}return null}}]),n}(g.Component);Q.defaultProps={K:3,initialization:"kmeans++",onResult:function(){}};e.default=Object(p.a)("StatisticalModels")(Object(q.a)(Q))}}]);