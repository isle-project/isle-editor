(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{2351:function(a,e,t){"use strict";e.a=function(a,e){var t=new String(a);return t.categories=e,t}},493:function(a,e,t){"use strict";var n=t(371),i=t.n(n),o=(t(0),t(363),t(400)),r=t(537),l=t(530),s=t(517),u=t(632),c=i()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));e.a=function(a){var e=i()(r.a,{id:"popover-positioned-right"},void 0,i()(l.a,{},void 0,a.title),i()(s.a,{},void 0,a.content));return i()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,c)}},6639:function(a,e,t){"use strict";t.r(e);var n=t(371),i=t.n(n),o=(t(0),t(363),t(440)),r=t(499),l=t(498),s=t.n(l),u=t(637),c=t.n(u),d=t(754),v=t.n(d),f=t(532),g=t(626),p=t(501),h=t(817),m=t(2351),b=t(3712),w=t(447),C=t(493),k=["euclidean","chebyshev","cosine","hamming","manhattan"],V=["complete","single"],q=function(a){var e=a.quantitative,t=a.originalQuantitative,n=a.t;return i()(h.a,{title:i()("span",{},void 0,n("Hierarchical Clustering"),i()(C.a,{title:n("Hierarchical Clustering"),content:n("Hierarchical Clustering-description")})),autoStart:!1,onGenerate:function(e,t,n,o,r){var l=i()(b.a,{variables:e,K:n,linkage:o,distance:r,data:a.data,onResult:function(i){if(t){var o=c()(a.data,1),r=a.categorical.slice(),l=e.map((function(a){return a[0]})).join(""),u=i.getClusterAssignments(n),d=Object(m.a)("hclust_cluster_"+l,v()(0,n,1).map((function(a){return"Cluster ".concat(a+1)})));o[d]=u,s()(r,d)||r.push(d),a.onGenerate(r,o)}}});a.logAction(w.n,{variables:e,attach:t,K:n,linkage:o,distance:r}),a.onCreated(l)}},void 0,i()(f.a,{legend:n("variables"),multi:!0,defaultValue:t,options:e}),i()(o.a,{},void 0,i()(r.a,{},void 0,i()(g.a,{legend:n("attach-clusters-table"),defaultValue:!1})),i()(r.a,{},void 0,i()(p.b,{legend:n("number-of-clusters"),min:1,inline:!0,defaultValue:3}))),i()(o.a,{},void 0,i()(r.a,{},void 0,i()(f.a,{legend:n("linkage"),defaultValue:V[0],options:V})),i()(r.a,{},void 0,i()(f.a,{legend:n("distance"),defaultValue:k[0],options:k}))))};q.defaultProps={logAction:function(){}},e.default=q}}]);