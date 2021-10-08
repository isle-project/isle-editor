---
id: video-player
title: Video Player
sidebar_label: Video Player
---

O componentă pentru redarea fișierelor media și a conținutului de pe YouTube, SoundCloud și Vimeo.

## Opțiuni

* __url__ | `string`: URL-ul videoclipului. Default: `''`.
* __controls__ | `boolean`: indică dacă trebuie afișate elementele de control ale playerului video. Default: `false`.
* __playing__ | `boolean`: indică dacă trebuie să înceapă automat redarea video. Default: `false`.
* __volume__ | `number`: volumul playerului. Default: `0.8`.
* __center__ | `boolean`: controlează dacă se centrează playerul video. Default: `true`.
* __height__ | `(string|number)`: înălțimea jucătorului. Default: `360`.
* __width__ | `(string|number)`: lățimea jucătorului. Default: `640`.
* __loop__ | `boolean`: controlează dacă videoclipul trebuie să înceapă din nou după ce a fost redat. Default: `false`.
* __startTime__ | `number`: numărul de secunde la care se începe înregistrarea video sau fracțiune dacă valoarea este cuprinsă între 0 și 1. Default: `none`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onEnded__ | `function`: callback invocat odată ce videoclipul se termină. Default: `onEnded() {}`.
* __onPause__ | `function`: callback invocat atunci când videoclipul se oprește. Default: `onPause() {}`.
* __onPlay__ | `function`: callback invocat atunci când videoclipul începe sau reia redarea după pauză. Default: `onPlay() {}`.
* __onStart__ | `function`: callback invocat odată ce videoclipul se oprește. Default: `onStart() {}`.
* __onSeek__ | `function`: callback atunci când media caută apelat cu parametrul `secunde`.. Default: `onSeek() {}`.


## Exemple

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



