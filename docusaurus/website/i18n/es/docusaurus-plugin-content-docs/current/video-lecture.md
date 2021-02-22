---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Un componente de video conferencia que muestra videos intercalados con elementos interactivos.

## Opciones

* __controls__ | `boolean`: indica si se muestran los elementos de control de los reproductores de vídeo. Default: `true`.
* __instructorView__ | `boolean`: controla si se incluye la vista del instructor. Default: `true`.
* __linkToDashboard__ | `boolean`: controla si se muestra un enlace al tablero de mandos una vez completada la video conferencia. Default: `false`.
* __steps__ | `array (required)`: una serie de URLs de vídeo y componentes que se mostrarán en el medio. Default: `none`.
* __videoWidth__ | `(string|number)`: ancho de video. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: altura de video. Default: `'98vh'`.
* __style__ | `object`: Estilo en línea de CSS. Default: `{}`.


## Ejemplos

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

