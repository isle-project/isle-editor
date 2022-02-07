"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9663],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||o;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(487462),r=t(202784),o=t(972389),i=t(275773),l=t(386010),u="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,c=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(f,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),h=y.tabGroupChoices,g=y.setTabGroupChoices,C=(0,r.useState)(N),O=C[0],j=C[1],D=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var w=h[c];null!=w&&w!==O&&f.some((function(e){return e.value===w}))&&j(w)}var x=function(e){var n=e.currentTarget,t=D.indexOf(n),a=f[t].value;a!==O&&(T(n),j(a),null!=c&&g(c,a))},q=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;t=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;t=D[r]||D[D.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},k)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return D.push(e)},onKeyDown:q,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function p(e){var n=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},987705:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=t(487462),r=t(263366),o=(t(202784),t(603905)),i=t(409877),l=t(358215),u=["components"],s={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},p=void 0,d={unversionedId:"questions/order-question",id:"questions/order-question",title:"Order Question",description:"Komponent s ot\xe1zkami o porad\xed, ktor\xfd od \u0161tudenta vy\u017eaduje, aby usporiadal zbierku prvkov do spr\xe1vneho poradia.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/questions/order.md",sourceDirName:"questions",slug:"/questions/order-question",permalink:"/sk/docs/questions/order-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"order-question",title:"Order Question",sidebar_label:"Order Question"},sidebar:"docs",previous:{title:"Number Question",permalink:"/sk/docs/questions/number-question"},next:{title:"Question Form",permalink:"/sk/docs/questions/question-form"}},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],c={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponent s ot\xe1zkami o porad\xed, ktor\xfd od \u0161tudenta vy\u017eaduje, aby usporiadal zbierku prvkov do spr\xe1vneho poradia."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ot\xe1zka, pri ktorej mus\xed \u0161tudent zoradi\u0165 dostupn\xe9 mo\u017enosti do spr\xe1vneho poradia. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"options")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": pole textov, ktor\xe9 m\xe1 \u0161tudent zoradi\u0165 v spr\xe1vnom porad\xed (predpoklad\xe1 sa, \u017ee v dodanom porad\xed). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa m\xe1 zobrazi\u0165 ozn\xe1menie o tom, \u010di je odoslan\xe1 odpove\u010f spr\xe1vna alebo nie.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": umiestnenie n\xe1povedy (bu\u010f ",(0,o.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right")," alebo ",(0,o.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hints")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": n\xe1povedy, ktor\xe9 poskytuj\xfa n\xe1vod, ako odpoveda\u0165 na ot\xe1zku. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa maj\xfa zobrazova\u0165 tla\u010didl\xe1 sp\xe4tnej v\xe4zby.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chat")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di m\xe1 ma\u0165 prvok integrovan\xfd chat. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": spr\xe1va, ktor\xe1 sa zobraz\xed, ke\u010f \u0161tudent odo\u0161le nespr\xe1vnu odpove\u010f. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": spr\xe1va, ktor\xe1 sa zobraz\xed, ke\u010f \u0161tudent odo\u0161le spr\xe1vnu odpove\u010f. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa vypn\xfa\u0165 ozn\xe1menia o odoslan\xed.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"until")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),": \u010das, dokedy by \u0161tudenti mali ma\u0165 mo\u017enos\u0165 predlo\u017ei\u0165 odpovede.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"points")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1lny po\u010det bodov udelen\xfdch pri klasifik\xe1cii. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie, ktor\xe9 sa spust\xed po pretiahnut\xed prvku; m\xe1 dva parametre: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),", ktor\xfd ud\xe1va, \u010di boli prvky umiestnen\xe9 v spr\xe1vnom porad\xed, a ",(0,o.kt)("inlineCode",{parentName:"li"},"array")," s aktu\xe1lnym porad\xedm. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 po odoslan\xed odpovede; ako jedin\xfd parameter m\xe1 ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),", ktor\xfd ud\xe1va, \u010di boli prvky umiestnen\xe9 v spr\xe1vnom porad\xed. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,o.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,o.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),(0,o.kt)(l.Z,{value:"hints",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),(0,o.kt)(l.Z,{value:"submitFunction",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),(0,o.kt)(l.Z,{value:"withGradingAndFeedback",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}k.isMDXComponent=!0}}]);