(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{6463:function(a,l,n){"use strict";n.r(l);var t=n(407),c=n.n(t),o=n(448),i=n.n(o),e=(n(664),n(430),n(0)),r=n.n(e),s=(n(404),n(450)),u=n.n(s),d=n(4095),v=n(423),f=n(507),m=n(658),b=n(490),k=n(477),p=n(1363),C=n.n(p),N=n(1370),g=n.n(N),h=n(714),x=n(518),y=n(492),w=n(458),S=n(459),O=n(2629),$=n.n(O),j=n(944),R=n.n(j),H=n(514),E=n.n(H),z=(n(633),n(420)),A=n(480),P=n.n(A),q=n(451),F=n.n(q),I=n(732),J=n.n(I),K=n(788),D=n.n(K),L=n(446),B=n.n(L),G=n(6227),M=n.n(G),Q=n(431),T=n.n(Q),U=n(6233),V=n.n(U),W=n(449),X=n.n(W),Y=n(6235),Z=n.n(Y),_=n(6237),aa=n.n(_),la=n(435),na=n.n(la),ta=n(6242),ca=n.n(ta),oa=n(1506),ia=n.n(oa),ea=n(1115),ra=n.n(ea),sa=n(6247),ua=n.n(sa),da=n(474),va=n.n(da),fa=n(432),ma=n(6249),ba=n.n(ma),ka=n(566),pa=n.n(ka),Ca=n(660),Na=n.n(Ca),ga=/\d/,ha=function(a,l,n,t,c){return{name:a,precedence:l,params:t,method:c,associativity:n}},xa={"+":ha("+",1,"left",2,(function(a,l){return a+l})),"-":ha("-",1,"left",2,(function(a,l){return a-l})),"*":ha("*",2,"left",2,(function(a,l){return a*l})),"/":ha("/",2,"left",2,(function(a,l){return a/l})),"^":ha("^",3,"right",2,B.a),"!":ha("!",4,"right",1,ra.a)},ya={sqrt:{params:1,method:na.a},ln:{params:1,method:F.a},abs:{params:1,method:T.a},inv:{params:1,method:V.a},sin:{params:1,method:J.a},cos:{params:1,method:D.a},tan:{params:1,method:M.a},exp:{params:1,method:X.a},log10:{params:1,method:ca.a},log2:{params:1,method:aa.a},choose:{params:2,method:ia.a},log:{params:2,method:Z.a}},wa={pi:pa.a,e:Na.a},Sa=P()(ya),Oa=P()(xa),$a=["sin","cos","tan"];function ja(a){return-1!==Oa.indexOf(a)}function Ra(a){return-1!==Sa.indexOf(a)}function Ha(a){return void 0!==wa[a]}function Ea(a,l){return!(!ja(a)||!ja(l))&&(l=xa[l],"left"===(a=xa[a]).associativity&&a.precedence<=l.precedence||"right"===a.associativity&&a.precedence<l.precedence)}var za,Aa,Pa,qa,Fa,Ia=function(a,l){if(a=function(a){for(var l=[],n=ba()(),t=0;t<a.length;t++){var c=a[t];if(Ha(c))l.push(String(wa[c]));else if(Ra(c))n.push(c);else if(ja(c)){for(var o=c,i=n.first();Ra(i)||Ea(o,i);)l.push(i),n.pop(),i=n.first();n.push(o)}else if("("===c)n.push(c);else if(")"===c){for(;"("!==n.first();){if(void 0===n.first())return z.c.t("Calculator:too-many-closing-parens");l.push(n.pop())}n.pop()}else if(ga.test(c))l.push(c);else if(" "!==c)return z.c.t("Calculator:malformed-expression")}for(;n.length;){var e=n.pop();if("("===e)return z.c.t("Calculator:too-many-opening-parens");l.push(e)}return l}(a),Object(fa.isPrimitive)(a))return a;for(var n=[],t=0,c=a.length;t<c;t++){var o=xa[a[t]]||ya[a[t]];if(o)if(l&&$a.includes(a[t])){var i=ua.a.apply(null,n.splice(-o.params)),e=o.method(i);e=va()(e,-15),n.push(e)}else n.push(o.method.apply(null,n.splice(-o.params)));else n.push(parseFloat(a[t]))}return n[0]},Ja=(n(391),u()("isle:calculator")),Ka=/([() +\-/*^!])/,Da=/[+\-/*^!]/,La=g()({tablet:!0}),Ba=function(a){var l,n,t;Ja("Rendering calculator...");var o=a.t,s=Object(e.useContext)(S.a),u=r.a.createRef(),d=Object(e.useState)("0"),p=i()(d,2),N=p[0],g=p[1],O=Object(e.useState)(!1),j=i()(O,2),H=j[0],z=j[1],A=Object(e.useState)(!1),P=i()(A,2),q=P[0],F=P[1],I=Object(e.useState)(0),J=i()(I,2),K=J[0],D=J[1],L=function(a){g(a.target.value)},B=function(){z(!H)},G=function(){"0"===N?D(0):g("0")},M=function(){1===N.length?g("0"):g(N.substring(0,N.length-1))},Q=function(a){return function(){if("0"===N)g(a);else{var l=u.current.selectionStart;g(N.substring(0,l)+a+N.substring(l))}u.current.focus()}},T=function(a){return function(){if("0"===N||K===N)g(a),u.current.focus();else{var l=u.current.selectionStart;g(N.substring(0,l)+a+N.substring(l)),l+=1,u.current.setSelectionRange(l,l),u.current.focus()}}},U=function(a){return function(){if("0"===N){g(a+"()");var l=N.length-1;u.current.setSelectionRange(l,l)}else if(Da.test(N)&&!R()(N,"-")){g(N+" "+a+"()");var n=N.length-1;u.current.setSelectionRange(n,n)}else{g(a+"("+N+")");var t=N.length;u.current.setSelectionRange(t,t)}u.current.focus()}},V=function(){s.addNotification({title:o("copied"),message:o("copied-message"),level:"success",position:"tr"})},W=function(l){"calculator-panel"!==l.target.id&&"calculator-panel-full"!==l.target.id||a.onHide()},X=function(){if(N){$()(N)&&D(N);var l=E()(N,/\) *\(/g,") * (");l=E()(l,/\) *([a-z0-9])/g,") * $1"),l=E()(l,/((?:\s|^)-?\d+|!)([a-z][^\d-]|\()/g,"$1 * $2"),l=E()(l,/([-\d.])e(-?\d+)/g,"$1 * 10^$2"),l=E()(l,/(^|[(*/:^!+]) *-([^+\-/*^!]+)/g,"$1 (0-$2) "),l=E()(l,/(^|[(*/:^!+]) *\+/g,"$1 "),s.log({id:a.id,type:w.c,value:l});var n=l.split(Ka);n=n.filter((function(a){return""!==a}));var t=String(Ia(n,q));g(t),D(t),u.current.focus()}},Y=function(a){13===a.charCode&&X()};return a.show?c()(h.a,{bounds:"#Lesson",cancel:"#calc-text-area",onEscape:W},void 0,H?c()(x.a,{id:"calculator-panel-full",tabIndex:0,role:"button",header:o("calculator"),onHide:a.onHide,minimizable:!0,style:a.style,className:a.className},void 0,c()(f.a,{className:"desaturated"},void 0,r.a.createElement(m.a,{autoFocus:!0,type:"text",id:"calc-text-area",value:String(N),onChange:L,ref:u,onKeyPress:Y,readOnly:La}),c()("p",{},void 0,o("answer")," = ",K),c()(k.a,{},void 0,c()(b.a,{},void 0,c()(k.a,{},void 0,c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("inv")},void 0,"x",za||(za=c()("sup",{},void 0,"-1"))),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("abs")},void 0,"|x|"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q(" choose ")},void 0,c()(y.a,{style:{color:"white"},raw:"\\tbinom{n}{k}"})),c()(v.a,{variant:"light",className:"calculator-btn-full",onClick:Q("(")},void 0,"("),c()(v.a,{variant:"light",className:"calculator-btn-full",onClick:Q(")")},void 0,")"),c()(C.a,{text:K},void 0,c()(v.a,{variant:"warning",className:"calculator-btn-full",onClick:V},void 0,o("copy"))),c()(v.a,{variant:"warning",className:"calculator-btn-full",onClick:B},void 0,o("basic"))),c()(k.a,{},void 0,c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("sin")},void 0,"sin(x)"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("exp")},void 0,"e",Aa||(Aa=c()("sup",{},void 0,"x"))),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("sqrt")},void 0,"\u221a"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("7")},void 0,"7"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("8")},void 0,"8"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("9")},void 0,"9"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("/")},void 0,"\xf7")),c()(k.a,{},void 0,c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("cos")},void 0,"cos(x)"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("ln")},void 0,"ln(x)"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("^(1/")},void 0,c()(y.a,{style:{color:"white"},raw:"\\sqrt[n]{}"})),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("4")},void 0,"4"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("5")},void 0,"5"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("6")},void 0,"6"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("*")},void 0,"\xd7")),c()(k.a,{},void 0,c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("tan")},void 0,"tan(x)"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:U("log10")},void 0,"log",Pa||(Pa=c()("sub",{},void 0,"10")),"(x)"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("^")},void 0,"x",qa||(qa=c()("sup",{},void 0,"y"))),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("1")},void 0,"1"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("2")},void 0,"2"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("3")},void 0,"3"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("-")},void 0,"-")),c()(k.a,{},void 0,c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("pi")},void 0,"\u03c0"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q(" log ")},void 0,"log",Fa||(Fa=c()("sub",{},void 0,"b")),"(x)"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("!")},void 0,"x!"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T(String(K))},void 0,"Ans"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:T("0")},void 0,"0"),c()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:Q(".")},void 0,"."),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("+")},void 0,"+")),c()(k.a,{},void 0,c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:function(){F(!q)}},void 0,q?"Deg":"Rad"),c()(v.a,{variant:"info",className:"calculator-btn-full",onClick:Q("e")},void 0,"e"),l||(l=c()(v.a,{variant:"danger",className:"calculator-btn-full",onClick:M},void 0,"CE")),n||(n=c()(v.a,{variant:"danger",className:"calculator-btn-full",onClick:G},void 0,"AC")),t||(t=c()(v.a,{variant:"success",className:"solve-button",onClick:X},void 0,"="))))))):c()(x.a,{id:"calculator-panel",tabIndex:0,role:"button",header:o("calculator"),onHide:a.onHide,style:a.style,className:a.className,minimizable:!0},void 0,c()(f.a,{className:"desaturated"},void 0,r.a.createElement(m.a,{autoFocus:!0,type:"text",id:"calc-text-area",value:String(N),onChange:L,ref:u,onKeyPress:Y,readOnly:La}),c()("p",{},void 0,o("answer")," = ",K),c()(k.a,{},void 0,c()(b.a,{},void 0,c()(k.a,{},void 0,c()(v.a,{variant:"light",className:"calculator-btn-small",onClick:Q("(")},void 0,"("),c()(v.a,{variant:"light",className:"calculator-btn-small",onClick:Q(")")},void 0,")"),c()(C.a,{text:K},void 0,c()(v.a,{variant:"warning",className:"calculator-btn-small",onClick:V},void 0,o("copy"))),c()(v.a,{variant:"warning",disabled:!a.expandable,className:"calculator-btn-small",onClick:B},void 0,o("expand"))),c()(k.a,{},void 0,c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("7")},void 0,"7"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("8")},void 0,"8"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("9")},void 0,"9"),c()(v.a,{variant:"info",className:"calculator-btn-small",onClick:Q("/")},void 0,"\xf7")),c()(k.a,{},void 0,c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("4")},void 0,"4"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("5")},void 0,"5"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("6")},void 0,"6"),c()(v.a,{variant:"info",className:"calculator-btn-small",onClick:Q("*")},void 0,"\xd7")),c()(k.a,{},void 0,c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("1")},void 0,"1"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("2")},void 0,"2"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("3")},void 0,"3"),c()(v.a,{variant:"info",className:"calculator-btn-small",onClick:Q("-")},void 0,"-")),c()(k.a,{},void 0,c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T(String(K))},void 0,"Ans"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:T("0")},void 0,"0"),c()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:Q(".")},void 0,"."),c()(v.a,{variant:"info",className:"calculator-btn-small",onClick:Q("+")},void 0,"+")),c()(k.a,{},void 0,c()(v.a,{variant:"danger",className:"calculator-btn-small",onClick:M},void 0,"CE"),c()(v.a,{variant:"danger",className:"calculator-btn-small",onClick:G},void 0,"AC"),c()(v.a,{variant:"success",className:"calculator-half-btn",onClick:X},void 0,"="))))))):null};Ba.defaultProps={expandable:!0,show:!0,className:"",style:{},onHide:null};l.default=Object(d.a)("Calculator")(Ba)}}]);