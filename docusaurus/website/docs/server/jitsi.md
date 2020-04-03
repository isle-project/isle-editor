---
id: jitsi
title: Jitsi
sidebar_label: Jitsi
---

## Setting up Jitsi (optional)

To enable the video conference capabilities in ISLE, which are powered by [Jitsi][jitsi], you need to connect to a specified Jitsi server. 

-   To setup a new Jitsi server, follow the instructions in their [Quick Install guide](https://github.com/jitsi/jitsi-meet/blob/master/doc/quick-install.md). As of March 2020, installing Jitsi on Ubuntu 16.04 should work out of the box when following these instructions; other distributions or newer Ubuntu versions yield installation issues that have to be manually resolved.https://github.com/isle-project/isle-server/wiki/_new

-   Install `prosody`:

```bash
wget https://packages.prosody.im/debian/pool/main/p/prosody-trunk/prosody-trunk_1nightly747-1~xenial_amd64.deb
```
```bash
dpkg -i prosody-trunk_1nightly747-1~xenial_amd64.deb
```

-   Install `jitsi-meet-tokens` via command

```bash
apt-get install jitsi-meet-tokens
```

-   Change the Prosody configuration to use [JSON web tokens][jwt] for authentication. 
-   Make sure that the Prosody `app_id` and `app_secret` match corresponding `appId` and `appSecret` fields in the `credentials/jitsi.json` file of the cloned isle-server repository. 
-   Finally, the `server` field in `credentials/jitsi.json` should be set to the [FQDN](https://github.com/jitsi/jitsi-meet/blob/master/doc/quick-install.md#set-up-the-fully-qualified-domain-name-fqdn-optional) of the Jitsi Meet instance.

- To change the default appearance of Jitsi meet, the `interface_config.js` file in `/usr/share/jitsi-meet` should be updated. Refer to the version of the file inside the `etc/jitsi-meet` folder of this repository for the Jitsi interface configuration used in ISLE.

## Jibri for Jitsi Recordings + Live Streaming (optional)

The following video tutorial describes the steps involved in setting up one or more [Jibri][jibri] instances on other servers for recording Jitsi Meet sessions in ISLE:

https://jitsi.org/news/learn-how-to-live-stream-and-record-on-your-jitsi-meet-install/

Newer versions of Chrome require an additional step. From the Jibri README.md file:

> Add chrome managed policies file and set CommandLineFlagSecurityWarningsEnabled to false. It will hide warnings in Chrome. You can set it like so:


```bash
mkdir -p /etc/opt/chrome/policies/managed
echo '{ "CommandLineFlagSecurityWarningsEnabled": false }' >>/etc/opt/chrome/policies/managed/managed_policies.json
```

Troubleshooting: In case of Java errors encountered the logs in `/var/log/jitsi/jibri`, it is advised to [install Java 8][install-java8]. 

To set it as the default:

```bash
sudo update-java-alternatives --list
sudo update-java-alternatives --set java-1.8.0-openjdk-amd64
```

## Setting up Jigasi with Asterisk/FreePBX for Dial-in & Dial-Out (optional)

If you need the ability for participants to dial into ongoing video calls via their phone or to invite attendees via phone, Jigasi in conjunction with a SIP (session initiation protocol) Provider may be used. Asterisk and FreePBX, a GUI sitting on top of it, constitute a good option.

The following series of tutorials called "Transparent Telephony" by Randall Degges provide a great overview of VOIP, how to setup Asterisk + FreePBX, and further background material:

1. [An Introduction](https://www.rdegges.com/2009/transparent-telephony-part-1-an-introduction/)
2. [Installing Asterisk](https://www.rdegges.com/2010/transparent-telephony-part-2-installing-asterisk/)
3. [Making and Receiving Calls Using VoIP](https://www.rdegges.com/2010/transparent-telephony-part-3-making-and-receiving-calls-using-voip/)

```
net.java.sip.communicator.impl.protocol.sip.acc1403273890647.ACCOUNT_UID=SIP\:<extension_id>@<host>:5060
net.java.sip.communicator.impl.protocol.sip.acc1403273890647.PASSWORD=<base64_encoded_secret}
net.java.sip.communicator.impl.protocol.sip.acc1403273890647.PROTOCOL_NAME=SIP
net.java.sip.communicator.impl.protocol.sip.acc1403273890647.SERVER_ADDRESS=<host>
net.java.sip.communicator.impl.protocol.sip.acc1403273890647.USER_ID=<extension_id>@<host>
```

We write the code for our extension to the file `/etc/asterisk/extensions_override_freepbx.conf`:

```
[ext-local]exten => 9999,1,Set(__RINGTIMER=${IF($["${DB(AMPUSER/9999/ringtimer)}" > "0"]?
${DB(AMPUSER/9999/ringtimer)}:${RINGTIMER_DEFAULT})})
exten => 9999,2(getmeeting),Playback(conf-getconfno)
exten => 9999,3,Read(Pin,beep,20)
exten => 9999,4,Verbose(result is: ${Pin})
exten => 9999,5,SayDigits(${Pin},m)
exten => 9999,6,AGI(jitsi_curling.sh,${Pin})
exten => 9999,7,Verbose(result is: ${JITSI})
exten => 9999,8,GotoIf($["${JITSI}" = "false}"]?invalidnum:joinmeeting)
exten => 9999,9(invalidnum),Playback(conf-invalid)
exten => 9999,10,Goto(getmeeting)
exten => 9999,11(joinmeeting),Set(HASH(__SIPHEADERS,Jitsi-Conference-Room)=${JITSI})
exten => 9999,12,Playback(auth-thankyou)
exten => 9999,13,playback(conf-placeintoconf)
exten => 9999,14,SayAlpha(${JITSI})
exten => 9999,15,Macro(exten-vm,novm,9999,0,0,0)
exten => 9999,16(dest),Set(__PICKUPMARK=)
exten => 9999,17,Goto(${IVR_CONTEXT},return,1)
```

[jibri]: https://github.com/jitsi/jibri
[jitsi]: https://jitsi.org/
[install-java8]: https://tecadmin.net/install-oracle-java-8-ubuntu-via-ppa/
[jwt]: https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md
