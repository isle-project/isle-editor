---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Un componente ISLE per la registrazione di audio, schermo e video.

## Opzioni

* __audio__ | `boolean`: indica se l'audio deve essere registrato. Default: `false`.
* __camera__ | `boolean`: indica se la webcam deve essere registrata. Default: `false`.
* __screen__ | `boolean`: indica se lo schermo deve essere catturato. Default: `false`.
* __autostart__ | `boolean`: indica se la registrazione deve iniziare immediatamente. Default: `false`.
* __downloadable__ | `boolean`: indica se gli utenti devono poter scaricare la registrazione. Default: `false`.
* __uploadable__ | `boolean`: indica se gli utenti devono essere in grado di caricare la registrazione sul server. Default: `false`.
* __bitsPerSecond__ | `number`: bit al secondo. Default: `1280000`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



