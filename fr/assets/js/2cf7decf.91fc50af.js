"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7833],{603905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return p}});var t=r(202784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),d=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(r),p=a,f=s["".concat(u,".").concat(p)]||s[p]||c[p]||i;return r?t.createElement(f,o(o({ref:n},m),{},{components:r})):t.createElement(f,o({ref:n},m))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},314166:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var t=r(487462),a=r(263366),i=(r(202784),r(603905)),o=["components"],l={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},u=void 0,d={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",title:"Word Venn Diagram",description:"Un diagramme de Venn visualisant la cooccurrence des mots dans les documents d'une matrice terme-document fournie.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",sourceDirName:"learn",slug:"/learn/word-venn-diagram",permalink:"/fr/docs/learn/word-venn-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626842065,formattedLastUpdatedAt:"21/07/2021",frontMatter:{id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/fr/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/fr/docs/learn/distribution-beta"}},m=[{value:"Options",id:"options",children:[],level:2},{value:"Exemples",id:"exemples",children:[],level:2}],c={toc:m};function s(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Un diagramme de Venn visualisant la cooccurrence des mots dans les documents d'une matrice terme-document fournie."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": hauteur du diagramme de Venn en pixels. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"350"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTexts")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number (required)"),": nombre de sources \xe0 partir desquelles le texte a \xe9t\xe9 recueilli. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': rappel de ce qui doit \xeatre fait lorsque l\'on clique sur "Dessiner le diagramme de Venn". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tdm")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": qui doit repr\xe9senter une ","[matrice de documents]"," (",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document-term_matrix"},"https://en.wikipedia.org/wiki/Document-term_matrix"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"vocabulary")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),': tableau" dans l\'ordre du tableau "tdm" pass\xe9 afin que les indices puissent correspondre \xe0 leurs mots. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": largeur du diagramme de Venn en pixels. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,i.kt)("h2",{id:"exemples"},"Exemples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnWordVennDiagram vocabulary={[ \'hello\', \'my\', \'friend\' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />\n')))}s.isMDXComponent=!0}}]);