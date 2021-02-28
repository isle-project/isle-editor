(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(409)),s={id:"examples",title:"Examples of ISLE Use Cases",sidebar_label:"Examples"},o={unversionedId:"tutorials/examples",id:"tutorials/examples",isDocsHomePage:!1,title:"Examples of ISLE Use Cases",description:"ISLE can be used for many different types of lessons. Here we cover a few examples that we've found useful in our own courses.",source:"@site/docs/tutorials/examples.md",slug:"/tutorials/examples",permalink:"/pt/docs/tutorials/examples",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/examples.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1593909784,sidebar_label:"Examples",sidebar:"docs",previous:{title:"Including Data",permalink:"/pt/docs/tutorials/including-data"},next:{title:"Managing the Course in ISLE",permalink:"/pt/docs/tutorials/course-management"}},l=[{value:"Labs",id:"labs",children:[{value:"Sample Template",id:"sample-template",children:[]}]},{value:"Projects",id:"projects",children:[{value:"Sample Template",id:"sample-template-1",children:[]}]},{value:"Lecture Slides",id:"lecture-slides",children:[{value:"Sample Template",id:"sample-template-2",children:[]}]},{value:"Video Lectures",id:"video-lectures",children:[{value:"Sample Template",id:"sample-template-3",children:[]}]},{value:"Homework",id:"homework",children:[{value:"Sample Template",id:"sample-template-4",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ISLE can be used for many different types of lessons. Here we cover a few examples that we've found useful in our own courses."),Object(i.b)("h2",{id:"labs"},"Labs"),Object(i.b)("p",null,"At Carnegie Mellon University, we have used ISLE in introductory statistics labs for several years. ",Object(i.b)("a",{parentName:"p",href:"https://isle.stat.cmu.edu/demo-course/lab01/"},"Lab 1")," in 36-200 covers the basics of variables types and some plots. You can find the source ISLE file for this lab at ",Object(i.b)("a",{parentName:"p",href:"https://isle.stat.cmu.edu/demo-course/lab01/index.isle"},"https://isle.stat.cmu.edu/demo-course/lab01/index.isle"),"."),Object(i.b)("h3",{id:"sample-template"},"Sample Template"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'---\ntitle: "Lab"\nauthor: Your Name\ndate: \nrequire:\n    dataFile:\n    dataInfoFile:\nstate:\n    ---\n\n# Project Title\n\n## Description\n\nHere you can give a project description...\n\n<DataExplorer\n    data={dataFile}\n    dataInfo={dataInfoFile}\n    categorical={[]}\n    continuous={[]}\n    distributions={[]}\n/>\n\n<Pages>\n    <div>\n    <FreeTextQuestion\n        question="Here is a free text question"\n    />\n    </div>\n\n    <div>\n    <NumberQuestion\n        question="Here is a number question" \n    />\n    </div>\n</Pages>\n')),Object(i.b)("h2",{id:"projects"},"Projects"),Object(i.b)("p",null,"ISLE can also be used to to create data analysis projects for students. The ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo/nyc_project_example/"},"NYC housing project")," is an example of a data analysis project using New York housing data. You can find the source ISLE file for this project at ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo_nyc_project_example.isle"},"https://isle.heinz.cmu.edu/Demo_nyc_project_example.isle"),"."),Object(i.b)("h3",{id:"sample-template-1"},"Sample Template"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'---\ntitle: "Project"\nauthor: Your Name\ndate: \nrequire:\n    dataFile:\n    dataInfoFile:\nstate:\n    ---\n\n# Project Title\n\n## Description\n\nHere you can give a project description...\n\n<DataExplorer\n    data={dataFile}\n    dataInfo={dataInfoFile}\n    categorical={[]}\n    continuous={[]}\n    distributions={[]}\n/>\n')),Object(i.b)("h2",{id:"lecture-slides"},"Lecture Slides"),Object(i.b)("p",null,"The ISLE Sketchpad can be used to display PDF ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo/sample_lecture_slides/"},"lecture slides"),", which can be annotated in the Sketchpad and interspersed with ISLE questions for students to work on. The example shown here is courtesy of Chris Genovese and Mikael Kuusela of Carnegie Mellon University. The source file is at ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo_sample_lecture_slides.isle"},"https://isle.heinz.cmu.edu/Demo_sample_lecture_slides.isle"),"."),Object(i.b)("h3",{id:"sample-template-2"},"Sample Template"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'---\ntitle: "Lecture Slides"\nauthor: Your Name\ndate: \nstate:\n---\n\n<Sketchpad\n    fullscreen\n    pdf="https://isle.heinz.cmu.edu/week4T_1537277814854.pdf"\n    nodes={{\n        \'19\': {\n            component: <FreeTextQuestion\n                question="Please describe what the murkiest point has been for you in the course so far?"\n            />\n        },\n        \'37\': {\n            component: <FreeTextQuestion\n                question="Please describe what the murkiest point has been for you today?"\n            />\n        }\n    }}\n/>\n')),Object(i.b)("h2",{id:"video-lectures"},"Video Lectures"),Object(i.b)("p",null,"An ISLE ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo/sample_video_lecture/"},"video lecture")," is useful for creating a lesson that includes video lecture components combined with other ISLE components like questions and data analysis. The example linked here is courtesy of Marian Frazier at The College of Wooster, who has created video lectures for use in flipped classroom instruction. The source file is at ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo_sample_video_lecture.isle"},"https://isle.heinz.cmu.edu/Demo_sample_video_lecture.isle"),"."),Object(i.b)("h3",{id:"sample-template-3"},"Sample Template"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'---\ntitle: "Video Lecture"\nauthor: Your Name\ndate: \nstate:\n    ---\n\n<VideoLecture \n    steps={[\n        \'https://www.youtube.com/watch?v=wPqtzj5VZus\',\n        <FreeTextQuestion\n            question="Here is a free text question"\n        />\n    ]}\n/>\n')),Object(i.b)("h2",{id:"homework"},"Homework"),Object(i.b)("p",null,"Finally, ISLE can be used for homework assignments that involve writing and data analysis. Here is a ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo/nyc_hw_example/"},"homework example")," using the NYC housing data. The source file is at ",Object(i.b)("a",{parentName:"p",href:"https://isle.heinz.cmu.edu/Demo_nyc_hw_example.isle"},"https://isle.heinz.cmu.edu/Demo_nyc_hw_example.isle"),"."),Object(i.b)("h3",{id:"sample-template-4"},"Sample Template"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'---\ntitle: "Homework"\nauthor: Your Name\ndate: \nrequire:\n    dataFile: \n    dataInfoFile: \nstate:\n    ---\n\n## Instructions\n\nHW instructions go here...\n\n<DataExplorer\n        data={dataFile}\n        dataInfo={dataInfoFile}\n        categorical={[]}\n        quantitative={[]}\n        distributions={[]}\n        editorTitle="Answers"\n        questions={[\n            <div>Intro with *bold* text</div>,\n            \'More text\',\n            <FreeTextQuestion question="Can use any ISLE components..." />\n        ]}\n/>\n')))}u.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(b,o(o({ref:t},c),{},{components:n})):r.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);