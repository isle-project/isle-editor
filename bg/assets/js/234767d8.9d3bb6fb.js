"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50259],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),r=n(386010),l=n(152670),o=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&y(e,n,t[n]);return e};function v(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:k,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===f?f:null!=(n=null!=f?f:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[j,T]=(0,a.useState)(C),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=k){const e=w[k];null!=e&&e!==j&&N.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=x.indexOf(t),a=N[n].value;a!==j&&(D(t),T(a),null!=k&&O(k,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:P,onClick:P},n),o={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,l.Z)();return a.createElement(v,g({key:String(t)},e))}},21274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},b=void 0,k={unversionedId:"word-cloud",id:"word-cloud",title:"Word Cloud",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u043e\u0431\u043b\u0430\u043a \u043e\u0442 \u0434\u0443\u043c\u0438, \u0438\u0437\u0433\u0440\u0430\u0434\u0435\u043d \u0432\u044a\u0440\u0445\u0443 d3-cloud.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/word-cloud.md",sourceDirName:".",slug:"/word-cloud",permalink:"/bg/docs/word-cloud",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"25.04.2022 \u0433.",frontMatter:{id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},sidebar:"docs",previous:{title:"Violin Plot",permalink:"/bg/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/bg/docs/models/decision-tree"}},y={},g=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],v={toc:g};function N(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u043e\u0431\u043b\u0430\u043a \u043e\u0442 \u0434\u0443\u043c\u0438, \u0438\u0437\u0433\u0440\u0430\u0434\u0435\u043d \u0432\u044a\u0440\u0445\u0443 ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud"),"."),(0,a.kt)("h2",m({},{id:"\u043e\u043f\u0446\u0438\u0438"}),"\u041e\u043f\u0446\u0438\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u0438\u043b\u0438 \u043c\u0430\u0441\u0438\u0432 \u043e\u0442 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0435, \u043e\u0442 \u043a\u043e\u0438\u0442\u043e \u0434\u0430 \u0441\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0430 \u043e\u0431\u043b\u0430\u043a\u044a\u0442 \u043e\u0442 \u0434\u0443\u043c\u0438, \u0438\u043b\u0438, \u0430\u043a\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"precalculated")," \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043d\u043e \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", \u0438 \u043c\u0430\u0441\u0438\u0432 \u043e\u0442 \u043e\u0431\u0435\u043a\u0442\u0438 \u0437\u0430 \u0431\u0440\u043e\u0439 \u0434\u0443\u043c\u0438 (\u0441 \u043a\u043b\u044e\u0447\u043e\u0432\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"text")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"font")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|function)"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u0434\u043e\u0441\u0442\u044a\u043f, \u0437\u0430\u0434\u0430\u0432\u0430\u0449\u0430 \u043b\u0438\u0446\u0435\u0442\u043e \u043d\u0430 \u0448\u0440\u0438\u0444\u0442\u0430 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u0434\u0443\u043c\u0430. \u041f\u0440\u0438\u0435\u043c\u0430 \u0441\u044a\u0449\u043e \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'serif'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fontSizeMapper")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u0434\u043e\u0441\u0442\u044a\u043f, \u043a\u043e\u044f\u0442\u043e \u0443\u043a\u0430\u0437\u0432\u0430 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043d\u0430 \u0448\u0440\u0438\u0444\u0442\u0430 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u0434\u0443\u043c\u0430. \u041f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0"),", \u043a\u044a\u0434\u0435\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"min")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," \u043e\u0437\u043d\u0430\u0447\u0430\u0432\u0430\u0442 \u0441\u044a\u043e\u0442\u0432\u0435\u0442\u043d\u043e \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043d\u0438\u044f \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u0438\u044f \u0431\u0440\u043e\u0439 \u0434\u0443\u043c\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0432\u0438\u0441\u043e\u0447\u0438\u043d\u0430 \u043d\u0430 \u043e\u0431\u043b\u0430\u043a\u0430 \u043e\u0442 \u0434\u0443\u043c\u0438 (\u0432 px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"language")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043d\u0430 \u0435\u0437\u0438\u043a\u0430 (\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f \u0441\u0442\u043e\u043f\u043e\u0432\u0435\u0442\u0435, \u043a\u043e\u0438\u0442\u043e \u0449\u0435 \u0431\u044a\u0434\u0430\u0442 \u043f\u0440\u0435\u043c\u0430\u0445\u043d\u0430\u0442\u0438). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'en'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0430\u043a\u043e \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043d\u043e, \u0432\u043a\u043b\u044e\u0447\u0432\u0430 \u0441\u0430\u043c\u043e \u0434\u0443\u043c\u0438, \u043a\u043e\u0438\u0442\u043e \u0441\u0435 \u043f\u043e\u044f\u0432\u044f\u0432\u0430\u0442 \u043f\u043e\u0432\u0435\u0447\u0435 \u043e\u0442 ",(0,a.kt)("inlineCode",{parentName:"li"},"minCount")," \u043f\u044a\u0442\u0438 \u0432 \u0434\u0430\u0434\u0435\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"saveButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0431\u0443\u0442\u043e\u043d \u0437\u0430 \u0437\u0430\u043f\u0430\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u043b\u0430\u043a\u0430 \u043e\u0442 \u0434\u0443\u043c\u0438 \u043a\u0430\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0433\u0430\u0442\u043e \u0441\u0435 \u0449\u0440\u0430\u043a\u043d\u0435 \u0432\u044a\u0440\u0445\u0443 \u0434\u0443\u043c\u0430 \u0432 \u043e\u0431\u043b\u0430\u043a\u0430 \u043e\u0442 \u0434\u0443\u043c\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"padding")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u0434\u043e\u0441\u0442\u044a\u043f \u0438\u043b\u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430, \u0443\u043a\u0430\u0437\u0432\u0430\u0449\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u0430 \u043f\u043e\u0434\u043b\u043e\u0436\u043a\u0430 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u0434\u0443\u043c\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"precalculated")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u043e\u0431\u043b\u0430\u043a\u044a\u0442 \u043e\u0442 \u0434\u0443\u043c\u0438 \u043e\u0447\u0430\u043a\u0432\u0430 \u043c\u0430\u0441\u0438\u0432 \u043e\u0442 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u043d\u043e \u0438\u0437\u0447\u0438\u0441\u043b\u0435\u043d\u0438 \u0431\u0440\u043e\u0439\u043a\u0438 \u0434\u0443\u043c\u0438 \u0438\u043b\u0438 \u0449\u0435 \u0433\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0430 \u0437\u0430 \u0434\u0430\u0434\u0435\u043d\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0435.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(function|number)"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u0434\u043e\u0441\u0442\u044a\u043f, \u0443\u043a\u0430\u0437\u0432\u0430\u0449\u0430 \u044a\u0433\u044a\u043b\u0430 \u043d\u0430 \u0437\u0430\u0432\u044a\u0440\u0442\u0430\u043d\u0435 (\u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0438) \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u0434\u0443\u043c\u0430. \u041f\u0440\u0438\u0435\u043c\u0430 \u0441\u044a\u0449\u043e \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"updateThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0440\u0430\u0437\u043c\u0435\u0440 \u043d\u0430 \u043f\u0430\u0440\u0442\u0438\u0434\u0430\u0442\u0430 \u043e\u0442 \u043d\u043e\u0432\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438 \u0432 ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," \u043f\u0440\u0435\u0434\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0442\u043e \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u043b\u0430\u043a\u0430 \u043e\u0442 \u0434\u0443\u043c\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stopwords")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0438 \u0441\u043f\u0438\u0440\u0430\u0449\u0438 \u0434\u0443\u043c\u0438, \u043a\u043e\u0438\u0442\u043e \u0434\u0430 \u0441\u0435 \u043f\u0440\u0435\u043c\u0430\u0445\u043d\u0430\u0442, \u043f\u0440\u0435\u0434\u0438 \u0434\u0430 \u0441\u0435 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430 \u043e\u0431\u043b\u0430\u043a\u044a\u0442 \u043e\u0442 \u0434\u0443\u043c\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"triggerRender")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0435 \u043f\u0440\u0438 \u043e\u0431\u043c\u0435\u043d \u043d\u0430 \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0442 \u0434\u0430\u043d\u043d\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0448\u0438\u0440\u0438\u043d\u0430 \u043d\u0430 \u043e\u0431\u043b\u0430\u043a\u0430 \u043e\u0442 \u0434\u0443\u043c\u0438 (\u0432 px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"700"),".")),(0,a.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),(0,a.kt)(l.Z,{value:"withStopwords",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}N.isMDXComponent=!0}}]);