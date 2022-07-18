"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82557],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},674983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},m=void 0,f={unversionedId:"sortable-tree",id:"sortable-tree",title:"Sortable Tree",description:"Egy v\xe9kony burkolat a react-sortable-tree k\xf6r\xfcl, amely t\xe1mogatja az eml\xedtett komponens \xf6sszes tulajdons\xe1g\xe1t.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/sortable-tree.md",sourceDirName:".",slug:"/sortable-tree",permalink:"/hu/docs/sortable-tree",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sortable-tree.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"2022. \xe1pr. 20.",frontMatter:{id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},sidebar:"docs",previous:{title:"Shaped Form",permalink:"/hu/docs/shaped-form"},next:{title:"Dashboard",permalink:"/hu/docs/dashboard"}},b={},y=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],g={toc:y};function k(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Egy v\xe9kony burkolat a ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/react-sortable-tree"}),"react-sortable-tree")," k\xf6r\xfcl, amely t\xe1mogatja az eml\xedtett komponens \xf6sszes tulajdons\xe1g\xe1t."),(0,r.kt)("h2",p({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"treeData")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<object> (required)"),": objektumok t\xf6mbje a ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," (a csom\xf3pont els\u0151dleges c\xedmk\xe9je),\n",(0,r.kt)("inlineCode",{parentName:"li"},"subtitle")," (m\xe1sodlagos c\xedmke), ",(0,r.kt)("inlineCode",{parentName:"li"},"expanded")," (a csom\xf3pont gyermekeinek megjelen\xedt\xe9se, ha igazra van \xe1ll\xedtva), \xe9s/vagy\n",(0,r.kt)("inlineCode",{parentName:"li"},"children")," (az adott csom\xf3ponthoz tartoz\xf3 gyermek csom\xf3pontok t\xf6mbje).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": fejl\xe9c c\xedme. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",p({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SortableTree \n  onlyExpandSearchedNodes \n  canDrag={false} \n  treeData={[{\n    title: 'Type of Data',\n    children: [{\n        title: 'Categorical',\n        children: [{\n          title: 'Chi-Square Test',\n          subtitle: 'Test for independence for two variables or goodness-of-fit test'\n        }]\n      },\n      {\n        title: 'Continuous',\n        children: [{\n            title: 'Group Differences',\n            children: [{\n                title: 'Between Means',\n                children: [{\n                  title: 'How many groups?',\n                  children: [{\n                      title: 'Two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in both groups, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'Student\\'s t-test (paired or unpaired)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Wilcoxon Rank Sum Test or Mann-Whitney U Test'\n                          }\n                        ]\n                      }]\n                    },\n                    {\n                      title: 'More than two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in each group, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'ANOVA (Analysis of Variance)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Kruskal-Wallis Test'\n                          }\n                        ]\n                      }]\n                    }\n                  ]\n                }]\n              },\n              {\n                title: 'Between Variances',\n                subtitle: 'Bartlett\\'s Test or Levene\\'s Test when data are normally distrubuted'\n              }\n            ]\n          },\n          {\n            title: 'Relationships between Variables',\n            children: [{\n              title: 'Regression Analysis',\n              subtitle: 'Simple linear regression for one response and one predictor,\\nmultiple regression in case of several explanatory variables.'\n            }]\n          }\n        ]\n      }\n    ]\n  }]}\n/>\n")))}k.isMDXComponent=!0}}]);