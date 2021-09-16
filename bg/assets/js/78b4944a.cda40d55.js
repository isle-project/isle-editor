"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6123],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,i=e.block,u=e.defaultValue,m=e.values,p=e.groupId,c=e.className,d=a.Children.toArray(e.children),f=null!=m?m:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,N=r(),g=N.tabGroupChoices,b=N.setTabGroupChoices,h=(0,a.useState)(k),v=h[0],y=h[1],C=[];if(null!=p){var w=g[p];null!=w&&w!==v&&f.some((function(e){return e.value===w}))&&y(w)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;y(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,i,r,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.target)-1;n=C[i]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},c)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},346178:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],u={id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},m=void 0,p={unversionedId:"questions/free-text-question",id:"questions/free-text-question",isDocsHomePage:!1,title:"Free Text Question",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0430 ISLE \u0437\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0438, \u043f\u0440\u0438 \u043a\u043e\u0438\u0442\u043e \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435 \u043d\u0430 \u0443\u0447\u0435\u043d\u0438\u0446\u0438\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0442 \u043f\u043e\u0434 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u043d\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u0435\u043d \u0442\u0435\u043a\u0441\u0442.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/questions/free-text.md",sourceDirName:"questions",slug:"/questions/free-text-question",permalink:"/bg/docs/questions/free-text-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/free-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.06.2021 \u0433.",frontMatter:{id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},sidebar:"docs",previous:{title:"h6",permalink:"/bg/docs/html/h6"},next:{title:"Image Question",permalink:"/bg/docs/questions/image-question"}},c=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:[]}],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0430 ISLE \u0437\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0438, \u043f\u0440\u0438 \u043a\u043e\u0438\u0442\u043e \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435 \u043d\u0430 \u0443\u0447\u0435\u043d\u0438\u0446\u0438\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0442 \u043f\u043e\u0434 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u043d\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u0435\u043d \u0442\u0435\u043a\u0441\u0442."),(0,r.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0432\u044a\u043f\u0440\u043e\u0441\u044a\u0442, \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u0432 \u0433\u043e\u0440\u043d\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043d\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0437\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u0435\u043d \u0442\u0435\u043a\u0441\u0442.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0437\u0430 \u0442\u043e\u0432\u0430 \u043a\u0430\u043a \u0434\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435 \u043d\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438\u0442\u0435 (\u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u0442 \u0431\u0443\u0442\u043e\u043d\u0438 \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u043e\u0442\u0433\u043e\u0432\u043e\u0440 \u043d\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"instantSolution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0434\u0430\u043b\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0435\u0432\u043a\u043b\u044e\u0447\u0432\u0430 \u043d\u0435\u0437\u0430\u0431\u0430\u0432\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0430 \u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0431\u0440\u043e\u0439 \u0440\u0435\u0434\u043e\u0432\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0442\u043e \u043f\u043e\u043b\u0435, \u0432 \u043a\u043e\u0435\u0442\u043e \u0443\u0447\u0435\u043d\u0438\u0446\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u0442 \u0441\u0432\u043e\u0438\u0442\u0435 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430 \u0433\u0440\u0443\u043f\u043e\u0432 \u0447\u0430\u0442 \u0437\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442 \u0434\u0430 \u043c\u043e\u0436\u0435 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0441\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0437\u0430\u043c\u0435\u0441\u0442\u0432\u0430\u0449 \u0442\u0435\u043a\u0441\u0442, \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d \u043f\u0440\u0435\u0434\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u0442 \u0434\u0430 \u0435 \u0432\u044a\u0432\u0435\u043b \u043a\u0430\u043a\u044a\u0432\u0442\u043e \u0438 \u0434\u0430 \u0435 \u0442\u0435\u043a\u0441\u0442. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044f\u0442\u0430 \u0437\u0430 \u043f\u043e\u0434\u0430\u0432\u0430\u043d\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435, \u043a\u043e\u0435\u0442\u043e \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430, \u043a\u043e\u0433\u0430\u0442\u043e \u043e\u0431\u0443\u0447\u0430\u0435\u043c\u0438\u044f\u0442 \u0437\u0430 \u043f\u0440\u044a\u0432 \u043f\u044a\u0442 \u043f\u043e\u0434\u0430\u0432\u0430 \u0441\u0432\u043e\u044f \u043e\u0442\u0433\u043e\u0432\u043e\u0440.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435, \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u043e \u0437\u0430 \u0432\u0441\u0438\u0447\u043a\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 \u0441\u043b\u0435\u0434 \u043f\u044a\u0440\u0432\u0430\u0442\u0430.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043f\u043e\u0441\u043e\u0447\u0432\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0449\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u043d\u0438\u044f \u043e\u0442\u0433\u043e\u0432\u043e\u0440, \u0441\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u043e\u0431\u0443\u0447\u0430\u0435\u043c\u0438\u0442\u0435 \u0438\u0437\u043f\u0440\u0430\u0442\u044f\u0442 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435 \u0441\u0438.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxlength")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u0435\u043d \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c \u0431\u0440\u043e\u0439 \u0441\u0438\u043c\u0432\u043e\u043b\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"2500"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430 \u0433\u043b\u0430\u0441\u043e\u0432\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": \u0432\u0440\u0435\u043c\u0435\u0442\u043e, \u0434\u043e \u043a\u043e\u0435\u0442\u043e \u0443\u0447\u0435\u043d\u0438\u0446\u0438\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043f\u043e\u0434\u0430\u0432\u0430\u0442 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u0435\u043d \u0431\u0440\u043e\u0439 \u0442\u043e\u0447\u043a\u0438, \u043f\u0440\u0438\u0441\u044a\u0436\u0434\u0430\u043d\u0438 \u043f\u0440\u0438 \u043a\u043b\u0430\u0441\u0438\u0440\u0430\u043d\u0435\u0442\u043e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0438\u0437\u0432\u0438\u043a\u0432\u0430\u043d\u0435, \u043a\u043e\u0435\u0442\u043e \u0441\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430 \u0432\u0441\u0435\u043a\u0438 \u043f\u044a\u0442, \u043a\u043e\u0433\u0430\u0442\u043e \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438; \u043f\u043e\u043b\u0443\u0447\u0430\u0432\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u044f \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0438\u0437\u0432\u0438\u043a\u0432\u0430\u043d\u0435, \u043a\u043e\u0433\u0430\u0442\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u0442 \u043f\u043e\u0434\u0430\u0434\u0435 \u043e\u0442\u0433\u043e\u0432\u043e\u0440; \u043f\u043e\u043b\u0443\u0447\u0430\u0432\u0430 \u043f\u043e\u0434\u0430\u0434\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Points for Grading",value:"withPointsForGrading"},{label:"No Feedback",value:"withoutFeedbackAndNotification"},{label:"Solution",value:"withSolution"},{label:"Hints",value:"withHints"},{label:"Placeholder",value:"placeholderText"},{label:"Due Date",value:"dueDate"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n/>\n'))),(0,r.kt)(o.Z,{value:"withPointsForGrading",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FreeTextQuestion \n    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} \n    rows={3} \n    points={15}\n/>\n"))),(0,r.kt)(o.Z,{value:"withoutFeedbackAndNotification",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3}\n    disableSubmitNotification \n    feedback={false}\n/>\n'))),(0,r.kt)(o.Z,{value:"withSolution",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n/>\n'))),(0,r.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}\n    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"\n/>\n'))),(0,r.kt)(o.Z,{value:"placeholderText",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={3} \n    solution="Winston Churchill" \n    placeholder="Think of an overweight politician with a big cigar in his mouth."\n/>\n'))),(0,r.kt)(o.Z,{value:"dueDate",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}\n    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);