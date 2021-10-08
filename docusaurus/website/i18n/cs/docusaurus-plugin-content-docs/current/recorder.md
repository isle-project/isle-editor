---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Komponenta ISLE pro záznam zvuku, obrazovky a videa.

## Možnosti

* __audio__ | `boolean`: označuje, zda se má zvuk nahrávat.. Default: `false`.
* __camera__ | `boolean`: označuje, zda má být webová kamera nahrávána. Default: `false`.
* __screen__ | `boolean`: označuje, zda má být obrazovka zachycena. Default: `false`.
* __autostart__ | `boolean`: označuje, zda se má nahrávání spustit okamžitě. Default: `false`.
* __downloadable__ | `boolean`: označuje, zda by uživatelé měli mít možnost stáhnout záznam.. Default: `false`.
* __uploadable__ | `boolean`: označuje, zda by uživatelé měli mít možnost nahrávat záznam na server.. Default: `false`.
* __bitsPerSecond__ | `number`: bitů za sekundu. Default: `1280000`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



