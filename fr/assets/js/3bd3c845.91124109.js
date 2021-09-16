"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8312],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,i=e.block,u=e.defaultValue,m=e.values,c=e.groupId,p=e.className,d=a.Children.toArray(e.children),f=null!=m?m:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=r(),b=g.tabGroupChoices,v=g.setTabGroupChoices,N=(0,a.useState)(k),h=N[0],y=N[1],C=[];if(null!=c){var x=b[c];null!=x&&x!==h&&f.some((function(e){return e.value===x}))&&y(x)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;y(a),null!=c&&(v(c,a),setTimeout((function(){var e,n,a,i,r,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.target)-1;n=C[i]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},p)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},728091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var a,i=n(487462),r=n(263366),l=(n(202784),n(603905)),o=n(855064),s=n(358215),u=["components"],m={id:"image-question",title:"Image Question",sidebar_label:"Image Question"},c=void 0,p={unversionedId:"questions/image-question",id:"questions/image-question",isDocsHomePage:!1,title:"Image Question",description:"Une question qui demande \xe0 l'utilisateur de t\xe9l\xe9charger une image.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/questions/image.md",sourceDirName:"questions",slug:"/questions/image-question",permalink:"/fr/docs/questions/image-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/image.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19/06/2021",frontMatter:{id:"image-question",title:"Image Question",sidebar_label:"Image Question"},sidebar:"docs",previous:{title:"Free Text Question",permalink:"/fr/docs/questions/free-text-question"},next:{title:"Match List Question",permalink:"/fr/docs/questions/match-list-question"}},d=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],f=(a="Sketchpad",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),k={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Une question qui demande \xe0 l'utilisateur de t\xe9l\xe9charger une image."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": texte de la question. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": l'emplacement des indices (soit ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right")," ou ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": des conseils sur la fa\xe7on de r\xe9pondre \xe0 la question. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage des boutons de r\xe9troaction. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'\xe9l\xe9ment doit avoir un chat int\xe9gr\xe9. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si une notification doit \xeatre affich\xe9e apr\xe8s l'envoi d'une image. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sketchpad")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": propri\xe9t\xe9s \xe0 passer \xe0 ",(0,l.kt)(f,{mdxType:"Sketchpad"})," component ; pour rendre le sketchpad, passez au moins un objet vide ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": image URL de la solution mod\xe8le. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": le temps n\xe9cessaire pour permettre aux \xe9tudiants de soumettre des r\xe9ponses. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": nombre maximum de points attribu\xe9s dans le classement. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),': rappel invoqu\xe9 lors de la soumission de la r\xe9ponse ; a comme seul param\xe8tre un "bool\xe9en" indiquant si les \xe9l\xe9ments ont \xe9t\xe9 plac\xe9s dans le bon ordre. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"exemples"},"Exemples"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Sketchpad",value:"witchSketchpad"},{label:"Submit Plot",value:"submitPlot"},{label:"Solution",value:"solution"},,],lazy:!0,mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="You may upload an image." feedback={false}  />\n'))),(0,l.kt)(s.Z,{value:"witchSketchpad",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />\n'))),(0,l.kt)(s.Z,{value:"submitPlot",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />\n  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />\n</div>\n'))),(0,l.kt)(s.Z,{value:"solution",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter \'Gamma\'." feedback={false} sketchpad={{ canvasHeight: 300}} />\n')))))}g.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);