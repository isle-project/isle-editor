"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62614],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),o="tabItem_Ymn6",l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),o=n(152670),l=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(k)for(var n of k(t))v.call(t,n)&&b(e,n,t[n]);return e};function g(e){var t,n;const{lazy:o,block:c,defaultValue:k,values:f,groupId:v,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,l.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===k?k:null!=(n=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==C&&!h.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,i.U)(),[O,T]=(0,a.useState)(C),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==O&&(P(t),T(a),null!=v&&w(v,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},b)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=y({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:D,onClick:D},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===e})},d(o,m(l))),null!=t?t:e);var o,l}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,o.Z)();return a.createElement(g,y({key:String(t)},e))}},603920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return y}});var a=n(603905),r=n(751361),o=n(440034),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e};const k={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},f=void 0,v={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Komponent mraku slov postaven\xfd nad d3-cloud.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/sk/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"25. 4. 2022",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/sk/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/sk/docs/models/decision-tree"}},b={},y=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],g={toc:y};function h(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Komponent mraku slov postaven\xfd nad ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud"),"."),(0,a.kt)("h2",m({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": bu\u010f pole textov, z ktor\xfdch sa m\xe1 vygenerova\u0165 mrak slov, alebo ak je ",(0,a.kt)("inlineCode",{parentName:"li"},"precalculated")," nastaven\xe9 na ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", a pole objektov s po\u010dtom slov (s k\u013e\xfa\u010dmi ",(0,a.kt)("inlineCode",{parentName:"li"},"text")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"font")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|function)"),": pr\xedstupov\xe1 funkcia ur\u010duj\xfaca tv\xe1r p\xedsma pre ka\u017ed\xe9 slovo. Namiesto funkcie akceptuje aj kon\u0161tantu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": pr\xedstupov\xe1 funkcia, ktor\xe1 ud\xe1va ve\u013ekos\u0165 p\xedsma pre ka\u017ed\xe9 slovo. Predvolen\xe9 nastavenie je ",(0,a.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 14,0"),", kde ",(0,a.kt)("inlineCode",{parentName:"li"},"min")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," ozna\u010duj\xfa minim\xe1lny a maxim\xe1lny po\u010det slov. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": v\xfd\u0161ka mraku slov (v px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"language")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": identifik\xe1tor jazyka (ur\u010duje stopslova, ktor\xe9 sa maj\xfa odstr\xe1ni\u0165). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": ak je nastaven\xe9, zahrnie iba slov\xe1, ktor\xe9 sa v dan\xfdch \xfadajoch vyskytuj\xfa viac ako ",(0,a.kt)("inlineCode",{parentName:"li"},"minCount")," kr\xe1t. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa m\xe1 zobrazi\u0165 tla\u010didlo na ulo\u017eenie mraku slov ako obr\xe1zka.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe1 funkcia vyvolan\xe1 po kliknut\xed na slovo v mraku slov. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"padding")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": pr\xedstupov\xe1 funkcia alebo kon\u0161tanta ud\xe1vaj\xfaca \u010d\xedseln\xfa v\xfdpl\u0148 pre ka\u017ed\xe9 slovo. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di mrak slov o\u010dak\xe1va pole predpo\u010d\xedtan\xfdch po\u010dtov slov alebo ich bude generova\u0165 pre dan\xe9 texty.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": pr\xedstupov\xe1 funkcia ud\xe1vaj\xfaca uhol nato\u010denia (v stup\u0148och) pre ka\u017ed\xe9 slovo. Namiesto funkcie akceptuje aj kon\u0161tantu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": ve\u013ekos\u0165 d\xe1vky nov\xfdch dokumentov v ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," pred op\xe4tovn\xfdm vykreslen\xedm mraku slov. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u010fal\u0161ie stopslov\xe1, ktor\xe9 sa maj\xfa odstr\xe1ni\u0165 pred vykreslen\xedm mraku slov. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": op\xe4tovn\xe9 vykreslenie pri v\xfdmene s\xfaboru \xfadajov. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xedrka mraku slov (v px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,a.kt)("h2",m({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,a.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,a.kt)(o.Z,{value:"withStopwords",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}h.isMDXComponent=!0}}]);