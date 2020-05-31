/*! For license information please see dll.3.js.LICENSE.txt */
(window.webpackJsonp_name_hash_=window.webpackJsonp_name_hash_||[]).push([[3],{3691:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(396),o=n.n(i),s=n(3762);n(3763);t.default=function(e,t){var n=e?o()(e):[];return r.a.createElement(a.Fragment,null,r.a.createElement("span",{className:"title"},"Filters:"),r.a.createElement("span",{style:{position:"relative",width:"auto",fontSize:"12px",fontFamily:"Open Sans"}},n.map((function(n,a){return r.a.createElement("button",{className:"action-filter-button",onClick:Object(s.default)(n[0],e,t),key:a},n[0],": ",n[1])}))))}},3756:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(6),o=n.n(i),s=n(3),l=n.n(s),c=n(7),u=n.n(c),d=n(8),f=n.n(d),h=n(4),m=n.n(h),p=n(2),g=n.n(p),v=n(0),y=n.n(v),b=n(22),E=n.n(b),w=n(187),k=n(240),C=n(103),x=n(104),S=n.n(x),R=n(74),F=n.n(R),T=n(3689),O=n(3757),N=n(3765),A=n(3692),I=n(39),z=n(30),_=n(55),D=n(3768),L=n(3771),M=n(3694);n(3773);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var U=T.default?15:0,V=E()("isle:statusbar-instructor-view"),j=function(e){u()(n,e);var t=P(n);function n(e,a){var i;r()(this,n),i=t.call(this,e),g()(l()(i),"windowResize",(function(){V("Process a `window.resize` event..."),i.setState({rightPos:-F()(.45*window.innerWidth,400)})})),g()(l()(i),"addResizeListener",(function(){window.addEventListener("resize",i.windowResize)})),g()(l()(i),"removeResizeListener",(function(){window.removeEventListener("resize",i.windowResize)})),g()(l()(i),"toggleBar",(function(){i.state.hidden?(Object(A.default)(i.instructorView,"right",U,400),i.handler.style.opacity=.7,i.setState({hidden:!1}),i.addResizeListener()):(Object(A.default)(i.instructorView,"right",i.state.rightPos,400),i.handler.style.opacity=.7,i.setState({hidden:!0}),i.removeResizeListener())})),g()(l()(i),"onMouseOver",(function(){i.state.hidden&&(i.handler.style.opacity=1)})),g()(l()(i),"onMouseOut",(function(){i.state.hidden&&(i.handler.style.opacity=.7)})),g()(l()(i),"renderTabs",(function(){var e=i.context;if(i.state.hidden)return null;var t=!S()(e.responseVisualizers);return y.a.createElement(k.default,{activeKey:i.state.activeTab,id:"instructor-view-tabs",onSelect:function(e){i.setState({activeTab:e})}},t?y.a.createElement(C.default,{eventKey:"response_visualizers",title:"Responses"},y.a.createElement(L.default,{selectedCohort:e.selectedCohort,session:e,onThumbnailClick:function(e){V("Go to actions with id "+e+"..."),i.setState({activeTab:"action_log",selectedID:e})}})):null,y.a.createElement(C.default,{eventKey:"active_users",title:y.a.createElement("span",null,"Active Users",y.a.createElement(w.default,{variant:"secondary",style:{marginLeft:6}},e.userList.length))},y.a.createElement(D.default,{session:e,onThumbnailClick:function(e){V("Go to actions from user "+e+"..."),i.setState({activeTab:"action_log",selectedEmail:e})}})),y.a.createElement(C.default,{eventKey:"action_log",title:"Action Log"},y.a.createElement(O.default,{selectedEmail:i.state.selectedEmail,selectedID:i.state.selectedID})),y.a.createElement(C.default,{eventKey:"instructor_notes",title:"Instructor Notes"},"instructor_notes"===i.state.activeTab?y.a.createElement(N.default,null):null))}));var o=!S()(a.responseVisualizers);return i.state={activeTab:o?"response_visualizers":"active_users",hidden:!0,rightPos:-F()(.45*window.innerWidth,400),selectedEmail:null,selectedID:null},i}return o()(n,[{key:"componentDidMount",value:function(){var e=this;this.addResizeListener();var t=this.context;this.unsubscribe=t.subscribe((function(t,n){t!==_.RECEIVED_USERS&&t!==_.USER_JOINED&&t!==_.USER_LEFT&&t!==_.USER_FINALLY_REMOVED&&t!==_.SELECTED_COHORT||e.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.removeResizeListener(),this.unsubscribe()}},{key:"render",value:function(){var e=this;return y.a.createElement("div",{className:"instructor-view unselectable",ref:function(t){e.instructorView=t},style:{right:this.state.rightPos}},y.a.createElement("div",{className:"instructor-view-top"},y.a.createElement("h3",{style:{marginTop:"20px"}},"Instructor Panel"),y.a.createElement("hr",{style:{background:"#333",backgroundImage:"linear-gradient(to right, #ccc, #333, #ccc)",height:"1px",border:0}})),y.a.createElement("div",{className:"instructor-view-middle"},this.renderTabs(),y.a.createElement(M.default,{id:"instructor-view-cohort-select",label:"Only show users from:",session:this.context})),y.a.createElement("div",{className:"instructor-view-bottom"}),y.a.createElement(I.default,{tooltip:"".concat(this.state.hidden?"Open":"Close"," instructor panel"),placement:"left"},y.a.createElement("div",{className:"instructor-view-handler",role:"button",tabIndex:0,"aria-label":"".concat(this.state.hidden?"Open":"Close"," instructor panel"),onClick:this.toggleBar,onKeyPress:this.toggleBar,onMouseOver:this.onMouseOver,onFocus:this.onMouseOver,onMouseOut:this.onMouseOut,onBlur:this.onMouseOut,ref:function(t){e.handler=t},style:{right:this.state.hidden?"102%":"100%",borderWidth:this.state.hidden?"15px 26px 15px 0":"15px 0 15px 26px",borderColor:this.state.hidden?"transparent #fa9417 transparent transparent":"transparent transparent transparent #fa9417"}})))}}]),n}(v.Component);j.contextType=z.SessionContext,t.default=j},3757:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(6),o=n.n(i),s=n(3),l=n.n(s),c=n(7),u=n.n(c),d=n(8),f=n.n(d),h=n(4),m=n.n(h),p=n(2),g=n.n(p),v=n(0),y=n.n(v),b=n(1),E=n.n(b),w=n(22),k=n.n(w),C=n(43),x=n.n(C),S=n(1065),R=n.n(S),F=n(12),T=n(10),O=n(70),N=n(169),A=n(1181),I=n(483),z=n(47),_=n.n(z),D=n(32),L=n.n(D),M=n(110),P=n.n(M),U=n(104),V=n.n(U),j=n(36),B=n.n(j),q=n(802),J=n(310),G=n(30),H=n(55),K=n(3758),W=n(3691);function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var Q=k()("isle:statusbar:action-log");x.a.locale("us");var Z=function(e){u()(n,e);var t=Y(n);function n(e){var a;return r()(this,n),a=t.call(this,e),g()(l()(a),"handleEmailFilterClick",(function(e){e.stopPropagation();var t=_()(a.state.filter);delete t.email,V()(t)&&(t=null);var n=Object(W.default)(t,(function(e,t){a.setState({filter:e,filters:t})}));a.setState({filter:t,filters:n})})),g()(l()(a),"handleIDFilterClick",(function(e){e.stopPropagation();var t=_()(a.state.filter);delete t.id,V()(t)&&(t=null);var n=Object(W.default)(t,(function(e,t){a.setState({filter:e,filters:t})}));a.setState({filter:t,filters:n})})),g()(l()(a),"handleRadioChange",(function(e){a.setState({anonymized:!a.state.anonymized})})),g()(l()(a),"saveJSON",(function(){var e=a.context;e.getFakeUsers((function(t,n){if(t)return e.addNotification({title:"Error encountered",message:"Encountered an error while generating fake users: "+t.message,level:"error",position:"tl"});var r=a.prepareActionsForExport(n),i=new Blob([JSON.stringify(r)],{type:"application/json"}),o="actions_".concat(e.namespaceName,"_").concat(e.lessonName,".json");Object(J.default)(i,o)}))})),g()(l()(a),"saveCSV",(function(){var e=a.context;e.getFakeUsers((function(t,n){if(t)return e.addNotification({title:"Error encountered",message:"Encountered an error while generating fake users: "+t.message,level:"error",position:"tl"});var r=a.prepareActionsForExport(n);R()(r,{header:!0},(function(t,n){if(t)return e.addNotification({title:"Error encountered",message:"Encountered an error while creating CSV: "+t.message,level:"error",position:"tl"});var a=new Blob([n],{type:"text/plain"}),r="actions_".concat(e.namespaceName,"_").concat(e.lessonName,".csv");Object(J.default)(a,r)}))}))})),a.state={anonymized:!0,includes:["guests","owners","students"],filters:y.a.createElement("span",{className:"title"},"Filters:"),period:{from:x()(0).startOf("day"),to:x()().endOf("day")},actions:[]},a}return o()(n,[{key:"componentDidMount",value:function(){var e=this,t=this.context;t.socketActions&&t.socketActions.length>0&&(Q("Initial construction of actions array..."),this.setState({actions:this.buildActionsArray()})),this.unsubscribe=t.subscribe((function(n,a){n===H.LOGGED_OUT?(Q("Should reset the filters after user logout:"),e.setState({filters:y.a.createElement("span",{className:"title"},"Filters:")})):n!==H.SELECTED_COHORT&&n!==H.MEMBER_ACTION&&n!==H.RETRIEVED_USER_ACTIONS||e.setState({actions:e.buildActionsArray()}),0===t.socketActions.length&&null!==e.state.filter&&e.setState({filter:{},filters:y.a.createElement("span",{className:"title"},"Filters:")})}))}},{key:"componentDidUpdate",value:function(e,t){this.props.selectedEmail!==e.selectedEmail?this.setState({filter:{email:this.props.selectedEmail},filters:y.a.createElement(v.Fragment,null,y.a.createElement("span",{className:"title"},"Filters:"),y.a.createElement("span",{style:{position:"relative",width:"auto",fontSize:"12px",fontFamily:"Open Sans"}},y.a.createElement("span",{role:"button",tabIndex:0,onClick:this.handleEmailFilterClick,onKeyPress:this.handleEmailFilterClick,style:{marginLeft:10,background:"lightcoral",cursor:"pointer"}},"email",": ",this.props.selectedEmail)))}):this.props.selectedID!==e.selectedID?this.setState({filter:{id:this.props.selectedID},filters:y.a.createElement(v.Fragment,null,y.a.createElement("span",{className:"title"},"Filters:"),y.a.createElement("span",{style:{position:"relative",width:"auto",fontSize:"12px",fontFamily:"Open Sans"}},y.a.createElement("span",{role:"button",tabIndex:0,onClick:this.handleIDFilterClick,onKeyPress:this.handleIDFilterClick,style:{marginLeft:10,background:"lightcoral",cursor:"pointer"}},"id",": ",this.props.selectedID)))}):this.state.filter!==t.filter?(Q("Should filter out actions..."),this.setState({actions:this.buildActionsArray()})):this.state.period.from===t.period.from&&this.state.period.to===t.period.to||this.setState({actions:this.buildActionsArray()})}},{key:"componentWillUnmount",value:function(){P()(this.unsubscribe)&&this.unsubscribe()}},{key:"buildActionsArray",value:function(){var e=this.state.period,t=e.from,n=e.to;if(Q("Building action array..."),t&&n){t=t.toDate(),n=n.toDate();for(var a=this.context,r=[],i=0;i<a.socketActions.length;i++){var o=a.socketActions[i];a.selectedCohort&&!L()(a.selectedCohort.members,o.email)||o.absoluteTime>t&&o.absoluteTime<n&&r.push(o)}return this.state.filter&&(Q("Should filter actions: "+r.length),this.removeMarkedActions(r)),r}return[]}},{key:"removeMarkedActions",value:function(e){for(var t=e.length-1;t>=0;t--){var n=e[t],a=!1;for(var r in this.state.filter)if(B()(this.state.filter,r)){var i=this.state.filter[r];n[r]!==i&&(a=!0)}a&&e.splice(t,1)}}},{key:"prepareActionsForExport",value:function(e){var t,n=this.state.actions.length;if(this.state.anonymized){t=new Array(n);for(var a=0;a<n;a++){var r=_()(this.state.actions[a]);r.name=e.name[r.name],r.email=e.email[r.email],t[a]=r}}else t=this.state.actions;for(var i=[],o=L()(this.state.includes,"owners"),s=L()(this.state.includes,"students"),l=L()(this.state.includes,"guests"),c=0;c<t.length;c++){var u=t[c];u.owner?o&&i.push(u):u.email===u.name?l&&i.push(u):s&&i.push(u)}return i}},{key:"render",value:function(){var e,t=this,n=this.context.socketActions,a=n.length;return e=a>0?n[a-1].absoluteTime:0,y.a.createElement(F.default.Body,null,y.a.createElement(q.default,{size:"sm",origin:e,onChange:function(e){t.setState({period:e})}}),y.a.createElement(K.default,{actions:this.state.actions,period:this.state.period,filter:this.state.filter,height:window.innerHeight/2,onFilterChange:function(e,n){t.setState({filter:e,filters:n})}}),this.state.filters,y.a.createElement(N.default,null,y.a.createElement(O.default,null,y.a.createElement("span",{style:{fontSize:"14px",marginRight:20,paddingTop:5,fontWeight:600}},"# of Actions: "+this.state.actions.length)),y.a.createElement(A.default,{name:"options",onChange:this.handleRadioChange,type:"radio",size:"small",value:this.state.anonymized,style:{marginRight:"5px"}},y.a.createElement(I.default,{size:"sm",variant:"light",value:!1,style:{fontSize:"12px",color:this.state.anonymized?"#A9A9A9":"black"}},"Original"),y.a.createElement(I.default,{size:"sm",variant:"light",value:!0,style:{fontSize:"12px",color:this.state.anonymized?"black":"#A9A9A9"}},"Anonymized")),y.a.createElement(A.default,{type:"checkbox",onChange:function(e){t.setState({includes:e})},value:this.state.includes,style:{marginRight:"5px"}},y.a.createElement(I.default,{size:"sm",variant:"light",value:"owners",style:{fontSize:"12px",color:L()(this.state.includes,"owners")?"black":"#A9A9A9"}},"Owners"),y.a.createElement(I.default,{size:"sm",variant:"light",value:"students",style:{fontSize:"12px",color:L()(this.state.includes,"students")?"black":"#A9A9A9"}},"Students"),y.a.createElement(I.default,{size:"sm",variant:"light",value:"guests",style:{fontSize:"12px",color:L()(this.state.includes,"guests")?"black":"#A9A9A9"}},"Guests")),y.a.createElement(O.default,{size:"sm"},y.a.createElement(T.default,{variant:"primary",onClick:this.saveJSON},"Save JSON"),y.a.createElement(T.default,{variant:"primary",onClick:this.saveCSV},"Save CSV"))))}}]),n}(v.Component);Z.contextType=G.SessionContext,Z.propTypes={selectedEmail:E.a.string,selectedID:E.a.string},Z.defaultProps={selectedEmail:null,selectedID:null},t.default=Z},3758:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n.n(a),i=n(5),o=n.n(i),s=n(6),l=n.n(s),c=n(3),u=n.n(c),d=n(7),f=n.n(d),h=n(8),m=n.n(h),p=n(4),g=n.n(p),v=n(2),y=n.n(v),b=n(0),E=n.n(b),w=n(1),k=n.n(w),C=n(22),x=n.n(C),S=n(1046),R=n.n(S),F=n(47),T=n.n(F),O=n(304),N=n.n(O),A=n(3759),I=n(3691);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var _=x()("isle:statusbar:action-log"),D=/\r?\n/g,L=function(e){f()(n,e);var t=z(n);function n(e){var a;return o()(this,n),a=t.call(this,e),y()(u()(a),"clickFactory",(function(e,t){return function(){var n=a.props.filter?T()(a.props.filter):{};n[e]=t,_("The filter was successfully changed: "+JSON.stringify(n));var r=Object(I.default)(n,a.props.onFilterChange);a.props.onFilterChange(n,r)}})),y()(u()(a),"itemSizeGetter",(function(e){var t=40,n=a.state.actions[e];return n?(t+=16*((String(n.value).match(D)||"").length+1),t+=20):0})),y()(u()(a),"renderItem",(function(e,t){_("Render ".concat(e,"th item"));var n,i=a.state.actions[e],o=e%2?"white":"lightgrey";return n=i.owner?"#3c763d":"black",E.a.createElement(A.default,r()({key:t,backgroundColor:o,color:n,clickFactory:a.clickFactory},i))})),a.state={actions:e.actions},a}return l()(n,[{key:"render",value:function(){var e=this.props.height,t=this.state.actions;_("Rendering list of actions...");var n=null;return t.length>0&&(_("Received more than one action: "+t.length),n=E.a.createElement(R.a,{itemRenderer:this.renderItem,length:t.length,type:"variable",pageSize:50,itemSizeGetter:this.itemSizeGetter})),E.a.createElement("div",{style:{overflowY:"scroll",height:e}},n)}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.actions.length!==t.actions.length){for(var n=new Array(e.actions.length),a=0;a<e.actions.length;a++){n[a]=e.actions[a];var r=n[a].value;N()(r)&&(n[a].value=JSON.stringify(r,null,2))}return{actions:e.actions}}return null}}]),n}(b.Component);L.defaultProps={actions:[],filter:{},height:null,onFilterChange:function(){}},L.propTypes={actions:k.a.array,filter:k.a.object,height:k.a.number,onFilterChange:k.a.func,period:k.a.shape({from:k.a.object,to:k.a.object}).isRequired},t.default=L},3759:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(168),o=n(1),s=n.n(o),l=n(126),c=(n(3760),function(e){var t=e.value;Object(l.isPrimitive)(t)&&(t=t?"true":"false");var n=new Date(e.absoluteTime);return r.a.createElement(i.default,{style:{background:e.backgroundColor,color:e.color,fontSize:15,fontFamily:"Open Sans",padding:"2px 1px 2px 1px",lineHeight:1}},r.a.createElement("div",{className:"actionNote"},r.a.createElement("span",{className:"title"},"Time: "),n.toLocaleTimeString()," - ",n.toLocaleDateString(),"|",r.a.createElement("label",{htmlFor:"action-email-button"},"User: "),r.a.createElement("button",{id:"action-email-button",className:"empty-button",onClick:e.clickFactory("email",e.email)},e.email)),r.a.createElement("div",{className:"actionNote"},r.a.createElement("label",{htmlFor:"action-id-button"},"ID: "),r.a.createElement("button",{id:"action-id-button",className:"empty-button",onClick:e.clickFactory("id",e.id)},e.id)," |",r.a.createElement("label",{htmlFor:"action-type-button"},"Type: "),r.a.createElement("button",{id:"action-type-button",className:"empty-button",onClick:e.clickFactory("type",e.type)},e.type)),r.a.createElement("div",{className:"actionNote"},r.a.createElement("span",{className:"title"},"Value: "),r.a.createElement("span",{style:{userSelect:"text"}},t)))});c.propTypes={absoluteTime:s.a.number.isRequired,backgroundColor:s.a.string.isRequired,color:s.a.string.isRequired,clickFactory:s.a.func.isRequired,email:s.a.string.isRequired,type:s.a.string.isRequired,value:s.a.oneOfType([s.a.object,s.a.string]).isRequired},t.default=c},3760:function(e,t,n){var a=n(37),r=n(3761);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},3761:function(e,t,n){(t=n(38)(!1)).push([e.i,".empty-button {\n\tcolor: inherit;\n}\n",""]),e.exports=t},3762:function(e,t,n){"use strict";n.r(t);var a=n(104),r=n.n(a),i=n(47),o=n.n(i),s=n(3691);t.default=function(e,t,n){return function(a){a.stopPropagation();var i=o()(t);delete i[e],r()(i)&&(i=null);var l=Object(s.default)(i,n);n(i,l)}}},3763:function(e,t,n){var a=n(37),r=n(3764);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},3764:function(e,t,n){(t=n(38)(!1)).push([e.i,".action-filter-button {\n\tmargin-left: 10px;\n\tbackground: lightcoral;\n\tborder: none;\n\tcursor: pointer;\n}\n",""]),e.exports=t},3765:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(6),o=n.n(i),s=n(7),l=n.n(s),c=n(8),u=n.n(c),d=n(4),f=n.n(d),h=n(0),m=n.n(h),p=n(22),g=n.n(p),v=n(759);n(3766);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var b=g()("isle:instructor-notes"),E=function(e){l()(n,e);var t=y(n);function n(e){return r()(this,n),t.call(this,e)}return o()(n,[{key:"render",value:function(){return b("Rendering instructor notes..."),m.a.createElement(v.default,{id:"instructor-notes",className:"instructor-notes",mode:"collaborative",allowSubmissions:!1,toolbarConfig:["bold","italic","underline","heading","|","open_markdown","save","preview"]})}}]),n}(h.Component);t.default=E},3766:function(e,t,n){var a=n(37),r=n(3767);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},3767:function(e,t,n){(t=n(38)(!1)).push([e.i,".instructor-notes {\n\tborder: 1px solid rgba(92, 92, 92, 0.6);\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 7px rgba(92, 92, 92, 0.5);\n\tmargin-bottom: 0px;\n\tmargin-left: 0px;\n\tmargin-right: 0px;\n\tmargin-top: 0px;\n}\n",""]),e.exports=t},3768:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(6),o=n.n(i),s=n(3),l=n.n(s),c=n(7),u=n.n(c),d=n(8),f=n.n(d),h=n(4),m=n.n(h),p=n(2),g=n.n(p),v=n(0),y=n.n(v),b=n(1),E=n.n(b),w=n(22),k=n.n(w),C=n(10),x=n(379),S=n(168),R=n(338),F=n(181),T=n.n(F),O=n(32),N=n.n(O),A=n(110),I=n.n(A),z=n(41),_=n.n(z),D=n(129),L=n(1658),M=n(39),P=n(291),U=n(55);n(3769);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var j=k()("isle:statusbar:instructor-view"),B=[];function q(){for(var e=document.getElementsByClassName("focus-glow");e.length;)e[0].classList.remove("focus-glow");var t=document.getElementById("duplicated-container");t&&t.parentNode.removeChild(t)}var J=function(e){u()(n,e);var t=V(n);function n(e){var a;return r()(this,n),a=t.call(this,e),g()(l()(a),"highlightElement",(function(e){var t=a.props.session.userFocuses[e];j("ID of element to be focused is: "+t),q();var n=document.getElementById(t);if(n)if(j("Found element, should add glow effect..."),null===n.offsetParent){var r=n.cloneNode(!0),i=document.createElement("div");i.id="duplicated-container",r.id="duplicated-elem",r.classList.add("focus-glow"),i.append(r),document.body.appendChild(i)}else n.classList.add("focus-glow"),n.scrollIntoView()})),g()(l()(a),"handleClickFactory",(function(e){return function(){if(a.state.selected===e)return q(),a.setState({selected:null});a.highlightElement(e),a.setState({selected:e})}})),g()(l()(a),"thumbnailClickFactory",(function(e){return function(t){t.stopPropagation(),a.props.onThumbnailClick(e)}})),g()(l()(a),"filter",(function(e){j("Clicked on progressbar...");var t,n=e.target.innerText;t=a.state.filter===n?null:n,a.setState({filter:t})})),g()(l()(a),"chatInviteFactory",(function(e,t){var n=a.props.session;return function(a,r){j("Invite "+t+" to personal chat..."),r?n.inviteToChat({name:e,canLeave:!1},t):n.closeChatForAll(e)}})),g()(l()(a),"videoChatInviteFactory",(function(e,t){var n=a.props.session;return function(a,r){j("Invite "+t+" to video chat..."),r&&n.inviteToVideo(e,t)}})),a.state={filter:null,selected:null},a}return o()(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.session;this.unsubscribe=t.subscribe((function(t,n){t===U.RECEIVED_USERS||t===U.USER_JOINED||t===U.USER_LEFT||t===U.USER_FINALLY_REMOVED||t===U.SELECTED_COHORT||t===U.USER_PROGRESS?(j("Should render the user list..."),e.forceUpdate()):t!==U.MEMBER_ACTION||n.type!==U.FOCUS_ELEMENT&&n.type!==U.LOSE_FOCUS_ELEMENT||(n.email===e.state.selected&&e.highlightElement(n.email),e.forceUpdate())}))}},{key:"componentWillUnmount",value:function(){j("Unmount user list..."),I()(this.unsubscribe)&&this.unsubscribe(),q()}},{key:"render",value:function(){var e=this,t=this.props.session,n=t.userFocuses,a=t.userProgress,r={},i=0,o=y.a.createElement(x.default,{className:"user-list-group",style:{height:window.innerHeight/1.5}},t.userList.filter((function(a){if(t.selectedCohort&&!N()(t.selectedCohort.members,a.email))return!1;var o=n[a.email];if(o){var s=T()(B,o);-1===s&&(s=B.length,B.push(o)),r[o]=(r[o]||0)+1,i+=1}return!e.state.filter||o===e.state.filter})).map((function(r,i){var o,s,l=null,c=n[r.email];if(c){var u=T()(B,c);l=y.a.createElement("span",{style:{float:"right",color:P.CAT20[u%P.CAT20.length]}},c)}o=r.owner?"#3c763d":r.inactive?"lightgray":"black",s=e.state.selected===r.email?"#e0a800":"transparent";var d=t.server+"/thumbnail/"+r.picture,f=e.thumbnailClickFactory(r.email),h=t.user.email!==r.email&&!r.inactive;return y.a.createElement(S.default,{className:"user-list-item",key:i},y.a.createElement("div",{style:{width:"100%"}},y.a.createElement(M.default,{placement:"right",tooltip:"Click to open user actions"},y.a.createElement("span",{role:"button",tabIndex:0,onClick:f,onKeyPress:f},y.a.createElement("img",{className:"user-thumbnail",alt:"User thumbnail",src:d}))),y.a.createElement(M.default,{placement:"bottom",tooltip:"Lesson Progress"},y.a.createElement(R.default,{className:"user-list-progress",now:100*a[r.email]})),h?y.a.createElement(D.default,{showTooltip:!1,for:"Chat with ".concat(r.name),onClick:e.chatInviteFactory("Chat with ".concat(r.name),r.email)}):null,h?y.a.createElement(L.default,{showTooltip:!1,for:"".concat(t.user.name,"-").concat(r.name),subject:"Video with ".concat(r.name),style:{marginLeft:5},onClick:e.videoChatInviteFactory({name:"".concat(t.user.name,"-").concat(r.name),subject:"Video with ".concat(r.name)},r.email)}):null),y.a.createElement("div",{style:{width:"100%",color:o}},r.name," (",r.email,") | ",r.joinTime," - ",r.exitTime,l?y.a.createElement(M.default,{placement:"left",tooltip:"Element user is interacting with"},y.a.createElement(C.default,{className:"user-list-active-button",variant:"outline-secondary",size:"sm",onClick:e.handleClickFactory(r.email),style:{background:s}},l)):null))}))),s=_()(r);return y.a.createElement(v.Fragment,null,y.a.createElement(R.default,{style:{cursor:"pointer"},onClick:this.filter},s.map((function(t,n){var a=T()(B,t),o=P.CAT20[a%P.CAT20.length];return y.a.createElement(R.default,{style:{background:e.state.filter!==t?o:"gold"},key:n,now:r[t]/i*100,label:t})}))),o)}}]),n}(v.Component);J.propTypes={onThumbnailClick:E.a.func.isRequired,session:E.a.object.isRequired},t.default=J},3769:function(e,t,n){var a=n(37),r=n(3770);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},3770:function(e,t,n){(t=n(38)(!1)).push([e.i,".user-list-group {\n\toverflow-y: scroll;\n\tmargin-left: 0;\n\tfont-size: 15px;\n\tfont-family: Open Sans;\n}\n\n.user-list-item {\n\tpadding: 5px;\n}\n\n.user-list-active-button {\n\tfloat: right;\n}\n\n.user-list-active-button:hover {\n\tbackground: #d39e00 !important;\n}\n\n#duplicated-elem {\n\tposition: fixed;\n\ttop: 20px;\n\tleft: 20px;\n\tz-index: 3000;\n}\n\n#duplicated-container {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tz-index: 2;\n}\n\n.user-thumbnail {\n\twidth: 32px;\n\theight: 32px;\n\tborder: solid 1px darkgray;\n\tborder-radius: 0.25rem;\n\tmargin-right: 5px;\n\tcursor: pointer;\n}\n\n.user-thumbnail:hover {\n\ttransform: scale(3);\n\tmargin-left: 30px;\n\tmargin-top: 30px;\n}\n\n.user-list-progress {\n\twidth: 100px;\n\tmargin-right: 6px;\n\theight: 1.2rem;\n\tvertical-align: middle;\n\tdisplay: inline-flex;\n}\n",""]),e.exports=t},3771:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(6),o=n.n(i),s=n(3),l=n.n(s),c=n(7),u=n.n(c),d=n(8),f=n.n(d),h=n(4),m=n.n(h),p=n(2),g=n.n(p),v=n(0),y=n.n(v),b=n(1),E=n.n(b),w=n(22),k=n.n(w),C=n(187),x=n(379),S=n(168),R=n(338),F=n(39),T=n(47),O=n.n(T),N=n(41),A=n.n(N),I=n(32),z=n.n(I),_=n(89),D=n.n(_),L=n(567),M=n.n(L),P=n(3772),U=n(55);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var j=k()("isle:statusbar:instructor-view");function B(){for(var e=document.getElementsByClassName("focus-glow");e.length;)e[0].classList.remove("focus-glow");var t=document.getElementById("duplicated-container");t&&t.parentNode.removeChild(t)}var q=function(e){u()(n,e);var t=V(n);function n(e){var a;return r()(this,n),a=t.call(this,e),g()(l()(a),"thumbnailClickFactory",(function(e){return function(t){t.stopPropagation(),a.props.onThumbnailClick(e)}})),g()(l()(a),"highlightFactory",(function(e){return function(){if(B(),a.state.selected===e)return a.setState({selected:null});var t=document.getElementById(e);if(t)if(j("Found element, should add glow effect..."),null===t.offsetParent){var n=t.cloneNode(!0);n.addEventListener("click",(function(e){j("Clicked on element with ID ".concat(e.target.id)),document.getElementById(e.target.id).click()}));var r=document.createElement("div");r.id="duplicated-container",n.id="duplicated-elem",n.classList.add("focus-glow"),r.append(n),document.body.appendChild(r)}else t.classList.add("focus-glow"),t.scrollIntoView();a.setState({selected:e})}})),j("Initializing state in constructor..."),a.state={selected:null,means:{}},a}return o()(n,[{key:"componentDidMount",value:function(){for(var e=this,t=this.props.session,n=t.responseVisualizers,a=A()(n),r={},i=function(e){var t=n[a[e]],i=M()();t.ref.state.actions.forEach((function(e){i(e.time)})),r[a[e]]=i},o=0;o<a.length;o++)i(o);this.setState({means:r}),this.unsubscribe=t.subscribe((function(t,n){if(t===U.MEMBER_ACTION&&z()(a,n.id)){var r=O()(e.state.means);r[n.id](n.time),e.setState({means:r})}else t!==U.UPDATED_VISUALIZER&&t!==U.SELECTED_COHORT||e.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){B(),this.unsubscribe()}},{key:"render",value:function(){var e,t;j("Render response visualizer statistics...");var n=this.props.session;n.selectedCohort?(console.log("RS: "+n.activeCohortMembers.length),t=n.activeCohortMembers.length,e="Completion rate for students from cohort ".concat(n.selectedCohort.title)):(t=n.userList.length,e="Completion rate for currently active students from all cohorts");var a=n.responseVisualizers,r=this.state.means,i=A()(a);i.sort((function(e,t){if(r[e]&&r[t]){var n=r[e](),i=r[t]();if(n&&i)return n-i}var o=a[e].ref.state.nInfo;return a[t].ref.state.nInfo-o}));for(var o=new Array(i.length),s=new Date-this.props.session.startTime,l=0,c=0;c<i.length;c++){var u=a[i[c]],d=u.ref.state.nInfo,f=u.ref.state.nActions,h=A()(u.ref.emailHash).length,m=d/t*100;l+=m;var p=i[c],g="time: ".concat(r[p]?Object(P.default)(r[p]()):""),v=void 0;v=d>0&&r[p]&&s>r[p]()?m<10?"danger":m>75?"success":"info":"light";var b=void 0;b=n.selectedCohort?"".concat(d," / ").concat(t," (of ").concat(n.selectedCohort.members.length,")"):"".concat(d," / ").concat(t),o[c]=y.a.createElement(S.default,{key:c,style:{background:this.state.selected===p?"#e0a800":"lightgrey",padding:"0.4rem 1rem",cursor:"pointer"},onClick:this.highlightFactory(p)},y.a.createElement(F.default,{placement:"right",tooltip:"Question ID (click on row to show question"},y.a.createElement("label",{style:{margin:0}},p)),y.a.createElement(F.default,{placement:"left",tooltip:"Open actions"},y.a.createElement(C.default,{variant:"light",style:{float:"right",margin:"2px"},onClick:this.thumbnailClickFactory(p)},"Open")),y.a.createElement(F.default,{placement:"left",tooltip:"# of actions (".concat(n.selectedCohort?n.selectedCohort.title:"all cohorts",")")},y.a.createElement(C.default,{variant:"light",style:{float:"right",margin:"2px"}},"n: ".concat(f))),y.a.createElement(F.default,{placement:"left",tooltip:"# of students who answered (".concat(n.selectedCohort?n.selectedCohort.title:"all cohorts",")")},y.a.createElement(C.default,{variant:"light",style:{float:"right",margin:"2px"}},"s: ".concat(h))),y.a.createElement(F.default,{placement:"left",tooltip:"Average elapsed time until answer (all cohorts)"},y.a.createElement(C.default,{variant:v,style:{float:"right",margin:"2px"}},g)),y.a.createElement(F.default,{placement:"left",tooltip:e},y.a.createElement(R.default,{variant:"info",now:m,max:100,min:0,label:b,style:{width:"180px",float:"right",height:"1.25rem"}})))}return l/=i.length,y.a.createElement("div",null,y.a.createElement(R.default,{striped:!0,variant:"success",label:"Current class progress: ".concat(D()(l),"%"),now:l}),y.a.createElement(x.default,{style:{height:window.innerHeight/1.5,overflowY:"scroll"}},o))}}]),n}(v.Component);q.propTypes={onThumbnailClick:E.a.func.isRequired,session:E.a.object.isRequired},t.default=q},3772:function(e,t,n){"use strict";n.r(t);var a=n(45),r=n.n(a);t.default=function(e){e/=1e3;var t=r()(e/3600);e%=3600;var n=r()(e/60);return n<10&&(n="0"+n),t+":"+n}},3773:function(e,t,n){var a=n(37),r=n(3774);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},3774:function(e,t,n){(t=n(38)(!1)).push([e.i,".instructor-view {\n\twidth: 45%;\n\tmin-width: 400px;\n\tposition: fixed;\n\ttop: 0;\n\theight: 100%;\n\tz-index: 1004;\n}\n\n.instructor-view-top {\n\ttop: 0;\n\tposition: absolute;\n\theight: 10%;\n\twidth: 100%;\n\tbackground-color: rgb(232, 232, 232);\n\tborder-left: solid 1px darkslategrey;\n\tborder-top: solid 1px darkslategrey;\n\tbackground-image: linear-gradient(0deg, rgb(232, 232, 232), ghostwhite);\n\tborder-top-left-radius: 60px;\n\ttext-align: center;\n\tmargin-right: 30px;\n\tborder-bottom: solid 1px silver;\n}\n\n.instructor-view-bottom {\n\tposition: absolute;\n\ttop: 95%;\n\theight: 5%;\n\twidth: 100%;\n\tbackground-color: rgb(232, 232, 232);\n\tborder-left: solid 1px darkslategrey;\n\tborder-bottom: solid 1px darkslategrey;\n\tborder-bottom-left-radius: 60px;\n}\n\n.instructor-view-middle {\n\tposition: absolute;\n\ttop: 10%;\n\theight: 85%;\n\twidth: 100%;\n\tbackground-color: rgb(250, 250, 250);\n\tborder-left: solid 1px darkslategrey;\n}\n\n.instructor-view-handler {\n\tposition: absolute;\n\topacity: 0.7;\n\tcursor: pointer;\n\ttop: 1%;\n\twidth: 0;\n\theight: 0;\n\tborder-style: solid;\n}\n\n.panel-notes {\n\theight: 380px;\n\toverflow-y: scroll;\n}\n",""]),e.exports=t}}]);