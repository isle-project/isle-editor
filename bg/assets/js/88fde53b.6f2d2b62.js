"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6283],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(487462),r=n(202784),i=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,m=e.block,c=e.defaultValue,p=e.values,d=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),h=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,r.useState)(g),w=C[0],T=C[1],x=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var D=h[d];null!=D&&D!==w&&v.some((function(e){return e.value===D}))&&T(D)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==w&&(O(t),T(a),null!=d&&y(d,a))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:q,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},169792:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return f},default:function(){return b}});var a,r=n(487462),i=n(263366),l=(n(202784),n(603905)),o=n(409877),u=n(358215),s=["components"],m={id:"image-question",title:"Image Question",sidebar_label:"Image Question"},c=void 0,p={unversionedId:"questions/image-question",id:"questions/image-question",title:"Image Question",description:"\u0412\u044a\u043f\u0440\u043e\u0441, \u043a\u043e\u0439\u0442\u043e \u0438\u0437\u0438\u0441\u043a\u0432\u0430 \u043e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u0434\u0430 \u043a\u0430\u0447\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/questions/image.md",sourceDirName:"questions",slug:"/questions/image-question",permalink:"/bg/docs/questions/image-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/image.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.06.2021 \u0433.",frontMatter:{id:"image-question",title:"Image Question",sidebar_label:"Image Question"},sidebar:"docs",previous:{title:"Free Text Question",permalink:"/bg/docs/questions/free-text-question"},next:{title:"Match List Question",permalink:"/bg/docs/questions/match-list-question"}},d={},f=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],k=(a="Sketchpad",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),v={toc:f};function b(e){var t=e.components,n=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0412\u044a\u043f\u0440\u043e\u0441, \u043a\u043e\u0439\u0442\u043e \u0438\u0437\u0438\u0441\u043a\u0432\u0430 \u043e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u0434\u0430 \u043a\u0430\u0447\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438\u0442\u0435 (\u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0437\u0430 \u0442\u043e\u0432\u0430 \u043a\u0430\u043a \u0434\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435 \u043d\u0430 \u0432\u044a\u043f\u0440\u043e\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u0442 \u0431\u0443\u0442\u043e\u043d\u0438 \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u044a\u0442 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0430\u043d \u0447\u0430\u0442. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435 \u0441\u043b\u0435\u0434 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sketchpad")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0438\u0442\u043e \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u043f\u0440\u0435\u0434\u0430\u0434\u0435\u043d\u0438 \u043d\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 ",(0,l.kt)(k,{mdxType:"Sketchpad"}),"; \u0437\u0430 \u0434\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u0442\u0435 \u0441\u043a\u0438\u0446\u043d\u0438\u043a\u0430, \u043f\u043e\u0434\u0430\u0439\u0442\u0435 \u043f\u043e\u043d\u0435 \u043f\u0440\u0430\u0437\u0435\u043d \u043e\u0431\u0435\u043a\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": URL \u0430\u0434\u0440\u0435\u0441 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": \u0432\u0440\u0435\u043c\u0435\u0442\u043e, \u0434\u043e \u043a\u043e\u0435\u0442\u043e \u0443\u0447\u0435\u043d\u0438\u0446\u0438\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043f\u043e\u0434\u0430\u0432\u0430\u0442 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u0435\u043d \u0431\u0440\u043e\u0439 \u0442\u043e\u0447\u043a\u0438, \u043f\u0440\u0438\u0441\u044a\u0436\u0434\u0430\u043d\u0438 \u043f\u0440\u0438 \u043a\u043b\u0430\u0441\u0438\u0440\u0430\u043d\u0435\u0442\u043e. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430\u043d\u0430 \u043f\u0440\u0438 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043d\u0435 \u043d\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0430; \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u0438\u044f\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u044a\u0440 \u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),", \u043a\u043e\u0439\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0434\u0430\u043b\u0438 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0442\u0435 \u0441\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0438 \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u0435\u043d \u0440\u0435\u0434. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Sketchpad",value:"witchSketchpad"},{label:"Submit Plot",value:"submitPlot"},{label:"Solution",value:"solution"},,],lazy:!0,mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="You may upload an image." feedback={false}  />\n'))),(0,l.kt)(u.Z,{value:"witchSketchpad",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />\n'))),(0,l.kt)(u.Z,{value:"submitPlot",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />\n  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />\n</div>\n'))),(0,l.kt)(u.Z,{value:"solution",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter \'Gamma\'." feedback={false} sketchpad={{ canvasHeight: 300}} />\n')))))}b.isMDXComponent=!0}}]);