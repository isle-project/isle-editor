"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2038],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),l=n(972389),i=n(161419),o=n(386010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),y=N.tabGroupChoices,h=N.setTabGroupChoices,j=(0,r.useState)(b),C=j[0],x=j[1],T=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var D=y[d];null!=D&&D!==C&&f.some((function(e){return e.value===D}))&&x(D)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==C&&(O(t),x(a),null!=d&&h(d,a))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:w,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},241313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),s=["components"],u={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},p=void 0,c={unversionedId:"plots/scatterplot",id:"plots/scatterplot",title:"Scatter Plot",description:"Diagram razpr\u0161itve.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/plots/scatterplot.md",sourceDirName:"plots",slug:"/plots/scatterplot",permalink:"/sl/docs/plots/scatterplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633398906,formattedLastUpdatedAt:"4. 10. 2021",frontMatter:{id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},sidebar:"docs",previous:{title:"QQ Plot",permalink:"/sl/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/sl/docs/plots/scatterplot-matrix"}},m={},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Primeri",id:"primeri",level:2}],v={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Diagram razpr\u0161itve."),(0,l.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": predmet polja vrednosti za vsako spremenljivko. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"xval")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": spremenljivka za prikaz na osi x. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"yval")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": spremenljivka za prikaz na osi y. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": besedila, ki se prika\u017eejo ob vsaki to\u010dki.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": kategori\u010dna spremenljivka za preslikavo na barvo to\u010dk. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": kategori\u010dna spremenljivka za preslikavo na prikazane simbole.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"size")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": kvantitativna spremenljivka za preslikavo na velikost to\u010dk. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"regressionLine")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": dolo\u010da, ali naj se prekrijejo regresijske \u010drte.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<string>"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"linear")," in/ali ",(0,l.kt)("inlineCode",{parentName:"li"},"smooth")," za prikaz linearne regresije in zglajene regresijske linije LOWESS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lineBy")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": prikaz lo\u010dene regresijske \u010drte za vsako kategorijo dolo\u010dene kategori\u010dne spremenljivke. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": parameter razpona glajenja za ",(0,l.kt)("inlineCode",{parentName:"li"},"gladko\xb4 regresijsko linijo. Default: "),"0.66`."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"jitterX")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzira, ali naj se to\u010dke na osi x tresejo.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"jitterY")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzira, ali naj se to\u010dke na osi y tresejo.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h2",{id:"primeri"},"Primeri"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Colored",value:"colored"},{label:"Type",value:"type"},{label:"Regression Line",value:"regressionLine"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n'))),(0,l.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"colored",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n    color="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"type",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    color="Gender"\n    type="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"regressionLine",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    regressionLine\n    regressionMethod={[\'smooth\']}\n/>\n')))))}k.isMDXComponent=!0}}]);