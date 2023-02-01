"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81320],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},960661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},m=void 0,k={unversionedId:"color-picker",id:"color-picker",title:"Color Picker",description:"Obal pro n\xe1stroj pro v\xfdb\u011br barev react-color.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/cs/docs/color-picker",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/color-picker.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6. 12. 2021",frontMatter:{id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},sidebar:"docs",previous:{title:"Clock",permalink:"/cs/docs/clock"},next:{title:"Draggable List",permalink:"/cs/docs/draggable-list"}},f={},b=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],v={toc:b};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Obal pro n\xe1stroj pro v\xfdb\u011br barev ",(0,r.kt)("a",s({parentName:"p"},{href:"https://casesandberg.github.io/react-color/"}),"react-color"),"."),(0,r.kt)("h2",s({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variant")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": varianta v\xfdb\u011bru barvy (bu\u010f ",(0,r.kt)("inlineCode",{parentName:"li"},"Compact"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Sketch"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Material"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Button"),", nebo ",(0,r.kt)("inlineCode",{parentName:"li"},"Block"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Sketch'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|object)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," obsahuj\xedc\xed HeX k\xf3d nebo ",(0,r.kt)("inlineCode",{parentName:"li"},"objekt")," obsahuj\xedc\xed hodnoty RGB nebo HSL, jako nap\u0159\xedklad ",(0,r.kt)("inlineCode",{parentName:"li"},"{ r: 255, g: 255, b: 255 }")," nebo ",(0,r.kt)("inlineCode",{parentName:"li"},"{ h: 0, s: 0, l: .10 }"),", kter\xfd ur\u010duje aktivn\xed barvu. Ob\u011b p\u0159ij\xedmaj\xed vlastnost ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," pro jin\xe9 hodnoty alfa ne\u017e jedna. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'#fff'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableAlpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se m\xe1 odstranit posuvn\xedk alfa a mo\u017enosti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"presetColors")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": HeX ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0159et\u011bzce")," ur\u010duj\xedc\xed v\xfdchoz\xed barvy v doln\xed \u010d\xe1sti colorpickeru. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  '#D0021B',\n  '#F5A623',\n  '#F8E71C',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n  '#4A90E2',\n  '#50E3C2',\n  '#B8E986',\n  '#000000',\n  '#4A4A4A',\n  '#9B9B9B',\n  '#FFFFFF'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xed\u0159ka n\xe1stroje pro v\xfdb\u011br barvy (v px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev t\u0159\xeddy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 p\u0159i ka\u017ed\xe9 zm\u011bn\u011b barvy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChangeComplete")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 po dokon\u010den\xed zm\u011bny barvy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChangeComplete() {}"),".")),(0,r.kt)("h2",s({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ColorPicker onChangeComplete={ color => {\n    const out = color;\n    /* e.g., returns \n        {\n            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},\n            "hex":"#231a4f",\n            "rgb":{"r":35,"g":26,"b":79,"a":1},\n            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},\n            "oldHue":~250,\n            "source":"rgb"\n        }\n    */\n}} />\n')))}y.isMDXComponent=!0}}]);