"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1308],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,d=e.values,c=e.groupId,p=e.className,m=a.Children.toArray(e.children),f=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,y=i(),b=y.tabGroupChoices,v=y.setTabGroupChoices,g=(0,a.useState)(k),w=g[0],h=g[1],N=[];if(null!=c){var x=b[c];null!=x&&x!==w&&f.some((function(e){return e.value===x}))&&h(x)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=f[n].value;h(a),null!=c&&(v(c,a),setTimeout((function(){var e,n,a,r,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},804253:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),o=n(855064),l=n(358215),u=["components"],s={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},d=void 0,c={unversionedId:"text-editor",id:"text-editor",isDocsHomePage:!1,title:"Text Editor",description:"Edytor tekstowy do pisania notatek lub raport\xf3w. Obs\u0142uguje eksport notatek w postaci plik\xf3w HTML lub PDF, a tak\u017ce automatyczne przesy\u0142anie ich na serwer ISLE.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/text-editor.md",sourceDirName:".",slug:"/text-editor",permalink:"/pl/docs/text-editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117608,formattedLastUpdatedAt:"23.02.2021",frontMatter:{id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},sidebar:"docs",previous:{title:"Gate",permalink:"/pl/docs/gate"},next:{title:"Sketchpad",permalink:"/pl/docs/sketchpad"}},p=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Edytor tekstowy do pisania notatek lub raport\xf3w. Obs\u0142uguje eksport notatek w postaci plik\xf3w HTML lub PDF, a tak\u017ce automatyczne przesy\u0142anie ich na serwer ISLE."),(0,i.kt)("h2",{id:"opcje"},"Opcje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowSubmissions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy studenci mog\u0105 przesy\u0142a\u0107 swoje raporty na serwer. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"canLoadHTML")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": okre\u015bla, czy ma by\u0107 wy\u015bwietlony przycisk do wczytania zapisanego pliku HTML do edytora. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": domy\u015blny tekst edytora. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": kontroluje tryb edycji tekstu (albo ",(0,i.kt)("inlineCode",{parentName:"li"},"individual")," dla dokumentu osobistego, ",(0,i.kt)("inlineCode",{parentName:"li"},"group")," dla dokumentu dla grup, ",(0,i.kt)("inlineCode",{parentName:"li"},"collaborative")," dla pojedynczego dokumentu dla wszystkich, lub ",(0,i.kt)("inlineCode",{parentName:"li"},"cohort")," dla dokumentu dla kohorty). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"resetModal")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": obiekt do dostosowania modalu do resetowania dokumentu (zazwyczaj nie powinien by\u0107 zmieniany). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sendSubmissionEmails")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wysy\u0142a\u0107 emaile z potwierdzeniem w formacie PDF/HTML przy wysy\u0142ce. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"voiceTimeout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": czas w milisekundach po w\u0142o\u017ceniu fragmentu nagranego wej\u015bcia g\u0142osowego. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Default Value",value:"defaultValue"},{label:"Mode",value:"mode"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  />\n"))),(0,i.kt)(l.Z,{value:"defaultValue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor defaultValue={`# Welcome!\n\nThis is a text that uses **markdown**\n\n## Second Heading Level\n\n[Wikipedia Link](https://https://www.wikipedia.org/).\n`} />\n"))),(0,i.kt)(l.Z,{value:"mode",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." \nmode="individual" />\n'))),(0,i.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor  \n  defaultValue=\"[Generate CSS-Gradients Online!](https://cssgradient.io/)\"\n  style={{ \n    background: 'green',\n    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' \n  }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);