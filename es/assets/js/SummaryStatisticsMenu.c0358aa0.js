/*! For license information please see SummaryStatisticsMenu.c0358aa0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1073],{2643:function(e,t,a){"use strict";var i=a(2644);e.exports=i},2644:function(e,t,a){"use strict";var i=a(476);e.exports=function(e){var t,a,r;if(!i(e))throw new TypeError("invalid argument. First argument must be a function. Value: `"+e+"`.");for(a=arguments.length-1,t=new Array(a),r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n;function n(){var i,r,n;for(i=arguments.length,r=new Array(a+i),n=0;n<r.length;n++)r[n]=n>=i?t[n-i]:arguments[n];return e.apply(null,r)}}},484:function(e,t,a){"use strict";var i,r=a(407),n=a.n(r),o=(a(0),a(404),a(423)),s=a(512),l=a(510),u=a(505),c=a(547);t.a=function(e){var t=n()(s.a,{id:"popover-positioned-right"},void 0,n()(l.a,{},void 0,e.title),n()(u.a,{},void 0,e.content));return n()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,i||(i=n()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}))))}},6289:function(e,t,a){"use strict";a.r(t);a(437),a(433),a(430),a(438),a(439),a(421);var i,r=a(653),n=a.n(r),o=a(414),s=a.n(o),l=a(416),u=a.n(l),c=a(424),d=a.n(c),v=a(418),f=a.n(v),h=a(419),m=a.n(h),p=a(417),b=a.n(p),g=a(412),y=a.n(g),w=a(488),S=a.n(w),M=a(407),O=a.n(M),j=(a(428),a(664),a(468),a(485),a(501),a(465),a(681),a(633),a(0)),x=a.n(j),C=a(420),q=(a(404),a(879)),z=a(807),V=a(464),P=a(423),Q=a(589),k=a(687),D=a(547),R=a(512),F=a(505),T=a(506),A=a(1049),E=a(483),I=a(1544),N=a(471),W=a.n(N),K=a(480),H=a.n(K),B=a(447),J=a.n(B),X=a(2643),G=a.n(X),L=a(548),Y=a.n(L),Z=a(553),U=a(2738),$=a(484),_=a(429),ee=a(455),te=a.n(ee),ae=a(458),ie=a(590),re=a(6290);function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=b()(e);if(t){var r=b()(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return m()(this,a)}}function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var se=O()("span",{},void 0,"Compute various statistics of interest, i.e. summary measures of the ",O()("i",{},void 0,"quantitative")," variables in the data set."),le={numeric:!0},ue=[.1,.2,.3,.4,.5,.6,.7,.8,.9].map((function(e){return{label:t=e,value:t};var t})),ce=function(e){var t=O()(R.a,{id:"".concat(e.data.label,"-popover")},void 0,O()(F.a,{},void 0,re[C.c.language][e.data.label]));return x.a.createElement(q.z.Option,S()({key:e.data.label},e),O()("span",{style:{opacity:e.isSelected?.5:1}},void 0,C.c.t("DataExplorer:"+e.data.label)),O()(D.a,{trigger:["hover","click"],placement:"right",rootClose:!0,overlay:t},void 0,O()(P.a,{size:"sm",variant:"outline-secondary",className:"question-button",style:{float:"right",fontSize:14},onClick:function(e){return e.stopPropagation()}},void 0,i||(i=O()("span",{className:"fa fa-question"})))))},de=function(e){return(e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(a),!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)).children=C.c.t("DataExplorer:"+e.children),x.a.createElement(q.z.GroupHeading,e)};var ve=function(e){f()(a,e);var t=ne(a);function a(e){var i;s()(this,a),i=t.call(this,e),y()(d()(i),"createStatisticsOptions",(function(){for(var e=[],t=[],a=[],r=[],n=[],o=0;o<i.props.statistics.length;o++){var s=i.props.statistics[o];switch(s){case"Mean":case"Median":e.push({label:s,value:Object(I.a)(s)});break;case"First Quartile":case"Third Quartile":case"Quantile":case"Min":case"Max":t.push({label:s,value:Object(I.a)(s)});break;case"Five-Number Summary":t.push({label:s,value:null});break;case"Range":case"Interquartile Range":case"Standard Deviation":case"Variance":a.push({label:s,value:Object(I.a)(s)});break;case"Correlation":case"Correlation Matrix":r.push({label:s,value:Object(I.a)(s)});break;case"Skewness":case"Excess Kurtosis":n.push({label:s,value:Object(I.a)(s)})}}i.statistics=[{label:"central-tendency-measures",options:e},{label:"variation-measures",options:a},{label:"other-location-measures",options:t},{label:"relationship-measures",options:r},{label:"shape-measures",options:n}]})),y()(d()(i),"generateStatistics",(function(){var e=i.props,t=e.data,a=e.t,r=i.state,o=r.selectedStats,s=r.variables,l=r.secondVariable,u=r.group,c=r.omit;u=u?u.map((function(e){return e.value})):null;for(var d=[],v=[],f=0;f<o.length;f++){var h=o[f];if("Quantile"===h.label)for(var m=0;m<i.state.quantiles.length;m++){var p=i.state.quantiles[m].value;d.push(G()(h.value,p,5)),v.push("".concat(Y()(100*p),"% ").concat(a("quantile")))}else d.push(h.value),v.push(h.label)}if("Correlation Matrix"===v[0]){var b=function(){var e,a=s.map((function(e){return t[e]}));if(u){var r;if(2===u.length){r=[];for(var n=function(e){var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)},o=0;o<a[0].length;o++)n(o)}else r=t[u[0]];a=c?function(e,t){for(var a=[],i=e[0].length,r=0;r<i;r++){for(var n=!0,o=0;o<e.length;o++){var s=e[o][r];if(!Object(_.isPrimitive)(s)||te()(s)){n=!1;break}}n&&a.push(r)}for(var l={},u=0;u<e.length;u++)for(var c=0;c<a.length;c++){var d=t[a[c]];if(!l[d]){l[d]=new Array(e.length);for(var v=0;v<e.length;v++)l[d][v]=[]}var f=a[c];l[d][u].push(e[u][f])}return l}(a,r):function(e,t){for(var a={},i=e[0].length,r=0;r<e.length;r++)for(var n=0;n<i;n++){var o=t[n];if(!a[o]){a[o]=new Array(e.length);for(var s=0;s<e.length;s++)a[o][s]=[]}a[o][r].push(e[r][n])}return a}(a,r)}else c&&(a=function(e){for(var t=[],a=e[0].length,i=0;i<a;i++){for(var r=!0,n=0;n<e.length;n++){var o=e[n][i];if(!Object(_.isPrimitive)(o)||te()(o)){r=!1;break}}r&&t.push(i)}for(var s=new Array(e.length),l=0;l<e.length;l++){for(var u=new Array(t.length),c=0;c<t.length;c++){var d=t[c];u[c]=e[l][d]}s[l]=u}return s}(a));if(u)!function(){e={};for(var t=H()(a),i=function(i){e[t[i]]={value:d.map((function(e){return e.apply(null,a[t[i]])}))[0],size:a[t[i]][0].length}},r=0;r<t.length;r++)i(r)}();else{var l=d.map((function(e){return e.apply(null,a)}));e={value:l[0],size:a[0].length}}var f={variables:s,statistics:v,type:"Statistics",result:e,group:u};return i.props.logAction(ae.T,{statistic:v,variables:s,group:u}),{v:i.props.onCreated(f)}}();if("object"===n()(b))return b.v}for(var g={},y=function(e){var r=void 0,n=void 0,o=void 0,f=void 0,h=s[e];if(u){if(c)if(o=[],f=[],r=[],h&&i.state.showSecondVarSelect)for(var m=t[h],p=t[l],b=function(e){if(Object(_.isPrimitive)(m[e])&&!te()(m[e])&&Object(_.isPrimitive)(p[e])&&!te()(p[e])){o.push(m[e]),f.push(p[e]);var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)}},y=0;y<m.length;y++)b(y);else for(var w=t[h],S=function(e){if(Object(_.isPrimitive)(w[e])&&!te()(w[e])){o.push(w[e]);var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)}},M=0;M<w.length;M++)S(M);else if(o=t[h],f=t[l],2===u.length){r=[];for(var O=function(e){var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)},j=0;j<t[h].length;j++)O(j)}else r=t[u[0]];if("Correlation"===v[0]){var x=function(e,t,a,i,r){for(var n,o={},s={},l={},u=0;u<a.length;u++)J()(s[a[u]])||(s[a[u]]=[],l[a[u]]=[]),s[a[u]].push(e[u]),l[a[u]].push(t[u]);1===r.length?n=Object(ie.a)(s,r[0]):(n=H()(s)).sort((function(e,t){return e.localeCompare(t,void 0,le)}));for(var c=function(e){var t=n[e];o[t]={value:i.map((function(e){return e(s[t],l[t])})),size:s[t].length}},d=0;d<n.length;d++)c(d);return{keys:n,result:o}}(o,f,r,d,u);n=x.result;for(var C=x.keys,q=0;q<C.length;q++){var z=C[q];n[z].value=n[z].value.map((function(e){return e[0][1]}))}h="".concat(h," ").concat(a("vs")," ").concat(l)}else n=function(e,t,a,i){for(var r={},n=0;n<e.length;n++)J()(r[t[n]])||(r[t[n]]=[]),r[t[n]].push(e[n]);var o=H()(r);if(2===i.length){var s=i[0].categories,l=i[1].categories;s&&l?o.sort((function(e,t){var a=e.split(":"),i=t.split(":"),r=s.indexOf(a[0])-s.indexOf(i[0]);return 0!==r?r:r=l.indexOf(a[1])-l.indexOf(i[1])})):s?o.sort((function(e,t){var a=e.split(":"),i=t.split(":"),r=s.indexOf(a[0])-s.indexOf(i[0]);return 0!==r?r:a[1].localeCompare(i[1],void 0,le)})):l?o.sort((function(e,t){var a=e.split(":"),i=t.split(":"),r=a[0].localeCompare(i[0],void 0,le);return 0!==r?r:r=l.indexOf(a[1])-l.indexOf(i[1])})):o.sort((function(e,t){return e.localeCompare(t,void 0,le)}))}else 1===i.length&&i[0].categories?o=Object(ie.a)(r,i[0]):o.sort((function(e,t){return e.localeCompare(t,void 0,le)}));for(var u={},c=function(e){var t=o[e];u[t]={value:a.map((function(e){return e(r[t])})),size:r[t].length}},d=0;d<o.length;d++)c(d);return u}(o,r,d,u)}else{if(c)if(o=[],f=[],h&&i.state.showSecondVarSelect)for(var V=t[h],P=t[l],Q=0;Q<V.length;Q++)Object(_.isPrimitive)(V[Q])&&!te()(V[Q])&&Object(_.isPrimitive)(P[Q])&&!te()(P[Q])&&(o.push(V[Q]),f.push(P[Q]));else for(var k=t[h],D=0;D<k.length;D++)Object(_.isPrimitive)(k[D])&&!te()(k[D])&&o.push(k[D]);else o=t[h],f=t[l];if("Correlation"===v[0])n={value:d.map((function(e){return e(o,f)[0][1]})),size:o.length},h="".concat(h," ").concat(a("vs")," ").concat(l);else n={value:d.map((function(e){return e(o)})),size:o.length}}g[h]=n},w=0;w<s.length;w++)y(w);var S={variables:s,statistics:v,type:"Statistics",result:g,group:u};i.props.logAction(ae.T,{statistic:v,variables:s,secondVariable:"Correlation"===v[0]?l:null,group:u}),i.props.onCreated(S)}));var r=e.defaultStatistic;return i.state={selectedStats:r?[{value:Object(I.a)(r),label:r}]:null,variables:e.defaultX?[e.defaultX]:[],secondVariable:e.defaultY,group:null,showSecondVarSelect:!1,showQuantiles:!1,quantiles:[],omit:!1},i.createStatisticsOptions(),i}return u()(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.variables,i=t.groupingVariables,r=t.t,n=this.state.selectedStats;return O()(V.a,{},void 0,O()(V.a.Header,{as:"h4"},void 0,r("summary-statistics"),O()($.a,{title:r("summary-statistics"),content:se})),O()(V.a.Body,{},void 0,O()(Q.a,{controlId:"statistics-form-select"},void 0,O()(E.a,{tooltip:r("statistics-tooltip"),placement:"right"},void 0,O()(k.a,{},void 0,r("statistics"),":")),O()(z.a,{value:n,options:this.statistics,isMulti:!0,components:{Option:ce,GroupHeading:de},hideSelectedOptions:!1,onChange:function(t){var a,i=-1;if(J()(t)&&t.length>0){var r=(a=t.map((function(e,t){return"Five-Number Summary"===e.label&&(i=t),e.label})))[a.length-1];if("Correlation"===r||"Correlation Matrix"===r)return e.setState({selectedStats:[{label:r,value:Object(I.a)(r)}],showSecondVarSelect:"Correlation"===r});if("Correlation"!==a[0]&&"Correlation Matrix"!==a[0]||t.shift(),i>-1){var n;t=t.slice();var o=[];W()(a,"Min")||o.push({label:"Min",value:Object(I.a)("Min")}),W()(a,"First Quartile")||o.push({label:"First Quartile",value:Object(I.a)("First Quartile")}),W()(a,"Median")||o.push({label:"Median",value:Object(I.a)("Median")}),W()(a,"Third Quartile")||o.push({label:"Third Quartile",value:Object(I.a)("Third Quartile")}),W()(a,"Max")||o.push({label:"Max",value:Object(I.a)("Max")}),(n=t).splice.apply(n,[i,1].concat(o))}}e.setState({selectedStats:t,showSecondVarSelect:!1,showQuantiles:a&&a.includes("Quantile")})},styles:A.a,menuPlacement:"auto",menuPortalTarget:document.body,menuShouldScrollIntoView:!1})),O()(T.a,{legend:r("variable-s"),defaultValue:this.state.variables,multi:!0,options:a,onChange:function(t){e.setState({variables:t||[]})},tooltip:r("variables-statistics-tooltip"),menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1}),this.state.showQuantiles?O()(Q.a,{controlId:"quantiles-form-group"},void 0,O()(E.a,{tooltip:r("quantiles-tooltip"),placement:"right"},void 0,O()(k.a,{},void 0,r("quantiles"))),O()(U.a,{defaultValue:[],options:ue,isClearable:!0,isMulti:!0,placeholder:r("quantiles-placeholder"),onChange:function(t){e.setState({quantiles:t})},styles:A.a,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})):null,O()(T.a,{legend:r("second-variable"),defaultValue:this.state.secondVariable,options:a,style:{display:this.state.showSecondVarSelect?"inline":"none"},onChange:function(t){e.setState({secondVariable:t})},tooltip:r("second-variable-statistic-tooltip")}),i.length>0?O()(Q.a,{controlId:"stats-form-group"},void 0,O()(E.a,{tooltip:r("group-by-statistics-tooltip")},void 0,O()(k.a,{},void 0,r("group-by"))),O()(z.a,{value:this.state.group,options:i.map((function(e){return{label:e,value:e}})),isClearable:!0,isMulti:!0,onChange:function(t){t&&0!==t.length?t.length<=2&&e.setState({group:t}):e.setState({group:null})},styles:A.a,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})):null,O()(Z.a,{legend:r("omit-missing"),tooltip:r("omit-missing-tooltip"),defaultValue:this.state.omit,onChange:function(t){e.setState({omit:t})}}),O()(P.a,{variant:"primary",block:!0,onClick:this.generateStatistics,disabled:!n||0===this.state.variables.length},void 0,r("calculate"))))}}]),a}(j.Component);ve.defaultProps={groupingVariables:[],defaultX:null,defaultY:null,defaultStatistic:null,logAction:function(){},statistics:["Mean","Median","Min","Max","Range","Interquartile Range","Standard Deviation","Variance","Correlation","Correlation Matrix","Skewness","Excess Kurtosis","First Quartile","Third Quartile","Quantile","Five-Number Summary"]},t.default=ve},6290:function(e){e.exports=JSON.parse('{"de":{"Mean":"Mittelwert aller Werte","Median":"Mittlerer Wert, wenn die Werte in der Reihenfolge vom kleinsten zum gr\xf6\xdften Wert aufgef\xfchrt sind (Mittelwert der beiden mittleren Werte im Falle einer ungeraden Anzahl von Werten)","First Quartile":"Median der unteren H\xe4lfte des Datensatzes, was bedeutet, dass 25% der Zahlen im Datensatz darunter und 75% dar\xfcber liegen","Five-Number Summary":"Berechnet das Minimum, das erste Quartil, den Median, das dritte Quartil und das Maximum, um die Verteilung der Daten grob zu charakterisieren","Third Quartile":"Median der oberen H\xe4lfte des Datensatzes, was bedeutet, dass 75% der Zahlen im Datensatz darunter und 25% dar\xfcber liegen","Quantile":"Quantiles divide the distribution such that there is a given proportion of observations below the quantile (special cases being the median or the first and third quartiles)","Min":"Minimaler Wert.","Max":"Maximaler Wert","Range":"Differenz zwischen Maximal- und Minimalwert","Interquartile Range":"Differenz zwischen dem dritten und dem ersten Quartil","Standard Deviation":"Quadratwurzel der Stichprobenvarianz","Variance":"Mittelwert aus der quadrierten Differenz der Einzelwerte minus deren Mittelwert","Correlation":"Pearson-Korrelationskoeffizient, der die lineare Assoziation zwischen zwei Variablen misst (nimmt Werte zwischen -1 und 1 an)","Skewness":"Ma\xdf f\xfcr die Asymmetrie einer Verteilung","Excess Kurtosis":"Positive Werte der exzessiven Kurtose signalisieren, dass die Verteilung dickere Enden als die Normalverteilung hat, negative Werte, dass die Verteilung schmaler ist"},"en":{"Mean":"Average of all values","Median":"Middle value when values are listed in order from smallest to greatest (mean of the two middle values in case of an odd number of values)","First Quartile":"Median of the lower half of the data set, which implies that 25% of the numbers in the data set lie below it and 75% are above","Five-Number Summary":"Calculates the minimum, first quartile, median, third quartile, and maximum to roughly characterize the distribution of the data","Third Quartile":"Median of the upper half of the data set, which implies that 75% of the numbers in the data set lie below it and 25% are above","Quantile":"Quantiles divide the distribution such that there is a given proportion of observations below the quantile (special cases being the median or the first and third quartiles)","Min":"Minimum value.","Max":"Maximum value.","Range":"Difference between maximum and minimum value","Interquartile Range":"Difference between the third and first quartile","Standard Deviation":"Square root of the sample variance","Variance":"Average of the squared difference of the individual values minus their mean","Correlation":"Pearson correlation coefficient measuring the linear association between two variables (takes values between -1 and 1)","Skewness":"Measure for the asymmetry of a distribution","Excess Kurtosis":"Positive values of the excess kurtosis signal that distribution has fatter tails than normal distribution, negative values that the distribution is narrower"},"es":{"Mean":"Promedio de todos los valores","Median":"Valor medio cuando los valores se enumeran en orden de menor a mayor (media de los dos valores medios en caso de un n\xfamero impar de valores)","First Quartile":"Mediana de la mitad inferior del conjunto de datos, lo que implica que el 25% de los n\xfameros del conjunto de datos est\xe1n por debajo y el 75% por encima","Five-Number Summary":"Calcula el m\xednimo, el primer cuartil, la mediana, el tercer cuartil y el m\xe1ximo para caracterizar aproximadamente la distribuci\xf3n de los datos","Third Quartile":"Mediana de la mitad superior del conjunto de datos, lo que implica que el 75% de los n\xfameros del conjunto de datos est\xe1n por debajo y el 25% por encima","Quantile":"Los cuantiles dividen la distribuci\xf3n de manera que hay una proporci\xf3n determinada de observaciones por debajo del cuantil (los casos especiales son la mediana o el primer y tercer cuartil)","Min":"Valor m\xednimo","Max":"Valor m\xe1ximo","Range":"Diferencia entre el valor m\xe1ximo y el m\xednimo","Interquartile Range":"Diferencia entre el tercer y el primer cuartil","Standard Deviation":"Ra\xedz cuadrada de la varianza de la muestra","Variance":"Promedio de la diferencia cuadrada de los valores individuales menos su media","Correlation":"Coeficiente de correlaci\xf3n de Pearson que mide la asociaci\xf3n lineal entre dos variables (toma valores entre -1 y 1)","Skewness":"Medir la asimetr\xeda de una distribuci\xf3n","Excess Kurtosis":"Los valores positivos del exceso de curtosis indican que la distribuci\xf3n tiene colas m\xe1s gordas que la distribuci\xf3n normal, los valores negativos que la distribuci\xf3n es m\xe1s estrecha"}}')}}]);