"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66710],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return b}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(u,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(b,i(i({ref:t},m),{},{components:n})):a.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&m(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",m="tabItem_LNqP",p=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))k.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:f,groupId:k,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(n=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,o.U)(),[C,T]=(0,a.useState)(O),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=k){const e=j[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==C&&(E(t),T(a),null!=k&&w(k,String(a)))},S=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>x.push(e),onKeyDown:S,onClick:P},n),i={className:(0,r.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":C===e})},c(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return a.createElement(y,g({key:String(t)},e))}},706722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e};const b={id:"image",title:"Image",sidebar_label:"Image"},f=void 0,k={unversionedId:"image",id:"image",title:"Image",description:"Komponentti kuvan n\xe4ytt\xe4miseen.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/image.md",sourceDirName:".",slug:"/image",permalink:"/fi/docs/image",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/image.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. kes\xe4k. 2021",frontMatter:{id:"image",title:"Image",sidebar_label:"Image"},sidebar:"docs",previous:{title:"Video Player",permalink:"/fi/docs/video-player"},next:{title:"Link",permalink:"/fi/docs/link"}},v={},g=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],y={toc:g};function h(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),c),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Komponentti kuvan n\xe4ytt\xe4miseen."),(0,a.kt)("h2",d({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"src")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": kuvan l\xe4hteen sijainti. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"alt")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": kuvan kuvaus. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"body")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": kuvan base64-koodatut tiedot. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": kuvan korkeus (px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": kuvan leveys (px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": mahdollistaa kuvan ymp\xe4r\xf6imisen tekstill\xe4. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": komponentin tunniste. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showModal")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, n\xe4ytet\xe4\xe4nk\xf6 koko n\xe4yt\xf6n modaalinen n\xe4kym\xe4.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": luokan nimi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onShare")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': Callback, joka k\xe4ynnistet\xe4\xe4n kuvan kanssa, jos "share"-painiketta napsautetaan.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",d({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Border",value:"withStyle"},{label:"Controlled Size",value:"controlledSize"},{label:"Inline",value:"inline"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Image \n    alt="Self-portrait by Vincent van Gogh from September 1889." \n    src="https://bit.ly/37cof7K"\n/>\n'))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Image \n    alt="Self-portrait by Vincent van Gogh from September 1889." \n    src="https://bit.ly/37cof7K"\n    style={{ border: \'solid 10px black\'}}\n/>\n'))),(0,a.kt)(l.Z,{value:"controlledSize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Image \n    alt="The Starry Night by Vincent van Gogh" \n    src="https://bit.ly/37h3JTj"\n    width="200px"\n    height="auto"\n/>\n'))),(0,a.kt)(l.Z,{value:"inline",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, \n<Image \n    src="https://isle.heinz.cmu.edu/Summertime_flowerGradient.png"\n    width="300px"\n    height="auto"\n    inline\n/>\nno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, \nconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n</div>\n')))))}h.isMDXComponent=!0}}]);