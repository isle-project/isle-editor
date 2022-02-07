"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5530],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},680133:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=t(487462),i=t(263366),a=(t(202784),t(603905)),o=["components"],l={id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},s=void 0,u={unversionedId:"models/naive-bayes",id:"models/naive-bayes",title:"Naive Bayes",description:"Naive Bayes unter der Annahme, dass die Pr\xe4diktoren angesichts der Klassenzugeh\xf6rigkeit einer Normalverteilung folgen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/models/naive-bayes.md",sourceDirName:"models",slug:"/models/naive-bayes",permalink:"/de/docs/models/naive-bayes",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/naive-bayes.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1.3.2021",frontMatter:{id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},sidebar:"docs",previous:{title:"Multiple Linear Regression",permalink:"/de/docs/models/multiple-linear-regression"},next:{title:"Principal Component Analysis",permalink:"/de/docs/models/principal-component-analysis"}},d=[{value:"Optionen",id:"optionen",children:[],level:2},{value:"Beispiele",id:"beispiele",children:[],level:2}],p={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Naive Bayes unter der Annahme, dass die Pr\xe4diktoren angesichts der Klassenzugeh\xf6rigkeit einer Normalverteilung folgen."),(0,a.kt)("h2",{id:"optionen"},"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": Ergebnisvariable. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": eine oder mehrere Pr\xe4diktorvariablen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": Array von Variablen in ",(0,a.kt)("inlineCode",{parentName:"li"},"Daten"),", die ",(0,a.kt)("inlineCode",{parentName:"li"},"quantitativ")," sind. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob fehlende Werte ausgelassen werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der mit Vorhersagen und Residuen nach der Modellanpassung aufgerufen wird. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NaiveBayes \n    data={heartdisease} \n    y=\"Drugs\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}c.isMDXComponent=!0}}]);