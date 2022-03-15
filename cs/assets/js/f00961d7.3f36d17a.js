"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5527],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,v=p["".concat(u,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(202784);function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),l=n(202784),r=n(972389),o=n(161419),i=n(386010),u="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,v=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),g=h.tabGroupChoices,N=h.setTabGroupChoices,C=(0,l.useState)(y),j=C[0],w=C[1],T=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=g[d];null!=E&&E!==j&&f.some((function(e){return e.value===E}))&&w(E)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==j&&(O(t),w(a),null!=d&&N(d,a))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;n=T[l]||T[T.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:z,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),s?(0,l.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,r.Z)();return l.createElement(s,(0,a.Z)({key:String(t)},e))}},733911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},assets:function(){return p},toc:function(){return d},default:function(){return b}});var a=n(487462),l=n(263366),r=(n(202784),n(603905)),o=n(409877),i=n(358215),u=["components"],s={id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},c=void 0,m={unversionedId:"lesson-submit",id:"lesson-submit",title:"Lesson Submit",description:"Tla\u010d\xedtko, kter\xe9 se zobraz\xed na konci lekce a na kter\xe9 mohou studenti kliknout. Ve v\xfdchoz\xedm nastaven\xed je na jejich e-mailovou adresu odesl\xe1na zpr\xe1va potvrzuj\xedc\xed dokon\u010den\xed lekce.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/lesson-submit.md",sourceDirName:".",slug:"/lesson-submit",permalink:"/cs/docs/lesson-submit",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/lesson-submit.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},sidebar:"docs",previous:{title:"Sketchpad",permalink:"/cs/docs/sketchpad"},next:{title:"Video Lecture",permalink:"/cs/docs/video-lecture"}},p={},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],v={toc:d};function b(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tla\u010d\xedtko, kter\xe9 se zobraz\xed na konci lekce a na kter\xe9 mohou studenti kliknout. Ve v\xfdchoz\xedm nastaven\xed je na jejich e-mailovou adresu odesl\xe1na zpr\xe1va potvrzuj\xedc\xed dokon\u010den\xed lekce."),(0,r.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"label")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": popisek tla\u010d\xedtka odeslat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"message")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": zpr\xe1va pro potvrzovac\xed e-mail. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requireLogin")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda m\xe1 b\xfdt u\u017eivatel p\u0159ihl\xe1\u0161en, aby bylo tla\u010d\xedtko aktivn\xed (pro anonymn\xed u\u017eivatele se nezas\xedl\xe1 \u017e\xe1dn\xe9 potvrzen\xed e-mailem).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sendConfirmationEmail")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda se m\xe1 po odesl\xe1n\xed lekce odeslat potvrzovac\xed e-mail.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev t\u0159\xeddy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 p\u0159i kliknut\xed na tla\u010d\xedtko odesl\xe1n\xed.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,r.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Label",value:"customLabel"},{label:"Email Feedback",value:"emailFeedback"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit />\n"))),(0,r.kt)(i.Z,{value:"customLabel",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LessonSubmit label="Click to submit" />\n'))),(0,r.kt)(i.Z,{value:"withEmail",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit \n    style={{ outline: '4px solid black'}}\n    message={`\n    Hi,\n    I am very glad that you solved this lesson. Congratulations! \n    It was a sophisticated one.\n    If you want some help how to use ISLE, have a look a \n    [this site](https://isledocs.com/docs/)\n    \n    Best\n    The ISLE team\n    `}\n    label=\"Click to submit\" />\n"))),(0,r.kt)(i.Z,{value:"withCallback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit \n    requireLogin={false}\n    onClick={() => {\n        alert( 'The Button has been clicked...' );\n    }}\n    label=\"Click to submit\" />\n")))))}b.isMDXComponent=!0}}]);