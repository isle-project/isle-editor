/*! For license information please see dll.Timer.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[142],{3244:function(n,t,e){"use strict";e.r(t);var r=e(137),i=e.n(r);t.default=function(n){var t=i()(n/60),e=n-60*t;return t=t<10?"0".concat(t):t,e=e<10?"0".concat(e):e,"".concat(t,":").concat(e)}},3245:function(n,t,e){"use strict";e.r(t);var r=e(137),i=e.n(r);t.default=function(n){n*=-1;var t=i()(n/60),e=n-60*t;return t=t<10?"0".concat(t):t,e=e<10?"0".concat(e):e,"-".concat(t,":").concat(e)}},3246:function(n,t,e){"use strict";e.r(t);var r=e(22),i=e.n(r),o=e(3247),a={insert:"head",singleton:!1};i()(o.default,a);t.default=o.default.locals||{}},3247:function(n,t,e){"use strict";e.r(t);var r=e(23),i=e.n(r)()(!1);i.push([n.i,".timer-div {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tmargin-top: 10px;\n\tmargin-right: 25px;\n\tz-index: 9999;\n\tfont-size: 24px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tborder-radius: 3px;\n}\n\n.timer-info {\n\tbackground-color: #383D48;\n\tcolor: white;\n}\n\n.timer-danger {\n\tbackground-color: #f87c87;\n\tcolor: #591801;\n}\n",""]),t.default=i},934:function(n,t,e){"use strict";e.r(t);var r=e(203),i=e.n(r),o=e(0),a=e.n(o),c=e(1),u=e.n(c),l=e(36),s=e.n(l),d=e(140),f=e.n(d),p=e(3244),v=e(3245),g=(e(3246),s()("isle:timer"));function m(n){return n?"timer::".concat(n):null}var b=function(n){var t=n.id,e=n.active,r=n.duration,c=n.invisible,u=n.belowZero,l=n.legend,s=n.style,d=n.onTimeUp,b=localStorage.getItem(m(t)),w=Object(o.useState)(b||r),h=i()(w,2),x=h[0],S=h[1],j=Object(o.useState)(r),y=i()(j,2),I=y[0],O=y[1],k=Object(o.useState)(!1),T=i()(k,2),_=T[0],U=T[1],Z=Object(o.useState)(null),q=i()(Z,2),z=q[0],D=q[1];if(r!==I&&(g("Duration changed since last render..."),S(r),O(r)),Object(o.useEffect)((function(){if(e&&!z){g("Starting countdown...");var n=setInterval((function(){S((function(n){var e=n-1,r=m(t);return r&&localStorage.setItem(r,e),!_&&e<=0&&(u||clearInterval(z),d(),U(!0)),e}))}),1e3);D(n)}return function(){g("Cancel the countdown on unmount of component..."),z&&clearInterval(z)}}),[e,u,z,_,t,d]),c)return null;var E=x>0?p.default:v.default;return a.a.createElement("div",{style:s,className:"timer-div ".concat(x<0?"timer-danger":"timer-info")},l,E(u?x:f()(x,0)))};b.propTypes={id:u.a.string,active:u.a.bool.isRequired,belowZero:u.a.bool,duration:u.a.number.isRequired,invisible:u.a.bool,legend:u.a.string,style:u.a.object,onTimeUp:u.a.func},b.defaultProps={id:null,belowZero:!1,invisible:!1,legend:"",style:{},onTimeUp:function(){}},t.default=b}}]);