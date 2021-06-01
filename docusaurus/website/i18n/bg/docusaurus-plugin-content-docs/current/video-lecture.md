---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Компонент за видео лекции, който показва видеоклипове, преплетени с интерактивни елементи.

## Опции

* __controls__ | `boolean`: указва дали да се показват елементите за управление на видеоплейърите. Default: `true`.
* __instructorView__ | `boolean`: контролира дали да се включи изглед на инструктор. Default: `true`.
* __linkToDashboard__ | `boolean`: контролира дали да се показва връзка към таблото за управление след приключване на видеолекцията. Default: `false`.
* __steps__ | `array (required)`: масив от URL адреси на видеоклипове и компоненти, които да се показват между тях. Default: `none`.
* __videoWidth__ | `(string|number)`: ширина на видеото. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: височина на видеото. Default: `'98vh'`.
* __style__ | `object`: CSS вграден стил. Default: `{}`.


## Примери

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

