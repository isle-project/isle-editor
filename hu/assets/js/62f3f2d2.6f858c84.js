"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84291],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),r=a(386010),l=a(152670),o=a(258433),i=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&g(e,a,t[a]);if(f)for(var a of f(t))b.call(t,a)&&g(e,a,t[a]);return e};function v(e){var t,a;const{lazy:l,block:c,defaultValue:f,values:k,groupId:b,className:g}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=k?k:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const z=null===f?f:null!=(a=null!=f?f:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?a:v[0].props.value;if(null!==z&&!h.some((e=>e.value===z)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${z}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:j}=(0,i.U)(),[O,w]=(0,n.useState)(z),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=b){const e=C[b];null!=e&&e!==O&&h.some((t=>t.value===e))&&w(e)}const D=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==O&&(x(t),w(n),null!=b&&j(b,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:P,onClick:D},a),o={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":O===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,l.Z)();return n.createElement(v,y({key:String(t)},e))}},308408:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=a(603905),r=a(751361),l=a(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&m(e,a,t[a]);return e};const f={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},k=void 0,b={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"A d3-cloud tetej\xe9re \xe9p\xfcl\u0151 sz\xf3felh\u0151 komponens.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/hu/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"2022. \xe1pr. 25.",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/hu/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/hu/docs/models/decision-tree"}},g={},y=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],v={toc:y};function h(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud")," tetej\xe9re \xe9p\xfcl\u0151 sz\xf3felh\u0151 komponens."),(0,n.kt)("h2",d({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": vagy sz\xf6vegek t\xf6mbje, amelyekb\u0151l a sz\xf3felh\u0151t gener\xe1lni kell, vagy, ha az ",(0,n.kt)("inlineCode",{parentName:"li"},"precalculated")," \xe9rt\xe9ke ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", \xe9s sz\xf3sz\xe1m objektumok t\xf6mbje (a ",(0,n.kt)("inlineCode",{parentName:"li"},"text")," \xe9s ",(0,n.kt)("inlineCode",{parentName:"li"},"value")," kulcsokkal).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"font")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|function)"),": accessor f\xfcggv\xe9ny, amely meghat\xe1rozza az egyes szavak bet\u0171t\xedpus\xe1t. F\xfcggv\xe9ny helyett konstansot is elfogad. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": accessor f\xfcggv\xe9ny, amely minden sz\xf3hoz megadja a bet\u0171m\xe9retet. Alap\xe9rtelmezett \xe9rt\xe9ke ",(0,n.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0"),", ahol ",(0,n.kt)("inlineCode",{parentName:"li"},"min")," \xe9s ",(0,n.kt)("inlineCode",{parentName:"li"},"max")," a minim\xe1lis \xe9s maxim\xe1lis sz\xf3sz\xe1mot jel\xf6li.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"height")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": a sz\xf3felh\u0151 magass\xe1ga (px-ben). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"language")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nyelvi azonos\xedt\xf3 (meghat\xe1rozza az elt\xe1vol\xedtand\xf3 z\xe1r\xf3szavakat). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"minCount")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),': ha be van \xe1ll\xedtva, csak azokat a szavakat tartalmazza, amelyek t\xf6bbsz\xf6r fordulnak el\u0151 a megadott adatokban, mint a "minCount".. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e egy gomb a sz\xf3felh\u0151 k\xe9pk\xe9nt t\xf6rt\xe9n\u0151 ment\xe9s\xe9hez.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onClick")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amely akkor h\xedv\xf3dik el\u0151, ha egy sz\xf3ra kattintanak a sz\xf3felh\u0151ben.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"padding")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(function|number)"),": hozz\xe1f\xe9r\xe9si f\xfcggv\xe9ny vagy konstans, amely az egyes szavak numerikus kit\xf6lt\xe9s\xe9t jelzi. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a sz\xf3felh\u0151 az el\u0151re kisz\xe1m\xedtott sz\xf3sz\xe1mok t\xf6mbj\xe9t v\xe1rja-e, vagy a megadott sz\xf6vegekhez gener\xe1lja azokat.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rotate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(function|number)"),": accessor f\xfcggv\xe9ny, amely minden sz\xf3hoz megadja a forgat\xe1si sz\xf6get (fokban). A f\xfcggv\xe9ny helyett konstansot is elfogad. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),': az \xfaj dokumentumok k\xf6tegelt m\xe9rete az "adatokban", miel\u0151tt a sz\xf3felh\u0151 \xfajra renderel\xe9sre ker\xfclne.. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": a sz\xf3felh\u0151 megjelen\xedt\xe9se el\u0151tt elt\xe1vol\xedtand\xf3 tov\xe1bbi z\xe1r\xf3szavak. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": \xfajraszerkeszt\xe9s az adathalmaz cser\xe9jekor. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"width")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": a sz\xf3felh\u0151 sz\xe9less\xe9ge (px-ben). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,n.kt)("h2",d({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,n.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,n.kt)(l.Z,{value:"withStopwords",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}h.isMDXComponent=!0}}]);