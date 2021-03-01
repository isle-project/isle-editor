(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),i=n(7),s=(n(0),n(411)),a={id:"question-components",title:"How to Use Questions",sidebar_label:"Using Questions"},r={unversionedId:"tutorials/question-components",id:"tutorials/question-components",isDocsHomePage:!1,title:"How to Use Questions",description:"ISLE provides a wide variety of question components that allow different types of input, from numeric values and free text, to matching and multiple choice. Complete documentation of the different question types can be found in the ISLE docs under Question Components. In this tutorial, we will cover basic uses of some of the common kinds. For more customization options, see the documentation for each question component.",source:"@site/docs/tutorials/question-components.md",slug:"/tutorials/question-components",permalink:"/ru/docs/tutorials/question-components",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/question-components.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584925264,sidebar_label:"Using Questions",sidebar:"docs",previous:{title:"Including Images and Videos",permalink:"/ru/docs/tutorials/editor-images"},next:{title:"Including Data",permalink:"/ru/docs/tutorials/including-data"}},c=[{value:"Free Text Questions",id:"free-text-questions",children:[]},{value:"Common Question Elements",id:"common-question-elements",children:[{value:"<code>question</code>",id:"question",children:[]},{value:"<code>feedback</code>",id:"feedback",children:[]},{value:"<code>hints</code>",id:"hints",children:[]}]},{value:"Some Other Question Components",id:"some-other-question-components",children:[{value:"Number Questions",id:"number-questions",children:[]},{value:"Multiple Choice Questions",id:"multiple-choice-questions",children:[]}]},{value:"Viewing Student Responses and Feedback",id:"viewing-student-responses-and-feedback",children:[]},{value:"Putting Questions Together",id:"putting-questions-together",children:[{value:"Pages",id:"pages",children:[]},{value:"Question Forms",id:"question-forms",children:[]}]}],u={toc:c};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"ISLE provides a wide variety of question components that allow different types of input, from numeric values and free text, to matching and multiple choice. Complete documentation of the different question types can be found in the ",Object(s.b)("a",{parentName:"p",href:"https://isledocs.com/docs/free-text-question"},"ISLE docs")," under ",Object(s.b)("strong",{parentName:"p"},"Question Components"),". In this tutorial, we will cover basic uses of some of the common kinds. For more customization options, see the documentation for each question component."),Object(s.b)("h3",{id:"free-text-questions"},"Free Text Questions"),Object(s.b)("p",null,"Let's begin by looking at ",Object(s.b)("a",{parentName:"p",href:"https://isledocs.com/docs/free-text-question"},"Free Text Questions"),", which provide a text box in which users type the answer. To include a free text question, we use the ",Object(s.b)("inlineCode",{parentName:"p"},"<FreeTextQuestion/>")," tag. Here is a simple example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What did you do over the summer?"\n/>\n')),Object(s.b)("p",null,"This is displayed as"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Free Text",src:n(4661).default})),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"question")," option in the ",Object(s.b)("inlineCode",{parentName:"p"},"<FreeTextQuestion/>")," tag is where you specify the question. Students then answer the question in the text box, and click the ",Object(s.b)("strong",{parentName:"p"},"Submit")," button when done. If desired, you can also provide a ",Object(s.b)("em",{parentName:"p"},"solution")," to the question. Once students have submitted their own answer, they can view your solution by clicking ",Object(s.b)("strong",{parentName:"p"},"Show Solution"),". For some question types, ISLE checks the submitted answers against the provided solution, but this is not done for Free Text Questions. Here's an example of a Free Text Question with a provided solution:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<FreeTextQuestion \n    question="Provide a geometric interpretation for the fitted values in linear regression." \n    solution="Projection of the observed response onto the columnspace of the covariate matrix."\n/>\n')),Object(s.b)("p",null,"Clicking ",Object(s.b)("strong",{parentName:"p"},"Show Solution")," results in the following:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Free Text Solution",src:n(4662).default})),Object(s.b)("h2",{id:"common-question-elements"},"Common Question Elements"),Object(s.b)("p",null,"Each question component includes a ",Object(s.b)("inlineCode",{parentName:"p"},"question")," option. Some components (like Free Text and Number Questions) allow you to provide an optional ",Object(s.b)("inlineCode",{parentName:"p"},"solution"),", while for other components like Match List Questions the solution is determined by the code to construct the answer choices. All question components also include the option of ",Object(s.b)("inlineCode",{parentName:"p"},"feedback")," buttons and question ",Object(s.b)("inlineCode",{parentName:"p"},"hints"),"."),Object(s.b)("h3",{id:"question"},Object(s.b)("inlineCode",{parentName:"h3"},"question")),Object(s.b)("p",null,"Question text for all question components is provided in the same way: through the ",Object(s.b)("inlineCode",{parentName:"p"},"question")," option. We've already seen simple examples of this for the Free Text Question, but in some circumstances we might want question text to be more complex. For example, we might wish to include some of the text elements covered in the Text tutorial. However, this requires adding some syntax to the ",Object(s.b)("inlineCode",{parentName:"p"},"question")," option."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Markdown"),":"),Object(s.b)("p",null,"Markdown syntax can be used with the ",Object(s.b)("inlineCode",{parentName:"p"},"question")," option through an HTML ",Object(s.b)("inlineCode",{parentName:"p"},"<Text/>")," component with the ",Object(s.b)("inlineCode",{parentName:"p"},"raw")," option. This can also be used to create multiple chunks of text in the question. For example, the following Free Text Question includes several different Markdown examples:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"<FreeTextQuestion\n    question={<Text raw={`We can include *emphasis*, \n    \n    lists:\n    * item \n    * item\n\n    tables:\n    | column 1 | column 2 |\n    | --- | --- |\n    | row 1 | row 1 |\n\n    even images:\n    ![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)`} />}\n/>\n")),Object(s.b)("p",null,Object(s.b)("img",{alt:"Question Text Markdown",src:n(4663).default})),Object(s.b)("h3",{id:"feedback"},Object(s.b)("inlineCode",{parentName:"h3"},"feedback")),Object(s.b)("p",null,Object(s.b)("img",{alt:"Feedback",src:n(4664).default})),Object(s.b)("p",null,"The three feedback buttons, shown above, allow students to give feedback on individual questions. The left-hand button allows students to note that they are confused on the question; the center button allows students to note that the question makes sense; and the right-hand button allows students to give specific feedback comments in more detail. These feedback buttons are controlled by the ",Object(s.b)("inlineCode",{parentName:"p"},"feedback")," option, which defaults to true. To turn off feedback for a question, set the ",Object(s.b)("inlineCode",{parentName:"p"},"feedback")," option to false. For example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What did you do over the summer?"\n    feedback={false}\n/>\n')),Object(s.b)("h3",{id:"hints"},Object(s.b)("inlineCode",{parentName:"h3"},"hints")),Object(s.b)("p",null,"For some questions you may wish to provide hints, which is done with the ",Object(s.b)("inlineCode",{parentName:"p"},"hints")," option. Here is an example of a Free Text Question with three hints:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What is the difference between a z-test and a t-test? How does sample size affect this difference?"\n    hints={["What null distribution does each test use?", "How does sample size affect degrees of freedom for the t-distribution?", "What happens when we increase degrees of freedom for a t-distribution?"]}\n/>\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"Hints",src:n(4665).default})),Object(s.b)("p",null,"Each hint is entered between quotes, with commas separating the hints. The order in which the hints are entered is the order in which they appear when the ",Object(s.b)("strong",{parentName:"p"},"Get Hint")," or ",Object(s.b)("strong",{parentName:"p"},"Next Hint")," button is clicked. Note that the hints must be wrapped in ",Object(s.b)("inlineCode",{parentName:"p"},"{[ ]}")," in the tag."),Object(s.b)("h2",{id:"some-other-question-components"},"Some Other Question Components"),Object(s.b)("h3",{id:"number-questions"},"Number Questions"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://isledocs.com/docs/number-question"},"Number Questions")," provide a box in which students type a numerical answer. Here is an example of a Number Question, with a solution provided:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<NumberQuestion\n    question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"\n    solution={1}\n/>\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"Number Question",src:n(4666).default})),Object(s.b)("p",null,"By default, the ",Object(s.b)("strong",{parentName:"p"},"Your answer")," box will be 0 until the student enters their own answer. If a solution is provided, once the student submits their response the correct solution will be displayed and the student will receive a message indicating whether their answer is correct. To prevent students from seeing the solution when they submit, you can set the ",Object(s.b)("inlineCode",{parentName:"p"},"provideFeedback")," option to false:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<NumberQuestion\n    question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"\n    solution={1}\n    provideFeedback={false}\n/>\n')),Object(s.b)("p",null,"For checking whether solutions are correct, the ",Object(s.b)("inlineCode",{parentName:"p"},"digits")," option is also useful. ",Object(s.b)("inlineCode",{parentName:"p"},"digits")," specifies the number of digits for which the answer supplied by the student must match the solution to be considered correct (defaults to 3)."),Object(s.b)("h3",{id:"multiple-choice-questions"},"Multiple Choice Questions"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://isledocs.com/docs/multiple-choice-question"},"Multiple Choice Questions")," provide a set of answers for the students to choose between. Here is an example of a multiple choice question:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<MultipleChoiceQuestion\n    question="What does ISLE stand for?"\n    answers={[\n        {content:"Nothing", explanation:""},\n        {content:"Is Statistics Like Estimation?", explanation:""},\n        {content:"Integrated Statistics Learning Environment", explanation:""},\n        {content:"Information Seminar on Loud Explosions", explanation:""}\n    ]}\n    solution={2}\n    provideFeedback="full"\n/>\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"Multiple Choice Question",src:n(4667).default})),Object(s.b)("p",null,"There is are a few things to note about the syntax for a multiple choice question. First, the ",Object(s.b)("inlineCode",{parentName:"p"},"answers")," choices must be provided in a very specific format. Each answer choice is written as ",Object(s.b)("inlineCode",{parentName:"p"},'{content:"", explanation:""}')," where the ",Object(s.b)("inlineCode",{parentName:"p"},"content")," is the displayed answer option, and the ",Object(s.b)("inlineCode",{parentName:"p"},"explanation")," is optional text visible after the question has been submitted to explain why the answer choice is correct or incorrect. The number of answer choices can be varied, but each option must be separated by a comma. Also, note that the list of answer choices is wrapped in ",Object(s.b)("inlineCode",{parentName:"p"},"{[ ]}")," in the tag."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"solution")," field specifies the correct answer choice(s). The choices are 0-indexed, so 0 referes to the first choice, 1 to the second, 2 to the third, and so on. If the solution is given just as a number (e.g., ",Object(s.b)("inlineCode",{parentName:"p"},"solution={2}"),') then the students can select only one answer. To allow students to select multiple answers ("choose all that apply"), the solution must be given in square brackets (e.g., ',Object(s.b)("inlineCode",{parentName:"p"},"solution={[2]}")," means that students can select multiple answers, but only the third option is correct). If multiple options are correct, all correct options should be given in square brackets and separated by commas (e.g., ",Object(s.b)("inlineCode",{parentName:"p"},"solution={[0, 2]}")," means that students can select multiple answers, and the first and third options are correct)."),Object(s.b)("p",null,"Feedback on student answers for Multiple Choice Questions can be provided either as ",Object(s.b)("inlineCode",{parentName:"p"},"full"),", ",Object(s.b)("inlineCode",{parentName:"p"},"incremental"),", or ",Object(s.b)("inlineCode",{parentName:"p"},"none"),", using the ",Object(s.b)("inlineCode",{parentName:"p"},"provideFeedback")," field (the default is ",Object(s.b)("inlineCode",{parentName:"p"},"incremental"),"). If ",Object(s.b)("inlineCode",{parentName:"p"},"full"),", feedback including the correct answer is displayed after learners submit their answers; if ",Object(s.b)("inlineCode",{parentName:"p"},"incremental"),", feedback is only displayed for the selected answer; if ",Object(s.b)("inlineCode",{parentName:"p"},"none"),", no feedback is returned. Try out these different feedback options with the question above and see how they behave!"),Object(s.b)("h2",{id:"viewing-student-responses-and-feedback"},"Viewing Student Responses and Feedback"),Object(s.b)("p",null,"Once you have posted your lesson to ISLE and students are submitting answers to questions, you can view the student submissions and any feedback. To see student responses, open the ISLE lesson in your course dashboard, and click the ",Object(s.b)("strong",{parentName:"p"},"Answers")," button for the question. To see student feedback, click the ",Object(s.b)("strong",{parentName:"p"},"Responses")," button next to your feedback buttons for the questions (if you have included feedback buttons)."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Answers",src:n(4668).default})),Object(s.b)("h2",{id:"putting-questions-together"},"Putting Questions Together"),Object(s.b)("h3",{id:"pages"},"Pages"),Object(s.b)("p",null,"For reasons of space, you may wish to put a group of related questions into the same space:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Pages Questions",src:n(4669).default})),Object(s.b)("p",null,"This would allow, for example, a group of questions to reference a single dataset or image without students having to repeatedly scroll up and down. This uses ",Object(s.b)("inlineCode",{parentName:"p"},"<Pages>"),", a custom tag that allows users to easily move between pages, with content on each page. The ISLE code to make the Pages shown in the gif above is"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<Pages>\n    <div>\n    <FreeTextQuestion\n        question="Here is a free text question"\n    />\n    </div>\n\n    <div>\n    <NumberQuestion\n        question="Here is a number question" \n    />\n    </div>\n</Pages>\n')),Object(s.b)("p",null,"Everything we want in the Pages is contained within ",Object(s.b)("inlineCode",{parentName:"p"},"<Pages> </Pages>"),". Each page is contained within a ",Object(s.b)("inlineCode",{parentName:"p"},"<div> </div>")," that divides the questions. If we want, we can also put other ISLE content into a page, not just questions. Here is an example that includes some additional text, some LaTeX, and an image:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<Pages>\n    <div>\n    Let $X \\sim N(\\mu, \\sigma^2)$. Then $X$ has the following pdf:\n    $$f(x) = \\frac{1}{\\sqrt{2\\pi \\sigma^2}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}} $$\n    <NumberQuestion\n        question="If the distribution has mean 0 and variance 1, what is the height of the pdf at x=0?"\n    \n    />\n    </div>\n\n    <div>\n    Paul the octopus correctly predicted the outcome of all 7 of Germany\'s matches in the 2010 World Cup. Before each match, his handlers would put food into two containers adorned with the flags of the two countries. The container that Paul chose was his prediction for the match.\n\n    ![Paul](https://cdn1.spiegel.de/images/image-110422-860_poster_16x9-ltgh-110422.jpg "Paul the octopus")\n\n    <FreeTextQuestion\n        question="Suppose you want to predict the outcome of all of Germany\'s matches in the 2022 World Cup, but unlike Paul you will make all your predictions before the tournament starts. If both you and Paul are guessing, do you have the same probability of getting all the outcomes correct?"\n    />\n\n    </div>\n</Pages>\n')),Object(s.b)("h3",{id:"question-forms"},"Question Forms"),Object(s.b)("p",null,"In other cases, you may wish to have several parts to a question that all get submitted together. For example, a question may require both a free text and a numeric input. This can be done by ",Object(s.b)("strong",{parentName:"p"},"Question Forms"),", which allow two or more questions to share the same ",Object(s.b)("strong",{parentName:"p"},"Submit")," button:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Question Form",src:n(4670).default})),Object(s.b)("p",null,"The code for the image shown here is"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n')))}l.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,h=d["".concat(a,".").concat(p)]||d[p]||b[p]||s;return n?i.a.createElement(h,r(r({ref:t},u),{},{components:n})):i.a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var u=2;u<s;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4661:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/free_text_question-e5aeff22bfcd30f8f36eee108e2db24e.png"},4662:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/free_text_solution-75ff75d667154078ccacaede5f991f14.png"},4663:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/question_text_markdown-2fdd6256a9c4da1ec2cc237016aaae0d.png"},4664:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/feedback_buttons-1b40e8d13cb5d3801938023bd93cb14b.png"},4665:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/hints-068fab6294a59ec0fd504564dc62e7c5.gif"},4666:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/number_question-9c1459b959163ac17202e91f9690e2b7.png"},4667:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/multiple_choice_question-3f0752ffc79a792bd903518ccc865b77.png"},4668:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/viewing_responses-6cd70b6a711b2f25dc1c493154f9f1ba.gif"},4669:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pages_questions-5dd4390b630477bae18b6ebfbb39570c.gif"},4670:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/question_form-4d3210c1f6620258fd0a42a4eb8883af.png"}}]);