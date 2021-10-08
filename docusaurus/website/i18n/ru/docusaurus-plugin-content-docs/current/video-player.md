---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Компонент для воспроизведения мультимедийных файлов и контента с YouTube, SoundCloud и Vimeo.

## Варианты

* __url__ | `string`: URL-адрес видеозаписи. Default: `''`.
* __controls__ | `boolean`: указывает, следует ли отображать элементы управления видеоплеера. Default: `false`.
* __playing__ | `boolean`: указывает, следует ли автоматически начинать воспроизведение видео. Default: `false`.
* __volume__ | `number`: объём плеера. Default: `0.8`.
* __center__ | `boolean`: управляет тем, по центру ли видео-проигрыватель. Default: `true`.
* __height__ | `(string|number)`: рост игрока. Default: `360`.
* __width__ | `(string|number)`: ширина игрока. Default: `640`.
* __loop__ | `boolean`: контролирует, начинать ли видео заново после того, как оно было воспроизведено. Default: `false`.
* __startTime__ | `number`: количество секунд, в течение которых будет запущено видео, или дробь, если значение от 0 до 1. Default: `none`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onEnded__ | `function`: обратный вызов по окончании видео. Default: `onEnded() {}`.
* __onPause__ | `function`: обратный вызов, когда видео приостанавливается. Default: `onPause() {}`.
* __onPlay__ | `function`: вызов обратного вызова при запуске или возобновлении воспроизведения видео после паузы. Default: `onPlay() {}`.
* __onStart__ | `function`: обратный вызов после приостановки видео. Default: `onStart() {}`.
* __onSeek__ | `function`: обратный вызов, когда медиа-поиск вызывается с помощью параметра `секунды''. Default: `onSeek() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Autoplay', value: 'Autoplay' },
        { label: 'Start Time', value: 'startTime' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'With Callback on Pause', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    playing
    controls
/>
```
</TabItem>

<TabItem value="startTime">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    startTime={28}
/>
```
</TabItem>


<TabItem value="controlledSize">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    width={520}
    height={290}
    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}
/>
```
</TabItem>


<TabItem value="withCallback">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    onPause={ function(){ alert('Do it again') }}
/>
```
</TabItem>

</Tabs>



