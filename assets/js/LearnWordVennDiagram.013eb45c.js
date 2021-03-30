/*! For license information please see LearnWordVennDiagram.013eb45c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[659,16],{1e3:function(t,e,n){"use strict";var r=n(422),a=n(574),i=n(601),s=n(425),o=n(445),u=n(473).isPrimitive,f=n(550),l=n(530).isPrimitive,c=n(873),h=n(656),p=n(641),d=n(779),v=n(602),g=n(1001),x=h-1|0,y=h-1|0;function m(t,e){var n;return n=e?"option":"argument",t.length<6?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):2!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 2. Actual: "+t[1]+"."):1!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+1..toString()+". Actual: "+t[2]+"."):t[4]!==t.length-5?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-5)+". Actual: "+t[4]+"."):null}t.exports=function(t){var e,n,b,w,E,M;if(b={},arguments.length){if(!o(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(s(t,"copy")&&(b.copy=t.copy,!u(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(s(t,"state")){if(n=t.state,b.state=!0,!c(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(M=m(n,!0))throw M;!1===b.copy?e=n:(e=new p(n.length),d(n.length,n,1,e,1)),n=new p(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),w=new p(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,n[4])}if(void 0===w)if(s(t,"seed"))if(w=t.seed,b.seed=!0,l(w)){if(w>y)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+w+"`.");w|=0}else{if(!(f(w)&&w.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+w+"`.");E=w.length,(e=new p(5+E))[0]=1,e[1]=2,e[2]=1,e[4]=E,d.ndarray(E,w,1,0,e,1,5),n=new p(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),w=new p(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,E),n[0]=w[0]}else w=0|g()}else w=0|g();return void 0===n&&((e=new p(6))[0]=1,e[1]=2,e[2]=1,e[4]=1,e[5]=w,n=new p(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),w=new p(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,1),n[0]=w[0]),r(I,"NAME","minstd"),a(I,"seed",R),a(I,"seedLength",A),i(I,"state",O,z),a(I,"stateLength",P),a(I,"byteLength",N),r(I,"toJSON",T),r(I,"MIN",1),r(I,"MAX",h-1),r(I,"normalized",L),r(L,"NAME",I.NAME),a(L,"seed",R),a(L,"seedLength",A),i(L,"state",O,z),a(L,"stateLength",P),a(L,"byteLength",N),r(L,"toJSON",T),r(L,"MIN",(I.MIN-1)/x),r(L,"MAX",(I.MAX-1)/x),I;function R(){var t=e[4];return d(t,w,1,new p(t),1)}function A(){return e[4]}function P(){return e.length}function N(){return e.byteLength}function O(){var t=e.length;return d(t,e,1,new p(t),1)}function z(t){var r;if(!c(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(r=m(t,!1))throw r;!1===b.copy?b.state&&t.length===e.length?d(t.length,t,1,e,1):(e=t,b.state=!0):(t.length!==e.length&&(e=new p(t.length)),d(t.length,t,1,e,1)),n=new p(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),w=new p(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,e[4])}function T(){var t={type:"PRNG"};return t.name=I.NAME,t.state=v(e),t.params=[],t}function I(){var t=0|n[0];return t=16807*t%h|0,n[0]=t,0|t}function L(){return(I()-1)/x}}},1001:function(t,e,n){"use strict";var r=n(656),a=n(452),i=r-1;t.exports=function(){return 0|a(1+i*Math.random())}},1002:function(t,e,n){"use strict";var r=n(422),a=n(574),i=n(601),s=n(425),o=n(445),u=n(473).isPrimitive,f=n(550),l=n(530).isPrimitive,c=n(873),h=n(779),p=n(452),d=n(641),v=n(656),g=n(602),x=n(1431),y=n(1003),m=v-1|0,b=v-1|0,w=32,E=39;function M(t,e){var n;return n=e?"option":"argument",t.length<40?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==w?new RangeError("invalid "+n+". `state` array has an incompatible table length. Expected: "+"32. Actual: "+t[2]+"."):2!==t[35]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+2..toString()+". Actual: "+t[35]+"."):t[38]!==t.length-E?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-E)+". Actual: "+t[38]+"."):null}t.exports=function(t){var e,n,R,A,P,N;if(R={},arguments.length){if(!o(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(s(t,"copy")&&(R.copy=t.copy,!u(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(s(t,"state")){if(n=t.state,R.state=!0,!c(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(N=M(n,!0))throw N;!1===R.copy?e=n:(e=new d(n.length),h(n.length,n,1,e,1)),n=new d(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,w),A=new d(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,n[38])}if(void 0===A)if(s(t,"seed"))if(A=t.seed,R.seed=!0,l(A)){if(A>b)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+A+"`.");A|=0}else{if(!(f(A)&&A.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+A+"`.");P=A.length,(e=new d(E+P))[0]=1,e[1]=3,e[2]=w,e[35]=2,e[37]=A[0],e[38]=P,h.ndarray(P,A,1,0,e,1,39),n=new d(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,w),A=new d(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,P),n=x(k,n,w),e[36]=n[0]}else A=0|y()}else A=0|y();return void 0===n&&((e=new d(40))[0]=1,e[1]=3,e[2]=w,e[35]=2,e[37]=A,e[38]=1,e[39]=A,n=new d(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,w),A=new d(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,1),n=x(k,n,w),e[36]=n[0]),r(B,"NAME","minstd-shuffle"),a(B,"seed",O),a(B,"seedLength",z),i(B,"state",L,_),a(B,"stateLength",T),a(B,"byteLength",I),r(B,"toJSON",S),r(B,"MIN",1),r(B,"MAX",v-1),r(B,"normalized",j),r(j,"NAME",B.NAME),a(j,"seed",O),a(j,"seedLength",z),i(j,"state",L,_),a(j,"stateLength",T),a(j,"byteLength",I),r(j,"toJSON",S),r(j,"MIN",(B.MIN-1)/m),r(j,"MAX",(B.MAX-1)/m),B;function O(){var t=e[38];return h(t,A,1,new d(t),1)}function z(){return e[38]}function T(){return e.length}function I(){return e.byteLength}function L(){var t=e.length;return h(t,e,1,new d(t),1)}function _(t){var r;if(!c(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(r=M(t,!1))throw r;!1===R.copy?R.state&&t.length===e.length?h(t.length,t,1,e,1):(e=t,R.state=!0):(t.length!==e.length&&(e=new d(t.length)),h(t.length,t,1,e,1)),n=new d(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,w),A=new d(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,e[38])}function S(){var t={type:"PRNG"};return t.name=B.NAME,t.state=g(e),t.params=[],t}function k(){var t=0|e[37];return t=16807*t%v|0,e[37]=t,0|t}function B(){var t,r;return t=e[36],r=p(w*(t/v)),t=n[r],e[36]=t,n[r]=k(),t}function j(){return(B()-1)/m}}},1003:function(t,e,n){"use strict";var r=n(656),a=n(452),i=r-1;t.exports=function(){return 0|a(1+i*Math.random())}},1128:function(t,e,n){"use strict";var r=n(422),a=n(1424);r(a,"factory",n(999)),t.exports=a},1424:function(t,e,n){"use strict";var r=n(999)();t.exports=r},1425:function(t){t.exports=JSON.parse('{"name":"mt19937","copy":true}')},1426:function(t,e,n){"use strict";var r={};r.minstd=n(1427),r["minstd-shuffle"]=n(1429),r.mt19937=n(666),t.exports=r},1427:function(t,e,n){"use strict";var r=n(422),a=n(1428);r(a,"factory",n(1e3)),t.exports=a},1428:function(t,e,n){"use strict";var r=n(1e3)({seed:n(1001)()});t.exports=r},1429:function(t,e,n){"use strict";var r=n(422),a=n(1430);r(a,"factory",n(1002)),t.exports=a},1430:function(t,e,n){"use strict";var r=n(1002)({seed:n(1003)()});t.exports=r},1431:function(t,e,n){"use strict";var r=n(415);t.exports=function(t,e,n){var a,i;for(i=0;i<8;i++)if(a=t(),r(a))throw new Error("unexpected error. PRNG returned `NaN`.");for(i=n-1;i>=0;i--)e[i]=t();return e}},3770:function(t,e,n){!function(t,e,n){"use strict";var r=1e-10;function a(t,e){var n,a=s(t),f=a.filter((function(e){return i(e,t)})),l=0,h=0,p=[];if(f.length>1){var d=c(f);for(n=0;n<f.length;++n){var v=f[n];v.angle=Math.atan2(v.x-d.x,v.y-d.y)}f.sort((function(t,e){return e.angle-t.angle}));var g=f[f.length-1];for(n=0;n<f.length;++n){var x=f[n];h+=(g.x+x.x)*(x.y-g.y);for(var y={x:(x.x+g.x)/2,y:(x.y+g.y)/2},m=null,b=0;b<x.parentIndex.length;++b)if(g.parentIndex.indexOf(x.parentIndex[b])>-1){var w=t[x.parentIndex[b]],E=Math.atan2(x.x-w.x,x.y-w.y),M=Math.atan2(g.x-w.x,g.y-w.y),R=M-E;R<0&&(R+=2*Math.PI);var A=M-R/2,P=u(y,{x:w.x+w.radius*Math.sin(A),y:w.y+w.radius*Math.cos(A)});P>2*w.radius&&(P=2*w.radius),(null===m||m.width>P)&&(m={circle:w,width:P,p1:x,p2:g})}null!==m&&(p.push(m),l+=o(m.circle.radius,m.width),g=x)}}else{var N=t[0];for(n=1;n<t.length;++n)t[n].radius<N.radius&&(N=t[n]);var O=!1;for(n=0;n<t.length;++n)if(u(t[n],N)>Math.abs(N.radius-t[n].radius)){O=!0;break}O?l=h=0:(l=N.radius*N.radius*Math.PI,p.push({circle:N,p1:{x:N.x,y:N.y+N.radius},p2:{x:N.x-r,y:N.y+N.radius},width:2*N.radius}))}return h/=2,e&&(e.area=l+h,e.arcArea=l,e.polygonArea=h,e.arcs=p,e.innerPoints=f,e.intersectionPoints=a),l+h}function i(t,e){for(var n=0;n<e.length;++n)if(u(t,e[n])>e[n].radius+r)return!1;return!0}function s(t){for(var e=[],n=0;n<t.length;++n)for(var r=n+1;r<t.length;++r)for(var a=l(t[n],t[r]),i=0;i<a.length;++i){var s=a[i];s.parentIndex=[n,r],e.push(s)}return e}function o(t,e){return t*t*Math.acos(1-e/t)-(t-e)*Math.sqrt(e*(2*t-e))}function u(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}function f(t,e,n){if(n>=t+e)return 0;if(n<=Math.abs(t-e))return Math.PI*Math.min(t,e)*Math.min(t,e);var r=e-(n*n-t*t+e*e)/(2*n);return o(t,t-(n*n-e*e+t*t)/(2*n))+o(e,r)}function l(t,e){var n=u(t,e),r=t.radius,a=e.radius;if(n>=r+a||n<=Math.abs(r-a))return[];var i=(r*r-a*a+n*n)/(2*n),s=Math.sqrt(r*r-i*i),o=t.x+i*(e.x-t.x)/n,f=t.y+i*(e.y-t.y)/n,l=-(e.y-t.y)*(s/n),c=-(e.x-t.x)*(s/n);return[{x:o+l,y:f-c},{x:o-l,y:f+c}]}function c(t){for(var e={x:0,y:0},n=0;n<t.length;++n)e.x+=t[n].x,e.y+=t[n].y;return e.x/=t.length,e.y/=t.length,e}function h(t,e,n,r){var a=(r=r||{}).maxIterations||100,i=r.tolerance||1e-10,s=t(e),o=t(n),u=n-e;if(s*o>0)throw"Initial bisect points must have opposite signs";if(0===s)return e;if(0===o)return n;for(var f=0;f<a;++f){var l=e+(u/=2),c=t(l);if(c*s>=0&&(e=l),Math.abs(u)<i||0===c)return l}return e+u}function p(t){for(var e=new Array(t),n=0;n<t;++n)e[n]=0;return e}function d(t,e){return p(t).map((function(){return p(e)}))}function v(t,e){for(var n=0,r=0;r<t.length;++r)n+=t[r]*e[r];return n}function g(t){return Math.sqrt(v(t,t))}function x(t,e,n){for(var r=0;r<e.length;++r)t[r]=e[r]*n}function y(t,e,n,r,a){for(var i=0;i<t.length;++i)t[i]=e*n[i]+r*a[i]}function m(t,e,n){var r,a=(n=n||{}).maxIterations||200*e.length,i=n.nonZeroDelta||1.05,s=n.zeroDelta||.001,o=n.minErrorDelta||1e-6,u=n.minErrorDelta||1e-5,f=void 0!==n.rho?n.rho:1,l=void 0!==n.chi?n.chi:2,c=void 0!==n.psi?n.psi:-.5,h=void 0!==n.sigma?n.sigma:.5,p=e.length,d=new Array(p+1);d[0]=e,d[0].fx=t(e),d[0].id=0;for(var v=0;v<p;++v){var g=e.slice();g[v]=g[v]?g[v]*i:s,d[v+1]=g,d[v+1].fx=t(g),d[v+1].id=v+1}function x(t){for(var e=0;e<t.length;e++)d[p][e]=t[e];d[p].fx=t.fx}for(var m=function(t,e){return t.fx-e.fx},b=e.slice(),w=e.slice(),E=e.slice(),M=e.slice(),R=0;R<a;++R){if(d.sort(m),n.history){var A=d.map((function(t){var e=t.slice();return e.fx=t.fx,e.id=t.id,e}));A.sort((function(t,e){return t.id-e.id})),n.history.push({x:d[0].slice(),fx:d[0].fx,simplex:A})}for(r=0,v=0;v<p;++v)r=Math.max(r,Math.abs(d[0][v]-d[1][v]));if(Math.abs(d[0].fx-d[p].fx)<o&&r<u)break;for(v=0;v<p;++v){b[v]=0;for(var P=0;P<p;++P)b[v]+=d[P][v];b[v]/=p}var N=d[p];if(y(w,1+f,b,-f,N),w.fx=t(w),w.fx<d[0].fx)y(M,1+l,b,-l,N),M.fx=t(M),M.fx<w.fx?x(M):x(w);else if(w.fx>=d[p-1].fx){var O=!1;if(w.fx>N.fx?(y(E,1+c,b,-c,N),E.fx=t(E),E.fx<N.fx?x(E):O=!0):(y(E,1-c*f,b,c*f,N),E.fx=t(E),E.fx<w.fx?x(E):O=!0),O){if(h>=1)break;for(v=1;v<d.length;++v)y(d[v],1-h,d[0],h,d[v]),d[v].fx=t(d[v])}}else x(w)}return d.sort(m),{fx:d[0].fx,x:d[0]}}function b(t,e,n,r,a,i,s){var o=n.fx,u=v(n.fxprime,e),f=o,l=o,c=u,h=0;function p(l,h,p){for(var d=0;d<16;++d)if(a=(l+h)/2,y(r.x,1,n.x,a,e),f=r.fx=t(r.x,r.fxprime),c=v(r.fxprime,e),f>o+i*a*u||f>=p)h=a;else{if(Math.abs(c)<=-s*u)return a;c*(h-l)>=0&&(h=l),l=a,p=f}return 0}a=a||1,i=i||1e-6,s=s||.1;for(var d=0;d<10;++d){if(y(r.x,1,n.x,a,e),f=r.fx=t(r.x,r.fxprime),c=v(r.fxprime,e),f>o+i*a*u||d&&f>=l)return p(h,a,l);if(Math.abs(c)<=-s*u)return a;if(c>=0)return p(a,h,f);l=f,h=a,a*=2}return a}function w(t,e,n){var r,a,i,s={x:e.slice(),fx:0,fxprime:e.slice()},o={x:e.slice(),fx:0,fxprime:e.slice()},u=e.slice(),f=1;i=(n=n||{}).maxIterations||20*e.length,s.fx=t(s.x,s.fxprime),x(r=s.fxprime.slice(),s.fxprime,-1);for(var l=0;l<i;++l){if(f=b(t,r,s,o,f),n.history&&n.history.push({x:s.x.slice(),fx:s.fx,fxprime:s.fxprime.slice(),alpha:f}),f){y(u,1,o.fxprime,-1,s.fxprime);var c=v(s.fxprime,s.fxprime);y(r,Math.max(0,v(u,o.fxprime)/c),r,-1,o.fxprime),a=s,s=o,o=a}else x(r,s.fxprime,-1);if(g(s.fxprime)<=1e-5)break}return n.history&&n.history.push({x:s.x.slice(),fx:s.fx,fxprime:s.fxprime.slice(),alpha:f}),s}function E(t,e){(e=e||{}).maxIterations=e.maxIterations||500;var n,r=e.initialLayout||O,a=e.lossFunction||I,i=r(t=A(t),e),s=[],o=[];for(n in i)i.hasOwnProperty(n)&&(s.push(i[n].x),s.push(i[n].y),o.push(n));for(var u=m((function(e){for(var n={},r=0;r<o.length;++r){var s=o[r];n[s]={x:e[2*r],y:e[2*r+1],radius:i[s].radius}}return a(n,t)}),s,e).x,f=0;f<o.length;++f)n=o[f],i[n].x=u[2*f],i[n].y=u[2*f+1];return i}var M=1e-10;function R(t,e,n){return Math.min(t,e)*Math.min(t,e)*Math.PI<=n+M?Math.abs(t-e):h((function(r){return f(t,e,r)-n}),0,t+e)}function A(t){t=t.slice();var e,n,r,a,i=[],s={};for(e=0;e<t.length;++e){var o=t[e];1==o.sets.length?i.push(o.sets[0]):2==o.sets.length&&(s[[r=o.sets[0],a=o.sets[1]]]=!0,s[[a,r]]=!0)}for(i.sort((function(t,e){return t>e})),e=0;e<i.length;++e)for(r=i[e],n=e+1;n<i.length;++n)[r,a=i[n]]in s||t.push({sets:[r,a],size:0});return t}function P(t,e,n){var r=d(e.length,e.length),a=d(e.length,e.length);return t.filter((function(t){return 2==t.sets.length})).map((function(t){var i=n[t.sets[0]],s=n[t.sets[1]],o=R(Math.sqrt(e[i].size/Math.PI),Math.sqrt(e[s].size/Math.PI),t.size);r[i][s]=r[s][i]=o;var u=0;t.size+1e-10>=Math.min(e[i].size,e[s].size)?u=1:t.size<=1e-10&&(u=-1),a[i][s]=a[s][i]=u})),{distances:r,constraints:a}}function N(t,e,n,r){var a,i=0;for(a=0;a<e.length;++a)e[a]=0;for(a=0;a<n.length;++a)for(var s=t[2*a],o=t[2*a+1],u=a+1;u<n.length;++u){var f=t[2*u],l=t[2*u+1],c=n[a][u],h=r[a][u],p=(f-s)*(f-s)+(l-o)*(l-o),d=Math.sqrt(p),v=p-c*c;h>0&&d<=c||h<0&&d>=c||(i+=2*v*v,e[2*a]+=4*v*(s-f),e[2*a+1]+=4*v*(o-l),e[2*u]+=4*v*(f-s),e[2*u+1]+=4*v*(l-o))}return i}function O(t,e){var n=T(t,e),r=e.lossFunction||I;if(t.length>=8){var a=z(t,e);r(a,t)+1e-8<r(n,t)&&(n=a)}return n}function z(t,e){var n,r=(e=e||{}).restarts||10,a=[],i={};for(n=0;n<t.length;++n){var s=t[n];1==s.sets.length&&(i[s.sets[0]]=a.length,a.push(s))}var o=P(t,a,i),u=o.distances,f=o.constraints,l=g(u.map(g))/u.length;u=u.map((function(t){return t.map((function(t){return t/l}))}));var c,h,d=function(t,e){return N(t,e,u,f)};for(n=0;n<r;++n)h=w(d,p(2*u.length).map(Math.random),e),(!c||h.fx<c.fx)&&(c=h);var v=c.x,y={};for(n=0;n<a.length;++n){var m=a[n];y[m.sets[0]]={x:v[2*n]*l,y:v[2*n+1]*l,radius:Math.sqrt(m.size/Math.PI)}}if(e.history)for(n=0;n<e.history.length;++n)x(e.history[n].x,l);return y}function T(t,e){for(var n,r=e&&e.lossFunction?e.lossFunction:I,a={},i={},s=0;s<t.length;++s){var o=t[s];1==o.sets.length&&(n=o.sets[0],a[n]={x:1e10,y:1e10,rowid:a.length,size:o.size,radius:Math.sqrt(o.size/Math.PI)},i[n]=[])}for(t=t.filter((function(t){return 2==t.sets.length})),s=0;s<t.length;++s){var u=t[s],f=u.hasOwnProperty("weight")?u.weight:1,c=u.sets[0],h=u.sets[1];u.size+M>=Math.min(a[c].size,a[h].size)&&(f=0),i[c].push({set:h,size:u.size,weight:f}),i[h].push({set:c,size:u.size,weight:f})}var p=[];for(n in i)if(i.hasOwnProperty(n)){var d=0;for(s=0;s<i[n].length;++s)d+=i[n][s].size*i[n][s].weight;p.push({set:n,size:d})}function v(t,e){return e.size-t.size}p.sort(v);var g={};function x(t){return t.set in g}function y(t,e){a[e].x=t.x,a[e].y=t.y,g[e]=!0}for(y({x:0,y:0},p[0].set),s=1;s<p.length;++s){var m=p[s].set,b=i[m].filter(x);if(n=a[m],b.sort(v),0===b.length)throw"ERROR: missing pairwise overlap information";for(var w=[],E=0;E<b.length;++E){var A=a[b[E].set],P=R(n.radius,A.radius,b[E].size);w.push({x:A.x+P,y:A.y}),w.push({x:A.x-P,y:A.y}),w.push({y:A.y+P,x:A.x}),w.push({y:A.y-P,x:A.x});for(var N=E+1;N<b.length;++N)for(var O=a[b[N].set],z=R(n.radius,O.radius,b[N].size),T=l({x:A.x,y:A.y,radius:P},{x:O.x,y:O.y,radius:z}),L=0;L<T.length;++L)w.push(T[L])}var _=1e50,S=w[0];for(E=0;E<w.length;++E){a[m].x=w[E].x,a[m].y=w[E].y;var k=r(a,t);k<_&&(_=k,S=w[E])}y(S,m)}return a}function I(t,e){var n=0;function r(e){return e.map((function(e){return t[e]}))}for(var i=0;i<e.length;++i){var s,o=e[i];if(1!=o.sets.length){if(2==o.sets.length){var l=t[o.sets[0]],c=t[o.sets[1]];s=f(l.radius,c.radius,u(l,c))}else s=a(r(o.sets));n+=(o.hasOwnProperty("weight")?o.weight:1)*(s-o.size)*(s-o.size)}}return n}function L(t,e,n){var r;if(null===n?t.sort((function(t,e){return e.radius-t.radius})):t.sort(n),t.length>0){var a=t[0].x,i=t[0].y;for(r=0;r<t.length;++r)t[r].x-=a,t[r].y-=i}if(2==t.length&&u(t[0],t[1])<Math.abs(t[1].radius-t[0].radius)&&(t[1].x=t[0].x+t[0].radius-t[1].radius-1e-10,t[1].y=t[0].y),t.length>1){var s,o,f=Math.atan2(t[1].x,t[1].y)-e,l=Math.cos(f),c=Math.sin(f);for(r=0;r<t.length;++r)s=t[r].x,o=t[r].y,t[r].x=l*s-c*o,t[r].y=c*s+l*o}if(t.length>2){for(var h=Math.atan2(t[2].x,t[2].y)-e;h<0;)h+=2*Math.PI;for(;h>2*Math.PI;)h-=2*Math.PI;if(h>Math.PI){var p=t[1].y/(1e-10+t[1].x);for(r=0;r<t.length;++r){var d=(t[r].x+p*t[r].y)/(1+p*p);t[r].x=2*d-t[r].x,t[r].y=2*d*p-t[r].y}}}}function _(t){function e(t){return t.parent!==t&&(t.parent=e(t.parent)),t.parent}function n(t,n){var r=e(t),a=e(n);r.parent=a}t.map((function(t){t.parent=t}));for(var r=0;r<t.length;++r)for(var a=r+1;a<t.length;++a){var i=t[r].radius+t[a].radius;u(t[r],t[a])+1e-10<i&&n(t[a],t[r])}var s,o={};for(r=0;r<t.length;++r)(s=e(t[r]).parent.setid)in o||(o[s]=[]),o[s].push(t[r]);t.map((function(t){delete t.parent}));var f=[];for(s in o)o.hasOwnProperty(s)&&f.push(o[s]);return f}function S(t){var e=function(e){return{max:Math.max.apply(null,t.map((function(t){return t[e]+t.radius}))),min:Math.min.apply(null,t.map((function(t){return t[e]-t.radius})))}};return{xRange:e("x"),yRange:e("y")}}function k(t,e,n){null===e&&(e=Math.PI/2);var r,a,i=[];for(a in t)if(t.hasOwnProperty(a)){var s=t[a];i.push({x:s.x,y:s.y,radius:s.radius,setid:a})}var o=_(i);for(r=0;r<o.length;++r){L(o[r],e,n);var u=S(o[r]);o[r].size=(u.xRange.max-u.xRange.min)*(u.yRange.max-u.yRange.min),o[r].bounds=u}o.sort((function(t,e){return e.size-t.size}));var f=(i=o[0]).bounds,l=(f.xRange.max-f.xRange.min)/50;function c(t,e,n){if(t){var r,a,s,o=t.bounds;e?r=f.xRange.max-o.xRange.min+l:(r=f.xRange.max-o.xRange.max,(s=(o.xRange.max-o.xRange.min)/2-(f.xRange.max-f.xRange.min)/2)<0&&(r+=s)),n?a=f.yRange.max-o.yRange.min+l:(a=f.yRange.max-o.yRange.max,(s=(o.yRange.max-o.yRange.min)/2-(f.yRange.max-f.yRange.min)/2)<0&&(a+=s));for(var u=0;u<t.length;++u)t[u].x+=r,t[u].y+=a,i.push(t[u])}}for(var h=1;h<o.length;)c(o[h],!0,!1),c(o[h+1],!1,!0),c(o[h+2],!0,!0),h+=3,f=S(i);var p={};for(r=0;r<i.length;++r)p[i[r].setid]=i[r];return p}function B(t,e,n,r){var a=[],i=[];for(var s in t)t.hasOwnProperty(s)&&(i.push(s),a.push(t[s]));e-=2*r,n-=2*r;var o=S(a),u=o.xRange,f=o.yRange;if(u.max==u.min||f.max==f.min)return console.log("not scaling solution: zero size detected"),t;for(var l=e/(u.max-u.min),c=n/(f.max-f.min),h=Math.min(c,l),p=(e-(u.max-u.min)*h)/2,d=(n-(f.max-f.min)*h)/2,v={},g=0;g<a.length;++g){var x=a[g];v[i[g]]={radius:h*x.radius,x:r+p+(x.x-u.min)*h,y:r+d+(x.y-f.min)*h}}return v}function j(){var t=600,n=350,r=15,a=1e3,i=Math.PI/2,s=!0,o=!0,u=!0,f=null,l=null,c={},h=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],p=0,d=function(t){if(t in c)return c[t];var e=c[t]=h[p];return(p+=1)>=h.length&&(p=0),e},v=E,g=I;function x(c){var h=c.datum(),p={};h.forEach((function(t){0==t.size&&1==t.sets.length&&(p[t.sets[0]]=1)})),h=h.filter((function(t){return!t.sets.some((function(t){return t in p}))}));var x={},y={};if(h.length>0){var m=v(h,{lossFunction:g});s&&(m=k(m,i,l)),x=B(m,t,n,r),y=q(x,h)}var b={};function w(t){return t.sets in b?b[t.sets]:1==t.sets.length?""+t.sets[0]:void 0}h.forEach((function(t){t.label&&(b[t.sets]=t.label)})),c.selectAll("svg").data([x]).enter().append("svg");var E=c.select("svg").attr("width",t).attr("height",n),M={},R=!1;E.selectAll(".venn-area path").each((function(t){var n=e.select(this).attr("d");1==t.sets.length&&n&&(R=!0,M[t.sets[0]]=D(n))}));var A=function(e){return function(r){return X(e.sets.map((function(e){var a=M[e],i=x[e];return a||(a={x:t/2,y:n/2,radius:1}),i||(i={x:t/2,y:n/2,radius:1}),{x:a.x*(1-r)+i.x*r,y:a.y*(1-r)+i.y*r,radius:a.radius*(1-r)+i.radius*r}})))}},P=E.selectAll(".venn-area").data(h,(function(t){return t.sets})),N=P.enter().append("g").attr("class",(function(t){return"venn-area venn-"+(1==t.sets.length?"circle":"intersection")})).attr("data-venn-sets",(function(t){return t.sets.join("_")})),O=N.append("path"),z=N.append("text").attr("class","label").text((function(t){return w(t)})).attr("text-anchor","middle").attr("dy",".35em").attr("x",t/2).attr("y",n/2);u&&(O.style("fill-opacity","0").filter((function(t){return 1==t.sets.length})).style("fill",(function(t){return d(t.sets)})).style("fill-opacity",".25"),z.style("fill",(function(t){return 1==t.sets.length?d(t.sets):"#444"})));var T=c;R?(T=c.transition("venn").duration(a)).selectAll("path").attrTween("d",A):T.selectAll("path").attr("d",(function(t){return X(t.sets.map((function(t){return x[t]})))}));var I=T.selectAll("text").filter((function(t){return t.sets in y})).text((function(t){return w(t)})).attr("x",(function(t){return Math.floor(y[t.sets].x)})).attr("y",(function(t){return Math.floor(y[t.sets].y)}));o&&(R?"on"in I?I.on("end",C(x,w)):I.each("end",C(x,w)):I.each(C(x,w)));var L=P.exit().transition("venn").duration(a).remove();L.selectAll("path").attrTween("d",A);var _=L.selectAll("text").attr("x",t/2).attr("y",n/2);return null!==f&&(z.style("font-size","0px"),I.style("font-size",f),_.style("font-size","0px")),{circles:x,textCentres:y,nodes:P,enter:N,update:T,exit:L}}return x.wrap=function(t){return arguments.length?(o=t,x):o},x.width=function(e){return arguments.length?(t=e,x):t},x.height=function(t){return arguments.length?(n=t,x):n},x.padding=function(t){return arguments.length?(r=t,x):r},x.colours=function(t){return arguments.length?(d=t,x):d},x.fontSize=function(t){return arguments.length?(f=t,x):f},x.duration=function(t){return arguments.length?(a=t,x):a},x.layoutFunction=function(t){return arguments.length?(v=t,x):v},x.normalize=function(t){return arguments.length?(s=t,x):s},x.styled=function(t){return arguments.length?(u=t,x):u},x.orientation=function(t){return arguments.length?(i=t,x):i},x.orientationOrder=function(t){return arguments.length?(l=t,x):l},x.lossFunction=function(t){return arguments.length?(g=t,x):g},x}function C(t,n){return function(){for(var r,a=e.select(this),i=a.datum(),s=t[i.sets[0]].radius||50,o=n(i)||"",u=o.split(/\s+/).reverse(),f=3,l=(o.length+u.length)/f,c=u.pop(),h=[c],p=0,d=1.1,v=a.text(null).append("tspan").text(c);c=u.pop();)h.push(c),r=h.join(" "),v.text(r),r.length>l&&v.node().getComputedTextLength()>s&&(h.pop(),v.text(h.join(" ")),h=[c],v=a.append("tspan").text(c),p++);var g=.35-p*d/2,x=a.attr("x"),y=a.attr("y");a.selectAll("tspan").attr("x",x).attr("y",y).attr("dy",(function(t,e){return g+e*d+"em"}))}}function F(t,e,n){var r,a,i=e[0].radius-u(e[0],t);for(r=1;r<e.length;++r)(a=e[r].radius-u(e[r],t))<=i&&(i=a);for(r=0;r<n.length;++r)(a=u(n[r],t)-n[r].radius)<=i&&(i=a);return i}function Y(t,e){var n,r=[];for(n=0;n<t.length;++n){var i=t[n];r.push({x:i.x,y:i.y}),r.push({x:i.x+i.radius/2,y:i.y}),r.push({x:i.x-i.radius/2,y:i.y}),r.push({x:i.x,y:i.y+i.radius/2}),r.push({x:i.x,y:i.y-i.radius/2})}var s=r[0],o=F(r[0],t,e);for(n=1;n<r.length;++n){var f=F(r[n],t,e);f>=o&&(s=r[n],o=f)}var l=m((function(n){return-1*F({x:n[0],y:n[1]},t,e)}),[s.x,s.y],{maxIterations:500,minErrorDelta:1e-10}).x,h={x:l[0],y:l[1]},p=!0;for(n=0;n<t.length;++n)if(u(h,t[n])>t[n].radius){p=!1;break}for(n=0;n<e.length;++n)if(u(h,e[n])<e[n].radius){p=!1;break}if(!p)if(1==t.length)h={x:t[0].x,y:t[0].y};else{var d={};a(t,d),h=0===d.arcs.length?{x:0,y:-1e3,disjoint:!0}:1==d.arcs.length?{x:d.arcs[0].circle.x,y:d.arcs[0].circle.y}:e.length?Y(t,[]):c(d.arcs.map((function(t){return t.p1})))}return h}function J(t){var e={},n=[];for(var r in t)n.push(r),e[r]=[];for(var a=0;a<n.length;a++)for(var i=t[n[a]],s=a+1;s<n.length;++s){var o=t[n[s]],f=u(i,o);f+o.radius<=i.radius+1e-10?e[n[s]].push(n[a]):f+i.radius<=o.radius+1e-10&&e[n[a]].push(n[s])}return e}function q(t,e){for(var n={},r=J(t),a=0;a<e.length;++a){for(var i=e[a].sets,s={},o={},u=0;u<i.length;++u){s[i[u]]=!0;for(var f=r[i[u]],l=0;l<f.length;++l)o[f[l]]=!0}var c=[],h=[];for(var p in t)p in s?c.push(t[p]):p in o||h.push(t[p]);var d=Y(c,h);n[i]=d,d.disjoint&&e[a].size>0&&console.log("WARNING: area "+i+" not represented on screen")}return n}function W(t,e){for(var n=J(t.selectAll("svg").datum()),r={},a=0;a<e.sets.length;++a){var i=e.sets[a];for(var s in n)for(var o=n[s],u=0;u<o.length;++u)if(o[u]==i){r[s]=!0;break}}function f(t){for(var e=0;e<t.length;++e)if(!(t[e]in r))return!1;return!0}t.selectAll("g").sort((function(t,n){return t.sets.length!=n.sets.length?t.sets.length-n.sets.length:t==e?f(n.sets)?-1:1:n==e?f(t.sets)?1:-1:n.size-t.size}))}function V(t,e,n){var r=[];return r.push("\nM",t,e),r.push("\nm",-n,0),r.push("\na",n,n,0,1,0,2*n,0),r.push("\na",n,n,0,1,0,2*-n,0),r.join(" ")}function D(t){var e=t.split(" ");return{x:parseFloat(e[1]),y:parseFloat(e[2]),radius:-parseFloat(e[4])}}function X(t){var e={};a(t,e);var n=e.arcs;if(0===n.length)return"M 0 0";if(1==n.length){var r=n[0].circle;return V(r.x,r.y,r.radius)}for(var i=["\nM",n[0].p2.x,n[0].p2.y],s=0;s<n.length;++s){var o=n[s],u=o.circle.radius,f=o.width>u;i.push("\nA",u,u,0,f?1:0,1,o.p1.x,o.p1.y)}return i.join(" ")}t.intersectionArea=a,t.circleCircleIntersection=l,t.circleOverlap=f,t.circleArea=o,t.distance=u,t.venn=E,t.greedyLayout=T,t.scaleSolution=B,t.normalizeSolution=k,t.bestInitialLayout=O,t.lossFunction=I,t.disjointCluster=_,t.distanceFromIntersectArea=R,t.VennDiagram=j,t.wrapText=C,t.computeTextCentres=q,t.computeTextCentre=Y,t.sortAreas=W,t.circlePath=V,t.circleFromPath=D,t.intersectionAreaPath=X,Object.defineProperty(t,"__esModule",{value:!0})}(e,n(563),n(1019))},3771:function(t,e,n){"use strict";n.r(e);n(421);var r,a=n(407),i=n.n(a),s=n(414),o=n.n(s),u=n(416),f=n.n(u),l=n(424),c=n.n(l),h=n(418),p=n.n(h),d=n(419),v=n.n(d),g=n(417),x=n.n(g),y=n(412),m=n.n(y),b=(n(428),n(837),n(465),n(0)),w=(n(404),n(4095)),E=n(423),M=n(556),R=n(464),A=n(3770),P=n(1076),N=n(886),O=n.n(N),z=n(1082),T=n.n(z),I=n(1080),L=n.n(I),_=n(1128),S=n.n(_),k=n(548),B=n.n(k),j=n(515),C=n.n(j),F=n(487),Y=n(745),J=n(420);n(327);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x()(t);if(e){var a=x()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}Object(J.a)("LearnVennDiagram");var W=function(t){p()(n,t);var e=q(n);function n(t){var r;o()(this,n),r=e.call(this,t),m()(c()(r),"drawPlot",(function(){var t,e=r.state.freqs,n=P.p("#"+r.state.id);n.select("svg").remove(),t=r.state.tooltip?r.state.tooltip:P.p("body").append("div").attr("class","venntooltip");var a=A.VennDiagram().width(r.props.width).height(r.props.height);n.datum(e).call(a),n.selectAll("g").on("mouseover",(function(e,r){A.sortAreas(n,e),t.transition().duration(400).style("opacity",.9),t.text(e.sets.join(" and ")+" ("+e.size+")"),P.p(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("stroke","black").style("fill-opacity",1===e.sets.length?.4:.1).style("stroke-opacity",1)})).on("mousemove",(function(){t.style("left",P.d.pageX+"px").style("top",P.d.pageY-28+"px")})).on("mouseout",(function(e,n){t.transition().duration(400).style("opacity",0),P.p(this).transition("tooltip").duration(400).select("path").style("fill-opacity",1===e.sets.length?.25:0).style("stroke-opacity",0)})),r.setState({tooltip:t})})),m()(c()(r),"calculateWordFrequency",(function(t){var e=r.state,n=e.indices,a=e.minCount,i=e.tdm,s=e.words[t],o=n[t],u=[],f=0;if(i[o])for(var l=i[o].map((function(e){return e>=a[t]?1:0})),c=0;c<l.length;c++)f+=l[c],1===l[c]&&u.push(c);return{sets:[s],size:f,docIndices:u}})),m()(c()(r),"wordNumberClickFactory",(function(t){return function(){r.setState({nWords:t+1,disabled:!0,words:new Array(t+1),minCount:new Array(t+1).fill(1)})}})),m()(c()(r),"updatePlot",(function(){for(var t=[],e=0;e<r.state.nWords;e++){var n=r.calculateWordFrequency(e);t.push(n)}if(2===r.state.nWords){var a=r.calculateJointAB(0,1);t.push(a)}else if(3===r.state.nWords){var i=r.calculateJointAB(0,1);t.push(i),i=r.calculateJointAB(0,2),t.push(i),i=r.calculateJointAB(1,2),t.push(i),i=r.calculateJointABC(0,1,2),t.push(i)}r.setState({freqs:t},(function(){r.drawPlot(),r.props.onClick(r.state)}))}));var a=t.tdm.map((function(e){for(var n=new Array(t.nTexts),r=0;r<n.length;r++)n[r]=e[r]?e[r]:0;return n}));return r.state={disabled:!0,words:new Array(1),indices:new Array(1),freqs:[],minCount:[1],nWords:1,tdm:a,id:"venn"+B()(1e3*S()())},r}return f()(n,[{key:"componentDidUpdate",value:function(t,e){for(var n=!1,r=0;r<this.state.nWords;r++)e.words[r]!==this.state.words[r]&&(n=!0);if(n){for(var a=new Array(this.state.nWords),i=this.props.vocabulary,s=0;s<this.state.nWords;s++)for(var o=0;o<i.length;o++)i[o]===this.state.words[s]&&(a[s]=o);this.setState({indices:a})}}},{key:"wordChangeFactory",value:function(t){var e=this;return function(n){var r=Array.prototype.slice.call(e.state.words);r[t]=T()(L()(n))||null,e.setState({words:r,disabled:!O()(r)})}}},{key:"calculateJointAB",value:function(t,e){var n=this.state,r=n.indices,a=n.minCount,i=n.tdm,s=n.words,o=r[t],u=r[e],f=0;if(i[o]&&i[u])for(var l=i[o].map((function(e){return e>=a[t]?1:0})),c=i[u].map((function(t){return t>=a[e]?1:0})),h=0;h<l.length;h++)l[h]&&c[h]&&(f+=1);return{sets:[s[t],s[e]],size:f}}},{key:"calculateJointABC",value:function(t,e,n){var r=this.state,a=r.indices,i=r.minCount,s=r.tdm,o=r.words,u=a[t],f=a[e],l=a[n],c=0;if(s[u]&&s[f]&&s[l])for(var h=s[u].map((function(e){return e>=i[t]?1:0})),p=s[f].map((function(t){return t>=i[e]?1:0})),d=s[l].map((function(t){return t>=i[n]?1:0})),v=0;v<h.length;v++)h[v]&&p[v]&&d[v]&&(c+=1);return{sets:[o[t],o[e],o[n]],size:c}}},{key:"render",value:function(){for(var t=this,e=this.props.t,n=[],a=function(r){n[r]=i()("div",{},"outer-".concat(r),i()(Y.a,{legend:"".concat(e("word")," ").concat(r+1),defaultValue:t.state.words[r],width:120,onChange:t.wordChangeFactory(r)},"text-".concat(r)),i()(F.b,{legend:e("min-of-times"),defaultValue:1,max:50,min:1,step:1,onChange:function(e){var n=C()(t.state.minCount);n[r]=e,t.setState({minCount:n})}},"number-".concat(r)))},s=0;s<this.state.nWords;s++)a(s);return i()(b.Fragment,{},void 0,i()(R.a,{},void 0,i()(R.a.Header,{as:"h4"},void 0,e("settings")),i()(R.a.Body,{},void 0,i()("p",{},void 0,i()("span",{className:"title"},void 0,e("number-of-words"))),i()(M.a,{},void 0,[e("one"),e("two"),e("three")].map((function(e,n){return i()(E.a,{variant:n===t.state.nWords-1?"success":"default",onClick:t.wordNumberClickFactory(n)},n,e)}))),n,i()(E.a,{onClick:this.updatePlot,disabled:this.state.disabled},void 0,e("draw-venn-diagram")))),r||(r=i()("br",{})),i()(R.a,{},void 0,i()(R.a.Header,{as:"h4"},void 0,e("venn-diagram")),i()(R.a.Body,{style:{minHeight:200}},void 0,i()("span",{style:{position:"absolute",right:40,top:50}},void 0,e("total-texts"),": ",this.props.nTexts),i()("div",{id:this.state.id}))))}}]),n}(b.Component);W.defaultProps={height:350,onClick:function(){},width:600},e.default=Object(w.a)("LearnVennDiagram")(W)},423:function(t,e,n){"use strict";var r=n(406),a=n(408),i=n(409),s=n.n(i),o=n(0),u=n.n(o),f=n(411),l=n(463),c=u.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.variant,o=t.size,c=t.active,h=t.className,p=t.block,d=t.type,v=t.as,g=Object(a.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),x=Object(f.a)(n,"btn"),y=s()(h,x,c&&"active",i&&x+"-"+i,p&&x+"-block",o&&x+"-"+o);if(g.href)return u.a.createElement(l.a,Object(r.a)({},g,{as:v,ref:e,className:s()(y,g.disabled&&"disabled")}));e&&(g.ref=e),d?g.type=d:v||(g.type="button");var m=v||"button";return u.a.createElement(m,Object(r.a)({},g,{className:y}))}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=c},556:function(t,e,n){"use strict";var r=n(406),a=n(408),i=n(409),s=n.n(i),o=n(0),u=n.n(o),f=n(411),l=u.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.size,o=t.toggle,l=t.vertical,c=t.className,h=t.as,p=void 0===h?"div":h,d=Object(a.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(f.a)(n,"btn-group"),g=v;return l&&(g=v+"-vertical"),u.a.createElement(p,Object(r.a)({},d,{ref:e,className:s()(c,g,i&&v+"-"+i,o&&v+"-toggle")}))}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=l},886:function(t,e,n){"use strict";var r=n(422),a=n(799),i=n(432),s=a(i);r(s,"primitives",a(i.isPrimitive)),r(s,"objects",a(i.isObject)),t.exports=s},999:function(t,e,n){"use strict";var r=n(422),a=n(574),i=n(601),s=n(445),o=n(473).isPrimitive,u=n(425),f=n(602),l=n(1425),c=n(1426);t.exports=function(t){var e,n,h;if(e={name:l.name,copy:l.copy},arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(u(t,"name")&&(e.name=t.name),u(t,"state")){if(e.state=t.state,void 0===e.state)throw new TypeError("invalid option. `state` option cannot be undefined. Option: `"+e.state+"`.")}else if(u(t,"seed")&&(e.seed=t.seed,void 0===e.seed))throw new TypeError("invalid option. `seed` option cannot be undefined. Option: `"+e.seed+"`.");if(u(t,"copy")&&(e.copy=t.copy,!o(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.")}if(void 0===(h=c[e.name]))throw new Error("invalid option. Unrecognized/unsupported PRNG. Option: `"+e.name+"`.");return n=void 0===e.state?void 0===e.seed?h.factory():h.factory({seed:e.seed}):h.factory({state:e.state,copy:e.copy}),r(b,"NAME","randu"),a(b,"seed",p),a(b,"seedLength",d),i(b,"state",x,y),a(b,"stateLength",v),a(b,"byteLength",g),r(b,"toJSON",m),r(b,"PRNG",n),r(b,"MIN",n.normalized.MIN),r(b,"MAX",n.normalized.MAX),b;function p(){return n.seed}function d(){return n.seedLength}function v(){return n.stateLength}function g(){return n.byteLength}function x(){return n.state}function y(t){n.state=t}function m(){var t={type:"PRNG"};return t.name=b.NAME+"-"+n.NAME,t.state=f(n.state),t.params=[],t}function b(){return n.normalized()}}}}]);