(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{2723:function(e,t,a){"use strict";t.a=function(e){e.stopPropagation()}},6472:function(e,t,a){"use strict";a.r(t);var r=a(404),n=a.n(r),o=a(457),c=a.n(o),l=a(0),u=a(451),i=a.n(u),s=(a(402),a(2022)),v=a(431),d=a(606),f=a.n(d),m=a(570),b=a(707),h=a(612),p=a(2723),w=a(465),g=a(471),j=a(588),O=a(423);a(348);Object(O.a)("Revealer");var y=i()("isle:revealer"),R=Object(h.a)("revealer"),C=function(e){var t=e.message,a=e.show,r=e.children,o=Object(l.useRef)(e.id||R({message:t,show:a})),u=Object(l.useContext)(w.a),i=Object(s.a)("Revealer").t,d=Object(l.useState)(a),h=c()(d,2),O=h[0],C=h[1],N=Object(l.useState)(a),k=c()(N,2),S=k[0],H=k[1],U=Object(l.useState)(null),J=c()(U,2),M=J[0],P=J[1];a!==S&&(C(a),H(a)),Object(l.useEffect)((function(){var e,t=function(){if(u&&u.metadata&&u.metadata.revealer&&u.metadata.revealer[o.current]){var e=u.metadata.revealer[o.current][u.cohort];void 0===e&&(e=u.metadata.revealer[o.current].all),!0!==e&&!1!==e||C(e)}};return u&&(t(),y("Subscribe revealer with ID: "+o),e=u.subscribe((function(e,a){if(e===j.z)P(null);else if(e===j.u)t();else if(e===j.n&&a.id===o.current){var r=a.value;y("Received action for cohort ".concat(r,": ")),!r||u.cohort&&u.cohort===r?a.type===g.Ub?(y("Reveal content for ".concat(o.current,"...")),C(!0)):a.type===g.lb&&(y("Hide content for ".concat(o.current,"...")),C(!1)):M===r&&(a.type===g.Ub?(y("Reveal content of ".concat(o.current," for cohort ").concat(r,"...")),C(!0)):a.type===g.lb&&(y("Hide content of ".concat(o.current," for cohort ").concat(r,"...")),C(!1)))}}))),function(){e&&e()}}),[o,M,u]);var x=function(e){var t=e.target.value;(t!==M||"all"===t&&f()(M))&&(y("Handle cohort change: "+t),P("all"===t?null:t))},z=u.cohorts||[],B=n()("h3",{className:"center"},void 0,t||i("message"));return y("showChildren: "+O),n()(l.Fragment,{},void 0,n()(b.a,{owner:!0},void 0,n()(m.a,{className:"center revealer-panel"},void 0,n()(v.a,{className:"revealer-button",onClick:function(){var e,t=!O;C(t),e=u&&u.metadata&&u.metadata.revealer&&u.metadata.revealer[o.current]?u.metadata.revealer[o.current]:{},t?(u.log({id:o.current,type:g.Ub,value:M},"members"),e[M||"all"]=!0,u.updateMetadata("revealer",o.current,e)):(u.log({id:o.current,type:g.lb,value:M},"members"),e[M||"all"]=!1,u.updateMetadata("revealer",o.current,e))}},void 0,i(O?"hide":"reveal")),i("contents-of"),n()("i",{},void 0,o.current)," ",i(O?"from":"to"),n()("select",{className:"revealer-select",onChange:x,onBlur:x,onClick:p.a,value:M||"all"},void 0,n()("option",{value:"all"},void 0,i("all-students")),z.map((function(e,t){return n()("option",{value:e.title},t,e.title)}))))),O?null:B,n()("div",{className:"revealer outer-element",style:{display:O?"inherit":"none"}},void 0,r))};C.defaultProps={message:null,show:!1},t.default=C}}]);