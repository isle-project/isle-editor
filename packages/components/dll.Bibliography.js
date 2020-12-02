/*! For license information please see dll.Bibliography.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[26],{1378:function(e,t,n){"use strict";var r=n(1379);e.exports=r},1379:function(e,t,n){"use strict";var r=n(67).isPrimitive,a=n(34).isPrimitive;e.exports=function(e,t,n){var i,o;if(!a(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(!a(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");if(arguments.length>2){if(!r(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");if(0===n)return 0===t.length;i=n<0?e.length+n:n}else i=e.length;if(0===t.length)return!0;if((i-=t.length)<0)return!1;for(o=0;o<t.length;o++)if(e.charCodeAt(i+o)!==t.charCodeAt(o))return!1;return!0}},2298:function(e,t,n){"use strict";n.r(t);var r=n(958),a=n(2299);r.default.addResources("de","bibliography",a.DE),r.default.addResources("en","bibliography",a.EN),r.default.addResources("es","bibliography",a.ES)},2299:function(e){e.exports=JSON.parse('{"DE":{"edition":"Edition","references":"Referenzen"},"EN":{"edition":"edition","references":"References"},"ES":{"edition":"edición","references":"Referencias"}}')},830:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(1),o=n.n(i),l=n(2300),c=n(1378),u=n.n(c),s=n(88),f=n.n(s),d=n(37);n(2298);function h(e){return e?u()(e,".")?e:"".concat(e,"."):""}var m=function(e){var t=e.title,n=e.t,i=Object(r.useContext)(d.default).config.references,o=f()(i);o=o.sort((function(e,t){var n=i[e],r=i[t];return n&&n.author?r&&r.author&&n.author[0]>r.author[0]?1:-1:1}));for(var l=[],c=0;c<o.length;c++){var u=i[o[c]];if(u){var s=void 0;if("article"===u.type){var m=h(u.author),p=u.title?"".concat(u.title,". "):"",g=u.journal?a.a.createElement("i",null,"".concat(u.journal,", ")):"",v=u.year?"".concat(u.year,"."):"",b=u.number?"(".concat(u.number,")"):"",E=u.pages?"".concat(u.volume||b?":":"").concat(u.pages,", "):"",y=u.month?" ".concat(u.month," "):"",w=a.a.createElement("span",null,m," ",p,g,u.volume,b,E,y,v);s=a.a.createElement("li",{key:"ref-".concat(c)},w)}else if("book"===u.type){var R=h(u.author),T=u.title?a.a.createElement("i",null,u.title,". "):"",k=u.publisher?"".concat(u.publisher,", "):"",j=u.address?"".concat(u.address,", "):"",x=u.edition?"".concat(u.edition," ").concat(n("edition"),", "):"",S=u.month?"".concat(u.month," "):"",_=u.year?"".concat(u.year,"."):"",C=a.a.createElement("span",null,R," ",T,k,j,x,S,_);s=a.a.createElement("li",{key:"ref-".concat(c)},C)}l.push(s)}}return a.a.createElement(r.Fragment,null,t?a.a.createElement("h2",null,t):a.a.createElement("h2",null,n("references")),a.a.createElement("ol",null,l))};m.propTypes={title:o.a.string},m.defaultProps={title:null},t.default=Object(l.withTranslation)("bibliography")(m)}}]);