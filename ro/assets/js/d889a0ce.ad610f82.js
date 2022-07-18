"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92530],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},221553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e};const m={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},d=void 0,f={unversionedId:"number-survey",id:"number-survey",title:"Number Survey",description:"O component\u0103 de sondaj \xeen care instructorul poate colecta date numerice de la studen\u021bi \xeen timp real.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/number-survey.md",sourceDirName:".",slug:"/number-survey",permalink:"/ro/docs/number-survey",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626808020,formattedLastUpdatedAt:"20 iul. 2021",frontMatter:{id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/ro/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/ro/docs/proportions-survey"}},b={},y=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],v={toc:y};function k(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"O component\u0103 de sondaj \xeen care instructorul poate colecta date numerice de la studen\u021bi \xeen timp real."),(0,r.kt)("h2",p({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \xeentrebarea care urmeaz\u0103 s\u0103 fie afi\u0219at\u0103. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 acela\u0219i utilizator (sau sesiune dac\u0103 este anonim) poate trimite mai multe r\u0103spunsuri). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),': Permite elevilor s\u0103 transmit\u0103 datele \xeen mod anonim. Re\u021bine\u021bi c\u0103, dac\u0103 aceast\u0103 op\u021biune este setat\u0103 la "true", atunci instructorii nu vor putea vedea ID-ul studentului care trimite datele.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": O valoare ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," sau ",(0,r.kt)("inlineCode",{parentName:"li"},"numeric")," care indic\u0103 pasul s\u0103ge\u021bilor care se v\u0103d la trecerea cursorului deasupra c\u0103su\u021bei de intrare. Dac\u0103 este ",(0,r.kt)("inlineCode",{parentName:"li"},"'any'"),", pasul va fi setat la ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'any'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia callback invocat\u0103 odat\u0103 ce studen\u021bii trimit un r\u0103spuns. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",p({},{id:"exemple"}),"Exemple"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<NumberSurvey\n    allowMultipleAnswers={true}\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}k.isMDXComponent=!0}}]);