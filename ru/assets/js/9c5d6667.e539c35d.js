"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3787],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(487462),a=n(202784),l=n(972389),o=n(161419),i=n(386010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(h),T=N[0],O=N[1],x=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var q=g[m];null!=q&&q!==T&&v.some((function(e){return e.value===q}))&&O(q)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==T&&(j(t),O(r),null!=m&&w(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},551285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return b}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),o=n(409877),i=n(358215),u=["components"],c={id:"blockquote",title:"blockquote",sidebar_label:"blockquote"},s=void 0,d={unversionedId:"html/blockquote",id:"html/blockquote",title:"blockquote",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0439 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/html/blockquote.md",sourceDirName:"html",slug:"/html/blockquote",permalink:"/ru/docs/html/blockquote",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/blockquote.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614809571,formattedLastUpdatedAt:"03.03.2021",frontMatter:{id:"blockquote",title:"blockquote",sidebar_label:"blockquote"},sidebar:"docs",previous:{title:"LaTeX Equations",permalink:"/ru/docs/tex"},next:{title:"div",permalink:"/ru/docs/html/div"}},p={},m=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0439 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cite")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0446\u0438\u0442\u0430\u0442\u044b. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"Cite",value:"cite"},{label:"Styled",value:"styled"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<blockquote>\nAfter all is said and done, more is said than done.\n</blockquote>\n"))),(0,l.kt)(i.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<blockquote>\n\n# A Markdown Quote\n\nAfter all is **said** and **done**, more is said than done. \n\n[Francis Crick](https://en.wikipedia.org/wiki/Francis_Crick)\n</blockquote>\n"))),(0,l.kt)(i.Z,{value:"cite",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<blockquote cite="https://de.wikipedia.org/wiki/Francis_Crick">\nAfter all is said and done, more is said than done.(Francis Crick)\n<p style={{ fontSize: 14, marginTop: 20}}>The cite property is just for search daemons</p>\n</blockquote>\n'))),(0,l.kt)(i.Z,{value:"styled",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<blockquote \n  style={{ color: 'red',\n    fontFamily: 'Palatino',\n    fontSize: 26, \n    fontStyle: 'italic',\n    background: 'gold',\n    borderLeft: '30px solid red',\n    quotes: \"red\"\n  }}\n>\n    After all is said and done, more is said than done.\n    <br />(Francis Crick)\n</blockquote>\n")))))}b.isMDXComponent=!0}}]);