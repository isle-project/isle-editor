(window.webpackJsonp=window.webpackJsonp||[]).push([[1293],{6759:function(e,t,n){"use strict";n.r(t);var a=n(586),o=n.n(a),i=n(367),c=n.n(i),r=n(0),l=n.n(r),s=n(5158),u=n(441),d=n(365),b=n(1270),g=n(631),v=n(6527),h=n(667),m=Object(d.a)((function(){return n.e(405).then(n.bind(null,6618))})),f=Object(d.a)((function(){return n.e(408).then(n.bind(null,6619))})),O=Object(d.a)((function(){return n.e(386).then(n.bind(null,6620))})),A=Object(d.a)((function(){return Promise.all([n.e(0),n.e(375)]).then(n.bind(null,6660))})),p=Object(d.a)((function(){return n.e(393).then(n.bind(null,6622))})),j=Object(d.a)((function(){return n.e(412).then(n.bind(null,6623))})),C=Object(d.a)((function(){return n.e(389).then(n.bind(null,6624))})),k=Object(d.a)((function(){return n.e(417).then(n.bind(null,6625))})),P=Object(d.a)((function(){return n.e(422).then(n.bind(null,6626))})),w=Object(d.a)((function(){return n.e(425).then(n.bind(null,6627))})),S=Object(d.a)((function(){return n.e(419).then(n.bind(null,6628))})),q=Object(d.a)((function(){return n.e(394).then(n.bind(null,6629))})),y=Object(d.a)((function(){return n.e(395).then(n.bind(null,6630))})),D=Object(d.a)((function(){return n.e(396).then(n.bind(null,6631))})),T=Object(d.a)((function(){return n.e(401).then(n.bind(null,6632))})),E=Object(d.a)((function(){return n.e(404).then(n.bind(null,6633))})),G=Object(d.a)((function(){return n.e(407).then(n.bind(null,6634))})),K=Object(d.a)((function(){return n.e(411).then(n.bind(null,6635))})),N=Object(d.a)((function(){return n.e(415).then(n.bind(null,6636))})),L=Object(d.a)((function(){return n.e(387).then(n.bind(null,6637))})),B=Object(d.a)((function(){return n.e(420).then(n.bind(null,6638))})),M=Object(d.a)((function(){return n.e(388).then(n.bind(null,6639))})),Q=Object(d.a)((function(){return n.e(402).then(n.bind(null,6640))})),V=Object(d.a)((function(){return n.e(403).then(n.bind(null,6641))})),H=Object(d.a)((function(){return n.e(409).then(n.bind(null,6642))})),x=Object(d.a)((function(){return n.e(410).then(n.bind(null,6643))})),F=Object(d.a)((function(){return n.e(413).then(n.bind(null,6644))})),R=Object(d.a)((function(){return n.e(414).then(n.bind(null,6645))})),I=Object(d.a)((function(){return n.e(416).then(n.bind(null,6646))})),W=Object(d.a)((function(){return n.e(418).then(n.bind(null,6647))})),J=Object(d.a)((function(){return n.e(421).then(n.bind(null,6648))})),z=Object(d.a)((function(){return n.e(423).then(n.bind(null,6649))})),U=Object(d.a)((function(){return n.e(424).then(n.bind(null,6650))})),X=Object(d.a)((function(){return n.e(426).then(n.bind(null,6651))})),Y=Object(d.a)((function(){return n.e(406).then(n.bind(null,6652))}));t.default=function(e){var t=e.categorical,n=e.quantitative,a=e.originalQuantitative,i=e.groupingVariables,d=e.logAction,Z=e.data,$=e.statistics,_=e.tables,ee=e.models,te=e.plots,ne=e.tests,ae=e.showHistogramDensityOption,oe=e.showTestDecisions,ie=e.transformer,ce=e.onBarchartSelection,re=e.onCategoricalGenerate,le=e.onCreated,se=e.onGenerateTransformedVariable,ue=e.onHistogramSelection,de=e.onPlotDone,be=e.onQuantitativeGenerate,ge=e.onBothGenerate,ve=e.onTransformerBeingActive,he=e.on2dSelection,me=$.length,fe=Object(s.a)("DataExplorer").t,Oe=Object(r.useContext)(u.a),Ae="1";0===me&&(Ae=_.length>0?"2.1":"3.1");var pe={data:Z,variables:t,groupingVariables:i,onCreated:le,onPlotDone:de},je={data:Z,variables:n,groupingVariables:i,onCreated:le,onPlotDone:de},Ce=c()(g.a,{variant:"tabs"},void 0,me>0?c()(g.a.Item,{className:"nav-statistics"},void 0,c()(g.a.Link,{eventKey:"1"},void 0,fe("statistics"))):null,_.length>0&&t.length>0?c()(v.a,{title:fe("tables"),className:"nav-tables"},void 0,_.map((function(e,t){return c()(b.a,{eventKey:"2.".concat(t+1)},t,fe(e))}))):null,te.length>0?c()(v.a,{title:fe("plots"),className:"nav-plots"},void 0,te.map((function(e,t){var n=c()(b.a,{eventKey:"3.".concat(t+1)},t,fe(e));return"Histogram"===e&&"Mosaic Plot"===te[t-1]||"Line Plot"===e&&"Box Plot"===te[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,ne.length>0?c()(v.a,{title:fe("tests"),className:"nav-tests"},void 0,ne.map((function(e,t){var n=c()(b.a,{eventKey:"4.".concat(t+1)},t,fe(e));return"One-Sample Proportion Test"===e&&"One-Way ANOVA"===ne[t-1]||"Correlation Test"===e&&"Two-Sample Proportion Test"===ne[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,ee.length>0?c()(v.a,{title:fe("models"),className:"nav-models"},void 0,ee.map((function(e,t){var n=c()(b.a,{eventKey:"5.".concat(t+1)},t,fe(e));return"Decision Tree"===e&&"LASSO"===ee[t-1]||"PCA"===e&&"Naive Bayes"===ee[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,ie?c()(g.a.Item,{className:"nav-transform"},void 0,c()(g.a.Link,{eventKey:"6"},void 0,fe("transform"))):null),ke=c()(N,{onCreated:le,data:Z,quantitative:n,logAction:d,showDecision:oe,t:fe}),Pe=c()(L,{onCreated:le,data:Z,quantitative:n,categorical:t,logAction:d,session:Oe,showDecision:oe,t:fe}),we=c()(B,{onCreated:le,data:Z,categorical:t,logAction:d,showDecision:oe,t:fe}),Se=c()(M,{onCreated:le,data:Z,categorical:t,logAction:d,session:Oe,showDecision:oe,t:fe}),qe=c()(T,{onCreated:le,data:Z,quantitative:n,categorical:t,logAction:d,showDecision:oe,t:fe}),ye=c()(G,{onCreated:le,data:Z,quantitative:n,logAction:d,showDecision:oe,t:fe}),De=c()(E,{onCreated:le,data:Z,categorical:t,logAction:d,showDecision:oe,t:fe}),Te=c()(K,{onCreated:le,data:Z,quantitative:n,categorical:t,logAction:d,showDecision:oe,t:fe}),Ee=c()(k,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Oe,onGenerate:be,t:fe}),Ge=c()(p,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Oe,onGenerate:ge,t:fe}),Ke=c()(P,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Oe,onGenerate:ge,t:fe}),Ne=c()(j,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Oe,onGenerate:be,t:fe}),Le=c()(C,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Oe,onGenerate:ge,t:fe}),Be=c()(w,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Oe,onGenerate:be,t:fe}),Me=c()(S,{quantitative:n,originalQuantitative:a,onCreated:le,onGenerate:be,data:Z,logAction:d,session:Oe,t:fe}),Qe=c()(q,{quantitative:n,categorical:t,originalQuantitative:n,onCreated:le,onGenerate:re,data:Z,logAction:d,session:Oe,t:fe}),Ve=c()(y,{quantitative:n,categorical:t,originalQuantitative:n,onCreated:le,onGenerate:re,data:Z,logAction:d,session:Oe,t:fe}),He=c()(D,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Oe,onGenerate:ge,t:fe}),xe=c()(h.a.Content,{},void 0,c()(h.a.Pane,{eventKey:"1"},void 0,l.a.createElement(O,o()({},je,{statistics:$,logAction:d,t:fe}))),_.map((function(e,t){var n=null;switch(e){case"Frequency Table":n=l.a.createElement(f,o()({},pe,{logAction:d,t:fe}));break;case"Contingency Table":n=l.a.createElement(m,o()({},pe,{logAction:d,session:Oe,t:fe}))}return c()(h.a.Pane,{eventKey:"2.".concat(t+1)},t,n)})),te.map((function(e,a){var i=null;switch(e){case"Bar Chart":i=l.a.createElement(Q,o()({},pe,{quantitative:n,logAction:d,session:Oe,onSelected:ce,t:fe}));break;case"Box Plot":i=l.a.createElement(V,o()({},je,{logAction:d,session:Oe,t:fe}));break;case"Contour Chart":i=l.a.createElement(Y,o()({},je,{logAction:d,session:Oe,onSelected:he,t:fe}));break;case"Heat Map":i=l.a.createElement(H,o()({},je,{logAction:d,session:Oe,onSelected:he,t:fe}));break;case"Histogram":i=l.a.createElement(x,o()({},je,{logAction:d,session:Oe,showDensityOption:ae,onSelected:ue,t:fe}));break;case"Line Plot":i=l.a.createElement(F,o()({},je,{categorical:t,logAction:d,session:Oe,t:fe}));break;case"Mosaic Plot":i=l.a.createElement(I,o()({},pe,{logAction:d,session:Oe,t:fe}));break;case"Pie Chart":i=l.a.createElement(W,o()({},pe,{quantitative:n,logAction:d,session:Oe,t:fe}));break;case"QQ Plot":i=l.a.createElement(J,o()({},je,{logAction:d,session:Oe,t:fe}));break;case"Scatterplot":i=l.a.createElement(z,o()({},je,{logAction:d,session:Oe,onSelected:he,t:fe}));break;case"Scatterplot Matrix":i=l.a.createElement(U,o()({},je,{logAction:d,session:Oe,onSelected:he,t:fe}));break;case"Violin Plot":i=l.a.createElement(X,o()({},je,{logAction:d,session:Oe,t:fe}));break;case"Map":i=l.a.createElement(R,o()({},je,{logAction:d,session:Oe,t:fe}))}return c()(h.a.Pane,{eventKey:"3.".concat(a+1)},a,i)})),ne.map((function(e,t){var n=null;switch(e){case"One-Sample Mean Test":n=ke;break;case"Two-Sample Mean Test":n=Pe;break;case"One-Sample Proportion Test":n=we;break;case"Two-Sample Proportion Test":n=Se;break;case"One-Way ANOVA":n=qe;break;case"Correlation Test":n=ye;break;case"Chi-squared Independence Test":n=De;break;case"Kruskal-Wallis Test":n=Te}return c()(h.a.Pane,{eventKey:"4.".concat(t+1)},t,n)})),ee.map((function(e,t){var n=null;switch(e){case"Multiple Linear Regression":n=Ee;break;case"Decision Tree":n=Ge;break;case"Random Forest":n=Ke;break;case"LASSO":n=Ne;break;case"Logistic Regression":n=Le;break;case"Simple Linear Regression":n=Be;break;case"PCA":n=Me;break;case"Hierarchical Clustering":n=Qe;break;case"kmeans":n=Ve;break;case"Naive Bayes":n=He}return c()(h.a.Pane,{eventKey:"5.".concat(t+1)},t,n)})),ie?c()(h.a.Pane,{eventKey:"6"},void 0,c()(A,{data:Z,quantitative:n,categorical:t,logAction:d,session:Oe,onGenerate:se,onActive:ve,t:fe})):null);return c()(h.a.Container,{defaultActiveKey:Ae,mountOnEnter:!0},void 0,Ce,xe)}}}]);