/*! For license information please see LogisticRegressionMenu.b7834d60.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{2715:function(t,e,n){"use strict";var i=n(2716);t.exports=i},2716:function(t,e,n){"use strict";var i=n(476),o=n(422),a=n(628),r=n(425);t.exports=function(t,e){var n,s;if(!i(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");if(arguments.length<2)n=a;else if(!i(n=e))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+n+"`.");return o(c,"cache",s={}),c;function c(){var e,i,o,a;for(e=new Array(arguments.length),a=0;a<arguments.length;a++)e[a]=arguments[a];return o=n(e).toString(),r(s,o)?s[o]:(i=t.apply(null,e),s[o]=i,i)}}},484:function(t,e,n){"use strict";var i,o=n(407),a=n.n(o),r=(n(0),n(404),n(423)),s=n(512),c=n(510),u=n(505),l=n(547);e.a=function(t){var e=a()(s.a,{id:"popover-positioned-right"},void 0,a()(c.a,{},void 0,t.title),a()(u.a,{},void 0,t.content));return a()(l.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,i||(i=a()(r.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,a()("div",{className:"fa fa-question"}))))}},6293:function(t,e,n){"use strict";n.r(e);n(421);var i=n(407),o=n.n(i),a=n(414),r=n.n(a),s=n(416),c=n.n(s),u=n(424),l=n.n(u),p=n(418),f=n.n(p),d=n(419),v=n.n(d),g=n(417),h=n.n(g),m=n(412),y=n.n(m),x=(n(465),n(0)),b=(n(404),n(711)),w=n.n(b),C=n(423),S=n(464),q=n(477),R=n(490),V=n(447),k=n.n(V),M=n(471),A=n.n(M),O=n(515),P=n.n(O),B=n(2715),_=n.n(B),z=n(506),E=n(553),H=n(458),J=n(919),L=n(1323),N=n(484);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return v()(this,n)}}var j=_()(J.a,(function(t){return t[1]})),D=function(t){f()(n,t);var e=T(n);function n(t){var i;return r()(this,n),i=e.call(this,t),y()(l()(i),"compute",(function(){var t=i.state,e=t.y,n=t.success,a=t.x,r=t.intercept,s=t.omitMissing,c=o()(L.a,{data:i.props.data,x:a,y:e,success:n,intercept:r,omitMissing:s,quantitative:i.props.quantitative,onPredict:function(t,e,n,o){var a=P()(i.props.data,1),r=i.props.quantitative.slice(),s=i.props.categorical.slice(),c="probs_logis"+o;a[c]=e,A()(r,c)||r.push(c),a[c="pred_logis"+o]=t,A()(s,c)||s.push(c),c="resid_logis"+o,A()(r,c)||r.push(c),a[c]=n,i.props.onGenerate(r,s,a)}});i.props.logAction(H.v,{y:e,x:a,intercept:r}),i.props.onCreated(c)})),i.state={categories:[],y:null,success:null,x:t.quantitative[0],intercept:!0,omitMissing:!1},i}return c()(n,[{key:"componentDidMount",value:function(){var t,e,n,i=this.props,o=i.categorical,a=i.data;k()(o)&&o.length>0?(n=o[0],e=(t=j(a[n],n))[t.length-1]):(t=[],e=null),this.setState({y:n,success:e,categories:t})}},{key:"render",value:function(){var t=this,e=this.props,n=e.categorical,i=e.quantitative,a=e.data,r=e.t,s=this.state,c=s.x,u=s.y,l=s.categories,p=s.success,f=s.intercept;return o()(S.a,{style:{fontSize:"14px",maxWidth:500}},void 0,o()(S.a.Header,{as:"h4"},void 0,r("Logistic Regression"),o()(N.a,{title:r("Logistic Regression"),content:"Predict a categorical response variable using one or more explanatory variables."})),o()(S.a.Body,{},void 0,o()(q.a,{},void 0,o()(R.a,{md:6},void 0,o()(z.a,{legend:r("outcome-y"),options:n,defaultValue:u,onChange:function(e){var n=Object(J.a)(a[e],e);t.setState({categories:n,success:n[n.length-1],y:e})}})),o()(R.a,{md:6},void 0,o()(z.a,{legend:"".concat(r("success")," (Y = 1):"),defaultValue:p,options:l,onChange:function(e){t.setState({success:e})}}))),o()(z.a,{legend:r("predictors-x"),multi:!0,options:w()(i.concat(n)),defaultValue:c||"",onChange:function(e){return t.setState({x:e})},closeMenuOnSelect:!1,selectAllOption:!0}),o()(E.a,{legend:r("include-intercept"),defaultValue:f,onChange:function(e){return t.setState({intercept:e})}}),o()(E.a,{legend:r("omit-missing"),defaultValue:!1,onChange:function(e){return t.setState({omitMissing:e})}}),o()(C.a,{disabled:!c||0===c.length,variant:"primary",block:!0,onClick:this.compute},void 0,r("calculate"))))}}]),n}(x.Component);D.defaultProps={logAction:function(){}},e.default=D}}]);