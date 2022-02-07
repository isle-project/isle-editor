"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(487462),r=n(202784),l=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),h=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,r.useState)(g),x=T[0],w=T[1],E=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=h[m];null!=O&&O!==x&&b.some((function(e){return e.value===O}))&&w(O)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==x&&(C(t),w(a),null!=m&&N(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},818250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},d=void 0,c={unversionedId:"text-editor",id:"text-editor",title:"Text Editor",description:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0437\u0430 \u043f\u0438\u0441\u0430\u043d\u0435 \u043d\u0430 \u0431\u0435\u043b\u0435\u0436\u043a\u0438 \u0438\u043b\u0438 \u043e\u0442\u0447\u0435\u0442\u0438. \u041f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0431\u0435\u043b\u0435\u0436\u043a\u0438\u0442\u0435 \u043a\u0430\u0442\u043e HTML \u0438\u043b\u0438 PDF \u0444\u0430\u0439\u043b\u043e\u0432\u0435, \u043a\u0430\u043a\u0442\u043e \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435 \u043a\u044a\u043c \u0441\u044a\u0440\u0432\u044a\u0440\u0430 ISLE.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/text-editor.md",sourceDirName:".",slug:"/text-editor",permalink:"/bg/docs/text-editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021 \u0433.",frontMatter:{id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},sidebar:"docs",previous:{title:"Gate",permalink:"/bg/docs/gate"},next:{title:"Sketchpad",permalink:"/bg/docs/sketchpad"}},p=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:[],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0422\u0435\u043a\u0441\u0442\u043e\u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0437\u0430 \u043f\u0438\u0441\u0430\u043d\u0435 \u043d\u0430 \u0431\u0435\u043b\u0435\u0436\u043a\u0438 \u0438\u043b\u0438 \u043e\u0442\u0447\u0435\u0442\u0438. \u041f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0431\u0435\u043b\u0435\u0436\u043a\u0438\u0442\u0435 \u043a\u0430\u0442\u043e HTML \u0438\u043b\u0438 PDF \u0444\u0430\u0439\u043b\u043e\u0432\u0435, \u043a\u0430\u043a\u0442\u043e \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435 \u043a\u044a\u043c \u0441\u044a\u0440\u0432\u044a\u0440\u0430 ISLE."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"allowSubmissions")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0443\u0447\u0435\u043d\u0438\u0446\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u0442 \u043e\u0442\u0447\u0435\u0442\u0438\u0442\u0435 \u0441\u0438 \u043d\u0430 \u0441\u044a\u0440\u0432\u044a\u0440\u0430.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canLoadHTML")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0431\u0443\u0442\u043e\u043d \u0437\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0437\u0430\u043f\u0430\u0437\u0435\u043d HTML \u0444\u0430\u0439\u043b \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0442\u0435\u043a\u0441\u0442 \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"mode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0440\u0435\u0436\u0438\u043c\u0430 \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442 (\u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u0435\u043d")," \u0437\u0430 \u043b\u0438\u0447\u0435\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0433\u0440\u0443\u043f\u043e\u0432")," \u0437\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u0433\u0440\u0443\u043f\u0438, \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0441\u044a\u0432\u043c\u0435\u0441\u0442\u0435\u043d")," \u0437\u0430 \u0435\u0434\u0438\u043d\u0435\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438, \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u0445\u043e\u0440\u0442\u0430")," \u0437\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u043a\u043e\u0445\u043e\u0440\u0442\u0430).. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"resetModal")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": \u043e\u0431\u0435\u043a\u0442 \u0437\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043c\u043e\u0434\u0430\u043b\u0430 \u0437\u0430 \u043d\u0443\u043b\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 (\u043e\u0431\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u043e \u043d\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u044f). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sendSubmissionEmails")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u0442 \u0438\u043c\u0435\u0439\u043b\u0438 \u0437\u0430 \u043f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0441 PDF/HTML \u0438\u0437\u0445\u043e\u0434 \u043f\u0440\u0438 \u043f\u043e\u0434\u0430\u0432\u0430\u043d\u0435.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"voiceTimeout")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u0435 \u0432 \u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u0441\u043b\u0435\u0434 \u0432\u043c\u044a\u043a\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0433\u043b\u0430\u0441\u043e\u0432 \u0432\u0445\u043e\u0434. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Default Value",value:"defaultValue"},{label:"Mode",value:"mode"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  />\n"))),(0,l.kt)(o.Z,{value:"defaultValue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor defaultValue={`# Welcome!\n\nThis is a text that uses **markdown**\n\n## Second Heading Level\n\n[Wikipedia Link](https://https://www.wikipedia.org/).\n`} />\n"))),(0,l.kt)(o.Z,{value:"mode",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." \nmode="individual" />\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  \n  defaultValue=\"[Generate CSS-Gradients Online!](https://cssgradient.io/)\"\n  style={{ \n    background: 'green',\n    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' \n  }}\n/>\n")))))}f.isMDXComponent=!0}}]);