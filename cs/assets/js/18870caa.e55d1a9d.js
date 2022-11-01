"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27306],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,b=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))f.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:m,defaultValue:b,values:k,groupId:f,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=k?k:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===b?b:null!=(n=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==C&&!h.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:j}=(0,i.U)(),[w,z]=(0,a.useState)(C),D=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=f){const e=O[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&z(e)}const x=e=>{const t=e.currentTarget,n=D.indexOf(t),a=h[n].value;a!==w&&(P(t),z(a),null!=f&&j(f,String(a)))},T=e=>{var t,n;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;a=null!=(t=D[n])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=null!=(n=D[t])?n:D[D.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=N({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>D.push(e),onKeyDown:T,onClick:x},n),o={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(l,c(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,l.Z)();return a.createElement(y,N({key:String(t)},e))}},229469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return N}});var a=n(603905),r=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&d(e,n,t[n]);return e};const b={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},k=void 0,f={unversionedId:"questions/number-question",id:"questions/number-question",title:"Number Question",description:"Slo\u017eka s ot\xe1zkou na \u010d\xedslo.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/questions/number.md",sourceDirName:"questions",slug:"/questions/number-question",permalink:"/cs/docs/questions/number-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1651267477,formattedLastUpdatedAt:"29. 4. 2022",frontMatter:{id:"number-question",title:"Number Question",sidebar_label:"Number Question"},sidebar:"docs",previous:{title:"Multiple Choice Matrix",permalink:"/cs/docs/questions/multiple-choice-matrix"},next:{title:"Order Question",permalink:"/cs/docs/questions/order-question"}},v={},N=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],y={toc:N};function h(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},y),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Slo\u017eka s ot\xe1zkou na \u010d\xedslo."),(0,a.kt)("h2",c({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ot\xe1zka na \u010d\xedslo. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": um\xedst\u011bn\xed n\xe1pov\u011bdy (bu\u010f ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", nebo ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": n\xe1pov\u011bdy, jak odpov\u011bd\u011bt na ot\xe1zku.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se maj\xed zobrazovat tla\u010d\xedtka zp\u011btn\xe9 vazby. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|array<number>)"),": \u010d\xedselnou odpov\u011b\u010f na probl\xe9m (nebo v\xedce spr\xe1vn\xfdch odpov\u011bd\xed, pokud je zad\xe1no pole).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"digits")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det \u010d\xedslic, pro kter\xe9 mus\xed b\xfdt \u017e\xe1kem zadan\xe1 odpov\u011b\u010f shodn\xe1 s \u0159e\u0161en\xedm, aby byla pova\u017eov\xe1na za spr\xe1vnou. Nastavte na 0, aby se shodovala jako cel\xe9 \u010d\xedslo. Pokud je nastaveno na null, bude se hledat p\u0159esn\xe1 shoda.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed povolen\xe1 vstupn\xed hodnota. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": minim\xe1ln\xed povolen\xe1 vstupn\xed hodnota. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": p\u0159edvolen\xe1 hodnota \u010d\xedseln\xe9ho vstupu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se m\xe1 po odesl\xe1n\xed odpov\u011bdi zobrazit zp\u011btn\xe1 vazba v\u010detn\u011b spr\xe1vn\xe9 odpov\u011bdi.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"submitAfterFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda m\xe1 b\xfdt mo\u017en\xe9 znovu podat \u017e\xe1dost i po odhalen\xed \u0159e\u0161en\xed.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nTries")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": po kolika pokusech m\xe1 b\xfdt poskytnuta zp\u011btn\xe1 vazba (pokud je ",(0,a.kt)("inlineCode",{parentName:"li"},"provideFeedback")," ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),").. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda se maj\xed vypnout ozn\xe1men\xed o odesl\xe1n\xed. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda m\xe1 m\xedt prvek integrovan\xfd chat. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u010das, do kdy by studenti m\u011bli m\xedt mo\u017enost odevzdat odpov\u011bdi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed po\u010det bod\u016f ud\u011blen\xfdch p\u0159i klasifikaci. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed, kter\xe9 je spu\u0161t\u011bno po zm\u011bn\u011b hodnoty \u010d\xedseln\xe9ho pole; jako jedin\xfd argument obdr\u017e\xed aktu\xe1ln\xed hodnotu.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 po odesl\xe1n\xed odpov\u011bdi; jako prvn\xed parametr m\xe1 ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," ud\xe1vaj\xedc\xed, zda byla odpov\u011b\u010f spr\xe1vn\u011b zodpov\u011bzena (pokud ano, jinak ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"), a jako druh\xfd parametr zadanou odpov\u011b\u010f.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",c({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"markdownStyling"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<NumberQuestion\n    question="What is the number Pi? (include at least three digits after the decimal point)"\n    solution={3.142}\n/>\n'))),(0,a.kt)(l.Z,{value:"markdownStyling",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NumberQuestion\n    question={<span>What is the number $\\pi$? (include at least _three_ digits after the decimal point)</span>}\n    solution={3.142}\n/>\n"))),(0,a.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NumberQuestion\n    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}\n    solution={3.142}\n/>\n")))))}h.isMDXComponent=!0}}]);