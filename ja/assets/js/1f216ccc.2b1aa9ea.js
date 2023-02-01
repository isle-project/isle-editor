"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13258],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(d)for(var n of d(t))v.call(t,n)&&k(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:p,defaultValue:d,values:f,groupId:v,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===d?d:null!=(n=null!=d?d:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[C,E]=(0,r.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=v){const e=w[v];null!=e&&e!==C&&h.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==C&&(P(t),E(r),null!=v&&j(v,String(r)))},S=e=>{var t,n;let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;r=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=null!=(n=T[t])?n:T[T.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},k)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:S,onClick:x},n),i={className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":C===e})},m(l,b(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return r.createElement(g,y({key:String(t)},e))}},862808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return y}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const d={id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},f=void 0,v={unversionedId:"lesson-submit",id:"lesson-submit",title:"Lesson Submit",description:"\u30ec\u30c3\u30b9\u30f3\u306e\u6700\u5f8c\u306b\u8868\u793a\u3055\u308c\u308b\u30dc\u30bf\u30f3\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30ec\u30c3\u30b9\u30f3\u306e\u5b8c\u4e86\u3092\u78ba\u8a8d\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5b66\u751f\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/lesson-submit.md",sourceDirName:".",slug:"/lesson-submit",permalink:"/ja/docs/lesson-submit",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/lesson-submit.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1651267477,formattedLastUpdatedAt:"2022\u5e744\u670829\u65e5",frontMatter:{id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},sidebar:"docs",previous:{title:"Sketchpad",permalink:"/ja/docs/sketchpad"},next:{title:"Video Lecture",permalink:"/ja/docs/video-lecture"}},k={},y=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],g={toc:y};function h(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},g),m),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u30ec\u30c3\u30b9\u30f3\u306e\u6700\u5f8c\u306b\u8868\u793a\u3055\u308c\u308b\u30dc\u30bf\u30f3\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30ec\u30c3\u30b9\u30f3\u306e\u5b8c\u4e86\u3092\u78ba\u8a8d\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5b66\u751f\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",b({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"coverage")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": \u63d0\u51fa\u3059\u308b\u8b58\u5225\u5b50\u306e\u30ea\u30b9\u30c8\u3068\u56de\u7b54\u6587\u66f8\u306b\u542b\u307e\u308c\u308b\u8b58\u5225\u5b50\u306e\u30ea\u30b9\u30c8. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"label")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u9001\u4fe1\u30dc\u30bf\u30f3\u306e\u30e9\u30d9\u30eb. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"message")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u78ba\u8a8d\u30e1\u30fc\u30eb\u306e\u30e1\u30c3\u30bb\u30fc\u30b8. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requireLogin")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30dc\u30bf\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u8981\u6c42\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\uff08\u533f\u540d\u30e6\u30fc\u30b6\u30fc\u306e\u5834\u5408\u3001\u78ba\u8a8d\u306e\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u305b\u3093\uff09\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sendConfirmationEmail")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30ec\u30c3\u30b9\u30f3\u306e\u63d0\u51fa\u6642\u306b\u78ba\u8a8d\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3059\u308b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u30af\u30e9\u30b9\u540d. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u6295\u7a3f\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,r.kt)("h2",b({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Label",value:"customLabel"},{label:"Email Feedback",value:"emailFeedback"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LessonSubmit />\n"))),(0,r.kt)(l.Z,{value:"customLabel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<LessonSubmit label="Click to submit" />\n'))),(0,r.kt)(l.Z,{value:"withEmail",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LessonSubmit \n    style={{ outline: '4px solid black'}}\n    message={`\n    Hi,\n    I am very glad that you solved this lesson. Congratulations! \n    It was a sophisticated one.\n    If you want some help how to use ISLE, have a look a \n    [this site](https://isledocs.com/docs/)\n    \n    Best\n    The ISLE team\n    `}\n    label=\"Click to submit\" />\n"))),(0,r.kt)(l.Z,{value:"withCallback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LessonSubmit \n    requireLogin={false}\n    onClick={() => {\n        alert( 'The Button has been clicked...' );\n    }}\n    label=\"Click to submit\" />\n")))))}h.isMDXComponent=!0}}]);