---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponenta pro přehrávání mediálních souborů a obsahu z YouTube, SoundCloud a Vimeo.

## Možnosti

* __url__ | `string`: Adresa URL videa. Default: `''`.
* __controls__ | `boolean`: určuje, zda se mají zobrazit ovládací prvky přehrávače videa.. Default: `false`.
* __playing__ | `boolean`: označuje, zda se má automaticky spustit přehrávání videa. Default: `false`.
* __volume__ | `number`: hlasitost přehrávače. Default: `0.8`.
* __center__ | `boolean`: určuje, zda se má přehrávač videa vycentrovat.. Default: `true`.
* __height__ | `(string|number)`: výška hráče. Default: `360`.
* __width__ | `(string|number)`: šířka přehrávače. Default: `640`.
* __loop__ | `boolean`: ovládá, zda se má video po přehrání spustit znovu.. Default: `false`.
* __startTime__ | `number`: počet sekund, od kterých se má video spustit, nebo zlomek, pokud je hodnota mezi 0 a 1.. Default: `none`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onEnded__ | `function`: zpětné volání vyvolané po skončení videa. Default: `onEnded() {}`.
* __onPause__ | `function`: zpětné volání vyvolané při pozastavení videa. Default: `onPause() {}`.
* __onPlay__ | `function`: zpětné volání vyvolané při spuštění nebo obnovení přehrávání videa po pozastavení.. Default: `onPlay() {}`.
* __onStart__ | `function`: zpětné volání vyvolané po pozastavení videa. Default: `onStart() {}`.
* __onSeek__ | `function`: zpětné volání, když se média hledají s parametrem `seconds`. Default: `onSeek() {}`.


## Příklady

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



