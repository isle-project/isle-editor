(self.webpackChunk=self.webpackChunk||[]).push([[176],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(202784),a=n(180944),i=n(386010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,y=(0,r.useState)(s),g=y[0],h=y[1],k=r.Children.toArray(e.children),x=[];if(null!=m){var w=v[m];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&h(w)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;h(r),null!=m&&(b(m,r),setTimeout((function(){var e,n,r,a,i,o,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,u=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case u:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(202784).createContext)(void 0);t.Z=r},180944:function(e,t,n){"use strict";var r=n(202784),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},50338:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(722122),a=n(419756),i=(n(202784),n(603905)),o=n(541395),l=n(358215),u={id:"p",title:"p",sidebar_label:"p"},c={unversionedId:"html/p",id:"html/p",isDocsHomePage:!1,title:"p",description:"Element akapitu.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/html/p.md",sourceDirName:"html",slug:"/html/p",permalink:"/docs/html/p",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/p.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614806718,formattedLastUpdatedAt:"3.03.2021",sidebar_label:"p",frontMatter:{id:"p",title:"p",sidebar_label:"p"},sidebar:"docs",previous:{title:"hr",permalink:"/docs/html/hr"},next:{title:"pre",permalink:"/docs/html/pre"}},s=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Element akapitu."),(0,i.kt)("h2",{id:"opcje"},"Opcje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With CSS",value:"withCSS"},{label:"Multiple Paragraphs",value:"multipleParagraphs"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n"))),(0,i.kt)(l.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>\n  # Heading First Category\n  ## Heading Second Category\n  ### Heading Third Category\n\n  > A Blockquotoe\n  \n  - Unordered List - First item\n  - Second item\n  - Third item\n\n  This word is **bold** and this one *italic*.\n</p>\n"))),(0,i.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p style= {{ color: 'red', fontFamily: 'Palatino', fontStyle: 'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n"))),(0,i.kt)(l.Z,{value:"multipleParagraphs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p style={{ color: 'darkblue'}}>Multiple Paragraphs</p>\n\n<p style= {{ color: 'red', fontFamily: 'Palatino', fontStyle: 'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n<p>Last Paragraph</p>\n")))))}m.isMDXComponent=!0},386010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);