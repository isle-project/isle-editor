(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{6753:function(t,e,o){"use strict";o.r(e);o(382),o(373),o(386);var n=o(371),i=o.n(n),r=o(376),s=o.n(r),a=o(378),c=o.n(a),l=o(393),d=o.n(l),u=o(380),p=o.n(u),h=o(381),f=o.n(h),v=o(379),b=o.n(v),y=o(375),w=o.n(y),m=o(0),R=(o(363),o(6684)),M=o(400),k=o(716),H=o(445),S=o(396);o(313);function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=b()(t);if(e){var i=b()(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return f()(this,o)}}Object(S.a)("R");var x=function(t){p()(o,t);var e=g(o);function o(t){var n;return s()(this,o),n=e.call(this,t),w()(d()(n),"hideModal",(function(){n.setState({visible:!1})})),w()(d()(n),"showModal",(function(){var t=n.props.func||n.props.children;""===n.state.body?n.context.getRHelp(n.props.library,t,(function(t,e,o){t||n.setState({body:o,visible:!0})})):n.setState({visible:!n.state.visible})})),n.state={visible:n.props.visible,body:""},n}return c()(o,[{key:"render",value:function(){var t=this.props.t;return i()("span",{role:"button",tabIndex:0,className:"RHelp",onClick:this.showModal,onKeyPress:this.showModal},void 0,i()(k.a,{backdrop:!1,show:this.state.visible,title:t("r-help"),onHide:this.hideModal,className:"r-help-modal",enforceFocus:!1},void 0,i()(k.a.Header,{closeButton:!0},void 0,i()(k.a.Title,{id:"contained-modal-title-lg"},void 0,t("r-help"))),i()(k.a.Body,{className:"r-help-modal-body"},void 0,i()("span",{dangerouslySetInnerHTML:{__html:this.state.body}})),i()(k.a.Footer,{},void 0,i()(M.a,{onClick:this.hideModal},void 0,t("close")))),i()("code",{style:{cursor:"pointer"}},void 0,this.props.children||this.props.func))}}]),o}(m.Component);x.defaultProps={func:"",library:"base",visible:!1},x.contextType=H.a,e.default=Object(R.a)("R")(x)}}]);