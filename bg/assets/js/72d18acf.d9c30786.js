"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1373],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),r=n(202784),i=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,P=(0,r.useState)(h),C=P[0],T=P[1],w=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==C&&g.some((function(e){return e.value===E}))&&T(E)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==C&&(O(t),T(a),null!=m&&N(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},296977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return v}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"pages",title:"Pages",sidebar_label:"Pages"},c=void 0,p={unversionedId:"pages",id:"pages",title:"Pages",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 ISLE, \u043a\u043e\u0439\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u0434\u0430 \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430 \u043f\u0440\u0435\u0437 \u043f\u043e\u0440\u0435\u0434\u0438\u0446\u0430 \u043e\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/pages.md",sourceDirName:".",slug:"/pages",permalink:"/bg/docs/pages",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/pages.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021 \u0433.",frontMatter:{id:"pages",title:"Pages",sidebar_label:"Pages"},sidebar:"docs",previous:{title:"IFrame",permalink:"/bg/docs/iframe"},next:{title:"Panel",permalink:"/bg/docs/panel"}},d={},m=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 ISLE, \u043a\u043e\u0439\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u0434\u0430 \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430 \u043f\u0440\u0435\u0437 \u043f\u043e\u0440\u0435\u0434\u0438\u0446\u0430 \u043e\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438."),(0,i.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"activePage")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u0442\u0430 \u043b\u0435\u043d\u0442\u0430 \u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0438\u0437\u0432\u0435\u0434\u0435\u043d\u043e \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0437\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pagination")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0440\u0430\u043d\u0435\u0442\u043e \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"both"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"size")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043c\u0435\u0440 \u043d\u0430 \u0431\u0443\u0442\u043e\u043d\u0438\u0442\u0435 \u0437\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0440\u0430\u043d\u0435 (\u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lg"),", \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"sm"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'default'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u0430\u0442\u0430 \u0432\u0438\u0441\u043e\u0447\u0438\u043d\u0430 \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. \u0410\u043a\u043e \u0432\u0433\u0440\u0430\u0434\u0435\u043d\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0435 \u043f\u043e-\u0432\u0438\u0441\u043e\u043a\u0430, \u0441\u0435 \u0434\u043e\u0431\u0430\u0432\u044f \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u043d\u0430 \u043b\u0435\u043d\u0442\u0430 \u0437\u0430 \u043f\u0440\u0435\u0432\u044a\u0440\u0442\u0430\u043d\u0435. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSelect")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u0430\u0442\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430. \u041f\u043e\u043b\u0443\u0447\u0430\u0432\u0430 \u043d\u043e\u0432\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441 \u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u0430\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u044a\u0440. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSelect() {}"),".")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Pagination",value:"customPagination"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Pages" >\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n'))),(0,i.kt)(o.Z,{value:"customPagination",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Questions" pagination="both" size="sm" >\n    <div>\n        <NumberQuestion\n            question="What is the number PI (at least up to three digits after the decimal point)?"\n            solution={Math.PI}\n            digits={3}\n        />\n    </div>\n    <div>\n        <FreeTextQuestion \n            question="Is this question displayed on the second page?"\n            solution="Yes" \n        />\n    </div>\n</Pages>\n'))),(0,i.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Pages \n    activePage={2}\n    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} \n    title=\"Styled Pages\"\n>\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n")))))}v.isMDXComponent=!0}}]);