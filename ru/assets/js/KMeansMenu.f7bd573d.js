"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25039],{512205:function(e,t,a){a.r(t);var n=a(202784),l=a(213980),i=a.n(l),r=a(287013),o=a.n(r),s=a(224008),c=a.n(s),u=a(605977),d=a.n(u),m=a(440835),p=a(351375),f=a(506078),g=a(691403),E=a(848285),Z=a(706854),b=a(691334),v=a(581728);const k=e=>{const{quantitative:t,t:a}=e;return n.createElement(g.Z,{title:n.createElement("span",null,a("kmeans Clustering"),n.createElement(v.Z,{title:a("kmeans Clustering"),content:a("kmeans-description")})),autoStart:!1,onGenerate:(t,a,l,i,r)=>{const s=n.createElement(Z.Z,{data:e.data,variables:t,K:a,initialization:i,elbowPlot:r,onResult:n=>{if(l){const l=c()(e.data,1),i=e.categorical.slice(),r=t.map((e=>e[0])).join(""),s=(0,E.Z)("kmeans_cluster_"+r,d()(0,a,1).map((e=>`Cluster ${e+1}`)));l[s]=n.clusters,o()(i,s)||i.push(s),e.onGenerate(i,l)}}});e.logAction(b.tH,{variables:t,K:a,attach:l,initialization:i}),e.onCreated(s)},bodyClassName:"d-grid gap-3"},n.createElement(m.Z,{legend:a("variables"),multi:!0,options:t,closeMenuOnSelect:!1}),n.createElement(f.Z,{legend:a("number-of-clusters"),min:1,defaultValue:3}),n.createElement(p.Z,{legend:a("attach-clusters-table"),defaultValue:!1}),n.createElement(m.Z,{legend:a("initialization-method"),options:["kmeans++","random","mostDistant"],defaultValue:"kmeans++"}),n.createElement(p.Z,{legend:a("add-elbow-plot"),defaultValue:!1}))};k.defaultProps={logAction(){}},k.propTypes={categorical:i().array.isRequired,quantitative:i().array.isRequired,data:i().object.isRequired,logAction:i().func,onGenerate:i().func.isRequired,onCreated:i().func.isRequired},t.default=k},581728:function(e,t,a){var n=a(202784),l=a(213980),i=a.n(l),r=a(770561),o=a(435376),s=a(992500),c=a(862816),u=a(461298);const d=e=>{const t=n.createElement(o.Z,{id:"popover-positioned-right"},n.createElement(s.Z,null,e.title),n.createElement(c.Z,null,e.content));return n.createElement(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},n.createElement(r.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},n.createElement("div",{className:"fa fa-question"})))};d.propTypes={content:i().oneOfType([i().string,i().node]).isRequired,title:i().string.isRequired},t.Z=d}}]);