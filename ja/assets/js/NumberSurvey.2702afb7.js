(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{1423:function(e,a,t){"use strict";var n=t(407),s=t.n(n),i=t(448),r=t.n(i),o=t(0),c=(t(404),t(1971)),u=t(454),l=t(423),d=t(645),b=t(459),v=t(458),f=t(533),m=t(420);t(62);Object(m.a)("General");var p=function(e){var a=e.children,t=e.disabled,n=e.id,i=e.size,m=e.variant,p=e.onClick,y=e.onPaused,j=Object(o.useState)(!1),O=r()(j,2),g=O[0],w=O[1],N=Object(c.a)("General").t,h=Object(o.useContext)(b.a);Object(o.useEffect)((function(){var e;return h&&(e=h.subscribe((function(e,a){e===f.n&&a.id===n+"-stoppable-button"&&(a.type===v.a?(w(!0),y(!0)):a.type===v.b&&(w(!1),y(!1)))}))),function(){e&&e()}}),[n,h,y]);var P=Object(o.useCallback)((function(){h.log({id:n+"-stoppable-button",type:g?v.b:v.a,value:!0},"members"),w(!g),y&&y(!g)}),[n,g,h,y]);return n?s()(o.Fragment,{},void 0,s()(l.a,{className:"stoppable-button",size:i,variant:m,block:!0,fill:!0,onClick:p,disabled:t||g},void 0,a),s()(d.a,{owner:!0},void 0,s()(l.a,{size:i,variant:g?"warning":"secondary",block:!0,fill:!0,onClick:P},void 0,s()("span",{},void 0,N(g?"resume":"pause"))))):s()(u.a,{variant:"danger"},void 0,N("supply-component-id"))};p.defaultProps={size:"small",variant:"success"},a.a=p},3777:function(e,a,t){"use strict";t.r(a);var n=t(488),s=t.n(n),i=t(407),r=t.n(i),o=t(448),c=t.n(o),u=(t(468),t(485),t(501),t(0)),l=t.n(u),d=t(1971),b=(t(404),t(490)),v=t(477),f=t(507),m=t(464),p=t(450),y=t.n(p),j=t(543),O=t(945),g=t.n(O),w=t(429),N=t(585),h=t(646),P=t(487),k=t(504),x=t(518),S=t(582),C=t(974),E=t(1423),G=t(459),z=t(458),R=t(420),F=t(442);t(333);Object(R.a)("Survey");var J=y()("isle:number-survey"),q=Object(j.a)("number-survey"),A=function(e){var a=Object(u.useRef)(e.id||q(e)),t=Object(d.a)("Survey").t,n=Object(u.useContext)(G.a),i=Object(u.useState)(!1),o=c()(i,2),p=o[0],y=o[1],j=Object(u.useState)(!1),O=c()(j,2),R=O[0],F=O[1],A=Object(u.useState)(0),B=c()(A,2),D=B[0],M=B[1],L=Object(u.useState)({values:[],sd:null,avg:null}),T=c()(L,2),H=T[0],I=T[1],K=e.anonymous,Q=e.onSubmit,U=Object(u.useCallback)((function(){n.log({id:a.current,type:z.Gb,value:D,anonymous:K},"members"),y(!0),n.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),Q(D)}),[K,Q,n,t,D]),V=Object(u.useCallback)((function(e){J("NumberSurvey is receiving data: "+JSON.stringify(e)),I({values:e,avg:Object(N.a)(e),sd:Object(h.a)(e)})}),[]),W=p&&!e.allowMultipleAnswers;return r()(x.a,{},void 0,r()(f.a,{},void 0,r()(v.a,{},void 0,r()(b.a,{md:6},void 0,r()(m.a,{className:"number-survey",body:!0},void 0,r()(m.a.Title,{as:"h5"},void 0,e.question),r()("label",{htmlFor:"number-survey-input-".concat(a.current)},void 0,t("your-answer"),":"),l.a.createElement(P.b,s()({},e,{inline:!0,id:"number-survey-input-".concat(a.current),disabled:W,onChange:M})),R?r()("i",{className:"fas fa-lock",style:{float:"right"}}):null,r()(E.a,{id:a.current,disabled:W,onClick:U,onPaused:F},void 0,t(W?"submitted":"submit")))),r()(b.a,{md:6},void 0,r()(C.a,{for:[a.current],onData:V}),g()(H)?r()("h3",{},void 0,t("no-responses-yet")):r()(k.a,{data:[{x:H.values,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0}),Object(w.isPrimitive)(H.avg)&&Object(w.isPrimitive)(H.sd)?r()("p",{},void 0,t("average-is")," ",H.avg.toFixed(3)," (","SD",": ",H.sd.toFixed(3),")."):null))),r()(S.a,{buttonLabel:t("responses"),id:a.current,info:z.Gb}))};A.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,step:"any",style:{},onSubmit:function(){}},a.default=Object(F.a)(A)},423:function(e,a,t){"use strict";var n=t(406),s=t(408),i=t(409),r=t.n(i),o=t(0),c=t.n(o),u=t(411),l=t(463),d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.variant,o=e.size,d=e.active,b=e.className,v=e.block,f=e.type,m=e.as,p=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(u.a)(t,"btn"),j=r()(b,y,d&&"active",i&&y+"-"+i,v&&y+"-block",o&&y+"-"+o);if(p.href)return c.a.createElement(l.a,Object(n.a)({},p,{as:m,ref:a,className:r()(j,p.disabled&&"disabled")}));a&&(p.ref=a),f?p.type=f:m||(p.type="button");var O=m||"button";return c.a.createElement(O,Object(n.a)({},p,{className:j}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=d},477:function(e,a,t){"use strict";var n=t(406),s=t(408),i=t(409),r=t.n(i),o=t(0),c=t.n(o),u=t(411),l=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.noGutters,d=e.as,b=void 0===d?"div":d,v=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(u.a)(t,"row"),m=f+"-cols",p=[];return l.forEach((function(e){var a,t=v[e];delete v[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&p.push(""+m+n+"-"+a)})),c.a.createElement(b,Object(n.a)({ref:a},v,{className:r.a.apply(void 0,[i,f,o&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},507:function(e,a,t){"use strict";var n=t(406),s=t(408),i=t(409),r=t.n(i),o=t(0),c=t.n(o),u=t(411),l=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.fluid,o=e.as,l=void 0===o?"div":o,d=e.className,b=Object(s.a)(e,["bsPrefix","fluid","as","className"]),v=Object(u.a)(t,"container"),f="string"==typeof i?"-"+i:"-fluid";return c.a.createElement(l,Object(n.a)({ref:a},b,{className:r()(d,i?""+v+f:v)}))}));l.displayName="Container",l.defaultProps={fluid:!1},a.a=l},582:function(e,a,t){"use strict";var n=t(555),s=t.n(n),i=t(0),r=t.n(i),o=(t(404),function(e){var a=e.children,t=s()(e,["children"]);return r.a.createElement("div",t,a)});o.defaultProps={className:"",style:{}},a.a=o}}]);