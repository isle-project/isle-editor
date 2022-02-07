"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7162],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},188523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),i=["components"],l={id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},u=void 0,s={unversionedId:"plots/sunburst",id:"plots/sunburst",title:"Sunburst Plot",description:"Graf Sunburst zalo\u017een\xfd na d3 pro zobrazen\xed cest.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/plots/sunburst.md",sourceDirName:"plots",slug:"/plots/sunburst",permalink:"/cs/docs/plots/sunburst",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/sunburst.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},sidebar:"docs",previous:{title:"Scatter Plot Matrix",permalink:"/cs/docs/plots/scatterplot-matrix"},next:{title:"Violin Plot",permalink:"/cs/docs/plots/violinplot"}},p=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Graf Sunburst zalo\u017een\xfd na d3 pro zobrazen\xed cest."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"categories")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": pole n\xe1zv\u016f kategori\xed. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": datov\xfd objekt. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"width")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xed\u0159ka grafu (v px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"750"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"height")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": v\xfd\u0161ka grafu (v px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"breadcrumbs")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"{w,h,s,t}"),": objekt s rozm\u011bry: ",(0,o.kt)("inlineCode",{parentName:"li"},"w")," pro \u0161\xed\u0159ku, ",(0,o.kt)("inlineCode",{parentName:"li"},"h")," pro v\xfd\u0161ku, ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," pro rozte\u010d, ",(0,o.kt)("inlineCode",{parentName:"li"},"t")," pro \u0161\xed\u0159ku \u0161pi\u010dky/ocasu.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{\n  'w': 250,\n  'h': 50,\n  's': 5,\n  't': 15\n}"),".")),(0,o.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"")))}d.isMDXComponent=!0}}]);