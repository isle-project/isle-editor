(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{1072:function(t,r,e){"use strict";var n=e(640),i=e.n(n),o=e(429);r.a=function(t,r){var e=i()(r);if(!i()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!e&&!Object(o.isPrimitive)(r))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+r+"`.");var n=t.length,a=new Array(n);if(e){if(n!==r.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var s=0;s<n;s++)a[s]=t[s]-r[s]}else for(var c=0;c<n;c++)a[c]=t[c]-r;return a}},4016:function(t,r,e){"use strict";e(890);r.a=function(t,r){for(var e=t.shape[0],n=t.shape[1],i=new Float64Array(e),o=0;o<e;o++){for(var a=0,s=0;s<n;s++)a+=t.get(o,s)*r[s];i[o]=a}return i}},4017:function(t,r,e){"use strict";var n=e(977),i=e.n(n)()("float64",2);r.a=function(t){var r=[t.shape[1],t.shape[0]],e=[t.strides[1],t.strides[0]],n=t.offset,o=t.order;return i(t._buffer,r,e,n,o)}},4041:function(t,r,e){"use strict";e.r(r);var n=e(414),i=e.n(n),o=e(416),a=e.n(o),s=e(424),c=e.n(s),u=e(418),l=e.n(u),f=e(419),v=e.n(f),d=e(417),p=e.n(d),h=e(412),g=e.n(h),y=e(407),b=e.n(y),m=(e(890),e(428),e(643),e(421),e(437),e(433),e(430),e(438),e(439),e(0)),w=(e(404),e(4095)),O=e(454),x=e(556),j=e(3709),F=e(658),A=e(423),P=e(471),M=e.n(P),E=e(882),q=e.n(E),S=e(429),k=e(591),D=e.n(k),T=e(447),z=e.n(T),R=e(455),C=e.n(R),V=e(431),_=e.n(V),B=e(683),J=e.n(B),N=e(474),X=e.n(N),G=e(483),H=e(680),I=e(492),K=e(919),L=e(1072),Q=e(420),U=e(442),W=(e(493),e(448)),Y=e.n(W),Z=(e(837),e(6455)),$=e(891),tt=e(451),rt=e.n(tt),et=e(446),nt=e.n(et),it=e(449),ot=e.n(it),at=e(6123),st=e.n(at),ct=e(579),ut=e.n(ct),lt=e(6125),ft=e.n(lt),vt=e(435),dt=e.n(vt),pt=e(4016),ht=e(4017);var gt=function(t,r){for(var e=Y()(t.shape,2),n=e[0],i=e[1],o=r.shape[1],a=$.b.zeros(n,o),s=new Float64Array(i),c=0;c<o;c++){for(var u=0;u<i;u++)s[u]=r.get(u,c);for(var l=0;l<n;l++){for(var f=0,v=0;v<i;v++)f+=t.get(l,v)*s[v];a.set(l,c,f)}}return a};var yt=function(t,r){for(var e=Y()(t.shape,2),n=e[0],i=e[1],o=q()(new Float64Array(n*i),{shape:[n,i]}),a=0;a<n;a++)for(var s=0;s<i;s++)o.set(a,s,t.get(a,s)*r[a]);return o};var bt=function(t,r){for(var e=t.length,n=new Array(e),i=0;i<e;i++)n[i]=t[i]*r[i];return n},mt=function(t){for(var r=0,e=0;e<t.length;e++)r+=t[e];return r},wt=function(t){for(var r=new Float64Array(t.length),e=0;e<t.length;e++)r[e]=t[e]*(1-t[e]);return r},Ot=function(t){for(var r=t.length,e=new Float64Array(r),n=0;n<r;n++){var i=t[n];if(_()(i)>30)e[n]=ut.a;else{var o=ot()(i);e[n]=o/(1+o)}}return e},xt=function(t){for(var r=t.length,e=new Float64Array(r),n=0;n<r;n++){var i=t[n];_()(i)>30?e[n]=ut.a:e[n]=ot()(i)/nt()(1+ot()(i),2)}return e},jt=function(t,r,e){for(var n=0,i=0;i<t.length;i++)n+=rt()(ft()(t[i],r[i]));return-2*n+2*e},Ft=function(t,r,e){for(var n=t.length,i=new Float64Array(n),o=0;o<n;o++){var a=r[o],s=t[o];i[o]=2*e[o]*(st()(s,s/a)+st()(1-s,(1-s)/(1-a)))}return i},At=function(t,r,e){for(var n=new Float64Array(t.length),i=0;i<t.length;i++)n[i]=t[i]*(r[i]*r[i]/e[i]);return n},Pt=function(t,r,e,n){for(var i=new Float64Array(r.length),o=0;o<r.length;o++)i[o]=t[o]+(r[o]-e[o])/n[o];return i};function Mt(t,r){for(var e=new Float64Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*(1-r[n]);for(var i=Y()(t.shape,2),o=i[0],a=i[1],s=new Float64Array(a),c=0;c<s.length;c++){for(var u=0,l=0;l<o;l++)u+=nt()(t.get(l,c),2)*e[l];s[c]=dt()(1/u)}return s}var Et,qt,St,kt=function(t,r,e){for(var n=Object(ht.a)(t),i=new Array(e).fill(1),o=new Float64Array(i.length),a=0;a<e;a++)o[a]=(i[a]*r[a]+.5)/(i[a]+1);var s,c,u=function(t){for(var r=t.length,e=new Float64Array(r),n=0;n<r;n++)e[n]=rt()(t[n]/(1-t[n]));return e}(o),l=Ot(u),f=mt(Ft(r,l,i)),v=!1;for(c=0;c<25;c++){var d=wt(l),p=xt(u),h=Pt(u,r,l,p),g=At(i,p,d),y=bt(g,h),b=yt(t,g),m=gt(n,b),w=Object(pt.a)(n,y);s=Object(Z.a)(m,$.b.columnVector(w)),u=Object(pt.a)(t,s.to1DArray()),l=Ot(u);var O=mt(Ft(r,l,i));if(_()(O-f)/(.1+_()(O))<1e-8){v=!0;break}f=O}var x=s.to1DArray(),j=function(t){return function(t){for(var r=new Float64Array(t.length),e=0;e<t.length;e++)r[e]=1/(1+ot()(-t[e]));return r}(Object(pt.a)(t,x))},F=j(t);return{aic:jt(r,Ot(u),x.length),stdErrors:Mt(t,F),fitted:F,coefficients:x,iterations:c,converged:v,predict:j}};function Dt(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Tt(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?Dt(Object(e),!0).forEach((function(r){g()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Dt(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function zt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=p()(t);if(r){var i=p()(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return v()(this,e)}}Object(Q.a)("StatisticalModels");var Rt=0;function Ct(t){return C()(t)||D()(t)}function Vt(t){return Object(S.isPrimitive)(t)&&!C()(t)}function _t(t,r,e,n,i,o){for(var a=[],s={},c=e[t[0]].length,u=0;u<t.length;u++){var l=e[t[u]];if(M()(n,t[u]))a.push(t[u]);else{for(var f=Object(K.a)(l,t[u]),v=i?1:0;v<f.length;v++)a.push("".concat(t[u],"_").concat(f[v]));s[t[u]]=f}}for(var d=new Float64Array(c*(a.length+1)),p=0;p<c;p++){i&&(d[(a.length+1)*p]=1);for(var h=0,g=0;g<t.length;g++){var y=e[t[g]];if(M()(n,t[g]))h+=1,d[(a.length+1)*p+h]=y[p];else for(var b=s[t[g]],m=y[p],w=i?1:0;w<b.length;w++)h+=1,d[(a.length+1)*p+h]=m===b[w]?1:0}}return{matrix:q()(d,{shape:[c,a.length+1]}),predictors:a,yvalues:e[r].map((function(t){return t===o?1:0})),nobs:c}}function Bt(t,r,e,n,i,o){for(var a=[],s={},c=0;c<t.length;c++){var u=e[t[c]];if(M()(n,t[c]))a.push(t[c]);else{for(var l=Object(K.a)(u,t[c]),f=i?1:0;f<l.length;f++)a.push("".concat(t[c],"_").concat(l[f]));s[t[c]]=l}}for(var v=[],d=[],p=0;p<e[t[0]].length;p++){var h=!1,g=[];i&&g.push(1);for(var y=0;y<t.length;y++){var b=e[t[y]];if(M()(n,t[y]))Vt(b[p])?g.push(b[p]):h=!0;else{var m=b[p];if(Ct(m))h=!0;else for(var w=s[t[y]],O=i?1:0;O<w.length;O++)g.push(m===w[O]?1:0)}}h||(v=v.concat(g),d.push(e[r][p]===o?1:0))}var x=d.length;return{matrix:q()(v,{shape:[x,a.length+1]}),predictors:a,yvalues:d,nobs:x}}var Jt=function(t){var r=t.y,e=t.success,n=t.x,i=t.intercept,o=t.omitMissing,a=t.data,s=t.quantitative;try{z()(n)||(n=[n]);var c=(o?Bt:_t)(n,r,a,s,i,e),u=c.matrix,l=c.predictors,f=c.yvalues,v=c.nobs;return{result:kt(u,f,v),predictors:l}}catch(d){return{}}},Nt=function(t){l()(e,t);var r=zt(e);function e(t){var n;i()(this,e),n=r.call(this,t),g()(c()(n),"handlePredict",(function(){var t=n.props,r=t.x,e=t.y,i=t.data,o=t.quantitative,a=t.intercept,s=t.success;z()(r)||(r=[r]);var c=_t(r,e,i,o,a,s),u=c.matrix,l=c.yvalues,f=n.state.result.predict(u),v=Object(L.a)(f,l),d=f.map((function(t){return t>n.state.probabilityThreshold}));n.props.onPredict(d,f,v,Rt)})),Rt+=1;var o=t.y,a=t.success,s=t.x,u=t.intercept,l=t.omitMissing,f=t.data,v=t.quantitative,d=Jt({y:o,success:a,x:s,intercept:u,omitMissing:l,data:f,quantitative:v}),p=d.result,h=d.predictors;return n.state=Tt({probabilityThreshold:.5,result:p,predictors:h},t),n}return a()(e,[{key:"render",value:function(){var t=this,r=this.state.result,e=this.props.t;return r?b()("div",{style:{overflowX:"auto",width:"100%"}},void 0,b()("span",{className:"title"},void 0,e("logistic-title",{y:this.props.y,counter:Rt})),function(t,r,e,n){return b()(H.a,{bordered:!0,size:"sm"},void 0,b()("thead",{},void 0,b()("tr",{},void 0,b()(G.a,{placement:"right",tooltip:n("name-of-predictor")},void 0,b()("th",{},void 0,n("predictor"))),b()(G.a,{placement:"right",tooltip:n("change-in-log")},void 0,b()("th",{},void 0,n("coefficient"))),b()(G.a,{placement:"left",tooltip:n("standard-deviation-coefficient")},void 0,b()("th",{},void 0,n("std-error"))),b()(G.a,{placement:"left",tooltip:b()("span",{},void 0,n("Test statistic for hypothesis that coefficient is zero"),Et||(Et=b()(I.a,{displayMode:!0,raw:"t = \\tfrac{\\text{Coefficient}}{\\text{Std. Error}}"})))},void 0,qt||(qt=b()("th",{},void 0,"t"))),b()(G.a,{placement:"left",tooltip:b()("span",{},void 0,n("p-value-coefficient-zero"),St||(St=b()(I.a,{displayMode:!0,raw:"2 \\Phi( |t| )"})))},void 0,b()("th",{},void 0,n("p-value"))))),b()("tbody",{},void 0,r?b()("tr",{},void 0,b()("th",{},void 0,n("intercept")),b()("td",{},void 0,e.coefficients[0].toFixed(6)),b()("td",{},void 0,e.stdErrors[0].toFixed(4)),b()("td",{},void 0,(e.coefficients[0]/e.stdErrors[0]).toFixed(4)),b()("td",{},void 0,(2*J()(-_()(e.coefficients[0]/e.stdErrors[0]),0,1)).toFixed(4))):null,t.map((function(t,n){n+=Number(r);var i=e.coefficients[n]/e.stdErrors[n],o=2*J()(-_()(i),0,1);return b()("tr",{},n,b()("th",{},void 0,t),b()("td",{},void 0,e.coefficients[n].toFixed(6)),b()("td",{},void 0,e.stdErrors[n].toFixed(4)),b()("td",{},void 0,i.toFixed(4)),b()("td",{},void 0,o.toFixed(4)))}))))}(this.state.predictors,this.props.intercept,r,this.props.t),b()("i",{},void 0,r.converged?e("fisher-scoring-converged",{n:r.iterations}):e("fisher-scoring-not-converged",{n:r.iterations})),b()("p",{},void 0,e("aic"),": ",X()(r.aic,-3)),this.props.onPredict?b()(x.a,{},void 0,b()(G.a,{tooltip:e("use-model-to-predict-tooltip-logistic")},void 0,b()(A.a,{variant:"secondary",size:"sm",onClick:this.handlePredict},void 0,this.props.t("use-model-to-predict"))),b()(j.a,{size:"sm"},void 0,b()(j.a.Prepend,{},void 0,b()(j.a.Text,{},void 0,e("threshold"),":")),b()(F.a,{type:"number",min:0,max:1,defaultValue:.5,step:.01,onChange:function(r){t.setState({probabilityThreshold:r.target.value})}}))):null):b()(O.a,{variant:"danger"},void 0,e("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,r){if(t.data!==r.data||t.quantitative!==r.quantitative||t.x!==r.x||t.y!==r.y||t.success!==r.success||t.omitMissing!==r.omitMissing){var e=t.y,n=t.success,i=t.x,o=t.intercept,a=t.omitMissing,s=t.data,c=t.quantitative;return Tt(Tt({},Jt({y:e,success:n,x:i,intercept:o,omitMissing:a,data:s,quantitative:c})),t)}return null}}]),e}(m.Component);Nt.defaultProps={omitMissing:!1,intercept:!0,onPredict:null};r.default=Object(w.a)("StatisticalModels")(Object(U.a)(Nt))}}]);