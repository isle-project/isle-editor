/*! For license information please see LearnPoissonDistribution.ec211393.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1127:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t>=0}},2639:function(t,e,a){"use strict";var n=a(3747);t.exports=n},2746:function(t,e,a){"use strict";var n=a(422),r=a(4889);n(r,"factory",a(4890)),t.exports=r},3734:function(t,e,a){"use strict";var n=a(422),r=a(3735);n(r,"factory",a(3736)),t.exports=r},3735:function(t,e,a){"use strict";var n=a(415);t.exports=function(t,e){return n(t)||n(e)?NaN:t===e?1:0}},3736:function(t,e,a){"use strict";var n=a(470),r=a(415);t.exports=function(t){return r(t)?n(NaN):function(e){if(r(e))return NaN;return e===t?1:0}}},3747:function(t,e,a){"use strict";var n=a(3748),r=a(672);t.exports=function(t){return n(t)?NaN:r(t+1)}},3748:function(t,e,a){"use strict";var n=a(3749);t.exports=n},3749:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t<0}},4132:function(t,e,a){"use strict";var n,r=a(2746);n={left:function(t,e,a){for(;;){if(0===t||r(t-1,a)<e)return t;t-=1}},right:function(t,e,a){for(;;)if(r(t+=1,a)>=e)return t}},t.exports=n},453:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.a=r},472:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);e.a=r},479:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",e.a=r},4886:function(t,e,a){"use strict";var n=a(422),r=a(4887);n(r,"factory",a(4888)),t.exports=r},4887:function(t,e,a){"use strict";var n=a(748),r=a(2639),i=a(415),o=a(449),c=a(451),s=a(427);t.exports=function(t,e){var a;return i(t)||i(e)||e<0?NaN:0===e?0===t?1:0:n(t)&&t!==s?(a=t*c(e)-e-r(t),o(a)):0}},4888:function(t,e,a){"use strict";var n=a(748),r=a(470),i=a(2639),o=a(3734).factory,c=a(415),s=a(449),u=a(451),l=a(427);t.exports=function(t){return c(t)||t<0?r(NaN):0===t?o(0):function(e){var a;if(c(e))return NaN;if(n(e)&&e!==l)return a=e*u(t)-t-i(e),s(a);return 0}}},4889:function(t,e,a){"use strict";var n=a(789),r=a(415),i=a(452),o=a(427);t.exports=function(t,e){return r(t)||r(e)||e<0?NaN:t<0?0:0===e||t===o?1:n(e,i(t)+1,!0,!0)}},4890:function(t,e,a){"use strict";var n=a(470),r=a(1116).factory,i=a(789),o=a(415),c=a(452),s=a(427);t.exports=function(t){return o(t)||t<0?n(NaN):0===t?r(0):function(e){if(o(e))return NaN;if(e<0)return 0;if(e===s)return 1;return i(t,c(e)+1,!0,!0)}}},4891:function(t,e,a){"use strict";var n=a(422),r=a(4892);n(r,"factory",a(4893)),t.exports=r},4892:function(t,e,a){"use strict";var n=a(689),r=a(415),i=a(548),o=a(435),c=a(2746),s=a(811),u=a(427),l=a(4132);t.exports=function(t,e){var a,d,f,v;return r(e)||e<0||r(t)||t<0||t>1?NaN:0===e||0===t?0:1===t?u:(a=1/(f=o(e)),v=t<.5?-n(2*t)*s:n(2*(1-t))*s,d=i(e+f*(v+a*(v*v-1)/6)),c(d,e)>=t?l.left(d,t,e):l.right(d,t,e))}},4893:function(t,e,a){"use strict";var n=a(470),r=a(1397).factory,i=a(689),o=a(415),c=a(548),s=a(435),u=a(2746),l=a(811),d=a(427),f=a(4132);t.exports=function(t){var e,a;return o(t)||t<0?n(NaN):0===t?r(0):(a=s(t),e=1/a,function(n){var r,s;if(o(n)||n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return d;s=n<.5?-i(2*n)*l:i(2*(1-n))*l;return r=c(t+a*(s+e*(s*s-1)/6)),u(r,t)>=n?f.left(r,n,t):f.right(r,n,t)})}},496:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return n(t.querySelectorAll(e))}},511:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(463),l=a(538),d=a(411),f={disabled:!1,as:u.a},v=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.disabled,c=t.className,u=t.href,f=t.eventKey,v=t.onSelect,m=t.as,b=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),s.a.createElement(l.a,Object(n.a)({},b,{href:u,ref:e,eventKey:f,as:m,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,e.a=v},513:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,c=t.children,l=t.as,d=void 0===l?"div":l,f=Object(r.a)(t,["bsPrefix","className","children","as"]);return a=Object(u.a)(a,"nav-item"),s.a.createElement(d,Object(n.a)({},f,{ref:e,className:o()(i,a)}),c)}));l.displayName="NavItem",e.a=l},519:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(475),o=a(472),c=a(453);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),a=e.id,s=e.generateChildId,u=e.onSelect,l=e.activeKey,d=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,m=e.children,b=Object(n.useMemo)((function(){return s||function(t,e){return a?a+"-"+e+"-"+t:null}}),[a,s]),p=Object(n.useMemo)((function(){return{onSelect:u,activeKey:l,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(t){return b(t,"tabpane")},getControllerId:function(t){return b(t,"tab")}}}),[u,l,d,f,v,b]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(c.a.Provider,{value:u||null},m))}},520:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.as,c=void 0===i?"div":i,l=t.className,d=Object(r.a)(t,["bsPrefix","as","className"]),f=Object(u.a)(a,"tab-content");return s.a.createElement(c,Object(n.a)({ref:e},d,{className:o()(l,f)}))}));e.a=l},521:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=a(472),d=a(453),f=a(621);var v=s.a.forwardRef((function(t,e){var a=function(t){var e=Object(c.useContext)(l.a);if(!e)return t;var a=e.activeKey,i=e.getControlledId,o=e.getControllerId,s=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),u=!1!==t.transition&&!1!==s.transition,v=Object(d.b)(t.eventKey);return Object(n.a)({},t,{active:null==t.active&&null!=v?Object(d.b)(a)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:u&&(t.transition||s.transition||f.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:s.unmountOnExit})}(t),i=a.bsPrefix,v=a.className,m=a.active,b=a.onEnter,p=a.onEntering,x=a.onEntered,y=a.onExit,h=a.onExiting,O=a.onExited,g=a.mountOnEnter,E=a.unmountOnExit,j=a.transition,N=a.as,C=void 0===N?"div":N,w=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),P=Object(u.a)(i,"tab-pane");if(!m&&!j&&E)return null;var K=s.a.createElement(C,Object(n.a)({},w,{ref:e,role:"tabpanel","aria-hidden":!m,className:o()(v,P,{active:m})}));return j&&(K=s.a.createElement(j,{in:m,onEnter:b,onEntering:p,onEntered:x,onExit:y,onExiting:h,onExited:O,mountOnEnter:g,unmountOnExit:E},K)),s.a.createElement(l.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",e.a=v},523:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(t){return!t}),!1)[1]}},538:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(522),l=(a(534),a(479)),d=a(453),f=s.a.forwardRef((function(t,e){var a=t.active,i=t.className,f=t.eventKey,v=t.onSelect,m=t.onClick,b=t.as,p=Object(r.a)(t,["active","className","eventKey","onSelect","onClick","as"]),x=Object(d.b)(f,p.href),y=Object(c.useContext)(d.a),h=Object(c.useContext)(l.a),O=a;if(h){p.role||"tablist"!==h.role||(p.role="tab");var g=h.getControllerId(x),E=h.getControlledId(x);p["data-rb-event-key"]=x,p.id=g||p.id,p["aria-controls"]=E||p["aria-controls"],O=null==a&&null!=x?h.activeKey===x:a}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=O);var j=Object(u.a)((function(t){m&&m(t),null!=x&&(v&&v(x,t),y&&y(x,t))}));return s.a.createElement(b,Object(n.a)({},p,{ref:e,onClick:j,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},e.a=f},539:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(496),o=a(0),c=a.n(o),s=a(523),u=a(557),l=a(479),d=a(453),f=a(472),v=function(){},m=c.a.forwardRef((function(t,e){var a,m,b=t.as,p=void 0===b?"ul":b,x=t.onSelect,y=t.activeKey,h=t.role,O=t.onKeyDown,g=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(s.a)(),j=Object(o.useRef)(!1),N=Object(o.useContext)(d.a),C=Object(o.useContext)(f.a);C&&(h=h||"tablist",y=C.activeKey,a=C.getControlledId,m=C.getControllerId);var w=Object(o.useRef)(null),P=function(t){var e=w.current;if(!e)return null;var a=Object(i.a)(e,"[data-rb-event-key]:not(.disabled)"),n=e.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+t;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(t,e){null!=t&&(x&&x(t,e),N&&N(t,e))};Object(o.useEffect)((function(){if(w.current&&j.current){var t=w.current.querySelector("[data-rb-event-key].active");t&&t.focus()}j.current=!1}));var k=Object(u.a)(e,w);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(l.a.Provider,{value:{role:h,activeKey:Object(d.b)(y),getControlledId:a||v,getControllerId:m||v}},c.a.createElement(p,Object(n.a)({},g,{onKeyDown:function(t){var e;switch(O&&O(t),t.key){case"ArrowLeft":case"ArrowUp":e=P(-1);break;case"ArrowRight":case"ArrowDown":e=P(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),j.current=!0,E())},ref:k,role:h}))))}));e.a=m},540:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",e.a=r},561:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=(a(597),a(0)),s=a.n(c),u=a(475),l=a(411),d=a(540),f=a(657),v=a(539),m=a(513),b=a(511),p=s.a.forwardRef((function(t,e){var a,i,m,b=Object(u.a)(t,{activeKey:"onSelect"}),p=b.as,x=void 0===p?"div":p,y=b.bsPrefix,h=b.variant,O=b.fill,g=b.justify,E=b.navbar,j=b.className,N=b.children,C=b.activeKey,w=Object(r.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),P=Object(l.a)(y,"nav"),K=!1,k=Object(c.useContext)(d.a),S=Object(c.useContext)(f.a);return k?(i=k.bsPrefix,K=null==E||E):S&&(m=S.cardHeaderBsPrefix),s.a.createElement(v.a,Object(n.a)({as:x,ref:e,activeKey:C,className:o()(j,(a={},a[P]=!K,a[i+"-nav"]=K,a[m+"-"+h]=!!m,a[P+"-"+h]=!!h,a[P+"-fill"]=O,a[P+"-justified"]=g,a))},w),N)}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},p.Item=m.a,p.Link=b.a,e.a=p},562:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(t,e){var a=0;return r.a.Children.map(t,(function(t){return r.a.isValidElement(t)?e(t,a++):t}))}function o(t,e){var a=0;r.a.Children.forEach(t,(function(t){r.a.isValidElement(t)&&e(t,a++)}))}},568:function(t,e,a){"use strict";var n=a(536),r=a(0),i=a.n(r),o=a(519),c=a(520),s=a(521),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);u.Container=o.a,u.Content=c.a,u.Pane=s.a,e.a=u},587:function(t,e,a){"use strict";var n=a(406),r=a(408),i=a(0),o=a.n(i),c=(a(576),a(475)),s=a(561),u=a(511),l=a(513),d=a(519),f=a(520),v=a(521),m=a(562);function b(t){var e=t.props,a=e.title,n=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==a?null:o.a.createElement(l.a,{as:u.a,eventKey:n,disabled:r,id:c,className:i},a)}var p=function(t){var e=Object(c.a)(t,{activeKey:"onSelect"}),a=e.id,i=e.onSelect,u=e.transition,l=e.mountOnEnter,p=e.unmountOnExit,x=e.children,y=e.activeKey,h=void 0===y?function(t){var e;return Object(m.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(x):y,O=Object(r.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:u,mountOnEnter:l,unmountOnExit:p},o.a.createElement(s.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(m.b)(x,b)),o.a.createElement(f.a,null,Object(m.b)(x,(function(t){var e=Object(n.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(v.a,e)}))))};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",e.a=p},6382:function(t,e,a){"use strict";a.r(e);a(421),a(437),a(433),a(430),a(438),a(439);var n,r,i,o,c,s,u,l,d,f,v,m,b,p,x=a(407),y=a.n(x),h=a(414),O=a.n(h),g=a(416),E=a.n(g),j=a(424),N=a.n(j),C=a(418),w=a.n(C),P=a(419),K=a.n(P),k=a(417),S=a.n(k),F=a(412),I=a.n(F),R=a(0),L=(a(404),a(4095)),A=a(454),D=a(464),X=a(587),M=a(568),T=a(507),V=a(477),W=a(490),B=a(6445),_=a(4603),q=a(6464),U=a(6328),H=a(6454),J=a(474),z=a.n(J),G=a(661),Q=a.n(G),Y=a(4886),Z=a.n(Y),$=a(2746),tt=a.n($),et=a(4891),at=a.n(et),nt=a(581),rt=a(487),it=a(518),ot=a(492),ct=a(420);function st(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function ut(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?st(Object(a),!0).forEach((function(e){I()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=S()(t);if(e){var r=S()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return K()(this,a)}}Object(ct.a)("LearnDistribution");var dt=.999,ft=function(t){w()(a,t);var e=lt(a);function a(t){var n;O()(this,a),n=e.call(this,t),I()(N()(n),"handleRateChange",(function(t){for(var e=Q()(0,at()(dt,t)+1,1),a=new Array(e.length),r=0;r<e.length;r++)a[r]={x:e[r],y:Z()(e[r],t)};n.setState({data:a,rate:t})})),I()(N()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),I()(N()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=Q()(0,at()(dt,1),1),i=new Array(r.length),o=0;o<r.length;o++)i[o]={x:r[o],y:Z()(r[o],1)};return n.state={rate:1,x0:0,x1:1,data:i},n}return E()(a,[{key:"renderInputs",value:function(t){var e=this.props.t;return y()(R.Fragment,{},void 0,y()(nt.a,{legend:e("rate"),defaultValue:this.state.rate,min:1e-12,step:this.props.step,max:99,onChange:this.handleRateChange},"".concat(t,"-rate")),y()(nt.a,{legend:"x0",defaultValue:this.state.x0,min:0,max:at()(dt,this.state.rate),step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?y()(nt.a,{legend:"x1",defaultValue:this.state.x1,min:0,max:at()(dt,this.state.rate),step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this,e=this.state,a=e.x0,x=e.x1,h=e.rate,O=this.props.t;return y()(D.a,{style:ut({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,y()(D.a.Header,{as:"h3"},void 0,O("poisson-distribution")),y()(D.a.Body,{},void 0,y()(X.a,{defaultActiveKey:0,id:"poisson-tabs"},void 0,y()(M.a,{eventKey:0,title:n||(n=y()(ot.a,{raw:"P(X = x_0)"}))},void 0,y()(T.a,{},void 0,y()(V.a,{},void 0,y()(W.a,{md:5},void 0,y()(it.a,{title:O("poisson-probabilities")},void 0,y()("p",{},void 0,O("let")," ",r||(r=y()(ot.a,{raw:"X"}))," ",O("number-of-occurrences")),y()("span",{},void 0,O("rate-parameter")),y()(rt.b,{inline:!0,legend:i||(i=y()(ot.a,{raw:"\\lambda"})),defaultValue:1,step:.01,max:99,min:0,onChange:this.handleRateChange}),y()("span",{},void 0,O("we-get")),y()(ot.a,{raw:"P(X=x)= \\Large \\frac{".concat(h,"^x e^{-").concat(h,"}}{x!}"),displayMode:!0}),y()("span",{},void 0,O("evaluated-at")),y()(rt.b,{inline:!0,legend:"x",defaultValue:1,step:1,max:at()(dt,h)+1,min:0,onChange:this.handleLowerChange})," ",y()("span",{},void 0,O("we-get")),y()(ot.a,{raw:"P(X=".concat(a,")= \\Large \\frac{").concat(h,"^").concat(a," e^{-").concat(h,"}}{").concat(a,"!} = ").concat(Z()(a,h).toFixed(4)),displayMode:!0}))),y()(W.a,{md:7},void 0,y()(it.a,{header:"Probability Plot"},void 0,y()(V.a,{},void 0,y()(W.a,{md:6},void 0,y()(B.a,{theme:_.a.material},void 0,o||(o=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(U.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===a?"tomato":"steelblue"}}}}))),y()(W.a,{md:6},void 0,y()(B.a,{theme:_.a.material},void 0,c||(c=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(H.a,{samples:600,y:function(t){return tt()(t.x,h)},domain:{x:[0,at()(dt,h)+1],y:[0,1.1]}}),y()(H.a,{data:[{x:a,y:0},{x:a,y:tt()(a,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(H.a,{data:[{x:0,y:tt()(a,h)},{x:a,y:tt()(a,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),y()(M.a,{eventKey:1,title:s||(s=y()(ot.a,{raw:"P(X \\le x_0)"}))},void 0,y()(T.a,{},void 0,y()(V.a,{},void 0,y()(W.a,{md:4},void 0,y()(it.a,{},void 0,this.renderInputs("smaller"),y()(ot.a,{raw:"P(X \\le ".concat(z()(a,-4),") = ").concat(z()(tt()(a,h),-4))}))),y()(W.a,{md:8},void 0,y()(T.a,{},void 0,y()(V.a,{},void 0,y()(W.a,{md:6},void 0,y()(B.a,{domain:{x:[0,at()(dt,this.state.rate)+2]},theme:_.a.material},void 0,u||(u=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(U.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<=t.state.x0?"tomato":"steelblue"}}}}))),y()(W.a,{md:6},void 0,y()(B.a,{theme:_.a.material},void 0,l||(l=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(H.a,{samples:600,y:function(e){return tt()(e.x,t.state.rate)},domain:{x:[0,at()(dt,this.state.rate)+1],y:[0,1.1]}}),y()(H.a,{data:[{x:a,y:0},{x:a,y:tt()(a,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(H.a,{data:[{x:0,y:tt()(a,this.state.rate)},{x:a,y:tt()(a,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),y()(M.a,{eventKey:2,title:d||(d=y()(ot.a,{raw:"P(X > x_0)"}))},void 0,y()(T.a,{},void 0,y()(V.a,{},void 0,y()(W.a,{md:4},void 0,y()(it.a,{},void 0,this.renderInputs("greater"),y()(ot.a,{raw:"P(X > ".concat(z()(a,-4),") = ").concat(z()(1-tt()(a,h),-4))}))),y()(W.a,{md:8},void 0,y()(V.a,{},void 0,y()(W.a,{md:6},void 0,y()(B.a,{domain:{x:[0,at()(dt,h)+2]},theme:_.a.material},void 0,f||(f=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(U.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>=t.state.x0?"tomato":"steelblue"}}}}))),y()(W.a,{md:6},void 0,y()(B.a,{theme:_.a.material},void 0,v||(v=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(H.a,{samples:600,y:function(t){return tt()(t.x,h)},domain:{x:[0,at()(dt,h)+1],y:[0,1.1]}}),y()(H.a,{data:[{x:a,y:0},{x:a,y:tt()(a,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(H.a,{data:[{x:0,y:tt()(a,h)},{x:a,y:tt()(a,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),y()(M.a,{eventKey:3,title:m||(m=y()(ot.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,y()(T.a,{},void 0,y()(V.a,{},void 0,y()(W.a,{md:4},void 0,y()(it.a,{},void 0,this.renderInputs("range"),x>=a?y()(ot.a,{raw:"P( ".concat(z()(a,-4)," \\le X \\le ").concat(z()(x,-4),") = ").concat(z()(tt()(x,h)-tt()(a-1,h),-4))}):y()(A.a,{variant:"warning"},void 0,O("lower-bound-smaller-equal-upper-bound")))),y()(W.a,{md:8},void 0,y()(V.a,{},void 0,y()(W.a,{md:6},void 0,y()(B.a,{domain:{x:[0,at()(dt,h)+2]},theme:_.a.material},void 0,b||(b=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(U.a,{data:this.state.data,style:{data:{fill:function(e){return t.state.x0<=e.datum.x&&e.datum.x<=t.state.x1?"tomato":"steelblue"}}}}))),y()(W.a,{md:6},void 0,y()(B.a,{theme:_.a.material},void 0,p||(p=y()(q.a,{dependentAxis:!0})),y()(q.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(H.a,{samples:600,y:function(t){return tt()(t.x,h)},domain:{x:[0,at()(dt,h)+1],y:[0,1.1]}})))))))))))}}]),a}(R.Component);ft.defaultProps={step:.1,style:{}},e.default=Object(L.a)("LearnDistribution")(ft)},748:function(t,e,a){"use strict";var n=a(1127);t.exports=n}}]);