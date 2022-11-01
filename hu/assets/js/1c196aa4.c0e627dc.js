"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74336],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(202784),r=n(386010),l=n(152670),o=n(258433),i=n(952326),s=n(638849),c="tabList__CuJ",u="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))k.call(t,n)&&y(e,n,t[n]);return e};function h(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:f,groupId:k,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=f?f:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),x=(0,o.l)(v,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(n=null!=b?b:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:S}=(0,i.U)(),[O,j]=(0,a.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=k){const e=w[k];null!=e&&e!==O&&v.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==O&&(E(t),j(a),null!=k&&S(k,String(a)))},z=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;a=null!=(t=C[n])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=null!=(n=C[t])?n:C[C.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},y)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>C.push(e),onKeyDown:z,onClick:P},n),o={className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,l.Z)();return a.createElement(h,g({key:String(t)},e))}},784145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const b={id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},f=void 0,k={unversionedId:"multi-cards",id:"multi-cards",title:"Multi Cards",description:"Egy ISLE komponens, amely lehet\u0151v\xe9 teszi, hogy t\xf6bb felford\xedthat\xf3 k\xe1rty\xe1t hozzon l\xe9tre \xe9s ir\xe1ny\xedtson (pl. egy Memory j\xe1t\xe9kban).",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/multi-cards.md",sourceDirName:".",slug:"/multi-cards",permalink:"/hu/docs/multi-cards",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multi-cards.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. j\xfan. 1.",frontMatter:{id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},sidebar:"docs",previous:{title:"Likert Scale",permalink:"/hu/docs/likert-scale"},next:{title:"QR Code",permalink:"/hu/docs/qrcode"}},y={},g=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],h={toc:g};function v(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},h),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Egy ISLE komponens, amely lehet\u0151v\xe9 teszi, hogy t\xf6bb felford\xedthat\xf3 k\xe1rty\xe1t hozzon l\xe9tre \xe9s ir\xe1ny\xedtson (pl. egy Memory j\xe1t\xe9kban)."),(0,a.kt)("h2",d({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"animation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": ha be van \xe1ll\xedtva, a komponens egy bel\xe9p\u0151 anim\xe1ci\xf3t haszn\xe1l; az objektum tartalmaz egy nevet (pl. ",(0,a.kt)("inlineCode",{parentName:"li"},"anim-scale-up"),") \xe9s egy id\u0151tartamot (pl. ",(0,a.kt)("inlineCode",{parentName:"li"},"1.7s")," = 1.7 m\xe1sodperc).. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"memory")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": enged\xe9lyezi-e a mem\xf3riaj\xe1t\xe9k m\xf3dot, amelyben a megadott \xe9rt\xe9kek p\xe1rjait kell \xf6sszep\xe1ros\xedtani.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": egy f\xfcggv\xe9ny, amely megkapja a lapozhat\xf3 k\xe1rty\xe1k m\xe1trix\xe1t. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onMemoryComplete")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": visszah\xedv\xe1s, ha a mem\xf3riaj\xe1t\xe9k befejez\u0151d\xf6tt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onMemoryComplete() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": jelzi, hogy a flip folyamat csak egyszer hajthat\xf3-e v\xe9gre.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"values")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<object>"),': a megfelel\u0151 k\xe1rty\xe1k \xe9rt\xe9kei, egy olyan t\xf6mbben, amely egy "el\xfcls\u0151" \xe9s egy "h\xe1ts\xf3" \xe9rt\xe9ket tartalmaz\xf3 mez\u0151vel rendelkezik. Ilyen \xe9rt\xe9k lehet egy karakterl\xe1nc, de lehet egy teljes \xe9rt\xe9k\u0171 ISLE komponens is.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": A k\xe1rtya kont\xe9nerek CSS st\xedlusa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": A k\xe1rty\xe1k el\u0151lapj\xe1nak CSS st\xedlusa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": A k\xe1rty\xe1k h\xe1toldal\xe1nak CSS st\xedlusa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",d({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Front Image",value:"frontImage"},{label:"Memory",value:"memory"},{label:"Memory with Solved Callback",value:"memorySolvedCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"frontImage",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 13px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n        backgroundSize: '100% auto'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"memory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"memorySolvedCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}\n/>\n")))))}v.isMDXComponent=!0}}]);