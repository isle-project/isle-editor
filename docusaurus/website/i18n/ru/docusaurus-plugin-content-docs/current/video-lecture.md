---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Компонент видео лекции, который отображает видео, перемежающееся с интерактивными элементами.

## Options

* __controls__ | `boolean`: указывает, следует ли отображать элементы управления видеоплеерами.. Default: `true`.
* __instructorView__ | `boolean`: контроль включает ли мнение инструктора. Default: `true`.
* __linkToDashboard__ | `boolean`: управляет отображением ссылки на приборную панель после завершения видеолекции. Default: `false`.
* __steps__ | `array (required)`: массив URL-адресов видео и компонентов для отображения между ними. Default: `none`.
* __videoWidth__ | `(string|number)`: ширина видео. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: высота видео. Default: `'98vh'`.
* __style__ | `object`: встроенный стиль CSS. Default: `{}`.


## Examples

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

