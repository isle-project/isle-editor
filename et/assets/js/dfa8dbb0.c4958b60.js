"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2857],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,k=c["".concat(o,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},914860:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],u={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},o=void 0,s={unversionedId:"number-survey",id:"number-survey",title:"Number Survey",description:"K\xfcsitluskomponent, mille raames v\xf5ib \xf5ppej\xf5ud koguda \xfcli\xf5pilastelt reaalajas numbrilisi k\xfcsitlusandmeid.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/number-survey.md",sourceDirName:".",slug:"/number-survey",permalink:"/et/docs/number-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626808020,formattedLastUpdatedAt:"20.7.2021",frontMatter:{id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/et/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/et/docs/proportions-survey"}},m=[{value:"Valikud",id:"valikud",children:[],level:2},{value:"N\xe4ited",id:"n\xe4ited",children:[],level:2}],p={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"K\xfcsitluskomponent, mille raames v\xf5ib \xf5ppej\xf5ud koguda \xfcli\xf5pilastelt reaalajas numbrilisi k\xfcsitlusandmeid."),(0,a.kt)("h2",{id:"valikud"},"Valikud"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": kuvatav k\xfcsimus. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas sama kasutaja (v\xf5i sessioon, kui see on anon\xfc\xfcmne) v\xf5ib esitada mitu vastust). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),': V\xf5imaldab \xf5pilastel esitada andmeid anon\xfc\xfcmselt. Pange t\xe4hele, et kui see valik on seatud "true", siis ei n\xe4e juhendajad esitava \xfcli\xf5pilase ID-d.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": String- v\xf5i numbriline v\xe4\xe4rtus, mis n\xe4itab noole sammu, mis on n\xe4ha, kui kursor viibib sisestuskasti kohal. Kui ",(0,a.kt)("inlineCode",{parentName:"li"},"'any'"),", m\xe4\xe4ratakse sammuks ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'any'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback funktsioon, mis k\xe4ivitub, kui \xf5pilased esitavad vastuse. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberSurvey\n    allowMultipleAnswers={true}\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}c.isMDXComponent=!0}}]);