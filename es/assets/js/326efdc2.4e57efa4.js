"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53274],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},740254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return y}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},f=void 0,m={unversionedId:"sortable-tree",id:"sortable-tree",title:"Sortable Tree",description:"Un fino envoltorio alrededor del [\xe1rbol reactivo-ordenable] (https://www.npmjs.com/package/react-sortable-tree) que soporta todas las propiedades de dicho componente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/sortable-tree.md",sourceDirName:".",slug:"/sortable-tree",permalink:"/es/docs/sortable-tree",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sortable-tree.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20 abr 2022",frontMatter:{id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},sidebar:"docs",previous:{title:"Shaped Form",permalink:"/es/docs/shaped-form"},next:{title:"Dashboard",permalink:"/es/docs/dashboard"}},b={},y=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],h={toc:y};function v(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Un fino envoltorio alrededor del ","[\xe1rbol reactivo-ordenable]"," (",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.npmjs.com/package/react-sortable-tree"}),"https://www.npmjs.com/package/react-sortable-tree"),") que soporta todas las propiedades de dicho componente."),(0,r.kt)("h2",u({},{id:"opciones"}),"Opciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"treeData")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<object> (required)"),": array de objetos con ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," (etiqueta principal del nodo),\n",(0,r.kt)("inlineCode",{parentName:"li"},"subt\xedtulo")," (etiqueta secundaria), ",(0,r.kt)("inlineCode",{parentName:"li"},"expanded")," (muestra los hijos del nodo si se establece en true), y/o\n",(0,r.kt)("inlineCode",{parentName:"li"},"children")," (matriz de nodos hijos que pertenecen al nodo respectivo). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": t\xedtulo del encabezado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplos"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SortableTree \n  onlyExpandSearchedNodes \n  canDrag={false} \n  treeData={[{\n    title: 'Type of Data',\n    children: [{\n        title: 'Categorical',\n        children: [{\n          title: 'Chi-Square Test',\n          subtitle: 'Test for independence for two variables or goodness-of-fit test'\n        }]\n      },\n      {\n        title: 'Continuous',\n        children: [{\n            title: 'Group Differences',\n            children: [{\n                title: 'Between Means',\n                children: [{\n                  title: 'How many groups?',\n                  children: [{\n                      title: 'Two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in both groups, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'Student\\'s t-test (paired or unpaired)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Wilcoxon Rank Sum Test or Mann-Whitney U Test'\n                          }\n                        ]\n                      }]\n                    },\n                    {\n                      title: 'More than two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in each group, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'ANOVA (Analysis of Variance)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Kruskal-Wallis Test'\n                          }\n                        ]\n                      }]\n                    }\n                  ]\n                }]\n              },\n              {\n                title: 'Between Variances',\n                subtitle: 'Bartlett\\'s Test or Levene\\'s Test when data are normally distrubuted'\n              }\n            ]\n          },\n          {\n            title: 'Relationships between Variables',\n            children: [{\n              title: 'Regression Analysis',\n              subtitle: 'Simple linear regression for one response and one predictor,\\nmultiple regression in case of several explanatory variables.'\n            }]\n          }\n        ]\n      }\n    ]\n  }]}\n/>\n")))}v.isMDXComponent=!0}}]);