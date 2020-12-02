/*! For license information please see dll.LearnCausalityDiagram.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[63],{1018:function(t,e,a){"use strict";var s=Math.ceil;t.exports=s},1044:function(t,e,a){"use strict";var s=a(1133);t.exports=s},1132:function(t,e,a){"use strict";var s=a(55),i=a(1044),r=a(40),o=a(27),n=a(1134),l=1.4426950408889634,c=1/(1<<28);t.exports=function(t){var e;return s(t)||t===o?t:t===r?0:t>709.782712893384?o:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<c?1+t:(e=i(t<0?l*t-.5:l*t+.5),n(t-.6931471803691238*e,1.9082149292705877e-10*e,e))}},1133:function(t,e,a){"use strict";var s=a(137),i=a(995);t.exports=function(t){return t<0?i(t):s(t)}},1134:function(t,e,a){"use strict";var s=a(376),i=a(1135);t.exports=function(t,e,a){var r,o,n;return n=(r=t-e)-(o=r*r)*i(o),s(1-(e-r*n/(2-n)-t),a)}},1135:function(t,e,a){"use strict";t.exports=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)}},2647:function(t,e,a){"use strict";var s=a(2648);t.exports=s},2648:function(t,e,a){"use strict";var s=a(55),i=a(953);t.exports=function(t){return s(t)?t:1/(1+i(-t))}},860:function(t,e,a){"use strict";a.r(e);var s=a(14),i=a.n(s),r=a(13),o=a.n(r),n=a(15),l=a.n(n),c=a(16),h=a.n(c),u=a(8),p=a.n(u),d=a(0),y=a.n(d),f=a(1),x=a.n(f),b=a(983),m=a(68),g=a(961),w=a(2647),v=a.n(w),E=a(368),z=a(372),k=a(214),D=a(210);function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=p()(t);if(e){var i=p()(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return h()(this,a)}}var F=function(t){l()(a,t);var e=N(a);function a(t){var s;return i()(this,a),(s=e.call(this,t)).state={alpha0:0,beta0:-2,ea0a1:null,eb0b2:null,eb0b1b2:null,ea0:.5,eb0:.11920292202211755,obsLHeight:null,obsRHeight:null,randomized:!1,alpha1:1},s}return o()(a,[{key:"renderCausalityDiagram",value:function(){return y.a.createElement(E.default,{removeButtons:!0,data:[],layout:{xaxis:{showgrid:!1,zeroline:!1,visible:!1,range:[0,10],fixedrange:!0},yaxis:{showgrid:!1,zeroline:!1,visible:!1,range:[0,6],fixedrange:!0},annotations:[{x:10,y:6,text:this.props.y,mode:"text",font:{size:22,color:"darkblue"},axref:"x",ayref:"y",ax:10,ay:6,textangle:45},{x:this.state.beta1>0?9.5:0,y:6,text:this.props.x,ax:0,ay:6,font:{size:22,color:"darkblue"},axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,textangle:320,showarrow:this.state.beta1>0},{x:this.state.beta2?10:5,y:this.state.beta2?5.5:2,text:this.props.z,textangle:0,ax:5,ay:2,font:{size:22,color:"darkblue"},axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,showarrow:this.state.beta2>0},{x:.5,y:5.5,textangle:0,ax:5,ay:2.2,text:"",axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,showarrow:this.state.alpha1>0}]}})}},{key:"renderSankeyDiagram",value:function(){return y.a.createElement(E.default,{data:[{type:"sankey",orientation:"h",arrangement:"fixed",node:{pad:40,thickness:15,line:{color:"black",width:.5},label:[this.props.z,"No ".concat(this.props.z),this.props.x,"No ".concat(this.props.x),this.props.y,"No ".concat(this.props.y)],color:["#B1D0F0","#EEF19D","darkgrey","darkgrey","darkgrey","darkgrey"],x:[.1,.1,.5,.5,1,1],y:[.1,.9,.1,.9,.1,.9]},link:{source:[0,0,1,1,2,2,2,2,3,3,3,3],target:[2,3,2,3,4,4,5,5,4,4,5,5],value:[.4*this.state.ea0a1,.4*(1-this.state.ea0a1),.6*this.state.ea0,.6*(1-this.state.ea0),.6*this.state.eb0b1*this.state.ea0,.4*this.state.eb0b1b2*this.state.ea0a1,.6*(1-this.state.eb0b1)*this.state.ea0,.4*(1-this.state.eb0b1b2)*this.state.ea0a1,.6*this.state.eb0*(1-this.state.ea0),.4*this.state.eb0b2*(1-this.state.ea0a1),.6*(1-this.state.eb0)*(1-this.state.ea0),.4*(1-this.state.eb0b2)*(1-this.state.ea0a1)],color:["#B1D0F0","#B1D0F0","#EEF19D","#EEF19D","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0"]}}],layout:{font:{size:16}}})}},{key:"renderMosaicPlots",value:function(){return y.a.createElement(g.default,null,y.a.createElement(m.default,{md:4},y.a.createElement(E.default,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:this.props.z,autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.ea0a1,y0:this.state.eb0b1b2,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.ea0a1,x1:1,y0:this.state.eb0b2,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.ea0a1,y0:1,y1:this.state.eb0b1b2,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.ea0a1,x1:1,y0:1,y1:this.state.eb0b2,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})),y.a.createElement(m.default,{md:4},y.a.createElement(E.default,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:"No ".concat(this.props.z),autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.ea0,y0:this.state.eb0b1,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.ea0,x1:1,y0:this.state.eb0,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.ea0,y0:1,y1:this.state.eb0b1,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.ea0,x1:1,y0:1,y1:this.state.eb0,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})),y.a.createElement(m.default,{md:4},y.a.createElement(E.default,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:"Observed Relationship",autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.obsWidth,y0:this.state.obsLHeight,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.obsWidth,x1:1,y0:this.state.obsRHeight,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.obsWidth,y0:1,y1:this.state.obsLHeight,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.obsWidth,x1:1,y0:1,y1:this.state.obsRHeight,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})))}},{key:"render",value:function(){var t=this;return y.a.createElement(b.default,{style:{backgroundColor:"white",border:"2px solid black"}},y.a.createElement(g.default,null,y.a.createElement(m.default,{md:3,style:{height:"450px"}},y.a.createElement(z.default,{autoUpdate:!0,onGenerate:function(e,a,s){var i=t.state,r=i.alpha0,o=i.beta0,n=i.ea0,l=i.eb0,c=i.alpha1,h=v()(r+c),u=.4*h+.6*n,p=v()(o+a),d=v()(o+a+s),y=v()(o+s),f=.6*p*n;f+=.4*d*h,f/=u;var x=.6*l*(1-n);x+=.4*y*(1-h),x/=1-u,t.setState({ea0a1:h,eb0b1b2:d,eb0b2:y,eb0b1:p,obsLHeight:f,obsRHeight:x,obsWidth:u,beta1:a,beta2:s})}},y.a.createElement(D.default,{legend:"Randomized Assignment",defaultValue:this.state.randomized,onChange:function(e){t.setState({randomized:e,alpha1:e?0:1})}}),y.a.createElement(k.default,{legend:y.a.createElement("span",null,this.props.x," → ",this.props.y),defaultValue:1,min:0,max:5,step:"any",hideTooltip:!0,numberInputStyle:{display:"none"}}),y.a.createElement(k.default,{legend:y.a.createElement("span",null,this.props.z," → ",this.props.y),defaultValue:1,min:0,max:5,step:"any",hideTooltip:!0,numberInputStyle:{display:"none"}}),y.a.createElement(k.default,{legend:y.a.createElement("span",null,this.props.z," → ",this.props.x),defaultValue:this.state.alpha1,min:0,max:5,step:"any",hideTooltip:!0,disabled:this.state.randomized,onChange:function(e){t.setState({alpha1:e})},numberInputStyle:{display:"none"}}))),y.a.createElement(m.default,{md:3,style:{height:"450px"}},this.renderCausalityDiagram()),y.a.createElement(m.default,{md:6,style:{height:"450px"}},this.renderSankeyDiagram())),this.renderMosaicPlots())}}]),a}(d.Component);F.defaultProps={x:"Lights at Night",y:"Child Myopia",z:"Parental Myopia"},F.propTypes={x:x.a.oneOfType([x.a.string,x.a.node]),y:x.a.oneOfType([x.a.string,x.a.node]),z:x.a.oneOfType([x.a.string,x.a.node])},e.default=F},953:function(t,e,a){"use strict";var s=a(1132);t.exports=s},961:function(t,e,a){"use strict";a.r(e);var s=a(5),i=a(11),r=a(12),o=a.n(r),n=a(0),l=a.n(n),c=a(17),h=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(t,e){var a=t.bsPrefix,r=t.className,n=t.noGutters,u=t.as,p=void 0===u?"div":u,d=Object(i.default)(t,["bsPrefix","className","noGutters","as"]),y=Object(c.useBootstrapPrefix)(a,"row"),f=y+"-cols",x=[];return h.forEach((function(t){var e,a=d[t];delete d[t];var s="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&x.push(""+f+s+"-"+e)})),l.a.createElement(p,Object(s.default)({ref:e},d,{className:o.a.apply(void 0,[r,y,n&&"no-gutters"].concat(x))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.default=u},983:function(t,e,a){"use strict";a.r(e);var s=a(5),i=a(11),r=a(12),o=a.n(r),n=a(0),l=a.n(n),c=a(17),h=l.a.forwardRef((function(t,e){var a=t.bsPrefix,r=t.fluid,n=t.as,h=void 0===n?"div":n,u=t.className,p=Object(i.default)(t,["bsPrefix","fluid","as","className"]),d=Object(c.useBootstrapPrefix)(a,"container"),y="string"==typeof r?"-"+r:"-fluid";return l.a.createElement(h,Object(s.default)({ref:e},p,{className:o()(u,r?""+d+y:d)}))}));h.displayName="Container",h.defaultProps={fluid:!1},e.default=h},995:function(t,e,a){"use strict";var s=a(1018);t.exports=s}}]);