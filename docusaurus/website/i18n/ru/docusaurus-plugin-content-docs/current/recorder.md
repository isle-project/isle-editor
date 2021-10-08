---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

ISLE компонент для записи аудио, экрана и видео.

## Варианты

* __audio__ | `boolean`: указывает, следует ли записывать аудио. Default: `false`.
* __camera__ | `boolean`: указывает, следует ли записывать веб-камеру. Default: `false`.
* __screen__ | `boolean`: указывает, нужно ли снимать экран. Default: `false`.
* __autostart__ | `boolean`: указывает, следует ли начинать запись немедленно. Default: `false`.
* __downloadable__ | `boolean`: указывает, должны ли пользователи иметь возможность загрузить запись. Default: `false`.
* __uploadable__ | `boolean`: указывает, должны ли пользователи иметь возможность загружать запись на сервер. Default: `false`.
* __bitsPerSecond__ | `number`: биты в секунду. Default: `1280000`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



