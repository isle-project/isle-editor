/*! For license information please see FreeTextSurvey.b7a37e0c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73872],{839916:function(e,t,n){var a=n(669710);e.exports=a},669710:function(e,t,n){var a=n(571388),s=n(552770);e.exports=function(e){var t,n,l,r,o,c,i;if(!a(e))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+e+"`.");for(t=0,n=[],r=[],l=e.length,c=0;c<l;c++)o=e[c],t+=1,-1===(i=s(n,o))?(n.push(o),r.push([o,1,0])):r[i][1]+=1;for(l=r.length,c=0;c<l;c++)r[c][2]=r[c][1]/t;return r}},378165:function(e,t,n){n.r(t);var a=n(202784),s=n(213980),l=n.n(s),r=n(376699),o=n(790817),c=n(471275),i=n(312594),u=n(458264),m=n(46739),d=n(426214),f=n(690299),p=n.n(f),b=n(308669),y=n.n(b),v=n(839916),E=n.n(v),g=n(430391),w=n(956260),h=n(466621),N=n(70366),Z=n(123103),x=n(691334),S=n(741082),k=n(487890);const P=p()("isle:free-text-survey"),T=e=>{const{id:t,logAction:n}=(0,k.G)("TEXT_SURVEY",e),{t:s}=(0,r.$)("surveys"),l=(0,a.useContext)(Z.Z),[f,p]=(0,a.useState)(!1),[b,v]=(0,a.useState)(!1),[S,T]=(0,a.useState)(null),[$,C]=(0,a.useState)({counts:[],freqTable:null}),{anonymous:O,onSubmit:j}=e,z=(0,a.useCallback)((e=>{P("FreeTextQuestion is receiving data: "+JSON.stringify(e));const t=E()(e),n=t.map((e=>({x:e[0],y:e[1]}))),l=a.createElement("table",{className:"table table-bordered"},a.createElement("tr",null,a.createElement("th",null,s("category")),a.createElement("th",null,s("count")),a.createElement("th",null,s("relative-frequency"))),t.map(((e,t)=>a.createElement("tr",{key:t},e.map(((e,t)=>(2===t&&(e=e.toFixed(3)),a.createElement("td",{key:t},e))))))));C({counts:n,freqTable:l})}),[s]),q=(0,a.useCallback)((()=>{n(x.gY,S,{anonymous:O},"members"),p(!0),l.addNotification({title:s("submitted"),message:s("answer-submitted"),level:"success"}),j(S)}),[O,j,n,l,s,S]),R=f&&!e.allowMultipleAnswers;return a.createElement(d.Z,{id:t,className:e.className,style:e.style},a.createElement(c.Z,null,a.createElement(u.Z,null,a.createElement(i.Z,{md:6},a.createElement(o.Z,{className:"free-text-survey",body:!0},a.createElement("label",null,e.question),b?a.createElement("i",{className:"fas fa-lock",style:{float:"right"}}):null,a.createElement(g.Z,{value:S,inline:!0,disabled:R,onChange:T,rows:e.rows}),a.createElement(N.Z,{id:t,disabled:!S||R,onClick:q,onPaused:v},s(R?"submitted":"submit")))),a.createElement(i.Z,{md:6},a.createElement(h.Z,{for:[t],onData:z}),y()($.counts)?a.createElement("h3",null,s("no-responses-yet")):a.createElement(m.Z,{data:[{x:$.counts.map((e=>e.x)),y:$.counts.map((e=>e.y)),type:"bar"}],layout:{width:400,height:300},removeButtons:!0}),$.freqTable))),a.createElement(w.Z,{buttonLabel:s("responses"),id:t,info:"TEXT_SURVEY_SUBMISSION"}))};T.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,rows:4,className:"",style:{},onSubmit(){}},T.propTypes={question:l().oneOfType([l().string,l().node]),allowMultipleAnswers:l().bool,anonymous:l().bool,rows:l().number,className:l().string,style:l().object,onSubmit:l().func},t.default=(0,S.W)(T)},956260:function(e,t,n){var a=n(202784),s=n(213980),l=n.n(s),r=Object.defineProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>{const t=e,{children:n}=t,s=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n})(t,["children"]);return a.createElement("div",((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&u(e,n,t[n]);return e})({},s),n)};m.defaultProps={className:"",style:{}},m.propTypes={className:l().string,style:l().object},t.Z=m},70366:function(e,t,n){var a=n(202784),s=n(213980),l=n.n(s),r=n(376699),o=n(822736),c=n(770561),i=n(770149),u=n(123103),m=n(691334),d=n(302108);const f=({children:e,disabled:t,id:n,size:s,variant:l,onClick:f,onPaused:p})=>{const[b,y]=(0,a.useState)(!1),{t:v}=(0,r.$)("general"),E=(0,a.useContext)(u.Z);(0,a.useEffect)((()=>{let e;return E&&(e=E.subscribe(((e,t)=>{e===d.Wh&&t.id===n+"-stoppable-button"&&(t.type===m.rz?(y(!0),p(!0)):t.type===m.nt&&(y(!1),p(!1)))}))),()=>{e&&e()}}),[n,E,p]);const g=(0,a.useCallback)((()=>{E.log({id:n+"-stoppable-button",type:b?m.nt:m.rz,value:!0},"members"),y(!b),p&&p(!b)}),[n,b,E,p]);return n?a.createElement("div",{className:"d-grid gap-2"},a.createElement(c.Z,{className:"stoppable-button",size:s,variant:l,onClick:f,disabled:t||b},e),a.createElement(i.Z,{owner:!0,banner:null,showOwnerInPresentationMode:!1},a.createElement(c.Z,{size:s,variant:b?"warning":"secondary",onClick:g},b?a.createElement("span",null,v("resume")):a.createElement("span",null,v("pause"))))):a.createElement(o.Z,{variant:"danger"},v("supply-component-id"))};f.defaultProps={size:"small",variant:"success"},f.propTypes={size:l().oneOf(["small","sm","large","lg"]),variant:l().string},t.Z=f},770561:function(e,t,n){var a=n(72779),s=n.n(a),l=n(202784),r=n(247830),o=n(429658),c=n(552322);const i=l.forwardRef((({as:e,bsPrefix:t,variant:n,size:a,active:l,className:i,...u},m)=>{const d=(0,o.vE)(t,"btn"),[f,{tagName:p}]=(0,r.FT)({tagName:e,...u}),b=p;return(0,c.jsx)(b,{...f,...u,ref:m,className:s()(i,d,l&&"active",n&&`${d}-${n}`,a&&`${d}-${a}`,u.href&&u.disabled&&"disabled")})}));i.displayName="Button",i.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=i},471275:function(e,t,n){var a=n(72779),s=n.n(a),l=n(202784),r=n(429658),o=n(552322);const c=l.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:a,...l},c)=>{const i=(0,r.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(n,{ref:c,...l,className:s()(a,t?`${i}${u}`:i)})}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},458264:function(e,t,n){var a=n(72779),s=n.n(a),l=n(202784),r=n(429658),o=n(552322);const c=l.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},l)=>{const c=(0,r.vE)(e,"row"),i=(0,r.pi)(),u=(0,r.zG)(),m=`${c}-cols`,d=[];return i.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const s=e!==u?`-${e}`:"";null!=n&&d.push(`${m}${s}-${n}`)})),(0,o.jsx)(n,{ref:l,...a,className:s()(t,c,...d)})}));c.displayName="Row",t.Z=c}}]);