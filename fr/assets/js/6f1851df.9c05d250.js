"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),r=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,C=(0,r.useState)(k),w=C[0],x=C[1],O=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=y[m];null!=P&&P!==w&&b.some((function(e){return e.value===P}))&&x(P)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==w&&(T(t),x(a),null!=m&&N(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},418890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return v}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"polaroid",title:"Polaroid",sidebar_label:"Polaroid"},c=void 0,p={unversionedId:"polaroid",id:"polaroid",title:"Polaroid",description:"Composant affichant une image dans le style d'un polaroid.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/polaroid.md",sourceDirName:".",slug:"/polaroid",permalink:"/fr/docs/polaroid",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/polaroid.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",frontMatter:{id:"polaroid",title:"Polaroid",sidebar_label:"Polaroid"},sidebar:"docs",previous:{title:"Panel",permalink:"/fr/docs/panel"},next:{title:"Scrolling Text",permalink:"/fr/docs/scrolling-text"}},d={},m=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Composant affichant une image dans le style d'un polaroid."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"image")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": l'URL de l'image \xe0 afficher dans le cadre du polaroid. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"draggable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'on peut faire glisser le polaroid sur l'\xe9cran. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showPin")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le de la pr\xe9sence ou non d'une broche. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stain")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si une tache de caf\xe9 doit appara\xeetre. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": largeur du polaroid (en px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"350"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": gestionnaire d'\xe9v\xe9nements invoqu\xe9 lorsque l'image est cliqu\xe9e (re\xe7oit l'identifiant du Polaro\xefd comme param\xe8tre). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"exemples"},"Exemples"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Pin & Draggable",value:"pinnedAndDraggable"},{label:"Custom Width",value:"customWidth"},{label:"Handling Clicks",value:"handlingClicks"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Polaroid image="https://bit.ly/2MGl7K0" />\n'))),(0,l.kt)(o.Z,{value:"pinnedAndDraggable",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Polaroid showPin draggable image="https://bit.ly/2MGl7K0" />\n'))),(0,l.kt)(o.Z,{value:"customWidth",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Polaroid width={200}\n image="https://bit.ly/2MGl7K0" />\n'))),(0,l.kt)(o.Z,{value:"handlingClicks",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Polaroid image=\"https://bit.ly/2MGl7K0\" \n onClick={() => {\n     alert( 'The polaroid has been clicked...' );\n }} />\n")))))}v.isMDXComponent=!0}}]);