(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{6339:function(t,e,n){"use strict";var i=n(408),a=Object(i.a)((function(){return Promise.all([n.e(5),n.e(152)]).then(n.bind(null,6365))}));e.a=a},6508:function(t,e,n){"use strict";n.r(e),function(t){n(428),n(417),n(423);var i=n(406),a=n.n(i),s=(n(504),n(916)),o=n.n(s),r=n(414),c=n.n(r),l=n(418),h=n.n(l),u=n(427),d=n.n(u),f=n(420),p=n.n(f),m=n(421),v=n.n(m),g=n(419),C=n.n(g),k=n(413),y=n.n(k),w=n(0),S=(n(404),n(6338)),N=n.n(S),b=n(453),F=n.n(b),T=n(1070),x=n(736),A=n(820),R=n(668),H=n(433),O=n(534),D=n(854),P=n(936),E=n(501),I=n(573),z=n(6339);n(393);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=C()(t);if(e){var a=C()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return v()(this,n)}}var L=F()("isle:toolbar:ticketing"),M=["General"];t.COMPONENT_LIST&&(M=M.concat(t.COMPONENT_LIST));var _=a()("i",{className:"fas fa-times"}),j=a()("i",{className:"fas fa-paperclip"}),G=function(t){p()(n,t);var e=J(n);function n(t){var i;return c()(this,n),i=e.call(this,t),y()(d()(i),"handleTitleChange",(function(t){i.setState({title:t.target.value})})),y()(d()(i),"handleDescriptionChange",(function(t){i.setState({description:t})})),y()(d()(i),"handleComponentChange",(function(t){i.setState({component:t})})),y()(d()(i),"attachFile",(function(){var t=i.props,e=t.session,n=t.t;if(i.state.files.length>=6)return e.addNotification({title:n("maximum-num-attachments"),message:n("maximum-num-attachments-message"),level:"warning",position:"tr"});var a=document.createElement("input");a.type="file",a.onchange=function(t){var e=t.target.files,n=[].concat(o()(i.state.files),o()(e));i.setState({files:n})},a.click()})),y()(d()(i),"handleSubmit",(function(){L("Create ticket...");var t=i.props,e=t.session,n=t.t,a={title:i.state.title,description:i.state.description,component:i.state.component,platform:{name:N.a.name,version:N.a.version,product:N.a.product,manufacturer:N.a.manufacturer,os:N.a.os,description:N.a.description},files:i.state.files};e.createTicket(a).then((function(){i.setState({showAlert:!0})})).catch((function(t){e.addNotification({title:n("encountered-error"),message:t.message,level:"error",position:"tc"})}))})),y()(d()(i),"removeFileFactory",(function(t){return function(){var e=i.state.files.slice();e.splice(t,1),i.setState({files:e})}})),i.state={title:"",description:"",component:null,showAlert:!1,files:[]},i}return h()(n,[{key:"renderAttachments",value:function(){var t=this;return 0===this.state.files.length?null:a()(w.Fragment,{},void 0,a()("span",{className:"title"},void 0,this.props.t("attachments"),":"),a()(T.a,{className:"ticketing-attachment-list"},void 0,this.state.files.map((function(e,n){return a()(T.a.Item,{},"file-".concat(n),e.name,a()(H.a,{variant:"danger",size:"sm",onClick:t.removeFileFactory(n),style:{float:"right"}},void 0,_))}))))}},{key:"render",value:function(){var t=this,e=this.props,n=e.t;return e.show?a()(w.Fragment,{},void 0,a()(D.a,{dragHandleClassName:"card-header"},void 0,a()(I.a,{header:a()("span",{},void 0,a()("span",{className:"fa fa-lg fa-medkit",style:{marginRight:6}}),n("ticketing")),onHide:this.props.onHide,minimizable:!0,style:{maxWidth:560},bodyStyle:{maxHeight:"75vh"}},void 0,a()("p",{},void 0,n("ticketing-intro")),a()(O.a,{legend:n("component"),options:M,onChange:this.handleComponentChange}),a()(R.a,{},void 0,a()(A.a,{},void 0,n("title"),":"),a()(x.a,{type:"text",placeholder:n("title-placeholder"),onChange:this.handleTitleChange})),a()(P.a,{legend:n("description"),value:this.state.description,onChange:this.handleDescriptionChange,placeholder:n("description-placeholder")}),this.renderAttachments(),a()(E.a,{tooltip:n("attach-file")},void 0,a()(H.a,{onClick:this.attachFile},void 0,j)),a()(H.a,{onClick:this.handleSubmit,style:{float:"right"},disabled:!this.state.title||!this.state.description},void 0,n("create-ticket")))),a()(z.a,{title:n("ticket-created"),message:n("ticket-created-message"),show:this.state.showAlert,close:function(){t.setState({title:"",description:"",showAlert:!1,files:[]}),t.props.onHide()}})):null}}]),n}(w.Component);e.default=G}.call(this,n(22))}}]);