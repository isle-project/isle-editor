"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[986],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),o=n(161419),i=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),h=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,a.useState)(g),x=C[0],w=C[1],O=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=h[m];null!=j&&j!==x&&b.some((function(e){return e.value===j}))&&w(j)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==x&&(T(t),w(r),null!=m&&N(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},248082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return v}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),o=n(409877),i=n(358215),u=["components"],s={id:"qrcode",title:"QR Code",sidebar_label:"QR Code"},c=void 0,d={unversionedId:"qrcode",id:"qrcode",title:"QR Code",description:"C\xf3digo QR.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/qrcode.md",sourceDirName:".",slug:"/qrcode",permalink:"/es/docs/qrcode",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/qrcode.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/5/2021",frontMatter:{id:"qrcode",title:"QR Code",sidebar_label:"QR Code"},sidebar:"docs",previous:{title:"Multi Cards",permalink:"/es/docs/multi-cards"},next:{title:"Recorder",permalink:"/es/docs/recorder"}},p={},m=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"C\xf3digo QR."),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": texto a codificar en el c\xf3digo QR (por defecto a la URL de la lecci\xf3n si no se establece). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scale")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de p\xedxeles por m\xf3dulos (puntos negros). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"8"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),': ancho en p\xedxeles; tiene prioridad sobre la propiedad de "escala". Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showText")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": booleana determinando si mostrar el texto codificado en el c\xf3digo QR. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"center")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": booleano controlando si centrar el c\xf3digo QR. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Visible Link",value:"visibleLink"},{label:"Scale",value:"scale"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode />\n"))),(0,l.kt)(i.Z,{value:"withCSS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode \n    center \n    text=\"https://isledocs.com/docs/qrcode\" \n    style ={{ outline: '4px grey solid' }}\n/>\n"))),(0,l.kt)(i.Z,{value:"visibleLink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QRCode \n    text="https://isledocs.com/docs/qrcode"\n    showText\n/>\n'))),(0,l.kt)(i.Z,{value:"scale",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode \n    text=\"https://isledocs.com/docs/qrcode\"\n    scale={12}\n    showText\n    style={{ fontFamily: 'Open Sans Condensed', color: 'red', outline: '4px black solid' }}\n/>\n")))))}v.isMDXComponent=!0}}]);