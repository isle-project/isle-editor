"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9747],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){var r=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(487462),a=t(202784),i=t(972389),l=t(275773),o=t(386010),u="tabItem_LplD";function c(e){var n,t,i,c=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,a.useState)(h),O=C[0],T=C[1],w=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=g[m];null!=x&&x!==O&&b.some((function(e){return e.value===x}))&&T(x)}var j=function(e){var n=e.currentTarget,t=w.indexOf(n),r=b[t].value;r!==O&&(E(n),T(r),null!=m&&N(m,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;t=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function s(e){var n=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},607939:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=t(409877),o=t(358215),u=["components"],c={id:"accordion",title:"Accordion",sidebar_label:"Accordion"},s=void 0,d={unversionedId:"accordion",id:"accordion",title:"Accordion",description:"Un componente a fisarmonica che controlla i cursori verticali.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/accordion.md",sourceDirName:".",slug:"/accordion",permalink:"/it/docs/accordion",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/accordion.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"accordion",title:"Accordion",sidebar_label:"Accordion"},sidebar:"docs",previous:{title:"Voice Input",permalink:"/it/docs/input/voice-input"},next:{title:"IFrame",permalink:"/it/docs/iframe"}},p=[{value:"Opzioni",id:"opzioni",children:[],level:2},{value:"Esempi",id:"esempi",children:[],level:2}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Un componente a fisarmonica che controlla i cursori verticali."),(0,i.kt)("h2",{id:"opzioni"},"Opzioni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"active")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": indice del cursore da aprire all'inizio. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"canCloseAll")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": se si possono far crollare tutte le testate. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"headers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": array di nomi di intestazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"headerStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": si pu\xf2 anche assegnare uno stile alle barre di intestazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"headerClassName")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": questo supera il nome di classe dato alle intestazioni. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": richiamata invocata con indice del nuovo cursore verticale attivo. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": nome della classe per il div esterno. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS per il div esterno. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"esempi"},"Esempi"),(0,i.kt)(l.Z,{defaultValue:"firstOpened",values:[{label:"First item opened",value:"firstOpened"},{label:"All items can close",value:"allClosed"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"firstOpened",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n"))),(0,i.kt)(o.Z,{value:"allClosed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n")))))}f.isMDXComponent=!0}}]);