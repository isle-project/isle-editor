"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36934],{603905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(202784);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},766789:function(e,t,o){t.Z=o.p+"assets/images/upload_file-2003e7760bfe7627cb295219f7bea3eb.gif"},899829:function(e,t,o){o.r(t),o.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var n=o(603905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&p(e,o,t[o]);if(l)for(var o of l(t))u.call(t,o)&&p(e,o,t[o]);return e};const d={id:"editor-images",title:"Including Images and Videos",sidebar_label:"Images"},m=void 0,h={unversionedId:"tutorials/editor-images",id:"tutorials/editor-images",title:"Including Images and Videos",description:"Images",source:"@site/docs/tutorials/editor-images.md",sourceDirName:"tutorials",slug:"/tutorials/editor-images",permalink:"/el/docs/tutorials/editor-images",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-images.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1599156245,formattedLastUpdatedAt:"3 \u03a3\u03b5\u03c0 2020",frontMatter:{id:"editor-images",title:"Including Images and Videos",sidebar_label:"Images"},sidebar:"docs",previous:{title:"Text",permalink:"/el/docs/tutorials/editor-text"},next:{title:"Using Questions",permalink:"/el/docs/tutorials/question-components"}},g={},f=[{value:"Images",id:"images",level:2},{value:"Uploading Images to Course Files",id:"uploading-images-to-course-files",level:3},{value:"Videos",id:"videos",level:2}],k={toc:f};function b(e){var t,r=e,{components:p}=r,d=((e,t)=>{var o={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(o[n]=e[n]);return o})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),d),a(t,i({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h2",c({},{id:"images"}),"Images"),(0,n.kt)("p",null,"Markdown syntax can be used to embed images in ISLE lessons, which takes the general form"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'![Alt text](path "optional title")\n')),(0,n.kt)("p",null,"This way, we can easily embed images that are hosted online in an ISLE lesson. for example, to include a picture of Paul the octopus from the 2010 World Cup, we could do"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'![Paul the octopus](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG "Paul the octopus")\n')),(0,n.kt)("p",null,"which renders to"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG",alt:"Paul",title:"Paul the octopus"}))),(0,n.kt)("p",null,"(hover over the image to see the title provided)."),(0,n.kt)("p",null,"Alternatively, images can be included with custom ",(0,n.kt)("inlineCode",{parentName:"p"},"<Image />")," tags. Since Markdown ",(0,n.kt)("a",c({parentName:"p"},{href:"https://daringfireball.net/projects/markdown/syntax#img"}),"does not")," support specifying image dimensions, you can use HTML ",(0,n.kt)("inlineCode",{parentName:"p"},"<Image />")," syntax to include an image and customize its width and height. For example, to specify dimensions for the picture of Paul the octopus:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG" width="200px" height="200px" />\n')),(0,n.kt)("p",null,"which becomes"),(0,n.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG",width:"200",height:"200"}),(0,n.kt)("p",null,"Most commonly, you want to only set either the width or the height and set the other one to ",(0,n.kt)("inlineCode",{parentName:"p"},"auto")," to not stretch the image and preserve its original aspect ratio. Common ways of setting the dimensions is as pixels (e.g.,",(0,n.kt)("inlineCode",{parentName:"p"},"200px"),") or in percent of the containing block (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"20%"),")."),(0,n.kt)("h3",c({},{id:"uploading-images-to-course-files"}),"Uploading Images to Course Files"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But what if we want to use an image we've created locally, rather than one hosted on the web?")," The ISLE course dashboard provides an easy to to upload files. Suppose we have the following plot that we want to embed in our lesson:"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://isle.heinz.cmu.edu/Demo_histograms.png",alt:"histograms"}))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to your ISLE dashboard and select the course."),(0,n.kt)("li",{parentName:"ol"},"Click the blue ",(0,n.kt)("strong",{parentName:"li"},"Course Data")," button (pie-chart symbol) in the top bar."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Owner Files"),"."),(0,n.kt)("li",{parentName:"ol"},"Click the green ",(0,n.kt)("strong",{parentName:"li"},"Upload file")," button; select the file you wish to upload."),(0,n.kt)("li",{parentName:"ol"},"To see the uploaded file and get the url, click ",(0,n.kt)("strong",{parentName:"li"},"Open")," next to the file name or use the button to directly copy the URL into your clipboard.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Owner",src:o(766789).Z,width:"1535",height:"820"})),(0,n.kt)("p",null,"Now you can use the url of the uploaded image to embed the image in your ISLE lesson. For example, we can include the plot above by"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)\n")),(0,n.kt)("br",null),(0,n.kt)("h2",c({},{id:"videos"}),"Videos"),(0,n.kt)("p",null,"As with images, videos must be hosted online (such as on YouTube) to be embedded in an ISLE lesson. To include a video, you can use ISLE's custom ",(0,n.kt)("inlineCode",{parentName:"p"},"<VideoPlayer />")," tag. For example, to include ",(0,n.kt)("a",c({parentName:"p"},{href:"https://www.youtube.com/watch?v=wPqtzj5VZus"}),"this")," video of Trevor Hastie speaking on gradient boosting, we could use"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'<VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />\n')),(0,n.kt)("p",null,"This tag also provides several customization options, including the dimensions of the embedded video, whether or not it plays automatically, and the start time of the video. Full details can be found in the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://isledocs.com/docs/video-player"}),"ISLE docs"),"."))}b.isMDXComponent=!0}}]);