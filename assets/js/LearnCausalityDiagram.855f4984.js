/*! For license information please see LearnCausalityDiagram.855f4984.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{469:function(t,e,a){"use strict";var s=a(407),i=a(409),o=a(410),r=a.n(o),n=a(0),l=a.n(n),h=a(415),c=["xl","lg","md","sm","xs"],y=l.a.forwardRef((function(t,e){var a=t.bsPrefix,o=t.className,n=t.noGutters,y=t.as,p=void 0===y?"div":y,d=Object(i.a)(t,["bsPrefix","className","noGutters","as"]),x=Object(h.a)(a,"row"),u=x+"-cols",b=[];return c.forEach((function(t){var e,a=d[t];delete d[t];var s="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+u+s+"-"+e)})),l.a.createElement(p,Object(s.a)({ref:e},d,{className:r.a.apply(void 0,[o,x,n&&"no-gutters"].concat(b))}))}));y.displayName="Row",y.defaultProps={noGutters:!1},e.a=y},485:function(t,e,a){"use strict";var s=a(407),i=a(409),o=a(410),r=a.n(o),n=a(0),l=a.n(n),h=a(415),c=l.a.forwardRef((function(t,e){var a=t.bsPrefix,o=t.fluid,n=t.as,c=void 0===n?"div":n,y=t.className,p=Object(i.a)(t,["bsPrefix","fluid","as","className"]),d=Object(h.a)(a,"container"),x="string"==typeof o?"-"+o:"-fluid";return l.a.createElement(c,Object(s.a)({ref:e},p,{className:r()(y,o?""+d+x:d)}))}));c.displayName="Container",c.defaultProps={fluid:!1},e.a=c},4881:function(t,e,a){"use strict";var s=a(4882);t.exports=s},4882:function(t,e,a){"use strict";var s=a(422),i=a(454);t.exports=function(t){return s(t)?t:1/(1+i(-t))}},6443:function(t,e,a){"use strict";a.r(e);a(428),a(417),a(423);var s=a(406),i=a.n(s),o=a(414),r=a.n(o),n=a(418),l=a.n(n),h=a(420),c=a.n(h),y=a(421),p=a.n(y),d=a(419),x=a.n(d),u=a(0),b=(a(404),a(4097)),f=a(485),g=a(511),w=a(469),m=a(4881),v=a.n(m),z=a(531),k=a(723),D=a(649),N=a(606),E=a(425);function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=x()(t);if(e){var i=x()(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return p()(this,a)}}Object(E.a)("LearnCausalityDiagram");var R=function(t){c()(a,t);var e=F(a);function a(t){var s;return r()(this,a),(s=e.call(this,t)).state={alpha0:0,beta0:-2,ea0a1:null,eb0b2:null,eb0b1b2:null,ea0:.5,eb0:.11920292202211755,obsLHeight:null,obsRHeight:null,randomized:!1,alpha1:1},s}return l()(a,[{key:"renderCausalityDiagram",value:function(){return i()(z.a,{removeButtons:!0,data:[],layout:{xaxis:{showgrid:!1,zeroline:!1,visible:!1,range:[0,10],fixedrange:!0},yaxis:{showgrid:!1,zeroline:!1,visible:!1,range:[0,6],fixedrange:!0},annotations:[{x:10,y:6,text:this.props.y,mode:"text",font:{size:22,color:"darkblue"},axref:"x",ayref:"y",ax:10,ay:6,textangle:45},{x:this.state.beta1>0?9.5:0,y:6,text:this.props.x,ax:0,ay:6,font:{size:22,color:"darkblue"},axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,textangle:320,showarrow:this.state.beta1>0},{x:this.state.beta2?10:5,y:this.state.beta2?5.5:2,text:this.props.z,textangle:0,ax:5,ay:2,font:{size:22,color:"darkblue"},axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,showarrow:this.state.beta2>0},{x:.5,y:5.5,textangle:0,ax:5,ay:2.2,text:"",axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,showarrow:this.state.alpha1>0}]}})}},{key:"renderSankeyDiagram",value:function(){return i()(z.a,{data:[{type:"sankey",orientation:"h",arrangement:"fixed",node:{pad:40,thickness:15,line:{color:"black",width:.5},label:[this.props.z,"No ".concat(this.props.z),this.props.x,"No ".concat(this.props.x),this.props.y,"No ".concat(this.props.y)],color:["#B1D0F0","#EEF19D","darkgrey","darkgrey","darkgrey","darkgrey"],x:[.1,.1,.5,.5,1,1],y:[.1,.9,.1,.9,.1,.9]},link:{source:[0,0,1,1,2,2,2,2,3,3,3,3],target:[2,3,2,3,4,4,5,5,4,4,5,5],value:[.4*this.state.ea0a1,.4*(1-this.state.ea0a1),.6*this.state.ea0,.6*(1-this.state.ea0),.6*this.state.eb0b1*this.state.ea0,.4*this.state.eb0b1b2*this.state.ea0a1,.6*(1-this.state.eb0b1)*this.state.ea0,.4*(1-this.state.eb0b1b2)*this.state.ea0a1,.6*this.state.eb0*(1-this.state.ea0),.4*this.state.eb0b2*(1-this.state.ea0a1),.6*(1-this.state.eb0)*(1-this.state.ea0),.4*(1-this.state.eb0b2)*(1-this.state.ea0a1)],color:["#B1D0F0","#B1D0F0","#EEF19D","#EEF19D","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0"]}}],layout:{font:{size:16}}})}},{key:"renderMosaicPlots",value:function(){return i()(w.a,{},void 0,i()(g.a,{},void 0,i()(z.a,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:this.props.z,autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.ea0a1,y0:this.state.eb0b1b2,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.ea0a1,x1:1,y0:this.state.eb0b2,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.ea0a1,y0:1,y1:this.state.eb0b1b2,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.ea0a1,x1:1,y0:1,y1:this.state.eb0b2,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})),i()(g.a,{},void 0,i()(z.a,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:"No ".concat(this.props.z),autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.ea0,y0:this.state.eb0b1,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.ea0,x1:1,y0:this.state.eb0,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.ea0,y0:1,y1:this.state.eb0b1,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.ea0,x1:1,y0:1,y1:this.state.eb0,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})),i()(g.a,{},void 0,i()(z.a,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:"Observed Relationship",autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.obsWidth,y0:this.state.obsLHeight,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.obsWidth,x1:1,y0:this.state.obsRHeight,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.obsWidth,y0:1,y1:this.state.obsLHeight,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.obsWidth,x1:1,y0:1,y1:this.state.obsRHeight,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})))}},{key:"render",value:function(){var t=this;return i()(f.a,{style:{backgroundColor:"white",border:"2px solid black",maxWidth:1600}},void 0,i()(w.a,{},void 0,i()(g.a,{sm:3,style:{height:"450px"}},void 0,i()(k.a,{autoUpdate:!0,onGenerate:function(e,a,s){var i=t.state,o=i.alpha0,r=i.beta0,n=i.ea0,l=i.eb0,h=i.alpha1,c=v()(o+h),y=.4*c+.6*n,p=v()(r+a),d=v()(r+a+s),x=v()(r+s),u=.6*p*n;u+=.4*d*c,u/=y;var b=.6*l*(1-n);b+=.4*x*(1-c),b/=1-y,t.setState({ea0a1:c,eb0b1b2:d,eb0b2:x,eb0b1:p,obsLHeight:u,obsRHeight:b,obsWidth:y,beta1:a,beta2:s})}},void 0,i()(N.a,{legend:"Randomized Assignment",defaultValue:this.state.randomized,onChange:function(e){t.setState({randomized:e,alpha1:e?0:1})}}),i()(D.a,{legend:i()("span",{},void 0,this.props.x," \u2192 ",this.props.y),defaultValue:1,min:0,max:5,step:"any",hideTooltip:!0,numberInputStyle:{display:"none"}}),i()(D.a,{legend:i()("span",{},void 0,this.props.z," \u2192 ",this.props.y),defaultValue:1,min:0,max:5,step:"any",hideTooltip:!0,numberInputStyle:{display:"none"}}),i()(D.a,{legend:i()("span",{},void 0,this.props.z," \u2192 ",this.props.x),defaultValue:this.state.alpha1,min:0,max:5,step:"any",hideTooltip:!0,disabled:this.state.randomized,onChange:function(e){t.setState({alpha1:e})},numberInputStyle:{display:"none"}}))),i()(g.a,{sm:3,style:{height:"450px"}},void 0,this.renderCausalityDiagram()),i()(g.a,{sm:6,style:{height:"450px"}},void 0,this.renderSankeyDiagram())),this.renderMosaicPlots())}}]),a}(u.Component);R.defaultProps={x:"Lights at Night",y:"Child Myopia",z:"Parental Myopia"},e.default=Object(b.a)("LearnCausalityDiagram")(R)}}]);