---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Videoloengu komponent, mis kuvab videoid, mis on interaktiivsete elementidega vaheldumisi.

## Valikud

* __controls__ | `boolean`: näitab, kas kuvada videomängijate juhtelemente. Default: `true`.
* __instructorView__ | `boolean`: kontrollib, kas lisada instruktori vaade. Default: `true`.
* __linkToDashboard__ | `boolean`: kontrollib, kas pärast videoloengu lõpetamist kuvatakse link armatuurlauale. Default: `false`.
* __steps__ | `array (required)`: video URL-ide ja nende vahel kuvatavate komponentide massiivi. Default: `none`.
* __videoWidth__ | `(string|number)`: video laius. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: video kõrgus. Default: `'98vh'`.
* __style__ | `object`: CSS inline stiil. Default: `{}`.


## Näited

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

