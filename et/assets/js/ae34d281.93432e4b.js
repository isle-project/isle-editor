"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9899],{603905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(202784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),c=l,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||i;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(487462),l=a(202784),i=a(972389),r=a(275773),o=a(386010),u="tabItem_LplD";function s(e){var t,a,i,s=e.lazy,d=e.block,m=e.defaultValue,p=e.values,c=e.groupId,k=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,r.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,r.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,C=(0,l.useState)(g),w=C[0],T=C[1],j=[],O=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var x=N[c];null!=x&&x!==w&&v.some((function(e){return e.value===x}))&&T(x)}var D=function(e){var t=e.currentTarget,a=j.indexOf(t),n=v[a].value;n!==w&&(O(t),T(n),null!=c&&y(c,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;a=j[n]||j[0];break;case"ArrowLeft":var l=j.indexOf(e.currentTarget)-1;a=j[l]||j[j.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),s?(0,l.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,i.Z)();return l.createElement(s,(0,n.Z)({key:String(t)},e))}},953379:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var n=a(487462),l=a(263366),i=(a(202784),a(603905)),r=a(409877),o=a(358215),u=["components"],s={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},d=void 0,m={unversionedId:"r/r-shell",id:"r/r-shell",title:"R Shell",description:"Interaktiivne R Shell, mida saab kasutada R k\xe4skude t\xe4itmiseks pilves, kasutades OpenCPU.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/r/shell.md",sourceDirName:"r",slug:"/r/r-shell",permalink:"/et/docs/r/r-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},sidebar:"docs",previous:{title:"R Plot",permalink:"/et/docs/r/r-plot"},next:{title:"R Table",permalink:"/et/docs/r/r-table"}},p=[{value:"Valikud",id:"valikud",children:[],level:2},{value:"N\xe4ited",id:"n\xe4ited",children:[],level:2}],c={toc:p};function k(e){var t=e.components,a=(0,l.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Interaktiivne R Shell, mida saab kasutada R k\xe4skude t\xe4itmiseks pilves, kasutades ",(0,i.kt)("a",{parentName:"p",href:"https://www.opencpu.org/"},"OpenCPU"),"."),(0,i.kt)("h2",{id:"valikud"},"Valikud"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"code")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Hinnatav R-kood. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),': programmeerimisk\xfcsimuste puhul R-kood "string", mis kujutab endast probleemi ametlikku lahendust.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": programmeerimisk\xfcsimuste puhul mitmesuguseid vihjeid, mis annavad juhiseid probleemi k\xe4sitlemiseks. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"addPreceding")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kui see on m\xe4\xe4ratud true, siis hindab kest kogu koodi praegusest komponendist ja k\xf5igist eelnevatest, mis esinevad \xf5ppetunnis.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"libraries")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": R-raamatukogud, mis peaksid automaatselt laadima, kui sisendkood k\xe4ivitatakse.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precompute")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas vaikimisi kood tuleb k\xe4ivitada, kui komponent on paigaldatud.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|array)"),': R-koodi "string" (v\xf5i R-koodiplokkide "rida"), mis lisatakse koodis "code" salvestatud koodile, kui seda hinnatakse.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas grupivestluse funktsioon peaks olema lubatud. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas keelata k\xf5ik kasutaja sisendid ja muuta koodiblokk staatiliseks.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"lines")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": kuvatavate ridade arv. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"resettable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas kuvada nullinuppu vaikimisi koodisisestuse taastamiseks.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse esile iga kord, kui tekstiv\xe4lja sisend muutub. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, mis k\xe4ivitub iga kord, kui nupule ",(0,i.kt)("inlineCode",{parentName:"li"},"Evaluate")," vajutatakse.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onResult")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse \xfcles iga kord, kui pilvest saadakse koodi t\xe4itmise tulemus. Tulemus ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," edastatakse callback-funktsioonile ainsa argumendina.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,i.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,i.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiline",value:"multiline"},{label:"Precompute & Disabled",value:"precompute"},{label:"Using Libraries",value:"usingLibraries"},{label:"Add Preceding Code",value:"addPreceding"},{label:"Hints & Solution",value:"hintsAndSolution"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n'))),(0,i.kt)(o.Z,{value:"multiline",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RShell code={`x <- runif( 100 );\ny <- 3.0 * x + rnorm( 100 );\nfit <- lm( y ~ x );\nsummary( fit );\n`} resettable />\n"))),(0,i.kt)(o.Z,{value:"precompute",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell\n    code="abs(c(-2,3,-1))"\n    precompute\n    disabled\n    lines={2}\n/>\n'))),(0,i.kt)(o.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RShell libraries={['dplyr']} code={'starwars %>% filter(species == \"Droid\")'} lines={2} />\n"))),(0,i.kt)(o.Z,{value:"addPreceding",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell code="library(dplyr)" lines={2} disabled />\n\n<RShell code={\'starwars %>% filter(species == "Droid")\'} addPreceding lines={2} />\n'))),(0,i.kt)(o.Z,{value:"hintsAndSolution",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.\n\n<RShell \n    id="prob1a"\n    code="" \n    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,\ndata = Cars93)\nsummary(cars.lm)`} \n    lines={5} \n    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don\'t remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}\n/>\n')))))}k.isMDXComponent=!0}}]);