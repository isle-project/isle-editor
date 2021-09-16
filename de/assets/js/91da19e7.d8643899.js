"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2108],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(202784),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,d=e.values,c=e.groupId,m=e.className,p=r.Children.toArray(e.children),f=null!=d?d:p.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),k=b.tabGroupChoices,h=b.setTabGroupChoices,v=(0,r.useState)(g),N=v[0],y=v[1],w=[];if(null!=c){var C=k[c];null!=C&&C!==N&&f.some((function(e){return e.value===C}))&&y(C)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;y(r),null!=c&&(h(c,r),setTimeout((function(){var e,n,r,a,i,l,o,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:z,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(p.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},335804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],u={id:"gate",title:"Gate",sidebar_label:"Gate"},d=void 0,c={unversionedId:"gate",id:"gate",isDocsHomePage:!1,title:"Gate",description:"Eine ISLE-Komponente, die es erlaubt, ihre Kinder nur f\xfcr reservierte Zielgruppen anzuzeigen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/de/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1631799799,formattedLastUpdatedAt:"16.9.2021",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/de/docs/feedback"},next:{title:"Text Editor",permalink:"/de/docs/text-editor"}},m=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eine ISLE-Komponente, die es erlaubt, ihre Kinder nur f\xfcr reservierte Zielgruppen anzuzeigen."),(0,i.kt)("h2",{id:"optionen"},"Optionen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"user")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der Gated Content den Benutzern angezeigt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notUser")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der gesperrte Inhalt ",(0,i.kt)("strong",{parentName:"li"},"nicht")," f\xfcr Benutzer angezeigt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn eingestellt, wird der gesch\xfctzte Inhalt den im Kurs eingeschriebenen Teilnehmern angezeigt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der gesperrte Inhalt den im Kurs eingeschriebenen Teilnehmern ",(0,i.kt)("strong",{parentName:"li"},"nicht")," angezeigt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"owner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn eingestellt, wird der gesch\xfctzte Inhalt dem Besitzer des Kurses (normalerweise dem Kursleiter) angezeigt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn gesetzt, wird der gesch\xfctzte Inhalt dem Besitzer des Kurses (normalerweise dem Kursleiter) ",(0,i.kt)("strong",{parentName:"li"},"nicht")," angezeigt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"after")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": Zeit, nach der der Inhalt des Gates sichtbar werden soll. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": Zeit, bis der Inhalt des Gates sichtbar bleiben soll. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"banner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),": eine benutzerdefinierte Nachricht, die Besuchern angezeigt wird, f\xfcr die die Kinder des Tores nicht sichtbar sind, anstelle der Standardnachricht. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn ein Tor deaktiviert ist, wird das Banner angezeigt, egal was. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Gate-Inhalt im Pr\xe4sentationsmodus angezeigt werden soll, wenn das Gate f\xfcr den ",(0,i.kt)("inlineCode",{parentName:"li"},"Eigent\xfcmer")," sichtbar ist. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"check")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': Callback-Funktion, die ein "Boolean" zur\xfcckgibt, das angibt, ob Gate untergeordnete Komponenten anzeigen soll; die Funktion wird immer dann aufgerufen, wenn Sitzungsaktionen eintreffen. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"timed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"hidden",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"customBanner",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"customCheck",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);