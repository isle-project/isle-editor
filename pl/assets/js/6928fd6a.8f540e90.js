"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61662],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return y}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(202784),r=a(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function m({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),i=a(152670),l=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&g(e,a,t[a]);if(y)for(var a of y(t))b.call(t,a)&&g(e,a,t[a]);return e};function v(e){var t,a;const{lazy:i,block:m,defaultValue:y,values:k,groupId:b,className:g}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=k?k:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),w=(0,l.l)(N,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===y?y:null!=(a=null!=y?y:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?a:v[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:O}=(0,o.U)(),[C,z]=(0,n.useState)(h),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=b){const e=j[b];null!=e&&e!==C&&N.some((t=>t.value===e))&&z(e)}const P=e=>{const t=e.currentTarget,a=D.indexOf(t),n=N[a].value;n!==C&&(T(t),z(n),null!=b&&O(b,String(n)))},x=e=>{var t,a;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;n=null!=(t=D[a])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=null!=(a=D[t])?a:D[D.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=f({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>D.push(e),onKeyDown:x,onClick:P},a),l={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===e})},d(i,c(l))),null!=t?t:e);var i,l}))),i?(0,n.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function N(e){const t=(0,i.Z)();return n.createElement(v,f({key:String(t)},e))}},383971:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return f}});var n=a(603905),r=a(751361),i=a(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&d(e,a,t[a]);return e};const y={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},k=void 0,b={unversionedId:"plots/histogram",id:"plots/histogram",title:"Histogram",description:"Histogram.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/plots/histogram.md",sourceDirName:"plots",slug:"/plots/histogram",permalink:"/pl/docs/plots/histogram",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 lip 2022",frontMatter:{id:"histogram",title:"Histogram",sidebar_label:"Histogram"},sidebar:"docs",previous:{title:"Heat Map",permalink:"/pl/docs/plots/heatmap"},next:{title:"Interval Plot",permalink:"/pl/docs/plots/interval-plot"}},g={},f=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],v={toc:f};function N(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Histogram."),(0,n.kt)("h2",c({},{id:"opcje"}),"Opcje"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": zmienna do wy\u015bwietlania. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": zmienna grupowania. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"title")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": tytu\u0142 histogramu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": czy nak\u0142ada\u0107 na siebie zgrupowane histogramy (",(0,n.kt)("inlineCode",{parentName:"li"},"Overlay"),"), czy te\u017c w oddzielnych dzia\u0142kach obok siebie (",(0,n.kt)("inlineCode",{parentName:"li"},"Facets"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'Overlay'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"displayDensity")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy warto\u015bci g\u0119sto\u015bci maj\u0105 by\u0107 wy\u015bwietlane zamiast zliczane na osi y. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"densityType")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": podczas wy\u015bwietlania g\u0119sto\u015bci mo\u017cna na\u0142o\u017cy\u0107 rozk\u0142ad parametryczny (",(0,n.kt)("inlineCode",{parentName:"li"},"normalny"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"jednolity"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"T"),", 'Chi-kwadrat",(0,n.kt)("inlineCode",{parentName:"li"},"lub"),"wyk\u0142adniczy",(0,n.kt)("inlineCode",{parentName:"li"},") i/lub nieparametryczne oszacowanie g\u0119sto\u015bci j\u0105dra ("),"Data-driven",(0,n.kt)("inlineCode",{parentName:"li"},"). Default: "),"none`."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"densityParams")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(array<number>|any)"),": parametry rozk\u0142adu dla g\u0119sto\u015bci, gdy u\u017cywany jest rozk\u0142ad parametryczny (","[mu, sigma]"," dla rozk\u0142adu normalnego, ","[a, b]"," dla rozk\u0142adu jednostajnego, ","[lambda]"," dla rozk\u0142adu wyk\u0142adniczego) lub obiekt odwzorowuj\u0105cy nazwy rozk\u0142ad\xf3w na parametry, gdy nale\u017cy wy\u015bwietli\u0107 wiele g\u0119sto\u015bci (np. ",(0,n.kt)("inlineCode",{parentName:"li"},"{'Normalny': [mu, sigma], 'Jednostajny': [a, b]}, 'Wyk\u0142adniczy': [lambda]}"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bandwidthAdjust")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": r\u0119czne dostosowanie szeroko\u015bci pasma g\u0119sto\u015bci j\u0105dra (dotyczy tylko gdy ",(0,n.kt)("inlineCode",{parentName:"li"},"densityType")," jest ustawione na ",(0,n.kt)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"binStrategy")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": Strategia kosza (",(0,n.kt)("inlineCode",{parentName:"li"},"Automatyczna"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wybieranie # koszy"),", lub ",(0,n.kt)("inlineCode",{parentName:"li"},"Ustawianie szeroko\u015bci kosza"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'Automatic'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"nBins")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": niestandardowa liczba pojemnik\xf3w. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"nCols")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": liczba kolumn podczas wy\u015bwietlania fasetowanego histogramu grupowego. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"xBins")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"{start,size,end}"),': obiekt z "startem", "rozmiarem" i "ko\u0144cowymi" w\u0142a\u015bciwo\u015bciami reguluj\u0105cymi zachowanie kosza. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sameXRange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": je\u015bli prawda, to zakres osi x dla ka\u017cdej fasety b\u0119dzie taki sam jak histogram og\xf3lny. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sameYRange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": je\u015bli prawda, to zakres osi y dla ka\u017cdej fasety b\u0119dzie taki sam jak histogram og\xf3lny. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",c({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,n.kt)(i.Z,{value:"grouped",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),(0,n.kt)(i.Z,{value:"groupModeFactes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),(0,n.kt)(i.Z,{value:"displayDensity",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),(0,n.kt)(i.Z,{value:"noBins",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}N.isMDXComponent=!0}}]);