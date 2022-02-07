"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4582],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},724186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),a=["components"],l={id:"hypothesis-testing-proportion",title:"Hypothesis Testing for Proportions",sidebar_label:"Hypothesis Testing for Proportions"},s=void 0,p={unversionedId:"learn/hypothesis-testing-proportion",id:"learn/hypothesis-testing-proportion",title:"Hypothesis Testing for Proportions",description:"A learning component on hypothesis tests for a population proportion.",source:"@site/docs/learn/hypothesis-testing-proportion.md",sourceDirName:"learn",slug:"/learn/hypothesis-testing-proportion",permalink:"/docs/learn/hypothesis-testing-proportion",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-proportion.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1617919341,formattedLastUpdatedAt:"4/8/2021",frontMatter:{id:"hypothesis-testing-proportion",title:"Hypothesis Testing for Proportions",sidebar_label:"Hypothesis Testing for Proportions"},sidebar:"docs",previous:{title:"Hypothesis Testing for Means",permalink:"/docs/learn/hypothesis-testing-mean"},next:{title:"Image Pixel Picker",permalink:"/docs/learn/image-pixel-picker"}},u=[{value:"Options",id:"options",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A learning component on hypothesis tests for a population proportion."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"types")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string>"),": the type(s) of test (",(0,i.kt)("inlineCode",{parentName:"li"},"One-Sample"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Two-Sample"),") the widget should expose. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": always display the null hypothesis as a single value. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": custom label for the p-value (should be a LaTeX equation string). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnProportionTest />\n")))}m.isMDXComponent=!0}}]);