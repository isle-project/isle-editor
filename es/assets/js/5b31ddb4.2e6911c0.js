"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3532],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},358215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(202784);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(487462),r=a(202784),i=a(972389),l=a(161419),o=a(386010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(g),C=w[0],x=w[1],T=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==C&&h.some((function(e){return e.value===j}))&&x(j)}var S=function(e){var t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==C&&(O(t),x(n),null!=m&&N(m,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},654622:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return f}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),l=a(409877),o=a(358215),s=["components"],u={id:"slider",title:"Slider",sidebar_label:"Slider"},p=void 0,d={unversionedId:"slider",id:"slider",title:"Slider",description:"Un componente que muestra a sus hijos en una presentaci\xf3n de diapositivas o en un carrusel.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/slider.md",sourceDirName:".",slug:"/slider",permalink:"/es/docs/slider",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2/8/2021",frontMatter:{id:"slider",title:"Slider",sidebar_label:"Slider"},sidebar:"docs",previous:{title:"Scrolling Text",permalink:"/es/docs/scrolling-text"},next:{title:"Switch Components",permalink:"/es/docs/switch"}},c={},m=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],v={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Un componente que muestra a sus hijos en una presentaci\xf3n de diapositivas o en un carrusel."),(0,i.kt)("h2",{id:"opciones"},"Opciones"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": t\xedtulo de la presentaci\xf3n de diapositivas / carrusel que se mostrar\xe1 en su parte superior. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dots")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": mostrar puntos en la parte inferior para navegar r\xe1pidamente a cualquier diapositiva. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fade")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si el desvanecimiento se utiliza para la transici\xf3n entre las diapositivas. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"draggable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si los usuarios pueden arrastrar las diapositivas para navegar entre ellas. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pagination")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),': si mostrar la paginaci\xf3n en la "parte superior", "parte inferior", o "ambas". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"goto")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Si se cambia la propiedad, el componente salta a la diapositiva con el \xedndice seleccionado. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"infinite")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si la presentaci\xf3n de diapositivas envuelve su contenido. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"interval")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": establece un intervalo de tiempo para un cambio de diapositivas autom\xe1tico. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"swipe")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": permite el comportamiento de arrastrar y pasar la mano. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": llamada invocada al hacer clic en los botones siguiente/anterior. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,i.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Customize Pagination",value:"pagination"},{label:"Slideshow",value:"slideshow"},{label:"Custom Styling",value:"customStyling"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n"))),(0,i.kt)(o.Z,{value:"pagination",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" pagination=\"both\" dots={false} >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use pagination buttons both at the top and bottom when the height of the content exceeds the browser window and requires scrolling.")))),(0,i.kt)(o.Z,{value:"slideshow",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider style={{ height: 400, background: \'black\' }} infinite interval={2000} >\n    <img src="https://bit.ly/3aM4OU7" alt="Untersberg Mountain Salzburg (by Giuseppe Milo, CC BY 3.0)" />\n    <img src="https://bit.ly/3rCm0Cu" alt="British Landscape (by Phil Riley, Pixabay License)" />\n    <img src="https://bit.ly/3cUkibu" alt="Mountains Landscape Sunset Dusk (Pixabay License)" />\n    <img src="https://bit.ly/2Z4fqbj" alt="Landscape with Trees (CC0 - Public Domain)" /> \n</Slider>\n'))),(0,i.kt)(o.Z,{value:"customStyling",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider style={{ textShadow: '0 2px 12px black', textAlign: 'center', fontSize: 90 }} infinite interval={1000} >\n    <div>FIVE</div>\n    <div>FOUR</div>\n    <div>THREE</div>\n    <div>TWO</div>\n    <div>ONE</div>\n    <div>ZERO</div>\n</Slider>\n")))))}f.isMDXComponent=!0}}]);