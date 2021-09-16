"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2379],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,k=m["".concat(u,".").concat(c)]||m[c]||p[c]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(202784),i=t(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(386010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,i=e.block,s=e.defaultValue,d=e.values,p=e.groupId,m=e.className,c=a.Children.toArray(e.children),k=null!=d?d:c.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(n=c.find((function(e){return e.props.default})))?void 0:n.props.value,f=r(),h=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,a.useState)(v),N=g[0],y=g[1],C=[];if(null!=p){var w=h[p];null!=w&&w!==N&&k.some((function(e){return e.value===w}))&&y(w)}var z=function(e){var n=e.currentTarget,t=C.indexOf(n),a=k[t].value;y(a),null!=p&&(b(p,a),setTimeout((function(){var e,t,a,i,r,o,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,s=o.innerWidth,t>=0&&r<=s&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;t=C[a]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.target)-1;t=C[i]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},k.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":N===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:z,onClick:z},null!=t?t:n)}))),t?(0,a.cloneElement)(c.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},79443:function(e,n,t){var a=(0,t(202784).createContext)(void 0);n.Z=a},341070:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=t(487462),i=t(263366),r=(t(202784),t(603905)),o=t(855064),l=t(358215),u=["components"],s={id:"range-question",title:"Range Question",sidebar_label:"Range Question"},d=void 0,p={unversionedId:"questions/range-question",id:"questions/range-question",isDocsHomePage:!1,title:"Range Question",description:"Slo\u017eka s ot\xe1zkou na rozsah, kter\xe1 od student\u016f vy\u017eaduje, aby uvedli doln\xed a horn\xed koncovou hodnotu.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/questions/range.md",sourceDirName:"questions",slug:"/questions/range-question",permalink:"/cs/docs/questions/range-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/range.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"range-question",title:"Range Question",sidebar_label:"Range Question"},sidebar:"docs",previous:{title:"Quiz",permalink:"/cs/docs/questions/quiz"},next:{title:"Select Question",permalink:"/cs/docs/questions/select-question"}},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[]}],c={toc:m};function k(e){var n=e.components,t=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Slo\u017eka s ot\xe1zkou na rozsah, kter\xe1 od student\u016f vy\u017eaduje, aby uvedli doln\xed a horn\xed koncovou hodnotu."),(0,r.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": zobrazen\xe1 ot\xe1zka. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<number>"),": dvouprvkov\xe9 pole obsahuj\xedc\xed koncov\xe9 body spr\xe1vn\xe9ho rozsahu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": um\xedst\u011bn\xed n\xe1pov\u011bdy (bu\u010f ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", nebo ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": n\xe1pov\u011bdy, jak odpov\u011bd\u011bt na ot\xe1zku.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"labels")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),': dvouprvkov\xe9 pole vlastn\xedch \u0161t\xedtk\u016f jin\xfdch ne\u017e "Lower" a "Upper".. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se maj\xed zobrazovat tla\u010d\xedtka zp\u011btn\xe9 vazby. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda m\xe1 m\xedt prvek integrovan\xfd chat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"digits")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det \u010d\xedslic, kter\xe9 mus\xed odpov\xeddat \u0159e\u0161en\xed a odpov\u011bdi zadan\xe9 u\u017eivatelem. Pokud nen\xed zad\xe1no nebo je nastaveno na null, komponenta kontroluje striktn\xed rovnost. Pokud je nastavena na 0, kontroluje se rovnost cel\xfdch \u010d\xedsel.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed vstupn\xed hodnota. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"min")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": minim\xe1ln\xed vstupn\xed hodnota. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se m\xe1 po odesl\xe1n\xed odpov\u011bdi zobrazit zp\u011btn\xe1 vazba v\u010detn\u011b spr\xe1vn\xe9 odpov\u011bdi.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda lze odeslat v\xedce odpov\u011bd\xed.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": \u010das, do kdy by studenti m\u011bli m\xedt mo\u017enost odevzdat odpov\u011bdi. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed po\u010det bod\u016f ud\u011blen\xfdch p\u0159i klasifikaci. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChangeLower")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed spu\u0161t\u011bn\xe9 po zm\u011bn\u011b doln\xed meze u\u017eivatelem. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChangeLower() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChangeUpper")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed spu\u0161t\u011bn\xe9 po zm\u011bn\u011b horn\xed hranice u\u017eivatelem. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChangeUpper() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 po odesl\xe1n\xed odpov\u011bdi; jako prvn\xed parametr m\xe1 ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ud\xe1vaj\xedc\xed, zda byla odpov\u011b\u010f spr\xe1vn\u011b zodpov\u011bzena (pokud ano, jinak ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"), a jako druh\xfd parametr zadanou odpov\u011b\u010f.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"With Points and Feedback",value:"withPoints"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontSize: 17, }}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,r.kt)(l.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n/>\n"))),(0,r.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,r.kt)(l.Z,{value:"withPoints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n    points={20}\n    onSubmit={(res) => {\n     if (res === true) {\n      alert('Great, you have received 20 points');\n     }\n     else alert('sorry, this answer was wrong');\n    }}\n/>\n")))))}k.isMDXComponent=!0},386010:function(e,n,t){function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);