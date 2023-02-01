"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58972],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},395815:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var r=t(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&s(e,t,n[t]);return e};const d={id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},m=void 0,f={unversionedId:"learn/mean-vs-median",id:"learn/mean-vs-median",title:"Mean vs. Median",description:"Interaktywna gra sprawdzaj\u0105ca zdolno\u015b\u0107 ucznia do rozpoznawania mediany i \u015bredniej danej dystrybucji.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/mean-vs-median.md",sourceDirName:"learn",slug:"/learn/mean-vs-median",permalink:"/pl/docs/learn/mean-vs-median",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/mean-vs-median.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 lut 2021",frontMatter:{id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},sidebar:"docs",previous:{title:"Image Pixel Picker",permalink:"/pl/docs/learn/image-pixel-picker"},next:{title:"Networks",permalink:"/pl/docs/learn/networks"}},y={},k=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],b={toc:k};function v(e){var n,t=e,{components:a}=t,s=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},b),s),i(n,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Interaktywna gra sprawdzaj\u0105ca zdolno\u015b\u0107 ucznia do rozpoznawania mediany i \u015bredniej danej dystrybucji."),(0,r.kt)("h2",u({},{id:"opcje"}),"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane przyciski sprz\u0119\u017cenia zwrotnego. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"header")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tytu\u0142 panelu, w kt\xf3rym zostanie wygenerowana \u015brednia i mediana. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": identyfikator elementu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'mean_vs_median'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intro")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),": wszelkie materia\u0142y wprowadzaj\u0105ce, kt\xf3re mog\u0105 by\u0107 potrzebne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"seed")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": nasiona do inicjalizacji generatora liczb pseudolosowych. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showStatistics")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane statystyki wydajno\u015bci student\xf3w i grup. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",u({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnMeanVSMedian />\n")))}v.isMDXComponent=!0}}]);