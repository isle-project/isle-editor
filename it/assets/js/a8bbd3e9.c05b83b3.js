"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4082],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),i=n(79443);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,i=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=a(),y=k.tabGroupChoices,b=k.setTabGroupChoices,g=(0,r.useState)(v),h=g[0],N=g[1],O=[];if(null!=p){var w=y[p];null!=w&&w!==h&&f.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;N(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,i,a,l,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&a<=s&&i<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.target)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},586246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],s={id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},c=void 0,p={unversionedId:"likert-scale",id:"likert-scale",isDocsHomePage:!1,title:"Likert Scale",description:"Un componente che mostra una domanda e una scala a cinque punti a cui gli studenti devono rispondere.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/likert-scale.md",sourceDirName:".",slug:"/likert-scale",permalink:"/it/docs/likert-scale",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/likert-scale.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"24/2/2021",frontMatter:{id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},sidebar:"docs",previous:{title:"JavaScript Shell",permalink:"/it/docs/js-shell"},next:{title:"Multi Cards",permalink:"/it/docs/multi-cards"}},m=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un componente che mostra una domanda e una scala a cinque punti a cui gli studenti devono rispondere."),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": domanda da stampare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"options")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": una serie di cinque elementi che contengono le etichette per i diversi livelli di scala. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"noMultipleResponses")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": non ammettere invii multipli da parte di un singolo studente. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se disabilitare le notifiche di presentazione. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"esempi"},"Esempi"),(0,a.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Options",value:"customOptions"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LikertScale \n    id="discrimination" \n    question="Do you agree with the arguments made by the speaker?" \n/>\n'))),(0,a.kt)(o.Z,{value:"customOptions",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LikertScale \n    id=\"discrimination\" \n    question=\"After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?\" \n    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']}\n/>\n"))),(0,a.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LikertScale \n    id=\"discrimination\" \n    question=\"Do you agree with the arguments made by the speaker?\" \n    style={{ \n        background: 'rgba(0,0,255,0.05)', \n        fontFamily: 'Open Sans', \n        fontSize: 22 \n    }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);