(self.webpackChunk=self.webpackChunk||[]).push([[314],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=i(),v=f.tabGroupChoices,k=f.setTabGroupChoices,b=(0,a.useState)(r),h=b[0],y=b[1],g=a.Children.toArray(e.children),N=[];if(null!=d){var C=v[d];null!=C&&C!==h&&c.some((function(e){return e.value===C}))&&y(C)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;y(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,r,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},66123:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var a=n(722122),r=n(419756),i=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],s={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},p=void 0,c={unversionedId:"dashboard",id:"dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Ovl\xe1dac\xed panel pro kombinaci zpracov\xe1n\xed v\xedce pod\u0159\xedzen\xfdch vstupn\xedch pol\xed.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/cs/docs/dashboard",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2. 8. 2021",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/cs/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/cs/docs/data-sampler"}},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ovl\xe1dac\xed panel pro kombinaci zpracov\xe1n\xed v\xedce pod\u0159\xedzen\xfdch vstupn\xedch pol\xed."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": pokud je nastaveno na ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", funkce ",(0,i.kt)("inlineCode",{parentName:"li"},"onGenerate")," se p\u0159i spu\u0161t\u011bn\xed spust\xed s v\xfdchoz\xedmi vstupn\xedmi hodnotami.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se m\xe1 funkce ",(0,i.kt)("inlineCode",{parentName:"li"},"onGenerate")," vyvolat automaticky, kdy\u017e se zm\u011bn\xed jedno z pod\u0159\xedzen\xfdch vstupn\xedch pol\xed.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": popis p\u0159\xedstrojov\xe9 desky. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda m\xe1 b\xfdt p\u0159\xedstrojov\xe1 deska vypnuta. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"label")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u0161t\xedtek tla\u010d\xedtka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed \u0161\xed\u0159ka p\u0159\xedstrojov\xe9 desky. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev t\u0159\xeddy. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": funkce vyvolan\xe1 p\u0159i kliknut\xed na tla\u010d\xedtko nebo p\u0159i zm\u011bn\u011b jedn\xe9 ze vstupn\xedch hodnot panelu (pokud je ",(0,i.kt)("inlineCode",{parentName:"li"},"autoUpdate")," nastaveno na ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"). Funkce je vol\xe1na s hodnotami vstupn\xedch pol\xed v po\u0159ad\xed, v jak\xe9m jsou um\xedst\u011bny na panelu.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": n\xe1zev karty. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,i.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,i.kt)(o.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);