"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61822],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=l,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),l=a(386010),r="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,l.Z)(r,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),l=a(386010),r=a(152670),i=a(258433),o=a(952326),u=a(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(k)for(var a of k(t))f.call(t,a)&&v(e,a,t[a]);return e};function g(e){var t,a;const{lazy:r,block:c,defaultValue:k,values:b,groupId:f,className:v}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===k?k:null!=(a=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==j&&!N.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,o.U)(),[w,P]=(0,n.useState)(j),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=O[f];null!=e&&e!==w&&N.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==w&&(x(t),P(n),null!=f&&C(f,String(n)))},E=e=>{var t,a;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=y({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>T.push(e),onKeyDown:E,onClick:D},a),i={className:(0,l.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===e})},m(r,d(i))),null!=t?t:e);var r,i}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function N(e){const t=(0,r.Z)();return n.createElement(g,y({key:String(t)},e))}},219461:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return y}});var n=a(603905),l=a(751361),r=a(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&m(e,a,t[a]);return e};const k={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},b=void 0,f={unversionedId:"video-player",id:"video-player",title:"Video Player",description:"Komponent meediafailide ja YouTube'i, SoundCloudi ja Vimeo sisu esitamiseks.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/video-player.md",sourceDirName:".",slug:"/video-player",permalink:"/et/docs/video-player",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8. okt 2021",frontMatter:{id:"video-player",title:"Video Player",sidebar_label:"Video Player"},sidebar:"docs",previous:{title:"Video Lecture",permalink:"/et/docs/video-lecture"},next:{title:"Image",permalink:"/et/docs/image"}},v={},y=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],g={toc:y};function N(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Komponent meediafailide ja YouTube'i, SoundCloudi ja Vimeo sisu esitamiseks."),(0,n.kt)("h2",d({},{id:"valikud"}),"Valikud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"url")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": Video URL aadress. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"controls")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": n\xe4itab, kas kuvada videom\xe4ngija juhtelemente. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"playing")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": n\xe4itab, kas video esitamine peab automaatselt algama. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"volume")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": m\xe4ngija helitugevus. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.8"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"center")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas videom\xe4ngija tsentreeritakse. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"height")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|number)"),": m\xe4ngija k\xf5rgus. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"360"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"width")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|number)"),": m\xe4ngija laius. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"640"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"loop")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas video k\xe4ivitatakse uuesti p\xe4rast selle esitamist.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"startTime")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": sekundite arv, millest video k\xe4ivitatakse, v\xf5i murdosa, kui v\xe4\xe4rtus j\xe4\xe4b vahemikku 0-1. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onEnded")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, mis kutsutakse \xfcles p\xe4rast video l\xf5ppu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onPause")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse esile, kui video pausib. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onPause() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onPlay")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse \xfcles, kui video algab v\xf5i j\xe4tkab m\xe4ngimist p\xe4rast pausi. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onStart")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, mis kutsutakse esile, kui video peatub. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onStart() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onSeek")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, kui meedia soovib kutsuda ",(0,n.kt)("inlineCode",{parentName:"li"},"sekundite")," parameetriga. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),(0,n.kt)("h2",d({},{id:"n\xe4ited"}),"N\xe4ited"),(0,n.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),(0,n.kt)(r.Z,{value:"withStyle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),(0,n.kt)(r.Z,{value:"startTime",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),(0,n.kt)(r.Z,{value:"controlledSize",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),(0,n.kt)(r.Z,{value:"withCallback",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}N.isMDXComponent=!0}}]);