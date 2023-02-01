"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91251],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return g}});var i=n(603905),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};const s={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},m=void 0,f={unversionedId:"beacon-tooltip",id:"beacon-tooltip",title:"Beacon Tooltip",description:'Komponente, die eine Bake in der Lektion platziert, entweder unabh\xe4ngig oder an ein "Ziel" angeh\xe4ngt. Wenn Sie den Mauszeiger \xfcber die Bake bewegen oder darauf klicken, wird eine QuickInfo angezeigt.',source:"@site/i18n/de/docusaurus-plugin-content-docs/current/beacon-tooltip.md",sourceDirName:".",slug:"/beacon-tooltip",permalink:"/de/docs/beacon-tooltip",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18. Mai 2021",frontMatter:{id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},sidebar:"docs",previous:{title:"Summary Statistics",permalink:"/de/docs/summary-statistics"},next:{title:"Clock",permalink:"/de/docs/clock"}},k={},g=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],b={toc:g};function N(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=u(u({},b),d),a(t,o({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,'Komponente, die eine Bake in der Lektion platziert, entweder unabh\xe4ngig oder an ein "Ziel" angeh\xe4ngt. Wenn Sie den Mauszeiger \xfcber die Bake bewegen oder darauf klicken, wird eine QuickInfo angezeigt.'),(0,i.kt)("h2",u({},{id:"optionen"}),"Optionen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Titel, der oben in der QuickInfo angezeigt werden soll. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"content")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Tooltip-Inhalt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'"),"content",(0,i.kt)("inlineCode",{parentName:"li"}," comes here...'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"event")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": wenn auf ",(0,i.kt)("inlineCode",{parentName:"li"},"click")," gesetzt, wird der Tooltip beim Klicken auf die Bake umgeschaltet; wenn auf ",(0,i.kt)("inlineCode",{parentName:"li"},"hover")," gesetzt, wird der Tooltip durch Schweben aktiviert. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'click'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"placement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Platzierung des Tooltips relativ zu ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," (entweder ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"top-start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"top-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left-start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right-start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"),", oder ",(0,i.kt)("inlineCode",{parentName:"li"},"center"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"target")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Klasse oder ID-Selektor f\xfcr Element, an das Tooltip angeh\xe4ngt werden soll. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Abstand zwischen Tooltip und ",(0,i.kt)("inlineCode",{parentName:"li"},"Target")," in Pixel. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der bei einer Zustands\xe4nderung des Tooltips aufgerufen wird. Erh\xe4lt zwei Argumente: die ",(0,i.kt)("inlineCode",{parentName:"li"},"Action")," (",(0,i.kt)("inlineCode",{parentName:"li"},"open")," oder ",(0,i.kt)("inlineCode",{parentName:"li"},"close"),") und die \xfcbergebenen ",(0,i.kt)("inlineCode",{parentName:"li"},"Pros"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,i.kt)("h2",u({},{id:"beispiele"}),"Beispiele"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}N.isMDXComponent=!0}}]);