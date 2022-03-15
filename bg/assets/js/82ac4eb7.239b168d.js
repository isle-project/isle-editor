"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9919],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},823423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"select-input",title:"Select Input",sidebar_label:"Select Input"},p=void 0,u={unversionedId:"input/select-input",id:"input/select-input",title:"Select Input",description:"\u0418\u0437\u0431\u043e\u0440 \u043d\u0430 \u0432\u0445\u043e\u0434\u0435\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442. \u041c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u043a\u0430\u0442\u043e \u0447\u0430\u0441\u0442 \u043e\u0442 \u0442\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 ISLE \u0438\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u043d\u043e. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u044f \u0441\u043b\u0443\u0447\u0430\u0439 \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0432\u0430\u0442\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 onChange \u0438\u043b\u0438 \u0434\u0430 \u043e\u0431\u0432\u044a\u0440\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u0441 \u0433\u043b\u043e\u0431\u0430\u043b\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 bind.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/input/select.md",sourceDirName:"input",slug:"/input/select-input",permalink:"/bg/docs/input/select-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/select.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021 \u0433.",frontMatter:{id:"select-input",title:"Select Input",sidebar_label:"Select Input"},sidebar:"docs",previous:{title:"Proportions Input",permalink:"/bg/docs/input/proportions-input"},next:{title:"Slider Input",permalink:"/bg/docs/input/slider-input"}},c={},s=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0418\u0437\u0431\u043e\u0440 \u043d\u0430 \u0432\u0445\u043e\u0434\u0435\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442. \u041c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u043a\u0430\u0442\u043e \u0447\u0430\u0441\u0442 \u043e\u0442 \u0442\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 ISLE \u0438\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u043d\u043e. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u044f \u0441\u043b\u0443\u0447\u0430\u0439 \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0432\u0430\u0442\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," \u0438\u043b\u0438 \u0434\u0430 \u043e\u0431\u0432\u044a\u0440\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u0441 \u0433\u043b\u043e\u0431\u0430\u043b\u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,a.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u0433\u043b\u043e\u0431\u0430\u043b\u043d\u0430\u0442\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430, \u043a\u044a\u043c \u043a\u043e\u044f\u0442\u043e \u0449\u0435 \u0431\u044a\u0434\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043e \u0447\u0438\u0441\u043b\u043e\u0442\u043e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"clearable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0431\u0443\u043b\u0435\u0432\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442, \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u0449\u0430 \u0434\u0430\u043b\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0442\u0440\u0438\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u0435\u043d\u0438\u044f\u0442(\u0438\u0442\u0435) \u0438\u0437\u0431\u043e\u0440(\u0438). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string|array|object)"),": \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442 \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0432\u0445\u043e\u0434\u0430 \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043d\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0432\u0445\u043e\u0434\u044a\u0442 \u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d \u0438\u043b\u0438 \u043d\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043a\u0430\u0437\u0432\u0430 \u0434\u0430\u043b\u0438 \u0432\u0445\u043e\u0434\u044a\u0442 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0442\u0435\u043a\u0441\u0442, \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d \u0434\u043e \u0432\u0445\u043e\u0434\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"menuPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043c\u0435\u043d\u044e\u0442\u043e \u0441\u043f\u0440\u044f\u043c\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043d\u0438\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442 (",(0,a.kt)("inlineCode",{parentName:"li"},"\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043e\u0442\u0433\u043e\u0440\u0435")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043e\u0442\u0434\u043e\u043b\u0443"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'auto'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"multi")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0431\u0435\u0440\u0430\u0442 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0430.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u0435\u043d \u0438\u0437\u0431\u043e\u0440. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"options")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u043c\u0430\u0441\u0438\u0432, \u0443\u043a\u0430\u0437\u0432\u0430\u0449 \u043d\u0430\u043b\u0438\u0447\u043d\u0438\u0442\u0435 \u0432\u044a\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u0438\u0437\u0431\u043e\u0440 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430, \u043f\u0440\u0435\u0434\u0438 \u0434\u0430 \u0441\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u0438 \u043f\u044a\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u0435\u043d \u0438\u0437\u0431\u043e\u0440. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0442\u0435\u043a\u0441\u0442, \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d \u043f\u0440\u0438 \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430\u043d\u0435 \u0441 \u043c\u0438\u0448\u043a\u0430\u0442\u0430 \u043d\u0430\u0434 \u043b\u0435\u0433\u0435\u043d\u0434\u0430\u0442\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectInput\n    legend=\"Choose the test direction\"\n    defaultValue=\"two-sided\"\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n")))}m.isMDXComponent=!0}}]);