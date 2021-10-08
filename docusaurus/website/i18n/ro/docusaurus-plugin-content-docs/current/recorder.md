---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

O componentă ISLE pentru înregistrarea audio, a ecranului și video.

## Opțiuni

* __audio__ | `boolean`: indică dacă trebuie înregistrat audio. Default: `false`.
* __camera__ | `boolean`: indică dacă camera web trebuie înregistrată. Default: `false`.
* __screen__ | `boolean`: indică dacă ecranul trebuie să fie capturat. Default: `false`.
* __autostart__ | `boolean`: indică dacă înregistrarea trebuie să înceapă imediat. Default: `false`.
* __downloadable__ | `boolean`: indică dacă utilizatorii ar trebui să poată descărca înregistrarea. Default: `false`.
* __uploadable__ | `boolean`: indică dacă utilizatorii ar trebui să poată încărca înregistrarea pe server. Default: `false`.
* __bitsPerSecond__ | `number`: biți pe secundă. Default: `1280000`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



