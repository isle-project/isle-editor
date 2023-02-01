"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26052],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&k(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:C}=(0,i.U)(),[P,w]=(0,r.useState)(O),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==P&&N.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),r=N[n].value;r!==P&&(T(t),w(r),null!=v&&C(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;r=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=null!=(n=x[t])?n:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},k)},N.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>x.push(e),onKeyDown:D,onClick:E},n),o={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function N(e){const t=(0,l.Z)();return r.createElement(y,g({key:String(t)},e))}},596629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},b=void 0,v={unversionedId:"plots/scatterplot",id:"plots/scatterplot",title:"Scatter Plot",description:"\u914d\u5217\u306e\u6700\u5c0f\u5024\u3068\u6700\u5927\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/plots/scatterplot.md",sourceDirName:"plots",slug:"/plots/scatterplot",permalink:"/ja/docs/plots/scatterplot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633398906,formattedLastUpdatedAt:"2021\u5e7410\u67085\u65e5",frontMatter:{id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},sidebar:"docs",previous:{title:"QQ Plot",permalink:"/ja/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/ja/docs/plots/scatterplot-matrix"}},k={},g=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],y={toc:g};function N(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u914d\u5217\u306e\u6700\u5c0f\u5024\u3068\u6700\u5927\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u5404\u5909\u6570\u306e\u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"xval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": X\u8ef8\u306b\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u5909\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": y\u8ef8\u306b\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u5909\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u5404\u30dd\u30a4\u30f3\u30c8\u306e\u6a2a\u306b\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u70b9\u306e\u8272\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u7bc4\u7587\u5909\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u8868\u793a\u3055\u308c\u305f\u30b7\u30f3\u30dc\u30eb\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u30ab\u30c6\u30b4\u30ea\u5909\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"size")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u70b9\u306e\u5927\u304d\u3055\u306b\u5bfe\u5fdc\u3059\u308b\u91cf\u7684\u5909\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"regressionLine")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u56de\u5e30\u76f4\u7dda\u3092\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3059\u308b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": \u7dda\u5f62\u56de\u5e30\u3068\u5e73\u6ed1\u5316\u3055\u308c\u305fLOWESS\u56de\u5e30\u7dda\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"linear")," \u304a\u3088\u3073/\u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"smooth"),"\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lineBy")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u6307\u5b9a\u3055\u308c\u305f\u30ab\u30c6\u30b4\u30ea\u5909\u6570\u306e\u30ab\u30c6\u30b4\u30ea\u3054\u3068\u306b\u500b\u5225\u306e\u56de\u5e30\u7dda\u3092\u8868\u793a\u3059\u308b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u30b9\u30e0\u30fc\u30ba\u56de\u5e30\u7dda\u306e\u5e73\u6ed1\u5316\u30b9\u30d1\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jitterX")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": X\u8ef8\u4e0a\u306e\u70b9\u3092\u30b8\u30c3\u30bf\u30fc\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3059\u308b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jitterY")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": Y\u8ef8\u4e0a\u306e\u70b9\u3092\u30b8\u30c3\u30bf\u30fc\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3059\u308b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",d({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Colored",value:"colored"},{label:"Type",value:"type"},{label:"Regression Line",value:"regressionLine"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n'))),(0,r.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"colored",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n    color="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"type",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    color="Gender"\n    type="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"regressionLine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    regressionLine\n    regressionMethod={[\'smooth\']}\n/>\n')))))}N.isMDXComponent=!0}}]);