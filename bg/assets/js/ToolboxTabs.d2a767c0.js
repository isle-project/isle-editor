"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5960],{2934:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var a=n(867855),r=n(202784),i=n(376699),o=n(267682),c=n(708717),s=n(155061),l=n(569862),u=n(72779),d=n.n(u),m=n(429658),v=n(153446),b=n(206198),g=n(552322);const E=r.forwardRef((({id:e,title:t,children:n,bsPrefix:a,className:r,rootCloseEvent:i,menuRole:o,disabled:c,active:s,renderMenuOnMount:l,menuVariant:u,...E},f)=>{const h=(0,m.vE)(void 0,"nav-item");return(0,g.jsxs)(v.Z,{ref:f,...E,className:d()(r,h),children:[(0,g.jsx)(v.Z.Toggle,{id:e,eventKey:null,active:s,disabled:c,childBsPrefix:a,as:b.Z,children:t}),(0,g.jsx)(v.Z.Menu,{role:o,renderOnMount:l,rootCloseEvent:i,variant:u,children:n})]})}));E.displayName="NavDropdown";var f=Object.assign(E,{Item:v.Z.Item,ItemText:v.Z.ItemText,Divider:v.Z.Divider,Header:v.Z.Header}),h=n(594010),Z=Object.defineProperty,p=Object.defineProperties,y=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,k=function(e,t,n){return t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},A=function(e,t){for(var n in t||(t={}))O.call(t,n)&&k(e,n,t[n]);if(C)for(var r,i=(0,a.Z)(C(t));!(r=i()).done;){n=r.value;P.call(t,n)&&k(e,n,t[n])}return e},x=function(e,t){return p(e,y(t))},T=(0,c.Z)((function(){return n.e(705).then(n.bind(n,273574))})),w=(0,c.Z)((function(){return n.e(919).then(n.bind(n,482515))})),S=(0,c.Z)((function(){return n.e(7088).then(n.bind(n,296094))})),j=(0,c.Z)((function(){return Promise.all([n.e(3312),n.e(3047)]).then(n.bind(n,105134))})),K=(0,c.Z)((function(){return n.e(5501).then(n.bind(n,344912))})),q=(0,c.Z)((function(){return n.e(781).then(n.bind(n,674981))})),D=(0,c.Z)((function(){return n.e(5974).then(n.bind(n,471094))})),N=(0,c.Z)((function(){return n.e(6573).then(n.bind(n,1149))})),I=(0,c.Z)((function(){return n.e(5738).then(n.bind(n,380483))})),M=(0,c.Z)((function(){return n.e(4794).then(n.bind(n,610332))})),R=(0,c.Z)((function(){return n.e(4890).then(n.bind(n,578789))})),B=(0,c.Z)((function(){return n.e(8865).then(n.bind(n,358418))})),L=(0,c.Z)((function(){return n.e(5039).then(n.bind(n,104058))})),Q=(0,c.Z)((function(){return n.e(8523).then(n.bind(n,61399))})),H=(0,c.Z)((function(){return n.e(9172).then(n.bind(n,701188))})),V=(0,c.Z)((function(){return n.e(5922).then(n.bind(n,576989))})),G=(0,c.Z)((function(){return n.e(9145).then(n.bind(n,694188))})),F=(0,c.Z)((function(){return n.e(7258).then(n.bind(n,837891))})),W=(0,c.Z)((function(){return n.e(3604).then(n.bind(n,131081))})),$=(0,c.Z)((function(){return n.e(2942).then(n.bind(n,632306))})),z=(0,c.Z)((function(){return n.e(2253).then(n.bind(n,799033))})),J=(0,c.Z)((function(){return n.e(9761).then(n.bind(n,105454))})),U=(0,c.Z)((function(){return n.e(483).then(n.bind(n,577443))})),X=(0,c.Z)((function(){return n.e(7226).then(n.bind(n,271637))})),Y=(0,c.Z)((function(){return n.e(8026).then(n.bind(n,891669))})),_=(0,c.Z)((function(){return n.e(5157).then(n.bind(n,497881))})),ee=(0,c.Z)((function(){return n.e(5224).then(n.bind(n,679837))})),te=(0,c.Z)((function(){return n.e(2479).then(n.bind(n,192979))})),ne=(0,c.Z)((function(){return n.e(5711).then(n.bind(n,429754))})),ae=(0,c.Z)((function(){return n.e(1017).then(n.bind(n,255923))})),re=(0,c.Z)((function(){return n.e(1299).then(n.bind(n,874853))})),ie=(0,c.Z)((function(){return n.e(8431).then(n.bind(n,692748))})),oe=(0,c.Z)((function(){return n.e(2860).then(n.bind(n,598515))})),ce=(0,c.Z)((function(){return n.e(4152).then(n.bind(n,446367))})),se=(0,c.Z)((function(){return n.e(4012).then(n.bind(n,171023))})),le=(0,c.Z)((function(){return n.e(4601).then(n.bind(n,489131))})),ue=function(e){var t=e.categorical,n=e.quantitative,a=e.originalQuantitative,c=e.groupingVariables,u=e.logAction,d=e.data,m=e.statistics,v=e.tables,b=e.models,g=e.plots,E=e.tests,Z=e.showHistogramDensityOption,p=e.showTestDecisions,y=e.transformer,C=e.onBarchartSelection,O=e.onCategoricalGenerate,P=e.onCreated,k=e.onGenerateTransformedVariable,ue=e.onHistogramSelection,de=e.onPlotDone,me=e.onQuantitativeGenerate,ve=e.onTransformerBeingActive,be=e.onPredict,ge=e.on2dSelection,Ee=e.onQQPlotSelection,fe=m.length,he=(0,i.$)("data-explorer").t,Ze=(0,r.useContext)(o.Z),pe="1";0===fe&&(pe=v.length>0?"2.1":"3.1");var ye={data:d,variables:t,groupingVariables:c,onCreated:P,onPlotDone:de},Ce={data:d,variables:n,groupingVariables:c,onCreated:P,onPlotDone:de},Oe=r.createElement("div",{className:"nav nav-tabs",role:"tablist"},fe>0?r.createElement(l.Z.Item,{className:"nav-statistics"},r.createElement(l.Z.Link,{eventKey:"1"},he("statistics"))):null,v.length>0&&t.length>0?r.createElement(f,{title:he("tables"),className:"nav-tables"},v.map((function(e,t){return r.createElement(s.Z,{key:t,eventKey:"2."+(t+1)},he(e))}))):null,g.length>0?r.createElement(f,{title:he("plots"),className:"nav-plots"},g.map((function(e,t){var n=r.createElement(s.Z,{key:t,eventKey:"3."+(t+1)},he(e));return"Histogram"===e&&"Mosaic Plot"===g[t-1]||"Line Plot"===e&&"Box Plot"===g[t-1]?r.createElement(r.Fragment,{key:t},r.createElement(f.Divider,{key:t+"-div"}),n):n}))):null,E.length>0?r.createElement(f,{title:he("tests"),className:"nav-tests"},E.map((function(e,t){var n=r.createElement(s.Z,{key:t,eventKey:"4."+(t+1)},he(e));return"One-Sample Proportion Test"===e&&"One-Way ANOVA"===E[t-1]||"Correlation Test"===e&&"Two-Sample Proportion Test"===E[t-1]?r.createElement(r.Fragment,{key:t},r.createElement(f.Divider,{key:t+"-div"}),n):n}))):null,b.length>0?r.createElement(f,{title:he("models"),className:"nav-models"},b.map((function(e,t){var n=r.createElement(s.Z,{key:t,eventKey:"5."+(t+1)},he(e));return"Decision Tree"===e&&"LASSO"===b[t-1]||"PCA"===e&&"Naive Bayes"===b[t-1]?r.createElement(r.Fragment,{key:t},r.createElement(f.Divider,{key:t+"-div"}),n):n}))):null,y?r.createElement(l.Z.Item,{className:"nav-transform"},r.createElement(l.Z.Link,{eventKey:"6"},he("transform"))):null),Pe=r.createElement(h.Z.Content,null,r.createElement(h.Z.Pane,{eventKey:"1"},r.createElement(S,x(A({},Ce),{statistics:m,logAction:u,t:he}))),v.map((function(e,t){var n=null;switch(e){case"Frequency Table":n=r.createElement(w,x(A({},ye),{logAction:u,t:he}));break;case"Contingency Table":n=r.createElement(T,x(A({},ye),{logAction:u,session:Ze,t:he}))}return r.createElement(h.Z.Pane,{key:t,eventKey:"2."+(t+1)},n)})),g.map((function(e,a){var i=null;switch(e){case"Bar Chart":i=r.createElement(U,x(A({},ye),{quantitative:n,logAction:u,session:Ze,onSelected:C,t:he}));break;case"Box Plot":i=r.createElement(X,x(A({},Ce),{logAction:u,session:Ze,t:he}));break;case"Contour Chart":i=r.createElement(le,x(A({},Ce),{logAction:u,session:Ze,onSelected:ge,t:he}));break;case"Heat Map":i=r.createElement(Y,x(A({},Ce),{logAction:u,session:Ze,onSelected:ge,t:he}));break;case"Histogram":i=r.createElement(_,x(A({},Ce),{logAction:u,session:Ze,showDensityOption:Z,onSelected:ue,t:he}));break;case"Interval Plot":i=r.createElement(ee,x(A({},Ce),{logAction:u,session:Ze,t:he}));break;case"Line Plot":i=r.createElement(te,x(A({},Ce),{categorical:t,logAction:u,session:Ze,t:he}));break;case"Mosaic Plot":i=r.createElement(ae,x(A({},ye),{logAction:u,session:Ze,t:he}));break;case"Pie Chart":i=r.createElement(re,x(A({},ye),{quantitative:n,logAction:u,session:Ze,t:he}));break;case"QQ Plot":i=r.createElement(ie,x(A({},Ce),{logAction:u,session:Ze,onSelected:Ee,t:he}));break;case"Scatterplot":i=r.createElement(oe,x(A({},Ce),{logAction:u,session:Ze,onSelected:ge,t:he}));break;case"Scatterplot Matrix":i=r.createElement(ce,x(A({},Ce),{logAction:u,session:Ze,onSelected:ge,t:he}));break;case"Violin Plot":i=r.createElement(se,x(A({},Ce),{logAction:u,session:Ze,t:he}));break;case"Map":i=r.createElement(ne,x(A({},Ce),{logAction:u,session:Ze,t:he}))}return r.createElement(h.Z.Pane,{key:a,eventKey:"3."+(a+1)},i)})),E.map((function(e,a){var i=null;switch(e){case"One-Sample Mean Test":i=r.createElement(W,{onCreated:P,data:d,quantitative:n,logAction:u,showDecision:p,t:he});break;case"Two-Sample Mean Test":i=r.createElement($,{onCreated:P,data:d,quantitative:n,categorical:t,logAction:u,session:Ze,showDecision:p,t:he});break;case"One-Sample Proportion Test":i=r.createElement(z,{onCreated:P,data:d,categorical:t,logAction:u,showDecision:p,t:he});break;case"Two-Sample Proportion Test":i=r.createElement(J,{onCreated:P,data:d,categorical:t,logAction:u,session:Ze,showDecision:p,t:he});break;case"One-Way ANOVA":i=r.createElement(H,{onCreated:P,data:d,quantitative:n,categorical:t,logAction:u,showDecision:p,t:he});break;case"Correlation Test":i=r.createElement(G,{onCreated:P,data:d,quantitative:n,logAction:u,showDecision:p,t:he});break;case"Chi-squared Independence Test":case"Chi-square Independence Test":i=r.createElement(V,{onCreated:P,data:d,categorical:t,logAction:u,showDecision:p,t:he});break;case"Kruskal-Wallis Test":i=r.createElement(F,{onCreated:P,data:d,quantitative:n,categorical:t,logAction:u,showDecision:p,t:he})}return r.createElement(h.Z.Pane,{key:a,eventKey:"4."+(a+1)},i)})),b.map((function(e,i){var o=null;switch(e){case"Multiple Linear Regression":o=r.createElement(N,{categorical:t,quantitative:n,onCreated:P,data:d,logAction:u,session:Ze,onPredict:be["multiple-linear-regression"],t:he});break;case"Decision Tree":o=r.createElement(K,{categorical:t,quantitative:n,onCreated:P,data:d,logAction:u,session:Ze,onPredict:be["decision-tree"],t:he});break;case"Random Forest":o=r.createElement(I,{categorical:t,quantitative:n,onCreated:P,data:d,logAction:u,session:Ze,onPredict:be["random-forest"],t:he});break;case"LASSO":o=r.createElement(q,{categorical:t,quantitative:n,onCreated:P,data:d,logAction:u,session:Ze,onPredict:be.lasso,t:he});break;case"Logistic Regression":o=r.createElement(D,{categorical:t,quantitative:n,onCreated:P,data:d,logAction:u,session:Ze,onPredict:be.logistic,t:he});break;case"Simple Linear Regression":o=r.createElement(M,{categorical:t,quantitative:n,onCreated:P,data:d,logAction:u,session:Ze,onPredict:be["simple-linear-regression"],t:he});break;case"PCA":o=r.createElement(R,{quantitative:n,originalQuantitative:a,onCreated:P,onGenerate:me,data:d,logAction:u,session:Ze,t:he});break;case"Hierarchical Clustering":o=r.createElement(B,{quantitative:n,categorical:t,originalQuantitative:n,onCreated:P,onGenerate:O,data:d,logAction:u,session:Ze,t:he});break;case"kmeans":o=r.createElement(L,{quantitative:n,categorical:t,originalQuantitative:n,onCreated:P,onGenerate:O,data:d,logAction:u,session:Ze,t:he});break;case"Naive Bayes":o=r.createElement(Q,{categorical:t,quantitative:n,onCreated:P,data:d,logAction:u,session:Ze,onPredict:be["naive-bayes"],t:he})}return r.createElement(h.Z.Pane,{key:i,eventKey:"5."+(i+1)},o)})),y?r.createElement(h.Z.Pane,{eventKey:"6"},r.createElement(j,{data:d,quantitative:n,categorical:t,logAction:u,session:Ze,onGenerate:k,onActive:ve,t:he})):null);return r.createElement(h.Z.Container,{defaultActiveKey:pe,mountOnEnter:!0},Oe,Pe)}},474135:function(e,t,n){var a=n(202784);t.Z=function({children:e,in:t,mountOnEnter:n,unmountOnExit:r}){const i=(0,a.useRef)(t);return(0,a.useEffect)((()=>{t&&(i.current=!0)}),[t]),t?e:r||!i.current&&n?null:e}},521371:function(e,t,n){n.d(t,{W:function(){return m}});var a=n(202784),r=n(590593),i=n(465590),o=n(474135),c=n(552322);const s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role"],l=["activeKey","getControlledId","getControllerId"],u=["as"];function d(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function m(e){let{active:t,eventKey:n,mountOnEnter:o,transition:c,unmountOnExit:u,role:m="tabpanel"}=e,v=d(e,s);const b=(0,a.useContext)(r.Z);if(!b)return[Object.assign({},v,{role:m}),{eventKey:n,isActive:t,mountOnEnter:o,transition:c,unmountOnExit:u}];const{activeKey:g,getControlledId:E,getControllerId:f}=b,h=d(b,l),Z=(0,i.h)(n);return[Object.assign({},v,{role:m,id:E(n),"aria-labelledby":f(n)}),{eventKey:n,isActive:null==t&&null!=Z?(0,i.h)(g)===Z:t,transition:c||h.transition,mountOnEnter:null!=o?o:h.mountOnEnter,unmountOnExit:null!=u?u:h.unmountOnExit}]}const v=a.forwardRef(((e,t)=>{let{as:n="div"}=e,a=d(e,u);const[s,{isActive:l,onEnter:v,onEntering:b,onEntered:g,onExit:E,onExiting:f,onExited:h,mountOnEnter:Z,unmountOnExit:p,transition:y=o.Z}]=m(a);return(0,c.jsx)(r.Z.Provider,{value:null,children:(0,c.jsx)(i.Z.Provider,{value:null,children:(0,c.jsx)(y,{in:l,onEnter:v,onEntering:b,onEntered:g,onExit:E,onExiting:f,onExited:h,mountOnEnter:Z,unmountOnExit:p,children:(0,c.jsx)(n,Object.assign({},s,{ref:t,hidden:!l,"aria-hidden":!l}))})})})}));v.displayName="TabPanel",t.Z=v},48983:function(e,t,n){var a=n(202784),r=n(230069),i=n(314267),o=n(590593),c=n(465590),s=n(521371),l=n(552322);const u=e=>{const{id:t,generateChildId:n,onSelect:s,activeKey:u,defaultActiveKey:d,transition:m,mountOnEnter:v,unmountOnExit:b,children:g}=e,[E,f]=(0,r.$c)(u,d,s),h=(0,i.gP)(t),Z=(0,a.useMemo)((()=>n||((e,t)=>h?`${h}-${t}-${e}`:null)),[h,n]),p=(0,a.useMemo)((()=>({onSelect:f,activeKey:E,transition:m,mountOnEnter:v||!1,unmountOnExit:b||!1,getControlledId:e=>Z(e,"tabpane"),getControllerId:e=>Z(e,"tab")})),[f,E,m,v,b,Z]);return(0,l.jsx)(o.Z.Provider,{value:p,children:(0,l.jsx)(c.Z.Provider,{value:f||null,children:g})})};u.Panel=s.Z,t.Z=u},594010:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(213980),r=n.n(a),i=(n(202784),n(48983)),o=n(456619),c=n(552322);const s=({transition:e,...t})=>(0,c.jsx)(i.Z,{...t,transition:(0,o.Z)(e)});s.displayName="TabContainer";var l=s,u=n(821729),d=n(557747);const m={eventKey:r().oneOfType([r().string,r().number]),title:r().node.isRequired,disabled:r().bool,tabClassName:r().string},v=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};v.propTypes=m;var b=Object.assign(v,{Container:l,Content:u.Z,Pane:d.Z})},821729:function(e,t,n){var a=n(911475);t.Z=(0,a.Z)("tab-content")},557747:function(e,t,n){var a=n(72779),r=n.n(a),i=n(202784),o=n(474135),c=n(465590),s=n(590593),l=n(521371),u=n(429658),d=n(456619),m=n(552322);const v=i.forwardRef((({bsPrefix:e,transition:t,...n},a)=>{const[{className:i,as:v="div",...b},{isActive:g,onEnter:E,onEntering:f,onEntered:h,onExit:Z,onExiting:p,onExited:y,mountOnEnter:C,unmountOnExit:O,transition:P=o.Z}]=(0,l.W)({...n,transition:(0,d.Z)(t)}),k=(0,u.vE)(e,"tab-pane");return(0,m.jsx)(s.Z.Provider,{value:null,children:(0,m.jsx)(c.Z.Provider,{value:null,children:(0,m.jsx)(P,{in:g,onEnter:E,onEntering:f,onEntered:h,onExit:Z,onExiting:p,onExited:y,mountOnEnter:C,unmountOnExit:O,children:(0,m.jsx)(v,{...b,ref:a,className:r()(i,k,g&&"active")})})})})}));v.displayName="TabPane",t.Z=v},456619:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(558370);function r(e){return"boolean"==typeof e?e?a.Z:void 0:e}}}]);