"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5321],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,k=m["".concat(u,".").concat(p)]||m[p]||c[p]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(487462),r=n(202784),l=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,d=e.block,c=e.defaultValue,m=e.values,p=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),h=y.tabGroupChoices,N=y.setTabGroupChoices,z=(0,r.useState)(g),T=z[0],x=z[1],j=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=h[p];null!=E&&E!==T&&f.some((function(e){return e.value===E}))&&x(E)}var O=function(e){var t=e.currentTarget,n=j.indexOf(t),a=f[n].value;a!==T&&(w(t),x(a),null!=p&&N(p,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},92747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},d=void 0,c={unversionedId:"text-editor",id:"text-editor",title:"Text Editor",description:"Sz\xf6vegszerkeszt\u0151 jegyzetek vagy jelent\xe9sek \xedr\xe1s\xe1hoz. T\xe1mogatja a jegyzetek HTML- vagy PDF-f\xe1jlk\xe9nt t\xf6rt\xe9n\u0151 export\xe1l\xe1s\xe1t, valamint az ISLE szerverre t\xf6rt\xe9n\u0151 automatikus k\xfcld\xe9st.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/text-editor.md",sourceDirName:".",slug:"/text-editor",permalink:"/hu/docs/text-editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},sidebar:"docs",previous:{title:"Gate",permalink:"/hu/docs/gate"},next:{title:"Sketchpad",permalink:"/hu/docs/sketchpad"}},m=[{value:"Opci\xf3k",id:"opci\xf3k",children:[],level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[],level:2}],p={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sz\xf6vegszerkeszt\u0151 jegyzetek vagy jelent\xe9sek \xedr\xe1s\xe1hoz. T\xe1mogatja a jegyzetek HTML- vagy PDF-f\xe1jlk\xe9nt t\xf6rt\xe9n\u0151 export\xe1l\xe1s\xe1t, valamint az ISLE szerverre t\xf6rt\xe9n\u0151 automatikus k\xfcld\xe9st."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"allowSubmissions")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a di\xe1kok elk\xfcldhetik-e jelent\xe9seiket a szerverre.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canLoadHTML")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e a mentett HTML f\xe1jl bet\xf6lt\xe9s\xe9re szolg\xe1l\xf3 gomb a szerkeszt\u0151be.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a szerkeszt\u0151 alap\xe9rtelmezett sz\xf6vege. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"mode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),': a sz\xf6vegszerkeszt\xe9s m\xf3dj\xe1t vez\xe9rli (egy\xe9ni dokumentum eset\xe9n "egy\xe9ni", csoportos dokumentum eset\xe9n "csoportonk\xe9nt", k\xf6z\xf6s dokumentum eset\xe9n "kollaborat\xedv", ha mindenki sz\xe1m\xe1ra egy dokumentumot k\xe9sz\xedt, vagy csoportonk\xe9nt "kohorsz").. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"resetModal")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": objektum a dokumentum vissza\xe1ll\xedt\xe1s\xe1ra szolg\xe1l\xf3 mod\xe1l testreszab\xe1s\xe1hoz (\xe1ltal\xe1ban nem kell megv\xe1ltoztatni). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sendSubmissionEmails")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": ellen\u0151rzi, hogy k\xfcldj\xf6n-e visszaigazol\xf3 e-mailt PDF/HTML kimenettel a beny\xfajt\xe1skor. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"voiceTimeout")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": id\u0151 milliszekundumban, miut\xe1n a r\xf6gz\xedtett hangbemenet egy darabja beilleszt\xe9sre ker\xfclt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Default Value",value:"defaultValue"},{label:"Mode",value:"mode"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  />\n"))),(0,l.kt)(o.Z,{value:"defaultValue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor defaultValue={`# Welcome!\n\nThis is a text that uses **markdown**\n\n## Second Heading Level\n\n[Wikipedia Link](https://https://www.wikipedia.org/).\n`} />\n"))),(0,l.kt)(o.Z,{value:"mode",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." \nmode="individual" />\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  \n  defaultValue=\"[Generate CSS-Gradients Online!](https://cssgradient.io/)\"\n  style={{ \n    background: 'green',\n    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' \n  }}\n/>\n")))))}k.isMDXComponent=!0}}]);