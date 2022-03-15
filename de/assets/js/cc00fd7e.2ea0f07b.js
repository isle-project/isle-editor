"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3514],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},380298:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(487462),i=t(263366),a=(t(202784),t(603905)),l=["components"],o={id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},p=void 0,c={unversionedId:"color-picker",id:"color-picker",title:"Color Picker",description:"Ein Wrapper f\xfcr den react-color Farbw\xe4hler.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/de/docs/color-picker",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/color-picker.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6.12.2021",frontMatter:{id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},sidebar:"docs",previous:{title:"Clock",permalink:"/de/docs/clock"},next:{title:"Draggable List",permalink:"/de/docs/draggable-list"}},s={},u=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ein Wrapper f\xfcr den ",(0,a.kt)("a",{parentName:"p",href:"https://casesandberg.github.io/react-color/"},"react-color")," Farbw\xe4hler."),(0,a.kt)("h2",{id:"optionen"},"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variant")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Farbw\xe4hler-Variante (entweder ",(0,a.kt)("inlineCode",{parentName:"li"},"Kompakt"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Skizze"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Material"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Knopf")," oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Block"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'Sketch'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"color")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|object)"),': Zeichenkette" mit einem HeX-Code oder ein "Objekt" mit RGB- oder HSL-Werten wie "r: 255, g: 255, b: 255" oder "h: 0, s: 0, l: .10 }',(0,a.kt)("inlineCode",{parentName:"li"},', das die aktive Farbe bestimmt. Beide akzeptieren eine "a"-Eigenschaft f\xfcr andere Alphawerte als einen. Default: '),"'#fff'`."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableAlpha")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Alpha-Schieberegler und Optionen entfernt werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"presetColors")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": HeX ",(0,a.kt)("inlineCode",{parentName:"li"},"Strings"),", die die Standardfarben am unteren Rand des Colorpickers festlegen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  '#D0021B',\n  '#F5A623',\n  '#F8E71C',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n  '#4A90E2',\n  '#50E3C2',\n  '#B8E986',\n  '#000000',\n  '#4A4A4A',\n  '#9B9B9B',\n  '#FFFFFF'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Breite des Farbw\xe4hlers (in px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der jedes Mal aufgerufen wird, wenn die Farbe ge\xe4ndert wird. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChangeComplete")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, sobald ein Farbwechsel abgeschlossen ist. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChangeComplete() {}"),".")),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ColorPicker onChangeComplete={ color => {\n    const out = color;\n    /* e.g., returns \n        {\n            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},\n            "hex":"#231a4f",\n            "rgb":{"r":35,"g":26,"b":79,"a":1},\n            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},\n            "oldHue":~250,\n            "source":"rgb"\n        }\n    */\n}} />\n')))}m.isMDXComponent=!0}}]);