"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72017],{667045:function(e,t,n){const l=(0,n(217431).Z)((()=>n.e(10112).then(n.bind(n,497925))));t.Z=l},956260:function(e,t,n){var l=n(202784),a=n(213980),s=n.n(a),i=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const f=e=>{const t=e,{children:n}=t,a=((e,t)=>{var n={};for(var l in e)r.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&c.call(e,l)&&(n[l]=e[l]);return n})(t,["children"]);return l.createElement("div",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&u(e,n,t[n]);return e})({},a),n)};f.defaultProps={className:"",style:{}},f.propTypes={className:s().string,style:s().object},t.Z=f},370420:function(e,t,n){const l=(0,n(217431).Z)((()=>n.e(96131).then(n.bind(n,66720))));t.Z=l},800712:function(e,t,n){const l=(0,n(217431).Z)((()=>Promise.all([n.e(40532),n.e(34507)]).then(n.bind(n,307125))));t.Z=l},849914:function(e,t,n){n.r(t);var l=n(202784),a=n(213980),s=n.n(a),i=n(690299),o=n.n(i),r=n(376699),c=n(790817),u=n(123103),f=n(810370),p=n(514921),m=n(667045),d=n(370420),b=n(956260),h=n(172888),g=n(800712),E=n(477195),y=n(741082),v=n(691334),Z=n(302108),k=n(487890);const N=o()("isle:file-upload"),O=e=>{const{t:t}=(0,r.$)("questions/file"),{accept:n,until:a,onChange:s}=e,i=(0,l.useContext)(u.Z),o=(0,l.useRef)(null),{id:y,logAction:O,retrieveLastAction:q}=(0,k.G)("FILE_QUESTION",e),[C,P]=(0,l.useState)(null),[S,w]=(0,l.useState)(null),[D,T]=(0,l.useState)(!1),[x,I]=(0,l.useState)(!1),j=(0,l.useCallback)((()=>{N(`Set submission to last action for question ${y} if available...`);const e=q(v.gY);e&&e!==S&&(w(e),I(!0))}),[q,S,y]),{hints:F}=e,L=F.length,_=(0,l.useCallback)((e=>{N("Logging hint..."),O(v.$M,e)}),[O]);(0,l.useEffect)((()=>{const e=i.subscribe((e=>{e===Z.u&&j()}));return()=>{e()}}),[i,j]);const A=(0,l.useCallback)((()=>{const e=new FormData;e.append("file",C),T(!0),i.uploadFile({formData:e,callback:(e,t)=>{if(e)return N(e),T(!1),P(null),void(o.current.value="");const n=t.filename,l=i.server+"/"+n;O(v.gY,l),w(l),T(!1),I(!0)},showNotification:!0})}),[C,O,i]),$=()=>{const e=o.current.files[0];s(e),P(e)},U=e=>{e.stopPropagation(),e.preventDefault();const t=e.dataTransfer;let n=null;if(t.items&&t.items.length>0){const e=t.items[0];"file"===e.kind&&(n=e.getAsFile())}else t.files&&t.files.length>0&&(n=t.files[0]);n&&(s(n),P(n))};let z;return D||(z=l.createElement(l.Fragment,null,S?l.createElement("div",{className:"center",style:{maxWidth:600}},l.createElement("p",null,t("submitted-file-link"),": ",l.createElement("a",{href:S,target:"_blank",rel:"noopener noreferrer"},S))):null,l.createElement("div",{className:"file-question-dropzone",onDrop:U,onDragOver:E.Z,onDragEnd:E.Z},l.createElement("span",null,t("drop-file"))),l.createElement("p",{className:"center"},t("or")),l.createElement("input",{id:y+"-upload",className:"file-question-input center",type:"file",accept:n,onChange:$,ref:o}))),l.createElement(c.Z,{id:y,className:`file-question ${e.className}`,style:e.style},l.createElement(c.Z.Body,{className:"d-grid gap-2",style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},l.createElement("label",null,e.question),l.createElement(f.Z,{running:D,width:256,height:128}),z,e.feedback?l.createElement(h.Z,{vertical:!0,id:y+"_feedback",style:{position:"absolute",right:"4px",top:"4px"}}):null,l.createElement(b.Z,{buttonLabel:"Answers",id:y,info:"FILE_QUESTION_SUBMISSION",data:{question:e.question,type:"file"},points:e.points}),l.createElement("div",{className:"file-question-toolbar"},L>0?l.createElement(m.Z,{onClick:_,hints:e.hints,placement:e.hintPlacement}):null,a&&i.startTime>a?l.createElement("span",{className:"title",style:{marginLeft:4}},t("question-closed")):l.createElement(p.Z,{className:"submit-button",variant:"primary",size:"sm",onClick:A,disabled:!C||D},t(x?"resubmit":"submit")),e.chat?l.createElement(d.Z,{for:y}):null),l.createElement(g.Z,{for:y,points:e.points})))};O.defaultProps={question:"",hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,accept:"*/*",until:null,points:10,className:"",style:{},onChange(){}},O.propTypes={question:s().oneOfType([s().string,s().node]),hintPlacement:s().string,hints:s().arrayOf(s().oneOfType([s().string,s().node])),feedback:s().bool,chat:s().bool,accept:s().string,until:s().instanceOf(Date),points:s().number,className:s().string,style:s().object,onChange:s().func},t.default=(0,y.W)(O)},477195:function(e,t){t.Z=function(e){e.stopPropagation(),e.preventDefault()}}}]);