/*! For license information please see LearnDiceThrowing.8f6a7d96.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{2637:function(t,e,a){"use strict";var r=a(2638);t.exports=r},2638:function(t,e,a){"use strict";var r=a(550),n=a(476);t.exports=function(t,e,a){var i,s,o;if(!r(t))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+t+"`.");if(!n(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");for(i=t.length,o=0;o<i;o++)s=e.call(a,t[o],o,t),i!==t.length&&(i=t.length),o<i&&(t[o]=s);return t}},423:function(t,e,a){"use strict";var r=a(406),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=a(463),u=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.variant,o=t.size,u=t.active,f=t.className,v=t.block,h=t.type,p=t.as,b=Object(n.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(l.a)(a,"btn"),y=s()(f,m,u&&"active",i&&m+"-"+i,v&&m+"-block",o&&m+"-"+o);if(b.href)return c.a.createElement(d.a,Object(r.a)({},b,{as:p,ref:e,className:s()(y,b.disabled&&"disabled")}));e&&(b.ref=e),h?b.type=h:p||(b.type="button");var w=p||"button";return c.a.createElement(w,Object(r.a)({},b,{className:y}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=u},477:function(t,e,a){"use strict";var r=a(406),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,o=t.noGutters,u=t.as,f=void 0===u?"div":u,v=Object(n.a)(t,["bsPrefix","className","noGutters","as"]),h=Object(l.a)(a,"row"),p=h+"-cols",b=[];return d.forEach((function(t){var e,a=v[t];delete v[t];var r="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+p+r+"-"+e)})),c.a.createElement(f,Object(r.a)({ref:e},v,{className:s.a.apply(void 0,[i,h,o&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.a=u},507:function(t,e,a){"use strict";var r=a(406),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.fluid,o=t.as,d=void 0===o?"div":o,u=t.className,f=Object(n.a)(t,["bsPrefix","fluid","as","className"]),v=Object(l.a)(a,"container"),h="string"==typeof i?"-"+i:"-fluid";return c.a.createElement(d,Object(r.a)({ref:e},f,{className:s()(u,i?""+v+h:v)}))}));d.displayName="Container",d.defaultProps={fluid:!1},e.a=d},556:function(t,e,a){"use strict";var r=a(406),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.size,o=t.toggle,d=t.vertical,u=t.className,f=t.as,v=void 0===f?"div":f,h=Object(n.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),p=Object(l.a)(a,"btn-group"),b=p;return d&&(b=p+"-vertical"),c.a.createElement(v,Object(r.a)({},h,{ref:e,className:s()(u,b,i&&p+"-"+i,o&&p+"-toggle")}))}));d.displayName="ButtonGroup",d.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=d},6371:function(t,e,a){"use strict";a.r(e);a(421);var r,n=a(407),i=a.n(n),s=a(414),o=a.n(s),c=a(416),l=a.n(c),d=a(424),u=a.n(d),f=a(418),v=a.n(f),h=a(419),p=a.n(h),b=a(417),m=a.n(b),y=a(412),w=a.n(y),g=(a(465),a(428),a(0)),x=a(4095),N=a(423),P=a(556),j=a(490),O=a(477),k=a(507),T=a(464),R=a(2637),C=a.n(R),D=a(474),E=a.n(D),S=a(758),B=a.n(S),G=a(950),z=a.n(G),A=a(661),V=a.n(A),H=a(487),J=a(623),L=a(420);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=m()(t);if(e){var n=m()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return p()(this,a)}}Object(L.a)("LearnDiceThrowing");var F=function(t){v()(a,t);var e=q(a);function a(t){var r;return o()(this,a),r=e.call(this,t),w()(u()(r),"chooseNSides",(function(t){var e=new Array(t),a=new Array(t);C()(a,(function(e){return 1/t})),C()(e,(function(t){return 0})),r.setState({sides:new Array(t),sideProbs:a,tally:e,valid:!0,draw:null,nThrows:0})})),w()(u()(r),"throwDice",(function(t){for(var e=V()(1,r.state.sides.length+1,1),a=B()(e,{probs:r.state.sideProbs,size:t}),n=r.state.tally.slice(),i=0;i<a.length;i++)n[a[i]-1]+=1;r.setState({draw:a,tally:n,nThrows:r.state.nThrows+t})})),r.state={sides:new Array(6),tally:[0,0,0,0,0,0],nThrows:0,sideProbs:[1/6,1/6,1/6,1/6,1/6,1/6],valid:!0},r}return l()(a,[{key:"renderGrid",value:function(){var t=this;return i()(k.a,{fluid:!0},void 0,i()(O.a,{},void 0,i()(j.a,{md:5},void 0,i()("h3",{},void 0,this.props.t("probabilities"),":"),C()(this.state.sides,(function(e,a){return i()(H.b,{legend:"Side ".concat(a+1),defaultValue:1/t.state.sides.length,step:"any",max:1,min:0,width:100,numbersOnly:!1,onChange:function(e){var r=t.state.sideProbs.slice();r[a]=e;for(var n=0,i=0;i<r.length;i++)n+=r[i];var s=new Array(r.length);C()(s,(function(t){return 0})),t.setState({sideProbs:r,valid:z()(n,1)<=15e-9,tally:s,draw:null})}},a)})),i()(N.a,{onClick:function(){t.setState({tally:t.state.tally.map((function(t){return 0})),nThrows:0})}},void 0,this.props.t("reset"))),i()(j.a,{md:6},void 0,this.renderDice()),r||(r=i()(j.a,{md:1},void 0,i()(J.a,{id:"loaded_dice",vertical:!0})))))}},{key:"renderDice",value:function(){var t=this;return this.state.valid?i()(T.a,{fluid:!0},void 0,i()(T.a.Header,{},void 0,this.props.t("dice")),i()(T.a.Body,{},void 0,i()(T.a,{body:!0},void 0,this.state.draw?this.state.draw.join(" - "):"X"),i()(P.a,{},void 0,i()(N.a,{onClick:function(){t.throwDice(1)}},void 0,this.props.t("throw")," \u2685 1x"),i()(N.a,{onClick:function(){t.throwDice(5)}},void 0,this.props.t("throw")," \u2685 5x"),i()(N.a,{onClick:function(){t.throwDice(10)}},void 0,this.props.t("throw")," \u2685 10x")))):i()(T.a,{body:!0},void 0,i()("h3",{},void 0,this.props.t("invalid-probs")))}},{key:"renderTable",value:function(){var t=this;return i()("table",{className:"table table-bordered table-responsive-sm"},void 0,i()("tbody",{},void 0,i()("tr",{},void 0,i()("th",{},void 0,this.props.t("side"),":"),this.state.tally.map((function(t,e){return i()("td",{},e,e+1)}))),i()("tr",{},void 0,i()("th",{},void 0,this.props.t("count"),":"),this.state.tally.map((function(t,e){return i()("td",{},e,t)}))),i()("tr",{},void 0,i()("th",{},void 0,this.props.t("relative-frequency"),":"),this.state.tally.map((function(e,a){return i()("td",{},a,E()(e/t.state.tally.reduce((function(t,e){return t+e})),-3)||"0.000")})))))}},{key:"render",value:function(){return i()(T.a,{id:"diceThrowingModule",style:{maxWidth:1200,margin:"0 auto"}},void 0,i()(T.a.Header,{as:"h4"},void 0,this.props.t("simulate-random-dice-throws")),i()(T.a.Body,{},void 0,i()(H.b,{legend:this.props.t("number-of-sides"),defaultValue:6,step:1,max:20,min:2,onChange:this.chooseNSides}),i()("p",{},void 0,this.props.t("choose-custom-probs")),this.renderGrid(),this.renderTable(),i()("p",{},void 0,this.props.t("total-number-of-throws"),": ",this.state.nThrows)))}}]),a}(g.Component);e.default=Object(x.a)("LearnDiceThrowing")(F)}}]);