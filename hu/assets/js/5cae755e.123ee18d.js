"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7129],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),i="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),h=k.tabGroupChoices,y=k.setTabGroupChoices,g=(0,r.useState)(v),b=g[0],C=g[1],N=[];if(null!=p){var x=h[p];null!=x&&x!==b&&f.some((function(e){return e.value===x}))&&C(x)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=f[n].value;C(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,l,i,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},764236:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),l=n(855064),i=n(358215),u=["components"],s={id:"contourchart",title:"Contour Chart",sidebar_label:"Contour Chart"},c=void 0,p={unversionedId:"plots/contourchart",id:"plots/contourchart",isDocsHomePage:!1,title:"Contour Chart",description:"Kont\xfart\xe1bl\xe1zat.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/plots/contourchart.md",sourceDirName:"plots",slug:"/plots/contourchart",permalink:"/hu/docs/plots/contourchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/contourchart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"contourchart",title:"Contour Chart",sidebar_label:"Contour Chart"},sidebar:"docs",previous:{title:"Box Plot",permalink:"/hu/docs/plots/boxplot"},next:{title:"Heat Map",permalink:"/hu/docs/plots/heatmap"}},m=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kont\xfart\xe1bl\xe1zat."),(0,o.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": az egyes v\xe1ltoz\xf3k \xe9rt\xe9kt\xe1bl\xe1inak objektuma. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"x")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string (required)"),": x-tengely\u0171 v\xe1ltoz\xf3. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"y")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string (required)"),": y-tengely v\xe1ltoz\xf3. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az egyes megfigyel\xe9sekhez tartoz\xf3 pontokat \xe1tfedje-e. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": sim\xedt\xe1si tartom\xe1ny. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<string>"),': "line\xe1ris" \xe9s/vagy "sim\xedtott" t\xf6mb\xf6t tartalmaz\xf3 t\xf6mb egy line\xe1ris \xe9s/vagy sim\xedtott regresszi\xf3s egyenes \xe1tlapol\xe1s\xe1hoz. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSelected")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": callback h\xedv\xe1s, amikor a pontok x, y \xe9rt\xe9kekkel vannak kijel\xf6lve \xe9s a kijel\xf6lt pontok. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSelected() {}"),".")),(0,o.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,o.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"},{label:"Smooth Span",value:"smoothSpan"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContourChart \n    data={heartdisease} \n    x="Age"\n    y="Cost"\n/>\n'))),(0,o.kt)(i.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContourChart \n    overlayPoints \n    data={heartdisease} \n    x="ERVisit"\n    y="Duration"\n/>\n'))),(0,o.kt)(i.Z,{value:"regressionMethod",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ContourChart \n    overlayPoints \n    regressionMethod={['smooth', 'linear']}\n    data={heartdisease} \n    x=\"ERVisit\"\n    y=\"Duration\"\n/>\n"))),(0,o.kt)(i.Z,{value:"smoothSpan",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ContourChart \n    overlayPoints \n    regressionMethod={['smooth', 'linear']}\n    data={heartdisease} \n    x=\"ERVisit\"\n    y=\"Duration\"\n    smoothSpan={.12}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);