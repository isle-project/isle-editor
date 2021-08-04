(self.webpackChunk=self.webpackChunk||[]).push([[2227],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},303542:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(722122),a=n(419756),i=(n(202784),n(603905)),o=["components"],l={id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},s=void 0,u={unversionedId:"sortable-tree",id:"sortable-tree",isDocsHomePage:!1,title:"Sortable Tree",description:"\xd5huke \xfcmbris react-sortable-tree, mis toetab k\xf5iki nimetatud komponendi omadusi.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/sortable-tree.md",sourceDirName:".",slug:"/sortable-tree",permalink:"/et/docs/sortable-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sortable-tree.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2.8.2021",frontMatter:{id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},sidebar:"docs",previous:{title:"Shaped Form",permalink:"/et/docs/shaped-form"},next:{title:"Dashboard",permalink:"/et/docs/dashboard"}},c=[{value:"Valikud",id:"valikud",children:[]},{value:"N\xe4ited",id:"n\xe4ited",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\xd5huke \xfcmbris ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-sortable-tree"},"react-sortable-tree"),", mis toetab k\xf5iki nimetatud komponendi omadusi."),(0,i.kt)("h2",{id:"valikud"},"Valikud"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"treeData")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<object> (required)"),': objektide massiivi "pealkirjaga" (s\xf5lme esmane silt),\n',(0,i.kt)("inlineCode",{parentName:"li"},"subtitle")," (sekundaarne silt), ",(0,i.kt)("inlineCode",{parentName:"li"},"expanded")," (kuvab s\xf5lme lapsi, kui see on seatud t\xf5eseks) ja/v\xf5i\n",(0,i.kt)("inlineCode",{parentName:"li"},"children")," (vastava s\xf5lme juurde kuuluvate lastes\xf5lmede massiivi).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": p\xe4ise pealkiri. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SortableTree \n  onlyExpandSearchedNodes \n  canDrag={false} \n  treeData={[{\n    title: 'Type of Data',\n    children: [{\n        title: 'Categorical',\n        children: [{\n          title: 'Chi-Square Test',\n          subtitle: 'Test for independence for two variables or goodness-of-fit test'\n        }]\n      },\n      {\n        title: 'Continuous',\n        children: [{\n            title: 'Group Differences',\n            children: [{\n                title: 'Between Means',\n                children: [{\n                  title: 'How many groups?',\n                  children: [{\n                      title: 'Two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in both groups, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'Student\\'s t-test (paired or unpaired)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Wilcoxon Rank Sum Test or Mann-Whitney U Test'\n                          }\n                        ]\n                      }]\n                    },\n                    {\n                      title: 'More than two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in each group, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'ANOVA (Analysis of Variance)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Kruskal-Wallis Test'\n                          }\n                        ]\n                      }]\n                    }\n                  ]\n                }]\n              },\n              {\n                title: 'Between Variances',\n                subtitle: 'Bartlett\\'s Test or Levene\\'s Test when data are normally distrubuted'\n              }\n            ]\n          },\n          {\n            title: 'Relationships between Variables',\n            children: [{\n              title: 'Regression Analysis',\n              subtitle: 'Simple linear regression for one response and one predictor,\\nmultiple regression in case of several explanatory variables.'\n            }]\n          }\n        ]\n      }\n    ]\n  }]}\n/>\n")))}p.isMDXComponent=!0}}]);