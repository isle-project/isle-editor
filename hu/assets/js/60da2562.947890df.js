"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6652],{603905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return c}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=m(n),c=l,d=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(d,r(r({ref:t},k),{},{components:n})):a.createElement(d,r({ref:t},k))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},117645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return k},toc:function(){return u},default:function(){return c}});var a=n(487462),l=n(263366),i=(n(202784),n(603905)),r=["components"],o={id:"plotly",title:"Plotly",sidebar_label:"Plotly"},p=void 0,m={unversionedId:"plotly",id:"plotly",title:"Plotly",description:"Plotly vizualiz\xe1ci\xf3.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/plotly.md",sourceDirName:".",slug:"/plotly",permalink:"/hu/docs/plotly",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plotly.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"plotly",title:"Plotly",sidebar_label:"Plotly"},sidebar:"docs",previous:{title:"Typewriter",permalink:"/hu/docs/typewriter"},next:{title:"Bar Chart",permalink:"/hu/docs/plots/barchart"}},k={},u=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],s={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://plotly.com/javascript/"},"Plotly")," vizualiz\xe1ci\xf3."),(0,i.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": adatt\xf6mb. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"draggable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a plot h\xfazhat\xf3 legyen-e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"editable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a l\xe9trehozott plot c\xedmk\xe9i szerkeszthet\u0151k legyenek-e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": komponens azonos\xedt\xf3. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"layout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Plotly layout objektum. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"config")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Plotly konfigur\xe1ci\xf3s lehet\u0151s\xe9gek (l\xe1sd: ",(0,i.kt)("a",{parentName:"li",href:"https://plotly.com/javascript/configuration-options/"},"https://plotly.com/javascript/configuration-options/"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legendButtons")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjenek-e gombok a legenda megv\xe1ltoztat\xe1s\xe1ra. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"meta")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": metainform\xe1ci\xf3k. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"revision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": ha megadva van, akkor a diagram friss\xfcl, amikor a rev\xedzi\xf3 \xe9rt\xe9ke n\xf6vekszik.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onAfterPlot")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amely minden egyes alkalommal megh\xedv\xf3dik, amikor egy diagramot \xe1br\xe1zolnak.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onAfterPlot() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amely b\xe1rmely elemre kattint\xe1skor megh\xedv\xf3dik. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onInitialized")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, amely a plot inicializ\xe1l\xe1sa ut\xe1n h\xedv\xf3dik; a figure (objektum h\xe1rom kulccsal, amelyek a bemeneti kell\xe9keknek felelnek meg: ",(0,i.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"layout")," \xe9s ",(0,i.kt)("inlineCode",{parentName:"li"},"frames"),") \xe9s a DOM csom\xf3pont ",(0,i.kt)("inlineCode",{parentName:"li"},"graphDiv")," seg\xedts\xe9g\xe9vel h\xedvhat\xf3 meg.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onInitialized() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onLegendClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amelyet a legenda elemre val\xf3 kattint\xe1skor h\xedvnak meg. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onLegendClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onLegendDoubleClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amelyet a legenda elemre val\xf3 dupla kattint\xe1skor h\xedvnak meg. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onLegendDoubleClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onRelayout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amelyet a relayout kiv\xe1lt\xe1sakor h\xedvnak meg. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onRelayout() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSelected")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amelyet az elemek kiv\xe1laszt\xe1sakor h\xedvnak el\u0151. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSelected() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onShare")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': callback f\xfcggv\xe9ny, amely a "Megoszt\xe1s" gombra kattint\xe1skor h\xedv\xf3dik el\u0151.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"removeButtons")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": vez\xe9rli, hogy az \xf6sszes gombot elt\xe1vol\xedtsa-e (a teljes k\xe9perny\u0151 gombon k\xedv\xfcl, ha enged\xe9lyezve van). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"toggleFullscreen")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy enged\xe9lyezi-e a plot teljes k\xe9perny\u0151s megjelen\xedt\xe9s\xe9t. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,i.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Plotly\n    data={[{\n        values: [ 24, 7, 0.5 ],\n        labels: [ 'English', 'Spanish', 'Other' ],\n        type: 'pie'\n            }]}\n    layout={{ width: 300 }}\n/>\n")))}c.isMDXComponent=!0}}]);