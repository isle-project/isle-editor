"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3942],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,m=e.values,c=e.groupId,p=e.className,d=r.Children.toArray(e.children),f=null!=m?m:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),N=b.tabGroupChoices,v=b.setTabGroupChoices,g=(0,r.useState)(k),h=g[0],y=g[1],C=[];if(null!=c){var O=N[c];null!=O&&O!==h&&f.some((function(e){return e.value===O}))&&y(O)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;y(r),null!=c&&(v(c,r),setTimeout((function(){var e,n,r,a,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:D,onClick:D},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},165774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],s={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},m=void 0,c={unversionedId:"questions/order-question",id:"questions/order-question",isDocsHomePage:!1,title:"Order Question",description:"\u751f\u5f92\u306b\u8981\u7d20\u306e\u96c6\u5408\u4f53\u3092\u6b63\u3057\u3044\u9806\u5e8f\u306b\u6301\u3063\u3066\u304f\u308b\u3088\u3046\u306b\u6c42\u3081\u308b\u9806\u5e8f\u554f\u984c\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/order.md",sourceDirName:"questions",slug:"/questions/order-question",permalink:"/ja/docs/questions/order-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",frontMatter:{id:"order-question",title:"Order Question",sidebar_label:"Order Question"},sidebar:"docs",previous:{title:"Number Question",permalink:"/ja/docs/questions/number-question"},next:{title:"Question Form",permalink:"/ja/docs/questions/question-form"}},p=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u751f\u5f92\u306b\u8981\u7d20\u306e\u96c6\u5408\u4f53\u3092\u6b63\u3057\u3044\u9806\u5e8f\u306b\u6301\u3063\u3066\u304f\u308b\u3088\u3046\u306b\u6c42\u3081\u308b\u9806\u5e8f\u554f\u984c\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u629e\u4e00\u554f\u984c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": \u5e8f\u5217\u3092\u6b63\u3059. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u63d0\u51fa\u3055\u308c\u305f\u7b54\u3048\u304c\u6b63\u3057\u3044\u304b\u3069\u3046\u304b\u3092\u8868\u793a\u3059\u308b\u901a\u77e5\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u30d2\u30f3\u30c8\u306e\u914d\u7f6e (",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u89e3\u7b54\u306e\u30d2\u30f3\u30c8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8981\u7d20\u304c\u7d71\u5408\u3055\u308c\u305f\u30c1\u30e3\u30c3\u30c8\u3092\u6301\u3064\u3079\u304d\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u5b66\u751f\u304c\u9593\u9055\u3063\u305f\u7b54\u3048\u3092\u63d0\u51fa\u3057\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u5b66\u751f\u304c\u6b63\u89e3\u3092\u63d0\u51fa\u3057\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u6295\u7a3f\u901a\u77e5\u3092\u7121\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": \u5b66\u751f\u304c\u56de\u7b54\u3092\u63d0\u51fa\u3059\u308b\u307e\u3067\u306e\u6642\u9593. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u63a1\u70b9\u70b9\u6570. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u3053\u308c\u306f\u8981\u7d20\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u305f\u5f8c\u306b\u30c8\u30ea\u30ac\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u30012\u3064\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6301\u3061\u307e\u3059: \u8981\u7d20\u304c\u6b63\u3057\u3044\u9806\u5e8f\u3067\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3059 ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," \u3068\u3001\u73fe\u5728\u306e\u9806\u5e8f\u3092\u793a\u3059 ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," \u3067\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u56de\u7b54\u304c\u63d0\u51fa\u3055\u308c\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af; \u552f\u4e00\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u3001\u8981\u7d20\u304c\u6b63\u3057\u3044\u9806\u5e8f\u3067\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3059 ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," \u3092\u6301\u3061\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),(0,i.kt)(o.Z,{value:"hints",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),(0,i.kt)(o.Z,{value:"submitFunction",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),(0,i.kt)(o.Z,{value:"withGradingAndFeedback",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);