---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponents, kas paredzēts multivides failu un satura atskaņošanai no pakalpojuma YouTube, SoundCloud un Vimeo.

## Iespējas

* __url__ | `string`: Videoklipa URL. Default: `''`.
* __controls__ | `boolean`: norāda, vai tiek rādīti video atskaņotāja vadības elementi.. Default: `false`.
* __playing__ | `boolean`: norāda, vai automātiski sākt video atskaņošanu.. Default: `false`.
* __volume__ | `number`: atskaņotāja skaļums. Default: `0.8`.
* __center__ | `boolean`: kontrolē, vai video atskaņotāju centrēt.. Default: `true`.
* __height__ | `(string|number)`: spēlētāja augstums. Default: `360`.
* __width__ | `(string|number)`: atskaņotāja platums. Default: `640`.
* __loop__ | `boolean`: kontrolē, vai pēc video atskaņošanas to sākt no jauna.. Default: `false`.
* __startTime__ | `number`: sekunžu skaits, no kura sākt video, vai daļa, ja vērtība ir no 0 līdz 1.. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onEnded__ | `function`: atsauces zvans, kas tiek izsaukts, kad video beidzas. Default: `onEnded() {}`.
* __onPause__ | `function`: atsauces zvans, kas tiek izsaukts, kad video tiek apturēts.. Default: `onPause() {}`.
* __onPlay__ | `function`: atsauces zvans, kas tiek izsaukts, kad video sāk vai atsāk atskaņošanu pēc pauzes.. Default: `onPlay() {}`.
* __onStart__ | `function`: atsauces zvans, kas tiek izsaukts, tiklīdz video tiek apturēts.. Default: `onStart() {}`.
* __onSeek__ | `function`: atgriezeniskais zvans, kad mediju meklēšana tiek izsaukta ar parametru `seconds`.. Default: `onSeek() {}`.


## Piemēri

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



