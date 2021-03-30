(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1423:function(e,t,a){"use strict";var n=a(407),i=a.n(n),o=a(448),s=a.n(o),r=a(0),u=(a(404),a(1971)),l=a(454),c=a(423),d=a(645),b=a(459),v=a(458),f=a(533),m=a(420);a(62);Object(m.a)("General");var p=function(e){var t=e.children,a=e.disabled,n=e.id,o=e.size,m=e.variant,p=e.onClick,y=e.onPaused,w=Object(r.useState)(!1),O=s()(w,2),j=O[0],g=O[1],h=Object(u.a)("General").t,k=Object(r.useContext)(b.a);Object(r.useEffect)((function(){var e;return k&&(e=k.subscribe((function(e,t){e===f.n&&t.id===n+"-stoppable-button"&&(t.type===v.a?(g(!0),y(!0)):t.type===v.b&&(g(!1),y(!1)))}))),function(){e&&e()}}),[n,k,y]);var C=Object(r.useCallback)((function(){k.log({id:n+"-stoppable-button",type:j?v.b:v.a,value:!0},"members"),g(!j),y&&y(!j)}),[n,j,k,y]);return n?i()(r.Fragment,{},void 0,i()(c.a,{className:"stoppable-button",size:o,variant:m,block:!0,fill:!0,onClick:p,disabled:a||j},void 0,t),i()(d.a,{owner:!0},void 0,i()(c.a,{size:o,variant:j?"warning":"secondary",block:!0,fill:!0,onClick:C},void 0,i()("span",{},void 0,h(j?"resume":"pause"))))):i()(l.a,{variant:"danger"},void 0,h("supply-component-id"))};p.defaultProps={size:"small",variant:"success"},t.a=p},3716:function(e,t,a){"use strict";a.r(t);var n=a(407),i=a.n(n),o=a(448),s=a.n(o),r=(a(428),a(0)),u=(a(404),a(1971)),l=a(464),c=a(507),d=a(490),b=a(477),v=a(4734),f=a(504),m=a(518),p=a(450),y=a.n(p),w=a(945),O=a.n(w),j=a(3717),g=a.n(j),h=a(1082),k=a.n(h),C=a(3719),N=a.n(C),x=a(543),S=a(772),q=a(582),P=a(974),z=a(1423),T=a(459),F=a(458),J=a(420),A=a(442);a(319);Object(J.a)("Survey");var E=y()("isle:free-text-survey"),G=Object(x.a)("free-text-survey");var M=function(e){var t=Object(r.useRef)(e.id||G(e)),a=Object(u.a)("Survey").t,n=Object(r.useContext)(T.a),o=Object(r.useState)(!1),p=s()(o,2),y=p[0],w=p[1],j=Object(r.useState)(!1),h=s()(j,2),C=h[0],x=h[1],J=Object(r.useState)(null),A=s()(J,2),M=A[0],R=A[1],B=Object(r.useState)({counts:[],freqTable:null}),D=s()(B,2),L=D[0],Q=D[1],H=e.anonymous,I=e.onSubmit,K=Object(r.useCallback)((function(e){E("FreeTextQuestion is receiving data: "+JSON.stringify(e));var t=g()(e),n=t.map((function(e){return{x:e[0],y:e[1]}})),o=i()("table",{className:"table table-bordered"},void 0,i()("tr",{},void 0,i()("th",{},void 0,a("category")),i()("th",{},void 0,a("count")),i()("th",{},void 0,a("relative-frequency"))),t.map((function(e,t){return i()("tr",{},t,e.map((function(e,t){return 2===t&&(e=e.toFixed(3)),i()("td",{},t,e)})))})));Q({counts:n,freqTable:o})}),[a]),U=Object(r.useCallback)((function(){var e=function(e){e=k()(e);for(var t=N()(e),a=0;a<v.length;a++)for(var n=0;n<t.length;n++)if(t[n]===v[a])return v[a];return null}(M);e?n.addNotification({title:a("action-required"),message:a("offensive-word",{w:e}),level:"warning"}):(n.log({id:t.current,type:F.Cc,value:M,anonymous:H},"members"),w(!0),n.addNotification({title:a("submitted"),message:a("answer-submitted"),level:"success"}),I(M))}),[H,I,n,a,M]),V=y&&!e.allowMultipleAnswers;return i()(m.a,{id:t.current,className:e.className,style:e.style},void 0,i()(c.a,{},void 0,i()(b.a,{},void 0,i()(d.a,{md:6},void 0,i()(l.a,{className:"free-text-survey",body:!0},void 0,i()("label",{},void 0,e.question),C?i()("i",{className:"fas fa-lock",style:{float:"right"}}):null,i()(S.a,{value:M,inline:!0,disabled:V,onChange:R,rows:e.rows}),i()(z.a,{id:t.current,disabled:!M||V,onClick:U,onPaused:x},void 0,a(V?"submitted":"submit")))),i()(d.a,{md:6},void 0,i()(P.a,{for:[t.current],onData:K}),O()(L.counts)?i()("h3",{},void 0,a("no-responses-yet")):i()(f.a,{data:[{x:L.counts.map((function(e){return e.x})),y:L.counts.map((function(e){return e.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0}),L.freqTable))),i()(q.a,{buttonLabel:a("Responses"),id:t.current,info:F.Cc}))};M.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,rows:4,className:"",style:{},onSubmit:function(){}},t.default=Object(A.a)(M)},582:function(e,t,a){"use strict";var n=a(555),i=a.n(n),o=a(0),s=a.n(o),r=(a(404),function(e){var t=e.children,a=i()(e,["children"]);return s.a.createElement("div",a,t)});r.defaultProps={className:"",style:{}},t.a=r}}]);