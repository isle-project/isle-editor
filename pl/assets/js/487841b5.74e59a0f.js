"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4096],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),l=n(972389),o=n(161419),i=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),h=g.tabGroupChoices,N=g.setTabGroupChoices,x=(0,r.useState)(k),w=x[0],j=x[1],O=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=h[m];null!=T&&T!==w&&b.some((function(e){return e.value===T}))&&j(T)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==w&&(P(t),j(a),null!=m&&N(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},258201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),o=n(409877),i=n(358215),u=["components"],s={id:"boxplot",title:"Box Plot",sidebar_label:"Box Plot"},p=void 0,c={unversionedId:"plots/boxplot",id:"plots/boxplot",title:"Box Plot",description:"Fabu\u0142a pude\u0142kowa.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/plots/boxplot.md",sourceDirName:"plots",slug:"/plots/boxplot",permalink:"/pl/docs/plots/boxplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/boxplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614546476,formattedLastUpdatedAt:"28.02.2021",frontMatter:{id:"boxplot",title:"Box Plot",sidebar_label:"Box Plot"},sidebar:"docs",previous:{title:"Bar Chart",permalink:"/pl/docs/plots/barchart"},next:{title:"Contour Chart",permalink:"/pl/docs/plots/contourchart"}},d={},m=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],v={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Fabu\u0142a pude\u0142kowa."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(array|string) (required)"),": zmienna do wy\u015bwietlania. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(array|string|Factor)"),": jedna lub dwie zmienne grupowania. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"orientation")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"w orientacji pionowej")," lub ",(0,l.kt)("inlineCode",{parentName:"li"},"poziomej"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje czy nak\u0142ada\u0107 punkty. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Multiple Variables",value:"multipleVariables"},{label:"Horizontal",value:"horizontal"},{label:"Overlay Points",value:"overlayPoints"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BoxPlot \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,l.kt)(i.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BoxPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Complications"\n/>\n'))),(0,l.kt)(i.Z,{value:"multipleVariables",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<BoxPlot \n    data={heartdisease} \n    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}\n/>\n"))),(0,l.kt)(i.Z,{value:"horizontal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<BoxPlot \n    data={heartdisease} \n    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}\n    orientation=\"horizontal\"\n/>\n"))),(0,l.kt)(i.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<BoxPlot \n    data={heartdisease} \n    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}\n    orientation=\"horizontal\"\n    overlayPoints\n/>\n")))))}f.isMDXComponent=!0}}]);