"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93532],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),r=a(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(202784),r=a(386010),i=a(152670),l=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&y(e,a,t[a]);if(b)for(var a of b(t))v.call(t,a)&&y(e,a,t[a]);return e};function g(e){var t,a;const{lazy:i,block:c,defaultValue:b,values:f,groupId:v,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,l.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==O&&!k.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[C,x]=(0,n.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=v){const e=w[v];null!=e&&e!==C&&k.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==C&&(S(t),x(n),null!=v&&j(v,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},k.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=h({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:P,onFocus:E,onClick:E},a),l={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===e})},d(i,m(l))),null!=t?t:e);var i,l}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,i.Z)();return n.createElement(g,h({key:String(t)},e))}},673906:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return h}});var n=a(603905),r=a(751361),i=a(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&d(e,a,t[a]);return e};const b={id:"slider",title:"Slider",sidebar_label:"Slider"},f=void 0,v={unversionedId:"slider",id:"slider",title:"Slider",description:"Un componente que muestra a sus hijos en una presentaci\xf3n de diapositivas o en un carrusel.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/slider.md",sourceDirName:".",slug:"/slider",permalink:"/es/docs/slider",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2 ago 2021",frontMatter:{id:"slider",title:"Slider",sidebar_label:"Slider"},sidebar:"docs",previous:{title:"Scrolling Text",permalink:"/es/docs/scrolling-text"},next:{title:"Switch Components",permalink:"/es/docs/switch"}},y={},h=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],g={toc:h};function k(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un componente que muestra a sus hijos en una presentaci\xf3n de diapositivas o en un carrusel."),(0,n.kt)("h2",m({},{id:"opciones"}),"Opciones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"title")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": t\xedtulo de la presentaci\xf3n de diapositivas / carrusel que se mostrar\xe1 en su parte superior. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dots")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": mostrar puntos en la parte inferior para navegar r\xe1pidamente a cualquier diapositiva. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fade")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si el desvanecimiento se utiliza para la transici\xf3n entre las diapositivas. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"draggable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si los usuarios pueden arrastrar las diapositivas para navegar entre ellas. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pagination")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),': si mostrar la paginaci\xf3n en la "parte superior", "parte inferior", o "ambas". Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"goto")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": Si se cambia la propiedad, el componente salta a la diapositiva con el \xedndice seleccionado. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"infinite")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si la presentaci\xf3n de diapositivas envuelve su contenido. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"interval")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": establece un intervalo de tiempo para un cambio de diapositivas autom\xe1tico. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"swipe")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": permite el comportamiento de arrastrar y pasar la mano. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onClick")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": llamada invocada al hacer clic en los botones siguiente/anterior. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Customize Pagination",value:"pagination"},{label:"Slideshow",value:"slideshow"},{label:"Custom Styling",value:"customStyling"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Slider title=\"Questions to explore:\" >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n"))),(0,n.kt)(i.Z,{value:"pagination",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Slider title=\"Questions to explore:\" pagination=\"both\" dots={false} >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n")),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Use pagination buttons both at the top and bottom when the height of the content exceeds the browser window and requires scrolling."))),(0,n.kt)(i.Z,{value:"slideshow",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Slider style={{ height: 400, background: \'black\' }} infinite interval={2000} >\n    <img src="https://bit.ly/3aM4OU7" alt="Untersberg Mountain Salzburg (by Giuseppe Milo, CC BY 3.0)" />\n    <img src="https://bit.ly/3rCm0Cu" alt="British Landscape (by Phil Riley, Pixabay License)" />\n    <img src="https://bit.ly/3cUkibu" alt="Mountains Landscape Sunset Dusk (Pixabay License)" />\n    <img src="https://bit.ly/2Z4fqbj" alt="Landscape with Trees (CC0 - Public Domain)" /> \n</Slider>\n'))),(0,n.kt)(i.Z,{value:"customStyling",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Slider style={{ textShadow: '0 2px 12px black', textAlign: 'center', fontSize: 90 }} infinite interval={1000} >\n    <div>FIVE</div>\n    <div>FOUR</div>\n    <div>THREE</div>\n    <div>TWO</div>\n    <div>ONE</div>\n    <div>ZERO</div>\n</Slider>\n")))))}k.isMDXComponent=!0}}]);