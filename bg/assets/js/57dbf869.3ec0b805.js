"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92554],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),l=n(386010),a="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(a,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(202784),l=n(386010),a=n(152670),i=n(258433),o=n(952326),u=n(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};function k(e){var t,n;const{lazy:a,block:p,defaultValue:f,values:b,groupId:g,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,o.U)(),[T,j]=(0,r.useState)(O),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=g){const e=x[g];null!=e&&e!==T&&N.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),r=N[n].value;r!==T&&(P(t),j(r),null!=g&&w(g,String(r)))},S=e=>{var t,n;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;r=null!=(t=C[n])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=null!=(n=C[t])?n:C[C.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},N.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=y({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>C.push(e),onKeyDown:S,onClick:E},n),i={className:(0,l.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":T===e})},m(a,d(i))),null!=t?t:e);var a,i}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function N(e){const t=(0,a.Z)();return r.createElement(k,y({key:String(t)},e))}},297358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var r=n(603905),l=n(751361),a=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},b=void 0,g={unversionedId:"scrolling-text",id:"scrolling-text",title:"Scrolling Text",description:"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u043d \u0444\u043e\u043d\u043e\u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u043e\u0439\u0442\u043e \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430 \u043f\u0440\u0435\u0437 \u0441\u043f\u0438\u0441\u044a\u043a \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0435 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043e\u0442 \u0432\u0440\u0435\u043c\u0435.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/scrolling-text.md",sourceDirName:".",slug:"/scrolling-text",permalink:"/bg/docs/scrolling-text",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/scrolling-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.06.2021 \u0433.",frontMatter:{id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},sidebar:"docs",previous:{title:"Polaroid",permalink:"/bg/docs/polaroid"},next:{title:"Slider",permalink:"/bg/docs/slider"}},v={},y=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],k={toc:y};function N(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},k),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u043d \u0444\u043e\u043d\u043e\u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u043e\u0439\u0442\u043e \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430 \u043f\u0440\u0435\u0437 \u0441\u043f\u0438\u0441\u044a\u043a \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0435 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043e\u0442 \u0432\u0440\u0435\u043c\u0435."),(0,r.kt)("h2",d({},{id:"\u043e\u043f\u0446\u0438\u0438"}),"\u041e\u043f\u0446\u0438\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": \u0442\u0435\u043a\u0441\u0442 \u0438\u043b\u0438 \u0441\u043f\u0438\u0441\u044a\u043a \u043e\u0442 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0435, \u043a\u043e\u0438\u0442\u043e \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u0442. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"loop")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043a\u0430\u0437\u0432\u0430 \u0434\u0430\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u044a\u0442 \u0449\u0435 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0431\u0435\u0437\u043a\u0440\u0430\u0439\u043d\u043e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u043f\u043e\u0441\u043e\u043a\u0430\u0442\u0430 \u043d\u0430 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 (",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u043d\u0430\u0433\u043e\u0440\u0435"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u043d\u0430\u0434\u043e\u043b\u0443"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u043f\u0440\u043e\u0441\u043b\u0435\u0434\u044f\u0432\u0430\u043d\u0435"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0444\u043e\u043a\u0443\u0441")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0432\u044a\u043b\u043d\u0435\u043d\u0438\u0435"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hold")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u0435\u0442\u043e, \u0437\u0430 \u043a\u043e\u0435\u0442\u043e \u0442\u0435\u043a\u0441\u0442\u044a\u0442 \u043e\u0441\u0442\u0430\u0432\u0430 \u043d\u0435\u043f\u043e\u0434\u0432\u0438\u0436\u0435\u043d (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0438). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wait")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u0435\u0442\u043e \u043f\u0440\u0435\u0434\u0438 \u043f\u0440\u0438\u0441\u0442\u0438\u0433\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u043d\u043e\u0432 \u0442\u0435\u043a\u0441\u0442 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0438). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u0435 \u043d\u0430 \u0432\u0445\u043e\u0434\u043d\u0438\u044f \u0435\u0444\u0435\u043a\u0442 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0438). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"outTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u0435 \u043d\u0430 \u0435\u0444\u0435\u043a\u0442\u0430 \u043d\u0430 \u0438\u0437\u043b\u0438\u0437\u0430\u043d\u0435 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0438). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0441\u0442\u0438\u043b\u043e\u0432\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"List of Texts",value:"list"},{label:"Background Image",value:"backgroundImage"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text=\"This is a text re-appearing every five seconds\"\n    style={{ fontSize: 44, color: 'blue' }}\n    wait={5}\n    hold={2}\n    loop\n/>\n"))),(0,r.kt)(a.Z,{value:"list",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n"))),(0,r.kt)(a.Z,{value:"backgroundImage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n")))))}N.isMDXComponent=!0}}]);