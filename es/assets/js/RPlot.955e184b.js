(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{1149:function(t,e,n){"use strict";e.a=function(t){var e=document.createElement("div");e.innerHTML=t,e.style.position="fixed",e.style.opacity=0,e.style.pointerEvents="none",document.body.appendChild(e),window.getSelection().removeAllRanges();var n=document.createRange();n.selectNode(e),window.getSelection().addRange(n),document.execCommand("copy"),document.body.removeChild(e)}},1571:function(t,e,n){"use strict";var o=n(448),a=n.n(o);e.a=function(t,e,n){var o=n.config.rshell;o&&o.libraries&&(t=t.concat(o.libraries));var i=function(t){return t.map((function(t){return"library("+t+");"})).join(" ")}(t);return o&&o.global&&(i+=o.global+"\n"),e=a()(e)?e.join("\n"):e,i+=e+="\n"}},3942:function(t,e,n){"use strict";n.r(e);n(421);var o=n(513),a=n.n(o),i=n(708),r=n.n(i),s=n(404),l=n.n(s),c=n(412),p=n.n(c),u=n(416),d=n.n(u),f=n(425),h=n.n(f),g=n(418),m=n.n(g),v=n(419),y=n.n(v),b=n(417),w=n.n(b),R=n(410),k=n.n(R),P=n(0),j=n.n(P),C=(n(402),n(4088)),D=n(3914),x=n.n(D),N=n(3936),O=n.n(N),S=n(606),T=n.n(S),L=n(1571),U=n(1188),E=n(1123),B=n(465),H=n(1149),J=n(423),M=n(445);n(349);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=w()(t);if(e){var a=w()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return y()(this,n)}}function F(t){var e,n=t.id,o=t.meta,a=t.plot;return o?(o=O()(o,(function(t,e){return T()(e)})),o=x.a.dump(o),e='<img src="'.concat(a,'" style="display: block; margin: 0 auto;" data-plot-id="').concat(n,'" data-plot-meta="').concat(o,'"></img>')):e='<img src="'.concat(a,'" alt="R Plot" style="display: block; margin: 0 auto;" />'),e}Object(J.a)("R");var q=l()("span",{}),z=function(t){m()(n,t);var e=A(n);function n(t){var o;return p()(this,n),o=e.call(this,t),k()(h()(o),"savePlot",(function(t,e,n){t?o.props.onDone(t):o.setState({plotURL:e,plot:n,waiting:!1},(function(){o.props.onDone(null,e,n)}))})),o.state={plotURL:null,plot:null,last:"",waiting:!1},o}return d()(n,[{key:"componentDidMount",value:function(){this.getPlot()}},{key:"componentDidUpdate",value:function(){this.getPlot()}},{key:"getPlot",value:function(){if(this.props.code!==this.state.last){this.setState({waiting:!0,last:this.props.code});var t=this.context,e=Object(L.a)(this.props.libraries,this.props.prependCode,t)+this.props.code;t.getRPlot(e,this.props.fileType,this.savePlot)}}},{key:"render",value:function(){var t=this,e=null;this.props.draggable&&(e=l()("button",{className:"rplot-draggable-bar",draggable:!0,onDragStart:function(e){var n=F({id:t.id,meta:t.props.meta,plot:t.state.plot});e.dataTransfer.setData("text/html",n)},onClick:function(){var e=F({id:t.id,meta:t.props.meta,plot:t.state.plot});Object(H.a)(e)}},void 0,this.props.t("drag-plot")));var n=this.props,o=n.className,i=r()(n,["className"]);return l()("div",{className:"rplot ".concat(o),style:{minHeight:128,cursor:"pointer"}},void 0,l()(U.a,{running:this.state.waiting,width:256,height:128}),this.state.waiting?q:l()(P.Fragment,{},void 0,e,j.a.createElement(E.a,a()({src:this.state.plotURL,body:this.state.plot,title:this.props.t("r-plot")},i))))}}]),n}(P.Component);z.defaultProps={code:"",width:600,height:"auto",draggable:!1,fileType:"svg",libraries:[],prependCode:"",meta:null,className:"",onDone:function(){}},z.contextType=B.a,e.default=Object(C.a)("R")(Object(M.a)(z))}}]);