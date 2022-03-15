"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2772],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},564164:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),i=["components"],l={id:"proptest",title:"One-Sample Proportion Test",sidebar_label:"One-Sample Proportion Test"},p=void 0,s={unversionedId:"tests/proptest",id:"tests/proptest",title:"One-Sample Proportion Test",description:"Test proporcji jednej pr\xf3bki.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/tests/proptest.md",sourceDirName:"tests",slug:"/tests/proptest",permalink:"/pl/docs/tests/proptest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/proptest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.06.2021",frontMatter:{id:"proptest",title:"One-Sample Proportion Test",sidebar_label:"One-Sample Proportion Test"},sidebar:"docs",previous:{title:"Two-Sample Mean Test",permalink:"/pl/docs/tests/meantest2"},next:{title:"Two-Sample Proportion Test",permalink:"/pl/docs/tests/proptest2"}},c={},u=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Test proporcji jednej pr\xf3bki."),(0,o.kt)("h2",{id:"opcje"},"Opcje"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": nazwa zmiennej. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"success")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"any (required)"),": kategoria sukcesu ",(0,o.kt)("inlineCode",{parentName:"li"},"zmiennej"),". Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"alpha")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": poziom istotno\u015bci. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"direction")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": kierunek testu (albo ",(0,o.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"greater"),", albo ",(0,o.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"p0")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": proporcja pod hipotez\u0105 zerow\u0105. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.5"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy hipoteza zerowa ma by\u0107 wy\u015bwietlana, je\u015bli zostanie odrzucona na okre\u015blonym poziomie istotno\u015bci. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,o.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PropTest\n    data={heartdisease} \n    variable="Complications"\n    success={1}\n/>\n')))}m.isMDXComponent=!0}}]);