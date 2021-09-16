"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8489],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){var r=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(202784),a=t(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(386010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,g=i(),b=g.tabGroupChoices,k=g.setTabGroupChoices,y=(0,r.useState)(v),h=y[0],N=y[1],C=[];if(null!=p){var w=b[p];null!=w&&w!==h&&f.some((function(e){return e.value===w}))&&N(w)}var T=function(e){var n=e.currentTarget,t=C.indexOf(n),r=f[t].value;N(r),null!=p&&(k(p,r),setTimeout((function(){var e,t,r,a,i,l,o,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,t>=0&&i<=s&&a<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:T,onClick:T},null!=t?t:n)}))),t?(0,r.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},79443:function(e,n,t){var r=(0,t(202784).createContext)(void 0);n.Z=r},872174:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=t(855064),o=t(358215),c=["components"],s={id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},u=void 0,p={unversionedId:"tables/contingency-table",id:"tables/contingency-table",isDocsHomePage:!1,title:"Contingency Table",description:"Preglednica nepredvidljivih dogodkov.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/tables/contingency-table.md",sourceDirName:"tables",slug:"/tables/contingency-table",permalink:"/sl/docs/tables/contingency-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/contingency-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},sidebar:"docs",previous:{title:"Simple Linear Regression",permalink:"/sl/docs/models/simple-linear-regression"},next:{title:"Frequency Table",permalink:"/sl/docs/tables/frequency-table"}},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Primeri",id:"primeri",children:[]}],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Preglednica nepredvidljivih dogodkov."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": predmet polja vrednosti. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rowVar")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": ime kategori\u010dne spremenljivke, ki se prika\u017ee v vrsticah. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"colVar")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),":  ime kategori\u010dne spremenljivke, ki se prika\u017ee v stolpcih. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"relativeFreqs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali se prika\u017eejo relativne frekvence.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": ime spremenljivke za razvr\u0161\u010danje v skupine. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"display")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(array<string>|string)"),": ali \u017eelite prikazati ",(0,i.kt)("inlineCode",{parentName:"li"},"Row Percent")," in/ali ",(0,i.kt)("inlineCode",{parentName:"li"},"Column Percent"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nDecimalPlaces")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u0161tevilo decimalnih mest za relativne frekvence, prikazane v tabeli. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,i.kt)("h2",{id:"primeri"},"Primeri"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequencies",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Display Row Percentages",value:"displayRowPercentage"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n/>\n'))),(0,i.kt)(o.Z,{value:"relativeFrequency",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n    relativeFreqs \n    nDecimalPlaces={2}\n/>\n'))),(0,i.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    group="Gender"\n/>\n'))),(0,i.kt)(o.Z,{value:"displayRowPercentage",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    display={[\'Row Percent\']}\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);