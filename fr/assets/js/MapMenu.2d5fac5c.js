(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{484:function(a,o,e){"use strict";var t,i=e(407),n=e.n(i),l=(e(0),e(404),e(423)),s=e(512),d=e(510),r=e(505),c=e(547);o.a=function(a){var o=n()(s.a,{id:"popover-positioned-right"},void 0,n()(d.a,{},void 0,a.title),n()(r.a,{},void 0,a.content));return n()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:o},void 0,t||(t=n()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}))))}},6314:function(a,o,e){"use strict";e.r(o);var t,i=e(407),n=e.n(i),l=(e(0),e(404),e(477)),s=e(490),d=e(506),r=e(630),c=e(553),u=e(667),p=e(1290),v=e(458),g=e(484),f=["world","usa","europe","asia","africa","north america","south america"],b=["ISO-3","USA-states","country names"],h=function(a){var o=a.variables,e=a.groupingVariables,i=a.t;return n()(r.a,{autoStart:!1,title:n()("span",{},void 0,i("Map"),n()(g.a,{title:i("Map"),content:i("Map-description")})),onGenerate:function(o,e,t,l,s,d,r){var c=Object(u.a)(6),g={variable:r,longitude:s,latitude:d,locations:o,scope:t,showLand:l,plotId:c},f=n()(p.a,{data:a.data,variable:r,locations:o,longitude:s,latitude:d,locationmode:e,scope:t,showLand:l,id:c,action:g,onShare:function(){a.session.addNotification({title:i("plot-shared"),message:i("plot-shared-message"),level:"success",position:"tr"}),a.logAction(v.L,g)}});a.logAction(v.w,g),a.onCreated(f)}},void 0,n()(l.a,{},void 0,n()(s.a,{},void 0,n()(d.a,{legend:i("locations"),options:e,clearable:!0})),n()(s.a,{},void 0,n()(d.a,{legend:i("location-encoding"),options:b,defaultValue:"country names"}))),n()(l.a,{},void 0,n()(s.a,{},void 0,n()(d.a,{legend:i("scope"),defaultValue:"world",options:f})),n()(s.a,{},void 0,n()(c.a,{legend:i("show-land"),defaultValue:!1,style:{marginTop:35}}))),n()("h4",{className:"center"},void 0,i("or")),n()(l.a,{},void 0,n()(s.a,{},void 0,n()(d.a,{legend:i("longitude"),options:o,clearable:!0})),n()(s.a,{},void 0,n()(d.a,{legend:i("latitude"),options:o,clearable:!0}))),t||(t=n()("hr",{})),n()(d.a,{legend:i("variable"),options:o,clearable:!0}))};h.defaultProps={groupingVariables:null,logAction:function(){},onCreated:function(){}},o.default=h}}]);