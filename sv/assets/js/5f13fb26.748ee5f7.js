(self.webpackChunk=self.webpackChunk||[]).push([[7538],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,v=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(202784),a=n(180944),i=n(386010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,c=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,m=e.groupId,p=e.className,v=(0,a.Z)(),f=v.tabGroupChoices,h=v.setTabGroupChoices,b=(0,r.useState)(s),g=b[0],y=b[1],k=r.Children.toArray(e.children),x=[];if(null!=m){var T=f[m];null!=T&&T!==g&&d.some((function(e){return e.value===T}))&&y(T)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),r=d[n].value;y(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,a,i,l,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,u=l.innerHeight,c=l.innerWidth,n>=0&&i<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case u:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(202784).createContext)(void 0);t.Z=r},180944:function(e,t,n){"use strict";var r=n(202784),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},68437:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(722122),a=n(419756),i=(n(202784),n(603905)),l=n(541395),o=n(358215),u={id:"div",title:"div",sidebar_label:"div"},c={unversionedId:"html/div",id:"html/div",isDocsHomePage:!1,title:"div",description:"Generiskt beh\xe5llarelement.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/html/div.md",sourceDirName:"html",slug:"/html/div",permalink:"/docs/html/div",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/div.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",sidebar_label:"div",frontMatter:{id:"div",title:"div",sidebar_label:"div"},sidebar:"docs",previous:{title:"blockquote",permalink:"/docs/html/blockquote"},next:{title:"hr",permalink:"/docs/html/hr"}},s=[{value:"Alternativ",id:"alternativ",children:[]},{value:"Exempel",id:"exempel",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Generiskt beh\xe5llarelement."),(0,i.kt)("h2",{id:"alternativ"},"Alternativ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": klassens namn. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stilar inline. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"exempel"},"Exempel"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Regular HTML",value:"regularHTML"},{label:"With Markdown",value:"withMarkdown"},{label:"With CSS",value:"withCSS"},{label:"Embedded Component",value:"embeddedISLE"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n    Use a div as a generic container for other content.\n</div>\n"))),(0,i.kt)(o.Z,{value:"regularHTML",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),(0,i.kt)(o.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n  1. Ordered List - First item\n  2. Second item\n  3. Third item\n  `var a = 77;`\n  `this is a line of code;`  \n  \n  [Link to Google](https://www.google.com)\n  ![The alternate text if you hover over the image](https://bit.ly/2MGl7K0)\n</div>\n"))),(0,i.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ color: 'darkred', background: 'lightblue', padding: '6px'}}>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),(0,i.kt)(o.Z,{value:"embeddedISLE",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ padding: '6px'}}>\n    <h3>Embedded ISLE Component</h3>\n    <hr />\n    <p>Plus - you can embed any ISLE component in here, like this R-Shell</p>\n    <hr />\n    <RShell code=\"abs(c(-2,3,-1))\" />\n</div>\n")))))}m.isMDXComponent=!0},386010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);