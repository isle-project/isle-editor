(window.webpackJsonp=window.webpackJsonp||[]).push([[1147],{6223:function(t,o,e){"use strict";e.r(o);e(421);var n=e(407),s=e.n(n),i=e(414),r=e.n(i),a=e(416),p=e.n(a),c=e(424),l=e.n(c),u=e(418),h=e.n(u),d=e(419),f=e.n(d),v=e(417),b=e.n(v),m=e(412),y=e.n(m),w=e(0),C=(e(404),e(450)),V=e.n(C),j=e(4095),k=e(423),g=e(483),x=e(645),R=e(459),S=e(533);function z(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=b()(t);if(o){var s=b()(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return f()(this,e)}}var N=V()("isle:video-chat-button"),P=function(t){h()(e,t);var o=z(e);function e(t){var n;return r()(this,e),n=o.call(this,t),y()(l()(n),"toggleVideoChat",(function(t){var o=!n.state.opened;n.props.onClick(t,o),n.setState({opened:o},(function(){var t=n.context;o?(N("Should join chat for component with id '".concat(n.props.for,"'...")),t.joinVideoChat({name:n.props.for,subject:n.props.subject||n.props.for})):(N("Should leave chat for component with id '".concat(n.props.for,"'...")),t.leaveVideoChat(n.props.for))}))})),n.state={opened:!1},n}return p()(e,[{key:"componentDidMount",value:function(){var t=this,o=this.context;this.unsubscribe=o.subscribe((function(o,e){o===S.S&&e===t.props.for?t.setState({opened:!0}):o===S.R&&e===t.props.for?t.setState({opened:!1}):o!==S.t&&o!==S.x||t.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t,o,e,n=this.context,i=this.props.t;if(t=this.props.buttonLabel?this.props.buttonLabel:this.state.opened?i("leave"):i("join"),o=this.props.buttonVariant?this.props.buttonVariant:this.state.opened?"success":"secondary",!n.jitsi)return s()(k.a,{disabled:!0,name:"Video Chat",variant:o,size:this.props.size,className:this.props.className,style:this.props.style,"aria-disabled":"true","aria-label":i("disabled")},void 0,t);e=this.props.tooltip?this.props.tooltip:this.state.opened?i("leave-id",{id:this.props.for}):i("join-id",{id:this.props.for});var r=s()(k.a,{name:"Video Chat",variant:o,size:this.props.size,className:this.props.className,onClick:this.toggleVideoChat,style:this.props.style,"aria-label":i("toggle")},void 0,s()("span",{style:{pointerEvents:"none"}},void 0,t));return this.props.showTooltip&&(r=s()(g.a,{tooltip:e,placement:this.props.tooltipPlacement},void 0,r)),s()(x.a,{user:!0},void 0,r)}}]),e}(w.Component);P.defaultProps={subject:null,buttonLabel:null,showTooltip:!0,size:"sm",buttonVariant:null,tooltipPlacement:"top",onClick:function(){},className:"",style:{}},P.contextType=R.a,o.default=Object(j.a)("Video")(P)}}]);