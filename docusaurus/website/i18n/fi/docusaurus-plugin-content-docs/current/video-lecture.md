---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Videoluentokomponentti, joka näyttää videoita, joihin on lisätty interaktiivisia elementtejä.

## Vaihtoehdot

* __controls__ | `boolean`: osoittaa, näytetäänkö videosoittimien ohjauselementit.. Default: `true`.
* __instructorView__ | `boolean`: valvoo, sisällytetäänkö ohjaajanäkymä. Default: `true`.
* __linkToDashboard__ | `boolean`: valvoo, näytetäänkö linkki kojelautaan videoluennon päätyttyä.. Default: `false`.
* __steps__ | `array (required)`: joukko videon URL-osoitteita ja komponentteja, jotka näytetään niiden välissä.. Default: `none`.
* __videoWidth__ | `(string|number)`: videon leveys. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: videon korkeus. Default: `'98vh'`.
* __style__ | `object`: CSS inline-tyyli. Default: `{}`.


## Esimerkkejä

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

