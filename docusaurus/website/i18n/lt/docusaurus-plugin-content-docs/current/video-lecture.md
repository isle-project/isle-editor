---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Vaizdo paskaitos komponentas, kuriame rodomi vaizdo įrašai su interaktyviais elementais.

## Parinktys

* __controls__ | `boolean`: nurodo, ar rodyti vaizdo grotuvų valdymo elementus.. Default: `true`.
* __instructorView__ | `boolean`: kontroliuoja, ar įtraukti instruktoriaus rodinį.. Default: `true`.
* __linkToDashboard__ | `boolean`: kontroliuoja, ar baigus vaizdo paskaitą rodyti nuorodą į prietaisų skydelį.. Default: `false`.
* __steps__ | `array (required)`: vaizdo įrašų URL adresų ir komponentų, kurie bus rodomi tarp jų, masyvas. Default: `none`.
* __videoWidth__ | `(string|number)`: vaizdo įrašo plotis. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: vaizdo įrašo aukštis. Default: `'98vh'`.
* __style__ | `object`: CSS eilutės stilius. Default: `{}`.


## Pavyzdžiai

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

