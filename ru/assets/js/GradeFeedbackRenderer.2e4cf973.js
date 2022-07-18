"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34507],{307125:function(e,s,t){t.r(s);var r=t(202784),a=t(198),o=t(213980),n=t.n(o),i=t(309765),l=t(123103),c=t(223444),p=t(875084),d=t(770561),u=t(112114),m=t(870781),f=t(691334),h=t(302108),g=Object.defineProperty,b=Object.defineProperties,y=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(e,s,t)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,x=(e,s)=>{for(var t in s||(s={}))E.call(s,t)&&w(e,t,s[t]);if(v)for(var t of v(s))k.call(s,t)&&w(e,t,s[t]);return e},N=(e,s,t)=>(w(e,"symbol"!=typeof s?s+"":s,t),t);class M extends r.Component{constructor(e){super(e),N(this,"scrollToQuestion",(()=>{const e=document.getElementById(this.props.for);e&&e.scrollIntoView()})),N(this,"toggleMessages",(()=>{this.setState({showMessages:!this.state.showMessages})})),this.state={showMessages:!1}}componentDidMount(){const e=this.context;this.unsubscribe=e.subscribe(((s,t)=>{if(s===h.Wh){if(t.id!==this.props.for)return;if(t.type===f.QEJ){if(t.id!==this.props.for)return;e.user.lessonGradeMessages[e.lessonID]||(e.user.lessonGradeMessages[e.lessonID]={});const s=e.user.lessonGradeMessages[e.lessonID];s[this.props.for]||(s[this.props.for]=[]),s[this.props.for].push(t.value);const a=document.getElementById(this.props.for);e.addNotification({title:this.props.t("Feedback received"),message:this.props.t("You have received feedback from "+t.value.user+" for question "+this.props.for),position:"tl",level:"info",autoDismiss:0,children:a&&null!==a.offsetParent?r.createElement("div",{style:{marginBottom:"30px"}},r.createElement("button",{style:{float:"right",border:"2px solid rgb(0, 123, 255)",backgroundColor:"rgb(206 222 230)",borderRadius:"3px"},onClick:this.scrollToQuestion},this.props.t("Scroll to the question"))):null}),this.forceUpdate()}}}))}componentWillUnmount(){this.unsubscribe()}renderMessages(){const e=this.context,s=e.user.lessonGradeMessages[e.lessonID];return s&&s[this.props.for]?r.createElement("div",{className:"grade-feedback-renderer-messages"},s[this.props.for].map(((s,t)=>r.createElement("div",{className:"grade-feedback-message",key:t},r.createElement("img",{className:"grade-feedback-picture unselectable",src:e.server+"/thumbnail/"+s.picture,alt:this.props.t("profile-pic")}),r.createElement("div",{className:"grade-feedback-message-right"},r.createElement("span",{className:"grade-feedback-user"},s.user)," - ",r.createElement("span",{className:"grade-feedback-time"},(0,m.Z)(s.time)),r.createElement("br",null),r.createElement("span",{className:"grade-feedback-message-content"},s.content)))))):null}renderOverlay(){return this.state.showMessages?r.createElement(p.Z,{target:this.messagesButton,show:this.state.showMessages,placement:"right"},(e=>{var s,t,a=e,{placement:o,arrowProps:n,show:i,popper:l}=a,c=((e,s)=>{var t={};for(var r in e)E.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&v)for(var r of v(e))s.indexOf(r)<0&&k.call(e,r)&&(t[r]=e[r]);return t})(a,["placement","arrowProps","show","popper"]);return r.createElement("div",(s=x({},c),t={style:x({backgroundColor:"#f8f9fa",padding:"2px 10px",color:"darkslategrey",borderRadius:6,border:"1px solid darkslategrey",width:"600px",boxShadow:"0px 0px 4px darkslategrey",zIndex:1006},c.style)},b(s,y(t))),r.createElement("div",{style:{marginTop:6,marginBottom:6}},this.props.for,r.createElement(d.Z,{"aria-label":this.props.t("close"),variant:"secondary",size:"sm",onClick:()=>{this.setState({showMessages:!1})},style:{float:"right",marginBottom:4}},r.createElement("i",{className:"fas fa-times"}))),r.createElement("hr",null),this.renderMessages())})):null}render(){const e=this.context;if(!e.user||!e.user.lessonGrades)return null;const s=e.user.lessonGrades[e.lessonID],t=s&&(0,i.isPrimitive)(s[this.props.for]),a=e.user.lessonGradeMessages[e.lessonID],o=a&&a[this.props.for];return r.createElement(r.Fragment,null,t?r.createElement(c.Z,{bg:"success",style:{fontSize:"1em"}},this.props.t("your-points"),": ",s[this.props.for]," / ",this.props.points):null,o?r.createElement(u.Z,{tooltip:this.props.t("display-instructor-feedback")},r.createElement(d.Z,{"aria-label":this.props.t("display-instructor-feedback"),ref:e=>{this.messagesButton=e},onClick:this.toggleMessages,size:"small",variant:"light",style:{marginLeft:12},className:"grade-feedback-button"},r.createElement("i",{className:"fas fa-envelope-open"}),r.createElement(c.Z,{className:"ms-2",pill:!0,bg:"success"},a[this.props.for].length))):null,this.renderOverlay())}}M.propTypes={points:n().number.isRequired,for:n().string.isRequired},M.contextType=l.Z,s.default=(0,a.Z)("internal/grade-feedback-renderer")(M)},870781:function(e,s){s.Z=function(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"})}},770561:function(e,s,t){var r=t(72779),a=t.n(r),o=t(202784),n=t(247830),i=t(429658),l=t(552322);const c=o.forwardRef((({as:e,bsPrefix:s,variant:t,size:r,active:o,className:c,...p},d)=>{const u=(0,i.vE)(s,"btn"),[m,{tagName:f}]=(0,n.FT)({tagName:e,...p}),h=f;return(0,l.jsx)(h,{...m,...p,ref:d,className:a()(c,u,o&&"active",t&&`${u}-${t}`,r&&`${u}-${r}`,p.href&&p.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},s.Z=c}}]);