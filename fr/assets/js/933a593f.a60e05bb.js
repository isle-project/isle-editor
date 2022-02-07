"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2791],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},151245:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},u=void 0,c={unversionedId:"beacon-tooltip",id:"beacon-tooltip",title:"Beacon Tooltip",description:'Composant pla\xe7ant une balise dans la le\xe7on, soit de mani\xe8re ind\xe9pendante, soit attach\xe9e \xe0 une "cible". En survolant ou en cliquant sur la balise, une info-bulle s\'affiche.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/beacon-tooltip.md",sourceDirName:".",slug:"/beacon-tooltip",permalink:"/fr/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",frontMatter:{id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},sidebar:"docs",previous:{title:"Summary Statistics",permalink:"/fr/docs/summary-statistics"},next:{title:"Clock",permalink:"/fr/docs/clock"}},p=[{value:"Options",id:"options",children:[],level:2},{value:"Exemples",id:"exemples",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Composant pla\xe7ant une balise dans la le\xe7on, soit de mani\xe8re ind\xe9pendante, soit attach\xe9e \xe0 une "cible". En survolant ou en cliquant sur la balise, une info-bulle s\'affiche.'),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": titre \xe0 afficher en haut de l'infobulle. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"content")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": contenu de l'infobulle. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'"),"content",(0,a.kt)("inlineCode",{parentName:"li"}," comes here...'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"event")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': si elle est d\xe9finie sur "clic", l\'info-bulle est activ\xe9e en cliquant sur la balise ; si elle est d\xe9finie sur "survol", l\'info-bulle est activ\xe9e par le survol. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"'click'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': le placement de l\'info-bulle par rapport \xe0 la "cible" (soit "haut", "d\xe9but haut", "fin haut", "bas", "fin bas", "gauche", "d\xe9but gauche", "fin gauche", "droite", "d\xe9but droite", "fin droite", "automatique" ou "centre"). Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"target")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": S\xe9lecteur de classe ou d'ID pour l'\xe9l\xe9ment auquel attacher l'info-bulle. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"offset")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),': la distance entre l\'info-bulle et la "cible" en pixels. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": rappel invoqu\xe9 lors du changement d'\xe9tat de l'infobulle. Re\xe7oit deux arguments : l'action (open ou close) et les props pass\xe9s. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}d.isMDXComponent=!0}}]);