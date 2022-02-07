"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6934],{603905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(202784);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return o?n.createElement(h,r(r({ref:t},p),{},{components:o})):n.createElement(h,r({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},671573:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=o(487462),i=o(263366),a=(o(202784),o(603905)),r=["components"],l={id:"editor-images",title:"Including Images and Videos",sidebar_label:"Images"},s=void 0,u={unversionedId:"tutorials/editor-images",id:"tutorials/editor-images",title:"Including Images and Videos",description:"Images",source:"@site/docs/tutorials/editor-images.md",sourceDirName:"tutorials",slug:"/tutorials/editor-images",permalink:"/docs/tutorials/editor-images",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-images.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1599156245,formattedLastUpdatedAt:"9/3/2020",frontMatter:{id:"editor-images",title:"Including Images and Videos",sidebar_label:"Images"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/tutorials/editor-text"},next:{title:"Using Questions",permalink:"/docs/tutorials/question-components"}},p=[{value:"Images",id:"images",children:[{value:"Uploading Images to Course Files",id:"uploading-images-to-course-files",children:[],level:3}],level:2},{value:"Videos",id:"videos",children:[],level:2}],d={toc:p};function c(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,"Markdown syntax can be used to embed images in ISLE lessons, which takes the general form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'![Alt text](path "optional title")\n')),(0,a.kt)("p",null,"This way, we can easily embed images that are hosted online in an ISLE lesson. for example, to include a picture of Paul the octopus from the 2010 World Cup, we could do"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'![Paul the octopus](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG "Paul the octopus")\n')),(0,a.kt)("p",null,"which renders to"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG",alt:"Paul",title:"Paul the octopus"})),(0,a.kt)("p",null,"(hover over the image to see the title provided)."),(0,a.kt)("p",null,"Alternatively, images can be included with custom ",(0,a.kt)("inlineCode",{parentName:"p"},"<Image />")," tags. Since Markdown ",(0,a.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax#img"},"does not")," support specifying image dimensions, you can use HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<Image />")," syntax to include an image and customize its width and height. For example, to specify dimensions for the picture of Paul the octopus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG" width="200px" height="200px" />\n')),(0,a.kt)("p",null,"which becomes"),(0,a.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG",width:"200",height:"200"}),(0,a.kt)("p",null,"Most commonly, you want to only set either the width or the height and set the other one to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," to not stretch the image and preserve its original aspect ratio. Common ways of setting the dimensions is as pixels (e.g.,",(0,a.kt)("inlineCode",{parentName:"p"},"200px"),") or in percent of the containing block (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"20%"),")."),(0,a.kt)("h3",{id:"uploading-images-to-course-files"},"Uploading Images to Course Files"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"But what if we want to use an image we've created locally, rather than one hosted on the web?")," The ISLE course dashboard provides an easy to to upload files. Suppose we have the following plot that we want to embed in our lesson:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://isle.heinz.cmu.edu/Demo_histograms.png",alt:"histograms"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your ISLE dashboard and select the course."),(0,a.kt)("li",{parentName:"ol"},"Click the blue ",(0,a.kt)("strong",{parentName:"li"},"Course Data")," button (pie-chart symbol) in the top bar."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Owner Files"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the green ",(0,a.kt)("strong",{parentName:"li"},"Upload file")," button; select the file you wish to upload."),(0,a.kt)("li",{parentName:"ol"},"To see the uploaded file and get the url, click ",(0,a.kt)("strong",{parentName:"li"},"Open")," next to the file name or use the button to directly copy the URL into your clipboard.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Owner",src:o(899367).Z,width:"1535",height:"820"})),(0,a.kt)("p",null,"Now you can use the url of the uploaded image to embed the image in your ISLE lesson. For example, we can include the plot above by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"videos"},"Videos"),(0,a.kt)("p",null,"As with images, videos must be hosted online (such as on YouTube) to be embedded in an ISLE lesson. To include a video, you can use ISLE's custom ",(0,a.kt)("inlineCode",{parentName:"p"},"<VideoPlayer />")," tag. For example, to include ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wPqtzj5VZus"},"this")," video of Trevor Hastie speaking on gradient boosting, we could use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />\n')),(0,a.kt)("p",null,"This tag also provides several customization options, including the dimensions of the embedded video, whether or not it plays automatically, and the start time of the video. Full details can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://isledocs.com/docs/video-player"},"ISLE docs"),"."))}c.isMDXComponent=!0},899367:function(e,t,o){t.Z=o.p+"assets/images/upload_file-2003e7760bfe7627cb295219f7bea3eb.gif"}}]);