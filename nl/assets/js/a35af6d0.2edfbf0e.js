"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2453],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function s({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),c="tabList__CuJ",p="tabItem_LNqP",s=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&k(e,n,t[n]);return e};function h(e){var t,n;const{lazy:l,block:s,defaultValue:b,values:f,groupId:v,className:k}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,i.l)(y,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(n=null!=b?b:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,o.U)(),[j,x]=(0,a.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=v){const e=O[v];null!=e&&e!==j&&y.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==j&&(I(t),x(a),null!=v&&C(v,String(a)))},T=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},k)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>E.push(e),onKeyDown:T,onFocus:P,onClick:P},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function y(e){const t=(0,l.Z)();return a.createElement(h,g({key:String(t)},e))}},7945:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&d(e,n,t[n]);return e};const b={id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},f=void 0,v={unversionedId:"input/checkbox-input",id:"input/checkbox-input",title:"Checkbox Input",description:"Een checkbox-invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het on-Change attribuut of de waarde binden aan een globale variabele via het bind attribuut.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/input/checkbox.md",sourceDirName:"input",slug:"/input/checkbox-input",permalink:"/nl/docs/input/checkbox-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/checkbox.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"25 feb. 2021",frontMatter:{id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},sidebar:"docs",previous:{title:"Wikipedia",permalink:"/nl/docs/wikipedia"},next:{title:"Number Input",permalink:"/nl/docs/input/number-input"}},k={},g=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],h={toc:g};function y(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Een checkbox-invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het ",(0,a.kt)("inlineCode",{parentName:"p"},"on-Change")," attribuut of de waarde binden aan een globale variabele via het ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," attribuut."),(0,a.kt)("h2",m({},{id:"opties"}),"Opties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": naam van de globale variabele voor de waarde van het selectievakje dat moet worden toegewezen aan. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": booleaanse waarde die de standaardwaarde van het selectievakje aangeeft. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": waarde van het selectievakje (voor de gecontroleerde component). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of de ingang actief is of niet. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of het selectievakje inline wordt weergegeven. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die moet worden aangeroepen wanneer het selectievakje wordt aangeklikt. De functie wordt aangeroepen met de huidige waarde van het selectievakje. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": tekst die naast het selectievakje wordt weergegeven. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tekst die wordt weergegeven wanneer het selectievakje wordt aangekruist. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": positie van de knop tooltip. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",m({},{id:"voorbeelden"}),"Voorbeelden"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Inline",value:"inline"},{label:"With Style",value:"withStyle"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CheckboxInput legend="Take the logarithm" />\n'))),(0,a.kt)(l.Z,{value:"inline",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<p>Please click\n<CheckboxInput\n    inline defaultValue={false}\n/>\nto confirm that you will follow our netiquette.</p>\n"))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<CheckboxInput\n    style={{ fontSize: 30, color: 'blue'}}\n    legend=\"Click to confirm\"\n    defaultValue={false}\n/>\n"))),(0,a.kt)(l.Z,{value:"withCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<CheckboxInput\n    legend=\"Click to confirm...\"\n    onChange={( value ) => {\n        alert( 'New value: '+value );\n    }}\n/>\n")))))}y.isMDXComponent=!0}}]);