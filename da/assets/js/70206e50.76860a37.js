"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4631],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,v=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(v,i(i({ref:n},d),{},{components:t})):a.createElement(v,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(202784);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(487462),r=t(202784),l=t(972389),i=t(161419),o=t(386010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),h=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,r.useState)(g),j=C[0],O=C[1],x=[],D=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=h[m];null!=T&&T!==j&&k.some((function(e){return e.value===T}))&&O(T)}var w=function(e){var n=e.currentTarget,t=x.indexOf(n),a=k[t].value;a!==j&&(D(n),O(a),null!=m&&y(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:w,onClick:w},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function d(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},407649:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return f}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),i=t(409877),o=t(358215),u=["components"],s={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},d=void 0,p={unversionedId:"plots/barchart",id:"plots/barchart",title:"Bar Chart",description:"S\xf8jlediagram.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/plots/barchart.md",sourceDirName:"plots",slug:"/plots/barchart",permalink:"/da/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.6.2021",frontMatter:{id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},sidebar:"docs",previous:{title:"Plotly",permalink:"/da/docs/plotly"},next:{title:"Box Plot",permalink:"/da/docs/plots/boxplot"}},c={},m=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],v={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"S\xf8jlediagram."),(0,l.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt af v\xe6rdi-arrays. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variabel til visning. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": grupperingsvariabel. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"yvar")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": valgfri variabel, der anvendes til kolonneh\xf8jder (i forbindelse med ",(0,l.kt)("inlineCode",{parentName:"li"},"summary"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"summary")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": navnet p\xe5 den statistik, der skal beregnes for ",(0,l.kt)("inlineCode",{parentName:"li"},"yvar")," og vises som s\xf8jleh\xf8jde for hver kategori (enten ",(0,l.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"horizontal")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": om bj\xe6lkerne skal vises vandret. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stackBars")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": ved gruppering, styrer, om s\xf8jlerne skal stables oven p\xe5 hinanden. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"relative")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": om der skal beregnes relative frekvenser inden for hver gruppe. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"totalPercent")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": om de samlede s\xf8jler skal vises som relative frekvenser. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"xOrder")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": enten ",(0,l.kt)("inlineCode",{parentName:"li"},"total"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"category"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"mean"),", eller ",(0,l.kt)("inlineCode",{parentName:"li"},"median"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"direction")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": hvordan man ordner s\xf8jler langs x-aksen (",(0,l.kt)("inlineCode",{parentName:"li"},"ascending")," eller ",(0,l.kt)("inlineCode",{parentName:"li"},"descending"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'ascending'"),".")),(0,l.kt)("h2",{id:"eksempler"},"Eksempler"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,l.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"descending",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),(0,l.kt)(o.Z,{value:"relativeStackedBars",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}f.isMDXComponent=!0}}]);