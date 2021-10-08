---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Een component voor het afspelen van mediabestanden en content van YouTube, SoundCloud en Vimeo.

## Opties

* __url__ | `string`: URL van de video. Default: `''`.
* __controls__ | `boolean`: geeft aan of er bedieningselementen van de videospeler moeten worden weergegeven. Default: `false`.
* __playing__ | `boolean`: geeft aan of de video automatisch moet worden afgespeeld. Default: `false`.
* __volume__ | `number`: volume van de speler. Default: `0.8`.
* __center__ | `boolean`: bepaalt of de videospeler moet worden gecentreerd. Default: `true`.
* __height__ | `(string|number)`: hoogte van de speler. Default: `360`.
* __width__ | `(string|number)`: breedte van de speler. Default: `640`.
* __loop__ | `boolean`: regelt of de video opnieuw wordt gestart nadat deze is afgespeeld. Default: `false`.
* __startTime__ | `number`: aantal seconden om de video te starten, of breuk als de waarde tussen 0 en 1 ligt. Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onEnded__ | `function`: terugbellen na afloop van de video. Default: `onEnded() {}`.
* __onPause__ | `function`: terugbellen aangeroepen wanneer de video pauzeert. Default: `onPause() {}`.
* __onPlay__ | `function`: callback aangeroepen wanneer de video begint of hervat wordt na het pauzeren. Default: `onPlay() {}`.
* __onStart__ | `function`: callback ingeroepen zodra de video pauzeert. Default: `onStart() {}`.
* __onSeek__ | `function`: terugbellen wanneer de media zoekt met `seconden` parameter. Default: `onSeek() {}`.


## Voorbeelden

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



