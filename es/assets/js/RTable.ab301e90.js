(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1571:function(t,n,e){"use strict";var a=e(448),i=e.n(a);n.a=function(t,n,e){var a=e.config.rshell;a&&a.libraries&&(t=t.concat(a.libraries));var r=function(t){return t.map((function(t){return"library("+t+");"})).join(" ")}(t);return a&&a.global&&(r+=a.global+"\n"),n=i()(n)?n.join("\n"):n,r+=n+="\n"}},6475:function(t,n,e){"use strict";e.r(n);e(421);var a=e(404),i=e.n(a),r=e(412),o=e.n(r),c=e(416),s=e.n(c),u=e(425),l=e.n(u),p=e(418),f=e.n(p),d=e(419),h=e.n(d),v=e(417),b=e.n(v),g=e(410),w=e.n(g),y=(e(663),e(0)),m=(e(402),e(1524)),R=e(1188),j=e(1571),x=e(465),k=e(423),O=e(445);function T(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=b()(t);if(n){var i=b()(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return h()(this,e)}}Object(k.a)("R");var C=i()("span",{}),B=function(t){f()(e,t);var n=T(e);function e(t){var a;return o()(this,e),a=n.call(this,t),w()(l()(a),"getTable",(function(t){var n;if((n=t?t.code:a.props.code)!==a.state.last){a.setState({waiting:!0,last:a.props.code});var e=a.context,i=a.props,r=i.libraries,o=i.prependCode,c="library( jsonlite );\n";c=c+(o=Object(j.a)(r,o,e))+n.replace(/\n\s*([ A-Z0-9._():=]+)\n*$/i,"\n toJSON($1)"),e.executeRCode({code:c,onResult:function(t,n,e){a.setState({data:e,waiting:!1})}})}})),a.state={data:null,last:"",waiting:!1},a}return s()(e,[{key:"componentDidMount",value:function(){this.getTable()}},{key:"componentDidUpdate",value:function(){this.getTable(this.props)}},{key:"render",value:function(){var t=this.props;return i()("div",{className:"rtable"},void 0,i()(R.a,{running:this.state.waiting,width:256,height:128}),this.state.data&&!this.state.waiting?i()("div",{style:{marginTop:"10px",marginBottom:"10px"}},void 0,i()(m.a,{data:this.state.data,width:"".concat(100*t.width,"%")})):C)}}]),e}(y.Component);B.defaultProps={code:"",width:.5,libraries:[],prependCode:""},B.contextType=x.a,n.default=Object(O.a)(B)}}]);