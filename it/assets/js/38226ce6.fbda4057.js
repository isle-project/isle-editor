"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1725],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},604890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return C},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return g}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},d=void 0,f={unversionedId:"color-picker",id:"color-picker",title:"Color Picker",description:"Un involucro per il raccoglitore di colore react-color.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/it/docs/color-picker",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/color-picker.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6/12/2021",frontMatter:{id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},sidebar:"docs",previous:{title:"Clock",permalink:"/it/docs/clock"},next:{title:"Draggable List",permalink:"/it/docs/draggable-list"}},k={},g=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],b={toc:g};function C(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),u),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Un involucro per il raccoglitore di colore ",(0,r.kt)("a",s({parentName:"p"},{href:"https://casesandberg.github.io/react-color/"}),"react-color"),"."),(0,r.kt)("h2",s({},{id:"opzioni"}),"Opzioni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variant")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": variante del selezionatore di colori (sia ",(0,r.kt)("inlineCode",{parentName:"li"},"Compact"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Sketch"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Material"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Button"),", o ",(0,r.kt)("inlineCode",{parentName:"li"},"Block"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Sketch'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|object)"),': "stringa" che contiene un codice HeX o un "oggetto" che contiene valori RGB o HSL come ',(0,r.kt)("inlineCode",{parentName:"li"},"{ r: 255, g: 255, b: 255 }`` o "),"{ h: 0, s: 0, l: .10 }`",(0,r.kt)("inlineCode",{parentName:"li"},", che determina il colore attivo. Entrambi accettano una propriet\xe0 "),"a",(0,r.kt)("inlineCode",{parentName:"li"},"per valori alfa diversi da uno. Default:"),"'#fff'`."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableAlpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se rimuovere il cursore alfa e le opzioni. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"presetColors")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": HeX ",(0,r.kt)("inlineCode",{parentName:"li"},"stringhe")," che specificano i colori di default nella parte inferiore del colorpicker. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  '#D0021B',\n  '#F5A623',\n  '#F8E71C',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n  '#4A90E2',\n  '#50E3C2',\n  '#B8E986',\n  '#000000',\n  '#4A4A4A',\n  '#9B9B9B',\n  '#FFFFFF'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": larghezza del raccoglitore di colore (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": richiamata ogni volta che si cambia colore. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChangeComplete")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": richiamata una volta completato il cambio di colore. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChangeComplete() {}"),".")),(0,r.kt)("h2",s({},{id:"esempi"}),"Esempi"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ColorPicker onChangeComplete={ color => {\n    const out = color;\n    /* e.g., returns \n        {\n            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},\n            "hex":"#231a4f",\n            "rgb":{"r":35,"g":26,"b":79,"a":1},\n            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},\n            "oldHue":~250,\n            "source":"rgb"\n        }\n    */\n}} />\n')))}C.isMDXComponent=!0}}]);