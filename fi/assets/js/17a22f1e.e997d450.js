"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3676],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},937422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},s=void 0,u={unversionedId:"models/logistic-regression",id:"models/logistic-regression",title:"Logistic Regression",description:"Logistinen regressio.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/models/logistic-regression.md",sourceDirName:"models",slug:"/models/logistic-regression",permalink:"/fi/docs/models/logistic-regression",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/logistic-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"20.7.2021",frontMatter:{id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},sidebar:"docs",previous:{title:"LASSO Regression",permalink:"/fi/docs/models/lasso-regression"},next:{title:"Multiple Linear Regression",permalink:"/fi/docs/models/multiple-linear-regression"}},c={},p=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logistinen regressio."),(0,o.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": arvojoukkojen objekti. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"y")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": tulosmuuttuja. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"success")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"any (required)"),": menestysluokka ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),". Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"x")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": yksi tai useampi ennustemuuttuja. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": joukko ",(0,o.kt)("inlineCode",{parentName:"li"},"data"),":n muuttujia, jotka ovat ",(0,o.kt)("inlineCode",{parentName:"li"},"kvantitatiivisia"),".. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, j\xe4tet\xe4\xe4nk\xf6 puuttuvat arvot pois. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"intercept")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, sovitetaanko malli, jossa on leikkaustermi.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": callback, jota kutsutaan predict-funktion kanssa uusien tietojen ennustamista varten.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LogisticRegression \n    data={heartdisease} \n    y=\"Complications\"\n    success={1}\n    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}d.isMDXComponent=!0}}]);