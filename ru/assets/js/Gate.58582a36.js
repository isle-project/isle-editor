(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{2850:function(t,e,n){"use strict";var r=n(0),i=n.n(r).a.createContext("anonymous");e.a=i},3743:function(t,e,n){"use strict";n.r(e);n(426),n(415),n(421);var r=n(404),i=n.n(r),s=n(412),o=n.n(s),a=n(416),c=n.n(a),u=n(418),l=n.n(u),h=n(419),p=n.n(h),d=n(417),f=n.n(d),v=n(0),k=(n(402),n(588)),w=n(471),m=n(465),y=n(2850);function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f()(t);if(e){var i=f()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p()(this,n)}}var C=function(t){l()(n,t);var e=b(n);function n(t,r){var i;return o()(this,n),(i=e.call(this,t)).state={isEnrolled:!1,isOwner:!1,validCheck:!t.check||t.check(r)},i}return c()(n,[{key:"componentDidMount",value:function(){var t=this;this._isMounted=!0;var e=this.context;e&&(this.unsubscribe=e.subscribe((function(n,r){if(n!==k.x&&n!==k.j&&n!==k.k&&n!==w.Cc||t.checkAuthorization(),t.props.check){var i=t.props.check(e);if(i!==t.state.validCheck)return t.setState({validCheck:i})}t._isMounted&&t.forceUpdate()})),this.checkAuthorization())}},{key:"componentDidUpdate",value:function(){if(this.props.check){var t=this.props.check(this.context);if(t!==this.state.validCheck)return this.setState({validCheck:t})}}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1}},{key:"checkAuthorization",value:function(){var t=this.context,e={isEnrolled:t.isEnrolled(),isOwner:t.isOwner(),presentationMode:t.presentationMode};e.isEnrolled===this.state.isEnrolled&&e.isOwner===this.state.isOwner&&e.presentationMode===this.state.presentationMode||this.setState(e)}},{key:"isTimeActive",value:function(){if(!this.props.after&&!this.props.until)return!0;var t=this.context;return this.props.after&&this.props.until?this.props.after<t.startTime&&t.startTime<=this.props.until:this.props.until?t.startTime<=this.props.until:this.props.after<t.startTime}},{key:"renderChildren",value:function(t){return i()(v.Fragment,{},void 0,t?null:this.props.banner,i()("div",{className:"gate outer-element",style:{display:t?"inline":"none"}},void 0,this.props.children))}},{key:"render",value:function(){var t=this,e=this.context;return i()(y.a.Consumer,{},void 0,(function(n){var r=t.props,i=r.disabled,s=r.user,o=r.notUser,a=r.enrolled,c=r.notEnrolled,u=r.owner,l=r.notOwner,h=t.state.isEnrolled||"enrolled"===n,p=t.state.isOwner||"owner"===n,d=e&&!e.anonymous||"anonymous"!==n,f=!1;return i||!t.state.validCheck||o&&d||l&&p||c&&h?t.renderChildren(!1):t.isTimeActive()?(s&&d||a&&h||u&&p&&(t.props.showOwnerInPresentationMode||!t.state.presentationMode)?f=!0:s||u||a||(f=!0),t.renderChildren(f)):t.renderChildren(!1)}))}}]),n}(v.Component);C.defaultProps={user:!1,notUser:!1,enrolled:!1,notEnrolled:!1,owner:!1,notOwner:!1,after:null,until:null,banner:null,disabled:!1,showOwnerInPresentationMode:!1,check:null},C.contextType=m.a,e.default=C}}]);