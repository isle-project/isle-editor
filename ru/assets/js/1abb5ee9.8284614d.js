"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3638],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},358215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(202784);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},409877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(487462),a=r(202784),l=r(972389),i=r(161419),o=r(386010),u="tabItem_LplD";function s(e){var t,r,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),h=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(k),T=w[0],x=w[1],O=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=h[d];null!=E&&E!==T&&y.some((function(e){return e.value===E}))&&x(E)}var j=function(e){var t=e.currentTarget,r=O.indexOf(t),n=y[r].value;n!==T&&(C(t),x(n),null!=d&&N(d,n))},S=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},340906:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return v}});var n=r(487462),a=r(263366),l=(r(202784),r(603905)),i=r(409877),o=r(358215),u=["components"],s={id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},c=void 0,p={unversionedId:"typewriter",id:"typewriter",title:"Typewriter",description:"ISLE \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442 \u043f\u0435\u0447\u0430\u0442\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u043a\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/typewriter.md",sourceDirName:".",slug:"/typewriter",permalink:"/ru/docs/typewriter",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/typewriter.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},sidebar:"docs",previous:{title:"Text",permalink:"/ru/docs/text"},next:{title:"Plotly",permalink:"/ru/docs/plotly"}},m={},d=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],f={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ISLE \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442 \u043f\u0435\u0447\u0430\u0442\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u043a\u0438."),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"delay")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043f\u0435\u0447\u0430\u0442\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u043a\u0438 (\u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hold")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u0435\u0441\u043b\u0438 \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u0442\u0440\u043e\u043a, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043e\u043d \u043f\u0435\u0440\u0435\u0439\u0434\u0435\u0442 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"2000"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"interval")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043f\u0435\u0447\u0430\u0442\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u043a\u0438 (\u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"random")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),': \u0435\u0441\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0441\u0442\u044c, \u0442\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439, "\u0433\u0443\u043c\u0430\u043d\u043d\u043e\u0439" \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0441\u0442\u044c\u044e. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sound")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0442\u0430\u043a\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u044b\u0448\u0435\u043d \u0432\u0432\u043e\u0434 \u043d\u0430\u0436\u0430\u0442\u043e\u0439 \u043a\u043b\u0430\u0432\u0438\u0448\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": \u043f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Delay and Sound",value:"delayAndSound"},{label:"With CSS",value:"withCSS"},{label:"Array of Strings",value:"array"},{label:"Humanized",value:"humanized"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" />\n'))),(0,l.kt)(o.Z,{value:"delayAndSound",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" sound delay={2000} />\n'))),(0,l.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Typewriter text=\"Styled Text\" style={{ fontSize: 66, color: 'red'}} />\n"))),(0,l.kt)(o.Z,{value:"array",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />\n'))),(0,l.kt)(o.Z,{value:"humanized",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="This is a humanized performance" random interval={170} />\n')))))}v.isMDXComponent=!0}}]);