"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41985],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},440034:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(202784),a=t(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function d({children:e,hidden:n,className:t}){return r.createElement("div",((e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))s.call(n,t)&&p(e,t,n[t]);return e})({role:"tabpanel",className:(0,a.Z)(l,t)},{hidden:n}),e)}},751361:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(202784),a=t(386010),l=t(152670),i=t(258433),o=t(952326),u=t(638849),s="tabList__CuJ",p="tabItem_LNqP",d=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&k(e,t,n[t]);if(b)for(var t of b(n))g.call(n,t)&&k(e,t,n[t]);return e};function h(e){var n,t;const{lazy:l,block:d,defaultValue:b,values:f,groupId:g,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:h.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),N=(0,i.l)(y,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(t=null!=b?b:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:S,setTabGroupChoices:O}=(0,o.U)(),[C,j]=(0,r.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=S[g];null!=e&&e!==C&&y.some((n=>n.value===e))&&j(e)}const D=e=>{const n=e.currentTarget,t=x.indexOf(n),r=y[t].value;r!==C&&(E(n),j(r),null!=g&&O(g,String(r)))},I=e=>{var n,t;let r=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;r=null!=(t=x[n])?t:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},k)},y.map((({value:e,label:n,attributes:t})=>{return r.createElement("li",(l=v({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>x.push(e),onKeyDown:I,onClick:D},t),i={className:(0,a.Z)("tabs__item",p,null==t?void 0:t.className,{"tabs__item--active":C===e})},c(l,m(i))),null!=n?n:e);var l,i}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function y(e){const n=(0,l.Z)();return r.createElement(h,v({key:String(n)},e))}},233676:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return b},metadata:function(){return g},toc:function(){return v}});var r=t(603905),a=t(751361),l=t(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))d.call(n,t)&&c(e,t,n[t]);return e};const b={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},f=void 0,g={unversionedId:"input/slider-input",id:"input/slider-input",title:"Slider Input",description:"Eine Schieberegler-Eingabekomponente. Kann als Teil eines ISLE Dashboards oder eigenst\xe4ndig verwendet werden. Im letzteren Fall wollen Sie \xc4nderungen \xfcber das Attribut onChange behandeln oder den Wert \xfcber das Attribut bind an eine globale Variable binden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/de/docs/input/slider-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614811488,formattedLastUpdatedAt:"3. M\xe4rz 2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/de/docs/input/select-input"},next:{title:"Text Area",permalink:"/de/docs/input/text-area"}},k={},v=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],h={toc:v};function y(e){var n,t=e,{components:i}=t,c=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},h),c),o(n,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Eine Schieberegler-Eingabekomponente. Kann als Teil eines ISLE Dashboards oder eigenst\xe4ndig verwendet werden. Im letzteren Fall wollen Sie \xc4nderungen \xfcber das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," behandeln oder den Wert \xfcber das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," an eine globale Variable binden."),(0,r.kt)("h2",m({},{id:"optionen"}),"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Der Startwert des Schiebereglers. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Schieberegler-Eingang aktiv ist oder nicht. Wenn auf true gesetzt, ist der Schieberegler auf dem Bildschirm vorhanden, wenn auch ausgegraut. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Schieberegler inline mit Text oder au\xdferhalb platziert werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Beschriftung des Eingangs. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Der maximale Wert des Schiebereglers. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Beschriftung, die rechts vom Schieberegler anstelle des Maximalwerts angezeigt wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"min")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Der minimale Wert des Schiebereglers. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Beschriftung, die links vom Schieberegler anstelle des Mindestwerts angezeigt wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der mit dem neuen Wert aufgerufen wird, wenn sich der Schiebereglerwert \xe4ndert. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Rundung der Eingabe. Der Wert wird so gerundet, dass er nicht mehr signifikante Stellen hat als die Genauigkeit. Wenn man z. B. nur ganze Zahlen verwenden m\xf6chte, w\xfcrde man eine Genauigkeit von 10 verwenden, w\xe4hrend man, wenn man auf die Hunderterstelle runden m\xf6chte, eine Genauigkeit von 0,001 verwenden w\xfcrde. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": Schrittweite des Schiebereglers. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Tooltip ausgeblendet werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile f\xfcr Zahleneingabekomponente. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inlinestil f\xfcr Bereichseingabekomponente. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"beispiele"}),"Beispiele"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,r.kt)(l.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,r.kt)(l.Z,{value:"customStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}y.isMDXComponent=!0}}]);