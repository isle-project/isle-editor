(self.webpackChunk=self.webpackChunk||[]).push([[8865],{121585:function(e,t,n){"use strict";n.r(t);var i=n(858255),a=(n(850110),n(319371),n(202784),n(213980),n(458264)),o=n(312594),l=n(636150),r=n.n(l),s=n(800562),c=n.n(s),u=n(685267),Z=n.n(u),d=n(927447),v=n(785745),f=n(741709),g=n(163420),p=n(927299),h=n(77948),m=n(5140),b=n(580067),C=["euclidean","chebyshev","cosine","hamming","manhattan"],k=["complete","single"],V=function(e){var t=e.quantitative,n=e.t;return(0,i.Z)(g.Z,{title:(0,i.Z)("span",{},void 0,n("Hierarchical Clustering"),(0,i.Z)(b.Z,{title:n("Hierarchical Clustering"),content:n("Hierarchical Clustering-description")})),autoStart:!1,onGenerate:function(t,n,a,o,l){var s=(0,i.Z)(h.Z,{variables:t,K:a,linkage:o,distance:l,data:e.data,onResult:function(i){if(n){var o=c()(e.data,1),l=e.categorical.slice(),s=t.map((function(e){return e[0]})).join(""),u=i.getClusterAssignments(a),d=(0,p.Z)("hclust_cluster_"+s,Z()(0,a,1).map((function(e){return"Cluster ".concat(e+1)})));o[d]=u,r()(l,d)||l.push(d),e.onGenerate(l,o)}}});e.logAction(m.IO,{variables:t,attach:n,K:a,linkage:o,distance:l}),e.onCreated(s)}},void 0,(0,i.Z)(d.Z,{legend:n("variables"),multi:!0,options:t}),(0,i.Z)(a.Z,{},void 0,(0,i.Z)(o.Z,{},void 0,(0,i.Z)(v.Z,{legend:n("attach-clusters-table"),defaultValue:!1})),(0,i.Z)(o.Z,{},void 0,(0,i.Z)(f.Z,{legend:n("number-of-clusters"),min:1,inline:!0,defaultValue:3}))),(0,i.Z)(a.Z,{},void 0,(0,i.Z)(o.Z,{},void 0,(0,i.Z)(d.Z,{legend:n("linkage"),defaultValue:k[0],options:k})),(0,i.Z)(o.Z,{},void 0,(0,i.Z)(d.Z,{legend:n("distance"),defaultValue:C[0],options:C}))))};V.defaultProps={logAction:function(){}},t.default=V},580067:function(e,t,n){"use strict";var i,a=n(858255),o=(n(202784),n(213980),n(770561)),l=n(435376),r=n(203858),s=n(175891),c=n(109361);t.Z=function(e){var t=(0,a.Z)(l.Z,{id:"popover-positioned-right"},void 0,(0,a.Z)(r.Z,{},void 0,e.title),(0,a.Z)(s.Z,{},void 0,e.content));return(0,a.Z)(c.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,i||(i=(0,a.Z)(o.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,(0,a.Z)("div",{className:"fa fa-question"}))))}}}]);