(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{6523:function(a,l,n){"use strict";n.r(l);var t=n(404),o=n.n(t),c=(n(679),n(457)),i=n.n(c),e=n(0),r=n.n(e),s=(n(402),n(451)),u=n.n(s),d=n(4088),v=n(431),f=n(483),m=n(734),b=n(508),k=n(467),p=n(1519),C=n.n(p),N=n(2786),g=n.n(N),h=n(853),x=n(570),y=n(514),w=n(471),S=n(465),O=n(2663),$=n.n(O),j=n(1109),R=n.n(j),H=n(595),E=n.n(H),z=(n(722),n(423)),A=n(493),P=n.n(A),q=n(453),F=n.n(q),I=n(866),J=n.n(I),K=n(920),D=n.n(K),L=n(447),B=n.n(L),G=n(6297),M=n.n(G),Q=n(433),T=n.n(Q),U=n(6303),V=n.n(U),W=n(452),X=n.n(W),Y=n(6305),Z=n.n(Y),_=n(6307),aa=n.n(_),la=n(434),na=n.n(la),ta=n(6312),oa=n.n(ta),ca=n(1623),ia=n.n(ca),ea=n(1244),ra=n.n(ea),sa=n(6317),ua=n.n(sa),da=n(489),va=n.n(da),fa=n(442),ma=n(6319),ba=n.n(ma),ka=n(628),pa=n.n(ka),Ca=n(738),Na=n.n(Ca),ga=/\d/,ha=function(a,l,n,t,o){return{name:a,precedence:l,params:t,method:o,associativity:n}},xa={"+":ha("+",1,"left",2,(function(a,l){return a+l})),"-":ha("-",1,"left",2,(function(a,l){return a-l})),"*":ha("*",2,"left",2,(function(a,l){return a*l})),"/":ha("/",2,"left",2,(function(a,l){return a/l})),"^":ha("^",3,"right",2,B.a),"!":ha("!",4,"right",1,ra.a)},ya={sqrt:{params:1,method:na.a},ln:{params:1,method:F.a},abs:{params:1,method:T.a},inv:{params:1,method:V.a},sin:{params:1,method:J.a},cos:{params:1,method:D.a},tan:{params:1,method:M.a},exp:{params:1,method:X.a},log10:{params:1,method:oa.a},log2:{params:1,method:aa.a},choose:{params:2,method:ia.a},log:{params:2,method:Z.a}},wa={pi:pa.a,e:Na.a},Sa=P()(ya),Oa=P()(xa),$a=["sin","cos","tan"];function ja(a){return-1!==Oa.indexOf(a)}function Ra(a){return-1!==Sa.indexOf(a)}function Ha(a){return void 0!==wa[a]}function Ea(a,l){return!(!ja(a)||!ja(l))&&(l=xa[l],"left"===(a=xa[a]).associativity&&a.precedence<=l.precedence||"right"===a.associativity&&a.precedence<l.precedence)}var za=function(a,l){if(a=function(a){for(var l=[],n=ba()(),t=0;t<a.length;t++){var o=a[t];if(Ha(o))l.push(String(wa[o]));else if(Ra(o))n.push(o);else if(ja(o)){for(var c=o,i=n.first();Ra(i)||Ea(c,i);)l.push(i),n.pop(),i=n.first();n.push(c)}else if("("===o)n.push(o);else if(")"===o){for(;"("!==n.first();){if(void 0===n.first())return z.c.t("Calculator:too-many-closing-parens");l.push(n.pop())}n.pop()}else if(ga.test(o))l.push(o);else if(" "!==o)return z.c.t("Calculator:malformed-expression")}for(;n.length;){var e=n.pop();if("("===e)return z.c.t("Calculator:too-many-opening-parens");l.push(e)}return l}(a),Object(fa.isPrimitive)(a))return a;for(var n=[],t=0,o=a.length;t<o;t++){var c=xa[a[t]]||ya[a[t]];if(c)if(l&&$a.includes(a[t])){var i=ua.a.apply(null,n.splice(-c.params)),e=c.method(i);e=va()(e,-15),n.push(e)}else n.push(c.method.apply(null,n.splice(-c.params)));else n.push(parseFloat(a[t]))}return n[0]},Aa=(n(389),u()("isle:calculator")),Pa=/([() +\-/*^!])/,qa=/[+\-/*^!]/,Fa=g()({tablet:!0}),Ia=o()("sup",{},void 0,"-1"),Ja=o()("sup",{},void 0,"x"),Ka=o()("sub",{},void 0,"10"),Da=o()("sup",{},void 0,"y"),La=o()("sub",{},void 0,"b"),Ba=function(a){Aa("Rendering calculator...");var l=a.t,n=Object(e.useContext)(S.a),t=r.a.createRef(),c=Object(e.useState)("0"),s=i()(c,2),u=s[0],d=s[1],p=Object(e.useState)(!1),N=i()(p,2),g=N[0],O=N[1],j=Object(e.useState)(!1),H=i()(j,2),z=H[0],A=H[1],P=Object(e.useState)(0),q=i()(P,2),F=q[0],I=q[1],J=function(a){d(a.target.value)},K=function(){O(!g)},D=function(){"0"===u?I(0):d("0")},L=function(){1===u.length?d("0"):d(u.substring(0,u.length-1))},B=function(a){return function(){if("0"===u)d(a);else{var l=t.current.selectionStart;d(u.substring(0,l)+a+u.substring(l))}t.current.focus()}},G=function(a){return function(){if("0"===u||F===u)d(a),t.current.focus();else{var l=t.current.selectionStart;d(u.substring(0,l)+a+u.substring(l)),l+=1,t.current.setSelectionRange(l,l),t.current.focus()}}},M=function(a){return function(){if("0"===u){d(a+"()");var l=u.length-1;t.current.setSelectionRange(l,l)}else if(qa.test(u)&&!R()(u,"-")){d(u+" "+a+"()");var n=u.length-1;t.current.setSelectionRange(n,n)}else{d(a+"("+u+")");var o=u.length;t.current.setSelectionRange(o,o)}t.current.focus()}},Q=function(){n.addNotification({title:l("copied"),message:l("copied-message"),level:"success",position:"tr"})},T=function(l){"calculator-panel"!==l.target.id&&"calculator-panel-full"!==l.target.id||a.onHide()},U=function(){if(u){$()(u)&&I(u);var l=E()(u,/\) *\(/g,") * (");l=E()(l,/\) *([a-z0-9])/g,") * $1"),l=E()(l,/((?:\s|^)-?\d+|!)([a-z][^\d-]|\()/g,"$1 * $2"),l=E()(l,/([-\d.])e(-?\d+)/g,"$1 * 10^$2"),l=E()(l,/(^|[(*/:^!+]) *-([^+\-/*^!]+)/g,"$1 (0-$2) "),l=E()(l,/(^|[(*/:^!+]) *\+/g,"$1 "),n.log({id:a.id,type:w.a,value:l});var o=l.split(Pa);o=o.filter((function(a){return""!==a}));var c=String(za(o,z));d(c),I(c),t.current.focus()}},V=function(a){13===a.charCode&&U()};return a.show?o()(h.a,{bounds:"#Lesson",cancel:"#calc-text-area",onEscape:T},void 0,g?o()(x.a,{id:"calculator-panel-full",tabIndex:0,role:"button",header:l("calculator"),onHide:a.onHide,minimizable:!0,style:a.style,className:a.className},void 0,o()(f.a,{className:"desaturated"},void 0,r.a.createElement(m.a,{autoFocus:!0,type:"text",id:"calc-text-area",value:String(u),onChange:J,ref:t,onKeyPress:V,readOnly:Fa}),o()("p",{},void 0,l("answer")," = ",F),o()(k.a,{},void 0,o()(b.a,{},void 0,o()(k.a,{},void 0,o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("inv")},void 0,"x",Ia),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("abs")},void 0,"|x|"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B(" choose ")},void 0,o()(y.a,{style:{color:"white"},raw:"\\tbinom{n}{k}"})),o()(v.a,{variant:"light",className:"calculator-btn-full",onClick:B("(")},void 0,"("),o()(v.a,{variant:"light",className:"calculator-btn-full",onClick:B(")")},void 0,")"),o()(C.a,{text:F},void 0,o()(v.a,{variant:"warning",className:"calculator-btn-full",onClick:Q},void 0,l("copy"))),o()(v.a,{variant:"warning",className:"calculator-btn-full",onClick:K},void 0,l("basic"))),o()(k.a,{},void 0,o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("sin")},void 0,"sin(x)"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("exp")},void 0,"e",Ja),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("sqrt")},void 0,"\u221a"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("7")},void 0,"7"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("8")},void 0,"8"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("9")},void 0,"9"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("/")},void 0,"\xf7")),o()(k.a,{},void 0,o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("cos")},void 0,"cos(x)"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("ln")},void 0,"ln(x)"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("^(1/")},void 0,o()(y.a,{style:{color:"white"},raw:"\\sqrt[n]{}"})),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("4")},void 0,"4"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("5")},void 0,"5"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("6")},void 0,"6"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("*")},void 0,"\xd7")),o()(k.a,{},void 0,o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("tan")},void 0,"tan(x)"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:M("log10")},void 0,"log",Ka,"(x)"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("^")},void 0,"x",Da),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("1")},void 0,"1"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("2")},void 0,"2"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("3")},void 0,"3"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("-")},void 0,"-")),o()(k.a,{},void 0,o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("pi")},void 0,"\u03c0"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B(" log ")},void 0,"log",La,"(x)"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("!")},void 0,"x!"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G(String(F))},void 0,"Ans"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:G("0")},void 0,"0"),o()(v.a,{variant:"dark",className:"calculator-btn-full",onClick:B(".")},void 0,"."),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("+")},void 0,"+")),o()(k.a,{},void 0,o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:function(){A(!z)}},void 0,z?"Deg":"Rad"),o()(v.a,{variant:"info",className:"calculator-btn-full",onClick:B("e")},void 0,"e"),o()(v.a,{variant:"danger",className:"calculator-btn-full",onClick:L},void 0,"CE"),o()(v.a,{variant:"danger",className:"calculator-btn-full",onClick:D},void 0,"AC"),o()(v.a,{variant:"success",className:"solve-button",onClick:U},void 0,"=")))))):o()(x.a,{id:"calculator-panel",tabIndex:0,role:"button",header:l("calculator"),onHide:a.onHide,style:a.style,className:a.className,minimizable:!0},void 0,o()(f.a,{className:"desaturated"},void 0,r.a.createElement(m.a,{autoFocus:!0,type:"text",id:"calc-text-area",value:String(u),onChange:J,ref:t,onKeyPress:V,readOnly:Fa}),o()("p",{},void 0,l("answer")," = ",F),o()(k.a,{},void 0,o()(b.a,{},void 0,o()(k.a,{},void 0,o()(v.a,{variant:"light",className:"calculator-btn-small",onClick:B("(")},void 0,"("),o()(v.a,{variant:"light",className:"calculator-btn-small",onClick:B(")")},void 0,")"),o()(C.a,{text:F},void 0,o()(v.a,{variant:"warning",className:"calculator-btn-small",onClick:Q},void 0,l("copy"))),o()(v.a,{variant:"warning",disabled:!a.expandable,className:"calculator-btn-small",onClick:K},void 0,l("expand"))),o()(k.a,{},void 0,o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("7")},void 0,"7"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("8")},void 0,"8"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("9")},void 0,"9"),o()(v.a,{variant:"info",className:"calculator-btn-small",onClick:B("/")},void 0,"\xf7")),o()(k.a,{},void 0,o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("4")},void 0,"4"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("5")},void 0,"5"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("6")},void 0,"6"),o()(v.a,{variant:"info",className:"calculator-btn-small",onClick:B("*")},void 0,"\xd7")),o()(k.a,{},void 0,o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("1")},void 0,"1"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("2")},void 0,"2"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("3")},void 0,"3"),o()(v.a,{variant:"info",className:"calculator-btn-small",onClick:B("-")},void 0,"-")),o()(k.a,{},void 0,o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G(String(F))},void 0,"Ans"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:G("0")},void 0,"0"),o()(v.a,{variant:"dark",className:"calculator-btn-small",onClick:B(".")},void 0,"."),o()(v.a,{variant:"info",className:"calculator-btn-small",onClick:B("+")},void 0,"+")),o()(k.a,{},void 0,o()(v.a,{variant:"danger",className:"calculator-btn-small",onClick:L},void 0,"CE"),o()(v.a,{variant:"danger",className:"calculator-btn-small",onClick:D},void 0,"AC"),o()(v.a,{variant:"success",className:"calculator-half-btn",onClick:U},void 0,"="))))))):null};Ba.defaultProps={expandable:!0,show:!0,className:"",style:{},onHide:null};l.default=Object(d.a)("Calculator")(Ba)}}]);