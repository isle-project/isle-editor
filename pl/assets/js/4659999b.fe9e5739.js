"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3999],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},421492:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"distribution-f",title:"F Distribution",sidebar_label:"F Distribution"},u=void 0,p={unversionedId:"learn/distribution-f",id:"learn/distribution-f",title:"F Distribution",description:"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa rozk\u0142adu F.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/distribution-f.md",sourceDirName:"learn",slug:"/learn/distribution-f",permalink:"/pl/docs/learn/distribution-f",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-f.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",frontMatter:{id:"distribution-f",title:"F Distribution",sidebar_label:"F Distribution"},sidebar:"docs",previous:{title:"Exponential Distribution",permalink:"/pl/docs/learn/distribution-exponential"},next:{title:"Gamma Distribution",permalink:"/pl/docs/learn/distribution-gamma"}},c=[{value:"Opcje",id:"opcje",children:[],level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa rozk\u0142adu F."),(0,a.kt)("h2",{id:"opcje"},"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"domain")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": obiekt tablicy ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," i ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," z punktem pocz\u0105tkowym i ko\u0144cowym dla danej osi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": wielko\u015b\u0107 kroku wej\u015bcia przewijania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tabs")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": kt\xf3re zak\u0142adki maj\u0105 by\u0107 wy\u015bwietlane (albo ",(0,a.kt)("inlineCode",{parentName:"li"},"ma\u0142e"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"wi\u0119ksze"),", albo ",(0,a.kt)("inlineCode",{parentName:"li"},"zakresowe"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnFDistribution />\n")))}d.isMDXComponent=!0}}]);