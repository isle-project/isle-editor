"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68353],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},941856:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return k}});var n=r(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const c={id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},d=void 0,f={unversionedId:"learn/distribution-gamma",id:"learn/distribution-gamma",title:"Gamma Distribution",description:"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed gama rozd\u011blen\xed.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/distribution-gamma.md",sourceDirName:"learn",slug:"/learn/distribution-gamma",permalink:"/cs/docs/learn/distribution-gamma",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-gamma.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},sidebar:"docs",previous:{title:"F Distribution",permalink:"/cs/docs/learn/distribution-f"},next:{title:"Geometric Distribution",permalink:"/cs/docs/learn/distribution-geometric"}},b={},k=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],y={toc:k};function v(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed gama rozd\u011blen\xed."),(0,n.kt)("h2",m({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"domain")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": objekt pol\xed ",(0,n.kt)("inlineCode",{parentName:"li"},"x")," a ",(0,n.kt)("inlineCode",{parentName:"li"},"y")," s po\u010d\xe1te\u010dn\xedm a koncov\xfdm bodem p\u0159\xedslu\u0161n\xe9 osy.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"scaleParameterization")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se m\xe1 pou\u017e\xedt parametrizace zahrnuj\xedc\xed parametr tvaru a m\u011b\u0159\xedtka m\xedsto parametr\u016f tvaru a m\xedry.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": velikost kroku posuvn\xe9ho vstupu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"symbols")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": zda zobrazovat \u0159eck\xe9 symboly pro parametry. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"tabs")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),": kter\xe9 karty se maj\xed zobrazit (bu\u010f ",(0,n.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"greater"),", nebo ",(0,n.kt)("inlineCode",{parentName:"li"},"rozsah"),").. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnGammaDistribution />\n")))}v.isMDXComponent=!0}}]);