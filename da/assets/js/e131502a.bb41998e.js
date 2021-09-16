"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2299],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),c=a,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){var r=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(202784),a=t(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,a=e.block,u=e.defaultValue,d=e.values,m=e.groupId,p=e.className,c=r.Children.toArray(e.children),k=null!=d?d:c.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(n=c.find((function(e){return e.props.default})))?void 0:n.props.value,g=i(),v=g.tabGroupChoices,b=g.setTabGroupChoices,h=(0,r.useState)(f),N=h[0],y=h[1],C=[];if(null!=m){var w=v[m];null!=w&&w!==N&&k.some((function(e){return e.value===w}))&&y(w)}var x=function(e){var n=e.currentTarget,t=C.indexOf(n),r=k[t].value;y(r),null!=m&&(b(m,r),setTimeout((function(){var e,t,r,a,i,l,o,u;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,t>=0&&i<=u&&a<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},p)},k.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:x,onClick:x},null!=t?t:n)}))),t?(0,r.cloneElement)(c.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},79443:function(e,n,t){var r=(0,t(202784).createContext)(void 0);n.Z=r},787432:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=t(855064),o=t(358215),s=["components"],u={id:"range-question",title:"Range Question",sidebar_label:"Range Question"},d=void 0,m={unversionedId:"questions/range-question",id:"questions/range-question",isDocsHomePage:!1,title:"Range Question",description:"En sp\xf8rgeskemakomponent, der beder eleverne om at angive et nedre og \xf8vre endepunkt.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/questions/range.md",sourceDirName:"questions",slug:"/questions/range-question",permalink:"/da/docs/questions/range-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/range.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.6.2021",frontMatter:{id:"range-question",title:"Range Question",sidebar_label:"Range Question"},sidebar:"docs",previous:{title:"Quiz",permalink:"/da/docs/questions/quiz"},next:{title:"Select Question",permalink:"/da/docs/questions/select-question"}},p=[{value:"Indstillinger",id:"indstillinger",children:[]},{value:"Eksempler",id:"eksempler",children:[]}],c={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"En sp\xf8rgeskemakomponent, der beder eleverne om at angive et nedre og \xf8vre endepunkt."),(0,i.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": viste sp\xf8rgsm\xe5l. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<number>"),": et array med to elementer, der indeholder endepunkterne for det korrekte omr\xe5de. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": placeringen af vejledningerne (enten ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right")," eller ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": tips, der giver vejledning om, hvordan sp\xf8rgsm\xe5let skal besvares. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"labels")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),': et array med to elementer af andre brugerdefinerede etiketter end "Lower" og "Upper". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises feedback-knapper. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om elementet skal have en integreret chat. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"digits")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": antal cifre, der skal stemme overens mellem l\xf8sningen og det af brugeren angivne svar. Hvis det ikke er angivet eller er sat til nul, kontrollerer komponenten, at der er streng lighed. Hvis den er sat til 0, kontrolleres der for heltalslighed.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": maksimal indgangsv\xe6rdi. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": mindste indgangsv\xe6rdi. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": angiver, om der skal vises feedback, herunder det korrekte svar, efter at eleverne har indsendt deres svar. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om man kan indsende flere svar. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": den tid, der skal g\xe5, f\xf8r de studerende kan afgive svar. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": det maksimale antal point, der kan tildeles ved bed\xf8mmelsen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChangeLower")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, der udl\xf8ses, n\xe5r den nedre gr\xe6nse \xe6ndres af brugeren. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChangeLower() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChangeUpper")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, der udl\xf8ses, n\xe5r den \xf8vre gr\xe6nse \xe6ndres af brugeren. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChangeUpper() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, der p\xe5kaldes, n\xe5r svaret er indsendt; har som f\xf8rste parameter en ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", der angiver, om svaret blev besvaret korrekt (hvis det er relevant, ellers ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"), og det indsendte svar som anden parameter. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"eksempler"},"Eksempler"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"With Points and Feedback",value:"withPoints"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontSize: 17, }}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,i.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n/>\n"))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,i.kt)(o.Z,{value:"withPoints",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n    points={20}\n    onSubmit={(res) => {\n     if (res === true) {\n      alert('Great, you have received 20 points');\n     }\n     else alert('sorry, this answer was wrong');\n    }}\n/>\n")))))}k.isMDXComponent=!0},386010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);