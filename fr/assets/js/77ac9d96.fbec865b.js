(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),r=(n(0),n(411)),i=n(460),o=n(461),c={id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},u={unversionedId:"input/checkbox-input",id:"input/checkbox-input",isDocsHomePage:!1,title:"Checkbox Input",description:'Un \xe9l\xe9ment de saisie \xe0 cases \xe0 cocher. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/input/checkbox.md",slug:"/input/checkbox-input",permalink:"/fr/docs/input/checkbox-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/checkbox.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,sidebar_label:"Checkbox Input",sidebar:"docs",previous:{title:"Wikipedia",permalink:"/fr/docs/wikipedia"},next:{title:"Number Input",permalink:"/fr/docs/input/number-input"}},b=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],s={toc:b};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Un \xe9l\xe9ment de saisie \xe0 cases \xe0 cocher. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".'),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"bind")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": nom de la variable globale pour la valeur de la case \xe0 cocher \xe0 attribuer \xe0. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": valeur bool\xe9enne indiquant la valeur par d\xe9faut de la case \xe0 cocher. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": valeur de la case \xe0 cocher (pour le composant contr\xf4l\xe9). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indique si l'entr\xe9e est active ou non. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"inline")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indique si la case \xe0 cocher est affich\xe9e en ligne. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer lorsque la case est coch\xe9e. La fonction est appel\xe9e avec la valeur actuelle de la case \xe0 cocher. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"legend")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": texte affich\xe9 \xe0 c\xf4t\xe9 de la case \xe0 cocher. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tooltip")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": texte affich\xe9 lors du survol de la case \xe0 cocher. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tooltipPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": position de l'infobulle du bouton. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'right'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(r.b)("h2",{id:"exemples"},"Exemples"),Object(r.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Inline",value:"inline"},{label:"With Style",value:"withStyle"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<CheckboxInput legend="Take the logarithm" />\n'))),Object(r.b)(o.a,{value:"inline",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>Please click\n<CheckboxInput\n    inline defaultValue={false}\n/>\nto confirm that you will follow our netiquette.</p>\n"))),Object(r.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CheckboxInput\n    style={{ fontSize: 30, color: 'blue'}}\n    legend=\"Click to confirm\"\n    defaultValue={false}\n/>\n"))),Object(r.b)(o.a,{value:"withCallback",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<CheckboxInput\n    legend=\"Click to confirm...\"\n    onChange={( value ) => {\n        alert( 'New value: '+value );\n    }}\n/>\n")))))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),b=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||r;return n?l.a.createElement(m,o(o({ref:t},u),{},{components:n})):l.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},458:function(e,t,n){"use strict";var a=n(0),l=n(459);t.a=function(){const e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var a=n(0);const l=Object(a.createContext)(void 0);t.a=l},460:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(458),i=n(445),o=n(58),c=n.n(o);const u=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(r.a)(),[O,j]=Object(a.useState)(o),v=a.Children.toArray(e.children),h=[];if(null!=p){const e=m[p];null!=e&&e!==O&&s.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,n=h.indexOf(t),a=v[n].props.value;j(a),null!=p&&f(p,a)},y=e=>{var t;let n;switch(e.keyCode){case b:const t=h.indexOf(e.target)+1;n=h[t]||h[0];break;case u:const a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null===(t=n)||void 0===t||t.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},s.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:y,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function({children:e,hidden:t,className:n}){return l.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);