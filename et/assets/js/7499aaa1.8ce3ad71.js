"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93707],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(202784),i=a(386010),l="tabItem_Ymn6",r=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function m({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,i.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),i=a(386010),l=a(152670),r=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(k)for(var a of k(t))f.call(t,a)&&v(e,a,t[a]);return e};function y(e){var t,a;const{lazy:l,block:m,defaultValue:k,values:b,groupId:f,className:v}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,r.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===k?k:null!=(a=null!=k?k:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:C}=(0,o.U)(),[w,P]=(0,n.useState)(O),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=h[a].value;n!==w&&(T(t),P(n),null!=f&&C(f,String(n)))},E=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;n=null!=(t=x[a])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},v)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:D,onClick:D},a),r={className:(0,i.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===e})},c(l,d(r))),null!=t?t:e);var l,r}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,l.Z)();return n.createElement(y,g({key:String(t)},e))}},697296:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var n=a(603905),i=a(751361),l=a(440034),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&c(e,a,t[a]);return e};const k={id:"image-question",title:"Image Question",sidebar_label:"Image Question"},b=void 0,f={unversionedId:"questions/image-question",id:"questions/image-question",title:"Image Question",description:"K\xfcsimus, milles palutakse kasutajal laadida \xfcles pilt.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/questions/image.md",sourceDirName:"questions",slug:"/questions/image-question",permalink:"/et/docs/questions/image-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/image.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. juuni 2021",frontMatter:{id:"image-question",title:"Image Question",sidebar_label:"Image Question"},sidebar:"docs",previous:{title:"Free Text Question",permalink:"/et/docs/questions/free-text-question"},next:{title:"Match List Question",permalink:"/et/docs/questions/match-list-question"}},v={},g=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],y=(h="Sketchpad",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",d({},e))});var h;const N={toc:g};function O(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},N),c),o(t,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"K\xfcsimus, milles palutakse kasutajal laadida \xfcles pilt."),(0,n.kt)("h2",d({},{id:"valikud"}),"Valikud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"question")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": k\xfcsimuse tekst. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": vihjete paigutus (kas ",(0,n.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"right")," v\xf5i ",(0,n.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hints")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": vihjeid, mis annavad suuniseid k\xfcsimusele vastamiseks. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"feedback")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas tagasiside nuppe kuvada. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"chat")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas p\xe4rast pildi esitamist peaks ilmuma teade. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": klassi nimi. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sketchpad")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": omadused, mis tuleb edastada komponendile ",(0,n.kt)(y,{mdxType:"Sketchpad"}),"; sketchpad'i renderdamiseks tuleb edastada v\xe4hemalt t\xfchi objekt ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solution")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": mudellahenduse pildi URL. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"until")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),": aega, kuni \xf5pilastel peaks olema lubatud vastuseid esitada. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"points")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": hindamisel antavate punktide maksimaalne arv. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),': callback, mida kutsutakse \xfcles, kui vastus on esitatud; ainsa parameetrina on "boolean", mis n\xe4itab, kas elemendid on paigutatud \xf5iges j\xe4rjekorras.. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,n.kt)("h2",d({},{id:"n\xe4ited"}),"N\xe4ited"),(0,n.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Sketchpad",value:"witchSketchpad"},{label:"Submit Plot",value:"submitPlot"},{label:"Solution",value:"solution"},,],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ImageQuestion question="You may upload an image." feedback={false}  />\n'))),(0,n.kt)(l.Z,{value:"witchSketchpad",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />\n'))),(0,n.kt)(l.Z,{value:"submitPlot",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\n  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />\n  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />\n</div>\n'))),(0,n.kt)(l.Z,{value:"solution",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter \'Gamma\'." feedback={false} sketchpad={{ canvasHeight: 300}} />\n')))))}O.isMDXComponent=!0}}]);