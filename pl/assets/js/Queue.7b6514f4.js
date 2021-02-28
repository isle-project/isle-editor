(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{6500:function(e,n,t){"use strict";t.r(n);var i=t(457),a=t.n(i),o=t(404),u=t.n(o),s=(t(501),t(807),t(722),t(0)),r=(t(402),t(451)),l=t.n(r),c=t(4089),d=t(4088),m=t(431),v=t(734),f=t(665),b=t(817),h=t(4044),p=t(482),q=t.n(p),g=t(606),w=t.n(g),H=t(873),y=t(499),z=t(687),C=t(853),Q=t(570),N=t(465),O=t(471),k=t(588),j=(t(89),t(392),l()("isle:queue")),x=Object(H.a)("queue"),L=u()("i",{className:"fas fa-check"}),W=function(e){if(0===e.questions.length)return u()("p",{},void 0,e.t("no-questions"));var n=e.session;return u()(h.a,{className:"queue-table",showPageSizeOptions:!1,data:e.questions,resizable:!1,sortable:!1,columns:[{Header:"Pic",id:"pic",accessor:function(e){for(var t=n.userList,i=0;i<t.length;i++)if(t[i].name===e.name)return t[i].picture;return""},Cell:function(e){return u()("img",{className:"queue-table-pic",alt:"User thumbnail",src:"".concat(n.server,"/thumbnail/").concat(e.value)})},maxWidth:46,minWidth:46,style:{color:"darkslategrey"}},{Header:e.t("name"),id:"nameCol",accessor:"name",width:150,Cell:function(e){return u()(y.a,{tooltip:"".concat(e.value," (").concat(e.original.email,")")},void 0,u()("span",{className:"queue-table-name"},void 0,e.value))}},{Header:e.t("cohort"),id:"cohortCol",accessor:function(e){for(var t=n.cohorts,i=0;i<t.length;i++)if(q()(t[i].members,e.email))return t[i].title;return""}},{Header:e.t("question"),id:"qCol",accessor:"value",width:350,style:{"white-space":"unset"}},{Header:e.t("chat"),Cell:function(n){var t="Queue_"+n.original.name;return u()(z.a,{tooltip:e.t("queue-start-chat"),for:t})}},{Header:"",accessor:"remove",Cell:function(t){return u()(y.a,{placement:"left",tooltip:e.t("mark-and-remove")},void 0,u()(m.a,{variant:"secondary",size:"sm",onClick:function(){n.removeQuestionFromQueue(t.original)}},void 0,L))},filterable:!1,width:45}],pageSize:8})},S=u()("br",{}),E=u()("br",{}),P=function(e){var n=e.id,t=e.draggable,i=e.show,o=e.onHide,r=e.onNewQuestion,l=e.t;n=n||x();var d,h=Object(s.useContext)(N.a),p=h.questions,q=Object(s.useState)(""),g=a()(q,2),H=g[0],y=g[1],L=Object(s.useState)(null),P=a()(L,2),_=P[0],I=P[1],T=function(){j("Send the signal to enter the queue..."),h.log({id:n,type:O.gb,value:H},"members");var e={name:h.user.name,email:h.user.email,value:H};h.addQuestionToQueue(e)},F=function(e){e.target.className&&e.target.className.includes("queue-panel")&&o()};if(Object(s.useEffect)((function(){var e;return h&&(j("We have a session, subscribe the component..."),e=h.subscribe((function(e,t){if(e===k.v){for(var i=t,a=null,o=0;o<i.length;o++)if(i[o].email===h.user.email){a=o;break}I(a)}t&&t.id===n&&t.type===O.gb&&h.isOwner()&&r()}))),function(){e&&e()}}),[n,r,h]),i){if(h.isOwner())return j("User is an owner..."),d=u()(Q.a,{className:"queue-panel",tabIndex:0,role:"button",header:l("queue"),onHide:o,minimizable:!0},void 0,u()(W,{questions:h.questions,t:l,session:h,for:n})),t&&(d=u()(C.a,{bounds:"#Lesson",cancel:".queue-table",onEscape:F,resizable:!0,minWidth:300,minHeight:150},void 0,d)),d;var J=function(){y(""),o()};if(!w()(_)){var K="Queue_"+h.user.name;return d=u()(Q.a,{className:"queue-panel",tabIndex:0,role:"button",header:l("queue"),onHide:J,minimizable:!0},void 0,u()("p",{},void 0,u()(c.a,{i18nKey:"queue-status",ns:"Queue"},void 0,"Your question: ",u()("i",{},void 0,{question:H}),S,"You are currently at position ",u()("strong",{},void 0,{spot:_})," on the queue.",E,"There are ",u()("strong",{},void 0,{size:h.questions.length})," individual(s) in the queue.")),u()(z.a,{for:K,showTooltip:!1}),u()(m.a,{style:{marginLeft:10},size:"sm",onClick:function(){var e={name:h.user.name,email:h.user.email,value:H};h.removeQuestionFromQueue(e)}},void 0,l("remove-myself-from-queue"))),t&&(d=u()(C.a,{bounds:"#Lesson",onEscape:F,resizable:!0,minWidth:300,minHeight:150},void 0,d)),d}return d=u()(Q.a,{className:"queue-panel",tabIndex:0,role:"button",header:l("queue"),onHide:J,minimizable:!0},void 0,u()("p",{},void 0,l("queue-prompt")),u()(f.a,{},void 0,u()(b.a,{},void 0,l("question")),u()(v.a,{type:"text",id:"queue_form",value:H,onChange:function(e){y(e.target.value)},onKeyPress:function(e){13===e.charCode&&H.length>0&&T()},width:500})),u()(m.a,{disabled:0===H.length,onClick:T},void 0,l("submit-question")),u()("span",{style:{marginLeft:8}},void 0,l("queue-size",{n:p.length}))),t&&(d=u()(C.a,{bounds:"#Lesson",cancel:"#queue_form",onEscape:F,resizable:!0,minWidth:300,minHeight:150},void 0,d)),d}return null};P.defaultProps={draggable:!0,show:!0,onHide:function(){},onNewQuestion:function(){}},n.default=Object(d.a)("Queue")(P)},687:function(e,n,t){"use strict";var i=t(406),a=Object(i.a)((function(){return t.e(151).then(t.bind(null,1027))}));n.a=a},873:function(e,n,t){"use strict";n.a=function(e){var n=1;return function(){return n+=1,"".concat(e,"-").concat(n)}}}}]);