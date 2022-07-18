"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93613],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),l=n(386010),r="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(r,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(202784),l=n(386010),r=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&y(e,n,t[n]);return e};function N(e){var t,n;const{lazy:r,block:c,defaultValue:k,values:b,groupId:f,className:y}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:N.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===k?k:null!=(n=null!=k?k:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?n:N[0].props.value;if(null!==j&&!g.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,o.U)(),[w,P]=(0,a.useState)(j),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=O[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==w&&(x(t),P(a),null!=f&&C(f,String(a)))},D=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},y)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=v({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>T.push(e),onKeyDown:D,onFocus:E,onClick:E},n),i={className:(0,l.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},m(r,d(i))),null!=t?t:e);var r,i}))),r?(0,a.cloneElement)(N.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function g(e){const t=(0,r.Z)();return a.createElement(N,v({key:String(t)},e))}},565397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return v}});var a=n(603905),l=n(751361),r=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&m(e,n,t[n]);return e};const k={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},b=void 0,f={unversionedId:"video-player",id:"video-player",title:"Video Player",description:"Komponentti mediatiedostojen ja sis\xe4ll\xf6n toistamiseen YouTubesta, SoundCloudista ja Vimeosta.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/video-player.md",sourceDirName:".",slug:"/video-player",permalink:"/fi/docs/video-player",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8. lokak. 2021",frontMatter:{id:"video-player",title:"Video Player",sidebar_label:"Video Player"},sidebar:"docs",previous:{title:"Video Lecture",permalink:"/fi/docs/video-lecture"},next:{title:"Image",permalink:"/fi/docs/image"}},y={},v=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],N={toc:v};function g(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},N),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Komponentti mediatiedostojen ja sis\xe4ll\xf6n toistamiseen YouTubesta, SoundCloudista ja Vimeosta."),(0,a.kt)("h2",d({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"url")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Videon URL-osoite. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"controls")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": osoittaa, n\xe4ytet\xe4\xe4nk\xf6 videosoittimen ohjauselementit.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playing")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ilmoittaa, aloitetaanko videon toisto automaattisesti. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"volume")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": soittimen \xe4\xe4nenvoimakkuus. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.8"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"center")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": s\xe4\xe4t\xe4\xe4, keskitet\xe4\xe4nk\xf6 videosoitin. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number)"),": pelaajan korkeus. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"360"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number)"),": soittimen leveys. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"640"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"loop")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, aloitetaanko video uudelleen sen j\xe4lkeen, kun se on toistettu.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"startTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": sekuntien m\xe4\xe4r\xe4, josta video aloitetaan, tai murto-osa, jos arvo on 0 ja 1 v\xe4lill\xe4.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onEnded")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, joka k\xe4ynnistyy videon p\xe4\xe4tytty\xe4. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPause")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, joka k\xe4ynnistyy, kun video pys\xe4htyy.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onPause() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPlay")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, joka k\xe4ynnistyy, kun video k\xe4ynnistyy tai jatkuu tauottamisen j\xe4lkeen.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onStart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback, joka k\xe4ynnistyy, kun video pys\xe4htyy.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onStart() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSeek")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback kun media hakee kutsutaan ",(0,a.kt)("inlineCode",{parentName:"li"},"sekuntia")," parametrin kanssa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),(0,a.kt)("h2",d({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,a.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),(0,a.kt)(r.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),(0,a.kt)(r.Z,{value:"startTime",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),(0,a.kt)(r.Z,{value:"controlledSize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),(0,a.kt)(r.Z,{value:"withCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}g.isMDXComponent=!0}}]);