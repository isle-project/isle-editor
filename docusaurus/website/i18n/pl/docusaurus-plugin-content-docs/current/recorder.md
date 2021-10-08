---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Komponent ISLE do nagrywania dźwięku, ekranu i obrazu.

## Opcje

* __audio__ | `boolean`: wskazuje, czy dźwięk powinien być nagrywany. Default: `false`.
* __camera__ | `boolean`: wskazuje, czy kamera internetowa powinna być rejestrowana. Default: `false`.
* __screen__ | `boolean`: wskazuje, czy ekran powinien być przechwytywany. Default: `false`.
* __autostart__ | `boolean`: wskazuje, czy nagrywanie powinno rozpocząć się natychmiast. Default: `false`.
* __downloadable__ | `boolean`: wskazuje, czy użytkownicy powinni mieć możliwość pobrania nagrania. Default: `false`.
* __uploadable__ | `boolean`: wskazuje, czy użytkownicy powinni mieć możliwość przesłania nagrania na serwer. Default: `false`.
* __bitsPerSecond__ | `number`: bity na sekundę. Default: `1280000`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



