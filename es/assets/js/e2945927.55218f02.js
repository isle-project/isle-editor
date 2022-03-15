"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8814],{603905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var t=n(202784);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?t.createElement(f,o(o({ref:a},c),{},{components:n})):t.createElement(f,o({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(202784);function r(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},409877:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(487462),r=n(202784),l=n(972389),o=n(161419),i=n(386010),s="tabItem_LplD";function u(e){var a,n,l,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,o.lx)(k,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(a=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),h=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,r.useState)(g),w=C[0],T=C[1],O=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=h[m];null!=x&&x!==w&&k.some((function(e){return e.value===x}))&&T(x)}var D=function(e){var a=e.currentTarget,n=O.indexOf(a),t=k[n].value;t!==w&&(j(a),T(t),null!=m&&N(m,t))},E=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=O.indexOf(e.currentTarget)+1;n=O[t]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},k.map((function(e){var a=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":w===a})}),null!=n?n:a)}))),u?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function c(e){var a=(0,l.Z)();return r.createElement(u,(0,t.Z)({key:String(a)},e))}},463265:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return b}});var t=n(487462),r=n(263366),l=(n(202784),n(603905)),o=n(409877),i=n(358215),s=["components"],u={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},c=void 0,d={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"Un componente de nube de palabras construido sobre d3-cloud.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/es/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621318833,formattedLastUpdatedAt:"18/5/2021",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/es/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/es/docs/models/decision-tree"}},p={},m=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],f={toc:m};function b(e){var a=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Un componente de nube de palabras construido sobre ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud"),"."),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),': o bien una matriz de textos a partir de los cuales generar la nube de palabras o, si "precalculado" se establece como "verdadero", y una matriz de objetos de conteo de palabras (con claves de "texto" y "valor"). Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"font")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|function)"),": funci\xf3n de acceso especificando la fuente de cada palabra. Tambi\xe9n acepta una constante en lugar de una funci\xf3n. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funci\xf3n accesoria que indica el tama\xf1o de la fuente de cada palabra. Por defecto es ",(0,l.kt)("inlineCode",{parentName:"li"},"( cuenta - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0"),", donde ",(0,l.kt)("inlineCode",{parentName:"li"},"min")," y ",(0,l.kt)("inlineCode",{parentName:"li"},"max")," denotan el m\xednimo y m\xe1ximo de la palabra ",(0,l.kt)("inlineCode",{parentName:"li"},"cuenta"),", respectivamente. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": altura de la nube de la palabra (en px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"language")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": identificador de idioma (determina las palabras de parada que se deben eliminar). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minCount")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),': si se establece, s\xf3lo incluye las palabras que aparecen m\xe1s de "minCount" veces en los datos dados. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si mostrar un bot\xf3n para guardar la nube de palabras como una imagen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": La funci\xf3n de devoluci\xf3n de llamada que se invoca cuando se hace clic en una palabra de la nube de palabras. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"padding")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(function|number)"),": funci\xf3n accesoria o constante que indica el relleno num\xe9rico de cada palabra. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si la nube de palabras espera un conjunto de recuentos de palabras precalculados o los generar\xe1 para determinados textos. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rotate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(function|number)"),": funci\xf3n accesoria que indica el \xe1ngulo de rotaci\xf3n (en grados) para cada palabra. Tambi\xe9n acepta una constante en lugar de una funci\xf3n. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),': el tama\xf1o del lote de nuevos documentos en "datos" antes de que la nube de palabras sea reproducida. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": ...palabras clave adicionales para remover antes de hacer la nube de palabras. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": retransmisi\xf3n cuando se intercambie el conjunto de datos. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": ancho de la palabra nube (en px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,l.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,l.kt)(i.Z,{value:"withStopwords",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}b.isMDXComponent=!0}}]);