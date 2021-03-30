(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),o=(n(0),n(410)),a=n(443),s=n(444),c={id:"question-form",title:"Question Form",sidebar_label:"Question Form"},u={unversionedId:"questions/question-form",id:"questions/question-form",isDocsHomePage:!1,title:"Question Form",description:"Un componente di modulo che combina diversi componenti di domanda con un unico pulsante di invio.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/questions/question-form.md",slug:"/questions/question-form",permalink:"/it/docs/questions/question-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/question-form.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614807536,formattedLastUpdatedAt:"3/3/2021",sidebar_label:"Question Form",sidebar:"docs",previous:{title:"Order Question",permalink:"/it/docs/questions/order-question"},next:{title:"Quiz",permalink:"/it/docs/questions/quiz"}},l=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],m={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un componente di modulo che combina diversi componenti di domanda con un unico pulsante di invio."),Object(o.b)("h2",{id:"opzioni"},"Opzioni"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"buttonLabel")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": etichetta del pulsante di invio. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": richiamata quando si fa clic sul pulsante di invio. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(o.b)("h2",{id:"esempi"},"Esempi"),Object(o.b)(a.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(s.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n'))),Object(o.b)(s.a,{value:"withMarkdown",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QuestionForm>\n    <NumberQuestion\n        question={<p>What is $$2+2$$?</p>}\n    />  \n    <FreeTextQuestion\n        question={<span>What is the *meaning of life*?</span>}\n    />    \n</QuestionForm>\n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,b=m["".concat(a,".").concat(p)]||m[p]||d[p]||o;return n?i.a.createElement(b,s(s({ref:t},u),{},{components:n})):i.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},440:function(e,t,n){"use strict";var r=n(0),i=n(441);t.a=function(){const e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var r=n(0);const i=Object(r.createContext)(void 0);t.a=i},443:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(440),a=n(434),s=n(57),c=n.n(s);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:d,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(o.a)(),[v,O]=Object(r.useState)(s),y=r.Children.toArray(e.children),h=[];if(null!=d){const e=b[d];null!=e&&e!==v&&m.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.target,n=h.indexOf(t),r=y[n].props.value;O(r),null!=d&&(f(d,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:a}=window;return t>=0&&i<=a&&r<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},g=e=>{var t;let n;switch(e.keyCode){case l:{const t=h.indexOf(e.target)+1;n=h[t]||h[0];break}case u:{const t=h.indexOf(e.target)-1;n=h[t]||h[h.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},p)},m.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(a.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>h.push(e),onKeyDown:g,onFocus:j,onClick:j},t)))),t?Object(r.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},444:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);