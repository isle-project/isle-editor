/*! For license information please see SimpleLinearRegression.c33ea77b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1051:function(t,e,i){i(1104)("Float64",8,(function(t){return function(e,i,o){return t(this,e,i,o)}}))},4034:function(t,e,i){"use strict";i.r(e);i(423);var o=i(515),r=i.n(o),n=i(462),a=i.n(n),d=i(406),s=i.n(d),l=i(414),u=i.n(l),v=i(418),c=i.n(v),p=i(420),f=i.n(p),g=i(421),h=i.n(g),y=i(419),x=i.n(y),m=(i(1051),i(0)),b=i.n(m),F=(i(404),i(4097)),w=i(463),O=i(433),j=i(751),k=i(501),M=i(434),P=i(672),A=i.n(P),C=i(464),q=i.n(C),z=i(1623),D=i.n(z),R=i(1624),S=i.n(R),B=i(6206),E=i.n(B),J=i(963),L=i.n(J),X=i(435),G=i.n(X),H=i(436),I=i.n(H),K=i(661),N=i(531),Q=i(1177),T=i(1063),U=i(711),V=i(425),W=i(448);i(518);function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=x()(t);if(e){var r=x()(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return h()(this,i)}}Object(V.a)("StatisticalModels");var Z=0;function $(t,e){for(var i=Object(K.a)(t),o=Object(K.a)(e),r=0,n=0,a=t.length,d=0;d<a;d++){var s=t[d]-i;r+=s*s,n+=s*(e[d]-o)}var l=n/r;return[o-l*i,l]}function _(t){return q()(t)||A()(t)}function tt(t){return Object(M.isPrimitive)(t)&&!q()(t)}function et(t){var e=t.x,i=t.y,o=t.data,r=t.group,n=t.omitMissing,a=o[e],d=o[i],s=o[r];if(n){var l=[],u=[],v=[];if(s)for(var c=0;c<a.length;c++)!_(s[c])&&tt(a[c])&&tt(d[c])&&(l.push(a[c]),u.push(d[c]),v.push(s[c]));else for(var p=0;p<a.length;p++)tt(a[p])&&tt(d[p])&&(l.push(a[p]),u.push(d[p]));return{xd:l,yd:u,groups:v}}return{xd:a,yd:d,groups:s}}var it=s()("th",{},void 0,"t"),ot=s()("th",{},void 0,"t"),rt=function(t){f()(i,t);var e=Y(i);function i(t){var o;u()(this,i),o=e.call(this,t),Z+=1;var r=t.x,n=t.y,a=t.data,d=t.group,s=t.omitMissing;return o.state=et({x:r,y:n,data:a,group:d,omitMissing:s}),o}return c()(i,[{key:"render",value:function(){var t,e=this,i=this.state,o=i.xd,n=i.yd,d=i.groups,l=this.props,u=l.x,v=l.y,c=l.group,p=l.data,f=l.t,g=s()("td",{},void 0,u);try{if(c){var h=Object(U.a)(o,d,K.a),y=Object(T.a)(o,n,d,$);t=s()("div",{style:{overflowX:"auto",width:"100%"}},void 0,s()("label",{},void 0,f("regression-y-on-x",{x:u,y:v})),s()("p",{},void 0,s()("i",{},void 0,f("grouped-by")," ",c,":")),D()(S()(y,(function(t,e){for(var i=a()(t,2),r=i[0],d=i[1],l=E()(),u=E()(),v=E()(),c=L.a.factory(n.length-2),p=0;p<n.length;p++){l(r+d*o[p]-n[p]),u(o[p]),v(o[p]-h[e])}var y=l()/(n.length-2),x=y/v(),m=I()(x),b=1/n.length*y*u()/v(),F=I()(b),w=d/m,O=r/F;return s()("div",{},void 0,s()("label",{},void 0,e,":"),s()(j.a,{bordered:!0,size:"sm"},void 0,s()("thead",{},void 0,s()("tr",{},void 0,s()("th",{},void 0,f("variable")),s()("th",{},void 0,f("coefficient")),s()("th",{},void 0,f("std-error")),it,s()("th",{},void 0,f("p-value")))),s()("tbody",{},void 0,s()("tr",{},void 0,s()("td",{},void 0,f("intercept")),s()("td",{},void 0,r.toFixed(4)),s()("td",{},void 0,F.toFixed(4)),s()("td",{},void 0,O.toFixed(4)),s()("td",{},void 0,2*(1-c(G()(O))).toFixed(4))),s()("tr",{},void 0,g,s()("td",{},void 0,d.toFixed(4)),s()("td",{},void 0,m.toFixed(4)),s()("td",{},void 0,w.toFixed(4)),s()("td",{},void 0,2*(1-c(G()(w))).toFixed(4))))))}))),this.props.onPredict?s()(k.a,{tooltip:f("use-model-to-predict-tooltip")},void 0,s()(O.a,{variant:"secondary",size:"sm",onClick:function(){for(var t=p[u],i=p[v],o=new Float64Array(i.length),r=new Float64Array(i.length),n=p[c],d=0;d<o.length;d++){var s=a()(y[n[d]],2),l=s[0],f=s[1];o[d]=l+f*t[d],r[d]=i[d]-o[d]}e.props.onPredict(o,r,Z)}},void 0,this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?s()(O.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:function(){for(var t=p[u],i=p[v],o=new Float64Array(i.length),n=new Float64Array(i.length),d=p[c],l=0;l<o.length;l++){var g=a()(y[d[l]],2),h=g[0],x=g[1];o[l]=h+x*t[l],n[l]=i[l]-o[l]}var m={variable:f("qq-plot-of-residuals"),type:"Chart",value:b.a.createElement(N.a,r()({draggable:!0,editable:!0,fit:!0},Object(Q.b)(n,"residuals"),{meta:{type:"qqplot of regression residuals",x:t,y:i}}))},F={variable:f("residuals-vs-fitted"),type:"Chart",value:s()(N.a,{draggable:!0,editable:!0,fit:!0,data:[{x:o,y:n,mode:"markers"}],layout:{xaxis:{title:f("fitted-values")},yaxis:{title:f("residuals")},title:f("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:t,y:i}})};e.props.onDiagnostics([m,F])}},void 0,f("model-diagnostics")):null)}else{for(var x=$(o,n),m=a()(x,2),F=m[0],M=m[1],P=E()(),A=E()(),C=E()(),q=Object(K.a)(o),z=L.a.factory(n.length-2),R=0;R<n.length;R++){P(F+M*o[R]-n[R]),A(o[R]),C(o[R]-q)}var B=P()/(n.length-2),J=B/C(),X=I()(J),H=1/n.length*B*A()/C(),V=I()(H),W=M/X,Y=F/V;t=s()("div",{style:{overflowX:"auto",width:"100%"}},void 0,s()("label",{},void 0,f("simple-regression-title",{x:u,y:v,counter:Z})),s()(j.a,{bordered:!0,size:"sm"},void 0,s()("thead",{},void 0,s()("tr",{},void 0,s()("th",{},void 0,f("variable")),s()("th",{},void 0,f("coefficient")),s()("th",{},void 0,f("std-error")),ot,s()("th",{},void 0,f("p-value")))),s()("tbody",{},void 0,s()("tr",{},void 0,s()("td",{},void 0,f("intercept")),s()("td",{},void 0,F.toFixed(4)),s()("td",{},void 0,V.toFixed(4)),s()("td",{},void 0,Y.toFixed(4)),s()("td",{},void 0,2*(1-z(G()(Y))).toFixed(4))),s()("tr",{},void 0,s()("td",{},void 0,u),s()("td",{},void 0,M.toFixed(4)),s()("td",{},void 0,X.toFixed(4)),s()("td",{},void 0,W.toFixed(4)),s()("td",{},void 0,2*(1-z(G()(W))).toFixed(4))))),this.props.onPredict?s()(k.a,{tooltip:f("use-model-to-predict-tooltip")},void 0,s()(O.a,{variant:"secondary",size:"sm",onClick:function(){for(var t=p[u],i=p[v],o=new Array(i.length),r=new Array(i.length),n=0;n<o.length;n++)o[n]=F+M*t[n],r[n]=i[n]-o[n];e.props.onPredict(o,r,Z)}},void 0,this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?s()(O.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:function(){for(var t=p[u],i=p[v],o=new Array(i.length),n=new Array(i.length),a=0;a<o.length;a++)o[a]=F+M*t[a],n[a]=i[a]-o[a];var d=b.a.createElement(N.a,r()({draggable:!0,editable:!0,fit:!0},Object(Q.b)(n,"residuals"),{meta:{type:"qqplot of regression residuals",x:t,y:i}})),l=s()(N.a,{draggable:!0,editable:!0,fit:!0,data:[{x:o,y:n,mode:"markers",type:o.length>2e3?"scattergl":"scatter"}],layout:{xaxis:{title:f("fitted-values")},yaxis:{title:f("residuals")},title:f("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:t,y:i}});e.props.onDiagnostics([d,l])}},void 0,f("model-diagnostics")):null)}return t}catch(_){return s()(w.a,{variant:"danger"},void 0,f("missing-attributes"))}}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.data!==e.data||t.x!==e.x||t.y!==e.y||t.group!==e.group||t.omitMissing!==e.omitMissing?et({x:t.x,y:t.y,intercept:t.intercept,omitMissing:t.omitMissing,data:t.data,group:t.group}):null}}]),i}(m.Component);rt.defaultProps={group:null,omitMissing:!1,onDiagnostics:null,onPredict:null},e.default=Object(F.a)("StatisticalModels")(Object(W.a)(rt))},6206:function(t,e,i){"use strict";var o=i(6207);t.exports=o},6207:function(t,e,i){"use strict";t.exports=function(){var t,e=0;return function(i){if(0===arguments.length)return t?e:null;return t=!0,e+=i*i}}}}]);