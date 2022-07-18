"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83066],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},613099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return k}});var a=n(603905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"installation",title:"Server Installation Guide",sidebar_label:"Installation Guide"},m="Setting up the Server",h={unversionedId:"server/installation",id:"server/installation",title:"Server Installation Guide",description:"This tutorial will walk you through the steps to set up an instance of the ISLE server program to serve your students.",source:"@site/docs/server/installation.md",sourceDirName:"server",slug:"/server/installation",permalink:"/de/docs/server/installation",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/server/installation.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1599766296,formattedLastUpdatedAt:"10. Sept. 2020",frontMatter:{id:"installation",title:"Server Installation Guide",sidebar_label:"Installation Guide"},sidebar:"docs",previous:{title:"Continuous Uniform Distribution",permalink:"/de/docs/learn/distribution-uniform"},next:{title:"Jitsi",permalink:"/de/docs/server/jitsi"}},g={},k=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Node.js",id:"installing-nodejs",level:3},{value:"Installing MongoDB",id:"installing-mongodb",level:3},{value:"Installing git",id:"installing-git",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Setting up nginx",id:"setting-up-nginx",level:2},{value:"Serving Compressed Files",id:"serving-compressed-files",level:2},{value:"Start the ISLE server program",id:"start-the-isle-server-program",level:2},{value:"Automatically restart on reboot",id:"automatically-restart-on-reboot",level:2}],f={toc:k};function v(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},f),u),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"setting-up-the-server"}),"Setting up the Server"),(0,a.kt)("p",null,"This tutorial will walk you through the steps to set up an instance of the ISLE server program to serve your students. "),(0,a.kt)("h2",c({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"Running the server requires the following software tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"http://git-scm.com/"}),"git"),": version control"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),": JavaScript runtime (version ",(0,a.kt)("inlineCode",{parentName:"li"},">= 10.0"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://mongodb.com"}),"MongoDB"),": NoSQL document database")),(0,a.kt)("p",null,"The ISLE server should run on a POSIX-based system (preferably a Linux distribution). For this guide, we assume that you are on the latest Ubuntu LTS release. The steps will be similar for other distributions (e.g., Debian or CentOS), but might need to be slightly adapted."),(0,a.kt)("h3",c({},{id:"installing-nodejs"}),"Installing Node.js"),(0,a.kt)("p",null,"We will use ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," (\u201cNode.js Version Manager\u201d) to install Node.js, the JavaScript runtime used by the ISLE server. ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," allows you to install the newest versions of Node.js (which are not currently available through ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),") and manage multiple installations at once. Following the official ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/nvm-sh/nvm#installing-and-updating"}),"documentation"),", we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"wget")," to download and run a script to install ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," in your home directory (specifically to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.nvm"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash\n")),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," right away, you need to either log out and in again or source the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.profile")," file again:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ source ~/.profile\n")),(0,a.kt)("p",null,"To ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," is up and running, we can print its version"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"nvm --version\n")),(0,a.kt)("p",null,"We can now install the latest LTS release of Node.js via"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ nvm install --lts\n")),(0,a.kt)("p",null,"(Tip: running ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm ls-remote")," will print a list of all available versions)"),(0,a.kt)("p",null,"This will also install ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),", the official package manager used by Node.js to install external dependencies."),(0,a.kt)("h3",c({},{id:"installing-mongodb"}),"Installing MongoDB"),(0,a.kt)("p",null,"Let's first run the following command to update the packages list to ensure that you have the most recent version of the listings:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo apt update\n")),(0,a.kt)("p",null,"To install MongoDB, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"apt")," since Ubuntu's package repositories include an up-to-date version of MongoDB:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo apt install -y mongodb\n")),(0,a.kt)("p",null,"After installation, the database server should automatically be started. To check, run"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo systemctl status mongodb\n")),(0,a.kt)("h3",c({},{id:"installing-git"}),"Installing git"),(0,a.kt)("p",null,"You can install Git by running"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get install git-core\n")),(0,a.kt)("p",null,"Afterwards, you can clone the git repository to acquire the source code:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/isle-project/isle-server\n")),(0,a.kt)("p",null,"After changing into the new directory"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ cd isle-server\n")),(0,a.kt)("p",null,"we can install its external dependencies via"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ npm install\n")),(0,a.kt)("h2",c({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"You will now need to make a few changes to the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},"isle-server")," directory. For example, you might have noticed that the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials")," folder have been encrypted (or rather ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/elasticdog/transcrypt"}),"transcrypted"),") to protect sensitive information. Please get in touch in case you would like to get access to our configuration."),(0,a.kt)("p",null,"Otherwise, you want to override the JSON files in this folder. "),(0,a.kt)("p",null,"By default, we use ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.mailgun.com/"}),"Mailgun")," to send email notifications. The ",(0,a.kt)("strong",{parentName:"p"},"mailgun.json")," file should look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n    "user": "<user>",\n    "pass": "<pass>"\n}\n')),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"<user>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<pass>")," are your ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.mailgun.com/"}),"Mailgun")," credentials."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"tokens.json")," file is a JSON file with two keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n    "writeAccess": "<instructor_key>",\n    "jwtKey": "<passphrase>"\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<instructor_key>")," should be replaced with a chosen key that can be handed to faculty to obtain instructor access to the server on the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-dashboard"}),"isle-dashboard"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"<passphrase>")," can be any confidential string. It is used to sign the JSON web tokens used for user authentication."),(0,a.kt)("p",null,"Finally, you want to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"etc/config.json")," file. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'{\n    "namespacesDirectory": "./../public",\n    "server": "https://isle.heinz.cmu.edu",\n    "certificate": "/srv/ssl/isle_heinz_cmu_edu_cert.cer",\n    "key": "/srv/ssl/isle.heinz.cmu.edu.key",\n    "mongodb": "mongodb://localhost/isle-db"\n}\n')),(0,a.kt)("p",null,"You should change the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," field to the server address from where your requests will be processed. Since ISLE requires HTTPS, you will need a SSL certificate and key. The paths for the certificate and key should be entered into the ",(0,a.kt)("inlineCode",{parentName:"p"},"certificate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," fields, respectively. You will need to receive these files from a certificate authority. ",(0,a.kt)("a",c({parentName:"p"},{href:"https://letsencrypt.org/"}),"Let's Encrypt")," is a popular certificate authority which generates certificates for free. You can leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," field as-is unless you desire to host your MongoDB instance on a separate database server than your ISLE application server."),(0,a.kt)("h2",c({},{id:"setting-up-nginx"}),"Setting up nginx"),(0,a.kt)("p",null,"We suggest to use ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.nginx.com/"}),"nginx")," as the web server for the ISLE server program. You can obtain a recent version of the software via ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo apt install nginx\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isle-server")," repository contains server configuration files for use with ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.nginx.com/"}),"nginx")," in the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-server/tree/master/etc/nginx"}),"/etc/nginx")," sub-directory. To use the contents of this configuration directory in place of the existing ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.nginx.com/"}),"nginx")," confinpm install -g npmguration directory, you can copy the contents of the configuration directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo cp -R /path/to/isle-server/etc/nginx /etc/nginx\n")),(0,a.kt)("p",null,"Warning: you might want to backup an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx")," directory first via ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo mv /etc/nginx /etc/nginx-backup"),"."),(0,a.kt)("p",null,"After editing the ISLE server configuration located in ",(0,a.kt)("inlineCode",{parentName:"p"},"sites-available")," to point to the correct certificate locations and changing the server name, create a symlink to enable it:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo ln -s /etc/nginx/sites-available/isle /etc/nginx/sites-enabled/isle\n")),(0,a.kt)("p",null,"Finally, restart ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.nginx.com/"}),"nginx"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo service nginx restart\n")),(0,a.kt)("h2",c({},{id:"serving-compressed-files"}),"Serving Compressed Files"),(0,a.kt)("p",null,"To reduce the amount of data sent over the wire, we enable the lossless brotli compression algorithm, a successor to gzip. The latter is newer and not supported in ",(0,a.kt)("a",c({parentName:"p"},{href:"https://www.nginx.com/"}),"nginx")," by default. To install brotli, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-add-repository -y ppa:hda-me/nginx-stable\n$ sudo apt-get update\n$ sudo apt-get install brotli nginx nginx-module-brotli\n")),(0,a.kt)("p",null,"To enable the Brotli module, we uncomment the following commands in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"    # ngx_brotli filter module - used to compress responses on-the-fly.\n    load_module modules/ngx_http_brotli_filter_module.so;\n    # ngx_brotli static module - used to serve pre-compressed files.\n    # Both modules could be used separately\n    load_module modules/ngx_http_brotli_static_module.so;\n")),(0,a.kt)("p",null,"We can then add Brotli compression by adding the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"brotli on;\nbrotli_static on;\nbrotli_comp_level 11;\nbrotli_types text/plain text/css text/javascript application/javascript text/xml application/xml image/svg+xml application/json;\n")),(0,a.kt)("h2",c({},{id:"start-the-isle-server-program"}),"Start the ISLE server program"),(0,a.kt)("p",null,"Navigate again into the isle-server directory. To start the server program in the background, we advise to use a program like ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/Unitech/pm2"}),"pm2")," to ensure that the process runs continuously. As ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),", install it with the command"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm install pm2 -g\n")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2"),", we can start the server as follows:  "),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pm2 start lib/index.js --name isle-server\n")),(0,a.kt)("h2",c({},{id:"automatically-restart-on-reboot"}),"Automatically restart on reboot"),(0,a.kt)("p",null,"To restart the ISLE server on system reboot, initialize the ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2")," startup script via:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pm2 startup\n")),(0,a.kt)("p",null,"You can save the currently running ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2")," processes to the startup script via"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pm2 save\n")),(0,a.kt)("p",null,"The ISLE server should now be up and running and accept requests!"),(0,a.kt)("p",null,"Afterwards, you will want to install the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-dashboard"}),"isle-dashboard")," on your remote server and locally install the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/isle-project/isle-editor"}),"isle-editor")," to author lessons."))}v.isMDXComponent=!0}}]);