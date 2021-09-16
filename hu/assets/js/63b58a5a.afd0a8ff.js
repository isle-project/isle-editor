"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1225],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,k=d["".concat(u,".").concat(c)]||d[c]||p[c]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),l=n(79443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,l=e.block,s=e.defaultValue,m=e.values,p=e.groupId,d=e.className,c=a.Children.toArray(e.children),k=null!=m?m:c.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),g=b.tabGroupChoices,v=b.setTabGroupChoices,N=(0,a.useState)(f),y=N[0],h=N[1],z=[];if(null!=p){var C=g[p];null!=C&&C!==y&&k.some((function(e){return e.value===C}))&&h(C)}var j=function(e){var t=e.currentTarget,n=z.indexOf(t),a=k[n].value;h(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,l,i,r,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,i=e.right,r=window,o=r.innerHeight,s=r.innerWidth,n>=0&&i<=s&&l<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=z.indexOf(e.target)+1;n=z[a]||z[0];break;case"ArrowLeft":var l=z.indexOf(e.target)-1;n=z[l]||z[z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},d)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return z.push(e)},onKeyDown:O,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,a.cloneElement)(c.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},426688:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(487462),l=n(263366),i=(n(202784),n(603905)),r=n(855064),o=n(358215),u=["components"],s={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},m=void 0,p={unversionedId:"questions/number-question",id:"questions/number-question",isDocsHomePage:!1,title:"Number Question",description:"Egy sz\xe1mk\xe9rd\xe9s-\xf6sszetev\u0151.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/questions/number.md",sourceDirName:"questions",slug:"/questions/number-question",permalink:"/hu/docs/questions/number-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"2021. 06. 19.",frontMatter:{id:"number-question",title:"Number Question",sidebar_label:"Number Question"},sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/hu/docs/questions/multiple-choice-question"},next:{title:"Order Question",permalink:"/hu/docs/questions/order-question"}},d=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],c={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Egy sz\xe1mk\xe9rd\xe9s-\xf6sszetev\u0151."),(0,i.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": sz\xe1mk\xe9rd\xe9s. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": a tippek elhelyez\xe9se (vagy ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", vagy ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": a k\xe9rd\xe9s megv\xe1laszol\xe1s\xe1ra vonatkoz\xf3 \xfatmutat\xe1sokat ad. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjenek-e a visszajelz\u0151 gombok. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|array<number>)"),": a feladatra adott numerikus v\xe1lasz (vagy t\xf6bb helyes v\xe1lasz, ha t\xf6mb\xf6t adunk meg). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"digits")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": azon sz\xe1mjegyek sz\xe1ma, amelyek eset\xe9ben a tanul\xf3 \xe1ltal adott v\xe1lasznak meg kell egyeznie a megold\xe1ssal ahhoz, hogy helyesnek lehessen tekinteni. Eg\xe9sz sz\xe1mk\xe9nt val\xf3 megfelel\xe9shez \xe1ll\xedtsa 0-ra. Ha null\xe1ra van \xe1ll\xedtva, akkor a pontos egyez\xe9st keresi.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1lisan megengedett bemeneti \xe9rt\xe9k. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": minim\xe1lisan megengedett bemeneti \xe9rt\xe9k. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": el\u0151re kiv\xe1lasztott \xe9rt\xe9k a sz\xe1mbemenethez. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": jelzi, hogy a helyes v\xe1laszt tartalmaz\xf3 visszajelz\xe9s megjelenjen-e, miut\xe1n a tanul\xf3k elk\xfcldt\xe9k a v\xe1laszaikat. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"submitAfterFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ellen\u0151rzi, hogy a megold\xe1s felfed\xe9se ut\xe1n is \xfajra be lehet-e ny\xfajtani a p\xe1ly\xe1zatot). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTries")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": h\xe1ny pr\xf3b\xe1lkoz\xe1s ut\xe1n kell visszajelz\xe9st adni (ha a ",(0,i.kt)("inlineCode",{parentName:"li"},"provideFeedback")," \xe9rt\xe9ke ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza a beny\xfajt\xe1si \xe9rtes\xedt\xe9sek letilt\xe1s\xe1t. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az elemnek legyen-e integr\xe1lt chatje. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": a tanul\xf3knak a v\xe1laszok beny\xfajt\xe1s\xe1ig rendelkez\xe9sre \xe1ll\xf3 id\u0151. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": az oszt\xe1lyoz\xe1s sor\xe1n adhat\xf3 maxim\xe1lis pontsz\xe1m. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, amely a sz\xe1mmez\u0151 \xe9rt\xe9k\xe9nek v\xe1ltoz\xe1sa ut\xe1n l\xe9p m\u0171k\xf6d\xe9sbe; egyetlen argumentumk\xe9nt az aktu\xe1lis \xe9rt\xe9ket kapja.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': callback, amelyet a v\xe1lasz elk\xfcld\xe9sekor h\xedvnak meg; els\u0151 param\xe9tere egy "b\xf3l\xe9", amely jelzi, hogy a v\xe1lasz helyesen lett-e megv\xe1laszolva (ha alkalmazhat\xf3, egy\xe9bk\xe9nt "nulla"), m\xe1sodik param\xe9tere pedig a megadott v\xe1lasz.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,i.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"markdownStyling"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberQuestion\n    question="What is the number Pi? (include at least three digits after the decimal point)"\n    solution={3.142}\n/>\n'))),(0,i.kt)(o.Z,{value:"markdownStyling",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span>What is the number $\\pi$? (include at least _three_ digits after the decimal point)</span>}\n    solution={3.142}\n/>\n"))),(0,i.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}\n    solution={3.142}\n/>\n")))))}k.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);