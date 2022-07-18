"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77609],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))v.call(t,r)&&h(e,r,t[r]);return e};function g(e){var t,r;const{lazy:l,block:p,defaultValue:d,values:f,groupId:v,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,o.l)(O,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(r=null!=d?d:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?r:g[0].props.value;if(null!==w&&!O.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:x}=(0,i.U)(),[N,E]=(0,n.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==N&&O.some((t=>t.value===e))&&E(e)}const S=e=>{const t=e.currentTarget,r=T.indexOf(t),n=O[r].value;n!==N&&(P(t),E(n),null!=v&&x(v,String(n)))},C=e=>{var t,r;let n=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;n=null!=(t=T[r])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},O.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>T.push(e),onKeyDown:C,onFocus:S,onClick:S},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":N===e})},m(l,b(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function O(e){const t=(0,l.Z)();return n.createElement(g,y({key:String(t)},e))}},93266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return y}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&m(e,r,t[r]);return e};const d={id:"h3",title:"h3",sidebar_label:"h3"},f=void 0,v={unversionedId:"html/h3",id:"html/h3",title:"h3",description:"Ebene 3 Abschnitts\xfcberschrift.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/html/h3.md",sourceDirName:"html",slug:"/html/h3",permalink:"/de/docs/html/h3",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h3.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23. Feb. 2021",frontMatter:{id:"h3",title:"h3",sidebar_label:"h3"},sidebar:"docs",previous:{title:"h2",permalink:"/de/docs/html/h2"},next:{title:"h4",permalink:"/de/docs/html/h4"}},h={},y=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:y};function O(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=b(b({},g),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Ebene 3 Abschnitts\xfcberschrift."),(0,n.kt)("h2",b({},{id:"optionen"}),"Optionen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",b({},{id:"beispiele"}),"Beispiele"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Outline",value:"outline"},{label:"Emboss",value:"emboss"},{label:"Blurred",value:"blurred"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h3>Lesson Sub-Section</h3>\n"))),(0,n.kt)(l.Z,{value:"outline",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h3\n  style= {{  fontSize: 63, color: 'transparent', webkitTextStroke: '2px navy' }}\n>Outline</h3>\n"))),(0,n.kt)(l.Z,{value:"emboss",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h3\n  style= {{  \n    fontSize: 44,\n    color: 'silver', \n    textShadow:  '-1px 1px 2px rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(255, 255, 255, 0.9)'\n  }}\n>Emboss</h3>\n"))),(0,n.kt)(l.Z,{value:"blurred",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h3\n  style= {{  \n    fontSize: 30,\n    color: 'transparent',\n    textShadow: '0 0 4px rgba(0,0,0,0.5)'\n  }}\n>Blurred</h3>\n")))))}O.isMDXComponent=!0}}]);