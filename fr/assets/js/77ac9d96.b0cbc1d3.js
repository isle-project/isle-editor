"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22926],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&k(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(y,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(n=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!y.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:x}=(0,o.U)(),[w,j]=(0,a.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=C[v];null!=e&&e!==w&&y.some((t=>t.value===e))&&j(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==w&&(E(t),j(a),null!=v&&x(v,String(a)))},I=e=>{var t,n;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},k)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=h({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:I,onClick:T},n),i={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function y(e){const t=(0,l.Z)();return a.createElement(g,h({key:String(t)},e))}},511910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return h}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&d(e,n,t[n]);return e};const b={id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},f=void 0,v={unversionedId:"input/checkbox-input",id:"input/checkbox-input",title:"Checkbox Input",description:'Un \xe9l\xe9ment de saisie \xe0 cases \xe0 cocher. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/input/checkbox.md",sourceDirName:"input",slug:"/input/checkbox-input",permalink:"/fr/docs/input/checkbox-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/checkbox.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"25 f\xe9vr. 2021",frontMatter:{id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},sidebar:"docs",previous:{title:"Wikipedia",permalink:"/fr/docs/wikipedia"},next:{title:"Number Input",permalink:"/fr/docs/input/number-input"}},k={},h=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],g={toc:h};function y(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,'Un \xe9l\xe9ment de saisie \xe0 cases \xe0 cocher. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".'),(0,a.kt)("h2",m({},{id:"options"}),"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nom de la variable globale pour la valeur de la case \xe0 cocher \xe0 attribuer \xe0. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valeur bool\xe9enne indiquant la valeur par d\xe9faut de la case \xe0 cocher. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valeur de la case \xe0 cocher (pour le composant contr\xf4l\xe9). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si l'entr\xe9e est active ou non. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si la case \xe0 cocher est affich\xe9e en ligne. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer lorsque la case est coch\xe9e. La fonction est appel\xe9e avec la valeur actuelle de la case \xe0 cocher. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": texte affich\xe9 \xe0 c\xf4t\xe9 de la case \xe0 cocher. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": texte affich\xe9 lors du survol de la case \xe0 cocher. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": position de l'infobulle du bouton. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",m({},{id:"exemples"}),"Exemples"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Inline",value:"inline"},{label:"With Style",value:"withStyle"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CheckboxInput legend="Take the logarithm" />\n'))),(0,a.kt)(l.Z,{value:"inline",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<p>Please click\n<CheckboxInput\n    inline defaultValue={false}\n/>\nto confirm that you will follow our netiquette.</p>\n"))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<CheckboxInput\n    style={{ fontSize: 30, color: 'blue'}}\n    legend=\"Click to confirm\"\n    defaultValue={false}\n/>\n"))),(0,a.kt)(l.Z,{value:"withCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<CheckboxInput\n    legend=\"Click to confirm...\"\n    onChange={( value ) => {\n        alert( 'New value: '+value );\n    }}\n/>\n")))))}y.isMDXComponent=!0}}]);