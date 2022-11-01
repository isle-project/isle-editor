"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38486],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),l=a(152670),i=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&g(e,a,t[a]);if(f)for(var a of f(t))v.call(t,a)&&g(e,a,t[a]);return e};function y(e){var t,a;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:g}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(a=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:C}=(0,o.U)(),[j,P]=(0,n.useState)(O),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=x[v];null!=e&&e!==j&&N.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,a=w.indexOf(t),n=N[a].value;n!==j&&(T(t),P(n),null!=v&&C(v,String(n)))},D=e=>{var t,a;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;n=null!=(t=w[a])?t:w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=null!=(a=w[t])?a:w[w.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=k({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>w.push(e),onKeyDown:D,onClick:E},a),i={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":j===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,l.Z)();return n.createElement(y,k({key:String(t)},e))}},849861:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var n=a(603905),r=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&d(e,a,t[a]);return e};const f={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},b=void 0,v={unversionedId:"plots/scatterplot",id:"plots/scatterplot",title:"Scatter Plot",description:"Un grafic de dispersie.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/plots/scatterplot.md",sourceDirName:"plots",slug:"/plots/scatterplot",permalink:"/ro/docs/plots/scatterplot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633398906,formattedLastUpdatedAt:"5 oct. 2021",frontMatter:{id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},sidebar:"docs",previous:{title:"QQ Plot",permalink:"/ro/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/ro/docs/plots/scatterplot-matrix"}},g={},k=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],y={toc:k};function N(e){var t,a=e,{components:i}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),d),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un grafic de dispersie."),(0,n.kt)("h2",m({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": obiect de matrice de valori pentru fiecare variabil\u0103. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"xval")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variabila de afi\u0219at pe axa x. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"yval")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variabila de afi\u0219at pe axa y. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"text")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": textele care urmeaz\u0103 s\u0103 fie afi\u0219ate l\xe2ng\u0103 fiecare punct. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"color")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": variabil\u0103 categorial\u0103 care se asociaz\u0103 cu culoarea punctelor. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": variabila categoric\u0103 pentru coresponden\u021ba cu simbolurile afi\u0219ate. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"size")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": variabil\u0103 cantitativ\u0103 care s\u0103 corespund\u0103 m\u0103rimii punctelor. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"regressionLine")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se suprapune sau nu linia (liniile) de regresie. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"linear")," \u0219i/sau ",(0,n.kt)("inlineCode",{parentName:"li"},"smooth")," pentru a afi\u0219a regresia liniar\u0103 \u0219i linia de regresie LOWESS netezit\u0103.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lineBy")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": afi\u0219area unei linii de regresie separate pentru fiecare categorie a variabilei categorice specificate. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": parametru de netezire pentru linia de regresie ",(0,n.kt)("inlineCode",{parentName:"li"},"lin\u0103"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"jitterX")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 punctele de pe axa x trebuie s\u0103 se modifice sau nu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"jitterY")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 punctele de pe axa y trebuie sau nu s\u0103 fie afectate.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",m({},{id:"exemple"}),"Exemple"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Colored",value:"colored"},{label:"Type",value:"type"},{label:"Regression Line",value:"regressionLine"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n'))),(0,n.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Gender"\n/>\n'))),(0,n.kt)(l.Z,{value:"colored",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n    color="Gender"\n/>\n'))),(0,n.kt)(l.Z,{value:"type",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    color="Gender"\n    type="Gender"\n/>\n'))),(0,n.kt)(l.Z,{value:"regressionLine",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    regressionLine\n    regressionMethod={[\'smooth\']}\n/>\n')))))}N.isMDXComponent=!0}}]);