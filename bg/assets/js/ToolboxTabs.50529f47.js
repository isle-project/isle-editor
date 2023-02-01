"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35960],{521371:function(e,t,n){n.d(t,{W:function(){return u}});var a=n(202784),i=n(590593),o=n(465590),r=n(474135),s=n(552322);const l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],d=["as"];function m(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}function u(e){let{active:t,eventKey:n,mountOnEnter:r,transition:s,unmountOnExit:d,role:u="tabpanel",onEnter:E,onEntering:g,onEntered:b,onExit:v,onExiting:h,onExited:Z}=e,p=m(e,l);const y=(0,a.useContext)(i.Z);if(!y)return[Object.assign({},p,{role:u}),{eventKey:n,isActive:t,mountOnEnter:r,transition:s,unmountOnExit:d,onEnter:E,onEntering:g,onEntered:b,onExit:v,onExiting:h,onExited:Z}];const{activeKey:x,getControlledId:C,getControllerId:k}=y,A=m(y,c),P=(0,o.h)(n);return[Object.assign({},p,{role:u,id:C(n),"aria-labelledby":k(n)}),{eventKey:n,isActive:null==t&&null!=P?(0,o.h)(x)===P:t,transition:s||A.transition,mountOnEnter:null!=r?r:A.mountOnEnter,unmountOnExit:null!=d?d:A.unmountOnExit,onEnter:E,onEntering:g,onEntered:b,onExit:v,onExiting:h,onExited:Z}]}const E=a.forwardRef(((e,t)=>{let{as:n="div"}=e,a=m(e,d);const[l,{isActive:c,onEnter:E,onEntering:g,onEntered:b,onExit:v,onExiting:h,onExited:Z,mountOnEnter:p,unmountOnExit:y,transition:x=r.Z}]=u(a);return(0,s.jsx)(i.Z.Provider,{value:null,children:(0,s.jsx)(o.Z.Provider,{value:null,children:(0,s.jsx)(x,{in:c,onEnter:E,onEntering:g,onEntered:b,onExit:v,onExiting:h,onExited:Z,mountOnEnter:p,unmountOnExit:y,children:(0,s.jsx)(n,Object.assign({},l,{ref:t,hidden:!c,"aria-hidden":!c}))})})})}));E.displayName="TabPanel",t.Z=E},48983:function(e,t,n){var a=n(202784),i=n(593759),o=n(314267),r=n(590593),s=n(465590),l=n(521371),c=n(552322);const d=e=>{const{id:t,generateChildId:n,onSelect:l,activeKey:d,defaultActiveKey:m,transition:u,mountOnEnter:E,unmountOnExit:g,children:b}=e,[v,h]=(0,i.$c)(d,m,l),Z=(0,o.gP)(t),p=(0,a.useMemo)((()=>n||((e,t)=>Z?`${Z}-${t}-${e}`:null)),[Z,n]),y=(0,a.useMemo)((()=>({onSelect:h,activeKey:v,transition:u,mountOnEnter:E||!1,unmountOnExit:g||!1,getControlledId:e=>p(e,"tabpane"),getControllerId:e=>p(e,"tab")})),[h,v,u,E,g,p]);return(0,c.jsx)(r.Z.Provider,{value:y,children:(0,c.jsx)(s.Z.Provider,{value:h||null,children:b})})};d.Panel=l.Z,t.Z=d},867154:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var a=n(202784),i=n(498614),o=n(123103),r=n(217431),s=n(155061),l=n(569862),c=n(72779),d=n.n(c),m=n(429658),u=n(153446),E=n(206198),g=n(552322);const b=a.forwardRef((({id:e,title:t,children:n,bsPrefix:a,className:i,rootCloseEvent:o,menuRole:r,disabled:s,active:l,renderMenuOnMount:c,menuVariant:b,...v},h)=>{const Z=(0,m.vE)(void 0,"nav-item");return(0,g.jsxs)(u.Z,{ref:h,...v,className:d()(i,Z),children:[(0,g.jsx)(u.Z.Toggle,{id:e,eventKey:null,active:l,disabled:s,childBsPrefix:a,as:E.Z,children:t}),(0,g.jsx)(u.Z.Menu,{role:r,renderOnMount:c,rootCloseEvent:o,variant:b,children:n})]})}));b.displayName="NavDropdown";var v=Object.assign(b,{Item:u.Z.Item,ItemText:u.Z.ItemText,Divider:u.Z.Divider,Header:u.Z.Header}),h=n(594010),Z=Object.defineProperty,p=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&A(e,n,t[n]);if(x)for(var n of x(t))k.call(t,n)&&A(e,n,t[n]);return e},O=(e,t)=>p(e,y(t));const f=(0,r.Z)((()=>n.e(50705).then(n.bind(n,275952)))),T=(0,r.Z)((()=>n.e(50919).then(n.bind(n,309929)))),w=(0,r.Z)((()=>n.e(27088).then(n.bind(n,747857)))),S=(0,r.Z)((()=>Promise.all([n.e(40532),n.e(43047)]).then(n.bind(n,532192)))),j=(0,r.Z)((()=>n.e(95501).then(n.bind(n,105930)))),q=(0,r.Z)((()=>n.e(50781).then(n.bind(n,546748)))),K=(0,r.Z)((()=>n.e(75974).then(n.bind(n,728990)))),D=(0,r.Z)((()=>n.e(76573).then(n.bind(n,885400)))),N=(0,r.Z)((()=>n.e(5738).then(n.bind(n,24102)))),I=(0,r.Z)((()=>n.e(84794).then(n.bind(n,916683)))),$=(0,r.Z)((()=>n.e(84890).then(n.bind(n,768936)))),M=(0,r.Z)((()=>n.e(8865).then(n.bind(n,457270)))),R=(0,r.Z)((()=>n.e(25039).then(n.bind(n,512205)))),L=(0,r.Z)((()=>n.e(8523).then(n.bind(n,840464)))),B=(0,r.Z)((()=>n.e(89172).then(n.bind(n,548391)))),H=(0,r.Z)((()=>n.e(55922).then(n.bind(n,164754)))),Q=(0,r.Z)((()=>n.e(89145).then(n.bind(n,587173)))),G=(0,r.Z)((()=>n.e(67258).then(n.bind(n,942096)))),V=(0,r.Z)((()=>n.e(43604).then(n.bind(n,307565)))),F=(0,r.Z)((()=>n.e(52942).then(n.bind(n,530513)))),W=(0,r.Z)((()=>n.e(32253).then(n.bind(n,272374)))),z=(0,r.Z)((()=>n.e(89761).then(n.bind(n,669994)))),J=(0,r.Z)((()=>n.e(1965).then(n.bind(n,897141)))),U=(0,r.Z)((()=>n.e(50483).then(n.bind(n,961958)))),X=(0,r.Z)((()=>n.e(37226).then(n.bind(n,673632)))),Y=(0,r.Z)((()=>n.e(68026).then(n.bind(n,138619)))),_=(0,r.Z)((()=>n.e(85157).then(n.bind(n,606580)))),ee=(0,r.Z)((()=>n.e(5224).then(n.bind(n,337336)))),te=(0,r.Z)((()=>n.e(42479).then(n.bind(n,256807)))),ne=(0,r.Z)((()=>n.e(35711).then(n.bind(n,765430)))),ae=(0,r.Z)((()=>n.e(71017).then(n.bind(n,946255)))),ie=(0,r.Z)((()=>n.e(71299).then(n.bind(n,617146)))),oe=(0,r.Z)((()=>n.e(28431).then(n.bind(n,244407)))),re=(0,r.Z)((()=>n.e(62860).then(n.bind(n,215338)))),se=(0,r.Z)((()=>n.e(4152).then(n.bind(n,781494)))),le=(0,r.Z)((()=>n.e(4012).then(n.bind(n,680908)))),ce=(0,r.Z)((()=>n.e(34601).then(n.bind(n,76717))));var de=({categorical:e,quantitative:t,originalQuantitative:n,groupingVariables:r,logAction:c,data:d,statistics:m,tables:u,models:E,plots:g,tests:b,showHistogramDensityOption:Z,showTestDecisions:p,transformer:y,onBarchartSelection:x,onCategoricalGenerate:C,onCreated:k,onGenerateTransformedVariable:A,onHistogramSelection:de,onPlotDone:me,onQuantitativeGenerate:ue,onTransformerBeingActive:Ee,onPredict:ge,on2dSelection:be,onQQPlotSelection:ve})=>{const he=m.length,{t:Ze}=(0,i.$G)("data-explorer"),pe=(0,a.useContext)(o.Z);let ye="1";0===he&&(ye=u.length>0?"2.1":"3.1");const xe={data:d,variables:e,groupingVariables:r,onCreated:k,onPlotDone:me},Ce={data:d,variables:t,groupingVariables:r,onCreated:k,onPlotDone:me},ke=a.createElement("div",{className:"nav nav-tabs",role:"tablist"},he>0?a.createElement(l.Z.Item,{className:"nav-statistics"},a.createElement(l.Z.Link,{eventKey:"1"},Ze("statistics"))):null,u.length>0&&e.length>0?a.createElement(v,{title:Ze("tables"),className:"nav-tables"},u.map(((e,t)=>a.createElement(s.Z,{key:t,eventKey:`2.${t+1}`},Ze(e))))):null,g.length>0?a.createElement(v,{title:Ze("plots"),className:"nav-plots"},g.map(((e,t)=>{const n=a.createElement(s.Z,{key:t,eventKey:`3.${t+1}`},Ze(e));return"Histogram"===e&&"Mosaic Plot"===g[t-1]||"Line Plot"===e&&"Box Plot"===g[t-1]?a.createElement(a.Fragment,{key:t},a.createElement(v.Divider,{key:`${t}-div`}),n):n}))):null,b.length>0?a.createElement(v,{title:Ze("tests"),className:"nav-tests"},b.map(((e,t)=>{const n=a.createElement(s.Z,{key:t,eventKey:`4.${t+1}`},Ze(e));return"One-Sample Proportion Test"===e&&"One-Way ANOVA"===b[t-1]||"Correlation Test"===e&&"Two-Sample Proportion Test"===b[t-1]?a.createElement(a.Fragment,{key:t},a.createElement(v.Divider,{key:`${t}-div`}),n):n}))):null,E.length>0?a.createElement(v,{title:Ze("models"),className:"nav-models"},E.map(((e,t)=>{const n=a.createElement(s.Z,{key:t,eventKey:`5.${t+1}`},Ze(e));return"Decision Tree"===e&&"LASSO"===E[t-1]||"PCA"===e&&"Naive Bayes"===E[t-1]?a.createElement(a.Fragment,{key:t},a.createElement(v.Divider,{key:`${t}-div`}),n):n}))):null,y?a.createElement(l.Z.Item,{className:"nav-transform"},a.createElement(l.Z.Link,{eventKey:"6"},Ze("transform"))):null),Ae=a.createElement(h.Z.Content,null,a.createElement(h.Z.Pane,{eventKey:"1"},a.createElement(w,O(P({},Ce),{statistics:m,logAction:c,t:Ze}))),u.map(((e,t)=>{let n=null;switch(e){case"Frequency Table":n=a.createElement(T,O(P({},xe),{logAction:c,t:Ze}));break;case"Contingency Table":n=a.createElement(f,O(P({},xe),{logAction:c,session:pe,t:Ze}))}return a.createElement(h.Z.Pane,{key:t,eventKey:`2.${t+1}`},n)})),g.map(((n,i)=>{let o=null;switch(n){case"Bar Chart":o=a.createElement(U,O(P({},xe),{quantitative:t,logAction:c,session:pe,onSelected:x,t:Ze}));break;case"Box Plot":o=a.createElement(X,O(P({},Ce),{logAction:c,session:pe,t:Ze}));break;case"Contour Chart":o=a.createElement(ce,O(P({},Ce),{logAction:c,session:pe,onSelected:be,t:Ze}));break;case"Heat Map":o=a.createElement(Y,O(P({},Ce),{logAction:c,session:pe,onSelected:be,t:Ze}));break;case"Histogram":o=a.createElement(_,O(P({},Ce),{logAction:c,session:pe,showDensityOption:Z,onSelected:de,t:Ze}));break;case"Interval Plot":o=a.createElement(ee,O(P({},Ce),{logAction:c,session:pe,t:Ze}));break;case"Line Plot":o=a.createElement(te,O(P({},Ce),{categorical:e,logAction:c,session:pe,t:Ze}));break;case"Mosaic Plot":o=a.createElement(ae,O(P({},xe),{logAction:c,session:pe,t:Ze}));break;case"Pie Chart":o=a.createElement(ie,O(P({},xe),{quantitative:t,logAction:c,session:pe,t:Ze}));break;case"QQ Plot":o=a.createElement(oe,O(P({},Ce),{logAction:c,session:pe,onSelected:ve,t:Ze}));break;case"Scatterplot":o=a.createElement(re,O(P({},Ce),{logAction:c,session:pe,onSelected:be,t:Ze}));break;case"Scatterplot Matrix":o=a.createElement(se,O(P({},Ce),{logAction:c,session:pe,onSelected:be,t:Ze}));break;case"Violin Plot":o=a.createElement(le,O(P({},Ce),{logAction:c,session:pe,t:Ze}));break;case"Map":o=a.createElement(ne,O(P({},Ce),{logAction:c,session:pe,t:Ze}))}return a.createElement(h.Z.Pane,{key:i,eventKey:`3.${i+1}`},o)})),b.map(((n,i)=>{let o=null;switch(n){case"One-Sample Mean Test":o=a.createElement(V,{onCreated:k,data:d,quantitative:t,logAction:c,showDecision:p,t:Ze});break;case"Two-Sample Mean Test":o=a.createElement(F,{onCreated:k,data:d,quantitative:t,categorical:e,logAction:c,session:pe,showDecision:p,t:Ze});break;case"One-Sample Proportion Test":o=a.createElement(W,{onCreated:k,data:d,categorical:e,logAction:c,showDecision:p,t:Ze});break;case"Two-Sample Proportion Test":o=a.createElement(z,{onCreated:k,data:d,categorical:e,logAction:c,session:pe,showDecision:p,t:Ze});break;case"One-Way ANOVA":o=a.createElement(B,{onCreated:k,data:d,quantitative:t,categorical:e,logAction:c,showDecision:p,t:Ze});break;case"Correlation Test":o=a.createElement(Q,{onCreated:k,data:d,quantitative:t,logAction:c,showDecision:p,t:Ze});break;case"Chi-squared Independence Test":case"Chi-square Independence Test":o=a.createElement(H,{onCreated:k,data:d,categorical:e,logAction:c,showDecision:p,t:Ze});break;case"Kruskal-Wallis Test":o=a.createElement(G,{onCreated:k,data:d,quantitative:t,categorical:e,logAction:c,showDecision:p,t:Ze});break;case"Tukey HSD Test":o=a.createElement(J,{onCreated:k,data:d,quantitative:t,categorical:e,logAction:c,t:Ze});break;case"Simple Linear Regression":o=a.createElement(I,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge["simple-linear-regression"],t:Ze})}return a.createElement(h.Z.Pane,{key:i,eventKey:`4.${i+1}`},o)})),E.map(((i,o)=>{let r=null;switch(i){case"Multiple Linear Regression":r=a.createElement(D,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge["multiple-linear-regression"],t:Ze});break;case"Decision Tree":r=a.createElement(j,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge["decision-tree"],t:Ze});break;case"Random Forest":r=a.createElement(N,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge["random-forest"],t:Ze});break;case"LASSO":r=a.createElement(q,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge.lasso,t:Ze});break;case"Logistic Regression":r=a.createElement(K,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge.logistic,t:Ze});break;case"Simple Linear Regression":r=a.createElement(I,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge["simple-linear-regression"],t:Ze});break;case"PCA":r=a.createElement($,{quantitative:t,originalQuantitative:n,onCreated:k,onGenerate:ue,data:d,logAction:c,session:pe,t:Ze});break;case"Hierarchical Clustering":r=a.createElement(M,{quantitative:t,categorical:e,originalQuantitative:t,onCreated:k,onGenerate:C,data:d,logAction:c,session:pe,t:Ze});break;case"kmeans":r=a.createElement(R,{quantitative:t,categorical:e,originalQuantitative:t,onCreated:k,onGenerate:C,data:d,logAction:c,session:pe,t:Ze});break;case"Naive Bayes":r=a.createElement(L,{categorical:e,quantitative:t,onCreated:k,data:d,logAction:c,session:pe,onPredict:ge["naive-bayes"],t:Ze})}return a.createElement(h.Z.Pane,{key:o,eventKey:`5.${o+1}`},r)})),y?a.createElement(h.Z.Pane,{eventKey:"6"},a.createElement(S,{data:d,quantitative:t,categorical:e,logAction:c,session:pe,onGenerate:A,onActive:Ee,t:Ze})):null);return a.createElement(h.Z.Container,{defaultActiveKey:ye,mountOnEnter:!0},ke,Ae)}},594010:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(213980),i=n.n(a),o=(n(202784),n(48983)),r=n(456619),s=n(552322);const l=({transition:e,...t})=>(0,s.jsx)(o.Z,{...t,transition:(0,r.Z)(e)});l.displayName="TabContainer";var c=l,d=n(821729),m=n(557747);const u={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},E=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};E.propTypes=u;var g=Object.assign(E,{Container:c,Content:d.Z,Pane:m.Z})},821729:function(e,t,n){var a=n(911475);t.Z=(0,a.Z)("tab-content")},557747:function(e,t,n){var a=n(72779),i=n.n(a),o=n(202784),r=n(465590),s=n(590593),l=n(521371),c=n(429658),d=n(558370),m=n(456619),u=n(552322);const E=o.forwardRef((({bsPrefix:e,transition:t,...n},a)=>{const[{className:o,as:E="div",...g},{isActive:b,onEnter:v,onEntering:h,onEntered:Z,onExit:p,onExiting:y,onExited:x,mountOnEnter:C,unmountOnExit:k,transition:A=d.Z}]=(0,l.W)({...n,transition:(0,m.Z)(t)}),P=(0,c.vE)(e,"tab-pane");return(0,u.jsx)(s.Z.Provider,{value:null,children:(0,u.jsx)(r.Z.Provider,{value:null,children:(0,u.jsx)(A,{in:b,onEnter:v,onEntering:h,onEntered:Z,onExit:p,onExiting:y,onExited:x,mountOnEnter:C,unmountOnExit:k,children:(0,u.jsx)(E,{...g,ref:a,className:i()(o,P,b&&"active")})})})})}));E.displayName="TabPane",t.Z=E},456619:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(474135),i=n(558370);function o(e){return"boolean"==typeof e?e?i.Z:a.Z:e}}}]);