/*! For license information please see dll.HintButton.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[53],{2563:function(e,t,n){"use strict";n.r(t);var a=n(958),s=n(2564);a.default.addResources("de","components",s.DE),a.default.addResources("en","components",s.EN),a.default.addResources("es","components",s.ES)},2564:function(e){e.exports=JSON.parse('{"DE":{"close-hint":"Hinweis schließen","close-hints":"Hinweise schließen","get-hint":"Hinweis anzeigen","hint":"Hinweis","next-hint":"Nächster Hinweis","show-hints":"Hinweise anzeigen"},"EN":{"close-hint":"Close Hint","close-hints":"Close Hints","get-hint":"Get Hint","hint":"Hint","next-hint":"Next Hint","show-hints":"Show Hints"},"ES":{"close-hint":"Una pista cercana","close-hints":"Pistas cercanas","get-hint":"Obtener una pista","hint":"Pista","next-hint":"Siguiente pista","show-hints":"Mostrar pistas"}}')},851:function(e,t,n){"use strict";n.r(t);var a=n(203),s=n.n(a),i=n(0),r=n.n(i),l=n(1),c=n.n(l),o=n(36),u=n.n(o),d=n(2300),f=n(390),h=n(968),p=n(90),m=(n(2563),u()("isle:hint-button")),b=function(e,t,n,a){return r.a.createElement(h.default,{id:"".concat(n,"-hint-popover"),title:"Hints",style:{minWidth:"400px",padding:"3px",zIndex:9999}},t.filter((function(t,n){return n<=e})).map((function(e,t){return r.a.createElement("span",{key:t},r.a.createElement("label",{style:{marginBottom:0}},a("hint")," ",t+1,":"),r.a.createElement("br",null),r.a.createElement("span",null,e),r.a.createElement("br",null))})))},w=function(e){var t=e.disabled,n=e.hints,a=e.onClick,l=e.onFinished,c=e.placement,o=e.size,u=e.style,d=e.id,h=e.t,w=Object(i.useState)(!1),v=s()(w,2),x=v[0],E=v[1],g=Object(i.useState)(0),O=s()(g,2),N=O[0],y=O[1],P=function(e,t,n,a){return a(n?e<=1?"close-hint":"close-hints":0===e?"get-hint":e===t?"show-hints":"next-hint")}(N,n.length,x,h);return r.a.createElement(p.default,{trigger:"click",placement:c,overlay:b(N-1,n,d,h)},r.a.createElement(f.default,{className:"hint-button",variant:"success",size:o,onClick:function(e){return m("Clicked on a hint button..."),N<n.length&&!1===x?(a(N),y(N+1),E(!0),N+1===n.length&&l(),e(!1)):(E(!1),e(x))},disabled:t,autoActivate:!1,style:u},P))};w.propTypes={disabled:c.a.bool,hints:c.a.arrayOf(c.a.oneOfType([c.a.string,c.a.element])).isRequired,onClick:c.a.func,onFinished:c.a.func,placement:c.a.string,size:c.a.string,style:c.a.object},w.defaultProps={disabled:!1,onClick:function(){},onFinished:function(){},placement:"left",size:"sm",style:{}},t.default=Object(d.withTranslation)()(w)},963:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(11),i=n(12),r=n.n(i),l=n(0),c=n.n(l),o=n(17),u=c.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"div":n,l=e.bsPrefix,u=e.className,d=e.children,f=Object(s.default)(e,["as","bsPrefix","className","children"]);return l=Object(o.useBootstrapPrefix)(l,"popover-body"),c.a.createElement(i,Object(a.default)({ref:t},f,{className:r()(u,l)}),d)}));t.default=u},966:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(11),i=n(12),r=n.n(i),l=n(0),c=n.n(l),o=n(17),u=c.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"div":n,l=e.bsPrefix,u=e.className,d=e.children,f=Object(s.default)(e,["as","bsPrefix","className","children"]);return l=Object(o.useBootstrapPrefix)(l,"popover-header"),c.a.createElement(i,Object(a.default)({ref:t},f,{className:r()(l,u)}),d)}));t.default=u},968:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(11),i=n(12),r=n.n(i),l=n(0),c=n.n(l),o=(n(374),n(17)),u=n(966),d=n(963),f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.placement,l=e.className,u=e.style,f=e.children,h=e.content,p=e.arrowProps,m=(e.popper,e.show,Object(s.default)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),b=Object(o.useBootstrapPrefix)(n,"popover"),w=((null==i?void 0:i.split("-"))||[])[0];return c.a.createElement("div",Object(a.default)({ref:t,role:"tooltip",style:u,"x-placement":w,className:r()(l,b,w&&"bs-popover-"+w)},m),c.a.createElement("div",Object(a.default)({className:"arrow"},p)),h?c.a.createElement(d.default,null,f):f)}));f.defaultProps={placement:"right"},f.Title=u.default,f.Content=d.default,t.default=f}}]);