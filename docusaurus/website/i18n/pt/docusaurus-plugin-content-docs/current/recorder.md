---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Um componente ISLE para gravação de áudio, tela e vídeo.

## Opções

* __audio__ | `boolean`: indica se o áudio deve ser gravado. Default: `false`.
* __camera__ | `boolean`: indica se a webcam deve ser gravada. Default: `false`.
* __screen__ | `boolean`: indica se a tela deve ser capturada. Default: `false`.
* __autostart__ | `boolean`: indica se a gravação deve começar imediatamente. Default: `false`.
* __downloadable__ | `boolean`: indica se os usuários devem ser capazes de baixar a gravação. Default: `false`.
* __uploadable__ | `boolean`: indica se os usuários devem ser capazes de carregar a gravação para o servidor. Default: `false`.
* __bitsPerSecond__ | `number`: bits por segundo. Default: `1280000`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



