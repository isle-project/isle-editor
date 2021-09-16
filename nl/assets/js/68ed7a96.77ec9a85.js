"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[265],{603905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,f=p["".concat(u,".").concat(c)]||p[c]||d[c]||i;return t?a.createElement(f,l(l({ref:n},m),{},{components:t})):a.createElement(f,l({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(202784),r=t(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,r=e.block,s=e.defaultValue,m=e.values,d=e.groupId,p=e.className,c=a.Children.toArray(e.children),f=null!=m?m:c.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=s?s:null==(n=c.find((function(e){return e.props.default})))?void 0:n.props.value,g=i(),b=g.tabGroupChoices,v=g.setTabGroupChoices,N=(0,a.useState)(k),h=N[0],C=N[1],w=[];if(null!=d){var y=b[d];null!=y&&y!==h&&f.some((function(e){return e.value===y}))&&C(y)}var O=function(e){var n=e.currentTarget,t=w.indexOf(n),a=f[t].value;C(a),null!=d&&(v(d,a),setTimeout((function(){var e,t,a,r,i,l,o,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,t>=0&&i<=s&&r<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:O,onClick:O},null!=t?t:n)}))),t?(0,a.cloneElement)(c.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},79443:function(e,n,t){var a=(0,t(202784).createContext)(void 0);n.Z=a},227970:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=t(487462),r=t(263366),i=(t(202784),t(603905)),l=t(855064),o=t(358215),u=["components"],s={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},m=void 0,d={unversionedId:"questions/number-question",id:"questions/number-question",isDocsHomePage:!1,title:"Number Question",description:"Een aantal vraagcomponenten.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/questions/number.md",sourceDirName:"questions",slug:"/questions/number-question",permalink:"/nl/docs/questions/number-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622567622,formattedLastUpdatedAt:"1-6-2021",frontMatter:{id:"number-question",title:"Number Question",sidebar_label:"Number Question"},sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/nl/docs/questions/multiple-choice-question"},next:{title:"Order Question",permalink:"/nl/docs/questions/order-question"}},p=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],c={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Een aantal vraagcomponenten."),(0,i.kt)("h2",{id:"opties"},"Opties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": nummervraag. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": plaatsing van de hints (ofwel ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", of ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": tips die een leidraad bieden voor het beantwoorden van de vraag. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|array<number>)"),": een numeriek antwoord op het probleem (of meerdere juiste antwoorden als er een array wordt geleverd). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"digits")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": aantal cijfers waarvoor het antwoord van de leerling overeen moet komen met de oplossing om als juist beschouwd te worden. Stel in op 0 om een geheel getal te gebruiken. Indien ingesteld op null zal het zoeken naar een exacte overeenkomst. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": maximaal toegestane invoerwaarde. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": minimaal toegestane invoerwaarde. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": voorgeselecteerde waarde van het ingevoerde aantal. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of de feedback, inclusief het juiste antwoord, moet worden weergegeven nadat de leerlingen hun antwoorden hebben ingediend. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"submitAfterFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of men opnieuw moet kunnen indienen, zelfs nadat de oplossing is onthuld). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTries")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": na hoeveel pogingen er feedback moet worden gegeven (als ",(0,i.kt)("inlineCode",{parentName:"li"},"provideFeedback")," ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," is). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of het element een ge\xefntegreerde chat moet hebben. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": maximumaantal punten voor de indeling in klassen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback die wordt geactiveerd nadat de waarde van het getalveld is veranderd; ontvangt de huidige waarde als enige argument. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback ingeroepen bij het inzenden van het antwoord; heeft als eerste parameter een ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," die aangeeft of het antwoord correct is beantwoord (indien van toepassing, ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," anders) en het verstrekte antwoord als tweede parameter. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"markdownStyling"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberQuestion\n    question="What is the number Pi? (include at least three digits after the decimal point)"\n    solution={3.142}\n/>\n'))),(0,i.kt)(o.Z,{value:"markdownStyling",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span>What is the number $\\pi$? (include at least _three_ digits after the decimal point)</span>}\n    solution={3.142}\n/>\n"))),(0,i.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}\n    solution={3.142}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);