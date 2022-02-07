"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1751],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(487462),r=a(202784),i=a(972389),l=a(275773),o=a(386010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,h=g.setTabGroupChoices,C=(0,r.useState)(y),O=C[0],T=C[1],w=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=N[d];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&T(E)}var x=function(e){var t=e.currentTarget,a=w.indexOf(t),n=b[a].value;n!==O&&(S(t),T(n),null!=d&&h(d,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},v)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},229312:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return v}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),l=a(409877),o=a(358215),s=["components"],u={id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},c=void 0,m={unversionedId:"summary-statistics",id:"summary-statistics",title:"Summary Statistics",description:"Statistiche riassuntive.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/summary-statistics.md",sourceDirName:".",slug:"/summary-statistics",permalink:"/it/docs/summary-statistics",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/summary-statistics.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630356835,formattedLastUpdatedAt:"30/8/2021",frontMatter:{id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/it/docs/tests/proptest2"},next:{title:"Beacon Tooltip",permalink:"/it/docs/beacon-tooltip"}},p=[{value:"Opzioni",id:"opzioni",children:[],level:2},{value:"Esempi",id:"esempi",children:[],level:2}],d={toc:p};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Statistiche riassuntive."),(0,i.kt)("h2",{id:"opzioni"},"Opzioni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": oggetto di array di valori. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": variabile(i) per la quale calcolare le statistiche. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"statistics")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": statistiche da calcolare per le variabili selezionate (o ",(0,i.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Range"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Interquartile Range"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Standard Deviation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Variance"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation Matrix"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Skewness"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Excess Kurtosis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"First Quartile"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Third Quartile"),", o ",(0,i.kt)("inlineCode",{parentName:"li"},"Quantile"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"secondVariable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": seconda variabile per la statistica di correlazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"omit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se omettere i valori mancanti. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|Factor)>"),": nome della/e variabile/i di raggruppamento. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": array di quantili da calcolare per la statistica ",(0,i.kt)("inlineCode",{parentName:"li"},"Quantile. Default: "),"none`.")),(0,i.kt)("h2",{id:"esempi"},"Esempi"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"group"},{label:"Quantiles",value:"quantiles"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"group",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n    group={[ 'Gender' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"quantiles",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Quantile' ]}\n    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}\n/>\n")))))}v.isMDXComponent=!0}}]);