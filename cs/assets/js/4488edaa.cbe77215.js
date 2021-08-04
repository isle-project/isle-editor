(self.webpackChunk=self.webpackChunk||[]).push([[5890],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||s;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},379576:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(722122),i=n(419756),s=(n(202784),n(603905)),a=["components"],r={id:"question-components",title:"How to Use Questions",sidebar_label:"Using Questions"},u=void 0,l={unversionedId:"tutorials/question-components",id:"tutorials/question-components",isDocsHomePage:!1,title:"How to Use Questions",description:"ISLE provides a wide variety of question components that allow different types of input, from numeric values and free text, to matching and multiple choice. Complete documentation of the different question types can be found in the ISLE docs under Question Components. In this tutorial, we will cover basic uses of some of the common kinds. For more customization options, see the documentation for each question component.",source:"@site/docs/tutorials/question-components.md",sourceDirName:"tutorials",slug:"/tutorials/question-components",permalink:"/cs/docs/tutorials/question-components",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/question-components.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584925264,formattedLastUpdatedAt:"22. 3. 2020",frontMatter:{id:"question-components",title:"How to Use Questions",sidebar_label:"Using Questions"},sidebar:"docs",previous:{title:"Images",permalink:"/cs/docs/tutorials/editor-images"},next:{title:"Including Data",permalink:"/cs/docs/tutorials/including-data"}},c=[{value:"Free Text Questions",id:"free-text-questions",children:[]},{value:"Common Question Elements",id:"common-question-elements",children:[{value:"<code>question</code>",id:"question",children:[]},{value:"<code>feedback</code>",id:"feedback",children:[]},{value:"<code>hints</code>",id:"hints",children:[]}]},{value:"Some Other Question Components",id:"some-other-question-components",children:[{value:"Number Questions",id:"number-questions",children:[]},{value:"Multiple Choice Questions",id:"multiple-choice-questions",children:[]}]},{value:"Viewing Student Responses and Feedback",id:"viewing-student-responses-and-feedback",children:[]},{value:"Putting Questions Together",id:"putting-questions-together",children:[{value:"Pages",id:"pages",children:[]},{value:"Question Forms",id:"question-forms",children:[]}]}],p={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ISLE provides a wide variety of question components that allow different types of input, from numeric values and free text, to matching and multiple choice. Complete documentation of the different question types can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/free-text-question"},"ISLE docs")," under ",(0,s.kt)("strong",{parentName:"p"},"Question Components"),". In this tutorial, we will cover basic uses of some of the common kinds. For more customization options, see the documentation for each question component."),(0,s.kt)("h3",{id:"free-text-questions"},"Free Text Questions"),(0,s.kt)("p",null,"Let's begin by looking at ",(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/free-text-question"},"Free Text Questions"),", which provide a text box in which users type the answer. To include a free text question, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"<FreeTextQuestion/>")," tag. Here is a simple example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What did you do over the summer?"\n/>\n')),(0,s.kt)("p",null,"This is displayed as"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Free Text",src:n(158488).default})),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option in the ",(0,s.kt)("inlineCode",{parentName:"p"},"<FreeTextQuestion/>")," tag is where you specify the question. Students then answer the question in the text box, and click the ",(0,s.kt)("strong",{parentName:"p"},"Submit")," button when done. If desired, you can also provide a ",(0,s.kt)("em",{parentName:"p"},"solution")," to the question. Once students have submitted their own answer, they can view your solution by clicking ",(0,s.kt)("strong",{parentName:"p"},"Show Solution"),". For some question types, ISLE checks the submitted answers against the provided solution, but this is not done for Free Text Questions. Here's an example of a Free Text Question with a provided solution:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion \n    question="Provide a geometric interpretation for the fitted values in linear regression." \n    solution="Projection of the observed response onto the columnspace of the covariate matrix."\n/>\n')),(0,s.kt)("p",null,"Clicking ",(0,s.kt)("strong",{parentName:"p"},"Show Solution")," results in the following:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Free Text Solution",src:n(226012).default})),(0,s.kt)("h2",{id:"common-question-elements"},"Common Question Elements"),(0,s.kt)("p",null,"Each question component includes a ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option. Some components (like Free Text and Number Questions) allow you to provide an optional ",(0,s.kt)("inlineCode",{parentName:"p"},"solution"),", while for other components like Match List Questions the solution is determined by the code to construct the answer choices. All question components also include the option of ",(0,s.kt)("inlineCode",{parentName:"p"},"feedback")," buttons and question ",(0,s.kt)("inlineCode",{parentName:"p"},"hints"),"."),(0,s.kt)("h3",{id:"question"},(0,s.kt)("inlineCode",{parentName:"h3"},"question")),(0,s.kt)("p",null,"Question text for all question components is provided in the same way: through the ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option. We've already seen simple examples of this for the Free Text Question, but in some circumstances we might want question text to be more complex. For example, we might wish to include some of the text elements covered in the Text tutorial. However, this requires adding some syntax to the ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Markdown"),":"),(0,s.kt)("p",null,"Markdown syntax can be used with the ",(0,s.kt)("inlineCode",{parentName:"p"},"question")," option through an HTML ",(0,s.kt)("inlineCode",{parentName:"p"},"<Text/>")," component with the ",(0,s.kt)("inlineCode",{parentName:"p"},"raw")," option. This can also be used to create multiple chunks of text in the question. For example, the following Free Text Question includes several different Markdown examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<FreeTextQuestion\n    question={<Text raw={`We can include *emphasis*, \n    \n    lists:\n    * item \n    * item\n\n    tables:\n    | column 1 | column 2 |\n    | --- | --- |\n    | row 1 | row 1 |\n\n    even images:\n    ![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)`} />}\n/>\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Question Text Markdown",src:n(885885).default})),(0,s.kt)("h3",{id:"feedback"},(0,s.kt)("inlineCode",{parentName:"h3"},"feedback")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Feedback",src:n(355347).default})),(0,s.kt)("p",null,"The three feedback buttons, shown above, allow students to give feedback on individual questions. The left-hand button allows students to note that they are confused on the question; the center button allows students to note that the question makes sense; and the right-hand button allows students to give specific feedback comments in more detail. These feedback buttons are controlled by the ",(0,s.kt)("inlineCode",{parentName:"p"},"feedback")," option, which defaults to true. To turn off feedback for a question, set the ",(0,s.kt)("inlineCode",{parentName:"p"},"feedback")," option to false. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What did you do over the summer?"\n    feedback={false}\n/>\n')),(0,s.kt)("h3",{id:"hints"},(0,s.kt)("inlineCode",{parentName:"h3"},"hints")),(0,s.kt)("p",null,"For some questions you may wish to provide hints, which is done with the ",(0,s.kt)("inlineCode",{parentName:"p"},"hints")," option. Here is an example of a Free Text Question with three hints:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<FreeTextQuestion\n    question="What is the difference between a z-test and a t-test? How does sample size affect this difference?"\n    hints={["What null distribution does each test use?", "How does sample size affect degrees of freedom for the t-distribution?", "What happens when we increase degrees of freedom for a t-distribution?"]}\n/>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hints",src:n(898410).default})),(0,s.kt)("p",null,"Each hint is entered between quotes, with commas separating the hints. The order in which the hints are entered is the order in which they appear when the ",(0,s.kt)("strong",{parentName:"p"},"Get Hint")," or ",(0,s.kt)("strong",{parentName:"p"},"Next Hint")," button is clicked. Note that the hints must be wrapped in ",(0,s.kt)("inlineCode",{parentName:"p"},"{[ ]}")," in the tag."),(0,s.kt)("h2",{id:"some-other-question-components"},"Some Other Question Components"),(0,s.kt)("h3",{id:"number-questions"},"Number Questions"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/number-question"},"Number Questions")," provide a box in which students type a numerical answer. Here is an example of a Number Question, with a solution provided:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<NumberQuestion\n    question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"\n    solution={1}\n/>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Number Question",src:n(879318).default})),(0,s.kt)("p",null,"By default, the ",(0,s.kt)("strong",{parentName:"p"},"Your answer")," box will be 0 until the student enters their own answer. If a solution is provided, once the student submits their response the correct solution will be displayed and the student will receive a message indicating whether their answer is correct. To prevent students from seeing the solution when they submit, you can set the ",(0,s.kt)("inlineCode",{parentName:"p"},"provideFeedback")," option to false:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<NumberQuestion\n    question="If a non-degenerate univariate distribution has the same variance and standard deviation, what must be its variance?"\n    solution={1}\n    provideFeedback={false}\n/>\n')),(0,s.kt)("p",null,"For checking whether solutions are correct, the ",(0,s.kt)("inlineCode",{parentName:"p"},"digits")," option is also useful. ",(0,s.kt)("inlineCode",{parentName:"p"},"digits")," specifies the number of digits for which the answer supplied by the student must match the solution to be considered correct (defaults to 3)."),(0,s.kt)("h3",{id:"multiple-choice-questions"},"Multiple Choice Questions"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/multiple-choice-question"},"Multiple Choice Questions")," provide a set of answers for the students to choose between. Here is an example of a multiple choice question:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<MultipleChoiceQuestion\n    question="What does ISLE stand for?"\n    answers={[\n        {content:"Nothing", explanation:""},\n        {content:"Is Statistics Like Estimation?", explanation:""},\n        {content:"Integrated Statistics Learning Environment", explanation:""},\n        {content:"Information Seminar on Loud Explosions", explanation:""}\n    ]}\n    solution={2}\n    provideFeedback="full"\n/>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Multiple Choice Question",src:n(400998).default})),(0,s.kt)("p",null,"There is are a few things to note about the syntax for a multiple choice question. First, the ",(0,s.kt)("inlineCode",{parentName:"p"},"answers")," choices must be provided in a very specific format. Each answer choice is written as ",(0,s.kt)("inlineCode",{parentName:"p"},'{content:"", explanation:""}')," where the ",(0,s.kt)("inlineCode",{parentName:"p"},"content")," is the displayed answer option, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"explanation")," is optional text visible after the question has been submitted to explain why the answer choice is correct or incorrect. The number of answer choices can be varied, but each option must be separated by a comma. Also, note that the list of answer choices is wrapped in ",(0,s.kt)("inlineCode",{parentName:"p"},"{[ ]}")," in the tag."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"solution")," field specifies the correct answer choice(s). The choices are 0-indexed, so 0 referes to the first choice, 1 to the second, 2 to the third, and so on. If the solution is given just as a number (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"solution={2}"),') then the students can select only one answer. To allow students to select multiple answers ("choose all that apply"), the solution must be given in square brackets (e.g., ',(0,s.kt)("inlineCode",{parentName:"p"},"solution={[2]}")," means that students can select multiple answers, but only the third option is correct). If multiple options are correct, all correct options should be given in square brackets and separated by commas (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"solution={[0, 2]}")," means that students can select multiple answers, and the first and third options are correct)."),(0,s.kt)("p",null,"Feedback on student answers for Multiple Choice Questions can be provided either as ",(0,s.kt)("inlineCode",{parentName:"p"},"full"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"none"),", using the ",(0,s.kt)("inlineCode",{parentName:"p"},"provideFeedback")," field (the default is ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),"). If ",(0,s.kt)("inlineCode",{parentName:"p"},"full"),", feedback including the correct answer is displayed after learners submit their answers; if ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),", feedback is only displayed for the selected answer; if ",(0,s.kt)("inlineCode",{parentName:"p"},"none"),", no feedback is returned. Try out these different feedback options with the question above and see how they behave!"),(0,s.kt)("h2",{id:"viewing-student-responses-and-feedback"},"Viewing Student Responses and Feedback"),(0,s.kt)("p",null,"Once you have posted your lesson to ISLE and students are submitting answers to questions, you can view the student submissions and any feedback. To see student responses, open the ISLE lesson in your course dashboard, and click the ",(0,s.kt)("strong",{parentName:"p"},"Answers")," button for the question. To see student feedback, click the ",(0,s.kt)("strong",{parentName:"p"},"Responses")," button next to your feedback buttons for the questions (if you have included feedback buttons)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Answers",src:n(795150).default})),(0,s.kt)("h2",{id:"putting-questions-together"},"Putting Questions Together"),(0,s.kt)("h3",{id:"pages"},"Pages"),(0,s.kt)("p",null,"For reasons of space, you may wish to put a group of related questions into the same space:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Pages Questions",src:n(979933).default})),(0,s.kt)("p",null,"This would allow, for example, a group of questions to reference a single dataset or image without students having to repeatedly scroll up and down. This uses ",(0,s.kt)("inlineCode",{parentName:"p"},"<Pages>"),", a custom tag that allows users to easily move between pages, with content on each page. The ISLE code to make the Pages shown in the gif above is"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<Pages>\n    <div>\n    <FreeTextQuestion\n        question="Here is a free text question"\n    />\n    </div>\n\n    <div>\n    <NumberQuestion\n        question="Here is a number question" \n    />\n    </div>\n</Pages>\n')),(0,s.kt)("p",null,"Everything we want in the Pages is contained within ",(0,s.kt)("inlineCode",{parentName:"p"},"<Pages> </Pages>"),". Each page is contained within a ",(0,s.kt)("inlineCode",{parentName:"p"},"<div> </div>")," that divides the questions. If we want, we can also put other ISLE content into a page, not just questions. Here is an example that includes some additional text, some LaTeX, and an image:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<Pages>\n    <div>\n    Let $X \\sim N(\\mu, \\sigma^2)$. Then $X$ has the following pdf:\n    $$f(x) = \\frac{1}{\\sqrt{2\\pi \\sigma^2}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}} $$\n    <NumberQuestion\n        question="If the distribution has mean 0 and variance 1, what is the height of the pdf at x=0?"\n    \n    />\n    </div>\n\n    <div>\n    Paul the octopus correctly predicted the outcome of all 7 of Germany\'s matches in the 2010 World Cup. Before each match, his handlers would put food into two containers adorned with the flags of the two countries. The container that Paul chose was his prediction for the match.\n\n    ![Paul](https://cdn1.spiegel.de/images/image-110422-860_poster_16x9-ltgh-110422.jpg "Paul the octopus")\n\n    <FreeTextQuestion\n        question="Suppose you want to predict the outcome of all of Germany\'s matches in the 2022 World Cup, but unlike Paul you will make all your predictions before the tournament starts. If both you and Paul are guessing, do you have the same probability of getting all the outcomes correct?"\n    />\n\n    </div>\n</Pages>\n')),(0,s.kt)("h3",{id:"question-forms"},"Question Forms"),(0,s.kt)("p",null,"In other cases, you may wish to have several parts to a question that all get submitted together. For example, a question may require both a free text and a numeric input. This can be done by ",(0,s.kt)("strong",{parentName:"p"},"Question Forms"),", which allow two or more questions to share the same ",(0,s.kt)("strong",{parentName:"p"},"Submit")," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Question Form",src:n(383303).default})),(0,s.kt)("p",null,"The code for the image shown here is"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n')))}d.isMDXComponent=!0},898410:function(e,t,n){"use strict";e.exports=n.p+"1402881e3e39c4eec1ee.gif"},979933:function(e,t,n){"use strict";e.exports=n.p+"a41b2ea4b215674c7953.gif"},795150:function(e,t,n){"use strict";e.exports=n.p+"40d8f76b4434e3a20033.gif"},355347:function(e,t,n){"use strict";e.exports=n.p+"0135350335b5ee3e432b.png"},158488:function(e,t,n){"use strict";e.exports=n.p+"e70c3f59bb9a878c060b.png"},226012:function(e,t,n){"use strict";e.exports=n.p+"946cf1ff4689e33bbd82.png"},400998:function(e,t,n){"use strict";e.exports=n.p+"e4e6f70792b85497db07.png"},879318:function(e,t,n){"use strict";e.exports=n.p+"61fc681da6dc139fcd19.png"},383303:function(e,t,n){"use strict";e.exports=n.p+"6d64291a71f53b4b78c9.png"},885885:function(e,t,n){"use strict";e.exports=n.p+"d4f445c2d22e126715af.png"}}]);