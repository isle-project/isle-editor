(self.webpackChunk=self.webpackChunk||[]).push([[2668],{603905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},711698:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(722122),a=t(419756),i=(t(202784),t(603905)),o={id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},l={unversionedId:"models/naive-bayes",id:"models/naive-bayes",isDocsHomePage:!1,title:"Naive Bayes",description:"Naiwniacy Bayes, zak\u0142adaj\u0105c, \u017ce przewidywania dotycz\u0105ce przynale\u017cno\u015bci do klasy s\u0105 zgodne z normalnym rozk\u0142adem.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/models/naive-bayes.md",sourceDirName:"models",slug:"/models/naive-bayes",permalink:"/docs/models/naive-bayes",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/naive-bayes.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1.03.2021",sidebar_label:"Naive Bayes",frontMatter:{id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},sidebar:"docs",previous:{title:"Multiple Linear Regression",permalink:"/docs/models/multiple-linear-regression"},next:{title:"Principal Component Analysis",permalink:"/docs/models/principal-component-analysis"}},s=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Naiwniacy Bayes, zak\u0142adaj\u0105c, \u017ce przewidywania dotycz\u0105ce przynale\u017cno\u015bci do klasy s\u0105 zgodne z normalnym rozk\u0142adem."),(0,i.kt)("h2",{id:"opcje"},"Opcje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": zmienna wynikowa. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": jedna lub wi\u0119cej zmiennych predykcyjnych. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": szereg zmiennych w ",(0,i.kt)("inlineCode",{parentName:"li"},"danych"),", kt\xf3re s\u0105 ",(0,i.kt)("inlineCode",{parentName:"li"},"ilo\u015bciowe"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy pomin\u0105\u0107 brakuj\u0105ce warto\u015bci. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne z przewidywaniami i pozosta\u0142o\u015bciami po dopasowaniu modelu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NaiveBayes \n    data={heartdisease} \n    y=\"Drugs\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}p.isMDXComponent=!0}}]);