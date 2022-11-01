"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72791],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&h(e,r,t[r]);if(v)for(var r of v(t))b.call(t,r)&&h(e,r,t[r]);return e};function g(e){var t,r;const{lazy:l,block:p,defaultValue:v,values:f,groupId:b,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,o.l)(k,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===v?v:null!=(r=null!=v?v:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?r:g[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:j}=(0,i.U)(),[E,x]=(0,n.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=b){const e=T[b];null!=e&&e!==E&&k.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,r=N.indexOf(t),n=k[r].value;n!==E&&(S(t),x(n),null!=b&&j(b,String(n)))},I=e=>{var t,r;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;n=null!=(t=N[r])?t:N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=null!=(r=N[t])?r:N[N.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},k.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>N.push(e),onKeyDown:I,onClick:P},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":E===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function k(e){const t=(0,l.Z)();return n.createElement(g,y({key:String(t)},e))}},682773:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&d(e,r,t[r]);return e};const v={id:"div",title:"div",sidebar_label:"div"},f=void 0,b={unversionedId:"html/div",id:"html/div",title:"div",description:"\xc9l\xe9ment g\xe9n\xe9rique du conteneur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/html/div.md",sourceDirName:"html",slug:"/html/div",permalink:"/fr/docs/html/div",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/div.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614806718,formattedLastUpdatedAt:"3 mars 2021",frontMatter:{id:"div",title:"div",sidebar_label:"div"},sidebar:"docs",previous:{title:"blockquote",permalink:"/fr/docs/html/blockquote"},next:{title:"hr",permalink:"/fr/docs/html/hr"}},h={},y=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],g={toc:y};function k(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\xc9l\xe9ment g\xe9n\xe9rique du conteneur."),(0,n.kt)("h2",m({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"exemples"}),"Exemples"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Regular HTML",value:"regularHTML"},{label:"With Markdown",value:"withMarkdown"},{label:"With CSS",value:"withCSS"},{label:"Embedded Component",value:"embeddedISLE"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div>\n    Use a div as a generic container for other content.\n</div>\n"))),(0,n.kt)(l.Z,{value:"regularHTML",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),(0,n.kt)(l.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div>\n  1. Ordered List - First item\n  2. Second item\n  3. Third item\n  `var a = 77;`\n  `this is a line of code;`  \n  \n  [Link to Google](https://www.google.com)\n  ![The alternate text if you hover over the image](https://bit.ly/2MGl7K0)\n</div>\n"))),(0,n.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div style={{ color: 'darkred', background: 'lightblue', padding: '6px'}}>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),(0,n.kt)(l.Z,{value:"embeddedISLE",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div style={{ padding: '6px'}}>\n    <h3>Embedded ISLE Component</h3>\n    <hr />\n    <p>Plus - you can embed any ISLE component in here, like this R-Shell</p>\n    <hr />\n    <RShell code=\"abs(c(-2,3,-1))\" />\n</div>\n")))))}k.isMDXComponent=!0}}]);