---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Komponenta videopřednášky, která zobrazuje videa prokládaná interaktivními prvky.

## Možnosti

* __controls__ | `boolean`: určuje, zda se mají zobrazit ovládací prvky přehrávačů videa.. Default: `true`.
* __instructorView__ | `boolean`: kontroluje, zda má být zahrnuto zobrazení instruktora. Default: `true`.
* __linkToDashboard__ | `boolean`: řídí, zda se má po dokončení videopřednášky zobrazit odkaz na ovládací panel.. Default: `false`.
* __steps__ | `array (required)`: pole adres URL videa a komponent, které se mají zobrazit mezi nimi.. Default: `none`.
* __videoWidth__ | `(string|number)`: šířka videa. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: výška videa. Default: `'98vh'`.
* __style__ | `object`: Řádkový styl CSS. Default: `{}`.


## Příklady

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

