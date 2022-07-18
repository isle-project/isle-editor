"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59193],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44022:function(e,t,n){t.Z=n.p+"assets/images/isle_text_example-e880dd8a368814d69c70ae7bc5f894e2.png"},326769:function(e,t,n){n.r(t),n.d(t,{SolutionButton:function(){return b},assets:function(){return f},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return h}});var a=n(603905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&d(e,n,t[n]);return e};const m={id:"editor-text",title:"Entering Text",sidebar_label:"Text"},c=void 0,k={unversionedId:"tutorials/editor-text",id:"tutorials/editor-text",title:"Entering Text",description:"Markdown",source:"@site/docs/tutorials/editor-text.md",sourceDirName:"tutorials",slug:"/tutorials/editor-text",permalink:"/es/docs/tutorials/editor-text",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31 ago 2020",frontMatter:{id:"editor-text",title:"Entering Text",sidebar_label:"Text"},sidebar:"docs",previous:{title:"Editor Introduction",permalink:"/es/docs/tutorials/editor-intro"},next:{title:"Images",permalink:"/es/docs/tutorials/editor-images"}},f={},h=[{value:"Markdown",id:"markdown",level:2},{value:"LaTeX",id:"latex",level:2},{value:"HTML",id:"html",level:2},{value:"Your Turn",id:"your-turn",level:2}],b=e=>(0,a.kt)("div",null,(0,a.kt)("button",{className:"solution_button",onClick:()=>{const e=document.getElementById("solution_text");"none"===e.style.display?e.style.display="block":e.style.display="none"}}," Show solution ")),g={toc:h,SolutionButton:b};function y(e){var t,r=e,{components:d}=r,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),m),o(t,l({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h2",u({},{id:"markdown"}),"Markdown"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://daringfireball.net/projects/markdown/"}),"Markdown")," (a readable syntax that gets converted to HTML) is used to write most of the text in ISLE lessons. If you haven't used Markdown before, don't worry! Markdown is light-weight, and much of what you want can be typed directly into the editor with little or no additional syntax. Below is a list of a few common text formatting tools; a nice summary of basic syntax can be found ",(0,a.kt)("a",u({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/"}),"here")," and an extensive guide can also be found ",(0,a.kt)("a",u({parentName:"p"},{href:"https://daringfireball.net/projects/markdown/syntax"}),"here"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Headings"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"# Sample")," is rendered as ",(0,a.kt)("span",null," ",(0,a.kt)("h1",null," Sample ")," ")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"## Sample")," is rendered as ",(0,a.kt)("span",null," ",(0,a.kt)("h2",null," Sample ")," ")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"### Sample")," is rendered as ",(0,a.kt)("span",null," ",(0,a.kt)("h3",null," Sample ")," "))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Emphasis"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"*sample*")," is rendered as ",(0,a.kt)("em",{parentName:"p"},"sample")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"**sample**")," is rendered as ",(0,a.kt)("strong",{parentName:"p"},"sample"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Links"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"[Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace)")," renders as ",(0,a.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Ada_Lovelace"}),"Ada Lovelace")," (and you can click to follow the link)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lists"),":"),(0,a.kt)("p",null,"Markdown supports both ordered and unordered lists. An unordered list is made with asterisks (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),") and hyphens (",(0,a.kt)("inlineCode",{parentName:"p"},"-"),") for the bullet points. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"* Item 1\n* Item 2\n    - sub-item\n")),(0,a.kt)("p",null,"renders as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Item 1"),(0,a.kt)("li",{parentName:"ul"},"Item 2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sub-item")))),(0,a.kt)("p",null,"For an ordered list, we use numbers:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"1. Item 1\n2. Item 2\n3. Item 3\n")),(0,a.kt)("p",null,"becomes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Item 1"),(0,a.kt)("li",{parentName:"ol"},"Item 2"),(0,a.kt)("li",{parentName:"ol"},"Item 3")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tables"),":"),(0,a.kt)("p",null,"To make tables in Markdown, vertical bars (",(0,a.kt)("inlineCode",{parentName:"p"},"|"),") are used to define columns and three or more hyphens (",(0,a.kt)("inlineCode",{parentName:"p"},"---"),") specify the column headings. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"| Book | Author |\n| --- | --- |\n| Harry Potter and the Goblet of Fire | J.K. Rowling |\n| 1984 | George Orwell |\n| Americanah | Chimamanda Ngozi Adichie |\n")),(0,a.kt)("p",null,"is rendered similar to"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Book"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Author"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Harry Potter and the Goblet of Fire"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"J.K. Rowling")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"1984"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"George Orwell")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Americanah"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Chimamanda Ngozi Adichie")))),(0,a.kt)("h2",u({},{id:"latex"}),"LaTeX"),(0,a.kt)("p",null,"LaTeX equations can be included by using the special ",(0,a.kt)("inlineCode",{parentName:"p"},"TeX")," tag. Full details of the tag options can be found in the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://isledocs.com/docs/tex"}),"docs"),"; the options you will use most are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"raw"),": the LaTeX code to render."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayMode"),": inline (false) or display mode (true). Defaults to false."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbered"),": whether to display an equation number of display mode equations. Defaults to false.")),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},'<TeX raw="\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}"  displayMode={true} />')," is rendered as"),(0,a.kt)("img",{src:"http://latex.codecogs.com/gif.latex?\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}"}),(0,a.kt)("p",null,"Alternatively, inline LaTeX can be written with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ $")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\( \\)"),") and display-mode LaTeX equations can also be written with ",(0,a.kt)("inlineCode",{parentName:"p"},"$$ $$")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\[ \\]"),") rather than the ",(0,a.kt)("inlineCode",{parentName:"p"},"TeX")," tag. For example, the same equation as above can be created by"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"\\[\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}\\]\n")),(0,a.kt)("p",null,"and"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"$$\\frac{1}{\\sqrt{2\\pi}\\sigma^2} e^{-\\frac{1}{2\\sigma^2}(x - \\mu)^2}$$\n")),(0,a.kt)("h2",u({},{id:"html"}),"HTML"),(0,a.kt)("p",null,"In addition to custom ISLE tags like ",(0,a.kt)("inlineCode",{parentName:"p"},"TeX"),", standard HTML tags are supported by ISLE. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"    <ul> \n        <li> visualization </li>\n        <li> data analysis </li>\n        <li> statistical modeling </li>\n    </ul>\n")),(0,a.kt)("p",null,"is rendered as"),(0,a.kt)("ul",null,(0,a.kt)("li",null," visualization "),(0,a.kt)("li",null," data analysis "),(0,a.kt)("li",null," statistical modeling ")),(0,a.kt)("p",null,"A comprehensive cheat sheet on HTML tags can be found ",(0,a.kt)("a",u({parentName:"p"},{href:"https://digital.com/tools/html-cheatsheet/"}),"here"),"."),(0,a.kt)("h2",u({},{id:"your-turn"}),"Your Turn"),(0,a.kt)("p",null,"In the ISLE editor, re-create the text pictured below. To show the solution, click the ",(0,a.kt)("strong",{parentName:"p"},"Show solution")," button below the image."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ISLE Text Example",src:n(44022).Z,width:"958",height:"745"})),(0,a.kt)("pre",{id:"solution_text",style:{display:"none",wordBreak:"normal",wordWrap:"normal",whiteSpace:"pre-wrap",color:"rgb(191, 199, 213)",backgroundColor:"rgb(41, 45, 62)",padding:12}},'(Here\'s the solution - your preamble probably looks different)\n\n---\ntitle: "Tutorial example"\nauthor: Ciaran\ndate: 17/07/2019\nstate:\n---\n\n# Intro to the ISLE Editor\n\nThe ISLE editor allows users to write and and export instructional content.\n\n## Entering Text \n\n**Text** in ISLE is entered using Markdown and HTML syntax. You can learn more about Markdown at the [Markdown home page](https://daringfireball.net/projects/markdown/). \n\n## LaTeX Equations\n\n*Inline* and *display mode* LaTeX equations can be included, like <TeX raw="E(X) = int limits_{-infty}^infty x f(x) dx" /> and <TeX raw="V(X) = E(X^2) - E(X)^2" displayMode={true}/>\n\n\n## Sample Types of ISLE Lessons\n\n* Labs\n* Homeworks\n* Projects\n* Lecture Notes\n'),(0,a.kt)(b,{mdxType:"SolutionButton"}))}y.isMDXComponent=!0}}]);