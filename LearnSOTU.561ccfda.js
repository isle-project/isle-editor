(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{6175:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=6175},6729:function(t,e,n){"use strict";n.r(e);n(382),n(369),n(385),n(502);var a=n(367),o=n.n(a),r=n(373),i=n.n(r),s=n(375),c=n.n(s),u=n(390),l=n.n(u),d=n(379),f=n.n(d),h=n(380),v=n.n(h),p=n(377),m=n.n(p),y=n(371),g=n.n(y),b=n(0),x=(n(359),n(6674)),w=n(421),k=n.n(w),S=n(861),O=n.n(S),q=n(5931),C=n.n(q),D=n(433),R=n.n(D),T=n(460),U=n(436),W=n(495),j=n(1859),E=n(497),L=n(677),V=n(598),B=n(1613),F=n(811),I=n(392);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=m()(t);if(e){var o=m()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return v()(this,n)}}Object(I.a)("LearnSOTU");var M=k()("isle:learn-sotu"),N=function(t){f()(a,t);var e=J(a);function a(t){var n;return i()(this,a),n=e.call(this,t),g()(l()(n),"getYear",(function(t){return n.state.tdm.years[t]})),g()(l()(n),"handleVennClick",(function(t){for(var e=t.freqs,a=[],o=0;o<e.length;o++)if(e[o].docIndices){var r=e[o].docIndices.map(n.getYear);O()(r);var i=r.map((function(t){return 1}));a.push({x:r,y:i,base:o,type:"bar",name:t.words[o],hoverinfo:"x"})}n.setState({timeseries:a,vennWords:t.words})})),n.state={vennWords:[],timeseries:[],speech:{},tdm:null},n}return c()(a,[{key:"componentDidMount",value:function(){var t=this;n.e(344).then(n.t.bind(null,6553,3)).then((function(e){M("Successfully loaded fonts..."),t.setState({tdm:e.default})})).catch((function(t){M("Encountered an error while loading fonts: "+t.message)}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.vennWords,a=e.timeseries,r=e.tdm,i=this.props.t,s=R()(this.props.questions);return o()(b.Fragment,{},void 0,o()(T.a,{},void 0,o()(U.a,{},void 0,o()(W.a,{md:8-(s?0:2)},void 0,s?o()(B.a,{title:i("questions"),height:300,style:{paddingBottom:0}},void 0,this.props.questions):null,n.length>0?o()(V.a,{header:"".concat(n.join(", ")," over Time")},void 0,o()(L.a,{data:a,layout:{barmode:"stack",yaxis:{fixedrange:!0,ticks:"",showticklabels:!1},xaxis:{fixedrange:!0}},removeButtons:!0,draggable:!1})):null),o()(W.a,{md:4+(s?0:2)},void 0,r?o()(j.a,{tdm:r.tdm,vocabulary:r.vocabulary,nTexts:120,height:250,width:350,onClick:this.handleVennClick}):null))),o()(F.a,{autoUpdate:!0,autoStart:!0,maxWidth:900,title:i("state-of-the-union-addresses"),onGenerate:function(e){if(1933===e)return t.setState({speech:{name:i("not-available"),text:i("not-available"),party:i("not-available")}});var n=C()({year:e});t.setState({speech:n[0]})}},void 0,o()(E.b,{legend:i("year"),min:1900,max:2018,defaultValue:2018,step:1}),o()(T.a,{},void 0,o()("h4",{},void 0,i("president")," ",this.state.speech.name,", ",this.state.speech.party," ",i("party")),o()("h4",{},void 0,i("speech")),o()(V.a,{style:{height:400,overflow:"scroll",fontSize:"14px"}},void 0,this.state.speech.text))))}}]),a}(b.Component);N.defaultProps={questions:null},e.default=Object(x.a)("LearnSOTU")(N)}}]);