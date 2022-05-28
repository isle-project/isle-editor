"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20079],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),r=n(386010),i=n(152670),l=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&f(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&f(e,n,t[n]);return e};function y(e){var t,n;const{lazy:i,block:m,defaultValue:b,values:k,groupId:v,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=k?k:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,l.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===b?b:null!=(n=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:O}=(0,o.U)(),[w,z]=(0,a.useState)(C),P=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==w&&N.some((t=>t.value===e))&&z(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=N[n].value;a!==w&&(D(t),z(a),null!=v&&O(v,String(a)))},x=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=h({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:x,onFocus:T,onClick:T},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},c(i,d(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function N(e){const t=(0,i.Z)();return a.createElement(y,h({key:String(t)},e))}},989096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return h}});var a=n(603905),r=n(751361),i=n(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&c(e,n,t[n]);return e};const b={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},k=void 0,v={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"Komponenta ISLE, kter\xe1 vykresluje ot\xe1zku, v n\xed\u017e m\xe1 \u017e\xe1k spr\xe1vn\u011b p\u0159i\u0159adit prvky ze dvou seznam\u016f.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/cs/docs/questions/match-list-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20. 4. 2022",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/cs/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/cs/docs/questions/multiple-choice-question"}},f={},h=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],y={toc:h};function N(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),c),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Komponenta ISLE, kter\xe1 vykresluje ot\xe1zku, v n\xed\u017e m\xe1 \u017e\xe1k spr\xe1vn\u011b p\u0159i\u0159adit prvky ze dvou seznam\u016f."),(0,a.kt)("h2",d({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ot\xe1zka, kter\xe1 se m\xe1 zobrazit v horn\xed \u010d\xe1sti sou\u010d\xe1sti seznamu ot\xe1zek.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"elements")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),": pole ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," obsahuj\xedc\xed spr\xe1vn\xe9 dvojice, kter\xe9 se zobraz\xed v horn\xed \u010d\xe1sti voln\xe9ho textu ot\xe1zky. Ka\u017ed\xfd prvek ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," mus\xed b\xfdt ",(0,a.kt)("inlineCode",{parentName:"li"},"objekt")," s vlastnostmi ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"b"),"; pro p\u0159id\xe1n\xed distraktorov\xfdch odpov\u011bd\xed dodejte prvky pouze s vlastnostmi ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," nebo ",(0,a.kt)("inlineCode",{parentName:"li"},"b"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": um\xedst\u011bn\xed n\xe1pov\u011bdy (bu\u010f ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", nebo ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": n\xe1pov\u011bdy, jak odpov\u011bd\u011bt na ot\xe1zku.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ozna\u010duje, zda m\xe1 b\xfdt \u0159e\u0161en\xed p\u0159\xedstupn\xe9 i po odesl\xe1n\xed odpov\u011bd\xed \u017e\xe1k\u016f.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se maj\xed zobrazovat tla\u010d\xedtka zp\u011btn\xe9 vazby. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda m\xe1 m\xedt prvek integrovan\xfd chat. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": pokud je nastaveno, pou\u017eij\xed se pro dla\u017edice dodan\xe9 barvy.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ur\u010duje, zda se maj\xed zam\xedchat sloupce ",(0,a.kt)("inlineCode",{parentName:"li"},"lev\xfd"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"prav\xfd")," nebo ",(0,a.kt)("inlineCode",{parentName:"li"},"ob\u011b"),", jejich\u017e prvky maj\xed b\xfdt porovn\xe1ny; zad\xe1n\xedm hodnoty ",(0,a.kt)("inlineCode",{parentName:"li"},"none")," nebo jin\xe9 hodnoty se prvky na obou stran\xe1ch nezam\xedchaj\xed (m\u016f\u017ee b\xfdt u\u017eite\u010dn\xe9 v p\u0159\xedpad\u011b, \u017ee nen\xed k dispozici \u017e\xe1dn\xe9 \u0159e\u0161en\xed).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda se maj\xed vypnout ozn\xe1men\xed o odesl\xe1n\xed. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ozn\xe1men\xed zobrazen\xe9 p\u0159i prvn\xedm odesl\xe1n\xed odpov\u011bdi \u017e\xe1kem.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ozn\xe1men\xed se zobraz\xed u v\u0161ech pod\xe1n\xed po prvn\xedm pod\xe1n\xed.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u010das, do kdy by studenti m\u011bli m\xedt mo\u017enost odevzdat odpov\u011bdi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed po\u010det bod\u016f ud\u011blen\xfdch p\u0159i klasifikaci. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev t\u0159\xeddy. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9, kdy\u017e studenti zm\u011bn\xed odpov\u011b\u010f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 p\u0159i odesl\xe1n\xed odpov\u011bdi studentem. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",d({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,a.kt)(i.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,a.kt)(i.Z,{value:"withFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,a.kt)(i.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,a.kt)(i.Z,{value:"grading",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}N.isMDXComponent=!0}}]);