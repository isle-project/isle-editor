"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8604],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},728047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"data-sampler",title:"Data Sampler",sidebar_label:"Data Sampler"},p=void 0,s={unversionedId:"data-sampler",id:"data-sampler",title:"Data Sampler",description:"Componente per campionare le osservazioni da un set di dati e passarle ai componenti figli.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/data-sampler.md",sourceDirName:".",slug:"/data-sampler",permalink:"/it/docs/data-sampler",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-sampler.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614615291,formattedLastUpdatedAt:"1/3/2021",frontMatter:{id:"data-sampler",title:"Data Sampler",sidebar_label:"Data Sampler"},sidebar:"docs",previous:{title:"Dashboard",permalink:"/it/docs/dashboard"},next:{title:"Expire",permalink:"/it/docs/expire"}},c={},m=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Componente per campionare le osservazioni da un set di dati e passarle ai componenti figli."),(0,i.kt)("h2",{id:"opzioni"},"Opzioni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": oggetto dati con chiavi corrispondenti a variabili di colonna. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sampleSize")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": dimensione predefinita del campione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minSampleSize")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": dimensione minima consentita del campione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxSampleSize")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": dimensione massima consentita del campione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"esempi"},"Esempi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataSampler data={heartdisease} >\n  {( sample ) => {\n    return <DataTable\n      data={sample}\n    />;\n  }}\n</DataSampler>\n")))}d.isMDXComponent=!0}}]);