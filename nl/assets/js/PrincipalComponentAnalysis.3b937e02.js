(self.webpackChunk=self.webpackChunk||[]).push([[6588],{510216:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return L}});var r=s(151119),a=s(264659),o=s(904730),n=s(175663),i=s(750591),l=s(575630),h=s(858255),f=(s(319371),s(382139),s(627476),s(95767),s(898837),s(694882),s(298351),s(202784)),c=(s(213980),s(822736)),g=s(920756);class u extends g.X{constructor(t,e,s){super(),this.matrix=t,this.rows=e,this.columns=s}}class m extends u{constructor(t){super(t,t.columns,t.rows)}set(t,e,s){return this.matrix.set(e,t,s),this}get(t,e){return this.matrix.get(e,t)}}var d=s(49909),p=s(70756),b=s(31845);class M{constructor(t,e={}){const{assumeSymmetric:s=!1}=e;if(!(t=p.Z.checkMatrix(t)).isSquare())throw new Error("Matrix is not a square matrix");if(t.isEmpty())throw new Error("Matrix must be non-empty");let r,a,o=t.columns,n=new g.Z(o,o),i=new Float64Array(o),l=new Float64Array(o),h=t,f=!1;if(f=!!s||t.isSymmetric(),f){for(r=0;r<o;r++)for(a=0;a<o;a++)n.set(r,a,h.get(r,a));!function(t,e,s,r){let a,o,n,i,l,h,f,c;for(l=0;l<t;l++)s[l]=r.get(t-1,l);for(i=t-1;i>0;i--){for(c=0,n=0,h=0;h<i;h++)c+=Math.abs(s[h]);if(0===c)for(e[i]=s[i-1],l=0;l<i;l++)s[l]=r.get(i-1,l),r.set(i,l,0),r.set(l,i,0);else{for(h=0;h<i;h++)s[h]/=c,n+=s[h]*s[h];for(a=s[i-1],o=Math.sqrt(n),a>0&&(o=-o),e[i]=c*o,n-=a*o,s[i-1]=a-o,l=0;l<i;l++)e[l]=0;for(l=0;l<i;l++){for(a=s[l],r.set(l,i,a),o=e[l]+r.get(l,l)*a,h=l+1;h<=i-1;h++)o+=r.get(h,l)*s[h],e[h]+=r.get(h,l)*a;e[l]=o}for(a=0,l=0;l<i;l++)e[l]/=n,a+=e[l]*s[l];for(f=a/(n+n),l=0;l<i;l++)e[l]-=f*s[l];for(l=0;l<i;l++){for(a=s[l],o=e[l],h=l;h<=i-1;h++)r.set(h,l,r.get(h,l)-(a*e[h]+o*s[h]));s[l]=r.get(i-1,l),r.set(i,l,0)}}s[i]=n}for(i=0;i<t-1;i++){if(r.set(t-1,i,r.get(i,i)),r.set(i,i,1),n=s[i+1],0!==n){for(h=0;h<=i;h++)s[h]=r.get(h,i+1)/n;for(l=0;l<=i;l++){for(o=0,h=0;h<=i;h++)o+=r.get(h,i+1)*r.get(h,l);for(h=0;h<=i;h++)r.set(h,l,r.get(h,l)-o*s[h])}}for(h=0;h<=i;h++)r.set(h,i+1,0)}for(l=0;l<t;l++)s[l]=r.get(t-1,l),r.set(t-1,l,0);r.set(t-1,t-1,1),e[0]=0}(o,l,i,n),function(t,e,s,r){let a,o,n,i,l,h,f,c,g,u,m,d,p,M,v,w,x;for(n=1;n<t;n++)e[n-1]=e[n];e[t-1]=0;let Z=0,y=0,S=Number.EPSILON;for(h=0;h<t;h++){for(y=Math.max(y,Math.abs(s[h])+Math.abs(e[h])),f=h;f<t&&!(Math.abs(e[f])<=S*y);)f++;if(f>h){x=0;do{for(x+=1,a=s[h],c=(s[h+1]-a)/(2*e[h]),g=(0,b.G)(c,1),c<0&&(g=-g),s[h]=e[h]/(c+g),s[h+1]=e[h]*(c+g),u=s[h+1],o=a-s[h],n=h+2;n<t;n++)s[n]-=o;for(Z+=o,c=s[f],m=1,d=m,p=m,M=e[h+1],v=0,w=0,n=f-1;n>=h;n--)for(p=d,d=m,w=v,a=m*e[n],o=m*c,g=(0,b.G)(c,e[n]),e[n+1]=v*g,v=e[n]/g,m=c/g,c=m*s[n]-v*a,s[n+1]=o+v*(m*a+v*s[n]),l=0;l<t;l++)o=r.get(l,n+1),r.set(l,n+1,v*r.get(l,n)+m*o),r.set(l,n,m*r.get(l,n)-v*o);c=-v*w*p*M*e[h]/u,e[h]=v*c,s[h]=m*c}while(Math.abs(e[h])>S*y)}s[h]=s[h]+Z,e[h]=0}for(n=0;n<t-1;n++){for(l=n,c=s[n],i=n+1;i<t;i++)s[i]<c&&(l=i,c=s[i]);if(l!==n)for(s[l]=s[n],s[n]=c,i=0;i<t;i++)c=r.get(i,n),r.set(i,n,r.get(i,l)),r.set(i,l,c)}}(o,l,i,n)}else{let t=new g.Z(o,o),e=new Float64Array(o);for(a=0;a<o;a++)for(r=0;r<o;r++)t.set(r,a,h.get(r,a));!function(t,e,s,r){let a,o,n,i,l,h,f,c=0,g=t-1;for(h=c+1;h<=g-1;h++){for(f=0,i=h;i<=g;i++)f+=Math.abs(e.get(i,h-1));if(0!==f){for(n=0,i=g;i>=h;i--)s[i]=e.get(i,h-1)/f,n+=s[i]*s[i];for(o=Math.sqrt(n),s[h]>0&&(o=-o),n-=s[h]*o,s[h]=s[h]-o,l=h;l<t;l++){for(a=0,i=g;i>=h;i--)a+=s[i]*e.get(i,l);for(a/=n,i=h;i<=g;i++)e.set(i,l,e.get(i,l)-a*s[i])}for(i=0;i<=g;i++){for(a=0,l=g;l>=h;l--)a+=s[l]*e.get(i,l);for(a/=n,l=h;l<=g;l++)e.set(i,l,e.get(i,l)-a*s[l])}s[h]=f*s[h],e.set(h,h-1,f*o)}}for(i=0;i<t;i++)for(l=0;l<t;l++)r.set(i,l,i===l?1:0);for(h=g-1;h>=c+1;h--)if(0!==e.get(h,h-1)){for(i=h+1;i<=g;i++)s[i]=e.get(i,h-1);for(l=h;l<=g;l++){for(o=0,i=h;i<=g;i++)o+=s[i]*r.get(i,l);for(o=o/s[h]/e.get(h,h-1),i=h;i<=g;i++)r.set(i,l,r.get(i,l)+o*s[i])}}}(o,t,e,n),function(t,e,s,r,a){let o,n,i,l,h,f,c,g,u,m,d,p,b,M,w,x=t-1,Z=0,y=t-1,S=Number.EPSILON,V=0,C=0,E=0,R=0,N=0,k=0,O=0,P=0;for(o=0;o<t;o++)for((o<Z||o>y)&&(s[o]=a.get(o,o),e[o]=0),n=Math.max(o-1,0);n<t;n++)C+=Math.abs(a.get(o,n));for(;x>=Z;){for(l=x;l>Z&&(k=Math.abs(a.get(l-1,l-1))+Math.abs(a.get(l,l)),0===k&&(k=C),!(Math.abs(a.get(l,l-1))<S*k));)l--;if(l===x)a.set(x,x,a.get(x,x)+V),s[x]=a.get(x,x),e[x]=0,x--,P=0;else if(l===x-1){if(c=a.get(x,x-1)*a.get(x-1,x),E=(a.get(x-1,x-1)-a.get(x,x))/2,R=E*E+c,O=Math.sqrt(Math.abs(R)),a.set(x,x,a.get(x,x)+V),a.set(x-1,x-1,a.get(x-1,x-1)+V),g=a.get(x,x),R>=0){for(O=E>=0?E+O:E-O,s[x-1]=g+O,s[x]=s[x-1],0!==O&&(s[x]=g-c/O),e[x-1]=0,e[x]=0,g=a.get(x,x-1),k=Math.abs(g)+Math.abs(O),E=g/k,R=O/k,N=Math.sqrt(E*E+R*R),E/=N,R/=N,n=x-1;n<t;n++)O=a.get(x-1,n),a.set(x-1,n,R*O+E*a.get(x,n)),a.set(x,n,R*a.get(x,n)-E*O);for(o=0;o<=x;o++)O=a.get(o,x-1),a.set(o,x-1,R*O+E*a.get(o,x)),a.set(o,x,R*a.get(o,x)-E*O);for(o=Z;o<=y;o++)O=r.get(o,x-1),r.set(o,x-1,R*O+E*r.get(o,x)),r.set(o,x,R*r.get(o,x)-E*O)}else s[x-1]=g+E,s[x]=g+E,e[x-1]=O,e[x]=-O;x-=2,P=0}else{if(g=a.get(x,x),u=0,c=0,l<x&&(u=a.get(x-1,x-1),c=a.get(x,x-1)*a.get(x-1,x)),10===P){for(V+=g,o=Z;o<=x;o++)a.set(o,o,a.get(o,o)-g);k=Math.abs(a.get(x,x-1))+Math.abs(a.get(x-1,x-2)),g=u=.75*k,c=-.4375*k*k}if(30===P&&(k=(u-g)/2,k=k*k+c,k>0)){for(k=Math.sqrt(k),u<g&&(k=-k),k=g-c/((u-g)/2+k),o=Z;o<=x;o++)a.set(o,o,a.get(o,o)-k);V+=k,g=u=c=.964}for(P+=1,h=x-2;h>=l&&(O=a.get(h,h),N=g-O,k=u-O,E=(N*k-c)/a.get(h+1,h)+a.get(h,h+1),R=a.get(h+1,h+1)-O-N-k,N=a.get(h+2,h+1),k=Math.abs(E)+Math.abs(R)+Math.abs(N),E/=k,R/=k,N/=k,h!==l)&&!(Math.abs(a.get(h,h-1))*(Math.abs(R)+Math.abs(N))<S*(Math.abs(E)*(Math.abs(a.get(h-1,h-1))+Math.abs(O)+Math.abs(a.get(h+1,h+1)))));)h--;for(o=h+2;o<=x;o++)a.set(o,o-2,0),o>h+2&&a.set(o,o-3,0);for(i=h;i<=x-1&&(M=i!==x-1,i!==h&&(E=a.get(i,i-1),R=a.get(i+1,i-1),N=M?a.get(i+2,i-1):0,g=Math.abs(E)+Math.abs(R)+Math.abs(N),0!==g&&(E/=g,R/=g,N/=g)),0!==g);i++)if(k=Math.sqrt(E*E+R*R+N*N),E<0&&(k=-k),0!==k){for(i!==h?a.set(i,i-1,-k*g):l!==h&&a.set(i,i-1,-a.get(i,i-1)),E+=k,g=E/k,u=R/k,O=N/k,R/=E,N/=E,n=i;n<t;n++)E=a.get(i,n)+R*a.get(i+1,n),M&&(E+=N*a.get(i+2,n),a.set(i+2,n,a.get(i+2,n)-E*O)),a.set(i,n,a.get(i,n)-E*g),a.set(i+1,n,a.get(i+1,n)-E*u);for(o=0;o<=Math.min(x,i+3);o++)E=g*a.get(o,i)+u*a.get(o,i+1),M&&(E+=O*a.get(o,i+2),a.set(o,i+2,a.get(o,i+2)-E*N)),a.set(o,i,a.get(o,i)-E),a.set(o,i+1,a.get(o,i+1)-E*R);for(o=Z;o<=y;o++)E=g*r.get(o,i)+u*r.get(o,i+1),M&&(E+=O*r.get(o,i+2),r.set(o,i+2,r.get(o,i+2)-E*N)),r.set(o,i,r.get(o,i)-E),r.set(o,i+1,r.get(o,i+1)-E*R)}}}if(0===C)return;for(x=t-1;x>=0;x--)if(E=s[x],R=e[x],0===R)for(l=x,a.set(x,x,1),o=x-1;o>=0;o--){for(c=a.get(o,o)-E,N=0,n=l;n<=x;n++)N+=a.get(o,n)*a.get(n,x);if(e[o]<0)O=c,k=N;else if(l=o,0===e[o]?a.set(o,x,0!==c?-N/c:-N/(S*C)):(g=a.get(o,o+1),u=a.get(o+1,o),R=(s[o]-E)*(s[o]-E)+e[o]*e[o],f=(g*k-O*N)/R,a.set(o,x,f),a.set(o+1,x,Math.abs(g)>Math.abs(O)?(-N-c*f)/g:(-k-u*f)/O)),f=Math.abs(a.get(o,x)),S*f*f>1)for(n=o;n<=x;n++)a.set(n,x,a.get(n,x)/f)}else if(R<0)for(l=x-1,Math.abs(a.get(x,x-1))>Math.abs(a.get(x-1,x))?(a.set(x-1,x-1,R/a.get(x,x-1)),a.set(x-1,x,-(a.get(x,x)-E)/a.get(x,x-1))):(w=v(0,-a.get(x-1,x),a.get(x-1,x-1)-E,R),a.set(x-1,x-1,w[0]),a.set(x-1,x,w[1])),a.set(x,x-1,0),a.set(x,x,1),o=x-2;o>=0;o--){for(m=0,d=0,n=l;n<=x;n++)m+=a.get(o,n)*a.get(n,x-1),d+=a.get(o,n)*a.get(n,x);if(c=a.get(o,o)-E,e[o]<0)O=c,N=m,k=d;else if(l=o,0===e[o]?(w=v(-m,-d,c,R),a.set(o,x-1,w[0]),a.set(o,x,w[1])):(g=a.get(o,o+1),u=a.get(o+1,o),p=(s[o]-E)*(s[o]-E)+e[o]*e[o]-R*R,b=2*(s[o]-E)*R,0===p&&0===b&&(p=S*C*(Math.abs(c)+Math.abs(R)+Math.abs(g)+Math.abs(u)+Math.abs(O))),w=v(g*N-O*m+R*d,g*k-O*d-R*m,p,b),a.set(o,x-1,w[0]),a.set(o,x,w[1]),Math.abs(g)>Math.abs(O)+Math.abs(R)?(a.set(o+1,x-1,(-m-c*a.get(o,x-1)+R*a.get(o,x))/g),a.set(o+1,x,(-d-c*a.get(o,x)-R*a.get(o,x-1))/g)):(w=v(-N-u*a.get(o,x-1),-k-u*a.get(o,x),O,R),a.set(o+1,x-1,w[0]),a.set(o+1,x,w[1]))),f=Math.max(Math.abs(a.get(o,x-1)),Math.abs(a.get(o,x))),S*f*f>1)for(n=o;n<=x;n++)a.set(n,x-1,a.get(n,x-1)/f),a.set(n,x,a.get(n,x)/f)}for(o=0;o<t;o++)if(o<Z||o>y)for(n=o;n<t;n++)r.set(o,n,a.get(o,n));for(n=t-1;n>=Z;n--)for(o=Z;o<=y;o++){for(O=0,i=Z;i<=Math.min(n,y);i++)O+=r.get(o,i)*a.get(i,n);r.set(o,n,O)}}(o,l,i,n,t)}this.n=o,this.e=l,this.d=i,this.V=n}get realEigenvalues(){return Array.from(this.d)}get imaginaryEigenvalues(){return Array.from(this.e)}get eigenvectorMatrix(){return this.V}get diagonalMatrix(){let t,e,s=this.n,r=this.e,a=this.d,o=new g.Z(s,s);for(t=0;t<s;t++){for(e=0;e<s;e++)o.set(t,e,0);o.set(t,t,a[t]),r[t]>0?o.set(t,t+1,r[t]):r[t]<0&&o.set(t,t-1,r[t])}return o}}function v(t,e,s,r){let a,o;return Math.abs(s)>Math.abs(r)?(a=r/s,o=s+a*r,[(t+a*e)/o,(e-a*t)/o]):(a=s/r,o=r+a*s,[(a*t+e)/o,(a*e-t)/o])}class w{constructor(t,e={}){t=p.Z.checkMatrix(t);let{Y:s}=e;const{scaleScores:r=!1,maxIterations:a=1e3,terminationCriteria:o=1e-10}=e;let n;if(s){if(s=Array.isArray(s)&&"number"==typeof s[0]?g.Z.columnVector(s):p.Z.checkMatrix(s),s.rows!==t.rows)throw new Error("Y should have the same number of rows as X");n=s.getColumnVector(0)}else n=t.getColumnVector(0);let i,l,h,f,c=1;for(let g=0;g<a&&c>o;g++)h=t.transpose().mmul(n).div(n.transpose().mmul(n).get(0,0)),h=h.div(h.norm()),i=t.mmul(h).div(h.transpose().mmul(h).get(0,0)),g>0&&(c=i.clone().sub(f).pow(2).sum()),f=i.clone(),s?(l=s.transpose().mmul(i).div(i.transpose().mmul(i).get(0,0)),l=l.div(l.norm()),n=s.mmul(l).div(l.transpose().mmul(l).get(0,0))):n=i;if(s){let e=t.transpose().mmul(i).div(i.transpose().mmul(i).get(0,0));e=e.div(e.norm());let r=t.clone().sub(i.clone().mmul(e.transpose())),a=n.transpose().mmul(i).div(i.transpose().mmul(i).get(0,0)),o=s.clone().sub(i.clone().mulS(a.get(0,0)).mmul(l.transpose()));this.t=i,this.p=e.transpose(),this.w=h.transpose(),this.q=l,this.u=n,this.s=i.transpose().mmul(i),this.xResidual=r,this.yResidual=o,this.betas=a}else this.w=h.transpose(),this.s=i.transpose().mmul(i).sqrt(),this.t=r?i.clone().div(this.s.get(0,0)):i,this.xResidual=t.sub(i.mmul(h.transpose()))}}class x{constructor(t,e={}){if(!0===t){const t=e;return this.center=t.center,this.scale=t.scale,this.means=t.means,this.stdevs=t.stdevs,this.U=g.Z.checkMatrix(t.U),this.S=t.S,this.R=t.R,void(this.excludedFeatures=t.excludedFeatures||[])}t=new g.Z(t);const{isCovarianceMatrix:s=!1,method:r="SVD",nCompNIPALS:a=2,center:o=!0,scale:n=!1,ignoreZeroVariance:i=!1}=e;if(this.center=o,this.scale=n,this.means=null,this.stdevs=null,this.excludedFeatures=[],s)this._computeFromCovarianceMatrix(t);else switch(this._adjust(t,i),r){case"covarianceMatrix":{const e=new m(t).mmul(t).div(t.rows-1);this._computeFromCovarianceMatrix(e);break}case"NIPALS":this._computeWithNIPALS(t,a);break;case"SVD":{const e=new d.Z(t,{computeLeftSingularVectors:!1,computeRightSingularVectors:!0,autoTranspose:!0});this.U=e.rightSingularVectors;const s=e.diagonal,r=[];for(const a of s)r.push(a*a/(t.rows-1));this.S=r;break}default:throw new Error(`unknown method: ${r}`)}}static load(t){if("string"!=typeof t.name)throw new TypeError("model must have a name property");if("PCA"!==t.name)throw new RangeError(`invalid model: ${t.name}`);return new x(!0,t)}predict(t,e={}){const{nComponents:s=this.U.columns}=e;if(t=new g.Z(t),this.center&&(t.subRowVector(this.means),this.scale)){for(let e of this.excludedFeatures)t.removeColumn(e);t.divRowVector(this.stdevs)}let r=t.mmul(this.U);return r.subMatrix(0,r.rows-1,0,s-1)}invert(t){let e=(t=g.Z.checkMatrix(t)).mmul(this.U.transpose());return this.center&&(this.scale&&e.mulRowVector(this.stdevs),e.addRowVector(this.means)),e}getExplainedVariance(){let t=0;for(const e of this.S)t+=e;return this.S.map((e=>e/t))}getCumulativeVariance(){let t=this.getExplainedVariance();for(let e=1;e<t.length;e++)t[e]+=t[e-1];return t}getEigenvectors(){return this.U}getEigenvalues(){return this.S}getStandardDeviations(){return this.S.map((t=>Math.sqrt(t)))}getLoadings(){return this.U.transpose()}toJSON(){return{name:"PCA",center:this.center,scale:this.scale,means:this.means,stdevs:this.stdevs,U:this.U,S:this.S,excludedFeatures:this.excludedFeatures}}_adjust(t,e){if(this.center){const s=t.mean("column"),r=this.scale?t.standardDeviation("column",{mean:s}):null;if(this.means=s,t.subRowVector(s),this.scale){for(let s=0;s<r.length;s++)if(0===r[s]){if(!e)throw new RangeError(`Cannot scale the dataset (standard deviation is zero at index ${s}`);t.removeColumn(s),r.splice(s,1),this.excludedFeatures.push(s),s--}this.stdevs=r,t.divRowVector(r)}}}_computeFromCovarianceMatrix(t){const e=new M(t,{assumeSymmetric:!0});this.U=e.eigenvectorMatrix,this.U.flipRows(),this.S=e.realEigenvalues,this.S.reverse()}_computeWithNIPALS(t,e){this.U=new g.Z(e,t.columns),this.S=[];let s=t;for(let r=0;r<e;r++){let t=new w(s);this.U.setRow(r,t.w.transpose()),this.S.push(Math.pow(t.s.get(0,0),2)),s=t.xResidual}this.U=this.U.transpose()}}var Z,y=s(198),S=s(122081),V=s(685267),C=s.n(V),E=s(817729),R=s(180381),N=s.n(R),k=s(292682),O=s(432261);function P(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function U(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?P(Object(s),!0).forEach((function(e){(0,r.Z)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,r=(0,l.Z)(t);if(e){var a=(0,l.Z)(this).constructor;s=Reflect.construct(r,arguments,a)}else s=r.apply(this,arguments);return(0,i.Z)(this,s)}}var A=function(t){var e,s=t.data,r=t.variables,a=t.scale,o=t.center,n=t.noComponents;try{for(var i=[],l=s[r[0]].length,h=0;h<l;h++){for(var f=[],c=!1,g=0;g<r.length;g++){var u=s[r[g]][h];if(e=u,!(0,E.isPrimitive)(e)||N()(e)){c=!0;break}f.push(u)}c||i.push(f)}var m=new x(i,{center:o,scale:a}),d=m.predict(i,{noComponents:n});return{pca:m,components:d}}catch(p){return{}}},q=function(t){(0,n.Z)(s,t);var e=F(s);function s(t){var r;(0,a.Z)(this,s),r=e.call(this,t);var o=t.data,n=t.variables,i=t.scale,l=t.center,h=t.noComponents,f=A({data:o,variables:n,scale:i,center:l,noComponents:h}),c=f.pca,g=f.components;return r.state=U({pca:c,components:g},t),c&&t.onResult(r.state.pca,r.state.components),r}return(0,o.Z)(s,[{key:"render",value:function(){var t=this.state.pca,e=this.props.t;if(!t)return(0,h.Z)(c.Z,{variant:"danger"},void 0,e("missing-attributes"));var s=t.getStandardDeviations(),r=t.getExplainedVariance(),a=t.getCumulativeVariance(),o={x:C()(0,r.length,1),y:r,type:"scatter",name:e("proportion-of-variance")};return(0,h.Z)("div",{style:{overflowX:"auto",width:"100%"}},void 0,(0,h.Z)("span",{className:"title"},void 0,e("pca-summary")),function(t,e,s,r){return(0,h.Z)(S.Z,{bordered:!0,size:"sm"},void 0,(0,h.Z)("thead",{},void 0,(0,h.Z)("tr",{},void 0,Z||(Z=(0,h.Z)("th",{})),(0,h.Z)("th",{},void 0,r("standard-deviation")),(0,h.Z)("th",{},void 0,r("proportion-of-variance")),(0,h.Z)("th",{},void 0,r("cumulative-variance")))),(0,h.Z)("tbody",{},void 0,t.map((function(t,r){return(0,h.Z)("tr",{},r,(0,h.Z)("th",{},void 0," ","PC".concat(r+1)," "),(0,h.Z)("td",{},void 0," ",t.toFixed(3)," "),(0,h.Z)("td",{},void 0," ",e[r].toFixed(3)," "),(0,h.Z)("td",{},void 0," ",s[r].toFixed(3)," "))}))))}(s,r,a,e),(0,h.Z)(k.Z,{editable:!0,data:[o],layout:{xaxis:{title:e("principal-component")},yaxis:{title:e("explained-proportion")}}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.variables!==e.variables){var s=t.data,r=t.variables,a=t.scale,o=t.center,n=t.noComponents,i=U(U({},A({data:s,variables:r,scale:a,center:o,noComponents:n})),t);return i.pca&&t.onResult(i.pca,i.components),i}return null}}]),s}(f.Component);q.defaultProps={center:!0,scale:!1,noComponents:0,onResult:function(){}};var L=(0,y.Z)("models")((0,O.W)(q))},49909:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});var r=s(920756),a=s(70756),o=s(31845);class n{constructor(t,e={}){if((t=a.Z.checkMatrix(t)).isEmpty())throw new Error("Matrix must be non-empty");let s=t.rows,n=t.columns;const{computeLeftSingularVectors:i=!0,computeRightSingularVectors:l=!0,autoTranspose:h=!1}=e;let f,c=Boolean(i),g=Boolean(l),u=!1;if(s<n)if(h){f=t.transpose(),s=f.rows,n=f.columns,u=!0;let e=c;c=g,g=e}else f=t.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else f=t.clone();let m=Math.min(s,n),d=Math.min(s+1,n),p=new Float64Array(d),b=new r.Z(s,m),M=new r.Z(n,n),v=new Float64Array(n),w=new Float64Array(s),x=new Float64Array(d);for(let r=0;r<d;r++)x[r]=r;let Z=Math.min(s-1,n),y=Math.max(0,Math.min(n-2,s)),S=Math.max(Z,y);for(let r=0;r<S;r++){if(r<Z){p[r]=0;for(let t=r;t<s;t++)p[r]=(0,o.G)(p[r],f.get(t,r));if(0!==p[r]){f.get(r,r)<0&&(p[r]=-p[r]);for(let t=r;t<s;t++)f.set(t,r,f.get(t,r)/p[r]);f.set(r,r,f.get(r,r)+1)}p[r]=-p[r]}for(let t=r+1;t<n;t++){if(r<Z&&0!==p[r]){let e=0;for(let a=r;a<s;a++)e+=f.get(a,r)*f.get(a,t);e=-e/f.get(r,r);for(let a=r;a<s;a++)f.set(a,t,f.get(a,t)+e*f.get(a,r))}v[t]=f.get(r,t)}if(c&&r<Z)for(let t=r;t<s;t++)b.set(t,r,f.get(t,r));if(r<y){v[r]=0;for(let t=r+1;t<n;t++)v[r]=(0,o.G)(v[r],v[t]);if(0!==v[r]){v[r+1]<0&&(v[r]=0-v[r]);for(let t=r+1;t<n;t++)v[t]/=v[r];v[r+1]+=1}if(v[r]=-v[r],r+1<s&&0!==v[r]){for(let t=r+1;t<s;t++)w[t]=0;for(let t=r+1;t<s;t++)for(let e=r+1;e<n;e++)w[t]+=v[e]*f.get(t,e);for(let t=r+1;t<n;t++){let e=-v[t]/v[r+1];for(let a=r+1;a<s;a++)f.set(a,t,f.get(a,t)+e*w[a])}}if(g)for(let t=r+1;t<n;t++)M.set(t,r,v[t])}}let V=Math.min(n,s+1);if(Z<n&&(p[Z]=f.get(Z,Z)),s<V&&(p[V-1]=0),y+1<V&&(v[y]=f.get(y,V-1)),v[V-1]=0,c){for(let t=Z;t<m;t++){for(let e=0;e<s;e++)b.set(e,t,0);b.set(t,t,1)}for(let t=Z-1;t>=0;t--)if(0!==p[t]){for(let e=t+1;e<m;e++){let r=0;for(let a=t;a<s;a++)r+=b.get(a,t)*b.get(a,e);r=-r/b.get(t,t);for(let a=t;a<s;a++)b.set(a,e,b.get(a,e)+r*b.get(a,t))}for(let e=t;e<s;e++)b.set(e,t,-b.get(e,t));b.set(t,t,1+b.get(t,t));for(let e=0;e<t-1;e++)b.set(e,t,0)}else{for(let e=0;e<s;e++)b.set(e,t,0);b.set(t,t,1)}}if(g)for(let r=n-1;r>=0;r--){if(r<y&&0!==v[r])for(let t=r+1;t<n;t++){let e=0;for(let s=r+1;s<n;s++)e+=M.get(s,r)*M.get(s,t);e=-e/M.get(r+1,r);for(let s=r+1;s<n;s++)M.set(s,t,M.get(s,t)+e*M.get(s,r))}for(let t=0;t<n;t++)M.set(t,r,0);M.set(r,r,1)}let C=V-1,E=0,R=Number.EPSILON;for(;V>0;){let t,e;for(t=V-2;t>=-1&&-1!==t;t--){const e=Number.MIN_VALUE+R*Math.abs(p[t]+Math.abs(p[t+1]));if(Math.abs(v[t])<=e||Number.isNaN(v[t])){v[t]=0;break}}if(t===V-2)e=4;else{let s;for(s=V-1;s>=t&&s!==t;s--){let e=(s!==V?Math.abs(v[s]):0)+(s!==t+1?Math.abs(v[s-1]):0);if(Math.abs(p[s])<=R*e){p[s]=0;break}}s===t?e=3:s===V-1?e=1:(e=2,t=s)}switch(t++,e){case 1:{let e=v[V-2];v[V-2]=0;for(let s=V-2;s>=t;s--){let r=(0,o.G)(p[s],e),a=p[s]/r,i=e/r;if(p[s]=r,s!==t&&(e=-i*v[s-1],v[s-1]=a*v[s-1]),g)for(let t=0;t<n;t++)r=a*M.get(t,s)+i*M.get(t,V-1),M.set(t,V-1,-i*M.get(t,s)+a*M.get(t,V-1)),M.set(t,s,r)}break}case 2:{let e=v[t-1];v[t-1]=0;for(let r=t;r<V;r++){let a=(0,o.G)(p[r],e),n=p[r]/a,i=e/a;if(p[r]=a,e=-i*v[r],v[r]=n*v[r],c)for(let e=0;e<s;e++)a=n*b.get(e,r)+i*b.get(e,t-1),b.set(e,t-1,-i*b.get(e,r)+n*b.get(e,t-1)),b.set(e,r,a)}break}case 3:{const e=Math.max(Math.abs(p[V-1]),Math.abs(p[V-2]),Math.abs(v[V-2]),Math.abs(p[t]),Math.abs(v[t])),r=p[V-1]/e,a=p[V-2]/e,i=v[V-2]/e,l=p[t]/e,h=v[t]/e,f=((a+r)*(a-r)+i*i)/2,u=r*i*(r*i);let m=0;0===f&&0===u||(m=f<0?0-Math.sqrt(f*f+u):Math.sqrt(f*f+u),m=u/(f+m));let d=(l+r)*(l-r)+m,w=l*h;for(let x=t;x<V-1;x++){let e=(0,o.G)(d,w);0===e&&(e=Number.MIN_VALUE);let r=d/e,a=w/e;if(x!==t&&(v[x-1]=e),d=r*p[x]+a*v[x],v[x]=r*v[x]-a*p[x],w=a*p[x+1],p[x+1]=r*p[x+1],g)for(let t=0;t<n;t++)e=r*M.get(t,x)+a*M.get(t,x+1),M.set(t,x+1,-a*M.get(t,x)+r*M.get(t,x+1)),M.set(t,x,e);if(e=(0,o.G)(d,w),0===e&&(e=Number.MIN_VALUE),r=d/e,a=w/e,p[x]=e,d=r*v[x]+a*p[x+1],p[x+1]=-a*v[x]+r*p[x+1],w=a*v[x+1],v[x+1]=r*v[x+1],c&&x<s-1)for(let t=0;t<s;t++)e=r*b.get(t,x)+a*b.get(t,x+1),b.set(t,x+1,-a*b.get(t,x)+r*b.get(t,x+1)),b.set(t,x,e)}v[V-2]=d,E+=1;break}case 4:if(p[t]<=0&&(p[t]=p[t]<0?-p[t]:0,g))for(let e=0;e<=C;e++)M.set(e,t,-M.get(e,t));for(;t<C&&!(p[t]>=p[t+1]);){let e=p[t];if(p[t]=p[t+1],p[t+1]=e,g&&t<n-1)for(let s=0;s<n;s++)e=M.get(s,t+1),M.set(s,t+1,M.get(s,t)),M.set(s,t,e);if(c&&t<s-1)for(let r=0;r<s;r++)e=b.get(r,t+1),b.set(r,t+1,b.get(r,t)),b.set(r,t,e);t++}E=0,V--}}if(u){let t=M;M=b,b=t}this.m=s,this.n=n,this.s=p,this.U=b,this.V=M}solve(t){let e=t,s=this.threshold,a=this.s.length,o=r.Z.zeros(a,a);for(let r=0;r<a;r++)Math.abs(this.s[r])<=s?o.set(r,r,0):o.set(r,r,1/this.s[r]);let n=this.U,i=this.rightSingularVectors,l=i.mmul(o),h=i.rows,f=n.rows,c=r.Z.zeros(h,f);for(let r=0;r<h;r++)for(let t=0;t<f;t++){let e=0;for(let s=0;s<a;s++)e+=l.get(r,s)*n.get(t,s);c.set(r,t,e)}return c.mmul(e)}solveForDiagonal(t){return this.solve(r.Z.diag(t))}inverse(){let t=this.V,e=this.threshold,s=t.rows,a=t.columns,o=new r.Z(s,this.s.length);for(let r=0;r<s;r++)for(let s=0;s<a;s++)Math.abs(this.s[s])>e&&o.set(r,s,t.get(r,s)/this.s[s]);let n=this.U,i=n.rows,l=n.columns,h=new r.Z(s,i);for(let r=0;r<s;r++)for(let t=0;t<i;t++){let e=0;for(let s=0;s<l;s++)e+=o.get(r,s)*n.get(t,s);h.set(r,t,e)}return h}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let t=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,e=0,s=this.s;for(let r=0,a=s.length;r<a;r++)s[r]>t&&e++;return e}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return r.Z.diag(this.s)}}},31845:function(t,e,s){"use strict";function r(t,e){let s=0;return Math.abs(t)>Math.abs(e)?(s=e/t,Math.abs(t)*Math.sqrt(1+s*s)):0!==e?(s=t/e,Math.abs(e)*Math.sqrt(1+s*s)):0}s.d(e,{G:function(){return r}})},70756:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var r=s(920756);class a extends r.X{constructor(t){super(),this.data=t,this.rows=t.length,this.columns=t[0].length}set(t,e,s){return this.data[t][e]=s,this}get(t,e){return this.data[t][e]}}}}]);