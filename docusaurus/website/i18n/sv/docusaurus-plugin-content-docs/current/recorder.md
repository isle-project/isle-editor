---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

En ISLE-komponent för inspelning av ljud, skärm och video.

## Alternativ

* __audio__ | `boolean`: anger om ljudet ska spelas in. Default: `false`.
* __camera__ | `boolean`: anger om webbkameran ska spelas in. Default: `false`.
* __screen__ | `boolean`: anger om skärmen ska fångas. Default: `false`.
* __autostart__ | `boolean`: anger om inspelningen ska påbörjas omedelbart. Default: `false`.
* __downloadable__ | `boolean`: anger om användarna ska kunna ladda ner inspelningen.. Default: `false`.
* __uploadable__ | `boolean`: anger om användarna ska kunna ladda upp inspelningen till servern.. Default: `false`.
* __bitsPerSecond__ | `number`: Bitar per sekund. Default: `1280000`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



