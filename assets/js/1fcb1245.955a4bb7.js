"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5369],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,f=d["".concat(u,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(202784);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(487462),i=n(202784),r=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,m=e.block,p=e.defaultValue,d=e.values,c=e.groupId,f=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,i.useState)(h),x=C[0],w=C[1],D=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var T=N[c];null!=T&&T!==x&&b.some((function(e){return e.value===T}))&&w(T)}var P=function(e){var t=e.currentTarget,n=D.indexOf(t),a=b[n].value;a!==x&&(O(t),w(a),null!=c&&y(c,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var i=D.indexOf(e.currentTarget)-1;n=D[i]||D[D.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return D.push(e)},onKeyDown:E,onFocus:P,onClick:P},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,r.Z)();return i.createElement(s,(0,a.Z)({key:String(t)},e))}},568916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return v}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"panel",title:"Panel",sidebar_label:"Panel"},m=void 0,p={unversionedId:"panel",id:"panel",title:"Panel",description:"Card component.",source:"@site/docs/panel.md",sourceDirName:".",slug:"/panel",permalink:"/docs/panel",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/panel.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1636666717,formattedLastUpdatedAt:"11/11/2021",frontMatter:{id:"panel",title:"Panel",sidebar_label:"Panel"},sidebar:"docs",previous:{title:"Pages",permalink:"/docs/pages"},next:{title:"Polaroid",permalink:"/docs/polaroid"}},d={},c=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],f={toc:c};function v(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Card component."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": CSS class name. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"header")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": panel heading. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"headerTag")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tag used for the panel heading. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'h3'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"footer")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": panel footer. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minimizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": whether the panel can be minimized. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultMinimized")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether the panel should be minimized by default (only applicable when ",(0,r.kt)("inlineCode",{parentName:"li"},"minimizable")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": whether the panel can be made fullscreen (only for instructors). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tooltip displayed over the hide button. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trapFocus")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": whether to trap the user's focus in the panel. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bodyStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles for body. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"footerStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles for footer. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bodyClassName")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": CSS class name for body. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"footerClassName")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": CSS class name for footer. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles for container. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onHide")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked when the close button is clicked. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Header",value:"withHeader"},{label:"Header and Footer",value:"headerAndFooter"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Panel>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n"))),(0,r.kt)(o.Z,{value:"withHeader",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel header="Panel with Header">\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n'))),(0,r.kt)(o.Z,{value:"headerAndFooter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel \n    header="Header" \n    footer={<h4>Footer</h4>}\n>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n'))),(0,r.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Panel style={{ color: 'salmon', background: 'darkblue' }}>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n")))))}v.isMDXComponent=!0}}]);