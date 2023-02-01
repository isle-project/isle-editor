"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75685],{877861:function(e,t,a){a.r(t);var r=a(202784),n=a(213980),l=a.n(n),o=a(498614),i=a(471275),s=a(312594),p=a(790817),c=a(458264),m=a(323522),d=a(844204),u=a(850013),h=a(215476),f=a(713506),E=a(700865),y=a(328731),Z=a(32593),v=a.n(Z),b=a(695688),g=a.n(b),w=a(848941),x=a.n(w),C=a(465810),S=a.n(C),k=a(74039),q=a.n(k),N=a(691403),T=a(194542),$=a(228713),B=a(99733),P=a(172888),z=a(658774),Y=a(506078),_=Object.defineProperty,A=(e,t,a)=>(((e,t,a)=>{t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);const G={p:{tooltip:"Success probability"},n:{tooltip:"Number of trials"},alpha:{tooltip:"Significance level"},Z:{tooltip:"Standard normal quantile"}};class L extends r.Component{constructor(e){super(e),A(this,"onGenerate",((e,t,a)=>{let r=0,n=1-a,l=new Array(20);for(let o=0;o<20;o++){let a=new Array(e);for(let e=0;e<a.length;e++)a[e]=x()()<=t?1:0;let i,s=(0,B.Z)(a);i=this.state.useSampleProp?g()(s*(1-s)/e):g()(t*(1-t)/e);let p={num:o+1,yval:s,err:v()(i*S()(1-n/2,0,1))};p.text=p.yval-p.err>t||p.yval+p.err<t?"does not contain p":"contains p","contains p"===p.text&&(r+=1),p.text=`[${q()(p.yval-p.err,-2)}, ${q()(p.yval+p.err,-2)}] `+p.text,l[o]=p}this.setState({nTrapped:r,p:t,errorBars:l})})),this.state={errorBars:[],p:null,nTrapped:null,useSampleProp:!0}}renderChart(){const{errorBars:e}=this.state;return e&&0!==e.length?r.createElement(m.k,{padding:30,height:180,theme:d.J.material,domain:{y:[0,1]}},r.createElement(u.E,{padding:20,standalone:!1,tickCount:20,style:{tickLabels:{fontSize:"9px"}}}),r.createElement(u.E,{dependentAxis:!0,padding:20,standalone:!1}),r.createElement(h.C,{animate:{duration:500},data:this.state.errorBars,labelComponent:r.createElement(f.Z,null),style:{data:{fill:e=>e.datum.yval-e.datum.err>this.state.p||e.datum.yval+e.datum.err<this.state.p?"darkred":"steelblue"}},x:"num",y:"yval",labels:e=>`Sample proportion ${q()(e.datum.yval,-3)}`}),r.createElement(E.i,{animate:{duration:500},labelComponent:r.createElement(f.Z,null),style:{data:{stroke:e=>e.datum.yval-e.datum.err>this.state.p||e.datum.yval+e.datum.err<this.state.p?"darkred":"steelblue"}},data:this.state.errorBars,x:"num",y:"yval",errorY:e=>e.err,labels:e=>e.datum.text}),r.createElement(y.j,{data:[{x:1,y:this.state.p},{x:20,y:this.state.p}]})):null}render(){const{t:e}=this.props;let t;return t=this.props.intro?this.props.intro:r.createElement("div",null,r.createElement("p",null,r.createElement(o.cC,{i18nKey:"binomial-intro",ns:"LearnConfidenceCoverage"},"Now we will switch to asking a Yes/No question about a population. We are interested in estimating the true population proportion ",r.createElement(T.Z,{raw:"p"}),' of "Yes" answers (for example, what proportion of the population has blue eyes?).  We can take a sample of size ',r.createElement(T.Z,{raw:"n"}),', find how many observations in our sample are a "Yes" (X), and then estimate the true proportion ',r.createElement(T.Z,{raw:"p"})," with ",r.createElement(T.Z,{raw:"\\hat{p} = \\frac{X}{n}",elems:G}),". Then ",r.createElement(T.Z,{raw:"\\hat{p} \\sim \\text{Normal}\\left( p, \\sqrt{ \\tfrac{p(1-p)}{n} } \\right)",elems:G}),". Our confidence interval is then ",r.createElement($.Z,{tooltip:`${this.state.useSampleProp?e("click-pop-proportion"):e("click-sample-proportion")}`,active:this.props.sampleStats,onChange:e=>{this.setState({useSampleProp:1===e})}},r.createElement(T.Z,{raw:`\\hat{p} \\pm Z_{${this.props.quartileNotation?"\\alpha/2":"\\text{critical}"}} \\cdot \\sqrt{ \\frac{p(1-p)}{n}}`,elems:G}),r.createElement(T.Z,{raw:`\\hat{p} \\pm Z_{${this.props.quartileNotation?"\\alpha/2":"\\text{critical}"}} \\cdot \\sqrt{ \\frac{\\hat p(1-\\hat p)}{n}}`,elems:G})),".")),r.createElement("p",null,r.createElement(o.cC,{i18nKey:"binomial-intro-end",ns:"LearnConfidenceCoverage"},"For our choice of sample size (n), true proportion ",r.createElement(T.Z,{raw:"p"}),", and confidence level, we will simulate ",r.createElement(T.Z,{raw:"20"})," different samples from our normal distribution and calculate the corresponding sample proportions and confidence intervals."))),r.createElement(p.Z,{className:"coverage-card"},r.createElement(p.Z.Header,{as:"h4"},e("confidence-interval-coverage")),r.createElement(p.Z.Body,null,r.createElement(i.Z,null,r.createElement(c.Z,null,t),r.createElement(c.Z,null,r.createElement(s.Z,{md:5},r.createElement(N.Z,{title:e("change-parameters"),onGenerate:this.onGenerate,autoStart:!0,id:"confidence_coverage_binomial"},r.createElement(Y.Z,{legend:`${e("sample-size")} (n)`,defaultValue:30,max:999,step:1}),r.createElement(Y.Z,{legend:`${e("true-proportion")} (p)`,defaultValue:.5,max:1,min:0,step:.01}),r.createElement(z.Z,{legend:e("confidence-level"),defaultValue:.95,min:.01,max:.99,step:.01,fractionDigits:2})),r.createElement(P.Z,{id:"coverage-module-binomial"})),r.createElement(s.Z,{md:7},r.createElement(p.Z,null,r.createElement(p.Z.Header,{as:"h4"},e("confidence-intervals")),r.createElement(p.Z.Body,null,this.renderChart(),r.createElement("p",null,e("capture-true-proportion",{nTrapped:this.state.nTrapped})," ",r.createElement("b",null,"(",e("coverage"),": ",this.state.nTrapped/20,").")))))))))}}L.defaultProps={intro:null,quartileNotation:!0,sampleStats:!0},L.propTypes={intro:l().oneOfType([l().node,l().string]),quartileNotation:l().bool,sampleStats:l().bool},t.default=(0,o.Zh)("learn/confidence-coverage")(L)}}]);