"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91637],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",m=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&k(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:m,defaultValue:b,values:f,groupId:v,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),O=(0,i.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(n=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[C,E]=(0,a.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==C&&h.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==C&&(x(t),E(a),null!=v&&j(v,String(a)))},S=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:S,onFocus:P,onClick:P},n),i={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":C===e})},p(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return a.createElement(g,y({key:String(t)},e))}},138075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return y}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&p(e,n,t[n]);return e};const b={id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},f=void 0,v={unversionedId:"lesson-submit",id:"lesson-submit",title:"Lesson Submit",description:"Un buton care va fi afi\u0219at la sf\xe2r\u0219itul unei lec\u021bii pentru ca elevii s\u0103 fac\u0103 clic pe el. \xcen mod implicit, un mesaj de confirmare a finaliz\u0103rii lec\u021biei este trimis la adresa lor de e-mail.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/lesson-submit.md",sourceDirName:".",slug:"/lesson-submit",permalink:"/ro/docs/lesson-submit",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/lesson-submit.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1651267477,formattedLastUpdatedAt:"29 apr. 2022",frontMatter:{id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},sidebar:"docs",previous:{title:"Sketchpad",permalink:"/ro/docs/sketchpad"},next:{title:"Video Lecture",permalink:"/ro/docs/video-lecture"}},k={},y=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],g={toc:y};function h(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),p),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Un buton care va fi afi\u0219at la sf\xe2r\u0219itul unei lec\u021bii pentru ca elevii s\u0103 fac\u0103 clic pe el. \xcen mod implicit, un mesaj de confirmare a finaliz\u0103rii lec\u021biei este trimis la adresa lor de e-mail."),(0,a.kt)("h2",d({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"coverage")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": lista elementelor de identificare care trebuie prezentate \u0219i incluse \xeen documentul de r\u0103spuns. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"label")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": eticheta butonului de trimitere. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"message")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": mesaj pentru e-mail de confirmare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requireLogin")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 este necesar ca utilizatorul s\u0103 fie autentificat pentru ca butonul s\u0103 fie activ (pentru utilizatorii anonimi, nu se trimite niciun e-mail de confirmare). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sendConfirmationEmail")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se trimite un e-mail de confirmare la trimiterea lec\u021biei. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": numele clasei. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat atunci c\xe2nd se face clic pe butonul de trimitere. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,a.kt)("h2",d({},{id:"exemple"}),"Exemple"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Label",value:"customLabel"},{label:"Email Feedback",value:"emailFeedback"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LessonSubmit />\n"))),(0,a.kt)(l.Z,{value:"customLabel",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<LessonSubmit label="Click to submit" />\n'))),(0,a.kt)(l.Z,{value:"withEmail",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LessonSubmit \n    style={{ outline: '4px solid black'}}\n    message={`\n    Hi,\n    I am very glad that you solved this lesson. Congratulations! \n    It was a sophisticated one.\n    If you want some help how to use ISLE, have a look a \n    [this site](https://isledocs.com/docs/)\n    \n    Best\n    The ISLE team\n    `}\n    label=\"Click to submit\" />\n"))),(0,a.kt)(l.Z,{value:"withCallback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LessonSubmit \n    requireLogin={false}\n    onClick={() => {\n        alert( 'The Button has been clicked...' );\n    }}\n    label=\"Click to submit\" />\n")))))}h.isMDXComponent=!0}}]);