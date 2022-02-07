"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4291],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,f=c["".concat(s,".").concat(p)]||c[p]||d[p]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(487462),r=n(202784),l=n(972389),o=n(275773),i=n(386010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,m=e.block,d=e.defaultValue,c=e.values,p=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,z=(0,r.useState)(b),C=z[0],w=z[1],j=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=y[p];null!=O&&O!==C&&g.some((function(e){return e.value===O}))&&w(O)}var x=function(e){var t=e.currentTarget,n=j.indexOf(t),a=g[n].value;a!==C&&(T(t),w(a),null!=p&&N(p,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},43182:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),o=n(409877),i=n(358215),s=["components"],u={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},m=void 0,d={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"A d3-cloud tetej\xe9re \xe9p\xfcl\u0151 sz\xf3felh\u0151 komponens.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/hu/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/hu/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/hu/docs/models/decision-tree"}},c=[{value:"Opci\xf3k",id:"opci\xf3k",children:[],level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[],level:2}],p={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud")," tetej\xe9re \xe9p\xfcl\u0151 sz\xf3felh\u0151 komponens."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": vagy sz\xf6vegek t\xf6mbje, amelyekb\u0151l a sz\xf3felh\u0151t gener\xe1lni kell, vagy, ha az ",(0,l.kt)("inlineCode",{parentName:"li"},"precalculated")," \xe9rt\xe9ke ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", \xe9s sz\xf3sz\xe1m objektumok t\xf6mbje (a ",(0,l.kt)("inlineCode",{parentName:"li"},"text")," \xe9s ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," kulcsokkal).. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"font")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|function)"),": accessor f\xfcggv\xe9ny, amely meghat\xe1rozza az egyes szavak bet\u0171t\xedpus\xe1t. F\xfcggv\xe9ny helyett konstansot is elfogad. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": accessor f\xfcggv\xe9ny, amely minden sz\xf3hoz megadja a bet\u0171m\xe9retet. Alap\xe9rtelmezett \xe9rt\xe9ke ",(0,l.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0"),", ahol ",(0,l.kt)("inlineCode",{parentName:"li"},"min")," \xe9s ",(0,l.kt)("inlineCode",{parentName:"li"},"max")," a minim\xe1lis \xe9s maxim\xe1lis sz\xf3sz\xe1mot jel\xf6li.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": a sz\xf3felh\u0151 magass\xe1ga (px-ben). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"language")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": nyelvi azonos\xedt\xf3 (meghat\xe1rozza az elt\xe1vol\xedtand\xf3 z\xe1r\xf3szavakat). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minCount")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),': ha be van \xe1ll\xedtva, csak azokat a szavakat tartalmazza, amelyek t\xf6bbsz\xf6r fordulnak el\u0151 a megadott adatokban, mint a "minCount".. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e egy gomb a sz\xf3felh\u0151 k\xe9pk\xe9nt t\xf6rt\xe9n\u0151 ment\xe9s\xe9hez.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amely akkor h\xedv\xf3dik el\u0151, ha egy sz\xf3ra kattintanak a sz\xf3felh\u0151ben.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"padding")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(function|number)"),": hozz\xe1f\xe9r\xe9si f\xfcggv\xe9ny vagy konstans, amely az egyes szavak numerikus kit\xf6lt\xe9s\xe9t jelzi. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a sz\xf3felh\u0151 az el\u0151re kisz\xe1m\xedtott sz\xf3sz\xe1mok t\xf6mbj\xe9t v\xe1rja-e, vagy a megadott sz\xf6vegekhez gener\xe1lja azokat.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rotate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(function|number)"),": accessor f\xfcggv\xe9ny, amely minden sz\xf3hoz megadja a forgat\xe1si sz\xf6get (fokban). A f\xfcggv\xe9ny helyett konstansot is elfogad. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),': az \xfaj dokumentumok k\xf6tegelt m\xe9rete az "adatokban", miel\u0151tt a sz\xf3felh\u0151 \xfajra renderel\xe9sre ker\xfclne.. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": a sz\xf3felh\u0151 megjelen\xedt\xe9se el\u0151tt elt\xe1vol\xedtand\xf3 tov\xe1bbi z\xe1r\xf3szavak. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \xfajraszerkeszt\xe9s az adathalmaz cser\xe9jekor. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": a sz\xf3felh\u0151 sz\xe9less\xe9ge (px-ben). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,l.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,l.kt)(i.Z,{value:"withStopwords",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}f.isMDXComponent=!0}}]);