"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6654],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,v=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(487462),a=n(202784),l=n(972389),i=n(275773),u=n(386010),o="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),g=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,a.useState)(b),T=w[0],j=w[1],x=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==T&&k.some((function(e){return e.value===C}))&&j(C)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),r=k[n].value;r!==T&&(O(t),j(r),null!=m&&N(m,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:E,onClick:E},l,{className:(0,u.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},10040:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return v}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),u=n(358215),o=["components"],s={id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},d=void 0,p={unversionedId:"typewriter",id:"typewriter",title:"Typewriter",description:"ISLE komponent, mis v\xf5imaldab luua kirjutusmasina efekti.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/typewriter.md",sourceDirName:".",slug:"/typewriter",permalink:"/et/docs/typewriter",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/typewriter.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},sidebar:"docs",previous:{title:"Text",permalink:"/et/docs/text"},next:{title:"Plotly",permalink:"/et/docs/plotly"}},c=[{value:"Valikud",id:"valikud",children:[],level:2},{value:"N\xe4ited",id:"n\xe4ited",children:[],level:2}],m={toc:c};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ISLE komponent, mis v\xf5imaldab luua kirjutusmasina efekti."),(0,l.kt)("h2",{id:"valikud"},"Valikud"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"delay")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": algne viivitus enne kirjutusmasina k\xe4ivitamist (millisekundites). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hold")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": kui tekst on stringide massiivi, m\xe4\xe4rab hold kindlaks, kui kaua rida kuvatakse enne, kui see l\xe4heb \xfcle massiivi j\xe4rgmisele elemendile.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"2000"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"interval")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": kirjutusmasina intervall (millisekundites). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"random")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),': kui on seatud juhuslikkus, tehakse klahvivajutused teatud "humaanse" juhuslikkusega.. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sound")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kuuldub ka tr\xfckitud klahvivajutus. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": kuvatav terviktekst v\xf5i j\xe4rjestikku kuvatavate tekstide massiivi.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,l.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Delay and Sound",value:"delayAndSound"},{label:"With CSS",value:"withCSS"},{label:"Array of Strings",value:"array"},{label:"Humanized",value:"humanized"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" />\n'))),(0,l.kt)(u.Z,{value:"delayAndSound",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" sound delay={2000} />\n'))),(0,l.kt)(u.Z,{value:"withCSS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Typewriter text=\"Styled Text\" style={{ fontSize: 66, color: 'red'}} />\n"))),(0,l.kt)(u.Z,{value:"array",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />\n'))),(0,l.kt)(u.Z,{value:"humanized",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="This is a humanized performance" random interval={170} />\n')))))}v.isMDXComponent=!0}}]);