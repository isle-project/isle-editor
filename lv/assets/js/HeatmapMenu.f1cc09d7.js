"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68026],{138619:function(e,t,l){l.r(t);var a=l(202784),n=l(213980),o=l.n(n),r=l(790817),s=l(770561),i=l(458264),c=l(312594),u=l(351375),d=l(440835),m=l(658774),g=l(711768),p=l(588703),Z=l.n(p),E=l(287013),f=l.n(E),h=l(295349),y=l(691334),b=l(581728);const v=e=>{const{variables:t,groupingVariables:l,defaultX:n,defaultY:o,t:p}=e,[E,v]=(0,a.useState)(n||t[0]),[C,S]=(0,a.useState)(o||t[1]),[x,V]=(0,a.useState)(null),[q,k]=(0,a.useState)(!1),[A,R]=(0,a.useState)(!1),[M,H]=(0,a.useState)(!1),[N,P]=(0,a.useState)(!1),[X,Y]=(0,a.useState)([]),[w,T]=(0,a.useState)(.66);return a.createElement(r.Z,null,a.createElement(r.Z.Header,{as:"h4"},p("Heat Map"),a.createElement(b.Z,{title:p("Heat Map"),content:p("Heat Map-description")})),a.createElement(r.Z.Body,{className:"d-grid gap-3"},a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(d.Z,{legend:p("x-axis-variable"),defaultValue:E,options:t,onChange:v})),a.createElement(c.Z,null,a.createElement(d.Z,{legend:p("y-axis-variable"),defaultValue:C,options:t,onChange:S}))),a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(d.Z,{legend:p("group-by"),options:l,clearable:!0,onChange:V,menuPlacement:"top"}))),a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(u.Z,{legend:p("common-x-axis"),defaultValue:A,onChange:R,disabled:!x,style:{opacity:x?1:0,float:"left"}})),a.createElement(c.Z,null,a.createElement(u.Z,{legend:p("common-y-axis"),defaultValue:M,onChange:H,disabled:!x,style:{opacity:x?1:0,float:"left"}}))),a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(u.Z,{legend:p("overlay-observations"),defaultValue:q,onChange:k})),a.createElement(c.Z,null,a.createElement(u.Z,{legend:p("alternate-color-scheme"),defaultValue:N,onChange:P}))),a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(d.Z,{legend:p("overlay-regression-line"),multi:!0,options:["linear","smooth"],onChange:e=>{Z()(e)||(e=[e]),Y(e)}}))),a.createElement(i.Z,null,a.createElement(c.Z,null,a.createElement(m.Z,{legend:p("smoothing-parameter"),disabled:!f()(X,"smooth"),min:.01,max:1,step:.01,defaultValue:w,onChange:T}))),a.createElement(s.Z,{variant:"primary",onClick:()=>{const t=(0,g.Z)(6),l={x:E,y:C,overlayPoints:q,regressionMethod:X,plotId:t},n=a.createElement(h.Z,{id:t,data:e.data,x:E,y:C,group:x,overlayPoints:q,commonXAxis:A,commonYAxis:M,alternateColor:N,regressionMethod:X,smoothSpan:w,action:l,onShare:()=>{e.session.addNotification({title:p("plot-shared"),message:p("plot-shared-message"),level:"success",position:"tr"}),e.logAction(y.wu,l)},onSelected:e.onSelected});e.logAction(y.W2,l),e.onCreated(n)}},p("generate"))))};v.defaultProps={defaultX:null,defaultY:null,groupingVariables:null,logAction(){},onSelected(){}},v.propTypes={data:o().object.isRequired,defaultX:o().string,defaultY:o().string,groupingVariables:o().array,logAction:o().func,onCreated:o().func.isRequired,onSelected:o().func,session:o().object.isRequired,variables:o().array.isRequired},t.default=v},581728:function(e,t,l){var a=l(202784),n=l(213980),o=l.n(n),r=l(770561),s=l(435376),i=l(992500),c=l(862816),u=l(461298);const d=e=>{const t=a.createElement(s.Z,{id:"popover-positioned-right"},a.createElement(i.Z,null,e.title),a.createElement(c.Z,null,e.content));return a.createElement(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(r.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))};d.propTypes={content:o().oneOfType([o().string,o().node]).isRequired,title:o().string.isRequired},t.Z=d}}]);