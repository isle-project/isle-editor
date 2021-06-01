---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

O componentă de prelegere video care afișează videoclipuri intercalate cu elemente interactive.

## Opțiuni

* __controls__ | `boolean`: indică dacă trebuie afișate elementele de control ale jucătorilor video. Default: `true`.
* __instructorView__ | `boolean`: controlează dacă se include sau nu vizualizarea instructorului. Default: `true`.
* __linkToDashboard__ | `boolean`: controlează dacă se afișează sau nu un link către tabloul de bord după terminarea lecției video. Default: `false`.
* __steps__ | `array (required)`: matrice de URL-uri video și componente care urmează să fie afișate între ele. Default: `none`.
* __videoWidth__ | `(string|number)`: lățime video. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: înălțime video. Default: `'98vh'`.
* __style__ | `object`: Stilul inline CSS. Default: `{}`.


## Exemple

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

