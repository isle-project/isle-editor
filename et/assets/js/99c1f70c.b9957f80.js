(self.webpackChunk=self.webpackChunk||[]).push([[190],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return k}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),k=a,c=p["".concat(u,".").concat(k)]||p[k]||m[k]||r;return n?i.createElement(c,l(l({ref:t},d),{},{components:n})):i.createElement(c,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},999863:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=n(722122),a=n(419756),r=(n(202784),n(603905)),l=["components"],o={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},u=void 0,s={unversionedId:"tex",id:"tex",isDocsHomePage:!1,title:"LaTeX Equations",description:"TeX on ISLE element, mida saab kasutada LaTeXi v\xf5rrandite kuvamiseks.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/et/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"7.7.2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/et/docs/link"},next:{title:"blockquote",permalink:"/et/docs/html/blockquote"}},d=[{value:"Valikud",id:"valikud",children:[]},{value:"N\xe4ited",id:"n\xe4ited",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TeX")," on ISLE element, mida saab kasutada LaTeXi v\xf5rrandite kuvamiseks."),(0,r.kt)("h2",{id:"valikud"},"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"raw")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),': Kirjalik LaTeXi "string", mida renderdada. Aktsepteerib ka ',(0,r.kt)("inlineCode",{parentName:"li"},"numbers"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", mis n\xe4itab, kas v\xf5rrand kuvatakse rida- v\xf5i kuvamisre\u017eiimis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numbered")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas kuvamisre\u017eiimi v\xf5rrandite puhul kuvatakse v\xf5rrandi number. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"objekti")," CSS v\xf5tmev\xe4\xe4rtuspaaridega, mida rakendatakse v\xf5rrandi konteinerile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tag")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Kohandatud t\xe4hem\xe4rgid, mis kuvatakse \xf5igel poolel olevate v\xf5rrandite kuvamiseks. Vaikimisi on tunnis sisalduva v\xf5rrandi number.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elems")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"objekti"),", kus ",(0,r.kt)("inlineCode",{parentName:"li"},"v\xf5tmed")," t\xe4histavad LaTeXi t\xe4hem\xe4rke ja nende vastavad v\xe4\xe4rtused on konfiguratsiooni ",(0,r.kt)("inlineCode",{parentName:"li"},"objektid"),", et muuta need interaktiivseks. Valiku ",(0,r.kt)("inlineCode",{parentName:"li"},"tooltip")," seadistamine n\xe4itab LaTeXi t\xe4hem\xe4rkide kohal h\xf5ljudes t\xf6\xf6riistavihikut. Omaduse ",(0,r.kt)("inlineCode",{parentName:"li"},"variable")," seadistamine kuvab sisendliuguri vastava olekumuutuja muutmiseks; sel juhul on toetatud t\xe4iendavad omadused ",(0,r.kt)("inlineCode",{parentName:"li"},"legend"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," ja ",(0,r.kt)("inlineCode",{parentName:"li"},"step"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': popoveri positsioon m\xe4\xe4ratud "elementide" jaoks (kas ',(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom")," v\xf5i ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": tagasil\xf6\xf6gifunktsioon ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),", kui kontrollpopover on sisse v\xf5i v\xe4lja l\xfclitatud; saab ainsa argumendina booleanina kuvamise staatuse.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": tagasil\xf6\xf6gifunktsioon, mis k\xe4ivitub iga kord, kui kasutaja klikib v\xf5rrandile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}p.isMDXComponent=!0}}]);