/*! For license information please see Gate.f28b5bd7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5576],{187043:function(e,t,n){n.r(t);var r=n(894578),i=n(202784),o=n(213980),s=n.n(o),a=n(822736),l=n(770561),c=n(198),u=n(676065),d=n.n(u),h=n(10206),p=n(382617),f=n(267682),v=n(211744),b=function(e){function t(t,n){var r;return(r=e.call(this,t)||this).state={isEnrolled:!1,isOwner:!1,validCheck:!t.check||t.check(n),bypassTimeCheck:!1},r}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0;var t=this.context;t&&(this.unsubscribe=t.subscribe((function(n,r){if(n!==h.YQ&&n!==h.Fw&&n!==h.E7&&n!==p.x$||e.checkAuthorization(),e.props.check){var i=e.props.check(t);if(i!==e.state.validCheck)return e.setState({validCheck:i})}e._isMounted&&e.forceUpdate()})),this.checkAuthorization())},n.componentDidUpdate=function(){if(this.props.check){var e=this.props.check(this.context);if(e!==this.state.validCheck)return this.setState({validCheck:e})}},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},n.checkAuthorization=function(){var e=this.context,t={isEnrolled:e.isEnrolled(),isOwner:e.isOwner(),presentationMode:e.presentationMode};t.isEnrolled===this.state.isEnrolled&&t.isOwner===this.state.isOwner&&t.presentationMode===this.state.presentationMode||this.setState(t)},n.isTimeActive=function(){if(!this.props.after&&!this.props.until)return!0;var e=this.context;return this.props.after&&this.props.until?this.props.after<e.startTime&&e.startTime<=this.props.until:this.props.until?e.startTime<=this.props.until:this.props.after<e.startTime},n.renderBanner=function(){if(!d()(this.props.banner))return this.props.banner;var e,t=this.props,n=t.check,r=t.disabled,o=t.user,s=t.notUser,l=t.enrolled,c=t.notEnrolled,u=t.owner,h=t.notOwner,p=t.after,f=t.until,v=t.t;if(n&&!this.state.validCheck)return e=v("check-not-satisfied"),i.createElement(a.Z,{variant:"info"},e);if(p||f)if(p)e=v("available-after")+" "+p.toLocaleString(),f&&(e+=" ",e+=v("remain-until")+" "+f.toLocaleString());else{var b=f.toLocaleString();e=v("available-until")+" "+b}else{if(r)return e=v("not-available"),i.createElement(a.Z,{variant:"info"},e);e=v("content-only-available")}var m=!1;if(o){if(s)return e=v("not-available"),i.createElement(a.Z,{variant:"info"},e);e+=" to logged-in users",m=!0}else s&&(e+=" to logged-out users",m=!0);if(l){if(c)return e=v("not-available"),i.createElement(a.Z,{variant:"info"},e);m&&(e+=" ",e+=v("and")),e+=" ",e+=v("to-enrolled"),m=!0}else c&&(m&&(e+=" ",e+=v("and")),e+=" ",e+=v("to-not-enrolled"),m=!0);if(u){if(h)return e=v("not-available"),i.createElement(a.Z,{variant:"info"},e);m&&(e+=" ",e+=v("and")),e+=" ",e+=v("to-owners")}else h&&(m&&(e+=" ",e+=v("and")),e+=" ",e+=v("to-non-owners"));return e+=".",i.createElement(a.Z,{variant:"info"},e)},n.renderShowButton=function(){var e=this;return i.createElement(l.Z,{variant:"secondary",size:"small",onClick:function(){e.setState({bypassTimeCheck:!e.state.bypassTimeCheck})},style:{float:"right"}},i.createElement("i",{className:"fas fa-clock"})," ",this.props.t("toggle-hidden-content"))},n.renderChildren=function(e,t){var n=e&&this.isTimeActive();return i.createElement(i.Fragment,null,e&&n?null:this.renderBanner(),t&&!n?this.renderShowButton():null,i.createElement("div",{className:"gate outer-element",style:{display:e&&(n||this.state.bypassTimeCheck)?"inline":"none"}},this.props.children))},n.render=function(){var e=this,t=this.context;return i.createElement(v.Z.Consumer,null,(function(n){var r=e.props,i=r.disabled,o=r.user,s=r.notUser,a=r.enrolled,l=r.notEnrolled,c=r.owner,u=r.notOwner,d=e.state.isEnrolled||"enrolled"===n,h=e.state.isOwner||"owner"===n,p=t&&!t.anonymous||"anonymous"!==n,f=!1;return i||!e.state.validCheck||s&&p||u&&h||l&&d?e.renderChildren(!1):(o&&p||a&&d||c&&h&&(e.props.showOwnerInPresentationMode||!e.state.presentationMode)?f=!0:o||c||a||(f=!0),e.renderChildren(f,h))}))},t}(i.Component);b.defaultProps={user:!1,notUser:!1,enrolled:!1,notEnrolled:!1,owner:!1,notOwner:!1,after:null,until:null,banner:void 0,disabled:!1,showOwnerInPresentationMode:!1,check:null},b.propTypes={user:s().bool,notUser:s().bool,enrolled:s().bool,notEnrolled:s().bool,owner:s().bool,notOwner:s().bool,after:s().instanceOf(Date),until:s().instanceOf(Date),banner:s().node,disabled:s().bool,showOwnerInPresentationMode:s().bool,check:s().func},b.contextType=f.Z,t.default=(0,c.Z)("gate")(b)},211744:function(e,t,n){var r=n(202784).createContext("anonymous");t.Z=r},676065:function(e,t,n){var r=n(229420);e.exports=r},229420:function(e){e.exports=function(e){return void 0===e}},770561:function(e,t,n){var r=n(807896),i=n(231461),o=n(72779),s=n.n(o),a=n(202784),l=n(429658),c=n(482695),u=["bsPrefix","variant","size","active","className","block","type","as"],d=a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,d=e.size,h=e.active,p=e.className,f=e.block,v=e.type,b=e.as,m=(0,i.Z)(e,u),k=(0,l.vE)(n,"btn"),w=s()(p,k,h&&"active",o&&k+"-"+o,f&&k+"-block",d&&k+"-"+d);if(m.href)return a.createElement(c.Z,(0,r.Z)({},m,{as:b,ref:t,className:s()(w,m.disabled&&"disabled")}));t&&(m.ref=t),v?m.type=v:b||(m.type="button");var E=b||"button";return a.createElement(E,(0,r.Z)({},m,{className:w}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=d}}]);