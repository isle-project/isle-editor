---
id: installation
title: Server Installation Guide
sidebar_label: Installation Guide
---

# Setting up the Server

This tutorial will walk you through the steps to set up an instance of the ISLE server program to serve your students. 

## Prerequisites

Running the server requires the following software tools:

* [git][git]: version control
* [Node.js][node-js]: JavaScript runtime (version `>= 10.0`)
* [MongoDB][mongodb]: NoSQL document database

The ISLE server should run on a POSIX-based system (preferably a Linux distribution). For this guide, we assume that you are on the latest Ubuntu LTS release. The steps will be similar for other distributions (e.g., Debian or CentOS), but might need to be slightly adapted.

### Installing Node.js

We will use `nvm` (“Node.js Version Manager”) to install Node.js, the JavaScript runtime used by the ISLE server. `nvm` allows you to install the newest versions of Node.js (which are not currently available through `apt`) and manage multiple installations at once. Following the official `nvm` [documentation][nvm-docs], we can use `curl` or `wget` to download and run a script to install `nvm` in your home directory (specifically to `~/.nvm`):

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

```bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

To use `nvm` right away, you need to either log out and in again or source the `~/.profile` file again:

```bash
$ source ~/.profile
```

To ensure that `nvm` is up and running, we can print its version

```
nvm --version
```

We can now install the latest LTS release of Node.js via

```bash
$ nvm install --lts
```

(Tip: running `nvm ls-remote` will print a list of all available versions)

This will also install `npm`, the official package manager used by Node.js to install external dependencies.

### Installing MongoDB

Let's first run the following command to update the packages list to ensure that you have the most recent version of the listings:

```bash
$ sudo apt update
```

To install MongoDB, we can use `apt` since Ubuntu's package repositories include an up-to-date version of MongoDB:

```bash
$ sudo apt install -y mongodb
```

After installation, the database server should automatically be started. To check, run

```bash
$ sudo systemctl status mongodb
```


### Installing git

You can install Git by running

```bash
$ sudo apt-get install git-core
```

Afterwards, you can clone the git repository to acquire the source code:

```bash
$ git clone https://github.com/isle-project/isle-server
```

After changing into the new directory

```bash
$ cd isle-server
```

we can install its external dependencies via

```bash
$ npm install
```

## Configuration

You will now need to make a few changes to the contents of the `isle-server` directory. For example, you might have noticed that the files in the `credentials` folder have been encrypted (or rather [transcrypted][transcrypt]) to protect sensitive information. Please get in touch in case you would like to get access to our configuration.

Otherwise, you want to override the JSON files in this folder. 

By default, we use [Mailgun][mailgun] to send email notifications. The **mailgun.json** file should look as follows:

```json
{
	"user": "<user>",
	"pass": "<pass>"
}
```

where `<user>` and `<pass>` are your [Mailgun][mailgun] credentials.

The **tokens.json** file is a JSON file with two keys:

```json
{
	"writeAccess": "<instructor_key>",
	"jwtKey": "<passphrase>"
}
```

The `<instructor_key>` should be replaced with a chosen key that can be handed to faculty to obtain instructor access to the server on the [isle-dashboard][isle-dashboard]. The `<passphrase>` can be any confidential string. It is used to sign the JSON web tokens used for user authentication.

Finally, you want to change the `etc/config.json` file. It looks like this:

```
{
	"namespacesDirectory": "./../public",
	"server": "https://isle.heinz.cmu.edu",
	"certificate": "/srv/ssl/isle_heinz_cmu_edu_cert.cer",
	"key": "/srv/ssl/isle.heinz.cmu.edu.key",
	"mongodb": "mongodb://localhost/isle-db"
}
```

You should change the `server` field to the server address from where your requests will be processed. Since ISLE requires HTTPS, you will need a SSL certificate and key. The paths for the certificate and key should be entered into the `certificate` and `key` fields, respectively. You will need to receive these files from a certificate authority. [Let's Encrypt][lets-encrypt] is a popular certificate authority which generates certificates for free. You can leave the `mongodb` field as-is unless you desire to host your MongoDB instance on a separate database server than your ISLE application server.

## Setting up nginx

We suggest to use [nginx][nginx] as the web server for the ISLE server program. You can obtain a recent version of the software via `apt`:

```bash
$ sudo apt install nginx
```

The `isle-server` repository contains server configuration files for use with [nginx][nginx] in the [/etc/nginx](https://github.com/isle-project/isle-server/tree/master/etc/nginx) sub-directory. To use the contents of this configuration directory in place of the existing [nginx][nginx] confinpm install -g npmguration directory, you can copy the contents of the configuration directory to `/etc`.

```bash
$ sudo cp -R /path/to/isle-server/etc/nginx /etc/nginx
```

Warning: you might want to backup an existing `/etc/nginx` directory first via `sudo mv /etc/nginx /etc/nginx-backup`.

After editing the ISLE server configuration located in `sites-available` to point to the correct certificate locations and changing the server name, create a symlink to enable it:

```bash
$ sudo ln -s /etc/nginx/sites-available/isle /etc/nginx/sites-enabled/isle
```

Finally, restart [nginx][nginx].

```bash
$ sudo service nginx restart
```

## Serving Compressed Files

To reduce the amount of data sent over the wire, we enable the lossless brotli compression algorithm, a successor to gzip. The latter is newer and not supported in [nginx][nginx] by default. To install brotli, run the following:

```bash
$ sudo apt-add-repository -y ppa:hda-me/nginx-stable
$ sudo apt-get update
$ sudo apt-get install brotli nginx nginx-module-brotli
```

To enable the Brotli module, we uncomment the following commands in `/etc/nginx/nginx.conf`:

```
    # ngx_brotli filter module - used to compress responses on-the-fly.
    load_module modules/ngx_http_brotli_filter_module.so;
    # ngx_brotli static module - used to serve pre-compressed files.
    # Both modules could be used separately
    load_module modules/ngx_http_brotli_static_module.so;
