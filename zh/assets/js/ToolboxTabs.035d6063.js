(self.webpackChunk=self.webpackChunk||[]).push([[5960],{716410:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var a=n(607560),o=n(858255),i=(n(319371),n(202784)),r=n(376699),c=n(741319),s=n(844601),l=n(155061),u=n(569862),d=n(998283),Z=n(72779),v=n.n(Z),m=n(429658),b=n(738314),g=n(206198),f=i.forwardRef((function(e,t){var n=e.id,o=e.title,r=e.children,c=e.bsPrefix,s=e.className,l=e.rootCloseEvent,u=e.menuRole,Z=e.disabled,f=e.active,h=e.renderMenuOnMount,E=(0,d.Z)(e,["id","title","children","bsPrefix","className","rootCloseEvent","menuRole","disabled","active","renderMenuOnMount"]),C=(0,m.vE)(void 0,"nav-item");return i.createElement(b.Z,(0,a.Z)({ref:t},E,{className:v()(s,C)}),i.createElement(b.Z.Toggle,{id:n,eventKey:null,active:f,disabled:Z,childBsPrefix:c,as:g.Z},o),i.createElement(b.Z.Menu,{role:u,renderOnMount:h,rootCloseEvent:l},r))}));f.displayName="NavDropdown",f.Item=b.Z.Item,f.ItemText=b.Z.ItemText,f.Divider=b.Z.Divider,f.Header=b.Z.Header;var h=f,E=n(188429),C=(0,s.Z)((function(){return n.e(705).then(n.bind(n,784274))})),p=(0,s.Z)((function(){return n.e(7424).then(n.bind(n,598155))})),A=(0,s.Z)((function(){return n.e(7088).then(n.bind(n,175807))})),P=(0,s.Z)((function(){return Promise.all([n.e(532),n.e(3047)]).then(n.bind(n,598577))})),y=(0,s.Z)((function(){return n.e(5501).then(n.bind(n,727063))})),k=(0,s.Z)((function(){return n.e(781).then(n.bind(n,296338))})),x=(0,s.Z)((function(){return n.e(5974).then(n.bind(n,85367))})),O=(0,s.Z)((function(){return n.e(6573).then(n.bind(n,862889))})),T=(0,s.Z)((function(){return n.e(5738).then(n.bind(n,257427))})),S=(0,s.Z)((function(){return n.e(4794).then(n.bind(n,980389))})),w=(0,s.Z)((function(){return n.e(4890).then(n.bind(n,929945))})),K=(0,s.Z)((function(){return n.e(8865).then(n.bind(n,121585))})),N=(0,s.Z)((function(){return n.e(1654).then(n.bind(n,774964))})),D=(0,s.Z)((function(){return n.e(8523).then(n.bind(n,868155))})),q=(0,s.Z)((function(){return n.e(9172).then(n.bind(n,47880))})),M=(0,s.Z)((function(){return n.e(5922).then(n.bind(n,877466))})),G=(0,s.Z)((function(){return n.e(9145).then(n.bind(n,783277))})),I=(0,s.Z)((function(){return n.e(7258).then(n.bind(n,322728))})),B=(0,s.Z)((function(){return n.e(3604).then(n.bind(n,141159))})),R=(0,s.Z)((function(){return n.e(2942).then(n.bind(n,59787))})),L=(0,s.Z)((function(){return n.e(2253).then(n.bind(n,947120))})),Q=(0,s.Z)((function(){return n.e(9761).then(n.bind(n,965746))})),H=(0,s.Z)((function(){return n.e(483).then(n.bind(n,884358))})),V=(0,s.Z)((function(){return n.e(7226).then(n.bind(n,802995))})),F=(0,s.Z)((function(){return n.e(8026).then(n.bind(n,596723))})),W=(0,s.Z)((function(){return n.e(5157).then(n.bind(n,219463))})),$=(0,s.Z)((function(){return n.e(2479).then(n.bind(n,415112))})),j=(0,s.Z)((function(){return n.e(5711).then(n.bind(n,329760))})),z=(0,s.Z)((function(){return n.e(1017).then(n.bind(n,651679))})),J=(0,s.Z)((function(){return n.e(1299).then(n.bind(n,142238))})),U=(0,s.Z)((function(){return n.e(8431).then(n.bind(n,507245))})),X=(0,s.Z)((function(){return n.e(2860).then(n.bind(n,901768))})),Y=(0,s.Z)((function(){return n.e(4152).then(n.bind(n,792578))})),_=(0,s.Z)((function(){return n.e(4012).then(n.bind(n,388891))})),ee=(0,s.Z)((function(){return n.e(4601).then(n.bind(n,122645))})),te=function(e){var t,n,s,d,Z,v,m,b,g,f,te,ne,ae,oe,ie,re,ce,se,le=e.categorical,ue=e.quantitative,de=e.originalQuantitative,Ze=e.groupingVariables,ve=e.logAction,me=e.data,be=e.statistics,ge=e.tables,fe=e.models,he=e.plots,Ee=e.tests,Ce=e.showHistogramDensityOption,pe=e.showTestDecisions,Ae=e.transformer,Pe=e.onBarchartSelection,ye=e.onCategoricalGenerate,ke=e.onCreated,xe=e.onGenerateTransformedVariable,Oe=e.onHistogramSelection,Te=e.onPlotDone,Se=e.onQuantitativeGenerate,we=e.onBothGenerate,Ke=e.onTransformerBeingActive,Ne=e.on2dSelection,De=e.onQQPlotSelection,qe=be.length,Me=(0,r.$)("data-explorer").t,Ge=(0,i.useContext)(c.Z),Ie="1";0===qe&&(Ie=ge.length>0?"2.1":"3.1");var Be={data:me,variables:le,groupingVariables:Ze,onCreated:ke,onPlotDone:Te},Re={data:me,variables:ue,groupingVariables:Ze,onCreated:ke,onPlotDone:Te},Le=(0,o.Z)("div",{className:"nav nav-tabs",role:"tablist"},void 0,qe>0?(0,o.Z)(u.Z.Item,{className:"nav-statistics"},void 0,(0,o.Z)(u.Z.Link,{eventKey:"1"},void 0,Me("statistics"))):null,ge.length>0&&le.length>0?(0,o.Z)(h,{title:Me("tables"),className:"nav-tables"},void 0,ge.map((function(e,t){return(0,o.Z)(l.Z,{eventKey:"2.".concat(t+1)},t,Me(e))}))):null,he.length>0?(0,o.Z)(h,{title:Me("plots"),className:"nav-plots"},void 0,he.map((function(e,t){var n=(0,o.Z)(l.Z,{eventKey:"3.".concat(t+1)},t,Me(e));return"Histogram"===e&&"Mosaic Plot"===he[t-1]||"Line Plot"===e&&"Box Plot"===he[t-1]?(0,o.Z)(i.Fragment,{},t,(0,o.Z)(h.Divider,{},"".concat(t,"-div")),n):n}))):null,Ee.length>0?(0,o.Z)(h,{title:Me("tests"),className:"nav-tests"},void 0,Ee.map((function(e,t){var n=(0,o.Z)(l.Z,{eventKey:"4.".concat(t+1)},t,Me(e));return"One-Sample Proportion Test"===e&&"One-Way ANOVA"===Ee[t-1]||"Correlation Test"===e&&"Two-Sample Proportion Test"===Ee[t-1]?(0,o.Z)(i.Fragment,{},t,(0,o.Z)(h.Divider,{},"".concat(t,"-div")),n):n}))):null,fe.length>0?(0,o.Z)(h,{title:Me("models"),className:"nav-models"},void 0,fe.map((function(e,t){var n=(0,o.Z)(l.Z,{eventKey:"5.".concat(t+1)},t,Me(e));return"Decision Tree"===e&&"LASSO"===fe[t-1]||"PCA"===e&&"Naive Bayes"===fe[t-1]?(0,o.Z)(i.Fragment,{},t,(0,o.Z)(h.Divider,{},"".concat(t,"-div")),n):n}))):null,Ae?(0,o.Z)(u.Z.Item,{className:"nav-transform"},void 0,(0,o.Z)(u.Z.Link,{eventKey:"6"},void 0,Me("transform"))):null),Qe=(0,o.Z)(E.Z.Content,{},void 0,(0,o.Z)(E.Z.Pane,{eventKey:"1"},void 0,i.createElement(A,(0,a.Z)({},Re,{statistics:be,logAction:ve,t:Me}))),ge.map((function(e,t){var n=null;switch(e){case"Frequency Table":n=i.createElement(p,(0,a.Z)({},Be,{logAction:ve,t:Me}));break;case"Contingency Table":n=i.createElement(C,(0,a.Z)({},Be,{logAction:ve,session:Ge,t:Me}))}return(0,o.Z)(E.Z.Pane,{eventKey:"2.".concat(t+1)},t,n)})),he.map((function(e,t){var n=null;switch(e){case"Bar Chart":n=i.createElement(H,(0,a.Z)({},Be,{quantitative:ue,logAction:ve,session:Ge,onSelected:Pe,t:Me}));break;case"Box Plot":n=i.createElement(V,(0,a.Z)({},Re,{logAction:ve,session:Ge,t:Me}));break;case"Contour Chart":n=i.createElement(ee,(0,a.Z)({},Re,{logAction:ve,session:Ge,onSelected:Ne,t:Me}));break;case"Heat Map":n=i.createElement(F,(0,a.Z)({},Re,{logAction:ve,session:Ge,onSelected:Ne,t:Me}));break;case"Histogram":n=i.createElement(W,(0,a.Z)({},Re,{logAction:ve,session:Ge,showDensityOption:Ce,onSelected:Oe,t:Me}));break;case"Line Plot":n=i.createElement($,(0,a.Z)({},Re,{categorical:le,logAction:ve,session:Ge,t:Me}));break;case"Mosaic Plot":n=i.createElement(z,(0,a.Z)({},Be,{logAction:ve,session:Ge,t:Me}));break;case"Pie Chart":n=i.createElement(J,(0,a.Z)({},Be,{quantitative:ue,logAction:ve,session:Ge,t:Me}));break;case"QQ Plot":n=i.createElement(U,(0,a.Z)({},Re,{logAction:ve,session:Ge,onSelected:De,t:Me}));break;case"Scatterplot":n=i.createElement(X,(0,a.Z)({},Re,{logAction:ve,session:Ge,onSelected:Ne,t:Me}));break;case"Scatterplot Matrix":n=i.createElement(Y,(0,a.Z)({},Re,{logAction:ve,session:Ge,onSelected:Ne,t:Me}));break;case"Violin Plot":n=i.createElement(_,(0,a.Z)({},Re,{logAction:ve,session:Ge,t:Me}));break;case"Map":n=i.createElement(j,(0,a.Z)({},Re,{logAction:ve,session:Ge,t:Me}))}return(0,o.Z)(E.Z.Pane,{eventKey:"3.".concat(t+1)},t,n)})),Ee.map((function(e,a){var i=null;switch(e){case"One-Sample Mean Test":i=t||(t=(0,o.Z)(B,{onCreated:ke,data:me,quantitative:ue,logAction:ve,showDecision:pe,t:Me}));break;case"Two-Sample Mean Test":i=n||(n=(0,o.Z)(R,{onCreated:ke,data:me,quantitative:ue,categorical:le,logAction:ve,session:Ge,showDecision:pe,t:Me}));break;case"One-Sample Proportion Test":i=s||(s=(0,o.Z)(L,{onCreated:ke,data:me,categorical:le,logAction:ve,showDecision:pe,t:Me}));break;case"Two-Sample Proportion Test":i=d||(d=(0,o.Z)(Q,{onCreated:ke,data:me,categorical:le,logAction:ve,session:Ge,showDecision:pe,t:Me}));break;case"One-Way ANOVA":i=Z||(Z=(0,o.Z)(q,{onCreated:ke,data:me,quantitative:ue,categorical:le,logAction:ve,showDecision:pe,t:Me}));break;case"Correlation Test":i=v||(v=(0,o.Z)(G,{onCreated:ke,data:me,quantitative:ue,logAction:ve,showDecision:pe,t:Me}));break;case"Chi-squared Independence Test":i=m||(m=(0,o.Z)(M,{onCreated:ke,data:me,categorical:le,logAction:ve,showDecision:pe,t:Me}));break;case"Kruskal-Wallis Test":i=b||(b=(0,o.Z)(I,{onCreated:ke,data:me,quantitative:ue,categorical:le,logAction:ve,showDecision:pe,t:Me}))}return(0,o.Z)(E.Z.Pane,{eventKey:"4.".concat(a+1)},a,i)})),fe.map((function(e,t){var n=null;switch(e){case"Multiple Linear Regression":n=g||(g=(0,o.Z)(O,{categorical:le,quantitative:ue,onCreated:ke,data:me,logAction:ve,session:Ge,onGenerate:Se,t:Me}));break;case"Decision Tree":n=f||(f=(0,o.Z)(y,{categorical:le,quantitative:ue,onCreated:ke,data:me,logAction:ve,session:Ge,onGenerate:we,t:Me}));break;case"Random Forest":n=te||(te=(0,o.Z)(T,{categorical:le,quantitative:ue,onCreated:ke,data:me,logAction:ve,session:Ge,onGenerate:we,t:Me}));break;case"LASSO":n=ne||(ne=(0,o.Z)(k,{categorical:le,quantitative:ue,onCreated:ke,data:me,logAction:ve,session:Ge,onGenerate:Se,t:Me}));break;case"Logistic Regression":n=ae||(ae=(0,o.Z)(x,{categorical:le,quantitative:ue,onCreated:ke,data:me,logAction:ve,session:Ge,onGenerate:we,t:Me}));break;case"Simple Linear Regression":n=oe||(oe=(0,o.Z)(S,{categorical:le,quantitative:ue,onCreated:ke,data:me,logAction:ve,session:Ge,onGenerate:Se,t:Me}));break;case"PCA":n=ie||(ie=(0,o.Z)(w,{quantitative:ue,originalQuantitative:de,onCreated:ke,onGenerate:Se,data:me,logAction:ve,session:Ge,t:Me}));break;case"Hierarchical Clustering":n=re||(re=(0,o.Z)(K,{quantitative:ue,categorical:le,originalQuantitative:ue,onCreated:ke,onGenerate:ye,data:me,logAction:ve,session:Ge,t:Me}));break;case"kmeans":n=ce||(ce=(0,o.Z)(N,{quantitative:ue,categorical:le,originalQuantitative:ue,onCreated:ke,onGenerate:ye,data:me,logAction:ve,session:Ge,t:Me}));break;case"Naive Bayes":n=se||(se=(0,o.Z)(D,{categorical:le,quantitative:ue,onCreated:ke,data:me,logAction:ve,session:Ge,onGenerate:we,t:Me}))}return(0,o.Z)(E.Z.Pane,{eventKey:"5.".concat(t+1)},t,n)})),Ae?(0,o.Z)(E.Z.Pane,{eventKey:"6"},void 0,(0,o.Z)(P,{data:me,quantitative:ue,categorical:le,logAction:ve,session:Ge,onGenerate:xe,onActive:Ke,t:Me})):null);return(0,o.Z)(E.Z.Container,{defaultActiveKey:Ie,mountOnEnter:!0},void 0,Le,Qe)}},188429:function(e,t,n){"use strict";var a=n(535307),o=n(202784),i=n(485571),r=n(821729),c=n(557747),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.Component);s.Container=i.Z,s.Content=r.Z,s.Pane=c.Z,t.Z=s},485571:function(e,t,n){"use strict";var a=n(202784),o=n(229277),i=n(395269),r=n(942932);t.Z=function(e){var t=(0,o.Ch)(e,{activeKey:"onSelect"}),n=t.id,c=t.generateChildId,s=t.onSelect,l=t.activeKey,u=t.transition,d=t.mountOnEnter,Z=t.unmountOnExit,v=t.children,m=(0,a.useMemo)((function(){return c||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,c]),b=(0,a.useMemo)((function(){return{onSelect:s,activeKey:l,transition:u,mountOnEnter:d||!1,unmountOnExit:Z||!1,getControlledId:function(e){return m(e,"tabpane")},getControllerId:function(e){return m(e,"tab")}}}),[s,l,u,d,Z,m]);return a.createElement(i.Z.Provider,{value:b},a.createElement(r.Z.Provider,{value:s||null},v))}},821729:function(e,t,n){"use strict";var a=n(607560),o=n(998283),i=n(72779),r=n.n(i),c=n(202784),s=n(429658),l=c.forwardRef((function(e,t){var n=e.bsPrefix,i=e.as,l=void 0===i?"div":i,u=e.className,d=(0,o.Z)(e,["bsPrefix","as","className"]),Z=(0,s.vE)(n,"tab-content");return c.createElement(l,(0,a.Z)({ref:t},d,{className:r()(u,Z)}))}));t.Z=l},557747:function(e,t,n){"use strict";var a=n(607560),o=n(998283),i=n(72779),r=n.n(i),c=n(202784),s=n(429658),l=n(395269),u=n(942932),d=n(558370);var Z=c.forwardRef((function(e,t){var n=function(e){var t=(0,c.useContext)(l.Z);if(!t)return e;var n=t.activeKey,i=t.getControlledId,r=t.getControllerId,s=(0,o.Z)(t,["activeKey","getControlledId","getControllerId"]),Z=!1!==e.transition&&!1!==s.transition,v=(0,u.h)(e.eventKey);return(0,a.Z)({},e,{active:null==e.active&&null!=v?(0,u.h)(n)===v:e.active,id:i(e.eventKey),"aria-labelledby":r(e.eventKey),transition:Z&&(e.transition||s.transition||d.Z),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:s.unmountOnExit})}(e),i=n.bsPrefix,Z=n.className,v=n.active,m=n.onEnter,b=n.onEntering,g=n.onEntered,f=n.onExit,h=n.onExiting,E=n.onExited,C=n.mountOnEnter,p=n.unmountOnExit,A=n.transition,P=n.as,y=void 0===P?"div":P,k=(n.eventKey,(0,o.Z)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),x=(0,s.vE)(i,"tab-pane");if(!v&&!A&&p)return null;var O=c.createElement(y,(0,a.Z)({},k,{ref:t,role:"tabpanel","aria-hidden":!v,className:r()(Z,x,{active:v})}));return A&&(O=c.createElement(A,{in:v,onEnter:m,onEntering:b,onEntered:g,onExit:f,onExiting:h,onExited:E,mountOnEnter:C,unmountOnExit:p},O)),c.createElement(l.Z.Provider,{value:null},c.createElement(u.Z.Provider,{value:null},O))}));Z.displayName="TabPane",t.Z=Z}}]);