"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8865],{457270:function(e,t,n){n.r(t);var a=n(202784),l=n(213980),r=n.n(l),i=n(458264),c=n(312594),s=n(287013),u=n.n(s),o=n(224008),m=n.n(o),d=n(605977),g=n.n(d),p=n(440835),E=n(351375),Z=n(506078),f=n(691403),h=n(848285),v=n(810948),b=n(691334),q=n(581728);const C=["euclidean","chebyshev","cosine","hamming","manhattan"],k=["complete","single"],y=e=>{const{quantitative:t,t:n}=e;return a.createElement(f.Z,{title:a.createElement("span",null,n("Hierarchical Clustering"),a.createElement(q.Z,{title:n("Hierarchical Clustering"),content:n("Hierarchical Clustering-description")})),autoStart:!1,onGenerate:(t,n,l,r,i)=>{const c=a.createElement(v.Z,{variables:t,K:l,linkage:r,distance:i,data:e.data,onResult:a=>{if(n){const n=m()(e.data,1),r=e.categorical.slice(),i=t.map((e=>e[0])).join(""),c=a.getClusterAssignments(l),s=(0,h.Z)("hclust_cluster_"+i,g()(0,l,1).map((e=>`Cluster ${e+1}`)));n[s]=c,u()(r,s)||r.push(s),e.onGenerate(r,n)}}});e.logAction(b.Xw,{variables:t,attach:n,K:l,linkage:r,distance:i}),e.onCreated(c)}},a.createElement(p.Z,{legend:n("variables"),multi:!0,options:t}),a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(E.Z,{legend:n("attach-clusters-table"),defaultValue:!1})),a.createElement(c.Z,null,a.createElement(Z.Z,{legend:n("number-of-clusters"),min:1,defaultValue:3}))),a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(p.Z,{legend:n("linkage"),defaultValue:k[0],options:k})),a.createElement(c.Z,null,a.createElement(p.Z,{legend:n("distance"),defaultValue:C[0],options:C}))))};y.defaultProps={logAction(){}},y.propTypes={categorical:r().array.isRequired,quantitative:r().array.isRequired,data:r().object.isRequired,logAction:r().func,onGenerate:r().func.isRequired,onCreated:r().func.isRequired},t.default=y},581728:function(e,t,n){var a=n(202784),l=n(213980),r=n.n(l),i=n(770561),c=n(435376),s=n(992500),u=n(862816),o=n(461298);const m=e=>{const t=a.createElement(c.Z,{id:"popover-positioned-right"},a.createElement(s.Z,null,e.title),a.createElement(u.Z,null,e.content));return a.createElement(o.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(i.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))};m.propTypes={content:r().oneOfType([r().string,r().node]).isRequired,title:r().string.isRequired},t.Z=m}}]);