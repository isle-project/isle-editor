(window.webpackJsonp=window.webpackJsonp||[]).push([[1243],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(410)),l=n(443),o=n(444),c={id:"r-table",title:"R Table",sidebar_label:"R Table"},s={unversionedId:"r/r-table",id:"r/r-table",isDocsHomePage:!1,title:"R Table",description:"Komponente zum Rendern eines R-Datenrahmens oder einer Matrix in einer tabellarischen Darstellung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/r/table.md",slug:"/r/r-table",permalink:"/de/docs/r/r-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1617049412,formattedLastUpdatedAt:"29.3.2021",sidebar_label:"R Table",sidebar:"docs",previous:{title:"R Shell",permalink:"/de/docs/r/r-shell"},next:{title:"Weather",permalink:"/de/docs/weather"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponente zum Rendern eines R-Datenrahmens oder einer Matrix in einer tabellarischen Darstellung."),Object(i.b)("h2",{id:"optionen"},"Optionen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"code")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": R-Code, der einen data.frame zur\xfcckgibt, der die Daten enth\xe4lt, die in der Tabelle angezeigt werden sollen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"libraries")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),': R-Bibliotheken, die automatisch geladen werden sollen, wenn der Eingabe-"Code" ausgef\xfchrt wird. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"prependCode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|array)"),": R-Code ",Object(i.b)("inlineCode",{parentName:"li"},"string")," (oder ",Object(i.b)("inlineCode",{parentName:"li"},"array")," von R-Codebl\xf6cken), der bei der Auswertung dem in ",Object(i.b)("inlineCode",{parentName:"li"},"code")," gespeicherten Code vorangestellt wird. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"beispiele"},"Beispiele"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Using Libraries",value:"usingLibraries"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable\n    code={`data <- matrix( runif(64), nrow=8, ncol=8); \n    data`}\n/>\n"))),Object(i.b)(o.a,{value:"usingLibraries",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n/>\n"))),Object(i.b)(o.a,{value:"customStyle",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n    style={{ width: '400px' }}\n/>\n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},440:function(e,t,n){"use strict";var r=n(0),a=n(441);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},443:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(440),l=n(434),o=n(57),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[O,v]=Object(r.useState)(o),g=r.Children.toArray(e.children),j=[];if(null!=d){const e=m[d];null!=e&&e!==O&&u.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.target,n=j.indexOf(t),r=g[n].props.value;v(r),null!=d&&(f(d,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&a<=l&&r<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case b:{const t=j.indexOf(e.target)+1;n=j[t]||j[0];break}case s:{const t=j.indexOf(e.target)-1;n=j[t]||j[j.length-1];break}}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>j.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},444:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);