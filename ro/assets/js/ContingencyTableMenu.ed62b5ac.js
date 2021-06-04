(self.webpackChunk=self.webpackChunk||[]).push([[705],{784274:function(e,t,a){"use strict";a.r(t);a(382139);var n=a(858255),r=a(264659),i=a(904730),l=a(175663),o=a(750591),s=a(575630),c=a(202784),u=(a(213980),a(911755)),v=a.n(u),p=a(770561),d=a(260952),f=a(785745),g=a(927447),Z=a(741709),h=a(395846),b=a(5140),y=a(580067);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,o.Z)(this,a)}}var m=v()("isle:data-explorer:contingency-table"),C=function(e){(0,l.Z)(a,e);var t=V(a);function a(e){var n;return(0,r.Z)(this,a),(n=t.call(this,e)).state={relativeFreqs:!1,rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],group:null,nDecimalPlaces:3,variables:e.variables,display:[]},n}return(0,i.Z)(a,[{key:"generateContingencyTable",value:function(){var e=this.state,t=e.rowVar,a=e.colVar,r=e.group,i=e.relativeFreqs,l=e.nDecimalPlaces,o=e.display;if(!t||!a)return this.props.session.addNotification({title:this.props.t("select-variables"),message:this.props.t("select-row-and-column-variable"),level:"warning",position:"tr"});var s=(0,n.Z)(h.Z,{rowVar:t,colVar:a,group:r,relativeFreqs:i,nDecimalPlaces:l,display:o,data:this.props.data});this.props.logAction(b.lS,{rowVar:t,colVar:a,group:r,relativeFreqs:i,display:o}),this.props.onCreated(s)}},{key:"render",value:function(){var e=this,t=this.props,a=t.variables,r=t.groupingVariables,i=t.t;return(0,n.Z)(d.Z,{},void 0,(0,n.Z)(d.Z.Header,{as:"h4"},void 0,i("Contingency Table"),(0,n.Z)(y.Z,{title:i("Contingency Table"),content:i("Contingency Table-description")})),(0,n.Z)(d.Z.Body,{},void 0,(0,n.Z)(g.Z,{legend:i("row-variable"),defaultValue:this.state.rowVar,options:a,onChange:function(t){e.setState({rowVar:t})}}),(0,n.Z)(g.Z,{legend:i("column-variable"),defaultValue:this.state.colVar,options:a,onChange:function(t){e.setState({colVar:t})}}),(0,n.Z)(g.Z,{legend:i("group-by"),options:r,clearable:!0,menuPlacement:"top",onChange:function(t){e.setState({group:t})},tooltip:i("contingency-table-group-tooltip")}),(0,n.Z)(f.Z,{legend:i("relative-frequency"),defaultValue:!1,onChange:function(){e.setState({relativeFreqs:!e.state.relativeFreqs})}}),(0,n.Z)(g.Z,{legend:i("display"),options:["Row Percent","Column Percent"],multi:!0,onChange:function(t){e.setState({display:t||[]})}}),this.state.relativeFreqs||this.state.display.length>0?(0,n.Z)("p",{},void 0,i("report-relative-frequencies"),(0,n.Z)(Z.Z,{inline:!0,width:50,max:16,min:0,defaultValue:this.state.nDecimalPlaces,onChange:function(t){e.setState({nDecimalPlaces:t})}}),i("decimal-places")):null,(0,n.Z)(p.Z,{variant:"primary",block:!0,onClick:this.generateContingencyTable.bind(this)},void 0,i("generate"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.variables.length!==t.variables.length?(m("Available variables have changed..."),{rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],variables:e.variables}):null}}]),a}(c.Component);C.defaultProps={defaultRowVar:null,defaultColVar:null,groupingVariables:null,logAction:function(){}},t.default=C},580067:function(e,t,a){"use strict";var n,r=a(858255),i=(a(202784),a(213980),a(770561)),l=a(435376),o=a(203858),s=a(175891),c=a(109361);t.Z=function(e){var t=(0,r.Z)(l.Z,{id:"popover-positioned-right"},void 0,(0,r.Z)(o.Z,{},void 0,e.title),(0,r.Z)(s.Z,{},void 0,e.content));return(0,r.Z)(c.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,n||(n=(0,r.Z)(i.Z,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,(0,r.Z)("div",{className:"fa fa-question"}))))}}}]);