(window.webpackJsonp=window.webpackJsonp||[]).push([[1243],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(410)),i=n(443),s=n(444),u={id:"question-form",title:"Question Form",sidebar_label:"Question Form"},l={unversionedId:"questions/question-form",id:"questions/question-form",isDocsHomePage:!1,title:"Question Form",description:"Un \xe9l\xe9ment de formulaire combinant diff\xe9rents \xe9l\xe9ments de questions avec un seul bouton de soumission.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/questions/question-form.md",slug:"/questions/question-form",permalink:"/fr/docs/questions/question-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/question-form.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614807536,formattedLastUpdatedAt:"03/03/2021",sidebar_label:"Question Form",sidebar:"docs",previous:{title:"Order Question",permalink:"/fr/docs/questions/order-question"},next:{title:"Quiz",permalink:"/fr/docs/questions/quiz"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],m={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Un \xe9l\xe9ment de formulaire combinant diff\xe9rents \xe9l\xe9ments de questions avec un seul bouton de soumission."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"buttonLabel")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": \xe9tiquette du bouton d'envoi. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": rappel invoqu\xe9 lorsque l'on clique sur le bouton d'envoi. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(a.b)("h2",{id:"exemples"},"Exemples"),Object(a.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"}],lazy:!0,mdxType:"Tabs"},Object(a.b)(s.a,{value:"minimal",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n'))),Object(a.b)(s.a,{value:"withMarkdown",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QuestionForm>\n    <NumberQuestion\n        question={<p>What is $$2+2$$?</p>}\n    />  \n    <FreeTextQuestion\n        question={<span>What is the *meaning of life*?</span>}\n    />    \n</QuestionForm>\n")))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,d=m["".concat(i,".").concat(p)]||m[p]||b[p]||a;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},440:function(e,t,n){"use strict";var r=n(0),o=n(441);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},443:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(440),i=n(434),s=n(57),u=n.n(s);const l=37,c=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:b,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[v,O]=Object(r.useState)(s),y=r.Children.toArray(e.children),j=[];if(null!=b){const e=d[b];null!=e&&e!==v&&m.some((t=>t.value===e))&&O(e)}const g=e=>{const t=e.target,n=j.indexOf(t),r=y[n].props.value;O(r),null!=b&&(f(b,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:o}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&o<=i&&r<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u.a.tabItemActive),setTimeout((()=>t.classList.remove(u.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case c:{const t=j.indexOf(e.target)+1;n=j[t]||j[0];break}case l:{const t=j.indexOf(e.target)-1;n=j[t]||j[j.length-1];break}}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},m.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(r.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},444:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);