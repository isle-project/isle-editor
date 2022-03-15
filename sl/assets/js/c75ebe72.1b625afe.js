"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9872],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(202784);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(487462),r=t(202784),i=t(972389),o=t(161419),l=t(386010),s="tabItem_LplD";function u(e){var n,t,i,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,j=(0,r.useState)(g),C=j[0],w=j[1],T=[],z=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=N[m];null!=O&&O!==C&&v.some((function(e){return e.value===O}))&&w(O)}var x=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==C&&(z(n),w(a),null!=m&&y(m,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},506627:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return f}});var a=t(487462),r=t(263366),i=(t(202784),t(603905)),o=t(409877),l=t(358215),s=["components"],u={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},d=void 0,p={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Komponenta oblaka besed, zgrajena na podlagi d3-cloud.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/sl/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/sl/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/sl/docs/models/decision-tree"}},c={},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Primeri",id:"primeri",level:2}],k={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponenta oblaka besed, zgrajena na podlagi ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud"),"."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": bodisi polje besedil, iz katerih se ustvari besedni oblak, ali, \u010de je ",(0,i.kt)("inlineCode",{parentName:"li"},"precalculated")," nastavljeno na ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", polje objektov za \u0161tetje besed (s klju\u010dema ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"font")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|function)"),": funkcijo dostopa, ki dolo\u010da obraz pisave za vsako besedo. Namesto funkcije sprejme tudi konstanto. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": funkcijo dostopa, ki dolo\u010da velikost pisave za vsako besedo. Privzeta vrednost je ",(0,i.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 12,0"),", kjer ",(0,i.kt)("inlineCode",{parentName:"li"},"min")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"max")," ozna\u010dujeta najmanj\u0161e oziroma najve\u010dje \u0161tevilo besed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": vi\u0161ina oblaka besed (v px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"language")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": identifikator jezika (dolo\u010da stopice, ki jih je treba odstraniti).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minCount")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u010de je nastavljeno, vklju\u010di samo besede, ki se v danih podatkih pojavijo ve\u010d kot ",(0,i.kt)("inlineCode",{parentName:"li"},"minCount")," krat. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali naj se prika\u017ee gumb za shranjevanje oblaka besed kot slike.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": funkcija povratne zveze, ki se spro\u017ei ob kliku na besedo v oblaku besed.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"padding")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(function|number)"),": dostopna funkcija ali konstanta, ki ozna\u010duje \u0161tevil\u010dno podlogo za vsako besedo.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali besedni oblak pri\u010dakuje polje vnaprej izra\u010dunanih \u0161tevil besed ali jih bo ustvaril za dana besedila.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rotate")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(function|number)"),": dostopna funkcija, ki za vsako besedo navaja kot vrtenja (v stopinjah). Namesto funkcije sprejme tudi konstanto. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": velikost serije novih dokumentov v ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," pred ponovnim prikazom oblaka besed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": dodatne stopice, ki jih je treba odstraniti pred prikazom oblaka besed.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ponovni prikaz ob izmenjavi niza podatkov.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slogi CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u0161irina oblaka besed (v px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,i.kt)("h2",{id:"primeri"},"Primeri"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,i.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,i.kt)(l.Z,{value:"withStopwords",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}f.isMDXComponent=!0}}]);