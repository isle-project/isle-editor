"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2316],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,c=m["".concat(p,".").concat(d)]||m[d]||k[d]||r;return t?a.createElement(c,o(o({ref:n},s),{},{components:t})):a.createElement(c,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},885933:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return k},default:function(){return d}});var a=t(487462),i=t(263366),r=(t(202784),t(603905)),o=["components"],l={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},p=void 0,u={unversionedId:"tex",id:"tex",title:"LaTeX Equations",description:"TeX je element ISLE, ki se lahko uporablja za prikaz ena\u010db LaTeX.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/sl/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"7. 7. 2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/sl/docs/link"},next:{title:"blockquote",permalink:"/sl/docs/html/blockquote"}},s={},k=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Primeri",id:"primeri",level:2}],m={toc:k};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TeX")," je element ISLE, ki se lahko uporablja za prikaz ena\u010db LaTeX."),(0,r.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"raw")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": Dobesedni niz LaTeX-a, ki ga \u017eelite prikazati. Sprejema tudi ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0161tevilke"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", ki ozna\u010duje, ali naj se ena\u010dba prika\u017ee v vrstici ali v na\u010dinu prikaza. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numbered")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali se pri ena\u010dbah v na\u010dinu prikaza prika\u017ee \u0161tevilka ena\u010dbe.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"objekt")," s pari klju\u010d-vrednost CSS, ki se uporabijo v vsebniku ena\u010dbe. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tag")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Znaki po meri, prikazani za prikaz ena\u010db na desni strani. Privzeta vrednost je \u0161tevilka ena\u010dbe znotraj lekcije.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elems")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"objekt")," s ",(0,r.kt)("inlineCode",{parentName:"li"},"klju\u010di"),", ki ozna\u010dujejo znake LaTeXa, njihove ustrezne vrednosti pa so konfiguracijski ",(0,r.kt)("inlineCode",{parentName:"li"},"objekti"),", da so interaktivni. \u010ce nastavite mo\u017enost ",(0,r.kt)("inlineCode",{parentName:"li"},"tooltip"),", se ob premikanju z mi\u0161ko nad znaki LaTeX-a prika\u017ee namig. Nastavitev lastnosti ",(0,r.kt)("inlineCode",{parentName:"li"},"premenjava")," bo prikazala vhodni drsnik za spreminjanje ustrezne spremenljivke stanja; v tem primeru so podprte dodatne lastnosti ",(0,r.kt)("inlineCode",{parentName:"li"},"legenda"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"koraka"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": polo\u017eaj popoverja za dolo\u010dene ",(0,r.kt)("inlineCode",{parentName:"li"},"eleme")," (bodisi ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom")," ali ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": povratna klicna ",(0,r.kt)("inlineCode",{parentName:"li"},"funkcija")," ob vklopu ali izklopu popoverja; kot edini argument prejme stanje prikaza kot logi\u010dno vrednost.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": povratna klicna ",(0,r.kt)("inlineCode",{parentName:"li"},"funkcija"),", ki se spro\u017ei, ko uporabnik klikne na ena\u010dbo. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"primeri"},"Primeri"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}d.isMDXComponent=!0}}]);