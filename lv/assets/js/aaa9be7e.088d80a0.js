"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21494],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},421190:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=r(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e};const m={id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},d=void 0,f={unversionedId:"plots/sunburst",id:"plots/sunburst",title:"Sunburst Plot",description:"Uz d3 balst\u012bts saules staru gabals ce\u013cu att\u0113lo\u0161anai.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/plots/sunburst.md",sourceDirName:"plots",slug:"/plots/sunburst",permalink:"/lv/docs/plots/sunburst",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/sunburst.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. g. 1. j\u016bn.",frontMatter:{id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},sidebar:"docs",previous:{title:"Scatter Plot Matrix",permalink:"/lv/docs/plots/scatterplot-matrix"},next:{title:"Violin Plot",permalink:"/lv/docs/plots/violinplot"}},b={},k=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],y={toc:k};function v(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),p),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Uz d3 balst\u012bts saules staru gabals ce\u013cu att\u0113lo\u0161anai."),(0,n.kt)("h2",c({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"categories")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array (required)"),": kategoriju nosaukumu mas\u012bvs. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": datu objekts. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"width")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": laukuma platums (px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"750"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"height")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": laukuma augstums (px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"breadcrumbs")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"{w,h,s,t}"),": objekts ar izm\u0113riem: ",(0,n.kt)("inlineCode",{parentName:"li"},"w")," - platums, ",(0,n.kt)("inlineCode",{parentName:"li"},"h")," - augstums, ",(0,n.kt)("inlineCode",{parentName:"li"},"s")," - atstarpe, ",(0,n.kt)("inlineCode",{parentName:"li"},"t")," - gala/acs platums.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{\n  'w': 250,\n  'h': 50,\n  's': 5,\n  't': 15\n}"),".")),(0,n.kt)("h2",c({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"")))}v.isMDXComponent=!0}}]);