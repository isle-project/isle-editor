"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9694],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var i=r(202784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?i.createElement(b,o(o({ref:t},c),{},{components:r})):i.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},46161:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=r(487462),n=r(263366),a=(r(202784),r(603905)),o=["components"],l={id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},u=void 0,s={unversionedId:"learn/distribution-geometric",id:"learn/distribution-geometric",title:"Geometric Distribution",description:"M\u0101c\u012bbu komponents \u0123eometrisk\u0101 sadal\u012bjuma varb\u016bt\u012bbu apr\u0113\u0137in\u0101\u0161anai.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/learn/distribution-geometric.md",sourceDirName:"learn",slug:"/learn/distribution-geometric",permalink:"/lv/docs/learn/distribution-geometric",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-geometric.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021.",frontMatter:{id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},sidebar:"docs",previous:{title:"Gamma Distribution",permalink:"/lv/docs/learn/distribution-gamma"},next:{title:"Hypergeometric Distribution",permalink:"/lv/docs/learn/distribution-hypergeometric"}},c=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[],level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[],level:2}],m={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"M\u0101c\u012bbu komponents \u0123eometrisk\u0101 sadal\u012bjuma varb\u016bt\u012bbu apr\u0113\u0137in\u0101\u0161anai."),(0,a.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"countTrials")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": iestat\u012bts uz true, ja t\u0101 viet\u0101, lai skait\u012btu neveiksmju skaitu l\u012bdz pirmajai veiksmei, \u0123eometrisk\u0101 sadal\u012bjuma nejau\u0161ais lielums j\u0101defin\u0113 k\u0101 izm\u0113\u0123in\u0101jumu skaits l\u012bdz pirmajai veiksmei.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": ritin\u0101\u0161anas ieejas so\u013ca lielums. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnGeometricDistribution />\n")))}p.isMDXComponent=!0}}]);