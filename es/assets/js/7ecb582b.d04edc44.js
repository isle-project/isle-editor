"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8891],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),o=n(161419),i=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,a.useState)(h),O=w[0],j=w[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&j(E)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(T(t),j(r),null!=m&&N(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},793896:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),o=n(409877),i=n(358215),u=["components"],s={id:"violinplot",title:"Violin Plot",sidebar_label:"Violin Plot"},c=void 0,p={unversionedId:"plots/violinplot",id:"plots/violinplot",title:"Violin Plot",description:"Una trama de viol\xedn.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/plots/violinplot.md",sourceDirName:"plots",slug:"/plots/violinplot",permalink:"/es/docs/plots/violinplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/violinplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614546476,formattedLastUpdatedAt:"28/2/2021",frontMatter:{id:"violinplot",title:"Violin Plot",sidebar_label:"Violin Plot"},sidebar:"docs",previous:{title:"Sunburst Plot",permalink:"/es/docs/plots/sunburst"},next:{title:"Word Cloud",permalink:"/es/docs/word-cloud"}},d={},m=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],v={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Una trama de viol\xedn."),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": variable a mostrar. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": variable de agrupaci\xf3n. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showBox")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestra un gr\xe1fico de caja en el interior. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Show Boxplot",value:"showBox"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n/>\n'))),(0,l.kt)(i.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Drugs"\n/>\n'))),(0,l.kt)(i.Z,{value:"showBox",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    showBox\n/>\n')))))}f.isMDXComponent=!0}}]);