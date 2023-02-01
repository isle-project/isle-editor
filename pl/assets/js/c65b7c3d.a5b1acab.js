"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37400],{603905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=i,d=s["".concat(p,".").concat(c)]||s[c]||m[c]||r;return n?a.createElement(d,l(l({ref:t},k),{},{components:n})):a.createElement(d,l({ref:t},k))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},256100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return c},default:function(){return z},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return f}});var a=n(603905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&k(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&k(e,n,t[n]);return e};const m={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},c=void 0,d={unversionedId:"sketchpad",id:"sketchpad",title:"Sketchpad",description:"Szkicownik do robienia notatek na slajdach wyk\u0142adowych lub pustych stronach.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/pl/docs/sketchpad",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 pa\u017a 2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/pl/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/pl/docs/lesson-submit"}},y={},f=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],N={toc:f};function z(e){var t,n=e,{components:i}=n,k=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},N),k),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Szkicownik do robienia notatek na slajdach wyk\u0142adowych lub pustych stronach."),(0,a.kt)("h2",s({},{id:"opcje"}),"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy edytor powinien zapisa\u0107 bie\u017c\u0105cy tekst w pami\u0119ci lokalnej przegl\u0105darki w danym przedziale czasu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy na ka\u017cdym slajdzie maj\u0105 by\u0107 wy\u015bwietlane przyciski sprz\u0119\u017cenia zwrotnego. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": czas pomi\u0119dzy automatycznymi oszcz\u0119dno\u015bciami. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy przyciski do rysowania i wprowadzania tekstu maj\u0105 by\u0107 ukryte. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy ukrywa\u0107 przyciski do poruszania si\u0119 mi\u0119dzy stronami. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy ukry\u0107 przyciski zapisu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy ukry\u0107 przyciski do przekazywania dzia\u0142a\u0144 u\u017cytkownika. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": rozmiar p\u0119dzla do malowania z. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"color")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": kolor p\u0119dzla i tekst\xf3w. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": szeroko\u015b\u0107 elementu p\u0142\xf3tna (w px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": wysoko\u015b\u0107 elementu p\u0142\xf3tna (w px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy p\u0142\xf3tno ma by\u0107 automatycznie zmieniane na szeroko\u015b\u0107 i wysoko\u015b\u0107 okna przegl\u0105darki. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fill")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": je\u015bli ",(0,a.kt)("inlineCode",{parentName:"li"},"poziome"),", wype\u0142nij ca\u0142\u0105 dost\u0119pn\u0105 przestrze\u0144 poziom\u0105 podczas rysowania pliku PDF; je\u015bli ",(0,a.kt)("inlineCode",{parentName:"li"},"pionowe"),", ca\u0142a przestrze\u0144 pionowa jest u\u017cywana, aby zapobiec przelewaniu si\u0119 osi y. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": czy zrobi\u0107 element tylko do odczytu i zabroni\u0107 rysowania na szkicowniku. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": rodzina czcionek. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": rozmiar czcionki. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nodes")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": komponenty, kt\xf3re maj\u0105 by\u0107 renderowane na okre\u015blonych slajdach; ",(0,a.kt)("inlineCode",{parentName:"li"},"klucze")," powinny odpowiada\u0107 numerom stron, ",(0,a.kt)("inlineCode",{parentName:"li"},"warto\u015bciom")," komponent\xf3w. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"noPages")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": pocz\u0105tkowa liczba stron. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pdf")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0142\u0105cze do pliku PDF dla spieczonych te\u0142 strony. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": poka\u017c samouczek dla szkicownika przy uruchamianiu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy zacz\u0105\u0107 ukrywa\u0107 przyciski, gdy szeroko\u015b\u0107 paska narz\u0119dzi nie jest wystarczaj\u0105ca (w przeciwnym razie zostanie uruchomiona nowa linia). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": czy dzia\u0142ania w\u0142a\u015bciciela powinny by\u0107 przekazywane innym u\u017cytkownikom w czasie rzeczywistym. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wszystkie dzia\u0142ania u\u017cytkownika s\u0105 przekazywane innym osobom. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne za ka\u017cdym razem, gdy rysowany jest nowy element linii. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,a.kt)("h2",s({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Sketchpad canvasWidth={750} />\n")))}z.isMDXComponent=!0}}]);