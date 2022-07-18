"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86042],{693660:function(e,t,a){a.d(t,{I0:function(){return s.Z},Y2:function(){return l.Z},lq:function(){return n.Z}});var s=a(351375),l=a(506078),n=a(440835);a(658774),a(430391),a(369701),a(902194)},209106:function(e,t,a){a.r(t);var s=a(202784),l=a(213980),n=a.n(l),r=a(198),i=a(690299),o=a.n(i),h=a(822736),c=a(770561),p=a(423184),m=a(471275),u=a(312594),d=a(790817),b=a(458264),g=a(240054),y=a.n(g),E=a(616145),f=a.n(E),Z=a(224008),x=a.n(Z),P=a(997956),w=a.n(P),v=a(32593),S=a.n(v),C=a(295943),k=a.n(C),X=a(733727),z=a.n(X),F=a(686605),_=a.n(F),$=a(74039),q=a.n($),L=a(700601),M=a.n(L),Y=a(838060),V=a.n(Y),H=a(166244),T=a.n(H),A=a(323522),N=a(850013),O=a(405362),j=a(945618),B=a(693660),I=a(426214),R=a(46739),W=a(194542),D=a(99733),K=a(201),G=a(636449),J=a(18465),Q=a(356880),U=a(241091),ee=Object.defineProperty,te=(e,t,a)=>(((e,t,a)=>{t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);const ae=(0,H.WidthProvider)(T()),se=o()("isle:learn:clt-sample");function le(e,t,a){return _()(S()(e-a)/t)}function ne(e){const t=2*(0,J.Z)(e)*z()(e.length,-1/3),a=(0,U.Z)(e),s=(0,Q.Z)(e),l=_()((a-s)/t)+1,n=new Array(l);w()(n,(e=>({y:0})));for(let r=0;r<e.length;r++){n[le(s,t,e[r])].y+=1}for(let r=0;r<l;r++){let e=s+t*r;n[r].x=q()(e,-1),n[r].width=t}return n}class re extends s.Component{constructor(e){super(e),te(this,"enlargePlotFactory",(e=>()=>{const t=x()(this.state.layout),a=x()(this.state.enlarged);if(this.state.enlarged[e])for(let e=0;e<t.length;e++)t[e]={i:String(e),x:4*e%12,y:3*k()(e/3),w:4,h:3,static:!0},a[e]=!1;else for(let s=0;s<t.length;s++)s<e?(t[s]={i:String(s),x:4*s%12,y:3*k()(s/3),w:4,h:3,static:!0},a[s]=!1):s===e?(t[s]={i:String(s),x:0,y:3*k()(s/3),w:12,h:9,static:!0},a[e]=!0):(t[s]={i:String(s),x:4*(s-e)%12,y:3*k()(s/3)+9,w:4,h:3,static:!0},a[s]=!1);this.setState({layout:t,enlarged:a})})),te(this,"onSelectVariable",(e=>{let t=this.props.data[e];t=t.filter((e=>null!==e&&""!==e));let a,s,l,n="none";if(V()(t)&&(n="numeric",a=(0,D.Z)(t),s=(0,K.Z)(t)),((e,t=!0)=>{const a={};let s=0;for(let l=0;l<e.length;l++){if(M()(a,e[l])||(a[e[l]]=!0,s+=1),s>2)return!1;if(t&&l>50)break}return 2===s})(t)){n="binary",l=[...new Set(t)].sort();let e=0;for(let a=0;a<t.length;a++)t[a]===l[1]&&(e+=1);a=e/t.length,s=a*(1-a)}this.setState({variable:e,values:t,type:n,xbars:[],layout:[],enlarged:[],plots:[],trueMean:a,trueStdev:s,categories:l,percentile:(0,G.Z)(t,this.state.p),samplePercentile:null})})),te(this,"onSamplePercentileChange",(e=>{this.setState({samplePercentile:(0,G.Z)(this.state.xbars,e),phat:e})})),te(this,"onPercentileChange",(e=>{this.setState({percentile:(0,G.Z)(this.state.values,e),p:e})})),te(this,"onXbarChange",(e=>{let t=0,a=this.state.xbars.length;for(let l=0;l<a;l++)this.state.xbars[l]<e&&(t+=1);t/=a;let s=1-t;this.setState({leftXbarProb:t,rightXbarProb:s,cutoff:e})})),te(this,"onXChange",(e=>{let t=0;const a=this.state.values;for(let l=0;l<a.length;l++)a[l]<e&&(t+=1);t/=a.length;let s=1-t;this.setState({leftProb:t,rightProb:s,cutoffPop:e})})),this.state={plots:[],n:10,xbars:[],layout:[],enlarged:[],variable:null,type:"none",categories:[],leftXbarProb:0,rightXbarProb:1,leftProb:0,rightProb:1,cutoffPop:0,cutoff:0,percentile:null,samplePercentile:null,p:.5,phat:.5}}clear(){this.setState({plots:[],xbars:[]})}drawSamples(e){se("Drawing "+e+" samples...");const t=this.state.plots.slice(),a=this.state.enlarged.slice(),l=this.state.xbars.slice();if("numeric"===this.state.type)for(let i=0;i<e;i++){let e=y()(this.state.values,{size:this.state.n});const r=(0,D.Z)(e),i=s.createElement("div",{style:{cursor:"zoom-in"}},s.createElement(W.Z,{raw:`\\bar x = ${r.toFixed(2)}`}),(n=e,s.createElement(A.k,{domainPadding:20,padding:{top:40,bottom:20}},s.createElement(N.Z,{style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),s.createElement(N.Z,{dependentAxis:!0,style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),s.createElement(O.b,{data:ne(n),interpolation:"step"}))));t.push(i),a.push(!1),l.push(r)}else if("binary"===this.state.type)for(let i=0;i<e;i++){let e=y()(this.state.values,{size:this.state.n}),n=0;for(let t=0;t<e.length;t++)e[t]===this.state.categories[1]&&(n+=1);const r=n/e.length,i=[];i.push({x:"failures",y:e.length-n}),i.push({x:"successes",y:n});const o=s.createElement("div",{style:{cursor:"zoom-in"}},s.createElement(W.Z,{raw:`\\hat p = ${r.toFixed(2)}`}),s.createElement(A.k,{domainPadding:20,padding:60},s.createElement(N.Z,{style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),s.createElement(N.Z,{dependentAxis:!0,style:{axisLabel:{fontSize:22},tickLabels:{fontSize:15,padding:5}}}),s.createElement(j.Z,{data:i,style:{bar:{data:{padding:-10}}}})));t.push(o),a.push(!1),l.push(r)}var n;const r=t.map(((e,t)=>({i:String(t),x:4*t%12,y:4*k()(t/4),w:4,h:4,static:!0})));this.setState({plots:t,layout:r,xbars:l,enlarged:a,avg_xbars:(0,D.Z)(l),stdev_xbars:(0,K.Z)(l),samplePercentile:(0,G.Z)(l,this.state.phat)})}renderMeanHistogram(){const{t:e}=this.props;let t;return"numeric"===this.state.type?t=s.createElement("span",null," ",e("histogram-of")," ",s.createElement(W.Z,{raw:"\\bar x"}),"'s"):"binary"===this.state.type&&(t=s.createElement("span",null," ",e("histogram-of")," ",s.createElement(W.Z,{raw:"\\hat p"}),"'s")),s.createElement(I.Z,{header:t},this.state.xbars.length>1?s.createElement(R.Z,{data:[{x:this.state.xbars,type:"histogram",histnorm:"probability density"}],layout:{width:400,height:250,shapes:[{type:"line",x0:this.state.avg_xbars,y0:0,x1:this.state.avg_xbars,y1:f()(this.state.avg_xbars,this.state.avg_xbars,this.state.stdev_xbars),line:{color:"red",width:3}}]}}):s.createElement("p",null,e("draw-two-samples")),s.createElement("p",null,s.createElement("label",null,e("number-of-samples")," ",this.state.xbars.length," ")),this.state.avg_xbars?s.createElement("p",null,s.createElement("label",null," ",e("mean-of")," ","numeric"===this.state.type?s.createElement(W.Z,{raw:"\\bar x"}):s.createElement(W.Z,{raw:"\\hat p"}),"'s: "),s.createElement("span",null,"\xa0",this.state.avg_xbars.toFixed(3)," (",e("shown-as-red-line"),")")):null,this.state.stdev_xbars?s.createElement("p",null,s.createElement("label",null,e("standard-deviation-of")," ","numeric"===this.state.type?s.createElement(W.Z,{raw:"\\bar x"}):s.createElement(W.Z,{raw:"\\hat p"}),"'s: "),"\xa0",this.state.stdev_xbars.toFixed(3)):null)}renderPopulationProbabilities(){const{t:e}=this.props;return s.createElement(d.Z,null,s.createElement(d.Z.Header,{as:"h4"},e("population-distribution-of")," ",this.state.variable),s.createElement(d.Z.Body,null,s.createElement(R.Z,{data:[{x:this.state.values,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0}),s.createElement("p",null,s.createElement("span",{className:"title"},"numeric"===this.state.type?e("population-mean"):e("population-proportion"),": ")," ",this.state.trueMean.toFixed(3)),this.props.hidePopulationStdev?null:s.createElement("p",null,s.createElement("span",{className:"title"},e("population-standard-deviation")," ")," ",this.state.trueStdev.toFixed(3))))}render(){const{t:e}=this.props;return s.createElement(m.Z,{style:{maxWidth:1200}},s.createElement(b.Z,null,s.createElement(d.Z,{body:!0,style:{margin:"2%",width:"96%"}},s.createElement(b.Z,null,s.createElement(u.Z,{md:6},s.createElement(B.lq,{legend:e("select-variable"),options:this.props.variables,onChange:this.onSelectVariable})),s.createElement(u.Z,{md:6},"numeric"===this.state.type||"binary"===this.state.type?s.createElement("span",{style:{float:"right"}},s.createElement(B.Y2,{legend:e("sample-size"),step:1,min:1,defaultValue:10,max:2500,onChange:e=>this.setState({n:e})}),s.createElement(p.Z,null,s.createElement(c.Z,{onClick:()=>{this.drawSamples(1)}},e("draw-sample")),V()(this.props.samples)?this.props.samples.map(((t,a)=>s.createElement(c.Z,{key:a,onClick:()=>{this.drawSamples(t)}},e("draw-n-samples",{n:t})))):s.createElement(c.Z,{onClick:()=>{this.drawSamples(this.props.samples)}},e("draw-n-samples",{n:this.props.samples})),s.createElement(c.Z,{onClick:this.clear.bind(this)},e("clear")))):null)))),"numeric"===this.state.type||"binary"===this.state.type?s.createElement(b.Z,null,s.createElement(u.Z,{md:6},this.props.populationProbabilities?this.renderPopulationProbabilities():s.createElement("div",null,s.createElement(I.Z,{header:e("drawn-samples"),style:{height:"400px"}},s.createElement(ae,{className:"layout",layout:this.state.layout,cols:12,rowHeight:30},this.state.plots.map(((e,t)=>s.createElement("div",{role:"button",key:t,tabIndex:0,onClick:this.enlargePlotFactory(t),onKeyPress:this.enlargePlotFactory(t)},e)))))),"numeric"===this.state.type?s.createElement(d.Z,{body:!0},s.createElement(B.Y2,{step:"any",legend:s.createElement("span",null,e("evaluate-probabilities-for")," ",s.createElement(W.Z,{raw:"X"})),onChange:this.onXChange}),s.createElement(W.Z,{raw:`P( X < ${this.state.cutoffPop} ) = ${this.state.leftProb.toFixed(3)}`,displayMode:!0}),s.createElement(W.Z,{raw:`P( X \\ge ${this.state.cutoffPop} ) = ${this.state.rightProb.toFixed(3)}`,displayMode:!0})):null,this.props.quantiles&&"numeric"===this.state.type&&this.state.xbars.length>1?s.createElement(d.Z,{body:!0,style:{marginTop:6}},s.createElement(B.Y2,{step:.01,min:0,max:1,defaultValue:this.state.p,legend:s.createElement("span",null,e("calculate-percentiles-for")," ",s.createElement(W.Z,{raw:"X"})),onChange:this.onPercentileChange}),s.createElement(W.Z,{raw:q()(this.state.percentile,-3)})):null),s.createElement(u.Z,{md:6},s.createElement("div",null,this.renderMeanHistogram(),"numeric"===this.state.type&&this.state.xbars.length>1?s.createElement(d.Z,{body:!0},s.createElement(B.Y2,{step:"any",legend:s.createElement("span",null,e("estimate-probabilities-for")," ",s.createElement(W.Z,{raw:"\\bar X"})),onChange:this.onXbarChange}),s.createElement(W.Z,{raw:`\\hat P(\\bar X < ${this.state.cutoff} ) = ${this.state.leftXbarProb.toFixed(3)}`,displayMode:!0}),s.createElement(W.Z,{raw:`\\hat P( \\bar X \\ge ${this.state.cutoff} ) = ${this.state.rightXbarProb.toFixed(3)}`,displayMode:!0})):null,this.props.quantiles&&"numeric"===this.state.type&&this.state.xbars.length>1?s.createElement(d.Z,{body:!0,style:{marginTop:6}},s.createElement(B.Y2,{step:.01,min:0,max:1,defaultValue:this.state.phat,legend:s.createElement("span",null,e("calculate-percentiles-for")," ",s.createElement(W.Z,{raw:"\\bar X"})),onChange:this.onSamplePercentileChange}),this.state.samplePercentile?s.createElement(W.Z,{raw:q()(this.state.samplePercentile,-3)}):null):null))):s.createElement(h.Z,{variant:"info",style:{fontSize:24}},e("require-numeric-or-binary")))}}re.propTypes={data:n().object.isRequired,hidePopulationStdev:n().bool,samples:n().oneOfType([n().arrayOf(n().number),n().number]),populationProbabilities:n().bool,quantiles:n().bool,variables:n().array.isRequired},re.defaultProps={hidePopulationStdev:!1,samples:25,populationProbabilities:!1,quantiles:!1},t.default=(0,r.Z)("learn/clt")(re)}}]);