(window.webpackJsonp=window.webpackJsonp||[]).push([[1161],{6263:function(e,t,n){"use strict";n.r(t);var a=n(488),o=n.n(a),i=n(407),c=n.n(i),r=(n(428),n(0)),l=n.n(r),s=n(1971),u=n(459),d=n(405),b=n(887),g=n(561),v=n(6264),h=n(568),m=Object(d.a)((function(){return n.e(251).then(n.bind(null,6287))})),f=Object(d.a)((function(){return n.e(354).then(n.bind(null,6288))})),O=Object(d.a)((function(){return n.e(1094).then(n.bind(null,6289))})),A=Object(d.a)((function(){return Promise.all([n.e(0),n.e(1165)]).then(n.bind(null,6329))})),p=Object(d.a)((function(){return n.e(304).then(n.bind(null,6291))})),j=Object(d.a)((function(){return n.e(509).then(n.bind(null,6292))})),C=Object(d.a)((function(){return n.e(737).then(n.bind(null,6293))})),k=Object(d.a)((function(){return n.e(773).then(n.bind(null,6294))})),P=Object(d.a)((function(){return n.e(901).then(n.bind(null,6295))})),w=Object(d.a)((function(){return n.e(1006).then(n.bind(null,6296))})),S=Object(d.a)((function(){return n.e(841).then(n.bind(null,6297))})),q=Object(d.a)((function(){return n.e(406).then(n.bind(null,6298))})),y=Object(d.a)((function(){return n.e(492).then(n.bind(null,6299))})),D=Object(d.a)((function(){return n.e(775).then(n.bind(null,6300))})),T=Object(d.a)((function(){return n.e(194).then(n.bind(null,6301))})),E=Object(d.a)((function(){return n.e(234).then(n.bind(null,6302))})),G=Object(d.a)((function(){return n.e(253).then(n.bind(null,6303))})),K=Object(d.a)((function(){return n.e(494).then(n.bind(null,6304))})),N=Object(d.a)((function(){return n.e(752).then(n.bind(null,6305))})),L=Object(d.a)((function(){return n.e(751).then(n.bind(null,6306))})),Q=Object(d.a)((function(){return n.e(843).then(n.bind(null,6307))})),B=Object(d.a)((function(){return n.e(842).then(n.bind(null,6308))})),M=Object(d.a)((function(){return n.e(195).then(n.bind(null,6309))})),V=Object(d.a)((function(){return n.e(209).then(n.bind(null,6310))})),H=Object(d.a)((function(){return n.e(392).then(n.bind(null,6311))})),x=Object(d.a)((function(){return n.e(417).then(n.bind(null,6312))})),F=Object(d.a)((function(){return n.e(711).then(n.bind(null,6313))})),R=Object(d.a)((function(){return n.e(738).then(n.bind(null,6314))})),I=Object(d.a)((function(){return n.e(756).then(n.bind(null,6315))})),W=Object(d.a)((function(){return n.e(826).then(n.bind(null,6316))})),J=Object(d.a)((function(){return n.e(846).then(n.bind(null,6317))})),z=Object(d.a)((function(){return n.e(965).then(n.bind(null,6318))})),U=Object(d.a)((function(){return n.e(964).then(n.bind(null,6319))})),X=Object(d.a)((function(){return n.e(1180).then(n.bind(null,6320))})),Y=Object(d.a)((function(){return n.e(252).then(n.bind(null,6321))}));t.default=function(e){var t,n,a,i,d,Z,$,_,ee,te,ne,ae,oe,ie,ce,re,le,se,ue=e.categorical,de=e.quantitative,be=e.originalQuantitative,ge=e.groupingVariables,ve=e.logAction,he=e.data,me=e.statistics,fe=e.tables,Oe=e.models,Ae=e.plots,pe=e.tests,je=e.showHistogramDensityOption,Ce=e.showTestDecisions,ke=e.transformer,Pe=e.onBarchartSelection,we=e.onCategoricalGenerate,Se=e.onCreated,qe=e.onGenerateTransformedVariable,ye=e.onHistogramSelection,De=e.onPlotDone,Te=e.onQuantitativeGenerate,Ee=e.onBothGenerate,Ge=e.onTransformerBeingActive,Ke=e.on2dSelection,Ne=e.onQQPlotSelection,Le=me.length,Qe=Object(s.a)("DataExplorer").t,Be=Object(r.useContext)(u.a),Me="1";0===Le&&(Me=fe.length>0?"2.1":"3.1");var Ve={data:he,variables:ue,groupingVariables:ge,onCreated:Se,onPlotDone:De},He={data:he,variables:de,groupingVariables:ge,onCreated:Se,onPlotDone:De},xe=c()("div",{className:"nav nav-tabs",role:"tablist"},void 0,Le>0?c()(g.a.Item,{className:"nav-statistics"},void 0,c()(g.a.Link,{eventKey:"1"},void 0,Qe("statistics"))):null,fe.length>0&&ue.length>0?c()(v.a,{title:Qe("tables"),className:"nav-tables"},void 0,fe.map((function(e,t){return c()(b.a,{eventKey:"2.".concat(t+1)},t,Qe(e))}))):null,Ae.length>0?c()(v.a,{title:Qe("plots"),className:"nav-plots"},void 0,Ae.map((function(e,t){var n=c()(b.a,{eventKey:"3.".concat(t+1)},t,Qe(e));return"Histogram"===e&&"Mosaic Plot"===Ae[t-1]||"Line Plot"===e&&"Box Plot"===Ae[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,pe.length>0?c()(v.a,{title:Qe("tests"),className:"nav-tests"},void 0,pe.map((function(e,t){var n=c()(b.a,{eventKey:"4.".concat(t+1)},t,Qe(e));return"One-Sample Proportion Test"===e&&"One-Way ANOVA"===pe[t-1]||"Correlation Test"===e&&"Two-Sample Proportion Test"===pe[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,Oe.length>0?c()(v.a,{title:Qe("models"),className:"nav-models"},void 0,Oe.map((function(e,t){var n=c()(b.a,{eventKey:"5.".concat(t+1)},t,Qe(e));return"Decision Tree"===e&&"LASSO"===Oe[t-1]||"PCA"===e&&"Naive Bayes"===Oe[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,ke?c()(g.a.Item,{className:"nav-transform"},void 0,c()(g.a.Link,{eventKey:"6"},void 0,Qe("transform"))):null),Fe=c()(h.a.Content,{},void 0,c()(h.a.Pane,{eventKey:"1"},void 0,l.a.createElement(O,o()({},He,{statistics:me,logAction:ve,t:Qe}))),fe.map((function(e,t){var n=null;switch(e){case"Frequency Table":n=l.a.createElement(f,o()({},Ve,{logAction:ve,t:Qe}));break;case"Contingency Table":n=l.a.createElement(m,o()({},Ve,{logAction:ve,session:Be,t:Qe}))}return c()(h.a.Pane,{eventKey:"2.".concat(t+1)},t,n)})),Ae.map((function(e,t){var n=null;switch(e){case"Bar Chart":n=l.a.createElement(M,o()({},Ve,{quantitative:de,logAction:ve,session:Be,onSelected:Pe,t:Qe}));break;case"Box Plot":n=l.a.createElement(V,o()({},He,{logAction:ve,session:Be,t:Qe}));break;case"Contour Chart":n=l.a.createElement(Y,o()({},He,{logAction:ve,session:Be,onSelected:Ke,t:Qe}));break;case"Heat Map":n=l.a.createElement(H,o()({},He,{logAction:ve,session:Be,onSelected:Ke,t:Qe}));break;case"Histogram":n=l.a.createElement(x,o()({},He,{logAction:ve,session:Be,showDensityOption:je,onSelected:ye,t:Qe}));break;case"Line Plot":n=l.a.createElement(F,o()({},He,{categorical:ue,logAction:ve,session:Be,t:Qe}));break;case"Mosaic Plot":n=l.a.createElement(I,o()({},Ve,{logAction:ve,session:Be,t:Qe}));break;case"Pie Chart":n=l.a.createElement(W,o()({},Ve,{quantitative:de,logAction:ve,session:Be,t:Qe}));break;case"QQ Plot":n=l.a.createElement(J,o()({},He,{logAction:ve,session:Be,onSelected:Ne,t:Qe}));break;case"Scatterplot":n=l.a.createElement(z,o()({},He,{logAction:ve,session:Be,onSelected:Ke,t:Qe}));break;case"Scatterplot Matrix":n=l.a.createElement(U,o()({},He,{logAction:ve,session:Be,onSelected:Ke,t:Qe}));break;case"Violin Plot":n=l.a.createElement(X,o()({},He,{logAction:ve,session:Be,t:Qe}));break;case"Map":n=l.a.createElement(R,o()({},He,{logAction:ve,session:Be,t:Qe}))}return c()(h.a.Pane,{eventKey:"3.".concat(t+1)},t,n)})),pe.map((function(e,o){var r=null;switch(e){case"One-Sample Mean Test":r=t||(t=c()(N,{onCreated:Se,data:he,quantitative:de,logAction:ve,showDecision:Ce,t:Qe}));break;case"Two-Sample Mean Test":r=n||(n=c()(L,{onCreated:Se,data:he,quantitative:de,categorical:ue,logAction:ve,session:Be,showDecision:Ce,t:Qe}));break;case"One-Sample Proportion Test":r=a||(a=c()(Q,{onCreated:Se,data:he,categorical:ue,logAction:ve,showDecision:Ce,t:Qe}));break;case"Two-Sample Proportion Test":r=i||(i=c()(B,{onCreated:Se,data:he,categorical:ue,logAction:ve,session:Be,showDecision:Ce,t:Qe}));break;case"One-Way ANOVA":r=d||(d=c()(T,{onCreated:Se,data:he,quantitative:de,categorical:ue,logAction:ve,showDecision:Ce,t:Qe}));break;case"Correlation Test":r=Z||(Z=c()(G,{onCreated:Se,data:he,quantitative:de,logAction:ve,showDecision:Ce,t:Qe}));break;case"Chi-squared Independence Test":r=$||($=c()(E,{onCreated:Se,data:he,categorical:ue,logAction:ve,showDecision:Ce,t:Qe}));break;case"Kruskal-Wallis Test":r=_||(_=c()(K,{onCreated:Se,data:he,quantitative:de,categorical:ue,logAction:ve,showDecision:Ce,t:Qe}))}return c()(h.a.Pane,{eventKey:"4.".concat(o+1)},o,r)})),Oe.map((function(e,t){var n=null;switch(e){case"Multiple Linear Regression":n=ee||(ee=c()(k,{categorical:ue,quantitative:de,onCreated:Se,data:he,logAction:ve,session:Be,onGenerate:Te,t:Qe}));break;case"Decision Tree":n=te||(te=c()(p,{categorical:ue,quantitative:de,onCreated:Se,data:he,logAction:ve,session:Be,onGenerate:Ee,t:Qe}));break;case"Random Forest":n=ne||(ne=c()(P,{categorical:ue,quantitative:de,onCreated:Se,data:he,logAction:ve,session:Be,onGenerate:Ee,t:Qe}));break;case"LASSO":n=ae||(ae=c()(j,{categorical:ue,quantitative:de,onCreated:Se,data:he,logAction:ve,session:Be,onGenerate:Te,t:Qe}));break;case"Logistic Regression":n=oe||(oe=c()(C,{categorical:ue,quantitative:de,onCreated:Se,data:he,logAction:ve,session:Be,onGenerate:Ee,t:Qe}));break;case"Simple Linear Regression":n=ie||(ie=c()(w,{categorical:ue,quantitative:de,onCreated:Se,data:he,logAction:ve,session:Be,onGenerate:Te,t:Qe}));break;case"PCA":n=ce||(ce=c()(S,{quantitative:de,originalQuantitative:be,onCreated:Se,onGenerate:Te,data:he,logAction:ve,session:Be,t:Qe}));break;case"Hierarchical Clustering":n=re||(re=c()(q,{quantitative:de,categorical:ue,originalQuantitative:de,onCreated:Se,onGenerate:we,data:he,logAction:ve,session:Be,t:Qe}));break;case"kmeans":n=le||(le=c()(y,{quantitative:de,categorical:ue,originalQuantitative:de,onCreated:Se,onGenerate:we,data:he,logAction:ve,session:Be,t:Qe}));break;case"Naive Bayes":n=se||(se=c()(D,{categorical:ue,quantitative:de,onCreated:Se,data:he,logAction:ve,session:Be,onGenerate:Ee,t:Qe}))}return c()(h.a.Pane,{eventKey:"5.".concat(t+1)},t,n)})),ke?c()(h.a.Pane,{eventKey:"6"},void 0,c()(A,{data:he,quantitative:de,categorical:ue,logAction:ve,session:Be,onGenerate:qe,onActive:Ge,t:Qe})):null);return c()(h.a.Container,{defaultActiveKey:Me,mountOnEnter:!0},void 0,xe,Fe)}}}]);