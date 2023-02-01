"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62074],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},440034:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(202784),r=t(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function m({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&c(e,t,n[t]);return e})({role:"tabpanel",className:(0,r.Z)(i,t)},{hidden:n}),e)}},751361:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(202784),r=t(386010),i=t(152670),l=t(258433),o=t(952326),s=t(638849),u="tabList__CuJ",c="tabItem_LNqP",m=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&h(e,t,n[t]);if(b)for(var t of b(n))g.call(n,t)&&h(e,t,n[t]);return e};function v(e){var n,t;const{lazy:i,block:m,defaultValue:b,values:f,groupId:g,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:v.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),y=(0,l.l)(N,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(t=null!=b?b:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!N.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:O}=(0,o.U)(),[j,E]=(0,a.useState)(w),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=g){const e=C[g];null!=e&&e!==j&&N.some((n=>n.value===e))&&E(e)}const D=e=>{const n=e.currentTarget,t=P.indexOf(n),a=N[t].value;a!==j&&(T(n),E(a),null!=g&&O(g,String(a)))},A=e=>{var n,t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;a=null!=(t=P[n])?t:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},h)},N.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(i=k({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>P.push(e),onKeyDown:A,onClick:D},t),l={className:(0,r.Z)("tabs__item",c,null==t?void 0:t.className,{"tabs__item--active":j===e})},d(i,p(l))),null!=n?n:e);var i,l}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function N(e){const n=(0,i.Z)();return a.createElement(v,k({key:String(n)},e))}},223746:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return b},metadata:function(){return g},toc:function(){return k}});var a=t(603905),r=t(751361),i=t(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(u)for(var t of u(n))m.call(n,t)&&d(e,t,n[t]);return e};const b={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},f=void 0,g={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"Eine ISLE-Komponente, die eine Frage wiedergibt, bei der der Lerner Elemente aus zwei Listen richtig zuordnen muss.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/de/docs/questions/match-list-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20. Apr. 2022",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/de/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/de/docs/questions/multiple-choice-question"}},h={},k=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],v={toc:k};function N(e){var n,t=e,{components:l}=t,d=((e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&m.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=p(p({},v),d),o(n,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Eine ISLE-Komponente, die eine Frage wiedergibt, bei der der Lerner Elemente aus zwei Listen richtig zuordnen muss."),(0,a.kt)("h2",p({},{id:"optionen"}),"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Frage, die oben in der Fragenkomponente der \xdcbereinstimmungsliste angezeigt werden soll. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"elements")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),': ein "Array", das die richtigen Paare enth\xe4lt, die oben in der Freitext-Fragenkomponente angezeigt werden. Jedes "Array"-Element muss ein "Objekt" mit "a"- und "b"-Eigenschaften sein; liefern Sie Elemente mit nur "a"- oder "b"-Eigenschaften, um Ablenkungsantworten hinzuzuf\xfcgen. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Platzierung der Hinweise (entweder ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", oder ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": Hinweise, die bei der Beantwortung der Frage helfen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob die L\xf6sung zug\xe4nglich sein soll, nachdem die Lernenden ihre Antworten abgegeben haben. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Feedback-Tasten angezeigt werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob das Element einen integrierten Chat haben soll. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": wenn gesetzt, werden die mitgelieferten Farben f\xfcr die Kacheln verwendet. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": gibt an, ob die Spalten ",(0,a.kt)("inlineCode",{parentName:"li"},"links"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"rechts")," oder ",(0,a.kt)("inlineCode",{parentName:"li"},"beide"),", deren Elemente \xfcbereinstimmen m\xfcssen, gemischt werden sollen; geben Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"none")," oder einen anderen Wert an, um die Elemente auf beiden Seiten nicht zu mischen (kann n\xfctzlich sein, wenn keine L\xf6sung vorhanden ist). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob \xdcbermittlungsbenachrichtigungen deaktiviert werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Benachrichtigung, die angezeigt wird, wenn der Lerner zum ersten Mal seine Antwort absendet. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Benachrichtigung f\xfcr alle \xdcbertragungen nach der ersten angezeigt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": Zeit, bis die Studenten ihre Antworten einreichen d\xfcrfen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn Studenten eine Antwort \xe4ndern. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn der Sch\xfcler eine Antwort abgibt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",p({},{id:"beispiele"}),"Beispiele"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,a.kt)(i.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,a.kt)(i.Z,{value:"withFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,a.kt)(i.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,a.kt)(i.Z,{value:"grading",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}N.isMDXComponent=!0}}]);