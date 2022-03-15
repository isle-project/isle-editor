"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[986],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},358215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(202784);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(487462),r=a(202784),i=a(972389),l=a(161419),o=a(386010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,m=e.block,p=e.defaultValue,d=e.values,c=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),y=N.tabGroupChoices,h=N.setTabGroupChoices,C=(0,r.useState)(b),j=C[0],D=C[1],T=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var w=y[c];null!=w&&w!==j&&g.some((function(e){return e.value===w}))&&D(w)}var x=function(e){var t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==j&&(O(t),D(n),null!=c&&h(c,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},g.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},819836:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return v}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),l=a(409877),o=a(358215),s=["components"],u={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},m=void 0,p={unversionedId:"plots/histogram",id:"plots/histogram",title:"Histogram",description:"Histogramma.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/plots/histogram.md",sourceDirName:"plots",slug:"/plots/histogram",permalink:"/lv/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633398906,formattedLastUpdatedAt:"4.10.2021.",frontMatter:{id:"histogram",title:"Histogram",sidebar_label:"Histogram"},sidebar:"docs",previous:{title:"Heat Map",permalink:"/lv/docs/plots/heatmap"},next:{title:"Interval Plot",permalink:"/lv/docs/plots/interval-plot"}},d={},c=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],k={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Histogramma."),(0,i.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\u0113rt\u012bbu mas\u012bvu objekts. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string (required)"),": main\u012bgais lielums, lai par\u0101d\u012btu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": grup\u0113\u0161anas main\u012bgais. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": histogrammas nosaukums. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": vai p\u0101rkl\u0101t sagrup\u0113tas histogrammas vienu virs otras (",(0,i.kt)("inlineCode",{parentName:"li"},"Overlay"),") vai atsevi\u0161\u0137os laukumos blakus (",(0,i.kt)("inlineCode",{parentName:"li"},"Facets"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Overlay'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayDensity")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai uz y-asis att\u0113lot bl\u012bvuma v\u0113rt\u012bbas, nevis skait\u013cus.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"densityType")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": par\u0101dot bl\u012bvumus, var p\u0101rkl\u0101t parametrisku sadal\u012bjumu (",(0,i.kt)("inlineCode",{parentName:"li"},"Norm\u0101ls"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vienm\u0113r\u012bgs")," vai ",(0,i.kt)("inlineCode",{parentName:"li"},"eksponenci\u0101ls"),") vai neparametrisku kodola bl\u012bvuma nov\u0113rt\u0113jumu (",(0,i.kt)("inlineCode",{parentName:"li"},"Data-driven"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"densityParams")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<number>"),": bl\u012bvuma sadal\u012bjuma parametri, ja tiek izmantots parametriskais sadal\u012bjums (","[mu, sigma]"," norm\u0101lajam sadal\u012bjumam, ","[a, b]"," vienm\u0113r\u012bgajam sadal\u012bjumam, ","[lambda]"," eksponenci\u0101lajam sadal\u012bjumam).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bandwidthAdjust")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": kodola bl\u012bvuma joslas platuma manu\u0101la regul\u0113\u0161ana (piem\u0113rojams tikai tad, ja ",(0,i.kt)("inlineCode",{parentName:"li"},"densityType")," ir iestat\u012bts uz ",(0,i.kt)("inlineCode",{parentName:"li"},"Data-driven"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"binStrategy")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": bin\u0113\u0161anas strat\u0113\u0123ija (",(0,i.kt)("inlineCode",{parentName:"li"},"Autom\u0101tiska"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Izv\u0113l\u0113ties # bins")," vai ",(0,i.kt)("inlineCode",{parentName:"li"},"Noteikt bin platumu"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Automatic'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nBins")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": piel\u0101gotais tvert\u0146u skaits. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nCols")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": kolonnu skaits, kad tiek r\u0101d\u012bta \u0161\u0137aut\u0146aina grup\u0113ta histogramma.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"xBins")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"{start,size,end}"),": objekts ar ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"size")," un ",(0,i.kt)("inlineCode",{parentName:"li"},"end")," \u012bpa\u0161\u012bb\u0101m, kas regul\u0113 binning uzved\u012bbu.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sameXRange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ja true, katras \u0161\u0137autnes x-as diapazons b\u016bs t\u0101ds pats k\u0101 kop\u0113j\u0101 histogramma.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sameYRange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ja true, y ass diapazons katrai \u0161\u0137autnei b\u016bs t\u0101ds pats k\u0101 kop\u0113jai histogrammai.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,i.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),(0,i.kt)(o.Z,{value:"groupModeFactes",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),(0,i.kt)(o.Z,{value:"displayDensity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),(0,i.kt)(o.Z,{value:"noBins",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}v.isMDXComponent=!0}}]);