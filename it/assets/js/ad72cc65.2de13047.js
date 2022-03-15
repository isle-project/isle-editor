"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3593],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(202784);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(487462),i=t(202784),r=t(972389),l=t(161419),o=t(386010),u="tabItem_LplD";function s(e){var n,t,r,s=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,i.useState)(h),O=C[0],D=C[1],T=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var q=N[m];null!=q&&q!==O&&v.some((function(e){return e.value===q}))&&D(q)}var x=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==O&&(w(n),D(a),null!=m&&y(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;t=T[i]||T[T.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),s?(0,i.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,r.Z)();return i.createElement(s,(0,a.Z)({key:String(n)},e))}},461377:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return k}});var a=t(487462),i=t(263366),r=(t(202784),t(603905)),l=t(409877),o=t(358215),u=["components"],s={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},d=void 0,c={unversionedId:"questions/order-question",id:"questions/order-question",title:"Order Question",description:"Un componente di domanda d'ordine che chiede allo studente di portare una collezione di elementi nell'ordine corretto.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/questions/order.md",sourceDirName:"questions",slug:"/questions/order-question",permalink:"/it/docs/questions/order-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19/6/2021",frontMatter:{id:"order-question",title:"Order Question",sidebar_label:"Order Question"},sidebar:"docs",previous:{title:"Number Question",permalink:"/it/docs/questions/number-question"},next:{title:"Question Form",permalink:"/it/docs/questions/question-form"}},p={},m=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],f={toc:m};function k(e){var n=e.components,t=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un componente di domanda d'ordine che chiede allo studente di portare una collezione di elementi nell'ordine corretto."),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),': domanda per la quale lo studente deve portare le "opzioni" disponibili nell\'ordine corretto. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"options")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": una serie di testi che lo studente deve portare nell'ordine corretto (si presume che sia l'ordine fornito). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se mostrare una notifica che indica se la risposta inviata \xe8 corretta o meno. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": posizionamento dei suggerimenti (",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right")," o ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i pulsanti di feedback. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se l'elemento deve avere una chat integrata. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": messaggio da visualizzare quando lo studente invia una risposta errata. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": messaggio da visualizzare quando lo studente invia la risposta corretta. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se disabilitare le notifiche di presentazione. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": il tempo necessario per consentire agli studenti di presentare le risposte. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": numero massimo di punti assegnati in classifica. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback che si attiva dopo aver trascinato un elemento; ha due parametri: un ",(0,r.kt)("inlineCode",{parentName:"li"},"booleano")," che indica se gli elementi sono stati messi nell'ordine corretto e un ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," con l'ordine corrente. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": richiamata al momento dell'invio della risposta; ha come unico parametro un ",(0,r.kt)("inlineCode",{parentName:"li"},"booleano")," che indica se gli elementi sono stati messi nell'ordine corretto. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"esempi"},"Esempi"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),(0,r.kt)(o.Z,{value:"hints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),(0,r.kt)(o.Z,{value:"submitFunction",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),(0,r.kt)(o.Z,{value:"withGradingAndFeedback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}k.isMDXComponent=!0}}]);