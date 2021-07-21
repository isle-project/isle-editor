(self.webpackChunk=self.webpackChunk||[]).push([[6796],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=i,c=k["".concat(u,".").concat(d)]||k[d]||m[d]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},286423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var a=n(722122),i=n(419756),r=(n(202784),n(603905)),l=["components"],o={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},u=void 0,p={unversionedId:"tex",id:"tex",isDocsHomePage:!1,title:"LaTeX Equations",description:"TeX on ISLE-elementti, jota voidaan k\xe4ytt\xe4\xe4 LaTeX-yht\xe4l\xf6iden n\xe4ytt\xe4miseen.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/fi/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626034980,formattedLastUpdatedAt:"11.7.2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/fi/docs/link"},next:{title:"blockquote",permalink:"/fi/docs/html/blockquote"}},s=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[]},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[]}],m={toc:s};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TeX")," on ISLE-elementti, jota voidaan k\xe4ytt\xe4\xe4 LaTeX-yht\xe4l\xf6iden n\xe4ytt\xe4miseen."),(0,r.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"raw")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": Render\xf6it\xe4v\xe4 kirjaimellinen LaTeX-merkkijono. Hyv\xe4ksyy my\xf6s ",(0,r.kt)("inlineCode",{parentName:"li"},"numbers"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", joka osoittaa, n\xe4ytet\xe4\xe4nk\xf6 yht\xe4l\xf6 riviss\xe4 vai n\xe4ytt\xf6tilassa.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numbered")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, n\xe4ytet\xe4\xe4nk\xf6 yht\xe4l\xf6n numero n\xe4ytt\xf6tilan yht\xe4l\xf6ille.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," CSS-avain-arvopareilla, joita sovelletaan yht\xe4l\xf6n s\xe4ili\xf6\xf6n.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tag")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Oikealla puolella n\xe4kyv\xe4t n\xe4ytt\xf6yht\xe4l\xf6iden mukautetut merkit. Oletusarvo on oppitunnin sis\xe4ll\xe4 olevan yht\xe4l\xf6n numero.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elems")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"objekti"),", jossa ",(0,r.kt)("inlineCode",{parentName:"li"},"avaimet")," tarkoittavat LaTeX-merkkej\xe4 ja niiden vastaavat arvot ovat konfigurointi ",(0,r.kt)("inlineCode",{parentName:"li"},"objekteja"),", jotta ne olisivat interaktiivisia. Ty\xf6kaluvihjeen asettaminen n\xe4ytt\xe4\xe4 ty\xf6kaluvihjeen, kun LaTeX-merkkien p\xe4\xe4lle vied\xe4\xe4n hiiren kursori. Muuttujaominaisuuden ",(0,r.kt)("inlineCode",{parentName:"li"},"variable")," asettaminen n\xe4ytt\xe4\xe4 liukus\xe4\xe4timen, jolla voidaan muuttaa vastaavaa tilamuuttujaa; t\xe4ss\xe4 tapauksessa tuetaan lis\xe4ominaisuuksia ",(0,r.kt)("inlineCode",{parentName:"li"},"legend"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," ja ",(0,r.kt)("inlineCode",{parentName:"li"},"step"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': ponnahdusikkunan sijainti m\xe4\xe4ritetyille "elementeille" (joko ',(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom")," tai ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),", kun ponnahdusikkuna kytket\xe4\xe4n p\xe4\xe4lle tai pois p\xe4\xe4lt\xe4; saa ainoana argumenttinaan n\xe4yt\xf6n tilan boolean-arvona.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),", joka k\xe4ynnistyy aina kun k\xe4ytt\xe4j\xe4 klikkaa yht\xe4l\xf6\xe4.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}k.isMDXComponent=!0}}]);