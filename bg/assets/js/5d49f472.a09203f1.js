"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4806],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(487462),a=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),k=y.tabGroupChoices,T=y.setTabGroupChoices,w=(0,a.useState)(g),O=w[0],N=w[1],x=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&N(E)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(j(t),N(r),null!=m&&T(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},898973:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return v}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],c={id:"h2",title:"h2",sidebar_label:"h2"},s=void 0,p={unversionedId:"html/h2",id:"html/h2",title:"h2",description:"\u041d\u0438\u0432\u043e 2 \u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0430.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/html/h2.md",sourceDirName:"html",slug:"/html/h2",permalink:"/bg/docs/html/h2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021 \u0433.",frontMatter:{id:"h2",title:"h2",sidebar_label:"h2"},sidebar:"docs",previous:{title:"h1",permalink:"/bg/docs/html/h1"},next:{title:"h3",permalink:"/bg/docs/html/h3"}},d={},m=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041d\u0438\u0432\u043e 2 \u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0430."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Underline",value:"underline"},{label:"Overline",value:"overline"},{label:"With Gradient",value:"withGradient"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h2>Lesson Title</h2>\n"))),(0,l.kt)(o.Z,{value:"underline",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h2 style={{ textDecoration: 'underline'}}>Underline</h2>\n"))),(0,l.kt)(o.Z,{value:"overline",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h2 style={{ textDecoration: 'overline'}}>Overline</h2>\n"))),(0,l.kt)(o.Z,{value:"withGradient",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h2 style={{ \n  fontSize: 72,\n  backgroundImage:'linear-gradient(90deg,blue,orange,red,purple)',\n  webkitBackgroundClip: 'text',\n  webkitTextFillColor: 'transparent'\n}} >\nLesson Title\n</h2>\n")))))}v.isMDXComponent=!0}}]);