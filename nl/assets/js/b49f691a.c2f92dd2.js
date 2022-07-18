"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21691],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),o="tabItem_Ymn6",l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&d(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(202784),a=n(386010),o=n(152670),l=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",d="tabItem_LNqP",c=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:o,block:c,defaultValue:f,values:k,groupId:b,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=k?k:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,l.l)(w,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==N&&!w.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:O}=(0,i.U)(),[j,T]=(0,r.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=b){const e=C[b];null!=e&&e!==j&&w.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=x.indexOf(t),r=w[n].value;r!==j&&(D(t),T(r),null!=b&&O(b,String(r)))},E=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;r=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=null!=(n=x[t])?n:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},v)},w.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(o=g({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:P,onClick:P},n),l={className:(0,a.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":j===e})},p(o,m(l))),null!=t?t:e);var o,l}))),o?(0,r.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function w(e){const t=(0,o.Z)();return r.createElement(y,g({key:String(t)},e))}},157727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return g}});var r=n(603905),a=n(751361),o=n(440034),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&p(e,n,t[n]);return e};const f={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},k=void 0,b={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Een woordwolkcomponent die bovenop d3-cloud is gebouwd.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/nl/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"25 apr. 2022",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/nl/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/nl/docs/models/decision-tree"}},v={},g=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],y={toc:g};function w(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),p),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Een woordwolkcomponent die bovenop ",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud")," is gebouwd."),(0,r.kt)("h2",m({},{id:"opties"}),"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": ofwel een reeks teksten waaruit de woordwolk wordt gegenereerd, ofwel, indien ",(0,r.kt)("inlineCode",{parentName:"li"},"voorgecalculeerd")," is ingesteld op ",(0,r.kt)("inlineCode",{parentName:"li"},"waar"),", en een reeks objecten voor het tellen van woorden (met ",(0,r.kt)("inlineCode",{parentName:"li"},"tekst")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"waarde")," toetsen). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"font")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|function)"),": Accessor-functie die het lettertype voor elk woord specificeert. Accepteert ook een constante in plaats van een functie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": accessor functie die de lettergrootte voor elk woord aangeeft. Standaard is dit ",(0,r.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0"),", waarbij ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," respectievelijk het minimum en maximum woordaantal aangeven.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": hoogte van de woordwolk (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"language")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": taalidentificatie (bepaalt de te verwijderen stopwoorden). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minCount")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": indien ingesteld, alleen woorden opnemen die meer dan ",(0,r.kt)("inlineCode",{parentName:"li"},"minCount")," maal in de gegeven gegevens voorkomen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of een knop voor het opslaan van de woordwolk als afbeelding moet worden weergegeven. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie aangeroepen wanneer een woord op de woordwolk wordt geklikt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"padding")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(function|number)"),": Accessor-functie of constante aanduiding van de numerieke vulling voor elk woord. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de woordwolk een reeks vooraf berekende woordentellingen verwacht of deze voor bepaalde teksten zal genereren. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rotate")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(function|number)"),": Accessor-functie die de rotatiehoek (in graden) voor elk woord aangeeft. Accepteert ook een constante in plaats van een functie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": batchgrootte van nieuwe documenten in ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," voordat het woord 'cloud' opnieuw wordt gereproduceerd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),': extra stopwoorden te verwijderen voordat het woord "cloud" wordt weergegeven. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": rerender wanneer de dataset wordt uitgewisseld. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": breedte van de woordwolk (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,r.kt)("h2",m({},{id:"voorbeelden"}),"Voorbeelden"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,r.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,r.kt)(o.Z,{value:"withStopwords",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}w.isMDXComponent=!0}}]);