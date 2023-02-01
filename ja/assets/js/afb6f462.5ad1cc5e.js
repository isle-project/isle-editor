"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57496],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),r=n(386010),l=n(152670),o=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:k,groupId:b,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=k?k:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[j,T]=(0,a.useState)(C),D=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==j&&N.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=D.indexOf(t),a=N[n].value;a!==j&&(x(t),T(a),null!=b&&O(b,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;a=null!=(t=D[n])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=null!=(n=D[t])?n:D[D.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=v({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>D.push(e),onKeyDown:E,onClick:P},n),o={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,l.Z)();return a.createElement(g,v({key:String(t)},e))}},992227:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return v}});var a=n(603905),r=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},k=void 0,b={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"d3-cloud\u306e\u4e0a\u306b\u69cb\u7bc9\u3055\u308c\u305f\u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/ja/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"2022\u5e744\u670825\u65e5",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/ja/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/ja/docs/models/decision-tree"}},y={},v=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],g={toc:v};function N(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud"),"\u306e\u4e0a\u306b\u69cb\u7bc9\u3055\u308c\u305f\u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),(0,a.kt)("h2",m({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u5358\u8a9e\u7fa4\u3092\u751f\u6210\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u306e\u914d\u5217\u3001\u3042\u308b\u3044\u306f ",(0,a.kt)("inlineCode",{parentName:"li"},"precalculated")," \u304c ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u5358\u8a9e\u6570\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u5217 (",(0,a.kt)("inlineCode",{parentName:"li"},"text")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," \u306e\u30ad\u30fc\u3092\u6301\u3064)\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"font")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|function)"),": \u30a2\u30af\u30bb\u30b5\u95a2\u6570\u3067\u3001\u5404\u5358\u8a9e\u306e\u30d5\u30a9\u30f3\u30c8\u30d5\u30a7\u30a4\u30b9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u95a2\u6570\u306e\u4ee3\u308f\u308a\u306b\u5b9a\u6570\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u5404\u5358\u8a9e\u306e\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u3092\u6307\u5b9a\u3059\u308b\u30a2\u30af\u30bb\u30c3\u30b5\u95a2\u6570\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f ",(0,a.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0")," \u3067\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"min")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," \u306f\u305d\u308c\u305e\u308c\u5358\u8a9e\u306e\u6700\u5c0f\u6570\u3068\u6700\u5927\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"counts")," \u3092\u8868\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u8a9e\u9ad8. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"language")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u3052\u3093\u3054\u3057\u304d\u3079\u3064\u3057. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u6307\u5b9a\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u4e2d\u3067 ",(0,a.kt)("inlineCode",{parentName:"li"},"minCount")," \u56de\u4ee5\u4e0a\u51fa\u73fe\u3059\u308b\u5358\u8a9e\u306e\u307f\u3092\u542b\u3080\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u3092\u753b\u50cf\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u5358\u8a9e\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"padding")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": \u5404\u5358\u8a9e\u306e\u6570\u5024\u30d1\u30c7\u30a3\u30f3\u30b0\u3092\u793a\u3059\u30a2\u30af\u30bb\u30b5\u95a2\u6570\u307e\u305f\u306f\u5b9a\u6570. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u304c\u4e8b\u524d\u306b\u8a08\u7b97\u3055\u308c\u305f\u5358\u8a9e\u6570\u306e\u914d\u5217\u3092\u671f\u5f85\u3059\u308b\u304b\u3001\u4e0e\u3048\u3089\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u306b\u5bfe\u3057\u3066\u5358\u8a9e\u6570\u3092\u751f\u6210\u3059\u308b\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": \u5404\u5358\u8a9e\u306e\u56de\u8ee2\u89d2\u5ea6\uff08\u5ea6\u6570\uff09\u3092\u8868\u3059\u30a2\u30af\u30bb\u30b5\u95a2\u6570\u3002\u95a2\u6570\u306e\u4ee3\u308f\u308a\u306b\u5b9a\u6570\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u304c\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u524d\u306e ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," \u306e\u65b0\u3057\u3044\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30c3\u30c1\u30b5\u30a4\u30ba. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u5358\u8a9e\u306e\u96f2\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u524d\u306b\u524a\u9664\u3059\u308b\u8ffd\u52a0\u306e\u30b9\u30c8\u30c3\u30d7\u30ef\u30fc\u30c9. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4ea4\u63db\u3059\u308b\u969b\u306e\u30ec\u30f3\u30c0\u30fc. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u8a9e\u96f2\u306e\u5e45. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,a.kt)("h2",m({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,a.kt)(l.Z,{value:"withStopwords",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}N.isMDXComponent=!0}}]);