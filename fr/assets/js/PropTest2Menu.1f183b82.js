/*! For license information please see PropTest2Menu.1f183b82.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{2715:function(e,n,t){"use strict";var a=t(2716);e.exports=a},2716:function(e,n,t){"use strict";var a=t(476),o=t(422),i=t(628),r=t(425);e.exports=function(e,n){var t,s;if(!a(e))throw new TypeError("invalid argument. First argument must be a function. Value: `"+e+"`.");if(arguments.length<2)t=i;else if(!a(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return o(l,"cache",s={}),l;function l(){var n,a,o,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return o=t(n).toString(),r(s,o)?s[o]:(a=e.apply(null,n),s[o]=a,a)}}},4031:function(e,n,t){"use strict";t(603),t(526),t(468),t(485),t(501);var a=t(455),o=t.n(a),i=t(554),r=t.n(i);n.a=function(e,n){for(var t=[],a=0;a<e.length;a++){var i=n[e[a]];if(i)for(var s=new Set,l=0;l<i.length;l++){var u=i[l];if(r()(u)||o()(u)||""===u||s.add(u),s.size>2)break;l===i.length-1&&t.push(e[a])}}return t}},484:function(e,n,t){"use strict";var a,o=t(407),i=t.n(o),r=(t(0),t(404),t(423)),s=t(512),l=t(510),u=t(505),c=t(547);n.a=function(e){var n=i()(s.a,{id:"popover-positioned-right"},void 0,i()(l.a,{},void 0,e.title),i()(u.a,{},void 0,e.content));return i()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:n},void 0,a||(a=i()(r.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6308:function(e,n,t){"use strict";t.r(n);var a,o=t(407),i=t.n(o),r=t(448),s=t.n(r),l=(t(430),t(0)),u=(t(404),t(423)),c=t(464),d=t(490),f=t(477),v=t(487),g=t(506),p=t(492),h=t(471),b=t.n(h),m=t(2715),w=t.n(m),S=t(447),j=t.n(S),y=t(711),O=t.n(y),C=t(1320),T=t(919),V=t(458),k=t(484),x=t(4031),q=w()(T.a,(function(e){return e[1]})),D=function(e){var n,t=e.categorical,o=e.data,r=e.showDecision,h=e.t,m=Object(l.useState)([]),w=s()(m,2),S=w[0],y=w[1],D=Object(l.useState)(t[0]),N=s()(D,2),P=N[0],z=N[1],A=Object(l.useState)(S[0]),E=s()(A,2),H=E[0],J=E[1],B=Object(l.useState)(null),F=s()(B,2),G=F[0],I=F[1],K=Object(l.useState)(null),L=s()(K,2),M=L[0],Q=L[1],R=Object(l.useState)(0),U=s()(R,2),W=U[0],X=U[1],Y=Object(l.useState)("two-sided"),Z=s()(Y,2),$=Z[0],_=Z[1],ee=Object(l.useState)(.05),ne=s()(ee,2),te=ne[0],ae=ne[1];Object(l.useEffect)((function(){if(j()(t)&&t.length>0){var e=o[t[0]];e?y(q(e,t[0])):y()}}),[t,o]);var oe=Object(x.a)(t,o);return i()(c.a,{style:{fontSize:"14px"}},void 0,i()(c.a.Header,{as:"h4"},void 0,h("Two-Sample Proportion Test"),i()(k.a,{title:h("Two-Sample Proportion Test"),content:h("Two-Sample Proportion Test-description")})),i()(c.a.Body,{},void 0,i()(f.a,{},void 0,i()(d.a,{md:6},void 0,i()(g.a,{legend:h("variable"),defaultValue:t[0],options:t,onChange:function(e){var n=o[e],t=Object(T.a)(n,e);O()(t),z(e),y(t),J(t[0])}})),i()(d.a,{md:6},void 0,i()(g.a,{legend:h("success"),defaultValue:S[0],options:S,onChange:J}))),i()(f.a,{},void 0,i()(d.a,{md:5},void 0,i()(g.a,{legend:h("groups"),options:oe,clearable:!0,onChange:function(e){I(e),Q(null)}})),i()(d.a,{md:2},void 0,i()("p",{},void 0,h("or"))),i()(d.a,{md:5},void 0,i()(g.a,{legend:h("second-variable"),options:t.filter((function(e){return b()(S,e)})),clearable:!0,onChange:function(e){I(null),Q(e)}}))),i()(v.b,{legend:h("difference-h0"),defaultValue:W,min:0,max:1,step:"any",onChange:X}),i()(g.a,{legend:h("direction"),defaultValue:$,options:["less","greater","two-sided"],onChange:_}),i()(v.b,{legend:i()("span",{},void 0,h("significance-level"),a||(a=i()(p.a,{raw:"\\alpha"}))),defaultValue:te,min:0,max:1,step:"any",onChange:ae}),i()(u.a,{variant:"primary",block:!0,onClick:function(){if(P===G||P===M)return e.session.addNotification({title:h("action-required"),message:h("group-variable-must-be-different"),level:"warning",position:"tr"});G||M||e.session.addNotification({title:h("action-required"),message:h("select-grouping-or-second-variable",{var:P}),level:"warning",position:"tr"});var t=n||(n=i()(C.a,{data:o,showDecision:r,var1:P,var2:M,group:G,diff:W,direction:$,alpha:te,success:H}));e.logAction(V.bb,{var1:P,group:G,var2:M,success:H,diff:W,direction:$,alpha:te,showDecision:r}),e.onCreated(t)},disabled:!M&&!G},void 0,h("calculate"))))};D.defaultProps={categorical:null,logAction:function(){},showDecision:!0},n.default=D}}]);