(self.webpackChunk=self.webpackChunk||[]).push([[5960],{716410:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var a=n(607560),i=n(858255),o=(n(319371),n(202784)),r=n(376699),c=n(741319),s=n(844601),l=n(155061),u=n(569862),d=n(998283),Z=n(72779),v=n.n(Z),m=n(429658),b=n(738314),g=n(206198),f=["id","title","children","bsPrefix","className","rootCloseEvent","menuRole","disabled","active","renderMenuOnMount"],h=o.forwardRef((function(e,t){var n=e.id,i=e.title,r=e.children,c=e.bsPrefix,s=e.className,l=e.rootCloseEvent,u=e.menuRole,Z=e.disabled,h=e.active,E=e.renderMenuOnMount,C=(0,d.Z)(e,f),p=(0,m.vE)(void 0,"nav-item");return o.createElement(b.Z,(0,a.Z)({ref:t},C,{className:v()(s,p)}),o.createElement(b.Z.Toggle,{id:n,eventKey:null,active:h,disabled:Z,childBsPrefix:c,as:g.Z},i),o.createElement(b.Z.Menu,{role:u,renderOnMount:E,rootCloseEvent:l},r))}));h.displayName="NavDropdown",h.Item=b.Z.Item,h.ItemText=b.Z.ItemText,h.Divider=b.Z.Divider,h.Header=b.Z.Header;var E=h,C=n(188429),p=(0,s.Z)((function(){return n.e(705).then(n.bind(n,784274))})),P=(0,s.Z)((function(){return n.e(7424).then(n.bind(n,598155))})),A=(0,s.Z)((function(){return n.e(7088).then(n.bind(n,175807))})),y=(0,s.Z)((function(){return Promise.all([n.e(532),n.e(3047)]).then(n.bind(n,71026))})),k=(0,s.Z)((function(){return n.e(5501).then(n.bind(n,727063))})),x=(0,s.Z)((function(){return n.e(781).then(n.bind(n,296338))})),O=(0,s.Z)((function(){return n.e(5974).then(n.bind(n,85367))})),T=(0,s.Z)((function(){return n.e(6573).then(n.bind(n,862889))})),S=(0,s.Z)((function(){return n.e(5738).then(n.bind(n,257427))})),w=(0,s.Z)((function(){return n.e(4794).then(n.bind(n,980389))})),K=(0,s.Z)((function(){return n.e(4890).then(n.bind(n,929945))})),N=(0,s.Z)((function(){return n.e(8865).then(n.bind(n,121585))})),D=(0,s.Z)((function(){return n.e(5039).then(n.bind(n,774964))})),q=(0,s.Z)((function(){return n.e(8523).then(n.bind(n,868155))})),I=(0,s.Z)((function(){return n.e(9172).then(n.bind(n,47880))})),M=(0,s.Z)((function(){return n.e(5922).then(n.bind(n,877466))})),R=(0,s.Z)((function(){return n.e(9145).then(n.bind(n,783277))})),B=(0,s.Z)((function(){return n.e(7258).then(n.bind(n,322728))})),L=(0,s.Z)((function(){return n.e(3604).then(n.bind(n,141159))})),Q=(0,s.Z)((function(){return n.e(2942).then(n.bind(n,59787))})),H=(0,s.Z)((function(){return n.e(2253).then(n.bind(n,947120))})),G=(0,s.Z)((function(){return n.e(9761).then(n.bind(n,965746))})),V=(0,s.Z)((function(){return n.e(483).then(n.bind(n,884358))})),F=(0,s.Z)((function(){return n.e(7226).then(n.bind(n,802995))})),W=(0,s.Z)((function(){return n.e(8026).then(n.bind(n,596723))})),$=(0,s.Z)((function(){return n.e(5157).then(n.bind(n,219463))})),j=(0,s.Z)((function(){return n.e(5224).then(n.bind(n,643355))})),z=(0,s.Z)((function(){return n.e(6769).then(n.bind(n,415112))})),J=(0,s.Z)((function(){return n.e(5711).then(n.bind(n,329760))})),U=(0,s.Z)((function(){return n.e(1017).then(n.bind(n,651679))})),X=(0,s.Z)((function(){return n.e(1299).then(n.bind(n,142238))})),Y=(0,s.Z)((function(){return n.e(8431).then(n.bind(n,507245))})),_=(0,s.Z)((function(){return n.e(2860).then(n.bind(n,901768))})),ee=(0,s.Z)((function(){return n.e(4152).then(n.bind(n,792578))})),te=(0,s.Z)((function(){return n.e(4012).then(n.bind(n,388891))})),ne=(0,s.Z)((function(){return n.e(4601).then(n.bind(n,122645))})),ae=function(e){var t,n,s,d,Z,v,m,b,g,f,h,ae=e.categorical,ie=e.quantitative,oe=e.originalQuantitative,re=e.groupingVariables,ce=e.logAction,se=e.data,le=e.statistics,ue=e.tables,de=e.models,Ze=e.plots,ve=e.tests,me=e.showHistogramDensityOption,be=e.showTestDecisions,ge=e.transformer,fe=e.onBarchartSelection,he=e.onCategoricalGenerate,Ee=e.onCreated,Ce=e.onGenerateTransformedVariable,pe=e.onHistogramSelection,Pe=e.onPlotDone,Ae=e.onQuantitativeGenerate,ye=e.onTransformerBeingActive,ke=e.onPredict,xe=e.on2dSelection,Oe=e.onQQPlotSelection,Te=le.length,Se=(0,r.$)("data-explorer").t,we=(0,o.useContext)(c.Z),Ke="1";0===Te&&(Ke=ue.length>0?"2.1":"3.1");var Ne={data:se,variables:ae,groupingVariables:re,onCreated:Ee,onPlotDone:Pe},De={data:se,variables:ie,groupingVariables:re,onCreated:Ee,onPlotDone:Pe},qe=(0,i.Z)("div",{className:"nav nav-tabs",role:"tablist"},void 0,Te>0?(0,i.Z)(u.Z.Item,{className:"nav-statistics"},void 0,(0,i.Z)(u.Z.Link,{eventKey:"1"},void 0,Se("statistics"))):null,ue.length>0&&ae.length>0?(0,i.Z)(E,{title:Se("tables"),className:"nav-tables"},void 0,ue.map((function(e,t){return(0,i.Z)(l.Z,{eventKey:"2.".concat(t+1)},t,Se(e))}))):null,Ze.length>0?(0,i.Z)(E,{title:Se("plots"),className:"nav-plots"},void 0,Ze.map((function(e,t){var n=(0,i.Z)(l.Z,{eventKey:"3.".concat(t+1)},t,Se(e));return"Histogram"===e&&"Mosaic Plot"===Ze[t-1]||"Line Plot"===e&&"Box Plot"===Ze[t-1]?(0,i.Z)(o.Fragment,{},t,(0,i.Z)(E.Divider,{},"".concat(t,"-div")),n):n}))):null,ve.length>0?(0,i.Z)(E,{title:Se("tests"),className:"nav-tests"},void 0,ve.map((function(e,t){var n=(0,i.Z)(l.Z,{eventKey:"4.".concat(t+1)},t,Se(e));return"One-Sample Proportion Test"===e&&"One-Way ANOVA"===ve[t-1]||"Correlation Test"===e&&"Two-Sample Proportion Test"===ve[t-1]?(0,i.Z)(o.Fragment,{},t,(0,i.Z)(E.Divider,{},"".concat(t,"-div")),n):n}))):null,de.length>0?(0,i.Z)(E,{title:Se("models"),className:"nav-models"},void 0,de.map((function(e,t){var n=(0,i.Z)(l.Z,{eventKey:"5.".concat(t+1)},t,Se(e));return"Decision Tree"===e&&"LASSO"===de[t-1]||"PCA"===e&&"Naive Bayes"===de[t-1]?(0,i.Z)(o.Fragment,{},t,(0,i.Z)(E.Divider,{},"".concat(t,"-div")),n):n}))):null,ge?(0,i.Z)(u.Z.Item,{className:"nav-transform"},void 0,(0,i.Z)(u.Z.Link,{eventKey:"6"},void 0,Se("transform"))):null),Ie=(0,i.Z)(C.Z.Content,{},void 0,(0,i.Z)(C.Z.Pane,{eventKey:"1"},void 0,o.createElement(A,(0,a.Z)({},De,{statistics:le,logAction:ce,t:Se}))),ue.map((function(e,t){var n=null;switch(e){case"Frequency Table":n=o.createElement(P,(0,a.Z)({},Ne,{logAction:ce,t:Se}));break;case"Contingency Table":n=o.createElement(p,(0,a.Z)({},Ne,{logAction:ce,session:we,t:Se}))}return(0,i.Z)(C.Z.Pane,{eventKey:"2.".concat(t+1)},t,n)})),Ze.map((function(e,t){var n=null;switch(e){case"Bar Chart":n=o.createElement(V,(0,a.Z)({},Ne,{quantitative:ie,logAction:ce,session:we,onSelected:fe,t:Se}));break;case"Box Plot":n=o.createElement(F,(0,a.Z)({},De,{logAction:ce,session:we,t:Se}));break;case"Contour Chart":n=o.createElement(ne,(0,a.Z)({},De,{logAction:ce,session:we,onSelected:xe,t:Se}));break;case"Heat Map":n=o.createElement(W,(0,a.Z)({},De,{logAction:ce,session:we,onSelected:xe,t:Se}));break;case"Histogram":n=o.createElement($,(0,a.Z)({},De,{logAction:ce,session:we,showDensityOption:me,onSelected:pe,t:Se}));break;case"Interval Plot":n=o.createElement(j,(0,a.Z)({},De,{logAction:ce,session:we,t:Se}));break;case"Line Plot":n=o.createElement(z,(0,a.Z)({},De,{categorical:ae,logAction:ce,session:we,t:Se}));break;case"Mosaic Plot":n=o.createElement(U,(0,a.Z)({},Ne,{logAction:ce,session:we,t:Se}));break;case"Pie Chart":n=o.createElement(X,(0,a.Z)({},Ne,{quantitative:ie,logAction:ce,session:we,t:Se}));break;case"QQ Plot":n=o.createElement(Y,(0,a.Z)({},De,{logAction:ce,session:we,onSelected:Oe,t:Se}));break;case"Scatterplot":n=o.createElement(_,(0,a.Z)({},De,{logAction:ce,session:we,onSelected:xe,t:Se}));break;case"Scatterplot Matrix":n=o.createElement(ee,(0,a.Z)({},De,{logAction:ce,session:we,onSelected:xe,t:Se}));break;case"Violin Plot":n=o.createElement(te,(0,a.Z)({},De,{logAction:ce,session:we,t:Se}));break;case"Map":n=o.createElement(J,(0,a.Z)({},De,{logAction:ce,session:we,t:Se}))}return(0,i.Z)(C.Z.Pane,{eventKey:"3.".concat(t+1)},t,n)})),ve.map((function(e,a){var o=null;switch(e){case"One-Sample Mean Test":o=t||(t=(0,i.Z)(L,{onCreated:Ee,data:se,quantitative:ie,logAction:ce,showDecision:be,t:Se}));break;case"Two-Sample Mean Test":o=n||(n=(0,i.Z)(Q,{onCreated:Ee,data:se,quantitative:ie,categorical:ae,logAction:ce,session:we,showDecision:be,t:Se}));break;case"One-Sample Proportion Test":o=s||(s=(0,i.Z)(H,{onCreated:Ee,data:se,categorical:ae,logAction:ce,showDecision:be,t:Se}));break;case"Two-Sample Proportion Test":o=d||(d=(0,i.Z)(G,{onCreated:Ee,data:se,categorical:ae,logAction:ce,session:we,showDecision:be,t:Se}));break;case"One-Way ANOVA":o=Z||(Z=(0,i.Z)(I,{onCreated:Ee,data:se,quantitative:ie,categorical:ae,logAction:ce,showDecision:be,t:Se}));break;case"Correlation Test":o=v||(v=(0,i.Z)(R,{onCreated:Ee,data:se,quantitative:ie,logAction:ce,showDecision:be,t:Se}));break;case"Chi-squared Independence Test":o=m||(m=(0,i.Z)(M,{onCreated:Ee,data:se,categorical:ae,logAction:ce,showDecision:be,t:Se}));break;case"Kruskal-Wallis Test":o=b||(b=(0,i.Z)(B,{onCreated:Ee,data:se,quantitative:ie,categorical:ae,logAction:ce,showDecision:be,t:Se}))}return(0,i.Z)(C.Z.Pane,{eventKey:"4.".concat(a+1)},a,o)})),de.map((function(e,t){var n=null;switch(e){case"Multiple Linear Regression":n=(0,i.Z)(T,{categorical:ae,quantitative:ie,onCreated:Ee,data:se,logAction:ce,session:we,onPredict:ke["multiple-linear-regression"],t:Se});break;case"Decision Tree":n=(0,i.Z)(k,{categorical:ae,quantitative:ie,onCreated:Ee,data:se,logAction:ce,session:we,onPredict:ke["decision-tree"],t:Se});break;case"Random Forest":n=(0,i.Z)(S,{categorical:ae,quantitative:ie,onCreated:Ee,data:se,logAction:ce,session:we,onPredict:ke["random-forest"],t:Se});break;case"LASSO":n=(0,i.Z)(x,{categorical:ae,quantitative:ie,onCreated:Ee,data:se,logAction:ce,session:we,onPredict:ke.lasso,t:Se});break;case"Logistic Regression":n=(0,i.Z)(O,{categorical:ae,quantitative:ie,onCreated:Ee,data:se,logAction:ce,session:we,onPredict:ke.logistic,t:Se});break;case"Simple Linear Regression":n=(0,i.Z)(w,{categorical:ae,quantitative:ie,onCreated:Ee,data:se,logAction:ce,session:we,onPredict:ke["simple-linear-regression"],t:Se});break;case"PCA":n=g||(g=(0,i.Z)(K,{quantitative:ie,originalQuantitative:oe,onCreated:Ee,onGenerate:Ae,data:se,logAction:ce,session:we,t:Se}));break;case"Hierarchical Clustering":n=f||(f=(0,i.Z)(N,{quantitative:ie,categorical:ae,originalQuantitative:ie,onCreated:Ee,onGenerate:he,data:se,logAction:ce,session:we,t:Se}));break;case"kmeans":n=h||(h=(0,i.Z)(D,{quantitative:ie,categorical:ae,originalQuantitative:ie,onCreated:Ee,onGenerate:he,data:se,logAction:ce,session:we,t:Se}));break;case"Naive Bayes":n=(0,i.Z)(q,{categorical:ae,quantitative:ie,onCreated:Ee,data:se,logAction:ce,session:we,onPredict:ke["naive-bayes"],t:Se})}return(0,i.Z)(C.Z.Pane,{eventKey:"5.".concat(t+1)},t,n)})),ge?(0,i.Z)(C.Z.Pane,{eventKey:"6"},void 0,(0,i.Z)(y,{data:se,quantitative:ie,categorical:ae,logAction:ce,session:we,onGenerate:Ce,onActive:ye,t:Se})):null);return(0,i.Z)(C.Z.Container,{defaultActiveKey:Ke,mountOnEnter:!0},void 0,qe,Ie)}},188429:function(e,t,n){"use strict";var a=n(535307),i=n(202784),o=n(485571),r=n(821729),c=n(557747),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.Component);s.Container=o.Z,s.Content=r.Z,s.Pane=c.Z,t.Z=s},485571:function(e,t,n){"use strict";var a=n(202784),i=n(229277),o=n(395269),r=n(942932);t.Z=function(e){var t=(0,i.Ch)(e,{activeKey:"onSelect"}),n=t.id,c=t.generateChildId,s=t.onSelect,l=t.activeKey,u=t.transition,d=t.mountOnEnter,Z=t.unmountOnExit,v=t.children,m=(0,a.useMemo)((function(){return c||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,c]),b=(0,a.useMemo)((function(){return{onSelect:s,activeKey:l,transition:u,mountOnEnter:d||!1,unmountOnExit:Z||!1,getControlledId:function(e){return m(e,"tabpane")},getControllerId:function(e){return m(e,"tab")}}}),[s,l,u,d,Z,m]);return a.createElement(o.Z.Provider,{value:b},a.createElement(r.Z.Provider,{value:s||null},v))}},821729:function(e,t,n){"use strict";var a=n(607560),i=n(998283),o=n(72779),r=n.n(o),c=n(202784),s=n(429658),l=["bsPrefix","as","className"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,u=void 0===o?"div":o,d=e.className,Z=(0,i.Z)(e,l),v=(0,s.vE)(n,"tab-content");return c.createElement(u,(0,a.Z)({ref:t},Z,{className:r()(d,v)}))}));t.Z=u},557747:function(e,t,n){"use strict";var a=n(607560),i=n(998283),o=n(72779),r=n.n(o),c=n(202784),s=n(429658),l=n(395269),u=n(942932),d=n(558370),Z=["activeKey","getControlledId","getControllerId"],v=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var m=c.forwardRef((function(e,t){var n=function(e){var t=(0,c.useContext)(l.Z);if(!t)return e;var n=t.activeKey,o=t.getControlledId,r=t.getControllerId,s=(0,i.Z)(t,Z),v=!1!==e.transition&&!1!==s.transition,m=(0,u.h)(e.eventKey);return(0,a.Z)({},e,{active:null==e.active&&null!=m?(0,u.h)(n)===m:e.active,id:o(e.eventKey),"aria-labelledby":r(e.eventKey),transition:v&&(e.transition||s.transition||d.Z),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:s.unmountOnExit})}(e),o=n.bsPrefix,m=n.className,b=n.active,g=n.onEnter,f=n.onEntering,h=n.onEntered,E=n.onExit,C=n.onExiting,p=n.onExited,P=n.mountOnEnter,A=n.unmountOnExit,y=n.transition,k=n.as,x=void 0===k?"div":k,O=(n.eventKey,(0,i.Z)(n,v)),T=(0,s.vE)(o,"tab-pane");if(!b&&!y&&A)return null;var S=c.createElement(x,(0,a.Z)({},O,{ref:t,role:"tabpanel","aria-hidden":!b,className:r()(m,T,{active:b})}));return y&&(S=c.createElement(y,{in:b,onEnter:g,onEntering:f,onEntered:h,onExit:E,onExiting:C,onExited:p,mountOnEnter:P,unmountOnExit:A},S)),c.createElement(l.Z.Provider,{value:null},c.createElement(u.Z.Provider,{value:null},S))}));m.displayName="TabPane",t.Z=m}}]);