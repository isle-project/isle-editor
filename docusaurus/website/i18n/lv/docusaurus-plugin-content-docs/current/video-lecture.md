---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Videolekcijas komponents, kurā tiek rādīti videoklipi, kas mijas ar interaktīviem elementiem.

## Iespējas

* __controls__ | `boolean`: norāda, vai tiek rādīti video atskaņotāju vadības elementi.. Default: `true`.
* __instructorView__ | `boolean`: kontrolē, vai iekļaut instruktora skats. Default: `true`.
* __linkToDashboard__ | `boolean`: kontrolē, vai pēc video lekcijas pabeigšanas tiek parādīta saite uz paneli.. Default: `false`.
* __steps__ | `array (required)`: videoklipu URL un to komponentu masīvs, kas tiks rādīti starp tiem.. Default: `none`.
* __videoWidth__ | `(string|number)`: video platums. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: video augstums. Default: `'98vh'`.
* __style__ | `object`: CSS iebūvētais stils. Default: `{}`.


## Piemēri

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

