"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5618],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},419404:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return y}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const c={id:"timer",title:"Timer",sidebar_label:"Timer"},k=void 0,d={unversionedId:"timer",id:"timer",title:"Timer",description:"N\xe4ytt\xe4\xe4 ajastimen, joka k\xe4ynnist\xe4\xe4 ennalta m\xe4\xe4ritetyn takaisinsoiton, kun aika on kulunut. Esimerkkik\xe4ytt\xf6tapaus on tietokilpailujen ajoitus.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/timer.md",sourceDirName:".",slug:"/timer",permalink:"/fi/docs/timer",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/timer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. kes\xe4k. 2021",frontMatter:{id:"timer",title:"Timer",sidebar_label:"Timer"},sidebar:"docs",previous:{title:"Runner",permalink:"/fi/docs/runner"},next:{title:"Unveil",permalink:"/fi/docs/unveil"}},f={},y=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],v={toc:y};function b(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),p),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"N\xe4ytt\xe4\xe4 ajastimen, joka k\xe4ynnist\xe4\xe4 ennalta m\xe4\xe4ritetyn takaisinsoiton, kun aika on kulunut. Esimerkkik\xe4ytt\xf6tapaus on tietokilpailujen ajoitus."),(0,r.kt)("h2",m({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": ajastimen yksil\xf6llinen ",(0,r.kt)("inlineCode",{parentName:"li"},"merkkijono")," ID. Jos ID on asetettu, ajastinkomponentti on pysyv\xe4 sivun p\xe4ivitysten aikana.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean (required)"),": lippu, jota voidaan vaihtaa ajastimen k\xe4ynnist\xe4miseksi tai keskeytt\xe4miseksi.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"belowZero")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, jatkaako ajastin laskentaa sen j\xe4lkeen, kun kesto on kulunut loppuun.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"duration")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number (required)"),": ajastimen kesto sekunteina. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"invisible")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ohjaa, pit\xe4isik\xf6 ajastin piilottaa. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": ajastimen edess\xe4 n\xe4kyv\xe4 teksti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onTimeUp")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, joka k\xe4ynnistyy ajastimen p\xe4\xe4ttyess\xe4.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onTimeUp() {}"),".")),(0,r.kt)("h2",m({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Timer \n    id='test-quiz'\n    active={true} \n    duration={50} \n    onTimeUp={() => {\n      alert( 'done' );\n    }}\n/>\n")))}b.isMDXComponent=!0}}]);