/*! For license information please see LearnSampleCLT.1fcd1207.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5286],{372828:function(e,t,n){n.d(t,{I0:function(){return r.Z},Y2:function(){return a.Z},lq:function(){return i.Z}});var r=n(296981),a=n(195065),i=n(941695);n(294942),n(464558),n(124575),n(220809)},166690:function(e,t,n){n.r(t);var r=n(497326),a=n(894578),i=n(202784),o=n(213980),l=n.n(o),s=n(198),u=n(690299),c=n.n(u),p=n(822736),f=n(770561),d=n(423184),m=n(471275),b=n(312594),h=n(790817),y=n(458264),g=n(240054),v=n.n(g),x=n(616145),E=n.n(x),w=n(224008),P=n.n(w),Z=n(997956),_=n.n(Z),C=n(32593),O=n.n(C),j=n(295943),S=n.n(j),k=n(733727),T=n.n(k),N=n(686605),I=n.n(N),A=n(74039),X=n.n(A),z=n(700601),M=n.n(z),F=n(838060),L=n.n(F),R=n(166244),Y=n.n(R),V=n(323522),$=n(850013),W=n(405362),q=n(945618),H=n(372828),D=n(262600),B=n(584443),G=n(837898),K=n(519907),Q=n(649985),J=n(648777),U=n(597973),ee=n(630132),te=n(292169),ne=Object.defineProperty,re=function(e,t,n){return function(e,t,n){t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},ae=(0,R.WidthProvider)(Y()),ie=c()("isle:learn:clt-sample");function oe(e,t,n){return I()(O()(e-n)/t)}function le(e){var t=2*(0,U.Z)(e)*T()(e.length,-1/3),n=(0,te.Z)(e),r=(0,ee.Z)(e),a=I()((n-r)/t)+1,i=new Array(a);_()(i,(function(e){return{y:0}}));for(var o=0;o<e.length;o++){i[oe(r,t,e[o])].y+=1}for(var l=0;l<a;l++){var s=r+t*l;i[l].x=X()(s,-1),i[l].width=t}return i}var se=function(e){function t(t){var n;return n=e.call(this,t)||this,re((0,r.Z)(n),"enlargePlotFactory",(function(e){return function(){var t=P()(n.state.layout),r=P()(n.state.enlarged);if(n.state.enlarged[e])for(var a=0;a<t.length;a++)t[a]={i:String(a),x:4*a%12,y:3*S()(a/3),w:4,h:3,static:!0},r[a]=!1;else for(var i=0;i<t.length;i++)i<e?(t[i]={i:String(i),x:4*i%12,y:3*S()(i/3),w:4,h:3,static:!0},r[i]=!1):i===e?(t[i]={i:String(i),x:0,y:3*S()(i/3),w:12,h:9,static:!0},r[e]=!0):(t[i]={i:String(i),x:4*(i-e)%12,y:3*S()(i/3)+9,w:4,h:3,static:!0},r[i]=!1);n.setState({layout:t,enlarged:r})}})),re((0,r.Z)(n),"onSelectVariable",(function(e){var t=n.props.data[e];t=t.filter((function(e){return null!==e&&""!==e}));var r,a,i,o="none";if(L()(t)&&(o="numeric",r=(0,K.Z)(t),a=(0,Q.Z)(t)),function(e,t){void 0===t&&(t=!0);for(var n={},r=0,a=0;a<e.length;a++){if(M()(n,e[a])||(n[e[a]]=!0,r+=1),r>2)return!1;if(t&&a>50)break}return 2===r}(t)){o="binary",i=[].concat(new Set(t)).sort();for(var l=0,s=0;s<t.length;s++)t[s]===i[1]&&(l+=1);a=(r=l/t.length)*(1-r)}n.setState({variable:e,values:t,type:o,xbars:[],layout:[],enlarged:[],plots:[],trueMean:r,trueStdev:a,categories:i,percentile:(0,J.Z)(t,n.state.p),samplePercentile:null})})),re((0,r.Z)(n),"onSamplePercentileChange",(function(e){n.setState({samplePercentile:(0,J.Z)(n.state.xbars,e),phat:e})})),re((0,r.Z)(n),"onPercentileChange",(function(e){n.setState({percentile:(0,J.Z)(n.state.values,e),p:e})})),re((0,r.Z)(n),"onXbarChange",(function(e){for(var t=0,r=n.state.xbars.length,a=0;a<r;a++)n.state.xbars[a]<e&&(t+=1);var i=1-(t/=r);n.setState({leftXbarProb:t,rightXbarProb:i,cutoff:e})})),re((0,r.Z)(n),"onXChange",(function(e){for(var t=0,r=n.state.values,a=0;a<r.length;a++)r[a]<e&&(t+=1);var i=1-(t/=r.length);n.setState({leftProb:t,rightProb:i,cutoffPop:e})})),n.state={plots:[],n:10,xbars:[],layout:[],enlarged:[],variable:null,type:"none",categories:[],leftXbarProb:0,rightXbarProb:1,leftProb:0,rightProb:1,cutoffPop:0,cutoff:0,percentile:null,samplePercentile:null,p:.5,phat:.5},n}(0,a.Z)(t,e);var n=t.prototype;return n.clear=function(){this.setState({plots:[],xbars:[]})},n.drawSamples=function(e){ie("Drawing "+e+" samples...");var t,n=this.state.plots.slice(),r=this.state.enlarged.slice(),a=this.state.xbars.slice();if("numeric"===this.state.type)for(var o=0;o<e;o++){var l=v()(this.state.values,{size:this.state.n}),s=(0,K.Z)(l),u=i.createElement("div",{style:{cursor:"zoom-in"}},i.createElement(G.Z,{raw:"\\bar x = "+s.toFixed(2)}),(t=l,i.createElement(V.Z,{domainPadding:20,padding:{top:40,bottom:20}},i.createElement($.Z,{style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),i.createElement($.Z,{dependentAxis:!0,style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),i.createElement(W.Z,{data:le(t),interpolation:"step"}))));n.push(u),r.push(!1),a.push(s)}else if("binary"===this.state.type)for(var c=0;c<e;c++){for(var p=v()(this.state.values,{size:this.state.n}),f=0,d=0;d<p.length;d++)p[d]===this.state.categories[1]&&(f+=1);var m=f/p.length,b=[];b.push({x:"failures",y:p.length-f}),b.push({x:"successes",y:f});var h=i.createElement("div",{style:{cursor:"zoom-in"}},i.createElement(G.Z,{raw:"\\hat p = "+m.toFixed(2)}),i.createElement(V.Z,{domainPadding:20,padding:60},i.createElement($.Z,{style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),i.createElement($.Z,{dependentAxis:!0,style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),i.createElement(q.Z,{data:b,style:{bar:{data:{padding:-10}}}})));n.push(h),r.push(!1),a.push(m)}var y=n.map((function(e,t){return{i:String(t),x:4*t%12,y:4*S()(t/4),w:4,h:4,static:!0}}));this.setState({plots:n,layout:y,xbars:a,enlarged:r,avg_xbars:(0,K.Z)(a),stdev_xbars:(0,Q.Z)(a),samplePercentile:(0,J.Z)(a,this.state.phat)})},n.renderMeanHistogram=function(){var e,t=this.props.t;return"numeric"===this.state.type?e=i.createElement("span",null," ",t("histogram-of")," ",i.createElement(G.Z,{raw:"\\bar x"}),"'s"):"binary"===this.state.type&&(e=i.createElement("span",null," ",t("histogram-of")," ",i.createElement(G.Z,{raw:"\\hat p"}),"'s")),i.createElement(D.Z,{header:e},this.state.xbars.length>1?i.createElement(B.Z,{data:[{x:this.state.xbars,type:"histogram",histnorm:"probability density"}],layout:{width:400,height:250,shapes:[{type:"line",x0:this.state.avg_xbars,y0:0,x1:this.state.avg_xbars,y1:E()(this.state.avg_xbars,this.state.avg_xbars,this.state.stdev_xbars),line:{color:"red",width:3}}]}}):i.createElement("p",null,t("draw-two-samples")),i.createElement("p",null,i.createElement("label",null,t("number-of-samples")," ",this.state.xbars.length," ")),this.state.avg_xbars?i.createElement("p",null,i.createElement("label",null," ",t("mean-of")," ","numeric"===this.state.type?i.createElement(G.Z,{raw:"\\bar x"}):i.createElement(G.Z,{raw:"\\hat p"}),"'s: "),i.createElement("span",null,"\xa0",this.state.avg_xbars.toFixed(3)," (",t("shown-as-red-line"),")")):null,this.state.stdev_xbars?i.createElement("p",null,i.createElement("label",null,t("standard-deviation-of")," ","numeric"===this.state.type?i.createElement(G.Z,{raw:"\\bar x"}):i.createElement(G.Z,{raw:"\\hat p"}),"'s: "),"\xa0",this.state.stdev_xbars.toFixed(3)):null)},n.renderPopulationProbabilities=function(){var e=this.props.t;return i.createElement(h.Z,null,i.createElement(h.Z.Header,{as:"h4"},e("population-distribution-of")," ",this.state.variable),i.createElement(h.Z.Body,null,i.createElement(B.Z,{data:[{x:this.state.values,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0}),i.createElement("p",null,i.createElement("span",{className:"title"},"numeric"===this.state.type?e("population-mean"):e("population-proportion"),": ")," ",this.state.trueMean.toFixed(3)),this.props.hidePopulationStdev?null:i.createElement("p",null,i.createElement("span",{className:"title"},e("population-standard-deviation")," ")," ",this.state.trueStdev.toFixed(3))))},n.render=function(){var e=this,t=this.props.t;return i.createElement(m.Z,{style:{maxWidth:1200}},i.createElement(y.Z,null,i.createElement(h.Z,{body:!0,style:{margin:"2%",width:"96%"}},i.createElement(y.Z,null,i.createElement(b.Z,{md:6},i.createElement(H.lq,{legend:t("select-variable"),options:this.props.variables,onChange:this.onSelectVariable})),i.createElement(b.Z,{md:6},"numeric"===this.state.type||"binary"===this.state.type?i.createElement("span",{style:{float:"right"}},i.createElement(H.Y2,{legend:t("sample-size"),step:1,min:1,defaultValue:10,max:2500,onChange:function(t){return e.setState({n:t})}}),i.createElement(d.Z,null,i.createElement(f.Z,{onClick:function(){e.drawSamples(1)}},t("draw-sample")),L()(this.props.samples)?this.props.samples.map((function(n,r){return i.createElement(f.Z,{key:r,onClick:function(){e.drawSamples(n)}},t("draw-n-samples",{n:n}))})):i.createElement(f.Z,{onClick:function(){e.drawSamples(e.props.samples)}},t("draw-n-samples",{n:this.props.samples})),i.createElement(f.Z,{onClick:this.clear.bind(this)},t("clear")))):null)))),"numeric"===this.state.type||"binary"===this.state.type?i.createElement(y.Z,null,i.createElement(b.Z,{md:6},this.props.populationProbabilities?this.renderPopulationProbabilities():i.createElement("div",null,i.createElement(D.Z,{header:t("drawn-samples"),style:{height:"400px"}},i.createElement(ae,{className:"layout",layout:this.state.layout,cols:12,rowHeight:30},this.state.plots.map((function(t,n){return i.createElement("div",{role:"button",key:n,tabIndex:0,onClick:e.enlargePlotFactory(n),onKeyPress:e.enlargePlotFactory(n)},t)}))))),"numeric"===this.state.type?i.createElement(h.Z,{body:!0},i.createElement(H.Y2,{step:"any",legend:i.createElement("span",null,t("evaluate-probabilities-for")," ",i.createElement(G.Z,{raw:"X"})),onChange:this.onXChange}),i.createElement(G.Z,{raw:"P( X < "+this.state.cutoffPop+" ) = "+this.state.leftProb.toFixed(3),displayMode:!0}),i.createElement(G.Z,{raw:"P( X \\ge "+this.state.cutoffPop+" ) = "+this.state.rightProb.toFixed(3),displayMode:!0})):null,this.props.quantiles&&"numeric"===this.state.type&&this.state.xbars.length>1?i.createElement(h.Z,{body:!0,style:{marginTop:6}},i.createElement(H.Y2,{step:.01,min:0,max:1,defaultValue:this.state.p,legend:i.createElement("span",null,t("calculate-percentiles-for")," ",i.createElement(G.Z,{raw:"X"})),onChange:this.onPercentileChange}),i.createElement(G.Z,{raw:X()(this.state.percentile,-3)})):null),i.createElement(b.Z,{md:6},i.createElement("div",null,this.renderMeanHistogram(),"numeric"===this.state.type&&this.state.xbars.length>1?i.createElement(h.Z,{body:!0},i.createElement(H.Y2,{step:"any",legend:i.createElement("span",null,t("estimate-probabilities-for")," ",i.createElement(G.Z,{raw:"\\bar X"})),onChange:this.onXbarChange}),i.createElement(G.Z,{raw:"\\hat P(\\bar X < "+this.state.cutoff+" ) = "+this.state.leftXbarProb.toFixed(3),displayMode:!0}),i.createElement(G.Z,{raw:"\\hat P( \\bar X \\ge "+this.state.cutoff+" ) = "+this.state.rightXbarProb.toFixed(3),displayMode:!0})):null,this.props.quantiles&&"numeric"===this.state.type&&this.state.xbars.length>1?i.createElement(h.Z,{body:!0,style:{marginTop:6}},i.createElement(H.Y2,{step:.01,min:0,max:1,defaultValue:this.state.phat,legend:i.createElement("span",null,t("calculate-percentiles-for")," ",i.createElement(G.Z,{raw:"\\bar X"})),onChange:this.onSamplePercentileChange}),this.state.samplePercentile?i.createElement(G.Z,{raw:X()(this.state.samplePercentile,-3)}):null):null))):i.createElement(p.Z,{variant:"info",style:{fontSize:24}},t("require-numeric-or-binary")))},t}(i.Component);se.propTypes={data:l().object.isRequired,hidePopulationStdev:l().bool,samples:l().oneOfType([l().arrayOf(l().number),l().number]),populationProbabilities:l().bool,quantiles:l().bool,variables:l().array.isRequired},se.defaultProps={hidePopulationStdev:!1,samples:25,populationProbabilities:!1,quantiles:!1},t.default=(0,s.Z)("learn/clt")(se)},997956:function(e,t,n){var r=n(505469);e.exports=r},505469:function(e,t,n){var r=n(571388),a=n(213939);e.exports=function(e,t,n){var i,o,l;if(!r(e))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+e+"`.");if(!a(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");for(i=e.length,l=0;l<i;l++)o=t.call(n,e[l],l,e),i!==e.length&&(i=e.length),l<i&&(e[l]=o);return e}},770561:function(e,t,n){var r=n(72779),a=n.n(r),i=n(202784),o=n(247830),l=n(429658),s=n(552322);const u=i.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:i,className:u,...c},p)=>{const f=(0,l.vE)(t,"btn"),[d,{tagName:m}]=(0,o.FT)({tagName:e,...c}),b=m;return(0,s.jsx)(b,{...d,...c,ref:p,className:a()(u,f,i&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,c.href&&c.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},423184:function(e,t,n){var r=n(72779),a=n.n(r),i=n(202784),o=n(429658),l=n(552322);const s=i.forwardRef((({bsPrefix:e,size:t,vertical:n,className:r,as:i="div",...s},u)=>{const c=(0,o.vE)(e,"btn-group");let p=c;return n&&(p=`${c}-vertical`),(0,l.jsx)(i,{...s,ref:u,className:a()(r,p,t&&`${c}-${t}`)})}));s.displayName="ButtonGroup",s.defaultProps={vertical:!1,role:"group"},t.Z=s},471275:function(e,t,n){var r=n(72779),a=n.n(r),i=n(202784),o=n(429658),l=n(552322);const s=i.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...i},s)=>{const u=(0,o.vE)(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(n,{ref:s,...i,className:a()(r,t?`${u}${c}`:u)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},458264:function(e,t,n){var r=n(72779),a=n.n(r),i=n(202784),o=n(429658),l=n(552322);const s=i.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},i)=>{const s=(0,o.vE)(e,"row"),u=(0,o.pi)(),c=`${s}-cols`,p=[];return u.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const a="xs"!==e?`-${e}`:"";null!=n&&p.push(`${c}${a}-${n}`)})),(0,l.jsx)(n,{ref:i,...r,className:a()(t,s,...p)})}));s.displayName="Row",t.Z=s},405362:function(e,t,n){n.d(t,{Z:function(){return G}});var r=n(213980),a=n.n(r),i=n(202784),o=n(301842),l=n.n(o),s=n(460019),u=n.n(s),c=n(639332),p=n(47191),f=n(733419),d=n(585613),m=n(938151),b=n(338094),h=function(e){var t=e.polar,n=d.Lo(e,"area"),r=d.Wi(e.style,n),a={x:d.rx(e,"x"),y:d.rx(e,"y")},i={x:m.x1(e,"x"),y:m.x1(e,"y")},o={x:p.q8(e,"x").domain(i.x).range(e.horizontal?a.y:a.x),y:p.q8(e,"y").domain(i.y).range(e.horizontal?a.x:a.y)},l=t?e.origin||d.IW(e):void 0,s=function(e,t){var n=c.Yu(e);n.length<2&&(n=[]);var r=function(e){var n="log"===p.oL(t[e])?1/Number.MAX_SAFE_INTEGER:0,r=t[e].domain(),a=f.ao(r),i=f.MN(r),o=n;return a<0&&i<=0?o=i:a>=0&&i>0&&(o=a),f.AM(r)?new Date(o):o};return n.map((function(e){var t=void 0!==e._y1?e._y1:e._y,n=void 0!==e._y0?e._y0:r("y"),a=void 0!==e._x1?e._x1:e._x,i=void 0!==e._x0?e._x0:r("x");return u()({},e,{_y0:n,_y1:t,_x0:i,_x1:a})}))}(e,o);return{style:r,data:s,scale:o,domain:i,origin:l}},y=n(687056),g=n(608329),v=n(779767),x=n(779493),E=n(969896),w=n(50038),P=n(117497);function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},O=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},j=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},S=function(e){return function(t){return e.y(t._y0)}},k=function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}},T=function(e){var t;return"curve".concat((t=e)&&t[0].toUpperCase()+t.slice(1))},N=function(e){var t=e.polar,n=e.scale,r=e.horizontal,a="function"==typeof e.interpolation&&e.interpolation,i="string"==typeof e.interpolation&&T(e.interpolation);return t?g.Z().defined(C).curve(a||y["".concat(i,"Closed")]).angle(k(n)).radius(j(n)):v.Z().defined(C).curve(a||y[i]).x(r?j(n):O(n)).y(r?O(n):j(n))},I=function(e){var t=e.polar,n=e.scale,r="function"==typeof e.interpolation&&e.interpolation,a="string"==typeof e.interpolation&&T(e.interpolation),i=r||a;return t?E.Z().defined(C).curve(r||y["".concat(a,"Closed")]).angle(k(n)).outerRadius(j(n)).innerRadius(S(n)):function(e,t){var n=e.horizontal,r=e.scale,a="function"==typeof t&&t,i="string"==typeof t&&t;return n?x.Z().defined(C).curve(a||y[i]).x0(S(r)).x1(j(r)).y(O(r)):x.Z().defined(C).curve(a||y[i]).x(O(r)).y1(j(r)).y0(S(r))}(e,i)},A=function(e){e=function(e){var t=d.xs(e.ariaLabel,e),n=d.xs(e.desc,e),r=d.xs(e.id,e),a=d.F3(u()({fill:"black"},e.style),e),i=d.xs(e.tabIndex,e);return u()({},e,{ariaLabel:t,desc:n,id:r,style:a,tabIndex:i})}(e);var t=e,n=t.ariaLabel,r=t.role,a=t.shapeRendering,o=t.className,l=t.polar,s=t.origin,c=t.data,p=t.pathComponent,f=t.events,m=t.groupComponent,b=t.clipPath,h=t.id,y=t.style,g=t.desc,v=t.tabIndex,x=l&&s?"translate(".concat(s.x,", ").concat(s.y,")"):void 0,E=e.transform||x,w=y.stroke&&"none"!==y.stroke&&"transparent"!==y.stroke,P=I(e),_=w&&N(e),C=y.stroke?"none":y.fill,O=Z({"aria-label":n,className:o,role:r,shapeRendering:a,transform:E},f,{clipPath:b,tabIndex:v}),j=i.cloneElement(p,u()({key:"".concat(h,"-area"),style:u()({},y,{stroke:C}),d:P(c),desc:g,tabIndex:v},O)),S=w?i.cloneElement(p,u()({key:"".concat(h,"-area-stroke"),style:u()({},y,{fill:"none"}),d:_(c)},O)):null;return w?i.cloneElement(m,{},[j,S]):j};A.propTypes=Z({},w.jW,{groupComponent:a().element,interpolation:a().oneOfType([a().string,a().func]),pathComponent:a().element}),A.defaultProps={groupComponent:i.createElement("g",null),pathComponent:i.createElement(P.Z,null),role:"presentation",shapeRendering:"auto"};var X=A,z=n(228300),M=n(761027),F=n(339849),L=n(564167),R=n(844204),Y=n(322),V=n(330490);function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var D={width:450,height:300,padding:50,interpolation:"linear"},B=function(e){function t(){return W(this,t),H(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(r=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,r=d.TY(this.props,D,n);if(this.shouldAnimate())return this.animateComponent(r,e);var a=this.renderContinuousData(r);return r.standalone?this.renderContainer(r.containerComponent,a):a}}])&&q(n.prototype,r),a&&q(n,a),t}(i.Component);Object.defineProperty(B,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(B,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){$(e,t,n[t])}))}return e}({},w.wA,w.ly,{interpolation:a().oneOfType([a().oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),a().func]),label:z.x9(a().string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(B,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.createElement(M.Z,null),dataComponent:i.createElement(X,null),groupComponent:i.createElement(F.Z,null),labelComponent:i.createElement(L.Z,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:R.Z.grayscale}}),Object.defineProperty(B,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryArea"}),Object.defineProperty(B,"role",{configurable:!0,enumerable:!0,writable:!0,value:"area"}),Object.defineProperty(B,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(B,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:Y.sA()}),Object.defineProperty(B,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:Y.Jm()}),Object.defineProperty(B,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:m.x1}),Object.defineProperty(B,"getData",{configurable:!0,enumerable:!0,writable:!0,value:c.Yu}),Object.defineProperty(B,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,t){var n=d.TY(e,t,"area"),r=e=u()({},n,h(n)),a=r.data,i=r.domain,o=r.events,s=r.groupComponent,c=r.height,p=r.horizontal,f=r.interpolation,m=r.origin,y=r.padding,g=r.polar,v=r.scale,x=r.sharedEvents,E=r.standalone,w=r.style,P=r.theme,Z=r.width,_=r.labels,C=r.name,O=r.disableInlineStyles,j={parent:{style:w.parent,width:Z,height:c,scale:v,data:a,domain:i,standalone:E,theme:P,polar:g,origin:m,padding:y,name:C,horizontal:p},all:{data:{horizontal:p,polar:g,origin:m,scale:v,data:a,interpolation:f,groupComponent:s,style:O?{}:w.data,disableInlineStyles:O}}};return a.reduce((function(t,n,r){return(null!=b.Q(e,n,r)||_&&(o||x))&&(t[l()(n.eventKey)?r:n.eventKey]={labels:b.AM(e,r)}),t}),j)}(e,D)}}),Object.defineProperty(B,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});var G=(0,V.Z)(B,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})},339849:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(774930),a=n.n(r),i=n(429259),o=n.n(i),l=n(984573),s=n.n(l),u=n(460019),c=n.n(u),p=n(202784),f=n(213980),d=n.n(f),m=n(228300),b=n(585613),h=function(e){return p.createElement("defs",null,p.createElement("clipPath",{id:e.clipId},e.children))};h.propTypes={children:d().oneOfType([d().arrayOf(d().node),d().node]),clipId:d().oneOfType([d().number,d().string])};var y=h,g=n(984163),v=n(613663);function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).clipId=o()(e)&&void 0!==e.clipId?e.clipId:a()("victory-clip-"),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,r=[{key:"calculateAttributes",value:function(e){var t=e.polar,n=e.origin,r=e.clipWidth,a=void 0===r?0:r,i=e.clipHeight,o=void 0===i?0:i,l=e.translateX,s=void 0===l?0:l,u=e.translateY,c=void 0===u?0:u,p=b.tQ({padding:e.clipPadding}),f=e.radius||b.H5(e);return{x:(t?n.x:s)-p.left,y:(t?n.y:c)-p.top,width:Math.max((t?f:a)+p.left+p.right,0),height:Math.max((t?f:o)+p.top+p.bottom,0)}}},{key:"renderClippedGroup",value:function(e,t){var n=e.style,r=e.events,a=e.transform,i=e.children,o=e.className,l=e.groupComponent,s=e.tabIndex,u=this.renderClipComponent(e,t),f=c()({className:o,style:n,transform:a,key:"clipped-group-".concat(t),clipPath:"url(#".concat(t,")")},r);return p.cloneElement(l,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}({},f,{"aria-label":e["aria-label"],tabIndex:s}),[u].concat(x(p.Children.toArray(i))))}},{key:"renderGroup",value:function(e){var t=e.style,n=e.events,r=e.transform,a=e.children,i=e.className,o=e.groupComponent,l=e.tabIndex;return p.cloneElement(o,c()({className:i,style:t,transform:r,"aria-label":e["aria-label"],tabIndex:l},n),a)}},{key:"renderClipComponent",value:function(e,t){var n,r=e.polar,a=e.origin,i=e.clipWidth,o=void 0===i?0:i,l=e.clipHeight,s=void 0===l?0:l,u=e.translateX,f=void 0===u?0:u,d=e.translateY,m=void 0===d?0:d,h=e.circleComponent,y=e.rectComponent,g=e.clipPathComponent,v=b.tQ({padding:e.clipPadding}),x=v.top,E=v.bottom,w=v.left,P=v.right;if(r){var Z=e.radius||b.H5(e),_={r:Math.max(Z+w+P,Z+x+E,0),cx:a.x-w,cy:a.y-x};n=p.cloneElement(h,_)}else{var C={x:f-w,y:m-x,width:Math.max(o+w+P,0),height:Math.max(s+x+E,0)};n=p.cloneElement(y,C)}return p.cloneElement(g,c()({key:"clip-path-".concat(t)},e,{clipId:t}),n)}},{key:"getClipValue",value:function(e,t){var n={x:e.clipWidth,y:e.clipHeight};if(void 0!==n[t])return n[t];var r=b.rx(e,t);return r&&Math.abs(r[0]-r[1])||void 0}},{key:"getTranslateValue",value:function(e,t){var n={x:e.translateX,y:e.translateY};if(void 0!==n[t])return n[t];var r=b.rx(e,t);return r?Math.min.apply(Math,x(r)):void 0}},{key:"render",value:function(){var e=this.getClipValue(this.props,"y"),t=this.getClipValue(this.props,"x");if(void 0===t||void 0===e)return this.renderGroup(this.props);var n=this.getTranslateValue(this.props,"x"),r=this.getTranslateValue(this.props,"y"),a=s()({},this.props,{clipHeight:e,clipWidth:t,translateX:n,translateY:r});return this.renderClippedGroup(a,this.clipId)}}],r&&w(n.prototype,r),i&&w(n,i),t}(p.Component);Object.defineProperty(Z,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryClipContainer"}),Object.defineProperty(Z,"role",{configurable:!0,enumerable:!0,writable:!0,value:"container"}),Object.defineProperty(Z,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{"aria-label":d().string,children:d().oneOfType([d().arrayOf(d().node),d().node]),circleComponent:d().element,className:d().string,clipHeight:m.A7,clipId:d().oneOfType([d().number,d().string]),clipPadding:d().shape({top:d().number,bottom:d().number,left:d().number,right:d().number}),clipPathComponent:d().element,clipWidth:m.A7,events:d().object,groupComponent:d().element,origin:d().shape({x:m.A7,y:m.A7}),polar:d().bool,radius:m.A7,style:d().object,tabIndex:d().number,transform:d().string,translateX:d().number,translateY:d().number}}),Object.defineProperty(Z,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{circleComponent:p.createElement(g.Z,null),rectComponent:p.createElement(v.Z,null),clipPathComponent:p.createElement(y,null),groupComponent:p.createElement("g",null)}})},322:function(e,t,n){function r(){return{onLoad:{duration:2e3},onExit:{duration:500},onEnter:{duration:500}}}function a(){return{onLoad:{duration:2e3,before:function(){return{_y:0,_y1:0,_y0:0}},after:function(e){return{_y:e._y,_y1:e._y1,_y0:e._y0}}},onExit:{duration:500,before:function(e,t,n){var r=function(e){return(0===t?n[t+1]:n[t-1])[e]};return{_x:r("_x"),_y:r("_y"),_y0:r("_y0")}}},onEnter:{duration:500,before:function(e,t,n){var r=function(e){return(0===t?n[t+1]:n[t-1])[e]};return{_x:r("_x"),_y:r("_y"),_y0:r("_y0")}},after:function(e){return{_x:e._x,_y:e._y,_y1:e._y1,_y0:e._y0}}}}}function i(){return{onLoad:{duration:2e3,before:function(){return{opacity:0}},after:function(e){return e}},onExit:{duration:600,before:function(){return{opacity:0}}},onEnter:{duration:600,before:function(){return{opacity:0}},after:function(e){return e}}}}n.d(t,{sA:function(){return r},Jm:function(){return a},cv:function(){return i}})}}]);