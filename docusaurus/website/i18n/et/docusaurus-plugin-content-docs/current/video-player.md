---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponent meediafailide ja YouTube'i, SoundCloudi ja Vimeo sisu esitamiseks.

## Valikud

* __url__ | `string`: Video URL aadress. Default: `''`.
* __controls__ | `boolean`: näitab, kas kuvada videomängija juhtelemente. Default: `false`.
* __playing__ | `boolean`: näitab, kas video esitamine peab automaatselt algama. Default: `false`.
* __volume__ | `number`: mängija helitugevus. Default: `0.8`.
* __center__ | `boolean`: kontrollib, kas videomängija tsentreeritakse. Default: `true`.
* __height__ | `(string|number)`: mängija kõrgus. Default: `360`.
* __width__ | `(string|number)`: mängija laius. Default: `640`.
* __loop__ | `boolean`: kontrollib, kas video käivitatakse uuesti pärast selle esitamist.. Default: `false`.
* __startTime__ | `number`: sekundite arv, millest video käivitatakse, või murdosa, kui väärtus jääb vahemikku 0-1. Default: `none`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onEnded__ | `function`: callback, mis kutsutakse üles pärast video lõppu. Default: `onEnded() {}`.
* __onPause__ | `function`: callback, mida kutsutakse esile, kui video pausib. Default: `onPause() {}`.
* __onPlay__ | `function`: callback, mida kutsutakse üles, kui video algab või jätkab mängimist pärast pausi. Default: `onPlay() {}`.
* __onStart__ | `function`: callback, mis kutsutakse esile, kui video peatub. Default: `onStart() {}`.
* __onSeek__ | `function`: callback, kui meedia soovib kutsuda `sekundite` parameetriga. Default: `onSeek() {}`.


## Näited

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



