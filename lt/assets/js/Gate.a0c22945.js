/*! For license information please see Gate.a0c22945.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25576],{676065:function(e,t,n){var s=n(229420);e.exports=s},229420:function(e){e.exports=function(e){return void 0===e}},521805:function(e,t,n){n.r(t);var s=n(202784),i=n(213980),r=n.n(i),o=n(822736),a=n(770561),l=n(198),c=n(676065),h=n.n(c),d=n(409961),u=n.n(d),p=n(302108),f=n(691334),b=n(123103),m=n(912429);class v extends s.Component{constructor(e,t){super(e),this.state={isEnrolled:!1,isOwner:!1,validCheck:!e.check||e.check(t),bypassTimeCheck:!1}}componentDidMount(){this._isMounted=!0;const e=this.context;e&&(this.unsubscribe=e.subscribe(((t,n)=>{if(t!==p.YQ&&t!==p.Fw&&t!==p.E7&&t!==f.x$Q||this.checkAuthorization(),this.props.check){const t=this.props.check(e);if(t!==this.state.validCheck)return this.setState({validCheck:t})}this._isMounted&&this.forceUpdate()})),this.checkAuthorization())}componentDidUpdate(){if(this.props.check){const e=this.props.check(this.context);if(e!==this.state.validCheck)return this.setState({validCheck:e})}}componentWillUnmount(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1}checkAuthorization(){const e=this.context;let t={isEnrolled:e.isEnrolled(),isOwner:e.isOwner(),presentationMode:e.presentationMode};t.isEnrolled===this.state.isEnrolled&&t.isOwner===this.state.isOwner&&t.presentationMode===this.state.presentationMode||this.setState(t)}isTimeActive(){if(!this.props.after&&!this.props.until)return!0;const e=this.context;return this.props.after&&this.props.until?this.props.after<e.startTime&&e.startTime<=this.props.until:this.props.until?e.startTime<=this.props.until:this.props.after<e.startTime}renderBanner(){if(!h()(this.props.banner))return this.props.banner;const{check:e,disabled:t,user:n,notUser:i,enrolled:r,notEnrolled:a,owner:l,notOwner:c,after:d,until:u,t:p}=this.props;let f;if(e&&!this.state.validCheck)return f=p("check-not-satisfied"),s.createElement(o.Z,{variant:"info"},f);if(d||u)if(d)f=p("available-after")+" "+d.toLocaleString(),u&&(f+=" ",f+=p("remain-until")+" "+u.toLocaleString());else{const e=u.toLocaleString();f=p("available-until")+" "+e}else{if(t)return f=p("not-available"),s.createElement(o.Z,{variant:"info"},f);f=p("content-only-available")}let b=!1;if(n){if(i)return f=p("not-available"),s.createElement(o.Z,{variant:"info"},f);f+=" to logged-in users",b=!0}else i&&(f+=" to logged-out users",b=!0);if(r){if(a)return f=p("not-available"),s.createElement(o.Z,{variant:"info"},f);b&&(f+=" ",f+=p("and")),f+=" ",f+=p("to-enrolled"),b=!0}else a&&(b&&(f+=" ",f+=p("and")),f+=" ",f+=p("to-not-enrolled"),b=!0);if(l){if(c)return f=p("not-available"),s.createElement(o.Z,{variant:"info"},f);b&&(f+=" ",f+=p("and")),f+=" ",f+=p("to-owners")}else c&&(b&&(f+=" ",f+=p("and")),f+=" ",f+=p("to-non-owners"));f+=".";return s.createElement(o.Z,{variant:"info"},f)}renderShowButton(){return u()(this.props.banner)?null:s.createElement(a.Z,{variant:"secondary",size:"small",onClick:()=>{this.setState({bypassTimeCheck:!this.state.bypassTimeCheck})},style:{float:"right"}},s.createElement("i",{className:"fas fa-clock"})," ",this.props.t("toggle-hidden-content"))}renderChildren(e,t){const n=e&&this.isTimeActive();return s.createElement(s.Fragment,null,e&&n?null:this.renderBanner(),t&&!n?this.renderShowButton():null,s.createElement("div",{className:"gate outer-element",style:{display:e&&(n||this.state.bypassTimeCheck)?"inline":"none"}},this.props.children))}render(){const e=this.context;return s.createElement(m.Z.Consumer,null,(t=>{const{disabled:n,user:s,notUser:i,enrolled:r,notEnrolled:o,owner:a,notOwner:l}=this.props,c=this.state.isEnrolled||"enrolled"===t,h=this.state.isOwner||"owner"===t,d=e&&!e.anonymous||"anonymous"!==t;let u=!1;return n||!this.state.validCheck||i&&d||l&&h||o&&c?this.renderChildren(!1):(s&&d||r&&c||a&&h&&(this.props.showOwnerInPresentationMode||!this.state.presentationMode)?u=!0:s||a||r||(u=!0),this.renderChildren(u,h))}))}}v.defaultProps={user:!1,notUser:!1,enrolled:!1,notEnrolled:!1,owner:!1,notOwner:!1,after:null,until:null,banner:void 0,disabled:!1,showOwnerInPresentationMode:!0,check:null},v.propTypes={user:r().bool,notUser:r().bool,enrolled:r().bool,notEnrolled:r().bool,owner:r().bool,notOwner:r().bool,after:r().instanceOf(Date),until:r().instanceOf(Date),banner:r().node,disabled:r().bool,showOwnerInPresentationMode:r().bool,check:r().func},v.contextType=b.Z,t.default=(0,l.Z)("gate")(v)},912429:function(e,t,n){const s=n(202784).createContext("anonymous");t.Z=s},770561:function(e,t,n){var s=n(72779),i=n.n(s),r=n(202784),o=n(247830),a=n(429658),l=n(552322);const c=r.forwardRef((({as:e,bsPrefix:t,variant:n,size:s,active:r,className:c,...h},d)=>{const u=(0,a.vE)(t,"btn"),[p,{tagName:f}]=(0,o.FT)({tagName:e,...h}),b=f;return(0,l.jsx)(b,{...p,...h,ref:d,className:i()(c,u,r&&"active",n&&`${u}-${n}`,s&&`${u}-${s}`,h.href&&h.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c}}]);