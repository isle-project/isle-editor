/*! For license information please see LearnDiceThrowing.da57f934.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{2680:function(t,e,r){"use strict";var n=r(2681);t.exports=n},2681:function(t,e,r){"use strict";var n=r(593),i=r(494);t.exports=function(t,e,r){var a,o,s;if(!n(t))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+t+"`.");if(!i(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");for(a=t.length,s=0;s<a;s++)o=e.call(r,t[s],s,t),a!==t.length&&(a=t.length),s<a&&(t[s]=o);return t}},469:function(t,e,r){"use strict";var n=r(407),i=r(409),a=r(410),o=r.n(a),s=r(0),d=r.n(s),c=r(415),l=["xl","lg","md","sm","xs"],u=d.a.forwardRef((function(t,e){var r=t.bsPrefix,a=t.className,s=t.noGutters,u=t.as,f=void 0===u?"div":u,h=Object(i.a)(t,["bsPrefix","className","noGutters","as"]),v=Object(c.a)(r,"row"),p=v+"-cols",w=[];return l.forEach((function(t){var e,r=h[t];delete h[t];var n="xs"!==t?"-"+t:"";null!=(e=null!=r&&"object"==typeof r?r.cols:r)&&w.push(""+p+n+"-"+e)})),d.a.createElement(f,Object(n.a)({ref:e},h,{className:o.a.apply(void 0,[a,v,s&&"no-gutters"].concat(w))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.a=u},485:function(t,e,r){"use strict";var n=r(407),i=r(409),a=r(410),o=r.n(a),s=r(0),d=r.n(s),c=r(415),l=d.a.forwardRef((function(t,e){var r=t.bsPrefix,a=t.fluid,s=t.as,l=void 0===s?"div":s,u=t.className,f=Object(i.a)(t,["bsPrefix","fluid","as","className"]),h=Object(c.a)(r,"container"),v="string"==typeof a?"-"+a:"-fluid";return d.a.createElement(l,Object(n.a)({ref:e},f,{className:o()(u,a?""+h+v:h)}))}));l.displayName="Container",l.defaultProps={fluid:!1},e.a=l},6445:function(t,e,r){"use strict";r.r(e);r(428),r(417),r(423);var n=r(406),i=r.n(n),a=r(414),o=r.n(a),s=r(418),d=r.n(s),c=r(427),l=r.n(c),u=r(420),f=r.n(u),h=r(421),v=r.n(h),p=r(419),w=r.n(p),b=r(413),y=r.n(b),m=r(0),g=r(4097),x=r(433),T=r(699),P=r(511),N=r(469),j=r(485),k=r(475),D=r(2680),O=r.n(D),S=r(491),C=r.n(S),R=r(907),A=r.n(R),E=r(1119),G=r.n(E),V=r(755),B=r.n(V),H=r(517),J=r(688),L=r(425);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=w()(t);if(e){var i=w()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return v()(this,r)}}Object(L.a)("LearnDiceThrowing");var z=i()(P.a,{md:1},void 0,i()(J.a,{id:"loaded_dice",vertical:!0})),F=function(t){f()(r,t);var e=q(r);function r(t){var n;return o()(this,r),n=e.call(this,t),y()(l()(n),"chooseNSides",(function(t){var e=new Array(t),r=new Array(t);O()(r,(function(e){return 1/t})),O()(e,(function(t){return 0})),n.setState({sides:new Array(t),sideProbs:r,tally:e,valid:!0,draw:null,nThrows:0})})),y()(l()(n),"throwDice",(function(t){for(var e=B()(1,n.state.sides.length+1,1),r=A()(e,{probs:n.state.sideProbs,size:t}),i=n.state.tally.slice(),a=0;a<r.length;a++)i[r[a]-1]+=1;n.setState({draw:r,tally:i,nThrows:n.state.nThrows+t})})),n.state={sides:new Array(6),tally:[0,0,0,0,0,0],nThrows:0,sideProbs:[1/6,1/6,1/6,1/6,1/6,1/6],valid:!0},n}return d()(r,[{key:"renderGrid",value:function(){var t=this;return i()(j.a,{fluid:!0},void 0,i()(N.a,{},void 0,i()(P.a,{md:5},void 0,i()("h3",{},void 0,this.props.t("probabilities"),":"),O()(this.state.sides,(function(e,r){return i()(H.b,{legend:"Side ".concat(r+1),defaultValue:1/t.state.sides.length,step:"any",max:1,min:0,width:100,numbersOnly:!1,onChange:function(e){var n=t.state.sideProbs.slice();n[r]=e;for(var i=0,a=0;a<n.length;a++)i+=n[a];var o=new Array(n.length);O()(o,(function(t){return 0})),t.setState({sideProbs:n,valid:G()(i,1)<=15e-9,tally:o,draw:null})}},r)})),i()(x.a,{onClick:function(){t.setState({tally:t.state.tally.map((function(t){return 0})),nThrows:0})}},void 0,this.props.t("reset"))),i()(P.a,{md:6},void 0,this.renderDice()),z))}},{key:"renderDice",value:function(){var t=this;return this.state.valid?i()(k.a,{fluid:!0},void 0,i()(k.a.Header,{},void 0,this.props.t("dice")),i()(k.a.Body,{},void 0,i()(k.a,{body:!0},void 0,this.state.draw?this.state.draw.join(" - "):"X"),i()(T.a,{},void 0,i()(x.a,{onClick:function(){t.throwDice(1)}},void 0,this.props.t("throw")," \u2685 1x"),i()(x.a,{onClick:function(){t.throwDice(5)}},void 0,this.props.t("throw")," \u2685 5x"),i()(x.a,{onClick:function(){t.throwDice(10)}},void 0,this.props.t("throw")," \u2685 10x")))):i()(k.a,{body:!0},void 0,i()("h3",{},void 0,this.props.t("invalid-probs")))}},{key:"renderTable",value:function(){var t=this;return i()("table",{className:"table table-bordered table-responsive-sm"},void 0,i()("tbody",{},void 0,i()("tr",{},void 0,i()("th",{},void 0,this.props.t("side"),":"),this.state.tally.map((function(t,e){return i()("td",{},e,e+1)}))),i()("tr",{},void 0,i()("th",{},void 0,this.props.t("count"),":"),this.state.tally.map((function(t,e){return i()("td",{},e,t)}))),i()("tr",{},void 0,i()("th",{},void 0,this.props.t("relative-frequency"),":"),this.state.tally.map((function(e,r){return i()("td",{},r,C()(e/t.state.tally.reduce((function(t,e){return t+e})),-3)||"0.000")})))))}},{key:"render",value:function(){return i()(k.a,{id:"diceThrowingModule",style:{maxWidth:1200,margin:"0 auto"}},void 0,i()(k.a.Header,{as:"h4"},void 0,this.props.t("simulate-random-dice-throws")),i()(k.a.Body,{},void 0,i()(H.b,{legend:this.props.t("number-of-sides"),defaultValue:6,step:1,max:20,min:2,onChange:this.chooseNSides}),i()("p",{},void 0,this.props.t("choose-custom-probs")),this.renderGrid(),this.renderTable(),i()("p",{},void 0,this.props.t("total-number-of-throws"),": ",this.state.nThrows)))}}]),r}(m.Component);e.default=Object(g.a)("LearnDiceThrowing")(F)}}]);