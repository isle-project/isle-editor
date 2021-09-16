"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8107],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),p=i,f=c["".concat(u,".").concat(p)]||c[p]||d[p]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,i=e.block,s=e.defaultValue,m=e.values,d=e.groupId,c=e.className,p=a.Children.toArray(e.children),f=null!=m?m:p.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=s?s:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),b=v.tabGroupChoices,g=v.setTabGroupChoices,N=(0,a.useState)(k),h=N[0],y=N[1],C=[];if(null!=d){var x=b[d];null!=x&&x!==h&&f.some((function(e){return e.value===x}))&&y(x)}var P=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;y(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,i,r,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.target)-1;n=C[i]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},c)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:P,onClick:P},null!=n?n:t)}))),n?(0,a.cloneElement)(p.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},604938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],s={id:"panel",title:"Panel",sidebar_label:"Panel"},m=void 0,d={unversionedId:"panel",id:"panel",isDocsHomePage:!1,title:"Panel",description:"Kaardi komponent.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/panel.md",sourceDirName:".",slug:"/panel",permalink:"/et/docs/panel",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/panel.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1628108874,formattedLastUpdatedAt:"4.8.2021",frontMatter:{id:"panel",title:"Panel",sidebar_label:"Panel"},sidebar:"docs",previous:{title:"Pages",permalink:"/et/docs/pages"},next:{title:"Polaroid",permalink:"/et/docs/polaroid"}},c=[{value:"Valikud",id:"valikud",children:[]},{value:"N\xe4ited",id:"n\xe4ited",children:[]}],p={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kaardi komponent."),(0,r.kt)("h2",{id:"valikud"},"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": CSS klassi nimi. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"header")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": paneeli pealkiri. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"headerTag")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": paneeli pealkirja jaoks kasutatav silt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'h3'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"footer")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": paneeli alumine osa. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minimizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kas paneeli saab minimeerida. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultMinimized")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas paneel peaks olema vaikimisi minimeeritud (rakendub ainult siis, kui ",(0,r.kt)("inlineCode",{parentName:"li"},"minimizable")," on seatud ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kas paneeli saab muuta t\xe4isekraaniliseks (ainult instruktoritele). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": t\xf6\xf6riistavihik, mis kuvatakse nupu peitmise kohal. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trapFocus")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kas kasutaja fookus j\xe4\xe4b paneelil l\xf5ksu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bodyStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid keha jaoks. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"footerStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid jalusesse. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Konteineri CSS inline stiilid. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onHide")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, mis kutsutakse esile, kui kl\xf5psatakse sulgemisnupule. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Header",value:"withHeader"},{label:"Header and Footer",value:"headerAndFooter"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Panel>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n"))),(0,r.kt)(o.Z,{value:"withHeader",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel header="Panel with Header">\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n'))),(0,r.kt)(o.Z,{value:"headerAndFooter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel \n    header="Header" \n    footer={<h4>Footer</h4>}\n>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n'))),(0,r.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Panel style={{ color: 'salmon', background: 'darkblue' }}>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);