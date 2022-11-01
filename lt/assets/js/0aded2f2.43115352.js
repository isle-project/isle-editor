"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17684],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(202784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(202784),i=a(386010),r="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&m(e,a,t[a]);return e})({role:"tabpanel",className:(0,i.Z)(r,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),i=a(386010),r=a(152670),l=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",m="tabItem_LNqP",p=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&y(e,a,t[a]);if(k)for(var a of k(t))f.call(t,a)&&y(e,a,t[a]);return e};function g(e){var t,a;const{lazy:r,block:p,defaultValue:k,values:b,groupId:f,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,l.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===k?k:null!=(a=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==C&&!h.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:O}=(0,o.U)(),[w,P]=(0,n.useState)(C),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,a=D.indexOf(t),n=h[a].value;n!==w&&(T(t),P(n),null!=f&&O(f,String(n)))},x=e=>{var t,a;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;n=null!=(t=D[a])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=null!=(a=D[t])?a:D[D.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=v({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>D.push(e),onKeyDown:x,onClick:E},a),l={className:(0,i.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":w===e})},c(r,d(l))),null!=t?t:e);var r,l}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,r.Z)();return n.createElement(g,v({key:String(t)},e))}},298959:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return v}});var n=a(603905),i=a(751361),r=a(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&c(e,a,t[a]);return e};const k={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},b=void 0,f={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"ISLE komponentas, kuris atvaizduoja klausim\u0105, kuriame besimokantysis turi teisingai sugretinti dviej\u0173 s\u0105ra\u0161\u0173 elementus.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/lt/docs/questions/match-list-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"2022-04-20",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/lt/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/lt/docs/questions/multiple-choice-question"}},y={},v=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],g={toc:v};function h(e){var t,a=e,{components:l}=a,c=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),c),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"ISLE komponentas, kuris atvaizduoja klausim\u0105, kuriame besimokantysis turi teisingai sugretinti dviej\u0173 s\u0105ra\u0161\u0173 elementus."),(0,n.kt)("h2",d({},{id:"parinktys"}),"Parinktys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"question")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": klausimas, kuris bus rodomas atitikmen\u0173 s\u0105ra\u0161o klausimo komponento vir\u0161uje.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"elements")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),': "masyvas", kuriame yra teisingos poros, rodomas laisvo teksto klausimo komponento vir\u0161uje. Kiekvienas ',(0,n.kt)("inlineCode",{parentName:"li"},"d\u0117\u017eut\u0117s")," elementas turi b\u016bti ",(0,n.kt)("inlineCode",{parentName:"li"},"objektas")," su ",(0,n.kt)("inlineCode",{parentName:"li"},"a")," ir ",(0,n.kt)("inlineCode",{parentName:"li"},"b")," savyb\u0117mis; nor\u0117dami prid\u0117ti atsakymus atitraukian\u010dius atsakymus, pateikite elementus tik su ",(0,n.kt)("inlineCode",{parentName:"li"},"a")," arba ",(0,n.kt)("inlineCode",{parentName:"li"},"b")," savyb\u0117mis.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": u\u017euomin\u0173 vieta (",(0,n.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"right")," arba ",(0,n.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hints")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": u\u017euominos, kuriose pateikiamos rekomendacijos, kaip atsakyti \u012f klausim\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar sprendimas tur\u0117t\u0173 b\u016bti prieinamas po to, kai besimokantieji pateikia savo atsakymus.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"feedback")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti gr\u012f\u017etamojo ry\u0161io mygtukus.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"chat")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar elementas turi tur\u0117ti integruot\u0105 pokalbi\u0173. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": jei nustatyta, plytel\u0117ms naudojamos pateiktos spalvos. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nurodo, ar reikia i\u0161mai\u0161yti ",(0,n.kt)("inlineCode",{parentName:"li"},"kairiuosius"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"de\u0161iniuosius")," arba ",(0,n.kt)("inlineCode",{parentName:"li"},"abus")," stulpelius, kuri\u0173 elementai turi b\u016bti suderinti; jei norite, kad neb\u016bt\u0173 i\u0161mai\u0161yti abiej\u0173 pusi\u0173 elementai, nurodykite ",(0,n.kt)("inlineCode",{parentName:"li"},"none")," arba bet koki\u0105 kit\u0105 reik\u0161m\u0119 (gali b\u016bti naudinga, kai n\u0117ra jokio sprendimo).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar i\u0161jungti prane\u0161imus apie pateikim\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": prane\u0161imas rodomas, kai besimokantysis pirm\u0105 kart\u0105 pateikia atsakym\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": prane\u0161imas rodomas apie visas po pirmojo pateikimo pateiktas parai\u0161kas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"until")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),": laikas, per kur\u012f mokiniams tur\u0117t\u0173 b\u016bti leista pateikti atsakymus.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"points")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": maksimalus bal\u0173 skai\u010dius, suteikiamas vertinant. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": klas\u0117s pavadinimas. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atgalinis skambutis, i\u0161kvie\u010diamas, kai mokiniai pakei\u010dia atsakym\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamasis ry\u0161ys, i\u0161kvie\u010diamas, kai mokiniai pateikia atsakym\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,n.kt)("h2",d({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,n.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,n.kt)(r.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,n.kt)(r.Z,{value:"withFeedback",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,n.kt)(r.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,n.kt)(r.Z,{value:"grading",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}h.isMDXComponent=!0}}]);