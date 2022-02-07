"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2283],{603905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),s=a,k=c["".concat(d,".").concat(s)]||c[s]||p[s]||i;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},294548:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=["components"],o={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},d=void 0,u={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",title:"Word Venn Diagram",description:"A szavak egy\xfcttes el\u0151fordul\xe1s\xe1t megjelen\xedt\u0151 Venn-diagram egy megadott kifejez\xe9s-dokumentum m\xe1trix dokumentumaiban.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",sourceDirName:"learn",slug:"/learn/word-venn-diagram",permalink:"/hu/docs/learn/word-venn-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626842065,formattedLastUpdatedAt:"2021. 07. 21.",frontMatter:{id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/hu/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/hu/docs/learn/distribution-beta"}},m=[{value:"Opci\xf3k",id:"opci\xf3k",children:[],level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[],level:2}],p={toc:m};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A szavak egy\xfcttes el\u0151fordul\xe1s\xe1t megjelen\xedt\u0151 Venn-diagram egy megadott kifejez\xe9s-dokumentum m\xe1trix dokumentumaiban."),(0,i.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": a Venn-diagram magass\xe1ga pixelben. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"350"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTexts")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number (required)"),": azon forr\xe1sok sz\xe1ma, amelyekb\u0151l a sz\xf6veget gy\u0171jt\xf6tt\xe9k. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': visszah\xedv\xe1s arra, hogy mit kell tenni, ha a "Draw Venn Diagram" gombra kattintunk.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tdm")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),", amely egy ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document-term_matrix"},"term document matrix"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"vocabulary")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," az \xe1tadott ",(0,i.kt)("inlineCode",{parentName:"li"},"tdm")," t\xf6mb sorrendj\xe9ben, hogy az indexek a szavakhoz illeszkedjenek.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": a Venn-diagram sz\xe9less\xe9ge pixelben. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,i.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnWordVennDiagram vocabulary={[ \'hello\', \'my\', \'friend\' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />\n')))}c.isMDXComponent=!0}}]);