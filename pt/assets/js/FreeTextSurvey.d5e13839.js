(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{3734:function(t,e,n){"use strict";n.r(e);n(421);var a=n(404),i=n.n(a),s=n(412),o=n.n(s),r=n(416),u=n.n(r),l=n(425),c=n.n(l),d=n(418),v=n.n(d),f=n(419),p=n.n(f),h=n(417),m=n.n(h),b=n(410),y=n.n(b),w=(n(511),n(0)),g=(n(402),n(4088)),x=n(431),N=n(473),S=n(483),k=n(508),q=n(467),O=n(4796),R=n(528),C=n(451),j=n.n(C),A=n(1110),B=n.n(A),T=n(3735),D=n.n(T),J=n(1555),Q=n.n(J),F=n(3737),M=n.n(F),P=n(612),z=n(934),L=n(707),Y=n(818),E=n(1036),G=n(465),H=n(471),I=n(423),K=n(445);n(321);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=m()(t);if(e){var i=m()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return p()(this,n)}}Object(I.a)("Survey");var V=j()("isle:free-text-survey"),W=Object(P.a)("free-text-survey");var X=function(t){v()(n,t);var e=U(n);function n(t){var a;return o()(this,n),a=e.call(this,t),y()(c()(a),"submitQuestion",(function(){var t=a.props.t,e=a.context,n=function(t){t=Q()(t);for(var e=M()(t),n=0;n<O.length;n++)for(var a=0;a<e.length;a++)if(e[a]===O[n])return O[n];return null}(a.state.value);n?e.addNotification({title:t("action-required"),message:t("offensive-word",{w:n}),level:"warning"}):(e.log({id:a.id,type:H.Ac,value:a.state.value,anonymous:a.props.anonymous},"members"),a.setState({submitted:!0}),e.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),a.props.onSubmit(a.state.value))})),y()(c()(a),"onData",(function(t){V("FreeTextQuestion is receiving data: "+JSON.stringify(t));var e,n=D()(t),s=n.map((function(t){return{x:t[0],y:t[1]}})),o=a.props.t;e=i()("table",{className:"table table-bordered"},void 0,i()("tr",{},void 0,i()("th",{},void 0,o("category")),i()("th",{},void 0,o("count")),i()("th",{},void 0,o("relative-frequency"))),n.map((function(t,e){return i()("tr",{},e,t.map((function(t,e){return 2===e&&(t=t.toFixed(3)),i()("td",{},e,t)})))}))),a.setState({data:s,freqTable:e})})),a.id=t.id||W(t),a.state={data:[],submitted:!1,value:null},a}return u()(n,[{key:"renderChart",value:function(){return B()(this.state.data)?i()("h3",{},void 0,this.props.t("no-responses-yet")):i()(R.a,{data:[{x:this.state.data.map((function(t){return t.x})),y:this.state.data.map((function(t){return t.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,n=e.t,a=this.state.submitted&&!e.allowMultipleAnswers;return i()(L.a,{user:!0,banner:i()("h2",{},void 0,n("sign-in"))},void 0,i()(N.a,{id:this.id,className:this.props.className,style:this.props.style},void 0,i()(N.a.Body,{style:{overflowY:"auto"}},void 0,i()(S.a,{},void 0,i()(q.a,{},void 0,i()(k.a,{md:6},void 0,i()(N.a,{className:"free-text-survey",body:!0},void 0,i()("label",{},void 0,e.question),i()(z.a,{value:this.state.value,inline:!0,disabled:a,onChange:function(e){t.setState({value:e})},rows:this.props.rows}),i()(x.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:a},void 0,n(a?"submitted":"submit")))),i()(k.a,{md:6},void 0,i()(E.a,{for:[this.id],onData:this.onData}),this.renderChart(),this.state.freqTable))),i()(Y.a,{buttonLabel:n("Responses"),id:this.id,info:H.Ac}))))}}]),n}(w.Component);X.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,rows:4,className:"",style:{},onSubmit:function(){}},X.contextType=G.a,e.default=Object(g.a)("Survey")(Object(K.a)(X))}}]);