---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

En videoforelæsningskomponent, der viser videoer med interaktive elementer.

## Indstillinger

* __controls__ | `boolean`: angiver, om videoafspillernes kontrolelementer skal vises. Default: `true`.
* __instructorView__ | `boolean`: kontrollerer, om der skal medtages instruktørvisning. Default: `true`.
* __linkToDashboard__ | `boolean`: styrer, om der skal vises et link til instrumentbrættet, når videoforelæsningen er afsluttet. Default: `false`.
* __steps__ | `array (required)`: array af video-URL'er og komponenter, der skal vises mellem dem. Default: `none`.
* __videoWidth__ | `(string|number)`: videobredde. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: video højde. Default: `'98vh'`.
* __style__ | `object`: CSS inline-stil. Default: `{}`.


## Eksempler

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

