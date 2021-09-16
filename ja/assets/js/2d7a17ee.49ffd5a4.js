"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5809],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,i=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=r(),N=g.tabGroupChoices,h=g.setTabGroupChoices,v=(0,a.useState)(k),b=v[0],C=v[1],y=[];if(null!=p){var w=N[p];null!=w&&w!==b&&f.some((function(e){return e.value===w}))&&C(w)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),a=f[n].value;C(a),null!=p&&(h(p,a),setTimeout((function(){var e,n,a,i,r,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:P,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},383062:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return g}});var a,i=n(487462),r=n(263366),l=(n(202784),n(603905)),o=n(855064),s=n(358215),u=["components"],c={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},p=void 0,m={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",isDocsHomePage:!1,title:"Select Question Matrix",description:"\u8907\u6570\u306e\u30bb\u30ec\u30af\u30c8\u30dc\u30c3\u30af\u30b9\u3067\u69cb\u6210\u3055\u308c\u305f\u56de\u7b54\u4ed8\u304d\u306e\u554f\u984c\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/select-matrix.md",sourceDirName:"questions",slug:"/questions/select-question-matrix",permalink:"/ja/docs/questions/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1628088729,formattedLastUpdatedAt:"2021/8/4",frontMatter:{id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},sidebar:"docs",previous:{title:"Select Question",permalink:"/ja/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/ja/docs/free-text-survey"}},d=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",children:[]}],f=(a="Panel",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),k={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8907\u6570\u306e\u30bb\u30ec\u30af\u30c8\u30dc\u30c3\u30af\u30b9\u3067\u69cb\u6210\u3055\u308c\u305f\u56de\u7b54\u4ed8\u304d\u306e\u554f\u984c\u3002"),(0,l.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u5192\u982d\u306b\u8868\u793a\u3055\u308c\u308b\u8cea\u554f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rows")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": \u884c\u30e9\u30d9\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cols")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": \u5217\u30e9\u30d9\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"options")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"row:col")," \u306e\u5f62\u5f0f\u3092\u6301\u3064\u30ad\u30fc\u3068\u5024\u306e\u30da\u30a2\u3001\u4f8b\u3048\u3070 ",(0,l.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1:0")," \u306a\u3069\u3092\u6301\u3061\u3001\u5bfe\u5fdc\u3059\u308b\u5024\u306f\u500b\u3005\u306e\u9078\u629e\u554f\u984c\u306e\u89e3\u7b54\u9078\u629e\u80a2\u306e\u914d\u5217\u3067\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u89e3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"row:col")," \u306e\u5f62\u5f0f\u3092\u6301\u3064\u30ad\u30fc\u3068\u5024\u306e\u30da\u30a2\u3001\u4f8b\u3048\u3070 ",(0,l.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1:0")," \u306a\u3069\u3092\u6301\u3061\u3001\u5bfe\u5fdc\u3059\u308b\u5024\u306f\u305d\u308c\u305e\u308c\u306e ",(0,l.kt)("inlineCode",{parentName:"li"},"options")," \u914d\u5217\u306e\u6b63\u89e3\u8981\u7d20\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3068\u306a\u308a\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u89e3\u7b54\u306e\u30d2\u30f3\u30c8. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u30d2\u30f3\u30c8\u306e\u914d\u7f6e (",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u5168\u304f",(0,l.kt)("inlineCode",{parentName:"li"},"\u306a\u3057"),"\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u63d0\u4f9b\u3059\u308b\u304b\u3001\u63d0\u51fa\u3055\u308c\u305f\u56de\u7b54\u306b\u5bfe\u3059\u308b",(0,l.kt)("inlineCode",{parentName:"li"},"\u500b\u5225"),"\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u63d0\u4f9b\u3059\u308b\u304b\u3001\u307e\u305f\u306f\u3059\u3079\u3066\u306e\u8cea\u554f\u306b\u5bfe\u3059\u308b",(0,l.kt)("inlineCode",{parentName:"li"},"\u5168\u4f53"),"\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u63d0\u4f9b\u3059\u308b\u304b\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"allowIncomplete")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u5404\u30bb\u30ec\u30af\u30c8\u30dc\u30c3\u30af\u30b9\u3067\u9078\u629e\u305b\u305a\u306b\u6295\u7a3f\u3092\u8a31\u53ef\u3059\u308b\u304b\u3069\u3046\u304b. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nTries")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u4f55\u56de\u8a66\u884c\u3057\u3066\u3082\u305d\u308c\u4ee5\u4e0a\u306e\u56de\u7b54\u306f\u53d7\u3051\u4ed8\u3051\u307e\u305b\u3093 ( ",(0,l.kt)("inlineCode",{parentName:"li"},"provideFeedback")," \u304c ",(0,l.kt)("inlineCode",{parentName:"li"},"none")," \u3067\u306a\u3044\u5834\u5408). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u8aa4\u7b54\u901a\u77e5. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u51fa\u984c\u901a\u77e5\u6587. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cellLabels")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u30ad\u30fc\u304c ",(0,l.kt)("inlineCode",{parentName:"li"},"row:col")," \u306e\u5f62\u5f0f\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30bb\u30eb\u306e\u30e9\u30d9\u30eb\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8981\u7d20\u304c\u7d71\u5408\u3055\u308c\u305f\u30c1\u30e3\u30c3\u30c8\u3092\u6301\u3064\u3079\u304d\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"panelProps")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u5916\u5074\u306e",(0,l.kt)(f,{mdxType:"Panel"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3055\u308c\u308b\u8ffd\u52a0\u30d7\u30ed\u30d1\u30c6\u30a3. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u30af\u30e9\u30b9\u540d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u306f\u3001\u7b2c\u4e00\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u7b54\u3048\u3092\u3001\u7b2c\u4e8c\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u6b63\u3057\u3055\u3092\u793a\u3059\u30d6\u30fc\u30eb\u5024\u3092\u6307\u5b9a\u3057\u3066\u3001\u63d0\u51fa\u6642\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"Feedback Messages",value:"feedbackMessages"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,l.kt)(s.Z,{value:"withHints",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n  question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n    hints={[\n        'His father Johann Sebastian was a famous composer too',\n        'He was famous for his FAUST - so definitely an author',\n        'Poussin was an 18th century painter',\n        'Courbet was a realistic painter'\n    ]}\n/>\n"))),(0,l.kt)(s.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    style={{ \n        fontFamily: 'Georgia',\n        fontSize: 22, \n        textShadow: '0 0  10px white',\n        background: 'rgb(251,213,112)',\n        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'\n    }}\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,l.kt)(s.Z,{value:"feedbackMessages",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    failureMsg=\"Sorry, that was wrong.\" \n    successMsg =\"Wow! Congratulations, you are a specialist!\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n")))))}g.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);