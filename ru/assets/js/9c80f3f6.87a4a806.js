(self.webpackChunk=self.webpackChunk||[]).push([[7987],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(202784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},685576:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(722122),s=n(419756),r=(n(202784),n(603905)),o=["components"],i={id:"classroom-use",title:"Using ISLE in the Classroom",sidebar_label:"Classroom Use"},l=void 0,c={unversionedId:"tutorials/classroom-use",id:"tutorials/classroom-use",isDocsHomePage:!1,title:"Using ISLE in the Classroom",description:"Running Labs and In-Class Activities",source:"@site/docs/tutorials/classroom-use.md",sourceDirName:"tutorials",slug:"/tutorials/classroom-use",permalink:"/ru/docs/tutorials/classroom-use",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/classroom-use.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598768092,formattedLastUpdatedAt:"30.08.2020",frontMatter:{id:"classroom-use",title:"Using ISLE in the Classroom",sidebar_label:"Classroom Use"},sidebar:"docs",previous:{title:"Course Management",permalink:"/ru/docs/tutorials/course-management"},next:{title:"Data Explorer",permalink:"/ru/docs/data-explorer"}},u=[{value:"Running Labs and In-Class Activities",id:"running-labs-and-in-class-activities",children:[{value:"Viewing Student Responses and Feedback",id:"viewing-student-responses-and-feedback",children:[]},{value:"Tracking Student Progress",id:"tracking-student-progress",children:[]}]}],p={toc:u};function d(e){var t=e.components,i=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"running-labs-and-in-class-activities"},"Running Labs and In-Class Activities"),(0,r.kt)("h3",{id:"viewing-student-responses-and-feedback"},"Viewing Student Responses and Feedback"),(0,r.kt)("p",null,"To see student responses to a question, click the ",(0,r.kt)("strong",{parentName:"p"},"Answers")," button for that question component. This displays all responses and a visualization (such as a bar chart or word cloud) of the answers. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"See Answers",src:n(520768).default})),(0,r.kt)("p",null,"You can change the information displayed in a number of ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To see all student answers (including multiple submissions for the same student), click ",(0,r.kt)("em",{parentName:"p"},"Only include latest answer for any student"),". To see only the latest answer, click ",(0,r.kt)("em",{parentName:"p"},"Include all answers for any student"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To see which students submitted each answer, click ",(0,r.kt)("strong",{parentName:"p"},"Show Extended"),". To hide these names again, click ",(0,r.kt)("strong",{parentName:"p"},"Hide Extended"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To search for specific answers, use the ",(0,r.kt)("strong",{parentName:"p"},"Search")," bar at the bottom of the answer view. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'To display only the answers for a specific cohort, use the cohorts drop-down menu at the top. The default is "All Cohorts".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To see only the most recent answers, you can filter by time to show only the last hour, day, week, month, or year."))),(0,r.kt)("p",null,"To see student feedback (if feedback buttons are provided), click ",(0,r.kt)("strong",{parentName:"p"},"Responses")," next to the feedback buttons."),(0,r.kt)("h3",{id:"tracking-student-progress"},"Tracking Student Progress"),(0,r.kt)("p",null,"The bar under the ",(0,r.kt)("strong",{parentName:"p"},"Answers")," button displays student progress on that question. The proportion filled with ",(0,r.kt)("em",{parentName:"p"},"blue")," tracks the proportion of active users who have submitted an answer to that question. The proportion filled with ",(0,r.kt)("em",{parentName:"p"},"orange")," tracks the number of active users who are currently working on the question."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Answers Progress",src:n(864376).default})),(0,r.kt)("p",null,"For feedback buttons, red and green bars indicate the proportion of students who have indicated that they have understood the question or are confused."),(0,r.kt)("p",null,"Tracking progress on all questions at once can be done with the ",(0,r.kt)("strong",{parentName:"p"},"Instructor Panel"),". To access the instructor panel, click the orange arrow on the right of the screen. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Panel",src:n(557850).default})),(0,r.kt)("p",null,"The instructor panel provides information about the lesson as a whole:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Active Users")," tab shows the users that are currently accessing the lab.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Activity")," tab allows you to track the progress of students on each question. It shows what fraction of active users have answered each question:"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Activity",src:n(943259).default})),(0,r.kt)("p",null,"You may add custom ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," tags to each question so they will be used in the ",(0,r.kt)("strong",{parentName:"p"},"Activity")," tab. Here is an example of a question with an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'    <MultipleChoiceQuestion\n        id="mc1"\n        solution={1}\n        answers={[\n            {content:"Quantitative", explanation:""},\n            {content:"Qualitative", explanation:""}\n        ]}\n        question={<span>Course: <i>Course Respondent was Enrolled in</i></span>}\n    />\n')),(0,r.kt)("p",null,"If no custom ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is supplied, an automatically generated one will be used composed of the question type and a number representing the index of the respective instance in the list of all questions of said type in the lesson. "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For lessons in which components are programmatically inserted, it is encouraged to assign ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," manually as the generated ones will not be deterministic in this case."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Responses")," tab allows one to display all answers of a single student and compare them to the solutions, if supplied to the respective question components, or to the answers of another selected student.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Responses",src:n(579235).default})),(0,r.kt)("p",null,"In case a student has submitted multiple answers for a given question, clicking on their answer allows you to cycle through their different answers. The time stamp of each submission is displayed in the upper-right corner of each answer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Active Users")," tab displays the list of currently active users. The progress bar next to the user's profile picture displays the percentage of questions in the lesson the student has answered. Next to it are buttons to initiate a text or video chat with the student. When the user is interacting with an element on the page, a button with the identifier of the component the student has in focus in displayed to the right. Clicking on it will scroll the lesson to reveal the component into view. Last but not least, clicking on the thumbnail picture of a user jumps to the user's actions in the ",(0,r.kt)("strong",{parentName:"p"},"Action Log"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Action Log"),' displays all actions by all users that were collected over time. They can be filtered by time or any of the other attributes via clicking on the respective value labels. The current selection of actions, optionally restricted further to only instructor, student (i.e., users enrolled in the class), or guest data can be exported optionally with artificially generated email addresses and names (when selecting "Anonymized") as a CSV or JSON file.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Instructor Notes")," tab contains a text editor for instructors and teaching assistants of the class to leave notes and instructions for each other."))))}d.isMDXComponent=!0},557850:function(e,t,n){"use strict";e.exports=n.p+"dced53da6acb593f1a93.gif"},864376:function(e,t,n){"use strict";e.exports=n.p+"5480285d3459e9a503d8.png"},943259:function(e,t,n){"use strict";e.exports=n.p+"db27278129bd78ea508c.png"},579235:function(e,t,n){"use strict";e.exports=n.p+"c1a87c2595f385aea6f0.png"},520768:function(e,t,n){"use strict";e.exports=n.p+"55a60fed7720448fcbd2.png"}}]);