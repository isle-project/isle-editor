"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2485],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(202784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,k=p["".concat(o,".").concat(d)]||p[d]||c[d]||l;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(487462),i=a(202784),l=a(972389),r=a(275773),s=a(386010),o="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,m=e.block,c=e.defaultValue,p=e.values,d=e.groupId,k=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,r.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,r.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,i.useState)(h),w=C[0],j=C[1],T=[],D=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=N[d];null!=O&&O!==w&&v.some((function(e){return e.value===O}))&&j(O)}var x=function(e){var t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==w&&(D(t),j(n),null!=d&&y(d,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;a=T[i]||T[T.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),u?(0,i.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},85701:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var n=a(487462),i=a(263366),l=(a(202784),a(603905)),r=a(409877),s=a(358215),o=["components"],u={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},m=void 0,c={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"ISLE komponent, mis esitab k\xfcsimuse, milles \xf5ppija peab kahe loendi elemente omavahel \xf5igesti sobitama.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/et/docs/questions/match-list-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.6.2021",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/et/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/et/docs/questions/multiple-choice-question"}},p=[{value:"Valikud",id:"valikud",children:[],level:2},{value:"N\xe4ited",id:"n\xe4ited",children:[],level:2}],d={toc:p};function k(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ISLE komponent, mis esitab k\xfcsimuse, milles \xf5ppija peab kahe loendi elemente omavahel \xf5igesti sobitama."),(0,l.kt)("h2",{id:"valikud"},"Valikud"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": k\xfcsimus, mis kuvatakse m\xe4ngu nimekirja k\xfcsimuste komponendi \xfclaosas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"elements")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),': vabatekstilise k\xfcsimuse komponendi \xfclaosas kuvatavad \xf5iged paarid. Iga "massiivi" element peab olema "objekt", millel on "a" ja "b" omadused; segavate vastuste lisamiseks tuleb esitada ainult "a" v\xf5i "b" omadustega elemendid.. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": vihjete paigutus (kas ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right")," v\xf5i ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": vihjeid, mis annavad suuniseid k\xfcsimusele vastamiseks. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": n\xe4itab, kas lahendus peaks olema k\xe4ttesaadav p\xe4rast seda, kui \xf5ppijad on oma vastused esitanud.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas tagasiside nuppe kuvada. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": kui see on m\xe4\xe4ratud, kasutatakse plaatide jaoks kaasasolevaid v\xe4rve.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),': m\xe4\xe4rab, kas segada "vasakpoolseid", "parempoolseid" v\xf5i "m\xf5lemat" veergu, mille elemente tuleb sobitada; kui anda "ei ole" v\xf5i m\xf5ni muu v\xe4\xe4rtus, siis ei segata elemente kummalgi poolel (v\xf5ib olla kasulik juhul, kui lahendust ei ole olemas). Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas keelata esitamisteated. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": teade, mis kuvatakse, kui \xf5ppija esitab oma vastuse esimest korda.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": teatis, mis kuvatakse k\xf5igi p\xe4rast esimest esitatud taotluste puhul. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": aega, kuni \xf5pilastel peaks olema lubatud vastuseid esitada. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": hindamisel antavate punktide maksimaalne arv. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": klassi nimi. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse \xfcles, kui \xf5pilased esitavad vastuse. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,l.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,l.kt)(s.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,l.kt)(s.Z,{value:"withFeedback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,l.kt)(s.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,l.kt)(s.Z,{value:"grading",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}k.isMDXComponent=!0}}]);