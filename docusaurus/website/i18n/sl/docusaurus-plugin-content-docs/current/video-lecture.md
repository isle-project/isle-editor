---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Komponenta video predavanja, ki prikazuje videoposnetke, prepletene z interaktivnimi elementi.

## Možnosti

* __controls__ | `boolean`: označuje, ali naj se prikažejo nadzorni elementi predvajalnikov videoposnetkov.. Default: `true`.
* __instructorView__ | `boolean`: nadzoruje, ali naj se vključi pogled inštruktorja.. Default: `true`.
* __linkToDashboard__ | `boolean`: nadzoruje, ali se po končanem video predavanju prikaže povezava do nadzorne plošče.. Default: `false`.
* __steps__ | `array (required)`: niz naslovov URL videoposnetkov in komponent, ki se prikažejo med njimi.. Default: `none`.
* __videoWidth__ | `(string|number)`: širina videoposnetka. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: višina videoposnetka. Default: `'98vh'`.
* __style__ | `object`: Vnosni slog CSS. Default: `{}`.


## Primeri

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

