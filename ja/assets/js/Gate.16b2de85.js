(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{2834:function(e,t,n){"use strict";var r=n(0),i=n.n(r).a.createContext("anonymous");t.a=i},3725:function(e,t,n){"use strict";n.r(t);n(421);var r=n(407),i=n.n(r),s=n(414),o=n.n(s),a=n(416),c=n.n(a),u=n(418),l=n.n(u),h=n(419),p=n.n(h),d=n(417),f=n.n(d),v=n(0),k=(n(404),n(533)),w=n(458),m=n(459),y=n(2834);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var i=f()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p()(this,n)}}var C=function(e){l()(n,e);var t=b(n);function n(e,r){var i;return o()(this,n),(i=t.call(this,e)).state={isEnrolled:!1,isOwner:!1,validCheck:!e.check||e.check(r)},i}return c()(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.context;t&&(this.unsubscribe=t.subscribe((function(n,r){if(n!==k.x&&n!==k.j&&n!==k.k&&n!==w.Ec||e.checkAuthorization(),e.props.check){var i=e.props.check(t);if(i!==e.state.validCheck)return e.setState({validCheck:i})}e._isMounted&&e.forceUpdate()})),this.checkAuthorization())}},{key:"componentDidUpdate",value:function(){if(this.props.check){var e=this.props.check(this.context);if(e!==this.state.validCheck)return this.setState({validCheck:e})}}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1}},{key:"checkAuthorization",value:function(){var e=this.context,t={isEnrolled:e.isEnrolled(),isOwner:e.isOwner(),presentationMode:e.presentationMode};t.isEnrolled===this.state.isEnrolled&&t.isOwner===this.state.isOwner&&t.presentationMode===this.state.presentationMode||this.setState(t)}},{key:"isTimeActive",value:function(){if(!this.props.after&&!this.props.until)return!0;var e=this.context;return this.props.after&&this.props.until?this.props.after<e.startTime&&e.startTime<=this.props.until:this.props.until?e.startTime<=this.props.until:this.props.after<e.startTime}},{key:"renderChildren",value:function(e){return i()(v.Fragment,{},void 0,e?null:this.props.banner,i()("div",{className:"gate outer-element",style:{display:e?"inline":"none"}},void 0,this.props.children))}},{key:"render",value:function(){var e=this,t=this.context;return i()(y.a.Consumer,{},void 0,(function(n){var r=e.props,i=r.disabled,s=r.user,o=r.notUser,a=r.enrolled,c=r.notEnrolled,u=r.owner,l=r.notOwner,h=e.state.isEnrolled||"enrolled"===n,p=e.state.isOwner||"owner"===n,d=t&&!t.anonymous||"anonymous"!==n,f=!1;return i||!e.state.validCheck||o&&d||l&&p||c&&h?e.renderChildren(!1):e.isTimeActive()?(s&&d||a&&h||u&&p&&(e.props.showOwnerInPresentationMode||!e.state.presentationMode)?f=!0:s||u||a||(f=!0),e.renderChildren(f)):e.renderChildren(!1)}))}}]),n}(v.Component);C.defaultProps={user:!1,notUser:!1,enrolled:!1,notEnrolled:!1,owner:!1,notOwner:!1,after:null,until:null,banner:null,disabled:!1,showOwnerInPresentationMode:!1,check:null},C.contextType=m.a,t.default=C}}]);