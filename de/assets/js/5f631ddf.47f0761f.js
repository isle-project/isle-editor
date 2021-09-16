"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3286],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,f=p["".concat(s,".").concat(c)]||p[c]||d[c]||r;return n?i.createElement(f,l(l({ref:t},m),{},{components:n})):i.createElement(f,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var i=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(202784),a=n(79443);var r=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,m=e.values,d=e.groupId,p=e.className,c=i.Children.toArray(e.children),f=null!=m?m:c.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,k=r(),h=k.tabGroupChoices,b=k.setTabGroupChoices,N=(0,i.useState)(g),v=N[0],w=N[1],C=[];if(null!=d){var y=h[d];null!=y&&y!==v&&f.some((function(e){return e.value===y}))&&w(y)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),i=f[n].value;w(i),null!=d&&(b(d,i),setTimeout((function(){var e,n,i,a,r,l,o,u;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&a<=o&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=C.indexOf(e.target)+1;n=C[i]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,i.cloneElement)(c.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var i=(0,n(202784).createContext)(void 0);t.Z=i},997474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],u={id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},m=void 0,d={unversionedId:"questions/free-text-question",id:"questions/free-text-question",isDocsHomePage:!1,title:"Free Text Question",description:"Eine ISLE-Komponente f\xfcr Fragen, bei denen die Antworten der Sch\xfcler in Form von Freitext geliefert werden sollen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/questions/free-text.md",sourceDirName:"questions",slug:"/questions/free-text-question",permalink:"/de/docs/questions/free-text-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/free-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23.2.2021",frontMatter:{id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},sidebar:"docs",previous:{title:"h6",permalink:"/de/docs/html/h6"},next:{title:"Image Question",permalink:"/de/docs/questions/image-question"}},p=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],c={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Eine ISLE-Komponente f\xfcr Fragen, bei denen die Antworten der Sch\xfcler in Form von Freitext geliefert werden sollen."),(0,r.kt)("h2",{id:"optionen"},"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": die Frage, die oben in der Freitext-Fragenkomponente angezeigt wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": Hinweise, die bei der Beantwortung der Frage helfen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Platzierung der Hinweise (entweder ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", oder ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Feedback-Tasten angezeigt werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": eine Musterl\xf6sung f\xfcr das Problem. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"instantSolution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ob man die Anzeige der Modellantwort sofort umschalten kann. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Anzahl der Zeilen des Textfelds, in das die Teilnehmer ihre Antworten eingeben k\xf6nnen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Gruppenchat f\xfcr die Frage aktiviert werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Textbereich in der Gr\xf6\xdfe ver\xe4nderbar sein soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Platzhaltertext wird angezeigt, bevor der Benutzer einen Text eingegeben hat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob \xdcbermittlungsbenachrichtigungen deaktiviert werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Benachrichtigung, die angezeigt wird, wenn der Lerner zum ersten Mal seine Antwort absendet. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Benachrichtigung f\xfcr alle \xdcbertragungen nach der ersten angezeigt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob ein Feedback einschlie\xdflich der richtigen Antwort angezeigt werden soll, nachdem die Lerner ihre Antworten abgeschickt haben. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxlength")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maximal zul\xe4ssige Anzahl von Zeichen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"2500"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Kennung der Sprachsteuerung. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": Zeit, bis die Studenten ihre Antworten einreichen d\xfcrfen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der jedes Mal aufgerufen wird, wenn sich der Wert des Textbereichs \xe4ndert; erh\xe4lt den aktuellen Text als einziges Argument. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn der Benutzer eine Antwort abschickt; erh\xe4lt den abgeschickten Text als einziges Argument. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Points for Grading",value:"withPointsForGrading"},{label:"No Feedback",value:"withoutFeedbackAndNotification"},{label:"Solution",value:"withSolution"},{label:"Hints",value:"withHints"},{label:"Placeholder",value:"placeholderText"},{label:"Due Date",value:"dueDate"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n/>\n'))),(0,r.kt)(o.Z,{value:"withPointsForGrading",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FreeTextQuestion \n    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} \n    rows={3} \n    points={15}\n/>\n"))),(0,r.kt)(o.Z,{value:"withoutFeedbackAndNotification",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3}\n    disableSubmitNotification \n    feedback={false}\n/>\n'))),(0,r.kt)(o.Z,{value:"withSolution",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n/>\n'))),(0,r.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}\n    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"\n/>\n'))),(0,r.kt)(o.Z,{value:"placeholderText",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={3} \n    solution="Winston Churchill" \n    placeholder="Think of an overweight politician with a big cigar in his mouth."\n/>\n'))),(0,r.kt)(o.Z,{value:"dueDate",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}\n    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);