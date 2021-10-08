---
id: video-player
title: Video Player
sidebar_label: Video Player
---

En komponent för att spela upp mediefiler och innehåll från YouTube, SoundCloud och Vimeo.

## Alternativ

* __url__ | `string`: Videons webbadress (URL). Default: `''`.
* __controls__ | `boolean`: anger om videoavspelarens kontrollelement ska visas.. Default: `false`.
* __playing__ | `boolean`: anger om videon ska börja spelas upp automatiskt eller inte. Default: `false`.
* __volume__ | `number`: spelarens volym. Default: `0.8`.
* __center__ | `boolean`: kontrollerar om videospelaren ska centreras. Default: `true`.
* __height__ | `(string|number)`: spelarens höjd. Default: `360`.
* __width__ | `(string|number)`: spelarens bredd. Default: `640`.
* __loop__ | `boolean`: kontrollerar om videon ska startas på nytt efter att den har spelats upp. Default: `false`.
* __startTime__ | `number`: Antal sekunder som videon ska börja, eller bråkdel om värdet är mellan 0 och 1.. Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onEnded__ | `function`: callback som aktiveras när videon slutar. Default: `onEnded() {}`.
* __onPause__ | `function`: callback som aktiveras när videon pausas. Default: `onPause() {}`.
* __onPlay__ | `function`: callback som aktiveras när videon startar eller återupptar uppspelningen efter en paus.. Default: `onPlay() {}`.
* __onStart__ | `function`: callback som aktiveras när videon pausar. Default: `onStart() {}`.
* __onSeek__ | `function`: återkallelse när media söker anropas med parametern `seconds`.. Default: `onSeek() {}`.


## Exempel

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



