(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{467:function(t,e,s){"use strict";var r=s(405),i=s(407),n=s(408),o=s.n(n),a=s(0),u=s.n(a),l=s(413),p=["xl","lg","md","sm","xs"],c=u.a.forwardRef((function(t,e){var s=t.bsPrefix,n=t.className,a=t.noGutters,c=t.as,d=void 0===c?"div":c,f=Object(i.a)(t,["bsPrefix","className","noGutters","as"]),h=Object(l.a)(s,"row"),v=h+"-cols",g=[];return p.forEach((function(t){var e,s=f[t];delete f[t];var r="xs"!==t?"-"+t:"";null!=(e=null!=s&&"object"==typeof s?s.cols:s)&&g.push(""+v+r+"-"+e)})),u.a.createElement(d,Object(r.a)({ref:e},f,{className:o.a.apply(void 0,[n,h,a&&"no-gutters"].concat(g))}))}));c.displayName="Row",c.defaultProps={noGutters:!1},e.a=c},483:function(t,e,s){"use strict";var r=s(405),i=s(407),n=s(408),o=s.n(n),a=s(0),u=s.n(a),l=s(413),p=u.a.forwardRef((function(t,e){var s=t.bsPrefix,n=t.fluid,a=t.as,p=void 0===a?"div":a,c=t.className,d=Object(i.a)(t,["bsPrefix","fluid","as","className"]),f=Object(l.a)(s,"container"),h="string"==typeof n?"-"+n:"-fluid";return u.a.createElement(p,Object(r.a)({ref:e},d,{className:o()(c,n?""+f+h:f)}))}));p.displayName="Container",p.defaultProps={fluid:!1},e.a=p},6468:function(t,e,s){"use strict";s.r(e);s(426),s(415),s(421);var r=s(404),i=s.n(r),n=(s(889),s(412)),o=s.n(n),a=s(416),u=s.n(a),l=s(425),p=s.n(l),c=s(418),d=s.n(c),f=s(419),h=s.n(f),v=s(417),g=s.n(v),m=s(410),b=s.n(m),y=s(0),w=(s(402),s(451)),N=s.n(w),S=s(4088),O=s(473),x=s(508),P=s(467),R=s(431),j=s(483),A=s(1116),k=s.n(A),D=s(612),J=s(1605),C=s(707),H=s(818),E=s(1036),G=s(465),T=s(471),V=s(423);s(343);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,r=g()(t);if(e){var i=g()(this).constructor;s=Reflect.construct(r,arguments,i)}else s=r.apply(this,arguments);return h()(this,s)}}Object(V.a)("Survey");var M=N()("isle:proportions-survey"),Q=Object(D.a)("proportions-survey");var z=function(t){d()(s,t);var e=q(s);function s(t){var r;return o()(this,s),r=e.call(this,t),b()(p()(r),"submitQuestion",(function(){M("Sending the data: "+r.state.value);var t=r.context;t.log({id:r.id,type:T.Pb,value:JSON.stringify(r.state.value),anonymous:r.props.anonymous},"members"),r.setState({submitted:!0}),t.addNotification({title:r.props.t("submitted"),message:r.props.t("answer-submitted"),level:"success"}),r.props.onSubmit(r.state.value)})),b()(p()(r),"onData",(function(t){M("ProportionsSurvey is receiving data: "+JSON.stringify(t)),t=t[r.id],r.getAverage(t)})),r.id=t.id||Q(t),r.results=[],r.state={submitted:!1,value:null,resultValues:null,nResults:0},r}return u()(s,[{key:"getAverage",value:function(t){for(var e=new Array(t.length),s=0;s<t.length;s++)e[s]=JSON.parse(t[s]);for(var r=this.props.legends.length,i=new Array(r).fill(0),n=new Array(r).fill(0),o=0;o<e.length;o++)for(var a=0;a<e[o].length;a++)i[a]+=e[o][a];M("The sum is "+i);for(var u=0;u<r;u++)n[u]=i[u]/e.length;M("The mean is "+n),this.setState({resultValues:n,nResults:e.length})}},{key:"render",value:function(){var t=this,e=this.state.submitted&&!this.props.allowMultipleAnswers||this.props.disabled||k()(function(t){var e=0;if(!t)return e;for(var s=0;s<t.length;s++)e+=t[s];return e}(this.state.value),100)>.1;return i()(C.a,{user:!0,banner:i()("h2",{},void 0,this.props.t("sign-in"))},void 0,i()(j.a,{},void 0,i()(P.a,{},void 0,i()(x.a,{md:6},void 0,i()(O.a,{body:!0,className:"proportions-survey"},void 0,i()("h3",{},void 0,this.props.question),i()(J.a,{legends:this.props.legends,precision:this.props.precision,step:this.props.step,height:this.props.personalHeight,colors:this.props.colors,margin:this.props.margin,onChange:function(e){t.setState({value:e})}}),i()(R.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:e},void 0,this.props.t(e?"submitted":"submit")))),i()(x.a,{md:6},void 0,i()(O.a,{body:!0,className:"proportions-survey"},void 0,i()("h3",{},void 0,this.props.group),i()(E.a,{for:[this.id],onData:this.onData}),i()("h4",{},void 0,this.props.t("number-of-votes"),": ",this.state.nResults," "),i()(J.a,{legends:this.props.legends,precision:this.props.precision,step:this.props.step,height:this.props.groupHeight,colors:this.props.colors,disabled:!0,margin:this.props.margin,values:this.state.resultValues}))))),i()(H.a,{buttonLabel:this.props.t("responses"),id:this.id}))}}]),s}(y.Component);z.defaultProps={onSubmit:function(){},allowMultipleAnswers:!1,question:"",anonymous:!1,disabled:!1,legends:[],group:"group results",precision:2,step:.25,colors:null,personalHeight:200,groupHeight:100,margin:"40px"},z.contextType=G.a,e.default=Object(S.a)("Survey")(z)},889:function(t,e,s){var r=s(495);r(r.P,"Array",{fill:s(903)}),s(836)("fill")}}]);