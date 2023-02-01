"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21955],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),l=n(386010),r="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&m(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(r,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(202784),l=n(386010),r=n(152670),i=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",m="tabItem_LNqP",c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&g(e,n,t[n]);return e};function y(e){var t,n;const{lazy:r,block:c,defaultValue:k,values:b,groupId:f,className:g}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===k?k:null!=(n=null!=k?k:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==j&&!v.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:O}=(0,o.U)(),[z,w]=(0,a.useState)(j),P=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=f){const e=C[f];null!=e&&e!==z&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=v[n].value;a!==z&&(D(t),w(a),null!=f&&O(f,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=h({role:"tab",tabIndex:z===e?0:-1,"aria-selected":z===e,key:e,ref:e=>P.push(e),onKeyDown:E,onClick:T},n),i={className:(0,l.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":z===e})},p(r,d(i))),null!=t?t:e);var r,i}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function v(e){const t=(0,r.Z)();return a.createElement(y,h({key:String(t)},e))}},593993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return h}});var a=n(603905),l=n(751361),r=n(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&p(e,n,t[n]);return e};const k={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},b=void 0,f={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"Egy ISLE komponens, amely egy olyan k\xe9rd\xe9st jelen\xedt meg, amelyben a tanul\xf3nak k\xe9t lista elemeit kell a megfelel\u0151 m\xf3don egym\xe1shoz illesztenie.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/hu/docs/questions/match-list-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"2022. \xe1pr. 20.",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/hu/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/hu/docs/questions/multiple-choice-question"}},g={},h=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],y={toc:h};function v(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),p),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Egy ISLE komponens, amely egy olyan k\xe9rd\xe9st jelen\xedt meg, amelyben a tanul\xf3nak k\xe9t lista elemeit kell a megfelel\u0151 m\xf3don egym\xe1shoz illesztenie."),(0,a.kt)("h2",d({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a m\xe9rk\u0151z\xe9slista k\xe9rd\xe9skomponens\xe9nek tetej\xe9n megjelen\xedtend\u0151 k\xe9rd\xe9s. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"elements")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),': egy "t\xf6mb", amely a helyes p\xe1rokat tartalmazza, \xe9s a szabad sz\xf6veges k\xe9rd\xe9skomponens tetej\xe9n jelenik meg. Minden ',(0,a.kt)("inlineCode",{parentName:"li"},"array")," elemnek egy ",(0,a.kt)("inlineCode",{parentName:"li"},"objektumnak")," kell lennie ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," \xe9s ",(0,a.kt)("inlineCode",{parentName:"li"},"b")," tulajdons\xe1gokkal; a zavar\xf3 v\xe1laszok hozz\xe1ad\xe1s\xe1hoz csak ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," vagy ",(0,a.kt)("inlineCode",{parentName:"li"},"b")," tulajdons\xe1g\xfa elemeket kell megadnia.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": a tippek elhelyez\xe9se (vagy ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", vagy ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": a k\xe9rd\xe9s megv\xe1laszol\xe1s\xe1ra vonatkoz\xf3 \xfatmutat\xe1sokat ad. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": jelzi, hogy a megold\xe1snak a tanul\xf3k v\xe1laszainak elk\xfcld\xe9se ut\xe1n is el\xe9rhet\u0151nek kell-e lennie.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjenek-e a visszajelz\u0151 gombok. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az elemnek legyen-e integr\xe1lt chatje. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": ha be van \xe1ll\xedtva, akkor a megadott sz\xedneket haszn\xe1lj\xe1k a csemp\xe9khez.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': megadja, hogy a "bal", "jobb" vagy "mindk\xe9t" oszlopot, amelyek elemeit \xf6ssze kell egyeztetni, meg kell-e keverni; a "nincs" vagy b\xe1rmely m\xe1s \xe9rt\xe9k megad\xe1sa eset\xe9n az elemek egyik oldalon sem lesznek megkeverve (hasznos lehet abban az esetben, ha nincs megold\xe1s jelen). Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza a beny\xfajt\xe1si \xe9rtes\xedt\xe9sek letilt\xe1s\xe1t. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": a tanul\xf3 els\u0151 v\xe1lasz\xe1nak elk\xfcld\xe9sekor megjelen\u0151 \xe9rtes\xedt\xe9s. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": az els\u0151 beadv\xe1nyt k\xf6vet\u0151 \xf6sszes beadv\xe1nyra megjelen\u0151 \xe9rtes\xedt\xe9s. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": a tanul\xf3knak a v\xe1laszok beny\xfajt\xe1s\xe1ig rendelkez\xe9sre \xe1ll\xf3 id\u0151. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": az oszt\xe1lyoz\xe1s sor\xe1n adhat\xf3 maxim\xe1lis pontsz\xe1m. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": oszt\xe1ly neve. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback h\xedv\xe1s, amikor a di\xe1kok megv\xe1ltoztatj\xe1k a v\xe1laszt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, amit akkor h\xedvnak meg, amikor a di\xe1kok bek\xfcldik a v\xe1laszt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",d({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,a.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,a.kt)(r.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,a.kt)(r.Z,{value:"withFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,a.kt)(r.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,a.kt)(r.Z,{value:"grading",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}v.isMDXComponent=!0}}]);