"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2182],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,k=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,m=e.groupId,p=e.className,d=r.Children.toArray(e.children),k=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),g=v.tabGroupChoices,b=v.setTabGroupChoices,y=(0,r.useState)(f),N=y[0],h=y[1],w=[];if(null!=m){var C=g[m];null!=C&&C!==N&&k.some((function(e){return e.value===C}))&&h(C)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=k[n].value;h(r),null!=m&&(b(m,r),setTimeout((function(){var e,n,r,a,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},p)},k.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},660660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],s={id:"seal",title:"Seal",sidebar_label:"Seal"},c=void 0,m={unversionedId:"seal",id:"seal",isDocsHomePage:!1,title:"Seal",description:"Hyv\xe4ksymismerkki.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/seal.md",sourceDirName:".",slug:"/seal",permalink:"/fi/docs/seal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/seal.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2.8.2021",frontMatter:{id:"seal",title:"Seal",sidebar_label:"Seal"},sidebar:"docs",previous:{title:"Recorder",permalink:"/fi/docs/recorder"},next:{title:"Shaped Form",permalink:"/fi/docs/shaped-form"}},p=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[]},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[]}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hyv\xe4ksymismerkki."),(0,i.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"active")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, onko tiiviste aktiivinen vai harmaana.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktio, joka k\xe4ynnistet\xe4\xe4n, kun muistiinpanoa napsautetaan.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scale")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": objektin koko (jos sit\xe4 ei ole nimenomaisesti asetettu, sinetti\xe4 ei skaalata uudelleen).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"innerStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": sis\xe4piirin tyyli. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"lower")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": alempi teksti. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'The lower text'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"lowerArc")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": alemman tekstin kaari. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"150"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"noOrnaments")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": est\xe4\xe4 koristeiden render\xf6innin. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"removable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, poistetaanko huomautus, kun sit\xe4 napsautetaan. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": elementin tyyli. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": sinetin nimi. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Enter a title'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"upper")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": ylempi teksti. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'The upper text'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"upperArc")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": ylemm\xe4n tekstin kaari. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"150"),".")),(0,i.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Removable",value:"removable"},{label:"Scaled",value:"scaled"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />\n'))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\n<Seal \n  title="LESSON DONE" \n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),(0,i.kt)(o.Z,{value:"removable",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal \n  title="LESSON DONE" \n  noOrnaments\n  removable\n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),(0,i.kt)(o.Z,{value:"scaled",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Seal \n  title=\"BIG SEAL\" \n  scale={1.15}\n  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}\n  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}\n  upper=\"Carnegie Mellon\" upperArc={120} \n  lower=\"University\" lowerArc={105}\n/>\n")))))}k.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);