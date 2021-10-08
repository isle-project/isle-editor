---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

ISLE-komponentti äänen, näytön ja videon tallentamiseen.

## Vaihtoehdot

* __audio__ | `boolean`: osoittaa, onko ääni tallennettava. Default: `false`.
* __camera__ | `boolean`: osoittaa, onko webbikamera tallennettava. Default: `false`.
* __screen__ | `boolean`: osoittaa, onko näyttö kaapattava. Default: `false`.
* __autostart__ | `boolean`: ilmoittaa, pitäisikö tallennus aloittaa välittömästi. Default: `false`.
* __downloadable__ | `boolean`: ilmoittaa, pitäisikö käyttäjien pystyä lataamaan tallenne.. Default: `false`.
* __uploadable__ | `boolean`: ilmoittaa, voivatko käyttäjät ladata tallenteen palvelimelle.. Default: `false`.
* __bitsPerSecond__ | `number`: bittiä sekunnissa. Default: `1280000`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



