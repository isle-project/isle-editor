(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{6496:function(t,e,o){"use strict";o.r(e);o(753),o(417),o(504),o(438),o(734),o(566),o(446),o(447);var n=o(406),a=o.n(n),r=o(462),i=o.n(r),l=o(0),s=o.n(l),c=o(2030),u=o(1669),d=o(408),f=o(854),b=o(433),m=o(475);function p(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw r}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var y=Object(d.a)((function(){return o.e(414).then(o.bind(null,6340))})),g=Object(d.a)((function(){return Promise.all([o.e(389),o.e(1312)]).then(o.bind(null,6342))}));e.default=function(t){var e=t.id,o=t.categorical,n=t.quantitative,r=t.originalQuantitative,d=t.groupingVariables,v=t.logAction,h=t.data,w=t.statistics,x=t.tables,S=t.models,O=t.plots,j=t.tests,C=t.showHistogramDensityOption,T=t.showTestDecisions,A=t.transformer,G=t.onBarchartSelection,Q=t.onCategoricalGenerate,B=t.onCreated,D=t.onGenerateTransformedVariable,P=t.onHistogramSelection,k=t.onPlotDone,E=t.onQuantitativeGenerate,H=t.onBothGenerate,N=t.on2dSelection,I=t.onQQPlotSelection,V=t.onTutorialStart,z=t.onTutorialCompletion,q=Object(c.a)("DataExplorer").t,J=Object(l.useState)(!1),R=i()(J,2),X=R[0],F=R[1],M=Object(l.useState)(!1),U=i()(M,2),Y=U[0],$=U[1],K=Object(l.useState)(null),L=i()(K,2),W=L[0],Z=L[1],_=Object(l.useRef)();Object(l.useEffect)((function(){var t=new u.default((function(t){var e,o=p(t);try{for(o.s();!(e=o.n()).done;){if(e.value.contentBoxSize){var n=_.current.getBoundingClientRect().top+document.documentElement.scrollTop;Z({x:30+window.pageXOffset,y:n})}}}catch(a){o.e(a)}finally{o.f()}}));return t.observe(document.body),function(){t.unobserve(document.body)}}),[]);var tt=Object(l.useCallback)((function(){W||Z({x:30+window.pageXOffset,y:30+window.pageYOffset}),$(!Y)}),[W,Y]),et=s.a.createElement(b.a,{variant:"secondary",size:"sm",className:"hide-toolbox-button",onClick:tt,ref:_},q(Y?"hide-toolbox":"show-toolbox"));return Y?a()(l.Fragment,{},void 0,et,a()(f.a,{cancel:".input",disabled:X,bounds:"body",position:W,style:{position:"absolute"},onStop:function(t,e){var o=e.x,n=e.y;Z({x:o,y:n})}},void 0,a()(m.a,{border:"secondary",id:e,className:"data-explorer-toolbox",role:"button",tabIndex:0},void 0,a()(m.a.Header,{className:"data-explorer-toolbox-header"},void 0,a()(m.a.Title,{as:"h3",unselectable:"on",className:"data-explorer-toolbox-title"},void 0,q("toolbox")),a()(y,{onTutorialStart:function(){F(!0),V()},onTutorialCompletion:function(){F(!1),z()},for:e,t:q}),a()(b.a,{variant:"secondary",size:"sm",style:{position:"absolute",right:"20px"},onClick:tt},void 0,q("hide-toolbox"))),a()(m.a.Body,{className:"data-explorer-toolbox-body"},void 0,a()(g,{models:S,tables:x,statistics:w,plots:O,tests:j,quantitative:n,originalQuantitative:r,categorical:o,logAction:v,onCreated:B,data:h,showTestDecisions:T,onPlotDone:k,groupingVariables:d,on2dSelection:N,onQQPlotSelection:I,transformer:A,onBarchartSelection:G,showHistogramDensityOption:C,onGenerateTransformedVariable:D,onHistogramSelection:P,onCategoricalGenerate:Q,onQuantitativeGenerate:E,onBothGenerate:H}))))):et}},854:function(t,e,o){"use strict";var n=o(408),a=Object(n.a)((function(){return Promise.all([o.e(0),o.e(10),o.e(395),o.e(166)]).then(o.bind(null,1670))}));e.a=a}}]);