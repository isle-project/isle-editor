"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5685],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),i=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),g=h.tabGroupChoices,N=h.setTabGroupChoices,O=(0,a.useState)(y),w=O[0],T=O[1],x=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=g[d];null!=E&&E!==w&&b.some((function(e){return e.value===E}))&&T(E)}var S=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==w&&(C(t),T(r),null!=d&&N(d,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},372834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return v}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},c=void 0,p={unversionedId:"likert-scale",id:"likert-scale",title:"Likert Scale",description:"O component\u0103 care prezint\u0103 o \xeentrebare \u0219i o scal\u0103 de cinci puncte la care elevii trebuie s\u0103 r\u0103spund\u0103.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/likert-scale.md",sourceDirName:".",slug:"/likert-scale",permalink:"/ro/docs/likert-scale",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/likert-scale.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"01.06.2021",frontMatter:{id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},sidebar:"docs",previous:{title:"JavaScript Shell",permalink:"/ro/docs/js-shell"},next:{title:"Multi Cards",permalink:"/ro/docs/multi-cards"}},m={},d=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"O component\u0103 care prezint\u0103 o \xeentrebare \u0219i o scal\u0103 de cinci puncte la care elevii trebuie s\u0103 r\u0103spund\u0103."),(0,i.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \xeentrebare de tip\u0103rit. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": o matrice de cinci elemente care con\u021bin etichete personalizate pentru diferitele niveluri ale scalei. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"noMultipleResponses")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": s\u0103 nu permit\u0103 mai multe prezent\u0103ri din partea unui singur elev. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se dezactiveaz\u0103 sau nu notific\u0103rile de trimitere. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": numele clasei. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Options",value:"customOptions"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LikertScale \n    id="discrimination" \n    question="Do you agree with the arguments made by the speaker?" \n/>\n'))),(0,i.kt)(o.Z,{value:"customOptions",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LikertScale \n    id=\"discrimination\" \n    question=\"After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?\" \n    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']}\n/>\n"))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LikertScale \n    id=\"discrimination\" \n    question=\"Do you agree with the arguments made by the speaker?\" \n    style={{ \n        background: 'rgba(0,0,255,0.05)', \n        fontFamily: 'Open Sans', \n        fontSize: 22 \n    }}\n/>\n")))))}v.isMDXComponent=!0}}]);