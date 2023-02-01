"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36686],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,c=m["".concat(s,".").concat(u)]||m[u]||k[u]||l;return n?r.createElement(c,i(i({ref:t},d),{},{components:n})):r.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},481064:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return N}});var r=n(603905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&d(e,n,t[n]);return e};const k={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},u=void 0,c={unversionedId:"sketchpad",id:"sketchpad",title:"Sketchpad",description:"En skitseblok til at tage noter p\xe5 lysbilleder eller tomme sider.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/da/docs/sketchpad",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8. okt. 2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/da/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/da/docs/lesson-submit"}},f={},N=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],g={toc:N};function b(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),d),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"En skitseblok til at tage noter p\xe5 lysbilleder eller tomme sider."),(0,r.kt)("h2",m({},{id:"indstillinger"}),"Indstillinger"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om editoren skal gemme den aktuelle tekst til browserens lokale lager med et givet tidsinterval. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises feedback-knapper p\xe5 hvert dias. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": tid mellem automatiske gemmer. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om tegnings- og tekstindtastningsknapperne skal skjules. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om knapperne til at navigere mellem sider skal skjules. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om knapperne til at gemme skal skjules. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal skjules knapper til overf\xf8rsel af brugerhandlinger. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": st\xf8rrelsen af den pensel, der skal males med. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": farve p\xe5 pensel og tekster. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": bredden af l\xe6rredselementet (i px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": h\xf8jden af l\xe6rredselementet (i px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om l\xe6rredet automatisk skal tilpasses til browservinduets bredde og h\xf8jde. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fill")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": hvis ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal"),", fyldes al tilg\xe6ngelig horisontal plads op, n\xe5r der tegnes en PDF; hvis ",(0,r.kt)("inlineCode",{parentName:"li"},"vertical"),", bruges al vertikal plads for at forhindre overl\xf8b af y-aksen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": om komponenten skal g\xf8res skrivebeskyttet og forbyde tegning p\xe5 skitseblok. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": skrifttypefamilie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": skriftst\xf8rrelse. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nodes")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": komponenter, der skal gengives oven p\xe5 de angivne dias; ",(0,r.kt)("inlineCode",{parentName:"li"},"n\xf8gler")," skal svare til sidetal, ",(0,r.kt)("inlineCode",{parentName:"li"},"v\xe6rdier")," til komponenterne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"noPages")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": oprindeligt antal sider. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pdf")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": link til PDF-fil til indbagte sidebaggrunde. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": vise vejledning til skitseblok ved opstart. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om knapperne skal begynde at blive skjult, n\xe5r v\xe6rkt\xf8jslinjen ikke er tilstr\xe6kkelig bred (ellers startes en ny linje). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": om ejerens handlinger skal overf\xf8res til andre brugere i realtid. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om alle brugerens handlinger overf\xf8res til alle andre. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, der p\xe5kaldes, n\xe5r der tegnes et nyt linjeelement. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",m({},{id:"eksempler"}),"Eksempler"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Sketchpad canvasWidth={750} />\n")))}b.isMDXComponent=!0}}]);