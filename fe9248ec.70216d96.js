(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(10),a=(n(0),n(254)),i={id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},c={id:"color-picker",title:"Color Picker",description:"A wrapper for the [react-color](https://casesandberg.github.io/react-color/) color picker.",source:"@site/docs/color-picker.md",permalink:"/docs/color-picker",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/color-picker.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"Color Picker",sidebar:"docs",previous:{title:"Clock",permalink:"/docs/clock"},next:{title:"Draggable List",permalink:"/docs/draggable-list"}},l=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A wrapper for the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://casesandberg.github.io/react-color/"}),"react-color")," color picker."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'<ColorPicker onChangeComplete={ color => {\n    const out = color;\n    /* e.g., returns \n        {\n            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},\n            "hex":"#231a4f",\n            "rgb":{"r":35,"g":26,"b":79,"a":1},\n            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},\n            "oldHue":~250,\n            "source":"rgb"\n        }\n    */\n}} />\n')),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/color-picker/"}),"Open interactive preview")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"color")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|object)"),": ",Object(a.b)("inlineCode",{parentName:"li"},"string")," holding an HeX code or an ",Object(a.b)("inlineCode",{parentName:"li"},"object")," holding RGB or HSL values such as ",Object(a.b)("inlineCode",{parentName:"li"},"{ r: 255, g: 255, b: 255 }")," or ",Object(a.b)("inlineCode",{parentName:"li"},"{ h: 0, s: 0, l: .10 }"),", which determines the active color. Both accept an ",Object(a.b)("inlineCode",{parentName:"li"},"a")," property for alpha values other than one. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'#fff'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disableAlpha")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to remove alpha slider and options. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"presetColors")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": HeX ",Object(a.b)("inlineCode",{parentName:"li"},"strings")," specifying the default colors at the bottom of the colorpicker. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[\n  '#D0021B',\n  '#F5A623',\n  '#F8E71C',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n  '#4A90E2',\n  '#50E3C2',\n  '#B8E986',\n  '#000000',\n  '#4A4A4A',\n  '#9B9B9B',\n  '#FFFFFF'\n]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"width")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": width of the color picker (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"200"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback invoked every time color is changed. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChangeComplete")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback invoked once a color change is complete. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChangeComplete() {}"),".")))}b.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);