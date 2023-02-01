"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45893],{603905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return y}});var t=r(202784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),s=a,y=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return r?t.createElement(y,o(o({ref:n},p),{},{components:r})):t.createElement(y,o({ref:n},p))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},376667:function(e,n,r){r.r(n),r.d(n,{assets:function(){return f},contentTitle:function(){return s},default:function(){return w},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return k}});var t=r(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,d=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&p(e,r,n[r]);if(l)for(var r of l(n))u.call(n,r)&&p(e,r,n[r]);return e};const m={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},s=void 0,y={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",title:"Word Venn Diagram",description:"Schemat venn wizualizuj\u0105cy wsp\xf3\u0142wyst\u0119powanie s\u0142\xf3w w dokumentach dostarczonej matrycy termin-dokument.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",sourceDirName:"learn",slug:"/learn/word-venn-diagram",permalink:"/pl/docs/learn/word-venn-diagram",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626842065,formattedLastUpdatedAt:"21 lip 2021",frontMatter:{id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/pl/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/pl/docs/learn/distribution-beta"}},f={},k=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],b={toc:k};function w(e){var n,r=e,{components:a}=r,p=((e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&u.call(e,t)&&(r[t]=e[t]);return r})(r,["components"]);return(0,t.kt)("wrapper",(n=d(d({},b),p),i(n,o({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"Schemat venn wizualizuj\u0105cy wsp\xf3\u0142wyst\u0119powanie s\u0142\xf3w w dokumentach dostarczonej matrycy termin-dokument."),(0,t.kt)("h2",d({},{id:"opcje"}),"Opcje"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"height")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": wysoko\u015b\u0107 wykresu Venna w pikselach. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"350"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"nTexts")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number (required)"),": liczba \u017ar\xf3de\u0142, z kt\xf3rych zebrano tekst. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"onClick")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"function"),': Oddzwo\u0144, aby dowiedzie\u0107 si\u0119, co nale\u017cy zrobi\u0107 po klikni\u0119ciu przycisku "Rysuj diagram Wenn". Default: ',(0,t.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"tdm")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"array (required)"),": ",(0,t.kt)("inlineCode",{parentName:"li"},"array"),", kt\xf3ry ma reprezentowa\u0107 ",(0,t.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Document-term_matrix"}),"matryc\u0119 dokument\xf3w terminowych"),". Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"vocabulary")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"array (required)"),": ",(0,t.kt)("inlineCode",{parentName:"li"},"array")," w kolejno\u015bci tablicy ",(0,t.kt)("inlineCode",{parentName:"li"},"tdm")," min\u0105\u0142 tak, \u017ce indeksy mog\u0105 by\u0107 dopasowane do ich s\u0142\xf3w. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"width")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": szeroko\u015b\u0107 wykresu Venna w pikselach. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,t.kt)("h2",d({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<LearnWordVennDiagram vocabulary={[ \'hello\', \'my\', \'friend\' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />\n')))}w.isMDXComponent=!0}}]);