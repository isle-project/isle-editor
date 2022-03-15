"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7402],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(202784);function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),l=n(202784),r=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,l.useState)(k),w=C[0],S=C[1],j=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=N[d];null!=O&&O!==w&&h.some((function(e){return e.value===O}))&&S(O)}var T=function(e){var t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==w&&(x(t),S(a),null!=d&&y(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var l=j.indexOf(e.currentTarget)-1;n=j[l]||j[j.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:T,onClick:T},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,l.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,r.Z)();return l.createElement(s,(0,a.Z)({key:String(t)},e))}},771186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return v}});var a=n(487462),l=n(263366),r=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},c=void 0,p={unversionedId:"js-shell",id:"js-shell",title:"JavaScript Shell",description:"An interactive Javascript shell that can be used to execute JavaScript commands. The shell contains a console that displays error messages, warnings etc.",source:"@site/docs/js-shell.md",sourceDirName:".",slug:"/js-shell",permalink:"/docs/js-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"10/8/2021",frontMatter:{id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},sidebar:"docs",previous:{title:"Flippable Card",permalink:"/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/docs/likert-scale"}},m={},d=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An interactive Javascript shell that can be used to execute JavaScript commands. The shell contains a console that displays error messages, warnings etc."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"code")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": JavaScript code to be evaluated. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": for programming questions, code ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," representing the official solution for the problem. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": for programming questions, an array of hints providing guidance on how to approach the problem. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precompute")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether the default code should be executed once the component has mounted. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether group chat functionality should be enabled. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"check")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": appended JavaScript code to check the ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," to be evaluated. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to disable all user inputs and make the code block static. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lines")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number of lines to display. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked whenever the text field input changes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked whenever the ",(0,r.kt)("inlineCode",{parentName:"li"},"Evaluate")," button is clicked. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vars")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": scope object with variables that should be made available to evaluated ",(0,r.kt)("inlineCode",{parentName:"li"},"code"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Ten Lines",value:"mLines"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell code = {`var a = 2; \nvar b = 2;\nconsole.log(a + b);`} />\n"))),(0,r.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />\n"))),(0,r.kt)(o.Z,{value:"mLines",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell lines={10} />\n")))))}v.isMDXComponent=!0}}]);