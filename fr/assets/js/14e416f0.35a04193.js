"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71166],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(202784),a=r(386010),l=r(152670),i=r(258433),o=r(952326),u=r(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))y.call(t,r)&&v(e,r,t[r]);return e};function h(e){var t,r;const{lazy:l,block:c,defaultValue:f,values:b,groupId:y,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=b?b:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),w=(0,i.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(r=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:h[0].props.value;if(null!==O&&!k.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:T}=(0,o.U)(),[x,j]=(0,n.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=y){const e=N[y];null!=e&&e!==x&&k.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,r=E.indexOf(t),n=k[r].value;n!==x&&(C(t),j(n),null!=y&&T(y,String(n)))},S=e=>{var t,r;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;n=null!=(t=E[r])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},v)},k.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>E.push(e),onKeyDown:S,onClick:P},r),i={className:(0,a.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":x===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,l.Z)();return n.createElement(h,g({key:String(t)},e))}},906248:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return g}});var n=r(603905),a=r(751361),l=r(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&m(e,r,t[r]);return e};const f={id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},b=void 0,y={unversionedId:"typewriter",id:"typewriter",title:"Typewriter",description:"Un composant ISLE qui permet de cr\xe9er un effet de machine \xe0 \xe9crire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/typewriter.md",sourceDirName:".",slug:"/typewriter",permalink:"/fr/docs/typewriter",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/typewriter.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 f\xe9vr. 2021",frontMatter:{id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},sidebar:"docs",previous:{title:"Text",permalink:"/fr/docs/text"},next:{title:"Plotly",permalink:"/fr/docs/plotly"}},v={},g=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],h={toc:g};function k(e){var t,r=e,{components:i}=r,m=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},h),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un composant ISLE qui permet de cr\xe9er un effet de machine \xe0 \xe9crire."),(0,n.kt)("h2",d({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"delay")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": d\xe9lai initial avant le d\xe9marrage de la machine \xe0 \xe9crire (en millisecondes). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hold")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": si le texte est un tableau de cha\xeenes de caract\xe8res, maintenez enfonc\xe9e la dur\xe9e sp\xe9cifi\xe9e ; le texte complet sera affich\xe9 avant de passer \xe0 l'\xe9l\xe9ment suivant du tableau. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"2000"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"interval")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": l'intervalle de la machine \xe0 \xe9crire (en millisecondes). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"random")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),': si le hasard est d\xe9fini, les frappes seront effectu\xe9es avec un certain degr\xe9 de hasard "humain". Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sound")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": la frappe dactylographi\xe9e sera \xe9galement entendue. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"text")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": le texte int\xe9gral \xe0 afficher. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,n.kt)("h2",d({},{id:"exemples"}),"Exemples"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Delay and Sound",value:"delayAndSound"},{label:"With CSS",value:"withCSS"},{label:"Array of Strings",value:"array"},{label:"Humanized",value:"humanized"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Typewriter text="Lorem ipsum" />\n'))),(0,n.kt)(l.Z,{value:"delayAndSound",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Typewriter text="Lorem ipsum" sound delay={2000} />\n'))),(0,n.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Typewriter text=\"Styled Text\" style={{ fontSize: 66, color: 'red'}} />\n"))),(0,n.kt)(l.Z,{value:"array",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />\n'))),(0,n.kt)(l.Z,{value:"humanized",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Typewriter text="This is a humanized performance" random interval={170} />\n')))))}k.isMDXComponent=!0}}]);