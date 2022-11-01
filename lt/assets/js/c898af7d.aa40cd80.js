"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27500],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(202784),r=a(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function m({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),i=a(152670),l=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(k)for(var a of k(t))f.call(t,a)&&v(e,a,t[a]);return e};function g(e){var t,a;const{lazy:i,block:m,defaultValue:k,values:b,groupId:f,className:v}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,l.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===k?k:null!=(a=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==j&&!N.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,o.U)(),[w,P]=(0,n.useState)(j),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=O[f];null!=e&&e!==w&&N.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==w&&(x(t),P(n),null!=f&&C(f,String(n)))},E=e=>{var t,a;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=y({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>T.push(e),onKeyDown:E,onClick:D},a),l={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===e})},d(i,c(l))),null!=t?t:e);var i,l}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function N(e){const t=(0,i.Z)();return n.createElement(g,y({key:String(t)},e))}},699634:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return y}});var n=a(603905),r=a(751361),i=a(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&d(e,a,t[a]);return e};const k={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},b=void 0,f={unversionedId:"r/r-shell",id:"r/r-shell",title:"R Shell",description:'Interaktyvioji "R Shell" programa, kuri\u0105 galima naudoti R komandoms vykdyti debesyje naudojant OpenCPU.',source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/r/shell.md",sourceDirName:"r",slug:"/r/r-shell",permalink:"/lt/docs/r/r-shell",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},sidebar:"docs",previous:{title:"R Plot",permalink:"/lt/docs/r/r-plot"},next:{title:"R Table",permalink:"/lt/docs/r/r-table"}},v={},y=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],g={toc:y};function N(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,'Interaktyvioji "R Shell" programa, kuri\u0105 galima naudoti R komandoms vykdyti debesyje naudojant ',(0,n.kt)("a",c({parentName:"p"},{href:"https://www.opencpu.org/"}),"OpenCPU"),"."),(0,n.kt)("h2",c({},{id:"parinktys"}),"Parinktys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": R kodas, kur\u012f reikia \u012fvertinti. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solution")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": programavimo klausimams - R kodas ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),", nurodantis oficial\u0173 problemos sprendim\u0105. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hints")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": programavimo klausimams - daugyb\u0117 patarim\u0173, kaip spr\u0119sti problem\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"addPreceding")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": jei nustatyta reik\u0161m\u0117 true, apvalkalas \u012fvertins vis\u0105 dabartinio komponento ir vis\u0173 ankstesni\u0173 pamokoje esan\u010di\u0173 komponent\u0173 kod\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"libraries")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": R bibliotekos, kurios tur\u0117t\u0173 b\u016bti automati\u0161kai \u012fkeliamos, kai \u012fvesties ",(0,n.kt)("inlineCode",{parentName:"li"},"kodas")," yra vykdomas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"precompute")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar numatytasis kodas tur\u0117t\u0173 b\u016bti vykdomas, kai komponentas yra sumontuotas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array)"),": R kodo eilut\u0117 (arba R kodo blok\u0173 masyvas), kuri bus pridedama prie kodo, saugomo ",(0,n.kt)("inlineCode",{parentName:"li"},"code"),", vertinant. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"chat")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar turi b\u016bti \u012fjungta grupini\u0173 pokalbi\u0173 funkcija.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disabled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar i\u0161jungti visas naudotojo \u012fvestis ir padaryti kodo blok\u0105 statiniu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lines")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": rodom\u0173 eilu\u010di\u0173 skai\u010dius. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"resettable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti atstatymo mygtuk\u0105 numatytajam \u012fvesties kodui atkurti.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atgalinis skambutis, inicijuojamas, kai pasikei\u010dia teksto lauko \u012fvestis.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atgalinis skambutis, inicijuojamas, kai paspaud\u017eiamas mygtukas ",(0,n.kt)("inlineCode",{parentName:"li"},"Vertinti"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onResult")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atgalinis skambutis, i\u0161kvie\u010diamas kiekvien\u0105 kart\u0105, kai i\u0161 debesies gaunamas kodo vykdymo rezultatas. Rezultatas ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," perduodamas kaip vienintelis gr\u012f\u017etamojo ry\u0161io funkcijos argumentas. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,n.kt)("h2",c({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiline",value:"multiline"},{label:"Precompute & Disabled",value:"precompute"},{label:"Using Libraries",value:"usingLibraries"},{label:"Add Preceding Code",value:"addPreceding"},{label:"Hints & Solution",value:"hintsAndSolution"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n'))),(0,n.kt)(i.Z,{value:"multiline",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RShell code={`x <- runif( 100 );\ny <- 3.0 * x + rnorm( 100 );\nfit <- lm( y ~ x );\nsummary( fit );\n`} resettable />\n"))),(0,n.kt)(i.Z,{value:"precompute",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell\n    code="abs(c(-2,3,-1))"\n    precompute\n    disabled\n    lines={2}\n/>\n'))),(0,n.kt)(i.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RShell libraries={['dplyr']} code={'starwars %>% filter(species == \"Droid\")'} lines={2} />\n"))),(0,n.kt)(i.Z,{value:"addPreceding",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RShell code="library(dplyr)" lines={2} disabled />\n\n<RShell code={\'starwars %>% filter(species == "Droid")\'} addPreceding lines={2} />\n'))),(0,n.kt)(i.Z,{value:"hintsAndSolution",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.\n\n<RShell \n    id="prob1a"\n    code="" \n    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,\ndata = Cars93)\nsummary(cars.lm)`} \n    lines={5} \n    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don\'t remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}\n/>\n')))))}N.isMDXComponent=!0}}]);