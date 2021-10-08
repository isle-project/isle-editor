---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

ISLE komponens hang, képernyő és videó rögzítésére.

## Opciók

* __audio__ | `boolean`: jelzi, hogy a hangfelvételt rögzíteni kell-e. Default: `false`.
* __camera__ | `boolean`: jelzi, hogy a webkamerát rögzíteni kell-e. Default: `false`.
* __screen__ | `boolean`: jelzi, hogy a képernyőt rögzíteni kell-e. Default: `false`.
* __autostart__ | `boolean`: jelzi, hogy a felvétel azonnal induljon-e. Default: `false`.
* __downloadable__ | `boolean`: jelzi, hogy a felhasználók letölthetik-e a felvételt.. Default: `false`.
* __uploadable__ | `boolean`: jelzi, hogy a felhasználóknak fel kell-e tölteniük a felvételt a szerverre.. Default: `false`.
* __bitsPerSecond__ | `number`: bit per másodperc. Default: `1280000`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



