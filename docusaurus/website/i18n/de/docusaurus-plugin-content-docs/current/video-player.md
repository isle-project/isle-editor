---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Eine Komponente zur Wiedergabe von Mediendateien und Inhalten von YouTube, SoundCloud und Vimeo.

## Optionen

* __url__ | `string`: URL des Videos. Default: `''`.
* __controls__ | `boolean`: gibt an, ob Bedienelemente des Videoplayers angezeigt werden sollen. Default: `false`.
* __playing__ | `boolean`: gibt an, ob die Wiedergabe des Videos automatisch gestartet werden soll. Default: `false`.
* __volume__ | `number`: Lautstärke des Players. Default: `0.8`.
* __center__ | `boolean`: steuert, ob der Videoplayer zentriert werden soll. Default: `true`.
* __height__ | `(string|number)`: Höhe des Players. Default: `360`.
* __width__ | `(string|number)`: Breite des Players. Default: `640`.
* __loop__ | `boolean`: steuert, ob das Video nach dem Abspielen neu gestartet werden soll. Default: `false`.
* __startTime__ | `number`: Anzahl der Sekunden, bei denen das Video gestartet werden soll, oder Bruchteil, wenn der Wert zwischen 0 und 1 liegt. Default: `none`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onEnded__ | `function`: Callback, der aufgerufen wird, sobald das Video endet. Default: `onEnded() {}`.
* __onPause__ | `function`: Callback, der aufgerufen wird, wenn das Video pausiert. Default: `onPause() {}`.
* __onPlay__ | `function`: Callback, der aufgerufen wird, wenn das Video startet oder die Wiedergabe nach dem Anhalten wieder aufgenommen wird. Default: `onPlay() {}`.
* __onStart__ | `function`: Callback, der aufgerufen wird, sobald das Video pausiert. Default: `onStart() {}`.
* __onSeek__ | `function`: Callback, wenn Mediensuchen mit Parameter `Sekunden` aufgerufen werden. Default: `onSeek() {}`.


## Beispiele

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



