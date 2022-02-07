"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2562],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},676965:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=["components"],o={id:"data-sampler",title:"Data Sampler",sidebar_label:"Data Sampler"},p=void 0,u={unversionedId:"data-sampler",id:"data-sampler",title:"Data Sampler",description:"Component\u0103 care e\u0219antioneaz\u0103 observa\u021biile dintr-un set de date \u0219i le transmite componentelor copil.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/data-sampler.md",sourceDirName:".",slug:"/data-sampler",permalink:"/ro/docs/data-sampler",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-sampler.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"01.06.2021",frontMatter:{id:"data-sampler",title:"Data Sampler",sidebar_label:"Data Sampler"},sidebar:"docs",previous:{title:"Dashboard",permalink:"/ro/docs/dashboard"},next:{title:"Expire",permalink:"/ro/docs/expire"}},c=[{value:"Op\u021biuni",id:"op\u021biuni",children:[],level:2},{value:"Exemple",id:"exemple",children:[],level:2}],m={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Component\u0103 care e\u0219antioneaz\u0103 observa\u021biile dintr-un set de date \u0219i le transmite componentelor copil."),(0,i.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": obiect de date cu chei corespunz\u0103toare variabilelor de coloan\u0103. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sampleSize")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": dimensiunea implicit\u0103 a e\u0219antionului. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minSampleSize")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": dimensiunea minim\u0103 permis\u0103 a e\u0219antionului. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxSampleSize")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": dimensiunea maxim\u0103 permis\u0103 a e\u0219antionului. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataSampler data={heartdisease} >\n  {( sample ) => {\n    return <DataTable\n      data={sample}\n    />;\n  }}\n</DataSampler>\n")))}s.isMDXComponent=!0}}]);