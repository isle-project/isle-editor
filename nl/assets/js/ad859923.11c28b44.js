(self.webpackChunk=self.webpackChunk||[]).push([[9074],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,u=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,m=e.values,d=e.groupId,c=e.className,g=i(),f=g.tabGroupChoices,k=g.setTabGroupChoices,v=(0,a.useState)(r),b=v[0],N=v[1],h=a.Children.toArray(e.children),y=[];if(null!=d){var C=f[d];null!=C&&C!==b&&m.some((function(e){return e.value===C}))&&N(C)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),a=m[n].value;N(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,r,i,l,o,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case p:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},c)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},35242:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return g}});var a=n(722122),r=n(419756),i=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],p={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},u=void 0,m={unversionedId:"plots/histogram",id:"plots/histogram",isDocsHomePage:!1,title:"Histogram",description:"Een histogram.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/plots/histogram.md",sourceDirName:"plots",slug:"/plots/histogram",permalink:"/nl/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1628108874,formattedLastUpdatedAt:"4-8-2021",frontMatter:{id:"histogram",title:"Histogram",sidebar_label:"Histogram"},sidebar:"docs",previous:{title:"Heat Map",permalink:"/nl/docs/plots/heatmap"},next:{title:"Interval Plot",permalink:"/nl/docs/plots/interval-plot"}},d=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],c={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Een histogram."),(0,i.kt)("h2",{id:"opties"},"Opties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": object van waardevermeerdering. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string (required)"),": weer te geven variabele. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": groepsvariabele. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": titel van histogram. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": of gegroepeerde histogrammen over elkaar heen moeten worden gelegd (",(0,i.kt)("inlineCode",{parentName:"li"},"Overlay"),") of in afzonderlijke percelen naast elkaar (",(0,i.kt)("inlineCode",{parentName:"li"},"Facets"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Overlay'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayDensity")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of dichtheidswaarden worden weergegeven in plaats van tellingen op de y-as. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"densityType")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": bij het weergeven van dichtheden kan men ofwel een parametrische verdeling (",(0,i.kt)("inlineCode",{parentName:"li"},"Normaal"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniform")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"Exponentieel"),") of een niet-parametrische kerneldichtheidsschatting (",(0,i.kt)("inlineCode",{parentName:"li"},"Datagedreven"),") over elkaar heen leggen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bandwidthAdjust")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": handmatige aanpassing van de bandbreedte van de kernel dichtheid (alleen van toepassing wanneer ",(0,i.kt)("inlineCode",{parentName:"li"},"densityType")," is ingesteld op ",(0,i.kt)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"binStrategy")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": binning strategie (",(0,i.kt)("inlineCode",{parentName:"li"},"Automatisch"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Selecteer # van bakken"),", of ",(0,i.kt)("inlineCode",{parentName:"li"},"Set bin breedte"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Automatic'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nBins")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": aangepast aantal bakken. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nCols")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": aantal kolommen bij weergave van een gefacetteerd gegroepeerd histogram. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"xBins")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"{start,size,end}"),": object met ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"grootte"),", en ",(0,i.kt)("inlineCode",{parentName:"li"},"eind")," eigenschappen die het eetgedrag regelen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sameXRange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indien waar, zal het x-as bereik voor elk facet hetzelfde zijn als het algemene histogram. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sameYRange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indien waar, zal het y-as bereik voor elk facet hetzelfde zijn als het totale histogram. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,i.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),(0,i.kt)(o.Z,{value:"groupModeFactes",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),(0,i.kt)(o.Z,{value:"displayDensity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),(0,i.kt)(o.Z,{value:"noBins",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}g.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);