(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{3721:function(t,e,n){"use strict";n.r(e);n(421),n(438),n(436),n(525),n(540),n(441);var r=n(404),o=n.n(r),a=n(915),i=n.n(a),c=n(412),s=n.n(c),p=n(416),l=n.n(p),u=n(425),d=n.n(u),h=n(418),f=n.n(h),y=n(419),b=n.n(y),g=n(417),v=n.n(g),m=n(410),O=n.n(m),C=(n(511),n(501),n(0)),j=n.n(C),w=(n(402),n(451)),k=n.n(w),P=n(4088),S=n(431),x=n(473),D=n(606),I=n.n(D),_=n(428),A=n.n(_),E=n(612),N=n(604),R=n(515),U=n(531),B=n(647),J=n(886),V=n(465),W=n(471),F=n(423),G=n(445);n(311);function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){O()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b()(this,n)}}Object(F.a)("Dashboard");var q=k()("isle:dashboard"),z=Object(E.a)("dashboard"),K=o()("span",{}),L=function(t){f()(n,t);var e=M(n);function n(t){var r;s()(this,n),r=e.call(this,t),O()(d()(r),"handleClick",(function(){for(var t,e=new Array(r.nArgs),n=0;n<r.nArgs;n++)e[n]=r.state[n];r.props.autoUpdate||r.context.log({id:r.id,type:W.b,value:e});(t=r.props).onGenerate.apply(t,e)})),O()(d()(r),"getCounter",(function(){return void 0===r._counter?r._counter=0:r._counter+=1,r._counter})),O()(d()(r),"handleFieldChange",(function(t,e){q("Setting ".concat(t," to ").concat(e));var n={};n[t]=e,r.setState(n,(function(){r.props.autoUpdate&&r.handleClick()}))})),O()(d()(r),"registerChildren",(function(t,e){return t?(q("Registering ".concat(j.a.Children.count(t)," children...")),j.a.Children.map(t,(function(t){if(j.a.isValidElement(t)){var e={},n=[];if(t.type===N.a||t.type===R.b||t.type===U.a||t.type===B.a||t.type===J.a||"CheckboxInput"===t.type.name||"NumberInput"===t.type.name||"SelectInput"===t.type.name||"SliderInput"===t.type.name||"TextInput"===t.type.name||"Input"===t.type.name){q("Encountering an input element...");var o=r.getCounter();e.onChange=function(e){r.handleFieldChange(o,e),t.props.onChange(e)}}return t.props&&t.props.children&&(n=r.registerChildren(t.props.children)),q("Clone child element with new properties..."),j.a.cloneElement.apply(j.a,[t,e].concat(i()(n)))}return t}))):null}));var o={};r.nArgs=0;return function t(e){e&&j.a.Children.forEach(e,(function(e){I()(e)||(A()(e.props,"defaultValue")&&(o[r.nArgs]=e.props.defaultValue,r.nArgs+=1),A()(e.props,"children")&&t(e.props.children))}))}(t.children),q("Initial state: %s",JSON.stringify(o)),r.id=t.id||z(t),r.state=o,r}return l()(n,[{key:"componentDidMount",value:function(){this.props.autoStart&&this.handleClick()}},{key:"render",value:function(){return this._counter=void 0,this._children=this.registerChildren(this.props.children),o()(x.a,{className:"dashboard ".concat(this.props.className),style:H({maxWidth:this.props.maxWidth},this.props.style)},void 0,this.props.title?o()(x.a.Header,{as:"h4"},void 0,this.props.title):null,o()(x.a.Body,{},void 0,o()("p",{},void 0,this.props.description),this._children,this.props.autoUpdate?K:o()(S.a,{variant:"primary",className:"dashboard-button",disabled:this.props.disabled,onClick:this.handleClick,block:!0},void 0,this.props.label||this.props.t("generate"))))}}]),n}(C.Component);L.defaultProps={autoStart:!0,autoUpdate:!1,description:"",disabled:!1,label:null,maxWidth:600,className:"",style:{},onGenerate:function(){},title:""},L.contextType=V.a,e.default=Object(P.a)("Dashboard")(Object(G.a)(L))}}]);