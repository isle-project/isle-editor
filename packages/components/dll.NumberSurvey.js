/*! For license information please see dll.NumberSurvey.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[95],{1042:function(t,e,a){"use strict";a.r(e);var n=a(106);e.default=function(t){var e=t.length;if(!e)return null;for(var a=0,r=0;r<e;r++){if(!Object(n.isPrimitive)(t[r]))return NaN;a+=(t[r]-a)/(r+1)}return a}},1078:function(t,e,a){"use strict";a.r(e);var n=a(106),r=a(362),s=a.n(r);e.default=function(t){var e=t.length,a=0,r=0,i=0,u=0;if(e<2)return 0;for(var l=0;l<e;l++){if(!Object(n.isPrimitive)(t[l]))return NaN;a+=1,r+=(u=t[l]-r)/a,i+=u*(t[l]-r)}return s()(i/(a-1))}},1292:function(t,e,a){"use strict";var n=a(1293);t.exports=n},1293:function(t,e,a){"use strict";var n=a(39);t.exports=function(t){return n(t)&&0===t.length}},2863:function(t,e,a){"use strict";a.r(e);var n=a(22),r=a.n(n),s=a(2864),i={insert:"head",singleton:!1};r()(s.default,i);e.default=s.default.locals||{}},2864:function(t,e,a){"use strict";a.r(e);var n=a(23),r=a.n(n)()(!1);r.push([t.i,".number-survey {\n\tborder: 1px solid rgba(92, 92, 92, 0.6);\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 4px rgba(92, 92, 92, 0.5);\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n\tmargin-bottom: 12px;\n\tmax-width: 600px;\n\tmargin-left: -20px;\n}\n",""]),e.default=r},896:function(t,e,a){"use strict";a.r(e);var n=a(206),r=a.n(n),s=a(14),i=a.n(s),u=a(13),l=a.n(u),o=a(10),c=a.n(o),f=a(15),d=a.n(f),m=a(16),p=a.n(m),b=a(8),v=a.n(b),h=a(7),y=a.n(h),g=a(0),x=a.n(g),E=a(1),w=a.n(E),N=a(76),S=a(68),O=a(961),j=a(983),P=a(87),R=a(36),B=a.n(R),_=a(63),M=a(1292),k=a.n(M),C=a(106),D=a(1042),T=a(1078),U=a(207),Y=a(143),I=a(368),q=a(146),A=a(158),F=a(37),G=a(201);a(2863);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=v()(t);if(e){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return p()(this,a)}}var Q=B()("isle:number-survey"),V=Object(_.default)("number-survey"),z=function(t){d()(a,t);var e=J(a);function a(t){var n;return i()(this,a),n=e.call(this,t),y()(c()(n),"submitQuestion",(function(){var t=n.context;t.log({id:n.id,type:G.NUMBER_SURVEY_SUBMISSION,value:n.state.value,anonymous:n.props.anonymous},"members"),n.setState({submitted:!0}),t.addNotification({title:"Submitted",message:"Your answer has been submitted.",level:"success"}),n.props.onSubmit(n.state.value)})),y()(c()(n),"onData",(function(t){Q("NumberSurvey is receiving data: "+JSON.stringify(t));var e=Object(D.default)(t),a=Object(T.default)(t);n.setState({data:t,avg:e,sd:a})})),n.id=t.id||V(t),n.state={data:[],submitted:!1,value:null},n}return l()(a,[{key:"renderChart",value:function(){var t=this.state.data;return k()(t)?x.a.createElement("h3",null,"No responses yet"):x.a.createElement(I.default,{data:[{x:this.state.data,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,a=this.state.submitted&&!e.allowMultipleAnswers;return x.a.createElement(Y.default,{user:!0,banner:x.a.createElement("h2",null,"Please sign in...")},x.a.createElement(P.default,{id:this.id,style:this.props.style},x.a.createElement(P.default.Body,{style:{overflowY:"auto"}},x.a.createElement(j.default,null,x.a.createElement(O.default,null,x.a.createElement(S.default,{md:6},x.a.createElement(P.default,{className:"number-survey",body:!0},x.a.createElement(P.default.Title,{as:"h5"},e.question),x.a.createElement("label",{htmlFor:"number-survey-input-".concat(this.id)},"Your answer:"),x.a.createElement(U.default,r()({},e,{inline:!0,id:"number-survey-input-".concat(this.id),disabled:a,onChange:function(e){t.setState({value:e})}})),x.a.createElement(N.default,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:a},a?"Submitted":"Submit"))),x.a.createElement(S.default,{md:6},x.a.createElement(A.default,{for:[this.id],onData:this.onData}),this.renderChart(),Object(C.isPrimitive)(this.state.avg)&&Object(C.isPrimitive)(this.state.sd)?x.a.createElement("p",null,"The average is ",this.state.avg.toFixed(3)," (SD: ",this.state.sd.toFixed(3),")."):null))),x.a.createElement(q.default,{buttonLabel:"Responses",id:this.id,info:G.NUMBER_SURVEY_SUBMISSION}))))}}]),a}(g.Component);z.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,step:"any",style:{},onSubmit:function(){}},z.propTypes={question:w.a.oneOfType([w.a.string,w.a.node]),allowMultipleAnswers:w.a.bool,anonymous:w.a.bool,step:w.a.oneOfType([w.a.number,w.a.string]),style:w.a.object,onSubmit:w.a.func},z.contextType=F.default,e.default=z},961:function(t,e,a){"use strict";a.r(e);var n=a(5),r=a(11),s=a(12),i=a.n(s),u=a(0),l=a.n(u),o=a(17),c=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(t,e){var a=t.bsPrefix,s=t.className,u=t.noGutters,f=t.as,d=void 0===f?"div":f,m=Object(r.default)(t,["bsPrefix","className","noGutters","as"]),p=Object(o.useBootstrapPrefix)(a,"row"),b=p+"-cols",v=[];return c.forEach((function(t){var e,a=m[t];delete m[t];var n="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&v.push(""+b+n+"-"+e)})),l.a.createElement(d,Object(n.default)({ref:e},m,{className:i.a.apply(void 0,[s,p,u&&"no-gutters"].concat(v))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},e.default=f},983:function(t,e,a){"use strict";a.r(e);var n=a(5),r=a(11),s=a(12),i=a.n(s),u=a(0),l=a.n(u),o=a(17),c=l.a.forwardRef((function(t,e){var a=t.bsPrefix,s=t.fluid,u=t.as,c=void 0===u?"div":u,f=t.className,d=Object(r.default)(t,["bsPrefix","fluid","as","className"]),m=Object(o.useBootstrapPrefix)(a,"container"),p="string"==typeof s?"-"+s:"-fluid";return l.a.createElement(c,Object(n.default)({ref:e},d,{className:i()(f,s?""+m+p:m)}))}));c.displayName="Container",c.defaultProps={fluid:!1},e.default=c}}]);