"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2453],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(487462),r=t(202784),l=t(972389),i=t(275773),o=t(386010),u="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,p=e.block,s=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===s?s:null!=(n=null!=s?s:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,r.useState)(h),C=w[0],x=w[1],j=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==C&&b.some((function(e){return e.value===T}))&&x(T)}var E=function(e){var n=e.currentTarget,t=j.indexOf(n),a=b[t].value;a!==C&&(O(n),x(a),null!=m&&y(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function p(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},108813:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),i=t(409877),o=t(358215),u=["components"],c={id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},p=void 0,s={unversionedId:"input/checkbox-input",id:"input/checkbox-input",title:"Checkbox Input",description:"Een checkbox-invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het on-Change attribuut of de waarde binden aan een globale variabele via het bind attribuut.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/input/checkbox.md",sourceDirName:"input",slug:"/input/checkbox-input",permalink:"/nl/docs/input/checkbox-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/checkbox.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"24-2-2021",frontMatter:{id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},sidebar:"docs",previous:{title:"Wikipedia",permalink:"/nl/docs/wikipedia"},next:{title:"Number Input",permalink:"/nl/docs/input/number-input"}},d=[{value:"Opties",id:"opties",children:[],level:2},{value:"Voorbeelden",id:"voorbeelden",children:[],level:2}],m={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Een checkbox-invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het ",(0,l.kt)("inlineCode",{parentName:"p"},"on-Change")," attribuut of de waarde binden aan een globale variabele via het ",(0,l.kt)("inlineCode",{parentName:"p"},"bind")," attribuut."),(0,l.kt)("h2",{id:"opties"},"Opties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bind")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": naam van de globale variabele voor de waarde van het selectievakje dat moet worden toegewezen aan. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": booleaanse waarde die de standaardwaarde van het selectievakje aangeeft. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": waarde van het selectievakje (voor de gecontroleerde component). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of de ingang actief is of niet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"inline")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of het selectievakje inline wordt weergegeven. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die moet worden aangeroepen wanneer het selectievakje wordt aangeklikt. De functie wordt aangeroepen met de huidige waarde van het selectievakje. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"legend")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": tekst die naast het selectievakje wordt weergegeven. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": tekst die wordt weergegeven wanneer het selectievakje wordt aangekruist. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": positie van de knop tooltip. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Inline",value:"inline"},{label:"With Style",value:"withStyle"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<CheckboxInput legend="Take the logarithm" />\n'))),(0,l.kt)(o.Z,{value:"inline",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>Please click\n<CheckboxInput\n    inline defaultValue={false}\n/>\nto confirm that you will follow our netiquette.</p>\n"))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CheckboxInput\n    style={{ fontSize: 30, color: 'blue'}}\n    legend=\"Click to confirm\"\n    defaultValue={false}\n/>\n"))),(0,l.kt)(o.Z,{value:"withCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CheckboxInput\n    legend=\"Click to confirm...\"\n    onChange={( value ) => {\n        alert( 'New value: '+value );\n    }}\n/>\n")))))}f.isMDXComponent=!0}}]);