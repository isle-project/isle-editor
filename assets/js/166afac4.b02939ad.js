"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9776],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(202784);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(487462),a=t(202784),l=t(972389),o=t(161419),i=t(386010),u="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,a.useState)(k),O=C[0],w=C[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&w(E)}var j=function(e){var n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==O&&(T(n),w(r),null!=m&&N(m,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function s(e){var n=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},394236:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return v}});var r=t(487462),a=t(263366),l=(t(202784),t(603905)),o=t(409877),i=t(358215),u=["components"],c={id:"accordion",title:"Accordion",sidebar_label:"Accordion"},s=void 0,d={unversionedId:"accordion",id:"accordion",title:"Accordion",description:"An accordion component controlling vertical sliders.",source:"@site/docs/accordion.md",sourceDirName:".",slug:"/accordion",permalink:"/docs/accordion",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/accordion.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,formattedLastUpdatedAt:"2/7/2021",frontMatter:{id:"accordion",title:"Accordion",sidebar_label:"Accordion"},sidebar:"docs",previous:{title:"Voice Input",permalink:"/docs/input/voice-input"},next:{title:"IFrame",permalink:"/docs/iframe"}},p={},m=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An accordion component controlling vertical sliders."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"active")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": index of slider to be opened at the beginning. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canCloseAll")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": whether one can collapse all headers. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"headers")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": array of header names. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"headerStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": one may also assign a style to the header bars. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"headerClassName")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": this overrules the given class name of the headers. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked with index of new active vertical slider. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": class name for outer div. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles for outer div. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{defaultValue:"firstOpened",values:[{label:"First item opened",value:"firstOpened"},{label:"All items can close",value:"allClosed"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"firstOpened",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n"))),(0,l.kt)(i.Z,{value:"allClosed",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n")))))}v.isMDXComponent=!0}}]);