(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{520:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return o(t.querySelectorAll(e))}},6482:function(t,e,n){"use strict";n.r(e);n(423);var o=n(406),r=n.n(o),i=n(414),s=n.n(i),c=n(418),a=n.n(c),l=n(427),u=n.n(l),d=n(420),p=n.n(d),f=n(421),h=n.n(f),v=n(419),b=n.n(v),y=n(413),w=n.n(y),R=n(0),m=(n(404),n(4097)),M=n(433),k=n(680),O=n(467),j=n(425),H=n(448);n(352);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b()(t);if(e){var r=b()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}Object(j.a)("R");var x=function(t){p()(n,t);var e=S(n);function n(t){var o;return s()(this,n),o=e.call(this,t),w()(u()(o),"hideModal",(function(){o.setState({visible:!1})})),w()(u()(o),"showModal",(function(){var t=o.props.func||o.props.children;""===o.state.body?o.context.getRHelp(o.props.library,t,(function(t,e,n){t||o.setState({body:n,visible:!0})})):o.setState({visible:!o.state.visible})})),o.state={visible:o.props.visible,body:""},o}return a()(n,[{key:"render",value:function(){var t=this.props.t;return r()("span",{role:"button",tabIndex:0,className:"RHelp",onClick:this.showModal,onKeyPress:this.showModal},void 0,r()(k.a,{backdrop:!1,show:this.state.visible,title:t("r-help"),onHide:this.hideModal,className:"r-help-modal",enforceFocus:!1},void 0,r()(k.a.Header,{closeButton:!0},void 0,r()(k.a.Title,{id:"contained-modal-title-lg"},void 0,t("r-help"))),r()(k.a.Body,{className:"r-help-modal-body"},void 0,r()("span",{dangerouslySetInnerHTML:{__html:this.state.body}})),r()(k.a.Footer,{},void 0,r()(M.a,{onClick:this.hideModal},void 0,t("close")))),r()("code",{style:{cursor:"pointer"}},void 0,this.props.children||this.props.func))}}]),n}(R.Component);x.defaultProps={func:"",library:"base",visible:!1},x.contextType=O.a,e.default=Object(m.a)("R")(Object(H.a)(x))},813:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(0);function r(t){var e=Object(o.useRef)(null);return Object(o.useEffect)((function(){e.current=t})),e.current}}}]);