```

We can then add Brotli compression by adding the following:

```
brotli on;
brotli_static on;
brotli_comp_level 11;
brotli_types text/plain text/css text/javascript application/javascript text/xml application/xml image/svg+xml application/json;
```

## Start the ISLE server program

Navigate again into the isle-server directory. To start the server program in the background, we advise to use a program like [pm2][pm2] to ensure that the process runs continuously. As `sudo`, install it with the command

```bash
npm install pm2 -g
```

With `pm2`, we can start the server as follows:  

```bash
pm2 start lib/index.js --name isle-server
```

## Automatically restart on reboot

To restart the ISLE server on system reboot, initialize the `pm2` startup script via:

```bash
pm2 startup
```

You can save the currently running `pm2` processes to the startup script via

```bash
pm2 save
```

The ISLE server should now be up and running and accept requests!

Afterwards, you will want to install the [isle-dashboard][isle-dashboard] on your remote server and locally install the [isle-editor][isle-editor] to author lessons.

[git]: http://git-scm.com/
[node-js]: https://nodejs.org/en/
[mongodb]: https://mongodb.com
[nvm-docs]: https://github.com/nvm-sh/nvm#installing-and-updating
[mailgun]: https://www.mailgun.com/
[isle-dashboard]: https://github.com/isle-project/isle-dashboard
[lets-encrypt]: https://letsencrypt.org/
[nginx]: https://www.nginx.com/
[transcrypt]: https://github.com/elasticdog/transcrypt
[install-java8]: https://tecadmin.net/install-oracle-java-8-ubuntu-via-ppa/
[isle-dashboard]: https://github.com/isle-project/isle-dashboard
[isle-editor]: https://github.com/isle-project/isle-editor
[pm2]: https://github.com/Unitech/pm2
[jwt]: https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md
