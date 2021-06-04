/*! For license information please see LearnWordVennDiagram.dd467926.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[928],{752829:function(t,e,n){"use strict";n.r(e);n(382139);var a,r,s=n(858255),o=n(264659),i=n(904730),c=n(673989),l=n(175663),u=n(750591),d=n(575630),f=n(151119),p=(n(319371),n(448977),n(850110),n(202784)),v=(n(213980),n(198)),h=n(770561),m=n(423184),y=n(260952),Z=n(379733),g=n(805312),w=n(407547),b=n.n(w),k=n(351100),C=n.n(k),A=n(310154),B=n.n(A),x=n(800562),P=n.n(x),N=n(741709),W=n(551769);function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=(0,d.Z)(t);if(e){var r=(0,d.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,u.Z)(this,n)}}var F=function(t){(0,l.Z)(n,t);var e=z(n);function n(t){var a;(0,o.Z)(this,n),a=e.call(this,t),(0,f.Z)((0,c.Z)(a),"drawPlot",(function(){var t,e=a.state.freqs,n=g.Ys("#"+a.state.id);n.select("svg").remove(),t=a.state.tooltip?a.state.tooltip:g.Ys("body").append("div").attr("class","venntooltip");var r=Z.VennDiagram().width(a.props.width).height(a.props.height);n.datum(e).call(r),n.selectAll("g").on("mouseover",(function(e,a){Z.sortAreas(n,e),t.transition().duration(400).style("opacity",.9),t.text(e.sets.join(" and ")+" ("+e.size+")"),g.Ys(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("stroke","black").style("fill-opacity",1===e.sets.length?.4:.1).style("stroke-opacity",1)})).on("mousemove",(function(){t.style("left",g.Ba6.pageX+"px").style("top",g.Ba6.pageY-28+"px")})).on("mouseout",(function(e,n){t.transition().duration(400).style("opacity",0),g.Ys(this).transition("tooltip").duration(400).select("path").style("fill-opacity",1===e.sets.length?.25:0).style("stroke-opacity",0)})),a.setState({tooltip:t})})),(0,f.Z)((0,c.Z)(a),"calculateWordFrequency",(function(t){var e=a.state,n=e.indices,r=e.minCount,s=e.tdm,o=e.words[t],i=n[t],c=[],l=0;if(s[i])for(var u=s[i].map((function(e){return e>=r[t]?1:0})),d=0;d<u.length;d++)l+=u[d],1===u[d]&&c.push(d);return{sets:[o],size:l,docIndices:c}})),(0,f.Z)((0,c.Z)(a),"wordNumberClickFactory",(function(t){return function(){a.setState({nWords:t+1,disabled:!0,words:new Array(t+1),minCount:new Array(t+1).fill(1)})}})),(0,f.Z)((0,c.Z)(a),"updatePlot",(function(){for(var t=[],e=0;e<a.state.nWords;e++){var n=a.calculateWordFrequency(e);t.push(n)}if(2===a.state.nWords){var r=a.calculateJointAB(0,1);t.push(r)}else if(3===a.state.nWords){var s=a.calculateJointAB(0,1);t.push(s),s=a.calculateJointAB(0,2),t.push(s),s=a.calculateJointAB(1,2),t.push(s),s=a.calculateJointABC(0,1,2),t.push(s)}a.setState({freqs:t},(function(){a.drawPlot(),a.props.onClick(a.state)}))}));var r=t.tdm.map((function(e){for(var n=new Array(t.nTexts),a=0;a<n.length;a++)n[a]=e[a]?e[a]:0;return n}));return a.state={disabled:!0,words:new Array(1),indices:new Array(1),freqs:[],minCount:[1],nWords:1,tdm:r},a}return(0,i.Z)(n,[{key:"componentDidUpdate",value:function(t,e){for(var n=!1,a=0;a<this.state.nWords;a++)e.words[a]!==this.state.words[a]&&(n=!0);if(n){for(var r=new Array(this.state.nWords),s=this.props.vocabulary,o=0;o<this.state.nWords;o++)for(var i=0;i<s.length;i++)s[i]===this.state.words[o]&&(r[o]=i);this.setState({indices:r})}}},{key:"wordChangeFactory",value:function(t){var e=this;return function(n){var a=Array.prototype.slice.call(e.state.words);a[t]=C()(B()(n))||null,e.setState({words:a,disabled:!b()(a)})}}},{key:"calculateJointAB",value:function(t,e){var n=this.state,a=n.indices,r=n.minCount,s=n.tdm,o=n.words,i=a[t],c=a[e],l=0;if(s[i]&&s[c])for(var u=s[i].map((function(e){return e>=r[t]?1:0})),d=s[c].map((function(t){return t>=r[e]?1:0})),f=0;f<u.length;f++)u[f]&&d[f]&&(l+=1);return{sets:[o[t],o[e]],size:l}}},{key:"calculateJointABC",value:function(t,e,n){var a=this.state,r=a.indices,s=a.minCount,o=a.tdm,i=a.words,c=r[t],l=r[e],u=r[n],d=0;if(o[c]&&o[l]&&o[u])for(var f=o[c].map((function(e){return e>=s[t]?1:0})),p=o[l].map((function(t){return t>=s[e]?1:0})),v=o[u].map((function(t){return t>=s[n]?1:0})),h=0;h<f.length;h++)f[h]&&p[h]&&v[h]&&(d+=1);return{sets:[i[t],i[e],i[n]],size:d}}},{key:"render",value:function(){for(var t=this,e=this.props.t,n=[],o=function(a){n[a]=(0,s.Z)("div",{},"outer-".concat(a),(0,s.Z)(W.Z,{legend:"".concat(e("word")," ").concat(a+1),defaultValue:t.state.words[a],width:120,onChange:t.wordChangeFactory(a)},"text-".concat(a)),(0,s.Z)(N.Z,{legend:e("min-of-times"),defaultValue:1,max:50,min:1,step:1,onChange:function(e){var n=P()(t.state.minCount);n[a]=e,t.setState({minCount:n})}},"number-".concat(a)))},i=0;i<this.state.nWords;i++)o(i);return(0,s.Z)(p.Fragment,{},void 0,(0,s.Z)(y.Z,{},void 0,(0,s.Z)(y.Z.Header,{as:"h4"},void 0,e("settings")),(0,s.Z)(y.Z.Body,{},void 0,(0,s.Z)("p",{},void 0,(0,s.Z)("span",{className:"title"},void 0,e("number-of-words"))),(0,s.Z)(m.Z,{},void 0,[e("one"),e("two"),e("three")].map((function(e,n){return(0,s.Z)(h.Z,{variant:n===t.state.nWords-1?"success":"default",onClick:t.wordNumberClickFactory(n)},n,e)}))),n,(0,s.Z)(h.Z,{onClick:this.updatePlot,disabled:this.state.disabled},void 0,e("draw-venn-diagram")))),a||(a=(0,s.Z)("br",{})),(0,s.Z)(y.Z,{},void 0,(0,s.Z)(y.Z.Header,{as:"h4"},void 0,e("venn-diagram")),(0,s.Z)(y.Z.Body,{style:{minHeight:200}},void 0,(0,s.Z)("span",{style:{position:"absolute",right:40,top:50}},void 0,e("total-texts"),": ",this.props.nTexts),r||(r=(0,s.Z)("div",{})))))}}]),n}(p.Component);F.defaultProps={height:350,onClick:function(){},width:600},e.default=(0,v.Z)("learn/venn-diagram")(F)},407547:function(t,e,n){"use strict";var a=n(220091),r=n(31020),s=n(671655),o=r(s);a(o,"primitives",r(s.isPrimitive)),a(o,"objects",r(s.isObject)),t.exports=o},770561:function(t,e,n){"use strict";var a=n(607560),r=n(998283),s=n(72779),o=n.n(s),i=n(202784),c=n(429658),l=n(482695),u=i.forwardRef((function(t,e){var n=t.bsPrefix,s=t.variant,u=t.size,d=t.active,f=t.className,p=t.block,v=t.type,h=t.as,m=(0,r.Z)(t,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,c.vE)(n,"btn"),Z=o()(f,y,d&&"active",s&&y+"-"+s,p&&y+"-block",u&&y+"-"+u);if(m.href)return i.createElement(l.Z,(0,a.Z)({},m,{as:h,ref:e,className:o()(Z,m.disabled&&"disabled")}));e&&(m.ref=e),v?m.type=v:h||(m.type="button");var g=h||"button";return i.createElement(g,(0,a.Z)({},m,{className:Z}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=u},423184:function(t,e,n){"use strict";var a=n(607560),r=n(998283),s=n(72779),o=n.n(s),i=n(202784),c=n(429658),l=i.forwardRef((function(t,e){var n=t.bsPrefix,s=t.size,l=t.toggle,u=t.vertical,d=t.className,f=t.as,p=void 0===f?"div":f,v=(0,r.Z)(t,["bsPrefix","size","toggle","vertical","className","as"]),h=(0,c.vE)(n,"btn-group"),m=h;return u&&(m=h+"-vertical"),i.createElement(p,(0,a.Z)({},v,{ref:e,className:o()(d,m,s&&h+"-"+s,l&&h+"-toggle")}))}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,toggle:!1,role:"group"},e.Z=l}}]);