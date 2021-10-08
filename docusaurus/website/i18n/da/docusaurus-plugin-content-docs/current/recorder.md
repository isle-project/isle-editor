---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

En ISLE-komponent til optagelse af lyd, skærm og video.

## Indstillinger

* __audio__ | `boolean`: angiver, om der skal optages lyd. Default: `false`.
* __camera__ | `boolean`: angiver, om webcam skal optages. Default: `false`.
* __screen__ | `boolean`: angiver, om skærmen skal optages. Default: `false`.
* __autostart__ | `boolean`: angiver, om optagelsen skal starte straks. Default: `false`.
* __downloadable__ | `boolean`: angiver, om brugerne skal have mulighed for at downloade optagelsen. Default: `false`.
* __uploadable__ | `boolean`: angiver, om brugerne skal kunne uploade optagelsen til serveren. Default: `false`.
* __bitsPerSecond__ | `number`: bit pr. sekund. Default: `1280000`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



