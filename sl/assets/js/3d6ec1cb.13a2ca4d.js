"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3426],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),k=i,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||a;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},369119:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return k}});var r=t(487462),i=t(263366),a=(t(202784),t(603905)),o=["components"],l={id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},p=void 0,c={unversionedId:"color-picker",id:"color-picker",title:"Color Picker",description:"Ovitek za izbirnik barv react-color.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/sl/docs/color-picker",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/color-picker.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6. 12. 2021",frontMatter:{id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},sidebar:"docs",previous:{title:"Clock",permalink:"/sl/docs/clock"},next:{title:"Draggable List",permalink:"/sl/docs/draggable-list"}},s={},u=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Primeri",id:"primeri",level:2}],m={toc:u};function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ovitek za izbirnik barv ",(0,a.kt)("a",{parentName:"p",href:"https://casesandberg.github.io/react-color/"},"react-color"),"."),(0,a.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variant")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": razli\u010dica izbirnika barv (bodisi ",(0,a.kt)("inlineCode",{parentName:"li"},"Compact"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Sketch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Material"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Button")," ali ",(0,a.kt)("inlineCode",{parentName:"li"},"Block"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'Sketch'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"color")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|object)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", ki vsebuje kodo HeX, ali ",(0,a.kt)("inlineCode",{parentName:"li"},"objekt"),", ki vsebuje vrednosti RGB ali HSL, kot so ",(0,a.kt)("inlineCode",{parentName:"li"},"{ r: 255, g: 255, b: 255 }")," ali ",(0,a.kt)("inlineCode",{parentName:"li"},"{ h: 0, s: 0, l: .10 }"),", ki dolo\u010da aktivno barvo. Oba sprejemata lastnost ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," za vrednosti alfa, ki niso ena. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'#fff'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableAlpha")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali se odstranijo drsnik alfa in mo\u017enosti. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"presetColors")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": HeX ",(0,a.kt)("inlineCode",{parentName:"li"},"stringi"),", ki dolo\u010dajo privzete barve na dnu izbirnika barv. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  '#D0021B',\n  '#F5A623',\n  '#F8E71C',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n  '#4A90E2',\n  '#50E3C2',\n  '#B8E986',\n  '#000000',\n  '#4A4A4A',\n  '#9B9B9B',\n  '#FFFFFF'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0161irina izbirnika barv (v px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ime razreda. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slogi CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": povratni klic, ki se spro\u017ei ob vsaki spremembi barve. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChangeComplete")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": povratni klic, ki se spro\u017ei, ko je sprememba barve kon\u010dana.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChangeComplete() {}"),".")),(0,a.kt)("h2",{id:"primeri"},"Primeri"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ColorPicker onChangeComplete={ color => {\n    const out = color;\n    /* e.g., returns \n        {\n            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},\n            "hex":"#231a4f",\n            "rgb":{"r":35,"g":26,"b":79,"a":1},\n            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},\n            "oldHue":~250,\n            "source":"rgb"\n        }\n    */\n}} />\n')))}k.isMDXComponent=!0}}]);