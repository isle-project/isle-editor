"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7572],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},676236:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=["components"],o={id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},p=void 0,s={unversionedId:"models/principal-component-analysis",id:"models/principal-component-analysis",title:"Principal Component Analysis",description:"\u0391\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7 \u03ba\u03cd\u03c1\u03b9\u03c9\u03bd \u03c3\u03c5\u03bd\u03b9\u03c3\u03c4\u03c9\u03c3\u03ce\u03bd.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/models/principal-component-analysis.md",sourceDirName:"models",slug:"/models/principal-component-analysis",permalink:"/el/docs/models/principal-component-analysis",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/principal-component-analysis.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},sidebar:"docs",previous:{title:"Naive Bayes",permalink:"/el/docs/models/naive-bayes"},next:{title:"Random Forest",permalink:"/el/docs/models/random-forest"}},c=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[],level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0391\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7 \u03ba\u03cd\u03c1\u03b9\u03c9\u03bd \u03c3\u03c5\u03bd\u03b9\u03c3\u03c4\u03c9\u03c3\u03ce\u03bd."),(0,i.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03c9\u03bd \u03c0\u03b9\u03bd\u03ac\u03ba\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u03bf\u03bd\u03cc\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03bf\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"center")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03ba\u03b5\u03bd\u03c4\u03c1\u03b9\u03ba\u03ad\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b1\u03c6\u03b1\u03b9\u03c1\u03ce\u03bd\u03c4\u03b1\u03c2 \u03c4\u03bf \u03bc\u03ad\u03c3\u03bf \u03cc\u03c1\u03bf. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scale")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03c4\u03b9\u03bc\u03ad\u03c2 \u03ba\u03bb\u03af\u03bc\u03b1\u03ba\u03b1\u03c2 \u03b4\u03b9\u03b1\u03b9\u03c1\u03ce\u03bd\u03c4\u03b1\u03c2 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03c4\u03c5\u03c0\u03b9\u03ba\u03ae \u03b1\u03c0\u03cc\u03ba\u03bb\u03b9\u03c3\u03b7. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"noComponents")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),': \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03c9\u03bd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03c0\u03bf\u03c5 \u03c0\u03b1\u03c1\u03ad\u03c7\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7\u03bd \u03b5\u03c0\u03b1\u03bd\u03ac\u03ba\u03bb\u03b7\u03c3\u03b7 "onResult".. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onResult")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bc\u03b5 \u03c4\u03bf \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03bf\u03c5 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c4\u03b1 \u03c3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03ac. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,i.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PrincipalComponentAnalysis \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n    scale\n/>\n")))}m.isMDXComponent=!0}}]);