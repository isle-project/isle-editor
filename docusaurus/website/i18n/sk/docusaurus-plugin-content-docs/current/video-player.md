---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponent na prehrávanie mediálnych súborov a obsahu zo služieb YouTube, SoundCloud a Vimeo.

## Možnosti

* __url__ | `string`: URL adresa videa. Default: `''`.
* __controls__ | `boolean`: označuje, či sa majú zobraziť ovládacie prvky prehrávača videa.. Default: `false`.
* __playing__ | `boolean`: označuje, či sa má automaticky spustiť prehrávanie videa.. Default: `false`.
* __volume__ | `number`: hlasitosť prehrávača. Default: `0.8`.
* __center__ | `boolean`: ovláda, či sa má prehrávač videa vycentrovať.. Default: `true`.
* __height__ | `(string|number)`: výška hráča. Default: `360`.
* __width__ | `(string|number)`: šírka hráča. Default: `640`.
* __loop__ | `boolean`: ovláda, či sa má video po prehrávaní spustiť odznova.. Default: `false`.
* __startTime__ | `number`: počet sekúnd, od ktorých sa má video spustiť, alebo zlomok, ak je hodnota medzi 0 a 1. Default: `none`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onEnded__ | `function`: spätné volanie vyvolané po skončení videa. Default: `onEnded() {}`.
* __onPause__ | `function`: spätné volanie vyvolané pri pozastavení videa. Default: `onPause() {}`.
* __onPlay__ | `function`: spätné volanie vyvolané pri spustení alebo obnovení prehrávania videa po pozastavení. Default: `onPlay() {}`.
* __onStart__ | `function`: spätné volanie vyvolané po pozastavení videa. Default: `onStart() {}`.
* __onSeek__ | `function`: spätné volanie, keď sa hľadá médium s parametrom `seconds`. Default: `onSeek() {}`.


## Príklady

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



