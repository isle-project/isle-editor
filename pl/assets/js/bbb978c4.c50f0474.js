(self.webpackChunk=self.webpackChunk||[]).push([[2714],{603905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},154856:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=t(722122),a=t(419756),i=(t(202784),t(603905)),o={id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},l={unversionedId:"models/principal-component-analysis",id:"models/principal-component-analysis",isDocsHomePage:!1,title:"Principal Component Analysis",description:"Analiza g\u0142\xf3wnych sk\u0142adnik\xf3w.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/models/principal-component-analysis.md",sourceDirName:"models",slug:"/models/principal-component-analysis",permalink:"/docs/models/principal-component-analysis",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/principal-component-analysis.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",sidebar_label:"Principal Component Analysis",frontMatter:{id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},sidebar:"docs",previous:{title:"Naive Bayes",permalink:"/docs/models/naive-bayes"},next:{title:"Random Forest",permalink:"/docs/models/random-forest"}},p=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],c={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Analiza g\u0142\xf3wnych sk\u0142adnik\xf3w."),(0,i.kt)("h2",{id:"opcje"},"Opcje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": nazwy zmiennych wykorzystywanych do tworzenia klastr\xf3w. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"center")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u015brodkowe warto\u015bci poprzez odj\u0119cie \u015bredniej. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scale")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": warto\u015bci skali poprzez podzielenie ich odchyleniem standardowym. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"noComponents")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),': liczba komponent\xf3w dostarczanych do wywo\u0142ania zwrotnego "na wynik. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onResult")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne z obiektem i komponentami modelu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,i.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PrincipalComponentAnalysis \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n    scale\n/>\n")))}s.isMDXComponent=!0}}]);