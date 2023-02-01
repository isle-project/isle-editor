"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39301],{19085:function(e,t,s){s.d(t,{xV:function(){return ue},W4:function(){return be},sN:function(){return V}});var i=s(202784),n=s(213980),o=s.n(n),r=s(72779),l=s.n(r);function a(e,...t){return"function"==typeof e&&e(...t)}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}const u="react-contextmenu",d="react-contextmenu--visible",p="react-contextmenu-wrapper",c="react-contextmenu-item",m="react-contextmenu-item--active",b="react-contextmenu-item--disabled",f="react-contextmenu-item--divider",v="react-contextmenu-item--selected",g="react-contextmenu-submenu",y={},w=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),M="REACT_CONTEXTMENU_SHOW",C="REACT_CONTEXTMENU_HIDE";function O(e,t,s=window){let i;"function"==typeof window.CustomEvent?i=new window.CustomEvent(e,{detail:t}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!1,!0,t)),s&&(s.dispatchEvent(i),Object.assign(y,t))}function k(e={},t){O(M,Object.assign({},e,{type:M}),t)}function E(e={},t){O(C,Object.assign({},e,{type:C}),t)}var T=Object.defineProperty,x=(e,t,s)=>(((e,t,s)=>{t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s);var S=new class{constructor(){x(this,"handleShowEvent",(e=>{for(const t in this.callbacks)h(this.callbacks,t)&&this.callbacks[t].show(e)})),x(this,"handleHideEvent",(e=>{for(const t in this.callbacks)h(this.callbacks,t)&&this.callbacks[t].hide(e)})),x(this,"register",((e,t)=>{const s=Math.random().toString(36).substring(7);return this.callbacks[s]={show:e,hide:t},s})),x(this,"unregister",(e=>{e&&this.callbacks[e]&&delete this.callbacks[e]})),this.callbacks={},w&&(window.addEventListener(M,this.handleShowEvent),window.addEventListener(C,this.handleHideEvent))}},I=Object.defineProperty,N=Object.defineProperties,H=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,D=(e,t,s)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,R=(e,t,s)=>(D(e,"symbol"!=typeof t?t+"":t,s),s);class F extends i.Component{constructor(){super(...arguments),R(this,"handleClick",(e=>{0!==e.button&&1!==e.button&&e.preventDefault(),this.props.disabled||this.props.divider||(a(this.props.onClick,e,Object.assign({},this.props.data,y.data),y.target),this.props.preventClose||E())}))}render(){const{attributes:e,children:t,className:s,disabled:n,divider:o,selected:r}=this.props,a=l()(s,c,e.className,{[l()(b,e.disabledClassName)]:n,[l()(f,e.dividerClassName)]:o,[l()(v,e.selectedClassName)]:r});return i.createElement("div",(h=((e,t)=>{for(var s in t||(t={}))L.call(t,s)&&D(e,s,t[s]);if(P)for(var s of P(t))j.call(t,s)&&D(e,s,t[s]);return e})({},e),u={className:a,role:"menuitem",tabIndex:"-1","aria-disabled":n?"true":"false",ref:e=>{this.ref=e},onMouseMove:this.props.onMouseMove,onMouseLeave:this.props.onMouseLeave,onTouchEnd:this.handleClick,onClick:this.handleClick},N(h,H(u))),o?null:t);var h,u}}R(F,"propTypes",{attributes:o().object,children:o().node,className:o().string,data:o().object,disabled:o().bool,divider:o().bool,onClick:o().func,onMouseLeave:o().func,onMouseMove:o().func,preventClose:o().bool,selected:o().bool}),R(F,"defaultProps",{attributes:{},children:null,className:"",data:{},disabled:!1,divider:!1,onClick(){return null},onMouseMove:()=>null,onMouseLeave:()=>null,preventClose:!1,selected:!1});var V=F,K=Object.defineProperty,U=(e,t,s)=>(((e,t,s)=>{t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s);class W extends i.Component{constructor(e){super(e),U(this,"handleKeyNavigation",(e=>{if(!1!==this.state.isVisible)switch(e.keyCode){case 37:case 27:e.preventDefault(),this.hideMenu(e);break;case 38:e.preventDefault(),this.selectChildren(!0);break;case 40:e.preventDefault(),this.selectChildren(!1);break;case 39:this.tryToOpenSubMenu(e);break;case 13:e.preventDefault(),this.tryToOpenSubMenu(e);{const t=this.seletedItemRef&&this.seletedItemRef.props&&this.seletedItemRef.props.disabled;this.seletedItemRef&&this.seletedItemRef.ref instanceof HTMLElement&&!t?this.seletedItemRef.ref.click():this.hideMenu(e)}}})),U(this,"handleForceClose",(()=>{this.setState({forceSubMenuOpen:!1})})),U(this,"tryToOpenSubMenu",(e=>{this.state.selectedItem&&this.state.selectedItem.type===this.getSubMenuType()&&(e.preventDefault(),this.setState({forceSubMenuOpen:!0}))})),U(this,"selectChildren",(e=>{const{selectedItem:t}=this.state,s=[];let n=0,o={};const r=(e,t)=>{e&&([V,this.getSubMenuType()].indexOf(e.type)<0?i.Children.forEach(e.props?e.props.children:[],r):e.props.divider||(e.props.disabled&&(++n,o[t]=!0),s.push(e)))};if(i.Children.forEach(this.props.children,r),n===s.length)return;const l=function(t){let i=t;do{e?--i:++i,i<0?i=s.length-1:i>=s.length&&(i=0)}while(i!==t&&o[i]);return i===t?null:i}(s.indexOf(t));null!==l&&this.setState({selectedItem:s[l],forceSubMenuOpen:!1})})),U(this,"onChildMouseMove",(e=>{this.state.selectedItem!==e&&this.setState({selectedItem:e,forceSubMenuOpen:!1})})),U(this,"onChildMouseLeave",(()=>{this.setState({selectedItem:null,forceSubMenuOpen:!1})})),U(this,"renderChildren",(e=>i.Children.map(e,(e=>{const t={};return i.isValidElement(e)?[V,this.getSubMenuType()].indexOf(e.type)<0?(t.children=this.renderChildren(e.props?e.props.children:[]),i.cloneElement(e,t)):(t.onMouseLeave=this.onChildMouseLeave.bind(this),e.type===this.getSubMenuType()&&(t.forceOpen=this.state.forceSubMenuOpen&&this.state.selectedItem===e,t.forceClose=this.handleForceClose,t.parentKeyNavigationHandler=this.handleKeyNavigation),e.props.divider||this.state.selectedItem!==e?(t.onMouseMove=()=>this.onChildMouseMove(e),i.cloneElement(e,t)):(t.selected=!0,t.ref=e=>{this.seletedItemRef=e},i.cloneElement(e,t))):e})))),this.seletedItemRef=null,this.state={selectedItem:null,forceSubMenuOpen:!1}}}U(W,"propTypes",{children:o().node.isRequired});var A=W,q=s(690299),B=s.n(q),_=s(557106),X=s.n(_),$=Object.defineProperty,z=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ee=(e,t)=>{for(var s in t||(t={}))G.call(t,s)&&Q(e,s,t[s]);if(Z)for(var s of Z(t))J.call(t,s)&&Q(e,s,t[s]);return e},te=(e,t)=>z(e,Y(t)),se=(e,t,s)=>(Q(e,"symbol"!=typeof t?t+"":t,s),s);const ie=B()("isle:contextmenu"),ne=class extends A{constructor(e){super(e),se(this,"getMenuPosition",(()=>{const{innerWidth:e,innerHeight:t}=window,s=this.subMenu.getBoundingClientRect(),i={};if(s.bottom>t){ie("Bottom of element is below height of window...");const e=`-${X()(s.height-s.y,0)}px`;i.bottom=e}else ie("Bottom of element does not extend below window dimensions..."),i.top=0;return s.right<e?i.left="100%":i.right="100%",i})),se(this,"getRTLMenuPosition",(()=>{const{innerHeight:e}=window,t=this.subMenu.getBoundingClientRect(),s={};return t.bottom>e?s.bottom=0:s.top=0,t.left<0?s.left="100%":s.right="100%",s})),se(this,"hideMenu",(e=>{e.preventDefault(),this.hideSubMenu(e)})),se(this,"hideSubMenu",(e=>{e.detail&&e.detail.id&&this.menu&&e.detail.id!==this.menu.id||(this.props.forceOpen&&this.props.forceClose(),this.setState({visible:!1,selectedItem:null}),this.unregisterHandlers())})),se(this,"handleClick",(e=>{e.preventDefault(),this.props.disabled||(a(this.props.onClick,e,Object.assign({},this.props.data,y.data),y.target),this.props.onClick&&!this.props.preventCloseOnClick&&E())})),se(this,"handleMouseEnter",(()=>{this.closetimer&&clearTimeout(this.closetimer),this.props.disabled||this.state.visible||(this.opentimer=setTimeout((()=>this.setState({visible:!0,selectedItem:null})),this.props.hoverDelay))})),se(this,"handleMouseLeave",(()=>{this.opentimer&&clearTimeout(this.opentimer),this.state.visible&&(this.closetimer=setTimeout((()=>this.setState({visible:!1,selectedItem:null})),this.props.hoverDelay))})),se(this,"menuRef",(e=>{this.menu=e})),se(this,"subMenuRef",(e=>{this.subMenu=e})),se(this,"registerHandlers",(()=>{document.removeEventListener("keydown",this.props.parentKeyNavigationHandler),document.addEventListener("keydown",this.handleKeyNavigation)})),se(this,"unregisterHandlers",(e=>{document.removeEventListener("keydown",this.handleKeyNavigation),e||document.addEventListener("keydown",this.props.parentKeyNavigationHandler)})),this.state=Object.assign({},this.state,{visible:!1})}componentDidMount(){this.listenId=S.register((()=>{}),this.hideSubMenu)}getSubMenuType(){return ne}shouldComponentUpdate(e,t){return this.isVisibilityChange=!(this.state.visible===t.visible&&this.props.forceOpen===e.forceOpen||this.state.visible&&e.forceOpen||this.props.forceOpen&&t.visible),!0}componentDidUpdate(){if(this.isVisibilityChange)if(this.props.forceOpen||this.state.visible){(window.requestAnimationFrame||setTimeout)((()=>{const e=this.props.rtl?this.getRTLMenuPosition():this.getMenuPosition();this.subMenu.style.removeProperty("top"),this.subMenu.style.removeProperty("bottom"),this.subMenu.style.removeProperty("left"),this.subMenu.style.removeProperty("right"),h(e,"top")&&(this.subMenu.style.top=e.top),h(e,"left")&&(this.subMenu.style.left=e.left),h(e,"bottom")&&(this.subMenu.style.bottom=e.bottom),h(e,"right")&&(this.subMenu.style.right=e.right),this.subMenu.classList.add(d),this.registerHandlers(),this.setState({selectedItem:null})}))}else{const e=()=>{this.subMenu.removeEventListener("transitionend",e),this.subMenu.style.removeProperty("bottom"),this.subMenu.style.removeProperty("right"),this.subMenu.style.top=0,this.subMenu.style.left="100%",this.unregisterHandlers()};this.subMenu.addEventListener("transitionend",e),this.subMenu.classList.remove(d)}}componentWillUnmount(){this.listenId&&S.unregister(this.listenId),this.opentimer&&clearTimeout(this.opentimer),this.closetimer&&clearTimeout(this.closetimer),this.unregisterHandlers(!0)}render(){const{children:e,attributes:t,disabled:s,title:n,selected:o}=this.props,{visible:r}=this.state,a={ref:this.menuRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:l()(c,g,t.listClassName),style:{position:"relative"}},h={className:l()(c,t.className,{[l()(b,t.disabledClassName)]:s,[l()(m,t.visibleClassName)]:r,[l()(v,t.selectedClassName)]:o}),onMouseMove:this.props.onMouseMove,onMouseOut:this.props.onMouseOut,onClick:this.handleClick},d={ref:this.subMenuRef,style:{position:"absolute",transition:"opacity 1ms",top:0,left:"100%"},className:l()(u,this.props.className)};return i.createElement("nav",te(ee({},a),{role:"menuitem",tabIndex:"-1","aria-haspopup":"true"}),i.createElement("div",ee(ee({},t),h),n),i.createElement("nav",te(ee({},d),{role:"menu",tabIndex:"-1"}),this.renderChildren(e)))}};let oe=ne;se(oe,"propTypes",{children:o().node.isRequired,attributes:o().object,title:o().node.isRequired,className:o().string,disabled:o().bool,hoverDelay:o().number,rtl:o().bool,selected:o().bool,onMouseMove:o().func,onMouseOut:o().func,forceOpen:o().bool,forceClose:o().func,parentKeyNavigationHandler:o().func}),se(oe,"defaultProps",{disabled:!1,hoverDelay:500,attributes:{},className:"",rtl:!1,selected:!1,onMouseMove:()=>null,onMouseOut:()=>null,forceOpen:!1,forceClose:()=>null,parentKeyNavigationHandler:()=>null});var re=oe,le=Object.defineProperty,ae=(e,t,s)=>(((e,t,s)=>{t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s);class he extends A{constructor(e){super(e),ae(this,"registerHandlers",(()=>{document.addEventListener("mousedown",this.handleOutsideClick),document.addEventListener("touchstart",this.handleOutsideClick),this.props.preventHideOnScroll||document.addEventListener("scroll",this.handleHide),this.props.preventHideOnContextMenu||document.addEventListener("contextmenu",this.handleHide),document.addEventListener("keydown",this.handleKeyNavigation),this.props.preventHideOnResize||window.addEventListener("resize",this.handleHide)})),ae(this,"unregisterHandlers",(()=>{document.removeEventListener("mousedown",this.handleOutsideClick),document.removeEventListener("touchstart",this.handleOutsideClick),document.removeEventListener("scroll",this.handleHide),document.removeEventListener("contextmenu",this.handleHide),document.removeEventListener("keydown",this.handleKeyNavigation),window.removeEventListener("resize",this.handleHide)})),ae(this,"handleShow",(e=>{if(e.detail.id!==this.props.id||this.state.isVisible)return;const{x:t,y:s}=e.detail.position;this.setState({isVisible:!0,x:t,y:s}),this.registerHandlers(),a(this.props.onShow,e)})),ae(this,"handleHide",(e=>{!this.state.isVisible||e.detail&&e.detail.id&&e.detail.id!==this.props.id||(this.unregisterHandlers(),this.setState({isVisible:!1,selectedItem:null,forceSubMenuOpen:!1}),a(this.props.onHide,e))})),ae(this,"handleOutsideClick",(e=>{this.menu.contains(e.target)||E()})),ae(this,"handleMouseLeave",(e=>{e.preventDefault(),a(this.props.onMouseLeave,e,Object.assign({},this.props.data,y.data),y.target),this.props.hideOnLeave&&E()})),ae(this,"handleContextMenu",(e=>{e.preventDefault(),this.handleHide(e)})),ae(this,"hideMenu",(e=>{27!==e.keyCode&&13!==e.keyCode||E()})),ae(this,"getMenuPosition",((e=0,t=0)=>{let s={top:t,left:e};if(!this.menu)return s;const{innerWidth:i,innerHeight:n}=window,o=this.menu.getBoundingClientRect();return t+o.height>n&&(s.top-=o.height),e+o.width>i&&(s.left-=o.width),s.top<0&&(s.top=o.height<n?(n-o.height)/2:0),s.left<0&&(s.left=o.width<i?(i-o.width)/2:0),s})),ae(this,"getRTLMenuPosition",((e=0,t=0)=>{let s={top:t,left:e};if(!this.menu)return s;const{innerWidth:i,innerHeight:n}=window,o=this.menu.getBoundingClientRect();return s.left=e-o.width,t+o.height>n&&(s.top-=o.height),s.left<0&&(s.left+=o.width),s.top<0&&(s.top=o.height<n?(n-o.height)/2:0),s.left+o.width>i&&(s.left=o.width<i?(i-o.width)/2:0),s})),ae(this,"menuRef",(e=>{this.menu=e})),this.state=Object.assign({},this.state,{x:0,y:0,isVisible:!1})}getSubMenuType(){return re}componentDidMount(){this.listenId=S.register(this.handleShow,this.handleHide)}componentDidUpdate(){const e=window.requestAnimationFrame||setTimeout;this.state.isVisible?e((()=>{const{x:t,y:s}=this.state,{top:i,left:n}=this.props.rtl?this.getRTLMenuPosition(t,s):this.getMenuPosition(t,s);e((()=>{this.menu&&(this.menu.style.top=`${i}px`,this.menu.style.left=`${n}px`,this.menu.style.opacity=1,this.menu.style.pointerEvents="auto")}))})):e((()=>{this.menu&&(this.menu.style.opacity=0,this.menu.style.pointerEvents="none")}))}componentWillUnmount(){this.listenId&&S.unregister(this.listenId),this.unregisterHandlers()}render(){const{children:e,className:t,style:s}=this.props,{isVisible:n}=this.state,o=Object.assign({},s,{position:"fixed",opacity:0,pointerEvents:"none"}),r=l()(u,t,{[d]:n});return i.createElement("nav",{role:"menu",tabIndex:"-1",ref:this.menuRef,style:o,className:r,onContextMenu:this.handleContextMenu,onMouseLeave:this.handleMouseLeave},this.renderChildren(e))}}ae(he,"propTypes",{id:o().string.isRequired,children:o().node.isRequired,data:o().object,className:o().string,hideOnLeave:o().bool,rtl:o().bool,onHide:o().func,onMouseLeave:o().func,onShow:o().func,preventHideOnContextMenu:o().bool,preventHideOnResize:o().bool,preventHideOnScroll:o().bool,style:o().object}),ae(he,"defaultProps",{className:"",data:{},hideOnLeave:!1,rtl:!1,onHide(){return null},onMouseLeave(){return null},onShow(){return null},preventHideOnContextMenu:!1,preventHideOnResize:!1,preventHideOnScroll:!1,style:{}});var ue=he,de=Object.defineProperty,pe=(e,t,s)=>(((e,t,s)=>{t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s);const ce=["input","textarea"];class me extends i.Component{constructor(){super(...arguments),pe(this,"touchHandled",!1),pe(this,"handleMouseDown",(e=>{this.props.holdToDisplay>=0&&0===e.button&&(e.persist(),e.stopPropagation(),this.mouseDownTimeoutId=setTimeout((()=>this.handleContextClick(e)),this.props.holdToDisplay)),a(this.props.attributes.onMouseDown,e)})),pe(this,"handleMouseUp",(e=>{0===e.button&&clearTimeout(this.mouseDownTimeoutId),a(this.props.attributes.onMouseUp,e)})),pe(this,"handleMouseOut",(e=>{0===e.button&&clearTimeout(this.mouseDownTimeoutId),a(this.props.attributes.onMouseOut,e)})),pe(this,"handleTouchstart",(e=>{this.touchHandled=!1,this.props.holdToDisplay>=0&&(e.persist(),e.stopPropagation(),this.touchstartTimeoutId=setTimeout((()=>{this.handleContextClick(e),this.touchHandled=!0}),this.props.holdToDisplay)),a(this.props.attributes.onTouchStart,e)})),pe(this,"handleTouchEnd",(e=>{this.touchHandled&&e.preventDefault(),clearTimeout(this.touchstartTimeoutId),a(this.props.attributes.onTouchEnd,e)})),pe(this,"handleContextMenu",(e=>{e.button===this.props.mouseButton&&this.handleContextClick(e),a(this.props.attributes.onContextMenu,e)})),pe(this,"handleMouseClick",(e=>{e.button===this.props.mouseButton?this.handleContextClick(e):this.props.holdToDisplay>0&&E(),a(this.props.attributes.onClick,e)})),pe(this,"handleContextClick",(e=>{if(this.props.disable)return;if(this.props.disableIfShiftIsPressed&&e.shiftKey)return;const t=document.activeElement;if(t&&(-1!==ce.indexOf(t.tagName.toLowerCase())||t.isContentEditable)||"CANVAS"===t.tagName)return;e.preventDefault(),e.stopPropagation();let s=e.clientX||e.touches&&e.touches[0].pageX,i=e.clientY||e.touches&&e.touches[0].pageY;this.props.posX&&(s-=this.props.posX),this.props.posY&&(i-=this.props.posY),E();let n=a(this.props.collect,this.props),o={position:{x:s,y:i},target:this.elem,id:this.props.id};n&&"function"==typeof n.then?n.then((t=>{o.data=Object.assign({},t,{target:e.target}),k(o)})):(o.data=Object.assign({},n,{target:e.target}),k(o))})),pe(this,"elemRef",(e=>{this.elem=e}))}render(){const{renderTag:e,attributes:t,children:s}=this.props,n=Object.assign({},t,{className:l()(p,t.className),onContextMenu:this.handleContextMenu,onClick:this.handleMouseClick,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchstart,onTouchEnd:this.handleTouchEnd,onMouseOut:this.handleMouseOut,ref:this.elemRef});return i.createElement(e,n,s)}}me.propTypes={id:o().string.isRequired,children:o().node.isRequired,attributes:o().object,collect:o().func,disable:o().bool,holdToDisplay:o().number,posX:o().number,posY:o().number,renderTag:o().elementType,mouseButton:o().number,disableIfShiftIsPressed:o().bool},me.defaultProps={attributes:{},collect(){return null},disable:!1,holdToDisplay:1e3,renderTag:"div",posX:0,posY:0,mouseButton:2,disableIfShiftIsPressed:!1};var be=me;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable},606508:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var i=s(202784),n=s(213980),o=s.n(n),r=s(498614),l=s(294565),a=s(569257),h=s.n(a),u=s(19085),d=s(123103),p=s(690299),c=s.n(p),m=s(691334),b=Object.defineProperty,f=(e,t,s)=>(((e,t,s)=>{t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s);const v=c()("isle:link:contextmenu");class g extends i.Component{constructor(e){super(e),f(this,"copyToClipboard",(e=>{v("Copying selection to clipboard... "),navigator.clipboard.writeText(this.props.url)})),f(this,"textToSpeech",(()=>{const e=this.props.url,t=this.props.session,s=new SpeechSynthesisUtterance(e);s.lang=t.config.language||"en-US",window.speechSynthesis.speak(s)})),f(this,"openInTab",(()=>{const e=this.props.url;v(`Open ${e} in new tab`),window.open(e,"_blank"),this.props.logAction(m.o1,"tab")})),f(this,"openInWindow",(()=>{const e=this.props.url;v(`Open ${e} in new window`);const t=this.props.windowFeatures||"menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=800,height=600";window.open(e,"_blank",t),this.props.logAction(m.o1,"window")}))}render(){const e=[i.createElement(u.sN,{key:0,onClick:this.copyToClipboard},this.props.t("copy-link")),i.createElement(u.sN,{key:1,onClick:this.openInTab},this.props.t("open-link-tab")),i.createElement(u.sN,{key:2,onClick:this.openInWindow},this.props.t("open-link-window")),i.createElement(u.sN,{key:3,onClick:this.textToSpeech},this.props.t("read-aloud"))];return i.createElement(u.xV,{id:`${this.props.url}-context-menu`},e)}}g.propTypes={url:o().string,windowFeatures:o().string,session:o().object.isRequired},g.defaultProps={windowFeatures:"location=no,scrollbars=yes,status=yes",url:""};var y=g,w=s(487890);class M extends i.Component{constructor(e){super(e),this.state={url:null,href:null,target:e.target}}static getDerivedStateFromProps(e,t){if(e.href!==t.href){const t={href:e.href},s=(0,l.isPrimitive)(e.href),i=s&&h()(e.href,"#");return!s||h()(e.href,"http")||h()(e.href,"mailto")||i?(t.url=e.href,t.target=i?"_self":e.target):(t.url="http://"+e.href,t.target=e.target),t}return null}render(){return i.createElement(i.Fragment,null,i.createElement(u.W4,{holdToDisplay:-1,disableIfShiftIsPressed:!0,id:`${this.state.url}-context-menu`,renderTag:"span"},i.createElement("a",{className:this.props.className,href:this.state.url,target:this.state.target||"_blank",style:this.props.style,onClick:this.props.openWindow?e=>{e.preventDefault(),window.open(this.state.url,"_blank",this.props.windowFeatures),this.props.logAction(m.o1,"click"),this.props.logScore(100,"completed",this.props.tag)}:()=>{this.props.logAction(m.o1,"click"),this.props.logScore(100,"completed",this.props.tag)},download:this.props.download},this.props.children)),i.createElement(y,{session:this.context,url:this.state.url,target:this.state.target,t:this.props.t,windowFeatures:this.props.windowFeatures,logAction:this.props.logAction}))}}M.propTypes={href:o().string.isRequired,download:o().oneOfType([o().string,o().bool]),target:o().string,windowFeatures:o().string,openWindow:o().bool,className:o().string,tag:o().string,style:o().object},M.defaultProps={download:!1,target:null,windowFeatures:null,openWindow:!1,className:"",tag:null,style:{}},M.contextType=d.Z;var C=(0,r.Zh)("link")((0,w.D)("LINK",(e=>e.href))(M))}}]);