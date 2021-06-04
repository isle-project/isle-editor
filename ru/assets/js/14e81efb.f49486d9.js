(self.webpackChunk=self.webpackChunk||[]).push([[5308],{603905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return c}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,k=d["".concat(u,".").concat(c)]||d[c]||s[c]||a;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},512492:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var r=t(722122),i=t(419756),a=(t(202784),t(603905)),l={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},o={unversionedId:"input/number-input",id:"input/number-input",isDocsHomePage:!1,title:"Number Input",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432\u0432\u043e\u0434\u0430 \u0447\u0438\u0441\u043b\u0430. \u041c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0447\u0430\u0441\u0442\u044c ISLE \u043f\u0440\u0438\u0431\u043e\u0440\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043b\u0438 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 onChange \u0438\u043b\u0438 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0447\u0435\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 bind.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/input/number.md",sourceDirName:"input",slug:"/input/number-input",permalink:"/docs/input/number-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",sidebar_label:"Number Input",frontMatter:{id:"number-input",title:"Number Input",sidebar_label:"Number Input"},sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/docs/input/proportions-input"}},u=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432\u0432\u043e\u0434\u0430 \u0447\u0438\u0441\u043b\u0430. \u041c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0447\u0430\u0441\u0442\u044c ISLE \u043f\u0440\u0438\u0431\u043e\u0440\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043b\u0438 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," \u0438\u043b\u0438 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0447\u0435\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,a.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u044f \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043d\u0430 \u0432\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u0432 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u043e\u0433\u043e, \u0430\u043a\u0442\u0438\u0432\u0435\u043d \u0432\u0445\u043e\u0434 \u0438\u043b\u0438 \u043d\u0435\u0442. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043b\u0438 \u0432\u0445\u043e\u0434 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0441\u0442\u0440\u043e\u043a\u0430, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u043d\u0430 \u0442\u0435\u043a\u0441\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0440\u044f\u0434\u043e\u043c \u0441 \u0432\u0432\u043e\u0434\u0438\u043c\u043e\u0439 \u0446\u0438\u0444\u0440\u043e\u0439. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0447\u0438\u0441\u043b\u043e, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0447\u0438\u0441\u043b\u043e, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043d\u0430 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbersOnly")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u043e\u043c\u0435\u0440\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0440\u0430\u0437\u043c\u044b\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0432\u0432\u043e\u0434\u0430 \u043d\u043e\u043c\u0435\u0440\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0434\u043b\u044f \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438 \u043b\u044e\u0431\u043e\u0439 \u043a\u043b\u0430\u0432\u0438\u0448\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u043b\u044e\u0431\u043e\u0439 \u043a\u043b\u0430\u0432\u0438\u0448\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u0438 \u043e\u0442\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u0438 \u043a\u043b\u044e\u0447\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u0447\u0438\u0441\u043b\u043e, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043d\u0430 \u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0442\u0440\u0435\u043b\u043e\u043a \u043f\u0440\u0438\u0440\u0430\u0449\u0435\u043d\u0438\u044f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inputStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (\u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 (\u0435\u0441\u043b\u0438 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430, \u043e\u043d\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),".")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}m.isMDXComponent=!0}}]);