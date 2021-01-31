/*! For license information please see Citation.d241ec2c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1938:function(t,r,e){"use strict";var n=e(1939);t.exports=n},1939:function(t,r,e){"use strict";var n=e(417).isPrimitive,i=e(620),u=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;t.exports=function(t){if(!n(t))throw new TypeError("invalid argument. Must provide a string primitive. Value: `"+t+"`.");return i(t,u,"$1")}},620:function(t,r,e){"use strict";var n=e(760);t.exports=n},6690:function(t,r,e){"use strict";e.r(r);e(382),e(369),e(385),e(770);var n=e(367),i=e.n(n),u=e(373),o=e.n(u),s=e(375),a=e.n(s),c=e(379),f=e.n(c),p=e(380),l=e.n(p),v=e(377),g=e.n(v),d=e(0),h=(e(359),e(6674)),y=e(1938),x=e.n(y),m=e(494),w=e.n(m),b=e(441),E=e(392);function R(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=g()(t);if(r){var i=g()(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return l()(this,e)}}Object(E.a)("Citation");var T={background:"red",color:"white"};function k(t){return t=x()(t),w()(t,",")?t.substring(0,t.indexOf(",")):t.substring(t.lastIndexOf(" ")+1)}var P=function(t){f()(e,t);var r=R(e);function e(){return o()(this,e),r.apply(this,arguments)}return a()(e,[{key:"render",value:function(){var t=this.props.t,r=this.context;if(!r.config.references)return i()("span",{style:T},void 0,t("no-references"));var e=r.config.references[this.props.citeKey];if(!e)return i()("span",{style:T},void 0,t("key-not-found"));if(!e.author)return i()("span",{style:T},void 0,t("no-author"));var n=e.author.split("and"),u="";u=n.length>2?k(n[0])+" et al.":n.length>1?k(n[0])+t("and")+k(n[1]):k(n[0]);var o=this.props.label?", ".concat(this.props.label):"";return this.props.parens?i()("span",{},void 0,"(",u,", ",e.year,o,")"):i()("span",{},void 0,u," (",e.year,o,")")}}]),e}(d.Component);P.defaultProps={parens:!1,label:""},P.contextType=b.a,r.default=Object(h.a)("Citation")(P)},738:function(t,r,e){"use strict";var n=e(747);t.exports=n},747:function(t,r,e){"use strict";var n=e(962),i=e(675),u=e(748),o=n();t.exports=function(t){return"object"==typeof t&&(t instanceof RegExp||(o?u(t):"[object RegExp]"===i(t)))}},748:function(t,r,e){"use strict";var n=e(749);t.exports=function(t){try{return n.call(t),!0}catch(r){return!1}}},749:function(t,r,e){"use strict";var n=RegExp.prototype.exec;t.exports=n},760:function(t,r,e){"use strict";var n=e(761),i=e(490),u=e(417).isPrimitive,o=e(738);t.exports=function(t,r,e){if(!u(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(u(r))r=n(r),r=new RegExp(r,"g");else if(!o(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!u(e)&&!i(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return t.replace(r,e)}},761:function(t,r,e){"use strict";var n=e(762);t.exports=n},762:function(t,r,e){"use strict";var n=e(417).isPrimitive,i=/[-\/\\^$*+?.()|[\]{}]/g;t.exports=function(t){var r,e;if(!n(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(i,"\\$&"):(r=(r=t.substring(1,e)).replace(i,"\\$&"),t=t[0]+r+t.substring(e))}}}]);