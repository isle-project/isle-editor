"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24978],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},798471:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return v}});var n=r(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={id:"clt-discrete",title:"Discrete CLT",sidebar_label:"Discrete CLT"},f=void 0,m={unversionedId:"learn/clt-discrete",id:"learn/clt-discrete",title:"Discrete CLT",description:"\xd5ppekomponent, mis illustreerib keskset piirv\xe4\xe4rtuste teoreemi (CLT) kanoonilise diskreetse jaotuse, binoomjaotuse jaoks.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/learn/clt-discrete.md",sourceDirName:"learn",slug:"/learn/clt-discrete",permalink:"/et/docs/learn/clt-discrete",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-discrete.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. juuni 2021",frontMatter:{id:"clt-discrete",title:"Discrete CLT",sidebar_label:"Discrete CLT"},sidebar:"docs",previous:{title:"Continuous CLT",permalink:"/et/docs/learn/clt-continuous"},next:{title:"CLT Sample",permalink:"/et/docs/learn/clt-sample"}},b={},v=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],y={toc:v};function k(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\xd5ppekomponent, mis illustreerib keskset piirv\xe4\xe4rtuste teoreemi (CLT) kanoonilise diskreetse jaotuse, binoomjaotuse jaoks."),(0,n.kt)("h2",p({},{id:"valikud"}),"Valikud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showPopStdev")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas kuvada populatsiooni standardh\xe4lvet. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,n.kt)("h2",p({},{id:"n\xe4ited"}),"N\xe4ited"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnDiscreteCLT />\n")))}k.isMDXComponent=!0}}]);