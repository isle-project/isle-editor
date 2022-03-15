/*! For license information please see Engagement.1d8190a3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3965],{372828:function(e,t,n){n.d(t,{I0:function(){return s.Z},Y2:function(){return r.Z},lq:function(){return a.Z}});var s=n(296981),r=n(195065),a=n(941695);n(294942),n(464558),n(124575),n(220809)},615697:function(e,t,n){var s=(0,n(708717).Z)((function(){return n.e(6131).then(n.bind(n,102149))}));t.Z=s},522360:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var s=n(894578),r=n(202784),a=n(213980),i=n.n(a),o=n(10206),l=n(382617),c=n(690299),u=n.n(c),m=n(376699),p=n(770561),d=n(10863),f=n(830650),h=n(312594),v=n(458264),g=n(473861),b=n(262600),E=n(476709),y=n(372828),w=n(464558),Z=n(978575),N=n(460706),C=n(201136),x=n(797209),H=u()("isle:survey-generator"),R="survey-generator",k=function(e){var t=e.session,n=e.onHide,s=(0,r.useState)([]),a=s[0],i=s[1],c=(0,r.useState)(""),u=c[0],k=c[1],P=(0,r.useState)("free-text"),S=P[0],$=P[1],q=(0,r.useState)(!1),T=q[0],j=q[1],D=(0,r.useState)(!0),z=D[0],F=D[1],W=(0,r.useState)(!0),M=W[0],O=W[1],V=(0,m.$)("internal/toolbar").t,A=(0,x.Z)();(0,r.useEffect)((function(){var e=t.subscribe((function(e,t){H("Received member action..."),e===o.Wh&&R===t.id&&(t.type===l.rX?(H("Should start the survey..."),k(t.value.question),$(t.value.type),i(t.value.answers),j(!0)):t.type===l.Dl?(H("Should stop the survey..."),j(!1)):A())}));return function(){e()}}),[A,t]),(0,r.useEffect)((function(){var e;e=!(u.length>3&&(a.length>1||"multiple-choice"!==S)),O(e)}),[a,u,S]);var J,L=(0,r.useCallback)((function(e){var t=e.split("\n"),n=!0;u.length>3&&t.length>1&&(n=!1),i(t),O(n)}),[u]),I=(0,r.useCallback)((function(){T?t.log({id:R,type:l.Dl,value:null},"members"):t.log({id:R,type:l.rX,value:{answers:a,type:S,question:u}},"members")}),[a,t,u,T,S]);return J=T?r.createElement("div",null,"multiple-choice"===S?r.createElement(Z.Z,{user:!0,question:u,answers:a,id:R+":multiple-choice-survey",anonymous:z}):null,"number"===S?r.createElement(N.Z,{user:!0,question:u,id:R+":number-survey",anonymous:z}):null,"free-text"===S?r.createElement(C.Z,{user:!0,question:u,answers:a,id:R+":free-text-survey",anonymous:z}):null,r.createElement("label",null,z?"":V("survey-not-anonymous")),r.createElement(E.Z,{owner:!0,banner:null},r.createElement(p.Z,{disabled:M,onClick:I,style:{float:"right"}},V("stop-survey")))):r.createElement(E.Z,{owner:!0,banner:r.createElement("h3",null,V("survey-not-started"))},r.createElement(d.Z,null,r.createElement(v.Z,null,r.createElement(h.Z,{md:3},r.createElement(f.Z,{htmlFor:"survey-select-input"},V("type"),":")),r.createElement(h.Z,{md:9},r.createElement(y.lq,{id:"survey-select-input",defaultValue:S,options:["multiple-choice","number","free-text"],onChange:$})))),r.createElement(d.Z,null,r.createElement(w.Z,{legend:V("question"),onChange:k,rows:2})),"multiple-choice"===S?r.createElement(d.Z,null,r.createElement(w.Z,{legend:V("answer-options-new-line-delimited"),onChange:L})):null,r.createElement(y.I0,{tooltip:V("anonymous-survey-tooltip"),tooltipPlacement:"top",legend:V("anonymous-survey"),defaultValue:!0,onChange:F}),r.createElement(p.Z,{disabled:M,onClick:I},V("start-survey"))),r.createElement(g.Z,{dragHandleClassName:"card-header"},r.createElement(b.Z,{header:V("survey"),minimizable:!0,className:"survey-generator",onHide:t.isOwner()?n:null,hideTooltip:V("finish-survey"),trapFocus:!0},J))},P=n(497326),S=n(198),$=n(845450),q=n(973777),T=n(708579),j=n(615697),D=(0,S.Z)("internal/toolbar")((function(e){return r.createElement(g.Z,{dragHandleClassName:"card-header"},r.createElement(b.Z,{className:"engagement-meter-panel",header:e.t("poll-responses"),onHide:e.onHide,minimizable:!0,trapFocus:!0,style:{width:400}},r.createElement(q.Z,{className:"engagement-table",showPageSizeOptions:!1,data:e.responses,resizable:!1,sortable:!1,columns:[{Header:"Pic",id:"pic",accessor:function(t){for(var n=e.session.userList,s=0;s<n.length;s++)if(n[s].name===t.name)return n[s].picture;return""},Cell:function(t){return r.createElement("img",{className:"engagement-table-pic",alt:"User thumbnail",src:e.session.server+"/thumbnail/"+t.value})},maxWidth:38,minWidth:38,style:{color:"darkslategrey"}},{Header:e.t("name"),id:"nameCol",accessor:"name",width:180,Cell:function(e){return r.createElement(T.Z,{tooltip:e.value+" ("+e.original.email+")"},r.createElement("span",{className:"engagement-table-name"},e.value))}},{Header:e.t("response"),id:"responseCol",accessor:"value",Cell:e.renderValue,maxWidth:38,minWidth:38},{Header:e.t("chat"),Cell:function(t){var n="Chat with "+t.original.name;return r.createElement(j.Z,{tooltip:e.t("chat-tooltip"),showTooltip:!1,for:n})}}],pageSize:8})))})),z=Object.defineProperty,F=function(e,t,n){return function(e,t,n){t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},W="ENGAGEMENT_BINARY",M=function(e){function t(t){var n;return n=e.call(this,t)||this,F((0,P.Z)(n),"toggleResponses",(function(){n.setState({showResponses:!n.state.showResponses})})),n.state={nLeft:0,nRight:0,responses:[],showResponses:!1},n}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t,n,s=this,a=this.props.session;switch(a&&(this.unsubscribe=a.subscribe((function(e,t){if(e===o.Wh&&t.id===W&&t.type===l.Je){var n=s.state.responses.slice();n.push({name:t.name,email:t.email,value:t.value}),1===t.value?s.setState({nRight:s.state.nRight+1,responses:n}):-1===t.value&&s.setState({nLeft:s.state.nLeft+1,responses:n})}}))),this.props.type){case"yes:no":e="fas fa-times",t="fas fa-check",n=this.props.t("answer-yes-no");break;case"too-slow:too-fast":e="fas fa-backward",t="fas fa-forward",n=this.props.t("answer-slow-fast")}if(!a.isOwner())var i=a.addNotification({title:this.props.t("poll"),message:n,level:"info",position:"tc",dismissible:"none",autoDismiss:0,children:r.createElement("div",{style:{marginBottom:"40px",marginTop:"10px"}},r.createElement(p.Z,{variant:"secondary",style:{float:"left"},onClick:function(){a.log({id:W,type:l.Je,value:-1}),a.removeNotification(i),a.addNotification({title:s.props.t("answer-recorded"),message:s.props.t("answer-recorded-message"),level:"success",position:"tc"})}},r.createElement("i",{className:e})),r.createElement(p.Z,{variant:"secondary",style:{float:"right"},onClick:function(){a.log({id:W,type:l.Je,value:1}),a.removeNotification(i),a.addNotification({title:s.props.t("answer-recorded"),message:s.props.t("answer-recorded-message"),level:"success",position:"tc"})}},r.createElement("i",{className:t})))})},n.render=function(){var e,t;switch(this.props.type){case"yes:no":e="fas fa-times",t="fas fa-check";break;case"too-slow:too-fast":e="fas fa-backward",t="fas fa-forward"}var n=this.props.t,s=r.createElement($.Z,{bordered:!0,size:"sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("i",{className:e})),r.createElement("th",null,r.createElement("i",{className:t})))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,this.state.nLeft),r.createElement("td",null,this.state.nRight))));return r.createElement(r.Fragment,null,r.createElement(g.Z,{dragHandleClassName:"card-header"},r.createElement(E.Z,{owner:!0,banner:null},r.createElement(b.Z,{header:n("poll"),hideTooltip:n("finish-poll"),onHide:this.props.onHide,className:"engagement-meter-panel",minimizable:!0,trapFocus:!0},s,r.createElement(p.Z,{variant:"link",onClick:this.toggleResponses},r.createElement("small",null,n("toggle-details"))))),r.createElement(E.Z,{user:!0,notOwner:!0,header:n("poll"),banner:null},r.createElement(b.Z,{header:n("poll"),className:"engagement-meter-panel",minimizable:!0,trapFocus:!0},s))),this.state.showResponses?r.createElement(D,{responses:this.state.responses,session:this.props.session,onHide:this.toggleResponses,renderValue:function(n){return-1===n.value?r.createElement("i",{className:e}):r.createElement("i",{className:t})}}):null)},t}(r.Component);M.propTypes={session:i().object.isRequired,onHide:i().func.isRequired};var O=(0,S.Z)("internal/toolbar")(M),V=n(998856),A=n(25603),J=n.n(A),L=n(635772),I=n.n(L),B=n(74039),G=n.n(B),U=n(341327),X=n.n(U),Y=Object.defineProperty,_=function(e,t,n){return function(e,t,n){t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},K=function(e){function t(t){var n;return n=e.call(this,t)||this,_((0,P.Z)(n),"onControlledDrag",(function(e,t){var s=t.x,r=t.y;n.setState({controlledPosition:{x:s,y:r}})})),_((0,P.Z)(n),"onControlledDragStop",(function(e,t){var s=t.x,r=t.y;n.setState({controlledPosition:{x:s,y:r},progress:(s+100)/200*100})})),_((0,P.Z)(n),"handleSubmit",(function(){n.props.onSubmit(n.state.progress)})),n.state={progress:50,controlledPosition:{x:0,y:0}},n}return(0,s.Z)(t,e),t.prototype.render=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"score-bottom"},r.createElement(X(),{bounds:{left:-100,right:100,top:0,bottom:0},onStop:this.onControlledDragStop,position:this.state.controlledPosition,onDrag:this.onControlledDrag},r.createElement("div",{className:"score-setter"})),r.createElement(V.Z,{style:{marginTop:23}},r.createElement(V.Z,{animated:!0,variant:"success",now:this.state.progress}),r.createElement(V.Z,{animated:!0,variant:"danger",now:100-this.state.progress}))),r.createElement(p.Z,{variant:"secondary",size:"sm",onClick:this.handleSubmit,style:{marginTop:10}},this.props.t("submit")))},t}(r.Component),Q=Object.defineProperty,ee=function(e,t,n){return function(e,t,n){t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},te=function(e){function t(t){var n;return n=e.call(this,t)||this,ee((0,P.Z)(n),"toggleResponses",(function(){n.setState({showResponses:!n.state.showResponses})})),n.state={mean:null,range:null,responses:[],showResponses:!1},n.id=t.id||"engagement-meter",n.meanAcc=J()(6),n.rangeAcc=I()(6),n}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=this.props.session;if(t&&(this.unsubscribe=t.subscribe((function(t,n){if(t===o.Wh&&n.id===e.id&&n.type===l.Je){var s=e.meanAcc(n.value),r=e.rangeAcc(n.value),a=e.state.responses.slice();a.push({name:n.name,email:n.email,value:n.value}),e.setState({mean:s,range:r,responses:a})}}))),!t.isOwner())var n=t.addNotification({title:this.props.t("poll"),message:this.props.t("meter-prompt"),level:"info",position:"tc",dismissible:"none",autoDismiss:0,children:r.createElement(K,{t:this.props.t,onSubmit:function(t){var s=e.props.session;s.log({id:e.id,type:l.Je,value:t}),s.removeNotification(n),s.addNotification({title:e.props.t("answer-recorded"),message:e.props.t("answer-recorded-message"),level:"success",position:"tc"})}})})},n.render=function(){return r.createElement(r.Fragment,null,r.createElement(g.Z,{dragHandleClassName:"card-header"},r.createElement(E.Z,{owner:!0,banner:null},r.createElement(b.Z,{header:this.props.t("poll"),hideTooltip:this.props.t("finish-poll"),onHide:this.props.onHide,className:"engagement-meter-panel",minimizable:!0,trapFocus:!0},r.createElement("div",{className:"score-bottom"},this.state.mean?r.createElement(r.Fragment,null,r.createElement(V.Z,{style:{marginTop:23}},r.createElement(V.Z,{animated:!0,variant:"success",now:this.state.mean}),r.createElement(V.Z,{animated:!0,variant:"danger",now:100-this.state.mean}))):null),this.state.mean?r.createElement("p",null,this.props.t("mean"),": ",G()(this.state.mean,-2)," (n: ",this.state.responses.length,")"):null,this.state.range?r.createElement("p",null,this.props.t("range"),": ",G()(this.state.range,-2)):null,r.createElement(p.Z,{variant:"link",onClick:this.toggleResponses},r.createElement("small",null,this.props.t("toggle-details")))))),this.state.showResponses?r.createElement(D,{responses:this.state.responses,session:this.props.session,onHide:this.toggleResponses,renderValue:function(e){return e.value}}):null)},t}(r.Component);te.propTypes={session:i().object.isRequired,onHide:i().func.isRequired};var ne=(0,S.Z)("internal/toolbar")(te),se=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={inProgress:!1},n}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=this.props.session;this.unsubscribe=t.subscribe((function(t,n){if(t===o.Wh&&"engagement"===n.id){var s=n.type;s===l.cG?e.setState({inProgress:n.value}):s===l.oM&&e.setState({inProgress:!1})}}))},n.componentWillUnmount=function(){this.unsubscribe()},n.render=function(){switch(this.state.inProgress){case"yes:no":case"too-slow:too-fast":return r.createElement(O,{type:this.state.inProgress,session:this.props.session,onHide:this.props.onHide});case"like:dislike":return r.createElement(ne,{session:this.props.session,onHide:this.props.onHide});case"survey":return r.createElement(k,{session:this.props.session,onHide:this.props.onHide});default:return null}},t}(r.Component);se.propTypes={session:i().object.isRequired,onHide:i().func.isRequired};var re=se},25603:function(e,t,n){var s=n(131293);e.exports=s},131293:function(e,t,n){var s=n(950718).isPrimitive,r=n(422957),a=n(570554);e.exports=function(e){var t,n,i,o,l;if(!s(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return n=new a(e),i=0,l=-1,o=0,function(s){var a;if(0===arguments.length)return 0===o?null:i;if(l=(l+1)%e,r(s))o=e,i=NaN;else if(o<e)i+=(t=s-i)/(o+=1);else if(r(n[l])){for(o=1,i=s,a=0;a<e;a++)if(a!==l){if(r(n[a])){o=e,i=NaN;break}o+=1,t=n[a]-i,i+=t/o}}else!1===r(i)&&(t=s-n[l],i+=t/e);return n[l]=s,i}}},635772:function(e,t,n){var s=n(612334);e.exports=s},612334:function(e,t,n){var s=n(950718).isPrimitive,r=n(422957),a=n(109918),i=n(395465),o=n(570554);e.exports=function(e){var t,n,l,c,u;if(!s(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return t=new o(e),n=a,l=i,u=-1,c=0,function(s){var a,i;if(0===arguments.length)return 0===c?null:l-n;u=(u+1)%e,0===s&&(s=0);if(r(s))c=e,n=s,l=s;else if(c<e)c+=1,s<n&&(n=s),s>l&&(l=s);else if(t[u]===n&&s>n||t[u]===l&&s<l||r(t[u])){for(n=s,l=s,i=0;i<e;i++)if(i!==u){if(a=t[i],r(a)){n=a,l=a;break}a<n&&(n=a),a>l&&(l=a)}}else s<n?n=s:s>l&&(l=s);return t[u]=s,l-n}}},998856:function(e,t,n){var s=n(72779),r=n.n(s),a=n(202784),i=n(429658),o=n(21027),l=n(552322);function c(e,t,n){const s=(e-t)/(n-t)*100;return Math.round(1e3*s)/1e3}function u({min:e,now:t,max:n,label:s,visuallyHidden:a,striped:i,animated:o,className:u,style:m,variant:p,bsPrefix:d,...f},h){return(0,l.jsx)("div",{ref:h,...f,role:"progressbar",className:r()(u,`${d}-bar`,{[`bg-${p}`]:p,[`${d}-bar-animated`]:o,[`${d}-bar-striped`]:o||i}),style:{width:`${c(t,e,n)}%`,...m},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":n,children:a?(0,l.jsx)("span",{className:"visually-hidden",children:s}):s})}const m=a.forwardRef((({isChild:e,...t},n)=>{if(t.bsPrefix=(0,i.vE)(t.bsPrefix,"progress"),e)return u(t,n);const{min:s,now:c,max:m,label:p,visuallyHidden:d,striped:f,animated:h,bsPrefix:v,variant:g,className:b,children:E,...y}=t;return(0,l.jsx)("div",{ref:n,...y,className:r()(b,v),children:E?(0,o.UI)(E,(e=>(0,a.cloneElement)(e,{isChild:!0}))):u({min:s,now:c,max:m,label:p,visuallyHidden:d,striped:f,animated:h,bsPrefix:v,variant:g},n)})}));m.displayName="ProgressBar",m.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},t.Z=m},458264:function(e,t,n){var s=n(72779),r=n.n(s),a=n(202784),i=n(429658),o=n(552322);const l=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...s},a)=>{const l=(0,i.vE)(e,"row"),c=(0,i.pi)(),u=`${l}-cols`,m=[];return c.forEach((e=>{const t=s[e];let n;delete s[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const r="xs"!==e?`-${e}`:"";null!=n&&m.push(`${u}${r}-${n}`)})),(0,o.jsx)(n,{ref:a,...s,className:r()(t,l,...m)})}));l.displayName="Row",t.Z=l},845450:function(e,t,n){var s=n(72779),r=n.n(s),a=n(202784),i=n(429658),o=n(552322);const l=a.forwardRef((({bsPrefix:e,className:t,striped:n,bordered:s,borderless:a,hover:l,size:c,variant:u,responsive:m,...p},d)=>{const f=(0,i.vE)(e,"table"),h=r()(t,f,u&&`${f}-${u}`,c&&`${f}-${c}`,n&&`${f}-striped`,s&&`${f}-bordered`,a&&`${f}-borderless`,l&&`${f}-hover`),v=(0,o.jsx)("table",{...p,className:h,ref:d});if(m){let e=`${f}-responsive`;return"string"==typeof m&&(e=`${e}-${m}`),(0,o.jsx)("div",{className:e,children:v})}return v}));t.Z=l}}]);