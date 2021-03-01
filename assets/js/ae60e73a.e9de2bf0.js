(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(411)),i=n(460),l=n(461),c={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},s={unversionedId:"word-cloud",id:"word-cloud",isDocsHomePage:!1,title:"Word Cloud",description:"A word cloud component built on top of d3-cloud.",source:"@site/docs/word-cloud.md",slug:"/word-cloud",permalink:"/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,sidebar_label:"Word Cloud",sidebar:"docs",previous:{title:"Violin Plot",permalink:"/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/docs/models/decision-tree"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A word cloud component built on top of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud"),"."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": either an array of texts from which to generate the word cloud or, if ",Object(o.b)("inlineCode",{parentName:"li"},"precalculated")," is set to ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", and array of word count objects (with ",Object(o.b)("inlineCode",{parentName:"li"},"text")," and ",Object(o.b)("inlineCode",{parentName:"li"},"value")," keys). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"font")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|function)"),": accessor function specifying the font face for each word. Also accepts a constant instead of a function. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'serif'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"fontSizeMapper")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": accessor function indicating the font size for each word. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0"),", where ",Object(o.b)("inlineCode",{parentName:"li"},"min")," and ",Object(o.b)("inlineCode",{parentName:"li"},"max")," denote the minimum and maximum word ",Object(o.b)("inlineCode",{parentName:"li"},"counts"),", respectively. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": height of the word cloud (in px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"600"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"language")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": language identifier (determines the stopwords to be removed). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'en'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"minCount")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": if set, only include words that appear more than ",Object(o.b)("inlineCode",{parentName:"li"},"minCount")," times in the given data. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"saveButton")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display a button for saving the word cloud as an image. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onClick")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked when a word on the word cloud is clicked. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"padding")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(function|number)"),": accessor function or constant indicating the numerical padding for each word. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precalculated")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the word cloud expects an array of precalculated word counts or will generate them for given texts. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotate")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(function|number)"),": accessor function indicating the rotation angle (in degrees) for each word. Also accepts a constant instead of a function. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"updateThreshold")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": batch size of new documents in ",Object(o.b)("inlineCode",{parentName:"li"},"data")," before the word cloud is re-rendered. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"stopwords")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": additional stopwords to remove before rendering the word cloud. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"triggerRender")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": rerender when the data set is exchanged. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": width of the word cloud (in px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"700"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),Object(o.b)(l.a,{value:"withStyle",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),Object(o.b)(l.a,{value:"withStopwords",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},458:function(e,t,n){"use strict";var a=n(0),r=n(459);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},460:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(458),i=n(445),l=n(58),c=n.n(l);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:u,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[O,j]=Object(a.useState)(l),h=a.Children.toArray(e.children),g=[];if(null!=u){const e=m[u];null!=e&&e!==O&&d.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=h[n].props.value;j(a),null!=u&&f(u,a)},N=e=>{var t;let n;switch(e.keyCode){case b:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case s:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);