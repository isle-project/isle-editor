"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60265],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&y(e,n,t[n]);return e};function v(e){var t,n;const{lazy:l,block:m,defaultValue:k,values:b,groupId:f,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===k?k:null!=(n=null!=k?k:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:z}=(0,o.U)(),[C,w]=(0,a.useState)(O),D=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=f){const e=j[f];null!=e&&e!==C&&h.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=D.indexOf(t),a=h[n].value;a!==C&&(P(t),w(a),null!=f&&z(f,String(a)))},x=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;a=null!=(t=D[n])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=null!=(n=D[t])?n:D[D.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},y)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>D.push(e),onKeyDown:x,onFocus:T,onClick:T},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},c(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return a.createElement(v,g({key:String(t)},e))}},986441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&c(e,n,t[n]);return e};const k={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},b=void 0,f={unversionedId:"questions/order-question",id:"questions/order-question",title:"Order Question",description:"Egy sorrendk\xe9rd\xe9s-\xf6sszetev\u0151, amely arra k\xe9ri a tanul\xf3t, hogy az elemek gy\u0171jtem\xe9ny\xe9t a helyes sorrendbe \xe1ll\xedtsa.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/questions/order.md",sourceDirName:"questions",slug:"/questions/order-question",permalink:"/hu/docs/questions/order-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"2021. j\xfan. 19.",frontMatter:{id:"order-question",title:"Order Question",sidebar_label:"Order Question"},sidebar:"docs",previous:{title:"Number Question",permalink:"/hu/docs/questions/number-question"},next:{title:"Question Form",permalink:"/hu/docs/questions/question-form"}},y={},g=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],v={toc:g};function h(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},v),c),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Egy sorrendk\xe9rd\xe9s-\xf6sszetev\u0151, amely arra k\xe9ri a tanul\xf3t, hogy az elemek gy\u0171jtem\xe9ny\xe9t a helyes sorrendbe \xe1ll\xedtsa."),(0,a.kt)("h2",d({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),': k\xe9rd\xe9s, amelyben a tanul\xf3nak a rendelkez\xe9sre \xe1ll\xf3 "lehet\u0151s\xe9geket" kell a helyes sorrendbe \xe1ll\xedtania.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"options")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": sz\xf6vegek t\xf6mbje, amelyeket a tanul\xf3nak a helyes sorrendbe kell helyeznie (felt\xe9telezhet\u0151en a megadott sorrendben).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e \xe9rtes\xedt\xe9s arr\xf3l, hogy a bek\xfcld\xf6tt v\xe1lasz helyes-e vagy sem.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": a tippek elhelyez\xe9se (vagy ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", vagy ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": a k\xe9rd\xe9s megv\xe1laszol\xe1s\xe1ra vonatkoz\xf3 \xfatmutat\xe1sokat ad. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjenek-e a visszajelz\u0151 gombok. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az elemnek legyen-e integr\xe1lt chatje. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \xfczenet, amely akkor jelenik meg, ha a tanul\xf3 rossz v\xe1laszt ad be. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \xfczenet, amely megjelenik, amikor a tanul\xf3 elk\xfcldi a helyes v\xe1laszt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza a beny\xfajt\xe1si \xe9rtes\xedt\xe9sek letilt\xe1s\xe1t. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": a tanul\xf3knak a v\xe1laszok beny\xfajt\xe1s\xe1ig rendelkez\xe9sre \xe1ll\xf3 id\u0151. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": az oszt\xe1lyoz\xe1s sor\xe1n adhat\xf3 maxim\xe1lis pontsz\xe1m. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, amely egy elem \xe1th\xfaz\xe1sa ut\xe1n l\xe9p m\u0171k\xf6d\xe9sbe; k\xe9t param\xe9tere van: egy ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", amely jelzi, hogy az elemek a megfelel\u0151 sorrendben lettek-e elhelyezve, \xe9s egy ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," az aktu\xe1lis sorrenddel.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': callback, amelyet a v\xe1lasz elk\xfcld\xe9sekor h\xedvnak meg; egyetlen param\xe9tere egy "b\xf3luszi", amely azt jelzi, hogy az elemek a helyes sorrendben lettek-e elhelyezve.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",d({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),(0,a.kt)(l.Z,{value:"hints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),(0,a.kt)(l.Z,{value:"submitFunction",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),(0,a.kt)(l.Z,{value:"withGradingAndFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}h.isMDXComponent=!0}}]);