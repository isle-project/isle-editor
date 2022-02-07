"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5890],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||s;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=p;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},673138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var o=n(487462),i=n(263366),s=(n(202784),n(603905)),a=["components"],r={id:"question-components",title:"How to Use Questions",sidebar_label:"Using Questions"},u=void 0,l={unversionedId:"tutorials/question-components",id:"tutorials/question-components",title:"How to Use Questions",description:"ISLE provides a wide variety of question components that allow different types of input, from numeric values and free text, to matching and multiple choice. Complete documentation of the different question types can be found in the ISLE docs under Question Components. In this tutorial, we will cover basic uses of some of the common kinds. For more customization options, see the documentation for each question component.",source:"@site/docs/tutorials/question-components.md",sourceDirName:"tutorials",slug:"/tutorials/question-components",permalink:"/lv/docs/tutorials/question-components",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/question-components.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584925264,formattedLastUpdatedAt:"22.03.2020.",frontMatter:{id:"question-components",title:"How to Use Questions",sidebar_label:"Using Questions"},sidebar:"docs",previous:{title:"Images",permalink:"/lv/docs/tutorials/editor-images"},next:{title:"Including Data",permalink:"/lv/docs/tutorials/including-data"}},d=[{value:"Free Text Questions",id:"free-text-questions",children:[],level:3},{value:"Common Question Elements",id:"common-question-elements",children:[{value:"<code>question</code>",id:"question",children:[],level:3},{value:"<code>feedback</code>",id:"feedback",children:[],level:3},{value:"<code>hints</code>",id:"hints",children:[],level:3}],level:2},{value:"Some Other Question Components",id:"some-other-question-components",children:[{value:"Number Questions",id:"number-questions",children:[],level:3},{value:"Multiple Choice Questions",id:"multiple-choice-questions",children:[],level:3}],level:2},{value:"Viewing Student Responses and Feedback",id:"viewing-student-responses-and-feedback",children:[],level:2},{value:"Putting Questions Together",id:"putting-questions-together",children:[{value:"Pages",id:"pages",children:[],level:3},{value:"Question Forms",id:"question-forms",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ISLE provides a wide variety of question components that allow different types of input, from numeric values and free text, to matching and multiple choice. Complete documentation of the different question types can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/free-text-question"},"ISLE docs")," under ",(0,s.kt)("strong",{parentName:"p"},"Question Components"),". In this tutorial, we will cover basic uses of some of the common kinds. For more customization options, see the documentation for each question component."),(0,s.kt)("h3",{id:"free-text-questions"},"Free Text Questions"),(0,s.kt)("p",null,"Let's begin by looking at ",(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/free-text-question"},"Free Text Questions"),", which provide a text box in which users type the answer. To include a free text question, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"<FreeTextQuestion/>")," tag. Here is a simple example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What did you do over the summer?"\n/>\n')),(0,s.kt)("p",null,"This is displayed as"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Free Text",src:n(966287).Z,width:"884",height:"299"})),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option in the ",(0,s.kt)("inlineCode",{parentName:"p"},"<FreeTextQuestion/>")," tag is where you specify the question. Students then answer the question in the text box, and click the ",(0,s.kt)("strong",{parentName:"p"},"Submit")," button when done. If desired, you can also provide a ",(0,s.kt)("em",{parentName:"p"},"solution")," to the question. Once students have submitted their own answer, they can view your solution by clicking ",(0,s.kt)("strong",{parentName:"p"},"Show Solution"),". For some question types, ISLE checks the submitted answers against the provided solution, but this is not done for Free Text Questions. Here's an example of a Free Text Question with a provided solution:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion \n    question="Provide a geometric interpretation for the fitted values in linear regression." \n    solution="Projection of the observed response onto the columnspace of the covariate matrix."\n/>\n')),(0,s.kt)("p",null,"Clicking ",(0,s.kt)("strong",{parentName:"p"},"Show Solution")," results in the following:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Free Text Solution",src:n(209440).Z,width:"887",height:"304"})),(0,s.kt)("h2",{id:"common-question-elements"},"Common Question Elements"),(0,s.kt)("p",null,"Each question component includes a ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option. Some components (like Free Text and Number Questions) allow you to provide an optional ",(0,s.kt)("inlineCode",{parentName:"p"},"solution"),", while for other components like Match List Questions the solution is determined by the code to construct the answer choices. All question components also include the option of ",(0,s.kt)("inlineCode",{parentName:"p"},"feedback")," buttons and question ",(0,s.kt)("inlineCode",{parentName:"p"},"hints"),"."),(0,s.kt)("h3",{id:"question"},(0,s.kt)("inlineCode",{parentName:"h3"},"question")),(0,s.kt)("p",null,"Question text for all question components is provided in the same way: through the ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option. We've already seen simple examples of this for the Free Text Question, but in some circumstances we might want question text to be more complex. For example, we might wish to include some of the text elements covered in the Text tutorial. However, this requires adding some syntax to the ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Markdown"),":"),(0,s.kt)("p",null,"Markdown syntax can be used with the ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option through an HTML ",(0,s.kt)("inlineCode",{parentName:"p"},"<Text/>")," component with the ",(0,s.kt)("inlineCode",{parentName:"p"},"raw")," option. This can also be used to create multiple chunks of text in the question. For example, the following Free Text Question includes several different Markdown examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<FreeTextQuestion\n    question={<Text raw={`We can include *emphasis*, \n    \n    lists:\n    * item \n    * item\n\n    tables:\n    | column 1 | column 2 |\n    | --- | --- |\n    | row 1 | row 1 |\n\n    even images:\n    ![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)`} />}\n/>\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Question Text Markdown",src:n(862725).Z,width:"886",height:"866"})),(0,s.kt)("h3",{id:"feedback"},(0,s.kt)("inlineCode",{parentName:"h3"},"feedback")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Feedback",src:n(143689).Z,width:"373",height:"100"})),(0,s.kt)("p",null,"The three feedback buttons, shown above, allow students to give feedback on individual questions. The left-hand button allows students to note that they are confused on the question; the center button allows students to note that the question makes sense; and the right-hand button allows students to give specific feedback comments in more detail. These feedback buttons are controlled by the ",(0,s.kt)("inlineCode",{parentName:"p"},"feedback")," option, which defaults to true. To turn off feedback for a question, set the ",(0,s.kt)("inlineCode",{parentName:"p"},"feedback")," option to false. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What did you do over the summer?"\n    feedback={false}\n/>\n')),(0,s.kt)("h3",{id:"hints"},(0,s.kt)("inlineCode",{parentName:"h3"},"hints")),(0,s.kt)("p",null,"For some questions you may wish to provide hints, which is done with the ",(0,s.kt)("inlineCode",{parentName:"p"},"hints")," option. Here is an example of a Free Text Question with three hints:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What is the difference between a z-test and a t-test? How does sample size affect this difference?"\n    hints={["What null distribution does each test use?", "How does sample size affect degrees of freedom for the t-distribution?", "What happens when we increase degrees of freedom for a t-distribution?"]}\n/>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hints",src:n(9842).Z,width:"904",height:"314"})),(0,s.kt)("p",null,"Each hint is entered between quotes, with commas separating the hints. The order in which the hints are entered is the order in which they appear when the ",(0,s.kt)("strong",{parentName:"p"},"Get Hint")," or ",(0,s.kt)("strong",{parentName:"p"},"Next Hint")," button is clicked. Note that the hints must be wrapped in ",(0,s.kt)("inlineCode",{parentName:"p"},"{[ ]}")," in the tag."),(0,s.kt)("h2",{id:"some-other-question-components"},"Some Other Question Components"),(0,s.kt)("h3",{id:"number-questions"},"Number Questions"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/number-question"},"Number Questions")," provide a box in which students type a numerical answer. Here is an example of a Number Question, with a solution provided:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<NumberQuestion\n    question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"\n    solution={1}\n/>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Number Question",src:n(201938).Z,width:"882",height:"206"})),(0,s.kt)("p",null,"By default, the ",(0,s.kt)("strong",{parentName:"p"},"Your answer")," box will be 0 until the student enters their own answer. If a solution is provided, once the student submits their response the correct solution will be displayed and the student will receive a message indicating whether their answer is correct. To prevent students from seeing the solution when they submit, you can set the ",(0,s.kt)("inlineCode",{parentName:"p"},"provideFeedback")," option to false:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<NumberQuestion\n    question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"\n    solution={1}\n    provideFeedback={false}\n/>\n')),(0,s.kt)("p",null,"For checking whether solutions are correct, the ",(0,s.kt)("inlineCode",{parentName:"p"},"digits")," option is also useful. ",(0,s.kt)("inlineCode",{parentName:"p"},"digits")," specifies the number of digits for which the answer supplied by the student must match the solution to be considered correct (defaults to 3)."),(0,s.kt)("h3",{id:"multiple-choice-questions"},"Multiple Choice Questions"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/multiple-choice-question"},"Multiple Choice Questions")," provide a set of answers for the students to choose between. Here is an example of a multiple choice question:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<MultipleChoiceQuestion\n    question="What does ISLE stand for?"\n    answers={[\n        {content:"Nothing", explanation:""},\n        {content:"Is Statistics Like Estimation?", explanation:""},\n        {content:"Integrated Statistics Learning Environment", explanation:""},\n        {content:"Information Seminar on Loud Explosions", explanation:""}\n    ]}\n    solution={2}\n    provideFeedback="full"\n/>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Multiple Choice Question",src:n(865605).Z,width:"890",height:"383"})),(0,s.kt)("p",null,"There is are a few things to note about the syntax for a multiple choice question. First, the ",(0,s.kt)("inlineCode",{parentName:"p"},"answers")," choices must be provided in a very specific format. Each answer choice is written as ",(0,s.kt)("inlineCode",{parentName:"p"},'{content:"", explanation:""}')," where the ",(0,s.kt)("inlineCode",{parentName:"p"},"content")," is the displayed answer option, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"explanation")," is optional text visible after the question has been submitted to explain why the answer choice is correct or incorrect. The number of answer choices can be varied, but each option must be separated by a comma. Also, note that the list of answer choices is wrapped in ",(0,s.kt)("inlineCode",{parentName:"p"},"{[ ]}")," in the tag."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"solution")," field specifies the correct answer choice(s). The choices are 0-indexed, so 0 referes to the first choice, 1 to the second, 2 to the third, and so on. If the solution is given just as a number (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"solution={2}"),') then the students can select only one answer. To allow students to select multiple answers ("choose all that apply"), the solution must be given in square brackets (e.g., ',(0,s.kt)("inlineCode",{parentName:"p"},"solution={[2]}")," means that students can select multiple answers, but only the third option is correct). If multiple options are correct, all correct options should be given in square brackets and separated by commas (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"solution={[0, 2]}")," means that students can select multiple answers, and the first and third options are correct)."),(0,s.kt)("p",null,"Feedback on student answers for Multiple Choice Questions can be provided either as ",(0,s.kt)("inlineCode",{parentName:"p"},"full"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"none"),", using the ",(0,s.kt)("inlineCode",{parentName:"p"},"provideFeedback")," field (the default is ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),"). If ",(0,s.kt)("inlineCode",{parentName:"p"},"full"),", feedback including the correct answer is displayed after learners submit their answers; if ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),", feedback is only displayed for the selected answer; if ",(0,s.kt)("inlineCode",{parentName:"p"},"none"),", no feedback is returned. Try out these different feedback options with the question above and see how they behave!"),(0,s.kt)("h2",{id:"viewing-student-responses-and-feedback"},"Viewing Student Responses and Feedback"),(0,s.kt)("p",null,"Once you have posted your lesson to ISLE and students are submitting answers to questions, you can view the student submissions and any feedback. To see student responses, open the ISLE lesson in your course dashboard, and click the ",(0,s.kt)("strong",{parentName:"p"},"Answers")," button for the question. To see student feedback, click the ",(0,s.kt)("strong",{parentName:"p"},"Responses")," button next to your feedback buttons for the questions (if you have included feedback buttons)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Answers",src:n(296054).Z,width:"1846",height:"910"})),(0,s.kt)("h2",{id:"putting-questions-together"},"Putting Questions Together"),(0,s.kt)("h3",{id:"pages"},"Pages"),(0,s.kt)("p",null,"For reasons of space, you may wish to put a group of related questions into the same space:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Pages Questions",src:n(740182).Z,width:"895",height:"408"})),(0,s.kt)("p",null,"This would allow, for example, a group of questions to reference a single dataset or image without students having to repeatedly scroll up and down. This uses ",(0,s.kt)("inlineCode",{parentName:"p"},"<Pages>"),", a custom tag that allows users to easily move between pages, with content on each page. The ISLE code to make the Pages shown in the gif above is"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<Pages>\n    <div>\n    <FreeTextQuestion\n        question="Here is a free text question"\n    />\n    </div>\n\n    <div>\n    <NumberQuestion\n        question="Here is a number question" \n    />\n    </div>\n</Pages>\n')),(0,s.kt)("p",null,"Everything we want in the Pages is contained within ",(0,s.kt)("inlineCode",{parentName:"p"},"<Pages> </Pages>"),". Each page is contained within a ",(0,s.kt)("inlineCode",{parentName:"p"},"<div> </div>")," that divides the questions. If we want, we can also put other ISLE content into a page, not just questions. Here is an example that includes some additional text, some LaTeX, and an image:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<Pages>\n    <div>\n    Let $X \\sim N(\\mu, \\sigma^2)$. Then $X$ has the following pdf:\n    $$f(x) = \\frac{1}{\\sqrt{2\\pi \\sigma^2}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}} $$\n    <NumberQuestion\n        question="If the distribution has mean 0 and variance 1, what is the height of the pdf at x=0?"\n    \n    />\n    </div>\n\n    <div>\n    Paul the octopus correctly predicted the outcome of all 7 of Germany\'s matches in the 2010 World Cup. Before each match, his handlers would put food into two containers adorned with the flags of the two countries. The container that Paul chose was his prediction for the match.\n\n    ![Paul](https://cdn1.spiegel.de/images/image-110422-860_poster_16x9-ltgh-110422.jpg "Paul the octopus")\n\n    <FreeTextQuestion\n        question="Suppose you want to predict the outcome of all of Germany\'s matches in the 2022 World Cup, but unlike Paul you will make all your predictions before the tournament starts. If both you and Paul are guessing, do you have the same probability of getting all the outcomes correct?"\n    />\n\n    </div>\n</Pages>\n')),(0,s.kt)("h3",{id:"question-forms"},"Question Forms"),(0,s.kt)("p",null,"In other cases, you may wish to have several parts to a question that all get submitted together. For example, a question may require both a free text and a numeric input. This can be done by ",(0,s.kt)("strong",{parentName:"p"},"Question Forms"),", which allow two or more questions to share the same ",(0,s.kt)("strong",{parentName:"p"},"Submit")," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Question Form",src:n(769216).Z,width:"887",height:"530"})),(0,s.kt)("p",null,"The code for the image shown here is"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n')))}p.isMDXComponent=!0},9842:function(e,t,n){t.Z=n.p+"assets/images/hints-068fab6294a59ec0fd504564dc62e7c5.gif"},740182:function(e,t,n){t.Z=n.p+"assets/images/pages_questions-5dd4390b630477bae18b6ebfbb39570c.gif"},296054:function(e,t,n){t.Z=n.p+"assets/images/viewing_responses-6cd70b6a711b2f25dc1c493154f9f1ba.gif"},143689:function(e,t,n){t.Z=n.p+"assets/images/feedback_buttons-1b40e8d13cb5d3801938023bd93cb14b.png"},966287:function(e,t,n){t.Z=n.p+"assets/images/free_text_question-e5aeff22bfcd30f8f36eee108e2db24e.png"},209440:function(e,t,n){t.Z=n.p+"assets/images/free_text_solution-75ff75d667154078ccacaede5f991f14.png"},865605:function(e,t,n){t.Z=n.p+"assets/images/multiple_choice_question-3f0752ffc79a792bd903518ccc865b77.png"},201938:function(e,t,n){t.Z=n.p+"assets/images/number_question-9c1459b959163ac17202e91f9690e2b7.png"},769216:function(e,t,n){t.Z=n.p+"assets/images/question_form-4d3210c1f6620258fd0a42a4eb8883af.png"},862725:function(e,t,n){t.Z=n.p+"assets/images/question_text_markdown-2fdd6256a9c4da1ec2cc237016aaae0d.png"}}]);