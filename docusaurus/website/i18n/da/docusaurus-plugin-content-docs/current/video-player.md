---
id: video-player
title: Video Player
sidebar_label: Video Player
---

En komponent til afspilning af mediefiler og indhold fra YouTube, SoundCloud og Vimeo.

## Indstillinger

* __url__ | `string`: URL til videoen. Default: `''`.
* __controls__ | `boolean`: angiver, om videoafspillerens kontrolelementer skal vises. Default: `false`.
* __playing__ | `boolean`: angiver, om videoen skal afspilles automatisk. Default: `false`.
* __volume__ | `number`: spillerens lydstyrke. Default: `0.8`.
* __center__ | `boolean`: styrer, om videoafspilleren skal centreres. Default: `true`.
* __height__ | `(string|number)`: spillerens højde. Default: `360`.
* __width__ | `(string|number)`: spillerens bredde. Default: `640`.
* __loop__ | `boolean`: styrer, om videoen skal starte forfra, efter at den er blevet afspillet. Default: `false`.
* __startTime__ | `number`: antal sekunder, hvor videoen skal starte, eller en brøkdel, hvis værdien er mellem 0 og 1. Default: `none`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onEnded__ | `function`: callback, der påkaldes, når videoen slutter. Default: `onEnded() {}`.
* __onPause__ | `function`: callback, der påkaldes, når videoen holder pause. Default: `onPause() {}`.
* __onPlay__ | `function`: callback, der påkaldes, når videoen starter eller genoptager afspilningen efter en pause. Default: `onPlay() {}`.
* __onStart__ | `function`: callback, der påkaldes, når videoen holder pause. Default: `onStart() {}`.
* __onSeek__ | `function`: callback, når medie søger kaldes med parameteren `seconds`.. Default: `onSeek() {}`.


## Eksempler

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



