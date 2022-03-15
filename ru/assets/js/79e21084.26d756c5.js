"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1206],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,m=e.defaultValue,d=e.values,c=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,h=b.setTabGroupChoices,C=(0,r.useState)(N),D=C[0],T=C[1],O=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var x=y[c];null!=x&&x!==D&&v.some((function(e){return e.value===x}))&&T(x)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==D&&(w(t),T(a),null!=c&&h(c,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},608424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return d},toc:function(){return c},default:function(){return k}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},p=void 0,m={unversionedId:"plots/histogram",id:"plots/histogram",title:"Histogram",description:"\u0413\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/plots/histogram.md",sourceDirName:"plots",slug:"/plots/histogram",permalink:"/ru/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633398906,formattedLastUpdatedAt:"04.10.2021",frontMatter:{id:"histogram",title:"Histogram",sidebar_label:"Histogram"},sidebar:"docs",previous:{title:"Heat Map",permalink:"/ru/docs/plots/heatmap"},next:{title:"Interval Plot",permalink:"/ru/docs/plots/interval-plot"}},d={},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],f={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0413\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430."),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430 (",(0,l.kt)("inlineCode",{parentName:"li"},"\u041e\u0432\u0435\u0440\u043b\u0435\u0439"),") \u0438\u043b\u0438 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0440\u044f\u0434\u043e\u043c \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c (",(0,l.kt)("inlineCode",{parentName:"li"},"\u0424\u0435\u0439\u0441\u044b"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'Overlay'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"displayDensity")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u043e\u0432 \u043f\u043e \u043e\u0441\u0438 Y. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"densityType")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043f\u0440\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u043b\u0438\u0431\u043e \u043d\u0430\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 (",(0,l.kt)("inlineCode",{parentName:"li"},"\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u044d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435"),"), \u043b\u0438\u0431\u043e \u043d\u0435\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u044f\u0434\u0435\u0440\u043d\u0443\u044e \u043e\u0446\u0435\u043d\u043a\u0443 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 (",(0,l.kt)("inlineCode",{parentName:"li"},"\u0434\u0430\u043d\u043d\u044b\u0435-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"densityParams")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<number>"),": \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438, \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 (","[mu, sigma]"," \u0434\u043b\u044f \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, ","[a, b]"," \u0434\u043b\u044f \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, ","[lambda]"," \u0434\u043b\u044f \u044d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bandwidthAdjust")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u0440\u0443\u0447\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u044f\u0434\u0440\u0430 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 (\u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"densityType")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"binStrategy")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0431\u0438\u043d\u0438\u043d\u0433\u0430 (",(0,l.kt)("inlineCode",{parentName:"li"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0431\u043e\u0440")," \u043c\u0443\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",(0,l.kt)("inlineCode",{parentName:"li"},", \u0438\u043b\u0438 "),"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0448\u0438\u0440\u0438\u043d\u044b \u043c\u0443\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",(0,l.kt)("inlineCode",{parentName:"li"},"). Default: "),"'Automatic'`."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nBins")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0443\u043d\u043a\u0435\u0440\u043e\u0432. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nCols")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043f\u0440\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0444\u0430\u0441\u0435\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"xBins")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"{start,size,end}"),": \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0441\u0442\u0430\u0440\u0442"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0440\u0430\u0437\u043c\u0435\u0440")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u043d\u0435\u0446"),", \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0431\u0438\u043d\u043d\u0438\u043d\u0433\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sameXRange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0435\u0441\u043b\u0438 true, \u0442\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e \u043e\u0441\u0438 x \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0430\u043d\u0438 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0438\u043c \u0436\u0435, \u043a\u0430\u043a \u0438 \u043e\u0431\u0449\u0430\u044f \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sameYRange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0435\u0441\u043b\u0438 true, \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e \u043e\u0441\u0438 y \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0430\u043d\u0438 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0438\u043c \u0436\u0435, \u043a\u0430\u043a \u0438 \u043e\u0431\u0449\u0430\u044f \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,l.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"groupModeFactes",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),(0,l.kt)(o.Z,{value:"displayDensity",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),(0,l.kt)(o.Z,{value:"noBins",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}k.isMDXComponent=!0}}]);