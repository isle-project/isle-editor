"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2465],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),o=n(202784),a=n(972389),i=n(275773),u=n(386010),l="tabItem_LplD";function s(e){var t,n,a,s=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,o.useState)(y),q=O[0],N=O[1],T=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=k[d];null!=E&&E!==q&&b.some((function(e){return e.value===E}))&&N(E)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==q&&(x(t),N(r),null!=d&&w(d,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:j,onClick:j},a,{className:(0,u.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(v.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function c(e){var t=(0,a.Z)();return o.createElement(s,(0,r.Z)({key:String(t)},e))}},741882:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var r=n(487462),o=n(263366),a=(n(202784),n(603905)),i=n(409877),u=n(358215),l=["components"],s={id:"question-form",title:"Question Form",sidebar_label:"Question Form"},c=void 0,m={unversionedId:"questions/question-form",id:"questions/question-form",title:"Question Form",description:"Um componente de formul\xe1rio que combina diferentes componentes de perguntas juntamente com um \xfanico bot\xe3o de apresenta\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/questions/question-form.md",sourceDirName:"questions",slug:"/questions/question-form",permalink:"/pt/docs/questions/question-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/question-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614807536,formattedLastUpdatedAt:"03/03/2021",frontMatter:{id:"question-form",title:"Question Form",sidebar_label:"Question Form"},sidebar:"docs",previous:{title:"Order Question",permalink:"/pt/docs/questions/order-question"},next:{title:"Quiz",permalink:"/pt/docs/questions/quiz"}},p=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[],level:2},{value:"Exemplos",id:"exemplos",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Um componente de formul\xe1rio que combina diferentes componentes de perguntas juntamente com um \xfanico bot\xe3o de apresenta\xe7\xe3o."),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"buttonLabel")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": etiqueta do bot\xe3o submeter. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o bot\xe3o submeter \xe9 clicado. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",{id:"exemplos"},"Exemplos"),(0,a.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n'))),(0,a.kt)(u.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QuestionForm>\n    <NumberQuestion\n        question={<p>What is $$2+2$$?</p>}\n    />  \n    <FreeTextQuestion\n        question={<span>What is the *meaning of life*?</span>}\n    />    \n</QuestionForm>\n")))))}f.isMDXComponent=!0}}]);