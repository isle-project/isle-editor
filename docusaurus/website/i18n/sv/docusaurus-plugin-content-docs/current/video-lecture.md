---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

En komponent för videoföreläsning som visar videor med interaktiva element.

## Alternativ

* __controls__ | `boolean`: anger om kontrollelement för videospelare ska visas.. Default: `true`.
* __instructorView__ | `boolean`: kontrollerar om instruktörsvyn ska inkluderas. Default: `true`.
* __linkToDashboard__ | `boolean`: styr om en länk till instrumentpanelen ska visas när du har slutfört videoföreläsningen.. Default: `false`.
* __steps__ | `array (required)`: en rad video-URL:er och komponenter som ska visas mellan. Default: `none`.
* __videoWidth__ | `(string|number)`: videobredd. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: videohöjd. Default: `'98vh'`.
* __style__ | `object`: CSS inline-stil. Default: `{}`.


## Exempel

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

