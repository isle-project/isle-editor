"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9926],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),k=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=k(n),u=i,c=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var k=2;k<r;k++)l[k]=n[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},984333:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return s},default:function(){return d}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=["components"],o={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},p=void 0,k={unversionedId:"sketchpad",id:"sketchpad",title:"Sketchpad",description:"Skic\xe1r na kreslenie pozn\xe1mok na diapozit\xedvy predn\xe1\u0161ok alebo pr\xe1zdne strany.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/sk/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8. 10. 2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/sk/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/sk/docs/lesson-submit"}},s=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],m={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Skic\xe1r na kreslenie pozn\xe1mok na diapozit\xedvy predn\xe1\u0161ok alebo pr\xe1zdne strany."),(0,r.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": riadi, \u010di m\xe1 editor v danom \u010dasovom intervale ulo\u017ei\u0165 aktu\xe1lny text do lok\xe1lneho \xfalo\u017eiska prehliada\u010da.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa maj\xfa na ka\u017edej sn\xedmke zobrazova\u0165 tla\u010didl\xe1 sp\xe4tnej v\xe4zby.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u010das medzi automatick\xfdm ukladan\xedm. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa skry\u0165 tla\u010didl\xe1 na kreslenie a zad\xe1vanie textu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa maj\xfa skry\u0165 tla\u010didl\xe1 na navig\xe1ciu medzi str\xe1nkami.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa skry\u0165 tla\u010didl\xe1 na ulo\u017eenie.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa maj\xfa skry\u0165 tla\u010didl\xe1 na prenos akci\xed pou\u017e\xedvate\u013ea.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": ve\u013ekos\u0165 \u0161tetca na ma\u013eovanie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": farba \u0161tetca a textov. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xedrka prvku pl\xe1tna (v px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": v\xfd\u0161ka prvku pl\xe1tna (v px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa m\xe1 automaticky zmeni\u0165 ve\u013ekos\u0165 pl\xe1tna na \u0161\xedrku a v\xfd\u0161ku okna prehliada\u010da.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fill")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": ak je ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal"),", vypln\xed cel\xfd dostupn\xfd horizont\xe1lny priestor pri kreslen\xed PDF; ak je ",(0,r.kt)("inlineCode",{parentName:"li"},"vertical"),", pou\u017eije sa cel\xfd vertik\xe1lny priestor, aby sa zabr\xe1nilo prete\u010deniu osi y. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u010di m\xe1 by\u0165 komponent len na \u010d\xedtanie a \u010di m\xe1 by\u0165 zak\xe1zan\xe9 kreslenie na skic\xe1r. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": rodina p\xedsma. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": ve\u013ekos\u0165 p\xedsma. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nodes")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": komponenty, ktor\xe9 sa maj\xfa vykresli\u0165 na hornej strane zadan\xfdch sn\xedmok; ",(0,r.kt)("inlineCode",{parentName:"li"},"k\u013e\xfa\u010de")," by mali zodpoveda\u0165 \u010d\xedslam str\xe1n, ",(0,r.kt)("inlineCode",{parentName:"li"},"hodnoty")," komponentom. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"noPages")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": po\u010diato\u010dn\xfd po\u010det str\xe1n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pdf")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": odkaz na s\xfabor PDF pre zapekan\xe9 pozadia str\xe1nok. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": zobrazi\u0165 tutori\xe1l pre skic\xe1r pri spusten\xed. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa maj\xfa za\u010da\u0165 skr\xfdva\u0165 tla\u010didl\xe1, ke\u010f \u0161\xedrka panela n\xe1strojov nie je dostato\u010dn\xe1 (inak sa za\u010dne nov\xfd riadok). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u010di sa maj\xfa akcie vlastn\xedka pren\xe1\u0161a\u0165 ostatn\xfdm pou\u017e\xedvate\u013eom v re\xe1lnom \u010dase.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa v\u0161etky akcie pou\u017e\xedvate\u013ea pren\xe1\u0161aj\xfa v\u0161etk\xfdm ostatn\xfdm.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 v\u017edy, ke\u010f sa nakresl\xed nov\xfd prvok riadku. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}d.isMDXComponent=!0}}]);