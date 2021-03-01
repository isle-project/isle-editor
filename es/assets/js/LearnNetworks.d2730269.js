(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{469:function(e,t,a){"use strict";var r=a(407),n=a(409),o=a(410),s=a.n(o),i=a(0),l=a.n(i),d=a(415),u=["xl","lg","md","sm","xs"],c=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.noGutters,c=e.as,f=void 0===c?"div":c,h=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(d.a)(a,"row"),p=v+"-cols",m=[];return u.forEach((function(e){var t,a=h[e];delete h[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&m.push(""+p+r+"-"+t)})),l.a.createElement(f,Object(r.a)({ref:t},h,{className:s.a.apply(void 0,[o,v,i&&"no-gutters"].concat(m))}))}));c.displayName="Row",c.defaultProps={noGutters:!1},t.a=c},485:function(e,t,a){"use strict";var r=a(407),n=a(409),o=a(410),s=a.n(o),i=a(0),l=a.n(i),d=a(415),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,i=e.as,u=void 0===i?"div":i,c=e.className,f=Object(n.a)(e,["bsPrefix","fluid","as","className"]),h=Object(d.a)(a,"container"),v="string"==typeof o?"-"+o:"-fluid";return l.a.createElement(u,Object(r.a)({ref:t},f,{className:s()(c,o?""+h+v:h)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},6526:function(e,t,a){"use strict";a.r(t);a(423);var r=a(406),n=a.n(r),o=a(414),s=a.n(o),i=a(418),l=a.n(i),d=a(427),u=a.n(d),c=a(420),f=a.n(c),h=a(421),v=a.n(h),p=a(419),m=a.n(p),w=a(413),y=a.n(w),g=(a(890),a(753),a(0)),b=(a(404),a(4098)),x=a(4097),N=a(485),k=a(469),P=a(511),j=a(755),O=a.n(j),R=a(1205),T=a.n(R),E=a(723),G=a(688),B=a(517),L=a(573),A=a(1617),C=a(531),I=a(516),J=a(425);function K(e,t,a,r){for(var n=0,o=0;o<e.length;o++){var s=e[o];s.source===t&&s.target===a&&(n+=1),s.source===t&&s.target===r&&(n+=1),s.source===a&&s.target===r&&(n+=1)}return n}var V=function(e,t){for(var a=0,r=0,n=0;n<e.length;n++)for(var o=0;o<n;o++)for(var s=0;s<o;s++){var i=K(t,n,o,s);2===i&&(r+=1),3===i&&(r+=3,a+=1)}return 3*a/r};function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=m()(e);if(t){var n=m()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return v()(this,a)}}Object(J.a)("LearnNetworks");var S=n()("p",{},void 0,n()(b.a,{i18nKey:"intro-2",ns:"LearnNetworks"},void 0,"Let us consider one of the simplest available network models. In the Erd\u0151s\u2013R\xe9nyi model, there is a fixed probability ",n()(I.a,{raw:"p"})," that an edge exists between any two nodes. We also assume that whether or not an edge exists between two nodes is independent of whether or not other edges exist.")),q=n()("p",{},void 0,n()(b.a,{i18nKey:"intro-3",ns:"LearnNetworks"},void 0,"In this model, if we have ",n()(I.a,{raw:"m"})," nodes, each node can be connected to ",n()(I.a,{raw:"m-1"})," other nodes.  The number of edges attached to each node (the degree) is then ",n()(I.a,{raw:"\\text{Binomial}(m-1,p)"}),".")),z=n()(G.a,{id:"networks"}),D=function(e){f()(a,e);var t=W(a);function a(e){var r;s()(this,a),r=t.call(this,e),y()(u()(r),"handleGenerate",(function(e,t){for(var a=new Array(e),n=0;n<a.length;n++)a[n]={id:n};for(var o=[],s=0;s<a.length;s++)for(var i=0;i<s;i++)T()()<t&&o.push({source:s,target:i});var l,d,u={network:{links:o,nodes:a}},c=r.state.numNodes,f=r.state.edgeProb;e!==c||t!==f?(c=e,d=[],l=new Array(.5*e*(e-1)+1).fill(0)):(l=r.state.tally,d=r.state.transitivities.slice()),d.push(V(a,o)),l[o.length]+=1,u.numNodes=c,u.edgeProb=t,u.tally=l,u.transitivities=d,r.setState(u)}));return r.state={network:{links:[],nodes:[]},numNodes:10,edgeProb:.5,transitivities:[],tally:new Array(46).fill(0)},r}return l()(a,[{key:"renderTallyPlot",value:function(){return this.props.showEdgeChart?n()(C.a,{removeButtons:!0,layout:{title:this.props.t("number-of-edges-per-generated-network"),height:250},data:[{x:O()(0,this.state.tally.length,1),y:this.state.tally,type:"bar"}]}):null}},{key:"renderTransitivities",value:function(){if(!this.props.showTransitivities)return null;var e=[{x:this.state.transitivities,type:"histogram"}];return n()(C.a,{removeButtons:!0,layout:{title:this.props.t("global-clustering-coefficient"),height:250},data:e})}},{key:"render",value:function(){var e=this.props.t;return n()(N.a,{style:{maxWidth:1200,margin:"0 auto"}},void 0,n()(k.a,{},void 0,n()(P.a,{md:6},void 0,n()(E.a,{id:"networks-dashboard",onGenerate:this.handleGenerate},void 0,n()("p",{},void 0,e("intro-1")),S,q,n()(B.b,{legend:"m (".concat(e("number-of-nodes"),")"),defaultValue:10,step:1,min:0,max:this.props.maxNumNodes}),n()(B.b,{legend:"p (".concat(e("edge-probability"),")"),defaultValue:.5,step:.01,max:1,min:0}))),n()(P.a,{md:6},void 0,n()(L.a,{},void 0,n()(A.a,{width:500,height:350,data:this.state.network}),this.renderTallyPlot(),this.renderTransitivities()),z)))}}]),a}(g.Component);D.defaultProps={maxNumNodes:30,showEdgeChart:!1,showTransitivities:!1};t.default=Object(x.a)("LearnNetworks")(D)},890:function(e,t,a){var r=a(497);r(r.P,"Array",{fill:a(904)}),a(838)("fill")}}]);