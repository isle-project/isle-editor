(window.webpackJsonp=window.webpackJsonp||[]).push([[1315],{6496:function(t,n,o){"use strict";o.r(n);o(426),o(415),o(421);var e=o(404),r=o.n(e),i=o(412),c=o.n(i),s=o(416),l=o.n(s),u=o(425),a=o.n(u),p=o(418),d=o.n(p),f=o(419),h=o.n(f),v=o(417),b=o.n(v),y=o(410),k=o.n(y),w=o(0),m=o(431),H=o(676);o(402);function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,e=b()(t);if(n){var r=b()(this).constructor;o=Reflect.construct(e,arguments,r)}else o=e.apply(this,arguments);return h()(this,o)}}var C=function(t){d()(o,t);var n=R(o);function o(){var t;c()(this,o);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t=n.call.apply(n,[this].concat(r)),k()(a()(t),"clickHide",(function(){t.props.onHide()})),k()(a()(t),"handleClick",(function(){t.props.onSubmit(),t.props.onHide()})),t}return l()(o,[{key:"render",value:function(){return r()(H.a,{onHide:this.clickHide,show:this.props.show,size:"small"},void 0,r()(H.a.Header,{closeButton:!0},void 0,r()(H.a.Title,{},void 0,this.props.title||this.props.t("reset-modal-title"))),r()(H.a.Body,{},void 0,this.props.body||this.props.t("reset-modal-body")),r()(H.a.Footer,{},void 0,r()(m.a,{variant:"danger",onClick:this.handleClick,block:!0},void 0,this.props.buttonLabel||this.props.t("reset-modal-button-label"))))}}]),o}(w.Component);C.defaultProps={title:null,body:null,buttonLabel:null,onHide:function(){},onSubmit:function(){}},n.default=C}}]);