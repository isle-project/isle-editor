"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4250],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),o=n(972389),l=n(161419),i=n(386010),u="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,x=(0,r.useState)(g),C=x[0],O=x[1],w=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&O(E)}var D=function(e){var t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==C&&(T(t),O(a),null!=m&&y(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},722225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return v}});var a=n(487462),r=n(263366),o=(n(202784),n(603905)),l=n(409877),i=n(358215),u=["components"],s={id:"gate",title:"Gate",sidebar_label:"Gate"},p=void 0,d={unversionedId:"gate",id:"gate",title:"Gate",description:"Um componente ISLE que permite exibir seus filhos apenas para p\xfablicos reservados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/pt/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1631799799,formattedLastUpdatedAt:"16/09/2021",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/pt/docs/feedback"},next:{title:"Text Editor",permalink:"/pt/docs/text-editor"}},c={},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um componente ISLE que permite exibir seus filhos apenas para p\xfablicos reservados."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"user")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": quando o conte\xfado do port\xe3o \xe9 exibido aos usu\xe1rios. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"notUser")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": quando definido o conte\xfado do port\xf5es \xe9 ",(0,o.kt)("strong",{parentName:"li"},"n\xe3o*")," exibido aos usu\xe1rios. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": quando o conte\xfado do port\xe3o \xe9 exibido para os alunos inscritos no curso. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": quando definido, o conte\xfado do port\xe3o \xe9 ",(0,o.kt)("strong",{parentName:"li"},"n\xe3o")," exibido para os alunos inscritos no curso. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"owner")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": quando o conte\xfado do port\xf5es \xe9 exibido para o propriet\xe1rio do curso (geralmente o instrutor). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": quando ajustado o conte\xfado do port\xf5es \xe9 ",(0,o.kt)("strong",{parentName:"li"},"n\xe3o*")," exibido ao propriet\xe1rio do curso (geralmente o instrutor). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"after")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),": tempo ap\xf3s o qual o conte\xfado do port\xe3o deve se tornar vis\xedvel. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"until")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),": tempo at\xe9 que o conte\xfado do port\xe3o permane\xe7a vis\xedvel. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"banner")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"node"),": uma mensagem personalizada que \xe9 exibida aos visitantes para os quais as crian\xe7as do port\xe3o n\xe3o s\xe3o vis\xedveis em vez da mensagem padr\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": se um port\xe3o for desativado, o banner ser\xe1 exibido n\xe3o importa o que. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),': controla se o conte\xfado do port\xe3o deve ser mostrado no modo de apresenta\xe7\xe3o quando o port\xe3o \xe9 vis\xedvel para o "propriet\xe1rio". Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"check")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno retornando um ",(0,o.kt)("inlineCode",{parentName:"li"},"booleano")," indicando se o port\xe3o deve exibir componentes infantis; a fun\xe7\xe3o \xe9 invocada sempre que as a\xe7\xf5es da sess\xe3o chegam. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,o.kt)(i.Z,{value:"timed",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,o.kt)(i.Z,{value:"hidden",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,o.kt)(i.Z,{value:"customBanner",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,o.kt)(i.Z,{value:"customCheck",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}v.isMDXComponent=!0}}]);