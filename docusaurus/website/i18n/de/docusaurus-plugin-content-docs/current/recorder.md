---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Eine ISLE-Komponente zur Aufnahme von Audio, Bildschirm und Video.

## Optionen

* __audio__ | `boolean`: zeigt an, ob Audio aufgenommen werden soll. Default: `false`.
* __camera__ | `boolean`: zeigt an, ob die Webcam aufgezeichnet werden soll. Default: `false`.
* __screen__ | `boolean`: zeigt an, ob der Bildschirm aufgezeichnet werden soll. Default: `false`.
* __autostart__ | `boolean`: gibt an, ob die Aufnahme sofort beginnen soll. Default: `false`.
* __downloadable__ | `boolean`: gibt an, ob die Benutzer die Aufnahme herunterladen können sollen. Default: `false`.
* __uploadable__ | `boolean`: gibt an, ob Benutzer die Möglichkeit haben sollen, die Aufnahme auf den Server hochzuladen. Default: `false`.
* __bitsPerSecond__ | `number`: Bits pro Sekunde. Default: `1280000`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



