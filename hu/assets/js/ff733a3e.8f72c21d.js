"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9845],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},361902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=["components"],o={id:"data-sampler",title:"Data Sampler",sidebar_label:"Data Sampler"},p=void 0,m={unversionedId:"data-sampler",id:"data-sampler",title:"Data Sampler",description:"Komponens az adathalmazb\xf3l t\xf6rt\xe9n\u0151 megfigyel\xe9sek mintav\xe9telez\xe9s\xe9re \xe9s a gyermek komponenseknek val\xf3 \xe1tad\xe1s\xe1ra.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/data-sampler.md",sourceDirName:".",slug:"/data-sampler",permalink:"/hu/docs/data-sampler",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-sampler.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"data-sampler",title:"Data Sampler",sidebar_label:"Data Sampler"},sidebar:"docs",previous:{title:"Dashboard",permalink:"/hu/docs/dashboard"},next:{title:"Expire",permalink:"/hu/docs/expire"}},u=[{value:"Opci\xf3k",id:"opci\xf3k",children:[],level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[],level:2}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Komponens az adathalmazb\xf3l t\xf6rt\xe9n\u0151 megfigyel\xe9sek mintav\xe9telez\xe9s\xe9re \xe9s a gyermek komponenseknek val\xf3 \xe1tad\xe1s\xe1ra."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": adatobjektum az oszlopv\xe1ltoz\xf3knak megfelel\u0151 kulcsokkal. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sampleSize")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": alap\xe9rtelmezett minta m\xe9rete. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minSampleSize")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": minim\xe1lisan megengedett mintanagys\xe1g. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxSampleSize")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1lisan megengedett mintam\xe9ret. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataSampler data={heartdisease} >\n  {( sample ) => {\n    return <DataTable\n      data={sample}\n    />;\n  }}\n</DataSampler>\n")))}c.isMDXComponent=!0}}]);