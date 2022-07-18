"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1967],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},665076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var a=n(603905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"examples",title:"Examples of ISLE Use Cases",sidebar_label:"Examples"},m=void 0,f={unversionedId:"tutorials/examples",id:"tutorials/examples",title:"Examples of ISLE Use Cases",description:"ISLE can be used for many different types of lessons. Here we cover a few examples that we've found useful in our own courses.",source:"@site/docs/tutorials/examples.md",sourceDirName:"tutorials",slug:"/tutorials/examples",permalink:"/ro/docs/tutorials/examples",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/examples.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1593909784,formattedLastUpdatedAt:"5 iul. 2020",frontMatter:{id:"examples",title:"Examples of ISLE Use Cases",sidebar_label:"Examples"},sidebar:"docs",previous:{title:"Including Data",permalink:"/ro/docs/tutorials/including-data"},next:{title:"Course Management",permalink:"/ro/docs/tutorials/course-management"}},h={},v=[{value:"Labs",id:"labs",level:2},{value:"Sample Template",id:"sample-template",level:3},{value:"Projects",id:"projects",level:2},{value:"Sample Template",id:"sample-template-1",level:3},{value:"Lecture Slides",id:"lecture-slides",level:2},{value:"Sample Template",id:"sample-template-2",level:3},{value:"Video Lectures",id:"video-lectures",level:2},{value:"Sample Template",id:"sample-template-3",level:3},{value:"Homework",id:"homework",level:2},{value:"Sample Template",id:"sample-template-4",level:3}],b={toc:v};function y(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},b),p),o(t,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"ISLE can be used for many different types of lessons. Here we cover a few examples that we've found useful in our own courses."),(0,a.kt)("h2",c({},{id:"labs"}),"Labs"),(0,a.kt)("p",null,"At Carnegie Mellon University, we have used ISLE in introductory statistics labs for several years. ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.stat.cmu.edu/demo-course/lab01/"}),"Lab 1")," in 36-200 covers the basics of variables types and some plots. You can find the source ISLE file for this lab at ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.stat.cmu.edu/demo-course/lab01/index.isle"}),"https://isle.stat.cmu.edu/demo-course/lab01/index.isle"),"."),(0,a.kt)("h3",c({},{id:"sample-template"}),"Sample Template"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'---\ntitle: "Lab"\nauthor: Your Name\ndate: \nrequire:\n    dataFile:\n    dataInfoFile:\nstate:\n    ---\n\n# Project Title\n\n## Description\n\nHere you can give a project description...\n\n<DataExplorer\n    data={dataFile}\n    dataInfo={dataInfoFile}\n    categorical={[]}\n    continuous={[]}\n    distributions={[]}\n/>\n\n<Pages>\n    <div>\n    <FreeTextQuestion\n        question="Here is a free text question"\n    />\n    </div>\n\n    <div>\n    <NumberQuestion\n        question="Here is a number question" \n    />\n    </div>\n</Pages>\n')),(0,a.kt)("h2",c({},{id:"projects"}),"Projects"),(0,a.kt)("p",null,"ISLE can also be used to to create data analysis projects for students. The ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo/nyc_project_example/"}),"NYC housing project")," is an example of a data analysis project using New York housing data. You can find the source ISLE file for this project at ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo_nyc_project_example.isle"}),"https://isle.heinz.cmu.edu/Demo_nyc_project_example.isle"),"."),(0,a.kt)("h3",c({},{id:"sample-template-1"}),"Sample Template"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'---\ntitle: "Project"\nauthor: Your Name\ndate: \nrequire:\n    dataFile:\n    dataInfoFile:\nstate:\n    ---\n\n# Project Title\n\n## Description\n\nHere you can give a project description...\n\n<DataExplorer\n    data={dataFile}\n    dataInfo={dataInfoFile}\n    categorical={[]}\n    continuous={[]}\n    distributions={[]}\n/>\n')),(0,a.kt)("h2",c({},{id:"lecture-slides"}),"Lecture Slides"),(0,a.kt)("p",null,"The ISLE Sketchpad can be used to display PDF ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo/sample_lecture_slides/"}),"lecture slides"),", which can be annotated in the Sketchpad and interspersed with ISLE questions for students to work on. The example shown here is courtesy of Chris Genovese and Mikael Kuusela of Carnegie Mellon University. The source file is at ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo_sample_lecture_slides.isle"}),"https://isle.heinz.cmu.edu/Demo_sample_lecture_slides.isle"),"."),(0,a.kt)("h3",c({},{id:"sample-template-2"}),"Sample Template"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'---\ntitle: "Lecture Slides"\nauthor: Your Name\ndate: \nstate:\n---\n\n<Sketchpad\n    fullscreen\n    pdf="https://isle.heinz.cmu.edu/week4T_1537277814854.pdf"\n    nodes={{\n        \'19\': {\n            component: <FreeTextQuestion\n                question="Please describe what the murkiest point has been for you in the course so far?"\n            />\n        },\n        \'37\': {\n            component: <FreeTextQuestion\n                question="Please describe what the murkiest point has been for you today?"\n            />\n        }\n    }}\n/>\n')),(0,a.kt)("h2",c({},{id:"video-lectures"}),"Video Lectures"),(0,a.kt)("p",null,"An ISLE ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo/sample_video_lecture/"}),"video lecture")," is useful for creating a lesson that includes video lecture components combined with other ISLE components like questions and data analysis. The example linked here is courtesy of Marian Frazier at The College of Wooster, who has created video lectures for use in flipped classroom instruction. The source file is at ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo_sample_video_lecture.isle"}),"https://isle.heinz.cmu.edu/Demo_sample_video_lecture.isle"),"."),(0,a.kt)("h3",c({},{id:"sample-template-3"}),"Sample Template"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'---\ntitle: "Video Lecture"\nauthor: Your Name\ndate: \nstate:\n    ---\n\n<VideoLecture \n    steps={[\n        \'https://www.youtube.com/watch?v=wPqtzj5VZus\',\n        <FreeTextQuestion\n            question="Here is a free text question"\n        />\n    ]}\n/>\n')),(0,a.kt)("h2",c({},{id:"homework"}),"Homework"),(0,a.kt)("p",null,"Finally, ISLE can be used for homework assignments that involve writing and data analysis. Here is a ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo/nyc_hw_example/"}),"homework example")," using the NYC housing data. The source file is at ",(0,a.kt)("a",c({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo_nyc_hw_example.isle"}),"https://isle.heinz.cmu.edu/Demo_nyc_hw_example.isle"),"."),(0,a.kt)("h3",c({},{id:"sample-template-4"}),"Sample Template"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'---\ntitle: "Homework"\nauthor: Your Name\ndate: \nrequire:\n    dataFile: \n    dataInfoFile: \nstate:\n    ---\n\n## Instructions\n\nHW instructions go here...\n\n<DataExplorer\n        data={dataFile}\n        dataInfo={dataInfoFile}\n        categorical={[]}\n        quantitative={[]}\n        distributions={[]}\n        editorTitle="Answers"\n        questions={[\n            <div>Intro with *bold* text</div>,\n            \'More text\',\n            <FreeTextQuestion question="Can use any ISLE components..." />\n        ]}\n/>\n')))}y.isMDXComponent=!0}}]);