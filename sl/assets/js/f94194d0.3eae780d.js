"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4791],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var i=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(202784),a=n(79443);var r=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,p=e.values,c=e.groupId,m=e.className,d=i.Children.toArray(e.children),k=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),g=v.tabGroupChoices,b=v.setTabGroupChoices,N=(0,i.useState)(f),h=N[0],y=N[1],C=[];if(null!=c){var j=g[c];null!=j&&j!==h&&k.some((function(e){return e.value===j}))&&y(j)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),i=k[n].value;y(i),null!=c&&(b(c,i),setTimeout((function(){var e,n,i,a,r,o,l,u;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&r<=u&&a<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=C.indexOf(e.target)+1;n=C[i]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},k.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,i.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var i=(0,n(202784).createContext)(void 0);t.Z=i},558913:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),o=n(855064),l=n(358215),s=["components"],u={id:"select-question",title:"Select Question",sidebar_label:"Select Question"},p=void 0,c={unversionedId:"questions/select-question",id:"questions/select-question",isDocsHomePage:!1,title:"Select Question",description:"Izbrana komponenta vpra\u0161anja.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/questions/select.md",sourceDirName:"questions",slug:"/questions/select-question",permalink:"/sl/docs/questions/select-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"select-question",title:"Select Question",sidebar_label:"Select Question"},sidebar:"docs",previous:{title:"Range Question",permalink:"/sl/docs/questions/range-question"},next:{title:"Select Question Matrix",permalink:"/sl/docs/questions/select-question-matrix"}},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Primeri",id:"primeri",children:[]}],d={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Izbrana komponenta vpra\u0161anja."),(0,r.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": vpra\u0161anje, pri katerem mora u\u010denec izbrati eno od razpolo\u017eljivih mo\u017enosti odgovora.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"options")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": razpolo\u017eljive mo\u017enosti odgovorov, med katerimi lahko u\u010denec izbere. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": indeks elementa re\u0161itve v ",(0,r.kt)("inlineCode",{parentName:"li"},"options"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"preselected")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": indeks vnaprej izbrane mo\u017enosti odgovora. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali se komponenta prika\u017ee v vrstici ali ne.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": umestitev namigov (",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right")," ali ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": napotki, kako odgovoriti na vpra\u0161anje.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali se prika\u017eejo gumbi za povratne informacije.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali naj ima element integriran klepet.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ozna\u010duje, ali naj se po tem, ko u\u010denci po\u0161ljejo svoje odgovore, prika\u017ee povratna informacija, vklju\u010dno s pravilnim odgovorom.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": sporo\u010dilo, ki se prika\u017ee, ko u\u010denec izbere napa\u010den odgovor.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Not quite, try again!'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": sporo\u010dilo, ki se prika\u017ee, ko u\u010denec izbere pravilen odgovor.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'That's the correct answer!'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": najve\u010dje \u0161tevilo to\u010dk, ki se dodelijo pri razvr\u0161\u010danju. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slogi CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": povratni klic, ki se spro\u017ei po akciji submit. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": povratni klic, ki se spro\u017ei ob oddaji odgovora; kot prvi parameter ima ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", ki ozna\u010duje, ali je bil odgovor pravilen (\u010de velja, sicer ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"), kot drugi parameter pa posredovani odgovor.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"primeri"},"Primeri"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Inline",value:"inline"},{label:"With Hints",value:"withHints"},{label:"Submit Function Hints",value:"submitFunction"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n"))),(0,r.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}\n/>\n"))),(0,r.kt)(l.Z,{value:"inline",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"The usual t-test is:\n<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    inline\n/> ... so you can us it in the midst of a longer paragraph\n"))),(0,r.kt)(l.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SelectQuestion\n    question="White is "\n    solution={1}\n    options={[\n        \'a primary color\',\n        \'not a primary color\'\n    ]}\n    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"submitFunction",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"Select the primary color\"\n    solution={2}\n    options={[\n        'orange',\n        'white',\n        'red'\n    ]}\n    onSubmit={(result) => {\n        switch ( result ) {\n            case 'orange':\n                alert( 'No, orange is a mix of yellow and red.' );\n            break;\n            case 'white':\n                alert( 'White does not count as a color.' );\n            break;\n            case 'red':\n                alert( 'That is correct.' );\n            break;\n        }\n    }}\n    provideFeedback={false}\n/> \n")))))}k.isMDXComponent=!0},386010:function(e,t,n){function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);