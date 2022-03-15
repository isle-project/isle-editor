"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7039],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},766625:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],p={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},u=void 0,l={unversionedId:"input/proportions-input",id:"input/proportions-input",title:"Proportions Input",description:"Proporcij\u0173 \u012fvesties komponentas. Gali b\u016bti naudojamas kaip ISLE prietais\u0173 skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atribut\u0105 onChange arba susieti reik\u0161m\u0119 su pasauliniu kintamuoju naudodami atribut\u0105 bind.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/input/proportions.md",sourceDirName:"input",slug:"/input/proportions-input",permalink:"/lt/docs/input/proportions-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},sidebar:"docs",previous:{title:"Number Input",permalink:"/lt/docs/input/number-input"},next:{title:"Select Input",permalink:"/lt/docs/input/select-input"}},s={},d=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Proporcij\u0173 \u012fvesties komponentas. Gali b\u016bti naudojamas kaip ISLE prietais\u0173 skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atribut\u0105 ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," arba susieti reik\u0161m\u0119 su pasauliniu kintamuoju naudodami atribut\u0105 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,a.kt)("h2",{id:"parinktys"},"Parinktys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"colors")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": skritulin\u0117s diagramos komponent\u0173 spalv\u0173 masyvas. Jei neapibr\u0117\u017eta, bus naudojama pasirinktin\u0117 spalv\u0173 skal\u0117.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar \u012fvesties laukas yra i\u0161jungtas.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": proporcijos \u012fvesties auk\u0161tis (px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legends")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": grupi\u0173 etiket\u0117s. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamojo ry\u0161io funkcija, kuri bus i\u0161kviesta pasirinkus.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precision")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": rodomas proporcij\u0173 ver\u010di\u0173 tikslumas. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": rodykli\u0173, matom\u0173 u\u017evedus \u017eymekl\u012f vir\u0161 \u012fvesties langelio, \u017eingsnis.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.1"),".")),(0,a.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}m.isMDXComponent=!0}}]);