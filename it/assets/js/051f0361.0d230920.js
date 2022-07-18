"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79038],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function s({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),p="tabList__CuJ",c="tabItem_LNqP",s=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:s,defaultValue:f,values:b,groupId:v,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=(0,o.U)(),[j,P]=(0,a.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==j&&N.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=N[n].value;a!==j&&(x(t),P(a),null!=v&&C(v,String(a)))},D=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},y)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=k({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>T.push(e),onKeyDown:D,onFocus:E,onClick:E},n),i={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":j===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,l.Z)();return a.createElement(g,k({key:String(t)},e))}},819865:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&m(e,n,t[n]);return e};const f={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},b=void 0,v={unversionedId:"video-player",id:"video-player",title:"Video Player",description:"Un componente per la riproduzione di file e contenuti multimediali da YouTube, SoundCloud e Vimeo.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/video-player.md",sourceDirName:".",slug:"/video-player",permalink:"/it/docs/video-player",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 ott 2021",frontMatter:{id:"video-player",title:"Video Player",sidebar_label:"Video Player"},sidebar:"docs",previous:{title:"Video Lecture",permalink:"/it/docs/video-lecture"},next:{title:"Image",permalink:"/it/docs/image"}},y={},k=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],g={toc:k};function N(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Un componente per la riproduzione di file e contenuti multimediali da YouTube, SoundCloud e Vimeo."),(0,a.kt)("h2",d({},{id:"opzioni"}),"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"url")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": URL del video. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"controls")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": indica se visualizzare gli elementi di controllo del lettore video. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playing")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": indica se avviare automaticamente la riproduzione del video. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"volume")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": volume del giocatore. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.8"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"center")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se centrare il lettore video. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number)"),": altezza del giocatore. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"360"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number)"),": larghezza del giocatore. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"640"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"loop")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se avviare nuovamente il video dopo che \xe8 stato riprodotto. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"startTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": numero di secondi a cui avviare il video, o frazione se il valore \xe8 compreso tra 0 e 1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onEnded")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata una volta terminato il video. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPause")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata quando il video si interrompe. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onPause() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPlay")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata quando il video inizia o riprende la riproduzione dopo una pausa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onStart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata una volta che il video si interrompe. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onStart() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSeek")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': richiamo quando il media cerca chiamato con il parametro "secondi. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),(0,a.kt)("h2",d({},{id:"esempi"}),"Esempi"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),(0,a.kt)(l.Z,{value:"startTime",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),(0,a.kt)(l.Z,{value:"controlledSize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),(0,a.kt)(l.Z,{value:"withCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}N.isMDXComponent=!0}}]);