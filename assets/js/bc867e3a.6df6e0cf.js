"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15777],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),p=n(638849),u="tabList__CuJ",s="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&k(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==C&&!h.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,o.U)(),[S,j]=(0,a.useState)(C),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=v){const e=O[v];null!=e&&e!==S&&h.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==S&&(x(t),j(a),null!=v&&w(v,String(a)))},D=e=>{var t,n;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},k)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=y({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:e=>T.push(e),onKeyDown:D,onClick:E},n),i={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":S===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function h(e){const t=(0,l.Z)();return a.createElement(g,y({key:String(t)},e))}},780971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},b=void 0,v={unversionedId:"flippable-card",id:"flippable-card",title:"Flippable Card",description:"An ISLE component that allows two render two-sides.",source:"@site/docs/flippable-card.md",sourceDirName:".",slug:"/flippable-card",permalink:"/docs/flippable-card",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614561866,formattedLastUpdatedAt:"Mar 1, 2021",frontMatter:{id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},sidebar:"docs",previous:{title:"Draggable List",permalink:"/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/docs/js-shell"}},k={},y=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],g={toc:y};function h(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),o(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"An ISLE component that allows two render two-sides."),(0,a.kt)("h2",m({},{id:"options"}),"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"button")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": button label. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"draggable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether the card may be dragged around. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": the speed by which the card turns from background to foreground, in seconds. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": the speed by which the card turns from foreground to background, in seconds. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": indicates whether the flip process may be executed just once. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"perspective")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": CSS property value to give 3d-positioned element a perspective. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"size")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": size of the card (sets its ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"height"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"250"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether the flippable card is disabled. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": flip state of the card (for controlled component). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": initial flip state of the card. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS style of the container. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS style of the front card. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS style of the back card. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked once the card is flipped; receives the current flipped status as its sole argument. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,a.kt)("h2",m({},{id:"examples"}),"Examples"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FlippableCard containerStyle={{ float: \'none\' }} size={200}>\n  <img src="https://bit.ly/2YU5EbU" />\n  <img src="https://bit.ly/3aGv9mp" />\n</FlippableCard>\n'))),(0,a.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<FlippableCard \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),(0,a.kt)(l.Z,{value:"slowMo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}h.isMDXComponent=!0}}]);