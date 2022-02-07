"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6686],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,c=k["".concat(s,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},707593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=["components"],o={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},s=void 0,p={unversionedId:"sketchpad",id:"sketchpad",title:"Sketchpad",description:"En skitseblok til at tage noter p\xe5 lysbilleder eller tomme sider.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/da/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/da/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/da/docs/lesson-submit"}},d=[{value:"Indstillinger",id:"indstillinger",children:[],level:2},{value:"Eksempler",id:"eksempler",children:[],level:2}],m={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"En skitseblok til at tage noter p\xe5 lysbilleder eller tomme sider."),(0,l.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om editoren skal gemme den aktuelle tekst til browserens lokale lager med et givet tidsinterval. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises feedback-knapper p\xe5 hvert dias. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": tid mellem automatiske gemmer. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om tegnings- og tekstindtastningsknapperne skal skjules. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om knapperne til at navigere mellem sider skal skjules. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om knapperne til at gemme skal skjules. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal skjules knapper til overf\xf8rsel af brugerhandlinger. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": st\xf8rrelsen af den pensel, der skal males med. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": farve p\xe5 pensel og tekster. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": bredden af l\xe6rredselementet (i px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": h\xf8jden af l\xe6rredselementet (i px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om l\xe6rredet automatisk skal tilpasses til browservinduets bredde og h\xf8jde. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fill")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": hvis ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontal"),", fyldes al tilg\xe6ngelig horisontal plads op, n\xe5r der tegnes en PDF; hvis ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical"),", bruges al vertikal plads for at forhindre overl\xf8b af y-aksen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": om komponenten skal g\xf8res skrivebeskyttet og forbyde tegning p\xe5 skitseblok. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": skrifttypefamilie. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": skriftst\xf8rrelse. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nodes")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": komponenter, der skal gengives oven p\xe5 de angivne dias; ",(0,l.kt)("inlineCode",{parentName:"li"},"n\xf8gler")," skal svare til sidetal, ",(0,l.kt)("inlineCode",{parentName:"li"},"v\xe6rdier")," til komponenterne. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"noPages")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": oprindeligt antal sider. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"pdf")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": link til PDF-fil til indbagte sidebaggrunde. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": vise vejledning til skitseblok ved opstart. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om knapperne skal begynde at blive skjult, n\xe5r v\xe6rkt\xf8jslinjen ikke er tilstr\xe6kkelig bred (ellers startes en ny linje). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": om ejerens handlinger skal overf\xf8res til andre brugere i realtid. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om alle brugerens handlinger overf\xf8res til alle andre. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback, der p\xe5kaldes, n\xe5r der tegnes et nyt linjeelement. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,l.kt)("h2",{id:"eksempler"},"Eksempler"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}k.isMDXComponent=!0}}]);