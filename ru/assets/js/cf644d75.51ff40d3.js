(self.webpackChunk=self.webpackChunk||[]).push([[8530],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(202784),i=n(180944),r=n(386010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,s=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=(0,i.Z)(),k=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,a.useState)(c),v=b[0],N=b[1],h=a.Children.toArray(e.children),y=[];if(null!=p){var C=k[p];null!=C&&C!==v&&m.some((function(e){return e.value===C}))&&N(C)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),a=m[n].value;N(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,i,r,l,u,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,u=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&i<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case s:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case u:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},180944:function(e,t,n){"use strict";var a=n(202784),i=n(79443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},251246:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a,i=n(722122),r=n(419756),l=(n(202784),n(603905)),o=n(541395),u=n(358215),s={id:"image-question",title:"Image Question",sidebar_label:"Image Question"},c={unversionedId:"questions/image-question",id:"questions/image-question",isDocsHomePage:!1,title:"Image Question",description:"\u0412\u043e\u043f\u0440\u043e\u0441, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/questions/image.md",sourceDirName:"questions",slug:"/questions/image-question",permalink:"/docs/questions/image-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/image.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",sidebar_label:"Image Question",frontMatter:{id:"image-question",title:"Image Question",sidebar_label:"Image Question"},sidebar:"docs",previous:{title:"Free Text Question",permalink:"/docs/questions/free-text-question"},next:{title:"Match List Question",permalink:"/docs/questions/match-list-question"}},m=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p=(a="Sketchpad",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0412\u043e\u043f\u0440\u043e\u0441, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u043a (\u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right"),", \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0441 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c\u0438, \u043a\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043a\u043d\u043e\u043f\u043e\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0434\u043e\u043b\u0436\u0435\u043d \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0447\u0430\u0442. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0434\u043e\u043b\u0436\u043d\u043e \u043b\u0438 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sketchpad")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 ",(0,l.kt)(p,{mdxType:"Sketchpad"}),"; \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u044d\u0441\u043a\u0438\u0437, \u043f\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435, \u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435, \u043f\u0443\u0441\u0442\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": URL-\u0430\u0434\u0440\u0435\u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": \u0432\u0440\u0435\u043c\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u043b\u043b\u043e\u0432, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043e\u0442\u0432\u0435\u0442\u0430; \u0438\u043c\u0435\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u0431\u0443\u043b\u0435\u0430\u043d"),", \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439, \u0431\u044b\u043b\u0438 \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u044b \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Sketchpad",value:"witchSketchpad"},{label:"Submit Plot",value:"submitPlot"},{label:"Solution",value:"solution"},,],lazy:!0,mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="You may upload an image." feedback={false}  />\n'))),(0,l.kt)(u.Z,{value:"witchSketchpad",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />\n'))),(0,l.kt)(u.Z,{value:"submitPlot",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />\n  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />\n</div>\n'))),(0,l.kt)(u.Z,{value:"solution",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter \'Gamma\'." feedback={false} sketchpad={{ canvasHeight: 300}} />\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);