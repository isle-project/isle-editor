---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Komponent ISLE na nahrávanie zvuku, obrazovky a videa.

## Možnosti

* __audio__ | `boolean`: označuje, či sa má zvuk nahrávať.. Default: `false`.
* __camera__ | `boolean`: označuje, či sa má webová kamera nahrávať.. Default: `false`.
* __screen__ | `boolean`: označuje, či sa má obrazovka zachytiť. Default: `false`.
* __autostart__ | `boolean`: označuje, či sa má nahrávanie spustiť okamžite.. Default: `false`.
* __downloadable__ | `boolean`: označuje, či by používatelia mali mať možnosť stiahnuť záznam.. Default: `false`.
* __uploadable__ | `boolean`: označuje, či by používatelia mali mať možnosť nahrať záznam na server.. Default: `false`.
* __bitsPerSecond__ | `number`: bitov za sekundu. Default: `1280000`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



