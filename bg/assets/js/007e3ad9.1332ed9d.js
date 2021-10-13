"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2816],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=l(),b=k.tabGroupChoices,g=k.setTabGroupChoices,N=(0,a.useState)(v),h=N[0],y=N[1],C=[];if(null!=p){var S=b[p];null!=S&&S!==h&&f.some((function(e){return e.value===S}))&&y(S)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;y(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,r,l,i,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},188341:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],s={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},c=void 0,p={unversionedId:"js-shell",id:"js-shell",isDocsHomePage:!1,title:"JavaScript Shell",description:"\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u043e\u0431\u0432\u0438\u0432\u043a\u0430 \u0437\u0430 Javascript, \u043a\u043e\u044f\u0442\u043e \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0437\u0430 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u043d\u0430 JavaScript. \u0422\u044f \u0441\u044a\u0434\u044a\u0440\u0436\u0430 \u043a\u043e\u043d\u0437\u043e\u043b\u0430, \u043a\u043e\u044f\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0437\u0430 \u0433\u0440\u0435\u0448\u043a\u0438, \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u0434\u0440.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/js-shell.md",sourceDirName:".",slug:"/js-shell",permalink:"/bg/docs/js-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021 \u0433.",frontMatter:{id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},sidebar:"docs",previous:{title:"Flippable Card",permalink:"/bg/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/bg/docs/likert-scale"}},m=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u043e\u0431\u0432\u0438\u0432\u043a\u0430 \u0437\u0430 Javascript, \u043a\u043e\u044f\u0442\u043e \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0437\u0430 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u043d\u0430 JavaScript. \u0422\u044f \u0441\u044a\u0434\u044a\u0440\u0436\u0430 \u043a\u043e\u043d\u0437\u043e\u043b\u0430, \u043a\u043e\u044f\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0437\u0430 \u0433\u0440\u0435\u0448\u043a\u0438, \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u0434\u0440."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u041a\u043e\u0434 \u043d\u0430 JavaScript, \u043a\u043e\u0439\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043e\u0446\u0435\u043d\u0435\u043d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0437\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0438 \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435 - \u043a\u043e\u0434 ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0432\u0430\u0449 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u043d\u043e\u0442\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u0437\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0438, \u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435\u0442\u043e, \u043d\u0430\u0431\u043e\u0440 \u043e\u0442 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438, \u043a\u043e\u0438\u0442\u043e \u0434\u0430\u0432\u0430\u0442 \u043d\u0430\u0441\u043e\u043a\u0438 \u043a\u0430\u043a \u0434\u0430 \u0441\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438 \u043a\u044a\u043c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precompute")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u043a\u043e\u0434\u044a\u0442 \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u044a\u043b\u043d\u0438, \u0441\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044a\u0442 \u0435 \u043c\u043e\u043d\u0442\u0438\u0440\u0430\u043d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u0433\u0440\u0443\u043f\u043e\u0432\u0438\u044f \u0447\u0430\u0442 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430\u043d\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"check")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0434\u043e\u0431\u0430\u0432\u0435\u043d JavaScript \u043a\u043e\u0434 \u0437\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u0434\u0430"),", \u043a\u043e\u0439\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043e\u0446\u0435\u043d\u0435\u043d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u0437\u0430\u0431\u0440\u0430\u043d\u044f\u0442 \u0432\u0441\u0438\u0447\u043a\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u0438 \u0432\u0445\u043e\u0434\u043e\u0432\u0435 \u0438 \u0431\u043b\u043e\u043a\u044a\u0442 \u0441 \u043a\u043e\u0434 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u043d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lines")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u0431\u0440\u043e\u0439 \u0440\u0435\u0434\u043e\u0432\u0435 \u0437\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430\u043d\u0430 \u043f\u0440\u0438 \u0432\u0441\u044f\u043a\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u0432\u0445\u043e\u0434\u0430 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0442\u043e \u043f\u043e\u043b\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u0438 \u043d\u0430\u0442\u0438\u0441\u043a\u0430\u043d\u0435 \u043d\u0430 \u0431\u0443\u0442\u043e\u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"Evaluate"),".. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vars")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u043e\u0431\u0435\u043a\u0442 \u043e\u0442 \u043e\u0431\u0445\u0432\u0430\u0442\u0430 \u0441 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0438, \u043a\u043e\u0438\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0434\u043e\u0441\u0442\u044a\u043f\u043d\u0438 \u0437\u0430 \u043e\u0446\u0435\u043d\u044f\u0432\u0430\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"li"},"code"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Ten Lines",value:"mLines"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell code = {`var a = 2; \nvar b = 2;\nconsole.log(a + b);`} />\n"))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />\n"))),(0,l.kt)(o.Z,{value:"mLines",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell lines={10} />\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);