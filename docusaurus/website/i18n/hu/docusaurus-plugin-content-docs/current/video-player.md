---
id: video-player
title: Video Player
sidebar_label: Video Player
---

A YouTube, SoundCloud és Vimeo médiafájlok és tartalmak lejátszására szolgáló komponens.

## Opciók

* __url__ | `string`: A videó URL címe. Default: `''`.
* __controls__ | `boolean`: jelzi, hogy megjelenítse-e a videólejátszó vezérlőelemeit. Default: `false`.
* __playing__ | `boolean`: jelzi, hogy automatikusan elinduljon-e a videó lejátszása. Default: `false`.
* __volume__ | `number`: a lejátszó hangereje. Default: `0.8`.
* __center__ | `boolean`: szabályozza, hogy a videólejátszó középre kerüljön-e. Default: `true`.
* __height__ | `(string|number)`: a játékos magassága. Default: `360`.
* __width__ | `(string|number)`: a játékos szélessége. Default: `640`.
* __loop__ | `boolean`: szabályozza, hogy a lejátszás után újrainduljon-e a videó. Default: `false`.
* __startTime__ | `number`: a másodpercek száma, amelynél a videó elindul, vagy tört része, ha az érték 0 és 1 között van.. Default: `none`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onEnded__ | `function`: callback, amely a videó befejezése után hívódik. Default: `onEnded() {}`.
* __onPause__ | `function`: callback, amelyet a videó szüneteltetésénél hívnak meg. Default: `onPause() {}`.
* __onPlay__ | `function`: visszahívás, amikor a videó elindul vagy szünet után folytatódik a lejátszás. Default: `onPlay() {}`.
* __onStart__ | `function`: callback hívás a videó szüneteltetése után. Default: `onStart() {}`.
* __onSeek__ | `function`: visszahívás, amikor a médiakeresés a "másodperc" paraméterrel történik. Default: `onSeek() {}`.


## Példák

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



