/*! For license information please see MeanTest2Menu.22909663.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52942],{186813:function(e,t,n){var a=n(526134);e.exports=a},526134:function(e,t,n){var a=n(213939),l=n(501874),r=n(471205),o=n(700601);e.exports=function(e,t){var n,i;if(!a(e))throw new TypeError("invalid argument. First argument must be a function. Value: `"+e+"`.");if(arguments.length<2)n=r;else if(!a(n=t))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+n+"`.");return l(s,"cache",i={}),s;function s(){var t,a,l,r;for(t=new Array(arguments.length),r=0;r<arguments.length;r++)t[r]=arguments[r];return l=n(t).toString(),o(i,l)?i[l]:(a=e.apply(null,t),i[l]=a,a)}}},160534:function(e,t,n){var a=n(316305),l=n.n(a),r=n(409961),o=n.n(r);t.Z=function(e,t){const n=[];for(let a=0;a<e.length;a++){let r=t[e[a]];if(r){const t=new Set;for(let i=0;i<r.length;i++){let s=r[i];if(o()(s)||l()(s)||""===s||t.add(s),t.size>2)break;i===r.length-1&&n.push(e[a])}}}return n}},530513:function(e,t,n){n.r(t);var a=n(202784),l=n(213980),r=n.n(l),o=n(770561),i=n(790817),s=n(312594),c=n(458264),u=n(186813),d=n.n(u),m=n(437069),p=n.n(m),f=n(506078),g=n(440835),E=n(194542),Z=n(996030),h=n(691334),v=n(581728),y=n(160534);const w=d()(y.Z,(e=>`${e[0]}-${p()(e[1])}`)),b=e=>{const{quantitative:t,categorical:n,data:l,t:r}=e,[u,d]=(0,a.useState)(null),[m,p]=(0,a.useState)(null),[y,b]=(0,a.useState)(null),[T,S]=(0,a.useState)(0),[C,q]=(0,a.useState)("two-sided"),[V,k]=(0,a.useState)(.05),[x,R]=(0,a.useState)("T Test"),[D,A]=(0,a.useState)(null),[N,P]=(0,a.useState)(null),[z,M]=(0,a.useState)([]);(0,a.useEffect)((()=>{M(w(n,l))}),[n,l]);return a.createElement(i.Z,{style:{fontSize:"14px"}},a.createElement(i.Z.Header,{as:"h4"},r("Two-Sample Mean Test"),a.createElement(v.Z,{title:r("Two-Sample Mean Test"),content:r("Two-Sample Mean Test-description")})),a.createElement(i.Z.Body,{className:"d-grid gap-3"},a.createElement(g.Z,{legend:r("type-of-test"),defaultValue:x,options:["T Test","Z Test"],onChange:R}),a.createElement(g.Z,{legend:r("variable"),defaultValue:u,options:t,onChange:d}),a.createElement(c.Z,null,a.createElement(s.Z,{md:5},a.createElement(g.Z,{legend:r("groups"),options:z,defaultValue:m,clearable:!0,onChange:e=>{b(null),p(e)}})),a.createElement(s.Z,{md:2},a.createElement("p",null,r("or"))),a.createElement(s.Z,{md:5},a.createElement(g.Z,{legend:r("second-variable"),options:t,defaultValue:y,clearable:!0,onChange:e=>{b(e),p(null)}}))),"Z Test"===x?a.createElement(c.Z,null,a.createElement(s.Z,null,a.createElement(f.Z,{legend:r("1st-stdev"),defaultValue:D||1,step:"any",min:0,onChange:A})),a.createElement(s.Z,null,a.createElement(f.Z,{legend:r("2nd-stdev"),defaultValue:N||1,step:"any",min:0,onChange:P,tooltipPlacement:"top"}))):null,a.createElement(c.Z,null,a.createElement(s.Z,null,a.createElement(f.Z,{legend:r("difference-h0"),defaultValue:T,step:"any",onChange:S})),a.createElement(s.Z,null,a.createElement(f.Z,{legend:a.createElement("span",null,r("significance-level"),a.createElement(E.Z,{raw:"\\alpha"})),defaultValue:V,min:0,max:1,step:"any",onChange:k,tooltipPlacement:"bottom"}))),a.createElement(g.Z,{legend:r("direction"),defaultValue:C,options:["less","greater","two-sided"],onChange:q,menuPlacement:"top"}),a.createElement(o.Z,{variant:"primary",onClick:()=>{const{data:t,showDecision:n}=e;if(!y&&!m)return e.session.addNotification({title:r("action-required"),message:r("select-grouping-or-second-variable",{var:u}),level:"warning",position:"tr"});const l=a.createElement(Z.Z,{x:u,group:m,y:y,diff:T,direction:C,alpha:V,type:x,xstdev:D,ystdev:N,data:t,showDecision:n});e.logAction(h.$Wr,{x:u,group:m,y:y,diff:T,direction:C,alpha:V,showDecision:n}),e.onCreated(l)},disabled:!m&&!y||!u},r("calculate"))))};b.defaultProps={categorical:null,logAction(){},showDecision:!0},b.propTypes={categorical:r().array,quantitative:r().array.isRequired,data:r().object.isRequired,logAction:r().func,onCreated:r().func.isRequired,session:r().object.isRequired,showDecision:r().bool},t.default=b},581728:function(e,t,n){var a=n(202784),l=n(213980),r=n.n(l),o=n(770561),i=n(435376),s=n(992500),c=n(862816),u=n(461298);const d=e=>{const t=a.createElement(i.Z,{id:"popover-positioned-right"},a.createElement(s.Z,null,e.title),a.createElement(c.Z,null,e.content));return a.createElement(u.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},a.createElement(o.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},a.createElement("div",{className:"fa fa-question"})))};d.propTypes={content:r().oneOfType([r().string,r().node]).isRequired,title:r().string.isRequired},t.Z=d}}]);