(self.webpackChunk=self.webpackChunk||[]).push([[9733],{379733:function(t,r,n){!function(t,r,n){"use strict";var e=1e-10;function a(t,r){var n,a=s(t),f=a.filter((function(r){return i(r,t)})),l=0,x=0,c=[];if(f.length>1){var g=h(f);for(n=0;n<f.length;++n){var v=f[n];v.angle=Math.atan2(v.x-g.x,v.y-g.y)}f.sort((function(t,r){return r.angle-t.angle}));var p=f[f.length-1];for(n=0;n<f.length;++n){var y=f[n];x+=(p.x+y.x)*(y.y-p.y);for(var d={x:(y.x+p.x)/2,y:(y.y+p.y)/2},m=null,M=0;M<y.parentIndex.length;++M)if(p.parentIndex.indexOf(y.parentIndex[M])>-1){var z=t[y.parentIndex[M]],b=Math.atan2(y.x-z.x,y.y-z.y),w=Math.atan2(p.x-z.x,p.y-z.y),I=w-b;I<0&&(I+=2*Math.PI);var R=w-I/2,P=o(d,{x:z.x+z.radius*Math.sin(R),y:z.y+z.radius*Math.cos(R)});P>2*z.radius&&(P=2*z.radius),(null===m||m.width>P)&&(m={circle:z,width:P,p1:y,p2:p})}null!==m&&(c.push(m),l+=u(m.circle.radius,m.width),p=y)}}else{var A=t[0];for(n=1;n<t.length;++n)t[n].radius<A.radius&&(A=t[n]);var F=!1;for(n=0;n<t.length;++n)if(o(t[n],A)>Math.abs(A.radius-t[n].radius)){F=!0;break}F?l=x=0:(l=A.radius*A.radius*Math.PI,c.push({circle:A,p1:{x:A.x,y:A.y+A.radius},p2:{x:A.x-e,y:A.y+A.radius},width:2*A.radius}))}return x/=2,r&&(r.area=l+x,r.arcArea=l,r.polygonArea=x,r.arcs=c,r.innerPoints=f,r.intersectionPoints=a),l+x}function i(t,r){for(var n=0;n<r.length;++n)if(o(t,r[n])>r[n].radius+e)return!1;return!0}function s(t){for(var r=[],n=0;n<t.length;++n)for(var e=n+1;e<t.length;++e)for(var a=l(t[n],t[e]),i=0;i<a.length;++i){var s=a[i];s.parentIndex=[n,e],r.push(s)}return r}function u(t,r){return t*t*Math.acos(1-r/t)-(t-r)*Math.sqrt(r*(2*t-r))}function o(t,r){return Math.sqrt((t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y))}function f(t,r,n){if(n>=t+r)return 0;if(n<=Math.abs(t-r))return Math.PI*Math.min(t,r)*Math.min(t,r);var e=r-(n*n-t*t+r*r)/(2*n);return u(t,t-(n*n-r*r+t*t)/(2*n))+u(r,e)}function l(t,r){var n=o(t,r),e=t.radius,a=r.radius;if(n>=e+a||n<=Math.abs(e-a))return[];var i=(e*e-a*a+n*n)/(2*n),s=Math.sqrt(e*e-i*i),u=t.x+i*(r.x-t.x)/n,f=t.y+i*(r.y-t.y)/n,l=-(r.y-t.y)*(s/n),h=-(r.x-t.x)*(s/n);return[{x:u+l,y:f-h},{x:u-l,y:f+h}]}function h(t){for(var r={x:0,y:0},n=0;n<t.length;++n)r.x+=t[n].x,r.y+=t[n].y;return r.x/=t.length,r.y/=t.length,r}function x(t,r,n,e){var a=(e=e||{}).maxIterations||100,i=e.tolerance||1e-10,s=t(r),u=t(n),o=n-r;if(s*u>0)throw"Initial bisect points must have opposite signs";if(0===s)return r;if(0===u)return n;for(var f=0;f<a;++f){var l=r+(o/=2),h=t(l);if(h*s>=0&&(r=l),Math.abs(o)<i||0===h)return l}return r+o}function c(t){for(var r=new Array(t),n=0;n<t;++n)r[n]=0;return r}function g(t,r){return c(t).map((function(){return c(r)}))}function v(t,r){for(var n=0,e=0;e<t.length;++e)n+=t[e]*r[e];return n}function p(t){return Math.sqrt(v(t,t))}function y(t,r,n){for(var e=0;e<r.length;++e)t[e]=r[e]*n}function d(t,r,n,e,a){for(var i=0;i<t.length;++i)t[i]=r*n[i]+e*a[i]}function m(t,r,n){var e,a=(n=n||{}).maxIterations||200*r.length,i=n.nonZeroDelta||1.05,s=n.zeroDelta||.001,u=n.minErrorDelta||1e-6,o=n.minErrorDelta||1e-5,f=void 0!==n.rho?n.rho:1,l=void 0!==n.chi?n.chi:2,h=void 0!==n.psi?n.psi:-.5,x=void 0!==n.sigma?n.sigma:.5,c=r.length,g=new Array(c+1);g[0]=r,g[0].fx=t(r),g[0].id=0;for(var v=0;v<c;++v){var p=r.slice();p[v]=p[v]?p[v]*i:s,g[v+1]=p,g[v+1].fx=t(p),g[v+1].id=v+1}function y(t){for(var r=0;r<t.length;r++)g[c][r]=t[r];g[c].fx=t.fx}for(var m=function(t,r){return t.fx-r.fx},M=r.slice(),z=r.slice(),b=r.slice(),w=r.slice(),I=0;I<a;++I){if(g.sort(m),n.history){var R=g.map((function(t){var r=t.slice();return r.fx=t.fx,r.id=t.id,r}));R.sort((function(t,r){return t.id-r.id})),n.history.push({x:g[0].slice(),fx:g[0].fx,simplex:R})}for(e=0,v=0;v<c;++v)e=Math.max(e,Math.abs(g[0][v]-g[1][v]));if(Math.abs(g[0].fx-g[c].fx)<u&&e<o)break;for(v=0;v<c;++v){M[v]=0;for(var P=0;P<c;++P)M[v]+=g[P][v];M[v]/=c}var A=g[c];if(d(z,1+f,M,-f,A),z.fx=t(z),z.fx<g[0].fx)d(w,1+l,M,-l,A),w.fx=t(w),w.fx<z.fx?y(w):y(z);else if(z.fx>=g[c-1].fx){var F=!1;if(z.fx>A.fx?(d(b,1+h,M,-h,A),b.fx=t(b),b.fx<A.fx?y(b):F=!0):(d(b,1-h*f,M,h*f,A),b.fx=t(b),b.fx<z.fx?y(b):F=!0),F){if(x>=1)break;for(v=1;v<g.length;++v)d(g[v],1-x,g[0],x,g[v]),g[v].fx=t(g[v])}}else y(z)}return g.sort(m),{fx:g[0].fx,x:g[0]}}function M(t,r,n,e,a,i,s){var u=n.fx,o=v(n.fxprime,r),f=u,l=u,h=o,x=0;function c(l,x,c){for(var g=0;g<16;++g)if(a=(l+x)/2,d(e.x,1,n.x,a,r),f=e.fx=t(e.x,e.fxprime),h=v(e.fxprime,r),f>u+i*a*o||f>=c)x=a;else{if(Math.abs(h)<=-s*o)return a;h*(x-l)>=0&&(x=l),l=a,c=f}return 0}a=a||1,i=i||1e-6,s=s||.1;for(var g=0;g<10;++g){if(d(e.x,1,n.x,a,r),f=e.fx=t(e.x,e.fxprime),h=v(e.fxprime,r),f>u+i*a*o||g&&f>=l)return c(x,a,l);if(Math.abs(h)<=-s*o)return a;if(h>=0)return c(a,x,f);l=f,x=a,a*=2}return a}function z(t,r,n){var e,a,i,s={x:r.slice(),fx:0,fxprime:r.slice()},u={x:r.slice(),fx:0,fxprime:r.slice()},o=r.slice(),f=1;i=(n=n||{}).maxIterations||20*r.length,s.fx=t(s.x,s.fxprime),y(e=s.fxprime.slice(),s.fxprime,-1);for(var l=0;l<i;++l){if(f=M(t,e,s,u,f),n.history&&n.history.push({x:s.x.slice(),fx:s.fx,fxprime:s.fxprime.slice(),alpha:f}),f){d(o,1,u.fxprime,-1,s.fxprime);var h=v(s.fxprime,s.fxprime);d(e,Math.max(0,v(o,u.fxprime)/h),e,-1,u.fxprime),a=s,s=u,u=a}else y(e,s.fxprime,-1);if(p(s.fxprime)<=1e-5)break}return n.history&&n.history.push({x:s.x.slice(),fx:s.fx,fxprime:s.fxprime.slice(),alpha:f}),s}function b(t,r){(r=r||{}).maxIterations=r.maxIterations||500;var n,e=r.initialLayout||F,a=r.lossFunction||j,i=e(t=R(t),r),s=[],u=[];for(n in i)i.hasOwnProperty(n)&&(s.push(i[n].x),s.push(i[n].y),u.push(n));for(var o=m((function(r){for(var n={},e=0;e<u.length;++e){var s=u[e];n[s]={x:r[2*e],y:r[2*e+1],radius:i[s].radius}}return a(n,t)}),s,r).x,f=0;f<u.length;++f)n=u[f],i[n].x=o[2*f],i[n].y=o[2*f+1];return i}var w=1e-10;function I(t,r,n){return Math.min(t,r)*Math.min(t,r)*Math.PI<=n+w?Math.abs(t-r):x((function(e){return f(t,r,e)-n}),0,t+r)}function R(t){t=t.slice();var r,n,e,a,i=[],s={};for(r=0;r<t.length;++r){var u=t[r];1==u.sets.length?i.push(u.sets[0]):2==u.sets.length&&(s[[e=u.sets[0],a=u.sets[1]]]=!0,s[[a,e]]=!0)}for(i.sort((function(t,r){return t>r})),r=0;r<i.length;++r)for(e=i[r],n=r+1;n<i.length;++n)[e,a=i[n]]in s||t.push({sets:[e,a],size:0});return t}function P(t,r,n){var e=g(r.length,r.length),a=g(r.length,r.length);return t.filter((function(t){return 2==t.sets.length})).map((function(t){var i=n[t.sets[0]],s=n[t.sets[1]],u=I(Math.sqrt(r[i].size/Math.PI),Math.sqrt(r[s].size/Math.PI),t.size);e[i][s]=e[s][i]=u;var o=0;t.size+1e-10>=Math.min(r[i].size,r[s].size)?o=1:t.size<=1e-10&&(o=-1),a[i][s]=a[s][i]=o})),{distances:e,constraints:a}}function A(t,r,n,e){var a,i=0;for(a=0;a<r.length;++a)r[a]=0;for(a=0;a<n.length;++a)for(var s=t[2*a],u=t[2*a+1],o=a+1;o<n.length;++o){var f=t[2*o],l=t[2*o+1],h=n[a][o],x=e[a][o],c=(f-s)*(f-s)+(l-u)*(l-u),g=Math.sqrt(c),v=c-h*h;x>0&&g<=h||x<0&&g>=h||(i+=2*v*v,r[2*a]+=4*v*(s-f),r[2*a+1]+=4*v*(u-l),r[2*o]+=4*v*(f-s),r[2*o+1]+=4*v*(l-u))}return i}function F(t,r){var n=k(t,r),e=r.lossFunction||j;if(t.length>=8){var a=O(t,r);e(a,t)+1e-8<e(n,t)&&(n=a)}return n}function O(t,r){var n,e=(r=r||{}).restarts||10,a=[],i={};for(n=0;n<t.length;++n){var s=t[n];1==s.sets.length&&(i[s.sets[0]]=a.length,a.push(s))}var u=P(t,a,i),o=u.distances,f=u.constraints,l=p(o.map(p))/o.length;o=o.map((function(t){return t.map((function(t){return t/l}))}));var h,x,g=function(t,r){return A(t,r,o,f)};for(n=0;n<e;++n)x=z(g,c(2*o.length).map(Math.random),r),(!h||x.fx<h.fx)&&(h=x);var v=h.x,d={};for(n=0;n<a.length;++n){var m=a[n];d[m.sets[0]]={x:v[2*n]*l,y:v[2*n+1]*l,radius:Math.sqrt(m.size/Math.PI)}}if(r.history)for(n=0;n<r.history.length;++n)y(r.history[n].x,l);return d}function k(t,r){for(var n,e=r&&r.lossFunction?r.lossFunction:j,a={},i={},s=0;s<t.length;++s){var u=t[s];1==u.sets.length&&(n=u.sets[0],a[n]={x:1e10,y:1e10,rowid:a.length,size:u.size,radius:Math.sqrt(u.size/Math.PI)},i[n]=[])}for(t=t.filter((function(t){return 2==t.sets.length})),s=0;s<t.length;++s){var o=t[s],f=o.hasOwnProperty("weight")?o.weight:1,h=o.sets[0],x=o.sets[1];o.size+w>=Math.min(a[h].size,a[x].size)&&(f=0),i[h].push({set:x,size:o.size,weight:f}),i[x].push({set:h,size:o.size,weight:f})}var c=[];for(n in i)if(i.hasOwnProperty(n)){var g=0;for(s=0;s<i[n].length;++s)g+=i[n][s].size*i[n][s].weight;c.push({set:n,size:g})}function v(t,r){return r.size-t.size}c.sort(v);var p={};function y(t){return t.set in p}function d(t,r){a[r].x=t.x,a[r].y=t.y,p[r]=!0}for(d({x:0,y:0},c[0].set),s=1;s<c.length;++s){var m=c[s].set,M=i[m].filter(y);if(n=a[m],M.sort(v),0===M.length)throw"ERROR: missing pairwise overlap information";for(var z=[],b=0;b<M.length;++b){var R=a[M[b].set],P=I(n.radius,R.radius,M[b].size);z.push({x:R.x+P,y:R.y}),z.push({x:R.x-P,y:R.y}),z.push({y:R.y+P,x:R.x}),z.push({y:R.y-P,x:R.x});for(var A=b+1;A<M.length;++A)for(var F=a[M[A].set],O=I(n.radius,F.radius,M[A].size),k=l({x:R.x,y:R.y,radius:P},{x:F.x,y:F.y,radius:O}),q=0;q<k.length;++q)z.push(k[q])}var C=1e50,D=z[0];for(b=0;b<z.length;++b){a[m].x=z[b].x,a[m].y=z[b].y;var E=e(a,t);E<C&&(C=E,D=z[b])}d(D,m)}return a}function j(t,r){var n=0;function e(r){return r.map((function(r){return t[r]}))}for(var i=0;i<r.length;++i){var s,u=r[i];if(1!=u.sets.length){if(2==u.sets.length){var l=t[u.sets[0]],h=t[u.sets[1]];s=f(l.radius,h.radius,o(l,h))}else s=a(e(u.sets));n+=(u.hasOwnProperty("weight")?u.weight:1)*(s-u.size)*(s-u.size)}}return n}function q(t,r,n){var e;if(null===n?t.sort((function(t,r){return r.radius-t.radius})):t.sort(n),t.length>0){var a=t[0].x,i=t[0].y;for(e=0;e<t.length;++e)t[e].x-=a,t[e].y-=i}if(2==t.length&&o(t[0],t[1])<Math.abs(t[1].radius-t[0].radius)&&(t[1].x=t[0].x+t[0].radius-t[1].radius-1e-10,t[1].y=t[0].y),t.length>1){var s,u,f=Math.atan2(t[1].x,t[1].y)-r,l=Math.cos(f),h=Math.sin(f);for(e=0;e<t.length;++e)s=t[e].x,u=t[e].y,t[e].x=l*s-h*u,t[e].y=h*s+l*u}if(t.length>2){for(var x=Math.atan2(t[2].x,t[2].y)-r;x<0;)x+=2*Math.PI;for(;x>2*Math.PI;)x-=2*Math.PI;if(x>Math.PI){var c=t[1].y/(1e-10+t[1].x);for(e=0;e<t.length;++e){var g=(t[e].x+c*t[e].y)/(1+c*c);t[e].x=2*g-t[e].x,t[e].y=2*g*c-t[e].y}}}}function C(t){function r(t){return t.parent!==t&&(t.parent=r(t.parent)),t.parent}function n(t,n){var e=r(t),a=r(n);e.parent=a}t.map((function(t){t.parent=t}));for(var e=0;e<t.length;++e)for(var a=e+1;a<t.length;++a){var i=t[e].radius+t[a].radius;o(t[e],t[a])+1e-10<i&&n(t[a],t[e])}var s,u={};for(e=0;e<t.length;++e)(s=r(t[e]).parent.setid)in u||(u[s]=[]),u[s].push(t[e]);t.map((function(t){delete t.parent}));var f=[];for(s in u)u.hasOwnProperty(s)&&f.push(u[s]);return f}function D(t){var r=function(r){return{max:Math.max.apply(null,t.map((function(t){return t[r]+t.radius}))),min:Math.min.apply(null,t.map((function(t){return t[r]-t.radius})))}};return{xRange:r("x"),yRange:r("y")}}function E(t,r,n){null===r&&(r=Math.PI/2);var e,a,i=[];for(a in t)if(t.hasOwnProperty(a)){var s=t[a];i.push({x:s.x,y:s.y,radius:s.radius,setid:a})}var u=C(i);for(e=0;e<u.length;++e){q(u[e],r,n);var o=D(u[e]);u[e].size=(o.xRange.max-o.xRange.min)*(o.yRange.max-o.yRange.min),u[e].bounds=o}u.sort((function(t,r){return r.size-t.size}));var f=(i=u[0]).bounds,l=(f.xRange.max-f.xRange.min)/50;function h(t,r,n){if(t){var e,a,s,u=t.bounds;r?e=f.xRange.max-u.xRange.min+l:(e=f.xRange.max-u.xRange.max,(s=(u.xRange.max-u.xRange.min)/2-(f.xRange.max-f.xRange.min)/2)<0&&(e+=s)),n?a=f.yRange.max-u.yRange.min+l:(a=f.yRange.max-u.yRange.max,(s=(u.yRange.max-u.yRange.min)/2-(f.yRange.max-f.yRange.min)/2)<0&&(a+=s));for(var o=0;o<t.length;++o)t[o].x+=e,t[o].y+=a,i.push(t[o])}}for(var x=1;x<u.length;)h(u[x],!0,!1),h(u[x+1],!1,!0),h(u[x+2],!0,!0),x+=3,f=D(i);var c={};for(e=0;e<i.length;++e)c[i[e].setid]=i[e];return c}function T(t,r,n,e){var a=[],i=[];for(var s in t)t.hasOwnProperty(s)&&(i.push(s),a.push(t[s]));r-=2*e,n-=2*e;var u=D(a),o=u.xRange,f=u.yRange;if(o.max==o.min||f.max==f.min)return console.log("not scaling solution: zero size detected"),t;for(var l=r/(o.max-o.min),h=n/(f.max-f.min),x=Math.min(h,l),c=(r-(o.max-o.min)*x)/2,g=(n-(f.max-f.min)*x)/2,v={},p=0;p<a.length;++p){var y=a[p];v[i[p]]={radius:x*y.radius,x:e+c+(y.x-o.min)*x,y:e+g+(y.y-f.min)*x}}return v}function L(){var t=600,n=350,e=15,a=1e3,i=Math.PI/2,s=!0,u=!0,o=!0,f=null,l=null,h={},x=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],c=0,g=function(t){if(t in h)return h[t];var r=h[t]=x[c];return(c+=1)>=x.length&&(c=0),r},v=b,p=j;function y(h){var x=h.datum(),c={};x.forEach((function(t){0==t.size&&1==t.sets.length&&(c[t.sets[0]]=1)})),x=x.filter((function(t){return!t.sets.some((function(t){return t in c}))}));var y={},d={};if(x.length>0){var m=v(x,{lossFunction:p});s&&(m=E(m,i,l)),y=T(m,t,n,e),d=V(y,x)}var M={};function z(t){return t.sets in M?M[t.sets]:1==t.sets.length?""+t.sets[0]:void 0}x.forEach((function(t){t.label&&(M[t.sets]=t.label)})),h.selectAll("svg").data([y]).enter().append("svg");var b=h.select("svg").attr("width",t).attr("height",n),w={},I=!1;b.selectAll(".venn-area path").each((function(t){var n=r.select(this).attr("d");1==t.sets.length&&n&&(I=!0,w[t.sets[0]]=B(n))}));var R=function(r){return function(e){return H(r.sets.map((function(r){var a=w[r],i=y[r];return a||(a={x:t/2,y:n/2,radius:1}),i||(i={x:t/2,y:n/2,radius:1}),{x:a.x*(1-e)+i.x*e,y:a.y*(1-e)+i.y*e,radius:a.radius*(1-e)+i.radius*e}})))}},P=b.selectAll(".venn-area").data(x,(function(t){return t.sets})),A=P.enter().append("g").attr("class",(function(t){return"venn-area venn-"+(1==t.sets.length?"circle":"intersection")})).attr("data-venn-sets",(function(t){return t.sets.join("_")})),F=A.append("path"),O=A.append("text").attr("class","label").text((function(t){return z(t)})).attr("text-anchor","middle").attr("dy",".35em").attr("x",t/2).attr("y",n/2);o&&(F.style("fill-opacity","0").filter((function(t){return 1==t.sets.length})).style("fill",(function(t){return g(t.sets)})).style("fill-opacity",".25"),O.style("fill",(function(t){return 1==t.sets.length?g(t.sets):"#444"})));var k=h;I?(k=h.transition("venn").duration(a)).selectAll("path").attrTween("d",R):k.selectAll("path").attr("d",(function(t){return H(t.sets.map((function(t){return y[t]})))}));var j=k.selectAll("text").filter((function(t){return t.sets in d})).text((function(t){return z(t)})).attr("x",(function(t){return Math.floor(d[t.sets].x)})).attr("y",(function(t){return Math.floor(d[t.sets].y)}));u&&(I?"on"in j?j.on("end",S(y,z)):j.each("end",S(y,z)):j.each(S(y,z)));var q=P.exit().transition("venn").duration(a).remove();q.selectAll("path").attrTween("d",R);var C=q.selectAll("text").attr("x",t/2).attr("y",n/2);return null!==f&&(O.style("font-size","0px"),j.style("font-size",f),C.style("font-size","0px")),{circles:y,textCentres:d,nodes:P,enter:A,update:k,exit:q}}return y.wrap=function(t){return arguments.length?(u=t,y):u},y.width=function(r){return arguments.length?(t=r,y):t},y.height=function(t){return arguments.length?(n=t,y):n},y.padding=function(t){return arguments.length?(e=t,y):e},y.colours=function(t){return arguments.length?(g=t,y):g},y.fontSize=function(t){return arguments.length?(f=t,y):f},y.duration=function(t){return arguments.length?(a=t,y):a},y.layoutFunction=function(t){return arguments.length?(v=t,y):v},y.normalize=function(t){return arguments.length?(s=t,y):s},y.styled=function(t){return arguments.length?(o=t,y):o},y.orientation=function(t){return arguments.length?(i=t,y):i},y.orientationOrder=function(t){return arguments.length?(l=t,y):l},y.lossFunction=function(t){return arguments.length?(p=t,y):p},y}function S(t,n){return function(){for(var e,a=r.select(this),i=a.datum(),s=t[i.sets[0]].radius||50,u=n(i)||"",o=u.split(/\s+/).reverse(),f=3,l=(u.length+o.length)/f,h=o.pop(),x=[h],c=0,g=1.1,v=a.text(null).append("tspan").text(h);h=o.pop();)x.push(h),e=x.join(" "),v.text(e),e.length>l&&v.node().getComputedTextLength()>s&&(x.pop(),v.text(x.join(" ")),x=[h],v=a.append("tspan").text(h),c++);var p=.35-c*g/2,y=a.attr("x"),d=a.attr("y");a.selectAll("tspan").attr("x",y).attr("y",d).attr("dy",(function(t,r){return p+r*g+"em"}))}}function _(t,r,n){var e,a,i=r[0].radius-o(r[0],t);for(e=1;e<r.length;++e)(a=r[e].radius-o(r[e],t))<=i&&(i=a);for(e=0;e<n.length;++e)(a=o(n[e],t)-n[e].radius)<=i&&(i=a);return i}function N(t,r){var n,e=[];for(n=0;n<t.length;++n){var i=t[n];e.push({x:i.x,y:i.y}),e.push({x:i.x+i.radius/2,y:i.y}),e.push({x:i.x-i.radius/2,y:i.y}),e.push({x:i.x,y:i.y+i.radius/2}),e.push({x:i.x,y:i.y-i.radius/2})}var s=e[0],u=_(e[0],t,r);for(n=1;n<e.length;++n){var f=_(e[n],t,r);f>=u&&(s=e[n],u=f)}var l=m((function(n){return-1*_({x:n[0],y:n[1]},t,r)}),[s.x,s.y],{maxIterations:500,minErrorDelta:1e-10}).x,x={x:l[0],y:l[1]},c=!0;for(n=0;n<t.length;++n)if(o(x,t[n])>t[n].radius){c=!1;break}for(n=0;n<r.length;++n)if(o(x,r[n])<r[n].radius){c=!1;break}if(!c)if(1==t.length)x={x:t[0].x,y:t[0].y};else{var g={};a(t,g),x=0===g.arcs.length?{x:0,y:-1e3,disjoint:!0}:1==g.arcs.length?{x:g.arcs[0].circle.x,y:g.arcs[0].circle.y}:r.length?N(t,[]):h(g.arcs.map((function(t){return t.p1})))}return x}function G(t){var r={},n=[];for(var e in t)n.push(e),r[e]=[];for(var a=0;a<n.length;a++)for(var i=t[n[a]],s=a+1;s<n.length;++s){var u=t[n[s]],f=o(i,u);f+u.radius<=i.radius+1e-10?r[n[s]].push(n[a]):f+i.radius<=u.radius+1e-10&&r[n[a]].push(n[s])}return r}function V(t,r){for(var n={},e=G(t),a=0;a<r.length;++a){for(var i=r[a].sets,s={},u={},o=0;o<i.length;++o){s[i[o]]=!0;for(var f=e[i[o]],l=0;l<f.length;++l)u[f[l]]=!0}var h=[],x=[];for(var c in t)c in s?h.push(t[c]):c in u||x.push(t[c]);var g=N(h,x);n[i]=g,g.disjoint&&r[a].size>0&&console.log("WARNING: area "+i+" not represented on screen")}return n}function W(t,r){for(var n=G(t.selectAll("svg").datum()),e={},a=0;a<r.sets.length;++a){var i=r.sets[a];for(var s in n)for(var u=n[s],o=0;o<u.length;++o)if(u[o]==i){e[s]=!0;break}}function f(t){for(var r=0;r<t.length;++r)if(!(t[r]in e))return!1;return!0}t.selectAll("g").sort((function(t,n){return t.sets.length!=n.sets.length?t.sets.length-n.sets.length:t==r?f(n.sets)?-1:1:n==r?f(t.sets)?1:-1:n.size-t.size}))}function Z(t,r,n){var e=[];return e.push("\nM",t,r),e.push("\nm",-n,0),e.push("\na",n,n,0,1,0,2*n,0),e.push("\na",n,n,0,1,0,2*-n,0),e.join(" ")}function B(t){var r=t.split(" ");return{x:parseFloat(r[1]),y:parseFloat(r[2]),radius:-parseFloat(r[4])}}function H(t){var r={};a(t,r);var n=r.arcs;if(0===n.length)return"M 0 0";if(1==n.length){var e=n[0].circle;return Z(e.x,e.y,e.radius)}for(var i=["\nM",n[0].p2.x,n[0].p2.y],s=0;s<n.length;++s){var u=n[s],o=u.circle.radius,f=u.width>o;i.push("\nA",o,o,0,f?1:0,1,u.p1.x,u.p1.y)}return i.join(" ")}t.intersectionArea=a,t.circleCircleIntersection=l,t.circleOverlap=f,t.circleArea=u,t.distance=o,t.venn=b,t.greedyLayout=k,t.scaleSolution=T,t.normalizeSolution=E,t.bestInitialLayout=F,t.lossFunction=j,t.disjointCluster=C,t.distanceFromIntersectArea=I,t.VennDiagram=L,t.wrapText=S,t.computeTextCentres=V,t.computeTextCentre=N,t.sortAreas=W,t.circlePath=Z,t.circleFromPath=B,t.intersectionAreaPath=H,Object.defineProperty(t,"__esModule",{value:!0})}(r,n(761264),n(982987))}}]);