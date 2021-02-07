---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Komponent wykładu wideo, w którym wyświetlane są filmy przeplatane elementami interaktywnymi.

## Options

* __controls__ | `boolean`: wskazuje, czy mają być wyświetlane elementy sterujące odtwarzaczy wideo. Default: `true`.
* __instructorView__ | `boolean`: kontroluje, czy włączyć widok instruktora. Default: `true`.
* __linkToDashboard__ | `boolean`: kontroluje, czy po zakończeniu wykładu wideo ma zostać wyświetlony link do tablicy rozdzielczej. Default: `false`.
* __steps__ | `array (required)`: tablica wideo adresów URL i komponentów, które mają być wyświetlane w międzyczasie. Default: `none`.
* __videoWidth__ | `(string|number)`: szerokość wideo. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: wysokość wideo. Default: `'98vh'`.
* __style__ | `object`: Styl CSS inline. Default: `{}`.


## Examples

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

