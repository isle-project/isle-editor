"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35475],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),b=i,f=c["".concat(s,".").concat(b)]||c[b]||d[b]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},303662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},b=void 0,f={unversionedId:"learn/distribution-beta",id:"learn/distribution-beta",title:"Beta Distribution",description:"A learning component for calculating probabilities of a beta distribution.",source:"@site/docs/learn/distribution-beta.md",sourceDirName:"learn",slug:"/learn/distribution-beta",permalink:"/docs/learn/distribution-beta",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-beta.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,formattedLastUpdatedAt:"Feb 7, 2021",frontMatter:{id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},sidebar:"docs",previous:{title:"Word Venn Diagram",permalink:"/docs/learn/word-venn-diagram"},next:{title:"Binomial Distribution",permalink:"/docs/learn/distribution-binomial"}},m={},y=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],g={toc:y};function v(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A learning component for calculating probabilities of a beta distribution."),(0,r.kt)("h2",c({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"domain")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": object of ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," arrays with the starting and end points for the respective axis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": step size of the scroll input. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tabs")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": which tabs to display (either ",(0,r.kt)("inlineCode",{parentName:"li"},"smaller"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"range"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnBetaDistribution />\n")))}v.isMDXComponent=!0}}]);