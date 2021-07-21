(self.webpackChunk=self.webpackChunk||[]).push([[1591],{957058:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});n(382139);var a=n(858255),r=n(264659),i=n(904730),o=n(673989),s=n(175663),l=n(750591),c=n(575630),u=n(151119),d=(n(59357),n(202784)),v=(n(213980),n(911755)),f=n.n(v),Z=n(579553),h=n.n(Z),p=n(198),m=n(912895),b=n.n(m),y=n(782963),g=n.n(y),x=n(188429),E=n(770561),w=n(569862),C=n(260952),N=n(472132),K=function(e){var t=e.t;return(0,a.Z)("div",{},void 0,(0,a.Z)("h2",{style:{textAlign:"center"}},void 0,t("data-explorer-title")),(0,a.Z)("p",{},void 0,t("data-explorer-p1")),(0,a.Z)("div",{className:"centered",style:{width:"fit-content"}},void 0,(0,a.Z)(N.Z,{alt:"Explorer View",src:"".concat(location.origin,"/screenshots/data_explorer_view.jpg"),width:400,height:200})),(0,a.Z)("p",{},void 0,t("data-explorer-p2")),(0,a.Z)("div",{className:"centered",style:{width:"fit-content"}},void 0,(0,a.Z)(N.Z,{className:"centered",alt:"Explorer Output",src:"".concat(location.origin,"/screenshots/data_explorer_outputs.jpg"),width:400,height:200})),(0,a.Z)("p",{},void 0,t("data-explorer-p3")),(0,a.Z)("p",{},void 0,t("data-explorer-p4")))},P=function(e){var t=e.t;return(0,a.Z)("div",{},void 0,(0,a.Z)("h2",{style:{textAlign:"center"}},void 0,t("data-table-title")),(0,a.Z)("p",{},void 0,t("data-table-p1")),(0,a.Z)("div",{className:"centered",style:{width:"fit-content"}},void 0,(0,a.Z)(N.Z,{alt:t("data-table-title"),src:"".concat(location.origin,"/screenshots/data_table_student.png"),width:600,height:300})),(0,a.Z)("p",{},void 0,t("data-explorer-p2")))},k=function(e){var t=e.t;return(0,a.Z)("div",{style:{textAlign:"center"}},void 0,(0,a.Z)("h2",{},void 0,t("statusbar-title")),(0,a.Z)("p",{},void 0,t("statusbar-p1")))},I=function(e){var t=e.t;return(0,a.Z)("div",{},void 0,(0,a.Z)("h2",{style:{textAlign:"center"}},void 0,t("questions-title")),(0,a.Z)("p",{},void 0,t("questions-p1")),(0,a.Z)("div",{className:"centered",style:{width:"fit-content"}},void 0,(0,a.Z)(N.Z,{alt:"Answering Questions",src:"".concat(location.origin,"/screenshots/answering_question.gif"),width:600,height:198})),(0,a.Z)("h3",{},void 0,t("questions-p2")),(0,a.Z)("p",{},void 0,t("questions-p3")),(0,a.Z)("h3",{},void 0,t("questions-p4")),(0,a.Z)("div",{className:"centered",style:{width:"fit-content"}},void 0,(0,a.Z)(N.Z,{alt:t("questions-p4"),src:"".concat(location.origin,"/screenshots/feedback_buttons.png"),width:184,height:53})),(0,a.Z)("p",{},void 0,t("questions-p5")),(0,a.Z)("h3",{},void 0,t("questions-p6")),(0,a.Z)("p",{},void 0,t("questions-p7")),(0,a.Z)("div",{className:"centered",style:{width:"fit-content"}},void 0,(0,a.Z)(N.Z,{alt:"Next Question Navigation",src:"".concat(location.origin,"/screenshots/question_nav_next.gif"),width:600,height:209})),(0,a.Z)("div",{className:"centered",style:{width:"fit-content"}},void 0,(0,a.Z)(N.Z,{alt:"Question Number Navigation",src:"".concat(location.origin,"/screenshots/question_nav_num.gif"),width:600,height:300})))},S=(n(697927),n(5140));var O=function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.width=3*e.width,t.height=3*e.height,n.drawImage(e,0,0,3*e.width,3*e.height),t.toDataURL("image/jpeg")};function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,l.Z)(this,n)}}var R=f()("isle:toolbar:help"),q={clickOutsideDeactivates:!0},T=function(e){(0,s.Z)(n,e);var t=D(n);function n(e){var a;return(0,r.Z)(this,n),a=t.call(this,e),(0,u.Z)((0,o.Z)(a),"handlePDFDownload",(function(){R("Preparing PDF for download...");for(var e=a.tabs.getElementsByTagName("img"),t=0;t<e.length;t++)e[t].src=O(e[t]);var n=a.props.t,r=a.tabs.innerHTML;r=r.replace('<h4 style="text-align: center; margin-top: 50%;">'+n("click-instruction")+"</h4>","");var i={content:g()(r),pageMargins:[40,60,40,60]},o=a.props.session;b().createPdf(i).download("ISLE_".concat(o.lessonName,"_Documentation.pdf"))})),(0,u.Z)((0,o.Z)(a),"handleTabSelect",(function(e){var t=a.props.session,n={id:"documentation",type:S.BH,value:e};t.log(n)})),a.hasQuestions=document.getElementsByClassName("submit-button").length>0,a.hasDataTable=document.getElementsByClassName("data-table-wrapper").length>0,a.hasDataExplorer=document.getElementsByClassName("data-explorer").length>0,a}return(0,i.Z)(n,[{key:"render",value:function(){var e=this,t=this.props.session,n=!t.config.hideStatusBar&&!t.config.removeStatusBar,r=this.props.t;return(0,a.Z)(h(),{focusTrapOptions:q},void 0,(0,a.Z)(C.Z,{body:!0,style:{width:"40%",height:"100vh",position:"fixed",right:0,top:0,zIndex:1006}},void 0,(0,a.Z)(x.Z.Container,{id:"left-tabs-example",defaultActiveKey:"zeroth",onSelect:this.handleTabSelect},void 0,(0,a.Z)("h3",{},void 0,r("documentation")),(0,a.Z)("div",{className:"help-buttons"},void 0,(0,a.Z)(E.Z,{variant:"outline-secondary",size:"sm",onClick:this.handlePDFDownload},void 0,r("download-pdf")),(0,a.Z)("button",{"aria-label":r("close-documentation"),className:"help-close-button fa fa-times",onClick:this.props.onClose})),(0,a.Z)(w.Z,{variant:"pills",style:{background:"#f8f9fa",padding:6}},void 0,this.hasDataTable?(0,a.Z)(w.Z.Item,{},void 0,(0,a.Z)(w.Z.Link,{eventKey:"data-table"},void 0,r("data-table-title"))):null,this.hasDataExplorer?(0,a.Z)(w.Z.Item,{},void 0,(0,a.Z)(w.Z.Link,{eventKey:"data-explorer"},void 0,r("data-explorer-title"))):null,t.config.hideStatusBar||t.config.removeStatusBar?null:(0,a.Z)(w.Z.Item,{},void 0,(0,a.Z)(w.Z.Link,{eventKey:"statusbar"},void 0,r("statusbar-title"))),this.hasQuestions?(0,a.Z)(w.Z.Item,{},void 0,(0,a.Z)(w.Z.Link,{eventKey:"questions"},void 0,r("questions-title"))):null),d.createElement(x.Z.Content,{ref:function(t){e.tabs=t},style:{overflowY:"scroll",height:"80vh"}},(0,a.Z)(x.Z.Pane,{eventKey:"zeroth"},void 0,(0,a.Z)("h4",{style:{textAlign:"center",marginTop:"50%"}},void 0,r("click-instruction"))),this.hasDataTable?(0,a.Z)(x.Z.Pane,{eventKey:"data-table"},void 0,(0,a.Z)(P,{t:r})):null,this.hasDataExplorer?(0,a.Z)(x.Z.Pane,{eventKey:"data-explorer"},void 0,(0,a.Z)(K,{t:r})):null,n?(0,a.Z)(x.Z.Pane,{eventKey:"statusbar"},void 0,(0,a.Z)(k,{t:r})):null,this.hasQuestions?(0,a.Z)(x.Z.Pane,{eventKey:"questions"},void 0,(0,a.Z)(I,{t:r})):null))))}}]),n}(d.Component),_=(0,p.Z)("internal/toolbar/help")(T)},418919:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(202784);function r(){return(0,a.useReducer)((function(e){return!e}),!1)[1]}},172643:function(e,t,n){"use strict";var a=n(607560),r=n(998283),i=n(658092),o=n(202784),s=n(418919),l=n(225879),c=n(62207),u=n(942932),d=n(395269),v=["as","onSelect","activeKey","role","onKeyDown"],f=function(){},Z=o.forwardRef((function(e,t){var n,Z,h=e.as,p=void 0===h?"ul":h,m=e.onSelect,b=e.activeKey,y=e.role,g=e.onKeyDown,x=(0,r.Z)(e,v),E=(0,s.Z)(),w=(0,o.useRef)(!1),C=(0,o.useContext)(u.Z),N=(0,o.useContext)(d.Z);N&&(y=y||"tablist",b=N.activeKey,n=N.getControlledId,Z=N.getControllerId);var K=(0,o.useRef)(null),P=function(e){var t=K.current;if(!t)return null;var n=(0,i.Z)(t,"[data-rb-event-key]:not(.disabled)"),a=t.querySelector(".active");if(!a)return null;var r=n.indexOf(a);if(-1===r)return null;var o=r+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},k=function(e,t){null!=e&&(m&&m(e,t),C&&C(e,t))};(0,o.useEffect)((function(){if(K.current&&w.current){var e=K.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var I=(0,l.Z)(t,K);return o.createElement(u.Z.Provider,{value:k},o.createElement(c.Z.Provider,{value:{role:y,activeKey:(0,u.h)(b),getControlledId:n||f,getControllerId:Z||f}},o.createElement(p,(0,a.Z)({},x,{onKeyDown:function(e){var t;switch(g&&g(e),e.key){case"ArrowLeft":case"ArrowUp":t=P(-1);break;case"ArrowRight":case"ArrowDown":t=P(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),w.current=!0,E())},ref:I,role:y}))))}));t.Z=Z},492784:function(e,t,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(806252),c=(n(645982),n(62207)),u=n(942932),d=["active","className","eventKey","onSelect","onClick","as"],v=s.forwardRef((function(e,t){var n=e.active,i=e.className,v=e.eventKey,f=e.onSelect,Z=e.onClick,h=e.as,p=(0,r.Z)(e,d),m=(0,u.h)(v,p.href),b=(0,s.useContext)(u.Z),y=(0,s.useContext)(c.Z),g=n;if(y){p.role||"tablist"!==y.role||(p.role="tab");var x=y.getControllerId(m),E=y.getControlledId(m);p["data-rb-event-key"]=m,p.id=x||p.id,p["aria-controls"]=E||p["aria-controls"],g=null==n&&null!=m?y.activeKey===m:n}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=g);var w=(0,l.Z)((function(e){Z&&Z(e),null!=m&&(f&&f(m,e),b&&b(m,e))}));return s.createElement(h,(0,a.Z)({},p,{ref:t,onClick:w,className:o()(i,g&&"active")}))}));v.defaultProps={disabled:!1},t.Z=v},569862:function(e,t,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=(n(970688),n(202784)),l=n(229277),c=n(429658),u=n(915462),d=n(144876),v=n(172643),f=n(477029),Z=n(206198),h=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"],p=s.forwardRef((function(e,t){var n,i,f,Z=(0,l.Ch)(e,{activeKey:"onSelect"}),p=Z.as,m=void 0===p?"div":p,b=Z.bsPrefix,y=Z.variant,g=Z.fill,x=Z.justify,E=Z.navbar,w=Z.navbarScroll,C=Z.className,N=Z.children,K=Z.activeKey,P=(0,r.Z)(Z,h),k=(0,c.vE)(b,"nav"),I=!1,S=(0,s.useContext)(u.Z),O=(0,s.useContext)(d.Z);return S?(i=S.bsPrefix,I=null==E||E):O&&(f=O.cardHeaderBsPrefix),s.createElement(v.Z,(0,a.Z)({as:m,ref:t,activeKey:K,className:o()(C,(n={},n[k]=!I,n[i+"-nav"]=I,n[i+"-nav-scroll"]=I&&w,n[f+"-"+y]=!!f,n[k+"-"+y]=!!y,n[k+"-fill"]=g,n[k+"-justified"]=x,n))},P),N)}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},p.Item=f.Z,p.Link=Z.Z,t.Z=p},62207:function(e,t,n){"use strict";var a=n(202784).createContext(null);a.displayName="NavContext",t.Z=a},477029:function(e,t,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(429658),c=["bsPrefix","className","children","as"],u=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,u=e.children,d=e.as,v=void 0===d?"div":d,f=(0,r.Z)(e,c);return n=(0,l.vE)(n,"nav-item"),s.createElement(v,(0,a.Z)({},f,{ref:t,className:o()(i,n)}),u)}));u.displayName="NavItem",t.Z=u},206198:function(e,t,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(482695),c=n(492784),u=n(429658),d=["bsPrefix","disabled","className","href","eventKey","onSelect","as"],v={disabled:!1,as:l.Z},f=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.disabled,l=e.className,v=e.href,f=e.eventKey,Z=e.onSelect,h=e.as,p=(0,r.Z)(e,d);return n=(0,u.vE)(n,"nav-link"),s.createElement(c.Z,(0,a.Z)({},p,{href:v,ref:t,eventKey:f,as:h,disabled:i,onSelect:Z,className:o()(l,n,i&&"disabled")}))}));f.displayName="NavLink",f.defaultProps=v,t.Z=f},915462:function(e,t,n){"use strict";var a=n(202784).createContext(null);a.displayName="NavbarContext",t.Z=a},942932:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var a=n(202784).createContext(null),r=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.Z=a},188429:function(e,t,n){"use strict";var a=n(535307),r=n(202784),i=n(485571),o=n(821729),s=n(557747),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(r.Component);l.Container=i.Z,l.Content=o.Z,l.Pane=s.Z,t.Z=l},485571:function(e,t,n){"use strict";var a=n(202784),r=n(229277),i=n(395269),o=n(942932);t.Z=function(e){var t=(0,r.Ch)(e,{activeKey:"onSelect"}),n=t.id,s=t.generateChildId,l=t.onSelect,c=t.activeKey,u=t.transition,d=t.mountOnEnter,v=t.unmountOnExit,f=t.children,Z=(0,a.useMemo)((function(){return s||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,s]),h=(0,a.useMemo)((function(){return{onSelect:l,activeKey:c,transition:u,mountOnEnter:d||!1,unmountOnExit:v||!1,getControlledId:function(e){return Z(e,"tabpane")},getControllerId:function(e){return Z(e,"tab")}}}),[l,c,u,d,v,Z]);return a.createElement(i.Z.Provider,{value:h},a.createElement(o.Z.Provider,{value:l||null},f))}},821729:function(e,t,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(429658),c=["bsPrefix","as","className"],u=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.as,u=void 0===i?"div":i,d=e.className,v=(0,r.Z)(e,c),f=(0,l.vE)(n,"tab-content");return s.createElement(u,(0,a.Z)({ref:t},v,{className:o()(d,f)}))}));t.Z=u},395269:function(e,t,n){"use strict";var a=n(202784).createContext(null);t.Z=a},557747:function(e,t,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(429658),c=n(395269),u=n(942932),d=n(558370),v=["activeKey","getControlledId","getControllerId"],f=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var Z=s.forwardRef((function(e,t){var n=function(e){var t=(0,s.useContext)(c.Z);if(!t)return e;var n=t.activeKey,i=t.getControlledId,o=t.getControllerId,l=(0,r.Z)(t,v),f=!1!==e.transition&&!1!==l.transition,Z=(0,u.h)(e.eventKey);return(0,a.Z)({},e,{active:null==e.active&&null!=Z?(0,u.h)(n)===Z:e.active,id:i(e.eventKey),"aria-labelledby":o(e.eventKey),transition:f&&(e.transition||l.transition||d.Z),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),i=n.bsPrefix,Z=n.className,h=n.active,p=n.onEnter,m=n.onEntering,b=n.onEntered,y=n.onExit,g=n.onExiting,x=n.onExited,E=n.mountOnEnter,w=n.unmountOnExit,C=n.transition,N=n.as,K=void 0===N?"div":N,P=(n.eventKey,(0,r.Z)(n,f)),k=(0,l.vE)(i,"tab-pane");if(!h&&!C&&w)return null;var I=s.createElement(K,(0,a.Z)({},P,{ref:t,role:"tabpanel","aria-hidden":!h,className:o()(Z,k,{active:h})}));return C&&(I=s.createElement(C,{in:h,onEnter:p,onEntering:m,onEntered:b,onExit:y,onExiting:g,onExited:x,mountOnEnter:E,unmountOnExit:w},I)),s.createElement(c.Z.Provider,{value:null},s.createElement(u.Z.Provider,{value:null},I))}));Z.displayName="TabPane",t.Z=Z}}]);