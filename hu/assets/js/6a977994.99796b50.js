(self.webpackChunk=self.webpackChunk||[]).push([[8834],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(202784),a=n(79443);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=l(),k=f.tabGroupChoices,g=f.setTabGroupChoices,v=(0,r.useState)(a),b=v[0],y=v[1],N=r.Children.toArray(e.children),h=[];if(null!=m){var C=k[m];null!=C&&C!==b&&p.some((function(e){return e.value===C}))&&y(C)}var w=function(e){var t=e.currentTarget,n=h.indexOf(t),r=p[n].value;y(r),null!=m&&(g(m,r),setTimeout((function(){var e,n,r,a,l,i,o,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,u=i.innerWidth,n>=0&&l<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var r=h.indexOf(e.target)+1;n=h[r]||h[0];break;case u:var a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:O,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(202784).createContext)(void 0);t.Z=r},420884:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(722122),a=n(419756),l=(n(202784),n(603905)),i=n(855064),o=n(358215),s=["components"],u={id:"seal",title:"Seal",sidebar_label:"Seal"},c=void 0,p={unversionedId:"seal",id:"seal",isDocsHomePage:!1,title:"Seal",description:"J\xf3v\xe1hagy\xe1si pecs\xe9t.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/seal.md",sourceDirName:".",slug:"/seal",permalink:"/hu/docs/seal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/seal.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2021. 08. 02.",frontMatter:{id:"seal",title:"Seal",sidebar_label:"Seal"},sidebar:"docs",previous:{title:"Recorder",permalink:"/hu/docs/recorder"},next:{title:"Shaped Form",permalink:"/hu/docs/shaped-form"}},m=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"J\xf3v\xe1hagy\xe1si pecs\xe9t."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"active")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a pecs\xe9t akt\xedv vagy sz\xfcrke legyen.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amely a jegyzetre kattint\xe1skor h\xedv\xf3dik el\u0151.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scale")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": objektum m\xe9rete (ha nincs kifejezetten be\xe1ll\xedtva, a pecs\xe9t nem m\xe9retez\u0151dik \xe1t). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"innerStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": a st\xedlus a bels\u0151 k\xf6r sz\xe1m\xe1ra. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lower")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": az als\xf3 sz\xf6veg. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'The lower text'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lowerArc")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": az als\xf3 sz\xf6veg \xedv\xe9t. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"150"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"noOrnaments")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": megakad\xe1lyozza a d\xedszek megjelen\xedt\xe9s\xe9t. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"removable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a megjegyz\xe9s elt\xe1vol\xedt\xe1sra ker\xfclj\xf6n-e, ha r\xe1kattintanak. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": az elem st\xedlusa. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": pecs\xe9t c\xedme. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'Enter a title'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"upper")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a fels\u0151 sz\xf6veg. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'The upper text'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"upperArc")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": a fels\u0151 sz\xf6veg \xedv\xe9t. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"150"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Removable",value:"removable"},{label:"Scaled",value:"scaled"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\n<Seal \n  title="LESSON DONE" \n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),(0,l.kt)(o.Z,{value:"removable",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal \n  title="LESSON DONE" \n  noOrnaments\n  removable\n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),(0,l.kt)(o.Z,{value:"scaled",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Seal \n  title=\"BIG SEAL\" \n  scale={1.15}\n  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}\n  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}\n  upper=\"Carnegie Mellon\" upperArc={120} \n  lower=\"University\" lowerArc={105}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);