"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2500],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=a.Children.toArray(e.children),v=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=l(),g=k.tabGroupChoices,b=k.setTabGroupChoices,N=(0,a.useState)(f),y=N[0],h=N[1],j=[];if(null!=p){var C=g[p];null!=C&&C!==y&&v.some((function(e){return e.value===C}))&&h(C)}var x=function(e){var t=e.currentTarget,n=j.indexOf(t),a=v[n].value;h(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,r,l,i,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},76049:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],s={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},c=void 0,p={unversionedId:"plots/scatterplot",id:"plots/scatterplot",isDocsHomePage:!1,title:"Scatter Plot",description:"Hajutuste graafik.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/plots/scatterplot.md",sourceDirName:"plots",slug:"/plots/scatterplot",permalink:"/et/docs/plots/scatterplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},sidebar:"docs",previous:{title:"QQ Plot",permalink:"/et/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/et/docs/plots/scatterplot-matrix"}},m=[{value:"Valikud",id:"valikud",children:[]},{value:"N\xe4ited",id:"n\xe4ited",children:[]}],d={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Hajutuste graafik."),(0,l.kt)("h2",{id:"valikud"},"Valikud"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": iga muutuja v\xe4\xe4rtuste massiivi objekt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"xval")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": x-teljel kuvatav muutuja. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"yval")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": y-teljel kuvatav muutuja. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": iga punkti k\xf5rval kuvatavad tekstid. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": kategooriline muutuja, mis vastab punktide v\xe4rvusele. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": kategooriline muutuja, mis vastab kuvatavatele s\xfcmbolitele. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"size")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": kvantitatiivne muutuja, mis vastab punktide suurusele. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"regressionLine")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas regressioonijoone(te) \xfcle kanda.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<string>"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"linear")," ja/v\xf5i ",(0,l.kt)("inlineCode",{parentName:"li"},"smooth")," lineaarse regressiooni ja silutud LOWESS regressioonijoone kuvamiseks. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lineBy")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": kuvada eraldi regressioonijooned iga m\xe4\xe4ratud kategoorilise muutuja kategooria kohta. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),': silumisvahemiku parameeter "sileda" regressioonijoone jaoks. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"0.66"),".")),(0,l.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Colored",value:"colored"},{label:"Type",value:"type"},{label:"Regression Line",value:"regressionLine"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n'))),(0,l.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"colored",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n    color="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"type",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    color="Gender"\n    type="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"regressionLine",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    regressionLine\n    regressionMethod={[\'smooth\']}\n/>\n')))))}v.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);