"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2961],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(79443);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,s=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),b=v.tabGroupChoices,g=v.setTabGroupChoices,y=(0,r.useState)(h),k=y[0],w=y[1],x=[];if(null!=p){var O=b[p];null!=O&&O!==k&&f.some((function(e){return e.value===O}))&&w(O)}var N=function(e){var t=e.currentTarget,n=x.indexOf(t),r=f[n].value;w(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,l,i,o,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,c=i.innerWidth,n>=0&&l<=c&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},886274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],c={id:"h4",title:"h4",sidebar_label:"h4"},s=void 0,p={unversionedId:"html/h4",id:"html/h4",isDocsHomePage:!1,title:"h4",description:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c 4 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/html/h4.md",sourceDirName:"html",slug:"/html/h4",permalink:"/ru/docs/html/h4",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h4.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23.02.2021",frontMatter:{id:"h4",title:"h4",sidebar_label:"h4"},sidebar:"docs",previous:{title:"h3",permalink:"/ru/docs/html/h3"},next:{title:"h5",permalink:"/ru/docs/html/h5"}},m=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c 4 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438."),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With ID",value:"withID"},{label:"Inset Shadow",value:"insetShadow"},{label:"Slight Rotation",value:"slightRotation"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h4>Section Subtitle</h4>\n"))),(0,l.kt)(o.Z,{value:"withID",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<h4 id="marker">With an ID - so you can jump straight to it by appending id to the URL</h4>\n'))),(0,l.kt)(o.Z,{value:"insetShadow",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h4 id=\"marker\"\n    style={{\n        fontSize: 44,\n        backgroundColor: '#565656',\n        color: 'transparent',\n        textShadow: '2px 2px 3px rgba(255,255,255,0.5)',\n        webkitBackgroundClip: 'text',\n        mozBackgroundClip: 'text',\n        backgroundClip: 'text'\n    }}\n>Inset Shadow</h4>\n"))),(0,l.kt)(o.Z,{value:"slightRotation",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h4 \nstyle={{ fontSize: 44, color: 'silver', transform: 'rotate(-2deg)' }}\n>Slight Rotation</h4>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);