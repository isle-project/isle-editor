(self.webpackChunk=self.webpackChunk||[]).push([[7519],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},433718:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o=["components"],s={id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},l=void 0,u={unversionedId:"models/lasso-regression",id:"models/lasso-regression",isDocsHomePage:!1,title:"LASSO Regression",description:"LASSO regressioon.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/models/lasso-regression.md",sourceDirName:"models",slug:"/models/lasso-regression",permalink:"/et/docs/models/lasso-regression",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/lasso-regression.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"20.7.2021",frontMatter:{id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},sidebar:"docs",previous:{title:"k-means Clustering",permalink:"/et/docs/models/kmeans"},next:{title:"Logistic Regression",permalink:"/et/docs/models/logistic-regression"}},c=[{value:"Valikud",id:"valikud",children:[]},{value:"N\xe4ited",id:"n\xe4ited",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"LASSO regressioon."),(0,a.kt)("h2",{id:"valikud"},"Valikud"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\xe4\xe4rtuste massiivi objekt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": tulemusmuutuja. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": \xfcks v\xf5i mitu ennustavat muutujat. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),': muutujate massiivi "andmed", mis on "kvantitatiivsed".. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lambda")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": normaliseerimise parameeter. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.001"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intercept")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas mudelile sobitada intertseptiterminiga.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse esile koos predict funktsiooniga, et teha ennustused uute andmete kohta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onPredict() {}"),".")),(0,a.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LassoRegression\n    data={heartdisease} \n    y=\"Cost\"\n    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={['Age','Cost','Interventions']}\n/>\n")))}p.isMDXComponent=!0}}]);