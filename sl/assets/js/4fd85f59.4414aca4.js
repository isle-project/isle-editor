"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5280],{603905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(202784);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(487462),i=t(202784),r=t(972389),l=t(161419),o=t(386010),s="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,m=e.block,p=e.defaultValue,c=e.values,d=e.groupId,k=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),g=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,i.useState)(h),j=C[0],w=C[1],T=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=g[d];null!=O&&O!==j&&b.some((function(e){return e.value===O}))&&w(O)}var x=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==j&&(D(n),w(a),null!=d&&y(d,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;t=T[i]||T[T.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),u?(0,i.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function m(e){var n=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},861682:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return v}});var a=t(487462),i=t(263366),r=(t(202784),t(603905)),l=t(409877),o=t(358215),s=["components"],u={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},m=void 0,p={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"Komponenta ISLE, ki prika\u017ee vpra\u0161anje, v katerem mora u\u010denec pravilno povezati elemente z dveh seznamov.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/sl/docs/questions/match-list-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/sl/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/sl/docs/questions/multiple-choice-question"}},c={},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Primeri",id:"primeri",level:2}],k={toc:d};function v(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Komponenta ISLE, ki prika\u017ee vpra\u0161anje, v katerem mora u\u010denec pravilno povezati elemente z dveh seznamov."),(0,r.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": vpra\u0161anje, ki se prika\u017ee na vrhu komponente vpra\u0161anja seznama ujemanj.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elements")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"mre\u017eo")," s pravilnimi pari, ki je prikazana na vrhu komponente vpra\u0161anja s prostim besedilom. Vsak element ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," mora biti ",(0,r.kt)("inlineCode",{parentName:"li"},"objekt")," z lastnostmi ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"b"),"; \u010de \u017eelite dodati odgovore, ki odvra\u010dajo pozornost, dodajte elemente samo z lastnostmi ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," ali ",(0,r.kt)("inlineCode",{parentName:"li"},"b"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": umestitev namigov (",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right")," ali ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": napotki, kako odgovoriti na vpra\u0161anje.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ozna\u010duje, ali naj bo re\u0161itev dostopna, ko u\u010denci oddajo svoje odgovore.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali se prika\u017eejo gumbi za povratne informacije.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali naj ima element integriran klepet.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": \u010de je nastavljeno, se za plo\u0161\u010dice uporabijo prilo\u017eene barve. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": dolo\u010da, ali naj se preme\u0161ajo ",(0,r.kt)("inlineCode",{parentName:"li"},"levi"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"desni")," ali ",(0,r.kt)("inlineCode",{parentName:"li"},"oboji")," stolpci, katerih elemente je treba uskladiti; \u010de navedete ",(0,r.kt)("inlineCode",{parentName:"li"},"none")," ali katero koli drugo vrednost, se elementi na obeh straneh ne preme\u0161ajo (lahko je uporabno v primeru, ko ni re\u0161itve).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali onemogo\u010diti obvestila o predlo\u017eitvi.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": obvestilo, ki se prika\u017ee, ko u\u010denec prvi\u010d odda svoj odgovor.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": obvestilo, ki se prika\u017ee za vse predlo\u017eitve po prvi.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": \u010das, do katerega lahko u\u010denci oddajo odgovore.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": najve\u010dje \u0161tevilo to\u010dk, ki se dodelijo pri razvr\u0161\u010danju. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": ime razreda. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slogi CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": povratni klic, ki se spro\u017ei, ko u\u010denci oddajo odgovor.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"primeri"},"Primeri"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,r.kt)(o.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,r.kt)(o.Z,{value:"withFeedback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,r.kt)(o.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,r.kt)(o.Z,{value:"grading",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}v.isMDXComponent=!0}}]);