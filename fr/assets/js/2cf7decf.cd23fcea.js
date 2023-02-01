"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97833],{603905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(202784);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),d=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(u.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),p=a,f=s["".concat(u,".").concat(p)]||s[p]||m[p]||i;return n?t.createElement(f,o(o({ref:r},c),{},{components:n})):t.createElement(f,o({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},513673:function(e,r,n){n.r(r),n.d(r,{assets:function(){return g},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var t=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,s=(e,r)=>{for(var n in r||(r={}))u.call(r,n)&&c(e,n,r[n]);if(l)for(var n of l(r))d.call(r,n)&&c(e,n,r[n]);return e};const m={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},p=void 0,f={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",title:"Word Venn Diagram",description:"Un diagramme de Venn visualisant la cooccurrence des mots dans les documents d'une matrice terme-document fournie.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",sourceDirName:"learn",slug:"/learn/word-venn-diagram",permalink:"/fr/docs/learn/word-venn-diagram",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626842065,formattedLastUpdatedAt:"21 juil. 2021",frontMatter:{id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/fr/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/fr/docs/learn/distribution-beta"}},g={},b=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],v={toc:b};function y(e){var r,n=e,{components:a}=n,c=((e,r)=>{var n={};for(var t in e)u.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))r.indexOf(t)<0&&d.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=s(s({},v),c),i(r,o({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"Un diagramme de Venn visualisant la cooccurrence des mots dans les documents d'une matrice terme-document fournie."),(0,t.kt)("h2",s({},{id:"options"}),"Options"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"height")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": hauteur du diagramme de Venn en pixels. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"350"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"nTexts")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number (required)"),": nombre de sources \xe0 partir desquelles le texte a \xe9t\xe9 recueilli. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"onClick")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"function"),': rappel de ce qui doit \xeatre fait lorsque l\'on clique sur "Dessiner le diagramme de Venn". Default: ',(0,t.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"tdm")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"array (required)"),": qui doit repr\xe9senter une ","[matrice de documents]"," (",(0,t.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Document-term_matrix"}),"https://en.wikipedia.org/wiki/Document-term_matrix"),"). Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"vocabulary")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"array (required)"),': tableau" dans l\'ordre du tableau "tdm" pass\xe9 afin que les indices puissent correspondre \xe0 leurs mots. Default: ',(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"width")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": largeur du diagramme de Venn en pixels. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,t.kt)("h2",s({},{id:"exemples"}),"Exemples"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<LearnWordVennDiagram vocabulary={[ \'hello\', \'my\', \'friend\' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />\n')))}y.isMDXComponent=!0}}]);