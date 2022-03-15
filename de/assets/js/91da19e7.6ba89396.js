"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2108],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,f=m["".concat(u,".").concat(p)]||m[p]||c[p]||l;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(202784);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(487462),a=t(202784),l=t(972389),i=t(161419),o=t(386010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,d=e.block,c=e.defaultValue,m=e.values,p=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,a.useState)(k),C=w[0],O=w[1],T=[],z=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=N[p];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&O(E)}var x=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==C&&(z(n),O(r),null!=p&&y(p,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},335804:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},assets:function(){return m},toc:function(){return p},default:function(){return g}});var r=t(487462),a=t(263366),l=(t(202784),t(603905)),i=t(409877),o=t(358215),u=["components"],s={id:"gate",title:"Gate",sidebar_label:"Gate"},d=void 0,c={unversionedId:"gate",id:"gate",title:"Gate",description:"Eine ISLE-Komponente, die es erlaubt, ihre Kinder nur f\xfcr reservierte Zielgruppen anzuzeigen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/de/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1631799799,formattedLastUpdatedAt:"16.9.2021",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/de/docs/feedback"},next:{title:"Text Editor",permalink:"/de/docs/text-editor"}},m={},p=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],f={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Eine ISLE-Komponente, die es erlaubt, ihre Kinder nur f\xfcr reservierte Zielgruppen anzuzeigen."),(0,l.kt)("h2",{id:"optionen"},"Optionen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"user")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der Gated Content den Benutzern angezeigt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"notUser")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der gesperrte Inhalt ",(0,l.kt)("strong",{parentName:"li"},"nicht")," f\xfcr Benutzer angezeigt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn eingestellt, wird der gesch\xfctzte Inhalt den im Kurs eingeschriebenen Teilnehmern angezeigt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der gesperrte Inhalt den im Kurs eingeschriebenen Teilnehmern ",(0,l.kt)("strong",{parentName:"li"},"nicht")," angezeigt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"owner")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn eingestellt, wird der gesch\xfctzte Inhalt dem Besitzer des Kurses (normalerweise dem Kursleiter) angezeigt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der gesch\xfctzte Inhalt dem Besitzer des Kurses (normalerweise dem Kursleiter) ",(0,l.kt)("strong",{parentName:"li"},"nicht")," angezeigt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"after")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": Zeit, nach der der Inhalt des Gates sichtbar werden soll. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": Zeit, bis der Inhalt des Gates sichtbar bleiben soll. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"banner")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"node"),": eine benutzerdefinierte Nachricht, die Besuchern angezeigt wird, f\xfcr die die Kinder des Tores nicht sichtbar sind, anstelle der Standardnachricht. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn ein Tor deaktiviert ist, wird das Banner angezeigt, egal was. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Gate-Inhalt im Pr\xe4sentationsmodus angezeigt werden soll, wenn das Gate f\xfcr den ",(0,l.kt)("inlineCode",{parentName:"li"},"Eigent\xfcmer")," sichtbar ist. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"check")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),': Callback-Funktion, die ein "Boolean" zur\xfcckgibt, das angibt, ob Gate untergeordnete Komponenten anzeigen soll; die Funktion wird immer dann aufgerufen, wenn Sitzungsaktionen eintreffen. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,l.kt)(o.Z,{value:"timed",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,l.kt)(o.Z,{value:"hidden",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,l.kt)(o.Z,{value:"customBanner",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,l.kt)(o.Z,{value:"customCheck",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}g.isMDXComponent=!0}}]);