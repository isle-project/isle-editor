---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Компонент на ISLE за запис на аудио, екран и видео.

## Опции

* __audio__ | `boolean`: указва дали трябва да се записва звук.. Default: `false`.
* __camera__ | `boolean`: показва дали уеб камерата трябва да се записва. Default: `false`.
* __screen__ | `boolean`: указва дали екранът трябва да бъде заснет. Default: `false`.
* __autostart__ | `boolean`: показва дали записът трябва да започне незабавно. Default: `false`.
* __downloadable__ | `boolean`: посочва дали потребителите трябва да могат да изтеглят записа.. Default: `false`.
* __uploadable__ | `boolean`: посочва дали потребителите трябва да могат да качват записа на сървъра.. Default: `false`.
* __bitsPerSecond__ | `number`: битове в секунда. Default: `1280000`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



