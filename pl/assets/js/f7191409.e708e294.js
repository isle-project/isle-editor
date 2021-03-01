(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{308:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(411)),o=t(460),l=t(461),c={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},s={unversionedId:"word-cloud",id:"word-cloud",isDocsHomePage:!1,title:"Word Cloud",description:"Komponent s\u0142owny chmury zbudowany na szczycie d3-cloud.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/word-cloud.md",slug:"/word-cloud",permalink:"/pl/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,sidebar_label:"Word Cloud",sidebar:"docs",previous:{title:"Violin Plot",permalink:"/pl/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/pl/docs/models/decision-tree"}},b=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:b};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponent s\u0142owny chmury zbudowany na szczycie ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud"),"."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": albo tablic\u0119 tekst\xf3w, z kt\xf3rej mo\u017cna wygenerowa\u0107 chmur\u0119 s\u0142\xf3w lub, je\u015bli ",Object(i.b)("inlineCode",{parentName:"li"},"prekalkulowane")," jest ustawione na ",Object(i.b)("inlineCode",{parentName:"li"},"prawdziwe"),", oraz tablic\u0119 obiekt\xf3w zliczaj\u0105cych s\u0142owa (z klawiszami ",Object(i.b)("inlineCode",{parentName:"li"},"tekstowymi")," i ",Object(i.b)("inlineCode",{parentName:"li"},"warto\u015bciowymi"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"font")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|function)"),": funkcja dost\u0119powa okre\u015blaj\u0105ca oblicze czcionki dla ka\u017cdego s\u0142owa. Przyjmuje r\xf3wnie\u017c sta\u0142\u0105 zamiast funkcji. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'serif'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fontSizeMapper")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": funkcja dost\u0119powa wskazuj\u0105ca rozmiar czcionki dla ka\u017cdego s\u0142owa. Domy\u015blnie ",Object(i.b)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0"),", gdzie ",Object(i.b)("inlineCode",{parentName:"li"},"min")," i ",Object(i.b)("inlineCode",{parentName:"li"},"max")," oznaczaj\u0105 odpowiednio minimalny i maksymalny wyraz ",Object(i.b)("inlineCode",{parentName:"li"},"counts"),".. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),': wysoko\u015b\u0107 s\u0142owa "chmura" (w px). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"language")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": identyfikator j\u0119zyka (okre\u015bla stopery, kt\xf3re maj\u0105 by\u0107 usuni\u0119te). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'en'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minCount")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": je\u015bli jest ustawiony, zawiera tylko te s\u0142owa, kt\xf3re pojawiaj\u0105 si\u0119 wi\u0119cej ni\u017c ",Object(i.b)("inlineCode",{parentName:"li"},"minCount")," razy w podanych danych. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"saveButton")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy ma by\u0107 wy\u015bwietlany przycisk do zapisywania chmury s\u0142\xf3w jako obrazu. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana po klikni\u0119ciu s\u0142owa na chmurze s\u0142\xf3w. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"padding")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(function|number)"),": funkcja dost\u0119powa lub sta\u0142a wskazuj\u0105ca numeryczne wype\u0142nienie dla ka\u017cdego s\u0142owa. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"precalculated")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy chmura s\u0142\xf3w oczekuje tablicy wst\u0119pnie obliczonych zlicze\u0144 s\u0142\xf3w, czy te\u017c wygeneruje je dla danych tekst\xf3w. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rotate")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(function|number)"),": funkcja dost\u0119powa wskazuj\u0105ca k\u0105t obrotu (w stopniach) dla ka\u017cdego s\u0142owa. Przyjmuje r\xf3wnie\u017c sta\u0142\u0105 zamiast funkcji. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"updateThreshold")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": wielko\u015b\u0107 partii nowych dokument\xf3w w ",Object(i.b)("inlineCode",{parentName:"li"},"danych")," przed ponownym odes\u0142aniem chmury s\u0142ownej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"stopwords")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": dodatkowe stopery do usuni\u0119cia przed renderowaniem chmury s\u0142\xf3w. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"triggerRender")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": umorzenie podczas wymiany zestawu danych. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": szeroko\u015b\u0107 s\u0142owa chmura (w px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"700"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),Object(i.b)(l.a,{value:"withStyle",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),Object(i.b)(l.a,{value:"withStopwords",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}d.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},445:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},458:function(e,n,t){"use strict";var a=t(0),r=t(459);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},460:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(458),o=t(445),l=t(58),c=t.n(l);const s=37,b=39;n.a=function(e){const{lazy:n,block:t,defaultValue:l,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[j,y]=Object(a.useState)(l),O=a.Children.toArray(e.children),w=[];if(null!=d){const e=m[d];null!=e&&e!==j&&u.some((n=>n.value===e))&&y(e)}const g=e=>{const n=e.target,t=w.indexOf(n),a=O[t].props.value;y(a),null!=d&&f(d,a)},h=e=>{var n;let t;switch(e.keyCode){case b:const n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case s:const a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},u.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>w.push(e),onKeyDown:h,onFocus:g,onClick:g},n)))),n?Object(a.cloneElement)(O.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}},461:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function({children:e,hidden:n,className:t}){return r.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}}}]);