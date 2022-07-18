"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93458],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),i=n(152670),l=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(k)for(var n of k(t))v.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:i,block:c,defaultValue:k,values:f,groupId:v,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,l.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===k?k:null!=(n=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==j&&!h.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:w}=(0,o.U)(),[O,T]=(0,a.useState)(j),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=v){const e=C[v];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==O&&(D(t),T(a),null!=v&&w(v,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=b({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:P,onClick:P},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===e})},m(i,d(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,i.Z)();return a.createElement(g,b({key:String(t)},e))}},543677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return b}});var a=n(603905),r=n(751361),i=n(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const k={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},f=void 0,v={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Sanapilvi-komponentti, joka on rakennettu d3-cloud p\xe4\xe4lle.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/fi/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"25. huhtik. 2022",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/fi/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/fi/docs/models/decision-tree"}},y={},b=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],g={toc:b};function h(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),m),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Sanapilvi-komponentti, joka on rakennettu ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud")," p\xe4\xe4lle."),(0,a.kt)("h2",d({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": joko joukko tekstej\xe4, joista luodaan sanapilvi, tai, jos ",(0,a.kt)("inlineCode",{parentName:"li"},"precalculated")," on asetettu arvoon ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", joukko sanojen lukum\xe4\xe4r\xe4n objekteja (avaimilla ",(0,a.kt)("inlineCode",{parentName:"li"},"text")," ja ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),").. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"font")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|function)"),": accessor-funktio, joka m\xe4\xe4rittelee kunkin sanan fonttipinnan. Hyv\xe4ksyy my\xf6s vakion funktion sijasta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": accessor-funktio, joka ilmoittaa kunkin sanan fonttikoon. Oletusarvo on ",(0,a.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0"),", miss\xe4 ",(0,a.kt)("inlineCode",{parentName:"li"},"min")," ja ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," tarkoittavat sanojen ",(0,a.kt)("inlineCode",{parentName:"li"},"miinim\xe4\xe4ri\xe4")," ja ",(0,a.kt)("inlineCode",{parentName:"li"},"maksim\xe4\xe4ri\xe4"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": sanapilven korkeus (px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"language")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": kielitunniste (m\xe4\xe4ritt\xe4\xe4 poistettavat stop-sanat). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": jos asetettu, otetaan mukaan vain sanat, jotka esiintyv\xe4t yli ",(0,a.kt)("inlineCode",{parentName:"li"},"minCount"),"-kertaa annetussa aineistossa.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, n\xe4ytet\xe4\xe4nk\xf6 painike sanapilven tallentamiseksi kuvana.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktio, joka k\xe4ynnistyy, kun sanapilven sanaa napsautetaan.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"padding")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": accessor-funktio tai vakio, joka ilmoittaa kunkin sanan numeerisen pehmustuksen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": m\xe4\xe4ritt\xe4\xe4, odottaako sanapilvi ennalta laskettujen sanojen lukum\xe4\xe4r\xe4n joukkoa vai luoko se ne annetuille teksteille.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": accessor-funktio, joka ilmoittaa kunkin sanan kiertokulman (asteina). Hyv\xe4ksyy my\xf6s vakion funktion sijasta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": uusien asiakirjojen er\xe4koko ",(0,a.kt)("inlineCode",{parentName:"li"},"data"),":ssa ennen kuin sanapilvi render\xf6id\xe4\xe4n uudelleen.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": ylim\xe4\xe4r\xe4iset pys\xe4ytyssanat, jotka on poistettava ennen sanapilven esitt\xe4mist\xe4.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": render\xf6inti, kun tietokokonaisuus vaihdetaan.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": sanapilven leveys (px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,a.kt)("h2",d({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,a.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,a.kt)(i.Z,{value:"withStopwords",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}h.isMDXComponent=!0}}]);