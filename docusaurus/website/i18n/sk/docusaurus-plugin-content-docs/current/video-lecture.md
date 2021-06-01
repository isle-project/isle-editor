---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Komponent videoprednášky, ktorý zobrazuje videá popretkávané interaktívnymi prvkami.

## Možnosti

* __controls__ | `boolean`: označuje, či sa majú zobraziť ovládacie prvky prehrávačov videa.. Default: `true`.
* __instructorView__ | `boolean`: kontroluje, či má byť zahrnutý pohľad inštruktora. Default: `true`.
* __linkToDashboard__ | `boolean`: ovláda, či sa má po dokončení videoprednášky zobraziť odkaz na prístrojovú dosku.. Default: `false`.
* __steps__ | `array (required)`: pole adries URL videa a komponentov, ktoré sa majú zobrazovať medzi nimi. Default: `none`.
* __videoWidth__ | `(string|number)`: šírka videa. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: výška videa. Default: `'98vh'`.
* __style__ | `object`: Riadkový štýl CSS. Default: `{}`.


## Príklady

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

