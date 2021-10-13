"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9620],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,i=e.block,s=e.defaultValue,m=e.values,c=e.groupId,p=e.className,d=a.Children.toArray(e.children),f=null!=m?m:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=r(),N=b.tabGroupChoices,g=b.setTabGroupChoices,h=(0,a.useState)(k),v=h[0],y=h[1],x=[];if(null!=c){var C=N[c];null!=C&&C!==v&&f.some((function(e){return e.value===C}))&&y(C)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;y(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,i,r,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.target)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},p)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:T,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},770911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],s={id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},m=void 0,c={unversionedId:"questions/free-text-question",id:"questions/free-text-question",isDocsHomePage:!1,title:"Free Text Question",description:"O component\u0103 ISLE pentru \xeentreb\u0103rile la care r\u0103spunsurile elevilor trebuie s\u0103 fie furnizate sub form\u0103 de text liber.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/questions/free-text.md",sourceDirName:"questions",slug:"/questions/free-text-question",permalink:"/ro/docs/questions/free-text-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/free-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"08.10.2021",frontMatter:{id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},sidebar:"docs",previous:{title:"h6",permalink:"/ro/docs/html/h6"},next:{title:"Image Question",permalink:"/ro/docs/questions/image-question"}},p=[{value:"Op\u021biuni",id:"op\u021biuni",children:[]},{value:"Exemple",id:"exemple",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"O component\u0103 ISLE pentru \xeentreb\u0103rile la care r\u0103spunsurile elevilor trebuie s\u0103 fie furnizate sub form\u0103 de text liber."),(0,r.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \xeentrebarea afi\u0219at\u0103 \xeen partea de sus a componentei de \xeentrebare cu text liber. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": indicii care ofer\u0103 \xeendrum\u0103ri privind modul de r\u0103spuns la \xeentrebare. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": plasarea indicilor (fie ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", sau ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se afi\u0219eaz\u0103 butoanele de feedback. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": un r\u0103spuns model la problem\u0103. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"instantSolution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": dac\u0103 se poate comuta afi\u0219area imediat\u0103 a modelului de r\u0103spuns. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul de r\xe2nduri ale c\xe2mpului de text pentru ca elevii s\u0103 \xee\u0219i scrie r\u0103spunsurile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se activeaz\u0103 sau nu chat-ul de grup pentru \xeentrebare. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 zona de text trebuie s\u0103 fie redimensionabil\u0103. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': text de tip "placeholder" afi\u0219at \xeenainte ca utilizatorul s\u0103 fi introdus vreun text. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se dezactiveaz\u0103 sau nu notific\u0103rile de trimitere. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": notificare afi\u0219at\u0103 atunci c\xe2nd persoana care \xeenva\u021b\u0103 \xee\u0219i trimite r\u0103spunsul pentru prima dat\u0103. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": notificare afi\u0219at\u0103 pentru toate trimiterile dup\u0103 prima trimitere. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 feedback-ul care include r\u0103spunsul corect trebuie afi\u0219at dup\u0103 ce cursan\u021bii \xee\u0219i trimit r\u0103spunsurile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxlength")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul maxim admis de caractere. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"2500"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": timpul p\xe2n\u0103 la care studen\u021bii ar trebui s\u0103 fie l\u0103sa\u021bi s\u0103 trimit\u0103 r\u0103spunsurile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul maxim de puncte acordate \xeen cadrul clasific\u0103rii. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": numele clasei. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat de fiecare dat\u0103 c\xe2nd se modific\u0103 valoarea zonei de text; prime\u0219te textul curent ca unic argument. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat atunci c\xe2nd utilizatorul trimite un r\u0103spuns; prime\u0219te textul trimis ca unic argument. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"exemple"},"Exemple"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Points for Grading",value:"withPointsForGrading"},{label:"No Feedback",value:"withoutFeedbackAndNotification"},{label:"Solution",value:"withSolution"},{label:"Hints",value:"withHints"},{label:"Placeholder",value:"placeholderText"},{label:"Due Date",value:"dueDate"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n/>\n'))),(0,r.kt)(o.Z,{value:"withPointsForGrading",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FreeTextQuestion \n    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} \n    rows={3} \n    points={15}\n/>\n"))),(0,r.kt)(o.Z,{value:"withoutFeedbackAndNotification",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3}\n    disableSubmitNotification \n    feedback={false}\n/>\n'))),(0,r.kt)(o.Z,{value:"withSolution",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n/>\n'))),(0,r.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}\n    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"\n/>\n'))),(0,r.kt)(o.Z,{value:"placeholderText",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={3} \n    solution="Winston Churchill" \n    placeholder="Think of an overweight politician with a big cigar in his mouth."\n/>\n'))),(0,r.kt)(o.Z,{value:"dueDate",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}\n    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);