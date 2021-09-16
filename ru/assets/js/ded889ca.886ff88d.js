"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3540],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var i=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?i.createElement(f,r(r({ref:n},c),{},{components:t})):i.createElement(f,r({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){var i=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(202784),a=t(79443);var l=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,a=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=i.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,g=l(),h=g.tabGroupChoices,b=g.setTabGroupChoices,N=(0,i.useState)(k),v=N[0],C=N[1],y=[];if(null!=p){var w=h[p];null!=w&&w!==v&&f.some((function(e){return e.value===w}))&&C(w)}var x=function(e){var n=e.currentTarget,t=y.indexOf(n),i=f[t].value;C(i),null!=p&&(b(p,i),setTimeout((function(){var e,t,i,a,l,r,o,u;(e=n.getBoundingClientRect(),t=e.top,i=e.left,a=e.bottom,l=e.right,r=window,o=r.innerHeight,u=r.innerWidth,t>=0&&l<=u&&a<=o&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=y.indexOf(e.target)+1;t=y[i]||y[0];break;case"ArrowLeft":var a=y.indexOf(e.target)-1;t=y[a]||y[y.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":v===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=t?t:n)}))),t?(0,i.cloneElement)(d.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},79443:function(e,n,t){var i=(0,t(202784).createContext)(void 0);n.Z=i},110771:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var i=t(487462),a=t(263366),l=(t(202784),t(603905)),r=t(855064),o=t(358215),s=["components"],u={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},c=void 0,p={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",isDocsHomePage:!1,title:"Multiple Choice Question",description:"ISLE-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0434\u0430\u0435\u0442 \u0432\u043e\u043f\u0440\u043e\u0441 \u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0432\u044b\u0431\u043e\u0440\u0435. \u041e\u043d \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0447\u0430\u0439, \u043a\u043e\u0433\u0434\u0430 \u0443\u0447\u0430\u0449\u0438\u0439\u0441\u044f \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u043e\u0442\u0432\u0435\u0442, \u0438 \u043a\u043e\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432, \u0438 \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/ru/docs/questions/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/ru/docs/questions/match-list-question"},next:{title:"Number Question",permalink:"/ru/docs/questions/number-question"}},m=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ISLE-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0434\u0430\u0435\u0442 \u0432\u043e\u043f\u0440\u043e\u0441 \u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0432\u044b\u0431\u043e\u0440\u0435. \u041e\u043d \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0447\u0430\u0439, \u043a\u043e\u0433\u0434\u0430 \u0443\u0447\u0430\u0449\u0438\u0439\u0441\u044f \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u043e\u0442\u0432\u0435\u0442, \u0438 \u043a\u043e\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432, \u0438 \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b."),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0432\u043e\u043f\u0440\u043e\u0441, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0431\u043e\u0440\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|array)"),": \u043d\u043e\u043c\u0435\u0440, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0449\u0438\u0439, \u043a\u0430\u043a\u043e\u0439 \u043e\u0442\u0432\u0435\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439, \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043c\u0430\u0441\u0441\u0438\u0432")," \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0443\u0447\u0430\u0449\u0438\u0439\u0441\u044f \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"answers")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array (required)"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043c\u0430\u0441\u0441\u0438\u0432")," \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u0430. \u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0441 \u043f\u043e\u043b\u044f\u043c\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043e\u0442\u0432\u0435\u0442\u0430 \u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435, \u0432\u0438\u0434\u0438\u043c\u043e\u0435 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u0430\u0447\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u044c, \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u0442\u0432\u0435\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0438\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u043a (\u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right"),", \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0441 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c\u0438, \u043a\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043a\u043d\u043e\u043f\u043e\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043e\u0442\u043a\u043b\u044e\u0447\u0451\u043d \u043b\u0438 \u0432\u043e\u043f\u0440\u043e\u0441. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0434\u043e\u043b\u0436\u0435\u043d \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0447\u0430\u0442. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043b\u0438\u0431\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043f\u043e\u043b\u043d\u044b\u0439"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439"),", \u043b\u0438\u0431\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043d\u0435\u0442"),'. \u0415\u0441\u043b\u0438 "\u043f\u043e\u043b\u043d\u044b\u0439", \u0442\u043e \u043e\u0442\u0437\u044b\u0432, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0443\u0447\u0435\u043d\u0438\u043a\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0441\u0432\u043e\u0438 \u043e\u0442\u0432\u0435\u0442\u044b; \u0435\u0441\u043b\u0438 "\u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439", \u0442\u043e \u043e\u0442\u0437\u044b\u0432 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430; \u0435\u0441\u043b\u0438 "\u043d\u0435\u0442", \u0442\u043e \u043e\u0442\u0437\u044b\u0432 \u043d\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0430\u0447\u0438 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043b\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": \u0432\u0440\u0435\u043c\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u043b\u043b\u043e\u0432, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),': \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430; \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 (\u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u043e\u043f\u0440\u043e\u0441 \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435, \u0447\u0442\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e"). Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)(r.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,l.kt)(o.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,l.kt)(o.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,l.kt)(o.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,l.kt)(o.Z,{value:"aSeries",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,l.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,n,t){function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);