(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1199:function(t,e,n){"use strict";(function(t){n(501),n(663),n(679);var r=/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i;function o(e){t((function(){throw e}),0)}function a(t){return r.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}var s=function(t){if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document.createElementNS("http://www.w3.org/1999/xhtml","a"),n="download"in e,r=/constructor/i.test(t.HTMLElement)||t.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),i=t.setImmediate||t.setTimeout,c=d.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=a(t)),navigator.msSaveOrOpenBlob(t,e)}:(c.abort=function(){},c.readyState=c.INIT=0,c.WRITING=1,c.DONE=2,c.error=null,c.onwritestart=null,c.onprogress=null,c.onwrite=null,c.onabort=null,c.onerror=null,c.onwriteend=null,function(t,e,n){return new d(t,e||t.name||"download",n)})}function u(){return t.URL||t.webkitURL||t}function l(t){setTimeout((function(){"string"==typeof t?u().revokeObjectURL(t):t.remove()}),4e4)}function d(c,d,p){p||(c=a(c));var f,h=this,v="application/octet-stream"===c.type;function w(){!function(t,e,n){for(var r=(e=[].concat(e)).length;r--;){var a=t["on"+e[r]];if("function"==typeof a)try{a.call(t,n||t)}catch(s){o(s)}}}(h,"writestart progress write writeend".split(" "))}if(h.readyState=h.INIT,n)return f=u().createObjectURL(c),void i((function(){var t,n;e.href=f,e.download=d,t=e,n=new MouseEvent("click"),t.dispatchEvent(n),w(),l(f),h.readyState=h.DONE}),0);!function(){if((s||v&&r)&&t.FileReader){var e=new FileReader;return e.onloadend=function(){var n=s?e.result:e.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(n,"_blank")||(t.location.href=n),n=void 0,h.readyState=h.DONE,w()},e.readAsDataURL(c),void(h.readyState=h.INIT)}f||(f=u().createObjectURL(c)),v?t.location.href=f:t.open(f,"_blank")||(t.location.href=f),h.readyState=h.DONE,w(),l(f)}()}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content);e.a=s}).call(this,n(1042).setImmediate)},4020:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));n(663),n(501);var r=n(448),o=n.n(r),a=n(482),s=n.n(a),i=n(594),c=n.n(i);function u(t){t.setAttribute("xlink","http://www.w3.org/1999/xlink"),t.setAttribute("style","background: white;"),function(t,e){var n=document.createElement("style");if(n.setAttribute("type","text/css"),n.innerHTML=t,o()(e.children)){var r=e.children[0]||null;e.insertBefore(n,r)}}(function(t){var e=[];if(e.push("#"+t.id),o()(t.classList))for(var n=0;n<t.classList.length;n++)s()(e,"."+t.classList[n])||e.push("."+t.classList[n]);for(var r=t.getElementsByTagName("*"),a=0;a<r.length;a++){var i=r[a].id;s()(e,"#"+i)||e.push("#"+i);var c=r[a].classList;if(o()(c))for(var u=0;u<c.length;u++)s()(e,"."+c[u])||e.push("."+c[u])}for(var l="",d=0;d<document.styleSheets.length;d++){var p=document.styleSheets[d];try{if(!p.cssRules)continue}catch(v){if("SecurityError"!==v.name)throw v;continue}for(var f=p.cssRules,h=0;h<f.length;h++)s()(e,f[h].selectorText)&&(l+=f[h].cssText)}return l}(t),t);var e=(new XMLSerializer).serializeToString(t);return e=(e=e.replace(/(\w+)?:?xlink=/g,"xmlns:xlink=")).replace(/NS\d+:href/g,"xlink:href")}function l(t,e,n,r){var o="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t))),a=document.createElement("canvas"),s=a.getContext("2d");a.width=e,a.height=n;var i=new Image;i.onload=function(){s.clearRect(0,0,e,n),s.drawImage(i,0,0,e,n),a.toBlob((function(t){var e=c()(t.length/1024)+" KB";if(r)return r(t,e)}))},i.src=o}},6486:function(t,e,n){"use strict";n.r(e);n(421),n(438),n(436),n(525),n(540),n(441);var r=n(404),o=n.n(r),a=n(412),s=n.n(a),i=n(416),c=n.n(i),u=n(425),l=n.n(u),d=n(418),p=n.n(d),f=n(419),h=n.n(f),v=n(417),w=n.n(v),g=n(410),m=n.n(g),y=(n(511),n(849),n(0)),b=(n(402),n(23)),O=n(4088),x=n(431),C=n(932),k=n(6173),S=n.n(k),j=n(1199),R=n(1116),L=n.n(R),N=n(520),T=n.n(N),E=n(3789),I=n.n(E),z=n(595),D=n.n(z),P=n(3737),M=n.n(P),B=n(482),U=n.n(B),A=n(442),W=n(1555),F=n.n(W),G=n(1443),H=n.n(G),J=n(448),_=n.n(J),K=n(430),X=n.n(K),q=n(466),Q=n.n(q),V=n(6174),Y=n.n(V),Z=n(6176),$=n.n(Z),tt=n(6178),et=n.n(tt),nt=n(6180),rt=n.n(nt),ot=n(6182),at=n.n(ot),st=n(6184),it=n.n(st),ct=n(6186),ut=n.n(ct),lt=n(6188),dt=n.n(lt),pt=n(499),ft=n(4020),ht=n(423),vt=n(445);function wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?wt(Object(n),!0).forEach((function(e){m()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function mt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w()(t);if(e){var o=w()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}Object(ht.a)("WordCloud");var yt=Object(C.n)(C.o),bt=/[+-]?[\d.]+e?[+-]?\d*/g;var Ot=function(t){var e=t.texts,n=t.stopwords,r=t.minCount,o=t.customStopwords;if(!_()(e)||0===e.length)return{min:X.a,max:Q.a,wordCounts:[]};n=n.concat(o);for(var a=[],s=0;s<e.length;s++){var i=e[s];if(Object(A.isPrimitive)(i)){i=I()(i),i=D()(i,bt," ");var c=M()(i);a=a.concat(c)}}for(var u=0;u<a.length;u++)a[u]=F()(a[u]);for(var l=a.length;l>0;l--)a[l]&&U()(n,F()(a[l]))&&a.splice(l,1);for(var d={},p=0;p<a.length;p++)d[a[p]]?d[a[p]]+=1:d[a[p]]=1;var f=Q.a,h=X.a,v=H()(d).map((function(t){return t[1]>f&&(f=t[1]),t[1]<h&&(h=t[1]),{text:t[0],value:t[1]}}));if(!r)return{min:h,max:f,wordCounts:v};for(var w=[],g=0;g<v.length;g++)v[g].value>=r&&w.push(v[g]);return{min:h,max:f,wordCounts:w}},xt=o()("div",{className:"fa fa-save"}),Ct=function(t){p()(n,t);var e=mt(n);function n(t){var r;s()(this,n),r=e.call(this,t),m()(l()(r),"fontSizeMapper",(function(t){var e=r.state,n=e.min,o=e.max;return o===n?50:(t.value-n+1)/(o-n+6)*30+12})),m()(l()(r),"saveToPNG",(function(){var t,e=r.props,n=e.width,o=e.height,a=Object(ft.a)(r.svg.node());Object(ft.b)(a,2*n,2*o,(function(e){Object(j.a)(e,t)})),t=r.props.id?r.props.id+".png":"wordcloud.png"}));var o=function(t){var e;switch(t){default:case"en":e=Y()();break;case"fin":e=$()();break;case"fr":e=et()();break;case"ger":e=rt()();break;case"it":e=at()();break;case"por":e=it()();break;case"sp":e=ut()();break;case"swe":e=dt()()}return e}(t.language);if(t.precalculated)r.state={wordCounts:t.data.slice(),stopwords:o,nRecords:t.data.length};else{var a=Ot({texts:t.data,stopwords:o,minCount:t.minCount,customStopwords:t.stopwords}),i=a.min,c=a.max,u=a.wordCounts;r.state={wordCounts:u,min:i,max:c,stopwords:o,nRecords:t.data.length}}return r}return c()(n,[{key:"componentDidMount",value:function(){this.addWordCloud()}},{key:"shouldComponentUpdate",value:function(t){return!!(L()(t.data.length,this.state.nRecords)>=this.props.updateThreshold||this.props.triggerRender&&!function(t,e){for(var n=T()(t.length,10),r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}(t.data,this.props.data)||t.stopwords.length!==this.props.stopwords.length)}},{key:"componentDidUpdate",value:function(){this.state.wordCounts.length>0&&this.updateWordCloud(),this.state.nRecords!==this.props.data.length&&this.setState({nRecords:this.props.data.length})}},{key:"addWordCloud",value:function(){var t=this,e=this.props.fontSizeMapper||this.fontSizeMapper;Object(C.p)(Object(b.findDOMNode)(this)).selectAll("svg").remove(),this.svg=Object(C.p)(Object(b.findDOMNode)(this)).append("svg").attr("width",this.props.width).attr("height",this.props.height).style("background","#ffffff"),this.svg.append("g").attr("transform","translate(".concat(this.props.width/2,",").concat(this.props.height/2,")")),this.cloudLayout=S()().size([this.props.width,this.props.height]).font(this.props.font).words(this.state.wordCounts).padding(this.props.padding).rotate(this.props.rotate).fontSize(e).on("end",(function(e){var n=t.svg.select("g").selectAll("text").data(e,(function(t){return t.text}));n.transition().duration(750).style("font-size",(function(t){return"".concat(t.size,"px")})).attr("transform",(function(t){return"translate(".concat([t.x,t.y],")rotate(").concat(t.rotate,")")})),n.enter().append("text").style("font-size",(function(t){return"".concat(t.size,"px")})).style("font-family",t.props.font).style("fill",(function(t,e){return yt(e)})).style("cursor","pointer").attr("text-anchor","middle").attr("transform",(function(t){return"translate(".concat([t.x,t.y],")rotate(").concat(t.rotate,")")})).text((function(t){return t.text})).on("click",t.props.onClick),n.exit().transition().duration(750).style("fill-opacity",1e-6).remove()})).start()}},{key:"updateWordCloud",value:function(){var t=this.state.wordCounts;this.cloudLayout.stop().words(t.map((function(t){return{text:t.text,value:t.value}}))).start()}},{key:"render",value:function(){return o()("div",{style:gt({width:this.props.width,position:"relative"},this.props.style)},void 0,this.props.saveButton&&this.state.wordCounts.length>0?o()(pt.a,{placement:"left",tooltip:this.props.t("save-word-cloud")},void 0,o()(x.a,{size:"sm",variant:"light",onClick:this.saveToPNG,style:{position:"absolute",right:-12,top:-12,zIndex:2},"aria-label":this.props.t("save-word-cloud")},void 0,xt)):null)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n;if(t.precalculated)n={wordCounts:t.data.slice()};else{var r=Ot({texts:t.data,stopwords:e.stopwords,minCount:t.minCount,customStopwords:t.stopwords}),o=r.min,a=r.max;n={wordCounts:r.wordCounts,min:o,max:a,stopwords:e.stopwords}}return n}}]),n}(y.Component);Ct.defaultProps={data:[],font:"serif",fontSizeMapper:null,precalculated:!1,rotate:function(t){return t.value%360},width:700,height:600,language:"en",minCount:null,saveButton:!0,updateThreshold:5,stopwords:[],triggerRender:!0,padding:5,onClick:function(){},style:{}},e.default=Object(O.a)("WordCloud")(Object(vt.a)(Ct))}}]);