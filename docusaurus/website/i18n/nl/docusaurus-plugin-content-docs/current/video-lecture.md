---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Een videocomponent die video's weergeeft, afgewisseld met interactieve elementen.

## Opties

* __controls__ | `boolean`: geeft aan of de bedieningselementen van de videospelers moeten worden weergegeven. Default: `true`.
* __instructorView__ | `boolean`: controleert of er een instructeursoverzicht moet worden opgenomen. Default: `true`.
* __linkToDashboard__ | `boolean`: bepaalt of er een link naar het dashboard moet worden weergegeven als de videocollege is voltooid. Default: `false`.
* __steps__ | `array (required)`: array van video-URL's en componenten die tussendoor worden weergegeven. Default: `none`.
* __videoWidth__ | `(string|number)`: videobreedte. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: videohoogte. Default: `'98vh'`.
* __style__ | `object`: CSS inline stijl. Default: `{}`.


## Voorbeelden

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

