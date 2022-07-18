"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26301],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},263489:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const d={id:"recorder",title:"Recorder",sidebar_label:"Recorder"},m=void 0,f={unversionedId:"recorder",id:"recorder",title:"Recorder",description:"Un composant ISLE pour l'enregistrement audio, \xe9cran et vid\xe9o.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/recorder.md",sourceDirName:".",slug:"/recorder",permalink:"/fr/docs/recorder",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/recorder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 oct. 2021",frontMatter:{id:"recorder",title:"Recorder",sidebar_label:"Recorder"},sidebar:"docs",previous:{title:"QR Code",permalink:"/fr/docs/qrcode"},next:{title:"Seal",permalink:"/fr/docs/seal"}},b={},k=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],g={toc:k};function y(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},g),p),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un composant ISLE pour l'enregistrement audio, \xe9cran et vid\xe9o."),(0,n.kt)("h2",s({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"audio")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si l'audio doit \xeatre enregistr\xe9. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"camera")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si la webcam doit \xeatre enregistr\xe9e. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"screen")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si l'\xe9cran doit \xeatre captur\xe9. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"autostart")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si l'enregistrement doit commencer imm\xe9diatement. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"downloadable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si les utilisateurs doivent pouvoir t\xe9l\xe9charger l'enregistrement. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"uploadable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si les utilisateurs doivent pouvoir t\xe9l\xe9charger l'enregistrement sur le serveur. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bitsPerSecond")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": bits par seconde. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1280000"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemples"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Recorder \n    audio\n    screen\n    downloadable\n/>\n")))}y.isMDXComponent=!0}}]);