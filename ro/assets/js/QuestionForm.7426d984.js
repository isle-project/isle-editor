"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41643],{38394:function(e,n,t){t.r(n);var r=t(202784),i=t(213980),o=t.n(i),s=t(690299),a=t.n(s),l=t(498614),c=t(822736),u=t(770561),p=t(409961),m=t.n(p),b=t(833022),f=t.n(b),d=t(588703),h=t.n(d),v=t(123103),y=t(580712),g=t(741082),E=Object.defineProperty,k=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,N=(e,n,t)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const P=a()("isle:question-form");const Z=({buttonLabel:e,onSubmit:n,children:t,t:i})=>{const o=(0,r.useContext)(v.Z),[s,a]=(0,r.useState)({}),l=(0,r.useRef)(null),p=(0,r.useCallback)((()=>{const e=l.current.getElementsByClassName("submit-button");for(let n=0;n<e.length;n++)e[n].click();n()}),[n]);if(!t)return r.createElement(c.Z,{variant:"danger"},i("missing-children"));let b=0;const d=(e,n)=>(P("Encountered a question child component, cloning with event handlers..."),b+=1,r.cloneElement(e,{disableSubmitNotification:!0,onChange:()=>{const e=((e,n)=>{for(var t in n||(n={}))w.call(n,t)&&N(e,t,n[t]);if(k)for(var t of k(n))C.call(n,t)&&N(e,t,n[t]);return e})({},s);e[n]=!0,a(e)},key:n})),g=(e,n)=>{return m()(e)||(0,y.Z)(e)?e:(t=e,f()(t)&&t.props&&t.props.question?d(e,n):e.props&&h()(e.props.children)?r.cloneElement(e,{children:r.Children.map(e.props.children,g)}):e.props&&e.props.children?r.cloneElement(e,{children:g(e.props.children,n),key:n}):e);var t},E=r.Children.map(t,g);if(0===b)return r.createElement(c.Z,{variant:"danger"},i("no-questions"));let Z=0;for(let r in s)s[r]&&(Z+=1);const q=Z!==b&&!o.isOwner();return r.createElement("div",{ref:l,className:"question-form"},E,r.createElement(u.Z,{disabled:q,onClick:p,style:{float:"right"}},e||i("submit")))};Z.propTypes={buttonLabel:o().string,onSubmit:o().func},Z.defaultProps={buttonLabel:null,onSubmit(){}},n.default=(0,l.Zh)("questions/question-form")((0,g.W)(Z))},580712:function(e,n,t){var r=t(833022),i=t.n(r),o=t(779572),s=t(844096);n.Z=function(e){return i()(e)&&e.props&&(0,s.isPrimitive)(e.props.lineNumber)&&(0,o.isPrimitive)(e.props.show)}},770561:function(e,n,t){var r=t(72779),i=t.n(r),o=t(202784),s=t(247830),a=t(429658),l=t(552322);const c=o.forwardRef((({as:e,bsPrefix:n,variant:t,size:r,active:o,className:c,...u},p)=>{const m=(0,a.vE)(n,"btn"),[b,{tagName:f}]=(0,s.FT)({tagName:e,...u}),d=f;return(0,l.jsx)(d,{...b,...u,ref:p,className:i()(c,m,o&&"active",t&&`${m}-${t}`,r&&`${m}-${r}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=c}}]);