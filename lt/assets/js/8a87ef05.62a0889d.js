"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87700],{603905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(202784),r=a(386010),i="tabItem_Ymn6",o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),i=a(152670),o=a(258433),l=a(952326),s=a(638849),u="tabList__CuJ",d="tabItem_LNqP",p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&y(e,a,t[a]);if(k)for(var a of k(t))b.call(t,a)&&y(e,a,t[a]);return e};function g(e){var t,a;const{lazy:i,block:p,defaultValue:k,values:f,groupId:b,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===k?k:null!=(a=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,l.U)(),[O,T]=(0,n.useState)(C),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=b){const e=j[b];null!=e&&e!==O&&N.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,a=P.indexOf(t),n=N[a].value;n!==O&&(x(t),T(n),null!=b&&w(b,String(n)))},E=e=>{var t,a;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;n=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(a=P[t])?a:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},y)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=v({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>P.push(e),onKeyDown:E,onClick:D},a),o={className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":O===e})},c(i,m(o))),null!=t?t:e);var i,o}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function N(e){const t=(0,i.Z)();return n.createElement(g,v({key:String(t)},e))}},164102:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return v}});var n=a(603905),r=a(751361),i=a(440034),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&c(e,a,t[a]);return e};const k={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},f=void 0,b={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"\u017dod\u017ei\u0173 debesies komponentas, sukurtas ant d3-cloud.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/lt/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"2022-04-25",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/lt/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/lt/docs/models/decision-tree"}},y={},v=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],g={toc:v};function N(e){var t,a=e,{components:o}=a,c=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),c),l(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u017dod\u017ei\u0173 debesies komponentas, sukurtas ant ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud"),"."),(0,n.kt)("h2",m({},{id:"parinktys"}),"Parinktys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": arba tekst\u0173 masyvas, i\u0161 kurio generuojamas \u017eod\u017ei\u0173 debesis, arba, jei ",(0,n.kt)("inlineCode",{parentName:"li"},"precalculated")," nustatyta \u012f ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", \u017eod\u017ei\u0173 skai\u010diaus objekt\u0173 masyvas (su ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," ir ",(0,n.kt)("inlineCode",{parentName:"li"},"value")," raktais).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"font")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|function)"),": prieigos funkcija, nurodanti kiekvieno \u017eod\u017eio \u0161rifto veid\u0105. Taip pat priima konstant\u0105 vietoj funkcijos. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": prieigos funkcija, nurodanti kiekvieno \u017eod\u017eio \u0161rifto dyd\u012f. Numatytoji reik\u0161m\u0117 yra ",(0,n.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 14,0"),", kur ",(0,n.kt)("inlineCode",{parentName:"li"},"min")," ir ",(0,n.kt)("inlineCode",{parentName:"li"},"max")," rei\u0161kia atitinkamai ma\u017eiausi\u0105 ir did\u017eiausi\u0105 \u017eod\u017ei\u0173 ",(0,n.kt)("inlineCode",{parentName:"li"},"skai\u010di\u0173"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"height")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": \u017eod\u017ei\u0173 debesies auk\u0161tis (px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"language")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": kalbos identifikatorius (nustato \u0161alintinus stop\u017eod\u017eius).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"minCount")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": jei nustatyta, \u012ftraukti tik tuos \u017eod\u017eius, kurie duotuose duomenyse yra daugiau nei ",(0,n.kt)("inlineCode",{parentName:"li"},"minCount")," kart\u0173.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti mygtuk\u0105, skirt\u0105 \u017eod\u017ei\u0173 debesiui i\u0161saugoti kaip paveiksl\u0117l\u012f.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onClick")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamojo ry\u0161io funkcija, i\u0161kvie\u010diama, kai spustel\u0117jamas \u017eodis \u017eod\u017ei\u0173 debesyje.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"padding")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(function|number)"),": prieigos funkcija arba konstanta, nurodanti kiekvieno \u017eod\u017eio skaitmenin\u012f u\u017epild\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar \u017eod\u017ei\u0173 debesis tikisi i\u0161 anksto apskai\u010diuoto \u017eod\u017ei\u0173 skai\u010diaus masyvo, ar j\u012f sukurs duotiems tekstams.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rotate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(function|number)"),": prieigos funkcija, nurodanti kiekvieno \u017eod\u017eio pasukimo kamp\u0105 (laipsniais). Taip pat vietoj funkcijos priimama konstanta. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": nauj\u0173 dokument\u0173, esan\u010di\u0173 ",(0,n.kt)("inlineCode",{parentName:"li"},"data"),", partijos dydis, prie\u0161 atvaizduojant \u017eod\u017ei\u0173 debes\u012f.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": papildomus sustabar\u0117jusius \u017eod\u017eius, kuriuos reikia pa\u0161alinti prie\u0161 atvaizduojant \u017eod\u017ei\u0173 debes\u012f.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": i\u0161 naujo atvaizduoti, kai kei\u010diamasi duomen\u0173 rinkiniu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"width")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": \u017eod\u017ei\u0173 debesies plotis (px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,n.kt)("h2",m({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,n.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,n.kt)(i.Z,{value:"withStopwords",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}N.isMDXComponent=!0}}]);