"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1206],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,c=a.Children.toArray(e.children),f=null!=p?p:c.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,k=i(),v=k.tabGroupChoices,N=k.setTabGroupChoices,b=(0,a.useState)(g),y=b[0],C=b[1],h=[];if(null!=m){var D=v[m];null!=D&&D!==y&&f.some((function(e){return e.value===D}))&&C(D)}var O=function(e){var t=e.currentTarget,n=h.indexOf(t),a=f[n].value;C(a),null!=m&&(N(m,a),setTimeout((function(){var e,n,a,r,i,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=h.indexOf(e.target)+1;n=h[a]||h[0];break;case"ArrowLeft":var r=h.indexOf(e.target)-1;n=h[r]||h[h.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(c.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},608424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],u={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},p=void 0,m={unversionedId:"plots/histogram",id:"plots/histogram",isDocsHomePage:!1,title:"Histogram",description:"\u0413\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/plots/histogram.md",sourceDirName:"plots",slug:"/plots/histogram",permalink:"/ru/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1628108874,formattedLastUpdatedAt:"04.08.2021",frontMatter:{id:"histogram",title:"Histogram",sidebar_label:"Histogram"},sidebar:"docs",previous:{title:"Heat Map",permalink:"/ru/docs/plots/heatmap"},next:{title:"Interval Plot",permalink:"/ru/docs/plots/interval-plot"}},d=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],c={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0413\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430."),(0,i.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430 (",(0,i.kt)("inlineCode",{parentName:"li"},"\u041e\u0432\u0435\u0440\u043b\u0435\u0439"),") \u0438\u043b\u0438 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0440\u044f\u0434\u043e\u043c \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c (",(0,i.kt)("inlineCode",{parentName:"li"},"\u0424\u0435\u0439\u0441\u044b"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Overlay'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayDensity")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u043e\u0432 \u043f\u043e \u043e\u0441\u0438 Y. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"densityType")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u043f\u0440\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u043b\u0438\u0431\u043e \u043d\u0430\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 (",(0,i.kt)("inlineCode",{parentName:"li"},"\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u044d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435"),"), \u043b\u0438\u0431\u043e \u043d\u0435\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u044f\u0434\u0435\u0440\u043d\u0443\u044e \u043e\u0446\u0435\u043d\u043a\u0443 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 (",(0,i.kt)("inlineCode",{parentName:"li"},"\u0434\u0430\u043d\u043d\u044b\u0435-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bandwidthAdjust")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u0440\u0443\u0447\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u044f\u0434\u0440\u0430 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 (\u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"densityType")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"binStrategy")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0431\u0438\u043d\u0438\u043d\u0433\u0430 (",(0,i.kt)("inlineCode",{parentName:"li"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0431\u043e\u0440")," \u043c\u0443\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",(0,i.kt)("inlineCode",{parentName:"li"},", \u0438\u043b\u0438 "),"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0448\u0438\u0440\u0438\u043d\u044b \u043c\u0443\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",(0,i.kt)("inlineCode",{parentName:"li"},"). Default: "),"'Automatic'`."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nBins")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0443\u043d\u043a\u0435\u0440\u043e\u0432. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nCols")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043f\u0440\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0444\u0430\u0441\u0435\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"xBins")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"{start,size,end}"),": \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0441\u0442\u0430\u0440\u0442"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0440\u0430\u0437\u043c\u0435\u0440")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u043d\u0435\u0446"),", \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0431\u0438\u043d\u043d\u0438\u043d\u0433\u0430. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sameXRange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0435\u0441\u043b\u0438 true, \u0442\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e \u043e\u0441\u0438 x \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0430\u043d\u0438 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0438\u043c \u0436\u0435, \u043a\u0430\u043a \u0438 \u043e\u0431\u0449\u0430\u044f \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sameYRange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0435\u0441\u043b\u0438 true, \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e \u043e\u0441\u0438 y \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0430\u043d\u0438 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0438\u043c \u0436\u0435, \u043a\u0430\u043a \u0438 \u043e\u0431\u0449\u0430\u044f \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,i.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),(0,i.kt)(o.Z,{value:"groupModeFactes",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),(0,i.kt)(o.Z,{value:"displayDensity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),(0,i.kt)(o.Z,{value:"noBins",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);