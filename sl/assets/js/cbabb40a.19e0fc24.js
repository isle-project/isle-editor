(self.webpackChunk=self.webpackChunk||[]).push([[1289],{603905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},358215:function(e,t,r){"use strict";var n=r(202784);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},541395:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(202784),a=r(180944),i=r(386010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,s=39;var c=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,d=e.values,m=e.groupId,p=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,h=(0,n.useState)(c),g=h[0],y=h[1],k=n.Children.toArray(e.children),x=[];if(null!=m){var O=v[m];null!=O&&O!==g&&d.some((function(e){return e.value===O}))&&y(O)}var N=function(e){var t=e.currentTarget,r=x.indexOf(t),n=d[r].value;y(n),null!=m&&(b(m,n),setTimeout((function(){var e,r,n,a,i,o,u,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,u=o.innerHeight,s=o.innerWidth,r>=0&&i<=s&&a<=u&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case s:var n=x.indexOf(e.target)+1;r=x[n]||x[0];break;case u:var a=x.indexOf(e.target)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},p)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,r){"use strict";var n=(0,r(202784).createContext)(void 0);t.Z=n},180944:function(e,t,r){"use strict";var n=r(202784),a=r(79443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117591:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(722122),a=r(419756),i=(r(202784),r(603905)),o=r(541395),l=r(358215),u={id:"h6",title:"h6",sidebar_label:"h6"},s={unversionedId:"html/h6",id:"html/h6",isDocsHomePage:!1,title:"h6",description:"Raven 3 Naslov oddelka.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/html/h6.md",sourceDirName:"html",slug:"/html/h6",permalink:"/docs/html/h6",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h6.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",sidebar_label:"h6",frontMatter:{id:"h6",title:"h6",sidebar_label:"h6"},sidebar:"docs",previous:{title:"h5",permalink:"/docs/html/h5"},next:{title:"Free Text Question",permalink:"/docs/questions/free-text-question"}},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Primeri",id:"primeri",children:[]}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Raven 3 Naslov oddelka."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": ime razreda. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slogi CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"primeri"},"Primeri"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Round Borders",value:"roundBorders"},{label:"With Background",value:"withBackground"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h6>Lowest Heading Level</h6>\n"))),(0,i.kt)(l.Z,{value:"roundBorders",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h6\n  style = {{ border: 'solid 2px darkblue', padding: '8px', borderRadius: '20px'}}\n>Round Borders\n</h6>\n"))),(0,i.kt)(l.Z,{value:"withBackground",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h6\n  style = {{ color: 'black', background: 'silver', border: 'solid 2px black', padding: '8px', borderRadius: '33px'}}\n>WITH BACKGROUND\n</h6>\n")))))}m.isMDXComponent=!0},386010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);