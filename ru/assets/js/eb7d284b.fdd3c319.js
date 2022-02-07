"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9788],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(487462),a=n(202784),l=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,s=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),N=y.tabGroupChoices,h=y.setTabGroupChoices,x=(0,a.useState)(g),C=x[0],T=x[1],w=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&T(E)}var D=function(e){var t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==C&&(O(t),T(r),null!=m&&h(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function s(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},464639:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var r,a=n(487462),l=n(263366),i=(n(202784),n(603905)),o=n(409877),u=n(358215),p=["components"],s={id:"text-area",title:"Text Area",sidebar_label:"Text Area"},c=void 0,d={unversionedId:"input/text-area",id:"input/text-area",title:"Text Area",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 onChange.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/input/text-area.md",sourceDirName:"input",slug:"/input/text-area",permalink:"/ru/docs/input/text-area",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text-area.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"text-area",title:"Text Area",sidebar_label:"Text Area"},sidebar:"docs",previous:{title:"Slider Input",permalink:"/ru/docs/input/slider-input"},next:{title:"Text Input",permalink:"/ru/docs/input/text-input"}},m=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],f=(r="TextArea",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),v={toc:m};function b(e){var t,n=e.components,r=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},v,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"."),(0,i.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (\u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0434\u043e\u043b\u0436\u043d\u0430 \u043b\u0438 \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legend")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0442\u0435\u043a\u0441\u0442 \u043b\u0435\u0433\u0435\u043d\u0434\u044b. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u0442\u0435\u0440\u0435 \u0444\u043e\u043a\u0443\u0441\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u0441 \u043d\u043e\u0432\u044b\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u043c \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"resizable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0434\u043e\u043b\u0436\u043d\u0430 \u043b\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u043f\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0443 (\u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0437\u0443\u0431\u0447\u0430\u0442\u043e\u0439"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u043d\u0435\u0442"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'none'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rows")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u044f\u0434\u043e\u0432. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextArea\n    legend="Please enter a few sentences"\n    placeholder="Enter text"\n/>\n'))),(0,i.kt)(u.Z,{value:"customStyle",mdxType:"TabItem"},(0,i.kt)(f,{legend:"Please enter a few sentences",placeholder:"Enter text",style:(t={fontSize:33,fontFamily:"Georgia",boxShadow:"0 0 4px black",background:"rgb(238,174,202)"},t.background="radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)",t),mdxType:"TextArea"}))))}b.isMDXComponent=!0}}]);