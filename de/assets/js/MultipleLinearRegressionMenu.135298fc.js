"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76573],{885400:function(e,t,n){n.r(t);var i=n(202784),a=n(213980),r=n.n(a),l=n(320231),o=n.n(l),c=n(440835),s=n(351375),u=n(691403),d=n(758668),p=n(691334),m=n(581728);const g=e=>{const{data:t,categorical:n,quantitative:a,t:r}=e;return i.createElement(u.Z,{title:i.createElement("span",null,r("Multiple Linear Regression"),i.createElement(m.Z,{title:r("Multiple Linear Regression"),content:r("Multiple Linear Regression-description")})),autoStart:!1,onGenerate:(n,r,l,o)=>{const c=i.createElement(d.Z,{x:r,y:n,intercept:l,omitMissing:o,data:t,quantitative:a,onPredict:e.onPredict,onDiagnostics:e.onCreated}),s={y:n,x:r,intercept:l};e.logAction(p.Bq,s),e.onCreated(c)}},i.createElement(c.Z,{legend:r("outcome-y"),options:a,defaultValue:a[0]}),i.createElement(c.Z,{legend:r("predictors-x"),multi:!0,options:o()(a.concat(n)),defaultValue:a[1],closeMenuOnSelect:!1}),i.createElement(s.Z,{legend:r("include-intercept"),defaultValue:!0}),i.createElement(s.Z,{legend:r("omit-missing"),defaultValue:!1}))};g.defaultProps={logAction(){}},g.propTypes={categorical:r().array.isRequired,quantitative:r().array.isRequired,data:r().object.isRequired,logAction:r().func,onCreated:r().func.isRequired,onPredict:r().func.isRequired},t.default=g},581728:function(e,t,n){var i=n(202784),a=n(213980),r=n.n(a),l=n(770561),o=n(435376),c=n(992500),s=n(862816),u=n(461298);const d=e=>{const t=i.createElement(o.Z,{id:"popover-positioned-right"},i.createElement(c.Z,null,e.title),i.createElement(s.Z,null,e.content));return i.createElement(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},i.createElement(l.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},i.createElement("div",{className:"fa fa-question"})))};d.propTypes={content:r().oneOfType([r().string,r().node]).isRequired,title:r().string.isRequired},t.Z=d}}]);