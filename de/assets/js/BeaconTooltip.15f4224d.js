(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{6349:function(t,e,n){"use strict";n.r(e);n(421);var o,s=n(488),c=n.n(s),r=n(407),a=n.n(r),i=n(414),u=n.n(i),l=n(416),p=n.n(l),f=n(424),h=n.n(f),v=n(418),d=n.n(v),m=n(419),w=n.n(m),b=n(417),y=n.n(b),k=n(412),g=n.n(k),C=n(0),R=n.n(C),B=n(1494),N=(n(404),n(450)),J=n.n(N);n(312);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y()(t);if(e){var s=y()(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return w()(this,n)}}var P=J()("isle:beacon-tooltip"),x=function(t){d()(n,t);var e=O(n);function n(t){var o;return u()(this,n),o=e.call(this,t),g()(h()(o),"handleChange",(function(t,e){P("Received action: "+t),o.props.onChange(t,e)})),o.state={show:!1},o}return p()(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.show()}),5e3)}},{key:"show",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return this.state.show?a()(C.Fragment,{},void 0,this.props.children,R.a.createElement(B.a,c()({callback:this.handleChange,content:this.props.content,event:this.props.event,placement:this.props.placement,title:this.props.title,showCloseButton:"click"===this.props.event,offset:this.props.offset,wrapperOptions:{offset:-22,placement:"top",position:!0}},this.props),o||(o=a()("button",{className:"beacon-button"},void 0,a()("span",{className:"beacon-inner"}),a()("span",{className:"beacon-outer"}))))):null}}]),n}(C.Component);x.defaultProps={title:null,content:"`content` comes here...",event:"click",placement:"left",target:"",offset:15,onChange:function(){}},e.default=x}}]);