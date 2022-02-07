"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2299],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(487462),r=t(202784),l=t(972389),i=t(275773),o=t(386010),s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,d=e.block,m=e.defaultValue,p=e.values,c=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),N=h.tabGroupChoices,y=h.setTabGroupChoices,C=(0,r.useState)(b),w=C[0],T=C[1],D=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=N[c];null!=E&&E!==w&&v.some((function(e){return e.value===E}))&&T(E)}var O=function(e){var n=e.currentTarget,t=D.indexOf(n),a=v[t].value;a!==w&&(x(n),T(a),null!=c&&y(c,a))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;t=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;t=D[r]||D[D.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return D.push(e)},onKeyDown:j,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},787432:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),i=t(409877),o=t(358215),s=["components"],u={id:"range-question",title:"Range Question",sidebar_label:"Range Question"},d=void 0,m={unversionedId:"questions/range-question",id:"questions/range-question",title:"Range Question",description:"En sp\xf8rgeskemakomponent, der beder eleverne om at angive et nedre og \xf8vre endepunkt.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/questions/range.md",sourceDirName:"questions",slug:"/questions/range-question",permalink:"/da/docs/questions/range-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/range.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.6.2021",frontMatter:{id:"range-question",title:"Range Question",sidebar_label:"Range Question"},sidebar:"docs",previous:{title:"Quiz",permalink:"/da/docs/questions/quiz"},next:{title:"Select Question",permalink:"/da/docs/questions/select-question"}},p=[{value:"Indstillinger",id:"indstillinger",children:[],level:2},{value:"Eksempler",id:"eksempler",children:[],level:2}],c={toc:p};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"En sp\xf8rgeskemakomponent, der beder eleverne om at angive et nedre og \xf8vre endepunkt."),(0,l.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": viste sp\xf8rgsm\xe5l. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<number>"),": et array med to elementer, der indeholder endepunkterne for det korrekte omr\xe5de. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": placeringen af vejledningerne (enten ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right")," eller ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": tips, der giver vejledning om, hvordan sp\xf8rgsm\xe5let skal besvares. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"labels")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),': et array med to elementer af andre brugerdefinerede etiketter end "Lower" og "Upper". Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises feedback-knapper. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om elementet skal have en integreret chat. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"digits")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": antal cifre, der skal stemme overens mellem l\xf8sningen og det af brugeren angivne svar. Hvis det ikke er angivet eller er sat til nul, kontrollerer komponenten, at der er streng lighed. Hvis den er sat til 0, kontrolleres der for heltalslighed.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"max")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": maksimal indgangsv\xe6rdi. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"min")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": mindste indgangsv\xe6rdi. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": angiver, om der skal vises feedback, herunder det korrekte svar, efter at eleverne har indsendt deres svar. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om man kan indsende flere svar. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": den tid, der skal g\xe5, f\xf8r de studerende kan afgive svar. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": det maksimale antal point, der kan tildeles ved bed\xf8mmelsen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChangeLower")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback, der udl\xf8ses, n\xe5r den nedre gr\xe6nse \xe6ndres af brugeren. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChangeLower() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChangeUpper")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback, der udl\xf8ses, n\xe5r den \xf8vre gr\xe6nse \xe6ndres af brugeren. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChangeUpper() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback, der p\xe5kaldes, n\xe5r svaret er indsendt; har som f\xf8rste parameter en ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),", der angiver, om svaret blev besvaret korrekt (hvis det er relevant, ellers ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"), og det indsendte svar som anden parameter. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"eksempler"},"Eksempler"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"With Points and Feedback",value:"withPoints"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontSize: 17, }}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,l.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n/>\n"))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,l.kt)(o.Z,{value:"withPoints",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n    points={20}\n    onSubmit={(res) => {\n     if (res === true) {\n      alert('Great, you have received 20 points');\n     }\n     else alert('sorry, this answer was wrong');\n    }}\n/>\n")))))}k.isMDXComponent=!0}}]);