(self.webpackChunk=self.webpackChunk||[]).push([[3219],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(202784),i=n(180944),a=n(386010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,s=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=(0,i.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,r.useState)(c),h=g[0],y=g[1],k=r.Children.toArray(e.children),x=[];if(null!=p){var w=v[p];null!=w&&w!==h&&m.some((function(e){return e.value===w}))&&y(w)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),r=m[n].value;y(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,i,a,o,u,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,u=o.innerHeight,s=o.innerWidth,n>=0&&a<=s&&i<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case s:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case u:var i=x.indexOf(e.target)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(202784).createContext)(void 0);t.Z=r},180944:function(e,t,n){"use strict";var r=n(202784),i=n(79443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},86841:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o=n(541395),l=n(358215),u={id:"p",title:"p",sidebar_label:"p"},s={unversionedId:"html/p",id:"html/p",isDocsHomePage:!1,title:"p",description:"Element odstavka.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/html/p.md",sourceDirName:"html",slug:"/html/p",permalink:"/docs/html/p",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/p.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",sidebar_label:"p",frontMatter:{id:"p",title:"p",sidebar_label:"p"},sidebar:"docs",previous:{title:"hr",permalink:"/docs/html/hr"},next:{title:"pre",permalink:"/docs/html/pre"}},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Primeri",id:"primeri",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Element odstavka."),(0,a.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ime razreda. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slogi CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"primeri"},"Primeri"),(0,a.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With CSS",value:"withCSS"},{label:"Multiple Paragraphs",value:"multipleParagraphs"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n"))),(0,a.kt)(l.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>\n  # Heading First Category\n  ## Heading Second Category\n  ### Heading Third Category\n\n  > A Blockquotoe\n  \n  - Unordered List - First item\n  - Second item\n  - Third item\n\n  This word is **bold** and this one *italic*.\n</p>\n"))),(0,a.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p style= {{ color: 'red', fontFamily: 'Palatino', fontStyle: 'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n"))),(0,a.kt)(l.Z,{value:"multipleParagraphs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p style={{ color: 'darkblue'}}>Multiple Paragraphs</p>\n\n<p style= {{ color: 'red', fontFamily: 'Palatino', fontStyle: 'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n<p>Last Paragraph</p>\n")))))}p.isMDXComponent=!0},386010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);