"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1651],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,f=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(487462),a=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,d=e.block,p=e.defaultValue,m=e.values,c=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,a.useState)(h),D=C[0],w=C[1],O=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=N[c];null!=E&&E!==D&&k.some((function(e){return e.value===E}))&&w(E)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),r=k[n].value;r!==D&&(x(t),w(r),null!=c&&y(c,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function d(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},128167:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return b}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},d=void 0,p={unversionedId:"dashboard",id:"dashboard",title:"Dashboard",description:"Et dashboard til at kombinere h\xe5ndteringen af flere indtastningsfelter for b\xf8rn.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/da/docs/dashboard",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6.12.2021",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/da/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/da/docs/data-sampler"}},m={},c=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],f={toc:c};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Et dashboard til at kombinere h\xe5ndteringen af flere indtastningsfelter for b\xf8rn."),(0,l.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": hvis indstillet til ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", udf\xf8res funktionen ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate")," ved opstart med standard inputv\xe6rdierne. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om funktionen ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate")," skal kaldes automatisk, n\xe5r et af de underordnede inputfelter \xe6ndres. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"description")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": beskrivelse af instrumentbr\xe6ttet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om instrumentbr\xe6ttet skal v\xe6re deaktiveret. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"label")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": knapm\xe6rke. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": maksimal bredde af instrumentbr\xe6ttet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": klassens navn. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bodyClassName")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": klassens navn for kortets krop. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'d-grid gap-3'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funktion, der kaldes, n\xe5r der klikkes p\xe5 knappen, eller n\xe5r en af dashboardets inputv\xe6rdier \xe6ndres (hvis ",(0,l.kt)("inlineCode",{parentName:"li"},"autoUpdate")," er indstillet til ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"). Funktionen kaldes med v\xe6rdierne i inputfelterne i den r\xe6kkef\xf8lge, de er placeret i instrumentbr\xe6ttet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": kortets titel. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,l.kt)("h2",{id:"eksempler"},"Eksempler"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,l.kt)(o.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}b.isMDXComponent=!0}}]);