"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5520],{603905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(202784);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?t.createElement(m,o(o({ref:n},s),{},{components:r})):t.createElement(m,o({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},305253:function(e,n,r){r.r(n),r.d(n,{assets:function(){return v},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return b}});var t=r(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&s(e,r,n[r]);if(l)for(var r of l(n))d.call(n,r)&&s(e,r,n[r]);return e};const p={id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},f=void 0,m={unversionedId:"learn/confidence-coverage-binomial",id:"learn/confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",description:"En l\xe6ringskomponent, der illustrerer d\xe6kning af konfidensintervaller for middelv\xe6rdien af en binomialfordeling.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/learn/confidence-coverage-binomial.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-binomial",permalink:"/da/docs/learn/confidence-coverage-binomial",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},sidebar:"docs",previous:{title:"Conditional Probability",permalink:"/da/docs/learn/conditional-probability"},next:{title:"Confidence Interval Coverage Normal",permalink:"/da/docs/learn/confidence-coverage-normal"}},v={},b=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],g={toc:b};function k(e){var n,r=e,{components:i}=r,s=((e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&d.call(e,t)&&(r[t]=e[t]);return r})(r,["components"]);return(0,t.kt)("wrapper",(n=u(u({},g),s),a(n,o({components:i,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"En l\xe6ringskomponent, der illustrerer d\xe6kning af konfidensintervaller for middelv\xe6rdien af en binomialfordeling."),(0,t.kt)("h2",u({},{id:"indstillinger"}),"Indstillinger"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"intro")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"(node|string)"),": tilsides\xe6tter standard (interaktiv) introtekst. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal anvendes kvartilnotation i introtekst. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om man skal kunne skifte mellem at anvende stikpr\xf8veandelen eller den kendte sandsynlighed for succes i populationen ved beregning af standardfejlen. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,t.kt)("h2",u({},{id:"eksempler"}),"Eksempler"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnConfidenceCoverageBinomial />\n")))}k.isMDXComponent=!0}}]);