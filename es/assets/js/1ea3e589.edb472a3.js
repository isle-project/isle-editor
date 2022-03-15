"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9754],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(202784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(202784);function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(487462),l=t(202784),r=t(972389),i=t(161419),o=t(386010),u="tabItem_LplD";function c(e){var n,t,r,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,l.useState)(h),x=C[0],w=C[1],E=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=N[m];null!=j&&j!==x&&b.some((function(e){return e.value===j}))&&w(j)}var T=function(e){var n=e.currentTarget,t=E.indexOf(n),a=b[t].value;a!==x&&(O(n),w(a),null!=m&&y(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var l=E.indexOf(e.currentTarget)-1;t=E[l]||E[E.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:T,onClick:T},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),c?(0,l.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function s(e){var n=(0,r.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},262047:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return v}});var a=t(487462),l=t(263366),r=(t(202784),t(603905)),i=t(409877),o=t(358215),u=["components"],c={id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},s=void 0,p={unversionedId:"input/checkbox-input",id:"input/checkbox-input",title:"Checkbox Input",description:'Un componente de entrada de casilla de verificaci\xf3n. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, usted quiere manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/input/checkbox.md",sourceDirName:"input",slug:"/input/checkbox-input",permalink:"/es/docs/input/checkbox-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/checkbox.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"24/2/2021",frontMatter:{id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},sidebar:"docs",previous:{title:"Wikipedia",permalink:"/es/docs/wikipedia"},next:{title:"Number Input",permalink:"/es/docs/input/number-input"}},d={},m=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Un componente de entrada de casilla de verificaci\xf3n. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, usted quiere manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".'),(0,r.kt)("h2",{id:"opciones"},"Opciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bind")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nombre de la variable global para el valor de la casilla de verificaci\xf3n que se asignar\xe1 a. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valor booleano que indica el valor por defecto de la casilla de verificaci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valor de la casilla de verificaci\xf3n (para el componente controlado). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": indica si la entrada est\xe1 activa o no. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": indica si la casilla de verificaci\xf3n se muestra en l\xednea. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funci\xf3n de devoluci\xf3n de llamada que se invocar\xe1 cuando se haga clic en la casilla de verificaci\xf3n. La funci\xf3n se llama con el valor actual de la casilla de verificaci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": El texto que aparece junto a la casilla de verificaci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": El texto que se muestra al pasar el cursor por encima de la casilla de verificaci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": posici\xf3n de la punta del bot\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,r.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Inline",value:"inline"},{label:"With Style",value:"withStyle"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<CheckboxInput legend="Take the logarithm" />\n'))),(0,r.kt)(o.Z,{value:"inline",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>Please click\n<CheckboxInput\n    inline defaultValue={false}\n/>\nto confirm that you will follow our netiquette.</p>\n"))),(0,r.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CheckboxInput\n    style={{ fontSize: 30, color: 'blue'}}\n    legend=\"Click to confirm\"\n    defaultValue={false}\n/>\n"))),(0,r.kt)(o.Z,{value:"withCallback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CheckboxInput\n    legend=\"Click to confirm...\"\n    onChange={( value ) => {\n        alert( 'New value: '+value );\n    }}\n/>\n")))))}v.isMDXComponent=!0}}]);