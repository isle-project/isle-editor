"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4677],{603905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(202784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),l=a(386010),r="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel",className:(0,l.Z)(r,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),l=a(386010),r=a(152670),i=a(258433),o=a(952326),u=a(638849),p="tabList__CuJ",s="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&v(e,a,t[a]);if(b)for(var a of b(t))k.call(t,a)&&v(e,a,t[a]);return e};function y(e){var t,a;const{lazy:r,block:c,defaultValue:b,values:f,groupId:k,className:v}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===b?b:null!=(a=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:S}=(0,o.U)(),[w,j]=(0,n.useState)(C),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=k){const e=O[k];null!=e&&e!==w&&N.some((t=>t.value===e))&&j(e)}const D=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==w&&(E(t),j(n),null!=k&&S(k,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>T.push(e),onKeyDown:P,onClick:D},a),i={className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":w===e})},d(r,m(i))),null!=t?t:e);var r,i}))),r?(0,n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function N(e){const t=(0,r.Z)();return n.createElement(y,g({key:String(t)},e))}},897208:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return g}});var n=a(603905),l=a(751361),r=a(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&d(e,a,t[a]);return e};const b={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},f=void 0,k={unversionedId:"flippable-card",id:"flippable-card",title:"Flippable Card",description:"ISLE komponent, mis v\xf5imaldab kahel poolel renderdada.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/flippable-card.md",sourceDirName:".",slug:"/flippable-card",permalink:"/et/docs/flippable-card",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. juuni 2021",frontMatter:{id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},sidebar:"docs",previous:{title:"Draggable List",permalink:"/et/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/et/docs/js-shell"}},v={},g=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],y={toc:g};function N(e){var t,a=e,{components:i}=a,d=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"ISLE komponent, mis v\xf5imaldab kahel poolel renderdada."),(0,n.kt)("h2",m({},{id:"valikud"}),"Valikud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"button")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nupu silt. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"draggable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas kaarti v\xf5ib lohistada. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": kiirus, millega kaart muutub taustast esiplaanile, sekundites.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": kiirus, millega kaart muutub esiplaanilt taustaks, sekundites.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": n\xe4itab, kas flip-protsessi v\xf5ib teostada ainult \xfcks kord.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"perspective")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": CSS-omandi v\xe4\xe4rtus, et anda 3D-positsiooniga elemendile perspektiivi. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"size")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),': kaardi suurus (m\xe4\xe4rab selle "laiuse" ja "k\xf5rguse"). Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"250"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disabled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas p\xf6\xf6ratav kaart on v\xe4lja l\xfclitatud. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"value")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kaardi flip state (kontrollitava komponendi puhul). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kaardi esialgne volditud olek. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Konteineri CSS stiil. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Esikaardi CSS-stiil. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Tagakaardi CSS-stiil. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, mida kutsutakse \xfcles, kui kaart on \xfcmber p\xf6\xf6ratud; saab ainsa argumendina praeguse \xfcmberp\xf6\xf6ratud staatuse.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,n.kt)("h2",m({},{id:"n\xe4ited"}),"N\xe4ited"),(0,n.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FlippableCard containerStyle={{ float: \'none\' }} size={200}>\n  <img src="https://bit.ly/2YU5EbU" />\n  <img src="https://bit.ly/3aGv9mp" />\n</FlippableCard>\n'))),(0,n.kt)(r.Z,{value:"withCSS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<FlippableCard \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),(0,n.kt)(r.Z,{value:"slowMo",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}N.isMDXComponent=!0}}]);