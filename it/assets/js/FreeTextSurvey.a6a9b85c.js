(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{3743:function(t,e,n){"use strict";n.r(e);n(423);var a=n(406),i=n.n(a),s=n(414),o=n.n(s),r=n(418),u=n.n(r),l=n(427),c=n.n(l),d=n(420),v=n.n(d),f=n(421),p=n.n(f),h=n(419),m=n.n(h),b=n(413),y=n.n(b),w=(n(502),n(0)),g=(n(404),n(4097)),x=n(433),N=n(475),S=n(485),k=n(511),q=n(469),O=n(4805),R=n(531),C=n(453),j=n.n(C),A=n(1113),B=n.n(A),T=n(3744),D=n.n(T),J=n(1559),Q=n.n(J),F=n(3746),M=n.n(F),P=n(609),z=n(936),L=n(709),Y=n(821),E=n(1038),G=n(467),H=n(473),I=n(425),K=n(448);n(323);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=m()(t);if(e){var i=m()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return p()(this,n)}}Object(I.a)("Survey");var V=j()("isle:free-text-survey"),W=Object(P.a)("free-text-survey");var X=function(t){v()(n,t);var e=U(n);function n(t){var a;return o()(this,n),a=e.call(this,t),y()(c()(a),"submitQuestion",(function(){var t=a.props.t,e=a.context,n=function(t){t=Q()(t);for(var e=M()(t),n=0;n<O.length;n++)for(var a=0;a<e.length;a++)if(e[a]===O[n])return O[n];return null}(a.state.value);n?e.addNotification({title:t("action-required"),message:t("offensive-word",{w:n}),level:"warning"}):(e.log({id:a.id,type:H.Ac,value:a.state.value,anonymous:a.props.anonymous},"members"),a.setState({submitted:!0}),e.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),a.props.onSubmit(a.state.value))})),y()(c()(a),"onData",(function(t){V("FreeTextQuestion is receiving data: "+JSON.stringify(t));var e,n=D()(t),s=n.map((function(t){return{x:t[0],y:t[1]}})),o=a.props.t;e=i()("table",{className:"table table-bordered"},void 0,i()("tr",{},void 0,i()("th",{},void 0,o("category")),i()("th",{},void 0,o("count")),i()("th",{},void 0,o("relative-frequency"))),n.map((function(t,e){return i()("tr",{},e,t.map((function(t,e){return 2===e&&(t=t.toFixed(3)),i()("td",{},e,t)})))}))),a.setState({data:s,freqTable:e})})),a.id=t.id||W(t),a.state={data:[],submitted:!1,value:null},a}return u()(n,[{key:"renderChart",value:function(){return B()(this.state.data)?i()("h3",{},void 0,this.props.t("no-responses-yet")):i()(R.a,{data:[{x:this.state.data.map((function(t){return t.x})),y:this.state.data.map((function(t){return t.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,n=e.t,a=this.state.submitted&&!e.allowMultipleAnswers;return i()(L.a,{user:!0,banner:i()("h2",{},void 0,n("sign-in"))},void 0,i()(N.a,{id:this.id,className:this.props.className,style:this.props.style},void 0,i()(N.a.Body,{style:{overflowY:"auto"}},void 0,i()(S.a,{},void 0,i()(q.a,{},void 0,i()(k.a,{md:6},void 0,i()(N.a,{className:"free-text-survey",body:!0},void 0,i()("label",{},void 0,e.question),i()(z.a,{value:this.state.value,inline:!0,disabled:a,onChange:function(e){t.setState({value:e})},rows:this.props.rows}),i()(x.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:a},void 0,n(a?"submitted":"submit")))),i()(k.a,{md:6},void 0,i()(E.a,{for:[this.id],onData:this.onData}),this.renderChart(),this.state.freqTable))),i()(Y.a,{buttonLabel:n("Responses"),id:this.id,info:H.Ac}))))}}]),n}(w.Component);X.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,rows:4,className:"",style:{},onSubmit:function(){}},X.contextType=G.a,e.default=Object(g.a)("Survey")(Object(K.a)(X))}}]);