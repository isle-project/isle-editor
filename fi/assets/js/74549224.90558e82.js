"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4718],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=i,d=c["".concat(s,".").concat(k)]||c[k]||p[k]||r;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,i=e.block,u=e.defaultValue,m=e.values,p=e.groupId,c=e.className,k=a.Children.toArray(e.children),d=null!=m?m:k.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),y=v.tabGroupChoices,b=v.setTabGroupChoices,h=(0,a.useState)(f),N=h[0],g=h[1],j=[];if(null!=p){var C=y[p];null!=C&&C!==N&&d.some((function(e){return e.value===C}))&&g(C)}var O=function(e){var t=e.currentTarget,n=j.indexOf(t),a=d[n].value;g(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,i,r,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&r<=u&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case"ArrowLeft":var i=j.indexOf(e.target)-1;n=j[i]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},c)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},86129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),o=n(855064),l=n(358215),s=["components"],u={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},m=void 0,p={unversionedId:"questions/order-question",id:"questions/order-question",isDocsHomePage:!1,title:"Order Question",description:"J\xe4rjestyskysymyskomponentti, jossa oppilasta pyydet\xe4\xe4n saattamaan kokoelma elementtej\xe4 oikeaan j\xe4rjestykseen.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/questions/order.md",sourceDirName:"questions",slug:"/questions/order-question",permalink:"/fi/docs/questions/order-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.6.2021",frontMatter:{id:"order-question",title:"Order Question",sidebar_label:"Order Question"},sidebar:"docs",previous:{title:"Number Question",permalink:"/fi/docs/questions/number-question"},next:{title:"Question Form",permalink:"/fi/docs/questions/question-form"}},c=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[]},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[]}],k={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"J\xe4rjestyskysymyskomponentti, jossa oppilasta pyydet\xe4\xe4n saattamaan kokoelma elementtej\xe4 oikeaan j\xe4rjestykseen."),(0,r.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),': kysymys, jossa opiskelijan on asetettava k\xe4ytett\xe4viss\xe4 olevat "vaihtoehdot" oikeaan j\xe4rjestykseen.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"options")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": joukko tekstej\xe4, jotka oppilaan on saatettava oikeaan j\xe4rjestykseen (oletetaan, ett\xe4 ne ovat annetussa j\xe4rjestyksess\xe4).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, n\xe4ytet\xe4\xe4nk\xf6 ilmoitus siit\xe4, onko vastaus oikein vai ei.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": vihjeiden sijainti (joko ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right")," tai ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": vihjeit\xe4, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ohjaa, n\xe4ytet\xe4\xe4nk\xf6 palautepainikkeet. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, onko elementill\xe4 integroitu chat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": viesti, joka n\xe4ytet\xe4\xe4n, kun oppilas antaa v\xe4\xe4r\xe4n vastauksen.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": viesti, joka n\xe4ytet\xe4\xe4n, kun oppilas l\xe4hett\xe4\xe4 oikean vastauksen.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, poistetaanko l\xe4hetysilmoitukset k\xe4yt\xf6st\xe4. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": luokittelussa annettavien pisteiden enimm\xe4ism\xe4\xe4r\xe4. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, joka k\xe4ynnistyy elementin raahaamisen j\xe4lkeen; sill\xe4 on kaksi parametria: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", joka ilmaisee, onko elementit sijoitettu oikeaan j\xe4rjestykseen, ja ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),", jossa on nykyinen j\xe4rjestys.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, joka k\xe4ynnistet\xe4\xe4n, kun vastaus on l\xe4hetetty; ainoana parametrina on ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", joka kertoo, onko elementit asetettu oikeaan j\xe4rjestykseen.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"hints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),(0,r.kt)(l.Z,{value:"submitFunction",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),(0,r.kt)(l.Z,{value:"withGradingAndFeedback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}d.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);