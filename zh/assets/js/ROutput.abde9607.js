(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1575:function(t,n,e){"use strict";var r=e(451),o=e.n(r);n.a=function(t,n,e){var r=e.config.rshell;r&&r.libraries&&(t=t.concat(r.libraries));var i=function(t){return t.map((function(t){return"library("+t+");"})).join(" ")}(t);return r&&r.global&&(i+=r.global+"\n"),n=o()(n)?n.join("\n"):n,i+=n+="\n"}},3952:function(t,n,e){"use strict";e.r(n);e(423);var r=e(414),o=e.n(r),i=e(418),s=e.n(i),u=e(427),a=e.n(u),c=e(420),l=e.n(c),p=e(421),f=e.n(p),d=e(419),g=e.n(d),h=e(413),v=e.n(h),R=e(406),m=e.n(R),y=e(0),b=(e(404),e(4428)),x=e.n(b),w=e(1193),j=e(1575),k=e(467),O=e(425),P=e(448);function B(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=g()(t);if(n){var o=g()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)}}Object(O.a)("R");var C=m()("span",{}),S=m()("span",{}),T=m()("span",{}),D=function(t){l()(e,t);var n=B(e);function e(t){var r;return o()(this,e),r=n.call(this,t),v()(a()(r),"getResult",(function(t){var n;if((n=t?t.code:r.props.code)!==r.state.last){r.setState({last:r.props.code,running:!0});var e=r.context,o=Object(j.a)(r.props.libraries,r.props.prependCode,e)+n;e.executeRCode({code:o,onError:function(t){r.setState({result:t,running:!1}),r.props.onResult(t)},onPlots:r.props.onPlots,onResult:function(t,n,e){r.setState({result:e,running:!1}),r.props.onResult(t,e)}})}})),r.state={result:null,running:!1,last:""},r}return s()(e,[{key:"componentDidMount",value:function(){this.getResult(this.props)}},{key:"componentDidUpdate",value:function(){this.getResult(this.props)}},{key:"render",value:function(){return m()("span",{className:"ROutput"},void 0,this.state.result?m()("div",{style:{marginLeft:"auto",marginRight:"auto",marginTop:"10px",marginBottom:"10px"}},void 0,m()(w.a,{width:128,height:64,style:{marginTop:"8px",marginBottom:"-12px"},running:this.state.running}),this.state.running?S:function(t){if(t){var n={__html:x.a.sanitize(t)};return m()("pre",{id:"output"},void 0,m()("span",{dangerouslySetInnerHTML:n}))}return C}(this.state.result)):T)}}]),e}(y.Component);D.defaultProps={code:"",libraries:[],prependCode:"",onPlots:function(){},onResult:function(){}},D.contextType=k.a,n.default=Object(P.a)(D)}}]);