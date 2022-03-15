"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7987],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(202784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},771388:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(487462),s=n(263366),r=(n(202784),n(603905)),i=["components"],o={id:"classroom-use",title:"Using ISLE in the Classroom",sidebar_label:"Classroom Use"},l=void 0,c={unversionedId:"tutorials/classroom-use",id:"tutorials/classroom-use",title:"Using ISLE in the Classroom",description:"Running Labs and In-Class Activities",source:"@site/docs/tutorials/classroom-use.md",sourceDirName:"tutorials",slug:"/tutorials/classroom-use",permalink:"/hu/docs/tutorials/classroom-use",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/classroom-use.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598768092,formattedLastUpdatedAt:"2020. 08. 30.",frontMatter:{id:"classroom-use",title:"Using ISLE in the Classroom",sidebar_label:"Classroom Use"},sidebar:"docs",previous:{title:"Course Management",permalink:"/hu/docs/tutorials/course-management"},next:{title:"Data Explorer",permalink:"/hu/docs/data-explorer"}},u={},p=[{value:"Running Labs and In-Class Activities",id:"running-labs-and-in-class-activities",level:2},{value:"Viewing Student Responses and Feedback",id:"viewing-student-responses-and-feedback",level:3},{value:"Tracking Student Progress",id:"tracking-student-progress",level:3}],d={toc:p};function h(e){var t=e.components,o=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"running-labs-and-in-class-activities"},"Running Labs and In-Class Activities"),(0,r.kt)("h3",{id:"viewing-student-responses-and-feedback"},"Viewing Student Responses and Feedback"),(0,r.kt)("p",null,"To see student responses to a question, click the ",(0,r.kt)("strong",{parentName:"p"},"Answers")," button for that question component. This displays all responses and a visualization (such as a bar chart or word cloud) of the answers. "),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"See Answers",src:n(612516).Z,width:"1840",height:"875"})),(0,r.kt)("p",null,"You can change the information displayed in a number of ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To see all student answers (including multiple submissions for the same student), click ",(0,r.kt)("em",{parentName:"p"},"Only include latest answer for any student"),". To see only the latest answer, click ",(0,r.kt)("em",{parentName:"p"},"Include all answers for any student"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To see which students submitted each answer, click ",(0,r.kt)("strong",{parentName:"p"},"Show Extended"),". To hide these names again, click ",(0,r.kt)("strong",{parentName:"p"},"Hide Extended"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To search for specific answers, use the ",(0,r.kt)("strong",{parentName:"p"},"Search")," bar at the bottom of the answer view. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'To display only the answers for a specific cohort, use the cohorts drop-down menu at the top. The default is "All Cohorts".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To see only the most recent answers, you can filter by time to show only the last hour, day, week, month, or year."))),(0,r.kt)("p",null,"To see student feedback (if feedback buttons are provided), click ",(0,r.kt)("strong",{parentName:"p"},"Responses")," next to the feedback buttons."),(0,r.kt)("h3",{id:"tracking-student-progress"},"Tracking Student Progress"),(0,r.kt)("p",null,"The bar under the ",(0,r.kt)("strong",{parentName:"p"},"Answers")," button displays student progress on that question. The proportion filled with ",(0,r.kt)("em",{parentName:"p"},"blue")," tracks the proportion of active users who have submitted an answer to that question. The proportion filled with ",(0,r.kt)("em",{parentName:"p"},"orange")," tracks the number of active users who are currently working on the question."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Answers Progress",src:n(512184).Z,width:"118",height:"54"})),(0,r.kt)("p",null,"For feedback buttons, red and green bars indicate the proportion of students who have indicated that they have understood the question or are confused."),(0,r.kt)("p",null,"Tracking progress on all questions at once can be done with the ",(0,r.kt)("strong",{parentName:"p"},"Instructor Panel"),". To access the instructor panel, click the orange arrow on the right of the screen. "),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Panel",src:n(833550).Z,width:"1115",height:"670"})),(0,r.kt)("p",null,"The instructor panel provides information about the lesson as a whole:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Active Users")," tab shows the users that are currently accessing the lab.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Activity")," tab allows you to track the progress of students on each question. It shows what fraction of active users have answered each question:"))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Activity",src:n(433801).Z,width:"856",height:"834"})),(0,r.kt)("p",null,"You may add custom ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," tags to each question so they will be used in the ",(0,r.kt)("strong",{parentName:"p"},"Activity")," tab. Here is an example of a question with an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'    <MultipleChoiceQuestion\n        id="mc1"\n        solution={1}\n        answers={[\n            {content:"Quantitative", explanation:""},\n            {content:"Qualitative", explanation:""}\n        ]}\n        question={<span>Course: <i>Course Respondent was Enrolled in</i></span>}\n    />\n')),(0,r.kt)("p",null,"If no custom ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is supplied, an automatically generated one will be used composed of the question type and a number representing the index of the respective instance in the list of all questions of said type in the lesson. "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For lessons in which components are programmatically inserted, it is encouraged to assign ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," manually as the generated ones will not be deterministic in this case."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Responses")," tab allows one to display all answers of a single student and compare them to the solutions, if supplied to the respective question components, or to the answers of another selected student.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Responses",src:n(532775).Z,width:"858",height:"401"})),(0,r.kt)("p",null,"In case a student has submitted multiple answers for a given question, clicking on their answer allows you to cycle through their different answers. The time stamp of each submission is displayed in the upper-right corner of each answer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Active Users")," tab displays the list of currently active users. The progress bar next to the user's profile picture displays the percentage of questions in the lesson the student has answered. Next to it are buttons to initiate a text or video chat with the student. When the user is interacting with an element on the page, a button with the identifier of the component the student has in focus in displayed to the right. Clicking on it will scroll the lesson to reveal the component into view. Last but not least, clicking on the thumbnail picture of a user jumps to the user's actions in the ",(0,r.kt)("strong",{parentName:"p"},"Action Log"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Action Log"),' displays all actions by all users that were collected over time. They can be filtered by time or any of the other attributes via clicking on the respective value labels. The current selection of actions, optionally restricted further to only instructor, student (i.e., users enrolled in the class), or guest data can be exported optionally with artificially generated email addresses and names (when selecting "Anonymized") as a CSV or JSON file.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Instructor Notes")," tab contains a text editor for instructors and teaching assistants of the class to leave notes and instructions for each other."))))}h.isMDXComponent=!0},833550:function(e,t,n){t.Z=n.p+"assets/images/instructor_panel-a9be7c3ac3690466cba9ea2c0e807af1.gif"},512184:function(e,t){t.Z="data:image/png;base64,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"},433801:function(e,t,n){t.Z=n.p+"assets/images/instructor_panel_activity-09638dfb175c1c2e7527e600dbdd5434.png"},532775:function(e,t,n){t.Z=n.p+"assets/images/instructor_panel_responses-789c076deb8c2ff5fe6e246cb816cf14.png"},612516:function(e,t,n){t.Z=n.p+"assets/images/view_student_answers-a97688c52bdb33d370bf69ffdb608bc6.png"}}]);