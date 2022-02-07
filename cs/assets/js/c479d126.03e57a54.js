"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6972],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83759:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),o=["components"],s={id:"jitsi",title:"Jitsi",sidebar_label:"Jitsi"},l=void 0,p={unversionedId:"server/jitsi",id:"server/jitsi",title:"Jitsi",description:"Setting up Jitsi (optional)",source:"@site/docs/server/jitsi.md",sourceDirName:"server",slug:"/server/jitsi",permalink:"/cs/docs/server/jitsi",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/server/jitsi.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1585877412,formattedLastUpdatedAt:"2. 4. 2020",frontMatter:{id:"jitsi",title:"Jitsi",sidebar_label:"Jitsi"},sidebar:"docs",previous:{title:"Installation Guide",permalink:"/cs/docs/server/installation"}},c=[{value:"Setting up Jitsi (optional)",id:"setting-up-jitsi-optional",children:[],level:2},{value:"Jibri for Jitsi Recordings + Live Streaming (optional)",id:"jibri-for-jitsi-recordings--live-streaming-optional",children:[],level:2},{value:"Setting up Jigasi with Asterisk/FreePBX for Dial-in &amp; Dial-Out (optional)",id:"setting-up-jigasi-with-asteriskfreepbx-for-dial-in--dial-out-optional",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setting-up-jitsi-optional"},"Setting up Jitsi (optional)"),(0,r.kt)("p",null,"To enable the video conference capabilities in ISLE, which are powered by ",(0,r.kt)("a",{parentName:"p",href:"https://jitsi.org/"},"Jitsi"),", you need to connect to a specified Jitsi server. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To setup a new Jitsi server, follow the instructions in their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/quick-install.md"},"Quick Install guide"),". As of March 2020, installing Jitsi on Ubuntu 16.04 should work out of the box when following these instructions; other distributions or newer Ubuntu versions yield installation issues that have to be manually resolved.",(0,r.kt)("a",{parentName:"p",href:"https://github.com/isle-project/isle-server/wiki/_new"},"https://github.com/isle-project/isle-server/wiki/_new"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"prosody"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://packages.prosody.im/debian/pool/main/p/prosody-trunk/prosody-trunk_1nightly747-1~xenial_amd64.deb\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dpkg -i prosody-trunk_1nightly747-1~xenial_amd64.deb\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"jitsi-meet-tokens")," via command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install jitsi-meet-tokens\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the Prosody configuration to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md"},"JSON web tokens")," for authentication. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure that the Prosody ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"app_secret")," match corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"appSecret")," fields in the ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials/jitsi.json")," file of the cloned isle-server repository. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials/jitsi.json")," should be set to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/quick-install.md#set-up-the-fully-qualified-domain-name-fqdn-optional"},"FQDN")," of the Jitsi Meet instance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To change the default appearance of Jitsi meet, the ",(0,r.kt)("inlineCode",{parentName:"p"},"interface_config.js")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/jitsi-meet")," should be updated. Refer to the version of the file inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"etc/jitsi-meet")," folder of this repository for the Jitsi interface configuration used in ISLE."))),(0,r.kt)("h2",{id:"jibri-for-jitsi-recordings--live-streaming-optional"},"Jibri for Jitsi Recordings + Live Streaming (optional)"),(0,r.kt)("p",null,"The following video tutorial describes the steps involved in setting up one or more ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jibri"},"Jibri")," instances on other servers for recording Jitsi Meet sessions in ISLE:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jitsi.org/news/learn-how-to-live-stream-and-record-on-your-jitsi-meet-install/"},"https://jitsi.org/news/learn-how-to-live-stream-and-record-on-your-jitsi-meet-install/")),(0,r.kt)("p",null,"Newer versions of Chrome require an additional step. From the Jibri README.md file:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Add chrome managed policies file and set CommandLineFlagSecurityWarningsEnabled to false. It will hide warnings in Chrome. You can set it like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/opt/chrome/policies/managed\necho '{ \"CommandLineFlagSecurityWarningsEnabled\": false }' >>/etc/opt/chrome/policies/managed/managed_policies.json\n")),(0,r.kt)("p",null,"Troubleshooting: In case of Java errors encountered the logs in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/jitsi/jibri"),", it is advised to ",(0,r.kt)("a",{parentName:"p",href:"https://tecadmin.net/install-oracle-java-8-ubuntu-via-ppa/"},"install Java 8"),". "),(0,r.kt)("p",null,"To set it as the default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-java-alternatives --list\nsudo update-java-alternatives --set java-1.8.0-openjdk-amd64\n")),(0,r.kt)("h2",{id:"setting-up-jigasi-with-asteriskfreepbx-for-dial-in--dial-out-optional"},"Setting up Jigasi with Asterisk/FreePBX for Dial-in & Dial-Out (optional)"),(0,r.kt)("p",null,"If you need the ability for participants to dial into ongoing video calls via their phone or to invite attendees via phone, Jigasi in conjunction with a SIP (session initiation protocol) Provider may be used. Asterisk and FreePBX, a GUI sitting on top of it, constitute a good option."),(0,r.kt)("p",null,'The following series of tutorials called "Transparent Telephony" by Randall Degges provide a great overview of VOIP, how to setup Asterisk + FreePBX, and further background material:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.rdegges.com/2009/transparent-telephony-part-1-an-introduction/"},"An Introduction")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.rdegges.com/2010/transparent-telephony-part-2-installing-asterisk/"},"Installing Asterisk")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.rdegges.com/2010/transparent-telephony-part-3-making-and-receiving-calls-using-voip/"},"Making and Receiving Calls Using VoIP"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"net.java.sip.communicator.impl.protocol.sip.acc1403273890647.ACCOUNT_UID=SIP\\:<extension_id>@<host>:5060\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.PASSWORD=<base64_encoded_secret}\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.PROTOCOL_NAME=SIP\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.SERVER_ADDRESS=<host>\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.USER_ID=<extension_id>@<host>\n")),(0,r.kt)("p",null,"We write the code for our extension to the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/asterisk/extensions_override_freepbx.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[ext-local]exten => 9999,1,Set(__RINGTIMER=${IF($["${DB(AMPUSER/9999/ringtimer)}" > "0"]?\n${DB(AMPUSER/9999/ringtimer)}:${RINGTIMER_DEFAULT})})\nexten => 9999,2(getmeeting),Playback(conf-getconfno)\nexten => 9999,3,Read(Pin,beep,20)\nexten => 9999,4,Verbose(result is: ${Pin})\nexten => 9999,5,SayDigits(${Pin},m)\nexten => 9999,6,AGI(jitsi_curling.sh,${Pin})\nexten => 9999,7,Verbose(result is: ${JITSI})\nexten => 9999,8,GotoIf($["${JITSI}" = "false}"]?invalidnum:joinmeeting)\nexten => 9999,9(invalidnum),Playback(conf-invalid)\nexten => 9999,10,Goto(getmeeting)\nexten => 9999,11(joinmeeting),Set(HASH(__SIPHEADERS,Jitsi-Conference-Room)=${JITSI})\nexten => 9999,12,Playback(auth-thankyou)\nexten => 9999,13,playback(conf-placeintoconf)\nexten => 9999,14,SayAlpha(${JITSI})\nexten => 9999,15,Macro(exten-vm,novm,9999,0,0,0)\nexten => 9999,16(dest),Set(__PICKUPMARK=)\nexten => 9999,17,Goto(${IVR_CONTEXT},return,1)\n')))}d.isMDXComponent=!0}}]);