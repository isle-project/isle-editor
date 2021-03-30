/*! For license information please see Typewriter.7c066605.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1156],{1347:function(e,t,n){"use strict";var r=n(422),i=n(574),o=n(601),u=n(445),a=n(476),s=n(425),c=n(470),l=n(573),p=n(666).factory,f=n(415),d=n(560),m=n(602),g=n(2683),y=n(2684);e.exports=function(){var e,t,n,v,h,b;if(0===arguments.length)t=p();else if(1===arguments.length){if(!u(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!a(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");if(t=e.prng,!d(t.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!d(t.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else t=p(e)}else{if(v=g(h=arguments[0],b=arguments[1]))throw v;if(arguments.length>2){if(!u(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!a(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");if(t=e.prng,!d(t.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!d(t.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else t=p(e)}else t=p()}return r(n=void 0===h?M:C,"NAME","discrete-uniform"),e&&e.prng?(r(n,"seed",null),r(n,"seedLength",null),o(n,"state",c(null),l),r(n,"stateLength",null),r(n,"byteLength",null),r(n,"toJSON",c(null)),r(n,"PRNG",t)):(i(n,"seed",w),i(n,"seedLength",O),o(n,"state",T,j),i(n,"stateLength",E),i(n,"byteLength",x),r(n,"toJSON",N),r(n,"PRNG",t)),n;function w(){return t.seed}function O(){return t.seedLength}function E(){return t.stateLength}function x(){return t.byteLength}function T(){return t.state}function j(e){t.state=e}function N(){var e={type:"PRNG"};return e.name=n.NAME,e.state=m(t.state),e.params=void 0===h?[]:[h,b],e}function C(){return y(t,h,b)}function M(e,n){return f(e)||f(n)||!d(e)||!d(n)||e>n?NaN:y(t,e,n)}}},2681:function(e,t,n){"use strict";var r=n(422),i=n(2682);r(i,"factory",n(1347)),e.exports=i},2682:function(e,t,n){"use strict";var r=n(1347)();e.exports=r},2683:function(e,t,n){"use strict";var r=n(467).isPrimitive,i=n(455);e.exports=function(e,t){return!r(e)||i(e)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+e+"`."):!r(t)||i(t)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+t+"`."):e>t?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+e+","+t+"]`."):null}},2684:function(e,t,n){"use strict";var r=n(833),i=n(452);e.exports=function e(t,n,o){var u,a,s,c,l,p,f,d;if(0===(s=o-n))return n;if(f=t.MIN,(a=t.MAX-f)===s)return t()-f+n;if(a<s)for(c=0;;){for(s===r?(c=i(s/(a+1)),s%(a+1)===a&&(c+=1)):c=i((s+1)/(a+1)),u=0,p=1;p<=c;){if(u+=(t()-f)*p,p*a==s-p+1)return u;p*=a+1}if(!((d=e(t,0,i(s/p)))>r/p||(u+=d*=p)>s))return u+n}for(a===r?(l=i(a/(s+1)),a%(s+1)===s&&(l+=1)):l=i((a+1)/(s+1));;)if(u=t()-f,(u=i(u/l))<=s)return u+n}},6452:function(e,t,n){"use strict";n.r(t);var r=n(448),i=n.n(r),o=(n(465),n(0)),u=n.n(o),a=(n(404),n(450)),s=n.n(a),c=n(447),l=n.n(c),p=n(1128),f=n.n(p),d=n(429),m=n(2681),g=n.n(m),y=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=Object(o.useRef)(null),u=Object(o.useRef)(e);return Object(o.useEffect)((function(){u.current=e}),[e]),Object(o.useEffect)((function(){if(Object(d.isPrimitive)(t)&&Object(d.isPrimitive)(n)){!function e(){var o=t,a=n;i.current||(o+=r,a+=r),i.current=setTimeout((function(){u.current(),e()}),g()(o,a))}()}return function(){return clearTimeout(i.current)}}),[r,t,n]),function(){clearTimeout(i.current)}},v=n(780),h=n(442),b=n.p+"static/media/keystroke.608ebd69.ogg",w=(n(374),s()("isle:typewriter")),O={displayedText:"",counter:0,arrayCounter:0},E=function(e){var t=e.text,n=e.hold,r=e.interval,a=e.delay,s=e.random,c=e.sound,p=e.style,d=Object(o.useState)(O),m=i()(d,2),g=m[0],h=m[1],E=Object(o.useState)(!1),x=i()(E,2),T=x[0],j=x[1],N=Object(o.useState)(!1),C=i()(N,2),M=C[0],L=C[1],R=Object(o.useRef)(new Audio(b)),A=Object(o.useRef)(),P=Object(o.useRef)(null),k=Object(o.useCallback)((function(e){R.current.volume=.3+.7*f()()," "!==e&&R.current.play()}),[R]),I=Object(o.useCallback)((function(){if(!P.current)return!1;var e=P.current.getBoundingClientRect().top;L(e>=0&&e<=window.innerHeight)}),[]);Object(o.useEffect)((function(){var e=v.a?document.getElementById("Lesson"):document;return e.addEventListener("scroll",I),function(){e.removeEventListener("scroll",I)}}),[I]);var S=s?[.5*r,1.5*r,a]:[r,r,a];return A.current=y.apply(void 0,[function(){if(M&&!T)if(l()(t))if(g.arrayCounter<t.length){var e=t[g.arrayCounter];if(w("Check if the text is fully displayed..."),g.counter<e.length){w("Print one more character of the current text...");var r=g.counter+1,i=e.slice(0,r);c&&k(i[i.length-1]),h({counter:r,displayedText:i,arrayCounter:g.arrayCounter})}else w("Advances to the next text in the array..."),j(!0),setTimeout((function(){j(!1),h({counter:0,displayedText:g.displayedText,arrayCounter:g.arrayCounter+1})}),n)}else A.current();else if(g.counter<t.length){var o=g.counter+1,u=t.slice(0,o);c&&k(u[t.length-1]),h({counter:o,displayedText:u,arrayCounter:g.arrayCounter})}else A.current()}].concat(S)),Object(o.useEffect)((function(){h(O)}),[a,t,r,n,c]),u.a.createElement("span",{className:"typewriter",style:p,ref:P},g.displayedText)};E.defaultProps={delay:null,hold:2e3,interval:100,random:!1,sound:!1,style:{},text:""};t.default=Object(h.a)(E)}}]);