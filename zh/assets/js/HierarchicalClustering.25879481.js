(self.webpackChunk=self.webpackChunk||[]).push([[898],{672096:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return mt}});n(382139),n(627476),n(95767),n(898837),n(694882),n(298351);var r=n(858255),a=n(151119),i=n(264659),o=n(904730),c=n(175663),s=n(750591),u=n(575630),l=n(202784),f=(n(213980),n(198)),h=n(822736),d=n(857906),v=n.n(d),p=n(790599),g=n(911738),m=n(806258),y=n(819690),w=(n(6059),n(805312)),Z=n(673989);n(440856);function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var x,k,R=(x=function(t,e,n){var r=w.Ys(t.current),a=e.width,i=e.height,o=e.data,c=40,s=40,u=a-s-0,l=i-c-0,f=e.fontSize||16;!function(t){var n=function(t){var e=w.bT9(t);return e.dx=15,e.dy=u/(e.height+1),w.ki8().size([l,u/1.35])(e)}(t),a=1/0,i=-a;n.each((function(t){t.x>i&&(i=t.x),t.x<a&&(a=t.x)})),n.children.forEach((function t(n){n.children&&(n._children=n.children,n._children.forEach(t),n.value<e.cutoff&&(n.children=null))}));var o=n.dy/6+s,h=n.dx-a+c,d=r.append("g").attr("font-family","sans-serif").attr("font-size",f).attr("transform","translate(".concat(o,",").concat(h,")"));d.append("g").attr("fill","none").attr("stroke","#555").attr("stroke-opacity",.4).attr("stroke-width",1).selectAll("path").data(n.links()).join("path").attr("d",(function(t){return"\n\t\t\t\tM".concat(t.target.y,",").concat(t.target.x,"\n\t\t\t\tC").concat(t.source.y+n.dy/2,",").concat(t.target.x,"\n\t\t\t\t ").concat(t.source.y+n.dy/2,",").concat(t.source.x,"\n\t\t\t\t ").concat(t.source.y,",").concat(t.source.x,"\n\t\t\t")}));var v=d.append("g").attr("stroke-linejoin","round").attr("stroke-width",.1875*f).selectAll("g").data(n.descendants().reverse()).join("g").attr("transform",(function(t){return"translate(".concat(t.y,",").concat(t.x,")")}));v.append("circle").attr("fill",(function(t){return t.children?"#555":"#999"})).attr("r",.15*f).on("click",(function(t){t.children=t.children?null:t._children})),v.append("text").attr("dy","0.1em").attr("x",(function(t){return t.children?-6:6})).attr("font-size",f).text((function(t){return t.data.name})).filter((function(t){return t.children})).attr("text-anchor","end").clone(!0).lower().attr("stroke","white")}(o)},function(t){(0,c.Z)(n,t);var e=b(n);function n(){var t;(0,i.Z)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o)),(0,a.Z)((0,Z.Z)(t),"anchor",l.createRef()),t}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){x(this.anchor,this.props,this.state)}},{key:"componentDidUpdate",value:function(){x(this.anchor,this.props,this.state)}},{key:"render",value:function(){var t=this.props,e=t.x,n=t.y,r=this.props.component||"g";return l.createElement(r,{transform:"translate(".concat(e,", ").concat(n,")"),ref:this.anchor})}}]),n}(l.Component)),O=n(770561),C=n(81982),E=n(150275);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var S=function(t){(0,c.Z)(n,t);var e=T(n);function n(){var t;return(0,i.Z)(this,n),t=e.call(this),(0,a.Z)((0,Z.Z)(t),"toggleFullscreen",(function(){t.setState({fullscreen:!t.state.fullscreen})})),t.state={fullscreen:!1},t}return(0,o.Z)(n,[{key:"render",value:function(){var t=this.props.t;return(0,r.Z)(l.Fragment,{},void 0,(0,r.Z)(E.Z,{id:"fullscreen_tooltip",placement:"bottom",tooltip:t("toggle-fullscreen")},void 0,(0,r.Z)(O.Z,{variant:"outline-danger",size:"sm",onClick:this.toggleFullscreen,style:{position:"absolute",top:"10px",right:"32px"}},void 0,k||(k=(0,r.Z)("div",{className:"fa fa-window-maximize"})))),(0,r.Z)(C.Z,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,(0,r.Z)(C.Z.Header,{closeButton:!0},void 0,(0,r.Z)(C.Z.Title,{as:"h1"},void 0,t("hierarchical-clustering"))),(0,r.Z)(C.Z.Body,{style:{height:.75*window.innerHeight,width:"100%",fontSize:32,overflow:"scroll"}},void 0,this.props.dendrogram),(0,r.Z)(C.Z.Footer,{},void 0,(0,r.Z)(O.Z,{onClick:this.toggleFullscreen},void 0,t("close")))))}}]),n}(l.Component),_=(n(319371),n(320765)),j=n(338555),P=n.n(j),z=n(801697),A=n.n(z),D=n(537213),B=n.n(D),q=n(783990),L=n.n(q),F=n(650767),M=n.n(F),N=n(901161),H=n.n(N),V=n(636734),I=n.n(V),K=n(951735),U=n.n(K),W=n(609776),G=n.n(W),X=n(613323),Y=n.n(X),J=n(614972),Q=n.n(J),$=n(974652),tt=n.n($),et=n(272008),nt=n.n(et),rt=(n(976142),n(801420)),at=n.n(rt);function it(t){if(!at()(t))throw new TypeError("invalid argument. values must be an Array. Option: `"+t+"`.");var e=t;if(this._queue=[],e)for(var n=0;n<e.length;n++)this.insert(e[n])}it.prototype.insert=function(t){var e=this.search(t);this._queue.splice(e,0,t)},it.prototype.max=function(){return this._queue[this._queue.length-1]},it.prototype.delMax=function(){return this._queue.pop()},it.prototype.delete=function(t){for(var e=0;e<this.size();e++)if(this._queue[e]===t){this._queue.splice(e,1);break}},it.prototype.reset=function(){this._queue=[]},it.prototype.size=function(){return this._queue.length},it.prototype.search=function(t){for(var e=0,n=this._queue.length;e!==n;){var r=n+e>>>1;this._queue[r].sim-t.sim<=0?e=r+1:n=r}return e};var ot=it;function ct(t){return function(e){return e===t}}function st(t,e,n){for(var r=t,a=r.length,i=[],o=[],c=function(t,e){for(var n=[],r=0;r<t;r++)n[r]=new Array(e);return n}(a,a),s=0;s<a;s++){for(var u=0;u<a;u++)c[s][u]={sim:1/(1+n(r[s],r[u])),index:u};o[s]=1,i[s]=new ot(c[s]),i[s].delete(c[s][s])}var l=[];function f(t,e){return 1===o[e]?t.max().sim:0}for(var h=0;h<a-1;h++){var d=P()(i.map(f))[0],v=i[d].max().index;l.push([d,v]),o[v]=0,i[d].reset();for(var p=0;p<o.length;p++)1===o[p]&&p!==d&&(i[p].delete(c[p][d]),i[p].delete(c[p][v]),c[p][d].sim=e(p,d,v,c),i[p].insert(c[p][d]),c[d][p].sim=e(p,d,v,c),i[d].insert(c[d][p]))}return l}var ut,lt=function(t,e){var n,r,a,i;if(!G()(t))throw new TypeError("invalid input argument. Data must be passed as an array of arrays. Value: `"+t+"`.");if(arguments.length>1){if(!U()(e))throw new TypeError("invalid input argument. Options argument must be an object. Value: `"+e+"`.");if(I()(e,"linkage")&&"single"!==(i=e.linkage)&&"complete"!==i)throw new TypeError('invalid option. Linkage option must be either "single" or "complete". Option: `'+i+"`.");if(I()(e,"distance")&&(a=e.distance,!["chebyshev","cosine","euclidean","hamming","manhattan"].some(ct(a))))throw new TypeError('invalid option. Distance option must be "chebyshev", "cosine", "euclidean", "hamming" or "manhattan". Option: `'+a+"`.")}switch(i){case"single":r=function(t,e,n,r){return tt()(r[t][e].sim,r[t][n].sim)};break;default:r=function(t,e,n,r){return nt()(r[t][e].sim,r[t][n].sim)}}switch(a){case"chebyshev":n=A();break;case"cosine":n=B();break;case"hamming":n=M();break;case"manhattan":n=H();break;default:n=L()}var o=st(t,r,n);function c(e){if(!Y()(e))throw new TypeError("invalid argument. The number of desired clusters must be an integer. Option: `"+e+"`.");for(var n=[],r=0;r<t.length;r++){var a=[r];n.push(a)}for(var i=n.length,c=0;i>e;){var s=n[o[c][0]].concat(n[o[c][1]]);n[o[c][0]]=s,n[o[c][1]]=null,i--,c++}return n.filter((function(t){return!Q()(t)}))}function s(e){for(var n=c(e),r=new Array(t.length),a=0;a<n.length;a++)for(var i=n[a],o=0;o<i.length;o++){r[i[o]]="".concat(_.a.t("StatisticalModels:cluster")," ").concat(a+1)}return r}function u(){for(var e=[],n=0;n<t.length;n++){var r={};r.name=t[n].join(", "),r.value=1,e.push(r)}for(var a=0;a<o.length;){var i={children:[e[o[a][0]],e[o[a][1]]],value:e[o[a][0]].value+e[o[a][1]].value,name:e[o[a][0]].value+e[o[a][1]].value};e[o[a][0]]=i,e[o[a][1]]=null,a++}return e[0]}return{getClusterAssignments:s,getClusters:c,getTree:u}},ft=n(432261);function ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var pt=function(t){var e=t.data,n=t.variables,r=t.linkage,a=t.distance;try{for(var i=[],o=e[n[0]].length,c=0;c<o;c++){for(var s=[],u=0;u<n.length;u++)s[u]=e[n[u]][c];i.push(s)}var l=lt(i,{linkage:r,distance:a}),f=l.getTree();return{matrix:i,result:l,tree:f}}catch(h){return{}}},gt=function(t){(0,c.Z)(n,t);var e=vt(n);function n(t){var r;(0,i.Z)(this,n),r=e.call(this,t);var a=t.data,o=t.variables,c=t.linkage,s=t.distance;return r.state=dt(dt({},pt({data:a,variables:o,linkage:c,distance:s})),t),t.onResult(r.state.result),r}return(0,o.Z)(n,[{key:"render",value:function(){var t=this,e=this.state.result,n=this.props.t;return e?(0,r.Z)("div",{style:{overflowX:"auto",width:"100%"}},void 0,(0,r.Z)("span",{className:"title"},void 0,n("hierarchical-clustering-summary")),(0,r.Z)("button",{className:"hierarchical-clustering-draggable-bar",draggable:"true",onDragStart:function(e){e.dataTransfer.setData("text/html",t.plotValue),e.dataTransfer.setData("text/plain",t.plotKey)},onClick:function(){(0,m.Z)(t.plotValue)}},void 0,n("drag-plot")),(0,r.Z)(S,{variant:"outline-danger",size:"sm",onClick:function(){t.setState({fullscreen:!t.state.fullscreen})},dendrogram:(0,r.Z)("svg",{width:window.innerWidth,height:window.innerHeight},void 0,(0,r.Z)(R,{x:0,y:0,width:window.innerWidth,height:window.innerHeight-25,data:this.state.tree,cutoff:v()(this.state.matrix.length/20),fontSize:24}),";"),t:n},void 0,ut||(ut=(0,r.Z)("div",{className:"fa fa-times"}))),(0,r.Z)("div",{},void 0,l.createElement("svg",{width:650,height:375,ref:function(e){if(!t.svg){t.svg=e;var n=(0,g.e)(t.svg);(0,g.C)(n,1300,750,(function(e){(0,y.Z)(e).then((function(e){var n='<img src="'.concat(e,'" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />');t.plotKey="\x3c!--IMAGE_LOG:".concat((0,p.Z)(6),"_").concat((0,p.Z)(6),"--\x3e"),t.plotValue=n}))}))}}},(0,r.Z)(R,{x:0,y:0,width:650,height:350,data:this.state.tree,cutoff:v()(this.state.matrix.length/20)}),";"))):(0,r.Z)(h.Z,{variant:"danger"},void 0,n("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.variables!==e.variables||t.linkage!==e.linkage||t.distance!==e.distance){var n=t.data,r=t.variables,a=t.linkage,i=t.distance,o=dt(dt({},pt({data:n,variables:r,linkage:a,distance:i})),t);return t.onResult(o.result),o}return null}}]),n}(l.Component);gt.defaultProps={linkage:"complete",distance:"euclidean",onResult:function(){}};var mt=(0,f.Z)("models")((0,ft.W)(gt))},819690:function(t,e,n){"use strict";n(296253),n(940851);e.Z=function(t){var e=new(0,window.FileReader);return e.readAsDataURL(t),new Promise((function(t){e.onloadend=function(){t(e.result)}}))}},806258:function(t,e){"use strict";e.Z=function(t){var e=document.createElement("div");e.innerHTML=t,e.style.position="fixed",e.style.opacity=0,e.style.pointerEvents="none",document.body.appendChild(e),window.getSelection().removeAllRanges();var n=document.createRange();n.selectNode(e),window.getSelection().addRange(n),document.execCommand("copy"),document.body.removeChild(e)}},911738:function(t,e,n){"use strict";n.d(e,{e:function(){return u},C:function(){return l}});n(6059),n(59357);var r=n(801420),a=n.n(r),i=n(636150),o=n.n(i),c=n(857906),s=n.n(c);function u(t){if(!t)return"";t.setAttribute("xlink","http://www.w3.org/1999/xlink"),t.setAttribute("style","background: white;"),function(t,e){var n=document.createElement("style");if(n.setAttribute("type","text/css"),n.innerHTML=t,a()(e.children)){var r=e.children[0]||null;e.insertBefore(n,r)}}(function(t){var e=[];if(e.push("#"+t.id),a()(t.classList))for(var n=0;n<t.classList.length;n++)o()(e,"."+t.classList[n])||e.push("."+t.classList[n]);for(var r=t.getElementsByTagName("*"),i=0;i<r.length;i++){var c=r[i].id;o()(e,"#"+c)||e.push("#"+c);var s=r[i].classList;if(a()(s))for(var u=0;u<s.length;u++)o()(e,"."+s[u])||e.push("."+s[u])}for(var l="",f=0;f<document.styleSheets.length;f++){var h=document.styleSheets[f];try{if(!h.cssRules)continue}catch(p){if("SecurityError"!==p.name)throw p;continue}for(var d=h.cssRules,v=0;v<d.length;v++)o()(e,d[v].selectorText)&&(l+=d[v].cssText)}return l}(t),t);var e=(new XMLSerializer).serializeToString(t);return e=(e=e.replace(/(\w+)?:?xlink=/g,"xmlns:xlink=")).replace(/NS\d+:href/g,"xlink:href")}function l(t,e,n,r){var a="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t))),i=document.createElement("canvas"),o=i.getContext("2d");i.width=e,i.height=n;var c=new Image;c.onload=function(){o.clearRect(0,0,e,n),o.drawImage(c,0,0,e,n),i.toBlob((function(t){var e=s()(t.length/1024)+" KB";if(r)return r(t,e)}))},c.src=a}}}]);