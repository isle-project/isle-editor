"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[946],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},714592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),a=["components"],l={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},p=void 0,u={unversionedId:"proportions-survey",id:"proportions-survey",title:"Proportions Survey",description:"Komponent, ktor\xfd umo\u017e\u0148uje skupine \u013eud\xed hlasova\u0165 o v\xe1he a d\xf4le\u017eitosti dan\xfdch mo\u017enost\xed.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/proportions-survey.md",sourceDirName:".",slug:"/proportions-survey",permalink:"/sk/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},sidebar:"docs",previous:{title:"Number Survey",permalink:"/sk/docs/number-survey"},next:{title:"R Help",permalink:"/sk/docs/r/r-help"}},s=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponent, ktor\xfd umo\u017e\u0148uje skupine \u013eud\xed hlasova\u0165 o v\xe1he a d\xf4le\u017eitosti dan\xfdch mo\u017enost\xed."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di si \u0161tudenti \u017eelaj\xfa odpoveda\u0165 na dotazn\xedk viackr\xe1t.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di s\xfa odpovede \u0161tudentov anonymizovan\xe9.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"colors")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": pole farieb pre komponenty kol\xe1\u010dov\xe9ho grafu. Ak nie je definovan\xe1, pou\u017eije sa preddefinovan\xe1 farebn\xe1 \u0161k\xe1la. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di je prieskum deaktivovan\xfd.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": z\xe1hlavie zobrazenia skupiny. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'group results'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"groupHeight")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": proporcie v\xfd\u0161ky vstupu pre zobrazenie skupiny (v px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legends")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": popisky, ktor\xe9 opisuj\xfa mo\u017enosti, ktor\xe9 sa maj\xfa zv\xe1\u017ei\u0165. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"margin")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": pomern\xe9 vstupn\xe9 rozp\xe4tie (v px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'40px'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 po odoslan\xed odpovede \u0161tudentom. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"personalHeight")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": proporcie vstupnej v\xfd\u0161ky pre jednotliv\xe9ho \u017eiaka (v px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": zobrazen\xe1 presnos\u0165 hodn\xf4t podielu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ot\xe1zka, ktor\xe1 sa m\xe1 zobrazi\u0165. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": krok \u0161\xedpok, ktor\xe9 sa zobrazia po nabehnut\xed kurzora nad vstupn\xe9 pole. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.25"),".")),(0,i.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}m.isMDXComponent=!0}}]);