"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11157],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},402562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return N}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e};const s={id:"text-input",title:"Text Input",sidebar_label:"Text Input"},d=void 0,f={unversionedId:"input/text-input",id:"input/text-input",title:"Text Input",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442. \u041c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u043a\u0430\u0442\u043e \u0447\u0430\u0441\u0442 \u043e\u0442 \u0442\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 ISLE \u0438\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u043d\u043e. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u044f \u0441\u043b\u0443\u0447\u0430\u0439 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0432\u0430\u0442\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 onChange \u0438\u043b\u0438 \u0434\u0430 \u0441\u0432\u044a\u0440\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u0441 \u0433\u043b\u043e\u0431\u0430\u043b\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 bind.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/input/text.md",sourceDirName:"input",slug:"/input/text-input",permalink:"/bg/docs/input/text-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021 \u0433.",frontMatter:{id:"text-input",title:"Text Input",sidebar_label:"Text Input"},sidebar:"docs",previous:{title:"Text Area",permalink:"/bg/docs/input/text-area"},next:{title:"Voice Input",permalink:"/bg/docs/input/voice-input"}},k={},N=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],g={toc:N};function b(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),c),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442. \u041c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u043a\u0430\u0442\u043e \u0447\u0430\u0441\u0442 \u043e\u0442 \u0442\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 ISLE \u0438\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u043d\u043e. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u044f \u0441\u043b\u0443\u0447\u0430\u0439 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0432\u0430\u0442\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," \u0438\u043b\u0438 \u0434\u0430 \u0441\u0432\u044a\u0440\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u0441 \u0433\u043b\u043e\u0431\u0430\u043b\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,r.kt)("h2",m({},{id:"\u043e\u043f\u0446\u0438\u0438"}),"\u041e\u043f\u0446\u0438\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bind")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u0433\u043b\u043e\u0431\u0430\u043b\u043d\u0430\u0442\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430, \u043a\u044a\u043c \u043a\u043e\u044f\u0442\u043e \u0449\u0435 \u0431\u044a\u0434\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043e \u0447\u0438\u0441\u043b\u043e\u0442\u043e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442, \u0443\u043a\u0430\u0437\u0432\u0430\u0449\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432 \u043d\u0430\u0447\u0430\u043b\u043e\u0442\u043e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442 (\u0437\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u043d\u0438\u0437, \u0443\u043a\u0430\u0437\u0432\u0430\u0449 \u0442\u0435\u043a\u0441\u0442\u0430, \u043a\u043e\u0439\u0442\u043e \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0434\u043e \u0432\u044a\u0432\u0435\u0434\u0435\u043d\u043e\u0442\u043e \u0447\u0438\u0441\u043b\u043e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u041f\u043e\u043a\u0430\u0437\u0432\u0430 \u0434\u0430\u043b\u0438 \u0432\u0445\u043e\u0434\u044a\u0442 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0432 \u0440\u0435\u0434. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0433\u0430\u0442\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442 \u0438\u0437\u0433\u0443\u0431\u0438 \u0444\u043e\u043a\u0443\u0441. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u043f\u0440\u0438 \u043d\u0430\u0442\u0438\u0441\u043a\u0430\u043d\u0435 \u043d\u0430 \u043d\u044f\u043a\u043e\u0439 \u043a\u043b\u0430\u0432\u0438\u0448. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u043f\u0440\u0438 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u043d\u044f\u043a\u043e\u0439 \u043a\u043b\u0430\u0432\u0438\u0448. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0430 \u043f\u0440\u0438 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0448\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0438\u0437, \u0443\u043a\u0430\u0437\u0432\u0430\u0449 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u043f\u0440\u0435\u0434\u0438 \u0434\u0430 \u0441\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u0438 \u043f\u044a\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u0435\u043d \u0438\u0437\u0431\u043e\u0440. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0447\u0438\u0441\u043b\u043e, \u0443\u043a\u0430\u0437\u0432\u0430\u0449\u043e \u0448\u0438\u0440\u0438\u043d\u0430\u0442\u0430 \u043d\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"80"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TextInput\n    legend="Your name"\n    defaultValue="Enter text"\n/>\n')))}b.isMDXComponent=!0}}]);