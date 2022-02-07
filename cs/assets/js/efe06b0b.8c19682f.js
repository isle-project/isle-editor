"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1873],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(487462),r=t(202784),l=t(972389),o=t(275773),i=t(386010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),g=h.tabGroupChoices,N=h.setTabGroupChoices,C=(0,r.useState)(y),w=C[0],j=C[1],T=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=g[m];null!=O&&O!==w&&v.some((function(e){return e.value===O}))&&j(O)}var D=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==w&&(x(n),j(a),null!=m&&N(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function p(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},157607:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),o=t(409877),i=t(358215),u=["components"],s={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},p=void 0,d={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Komponenta mraku slov postaven\xe1 nad d3-cloud.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/cs/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/cs/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/cs/docs/models/decision-tree"}},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[],level:2}],m={toc:c};function k(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Komponenta mraku slov postaven\xe1 nad ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud"),"."),(0,l.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": bu\u010f pole text\u016f, ze kter\xfdch se generuje mra\u010dno slov, nebo, pokud je ",(0,l.kt)("inlineCode",{parentName:"li"},"precalculated")," nastaveno na ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", pole objekt\u016f s po\u010dtem slov (s kl\xed\u010di ",(0,l.kt)("inlineCode",{parentName:"li"},"text")," a ",(0,l.kt)("inlineCode",{parentName:"li"},"value"),").. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"font")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|function)"),": p\u0159\xedstupov\xe1 funkce, kter\xe1 ur\u010duje tv\xe1\u0159 p\xedsma pro ka\u017ed\xe9 slovo. M\xedsto funkce p\u0159ij\xedm\xe1 tak\xe9 konstantu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": p\u0159\xedstupov\xe1 funkce, kter\xe1 ud\xe1v\xe1 velikost p\xedsma pro ka\u017ed\xe9 slovo. V\xfdchoz\xed hodnota je ",(0,l.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 12,0"),", kde ",(0,l.kt)("inlineCode",{parentName:"li"},"min")," a ",(0,l.kt)("inlineCode",{parentName:"li"},"max")," ozna\u010duj\xed minim\xe1ln\xed a maxim\xe1ln\xed po\u010det slov.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": v\xfd\u0161ka mraku slov (v px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"language")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": identifik\xe1tor jazyka (ur\u010duje stopslova, kter\xe1 maj\xed b\xfdt odstran\u011bna).. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minCount")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": pokud je nastaveno, zahrne pouze slova, kter\xe1 se v dan\xfdch datech vyskytuj\xed v\xedce ne\u017e ",(0,l.kt)("inlineCode",{parentName:"li"},"minCount"),".. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se m\xe1 zobrazit tla\u010d\xedtko pro ulo\u017een\xed mra\u010dna slov jako obr\xe1zku.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkce zp\u011btn\xe9ho vol\xe1n\xed vyvolan\xe1 po kliknut\xed na slovo v mra\u010dnu slov.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"padding")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(function|number)"),": p\u0159\xedstupov\xe1 funkce nebo konstanta ud\xe1vaj\xedc\xed \u010d\xedselnou v\xfdpl\u0148 pro ka\u017ed\xe9 slovo.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda mra\u010dno slov o\u010dek\xe1v\xe1 pole p\u0159edpo\u010d\xedtan\xfdch po\u010dt\u016f slov, nebo zda je bude generovat pro zadan\xe9 texty.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rotate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(function|number)"),": p\u0159\xedstupov\xe1 funkce ud\xe1vaj\xedc\xed \xfahel nato\u010den\xed (ve stupn\xedch) pro ka\u017ed\xe9 slovo. M\xedsto funkce p\u0159ij\xedm\xe1 tak\xe9 konstantu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": velikost d\xe1vky nov\xfdch dokument\u016f v ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," p\u0159ed op\u011btovn\xfdm vykreslen\xedm mra\u010dna slov.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": dal\u0161\xed stopslova, kter\xe1 se odstran\xed p\u0159ed vykreslen\xedm mra\u010dna slov.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": znovu vykreslit p\u0159i v\xfdm\u011bn\u011b datov\xe9 sady.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xed\u0159ka mra\u010dna slov (v px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,l.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,l.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,l.kt)(i.Z,{value:"withStopwords",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}k.isMDXComponent=!0}}]);