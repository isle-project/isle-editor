---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Um componente de vídeo palestra que exibe vídeos intercalados com elementos interativos.

## Options

* __controls__ | `boolean`: indica se devem ser exibidos elementos de controle dos reprodutores de vídeo. Default: `true`.
* __instructorView__ | `boolean`: controla se deve incluir a visão do instrutor. Default: `true`.
* __linkToDashboard__ | `boolean`: controla se deve ser exibido um link para o painel uma vez concluída a palestra em vídeo. Default: `false`.
* __steps__ | `array (required)`: matriz de URLs de vídeo e componentes a serem exibidos no meio. Default: `none`.
* __videoWidth__ | `(string|number)`: largura do vídeo. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: altura do vídeo. Default: `'98vh'`.
* __style__ | `object`: Estilo CSS em linha. Default: `{}`.


## Examples

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

