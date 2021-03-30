(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{484:function(e,t,n){"use strict";var a,o=n(407),r=n.n(o),i=(n(0),n(404),n(423)),s=n(512),u=n(510),c=n(505),l=n(547);t.a=function(e){var t=r()(s.a,{id:"popover-positioned-right"},void 0,r()(u.a,{},void 0,e.title),r()(c.a,{},void 0,e.content));return r()(l.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,a||(a=r()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,r()("div",{className:"fa fa-question"}))))}},6295:function(e,t,n){"use strict";n.r(t);n(421);var a=n(407),o=n.n(a),r=n(414),i=n.n(r),s=n(416),u=n.n(s),c=n(424),l=n.n(c),p=n(418),f=n.n(p),d=n(419),h=n.n(d),m=n(417),y=n.n(m),g=n(412),v=n.n(g),C=(n(465),n(428),n(0)),T=(n(404),n(423)),x=n(464),S=n(711),b=n.n(S),V=n(471),q=n.n(V),w=n(447),R=n.n(w),k=n(515),D=n.n(k),I=n(452),M=n.n(I),P=n(435),z=n.n(P),B=n(506),N=n(487),A=n(1102),F=n(1325),J=n(458),_=n(484);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return h()(this,n)}}function G(e,t){return e?"Classificiation"===t?M()(z()(e.length)):e.length<3?1:M()(e.length/3):1}var H=function(e){f()(n,e);var t=j(n);function n(e){var a;return i()(this,n),a=t.call(this,e),v()(l()(a),"compute",(function(){var e=a.state,t=e.y,n=e.x,r=e.type,i=e.nTrees,s=e.nTry,u=e.impurityMeasure,c=e.scoreThreshold,l=e.maxTreeDepth,p=e.minItemsCount,f=o()(F.a,{x:n,y:t,type:r,nTrees:i,nTry:s,impurityMeasure:u,scoreThreshold:c,maxTreeDepth:l,minItemsCount:p,quantitative:a.props.quantitative,data:a.props.data,onPredict:function(e,n){var o=D()(a.props.data,1);if("Classification"===r){var i=a.props.categorical.slice(),s=e.predict(o).map((function(e){return String(e)})),u="pred_forest"+n;o[u]=s,q()(i,u)||i.push(u),u="correct_forest"+n;var c=a.props.data[t];o[u]=s.map((function(e,t){return e===String(c[t])?"Yes":"No"})),q()(i,u)||i.push(u),a.props.onGenerate(a.props.quantitative,i,o)}}});a.props.logAction(J.D,{y:t,x:n,type:r,nTrees:i,nTry:s}),a.props.onCreated(f)})),a.state={y:e.categorical[0],x:e.quantitative[0],type:"Classification",nTrees:50,nTry:1,impurityMeasure:"gini",scoreThreshold:.01,maxTreeDepth:20,minItemsCount:50},a}return u()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.categorical,a=t.quantitative,r=t.t,i=this.state,s=i.x,u=i.y,c=i.type,l=i.nTrees,p=i.nTry;return o()(x.a,{style:{fontSize:"14px",maxWidth:600}},void 0,o()(x.a.Header,{as:"h4"},void 0,r("Random Forest"),o()(_.a,{title:r("Random Forest"),content:"Instead of growing a single decision tree, a random forest as an ensemble method constructs many decision trees at once and returns the average of the predictions (regression case) or the majority vote (classification case) of the individual trees"})),o()(x.a.Body,{},void 0,o()(B.a,{legend:r("type"),options:["Classification"],defaultValue:c,onChange:function(t){t!==e.state.type&&e.setState({type:t,y:"Classification"===t?n[0]:a[0],nTry:G(e.state.x,t)})}}),o()(B.a,{legend:r("outcome-y"),options:"Classification"===c?n:a,defaultValue:u,onChange:function(t){return e.setState({y:t})}}),o()(B.a,{legend:r("predictors-x"),multi:!0,options:b()(a.concat(n)),defaultValue:s||"",onChange:function(t){e.setState({x:t,nTry:G(t,c)})}}),o()(N.b,{legend:r("number-of-trees"),defaultValue:l,inputStyle:{float:"right"},onChange:function(t){return e.setState({nTrees:t})},tooltipPlacement:"top",min:1}),o()(N.b,{legend:r("predictors-to-check"),defaultValue:p,inputStyle:{float:"right"},onChange:function(t){return e.setState({nTry:t})},tooltipPlacement:"top",min:1,max:R()(s)?s.length:1}),o()(A.a,{header:r("change-tree-features"),headerStyle:{fontSize:"1rem"}},void 0,o()(N.b,{legend:r("score-threshold-for-split"),min:0,max:1,step:.001,defaultValue:this.state.scoreThreshold,onChange:function(t){return e.setState({scoreThreshold:t})}}),o()(N.b,{legend:r("maximum-tre-depth"),min:1,max:50,defaultValue:this.state.maxTreeDepth,onChange:function(t){return e.setState({maxTreeDepth:t})}}),o()(N.b,{legend:r("min-obs-leafs"),min:1,defaultValue:this.state.minItemsCount,onChange:function(t){return e.setState({minItemsCount:t})}})),"Classification"===c?o()(B.a,{legend:r("impurity-measure"),defaultValue:this.state.impurityMeasure,options:["gini","entropy"],onChange:function(t){return e.setState({impurityMeasure:t})}}):null,o()(T.a,{disabled:!s||0===s.length,variant:"primary",block:!0,onClick:this.compute},void 0,r("calculate"))))}}]),n}(C.Component);H.defaultProps={logAction:function(){}},t.default=H}}]);