---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponenta za predvajanje medijskih datotek in vsebine iz storitev YouTube, SoundCloud in Vimeo.

## Možnosti

* __url__ | `string`: URL videoposnetka. Default: `''`.
* __controls__ | `boolean`: označuje, ali naj se prikažejo nadzorni elementi predvajalnika videoposnetkov.. Default: `false`.
* __playing__ | `boolean`: označuje, ali naj se samodejno začne predvajanje videoposnetka.. Default: `false`.
* __volume__ | `number`: glasnost predvajalnika. Default: `0.8`.
* __center__ | `boolean`: nadzoruje, ali se predvajalnik videoposnetkov osredotoči.. Default: `true`.
* __height__ | `(string|number)`: višina igralca. Default: `360`.
* __width__ | `(string|number)`: širina predvajalnika. Default: `640`.
* __loop__ | `boolean`: nadzira, ali naj se videoposnetek po predvajanju začne znova.. Default: `false`.
* __startTime__ | `number`: število sekund, pri katerih se začne videoposnetek, ali delež, če je vrednost med 0 in 1. Default: `none`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onEnded__ | `function`: povratni klic, ki se sproži, ko se videoposnetek konča.. Default: `onEnded() {}`.
* __onPause__ | `function`: povratni klic, ki se sproži, ko se videoposnetek ustavi.. Default: `onPause() {}`.
* __onPlay__ | `function`: povratni klic, ki se sproži, ko se videoposnetek začne ali nadaljuje predvajanje po prekinitvi.. Default: `onPlay() {}`.
* __onStart__ | `function`: povratni klic, ki se sproži, ko se videoposnetek ustavi.. Default: `onStart() {}`.
* __onSeek__ | `function`: povratni klic, ko se mediji iščejo s parametrom `seconds`. Default: `onSeek() {}`.


## Primeri

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



