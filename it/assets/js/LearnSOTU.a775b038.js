(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{5195:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=5195},6395:function(e,t,n){"use strict";n.r(t);n(421);var a=n(407),o=n.n(a),r=n(414),i=n.n(r),s=n(416),u=n.n(s),c=n(424),l=n.n(c),d=n(418),f=n.n(d),h=n(419),v=n.n(h),p=n(417),m=n.n(p),y=n(412),b=n.n(y),g=(n(428),n(482),n(0)),x=(n(404),n(4095)),w=n(450),k=n.n(w),S=n(711),O=n.n(S),q=n(4951),C=n.n(q),R=n(447),T=n.n(R),U=n(507),B=n(477),W=n(490),j=n(1495),D=n(487),E=n(504),L=n(518),V=n(1390),F=n(630),I=n(420);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return v()(this,n)}}Object(I.a)("LearnSOTU");var M=k()("isle:learn-sotu"),N=function(e){f()(a,e);var t=J(a);function a(e){var n;return i()(this,a),n=t.call(this,e),b()(l()(n),"getYear",(function(e){return n.state.tdm.years[e]})),b()(l()(n),"handleVennClick",(function(e){for(var t=e.freqs,a=[],o=0;o<t.length;o++)if(t[o].docIndices){var r=t[o].docIndices.map(n.getYear);O()(r);var i=r.map((function(e){return 1}));a.push({x:r,y:i,base:o,type:"bar",name:e.words[o],hoverinfo:"x"})}n.setState({timeseries:a,vennWords:e.words})})),n.state={vennWords:[],timeseries:[],speech:{},tdm:null},n}return u()(a,[{key:"componentDidMount",value:function(){var e=this;n.e(1296).then(n.t.bind(null,6164,3)).then((function(t){M("Successfully loaded fonts..."),e.setState({tdm:t.default})})).catch((function(e){M("Encountered an error while loading fonts: "+e.message)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.vennWords,a=t.timeseries,r=t.tdm,i=this.props.t,s=T()(this.props.questions);return o()(g.Fragment,{},void 0,o()(U.a,{},void 0,o()(B.a,{},void 0,o()(W.a,{md:8-(s?0:2)},void 0,s?o()(V.a,{title:i("questions"),height:300,style:{paddingBottom:0}},void 0,this.props.questions):null,n.length>0?o()(L.a,{header:"".concat(n.join(", ")," over Time")},void 0,o()(E.a,{data:a,layout:{barmode:"stack",yaxis:{fixedrange:!0,ticks:"",showticklabels:!1},xaxis:{fixedrange:!0}},removeButtons:!0,draggable:!1})):null),o()(W.a,{md:4+(s?0:2)},void 0,r?o()(j.a,{tdm:r.tdm,vocabulary:r.vocabulary,nTexts:120,height:250,width:350,onClick:this.handleVennClick}):null))),o()(F.a,{autoUpdate:!0,autoStart:!0,maxWidth:900,title:i("state-of-the-union-addresses"),onGenerate:function(t){if(1933===t)return e.setState({speech:{name:i("not-available"),text:i("not-available"),party:i("not-available")}});var n=C()({year:t});e.setState({speech:n[0]})}},void 0,o()(D.b,{legend:i("year"),min:1900,max:2018,defaultValue:2018,step:1}),o()(U.a,{},void 0,o()("h4",{},void 0,i("president")," ",this.state.speech.name,", ",this.state.speech.party," ",i("party")),o()("h4",{},void 0,i("speech")),o()(L.a,{style:{height:400,overflow:"scroll",fontSize:"14px"}},void 0,this.state.speech.text))))}}]),a}(g.Component);N.defaultProps={questions:null},t.default=Object(x.a)("LearnSOTU")(N)}}]);