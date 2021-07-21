(self.webpackChunk=self.webpackChunk||[]).push([[9193],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},581524:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},SolutionButton:function(){return u},default:function(){return c}});var a=n(722122),r=n(419756),o=(n(202784),n(603905)),l=["components"],i={id:"editor-text",title:"Entering Text",sidebar_label:"Text"},p=void 0,s={unversionedId:"tutorials/editor-text",id:"tutorials/editor-text",isDocsHomePage:!1,title:"Entering Text",description:"Markdown",source:"@site/docs/tutorials/editor-text.md",sourceDirName:"tutorials",slug:"/tutorials/editor-text",permalink:"/zh/docs/tutorials/editor-text",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"2020/8/31",frontMatter:{id:"editor-text",title:"Entering Text",sidebar_label:"Text"},sidebar:"docs",previous:{title:"Editor Introduction",permalink:"/zh/docs/tutorials/editor-intro"},next:{title:"Images",permalink:"/zh/docs/tutorials/editor-images"}},d=[{value:"Markdown",id:"markdown",children:[]},{value:"LaTeX",id:"latex",children:[]},{value:"HTML",id:"html",children:[]},{value:"Your Turn",id:"your-turn",children:[]}],u=function(e){return(0,o.kt)("div",null,(0,o.kt)("button",{className:"solution_button",onClick:function(){var e=document.getElementById("solution_text");"none"===e.style.display?e.style.display="block":e.style.display="none"}}," Show solution "))},m={toc:d,SolutionButton:u};function c(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"markdown"},"Markdown"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/"},"Markdown")," (a readable syntax that gets converted to HTML) is used to write most of the text in ISLE lessons. If you haven't used Markdown before, don't worry! Markdown is light-weight, and much of what you want can be typed directly into the editor with little or no additional syntax. Below is a list of a few common text formatting tools; a nice summary of basic syntax can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"here")," and an extensive guide can also be found ",(0,o.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Headings"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"# Sample")," is rendered as ",(0,o.kt)("span",null," ",(0,o.kt)("h1",null," Sample ")," ")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"## Sample")," is rendered as ",(0,o.kt)("span",null," ",(0,o.kt)("h2",null," Sample ")," ")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"### Sample")," is rendered as ",(0,o.kt)("span",null," ",(0,o.kt)("h3",null," Sample ")," "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Emphasis"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"*sample*")," is rendered as ",(0,o.kt)("em",{parentName:"p"},"sample")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"**sample**")," is rendered as ",(0,o.kt)("strong",{parentName:"p"},"sample"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Links"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"[Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace)")," renders as ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ada_Lovelace"},"Ada Lovelace")," (and you can click to follow the link)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lists"),":"),(0,o.kt)("p",null,"Markdown supports both ordered and unordered lists. An unordered list is made with asterisks (",(0,o.kt)("inlineCode",{parentName:"p"},"*"),") and hyphens (",(0,o.kt)("inlineCode",{parentName:"p"},"-"),") for the bullet points. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* Item 1\n* Item 2\n    - sub-item\n")),(0,o.kt)("p",null,"renders as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Item 1"),(0,o.kt)("li",{parentName:"ul"},"Item 2",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"sub-item")))),(0,o.kt)("p",null,"For an ordered list, we use numbers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Item 1\n2. Item 2\n3. Item 3\n")),(0,o.kt)("p",null,"becomes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Item 1"),(0,o.kt)("li",{parentName:"ol"},"Item 2"),(0,o.kt)("li",{parentName:"ol"},"Item 3")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tables"),":"),(0,o.kt)("p",null,"To make tables in Markdown, vertical bars (",(0,o.kt)("inlineCode",{parentName:"p"},"|"),") are used to define columns and three or more hyphens (",(0,o.kt)("inlineCode",{parentName:"p"},"---"),") specify the column headings. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"| Book | Author |\n| --- | --- |\n| Harry Potter and the Goblet of Fire | J.K. Rowling |\n| 1984 | George Orwell |\n| Americanah | Chimamanda Ngozi Adichie |\n")),(0,o.kt)("p",null,"is rendered similar to"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Book"),(0,o.kt)("th",{parentName:"tr",align:null},"Author"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Harry Potter and the Goblet of Fire"),(0,o.kt)("td",{parentName:"tr",align:null},"J.K. Rowling")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1984"),(0,o.kt)("td",{parentName:"tr",align:null},"George Orwell")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Americanah"),(0,o.kt)("td",{parentName:"tr",align:null},"Chimamanda Ngozi Adichie")))),(0,o.kt)("h2",{id:"latex"},"LaTeX"),(0,o.kt)("p",null,"LaTeX equations can be included by using the special ",(0,o.kt)("inlineCode",{parentName:"p"},"TeX")," tag. Full details of the tag options can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/tex"},"docs"),"; the options you will use most are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"raw"),": the LaTeX code to render."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"displayMode"),": inline (false) or display mode (true). Defaults to false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"numbered"),": whether to display an equation number of display mode equations. Defaults to false.")),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},'<TeX raw="\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}"  displayMode={true} />')," is rendered as"),(0,o.kt)("img",{src:"http://latex.codecogs.com/gif.latex?\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}"}),(0,o.kt)("p",null,"Alternatively, inline LaTeX can be written with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ $")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"\\( \\)"),") and display-mode LaTeX equations can also be written with ",(0,o.kt)("inlineCode",{parentName:"p"},"$$ $$")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"\\[ \\]"),") rather than the ",(0,o.kt)("inlineCode",{parentName:"p"},"TeX")," tag. For example, the same equation as above can be created by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\\[\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}\\]\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$$\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}$$\n")),(0,o.kt)("h2",{id:"html"},"HTML"),(0,o.kt)("p",null,"In addition to custom ISLE tags like ",(0,o.kt)("inlineCode",{parentName:"p"},"TeX"),", standard HTML tags are supported by ISLE. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    <ul> \n        <li> visualization </li>\n        <li> data analysis </li>\n        <li> statistical modeling </li>\n    </ul>\n")),(0,o.kt)("p",null,"is rendered as"),(0,o.kt)("ul",null,(0,o.kt)("li",null," visualization "),(0,o.kt)("li",null," data analysis "),(0,o.kt)("li",null," statistical modeling ")),(0,o.kt)("p",null,"A comprehensive cheat sheet on HTML tags can be found ",(0,o.kt)("a",{parentName:"p",href:"https://digital.com/tools/html-cheatsheet/"},"here"),"."),(0,o.kt)("h2",{id:"your-turn"},"Your Turn"),(0,o.kt)("p",null,"In the ISLE editor, re-create the text pictured below. To show the solution, click the ",(0,o.kt)("strong",{parentName:"p"},"Show solution")," button below the image."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ISLE Text Example",src:n(85204).Z})),(0,o.kt)("pre",{id:"solution_text",style:{display:"none",wordBreak:"normal",wordWrap:"normal",whiteSpace:"pre-wrap",color:"rgb(191, 199, 213)",backgroundColor:"rgb(41, 45, 62)",padding:12}},'(Here\'s the solution - your preamble probably looks different)\n\n---\ntitle: "Tutorial example"\nauthor: Ciaran\ndate: 17/07/2019\nstate:\n---\n\n# Intro to the ISLE Editor\n\nThe ISLE editor allows users to write and and export instructional content.\n\n## Entering Text \n\n**Text** in ISLE is entered using Markdown and HTML syntax. You can learn more about Markdown at the [Markdown home page](https://daringfireball.net/projects/markdown/). \n\n## LaTeX Equations\n\n*Inline* and *display mode* LaTeX equations can be included, like <TeX raw="E(X) = int limits_{-infty}^infty x f(x) dx" /> and <TeX raw="V(X) = E(X^2) - E(X)^2" displayMode={true}/>\n\n\n## Sample Types of ISLE Lessons\n\n* Labs\n* Homeworks\n* Projects\n* Lecture Notes\n'),(0,o.kt)(u,{mdxType:"SolutionButton"}))}c.isMDXComponent=!0},85204:function(e,t,n){"use strict";e.exports=n.p+"39036538e00bcdf85638.png"}}]);