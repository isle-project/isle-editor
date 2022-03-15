"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[933],{569904:function(e,t,n){var r=n(867855),a=n(202784),s=n(213980),l=n.n(s),i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=function(e,t,n){return t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},d=function(e){var t=e,n=t.children,s=function(e,t){var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var s,l=(0,r.Z)(o(e));!(s=l()).done;)a=s.value,t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n}(t,["children"]);return a.createElement("div",function(e,t){for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(o)for(var a,s=(0,r.Z)(o(t));!(a=s()).done;)n=a.value,c.call(t,n)&&m(e,n,t[n]);return e}({},s),n)};d.defaultProps={className:"",style:{}},d.propTypes={className:l().string,style:l().object},t.Z=d},549595:function(e,t,n){n.r(t);var r=n(867855),a=n(202784),s=n(376699),l=n(213980),i=n.n(l),o=n(312594),u=n(458264),c=n(471275),m=n(790817),d=n(690299),f=n.n(d),p=n(24551),b=n(308669),v=n.n(b),y=n(309765),g=n(519907),E=n(649985),Z=n(195065),w=n(584443),h=n(262600),O=n(569904),N=n(750707),P=n(893316),j=n(267682),x=n(382617),$=n(615558),C=Object.defineProperty,S=Object.defineProperties,k=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,R=function(e,t,n){return t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},F=f()("isle:number-survey"),q=(0,p.Z)("number-survey"),D=function(e){var t,n,l=(0,a.useRef)(e.id||q(e)),i=(0,s.$)("surveys").t,d=(0,a.useContext)(j.Z),f=(0,a.useState)(!1),p=f[0],b=f[1],$=(0,a.useState)(!1),C=$[0],D=$[1],M=(0,a.useState)(0),B=M[0],I=M[1],W=(0,a.useState)({values:[],sd:null,avg:null}),J=W[0],L=W[1],G=e.anonymous,H=e.onSubmit,K=(0,a.useCallback)((function(){d.log({id:l.current,type:x.iA,value:B,anonymous:G},"members"),b(!0),d.addNotification({title:i("submitted"),message:i("answer-submitted"),level:"success"}),H(B)}),[G,H,d,i,B]),Q=(0,a.useCallback)((function(e){F("NumberSurvey is receiving data: "+JSON.stringify(e)),L({values:e,avg:(0,g.Z)(e),sd:(0,E.Z)(e)})}),[]),U=p&&!e.allowMultipleAnswers;return a.createElement(h.Z,null,a.createElement(c.Z,null,a.createElement(u.Z,null,a.createElement(o.Z,{md:6},a.createElement(m.Z,{className:"number-survey",body:!0},a.createElement(m.Z.Title,{as:"h5"},e.question),a.createElement("label",{htmlFor:"number-survey-input-"+l.current},i("your-answer"),":"),a.createElement(Z.Z,(t=function(e,t){for(var n in t||(t={}))T.call(t,n)&&R(e,n,t[n]);if(z)for(var a,s=(0,r.Z)(z(t));!(a=s()).done;)n=a.value,A.call(t,n)&&R(e,n,t[n]);return e}({},e),n={inline:!0,id:"number-survey-input-"+l.current,disabled:U,onChange:I},S(t,k(n)))),C?a.createElement("i",{className:"fas fa-lock",style:{float:"right"}}):null,a.createElement(P.Z,{id:l.current,disabled:U,onClick:K,onPaused:D},i(U?"submitted":"submit")))),a.createElement(o.Z,{md:6},a.createElement(N.Z,{for:[l.current],onData:Q}),v()(J)?a.createElement("h3",null,i("no-responses-yet")):a.createElement(w.Z,{data:[{x:J.values,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0}),(0,y.isPrimitive)(J.avg)&&(0,y.isPrimitive)(J.sd)?a.createElement("p",null,i("average-is")," ",J.avg.toFixed(3)," (","SD",": ",J.sd.toFixed(3),")."):null))),a.createElement(O.Z,{buttonLabel:i("responses"),id:l.current,info:x.iA}))};D.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,step:"any",style:{},onSubmit:function(){}},D.propTypes={question:i().oneOfType([i().string,i().node]),allowMultipleAnswers:i().bool,anonymous:i().bool,step:i().oneOfType([i().number,i().string]),style:i().object,onSubmit:i().func},t.default=(0,$.W)(D)},893316:function(e,t,n){var r=n(202784),a=n(213980),s=n.n(a),l=n(376699),i=n(822736),o=n(770561),u=n(476709),c=n(267682),m=n(382617),d=n(10206),f=function(e){var t=e.children,n=e.disabled,a=e.id,s=e.size,f=e.variant,p=e.onClick,b=e.onPaused,v=(0,r.useState)(!1),y=v[0],g=v[1],E=(0,l.$)("general").t,Z=(0,r.useContext)(c.Z);(0,r.useEffect)((function(){var e;return Z&&(e=Z.subscribe((function(e,t){e===d.Wh&&t.id===a+"-stoppable-button"&&(t.type===m.rz?(g(!0),b(!0)):t.type===m.nt&&(g(!1),b(!1)))}))),function(){e&&e()}}),[a,Z,b]);var w=(0,r.useCallback)((function(){Z.log({id:a+"-stoppable-button",type:y?m.nt:m.rz,value:!0},"members"),g(!y),b&&b(!y)}),[a,y,Z,b]);return a?r.createElement("div",{className:"d-grid gap-2"},r.createElement(o.Z,{className:"stoppable-button",size:s,variant:f,onClick:p,disabled:n||y},t),r.createElement(u.Z,{owner:!0,banner:null},r.createElement(o.Z,{size:s,variant:y?"warning":"secondary",onClick:w},y?r.createElement("span",null,E("resume")):r.createElement("span",null,E("pause"))))):r.createElement(i.Z,{variant:"danger"},E("supply-component-id"))};f.defaultProps={size:"small",variant:"success"},f.propTypes={size:s().oneOf(["small","sm","large","lg"]),variant:s().string},t.Z=f},770561:function(e,t,n){var r=n(72779),a=n.n(r),s=n(202784),l=n(247830),i=n(429658),o=n(552322);const u=s.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:s,className:u,...c},m)=>{const d=(0,i.vE)(t,"btn"),[f,{tagName:p}]=(0,l.FT)({tagName:e,...c}),b=p;return(0,o.jsx)(b,{...f,...c,ref:m,className:a()(u,d,s&&"active",n&&`${d}-${n}`,r&&`${d}-${r}`,c.href&&c.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},471275:function(e,t,n){var r=n(72779),a=n.n(r),s=n(202784),l=n(429658),i=n(552322);const o=s.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...s},o)=>{const u=(0,l.vE)(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:o,...s,className:a()(r,t?`${u}${c}`:u)})}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},458264:function(e,t,n){var r=n(72779),a=n.n(r),s=n(202784),l=n(429658),i=n(552322);const o=s.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},s)=>{const o=(0,l.vE)(e,"row"),u=(0,l.pi)(),c=`${o}-cols`,m=[];return u.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const a="xs"!==e?`-${e}`:"";null!=n&&m.push(`${c}${a}-${n}`)})),(0,i.jsx)(n,{ref:s,...r,className:a()(t,o,...m)})}));o.displayName="Row",t.Z=o}}]);