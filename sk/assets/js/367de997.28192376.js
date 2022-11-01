"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74404],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function s({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(202784),r=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),p="tabList__CuJ",c="tabItem_LNqP",s=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))f.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:s,defaultValue:b,values:k,groupId:f,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=k?k:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,o.l)(g,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(n=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!g.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:j}=(0,i.U)(),[w,x]=(0,a.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:z}=(0,u.o5)();if(null!=f){const e=C[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=g[n].value;a!==w&&(z(t),x(a),null!=f&&j(f,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=h({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:E,onClick:T},n),o={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function g(e){const t=(0,l.Z)();return a.createElement(y,h({key:String(t)},e))}},949162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return h}});var a=n(603905),r=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&m(e,n,t[n]);return e};const b={id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},k=void 0,f={unversionedId:"input/checkbox-input",id:"input/checkbox-input",title:"Checkbox Input",description:"Vstupn\xe1 zlo\u017eka za\u0161krt\xe1vacieho pol\xed\u010dka. M\xf4\u017ee sa pou\u017e\xedva\u0165 ako s\xfa\u010das\u0165 ovl\xe1dacieho panela ISLE alebo samostatne. V druhom pr\xedpade chcete spracov\xe1va\u0165 zmeny pomocou atrib\xfatu onChange alebo viaza\u0165 hodnotu na glob\xe1lnu premenn\xfa pomocou atrib\xfatu bind.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/input/checkbox.md",sourceDirName:"input",slug:"/input/checkbox-input",permalink:"/sk/docs/input/checkbox-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/checkbox.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},sidebar:"docs",previous:{title:"Wikipedia",permalink:"/sk/docs/wikipedia"},next:{title:"Number Input",permalink:"/sk/docs/input/number-input"}},v={},h=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],y={toc:h};function g(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Vstupn\xe1 zlo\u017eka za\u0161krt\xe1vacieho pol\xed\u010dka. M\xf4\u017ee sa pou\u017e\xedva\u0165 ako s\xfa\u010das\u0165 ovl\xe1dacieho panela ISLE alebo samostatne. V druhom pr\xedpade chcete spracov\xe1va\u0165 zmeny pomocou atrib\xfatu ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," alebo viaza\u0165 hodnotu na glob\xe1lnu premenn\xfa pomocou atrib\xfatu ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,a.kt)("h2",d({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zov glob\xe1lnej premennej, do ktorej sa m\xe1 priradi\u0165 hodnota za\u0161krt\xe1vacieho pol\xed\u010dka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": logick\xe1 hodnota ozna\u010duj\xfaca predvolen\xfa hodnotu za\u0161krt\xe1vacieho pol\xed\u010dka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": hodnota za\u0161krt\xe1vacieho pol\xed\u010dka (pre kontrolovan\xfd komponent). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ozna\u010duje, \u010di je vstup akt\xedvny alebo nie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ozna\u010duje, \u010di sa za\u0161krt\xe1vacie pol\xed\u010dko zobrazuje v riadku. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcia sp\xe4tn\xe9ho volania, ktor\xe1 sa vyvol\xe1 po kliknut\xed na za\u0161krt\xe1vacie pol\xed\u010dko. Funkcia sa vol\xe1 s aktu\xe1lnou hodnotou za\u0161krt\xe1vacieho pol\xed\u010dka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": text zobrazen\xfd ved\u013ea za\u010diarkavacieho pol\xed\u010dka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": text zobrazen\xfd pri prejden\xed nad za\u010diarkavacie pol\xed\u010dko. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": poz\xedcia n\xe1povedy tla\u010didla. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",d({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Inline",value:"inline"},{label:"With Style",value:"withStyle"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CheckboxInput legend="Take the logarithm" />\n'))),(0,a.kt)(l.Z,{value:"inline",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<p>Please click\n<CheckboxInput\n    inline defaultValue={false}\n/>\nto confirm that you will follow our netiquette.</p>\n"))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<CheckboxInput\n    style={{ fontSize: 30, color: 'blue'}}\n    legend=\"Click to confirm\"\n    defaultValue={false}\n/>\n"))),(0,a.kt)(l.Z,{value:"withCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<CheckboxInput\n    legend=\"Click to confirm...\"\n    onChange={( value ) => {\n        alert( 'New value: '+value );\n    }}\n/>\n")))))}g.isMDXComponent=!0}}]);