(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{6420:function(t,e,n){"use strict";n.r(e);n(426),n(415),n(421);var o=n(404),s=n.n(o),c=n(513),r=n.n(c),i=n(412),a=n.n(i),u=n(416),p=n.n(u),l=n(425),f=n.n(l),h=n(418),v=n.n(h),d=n(419),m=n.n(d),w=n(417),b=n.n(w),y=n(410),k=n.n(y),g=n(0),C=n.n(g),R=n(1611),D=(n(402),n(451)),N=n.n(D);n(314);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b()(t);if(e){var s=b()(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return m()(this,n)}}var P=N()("isle:beacon-tooltip"),S=s()("button",{className:"beacon-button"},void 0,s()("span",{className:"beacon-inner"}),s()("span",{className:"beacon-outer"})),x=function(t){v()(n,t);var e=J(n);function n(t){var o;return a()(this,n),o=e.call(this,t),k()(f()(o),"handleChange",(function(t,e){P("Received action: "+t),o.props.onChange(t,e)})),o.state={show:!1},o}return p()(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.show()}),5e3)}},{key:"show",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return this.state.show?s()(g.Fragment,{},void 0,this.props.children,C.a.createElement(R.a,r()({callback:this.handleChange,content:this.props.content,event:this.props.event,placement:this.props.placement,title:this.props.title,showCloseButton:"click"===this.props.event,offset:this.props.offset,wrapperOptions:{offset:-22,placement:"top",position:!0}},this.props),S)):null}}]),n}(g.Component);x.defaultProps={title:null,content:"`content` comes here...",event:"click",placement:"left",target:"",offset:15,onChange:function(){}},e.default=x}}]);