---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Komponenta ISLE za snemanje zvoka, zaslona in videoposnetkov.

## Možnosti

* __audio__ | `boolean`: označuje, ali naj se zvok snema.. Default: `false`.
* __camera__ | `boolean`: označuje, ali naj se spletna kamera snema.. Default: `false`.
* __screen__ | `boolean`: označuje, ali naj se zaslon zajame.. Default: `false`.
* __autostart__ | `boolean`: označuje, ali naj se snemanje začne takoj.. Default: `false`.
* __downloadable__ | `boolean`: označuje, ali naj imajo uporabniki možnost prenosa posnetka.. Default: `false`.
* __uploadable__ | `boolean`: označuje, ali lahko uporabniki posnetek prenesejo na strežnik.. Default: `false`.
* __bitsPerSecond__ | `number`: bitov na sekundo. Default: `1280000`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



