(window.webpackJsonp=window.webpackJsonp||[]).push([[1243,135],{1147:function(e,t,o){"use strict";var a=o(821),i=o.n(a),r=o(921),s=o.n(r),n=o(922),l=o.n(n),d=(o(428),o(0)),c=o.n(d),m=o(1027),v=o.n(m),u=o(652),g=o(15),b=o(774),f=o(58),p=o.n(f);function h(e){var t=e.to,o=e.href,a=e.label,i=l()(e,["to","href","label"]),r=Object(b.a)(t);return c.a.createElement(u.a,s()({className:"footer__link-item"},o?{target:"_blank",rel:"noopener noreferrer",href:o}:{to:r},i),a)}var N=function(e){var t=e.url,o=e.alt;return i()("img",{className:"footer__logo",alt:o,src:t})};t.a=function(){var e=Object(g.default)().siteConfig,t=(void 0===e?{}:e).themeConfig,o=(void 0===t?{}:t).footer,a=o||{},r=a.copyright,s=a.links,n=void 0===s?[]:s,l=a.logo,d=void 0===l?{}:l,m=Object(b.a)(d.src);return o?i()("footer",{className:v()("footer",{"footer--dark":"dark"===o.style})},void 0,i()("div",{className:"container"},void 0,n&&n.length>0&&i()("div",{className:"row footer__links"},void 0,n.map((function(e,t){return i()("div",{className:"col footer__col"},t,null!==e.title?i()("h4",{className:"footer__title"},void 0,e.title):null,null!==e.items&&Array.isArray(e.items)&&e.items.length>0?i()("ul",{className:"footer__items"},void 0,e.items.map((function(e,t){return e.html?i()("li",{className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}},t):i()("li",{className:"footer__item"},e.href||e.to,c.a.createElement(h,e))}))):null)}))),(d||r)&&i()("div",{className:"text--center"},void 0,d&&d.src&&i()("div",{className:"margin-bottom--sm"},void 0,d.href?i()("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:p.a.footerLogoLink},void 0,i()(N,{alt:d.alt,url:m})):i()(N,{alt:d.alt,url:m})),i()("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},268:function(e,t,o){"use strict";o.r(t),function(e){var a,i,r=o(821),s=o.n(r),n=(o(428),o(0)),l=o.n(n),d=o(1027),c=o.n(d),m=o(613),v=o(1141),u=o(652),g=o(15),b=o(774),f=o(269),p=o.n(f);e.Buffer=e.Buffer||o(1219).Buffer,"undefined"==typeof window&&(e.window={}),void 0===e.localStorage&&(e.localStorage=null);var h=[{title:l.a.createElement(l.a.Fragment,null,Object(m.b)({id:"overview.isle-editor",message:"ISLE Editor",description:"ISLE Editor"})),imageUrl:"img/undraw_editor.svg",description:l.a.createElement(l.a.Fragment,null,Object(m.b)({id:"overview.isle-editor-into",message:"Use the ISLE editor to create new ISLE lessons, ranging from interactive lectures to lab activities or homework assignments.",description:"Introduction of ISLE editor for creating lessons."}))},{title:l.a.createElement(l.a.Fragment,null,Object(m.b)({id:"overview.isle-dashboard",message:"ISLE Dashboard",description:"ISLE Dashboard"})),imageUrl:"img/undraw_dashboard.svg",description:l.a.createElement(l.a.Fragment,null,Object(m.b)({id:"overview.isle-dashboard-intro",message:"Use the ISLE dashboard to manage your course, administer lessons, and monitor student progress.",description:"Introduction of ISLE dashboard for course management."}))},{title:l.a.createElement(l.a.Fragment,null,Object(m.b)({id:"overview.isle-server",message:"ISLE Server",description:"ISLE Server"})),imageUrl:"img/undraw_server.svg",description:l.a.createElement(l.a.Fragment,null,Object(m.b)({id:"overview.isle-server-intro",message:"Host an ISLE server instance for user management and data collection or deploy to an existing server.",description:"Introduction of ISLE backend server."}))}],N=function(e){var t=e.title,o=e.imageUrl,a=Object(b.a)(o);return o?s()("div",{className:"text--center"},void 0,s()("img",{className:p.a.featureImage,src:a,alt:t})):null};t.default=function(){var e=Object(g.default)().siteConfig,t=void 0===e?{}:e;return s()(v.a,{title:t.title,description:t.tagline},void 0,s()("header",{className:c()("hero hero--primary",p.a.heroBanner)},void 0,s()("div",{className:"container"},void 0,s()("h1",{className:"hero__title"},void 0,t.title),s()("p",{className:"hero__subtitle"},void 0,t.tagline),s()("div",{className:p.a.buttons},void 0,s()(u.a,{className:c()("button button--secondary button--lg",p.a.getStarted),to:Object(b.a)("docs/overview/intro")},void 0,Object(m.b)({id:"overview.get-started",message:"Get Started",description:"Label for how to get started."}))))),s()("main",{},void 0,s()("div",{className:"container"},void 0,s()("div",{className:"row"},void 0,s()("div",{className:"col col--8 col--offset-2 padding-vert--lg"},void 0,s()("p",{dangerouslySetInnerHTML:{__html:Object(m.b)({id:"overview.welcome",message:"Welcome to the documentation of the <i>interactive statistics learning environment (ISLE)</i> and the ISLE Editor for authoring interactive lessons for statistics and related disciplines. One of our aims is to encourage instructors at universities and other learning institutions to use it for their purposes. For questions, please contact us via email at pgb AT andrew.cmu.edu.",description:"Welcome message at beginning of documentation"})}})))),s()("div",{className:"container"},void 0,s()("div",{className:"row"},void 0,s()("div",{className:"col col--4 padding-vert--lg"},void 0,s()("div",{className:"text--center"},void 0,s()("img",{className:p.a.featureImage,src:Object(b.a)("img/undraw_youtube_tutorial.svg"),alt:"Video Tutorials"})),s()("h3",{},void 0,Object(m.b)({id:"video-tutorials",message:"Video Tutorials",description:"Video Tutorials"})),a||(a=s()("p",{},void 0,s()(m.a,{},void 0,"A selection of video tutorials help you get started and see how ISLE may be incorporated into your classroom."))),s()("div",{className:"text--center"},void 0,s()(u.a,{className:"button button--primary button--lg",to:Object(b.a)("video_tutorials")},void 0,Object(m.b)({id:"open-link",message:"Open",description:"Label for button to open link."})))),s()("div",{className:"col col--4 padding-vert--lg"},void 0,s()("div",{className:"text--center"},void 0,s()("img",{className:p.a.featureImage,src:Object(b.a)("img/undraw_features_overview.svg"),alt:"Video Tutorials"})),s()("h3",{},void 0,Object(m.b)({id:"overview.project-website",message:"Project Website",description:"Project Website"})),i||(i=s()("p",{},void 0,s()(m.a,{},void 0,"Information on the features of ISLE and related research projects informing its development are available on the project website."))),s()("div",{className:"text--center"},void 0,s()(u.a,{className:"button button--primary button--lg",to:"http://stat.cmu.edu/isle"},void 0,Object(m.b)({id:"open-link",message:"Open",description:"Label for button to open link."})))),s()("div",{className:"col col--4 padding-vert--lg"},void 0,s()("div",{className:"text--center"},void 0,s()("img",{className:p.a.featureImage,src:Object(b.a)("img/undraw_faq.svg"),alt:"Video Tutorials"})),s()("h3",{},void 0,Object(m.b)({id:"overview.faq",message:"FAQ",description:"Frequently Asked Questions"})),s()("p",{},void 0,Object(m.b)({id:"overview.faq-intro",message:"Answers to common questions on how to leverage ISLE for your class are collected in our FAQ.",description:"Introductory paragraph for FAQ section."})),s()("div",{className:"text--center"},void 0,s()(u.a,{className:"button button--primary button--lg",to:"http://stat.cmu.edu/isle/faq.html"},void 0,Object(m.b)({id:"open-link",message:"Open",description:"Label for button to open link."}))))),h&&h.length&&s()("section",{className:p.a.features},void 0,s()("div",{className:"container"},void 0,s()("div",{className:"row"},void 0,h.map((function(e,t){var o=e.imageUrl,a=e.title,i=e.description;return s()("div",{className:c()("col col--4",p.a.feature)},t,s()(N,{imageUrl:o,title:a}),s()("h3",{},void 0,a),s()("p",{},void 0,i))}))))))))}}.call(this,o(22))}}]);