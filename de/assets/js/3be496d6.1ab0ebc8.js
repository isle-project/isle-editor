"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9738],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(202784);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(487462),i=t(202784),r=t(972389),l=t(161419),o=t(386010),u="tabItem_LplD";function s(e){var n,t,r,s=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),N=v.tabGroupChoices,w=v.setTabGroupChoices,y=(0,i.useState)(h),C=y[0],T=y[1],x=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=N[m];null!=O&&O!==C&&b.some((function(e){return e.value===O}))&&T(O)}var D=function(e){var n=e.currentTarget,t=x.indexOf(n),a=b[t].value;a!==C&&(S(n),T(a),null!=m&&w(m,a))},q=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;t=x[i]||x[x.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return x.push(e)},onKeyDown:q,onFocus:D,onClick:D},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),s?(0,i.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,r.Z)();return i.createElement(s,(0,a.Z)({key:String(n)},e))}},423767:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return k}});var a=t(487462),i=t(263366),r=(t(202784),t(603905)),l=t(409877),o=t(358215),u=["components"],s={id:"select-question",title:"Select Question",sidebar_label:"Select Question"},d=void 0,c={unversionedId:"questions/select-question",id:"questions/select-question",title:"Select Question",description:"Eine ausgew\xe4hlte Fragekomponente.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/questions/select.md",sourceDirName:"questions",slug:"/questions/select-question",permalink:"/de/docs/questions/select-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622607303,formattedLastUpdatedAt:"2.6.2021",frontMatter:{id:"select-question",title:"Select Question",sidebar_label:"Select Question"},sidebar:"docs",previous:{title:"Range Question",permalink:"/de/docs/questions/range-question"},next:{title:"Select Question Matrix",permalink:"/de/docs/questions/select-question-matrix"}},p={},m=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],f={toc:m};function k(e){var n=e.components,t=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Eine ausgew\xe4hlte Fragekomponente."),(0,r.kt)("h2",{id:"optionen"},"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Frage, f\xfcr die der Kursteilnehmer eine der verf\xfcgbaren Antwortm\xf6glichkeiten ausw\xe4hlen muss. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"options")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": verf\xfcgbare Antwortoptionen, aus denen der Kursteilnehmer w\xe4hlen kann. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Index des L\xf6sungselements in ",(0,r.kt)("inlineCode",{parentName:"li"},"options"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"preselected")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Index der vorgew\xe4hlten Antwortm\xf6glichkeit. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Komponente inline gerendert wird oder nicht. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Platzierung der Hinweise (entweder ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", oder ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": Hinweise, die bei der Beantwortung der Frage helfen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Feedback-Tasten angezeigt werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob das Element einen integrierten Chat haben soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob ein Feedback einschlie\xdflich der richtigen Antwort angezeigt werden soll, nachdem die Lerner ihre Antworten abgeschickt haben. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Meldung, die angezeigt werden soll, wenn der Sch\xfcler eine falsche Antwort ausw\xe4hlt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Not quite, try again!'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Meldung, die angezeigt werden soll, wenn der Sch\xfcler die richtige Antwort ausw\xe4hlt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'That's the correct answer!'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der nach der Submit-Aktion ausgel\xf6st wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn die Antwort abgeschickt wurde; hat als ersten Parameter ein ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", das angibt, ob die Antwort richtig beantwortet wurde (falls zutreffend, sonst ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),") und die gelieferte Antwort als zweiten Parameter. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Inline",value:"inline"},{label:"With Hints",value:"withHints"},{label:"Submit Function Hints",value:"submitFunction"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n"))),(0,r.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}\n/>\n"))),(0,r.kt)(o.Z,{value:"inline",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"The usual t-test is:\n<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    inline\n/> ... so you can us it in the midst of a longer paragraph\n"))),(0,r.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SelectQuestion\n    question="White is "\n    solution={1}\n    options={[\n        \'a primary color\',\n        \'not a primary color\'\n    ]}\n    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}\n/>\n'))),(0,r.kt)(o.Z,{value:"submitFunction",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"Select the primary color\"\n    solution={2}\n    options={[\n        'orange',\n        'white',\n        'red'\n    ]}\n    onSubmit={(result) => {\n        switch ( result ) {\n            case 'orange':\n                alert( 'No, orange is a mix of yellow and red.' );\n            break;\n            case 'white':\n                alert( 'White does not count as a color.' );\n            break;\n            case 'red':\n                alert( 'That is correct.' );\n            break;\n        }\n    }}\n    provideFeedback={false}\n/> \n")))))}k.isMDXComponent=!0}}]);