(self.webpackChunk=self.webpackChunk||[]).push([[3062],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=r(),g=f.tabGroupChoices,v=f.setTabGroupChoices,h=(0,a.useState)(i),b=h[0],k=h[1],N=a.Children.toArray(e.children),y=[];if(null!=d){var C=g[d];null!=C&&C!==b&&p.some((function(e){return e.value===C}))&&k(C)}var P=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;k(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,i,r,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&r<=u&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case c:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case u:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:P,onClick:P},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},663515:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(722122),i=n(419756),r=(n(202784),n(603905)),o=n(855064),l=n(358215),s=["components"],u={id:"pages",title:"Pages",sidebar_label:"Pages"},c=void 0,p={unversionedId:"pages",id:"pages",isDocsHomePage:!1,title:"Pages",description:"An ISLE pagination component that allows the user to step through a sequence of pages.",source:"@site/docs/pages.md",sourceDirName:".",slug:"/pages",permalink:"/docs/pages",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/pages.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"8/2/2021",frontMatter:{id:"pages",title:"Pages",sidebar_label:"Pages"},sidebar:"docs",previous:{title:"IFrame",permalink:"/docs/iframe"},next:{title:"Panel",permalink:"/docs/panel"}},d=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An ISLE pagination component that allows the user to step through a sequence of pages."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"activePage")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": active page. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether the navigation bar is active or not. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": displayed title of the pages container. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pagination")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": whether to show the pagination either on the ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"both"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"size")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": size of the pagination buttons (either ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lg"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"sm"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'default'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": the maximum height of the container. If an embedded page is taller, a vertical scrollbar is added. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": voice control identifier. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSelect")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Function invoked when active change is changed. Receives the new active page index as a sole parameter. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSelect() {}"),".")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Pagination",value:"customPagination"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Pages" >\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n'))),(0,r.kt)(l.Z,{value:"customPagination",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Questions" pagination="both" size="sm" >\n    <div>\n        <NumberQuestion\n            question="What is the number PI (at least up to three digits after the decimal point)?"\n            solution={Math.PI}\n            digits={3}\n        />\n    </div>\n    <div>\n        <FreeTextQuestion \n            question="Is this question displayed on the second page?"\n            solution="Yes" \n        />\n    </div>\n</Pages>\n'))),(0,r.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Pages \n    activePage={2}\n    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} \n    title=\"Styled Pages\"\n>\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);