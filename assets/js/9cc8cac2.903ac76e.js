"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55045],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},137516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return g}});var a=n(603905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const m={id:"map",title:"Map",sidebar_label:"Map"},d=void 0,f={unversionedId:"plots/map",id:"plots/map",title:"Map",description:"A geographic map which can be either supplied location names or longitude/latitude values.",source:"@site/docs/plots/map.md",sourceDirName:"plots",slug:"/plots/map",permalink:"/docs/plots/map",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633403869,formattedLastUpdatedAt:"Oct 5, 2021",frontMatter:{id:"map",title:"Map",sidebar_label:"Map"},sidebar:"docs",previous:{title:"Line Plot",permalink:"/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/docs/plots/mosaicplot"}},k={},g=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],b={toc:g};function N(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),c),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A geographic map which can be either supplied location names or longitude/latitude values."),(0,a.kt)("h2",u({},{id:"options"}),"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays for each variable. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scope")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": scope of map to be displayed. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'world'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"locations")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": name of variable in ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," holding location names. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"locationmode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": either ",(0,a.kt)("inlineCode",{parentName:"li"},"ISO-3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"USA-states"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"country names")," denoting how values in ",(0,a.kt)("inlineCode",{parentName:"li"},"locations")," are encoded. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'country names'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"longitude")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": name of variable in ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," holding longitude values. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"latitude")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": name of variable in ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," holding latitude values. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showLand")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": whether to show geographic features on map. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"aggregation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string indicating how to aggregate values for each location (either ",(0,a.kt)("inlineCode",{parentName:"li"},"sum"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"avg"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mode"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"median"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"count"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"first"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"last"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'sum'"),".")),(0,a.kt)("h2",u({},{id:"examples"}),"Examples"))}N.isMDXComponent=!0}}]);