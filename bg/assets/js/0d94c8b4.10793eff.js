"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9906],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,O=(0,a.useState)(k),C=O[0],T=O[1],w=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==C&&(j(t),T(r),null!=m&&N(m,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},203421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},c=void 0,p={unversionedId:"plots/interval-plot",id:"plots/interval-plot",title:"Interval Plot",description:"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043d\u0430 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u0430.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/plots/interval-plot.md",sourceDirName:"plots",slug:"/plots/interval-plot",permalink:"/bg/docs/plots/interval-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/interval-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630354211,formattedLastUpdatedAt:"30.08.2021 \u0433.",frontMatter:{id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},sidebar:"docs",previous:{title:"Histogram",permalink:"/bg/docs/plots/histogram"},next:{title:"Line Plot",permalink:"/bg/docs/plots/lineplot"}},d=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043d\u0430 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u0430."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043e\u0431\u0435\u043a\u0442 \u043e\u0442 \u043c\u0430\u0441\u0438\u0432\u0438 \u0441\u044a\u0441 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430(\u0438) \u0437\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u0437\u0430 \u0433\u0440\u0443\u043f\u0438\u0440\u0430\u043d\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"orientation")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u043d\u0430")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0445\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u043d\u0430")," \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"significanceLevel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043d\u0438\u0432\u043e \u043d\u0430 \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"multipleTestingAdjustment")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043a\u043e\u0440\u0438\u0433\u0438\u0440\u0430 \u043d\u0438\u0432\u043e\u0442\u043e \u043d\u0430 \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442, \u0437\u0430 \u0434\u0430 \u0441\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u043a\u043e\u0435\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u044a\u0442 \u043d\u0430 \u0444\u0430\u043b\u0448\u0438\u0432\u043e \u043e\u0442\u043a\u0440\u0438\u0432\u0430\u043d\u0435.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Horizontal",value:"horizontal"},{label:"Custom Significance Level",value:"significance"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" />\n'))),(0,l.kt)(o.Z,{value:"horizontal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" orientation="horizontal" />\n'))),(0,l.kt)(o.Z,{value:"significance",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" significanceLevel={0.01} />\n')))))}v.isMDXComponent=!0}}]);