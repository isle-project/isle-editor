"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78067],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),p="tabList__CuJ",s="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&f(e,n,t[n]);if(y)for(var n of y(t))k.call(t,n)&&f(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:y,values:b,groupId:k,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===y?y:null!=(n=null!=y?y:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==j&&!v.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:z}=(0,o.U)(),[O,C]=(0,a.useState)(j),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=h[k];null!=e&&e!==O&&v.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==O&&(x(t),C(a),null!=k&&z(k,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;a=null!=(t=S[n])?t:S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=null!=(n=S[t])?n:S[S.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},f)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=w({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>S.push(e),onKeyDown:E,onFocus:P,onClick:P},n),i={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":O===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,l.Z)();return a.createElement(g,w({key:String(t)},e))}},304591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return y},metadata:function(){return k},toc:function(){return w}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&m(e,n,t[n]);return e};const y={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},b=void 0,k={unversionedId:"input/slider-input",id:"input/slider-input",title:"Slider Input",description:"Element wej\u015bciowy suwaka. Mo\u017ce by\u0107 u\u017cywany jako cz\u0119\u015b\u0107 deski rozdzielczej ISLE lub autonomiczny. W tym ostatnim przypadku, chcesz obs\u0142ugiwa\u0107 zmiany za pomoc\u0105 atrybutu onChange lub powi\u0105za\u0107 warto\u015b\u0107 ze zmienn\u0105 globaln\u0105 za pomoc\u0105 atrybutu bind.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/pl/docs/input/slider-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 maj 2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/pl/docs/input/select-input"},next:{title:"Text Area",permalink:"/pl/docs/input/text-area"}},f={},w=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],g={toc:w};function v(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Element wej\u015bciowy suwaka. Mo\u017ce by\u0107 u\u017cywany jako cz\u0119\u015b\u0107 deski rozdzielczej ISLE lub autonomiczny. W tym ostatnim przypadku, chcesz obs\u0142ugiwa\u0107 zmiany za pomoc\u0105 atrybutu ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," lub powi\u0105za\u0107 warto\u015b\u0107 ze zmienn\u0105 globaln\u0105 za pomoc\u0105 atrybutu ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,a.kt)("h2",d({},{id:"opcje"}),"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Warto\u015b\u0107 pocz\u0105tkowa suwaka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wej\u015bcie suwaka jest aktywne, czy nie. Je\u015bli jest ustawiona na warto\u015b\u0107 true, suwak b\u0119dzie obecny na ekranie, cho\u0107 wyszarzony. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje ustawienie suwaka w linii z tekstem lub na zewn\u0105trz. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": napis na wej\u015bciu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Maksymalna warto\u015b\u0107 suwaka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": etykieta wy\u015bwietlana po prawej stronie suwaka zamiast warto\u015bci maksymalnej. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Minimalna warto\u015b\u0107 suwaka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": etykieta wy\u015bwietlana na lewo od suwaka zamiast warto\u015bci minimalnej. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne z now\u0105 warto\u015bci\u0105 przy zmianie warto\u015bci suwaka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precision")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": zaokr\u0105glenie wej\u015bcia. Warto\u015b\u0107 zostanie zaokr\u0105glona tak, aby nie zawiera\u0142a wi\u0119cej znacz\u0105cych cyfr ni\u017c precyzja. Na przyk\u0142ad, je\u015bli chcemy u\u017cywa\u0107 tylko liczb ca\u0142kowitych, u\u017cyjemy precyzji 10, a je\u015bli chcemy zaokr\u0105gli\u0107 do setek, u\u017cyjemy precyzji 0,001. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": wielko\u015b\u0107 kroku suwaka. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy ukry\u0107 ko\u0144c\xf3wk\u0119 narz\u0119dzia. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS w linii dla element\xf3w wej\u015bciowych liczb. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Styl CSS w linii dla komponentu wej\u015bciowego zakresu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",d({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,a.kt)(l.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,a.kt)(l.Z,{value:"customStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}v.isMDXComponent=!0}}]);