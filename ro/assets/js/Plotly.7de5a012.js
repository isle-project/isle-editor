(self.webpackChunk=self.webpackChunk||[]).push([[23423,8671],{580129:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ge}});var a=n(202784),l=n(213980),o=n.n(l),r=n(780594),c=n.n(r),i=n(690299),s=n.n(i),m=n(498614),h=n(770561),d=n(715318),g=n(815353),u=n(532791),p=n.n(u),v=n(993524),f=n(834863),y=n.n(f),z=n(437069),b=n.n(z),x=n(409961),w=n.n(x),q=n(676065),C=n.n(q),k=n(123103),E=n(691334),Z=n(394362);var S=n(741082),L=n(487890),B=n(575625),O=n(458264),$=n(312594),H=n(889969),N=n(226480),T=n(440835),j=n(506078),I=n(125032),P=Object.defineProperty,R=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&D(e,n,t[n]);if(R)for(var n of R(t))A.call(t,n)&&D(e,n,t[n]);return e};const M=s()("isle:plotly:style_menu"),_=["Arial","Balto","Courier New","Droid Sans","Droid Serif","Droid Sans Mono","Gravitas One","Old Standard TT","Open Sans","Overpass","PT Sans Narrow","Raleway","Times New Roman"],U=["general","legend"],F={fontSize:"1em",fontFamily:"Open Sans",fontWeight:400,textAlign:"left"},W={zIndex:2e3};var J=({layout:e,setLayout:t,layoutUpdate:n,setLayoutUpdate:l,onHide:o,t:r})=>{const[c,i]=(0,a.useState)(0),s=(0,a.useCallback)((({rgb:a})=>{const{r:o,g:r,b:c,a:i}=a,s=G({},e);s.paper_bgcolor=`rgba(${o}, ${r}, ${c}, ${i})`,t(s),l(n+1)}),[n,l,e,t]),m=(0,a.useCallback)((({rgb:a})=>{const{r:o,g:r,b:c,a:i}=a,s=G({},e);s.font||(s.font={}),s.font.color=`rgba(${o}, ${r}, ${c}, ${i})`,t(s),l(n+1)}),[n,l,e,t]),d=(0,a.useCallback)((a=>{const o=G({},e);o.font||(o.font={}),o.font.family=a,t(o),l(n+1)}),[n,l,e,t]),g=(0,a.useCallback)((a=>{const o=G({},e);o.font||(o.font={}),o.font.size=a,t(o),l(n+1)}),[n,l,e,t]),u=(0,a.useCallback)((({rgb:a})=>{const{r:o,g:r,b:c,a:i}=a,s=G({},e);s.legend||(s.legend={}),s.legend.bgcolor=`rgba(${o}, ${r}, ${c}, ${i})`,t(s),l(n+1)}),[n,l,e,t]),p=(0,a.useCallback)((({rgb:a})=>{const{r:o,g:r,b:c,a:i}=a,s=G({},e);s.legend||(s.legend={}),s.legend.bordercolor=`rgba(${o}, ${r}, ${c}, ${i})`,t(s),l(n+1)}),[n,l,e,t]),v=(0,a.useCallback)((a=>{const o=G({},e);o.legend||(o.legend={}),o.legend.borderwidth=a,t(o),l(n+1)}),[n,l,e,t]);return M("Active accordion element: "+c),a.createElement("div",{className:"plotly-style-menu"},a.createElement("div",{className:"plotly-style-menu-header"},a.createElement("h3",null,r("customize-layout")),a.createElement(h.Z,{"aria-label":r("close"),size:"sm",variant:"warning",className:"plotly-style-menu-close-button",onClick:o},a.createElement("div",{className:"fa fa-times"}))),a.createElement(I.Z,{className:"plotly-style-accordion",canCloseAll:!0,headers:U.map((e=>r(e))),headerStyle:F,onChange:i},a.createElement("div",{className:"d-grid gap-2"},a.createElement(H.Z.Group,{as:O.Z},a.createElement(H.Z.Label,{column:!0,sm:8},r("background")),a.createElement($.Z,{sm:4},a.createElement(N.Z,{onChange:s,variant:"Button",color:e.paper_bgcolor,style:W}))),a.createElement(H.Z.Group,{as:O.Z},a.createElement(H.Z.Label,{column:!0,sm:8},r("font-color")),a.createElement($.Z,{sm:4},a.createElement(N.Z,{onChange:m,variant:"Button",color:e.font&&e.font.color,style:W}))),a.createElement(H.Z.Group,{as:O.Z},a.createElement(H.Z.Label,{column:!0,sm:8},r("font-size")),a.createElement($.Z,{sm:4},a.createElement(j.Z,{min:10,max:60,defaultValue:e.font&&e.font.size||12,onChange:g,inline:!0}))),a.createElement(H.Z.Group,{as:O.Z},a.createElement(H.Z.Label,{column:!0,sm:6},r("font-family")),a.createElement($.Z,{sm:6},a.createElement(T.Z,{clearable:!0,options:_,defaultValue:e.font&&e.font.family,onChange:d})))),a.createElement("div",{className:"d-grid gap-2"},a.createElement(H.Z.Group,{as:O.Z},a.createElement(H.Z.Label,{column:!0,sm:8},r("background")),a.createElement($.Z,{sm:4},a.createElement(N.Z,{onChange:u,variant:"Button",color:e.legend&&e.legend.bgcolor,style:W}))),a.createElement(H.Z.Group,{as:O.Z},a.createElement(H.Z.Label,{column:!0,sm:8},r("border-color")),a.createElement($.Z,{sm:4},a.createElement(N.Z,{onChange:p,variant:"Button",color:e.legend&&e.legend.bordercolor,style:W}))),a.createElement(H.Z.Group,{as:O.Z},a.createElement(H.Z.Label,{column:!0,sm:8},r("border-width")),a.createElement($.Z,{sm:4},a.createElement(j.Z,{min:0,max:30,defaultValue:e.legend&&e.legend.borderwidth,onChange:v,inline:!0}))))))};var Y={undo:{width:857.1,height:1e3,path:"m857 350q0-87-34-166t-91-137-137-92-166-34q-96 0-183 41t-147 114q-4 6-4 13t5 11l76 77q6 5 14 5 9-1 13-7 41-53 100-82t126-29q58 0 110 23t92 61 61 91 22 111-22 111-61 91-92 61-110 23q-55 0-105-20t-90-57l77-77q17-16 8-38-10-23-33-23h-250q-15 0-25 11t-11 25v250q0 24 22 33 22 10 39-8l72-72q60 57 137 88t159 31q87 0 166-34t137-92 91-137 34-166z",transform:"matrix(1 0 0 -1 0 850)"},home:{width:928.6,height:1e3,path:"m786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-4-7 2-12 7l-35 41q-4 5-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-5 6-12t-4-13z",transform:"matrix(1 0 0 -1 0 850)"},"camera-retro":{width:1e3,height:1e3,path:"m518 386q0 8-5 13t-13 5q-37 0-63-27t-26-63q0-8 5-13t13-5 12 5 5 13q0 23 16 38t38 16q8 0 13 5t5 13z m125-73q0-59-42-101t-101-42-101 42-42 101 42 101 101 42 101-42 42-101z m-572-320h858v71h-858v-71z m643 320q0 89-62 152t-152 62-151-62-63-152 63-151 151-63 152 63 62 151z m-571 358h214v72h-214v-72z m-72-107h858v143h-462l-36-71h-360v-72z m929 143v-714q0-30-21-51t-50-21h-858q-29 0-50 21t-21 51v714q0 30 21 51t50 21h858q29 0 50-21t21-51z",transform:"matrix(1 0 0 -1 0 850)"},zoombox:{width:1e3,height:1e3,path:"m1000-25l-250 251c40 63 63 138 63 218 0 224-182 406-407 406-224 0-406-182-406-406s183-406 407-406c80 0 155 22 218 62l250-250 125 125z m-812 250l0 438 437 0 0-438-437 0z m62 375l313 0 0-312-313 0 0 312z",transform:"matrix(1 0 0 -1 0 850)"},pan:{width:1e3,height:1e3,path:"m1000 350l-187 188 0-125-250 0 0 250 125 0-188 187-187-187 125 0 0-250-250 0 0 125-188-188 186-187 0 125 252 0 0-250-125 0 187-188 188 188-125 0 0 250 250 0 0-126 187 188z",transform:"matrix(1 0 0 -1 0 850)"},zoom_plus:{width:875,height:1e3,path:"m1 787l0-875 875 0 0 875-875 0z m687-500l-187 0 0-187-125 0 0 187-188 0 0 125 188 0 0 187 125 0 0-187 187 0 0-125z",transform:"matrix(1 0 0 -1 0 850)"},zoom_minus:{width:875,height:1e3,path:"m0 788l0-876 875 0 0 876-875 0z m688-500l-500 0 0 125 500 0 0-125z",transform:"matrix(1 0 0 -1 0 850)"},autoscale:{width:1e3,height:1e3,path:"m250 850l-187 0-63 0 0-62 0-188 63 0 0 188 187 0 0 62z m688 0l-188 0 0-62 188 0 0-188 62 0 0 188 0 62-62 0z m-875-938l0 188-63 0 0-188 0-62 63 0 187 0 0 62-187 0z m875 188l0-188-188 0 0-62 188 0 62 0 0 62 0 188-62 0z m-125 188l-1 0-93-94-156 156 156 156 92-93 2 0 0 250-250 0 0-2 93-92-156-156-156 156 94 92 0 2-250 0 0-250 0 0 93 93 157-156-157-156-93 94 0 0 0-250 250 0 0 0-94 93 156 157 156-157-93-93 0 0 250 0 0 250z",transform:"matrix(1 0 0 -1 0 850)"},tooltip_basic:{width:1500,height:1e3,path:"m375 725l0 0-375-375 375-374 0-1 1125 0 0 750-1125 0z",transform:"matrix(1 0 0 -1 0 850)"},tooltip_compare:{width:1125,height:1e3,path:"m187 786l0 2-187-188 188-187 0 0 937 0 0 373-938 0z m0-499l0 1-187-188 188-188 0 0 937 0 0 376-938-1z",transform:"matrix(1 0 0 -1 0 850)"},plotlylogo:{width:1542,height:1e3,path:"m0-10h182v-140h-182v140z m228 146h183v-286h-183v286z m225 714h182v-1000h-182v1000z m225-285h182v-715h-182v715z m225 142h183v-857h-183v857z m231-428h182v-429h-182v429z m225-291h183v-138h-183v138z",transform:"matrix(1 0 0 -1 0 850)"},"z-axis":{width:1e3,height:1e3,path:"m833 5l-17 108v41l-130-65 130-66c0 0 0 38 0 39 0-1 36-14 39-25 4-15-6-22-16-30-15-12-39-16-56-20-90-22-187-23-279-23-261 0-341 34-353 59 3 60 228 110 228 110-140-8-351-35-351-116 0-120 293-142 474-142 155 0 477 22 477 142 0 50-74 79-163 96z m-374 94c-58-5-99-21-99-40 0-24 65-43 144-43 79 0 143 19 143 43 0 19-42 34-98 40v216h87l-132 135-133-135h88v-216z m167 515h-136v1c16 16 31 34 46 52l84 109v54h-230v-71h124v-1c-16-17-28-32-44-51l-89-114v-51h245v72z",transform:"matrix(1 0 0 -1 0 850)"},"3d_rotate":{width:1e3,height:1e3,path:"m922 660c-5 4-9 7-14 11-359 263-580-31-580-31l-102 28 58-400c0 1 1 1 2 2 118 108 351 249 351 249s-62 27-100 42c88 83 222 183 347 122 16-8 30-17 44-27-2 1-4 2-6 4z m36-329c0 0 64 229-88 296-62 27-124 14-175-11 157-78 225-208 249-266 8-19 11-31 11-31 2 5 6 15 11 32-5-13-8-20-8-20z m-775-239c70-31 117-50 198-32-121 80-199 346-199 346l-96-15-58-12c0 0 55-226 155-287z m603 133l-317-139c0 0 4-4 19-14 7-5 24-15 24-15s-177-147-389 4c235-287 536-112 536-112l31-22 100 299-4-1z m-298-153c6-4 14-9 24-15 0 0-17 10-24 15z",transform:"matrix(1 0 0 -1 0 850)"},camera:{width:1e3,height:1e3,path:"m500 450c-83 0-150-67-150-150 0-83 67-150 150-150 83 0 150 67 150 150 0 83-67 150-150 150z m400 150h-120c-16 0-34 13-39 29l-31 93c-6 15-23 28-40 28h-340c-16 0-34-13-39-28l-31-94c-6-15-23-28-40-28h-120c-55 0-100-45-100-100v-450c0-55 45-100 100-100h800c55 0 100 45 100 100v450c0 55-45 100-100 100z m-400-550c-138 0-250 112-250 250 0 138 112 250 250 250 138 0 250-112 250-250 0-138-112-250-250-250z m365 380c-19 0-35 16-35 35 0 19 16 35 35 35 19 0 35-16 35-35 0-19-16-35-35-35z",transform:"matrix(1 0 0 -1 0 850)"},movie:{width:1e3,height:1e3,path:"m938 413l-188-125c0 37-17 71-44 94 64 38 107 107 107 187 0 121-98 219-219 219-121 0-219-98-219-219 0-61 25-117 66-156h-115c30 33 49 76 49 125 0 103-84 187-187 187s-188-84-188-187c0-57 26-107 65-141-38-22-65-62-65-109v-250c0-70 56-126 125-126h500c69 0 125 56 125 126l188-126c34 0 62 28 62 63v375c0 35-28 63-62 63z m-750 0c-69 0-125 56-125 125s56 125 125 125 125-56 125-125-56-125-125-125z m406-1c-87 0-157 70-157 157 0 86 70 156 157 156s156-70 156-156-70-157-156-157z",transform:"matrix(1 0 0 -1 0 850)"},question:{width:857.1,height:1e3,path:"m500 82v107q0 8-5 13t-13 5h-107q-8 0-13-5t-5-13v-107q0-8 5-13t13-5h107q8 0 13 5t5 13z m143 375q0 49-31 91t-77 65-95 23q-136 0-207-119-9-14 4-24l74-55q4-4 10-4 9 0 14 7 30 38 48 51 19 14 48 14 27 0 48-15t21-33q0-21-11-34t-38-25q-35-16-65-48t-29-70v-20q0-8 5-13t13-5h107q8 0 13 5t5 13q0 10 12 27t30 28q18 10 28 16t25 19 25 27 16 34 7 45z m214-107q0-117-57-215t-156-156-215-58-216 58-155 156-58 215 58 215 155 156 216 58 215-58 156-156 57-215z",transform:"matrix(1 0 0 -1 0 850)"},disk:{width:857.1,height:1e3,path:"m214-7h429v214h-429v-214z m500 0h72v500q0 8-6 21t-11 20l-157 156q-5 6-19 12t-22 5v-232q0-22-15-38t-38-16h-322q-22 0-37 16t-16 38v232h-72v-714h72v232q0 22 16 38t37 16h465q22 0 38-16t15-38v-232z m-214 518v178q0 8-5 13t-13 5h-107q-7 0-13-5t-5-13v-178q0-8 5-13t13-5h107q7 0 13 5t5 13z m357-18v-518q0-22-15-38t-38-16h-750q-23 0-38 16t-16 38v750q0 22 16 38t38 16h517q23 0 50-12t42-26l156-157q16-15 27-42t11-49z",transform:"matrix(1 0 0 -1 0 850)"},lasso:{width:1031,height:1e3,path:"m1018 538c-36 207-290 336-568 286-277-48-473-256-436-463 10-57 36-108 76-151-13-66 11-137 68-183 34-28 75-41 114-42l-55-70 0 0c-2-1-3-2-4-3-10-14-8-34 5-45 14-11 34-8 45 4 1 1 2 3 2 5l0 0 113 140c16 11 31 24 45 40 4 3 6 7 8 11 48-3 100 0 151 9 278 48 473 255 436 462z m-624-379c-80 14-149 48-197 96 42 42 109 47 156 9 33-26 47-66 41-105z m-187-74c-19 16-33 37-39 60 50-32 109-55 174-68-42-25-95-24-135 8z m360 75c-34-7-69-9-102-8 8 62-16 128-68 170-73 59-175 54-244-5-9 20-16 40-20 61-28 159 121 317 333 354s407-60 434-217c28-159-121-318-333-355z",transform:"matrix(1 0 0 -1 0 850)"},selectbox:{width:1e3,height:1e3,path:"m0 850l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m285 0l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m-857-286l0-143 143 0 0 143-143 0z m857 0l0-143 143 0 0 143-143 0z m-857-285l0-143 143 0 0 143-143 0z m857 0l0-143 143 0 0 143-143 0z m-857-286l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m285 0l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z",transform:"matrix(1 0 0 -1 0 850)"},spikeline:{width:1e3,height:1e3,path:"M512 409c0-57-46-104-103-104-57 0-104 47-104 104 0 57 47 103 104 103 57 0 103-46 103-103z m-327-39l92 0 0 92-92 0z m-185 0l92 0 0 92-92 0z m370-186l92 0 0 93-92 0z m0-184l92 0 0 92-92 0z",transform:"matrix(1.5 0 0 -1.5 0 850)"},legend:{height:1e3,width:650,path:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z",transform:"matrix(1.5 0 0 -1.5 0 850)"},changeLegendOrientation:{height:1e3,width:650,path:"M443.683 4.529L27.818 196.418C-18.702 217.889-3.39 288 47.933 288H224v175.993c0 51.727 70.161 66.526 91.582 20.115L507.38 68.225c18.905-40.961-23.752-82.133-63.697-63.696z",transform:"matrix(1.5 0 0 -1.5 0 850)"},share:{height:1e3,width:650,path:"M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z",transform:"matrix(1.5 0 0 -1.5 0 850)"},fullscreen:{height:1e3,width:650,path:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z",transform:"matrix(1.5 0 0 -1.5 0 850)"}};function Q(e,t){let n;return e?(n=e[t]&&e[t].text?e[t].text:e[t],n):n}var X=function(e,t){const n=[],a=Q(e,"title"),l=Q(t,"title");if(a!==l&&n.push({name:"title",old:l,new:a}),e.showlegend!==t.showlegend&&n.push({name:"showlegend",old:t.showlegend,new:e.showlegend}),e.legend&&t.legend&&(e.legend.orientation!==t.legend.orientation&&n.push({name:"legend.orientation",old:t.legend.orientation,new:e.legend.orientation}),e.legend.x===t.legend.x&&e.legend.y===t.legend.y||n.push({name:"legend.position",old:[t.legend.x,t.legend.y],new:[e.legend.x,e.legend.y]})),e.xaxis&&t.xaxis){const a=Q(e.xaxis,"title"),l=Q(t.xaxis,"title");a!==l&&n.push({name:"xaxis.title",old:l,new:a}),e.xaxis.range&&t.xaxis.range&&(e.xaxis.range[0]!==t.xaxis.range[0]||e.xaxis.range[1]!==t.xaxis.range[1])&&n.push({name:"xaxis.range",old:t.xaxis.range,new:e.xaxis.range})}if(e.yaxis&&t.yaxis){const a=Q(e.yaxis,"title"),l=Q(t.yaxis,"title");a!==l&&n.push({name:"yaxis.title",old:l,new:a}),e.yaxis.range&&t.yaxis.range&&(e.yaxis.range[0]!==t.yaxis.range[0]||e.yaxis.range[1]!==t.yaxis.range[1])&&n.push({name:"yaxis.range",old:t.yaxis.range,new:e.yaxis.range})}return n},K=Object.defineProperty,ee=Object.defineProperties,te=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,re=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&oe(e,n,t[n]);if(ne)for(var n of ne(t))le.call(t,n)&&oe(e,n,t[n]);return e},ce=(e,t)=>ee(e,te(t));const ie=(0,g.Z)(p()),se=s()("isle:plotly"),me=["toImage","sendDataToCloud","zoom2d","pan2d","select2d","zoomIn2d","zoomOut2d","autoScale2d","resetScale2d","hoverClosestCartesian","hoverCompareCartesian","toggleHover","resetViews"],he=["sendDataToCloud","hoverClosestCartesian","hoverCompareCartesian","lasso2d","toggleSpikelines"];p().setPlotConfig({mapboxAccessToken:"pk.eyJ1IjoicGxhbmVzaGlmdGVyIiwiYSI6ImNqdXB2cTBjeDNpOTU0M3Bqcnc0dTN5aW0ifQ.6YTmCxIqLkkk_kssNJm0jA"});const de=e=>{const{t:t}=(0,m.$G)("plotly"),{logAction:n,id:l}=(0,L.G)("PLOT",e),[o,r]=(0,a.useState)(ce(re({},e.layout),{autosize:!0})),[i,s]=(0,a.useState)(0),g=(0,B.Z)(e.layout),u=(0,B.Z)(o),[f,z]=(0,a.useState)(!1),[x,q]=(0,a.useState)(!1),[S,O]=(0,a.useState)(!1),$=(0,a.useRef)(),H=(0,a.useRef)(null),N=(0,a.useRef)(),T=(0,a.useContext)(k.Z),j=(0,a.useCallback)((()=>{se("Toggle fullscreen view...");const t=re({},o);f?(t.width=e.layout.width,t.height=e.layout.height):(t.width=null,t.height=null),z(!f),r(t)}),[o,f,e.layout]),I=(0,a.useCallback)((()=>{O(!S)}),[S]);(0,a.useEffect)((()=>{let t=!1;if(g){const n=b()(e.layout);for(let a=0;a<n.length;a++){const l=n[a];if(e.layout[l]!==g[l]){t=!0;break}}t&&(se("Layout property has changed..."),r(ce(re({},e.layout),{autosize:!0})))}}),[g,e.layout]);const P=(0,a.useMemo)((()=>{const n=()=>{se("Toggle legend...");const e=re({},o);C()(o.showlegend)||!0===o.showlegend?e.showlegend=!1:e.showlegend=!0,r(e),s(i+1)},a=()=>{se("Toggle legend orientation...");const e=re({},o);let t="h";e.legend&&"h"===e.legend.orientation&&(t="v"),e.legend={orientation:t},r(e),s(i+1)},l=[];return e.legendButtons&&!e.removeButtons&&(l.push({name:t("toggle-legend"),icon:Y.legend,click:n}),l.push({name:t("change-orientation"),icon:Y.changeLegendOrientation,click:a})),e.onShare&&!e.removeButtons&&l.push({name:t("share"),icon:Y.share,click:e.onShare}),e.toggleFullscreen&&l.push({name:t("toggle-fullscreen"),icon:Y.fullscreen,click:j}),re({editable:e.editable,displayModeBar:!0,displaylogo:!1,modeBarButtonsToRemove:e.removeButtons?me:he,modeBarButtonsToAdd:l},e.config)}),[o,i,e.config,e.editable,e.legendButtons,e.onShare,e.removeButtons,e.toggleFullscreen,j,t]),R=(0,a.useCallback)((()=>{p().toImage($.current,{format:"png",height:425,width:675}).then((t=>{let n;if(e.meta){let a=e.meta;a=y()(a,((e,t)=>w()(t))),a=v.ZP.dump(a),n=`<img src="${t}" style="display: block; margin: 0 auto;" data-plot-id="${l}" data-plot-meta="${a}"></img>`}else n=`<img src="${t}" style="display: block; margin: 0 auto;" />`;H.current=n,q(!0)}))}),[l,e.meta]),V=(0,a.useCallback)((()=>{const e=X($.current.layout,u);e.length>0&&n(E.wb,e),r($.current.layout),R()}),[R,n,u]),A=(0,a.useCallback)((e=>{q(!1),$.current=e,N.current||(N.current=c()(V,1e3)),N.current()}),[V]);let D;e.draggable&&!f&&(D=a.createElement("button",{className:"plotly-draggable-bar",draggable:x,onDragStart:e=>{n(E.Wp),e.dataTransfer.setData("text/html",H.current)},disabled:!x,onClick:()=>{n(E.U5),(0,Z.Z)(H.current),T.addNotification({title:t("copied-to-clipboard"),message:t("plot-copied-to-clipboard"),level:"success",position:"tr"})},style:{opacity:x?.6:.2}},t("drag-plot")));const G={width:o.width?o.width:"100%",height:o.height?o.height:"100%",zIndex:1},M=re(re({},G),e.style);let _=a.createElement("div",{className:"plotly-container",style:M},D,a.createElement(ie,{key:i,className:e.draggable?"plotly-draggable":null,data:e.data,layout:o,config:P,onInitialized:(t,n)=>{se("Initialize plot..."),t.current=t,R(),e.onInitialized(t,n)},onUpdate:A,useResizeHandler:!0,onClick:e.onClick,onSelected:e.onSelected,onAfterPlot:e.onAfterPlot,onRelayout:t=>{r(ce(re({},o),{datarevision:o.datarevision?o.datarevision+1:1})),e.onRelayout(t)},onLegendClick:e.onLegendClick,onLegendDoubleClick:e.onLegendDoubleClick,style:G,revision:e.revision}));return f?a.createElement(d.Z,{show:f,onHide:j,dialogClassName:"modal-100w"},a.createElement(d.Z.Body,{style:{height:.8*window.innerHeight,width:.9*window.innerWidth,marginBottom:50}},_),a.createElement(d.Z.Footer,null,a.createElement(h.Z,{onClick:I},t("layout")),a.createElement(h.Z,{onClick:j},t("close"))),S?a.createElement(J,{t:t,onHide:I,layout:o,layoutUpdate:i,setLayout:r,setLayoutUpdate:s}):null):_};de.defaultProps={draggable:!1,editable:!1,layout:{},config:{},legendButtons:!0,meta:null,revision:null,style:{},onAfterPlot(){},onClick(){},onInitialized(){},onLegendClick(){},onLegendDoubleClick(){},onRelayout(){},onSelected(){},onShare:null,removeButtons:!1,toggleFullscreen:!0},de.propTypes={data:o().array.isRequired,draggable:o().bool,editable:o().bool,layout:o().object,config:o().object,legendButtons:o().bool,meta:o().object,revision:o().number,style:o().object,onAfterPlot:o().func,onClick:o().func,onInitialized:o().func,onLegendClick:o().func,onLegendDoubleClick:o().func,onRelayout:o().func,onSelected:o().func,onShare:o().func,removeButtons:o().bool,toggleFullscreen:o().bool};var ge=(0,S.W)(de)},575625:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){const t=(0,a.useRef)();return(0,a.useEffect)((()=>{t.current=e}),[e]),t.current}},394362:function(e,t){"use strict";t.Z=function(e){const t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.opacity=0,t.style.pointerEvents="none",document.body.appendChild(t),window.getSelection().removeAllRanges();const n=document.createRange();n.selectNode(t),window.getSelection().addRange(n),document.execCommand("copy"),document.body.removeChild(t)}},357267:function(){},759255:function(){}}]);