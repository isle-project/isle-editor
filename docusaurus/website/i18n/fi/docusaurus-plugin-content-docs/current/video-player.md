---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponentti mediatiedostojen ja sisällön toistamiseen YouTubesta, SoundCloudista ja Vimeosta.

## Vaihtoehdot

* __url__ | `string`: Videon URL-osoite. Default: `''`.
* __controls__ | `boolean`: osoittaa, näytetäänkö videosoittimen ohjauselementit.. Default: `false`.
* __playing__ | `boolean`: ilmoittaa, aloitetaanko videon toisto automaattisesti. Default: `false`.
* __volume__ | `number`: soittimen äänenvoimakkuus. Default: `0.8`.
* __center__ | `boolean`: säätää, keskitetäänkö videosoitin. Default: `true`.
* __height__ | `(string|number)`: pelaajan korkeus. Default: `360`.
* __width__ | `(string|number)`: soittimen leveys. Default: `640`.
* __loop__ | `boolean`: valvoo, aloitetaanko video uudelleen sen jälkeen, kun se on toistettu.. Default: `false`.
* __startTime__ | `number`: sekuntien määrä, josta video aloitetaan, tai murto-osa, jos arvo on 0 ja 1 välillä.. Default: `none`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onEnded__ | `function`: callback, joka käynnistyy videon päätyttyä. Default: `onEnded() {}`.
* __onPause__ | `function`: callback, joka käynnistyy, kun video pysähtyy.. Default: `onPause() {}`.
* __onPlay__ | `function`: callback, joka käynnistyy, kun video käynnistyy tai jatkuu tauottamisen jälkeen.. Default: `onPlay() {}`.
* __onStart__ | `function`: Callback, joka käynnistyy, kun video pysähtyy.. Default: `onStart() {}`.
* __onSeek__ | `function`: callback kun media hakee kutsutaan `sekuntia` parametrin kanssa. Default: `onSeek() {}`.


## Esimerkkejä

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



