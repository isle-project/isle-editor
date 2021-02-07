---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Un componente de ISLE para grabar audio, pantalla y video.

## Options

* __audio__ | `boolean`: indica si el audio debe ser grabado. Default: `false`.
* __camera__ | `boolean`: indica si la cámara web debe ser grabada. Default: `false`.
* __screen__ | `boolean`: indica si la pantalla debe ser capturada. Default: `false`.
* __autostart__ | `boolean`: indica si la grabación debe comenzar inmediatamente. Default: `false`.
* __downloadable__ | `boolean`: indica si los usuarios deben poder descargar la grabación. Default: `false`.
* __uploadable__ | `boolean`: indica si los usuarios deben poder subir la grabación al servidor. Default: `false`.
* __bitsPerSecond__ | `number`: bits por segundo. Default: `1280000`.
* __voiceID__ | `string`: identificador de control de voz. Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



