(window.webpackJsonp=window.webpackJsonp||[]).push([[1146],{6261:function(t,e,o){"use strict";o.r(e);o(421);var n,a=o(407),r=o.n(a),i=o(414),s=o.n(i),l=o(416),c=o.n(l),u=o(424),p=o.n(u),f=o(418),g=o.n(f),h=o(419),d=o.n(h),v=o(417),b=o.n(v),m=o(412),y=o.n(m),w=(o(428),o(0)),k=(o(404),o(423)),T=o(763),x=o(724),C=o(1053),R=o(515),q=o.n(R),S=o(6262);function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=b()(t);if(e){var a=b()(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return d()(this,o)}}var O=function(t){g()(o,t);var e=B(o);function o(t){var n;return s()(this,o),n=e.call(this,t),y()(p()(n),"toggleTour",(function(){n.setState({running:!n.state.running},(function(){n.state.running?n.props.onTutorialStart():n.props.onTutorialCompletion()}))})),n.state={running:!1},n.stepsWithId=q()(S,2).map((function(e){return e.target="#".concat(t.for," ")+e.target,e})),n}return c()(o,[{key:"render",value:function(){var t=this;return r()(w.Fragment,{},void 0,r()(x.a,{placement:"left",overlay:r()(T.a,{},void 0,this.props.t(this.state.running?"close-tutorial":"show-tutorial"))},void 0,r()(k.a,{variant:"secondary",size:"sm",onClick:this.toggleTour,style:{marginRight:110,float:"right"}},void 0,n||(n=r()("div",{className:"fa fa-question"})))),r()(C.b,{steps:this.stepsWithId,disableScrolling:!0,showProgress:!0,run:this.state.running,callback:function(e){e.type===C.a.TOUR_END&&(t.setState({running:!1}),t.props.onTutorialCompletion())},styles:{options:{zIndex:1010}}}))}}]),o}(w.Component);e.default=O},6262:function(t){t.exports=JSON.parse('[{"target":".card-body","content":"The toolbox comes with a wide range of options to analyze one\'s data. Clicking the \'Calculate\' or \'Generate\' buttons for the chosen statistic, plot, or model will calculate it and append it to the output pane.","placement":"bottom","placementBeacon":"bottom"},{"target":".card-header","content":"Click the \'Hide toolbox\' button on the toolbox itself or the main data explorer to toggle the toolbox off. The currently opened tab is preserved when the toolbox is reopened later. Clicking the question mark button in the header closes this tutorial.","placement":"bottom","placementBeacon":"bottom"},{"target":".question-button","content":"Hovering over the question mark button for the selected tab will display a short description of the respective statistic, plot, or model."},{"target":".nav-statistics","content":"Calculate one or more statistics for a chosen variable. One may optionally designate a grouping variable to calculate the statistics for observations belonging to each category of the grouping variable."},{"target":".nav-tables","content":"Tabular displays for categorical variables."},{"target":".nav-plots","content":"Generate plots for categorical or quantitative variables."},{"target":".nav-tests","content":"Run statistical tests for your hypotheses of interest."},{"target":".nav-models","content":"Fit classification, regression, or clustering models."},{"target":".nav-transform","content":"Transform variables or generate grouping variables."}]')}}]);