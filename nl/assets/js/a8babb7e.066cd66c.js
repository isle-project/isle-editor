"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4025],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(t),k=a,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},993369:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return g}});var r=t(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(o)for(var t of o(n))p.call(n,t)&&u(e,t,n[t]);return e};const s={id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},k=void 0,m={unversionedId:"color-picker",id:"color-picker",title:"Color Picker",description:"Een wikkel voor de reactiekleur kleurkiezer.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/nl/docs/color-picker",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/color-picker.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6 dec. 2021",frontMatter:{id:"color-picker",title:"Color Picker",sidebar_label:"Color Picker"},sidebar:"docs",previous:{title:"Clock",permalink:"/nl/docs/clock"},next:{title:"Draggable List",permalink:"/nl/docs/draggable-list"}},f={},g=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],b={toc:g};function v(e){var n,t=e,{components:a}=t,u=((e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=d(d({},b),u),i(n,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Een wikkel voor de ",(0,r.kt)("a",d({parentName:"p"},{href:"https://casesandberg.github.io/react-color/"}),"reactiekleur")," kleurkiezer."),(0,r.kt)("h2",d({},{id:"opties"}),"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variant")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": kleurkiezer variant (ofwel ",(0,r.kt)("inlineCode",{parentName:"li"},"Compact"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Sketch"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Material"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Button"),", of ",(0,r.kt)("inlineCode",{parentName:"li"},"Block"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Sketch'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|object)"),": String",(0,r.kt)("inlineCode",{parentName:"li"},"met een HeX-code of een"),"object",(0,r.kt)("inlineCode",{parentName:"li"},"met RGB- of HSL-waarden zoals"),"{ r: 255, g: 255, b: 255 }",(0,r.kt)("inlineCode",{parentName:"li"},"of"),"{ h: 0, s: 0, l: .10 }",(0,r.kt)("inlineCode",{parentName:"li"},", die de actieve kleur bepaalt. Beide accepteren een "),"a",(0,r.kt)("inlineCode",{parentName:"li"},"eigenschap voor andere alpha-waarden dan een. Default:"),"'#fff'`."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableAlpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de alfa-schuifregelaar en de opties moeten worden verwijderd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"presetColors")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": HeX ",(0,r.kt)("inlineCode",{parentName:"li"},"strings")," met vermelding van de standaardkleuren aan de onderkant van de kleurkiezer. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  '#D0021B',\n  '#F5A623',\n  '#F8E71C',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n  '#4A90E2',\n  '#50E3C2',\n  '#B8E986',\n  '#000000',\n  '#4A4A4A',\n  '#9B9B9B',\n  '#FFFFFF'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": breedte van de kleurkiezer (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": klassennaam. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback ingeroepen elke keer dat de kleur wordt veranderd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChangeComplete")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugroeping aangeroepen zodra een kleurverandering is voltooid. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChangeComplete() {}"),".")),(0,r.kt)("h2",d({},{id:"voorbeelden"}),"Voorbeelden"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ColorPicker onChangeComplete={ color => {\n    const out = color;\n    /* e.g., returns \n        {\n            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},\n            "hex":"#231a4f",\n            "rgb":{"r":35,"g":26,"b":79,"a":1},\n            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},\n            "oldHue":~250,\n            "source":"rgb"\n        }\n    */\n}} />\n')))}v.isMDXComponent=!0}}]);