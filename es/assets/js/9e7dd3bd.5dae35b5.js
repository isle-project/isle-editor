"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5897],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return t?a.createElement(b,o(o({ref:n},c),{},{components:t})):a.createElement(b,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(202784);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(487462),r=t(202784),l=t(972389),o=t(161419),i=t(386010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),y=h.tabGroupChoices,x=h.setTabGroupChoices,N=(0,r.useState)(g),S=N[0],C=N[1],w=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=y[d];null!=O&&O!==S&&k.some((function(e){return e.value===O}))&&C(O)}var E=function(e){var n=e.currentTarget,t=w.indexOf(n),a=k[t].value;a!==S&&(j(n),C(a),null!=d&&x(d,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function c(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},891782:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return f}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),o=t(409877),i=t(358215),u=["components"],s={id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},c=void 0,p={unversionedId:"multi-cards",id:"multi-cards",title:"Multi Cards",description:"Un componente de ISLE que le permite crear y controlar m\xfaltiples cartas volteables (por ejemplo, en un juego de Memoria).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/multi-cards.md",sourceDirName:".",slug:"/multi-cards",permalink:"/es/docs/multi-cards",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multi-cards.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614123017,formattedLastUpdatedAt:"23/2/2021",frontMatter:{id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},sidebar:"docs",previous:{title:"Likert Scale",permalink:"/es/docs/likert-scale"},next:{title:"QR Code",permalink:"/es/docs/qrcode"}},m={},d=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],b={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Un componente de ISLE que le permite crear y controlar m\xfaltiples cartas volteables (por ejemplo, en un juego de Memoria)."),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"animation")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": si se establece el componente utiliza una animaci\xf3n de entrada; el objeto contiene un nombre (como ",(0,l.kt)("inlineCode",{parentName:"li"},"anim-scale-up"),") y una duraci\xf3n (como ",(0,l.kt)("inlineCode",{parentName:"li"},"1.7s")," = 1.7 segundos). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"memory")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": si se activa el modo de juego de memoria en el que hay que hacer coincidir pares de los valores suministrados. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": una funci\xf3n que recibe la matriz de las tarjetas volteables. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMemoryComplete")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada si el juego de memoria est\xe1 completo. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onMemoryComplete() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": indica si el proceso de volteo puede ser ejecutado s\xf3lo una vez. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"values")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<object>"),': los valores de las respectivas cartas, introducidos en una matriz que tiene campos de entrada para un valor "frontal" y "trasero". Tal valor podr\xeda ser una cadena, pero tambi\xe9n un componente completo de ISLE. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilo CSS de los contenedores de tarjetas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilo CSS del anverso de las tarjetas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilo CSS del reverso de las tarjetas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Front Image",value:"frontImage"},{label:"Memory",value:"memory"},{label:"Memory with Solved Callback",value:"memorySolvedCallback"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,l.kt)(i.Z,{value:"frontImage",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 13px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n        backgroundSize: '100% auto'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,l.kt)(i.Z,{value:"memory",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n/>\n"))),(0,l.kt)(i.Z,{value:"memorySolvedCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}\n/>\n")))))}f.isMDXComponent=!0}}]);