"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[752],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),h=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,r.useState)(b),O=C[0],w=C[1],T=[],D=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=h[d];null!=j&&j!==O&&v.some((function(e){return e.value===j}))&&w(j)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==O&&(D(t),w(a),null!=d&&N(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},994911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},p=void 0,c={unversionedId:"r/r-plot",id:"r/r-plot",title:"R Plot",description:"Komponens egy R-diagram megjelen\xedt\xe9s\xe9hez egy ISLE-leck\xe9n bel\xfcl.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/r/plot.md",sourceDirName:"r",slug:"/r/r-plot",permalink:"/hu/docs/r/r-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},sidebar:"docs",previous:{title:"R Output",permalink:"/hu/docs/r/r-output"},next:{title:"R Shell",permalink:"/hu/docs/r/r-shell"}},m={},d=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],f={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Komponens egy R-diagram megjelen\xedt\xe9s\xe9hez egy ISLE-leck\xe9n bel\xfcl."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": R k\xf3d a grafikon l\xe9trehoz\xe1s\xe1hoz. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string)"),": a plot sz\xe9less\xe9ge (px-ben). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string)"),": a plot magass\xe1ga (px-ben). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'auto'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"draggable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a plot h\xfazhat\xf3 legyen-e. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fileType")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a plot f\xe1jlt\xedpusa (",(0,l.kt)("inlineCode",{parentName:"li"},"png")," vagy ",(0,l.kt)("inlineCode",{parentName:"li"},"svg"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'svg'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),': R k\xf6nyvt\xe1rak, amelyeket automatikusan be kell t\xf6lteni, amikor a bemeneti "k\xf3d" v\xe9grehajt\xe1sra ker\xfcl.. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|array)"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," vagy egy ",(0,l.kt)("inlineCode",{parentName:"li"},"array")," R k\xf3dr\xe9szletekb\u0151l, amelyeket a ",(0,l.kt)("inlineCode",{parentName:"li"},"code"),"-ban t\xe1rolt k\xf3dhoz kell csatolni a ki\xe9rt\xe9kel\xe9skor.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"meta")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": metainform\xe1ci\xf3k. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": oszt\xe1ly neve. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onDone")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback, amelyet az ",(0,l.kt)("inlineCode",{parentName:"li"},"err"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"img")," \xe9s ",(0,l.kt)("inlineCode",{parentName:"li"},"body")," argumentumokkal h\xedvnak meg, ha a plot l\xe9trej\xf6n.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onDone() {}"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Draggable",value:"draggable"},{label:"Custom Dimensions",value:"customDimensions"},{label:"Using Libraries",value:"usingLibraries"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" />\n'))),(0,l.kt)(o.Z,{value:"draggable",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />\n'))),(0,l.kt)(o.Z,{value:"customDimensions",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />\n'))),(0,l.kt)(o.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RPlot \n    libraries={[ 'ggplot2' ]}\n    code=\"qplot(mpg, wt, data = mtcars)\" \n/>\n")))))}k.isMDXComponent=!0}}]);