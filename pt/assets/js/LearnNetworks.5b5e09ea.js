"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2514],{681681:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(497326),a=n(894578),s=n(202784),o=n(213980),i=n.n(o),l=n(219637),d=n(198),u=n(471275),c=n(458264),h=n(312594),m=n(605977),f=n.n(m),p=n(848941),w=n.n(p),v=n(174672),g=n(269891),y=n(195065),b=n(262600),E=n(238283),Z=n(584443),x=n(837898);function N(e,t,n,r){for(var a=0,s=0;s<e.length;s++){var o=e[s];o.source===t&&o.target===n&&(a+=1),o.source===t&&o.target===r&&(a+=1),o.source===n&&o.target===r&&(a+=1)}return a}var k=function(e,t){for(var n=0,r=0,a=0;a<e.length;a++)for(var s=0;s<a;s++)for(var o=0;o<s;o++){var i=N(t,a,s,o);2===i&&(r+=1),3===i&&(r+=3,n+=1)}return 3*n/r},P=Object.defineProperty,T=function(e,t,n){return function(e,t,n){t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},$=function(e){function t(t){var n;n=e.call(this,t)||this,T((0,r.Z)(n),"handleGenerate",(function(e,t){for(var r=new Array(e),a=0;a<r.length;a++)r[a]={id:a};for(var s=[],o=0;o<r.length;o++)for(var i=0;i<o;i++)w()()<t&&s.push({source:o,target:i});var l,d,u={network:{links:s,nodes:r}},c=n.state.numNodes,h=n.state.edgeProb;e!==c||t!==h?(c=e,d=[],l=new Array(.5*e*(e-1)+1).fill(0)):(l=n.state.tally,d=n.state.transitivities.slice()),d.push(k(r,s)),l[s.length]+=1,u.numNodes=c,u.edgeProb=t,u.tally=l,u.transitivities=d,n.setState(u)}));return n.state={network:{links:[],nodes:[]},numNodes:10,edgeProb:.5,transitivities:[],tally:new Array(46).fill(0)},n}(0,a.Z)(t,e);var n=t.prototype;return n.renderTallyPlot=function(){return this.props.showEdgeChart?s.createElement(Z.Z,{removeButtons:!0,layout:{title:this.props.t("number-of-edges-per-generated-network"),height:250},data:[{x:f()(0,this.state.tally.length,1),y:this.state.tally,type:"bar"}]}):null},n.renderTransitivities=function(){if(!this.props.showTransitivities)return null;var e=[{x:this.state.transitivities,type:"histogram"}];return s.createElement(Z.Z,{removeButtons:!0,layout:{title:this.props.t("global-clustering-coefficient"),height:250},data:e})},n.render=function(){var e=this.props.t;return s.createElement(u.Z,{style:{maxWidth:1200,margin:"0 auto"}},s.createElement(c.Z,null,s.createElement(h.Z,{md:6},s.createElement(v.Z,{id:"networks-dashboard",onGenerate:this.handleGenerate},s.createElement("p",null,e("intro-1")),s.createElement("p",null,s.createElement(l.c,{i18nKey:"intro-2",ns:"LearnNetworks"},"Let us consider one of the simplest available network models. In the Erd\u0151s\u2013R\xe9nyi model, there is a fixed probability ",s.createElement(x.Z,{raw:"p"})," that an edge exists between any two nodes. We also assume that whether or not an edge exists between two nodes is independent of whether or not other edges exist.")),s.createElement("p",null,s.createElement(l.c,{i18nKey:"intro-3",ns:"LearnNetworks"},"In this model, if we have ",s.createElement(x.Z,{raw:"m"})," nodes, each node can be connected to ",s.createElement(x.Z,{raw:"m-1"})," other nodes.  The number of edges attached to each node (the degree) is then ",s.createElement(x.Z,{raw:"\\text{Binomial}(m-1,p)"}),".")),s.createElement(y.Z,{legend:"m ("+e("number-of-nodes")+")",defaultValue:10,step:1,min:0,max:this.props.maxNumNodes}),s.createElement(y.Z,{legend:"p ("+e("edge-probability")+")",defaultValue:.5,step:.01,max:1,min:0}))),s.createElement(h.Z,{md:6},s.createElement(b.Z,null,s.createElement(E.Z,{width:500,height:350,data:this.state.network}),this.renderTallyPlot(),this.renderTransitivities()),s.createElement(g.Z,{id:"networks"}))))},t}(s.Component);$.defaultProps={maxNumNodes:30,showEdgeChart:!1,showTransitivities:!1},$.propTypes={maxNumNodes:i().number,showEdgeChart:i().bool,showTransitivities:i().bool};var C=(0,d.Z)("learn/networks")($)},471275:function(e,t,n){var r=n(72779),a=n.n(r),s=n(202784),o=n(429658),i=n(552322);const l=s.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...s},l)=>{const d=(0,o.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:l,...s,className:a()(r,t?`${d}${u}`:d)})}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},458264:function(e,t,n){var r=n(72779),a=n.n(r),s=n(202784),o=n(429658),i=n(552322);const l=s.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},s)=>{const l=(0,o.vE)(e,"row"),d=(0,o.pi)(),u=`${l}-cols`,c=[];return d.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const a="xs"!==e?`-${e}`:"";null!=n&&c.push(`${u}${a}-${n}`)})),(0,i.jsx)(n,{ref:s,...r,className:a()(t,l,...c)})}));l.displayName="Row",t.Z=l}}]);