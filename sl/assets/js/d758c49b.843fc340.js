"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9093],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,p=e.values,c=e.groupId,d=e.className,m=a.Children.toArray(e.children),k=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),b=v.tabGroupChoices,g=v.setTabGroupChoices,N=(0,a.useState)(f),h=N[0],y=N[1],C=[];if(null!=c){var j=b[c];null!=j&&j!==h&&k.some((function(e){return e.value===j}))&&y(j)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=k[n].value;y(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,r,i,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},755706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],u={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},p=void 0,c={unversionedId:"plots/barchart",id:"plots/barchart",isDocsHomePage:!1,title:"Bar Chart",description:"Stolp\u010dni diagram.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/plots/barchart.md",sourceDirName:"plots",slug:"/plots/barchart",permalink:"/sl/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},sidebar:"docs",previous:{title:"Plotly",permalink:"/sl/docs/plotly"},next:{title:"Box Plot",permalink:"/sl/docs/plots/boxplot"}},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Primeri",id:"primeri",children:[]}],m={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Stolp\u010dni diagram."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": predmet polja vrednosti. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": spremenljivka za prikaz. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": spremenljivka za razvr\u0161\u010danje v skupine. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"yvar")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": neobvezna spremenljivka, ki se uporablja za vi\u0161ino stolpcev (v povezavi z ",(0,i.kt)("inlineCode",{parentName:"li"},"summary"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"summary")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": ime statistike, ki se izra\u010duna za ",(0,i.kt)("inlineCode",{parentName:"li"},"yvar")," in se prika\u017ee kot vi\u0161ina stolpca za vsako kategorijo (bodisi ",(0,i.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"horizontal")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ali naj se vrstice prika\u017eejo vodoravno. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stackBars")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": pri zdru\u017eevanju v skupine dolo\u010da, ali naj se palice zlo\u017eijo druga na drugo.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"relative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ali izra\u010dunati relativne frekvence znotraj vsake skupine.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"totalPercent")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ali naj se skupni stolpci prika\u017eejo kot relativne frekvence.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"xOrder")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": bodisi ",(0,i.kt)("inlineCode",{parentName:"li"},"skupaj"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kategorija"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"srednja")," ali ",(0,i.kt)("inlineCode",{parentName:"li"},"mediana"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"direction")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": kako urediti palice ob osi x (",(0,i.kt)("inlineCode",{parentName:"li"},"ascending")," ali ",(0,i.kt)("inlineCode",{parentName:"li"},"descending"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'ascending'"),".")),(0,i.kt)("h2",{id:"primeri"},"Primeri"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,i.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,i.kt)(o.Z,{value:"descending",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),(0,i.kt)(o.Z,{value:"relativeStackedBars",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}k.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);