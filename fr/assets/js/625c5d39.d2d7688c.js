"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2689],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},174e3:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=["components"],o={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},s=void 0,u={unversionedId:"sketchpad",id:"sketchpad",isDocsHomePage:!1,title:"Sketchpad",description:"Un carnet de croquis pour la prise de notes sur les diapositives des conf\xe9rences ou les pages vides.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/fr/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"08/10/2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/fr/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/fr/docs/lesson-submit"}},p=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un carnet de croquis pour la prise de notes sur les diapositives des conf\xe9rences ou les pages vides."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'\xe9diteur doit enregistrer le texte actuel dans la m\xe9moire locale du navigateur \xe0 un intervalle de temps donn\xe9. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage ou non des boutons de r\xe9troaction sur chaque diapositive. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": temps entre les sauvegardes automatiques. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de dessin et de saisie de texte doivent \xeatre masqu\xe9s. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de navigation entre les pages doivent \xeatre masqu\xe9s. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de sauvegarde doivent \xeatre cach\xe9s. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de transmission des actions de l'utilisateur doivent \xeatre masqu\xe9s. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": taille du pinceau pour peindre. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": la couleur du pinceau et des textes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": largeur de l'\xe9l\xe9ment de la toile (en px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": hauteur de l'\xe9l\xe9ment de la toile (en px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si la toile doit \xeatre automatiquement redimensionn\xe9e \xe0 la largeur et \xe0 la hauteur de la fen\xeatre du navigateur. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fill")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": si \"horizontal\", remplir tout l'espace horizontal disponible lors du dessin d'un PDF ; si \"vertical\", tout l'espace vertical est utilis\xe9 pour \xe9viter le d\xe9bordement de l'axe des y. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": l'opportunit\xe9 de rendre l'\xe9l\xe9ment en lecture seule et d'interdire le dessin sur le carnet de croquis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": famille de polices. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": taille de la police. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nodes")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),': les composants \xe0 rendre sur les diapositives sp\xe9cifi\xe9es ; les "cl\xe9s" doivent correspondre aux num\xe9ros de page, les "valeurs" aux composants. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"noPages")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": nombre initial de pages. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pdf")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": lien vers le fichier PDF pour les fonds de page cuits. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": afficher le tutoriel pour le sketchpad au d\xe9marrage. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons doivent \xeatre masqu\xe9s lorsque la largeur de la barre d'outils n'est pas suffisante (sinon, une nouvelle ligne sera lanc\xe9e). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": si les actions du propri\xe9taire doivent \xeatre transmises aux autres utilisateurs en temps r\xe9el. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si toutes les actions de l'utilisateur sont transmises \xe0 tous les autres. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": rappel invoqu\xe9 \xe0 chaque fois qu'un nouvel \xe9l\xe9ment de ligne est trac\xe9. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"exemples"},"Exemples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}m.isMDXComponent=!0}}]);