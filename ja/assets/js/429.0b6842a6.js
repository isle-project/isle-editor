(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{506:function(a,o,e){"use strict";var t=e(404),i=e.n(t),n=(e(0),e(402),e(431)),l=e(541),s=e(534),d=e(529),r=e(593),c=i()(n.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));o.a=function(a){var o=i()(l.a,{id:"popover-positioned-right"},void 0,i()(s.a,{},void 0,a.title),i()(d.a,{},void 0,a.content));return i()(r.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:o},void 0,c)}},6384:function(a,o,e){"use strict";e.r(o);var t=e(404),i=e.n(t),n=(e(0),e(402),e(467)),l=e(508),s=e(531),d=e(721),r=e(604),c=e(795),u=e(1438),p=e(471),v=e(506),g=["world","usa","europe","asia","africa","north america","south america"],f=["ISO-3","USA-states","country names"],b=i()("hr",{}),h=function(a){var o=a.variables,e=a.groupingVariables,t=a.t;return i()(d.a,{autoStart:!1,title:i()("span",{},void 0,t("Map"),i()(v.a,{title:t("Map"),content:t("Map-description")})),onGenerate:function(o,e,n,l,s,d,r){var v=Object(c.a)(6),g={variable:r,longitude:s,latitude:d,locations:o,scope:n,showLand:l,plotId:v},f=i()(u.a,{data:a.data,variable:r,locations:o,longitude:s,latitude:d,locationmode:e,scope:n,showLand:l,id:v,action:g,onShare:function(){a.session.addNotification({title:t("plot-shared"),message:t("plot-shared-message"),level:"success",position:"tr"}),a.logAction(p.J,g)}});a.logAction(p.u,g),a.onCreated(f)}},void 0,i()(n.a,{},void 0,i()(l.a,{},void 0,i()(s.a,{legend:t("locations"),options:e,clearable:!0})),i()(l.a,{},void 0,i()(s.a,{legend:t("location-encoding"),options:f,defaultValue:"country names"}))),i()(n.a,{},void 0,i()(l.a,{},void 0,i()(s.a,{legend:t("scope"),defaultValue:"world",options:g})),i()(l.a,{},void 0,i()(r.a,{legend:t("show-land"),defaultValue:!1,style:{marginTop:35}}))),i()("h4",{className:"center"},void 0,t("or")),i()(n.a,{},void 0,i()(l.a,{},void 0,i()(s.a,{legend:t("longitude"),options:o,clearable:!0})),i()(l.a,{},void 0,i()(s.a,{legend:t("latitude"),options:o,clearable:!0}))),b,i()(s.a,{legend:t("variable"),options:o,clearable:!0}))};h.defaultProps={groupingVariables:null,logAction:function(){},onCreated:function(){}},o.default=h}}]);