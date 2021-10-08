---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

ISLE komponent heli, ekraani ja video salvestamiseks.

## Valikud

* __audio__ | `boolean`: näitab, kas heli tuleks salvestada. Default: `false`.
* __camera__ | `boolean`: näitab, kas veebikaamera peaks salvestama. Default: `false`.
* __screen__ | `boolean`: näitab, kas ekraan tuleks jäädvustada. Default: `false`.
* __autostart__ | `boolean`: näitab, kas salvestamine peaks algama kohe. Default: `false`.
* __downloadable__ | `boolean`: näitab, kas kasutajatel peaks olema võimalik salvestust alla laadida.. Default: `false`.
* __uploadable__ | `boolean`: näitab, kas kasutajatel peaks olema võimalik salvestust serverisse üles laadida.. Default: `false`.
* __bitsPerSecond__ | `number`: bitti sekundis. Default: `1280000`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



