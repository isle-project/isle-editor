(window.webpackJsonp=window.webpackJsonp||[]).push([[847],{606:function(e,n,t){"use strict";var i=t(405),a=Object(i.a)((function(){return t.e(209).then(t.bind(null,865))}));n.a=a},6437:function(e,n,t){"use strict";t.r(n);var i,a,o,u=t(448),s=t.n(u),r=t(407),l=t.n(r),c=(t(482),t(681),t(633),t(0)),d=(t(404),t(450)),m=t.n(d),v=t(4096),f=t(4095),b=t(423),h=t(658),p=t(589),q=t(687),g=t(4038),w=t(471),H=t.n(w),y=t(554),z=t.n(y),C=t(735),Q=t(483),N=t(606),O=t(714),k=t(518),j=t(459),x=t(458),L=t(533),W=(t(84),t(394),m()("isle:queue")),S=Object(C.a)("queue"),E=function(e){if(0===e.questions.length)return l()("p",{},void 0,e.t("no-questions"));var n=e.session;return l()(g.a,{className:"queue-table",showPageSizeOptions:!1,data:e.questions,resizable:!1,sortable:!1,columns:[{Header:"Pic",id:"pic",accessor:function(e){for(var t=n.userList,i=0;i<t.length;i++)if(t[i].name===e.name)return t[i].picture;return""},Cell:function(e){return l()("img",{className:"queue-table-pic",alt:"User thumbnail",src:"".concat(n.server,"/thumbnail/").concat(e.value)})},maxWidth:46,minWidth:46,style:{color:"darkslategrey"}},{Header:e.t("name"),id:"nameCol",accessor:"name",width:150,Cell:function(e){return l()(Q.a,{tooltip:"".concat(e.value," (").concat(e.original.email,")")},void 0,l()("span",{className:"queue-table-name"},void 0,e.value))}},{Header:e.t("cohort"),id:"cohortCol",accessor:function(e){for(var t=n.cohorts,i=0;i<t.length;i++)if(H()(t[i].members,e.email))return t[i].title;return""}},{Header:e.t("question"),id:"qCol",accessor:"value",width:350,style:{"white-space":"unset"}},{Header:e.t("chat"),Cell:function(n){var t="Queue_"+n.original.name;return l()(N.a,{tooltip:e.t("queue-start-chat"),for:t})}},{Header:"",accessor:"remove",Cell:function(t){return l()(Q.a,{placement:"left",tooltip:e.t("mark-and-remove")},void 0,l()(b.a,{variant:"secondary",size:"sm",onClick:function(){n.removeQuestionFromQueue(t.original)}},void 0,i||(i=l()("i",{className:"fas fa-check"}))))},filterable:!1,width:45}],pageSize:8})},P=function(e){var n,t=e.id,i=e.draggable,u=e.show,r=e.onHide,d=e.onNewQuestion,m=e.t;t=t||S();var f,g=Object(c.useContext)(j.a),w=g.questions,H=Object(c.useState)(""),y=s()(H,2),C=y[0],Q=y[1],P=Object(c.useState)(null),_=s()(P,2),I=_[0],T=_[1],F=function(){W("Send the signal to enter the queue..."),g.log({id:t,type:x.ib,value:C},"members");var e={name:g.user.name,email:g.user.email,value:C};g.addQuestionToQueue(e)},J=function(e){e.target.className&&e.target.className.includes("queue-panel")&&r()};if(Object(c.useEffect)((function(){var e;return g&&(W("We have a session, subscribe the component..."),e=g.subscribe((function(e,n){if(e===L.v){for(var i=n,a=null,o=0;o<i.length;o++)if(i[o].email===g.user.email){a=o;break}T(a)}n&&n.id===t&&n.type===x.ib&&g.isOwner()&&d()}))),function(){e&&e()}}),[t,d,g]),u){if(g.isOwner())return W("User is an owner..."),f=l()(k.a,{className:"queue-panel",tabIndex:0,role:"button",header:m("queue"),onHide:r,minimizable:!0},void 0,l()(E,{questions:g.questions,t:m,session:g,for:t})),i&&(f=l()(O.a,{bounds:"#Lesson",cancel:".queue-table",onEscape:J,resizable:!0,minWidth:300,minHeight:150},void 0,f)),f;var K=function(){Q(""),r()};if(!z()(I)){var U="Queue_"+g.user.name;return f=l()(k.a,{className:"queue-panel",tabIndex:0,role:"button",header:m("queue"),onHide:K,minimizable:!0},void 0,l()("p",{},void 0,l()(v.a,{i18nKey:"queue-status",ns:"Queue"},void 0,"Your question: ",l()("i",{},void 0,{question:C}),a||(a=l()("br",{})),"You are currently at position ",l()("strong",{},void 0,{spot:I})," on the queue.",o||(o=l()("br",{})),"There are ",l()("strong",{},void 0,{size:g.questions.length})," individual(s) in the queue.")),n||(n=l()(N.a,{for:U,showTooltip:!1})),l()(b.a,{style:{marginLeft:10},size:"sm",onClick:function(){var e={name:g.user.name,email:g.user.email,value:C};g.removeQuestionFromQueue(e)}},void 0,m("remove-myself-from-queue"))),i&&(f=l()(O.a,{bounds:"#Lesson",onEscape:J,resizable:!0,minWidth:300,minHeight:150},void 0,f)),f}return f=l()(k.a,{className:"queue-panel",tabIndex:0,role:"button",header:m("queue"),onHide:K,minimizable:!0},void 0,l()("p",{},void 0,m("queue-prompt")),l()(p.a,{},void 0,l()(q.a,{},void 0,m("question")),l()(h.a,{type:"text",id:"queue_form",value:C,onChange:function(e){Q(e.target.value)},onKeyPress:function(e){13===e.charCode&&C.length>0&&F()},width:500})),l()(b.a,{disabled:0===C.length,onClick:F},void 0,m("submit-question")),l()("span",{style:{marginLeft:8}},void 0,m("queue-size",{n:w.length}))),i&&(f=l()(O.a,{bounds:"#Lesson",cancel:"#queue_form",onEscape:J,resizable:!0,minWidth:300,minHeight:150},void 0,f)),f}return null};P.defaultProps={draggable:!0,show:!0,onHide:function(){},onNewQuestion:function(){}},n.default=Object(f.a)("Queue")(P)},735:function(e,n,t){"use strict";n.a=function(e){var n=1;return function(){return n+=1,"".concat(e,"-").concat(n)}}}}]);