"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95195],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(202784),r=n(386010),i=n(152670),l=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&v(e,n,t[n]);return e};function N(e){var t,n;const{lazy:i,block:m,defaultValue:k,values:b,groupId:f,className:v}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:N.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===k?k:null!=(n=null!=k?k:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?n:N[0].props.value;if(null!==O&&!y.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:C}=(0,o.U)(),[w,D]=(0,a.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&D(e)}const x=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==w&&(T(t),D(a),null!=f&&C(f,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:E,onClick:x},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(i,c(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(N.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function y(e){const t=(0,i.Z)();return a.createElement(N,g({key:String(t)},e))}},411325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var a=n(603905),r=n(751361),i=n(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&d(e,n,t[n]);return e};const k={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},b=void 0,f={unversionedId:"questions/order-question",id:"questions/order-question",title:"Order Question",description:"J\xe4rjekorra k\xfcsimuste komponent, mis palub \xf5pilasel viia elementide kogum \xf5igesse j\xe4rjekorda.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/questions/order.md",sourceDirName:"questions",slug:"/questions/order-question",permalink:"/et/docs/questions/order-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. juuni 2021",frontMatter:{id:"order-question",title:"Order Question",sidebar_label:"Order Question"},sidebar:"docs",previous:{title:"Number Question",permalink:"/et/docs/questions/number-question"},next:{title:"Question Form",permalink:"/et/docs/questions/question-form"}},v={},g=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],N={toc:g};function y(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},N),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"J\xe4rjekorra k\xfcsimuste komponent, mis palub \xf5pilasel viia elementide kogum \xf5igesse j\xe4rjekorda."),(0,a.kt)("h2",c({},{id:"valikud"}),"Valikud"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),': k\xfcsimus, mille puhul \xf5pilane peab viima olemasolevad "valikud" \xf5igesse j\xe4rjekorda.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"options")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": tekstide massiivi, mille \xf5pilane peab viima \xf5igesse j\xe4rjekorda (eeldatavasti on tegemist esitatud j\xe4rjekorraga).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas n\xe4idata teadet, mis n\xe4itab, kas esitatud vastus on \xf5ige v\xf5i mitte.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": vihjete paigutus (kas ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right")," v\xf5i ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": vihjeid, mis annavad suuniseid k\xfcsimusele vastamiseks. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas tagasiside nuppe kuvada. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": s\xf5num, mis kuvatakse, kui \xf5pilane esitab vale vastuse. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": s\xf5num, mis kuvatakse, kui \xf5pilane esitab \xf5ige vastuse. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas keelata esitamisteated. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": aega, kuni \xf5pilastel peaks olema lubatud vastuseid esitada. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": hindamisel antavate punktide maksimaalne arv. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, mis k\xe4ivitub p\xe4rast elemendi lohistamist; sellel on kaks parameetrit: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", mis n\xe4itab, kas elemendid on paigutatud \xf5iges j\xe4rjekorras, ja ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," praeguse j\xe4rjekorraga.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': callback, mida kutsutakse \xfcles, kui vastus on esitatud; ainsa parameetrina on "boolean", mis n\xe4itab, kas elemendid on paigutatud \xf5iges j\xe4rjekorras.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",c({},{id:"n\xe4ited"}),"N\xe4ited"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),(0,a.kt)(i.Z,{value:"hints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),(0,a.kt)(i.Z,{value:"submitFunction",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),(0,a.kt)(i.Z,{value:"withGradingAndFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}y.isMDXComponent=!0}}]);