---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Un componente di video conferenza che visualizza video intervallati da elementi interattivi.

## Options

* __controls__ | `boolean`: indica se visualizzare gli elementi di controllo dei lettori video. Default: `true`.
* __instructorView__ | `boolean`: controlla se includere la vista dell'istruttore. Default: `true`.
* __linkToDashboard__ | `boolean`: controlla se visualizzare un link al cruscotto una volta completata la lezione video. Default: `false`.
* __steps__ | `array (required)`: array di URL video e componenti da visualizzare nel mezzo. Default: `none`.
* __videoWidth__ | `(string|number)`: larghezza del video. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: altezza video. Default: `'98vh'`.
* __style__ | `object`: Stile CSS in linea. Default: `{}`.


## Examples

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

