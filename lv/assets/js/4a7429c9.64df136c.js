"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5363],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},262386:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},d=void 0,f={unversionedId:"models/lasso-regression",id:"models/lasso-regression",title:"LASSO Regression",description:"LASSO regresija.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/models/lasso-regression.md",sourceDirName:"models",slug:"/models/lasso-regression",permalink:"/lv/docs/models/lasso-regression",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/lasso-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"2021. g. 21. j\u016bl.",frontMatter:{id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},sidebar:"docs",previous:{title:"k-means Clustering",permalink:"/lv/docs/models/kmeans"},next:{title:"Logistic Regression",permalink:"/lv/docs/models/logistic-regression"}},g={},k=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],v={toc:k};function b(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),p),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"LASSO regresija."),(0,n.kt)("h2",c({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\u0113rt\u012bbu mas\u012bvu objekts. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"y")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": izn\u0101kuma main\u012bgais. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"x")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": viens vai vair\u0101ki prognoz\u0113jo\u0161ie main\u012bgie lielumi. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"data")," main\u012bgo mas\u012bvs, kas ir ",(0,n.kt)("inlineCode",{parentName:"li"},"kvantitat\u012bvie"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lambda")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": regul\u0113\u0161anas parametrs. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.001"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"intercept")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai piem\u0113rot modeli ar intercepcijas locekli.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atpaka\u013csaukums, kas izsaukts ar funkciju predict, lai veiktu prognozes par jauniem datiem.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onPredict() {}"),".")),(0,n.kt)("h2",c({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LassoRegression\n    data={heartdisease} \n    y=\"Cost\"\n    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={['Age','Cost','Interventions']}\n/>\n")))}b.isMDXComponent=!0}}]);