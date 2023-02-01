"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4124],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),c=n(638849),u="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(b)for(var n of b(t))k.call(t,n)&&g(e,n,t[n]);return e};function v(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:f,groupId:k,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),x=(0,o.l)(h,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(n=null!=b?b:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:S}=(0,i.U)(),[C,O]=(0,r.useState)(N),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=k){const e=w[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==C&&(T(t),O(r),null!=k&&S(k,String(r)))},P=e=>{var t,n;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;r=null!=(t=j[n])?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;r=null!=(n=j[t])?n:j[j.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},g)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>j.push(e),onKeyDown:P,onClick:E},n),o={className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":C===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return r.createElement(v,y({key:String(t)},e))}},222950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return y}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const b={id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},f=void 0,k={unversionedId:"multi-cards",id:"multi-cards",title:"Multi Cards",description:"\u8907\u6570\u306e\u30d5\u30ea\u30c3\u30d7\u53ef\u80fd\u306a\u30ab\u30fc\u30c9\uff08\u30e1\u30e2\u30ea\u30fc\u30b2\u30fc\u30e0\u306a\u3069\uff09\u3092\u4f5c\u6210\u3057\u3066\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308bISLE\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/multi-cards.md",sourceDirName:".",slug:"/multi-cards",permalink:"/ja/docs/multi-cards",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multi-cards.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614123017,formattedLastUpdatedAt:"2021\u5e742\u670823\u65e5",frontMatter:{id:"multi-cards",title:"Multi Cards",sidebar_label:"Multi Cards"},sidebar:"docs",previous:{title:"Likert Scale",permalink:"/ja/docs/likert-scale"},next:{title:"QR Code",permalink:"/ja/docs/qrcode"}},g={},y=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],v={toc:y};function h(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),m),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u8907\u6570\u306e\u30d5\u30ea\u30c3\u30d7\u53ef\u80fd\u306a\u30ab\u30fc\u30c9\uff08\u30e1\u30e2\u30ea\u30fc\u30b2\u30fc\u30e0\u306a\u3069\uff09\u3092\u4f5c\u6210\u3057\u3066\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308bISLE\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),(0,r.kt)("h2",d({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"animation")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u540d\u524d(",(0,r.kt)("inlineCode",{parentName:"li"},"anim-scal-up")," \u306e\u3088\u3046\u306a)\u3068\u6301\u7d9a\u6642\u9593(",(0,r.kt)("inlineCode",{parentName:"li"},"1.7s")," = 1.7\u79d2\u306e\u3088\u3046\u306a)\u304c\u542b\u307e\u308c\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"memory")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u4e0e\u3048\u3089\u308c\u305f\u5024\u306e\u30da\u30a2\u3092\u30de\u30c3\u30c1\u3055\u305b\u308b\u30e1\u30e2\u30ea\u30b2\u30fc\u30e0\u30e2\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u30d5\u30ea\u30c3\u30d1\u30d6\u30eb\u30ab\u30fc\u30c9\u306e\u884c\u5217\u3092\u53d7\u3051\u53d6\u308b\u95a2\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onMemoryComplete")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u30e1\u30e2\u30ea\u30b2\u30fc\u30e0\u304c\u5b8c\u4e86\u3057\u305f\u5834\u5408\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onMemoryComplete() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u30d5\u30ea\u30c3\u30d7\u51e6\u7406\u3092\u4e00\u5ea6\u3060\u3051\u5b9f\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"values")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<object>"),": \u306f\u3001\u305d\u308c\u305e\u308c\u306e\u30ab\u30fc\u30c9\u306e\u5024\u3092 ",(0,r.kt)("inlineCode",{parentName:"li"},"front")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"back")," \u306e\u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064\u914d\u5217\u306b\u5165\u529b\u3057\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u5024\u306f\u6587\u5b57\u5217\u3067\u3082\u3088\u3044\u304c\u3001\u672c\u683c\u7684\u306a ISLE \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3082\u3088\u3044\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u30ab\u30fc\u30c9\u30b3\u30f3\u30c6\u30ca\u306eCSS\u30b9\u30bf\u30a4\u30eb. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u30ab\u30fc\u30c9\u306e\u524d\u9762\u306eCSS\u30b9\u30bf\u30a4\u30eb. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u30ab\u30fc\u30c9\u88cf\u9762\u306eCSS\u30b9\u30bf\u30a4\u30eb. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",d({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Front Image",value:"frontImage"},{label:"Memory",value:"memory"},{label:"Memory with Solved Callback",value:"memorySolvedCallback"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,r.kt)(l.Z,{value:"frontImage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    containerStyle={{\n        width: 250,\n        height: 250,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 13px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n        backgroundSize: '100% auto'\n    }}\n    backStyle={{\n        color: 'black',\n        fontSize: 20,\n        fontWeight: 800,\n        fontFamily: 'Oswald',\n        textAlign: 'left',\n        paddingLeft: '10px',\n        background: 'ghostwhite',\n        boxShadow: '1px 1px 10px black',\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'}\n    ]}\n/>\n"))),(0,r.kt)(l.Z,{value:"memory",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n/>\n"))),(0,r.kt)(l.Z,{value:"memorySolvedCallback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultiCards\n    memory\n    containerStyle={{\n        width: 200,\n        height: 200,\n        marginBottom: 10\n    }}\n    frontStyle={{\n        color:'white',\n        textShadow: '0px 0px 3px black',\n        fontWeight: 800,\n        fontSize: 30,\n        cursor: 'pointer',\n        textAlign: 'center',\n        boxShadow: '1px 1px 10px black',\n        background: 'silver',\n        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n    }}\n    backStyle={{\n        padding: 12,\n        boxShadow: '1px 1px 10px black'\n    }}\n    values={[\n        { front: \"\", back: <img src=\"https://bit.ly/3qS4daf\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3sn5Ih6\"/> },\n        { front: \"\",  back: <img src=\"https://bit.ly/3qNVpSP\" /> }\n    ]}\n    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}\n/>\n")))))}h.isMDXComponent=!0}}]);