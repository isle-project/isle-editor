"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6534],{977369:function(e,t,n){n.d(t,{xV:function(){return pe},W4:function(){return ve},sN:function(){return V}});var o=n(497326),i=n(894578),s=n(202784),r=n(213980),a=n.n(r),l=n(72779),u=n.n(l);function c(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e&&e.apply(void 0,n)}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var p="react-contextmenu",h="react-contextmenu--visible",f="react-contextmenu-wrapper",m="react-contextmenu-item",b="react-contextmenu-item--active",v="react-contextmenu-item--disabled",y="react-contextmenu-item--divider",g="react-contextmenu-item--selected",w="react-contextmenu-submenu",M={},C=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),O="REACT_CONTEXTMENU_SHOW",E="REACT_CONTEXTMENU_HIDE";function S(e,t,n){var o;void 0===n&&(n=window),"function"==typeof window.CustomEvent?o=new window.CustomEvent(e,{detail:t}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!0,t),n&&(n.dispatchEvent(o),Object.assign(M,t))}function k(e,t){void 0===e&&(e={}),S(O,Object.assign({},e,{type:O}),t)}function x(e,t){void 0===e&&(e={}),S(E,Object.assign({},e,{type:E}),t)}var N=Object.defineProperty,T=function(e,t,n){return function(e,t,n){t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},Z=new function(){var e=this;T(this,"handleShowEvent",(function(t){for(var n in e.callbacks)d(e.callbacks,n)&&e.callbacks[n].show(t)})),T(this,"handleHideEvent",(function(t){for(var n in e.callbacks)d(e.callbacks,n)&&e.callbacks[n].hide(t)})),T(this,"register",(function(t,n){var o=Math.random().toString(36).substring(7);return e.callbacks[o]={show:t,hide:n},o})),T(this,"unregister",(function(t){t&&e.callbacks[t]&&delete e.callbacks[t]})),this.callbacks={},C&&(window.addEventListener(O,this.handleShowEvent),window.addEventListener(E,this.handleHideEvent))},I=n(867855),H=Object.defineProperty,L=Object.defineProperties,P=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,A=function(e,t,n){return t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},W=function(e,t,n){return A(e,"symbol"!=typeof t?t+"":t,n),n},U=function(e){function t(){var t;return t=e.apply(this,arguments)||this,W((0,o.Z)(t),"handleClick",(function(e){0!==e.button&&1!==e.button&&e.preventDefault(),t.props.disabled||t.props.divider||(c(t.props.onClick,e,Object.assign({},t.props.data,M.data),M.target),t.props.preventClose||x())})),t}return(0,i.Z)(t,e),t.prototype.render=function(){var e,t,n,o=this,i=this.props,r=i.attributes,a=i.children,l=i.className,c=i.disabled,d=i.divider,p=i.selected,h=u()(l,m,r.className,((e={})[u()(v,r.disabledClassName)]=c,e[u()(y,r.dividerClassName)]=d,e[u()(g,r.selectedClassName)]=p,e));return s.createElement("div",(t=function(e,t){for(var n in t||(t={}))D.call(t,n)&&A(e,n,t[n]);if(R)for(var o,i=(0,I.Z)(R(t));!(o=i()).done;)n=o.value,j.call(t,n)&&A(e,n,t[n]);return e}({},r),n={className:h,role:"menuitem",tabIndex:"-1","aria-disabled":c?"true":"false",ref:function(e){o.ref=e},onMouseMove:this.props.onMouseMove,onMouseLeave:this.props.onMouseLeave,onTouchEnd:this.handleClick,onClick:this.handleClick},L(t,P(n))),d?null:a)},t}(s.Component);W(U,"propTypes",{attributes:a().object,children:a().node,className:a().string,data:a().object,disabled:a().bool,divider:a().bool,onClick:a().func,onMouseLeave:a().func,onMouseMove:a().func,preventClose:a().bool,selected:a().bool}),W(U,"defaultProps",{attributes:{},children:null,className:"",data:{},disabled:!1,divider:!1,onClick:function(){return null},onMouseMove:function(){return null},onMouseLeave:function(){return null},preventClose:!1,selected:!1});var V=U,q=Object.defineProperty,K=function(e,t,n){return function(e,t,n){t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},B=function(e){function t(t){var n;return n=e.call(this,t)||this,K((0,o.Z)(n),"handleKeyNavigation",(function(e){if(!1!==n.state.isVisible)switch(e.keyCode){case 37:case 27:e.preventDefault(),n.hideMenu(e);break;case 38:e.preventDefault(),n.selectChildren(!0);break;case 40:e.preventDefault(),n.selectChildren(!1);break;case 39:n.tryToOpenSubMenu(e);break;case 13:e.preventDefault(),n.tryToOpenSubMenu(e);var t=n.seletedItemRef&&n.seletedItemRef.props&&n.seletedItemRef.props.disabled;n.seletedItemRef&&n.seletedItemRef.ref instanceof HTMLElement&&!t?n.seletedItemRef.ref.click():n.hideMenu(e)}})),K((0,o.Z)(n),"handleForceClose",(function(){n.setState({forceSubMenuOpen:!1})})),K((0,o.Z)(n),"tryToOpenSubMenu",(function(e){n.state.selectedItem&&n.state.selectedItem.type===n.getSubMenuType()&&(e.preventDefault(),n.setState({forceSubMenuOpen:!0}))})),K((0,o.Z)(n),"selectChildren",(function(e){var t=n.state.selectedItem,o=[],i=0,r={};if(s.Children.forEach(n.props.children,(function e(t,a){t&&([V,n.getSubMenuType()].indexOf(t.type)<0?s.Children.forEach(t.props?t.props.children:[],e):t.props.divider||(t.props.disabled&&(++i,r[a]=!0),o.push(t)))})),i!==o.length){var a=function(t){var n=t;do{e?--n:++n,n<0?n=o.length-1:n>=o.length&&(n=0)}while(n!==t&&r[n]);return n===t?null:n}(o.indexOf(t));null!==a&&n.setState({selectedItem:o[a],forceSubMenuOpen:!1})}})),K((0,o.Z)(n),"onChildMouseMove",(function(e){n.state.selectedItem!==e&&n.setState({selectedItem:e,forceSubMenuOpen:!1})})),K((0,o.Z)(n),"onChildMouseLeave",(function(){n.setState({selectedItem:null,forceSubMenuOpen:!1})})),K((0,o.Z)(n),"renderChildren",(function(e){return s.Children.map(e,(function(e){var t={};return s.isValidElement(e)?[V,n.getSubMenuType()].indexOf(e.type)<0?(t.children=n.renderChildren(e.props?e.props.children:[]),s.cloneElement(e,t)):(t.onMouseLeave=n.onChildMouseLeave.bind((0,o.Z)(n)),e.type===n.getSubMenuType()&&(t.forceOpen=n.state.forceSubMenuOpen&&n.state.selectedItem===e,t.forceClose=n.handleForceClose,t.parentKeyNavigationHandler=n.handleKeyNavigation),e.props.divider||n.state.selectedItem!==e?(t.onMouseMove=function(){return n.onChildMouseMove(e)},s.cloneElement(e,t)):(t.selected=!0,t.ref=function(e){n.seletedItemRef=e},s.cloneElement(e,t))):e}))})),n.seletedItemRef=null,n.state={selectedItem:null,forceSubMenuOpen:!1},n}return(0,i.Z)(t,e),t}(s.Component);K(B,"propTypes",{children:a().node.isRequired});var z=B,X=n(690299),Y=n.n(X),_=n(557106),F=n.n(_),Q=Object.defineProperty,$=Object.defineProperties,G=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,ne=function(e,t,n){return t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},oe=function(e,t){for(var n in t||(t={}))ee.call(t,n)&&ne(e,n,t[n]);if(J)for(var o,i=(0,I.Z)(J(t));!(o=i()).done;){n=o.value;te.call(t,n)&&ne(e,n,t[n])}return e},ie=function(e,t){return $(e,G(t))},se=function(e,t,n){return ne(e,"symbol"!=typeof t?t+"":t,n),n},re=Y()("isle:contextmenu"),ae=function(e){function t(t){var n;return n=e.call(this,t)||this,se((0,o.Z)(n),"getMenuPosition",(function(){var e=window,t=e.innerWidth,o=e.innerHeight,i=n.subMenu.getBoundingClientRect(),s={};if(i.bottom>o){re("Bottom of element is below height of window...");var r="-"+F()(i.height-i.y,0)+"px";s.bottom=r}else re("Bottom of element does not extend below window dimensions..."),s.top=0;return i.right<t?s.left="100%":s.right="100%",s})),se((0,o.Z)(n),"getRTLMenuPosition",(function(){var e=window.innerHeight,t=n.subMenu.getBoundingClientRect(),o={};return t.bottom>e?o.bottom=0:o.top=0,t.left<0?o.left="100%":o.right="100%",o})),se((0,o.Z)(n),"hideMenu",(function(e){e.preventDefault(),n.hideSubMenu(e)})),se((0,o.Z)(n),"hideSubMenu",(function(e){e.detail&&e.detail.id&&n.menu&&e.detail.id!==n.menu.id||(n.props.forceOpen&&n.props.forceClose(),n.setState({visible:!1,selectedItem:null}),n.unregisterHandlers())})),se((0,o.Z)(n),"handleClick",(function(e){e.preventDefault(),n.props.disabled||(c(n.props.onClick,e,Object.assign({},n.props.data,M.data),M.target),n.props.onClick&&!n.props.preventCloseOnClick&&x())})),se((0,o.Z)(n),"handleMouseEnter",(function(){n.closetimer&&clearTimeout(n.closetimer),n.props.disabled||n.state.visible||(n.opentimer=setTimeout((function(){return n.setState({visible:!0,selectedItem:null})}),n.props.hoverDelay))})),se((0,o.Z)(n),"handleMouseLeave",(function(){n.opentimer&&clearTimeout(n.opentimer),n.state.visible&&(n.closetimer=setTimeout((function(){return n.setState({visible:!1,selectedItem:null})}),n.props.hoverDelay))})),se((0,o.Z)(n),"menuRef",(function(e){n.menu=e})),se((0,o.Z)(n),"subMenuRef",(function(e){n.subMenu=e})),se((0,o.Z)(n),"registerHandlers",(function(){document.removeEventListener("keydown",n.props.parentKeyNavigationHandler),document.addEventListener("keydown",n.handleKeyNavigation)})),se((0,o.Z)(n),"unregisterHandlers",(function(e){document.removeEventListener("keydown",n.handleKeyNavigation),e||document.addEventListener("keydown",n.props.parentKeyNavigationHandler)})),n.state=Object.assign({},n.state,{visible:!1}),n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.listenId=Z.register((function(){}),this.hideSubMenu)},n.getSubMenuType=function(){return t},n.shouldComponentUpdate=function(e,t){return this.isVisibilityChange=!(this.state.visible===t.visible&&this.props.forceOpen===e.forceOpen||this.state.visible&&e.forceOpen||this.props.forceOpen&&t.visible),!0},n.componentDidUpdate=function(){var e=this;if(this.isVisibilityChange)if(this.props.forceOpen||this.state.visible){(window.requestAnimationFrame||setTimeout)((function(){var t=e.props.rtl?e.getRTLMenuPosition():e.getMenuPosition();e.subMenu.style.removeProperty("top"),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("left"),e.subMenu.style.removeProperty("right"),d(t,"top")&&(e.subMenu.style.top=t.top),d(t,"left")&&(e.subMenu.style.left=t.left),d(t,"bottom")&&(e.subMenu.style.bottom=t.bottom),d(t,"right")&&(e.subMenu.style.right=t.right),e.subMenu.classList.add(h),e.registerHandlers(),e.setState({selectedItem:null})}))}else{this.subMenu.addEventListener("transitionend",(function t(){e.subMenu.removeEventListener("transitionend",t),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("right"),e.subMenu.style.top=0,e.subMenu.style.left="100%",e.unregisterHandlers()})),this.subMenu.classList.remove(h)}},n.componentWillUnmount=function(){this.listenId&&Z.unregister(this.listenId),this.opentimer&&clearTimeout(this.opentimer),this.closetimer&&clearTimeout(this.closetimer),this.unregisterHandlers(!0)},n.render=function(){var e,t=this.props,n=t.children,o=t.attributes,i=t.disabled,r=t.title,a=t.selected,l=this.state.visible,c={ref:this.menuRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:u()(m,w,o.listClassName),style:{position:"relative"}},d={className:u()(m,o.className,(e={},e[u()(v,o.disabledClassName)]=i,e[u()(b,o.visibleClassName)]=l,e[u()(g,o.selectedClassName)]=a,e)),onMouseMove:this.props.onMouseMove,onMouseOut:this.props.onMouseOut,onClick:this.handleClick},h={ref:this.subMenuRef,style:{position:"absolute",transition:"opacity 1ms",top:0,left:"100%"},className:u()(p,this.props.className)};return s.createElement("nav",ie(oe({},c),{role:"menuitem",tabIndex:"-1","aria-haspopup":"true"}),s.createElement("div",oe(oe({},o),d),r),s.createElement("nav",ie(oe({},h),{role:"menu",tabIndex:"-1"}),this.renderChildren(n)))},t}(z);se(ae,"propTypes",{children:a().node.isRequired,attributes:a().object,title:a().node.isRequired,className:a().string,disabled:a().bool,hoverDelay:a().number,rtl:a().bool,selected:a().bool,onMouseMove:a().func,onMouseOut:a().func,forceOpen:a().bool,forceClose:a().func,parentKeyNavigationHandler:a().func}),se(ae,"defaultProps",{disabled:!1,hoverDelay:500,attributes:{},className:"",rtl:!1,selected:!1,onMouseMove:function(){return null},onMouseOut:function(){return null},forceOpen:!1,forceClose:function(){return null},parentKeyNavigationHandler:function(){return null}});var le=ae,ue=Object.defineProperty,ce=function(e,t,n){return function(e,t,n){t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},de=function(e){function t(t){var n;return n=e.call(this,t)||this,ce((0,o.Z)(n),"registerHandlers",(function(){document.addEventListener("mousedown",n.handleOutsideClick),document.addEventListener("touchstart",n.handleOutsideClick),n.props.preventHideOnScroll||document.addEventListener("scroll",n.handleHide),n.props.preventHideOnContextMenu||document.addEventListener("contextmenu",n.handleHide),document.addEventListener("keydown",n.handleKeyNavigation),n.props.preventHideOnResize||window.addEventListener("resize",n.handleHide)})),ce((0,o.Z)(n),"unregisterHandlers",(function(){document.removeEventListener("mousedown",n.handleOutsideClick),document.removeEventListener("touchstart",n.handleOutsideClick),document.removeEventListener("scroll",n.handleHide),document.removeEventListener("contextmenu",n.handleHide),document.removeEventListener("keydown",n.handleKeyNavigation),window.removeEventListener("resize",n.handleHide)})),ce((0,o.Z)(n),"handleShow",(function(e){if(e.detail.id===n.props.id&&!n.state.isVisible){var t=e.detail.position,o=t.x,i=t.y;n.setState({isVisible:!0,x:o,y:i}),n.registerHandlers(),c(n.props.onShow,e)}})),ce((0,o.Z)(n),"handleHide",(function(e){!n.state.isVisible||e.detail&&e.detail.id&&e.detail.id!==n.props.id||(n.unregisterHandlers(),n.setState({isVisible:!1,selectedItem:null,forceSubMenuOpen:!1}),c(n.props.onHide,e))})),ce((0,o.Z)(n),"handleOutsideClick",(function(e){n.menu.contains(e.target)||x()})),ce((0,o.Z)(n),"handleMouseLeave",(function(e){e.preventDefault(),c(n.props.onMouseLeave,e,Object.assign({},n.props.data,M.data),M.target),n.props.hideOnLeave&&x()})),ce((0,o.Z)(n),"handleContextMenu",(function(e){e.preventDefault(),n.handleHide(e)})),ce((0,o.Z)(n),"hideMenu",(function(e){27!==e.keyCode&&13!==e.keyCode||x()})),ce((0,o.Z)(n),"getMenuPosition",(function(e,t){void 0===e&&(e=0),void 0===t&&(t=0);var o={top:t,left:e};if(!n.menu)return o;var i=window,s=i.innerWidth,r=i.innerHeight,a=n.menu.getBoundingClientRect();return t+a.height>r&&(o.top-=a.height),e+a.width>s&&(o.left-=a.width),o.top<0&&(o.top=a.height<r?(r-a.height)/2:0),o.left<0&&(o.left=a.width<s?(s-a.width)/2:0),o})),ce((0,o.Z)(n),"getRTLMenuPosition",(function(e,t){void 0===e&&(e=0),void 0===t&&(t=0);var o={top:t,left:e};if(!n.menu)return o;var i=window,s=i.innerWidth,r=i.innerHeight,a=n.menu.getBoundingClientRect();return o.left=e-a.width,t+a.height>r&&(o.top-=a.height),o.left<0&&(o.left+=a.width),o.top<0&&(o.top=a.height<r?(r-a.height)/2:0),o.left+a.width>s&&(o.left=a.width<s?(s-a.width)/2:0),o})),ce((0,o.Z)(n),"menuRef",(function(e){n.menu=e})),n.state=Object.assign({},n.state,{x:0,y:0,isVisible:!1}),n}(0,i.Z)(t,e);var n=t.prototype;return n.getSubMenuType=function(){return le},n.componentDidMount=function(){this.listenId=Z.register(this.handleShow,this.handleHide)},n.componentDidUpdate=function(){var e=this,t=window.requestAnimationFrame||setTimeout;this.state.isVisible?t((function(){var n=e.state,o=n.x,i=n.y,s=e.props.rtl?e.getRTLMenuPosition(o,i):e.getMenuPosition(o,i),r=s.top,a=s.left;t((function(){e.menu&&(e.menu.style.top=r+"px",e.menu.style.left=a+"px",e.menu.style.opacity=1,e.menu.style.pointerEvents="auto")}))})):t((function(){e.menu&&(e.menu.style.opacity=0,e.menu.style.pointerEvents="none")}))},n.componentWillUnmount=function(){this.listenId&&Z.unregister(this.listenId),this.unregisterHandlers()},n.render=function(){var e,t=this.props,n=t.children,o=t.className,i=t.style,r=this.state.isVisible,a=Object.assign({},i,{position:"fixed",opacity:0,pointerEvents:"none"}),l=u()(p,o,((e={})[h]=r,e));return s.createElement("nav",{role:"menu",tabIndex:"-1",ref:this.menuRef,style:a,className:l,onContextMenu:this.handleContextMenu,onMouseLeave:this.handleMouseLeave},this.renderChildren(n))},t}(z);ce(de,"propTypes",{id:a().string.isRequired,children:a().node.isRequired,data:a().object,className:a().string,hideOnLeave:a().bool,rtl:a().bool,onHide:a().func,onMouseLeave:a().func,onShow:a().func,preventHideOnContextMenu:a().bool,preventHideOnResize:a().bool,preventHideOnScroll:a().bool,style:a().object}),ce(de,"defaultProps",{className:"",data:{},hideOnLeave:!1,rtl:!1,onHide:function(){return null},onMouseLeave:function(){return null},onShow:function(){return null},preventHideOnContextMenu:!1,preventHideOnResize:!1,preventHideOnScroll:!1,style:{}});var pe=de,he=Object.defineProperty,fe=function(e,t,n){return function(e,t,n){t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},me=["input","textarea"],be=function(e){function t(){var t;return t=e.apply(this,arguments)||this,fe((0,o.Z)(t),"touchHandled",!1),fe((0,o.Z)(t),"handleMouseDown",(function(e){t.props.holdToDisplay>=0&&0===e.button&&(e.persist(),e.stopPropagation(),t.mouseDownTimeoutId=setTimeout((function(){return t.handleContextClick(e)}),t.props.holdToDisplay)),c(t.props.attributes.onMouseDown,e)})),fe((0,o.Z)(t),"handleMouseUp",(function(e){0===e.button&&clearTimeout(t.mouseDownTimeoutId),c(t.props.attributes.onMouseUp,e)})),fe((0,o.Z)(t),"handleMouseOut",(function(e){0===e.button&&clearTimeout(t.mouseDownTimeoutId),c(t.props.attributes.onMouseOut,e)})),fe((0,o.Z)(t),"handleTouchstart",(function(e){t.touchHandled=!1,t.props.holdToDisplay>=0&&(e.persist(),e.stopPropagation(),t.touchstartTimeoutId=setTimeout((function(){t.handleContextClick(e),t.touchHandled=!0}),t.props.holdToDisplay)),c(t.props.attributes.onTouchStart,e)})),fe((0,o.Z)(t),"handleTouchEnd",(function(e){t.touchHandled&&e.preventDefault(),clearTimeout(t.touchstartTimeoutId),c(t.props.attributes.onTouchEnd,e)})),fe((0,o.Z)(t),"handleContextMenu",(function(e){e.button===t.props.mouseButton&&t.handleContextClick(e),c(t.props.attributes.onContextMenu,e)})),fe((0,o.Z)(t),"handleMouseClick",(function(e){e.button===t.props.mouseButton?t.handleContextClick(e):t.props.holdToDisplay>0&&x(),c(t.props.attributes.onClick,e)})),fe((0,o.Z)(t),"handleContextClick",(function(e){if(!(t.props.disable||t.props.disableIfShiftIsPressed&&e.shiftKey)){var n=document.activeElement;if(!(n&&(-1!==me.indexOf(n.tagName.toLowerCase())||n.isContentEditable))&&"CANVAS"!==n.tagName){e.preventDefault(),e.stopPropagation();var o=e.clientX||e.touches&&e.touches[0].pageX,i=e.clientY||e.touches&&e.touches[0].pageY;t.props.posX&&(o-=t.props.posX),t.props.posY&&(i-=t.props.posY),x();var s=c(t.props.collect,t.props),r={position:{x:o,y:i},target:t.elem,id:t.props.id};s&&"function"==typeof s.then?s.then((function(t){r.data=Object.assign({},t,{target:e.target}),k(r)})):(r.data=Object.assign({},s,{target:e.target}),k(r))}}})),fe((0,o.Z)(t),"elemRef",(function(e){t.elem=e})),t}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.renderTag,n=e.attributes,o=e.children,i=Object.assign({},n,{className:u()(f,n.className),onContextMenu:this.handleContextMenu,onClick:this.handleMouseClick,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchstart,onTouchEnd:this.handleTouchEnd,onMouseOut:this.handleMouseOut,ref:this.elemRef});return s.createElement(t,i,o)},t}(s.Component);be.propTypes={id:a().string.isRequired,children:a().node.isRequired,attributes:a().object,collect:a().func,disable:a().bool,holdToDisplay:a().number,posX:a().number,posY:a().number,renderTag:a().elementType,mouseButton:a().number,disableIfShiftIsPressed:a().bool},be.defaultProps={attributes:{},collect:function(){return null},disable:!1,holdToDisplay:1e3,renderTag:"div",posX:0,posY:0,mouseButton:2,disableIfShiftIsPressed:!1};var ve=be;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable},730704:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var o=n(497326),i=n(894578),s=n(202784),r=n(213980),a=n.n(r),l=n(167185),u=n.n(l),c=n(227843),d=n(585208),p=n(977369),h=n(708717),f=(0,h.Z)((function(){return Promise.all([n.e(532),n.e(8740)]).then(n.bind(n,995705))})),m=n(481066),b=n(267682),v=n(382617),y=n(10206),g=n(376699),w=n(461298),M=n(31071),C=(0,h.Z)((function(){return n.e(4580).then(n.bind(n,864387))})),O=function(){var e=(0,g.$)("internal/lesson").t,t=(0,s.useState)(!1),n=t[0],o=t[1],i=(0,s.useCallback)((function(){o(!1)}),[]),r=(0,s.useCallback)((function(){o(!n)}),[n]);return s.createElement(s.Fragment,null,n?s.createElement(C,{run:n,onFinish:i}):null,s.createElement(w.Z,{placement:"left",overlay:s.createElement(M.Z,{id:"interface-tour-button"},e("start-interface-tour"))},s.createElement("button",{onClick:r,onMouseOver:C.preload,onFocus:C.preload,className:"interface-tour-button","aria-label":e(n?"end-interface-tour":"start-interface-tour")},s.createElement("i",{className:"fas fa-info-circle"}))))},E=n(198),S=n(690299),k=n.n(S),x=n(308669),N=n.n(x),T=Object.defineProperty,Z=function(e,t,n){return function(e,t,n){t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},I=k()("isle:lesson:contextmenu"),H=function(e){function t(t){var n;return n=e.call(this,t)||this,Z((0,o.Z)(n),"handleSelectionChange",(function(e){if(!n.state.contextMenuIsOpen){var t=window.getSelection();if(t.isCollapsed&&"Range"!==t.type)setTimeout((function(){n.forceUpdate()}),150);else if(n.lastSelection=t,t.getRangeAt&&t.rangeCount){var o=t.getRangeAt(0),i=t.toString();n.setState({lastRange:o,lastText:i})}}})),Z((0,o.Z)(n),"highlightText",(function(e){I("Highlight the selected text..."),document.designMode="on";var t=window.getSelection();t.removeAllRanges(),t.addRange(n.state.lastRange),document.execCommand("styleWithCSS",!1,!0),document.execCommand("backColor",!1,"yellow"),document.designMode="off"})),Z((0,o.Z)(n),"removeHighlight",(function(e){I("Highlight the selected text...");var t=window.getSelection();t.removeAllRanges(),t.addRange(n.state.lastRange),document.designMode="on",document.execCommand("styleWithCSS",!1,!0),document.execCommand("backColor",!1,"inherit"),document.designMode="off"})),Z((0,o.Z)(n),"copyToClipboard",(function(e){I("Copying selection to clipboard... "),navigator.clipboard.writeText(n.state.lastText)})),Z((0,o.Z)(n),"textToSpeech",(function(){var e=n.state.lastText;I("Read aloud: "+e);var t=n.props.session;if(N()(window.speechSynthesis.getVoices()))return t.addNotification({title:n.props.t("voice-not-supported"),message:n.props.t("voice-not-supported-message"),level:"error",position:"tr"});var o=new SpeechSynthesisUtterance(e);o.lang=t.config.language||"en-US",window.speechSynthesis.speak(o)})),Z((0,o.Z)(n),"handleShow",(function(){I("Context menu has been opened..."),n.setState({contextMenuIsOpen:!0})})),Z((0,o.Z)(n),"handleHide",(function(){I("Context menu has been closed..."),n.setState({contextMenuIsOpen:!1})})),Z((0,o.Z)(n),"handleStudentNoteAddition",(function(e){var t=e.pageX/window.innerWidth,o=e.pageY/window.innerHeight;n.props.addNote({left:t,top:o,visibility:"public"})})),Z((0,o.Z)(n),"handlePersonalNoteAddition",(function(e){var t=e.pageX/window.innerWidth,o=e.pageY/window.innerHeight;n.props.addNote({left:t,top:o,visibility:"private"})})),Z((0,o.Z)(n),"handleInstructorNoteAddition",(function(e){var t=e.pageX/window.innerWidth,o=e.pageY/window.innerHeight;n.props.addNote({left:t,top:o,visibility:"instructor"})})),n.state={lastRange:null,lastText:"",contextMenuIsOpen:!1},n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("selectionchange",this.handleSelectionChange)},n.componentWillUnmount=function(){document.removeEventListener("selectionchange",this.handleSelectionChange)},n.render=function(){var e=[],t=window.getSelection();if((!t.isCollapsed||"Range"===t.type)&&(e.push(s.createElement(p.sN,{key:1,onClick:this.copyToClipboard},this.props.t("copy"))),e.push(s.createElement(p.sN,{key:2,onClick:this.textToSpeech},this.props.t("read-aloud"))),e.push(s.createElement(p.sN,{key:3,onClick:this.highlightText},this.props.t("highlight"))),t&&t.focusNode)){var n=t.focusNode.parentElement;n&&n.style&&"yellow"===n.style.backgroundColor&&e.push(s.createElement(p.sN,{key:4,onClick:this.removeHighlight},this.props.t("remove-highlight")))}return e.push(s.createElement(p.sN,{key:6,onClick:this.handlePersonalNoteAddition},this.props.t("add-personal-note"))),this.props.session.isOwner()&&(e.push(s.createElement(p.sN,{key:7,onClick:this.handleInstructorNoteAddition},this.props.t("add-instructor-note"))),e.push(s.createElement(p.sN,{key:8,onClick:this.handleStudentNoteAddition},this.props.t("add-student-note")))),s.createElement(p.xV,{id:"lessonWindow",onShow:this.handleShow,onHide:this.handleHide,disableIfShiftIsPressed:!0},e)},t}(s.Component);H.propTypes={addNote:a().func.isRequired,session:a().object.isRequired};var L=(0,E.Z)("internal/lesson")(H),P=(0,E.Z)("internal/lesson")((function(e){return s.createElement("div",{className:"forbidden-wrapper"},s.createElement("h3",{className:"forbidden-header"},e.t("not-available-yet")))})),R=n(867855),D=n(717709),j=n(797209),A=Object.defineProperty,W=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,q=function(e,t,n){return t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},K=function(e,t){for(var n in t||(t={}))U.call(t,n)&&q(e,n,t[n]);if(W)for(var o,i=(0,R.Z)(W(t));!(o=i()).done;){n=o.value;V.call(t,n)&&q(e,n,t[n])}return e},B={private:"green",public:"orange",instructor:"pink"},z=function(){var e=(0,s.useContext)(b.Z),t=(0,j.Z)();return(0,s.useEffect)((function(){var n;return e&&(n=e.subscribe((function(e,n){e!==y.WQ&&e!==v.x$||t()}))),function(){n&&n()}}),[t,e]),e.presentationMode?null:e.stickyNotes.map((function(t,n){return t.size||(t.size={}),s.createElement(D.Z,{color:B[t.visibility],watermark:t.visibility,editable:!0,minimizable:!0,removable:!0,key:t._id,draggable:{default:K({x:t.left*window.innerWidth,y:t.top*window.innerHeight},t.size)},title:t.title,body:t.body,onDelete:function(){e.deleteStickyNote(t._id)},onMove:function(n){var o=n.top,i=n.left;e.updateStickyNote({noteID:t._id,top:o,left:i})},onResize:function(n){e.updateStickyNote({noteID:t._id,size:n})},onTitleChange:function(n){e.updateStickyNote({noteID:t._id,title:n})},onBodyChange:function(n){e.updateStickyNote({noteID:t._id,body:n})}})}))},X=Object.defineProperty,Y=function(e,t,n){return function(e,t,n){t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},_={Containers:{tc:{margin:"30px auto 0px auto"}},NotificationItem:{info:{border:"solid 8px #007bff",borderRadius:6,padding:20},success:{boxShadow:"1px 1px 3px 1px darkslategrey"}},Title:{success:{color:"#3c763d"}}};function F(e){try{t=e,document.createDocumentFragment().querySelector(t)}catch(n){return!1}var t;return!0}function Q(){var e=window.location.hash;if(F(e)){var t=document.querySelector(e);t&&t.scrollIntoView()}}var $=function(e){function t(t,n){var i;return i=e.call(this,t)||this,Y((0,o.Z)(i),"addNote",(function(e){var t=e.left,n=e.top,o=e.visibility,s=e.noteID;(i.context.saveStickyNote({left:t,top:n,visibility:o}),s)||(s=(0,m.Z)(3),i.context.log({id:"lesson",type:v.RY,value:{top:n,left:t,noteID:s}}))})),i.state={visible:!n.lessonID||(n.isActive()||n.isOwner())},i}(0,i.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this,t=this.context;t.onLessonMount(),this.unsubscribe=t.subscribe((function(n,o){n!==y.KI&&n!==y.YQ||e.setState({visible:t.isActive()||t.isOwner()})})),Q(),window.addEventListener("hashchange",Q)},r.componentWillUnmount=function(){this.unsubscribe(),window.removeEventListener("hashchange",Q)},r.render=function(){return this.state.visible?s.createElement(c.a,{i18n:d.a},s.createElement(p.W4,{attributes:{className:"contextmenu-fullscreen"},holdToDisplay:-1,disableIfShiftIsPressed:!0,id:"lessonWindow"},s.createElement("div",{id:"Lesson",className:this.props.className,style:this.props.style},this.props.children,s.createElement(z,null),s.createElement(O,null),s.createElement(f,null))),s.createElement(L,{addNote:this.addNote,session:this.context}),s.createElement(u(),{ref:function(e){n.g.notificationSystemISLE=e},allowHTML:!0,style:_})):s.createElement(c.a,{i18n:d.a},s.createElement(P,null))},t}(s.Component);$.propTypes={className:a().string,style:a().object},$.defaultProps={className:"",style:{}},$.contextType=b.Z;var G=$},797209:function(e,t,n){var o=n(202784);t.Z=function(){var e=(0,o.useState)(0)[1];return(0,o.useCallback)((function(){e((function(e){return e+1}))}),[])}}}]);