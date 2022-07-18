"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92781],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(202784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(202784),n=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,n.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(202784),n=a(386010),l=a(152670),i=a(258433),o=a(952326),u=a(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&v(e,a,t[a]);if(b)for(var a of b(t))f.call(t,a)&&v(e,a,t[a]);return e};function y(e){var t,a;const{lazy:l,block:c,defaultValue:b,values:k,groupId:f,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=k?k:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:C}=(0,o.U)(),[w,x]=(0,r.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=P.indexOf(t),r=h[a].value;r!==w&&(D(t),x(r),null!=f&&C(f,String(r)))},E=e=>{var t,a;let r=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;r=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=null!=(a=P[t])?a:P[P.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":c},v)},h.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:E,onFocus:T,onClick:T},a),i={className:(0,n.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,l.Z)();return r.createElement(y,g({key:String(t)},e))}},620409:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return g}});var r=a(603905),n=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&d(e,a,t[a]);return e};const b={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},k=void 0,f={unversionedId:"plots/barchart",id:"plots/barchart",title:"Bar Chart",description:"Riba graafik.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/plots/barchart.md",sourceDirName:"plots",slug:"/plots/barchart",permalink:"/et/docs/plots/barchart",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. juuni 2021",frontMatter:{id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},sidebar:"docs",previous:{title:"Plotly",permalink:"/et/docs/plotly"},next:{title:"Box Plot",permalink:"/et/docs/plots/boxplot"}},v={},g=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],y={toc:g};function h(e){var t,a=e,{components:i}=a,d=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Riba graafik."),(0,r.kt)("h2",m({},{id:"valikud"}),"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\xe4\xe4rtuste massiivi objekt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": muutuja kuvamiseks. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": r\xfchmitav muutuja. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yvar")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": vabatahtlik muutuja, mida kasutatakse veergude k\xf5rguste jaoks (koos ",(0,r.kt)("inlineCode",{parentName:"li"},"summary"),"ga). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"summary")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": selle statistika nimi, mida arvutatakse ",(0,r.kt)("inlineCode",{parentName:"li"},"yvar")," jaoks ja mis kuvatakse iga kategooria jaoks tulba k\xf5rgusena (kas ",(0,r.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Sum"),", ...).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"horizontal")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kas kuvada ribasid horisontaalselt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stackBars")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": grupeerimisel kontrollib, kas ribad \xfcksteise peale virnastada.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"relative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kas arvutada suhtelised sagedused iga r\xfchma sees. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"totalPercent")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kas kuvada \xfcldised tulbad suhteliste sagedustena. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"xOrder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': kas "kokku", "kategooria", "miinimum", "maksimum", "keskmine" v\xf5i "mediaan".. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": kuidas j\xe4rjestada ribasid x-telje \xe4\xe4res (",(0,r.kt)("inlineCode",{parentName:"li"},"ascending")," v\xf5i ",(0,r.kt)("inlineCode",{parentName:"li"},"descending"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'ascending'"),".")),(0,r.kt)("h2",m({},{id:"n\xe4ited"}),"N\xe4ited"),(0,r.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,r.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"descending",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),(0,r.kt)(l.Z,{value:"relativeStackedBars",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}h.isMDXComponent=!0}}]);