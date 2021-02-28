/*! For license information please see RandomVideo.f160a4be.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1504:function(e,n,t){"use strict";var r=t(424),i=t(627),o=t(657),u=t(446),a=t(492),s=t(428),p=t(476),l=t(633),f=t(794).factory,d=t(420),g=t(615),m=t(658),c=t(2721),v=t(2722);e.exports=function(){var e,n,t,h,w,b;if(0===arguments.length)n=f();else if(1===arguments.length){if(!u(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!a(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");if(n=e.prng,!g(n.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!g(n.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else n=f(e)}else{if(h=c(w=arguments[0],b=arguments[1]))throw h;if(arguments.length>2){if(!u(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(s(e,"prng")){if(!a(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");if(n=e.prng,!g(n.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!g(n.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else n=f(e)}else n=f()}return r(t=void 0===w?j:x,"NAME","discrete-uniform"),e&&e.prng?(r(t,"seed",null),r(t,"seedLength",null),o(t,"state",p(null),l),r(t,"stateLength",null),r(t,"byteLength",null),r(t,"toJSON",p(null)),r(t,"PRNG",n)):(i(t,"seed",y),i(t,"seedLength",N),o(t,"state",O,T),i(t,"stateLength",E),i(t,"byteLength",M),r(t,"toJSON",L),r(t,"PRNG",n)),t;function y(){return n.seed}function N(){return n.seedLength}function E(){return n.stateLength}function M(){return n.byteLength}function O(){return n.state}function T(e){n.state=e}function L(){var e={type:"PRNG"};return e.name=t.NAME,e.state=m(n.state),e.params=void 0===w?[]:[w,b],e}function x(){return v(n,w,b)}function j(e,t){return d(e)||d(t)||!g(e)||!g(t)||e>t?NaN:v(n,e,t)}}},2719:function(e,n,t){"use strict";var r=t(424),i=t(2720);r(i,"factory",t(1504)),e.exports=i},2720:function(e,n,t){"use strict";var r=t(1504)();e.exports=r},2721:function(e,n,t){"use strict";var r=t(480).isPrimitive,i=t(458);e.exports=function(e,n){return!r(e)||i(e)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+e+"`."):!r(n)||i(n)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+n+"`."):e>n?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+e+","+n+"]`."):null}},2722:function(e,n,t){"use strict";var r=t(989),i=t(455);e.exports=function e(n,t,o){var u,a,s,p,l,f,d,g;if(0===(s=o-t))return t;if(d=n.MIN,(a=n.MAX-d)===s)return n()-d+t;if(a<s)for(p=0;;){for(s===r?(p=i(s/(a+1)),s%(a+1)===a&&(p+=1)):p=i((s+1)/(a+1)),u=0,f=1;f<=p;){if(u+=(n()-d)*f,f*a==s-f+1)return u;f*=a+1}if(!((g=e(n,0,i(s/f)))>r/f||(u+=g*=f)>s))return u+t}for(a===r?(l=i(a/(s+1)),a%(s+1)===s&&(l+=1)):l=i((a+1)/(s+1));;)if(u=n()-d,(u=i(u/l))<=s)return u+t}},6469:function(e,n,t){"use strict";t.r(n);var r=t(513),i=t.n(r),o=t(404),u=t.n(o),a=t(457),s=t.n(a),p=t(0),l=t.n(p),f=(t(402),t(2022)),d=t(456),g=t(448),m=t.n(g),c=t(606),v=t.n(c),h=t(2719),w=t.n(h),b=t(1529),y=t(423),N=t(445);Object(y.a)("Video");var E=u()("code",{},void 0,"videos"),M=function(e){var n=Object(p.useState)(null),t=s()(n,2),r=t[0],o=t[1],a=Object(f.a)("Video").t;return Object(p.useEffect)((function(){o(w()(0,e.videos.length-1))}),[e.videos]),m()(e.videos)&&0!==e.videos.length?v()(r)?null:l.a.createElement(b.a,i()({url:e.videos[r]},e)):u()(d.a,{variant:"danger"},void 0,a("supply-two-videos"),": ",E,".")};M.defaultProps={videos:[]},n.default=Object(N.a)(M)}}]);