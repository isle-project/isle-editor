"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55848],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&y(e,n,t[n]);return e};function h(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:y}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=f?f:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),O=(0,o.l)(g,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(n=null!=b?b:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:N}=(0,i.U)(),[T,x]=(0,r.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==T&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==T&&(P(t),x(r),null!=v&&N(v,String(r)))},q=e=>{var t,n;let r=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;r=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=null!=(n=E[t])?n:E[E.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},g.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=k({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>E.push(e),onKeyDown:q,onClick:C},n),o={className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":T===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function g(e){const t=(0,l.Z)();return r.createElement(h,k({key:String(t)},e))}},800112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return k}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&d(e,n,t[n]);return e};const b={id:"blockquote",title:"blockquote",sidebar_label:"blockquote"},f=void 0,v={unversionedId:"html/blockquote",id:"html/blockquote",title:"blockquote",description:"Composant affichant une citation \xe9tendue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/html/blockquote.md",sourceDirName:"html",slug:"/html/blockquote",permalink:"/fr/docs/html/blockquote",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/blockquote.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614809571,formattedLastUpdatedAt:"3 mars 2021",frontMatter:{id:"blockquote",title:"blockquote",sidebar_label:"blockquote"},sidebar:"docs",previous:{title:"LaTeX Equations",permalink:"/fr/docs/tex"},next:{title:"div",permalink:"/fr/docs/html/div"}},y={},k=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],h={toc:k};function g(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Composant affichant une citation \xe9tendue."),(0,r.kt)("h2",m({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cite")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": source de la citation. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"exemples"}),"Exemples"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"Cite",value:"cite"},{label:"Styled",value:"styled"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<blockquote>\nAfter all is said and done, more is said than done.\n</blockquote>\n"))),(0,r.kt)(l.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<blockquote>\n\n# A Markdown Quote\n\nAfter all is **said** and **done**, more is said than done. \n\n[Francis Crick](https://en.wikipedia.org/wiki/Francis_Crick)\n</blockquote>\n"))),(0,r.kt)(l.Z,{value:"cite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<blockquote cite="https://de.wikipedia.org/wiki/Francis_Crick">\nAfter all is said and done, more is said than done.(Francis Crick)\n<p style={{ fontSize: 14, marginTop: 20}}>The cite property is just for search daemons</p>\n</blockquote>\n'))),(0,r.kt)(l.Z,{value:"styled",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<blockquote \n  style={{ color: 'red',\n    fontFamily: 'Palatino',\n    fontSize: 26, \n    fontStyle: 'italic',\n    background: 'gold',\n    borderLeft: '30px solid red',\n    quotes: \"red\"\n  }}\n>\n    After all is said and done, more is said than done.\n    <br />(Francis Crick)\n</blockquote>\n")))))}g.isMDXComponent=!0}}]);