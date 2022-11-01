"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54832],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&g(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:j}=(0,i.U)(),[P,w]=(0,r.useState)(O),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=C[v];null!=e&&e!==P&&N.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),r=N[n].value;r!==P&&(T(t),w(r),null!=v&&j(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;r=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=null!=(n=x[t])?n:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},g)},N.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=k({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>x.push(e),onKeyDown:D,onClick:E},n),o={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function N(e){const t=(0,l.Z)();return r.createElement(y,k({key:String(t)},e))}},699784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},b=void 0,v={unversionedId:"plots/scatterplot",id:"plots/scatterplot",title:"Scatter Plot",description:"\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u0430 \u043d\u0430 \u0440\u0430\u0437\u043f\u0440\u044a\u0441\u043a\u0432\u0430\u043d\u0435.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/plots/scatterplot.md",sourceDirName:"plots",slug:"/plots/scatterplot",permalink:"/bg/docs/plots/scatterplot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633398906,formattedLastUpdatedAt:"5.10.2021 \u0433.",frontMatter:{id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},sidebar:"docs",previous:{title:"QQ Plot",permalink:"/bg/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/bg/docs/plots/scatterplot-matrix"}},g={},k=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],y={toc:k};function N(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u0430 \u043d\u0430 \u0440\u0430\u0437\u043f\u0440\u044a\u0441\u043a\u0432\u0430\u043d\u0435."),(0,r.kt)("h2",d({},{id:"\u043e\u043f\u0446\u0438\u0438"}),"\u041e\u043f\u0446\u0438\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043e\u0431\u0435\u043a\u0442 \u043e\u0442 \u043c\u0430\u0441\u0438\u0432\u0438 \u0441\u044a\u0441 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"xval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u043f\u043e \u043e\u0441\u0442\u0430 x. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u043f\u043e \u043e\u0441\u0442\u0430 y. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0435, \u043a\u043e\u0438\u0442\u043e \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u0442 \u0434\u043e \u0432\u0441\u044f\u043a\u0430 \u0442\u043e\u0447\u043a\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u0437\u0430 \u0441\u044a\u043f\u043e\u0441\u0442\u0430\u0432\u044f\u043d\u0435 \u0441 \u0446\u0432\u0435\u0442\u0430 \u043d\u0430 \u0442\u043e\u0447\u043a\u0438\u0442\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0441\u0435 \u0441\u044a\u043f\u043e\u0441\u0442\u0430\u0432\u0438 \u0441 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"size")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u0437\u0430 \u0441\u044a\u043f\u043e\u0441\u0442\u0430\u0432\u044f\u043d\u0435 \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043d\u0430 \u0442\u043e\u0447\u043a\u0438\u0442\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"regressionLine")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043d\u0430\u0441\u043b\u0430\u0433\u0432\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u043e\u043d\u043d\u0430 \u043b\u0438\u043d\u0438\u044f(\u0438). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"linear")," \u0438/\u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"smooth")," \u0437\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 \u043b\u0438\u043d\u0435\u0439\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u044f \u0438 \u0438\u0437\u0433\u043b\u0430\u0434\u0435\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u043e\u043d\u043d\u0430 \u043b\u0438\u043d\u0438\u044f LOWESS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lineBy")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u043e\u043d\u043d\u0430 \u043b\u0438\u043d\u0438\u044f \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u044a\u0440 \u0437\u0430 \u0438\u0437\u0433\u043b\u0430\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 \u0437\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u043e\u043d\u043d\u0430\u0442\u0430 \u043b\u0438\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"smooth"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jitterX")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u0440\u0430\u0437\u043a\u043b\u0430\u0449\u0430\u0442 \u0442\u043e\u0447\u043a\u0438\u0442\u0435 \u043f\u043e \u043e\u0441\u0442\u0430 x. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jitterY")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u0440\u0430\u0437\u043a\u043b\u0430\u0449\u0430\u0442 \u0442\u043e\u0447\u043a\u0438\u0442\u0435 \u043f\u043e \u043e\u0441\u0442\u0430 y. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Colored",value:"colored"},{label:"Type",value:"type"},{label:"Regression Line",value:"regressionLine"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n'))),(0,r.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"colored",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n    color="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"type",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    color="Gender"\n    type="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"regressionLine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    regressionLine\n    regressionMethod={[\'smooth\']}\n/>\n')))))}N.isMDXComponent=!0}}]);