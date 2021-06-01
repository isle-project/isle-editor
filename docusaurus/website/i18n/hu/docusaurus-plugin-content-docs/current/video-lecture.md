---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Videóelőadás komponens, amely interaktív elemekkel tarkított videókat jelenít meg.

## Opciók

* __controls__ | `boolean`: jelzi, hogy a videólejátszók vezérlőelemeit meg kell-e jeleníteni.. Default: `true`.
* __instructorView__ | `boolean`: szabályozza, hogy az oktatói nézet szerepeljen-e. Default: `true`.
* __linkToDashboard__ | `boolean`: szabályozza, hogy a videóelőadás befejezése után megjelenjen-e a műszerfalra mutató link.. Default: `false`.
* __steps__ | `array (required)`: a videó URL-ek és a közöttük megjelenítendő komponensek tömbje. Default: `none`.
* __videoWidth__ | `(string|number)`: videó szélessége. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: videó magassága. Default: `'98vh'`.
* __style__ | `object`: CSS inline stílus. Default: `{}`.


## Példák

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

