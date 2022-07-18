"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72246],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(202784),r=a(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),i=a(152670),l=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",d=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&b(e,a,t[a]);if(k)for(var a of k(t))v.call(t,a)&&b(e,a,t[a]);return e};function g(e){var t,a;const{lazy:i,block:d,defaultValue:k,values:f,groupId:v,className:b}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,l.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===k?k:null!=(a=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,o.U)(),[O,T]=(0,n.useState)(C),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==O&&N.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,a=x.indexOf(t),n=N[a].value;n!==O&&(D(t),T(n),null!=v&&w(v,String(n)))},E=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;n=null!=(t=x[a])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=y({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:P,onClick:P},a),l={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":O===e})},m(i,c(l))),null!=t?t:e);var i,l}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function N(e){const t=(0,i.Z)();return n.createElement(g,y({key:String(t)},e))}},821586:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return y}});var n=a(603905),r=a(751361),i=a(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&m(e,a,t[a]);return e};const k={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},f=void 0,v={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Uz d3-cloud balst\u012bta v\u0101rdu m\u0101ko\u0146a komponente.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/lv/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"2022. g. 25. apr.",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/lv/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/lv/docs/models/decision-tree"}},b={},y=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],g={toc:y};function N(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),m),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Uz ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud")," balst\u012bta v\u0101rdu m\u0101ko\u0146a komponente."),(0,n.kt)("h2",c({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": vai nu tekstu mas\u012bvs, no kura \u0123ener\u0113t v\u0101rdu m\u0101koni, vai, ja ",(0,n.kt)("inlineCode",{parentName:"li"},"precalculated")," ir iestat\u012bts uz ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", un v\u0101rdu skaita objektu mas\u012bvs (ar ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," un ",(0,n.kt)("inlineCode",{parentName:"li"},"value")," atsl\u0113g\u0101m).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"font")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|function)"),": piek\u013cuves funkcija, kas nor\u0101da katra v\u0101rda fonta seju. Funkcijas viet\u0101 pie\u0146em ar\u012b konstantu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": piek\u013cuves funkcija, kas nor\u0101da katra v\u0101rda fonta lielumu. Standarta noklus\u0113juma v\u0113rt\u012bba ir ",(0,n.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 14,0"),", kur ",(0,n.kt)("inlineCode",{parentName:"li"},"min")," un ",(0,n.kt)("inlineCode",{parentName:"li"},"max")," apz\u012bm\u0113 attiec\u012bgi minim\u0101lo un maksim\u0101lo v\u0101rdu ",(0,n.kt)("inlineCode",{parentName:"li"},"skaitli"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"height")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": v\u0101rdu m\u0101ko\u0146a augstums (px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"language")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": valodas identifikators (nosaka no\u0146emt\u0101s pieturas v\u0101rdi).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"minCount")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": ja iestat\u012bts, iek\u013cauj tikai tos v\u0101rdus, kas dotajos datos par\u0101d\u0101s vair\u0101k nek\u0101 ",(0,n.kt)("inlineCode",{parentName:"li"},"minCount")," rei\u017eu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai tiek r\u0101d\u012bta poga, lai saglab\u0101tu v\u0101rdu m\u0101koni k\u0101 att\u0113lu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onClick")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atsauces funkcija, kas tiek izsaukta, kad tiek noklik\u0161\u0137in\u0101ts uz v\u0101rda v\u0101rdu m\u0101kon\u012b.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"padding")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(function|number)"),": piek\u013cuves funkcija vai konstante, kas nor\u0101da katra v\u0101rda skaitlisko pild\u012bjumu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai v\u0101rdu m\u0101konis sagaida iepriek\u0161 apr\u0113\u0137in\u0101tu v\u0101rdu skaita mas\u012bvu vai \u0123ener\u0113 to dotajiem tekstiem.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rotate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(function|number)"),": piek\u013cuves funkcija, kas nor\u0101da pagrieziena le\u0146\u0137i (gr\u0101dos) katram v\u0101rdam. Funkcijas viet\u0101 pie\u0146em ar\u012b konstantu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": jaunu dokumentu partijas lielums ",(0,n.kt)("inlineCode",{parentName:"li"},"data")," pirms v\u0101rdu m\u0101ko\u0146a p\u0101rrender\u0113\u0161anas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": papildu aizliedzo\u0161ie v\u0101rdi, kas j\u0101dz\u0113\u0161 pirms v\u0101rdu m\u0101ko\u0146a atveido\u0161anas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": p\u0101rrender\u0113t, kad datu kopa tiek apmain\u012bta.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"width")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": v\u0101rdu m\u0101ko\u0146a platums (px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,n.kt)("h2",c({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,n.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,n.kt)(i.Z,{value:"withStopwords",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}N.isMDXComponent=!0}}]);