/*! For license information please see dll.211.js.LICENSE.txt */
(window.webpackJsonp_name_dll=window.webpackJsonp_name_dll||[]).push([[211],{3517:function(e,a,n){"use strict";n.r(a);var t=n(203),l=n.n(t),o=n(1125),c=n.n(o),r=n(1126),u=n.n(r),s=n(0),i=n.n(s),d=n(958),g=n(2300),f=n(991),h=n(215),m=n(76),E=n(1004),p=(n(3518),n(3520),function(e){if(!e.show)return null;var a=function(a){return u()(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.onHide(),n.next=3,d.default.changeLanguage(a);case 3:case"end":return n.stop()}}),n)})))},n=e.t;return i.a.createElement(E.default,{show:!0,onHide:e.onHide},i.a.createElement(E.default.Header,{closeButton:!0},i.a.createElement(E.default.Title,{as:"h3"},n("choose-language"))),i.a.createElement(E.default.Body,null,i.a.createElement(m.default,{block:!0,onClick:a("en")},"English - EN"),i.a.createElement(m.default,{block:!0,onClick:a("es")},"Español - ES"),i.a.createElement(m.default,{block:!0,onClick:a("de")},"Deutsch - DE")))});a.default=Object(g.withTranslation)()((function(e){var a=Object(s.useState)(!1),n=l()(a,2),t=n[0],o=n[1],c=function(){o(!t)},r=e.t;return i.a.createElement(s.Fragment,null,i.a.createElement(f.default,{placement:"left",overlay:i.a.createElement(h.default,{id:"language-switcher"},r("change-language"))},i.a.createElement("button",{onClick:c,className:"language-switcher","aria-label":r("choose-language")},i.a.createElement("i",{className:"fas fa-globe"}))),i.a.createElement(p,{show:t,onHide:c,t:r}))}))},3518:function(e,a,n){"use strict";n.r(a);var t=n(22),l=n.n(t),o=n(3519),c={insert:"head",singleton:!1};l()(o.default,c);a.default=o.default.locals||{}},3519:function(e,a,n){"use strict";n.r(a);var t=n(23),l=n.n(t)()(!1);l.push([e.i,".language-switcher {\n\tposition: fixed;\n\tbottom: 6px;\n\tright: 6px;\n\tfont-size: 18px;\n\tcolor: #c95d0a;\n\tborder: none;\n\tbackground: none;\n\tcursor: pointer;\n\ttransform: scale(1);\n}\n\n.language-switcher:hover {\n\ttransform: scale(1.2);\n}\n",""]),a.default=l},3520:function(e,a,n){"use strict";n.r(a);var t=n(958),l=n(3521);t.default.addResources("de","components",l.DE),t.default.addResources("en","components",l.EN),t.default.addResources("es","components",l.ES)},3521:function(e){e.exports=JSON.parse('{"DE":{"change-language":"Sprache wechseln","choose-language":"Sprache auswählen"},"EN":{"change-language":"Change language","choose-language":"Choose language"},"ES":{"change-language":"Cambiar Idioma","choose-language":"Elegir Idioma"}}')}}]);