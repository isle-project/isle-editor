"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2227],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},560377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=["components"],o={id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},s=void 0,u={unversionedId:"sortable-tree",id:"sortable-tree",title:"Sortable Tree",description:"\xd5huke \xfcmbris react-sortable-tree, mis toetab k\xf5iki nimetatud komponendi omadusi.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/sortable-tree.md",sourceDirName:".",slug:"/sortable-tree",permalink:"/et/docs/sortable-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sortable-tree.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2.8.2021",frontMatter:{id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},sidebar:"docs",previous:{title:"Shaped Form",permalink:"/et/docs/shaped-form"},next:{title:"Dashboard",permalink:"/et/docs/dashboard"}},c={},d=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\xd5huke \xfcmbris ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-sortable-tree"},"react-sortable-tree"),", mis toetab k\xf5iki nimetatud komponendi omadusi."),(0,i.kt)("h2",{id:"valikud"},"Valikud"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"treeData")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<object> (required)"),': objektide massiivi "pealkirjaga" (s\xf5lme esmane silt),\n',(0,i.kt)("inlineCode",{parentName:"li"},"subtitle")," (sekundaarne silt), ",(0,i.kt)("inlineCode",{parentName:"li"},"expanded")," (kuvab s\xf5lme lapsi, kui see on seatud t\xf5eseks) ja/v\xf5i\n",(0,i.kt)("inlineCode",{parentName:"li"},"children")," (vastava s\xf5lme juurde kuuluvate lastes\xf5lmede massiivi).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": p\xe4ise pealkiri. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SortableTree \n  onlyExpandSearchedNodes \n  canDrag={false} \n  treeData={[{\n    title: 'Type of Data',\n    children: [{\n        title: 'Categorical',\n        children: [{\n          title: 'Chi-Square Test',\n          subtitle: 'Test for independence for two variables or goodness-of-fit test'\n        }]\n      },\n      {\n        title: 'Continuous',\n        children: [{\n            title: 'Group Differences',\n            children: [{\n                title: 'Between Means',\n                children: [{\n                  title: 'How many groups?',\n                  children: [{\n                      title: 'Two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in both groups, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'Student\\'s t-test (paired or unpaired)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Wilcoxon Rank Sum Test or Mann-Whitney U Test'\n                          }\n                        ]\n                      }]\n                    },\n                    {\n                      title: 'More than two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in each group, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'ANOVA (Analysis of Variance)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Kruskal-Wallis Test'\n                          }\n                        ]\n                      }]\n                    }\n                  ]\n                }]\n              },\n              {\n                title: 'Between Variances',\n                subtitle: 'Bartlett\\'s Test or Levene\\'s Test when data are normally distrubuted'\n              }\n            ]\n          },\n          {\n            title: 'Relationships between Variables',\n            children: [{\n              title: 'Regression Analysis',\n              subtitle: 'Simple linear regression for one response and one predictor,\\nmultiple regression in case of several explanatory variables.'\n            }]\n          }\n        ]\n      }\n    ]\n  }]}\n/>\n")))}m.isMDXComponent=!0}}]);