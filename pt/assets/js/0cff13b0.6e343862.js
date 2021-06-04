(self.webpackChunk=self.webpackChunk||[]).push([[366],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},720437:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(722122),a=n(419756),o=(n(202784),n(603905)),s={id:"course-management",title:"Managing the Course in ISLE",sidebar_label:"Course Management"},i={unversionedId:"tutorials/course-management",id:"tutorials/course-management",isDocsHomePage:!1,title:"Managing the Course in ISLE",description:"Managing Cohorts and Student Enrollment",source:"@site/docs/tutorials/course-management.md",sourceDirName:"tutorials",slug:"/tutorials/course-management",permalink:"/docs/tutorials/course-management",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/course-management.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598768092,formattedLastUpdatedAt:"30/08/2020",sidebar_label:"Course Management",frontMatter:{id:"course-management",title:"Managing the Course in ISLE",sidebar_label:"Course Management"},sidebar:"docs",previous:{title:"Examples of ISLE Use Cases",permalink:"/docs/tutorials/examples"},next:{title:"Using ISLE in the Classroom",permalink:"/docs/tutorials/classroom-use"}},c=[{value:"Managing Cohorts and Student Enrollment",id:"managing-cohorts-and-student-enrollment",children:[]},{value:"Announcements",id:"announcements",children:[]},{value:"Student Progress",id:"student-progress",children:[]},{value:"Course Files",id:"course-files",children:[]}],l={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"managing-cohorts-and-student-enrollment"},"Managing Cohorts and Student Enrollment"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/tutorials/getting-started"},"Setting Up")," tutorial, we covered how to create cohorts for student enrollment. As a reminder, to see the existing cohorts, click ",(0,o.kt)("strong",{parentName:"p"},"Edit course")," in the dashboard bar - the current cohorts will be displayed on the right. You can create additional cohorts with the ",(0,o.kt)("strong",{parentName:"p"},"Create Cohort")," button. To see the students enrolled in a cohort and edit the cohort information (name, email filter, etc.) click the ",(0,o.kt)("strong",{parentName:"p"},"Edit")," button. You can then remove a student from the course by click the ",(0,o.kt)("strong",{parentName:"p"},"x")," next to their email address, and confirming the action by clicking ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Cohort",src:n(857371).Z})),(0,o.kt)("h2",{id:"announcements"},"Announcements"),(0,o.kt)("p",null,"ISLE also provides the ability to make announcements to students in your class. To create a new announcement, click the ",(0,o.kt)("strong",{parentName:"p"},"Course Data")," button in the dashboard bar, then enter a title and message under ",(0,o.kt)("strong",{parentName:"p"},"New Announcement"),". When you are ready to post, click ",(0,o.kt)("strong",{parentName:"p"},"Create"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Course Announcement",src:n(550174).Z})),(0,o.kt)("p",null,"Posted announcements will appear on the left, where you can edit and delete them. Students will see course announcements under ",(0,o.kt)("strong",{parentName:"p"},"Messages")," on their course profile page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Announcement Student View",src:n(631979).Z})),(0,o.kt)("h2",{id:"student-progress"},"Student Progress"),(0,o.kt)("p",null,"As students submit answers to questions, a progress bar tracks the proportion of the lesson that they have completed. Students can see their progress at the top of the lesson, under their course profile, or on the course dashboard:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Progress Student Perspective",src:n(866898).Z})),(0,o.kt)("p",null,"As an instructor, you can track student progress in the ",(0,o.kt)("strong",{parentName:"p"},"Progress")," tab of the ",(0,o.kt)("strong",{parentName:"p"},"Course Data")," section:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Progress Instructor Perspective",src:n(571291).Z})),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("strong",{parentName:"p"},"Progress")," tab will show the progress of all students. If you wish to find a specific student, you can filter by their name, email, or cohort."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The progress bars in the table are editable. Clicking on them will reveal an input field, which can be used to override the automatically calculated progress, e.g. in case of excused student absences."))),(0,o.kt)("h2",{id:"course-files"},"Course Files"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Owner Files")," tab of the ",(0,o.kt)("strong",{parentName:"p"},"Course Data"),' section allows you to see all files that have been uploaded by the instructor. Clicking on the green "Upload File" button allows you to upload files, which can then for example be used when building lessons in the ISLE editor. '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Files",src:n(742954).Z})),(0,o.kt)("p",null,"When students submit a file, such as a project report, HTML and PDF versions will appear in the ",(0,o.kt)("strong",{parentName:"p"},"Student files")," tab. These can be viewed with the ",(0,o.kt)("strong",{parentName:"p"},"Open")," button next to the file name. To see only the files for a specific student or lesson, you can filter by student name or lesson name. Instructors may also find it useful to post files to ISLE, for example to upload data for a lesson. To upload a file as an instructor, use the ",(0,o.kt)("strong",{parentName:"p"},"Upload file")," button."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The CSV and JSON buttons in top-right of the navigation bar allow one to download the information in the tables in a convenient format for further processing."))))}u.isMDXComponent=!0},631979:function(e,t,n){"use strict";t.Z=n.p+"assets/images/announcement_student_view-1285b63ddbe52fb0a3cce1fbd1925bd7.png"},550174:function(e,t,n){"use strict";t.Z=n.p+"assets/images/course_announcement-cfa7a2e574dfaaba66db0f6fd7dea844.png"},857371:function(e,t,n){"use strict";t.Z=n.p+"assets/images/edit_cohort-520057f48587fcafa0c211898023aef7.png"},742954:function(e,t,n){"use strict";t.Z=n.p+"assets/images/owner_files-307027bf50453bc29697dc9ae2fafbef.png"},571291:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress_instructor_view-6dc4b6461676b75e006a50dffd3c65b0.png"},866898:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress_student_perspective-90ce7c721caeed66534c2cb94bc7ead5.png"}}]);