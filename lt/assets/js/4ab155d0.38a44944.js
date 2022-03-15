"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4277],{603905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),c=r,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(202784);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(487462),r=a(202784),i=a(972389),l=a(161419),o=a(386010),u="tabItem_LplD";function s(e){var t,a,i,s=e.lazy,d=e.block,m=e.defaultValue,p=e.values,c=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),h=g.tabGroupChoices,N=g.setTabGroupChoices,T=(0,r.useState)(y),x=T[0],w=T[1],E=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=h[c];null!=O&&O!==x&&f.some((function(e){return e.value===O}))&&w(O)}var j=function(e){var t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==x&&(C(t),w(n),null!=c&&N(c,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},14139:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},assets:function(){return p},toc:function(){return c},default:function(){return v}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),l=a(409877),o=a(358215),u=["components"],s={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},d=void 0,m={unversionedId:"text-editor",id:"text-editor",title:"Text Editor",description:"Teksto redaktorius, skirtas u\u017era\u0161ams ar ataskaitoms ra\u0161yti. Palaikomas u\u017era\u0161\u0173 eksportavimas \u012f HTML arba PDF failus, taip pat automatinis pateikimas \u012f ISLE server\u012f.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/text-editor.md",sourceDirName:".",slug:"/text-editor",permalink:"/lt/docs/text-editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},sidebar:"docs",previous:{title:"Gate",permalink:"/lt/docs/gate"},next:{title:"Sketchpad",permalink:"/lt/docs/sketchpad"}},p={},c=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],k={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Teksto redaktorius, skirtas u\u017era\u0161ams ar ataskaitoms ra\u0161yti. Palaikomas u\u017era\u0161\u0173 eksportavimas \u012f HTML arba PDF failus, taip pat automatinis pateikimas \u012f ISLE server\u012f."),(0,i.kt)("h2",{id:"parinktys"},"Parinktys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowSubmissions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar mokiniai gali pateikti savo ataskaitas \u012f server\u012f.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"canLoadHTML")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti i\u0161saugoto HTML failo \u012fk\u0117limo \u012f redaktori\u0173 mygtuk\u0105.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": numatytasis redaktoriaus tekstas. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": valdo teksto redagavimo re\u017eim\u0105 (",(0,i.kt)("inlineCode",{parentName:"li"},"individualus")," - asmeniniam dokumentui, ",(0,i.kt)("inlineCode",{parentName:"li"},"grupinis")," - dokumentui kiekvienai grupei, ",(0,i.kt)("inlineCode",{parentName:"li"},"bendradarbiavimas")," - vienam dokumentui visiems arba ",(0,i.kt)("inlineCode",{parentName:"li"},"kohortos")," - dokumentui kiekvienai grupei).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"resetModal")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": objektas, skirtas pritaikyti dokumento atstatymo modal\u0105 (paprastai netur\u0117t\u0173 b\u016bti kei\u010diamas).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sendSubmissionEmails")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar pateikus duomenis si\u0173sti patvirtinimo el. lai\u0161kus su PDF/HTML i\u0161vestimi.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"voiceTimeout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": laikas milisekund\u0117mis po \u012fra\u0161ytos balso \u012fvesties dalies \u012fterpimo. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Default Value",value:"defaultValue"},{label:"Mode",value:"mode"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  />\n"))),(0,i.kt)(o.Z,{value:"defaultValue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor defaultValue={`# Welcome!\n\nThis is a text that uses **markdown**\n\n## Second Heading Level\n\n[Wikipedia Link](https://https://www.wikipedia.org/).\n`} />\n"))),(0,i.kt)(o.Z,{value:"mode",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." \nmode="individual" />\n'))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  \n  defaultValue=\"[Generate CSS-Gradients Online!](https://cssgradient.io/)\"\n  style={{ \n    background: 'green',\n    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' \n  }}\n/>\n")))))}v.isMDXComponent=!0}}]);