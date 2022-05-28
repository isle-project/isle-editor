"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92026],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},278893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return k}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},d=void 0,g={unversionedId:"models/logistic-regression",id:"models/logistic-regression",title:"Logistic Regression",description:"Lo\u0123istisk\u0101 regresija.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/models/logistic-regression.md",sourceDirName:"models",slug:"/models/logistic-regression",permalink:"/lv/docs/models/logistic-regression",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/logistic-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"20.07.2021.",frontMatter:{id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},sidebar:"docs",previous:{title:"LASSO Regression",permalink:"/lv/docs/models/lasso-regression"},next:{title:"Multiple Linear Regression",permalink:"/lv/docs/models/multiple-linear-regression"}},f={},k=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],v={toc:k};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Lo\u0123istisk\u0101 regresija."),(0,r.kt)("h2",p({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\u0113rt\u012bbu mas\u012bvu objekts. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": izn\u0101kuma main\u012bgais. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"success")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"any (required)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," veiksmes kategorija. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": viens vai vair\u0101ki prognoz\u0113jo\u0161ie main\u012bgie lielumi. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," main\u012bgo mas\u012bvs, kas ir ",(0,r.kt)("inlineCode",{parentName:"li"},"kvantitat\u012bvie"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai izlaist tr\u016bksto\u0161\u0101s v\u0113rt\u012bbas.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intercept")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai piem\u0113rot modeli ar intercepcijas locekli.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": atpaka\u013csaukums, kas izsaukts ar funkciju predict, lai veiktu prognozes par jauniem datiem.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",p({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LogisticRegression \n    data={heartdisease} \n    y=\"Complications\"\n    success={1}\n    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}b.isMDXComponent=!0}}]);