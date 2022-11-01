"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47174],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(202784),l=a(386010),r="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function m({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,l.Z)(r,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),l=a(386010),r=a(152670),i=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&g(e,a,t[a]);if(k)for(var a of k(t))f.call(t,a)&&g(e,a,t[a]);return e};function y(e){var t,a;const{lazy:r,block:m,defaultValue:k,values:b,groupId:f,className:g}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===k?k:null!=(a=null!=k?k:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:z}=(0,o.U)(),[w,C]=(0,n.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,a=P.indexOf(t),n=h[a].value;n!==w&&(T(t),C(n),null!=f&&z(f,String(n)))},E=e=>{var t,a;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;n=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(a=P[t])?a:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=v({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:E,onClick:x},a),i={className:(0,l.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===e})},c(r,d(i))),null!=t?t:e);var r,i}))),r?(0,n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,r.Z)();return n.createElement(y,v({key:String(t)},e))}},767530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return v}});var n=a(603905),l=a(751361),r=a(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&c(e,a,t[a]);return e};const k={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},b=void 0,f={unversionedId:"r/r-shell",id:"r/r-shell",title:"R Shell",description:"Egy interakt\xedv R Shell, amely az OpenCPU seg\xedts\xe9g\xe9vel R parancsok v\xe9grehajt\xe1s\xe1ra haszn\xe1lhat\xf3 a felh\u0151ben.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/r/shell.md",sourceDirName:"r",slug:"/r/r-shell",permalink:"/hu/docs/r/r-shell",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. j\xfan. 1.",frontMatter:{id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},sidebar:"docs",previous:{title:"R Plot",permalink:"/hu/docs/r/r-plot"},next:{title:"R Table",permalink:"/hu/docs/r/r-table"}},g={},v=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],y={toc:v};function h(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),c),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Egy interakt\xedv R Shell, amely az ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.opencpu.org/"}),"OpenCPU")," seg\xedts\xe9g\xe9vel R parancsok v\xe9grehajt\xe1s\xe1ra haszn\xe1lhat\xf3 a felh\u0151ben."),(0,n.kt)("h2",d({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": Ki\xe9rt\xe9kelend\u0151 R k\xf3d. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solution")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),': programoz\xe1si k\xe9rd\xe9sek eset\xe9n a probl\xe9ma hivatalos megold\xe1s\xe1t jelent\u0151 R k\xf3d "string".. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hints")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": a programoz\xe1si k\xe9rd\xe9sekn\xe9l a probl\xe9ma megk\xf6zel\xedt\xe9s\xe9hez \xfatmutat\xe1st ny\xfajt\xf3 tippek sorozata. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"addPreceding")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha true-ra van \xe1ll\xedtva, a h\xe9j ki\xe9rt\xe9keli az aktu\xe1lis komponens \xf6sszes k\xf3dj\xe1t \xe9s a leck\xe9ben el\u0151fordul\xf3 \xf6sszes el\u0151z\u0151t.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"libraries")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),': R k\xf6nyvt\xe1rak, amelyeket automatikusan be kell t\xf6lteni, amikor a bemeneti "k\xf3d" v\xe9grehajt\xe1sra ker\xfcl.. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"precompute")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az alap\xe9rtelmezett k\xf3dot v\xe9gre kell-e hajtani, ha a komponens fel van szerelve.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array)"),': R k\xf3d "string" (vagy R k\xf3dblokkok "t\xf6mbje"), amelyet a "code"-ban t\xe1rolt k\xf3d el\xe9 kell illeszteni a ki\xe9rt\xe9kel\xe9skor.. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"chat")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a csoportos cseveg\xe9s funkci\xf3t enged\xe9lyezni kell-e. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disabled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy letiltja-e az \xf6sszes felhaszn\xe1l\xf3i bemenetet, \xe9s statikuss\xe1 teszi-e a k\xf3dblokkot.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lines")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": a megjelen\xedtend\u0151 sorok sz\xe1ma. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"resettable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e egy reset gomb az alap\xe9rtelmezett k\xf3dbevitel vissza\xe1ll\xedt\xe1s\xe1hoz.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": visszah\xedv\xe1s, amely a sz\xf6vegmez\u0151 bemenet\xe9nek megv\xe1ltoz\xe1sakor h\xedv\xf3dik el\u0151.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),': visszah\xedv\xe1s, amelyet az "\xc9rt\xe9kel\xe9s" gombra kattint\xe1skor h\xedvnak el\u0151.. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onResult")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),': visszah\xedv\xe1s, amelyet mindig akkor h\xedvnak meg, amikor a k\xf3dv\xe9grehajt\xe1s eredm\xe9ny\xe9t megkapj\xe1k a felh\u0151b\u0151l. Az eredm\xe9ny "string" az egyetlen argumentumk\xe9nt ker\xfcl \xe1tad\xe1sra a callback f\xfcggv\xe9nynek.. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,n.kt)("h2",d({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,n.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiline",value:"multiline"},{label:"Precompute & Disabled",value:"precompute"},{label:"Using Libraries",value:"usingLibraries"},{label:"Add Preceding Code",value:"addPreceding"},{label:"Hints & Solution",value:"hintsAndSolution"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n'))),(0,n.kt)(r.Z,{value:"multiline",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RShell code={`x <- runif( 100 );\ny <- 3.0 * x + rnorm( 100 );\nfit <- lm( y ~ x );\nsummary( fit );\n`} resettable />\n"))),(0,n.kt)(r.Z,{value:"precompute",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell\n    code="abs(c(-2,3,-1))"\n    precompute\n    disabled\n    lines={2}\n/>\n'))),(0,n.kt)(r.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RShell libraries={['dplyr']} code={'starwars %>% filter(species == \"Droid\")'} lines={2} />\n"))),(0,n.kt)(r.Z,{value:"addPreceding",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell code="library(dplyr)" lines={2} disabled />\n\n<RShell code={\'starwars %>% filter(species == "Droid")\'} addPreceding lines={2} />\n'))),(0,n.kt)(r.Z,{value:"hintsAndSolution",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.\n\n<RShell \n    id="prob1a"\n    code="" \n    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,\ndata = Cars93)\nsummary(cars.lm)`} \n    lines={5} \n    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don\'t remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}\n/>\n')))))}h.isMDXComponent=!0}}]);