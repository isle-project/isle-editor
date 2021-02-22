---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Eine Videovortragskomponente, die Videos anzeigt, die mit interaktiven Elementen durchsetzt sind.

## Optionen

* __controls__ | `boolean`: gibt an, ob Bedienelemente der Video-Player angezeigt werden sollen. Default: `true`.
* __instructorView__ | `boolean`: steuert, ob die Dozentenansicht einbezogen werden soll. Default: `true`.
* __linkToDashboard__ | `boolean`: steuert, ob nach Abschluss des Videovortrags ein Link zum Dashboard angezeigt werden soll. Default: `false`.
* __steps__ | `array (required)`: Array von Video-URLs und Komponenten, die zwischendurch angezeigt werden sollen. Default: `none`.
* __videoWidth__ | `(string|number)`: Videobreite. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: Video-Höhe. Default: `'98vh'`.
* __style__ | `object`: CSS-Inline-Stil. Default: `{}`.


## Beispiele

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

