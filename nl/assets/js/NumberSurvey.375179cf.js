(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{3811:function(t,e,a){"use strict";a.r(e);a(423);var s=a(515),i=a.n(s),n=a(406),r=a.n(n),o=a(414),u=a.n(o),c=a(418),l=a.n(c),d=a(427),v=a.n(d),f=a(420),b=a.n(f),m=a(421),p=a.n(m),h=a(419),y=a.n(h),w=a(413),O=a.n(w),g=a(0),j=a.n(g),x=a(4097),N=(a(404),a(433)),P=a(511),S=a(469),R=a(485),k=a(475),C=a(453),E=a.n(C),B=a(609),D=a(1113),F=a.n(D),G=a(434),J=a(661),q=a(739),A=a(517),M=a(709),Q=a(531),T=a(821),z=a(1038),L=a(467),Y=a(473),H=a(425),I=a(448);a(338);function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=y()(t);if(e){var i=y()(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return p()(this,a)}}Object(H.a)("Survey");var U=E()("isle:number-survey"),V=Object(B.a)("number-survey"),W=function(t){b()(a,t);var e=K(a);function a(t){var s;return u()(this,a),s=e.call(this,t),O()(v()(s),"submitQuestion",(function(){var t=s.props.t,e=s.context;e.log({id:s.id,type:Y.Eb,value:s.state.value,anonymous:s.props.anonymous},"members"),s.setState({submitted:!0}),e.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),s.props.onSubmit(s.state.value)})),O()(v()(s),"onData",(function(t){U("NumberSurvey is receiving data: "+JSON.stringify(t));var e=Object(J.a)(t),a=Object(q.a)(t);s.setState({data:t,avg:e,sd:a})})),s.id=t.id||V(t),s.state={data:[],submitted:!1,value:null},s}return l()(a,[{key:"renderChart",value:function(){var t=this.props.t,e=this.state.data;return F()(e)?r()("h3",{},void 0,t("no-responses-yet")):r()(Q.a,{data:[{x:this.state.data,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,a=e.t,s=this.state.submitted&&!e.allowMultipleAnswers;return r()(M.a,{user:!0,banner:r()("h2",{},void 0,a("sign-in"))},void 0,r()(k.a,{id:this.id,style:this.props.style},void 0,r()(k.a.Body,{style:{overflowY:"auto"}},void 0,r()(R.a,{},void 0,r()(S.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{className:"number-survey",body:!0},void 0,r()(k.a.Title,{as:"h5"},void 0,e.question),r()("label",{htmlFor:"number-survey-input-".concat(this.id)},void 0,a("your-answer"),":"),j.a.createElement(A.b,i()({},e,{inline:!0,id:"number-survey-input-".concat(this.id),disabled:s,onChange:function(e){t.setState({value:e})}})),r()(N.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:s},void 0,a(s?"submitted":"submit")))),r()(P.a,{md:6},void 0,r()(z.a,{for:[this.id],onData:this.onData}),this.renderChart(),Object(G.isPrimitive)(this.state.avg)&&Object(G.isPrimitive)(this.state.sd)?r()("p",{},void 0,a("average-is")," ",this.state.avg.toFixed(3)," (","SD",": ",this.state.sd.toFixed(3),")."):null))),r()(T.a,{buttonLabel:a("responses"),id:this.id,info:Y.Eb}))))}}]),a}(g.Component);W.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,step:"any",style:{},onSubmit:function(){}},W.contextType=L.a,e.default=Object(x.a)("Survey")(Object(I.a)(W))},469:function(t,e,a){"use strict";var s=a(407),i=a(409),n=a(410),r=a.n(n),o=a(0),u=a.n(o),c=a(415),l=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(t,e){var a=t.bsPrefix,n=t.className,o=t.noGutters,d=t.as,v=void 0===d?"div":d,f=Object(i.a)(t,["bsPrefix","className","noGutters","as"]),b=Object(c.a)(a,"row"),m=b+"-cols",p=[];return l.forEach((function(t){var e,a=f[t];delete f[t];var s="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&p.push(""+m+s+"-"+e)})),u.a.createElement(v,Object(s.a)({ref:e},f,{className:r.a.apply(void 0,[n,b,o&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},e.a=d},485:function(t,e,a){"use strict";var s=a(407),i=a(409),n=a(410),r=a.n(n),o=a(0),u=a.n(o),c=a(415),l=u.a.forwardRef((function(t,e){var a=t.bsPrefix,n=t.fluid,o=t.as,l=void 0===o?"div":o,d=t.className,v=Object(i.a)(t,["bsPrefix","fluid","as","className"]),f=Object(c.a)(a,"container"),b="string"==typeof n?"-"+n:"-fluid";return u.a.createElement(l,Object(s.a)({ref:e},v,{className:r()(d,n?""+f+b:f)}))}));l.displayName="Container",l.defaultProps={fluid:!1},e.a=l}}]);