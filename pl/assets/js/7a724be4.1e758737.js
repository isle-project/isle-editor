"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97028],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},380845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return f}});var r=n(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const d={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},m=void 0,y={unversionedId:"proportions-survey",id:"proportions-survey",title:"Proportions Survey",description:"Komponent, kt\xf3ry pozwala grupie os\xf3b g\u0142osowa\u0107 nad wag\u0105 i znaczeniem danych opcji.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/proportions-survey.md",sourceDirName:".",slug:"/proportions-survey",permalink:"/pl/docs/proportions-survey",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 lut 2021",frontMatter:{id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},sidebar:"docs",previous:{title:"Number Survey",permalink:"/pl/docs/number-survey"},next:{title:"R Help",permalink:"/pl/docs/r/r-help"}},k={},f=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],w={toc:f};function g(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},w),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponent, kt\xf3ry pozwala grupie os\xf3b g\u0142osowa\u0107 nad wag\u0105 i znaczeniem danych opcji."),(0,r.kt)("h2",c({},{id:"opcje"}),"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy chce si\u0119 zezwoli\u0107 uczniom na wielokrotne udzielanie odpowiedzi na ankiet\u0119. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy odpowiedzi uczni\xf3w s\u0105 anonimowe. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"colors")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": Zestawienie kolor\xf3w dla element\xf3w wykresu ko\u0142owego. Je\u015bli nie zostanie zdefiniowana, zostanie u\u017cyta niestandardowa skala kolor\xf3w. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy badanie jest dezaktywowane. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": pozycja wy\u015bwietlania grupowego. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'group results'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": proporcje wysoko\u015b\u0107 wej\u015bcia dla wy\u015bwietlania grupowego (w px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legends")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": legendarne etykiety opisuj\u0105ce opcje, kt\xf3re maj\u0105 by\u0107 wa\u017cone. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"margin")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": proporcja mar\u017cy wej\u015bciowej (w px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'40px'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ania zwrotnego, wywo\u0142ywana po udzieleniu odpowiedzi przez student\xf3w. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"personalHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": proporcje wysoko\u015b\u0107 wej\u015bcia dla poszczeg\xf3lnych uczni\xf3w (w px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": wy\u015bwietlana precyzja warto\u015bci proporcji. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie, kt\xf3re ma zosta\u0107 wy\u015bwietlone. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": krok strza\u0142ek widoczny po najechaniu kursorem nad pole wprowadzania danych. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.25"),".")),(0,r.kt)("h2",c({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}g.isMDXComponent=!0}}]);