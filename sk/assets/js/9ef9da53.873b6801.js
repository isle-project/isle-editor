"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26051],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&b(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&b(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:k,values:v,groupId:f,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=v?v:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===k?k:null!=(n=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:C}=(0,o.U)(),[w,P]=(0,a.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==w&&(x(t),P(a),null!=f&&C(f,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},b)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=y({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>T.push(e),onKeyDown:E,onClick:D},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,l.Z)();return a.createElement(g,y({key:String(t)},e))}},973733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return y}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const k={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},v=void 0,f={unversionedId:"r/r-shell",id:"r/r-shell",title:"R Shell",description:"Interakt\xedvny R Shell, ktor\xfd mo\u017eno pou\u017ei\u0165 na vykon\xe1vanie pr\xedkazov R v cloude pomocou OpenCPU.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/r/shell.md",sourceDirName:"r",slug:"/r/r-shell",permalink:"/sk/docs/r/r-shell",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},sidebar:"docs",previous:{title:"R Plot",permalink:"/sk/docs/r/r-plot"},next:{title:"R Table",permalink:"/sk/docs/r/r-table"}},b={},y=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],g={toc:y};function h(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Interakt\xedvny R Shell, ktor\xfd mo\u017eno pou\u017ei\u0165 na vykon\xe1vanie pr\xedkazov R v cloude pomocou ",(0,a.kt)("a",m({parentName:"p"},{href:"https://www.opencpu.org/"}),"OpenCPU"),"."),(0,a.kt)("h2",m({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"code")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": K\xf3d R, ktor\xfd sa m\xe1 vyhodnoti\u0165. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": pre program\xe1torsk\xe9 ot\xe1zky, R k\xf3d ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," predstavuj\xfaci ofici\xe1lne rie\u0161enie probl\xe9mu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": pre ot\xe1zky t\xfdkaj\xface sa programovania, rad tipov poskytuj\xfacich n\xe1vod, ako pristupova\u0165 k probl\xe9mu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"addPreceding")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ak je nastaven\xe1 na true, shell vyhodnot\xed v\u0161etok k\xf3d z aktu\xe1lnej zlo\u017eky a v\u0161etk\xfdch predch\xe1dzaj\xfacich, ktor\xe9 sa v lekcii vyskytli. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"libraries")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": Kni\u017enice R, ktor\xe9 by sa mali automaticky na\u010d\xedta\u0165 pri spusten\xed vstupn\xe9ho k\xf3du. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precompute")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa m\xe1 po pripojen\xed komponentu vykona\u0165 predvolen\xfd k\xf3d.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|array)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"re\u0165azec")," k\xf3du R (alebo ",(0,a.kt)("inlineCode",{parentName:"li"},"p\xe1smo")," blokov k\xf3du R), ktor\xfd sa pri vyhodnocovan\xed prid\xe1 ku k\xf3du ulo\u017een\xe9mu v ",(0,a.kt)("inlineCode",{parentName:"li"},"code"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di m\xe1 by\u0165 povolen\xe1 funkcia skupinov\xe9ho chatu.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa zak\xe1za\u0165 v\u0161etky pou\u017e\xedvate\u013esk\xe9 vstupy a blok k\xf3du m\xe1 by\u0165 statick\xfd.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lines")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det riadkov, ktor\xe9 sa maj\xfa zobrazi\u0165. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resettable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa m\xe1 zobrazi\u0165 tla\u010didlo na obnovenie predvolen\xe9ho zad\xe1vania k\xf3du.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 v\u017edy, ke\u010f sa zmen\xed vstup do textov\xe9ho po\u013ea. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 v\u017edy po kliknut\xed na tla\u010didlo ",(0,a.kt)("inlineCode",{parentName:"li"},"Vyhodnoti\u0165"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onResult")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 v\u017edy, ke\u010f sa z cloudu z\xedska v\xfdsledok vykonania k\xf3du. V\xfdsledok ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," sa odovzd\xe1va ako jedin\xfd argument funkcii callback. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,a.kt)("h2",m({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiline",value:"multiline"},{label:"Precompute & Disabled",value:"precompute"},{label:"Using Libraries",value:"usingLibraries"},{label:"Add Preceding Code",value:"addPreceding"},{label:"Hints & Solution",value:"hintsAndSolution"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n'))),(0,a.kt)(l.Z,{value:"multiline",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RShell code={`x <- runif( 100 );\ny <- 3.0 * x + rnorm( 100 );\nfit <- lm( y ~ x );\nsummary( fit );\n`} resettable />\n"))),(0,a.kt)(l.Z,{value:"precompute",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell\n    code="abs(c(-2,3,-1))"\n    precompute\n    disabled\n    lines={2}\n/>\n'))),(0,a.kt)(l.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RShell libraries={['dplyr']} code={'starwars %>% filter(species == \"Droid\")'} lines={2} />\n"))),(0,a.kt)(l.Z,{value:"addPreceding",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell code="library(dplyr)" lines={2} disabled />\n\n<RShell code={\'starwars %>% filter(species == "Droid")\'} addPreceding lines={2} />\n'))),(0,a.kt)(l.Z,{value:"hintsAndSolution",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.\n\n<RShell \n    id="prob1a"\n    code="" \n    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,\ndata = Cars93)\nsummary(cars.lm)`} \n    lines={5} \n    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don\'t remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}\n/>\n')))))}h.isMDXComponent=!0}}]);