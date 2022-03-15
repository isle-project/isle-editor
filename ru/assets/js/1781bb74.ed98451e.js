"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[172],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(202784);function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(487462),l=n(202784),a=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),y=N.tabGroupChoices,h=N.setTabGroupChoices,x=(0,l.useState)(k),T=x[0],C=x[1],w=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==T&&g.some((function(e){return e.value===E}))&&C(E)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),r=g[n].value;r!==T&&(O(t),C(r),null!=d&&h(d,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var l=w.indexOf(e.currentTarget)-1;n=w[l]||w[w.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},g.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:j,onClick:j},a,{className:(0,o.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),c?(0,l.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,a.Z)();return l.createElement(c,(0,r.Z)({key:String(t)},e))}},757347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return v}});var r=n(487462),l=n(263366),a=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],c={id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},s=void 0,p={unversionedId:"scrolling-text",id:"scrolling-text",title:"Scrolling Text",description:"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u043e\u0432\u0430\u044f \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0430\u044f, \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/scrolling-text.md",sourceDirName:".",slug:"/scrolling-text",permalink:"/ru/docs/scrolling-text",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/scrolling-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},sidebar:"docs",previous:{title:"Polaroid",permalink:"/ru/docs/polaroid"},next:{title:"Slider",permalink:"/ru/docs/slider"}},m={},d=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u043e\u0432\u0430\u044f \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0430\u044f, \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c."),(0,a.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"text")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": \u0442\u0435\u043a\u0441\u0442 \u0438\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"loop")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0431\u0443\u0434\u0435\u0442 \u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"direction")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 (\u043b\u0438\u0431\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043b\u0435\u0432\u043e"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043f\u0440\u0430\u0432\u043e"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0432\u0432\u0435\u0440\u0445"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0432\u043d\u0438\u0437"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0442\u0440\u0435\u043a\u0438\u043d\u0433"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0444\u043e\u043a\u0443\u0441"),", \u043b\u0438\u0431\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0432\u0438\u0445\u0440\u044c"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u044f, \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0434\u0432\u0438\u0436\u043d\u044b\u043c (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"wait")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u044f \u0434\u043e \u043f\u0440\u0438\u0445\u043e\u0434\u0430 \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u044f \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0430 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"outTime")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0440\u0435\u043c\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-\u0441\u0442\u0438\u043b\u0438 \u0442\u0435\u043a\u0441\u0442\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"List of Texts",value:"list"},{label:"Background Image",value:"backgroundImage"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScrollingText\n    text=\"This is a text re-appearing every five seconds\"\n    style={{ fontSize: 44, color: 'blue' }}\n    wait={5}\n    hold={2}\n    loop\n/>\n"))),(0,a.kt)(o.Z,{value:"list",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n"))),(0,a.kt)(o.Z,{value:"backgroundImage",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n")))))}v.isMDXComponent=!0}}]);