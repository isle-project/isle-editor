(self.webpackChunk=self.webpackChunk||[]).push([[4082],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=i,f=d["".concat(u,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93138:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(722122),i=n(419756),o=(n(202784),n(603905)),a={id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},l={unversionedId:"learn/distribution-t",id:"learn/distribution-t",isDocsHomePage:!1,title:"Student's t Distribution",description:"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa dystrybucji t Ucznia.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/distribution-t.md",sourceDirName:"learn",slug:"/learn/distribution-t",permalink:"/docs/learn/distribution-t",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-t.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",sidebar_label:"Student's t Distribution",frontMatter:{id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},sidebar:"docs",previous:{title:"Poisson Distribution",permalink:"/docs/learn/distribution-poisson"},next:{title:"Continuous Uniform Distribution",permalink:"/docs/learn/distribution-uniform"}},u=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],c={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa dystrybucji t Ucznia."),(0,o.kt)("h2",{id:"opcje"},"Opcje"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": wielko\u015b\u0107 kroku wej\u015bcia przewijania. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quantile")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": czy pokaza\u0107 zak\u0142adk\u0119 do obliczania rozk\u0142adu ilo\u015bciowego. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnTDistribution />\n")))}s.isMDXComponent=!0}}]);