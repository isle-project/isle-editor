(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(410)),i=n(443),o=n(444),c={id:"feedback",title:"Feedback Buttons",sidebar_label:"Feedback Buttons"},s={unversionedId:"feedback",id:"feedback",isDocsHomePage:!1,title:"Feedback Buttons",description:"Schaltfl\xe4chen zum Sammeln von Benutzer-Feedback.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/feedback.md",slug:"/feedback",permalink:"/de/docs/feedback",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/feedback.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",sidebar_label:"Feedback Buttons",sidebar:"docs",previous:{title:"Data Table",permalink:"/de/docs/data-table"},next:{title:"Gate",permalink:"/de/docs/gate"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Schaltfl\xe4chen zum Sammeln von Benutzer-Feedback."),Object(l.b)("h2",{id:"optionen"},"Optionen"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"confusedMsg")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Meldung, die im Tooltip f\xfcr die verwirrte Schaltfl\xe4che angezeigt werden soll. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"feedbackMsg")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Meldung, die im Tooltip f\xfcr die Schaltfl\xe4che f\xfcr detailliertes Feedback angezeigt werden soll. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"understoodMsg")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Meldung, die im Tooltip f\xfcr die verstandene Schaltfl\xe4che angezeigt werden soll. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"customFeedback")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Komponente benutzerdefinierte R\xfcckmeldungen annimmt. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"vertical")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": Schaltfl\xe4chen werden vertikal angezeigt, wenn auf ",Object(l.b)("inlineCode",{parentName:"li"},"true")," gesetzt. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"beispiele"},"Beispiele"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Vertical",value:"Vertical"},{label:"Feedback Everywhere",value:"feedbackEverywhere"},{label:"Customized Style and Labels",value:"fullyCustomized"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  A panel with user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n</Panel>\n'))),Object(l.b)(o.a,{value:"Vertical",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    id="my_feedback" \n    vertical\n  />\n</Panel>\n'))),Object(l.b)(o.a,{value:"feedbackEverywhere",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel style={{ width: 680}}>\n\n<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n/>\n\n  to get some user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n\n</Panel>\n'))),Object(l.b)(o.a,{value:"fullyCustomized",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    style={{ boxShadow: \'0 0 12px red\' }}\n    id="my_feedback"  \n    feedbackMsg="You can customize the feedback tooltip!"\n    understoodMsg="Tell me you got it!" \n    confusedMsg="Click me if your are confused!" \n  />\n</Panel>\n')))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,p=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.a.createElement(p,o(o({ref:t},s),{},{components:n})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},443:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(440),i=n(434),o=n(57),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:d,className:m}=e,{tabGroupChoices:p,setTabGroupChoices:f}=Object(l.a)(),[O,g]=Object(a.useState)(o),j=a.Children.toArray(e.children),v=[];if(null!=d){const e=p[d];null!=e&&e!==O&&u.some((t=>t.value===e))&&g(e)}const y=e=>{const t=e.target,n=v.indexOf(t),a=j[n].props.value;g(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:i}=window;return t>=0&&r<=i&&a<=l&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case b:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case s:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);