---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponentas, skirtas medijos failams ir turiniui iš "YouTube", "SoundCloud" ir "Vimeo" atkurti.

## Parinktys

* __url__ | `string`: Vaizdo įrašo URL adresas. Default: `''`.
* __controls__ | `boolean`: nurodo, ar rodyti vaizdo grotuvo valdymo elementus.. Default: `false`.
* __playing__ | `boolean`: nurodo, ar automatiškai pradėti atkurti vaizdo įrašą.. Default: `false`.
* __volume__ | `number`: grotuvo garsumas. Default: `0.8`.
* __center__ | `boolean`: kontroliuoja, ar centruoti vaizdo grotuvą.. Default: `true`.
* __height__ | `(string|number)`: žaidėjo aukštis. Default: `360`.
* __width__ | `(string|number)`: žaidėjo plotis. Default: `640`.
* __loop__ | `boolean`: kontroliuoja, ar paleisti vaizdo įrašą iš naujo po to, kai jis buvo paleistas.. Default: `false`.
* __startTime__ | `number`: sekundžių skaičius, nuo kurio pradedamas vaizdo įrašas, arba trupmena, jei reikšmė yra nuo 0 iki 1.. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onEnded__ | `function`: atgalinis skambutis, iškviečiamas pasibaigus vaizdo įrašui. Default: `onEnded() {}`.
* __onPause__ | `function`: grįžtamasis skambutis, inicijuojamas, kai vaizdo įrašas sustabdomas.. Default: `onPause() {}`.
* __onPlay__ | `function`: grįžtamasis skambutis, inicijuojamas, kai vaizdo įrašas pradedamas arba vėl pradedamas atkurti po pauzės.. Default: `onPlay() {}`.
* __onStart__ | `function`: atgalinis skambutis, iškviečiamas, kai vaizdo įrašas sustabdomas.. Default: `onStart() {}`.
* __onSeek__ | `function`: grįžtamasis ryšys, kai žiniasklaida ieško iškviečiama su parametru `seconds`.. Default: `onSeek() {}`.


## Pavyzdžiai

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



