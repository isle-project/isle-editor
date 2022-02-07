"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5833],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},272536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),a=["components"],l={id:"multiple-choice-survey",title:"Multiple Choice Survey",sidebar_label:"Multiple Choice Survey"},u=void 0,p={unversionedId:"multiple-choice-survey",id:"multiple-choice-survey",title:"Multiple Choice Survey",description:"Komponent prieskumu, v ktorom m\xf4\u017ee in\u0161truktor zhroma\u017e\u010fova\u0165 \xfadaje z prieskumu s viacer\xfdmi mo\u017enos\u0165ami odpovede od \u0161tudentov v re\xe1lnom \u010dase.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/multiple-choice-survey.md",sourceDirName:".",slug:"/multiple-choice-survey",permalink:"/sk/docs/multiple-choice-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multiple-choice-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"multiple-choice-survey",title:"Multiple Choice Survey",sidebar_label:"Multiple Choice Survey"},sidebar:"docs",previous:{title:"Free Text Survey",permalink:"/sk/docs/free-text-survey"},next:{title:"Number Survey",permalink:"/sk/docs/number-survey"}},s=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponent prieskumu, v ktorom m\xf4\u017ee in\u0161truktor zhroma\u017e\u010fova\u0165 \xfadaje z prieskumu s viacer\xfdmi mo\u017enos\u0165ami odpovede od \u0161tudentov v re\xe1lnom \u010dase."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": re\u0165azec ozna\u010duj\xfaci ot\xe1zku, ktor\xfa treba polo\u017ei\u0165 \u0161tudentom. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di si \u0161tudenti \u017eelaj\xfa odpoveda\u0165 na dotazn\xedk viackr\xe1t.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di s\xfa odpovede \u0161tudentov anonymizovan\xe9.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"answers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": pole s mo\u017enos\u0165ami odpoved\xed pre \u0161tudentov. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"multipleAnswers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": uv\xe1dza, \u010di \u0161tudenti m\xf4\u017eu vybra\u0165 viac ako jednu odpove\u010f. V\u0161imnite si, \u017ee sa to l\xed\u0161i od allowMultipleAnswers v tom, \u017ee allow umo\u017e\u0148uje \u0161tudentom odosla\u0165 ot\xe1zku viackr\xe1t.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": funkcia, ktor\xe1 sa zavol\xe1 po odoslan\xed odpovede. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceSurvey\n    anonymous\n    question=\"Are you left- or right-handed\"\n    answers={[ 'Left-handed', 'Right-handed' ]}\n/>\n")))}m.isMDXComponent=!0}}]);