(self.webpackChunk=self.webpackChunk||[]).push([[3041],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},128911:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(722122),i=n(419756),o=(n(202784),n(603905)),a={id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},l={unversionedId:"learn/distribution-geometric",id:"learn/distribution-geometric",isDocsHomePage:!1,title:"Geometric Distribution",description:"En inl\xe4rningskomponent f\xf6r ber\xe4kning av sannolikheter i en geometrisk f\xf6rdelning.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/learn/distribution-geometric.md",sourceDirName:"learn",slug:"/learn/distribution-geometric",permalink:"/docs/learn/distribution-geometric",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-geometric.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",sidebar_label:"Geometric Distribution",frontMatter:{id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},sidebar:"docs",previous:{title:"Gamma Distribution",permalink:"/docs/learn/distribution-gamma"},next:{title:"Hypergeometric Distribution",permalink:"/docs/learn/distribution-hypergeometric"}},s=[{value:"Alternativ",id:"alternativ",children:[]},{value:"Exempel",id:"exempel",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En inl\xe4rningskomponent f\xf6r ber\xe4kning av sannolikheter i en geometrisk f\xf6rdelning."),(0,o.kt)("h2",{id:"alternativ"},"Alternativ"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"countTrials")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": s\xe4tts till true om en slumpvariabel fr\xe5n en geometrisk f\xf6rdelning ska definieras som antalet f\xf6rs\xf6k till den f\xf6rsta framg\xe5ngen i st\xe4llet f\xf6r att r\xe4kna antalet misslyckanden fram till den f\xf6rsta framg\xe5ngen.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": stegstorlek f\xf6r rullningsinmatningen. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stilar inline. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"exempel"},"Exempel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnGeometricDistribution />\n")))}u.isMDXComponent=!0}}]);