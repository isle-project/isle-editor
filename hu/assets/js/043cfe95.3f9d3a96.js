"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3271],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),o=n(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(386010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,o=e.block,s=e.defaultValue,c=e.values,m=e.groupId,p=e.className,f=r.Children.toArray(e.children),d=null!=c?c:f.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),k=v.tabGroupChoices,y=v.setTabGroupChoices,g=(0,r.useState)(b),h=g[0],O=g[1],w=[];if(null!=m){var N=k[m];null!=N&&N!==h&&d.some((function(e){return e.value===N}))&&O(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;O(r),null!=m&&(y(m,r),setTimeout((function(){var e,n,r,o,i,a,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,i=e.right,a=window,l=a.innerHeight,s=a.innerWidth,n>=0&&i<=s&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},p)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:q,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},322296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),a=n(855064),l=n(358215),u=["components"],s={id:"question-form",title:"Question Form",sidebar_label:"Question Form"},c=void 0,m={unversionedId:"questions/question-form",id:"questions/question-form",isDocsHomePage:!1,title:"Question Form",description:"Egy \u0171rlapkomponens, amely k\xfcl\xf6nb\xf6z\u0151 k\xe9rd\xe9skomponenseket kombin\xe1l egyetlen bek\xfcld\xe9si gombbal.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/questions/question-form.md",sourceDirName:"questions",slug:"/questions/question-form",permalink:"/hu/docs/questions/question-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/question-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"question-form",title:"Question Form",sidebar_label:"Question Form"},sidebar:"docs",previous:{title:"Order Question",permalink:"/hu/docs/questions/order-question"},next:{title:"Quiz",permalink:"/hu/docs/questions/quiz"}},p=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Egy \u0171rlapkomponens, amely k\xfcl\xf6nb\xf6z\u0151 k\xe9rd\xe9skomponenseket kombin\xe1l egyetlen bek\xfcld\xe9si gombbal."),(0,i.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"buttonLabel")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": a k\xfcld\xe9s gomb c\xedmk\xe9je. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, amelyet a submit gombra val\xf3 kattint\xe1skor h\xedvnak el\u0151.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,i.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n'))),(0,i.kt)(l.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QuestionForm>\n    <NumberQuestion\n        question={<p>What is $$2+2$$?</p>}\n    />  \n    <FreeTextQuestion\n        question={<span>What is the *meaning of life*?</span>}\n    />    \n</QuestionForm>\n")))))}d.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);