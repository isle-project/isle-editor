"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4373],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(202784);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(487462),a=t(202784),i=t(972389),l=t(161419),o=t(386010),u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=k[0])?void 0:i.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,a.useState)(v),C=w[0],T=w[1],D=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&T(j)}var x=function(e){var n=e.currentTarget,t=D.indexOf(n),r=b[t].value;r!==C&&(O(n),T(r),null!=m&&N(m,r))},W=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;t=D[r]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;t=D[a]||D[D.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return D.push(e)},onKeyDown:W,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},290002:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return k}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=t(409877),o=t(358215),u=["components"],s={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},d=void 0,c={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Eine Wortwolken-Komponente, die auf [d3-cloud] (https://github.com/jasondavies/d3-cloud) aufbaut.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/de/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"24.2.2021",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/de/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/de/docs/models/decision-tree"}},p={},m=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],f={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eine Wortwolken-Komponente, die auf ","[d3-cloud]"," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"https://github.com/jasondavies/d3-cloud"),") aufbaut."),(0,i.kt)("h2",{id:"optionen"},"Optionen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": entweder ein Array mit Texten, aus denen die Wortwolke erzeugt werden soll, oder, wenn ",(0,i.kt)("inlineCode",{parentName:"li"},"precalculated")," auf ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," gesetzt ist, ein Array mit Wortz\xe4hlungsobjekten (mit den Schl\xfcsseln ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"font")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|function)"),": Accessorfunktion, die die Schriftart f\xfcr jedes Wort angibt. Akzeptiert auch eine Konstante anstelle einer Funktion. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Accessorfunktion, die die Schriftgr\xf6\xdfe f\xfcr jedes Wort angibt. Der Standardwert ist ",(0,i.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0"),", wobei ",(0,i.kt)("inlineCode",{parentName:"li"},"min")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"max")," die minimale bzw. maximale Wortanzahl bezeichnen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": H\xf6he der Wortwolke (in px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"language")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Sprachidentifikator (bestimmt die zu entfernenden Stoppw\xf6rter). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minCount")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": wenn gesetzt, nur W\xf6rter einbeziehen, die mehr als ",(0,i.kt)("inlineCode",{parentName:"li"},"minCount")," Mal in den angegebenen Daten vorkommen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob eine Schaltfl\xe4che zum Speichern der Wortwolke als Bild angezeigt werden soll. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn ein Wort in der Wortwolke angeklickt wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"padding")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(function|number)"),": Accessorfunktion oder Konstante, die das numerische Padding f\xfcr jedes Wort angibt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Wortwolke ein Array mit vorberechneten Wortzahlen erwartet oder diese f\xfcr gegebene Texte generiert. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rotate")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(function|number)"),": Accessorfunktion, die den Drehwinkel (in Grad) f\xfcr jedes Wort angibt. Akzeptiert auch eine Konstante anstelle einer Funktion. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Stapelgr\xf6\xdfe der neuen Dokumente in ",(0,i.kt)("inlineCode",{parentName:"li"},"Daten"),", bevor die Wortwolke neu gerendert wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": zus\xe4tzliche Stoppw\xf6rter, die vor dem Rendern der Wortwolke entfernt werden sollen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": erneut wiedergeben, wenn der Datensatz ausgetauscht wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Breite der Wortwolke (in px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,i.kt)(o.Z,{value:"withStopwords",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}k.isMDXComponent=!0}}]);