"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1323],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),p="tabList__CuJ",s="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&b(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&b(e,n,t[n]);return e};function w(e){var t,n;const{lazy:l,block:c,defaultValue:k,values:y,groupId:f,className:b}=e,w=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=y?y:w.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===k?k:null!=(n=null!=k?k:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?n:w[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:O}=(0,o.U)(),[z,C]=(0,a.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=f){const e=j[f];null!=e&&e!==z&&h.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=S.indexOf(t),a=h[n].value;a!==z&&(P(t),C(a),null!=f&&O(f,String(a)))},T=e=>{var t,n;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;a=null!=(t=S[n])?t:S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=null!=(n=S[t])?n:S[S.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},b)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=v({role:"tab",tabIndex:z===e?0:-1,"aria-selected":z===e,key:e,ref:e=>S.push(e),onKeyDown:T,onClick:E},n),i={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":z===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(w.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function h(e){const t=(0,l.Z)();return a.createElement(w,v({key:String(t)},e))}},914225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return h},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return v}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&m(e,n,t[n]);return e};const k={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},y=void 0,f={unversionedId:"js-shell",id:"js-shell",title:"JavaScript Shell",description:"Interaktywna pow\u0142oka Javascript, kt\xf3rej mo\u017cna u\u017cywa\u0107 do wykonywania polece\u0144 JavaScript. Pow\u0142oka zawiera konsol\u0119, kt\xf3ra wy\u015bwietla komunikaty o b\u0142\u0119dach, ostrze\u017cenia itp.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/js-shell.md",sourceDirName:".",slug:"/js-shell",permalink:"/pl/docs/js-shell",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 pa\u017a 2021",frontMatter:{id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},sidebar:"docs",previous:{title:"Flippable Card",permalink:"/pl/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/pl/docs/likert-scale"}},b={},v=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],w={toc:v};function h(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},w),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Interaktywna pow\u0142oka Javascript, kt\xf3rej mo\u017cna u\u017cywa\u0107 do wykonywania polece\u0144 JavaScript. Pow\u0142oka zawiera konsol\u0119, kt\xf3ra wy\u015bwietla komunikaty o b\u0142\u0119dach, ostrze\u017cenia itp."),(0,a.kt)("h2",d({},{id:"opcje"}),"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"code")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Kod JavaScript do oceny. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": dla pyta\u0144 dotycz\u0105cych programowania, kod ",(0,a.kt)("inlineCode",{parentName:"li"},"sznurek")," reprezentuj\u0105cy oficjalne rozwi\u0105zanie problemu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": w przypadku pyta\u0144 zwi\u0105zanych z programowaniem, szereg wskaz\xf3wek zawieraj\u0105cych wskaz\xf3wki, jak podej\u015b\u0107 do problemu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precompute")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy po zamontowaniu komponentu powinien zosta\u0107 wykonany kod domy\u015blny. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy funkcja czatu grupowego powinna by\u0107 w\u0142\u0105czona. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"check")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": doda\u0142 kod JavaScript do sprawdzenia ",(0,a.kt)("inlineCode",{parentName:"li"},"kodu"),", kt\xf3ry ma by\u0107 oceniany. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wy\u0142\u0105czy\u0107 wszystkie wej\u015bcia u\u017cytkownika i sprawi\u0107, by blok kodu by\u0142 statyczny. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lines")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": liczba wierszy do wy\u015bwietlenia. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne przy ka\u017cdej zmianie danych wej\u015bciowych pola tekstowego. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': wywo\u0142anie zwrotne po klikni\u0119ciu przycisku "Wycena". Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vars")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": obiekt zakresu ze zmiennymi, kt\xf3re powinny by\u0107 udost\u0119pnione do oceny ",(0,a.kt)("inlineCode",{parentName:"li"},"kodu"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",d({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Ten Lines",value:"mLines"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<JSShell code = {`var a = 2; \nvar b = 2;\nconsole.log(a + b);`} />\n"))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />\n"))),(0,a.kt)(l.Z,{value:"mLines",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<JSShell lines={10} />\n")))))}h.isMDXComponent=!0}}]);