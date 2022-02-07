"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9669],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(487462),i=t(202784),l=t(972389),r=t(275773),o=t(386010),s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,f=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,r.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,r.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,i.useState)(h),w=C[0],T=C[1],O=[],D=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var q=N[d];null!=q&&q!==w&&k.some((function(e){return e.value===q}))&&T(q)}var E=function(e){var n=e.currentTarget,t=O.indexOf(n),a=k[t].value;a!==w&&(D(n),T(a),null!=d&&y(d,a))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;t=O[i]||O[O.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),u?(0,i.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,l.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},920541:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var a=t(487462),i=t(263366),l=(t(202784),t(603905)),r=t(409877),o=t(358215),s=["components"],u={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},c=void 0,m={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"Un componente ISLE che rende una domanda in cui l'allievo deve far corrispondere gli elementi di due liste tra loro nel modo corretto.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/it/docs/questions/match-list-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19/6/2021",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/it/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/it/docs/questions/multiple-choice-question"}},p=[{value:"Opzioni",id:"opzioni",children:[],level:2},{value:"Esempi",id:"esempi",children:[],level:2}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Un componente ISLE che rende una domanda in cui l'allievo deve far corrispondere gli elementi di due liste tra loro nel modo corretto."),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": domanda da visualizzare in cima al componente domanda della lista delle partite. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"elements")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),": un ",(0,l.kt)("inlineCode",{parentName:"li"},"array")," che contiene le coppie corrette visualizzate nella parte superiore del componente di domanda a testo libero. Ogni elemento ",(0,l.kt)("inlineCode",{parentName:"li"},"array")," deve essere un ",(0,l.kt)("inlineCode",{parentName:"li"},"oggetto")," con propriet\xe0 ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," e ",(0,l.kt)("inlineCode",{parentName:"li"},"b"),"; fornire elementi con solo propriet\xe0 ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," o ",(0,l.kt)("inlineCode",{parentName:"li"},"b")," per aggiungere le risposte del distrattore. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": posizionamento dei suggerimenti (",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right")," o ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": indica se la soluzione deve essere accessibile dopo che gli studenti hanno inviato le loro risposte. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i pulsanti di feedback. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se l'elemento deve avere una chat integrata. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": se impostati, i colori forniti vengono utilizzati per le piastrelle. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": specifica se mischiare le colonne ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right")," o ",(0,l.kt)("inlineCode",{parentName:"li"},"entrambi")," i cui elementi devono essere abbinati; fornire ",(0,l.kt)("inlineCode",{parentName:"li"},"none")," o qualsiasi altro valore per non mischiare gli elementi su entrambi i lati (pu\xf2 essere utile nel caso in cui non ci sia una soluzione presente). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se disabilitare le notifiche di presentazione. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": notifica visualizzata quando il discente invia la sua risposta per la prima volta. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": notifica visualizzata per tutti gli invii dopo il primo. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": il tempo necessario per consentire agli studenti di presentare le risposte. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": numero massimo di punti assegnati in classifica. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": richiamata invocata quando gli studenti inviano una risposta. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"esempi"},"Esempi"),(0,l.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,l.kt)(o.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,l.kt)(o.Z,{value:"withFeedback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,l.kt)(o.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,l.kt)(o.Z,{value:"grading",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}f.isMDXComponent=!0}}]);