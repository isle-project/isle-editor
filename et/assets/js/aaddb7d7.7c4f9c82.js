(self.webpackChunk=self.webpackChunk||[]).push([[8927],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},982361:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o=["components"],l={id:"simple-linear-regression",title:"Simple Linear Regression",sidebar_label:"Simple Linear Regression"},s=void 0,u={unversionedId:"models/simple-linear-regression",id:"models/simple-linear-regression",isDocsHomePage:!1,title:"Simple Linear Regression",description:"Lihtne lineaarne regressioon.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/models/simple-linear-regression.md",sourceDirName:"models",slug:"/models/simple-linear-regression",permalink:"/et/docs/models/simple-linear-regression",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/simple-linear-regression.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"20.7.2021",frontMatter:{id:"simple-linear-regression",title:"Simple Linear Regression",sidebar_label:"Simple Linear Regression"},sidebar:"docs",previous:{title:"Random Forest",permalink:"/et/docs/models/random-forest"},next:{title:"Contingency Table",permalink:"/et/docs/tables/contingency-table"}},p=[{value:"Valikud",id:"valikud",children:[]},{value:"N\xe4ited",id:"n\xe4ited",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lihtne lineaarne regressioon."),(0,a.kt)("h2",{id:"valikud"},"Valikud"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\xe4\xe4rtuste massiivi objekt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": seletav muutuja. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": vastusemuutuja. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": r\xfchmitav muutuja. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas puuduvaid v\xe4\xe4rtusi j\xe4etakse mudeli sobitamisel v\xe4lja.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onDiagnostics")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse \xfcles koos diagnostiliste joonistega. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse esile koos predict funktsiooniga, et teha ennustused uute andmete kohta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SimpleLinearRegression \n    data={heartdisease} \n    y="Cost"\n    x="Interventions"\n    group="Complications"\n/>\n')))}m.isMDXComponent=!0}}]);