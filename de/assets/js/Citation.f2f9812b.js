(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{6351:function(t,n,e){"use strict";e.r(n);e(421);var r=e(407),o=e.n(r),a=e(414),i=e.n(a),s=e(416),c=e.n(s),u=e(418),f=e.n(u),p=e(419),l=e.n(p),h=e(417),d=e.n(h),v=(e(664),e(0)),y=(e(404),e(4095)),b=e(1080),g=e.n(b),w=e(471),k=e.n(w),x=e(459),O=e(420);function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=d()(t);if(n){var o=d()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)}}Object(O.a)("Citation");var C={background:"red",color:"white"};function j(t){return t=g()(t),k()(t,",")?t.substring(0,t.indexOf(",")):t.substring(t.lastIndexOf(" ")+1)}var m=function(t){f()(e,t);var n=R(e);function e(){return i()(this,e),n.apply(this,arguments)}return c()(e,[{key:"render",value:function(){var t=this.props.t,n=this.context;if(!n.config.references)return o()("span",{style:C},void 0,t("no-references"));var e=n.config.references[this.props.citeKey];if(!e)return o()("span",{style:C},void 0,t("key-not-found"));if(!e.author)return o()("span",{style:C},void 0,t("no-author"));var r=e.author.split("and"),a="";a=r.length>2?j(r[0])+" et al.":r.length>1?j(r[0])+t("and")+j(r[1]):j(r[0]);var i=this.props.label?", ".concat(this.props.label):"";return this.props.parens?o()("span",{},void 0,"(",a,", ",e.year,i,")"):o()("span",{},void 0,a," (",e.year,i,")")}}]),e}(v.Component);m.defaultProps={parens:!1,label:""},m.contextType=x.a,n.default=Object(y.a)("Citation")(m)}}]);