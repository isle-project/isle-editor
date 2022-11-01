"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27088],{581728:function(e,t,a){var i=a(202784),s=a(213980),r=a.n(s),l=a(770561),n=a(435376),o=a(992500),u=a(862816),d=a(461298);const c=e=>{const t=i.createElement(n.Z,{id:"popover-positioned-right"},i.createElement(o.Z,null,e.title),i.createElement(u.Z,null,e.content));return i.createElement(d.Z,{trigger:["click","hover","focus"],placement:"left",rootClose:!0,overlay:t},i.createElement(l.Z,{"aria-label":e.title,size:"sm",variant:"outline-secondary",className:"question-button"},i.createElement("div",{className:"fa fa-question"})))};c.propTypes={content:r().oneOfType([r().string,r().node]).isRequired,title:r().string.isRequired},t.Z=c},747857:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var i=a(202784),s=a(922730),r=a(213980),l=a.n(r),n=a(820144),o=a(931776),u=a(790817),d=a(770561),c=a(10863),m=a(830650),h=a(461298),p=a(435376),b=a(862816),v=a(440835),g=a(684800),f=a(112114),M=a(287013),S=a.n(M),y=a(588703),w=a.n(y),E=a(620045),q=a(351375),Z=a(106252),V=a(801145),x=a(581728),C=a(691334),Q=JSON.parse('{"de":{"Mean":"Mittelwert aller Werte","Median":"Mittlerer Wert, wenn die Werte in der Reihenfolge vom kleinsten zum gr\xf6\xdften Wert aufgef\xfchrt sind (Mittelwert der beiden mittleren Werte im Falle einer ungeraden Anzahl von Werten)","First Quartile":"Median der unteren H\xe4lfte des Datensatzes, was bedeutet, dass 25% der Zahlen im Datensatz darunter und 75% dar\xfcber liegen","Five-Number Summary":"Berechnet das Minimum, das erste Quartil, den Median, das dritte Quartil und das Maximum, um die Verteilung der Daten grob zu charakterisieren","Third Quartile":"Median der oberen H\xe4lfte des Datensatzes, was bedeutet, dass 75% der Zahlen im Datensatz darunter und 25% dar\xfcber liegen","Quantile":"Quantiles divide the distribution such that there is a given proportion of observations below the quantile (special cases being the median or the first and third quartiles)","Min":"Minimaler Wert.","Max":"Maximaler Wert","Range":"Differenz zwischen Maximal- und Minimalwert","Interquartile Range":"Differenz zwischen dem dritten und dem ersten Quartil","Standard Deviation":"Quadratwurzel der Stichprobenvarianz","Variance":"Mittelwert aus der quadrierten Differenz der Einzelwerte minus deren Mittelwert","Correlation":"Pearson-Korrelationskoeffizient, der die lineare Assoziation zwischen zwei Variablen misst (nimmt Werte zwischen -1 und 1 an)","Skewness":"Ma\xdf f\xfcr die Asymmetrie einer Verteilung","Excess Kurtosis":"Positive Werte der exzessiven Kurtose signalisieren, dass die Verteilung dickere Enden als die Normalverteilung hat, negative Werte, dass die Verteilung schmaler ist"},"en":{"Mean":"Average of all values","Median":"Middle value when values are listed in order from smallest to greatest (mean of the two middle values in case of an odd number of values)","First Quartile":"Median of the lower half of the data set, which implies that 25% of the numbers in the data set lie below it and 75% are above","Five-Number Summary":"Calculates the minimum, first quartile, median, third quartile, and maximum to roughly characterize the distribution of the data","Third Quartile":"Median of the upper half of the data set, which implies that 75% of the numbers in the data set lie below it and 25% are above","Quantile":"Quantiles divide the distribution such that there is a given proportion of observations below the quantile (special cases being the median or the first and third quartiles)","Min":"Minimum value.","Max":"Maximum value.","Range":"Difference between maximum and minimum value","Interquartile Range":"Difference between the third and first quartile","Standard Deviation":"Square root of the sample variance","Variance":"Average of the squared difference of the individual values minus their mean","Correlation":"Pearson correlation coefficient measuring the linear association between two variables (takes values between -1 and 1)","Skewness":"Measure for the asymmetry of a distribution","Excess Kurtosis":"Positive values of the excess kurtosis signal that distribution has fatter tails than normal distribution, negative values that the distribution is narrower"},"es":{"Mean":"Promedio de todos los valores","Median":"Valor medio cuando los valores se enumeran en orden de menor a mayor (media de los dos valores medios en caso de un n\xfamero impar de valores)","First Quartile":"Mediana de la mitad inferior del conjunto de datos, lo que implica que el 25% de los n\xfameros del conjunto de datos est\xe1n por debajo y el 75% por encima","Five-Number Summary":"Calcula el m\xednimo, el primer cuartil, la mediana, el tercer cuartil y el m\xe1ximo para caracterizar aproximadamente la distribuci\xf3n de los datos","Third Quartile":"Mediana de la mitad superior del conjunto de datos, lo que implica que el 75% de los n\xfameros del conjunto de datos est\xe1n por debajo y el 25% por encima","Quantile":"Los cuantiles dividen la distribuci\xf3n de manera que hay una proporci\xf3n determinada de observaciones por debajo del cuantil (los casos especiales son la mediana o el primer y tercer cuartil)","Min":"Valor m\xednimo","Max":"Valor m\xe1ximo","Range":"Diferencia entre el valor m\xe1ximo y el m\xednimo","Interquartile Range":"Diferencia entre el tercer y el primer cuartil","Standard Deviation":"Ra\xedz cuadrada de la varianza de la muestra","Variance":"Promedio de la diferencia cuadrada de los valores individuales menos su media","Correlation":"Coeficiente de correlaci\xf3n de Pearson que mide la asociaci\xf3n lineal entre dos variables (toma valores entre -1 y 1)","Skewness":"Medir la asimetr\xeda de una distribuci\xf3n","Excess Kurtosis":"Los valores positivos del exceso de curtosis indican que la distribuci\xf3n tiene colas m\xe1s gordas que la distribuci\xf3n normal, los valores negativos que la distribuci\xf3n es m\xe1s estrecha"}}'),z=Object.defineProperty,k=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,R=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,F=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&R(e,a,t[a]);if(k)for(var a of k(t))D.call(t,a)&&R(e,a,t[a]);return e},T=(e,t,a)=>(R(e,"symbol"!=typeof t?t+"":t,a),a);const I=i.createElement("span",null,"Compute various statistics of interest, i.e. summary measures of the ",i.createElement("i",null,"quantitative")," variables in the data set."),N=[.1,.2,.3,.4,.5,.6,.7,.8,.9].map((e=>{return{label:t=e,value:t};var t})),O=e=>{const t=(0,Z.Z)(e.data.label),a=i.createElement(p.Z,{id:`${e.data.label}-popover`},i.createElement(b.Z,null,Q[s.a.language][e.data.label]));return i.createElement(n.c.Option,F({key:e.data.label},e),i.createElement("span",{style:{opacity:e.isSelected?.5:1}},s.a.t("data-explorer:"+t)),i.createElement(h.Z,{trigger:["hover","click"],placement:"right",rootClose:!0,overlay:a},i.createElement(d.Z,{"aria-label":s.a.t("data-explorer:"+t),size:"sm",variant:"outline-secondary",className:"question-button",style:{float:"right",fontSize:14},onClick:e=>e.stopPropagation()},i.createElement("span",{className:"fa fa-question"}))))},j=e=>((e=F({},e)).children=s.a.t("data-explorer:"+e.children),i.createElement(n.c.GroupHeading,F({},e)));class W extends i.Component{constructor(e){super(e),T(this,"createStatisticsOptions",(()=>{const e=[],t=[],a=[],i=[],s=[];for(let r=0;r<this.props.statistics.length;r++){const l=this.props.statistics[r];switch(l){case"Mean":case"Median":e.push({label:l,value:l});break;case"First Quartile":case"Third Quartile":case"Quantile":case"Min":case"Max":t.push({label:l,value:l});break;case"Five-Number Summary":t.push({label:l,value:null});break;case"Range":case"Interquartile Range":case"Standard Deviation":case"Variance":a.push({label:l,value:l});break;case"Correlation":case"Correlation Matrix":i.push({label:l,value:l});break;case"Skewness":case"Excess Kurtosis":s.push({label:l,value:l})}}this.statistics=[{label:"central-tendency-measures",options:e},{label:"variation-measures",options:a},{label:"other-location-measures",options:t},{label:"relationship-measures",options:i},{label:"shape-measures",options:s}]})),T(this,"generateStatistics",(()=>{const e=this.state.selectedStats.map((e=>e.value)),t=this.state.quantiles.map((e=>e.value)),a=this.state.group?this.state.group.map((e=>e.value)):null;if("Correlation Matrix"===e[0]){const t={statistics:e,variables:this.state.variables,group:a,omit:this.state.omit};this.props.logAction(C.Ut,t)}else{const i={statistics:e,variables:this.state.variables,secondVariable:"Correlation"===e[0]?this.state.secondVariable:null,group:a,omit:this.state.omit};S()(e,"Quantile")&&(i.quantiles=t),this.props.logAction(C.Ut,i)}const s=i.createElement(E.Z,{data:this.props.data,statistics:e,variables:this.state.variables,secondVariable:this.state.showSecondVarSelect?this.state.secondVariable:null,group:a,omit:this.state.omit,quantiles:t});this.props.onCreated(s)}));const t=e.defaultStatistic;this.state={selectedStats:t?[{value:t,label:t}]:null,variables:e.defaultX?[e.defaultX]:[],secondVariable:e.defaultY,group:null,showSecondVarSelect:!1,showQuantiles:!1,quantiles:[],omit:!1},this.createStatisticsOptions()}render(){let{variables:e,groupingVariables:t,t:a}=this.props;const s=this.state.selectedStats;return i.createElement(u.Z,null,i.createElement(u.Z.Header,{as:"h4"},a("summary-statistics"),i.createElement(x.Z,{title:a("summary-statistics"),content:I})),i.createElement(u.Z.Body,{className:"d-grid gap-3"},i.createElement(c.Z,{controlId:"statistics-form-select"},i.createElement(f.Z,{tooltip:a("statistics-tooltip"),placement:"right"},i.createElement(m.Z,null,a("statistics"),":")),i.createElement(o.ZP,{value:s,options:this.statistics,isMulti:!0,components:{Option:O,GroupHeading:j},hideSelectedOptions:!1,onChange:e=>{let t,a=-1;if(w()(e)&&e.length>0){t=e.map(((e,t)=>("Five-Number Summary"===e.label&&(a=t),e.label)));const i=t[t.length-1];if("Correlation"===i||"Correlation Matrix"===i)return this.setState({selectedStats:[{label:i,value:i}],showSecondVarSelect:"Correlation"===i});if("Correlation"!==t[0]&&"Correlation Matrix"!==t[0]||e.shift(),a>-1){e=e.slice();const i=[];S()(t,"Min")||i.push({label:"Min",value:"Min"}),S()(t,"First Quartile")||i.push({label:"First Quartile",value:"First Quartile"}),S()(t,"Median")||i.push({label:"Median",value:"Median"}),S()(t,"Third Quartile")||i.push({label:"Third Quartile",value:"Third Quartile"}),S()(t,"Max")||i.push({label:"Max",value:"Max"}),e.splice(a,1,...i)}}this.setState({selectedStats:e,showSecondVarSelect:!1,showQuantiles:t&&t.includes("Quantile")})},styles:g.Z,menuPlacement:"auto",menuPortalTarget:document.body,menuShouldScrollIntoView:!1})),i.createElement(v.Z,{legend:a("variable-s"),defaultValue:this.state.variables,multi:!0,options:e,onChange:e=>{this.setState({variables:e||[]})},tooltip:a("variables-statistics-tooltip"),menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1}),this.state.showQuantiles?i.createElement(c.Z,{controlId:"quantiles-form-group"},i.createElement(f.Z,{tooltip:a("quantiles-tooltip"),placement:"right"},i.createElement(m.Z,null,a("quantiles"))),i.createElement(V.Z,{defaultValue:[],options:N,isClearable:!0,isMulti:!0,placeholder:a("quantiles-placeholder"),onChange:e=>{this.setState({quantiles:e})},styles:g.Z,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})):null,i.createElement(v.Z,{legend:a("second-variable"),defaultValue:this.state.secondVariable,options:e,style:{display:this.state.showSecondVarSelect?"inline":"none"},onChange:e=>{this.setState({secondVariable:e})},tooltip:a("second-variable-statistic-tooltip")}),t.length>0?i.createElement(c.Z,{controlId:"stats-form-group"},i.createElement(f.Z,{tooltip:a("group-by-statistics-tooltip")},i.createElement(m.Z,null,a("group-by"))),i.createElement(o.ZP,{value:this.state.group,options:t.map((e=>({label:e,value:e}))),isClearable:!0,isMulti:!0,onChange:e=>{e&&0!==e.length?e.length<=2&&this.setState({group:e}):this.setState({group:null})},styles:g.Z,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})):null,i.createElement(q.Z,{legend:a("omit-missing"),tooltip:a("omit-missing-tooltip"),defaultValue:this.state.omit,onChange:e=>{this.setState({omit:e})}}),i.createElement(d.Z,{variant:"primary",onClick:this.generateStatistics,disabled:!s||0===this.state.variables.length},a("calculate"))))}}W.defaultProps={groupingVariables:[],defaultX:null,defaultY:null,defaultStatistic:null,logAction(){},statistics:["Mean","Median","Min","Max","Range","Interquartile Range","Standard Deviation","Variance","Correlation","Correlation Matrix","Skewness","Excess Kurtosis","First Quartile","Third Quartile","Quantile","Five-Number Summary"]},W.propTypes={data:l().object.isRequired,defaultStatistic:l().string,defaultX:l().string,defaultY:l().string,groupingVariables:l().array,logAction:l().func,onCreated:l().func.isRequired,statistics:l().array,variables:l().array.isRequired};var A=W}}]);