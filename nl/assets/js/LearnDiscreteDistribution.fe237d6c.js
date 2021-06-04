/*! For license information please see LearnDiscreteDistribution.fe237d6c.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[2559],{809473:function(t,e,n){"use strict";n.r(e);n(382139);var a,r,i,o,s,l,u,c,d,Z,v,f,m=n(858255),x=n(264659),h=n(904730),p=n(673989),b=n(175663),y=n(750591),E=n(575630),P=n(151119),g=(n(319371),n(850110),n(202784)),C=(n(213980),n(198)),w=n(822736),k=n(312594),K=n(458264),N=n(320123),S=n(188429),O=n(471275),A=n(260952),F=n(409788),I=n(213763),R=n(472482),V=n(675573),T=n(690473),L=n(46565),D=n.n(L),M=n(857906),X=n.n(M),U=n(374039),W=n.n(U),B=n(741709),_=n(997354),j=n(462874),q=n(148820),G=n(945157);function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=(0,E.Z)(t);if(e){var r=(0,E.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,y.Z)(this,n)}}var z=function(t,e){for(var n=0,a=0;a<e.length;a++){var r=e[a];r.x<=t&&(n+=r.y)}return n},J=function(t,e,n){for(var a=0,r=0;r<n.length;r++){var i=n[r];t<=i.x&&i.x<=e&&(a+=i.y)}return a},Q=function(t){(0,b.Z)(n,t);var e=H(n);function n(t){var a;(0,x.Z)(this,n),a=e.call(this,t),(0,P.Z)((0,p.Z)(a),"pickNumDistinct",(function(t){for(var e=[],n=0;n<t;n++)e[n]={x:n,y:1/t};var r=X()(t/2),i=t-1,o=z(r,e),s=J(0,i,e);a.setState({data:e,valid:!0,lower:0,upper:i,x:r,lowerProb:o,rangeProb:s})})),(0,P.Z)((0,p.Z)(a),"handlePopover",(function(t){a.setState({disableTabs:t})}));for(var r=[],i=0;i<t.numValues;i++)r[i]={x:i,y:1/t.numValues};var o=X()(t.numValues/2);return a.state={data:r,valid:!0,lower:0,upper:t.numValues-1,x:o,rangeProb:1,lowerProb:z(o,r),disableTabs:!1},a}return(0,h.Z)(n,[{key:"renderGrid",value:function(){var t=this,e=this.props.t;return(0,m.Z)(O.Z,{fluid:!0},void 0,(0,m.Z)(K.Z,{},void 0,(0,m.Z)(k.Z,{md:5},void 0,(0,m.Z)("h3",{},void 0,e("value"),":"),this.state.data.map((function(e,n){return(0,m.Z)(B.Z,{defaultValue:t.state.data[n].x,step:"any",width:100,onChange:function(e){var a=t.state.data.slice();a[n]={x:e,y:t.state.data[n].y};var r=z(t.state.x,a),i=J(t.state.lower,t.state.upper,a);t.setState({data:a,lowerProb:r,rangeProb:i})}},"value-".concat(n))}))),(0,m.Z)(k.Z,{md:5},void 0,(0,m.Z)("h3",{},void 0,e("prob"),":"),this.state.data.map((function(e,n){return(0,m.Z)(B.Z,{defaultValue:1/t.state.data.length,step:"any",max:1,min:0,width:100,numbersOnly:!1,onChange:function(e){var a=t.state.data.slice(),r=0;a[n]={x:t.state.data[n].x,y:e};for(var i=0;i<a.length;i++)r+=a[i].y;var o=z(t.state.x,a),s=J(t.state.lower,t.state.upper,a);t.setState({data:a,valid:D()(r,1)<=15e-9,lowerProb:o,rangeProb:s})}},"prob-".concat(n))})))))}},{key:"renderTabs",value:function(){var t=this;if(!this.state.valid)return(0,m.Z)(w.Z,{variant:"danger"},void 0,this.props.t("must-add-to-one"),".");var e=W()(z,this.state.data),n=this.state.data.map((function(t){return t.x})),x={x:[(0,q.Z)(n),(0,G.Z)(n)+1],y:[0,1]};return(0,m.Z)(N.Z,{defaultActiveKey:1,id:"discrete-distribution-tabs"},void 0,(0,m.Z)(S.Z,{eventKey:1,title:a||(a=(0,m.Z)(_.Z,{raw:"P(X \\le x_0)"})),disabled:this.state.disableTabs},void 0,(0,m.Z)(j.Z,{header:this.props.t("probability-plot")},void 0,(0,m.Z)(_.Z,{raw:"P( X \\le x = ".concat(this.state.x,") = ").concat(this.state.lowerProb.toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var n=z(e,t.state.data);t.setState({lowerProb:n,x:e})},defaultValue:this.state.x,tooltip:this.props.t("click-to-change-value")}},displayMode:!0,onPopover:this.handlePopover}),(0,m.Z)(K.Z,{},void 0,(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,r||(r=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(V.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<=t.state.x?"tomato":"steelblue"}}}}))),(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,i||(i=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(T.Z,{samples:600,domain:x,y:function(t){return e(t.x)}}),(0,m.Z)(T.Z,{data:[{x:this.state.x,y:0},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),(0,m.Z)(T.Z,{data:[{x:0,y:e(this.state.x)},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),(0,m.Z)(S.Z,{eventKey:2,title:o||(o=(0,m.Z)(_.Z,{raw:"P(X < x_0)"})),disabled:this.state.disableTabs},void 0,(0,m.Z)(j.Z,{header:"Probability Plot"},void 0,(0,m.Z)(_.Z,{raw:"P( X < x = ".concat(this.state.x,") = ").concat(e(this.state.x-1).toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var n=z(e,t.state.data);t.setState({lowerProb:n,x:e})},defaultValue:this.state.x,tooltip:this.props.t("click-to-change-value")}},displayMode:!0,onPopover:this.handlePopover}),(0,m.Z)(K.Z,{},void 0,(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,s||(s=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(V.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<t.state.x?"tomato":"steelblue"}}}}))),(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,l||(l=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(T.Z,{samples:600,domain:x,y:function(t){return e(t.x)}}),(0,m.Z)(T.Z,{data:[{x:this.state.x,y:0},{x:this.state.x,y:e(this.state.x-1)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),(0,m.Z)(T.Z,{data:[{x:0,y:e(this.state.x-1)},{x:this.state.x,y:e(this.state.x-1)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),(0,m.Z)(S.Z,{eventKey:3,title:u||(u=(0,m.Z)(_.Z,{raw:"P(X > x_0)"})),disabled:this.state.disableTabs},void 0,(0,m.Z)(j.Z,{header:"Probability Plot"},void 0,(0,m.Z)(_.Z,{raw:"P( X > x = ".concat(this.state.x,") = ").concat((1-this.state.lowerProb).toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var n=z(e,t.state.data);t.setState({lowerProb:n,x:e})},defaultValue:this.state.x,tooltip:this.props.t("click-to-change-value")}},onPopover:this.handlePopover,displayMode:!0}),(0,m.Z)(K.Z,{},void 0,(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,c||(c=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(V.Z,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t.state.x?"tomato":"steelblue"}}}}))),(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,d||(d=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(T.Z,{samples:600,domain:x,y:function(t){return e(t.x)}}),(0,m.Z)(T.Z,{data:[{x:this.state.x,y:0},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),(0,m.Z)(T.Z,{data:[{x:0,y:e(this.state.x)},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),(0,m.Z)(S.Z,{eventKey:4,title:Z||(Z=(0,m.Z)(_.Z,{raw:"P( x_0 \\le X \\le x_1)"})),disabled:this.state.disableTabs},void 0,(0,m.Z)(j.Z,{header:"Probability Plot"},void 0,(0,m.Z)(_.Z,{raw:"P( L = ".concat(this.state.lower," \\le X \\le U = ").concat(this.state.upper,") = ").concat(this.state.rangeProb.toFixed(3)),elems:{L:{variable:"L",onChange:function(e){var n=J(e,t.state.upper,t.state.data);t.setState({rangeProb:n,lower:e})},defaultValue:this.state.lower,tooltip:"Click to change lower value"},U:{variable:"U",onChange:function(e){var n=J(t.state.lower,e,t.state.data);t.setState({rangeProb:n,upper:e})},defaultValue:this.state.upper,tooltip:"Click to change upper value"}},displayMode:!0,onPopover:this.handlePopover}),(0,m.Z)(K.Z,{},void 0,(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,v||(v=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(V.Z,{data:this.state.data,style:{data:{fill:function(e){return t.state.lower<=e.datum.x&&e.datum.x<=t.state.upper?"tomato":"steelblue"}}}}))),(0,m.Z)(k.Z,{md:6},void 0,(0,m.Z)(F.Z,{theme:I.Z.material},void 0,f||(f=(0,m.Z)(R.Z,{dependentAxis:!0})),(0,m.Z)(R.Z,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),(0,m.Z)(T.Z,{samples:600,domain:x,y:function(t){return e(t.x)}})))))))}},{key:"render",value:function(){return(0,m.Z)(A.Z,{style:{maxWidth:1200,margin:"10px auto"}},void 0,(0,m.Z)(A.Z.Header,{as:"h2"},void 0,this.props.t("discrete-distribution-probabilities")),(0,m.Z)(A.Z.Body,{},void 0,(0,m.Z)(O.Z,{},void 0,(0,m.Z)(K.Z,{},void 0,(0,m.Z)(k.Z,{md:4},void 0,(0,m.Z)(B.Z,{legend:this.props.t("number-distinct-values"),defaultValue:this.props.numValues,step:1,max:20,min:2,onChange:this.pickNumDistinct}),this.renderGrid()),(0,m.Z)(k.Z,{md:8},void 0,this.renderTabs())))))}}]),n}(g.Component);Q.defaultProps={numValues:4},e.default=(0,C.Z)("learn/distribution")(Q)},418919:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(202784);function r(){return(0,a.useReducer)((function(t){return!t}),!1)[1]}},374039:function(t,e,n){"use strict";var a=n(545018);t.exports=a},545018:function(t,e,n){"use strict";var a=n(521859);t.exports=function(t){var e,n,r;if(!a(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");for(n=arguments.length-1,e=new Array(n),r=1;r<arguments.length;r++)e[r-1]=arguments[r];return i;function i(){var a,r,i;for(a=arguments.length,r=new Array(n+a),i=0;i<r.length;i++)r[i]=i>=a?e[i-a]:arguments[i];return t.apply(null,r)}}},658092:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return a(t.querySelectorAll(e))}},172643:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(658092),o=n(202784),s=n(418919),l=n(225879),u=n(62207),c=n(942932),d=n(395269),Z=function(){},v=o.forwardRef((function(t,e){var n,v,f=t.as,m=void 0===f?"ul":f,x=t.onSelect,h=t.activeKey,p=t.role,b=t.onKeyDown,y=(0,r.Z)(t,["as","onSelect","activeKey","role","onKeyDown"]),E=(0,s.Z)(),P=(0,o.useRef)(!1),g=(0,o.useContext)(c.Z),C=(0,o.useContext)(d.Z);C&&(p=p||"tablist",h=C.activeKey,n=C.getControlledId,v=C.getControllerId);var w=(0,o.useRef)(null),k=function(t){var e=w.current;if(!e)return null;var n=(0,i.Z)(e,"[data-rb-event-key]:not(.disabled)"),a=e.querySelector(".active");if(!a)return null;var r=n.indexOf(a);if(-1===r)return null;var o=r+t;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},K=function(t,e){null!=t&&(x&&x(t,e),g&&g(t,e))};(0,o.useEffect)((function(){if(w.current&&P.current){var t=w.current.querySelector("[data-rb-event-key].active");t&&t.focus()}P.current=!1}));var N=(0,l.Z)(e,w);return o.createElement(c.Z.Provider,{value:K},o.createElement(u.Z.Provider,{value:{role:p,activeKey:(0,c.h)(h),getControlledId:n||Z,getControllerId:v||Z}},o.createElement(m,(0,a.Z)({},y,{onKeyDown:function(t){var e;switch(b&&b(t),t.key){case"ArrowLeft":case"ArrowUp":e=k(-1);break;case"ArrowRight":case"ArrowDown":e=k(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),P.current=!0,E())},ref:N,role:p}))))}));e.Z=v},492784:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(806252),u=(n(645982),n(62207)),c=n(942932),d=s.forwardRef((function(t,e){var n=t.active,i=t.className,d=t.eventKey,Z=t.onSelect,v=t.onClick,f=t.as,m=(0,r.Z)(t,["active","className","eventKey","onSelect","onClick","as"]),x=(0,c.h)(d,m.href),h=(0,s.useContext)(c.Z),p=(0,s.useContext)(u.Z),b=n;if(p){m.role||"tablist"!==p.role||(m.role="tab");var y=p.getControllerId(x),E=p.getControlledId(x);m["data-rb-event-key"]=x,m.id=y||m.id,m["aria-controls"]=E||m["aria-controls"],b=null==n&&null!=x?p.activeKey===x:n}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=b);var P=(0,l.Z)((function(t){v&&v(t),null!=x&&(Z&&Z(x,t),h&&h(x,t))}));return s.createElement(f,(0,a.Z)({},m,{ref:e,onClick:P,className:o()(i,b&&"active")}))}));d.defaultProps={disabled:!1},e.Z=d},21027:function(t,e,n){"use strict";n.d(e,{U:function(){return r},E:function(){return i}});var a=n(202784);function r(t,e){var n=0;return a.Children.map(t,(function(t){return a.isValidElement(t)?e(t,n++):t}))}function i(t,e){var n=0;a.Children.forEach(t,(function(t){a.isValidElement(t)&&e(t,n++)}))}},569862:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=(n(970688),n(202784)),l=n(229277),u=n(429658),c=n(915462),d=n(144876),Z=n(172643),v=n(477029),f=n(206198),m=s.forwardRef((function(t,e){var n,i,v,f=(0,l.Ch)(t,{activeKey:"onSelect"}),m=f.as,x=void 0===m?"div":m,h=f.bsPrefix,p=f.variant,b=f.fill,y=f.justify,E=f.navbar,P=f.navbarScroll,g=f.className,C=f.children,w=f.activeKey,k=(0,r.Z)(f,["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"]),K=(0,u.vE)(h,"nav"),N=!1,S=(0,s.useContext)(c.Z),O=(0,s.useContext)(d.Z);return S?(i=S.bsPrefix,N=null==E||E):O&&(v=O.cardHeaderBsPrefix),s.createElement(Z.Z,(0,a.Z)({as:x,ref:e,activeKey:w,className:o()(g,(n={},n[K]=!N,n[i+"-nav"]=N,n[i+"-nav-scroll"]=N&&P,n[v+"-"+p]=!!v,n[K+"-"+p]=!!p,n[K+"-fill"]=b,n[K+"-justified"]=y,n))},k),C)}));m.displayName="Nav",m.defaultProps={justify:!1,fill:!1},m.Item=v.Z,m.Link=f.Z,e.Z=m},62207:function(t,e,n){"use strict";var a=n(202784).createContext(null);a.displayName="NavContext",e.Z=a},477029:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(429658),u=s.forwardRef((function(t,e){var n=t.bsPrefix,i=t.className,u=t.children,c=t.as,d=void 0===c?"div":c,Z=(0,r.Z)(t,["bsPrefix","className","children","as"]);return n=(0,l.vE)(n,"nav-item"),s.createElement(d,(0,a.Z)({},Z,{ref:e,className:o()(i,n)}),u)}));u.displayName="NavItem",e.Z=u},206198:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(482695),u=n(492784),c=n(429658),d={disabled:!1,as:l.Z},Z=s.forwardRef((function(t,e){var n=t.bsPrefix,i=t.disabled,l=t.className,d=t.href,Z=t.eventKey,v=t.onSelect,f=t.as,m=(0,r.Z)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=(0,c.vE)(n,"nav-link"),s.createElement(u.Z,(0,a.Z)({},m,{href:d,ref:e,eventKey:Z,as:f,disabled:i,onSelect:v,className:o()(l,n,i&&"disabled")}))}));Z.displayName="NavLink",Z.defaultProps=d,e.Z=Z},915462:function(t,e,n){"use strict";var a=n(202784).createContext(null);a.displayName="NavbarContext",e.Z=a},942932:function(t,e,n){"use strict";n.d(e,{h:function(){return r}});var a=n(202784).createContext(null),r=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.Z=a},188429:function(t,e,n){"use strict";var a=n(535307),r=n(202784),i=n(485571),o=n(821729),s=n(557747),l=function(t){function e(){return t.apply(this,arguments)||this}return(0,a.Z)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(r.Component);l.Container=i.Z,l.Content=o.Z,l.Pane=s.Z,e.Z=l},485571:function(t,e,n){"use strict";var a=n(202784),r=n(229277),i=n(395269),o=n(942932);e.Z=function(t){var e=(0,r.Ch)(t,{activeKey:"onSelect"}),n=e.id,s=e.generateChildId,l=e.onSelect,u=e.activeKey,c=e.transition,d=e.mountOnEnter,Z=e.unmountOnExit,v=e.children,f=(0,a.useMemo)((function(){return s||function(t,e){return n?n+"-"+e+"-"+t:null}}),[n,s]),m=(0,a.useMemo)((function(){return{onSelect:l,activeKey:u,transition:c,mountOnEnter:d||!1,unmountOnExit:Z||!1,getControlledId:function(t){return f(t,"tabpane")},getControllerId:function(t){return f(t,"tab")}}}),[l,u,c,d,Z,f]);return a.createElement(i.Z.Provider,{value:m},a.createElement(o.Z.Provider,{value:l||null},v))}},821729:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(429658),u=s.forwardRef((function(t,e){var n=t.bsPrefix,i=t.as,u=void 0===i?"div":i,c=t.className,d=(0,r.Z)(t,["bsPrefix","as","className"]),Z=(0,l.vE)(n,"tab-content");return s.createElement(u,(0,a.Z)({ref:e},d,{className:o()(c,Z)}))}));e.Z=u},395269:function(t,e,n){"use strict";var a=n(202784).createContext(null);e.Z=a},557747:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(72779),o=n.n(i),s=n(202784),l=n(429658),u=n(395269),c=n(942932),d=n(558370);var Z=s.forwardRef((function(t,e){var n=function(t){var e=(0,s.useContext)(u.Z);if(!e)return t;var n=e.activeKey,i=e.getControlledId,o=e.getControllerId,l=(0,r.Z)(e,["activeKey","getControlledId","getControllerId"]),Z=!1!==t.transition&&!1!==l.transition,v=(0,c.h)(t.eventKey);return(0,a.Z)({},t,{active:null==t.active&&null!=v?(0,c.h)(n)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:Z&&(t.transition||l.transition||d.Z),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:l.unmountOnExit})}(t),i=n.bsPrefix,Z=n.className,v=n.active,f=n.onEnter,m=n.onEntering,x=n.onEntered,h=n.onExit,p=n.onExiting,b=n.onExited,y=n.mountOnEnter,E=n.unmountOnExit,P=n.transition,g=n.as,C=void 0===g?"div":g,w=(n.eventKey,(0,r.Z)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),k=(0,l.vE)(i,"tab-pane");if(!v&&!P&&E)return null;var K=s.createElement(C,(0,a.Z)({},w,{ref:e,role:"tabpanel","aria-hidden":!v,className:o()(Z,k,{active:v})}));return P&&(K=s.createElement(P,{in:v,onEnter:f,onEntering:m,onEntered:x,onExit:h,onExiting:p,onExited:b,mountOnEnter:y,unmountOnExit:E},K)),s.createElement(u.Z.Provider,{value:null},s.createElement(c.Z.Provider,{value:null},K))}));Z.displayName="TabPane",e.Z=Z},320123:function(t,e,n){"use strict";var a=n(607560),r=n(998283),i=n(202784),o=(n(840368),n(229277)),s=n(569862),l=n(206198),u=n(477029),c=n(485571),d=n(821729),Z=n(557747),v=n(21027);function f(t){var e=t.props,n=e.title,a=e.eventKey,r=e.disabled,o=e.tabClassName,s=e.id;return null==n?null:i.createElement(u.Z,{as:l.Z,eventKey:a,disabled:r,id:s,className:o},n)}var m=function(t){var e=(0,o.Ch)(t,{activeKey:"onSelect"}),n=e.id,l=e.onSelect,u=e.transition,m=e.mountOnEnter,x=e.unmountOnExit,h=e.children,p=e.activeKey,b=void 0===p?function(t){var e;return(0,v.E)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(h):p,y=(0,r.Z)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return i.createElement(c.Z,{id:n,activeKey:b,onSelect:l,transition:u,mountOnEnter:m,unmountOnExit:x},i.createElement(s.Z,(0,a.Z)({},y,{role:"tablist",as:"nav"}),(0,v.U)(h,f)),i.createElement(d.Z,null,(0,v.U)(h,(function(t){var e=(0,a.Z)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,i.createElement(Z.Z,e)}))))};m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs",e.Z=m}}]);